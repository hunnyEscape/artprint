'use client';

import React, { useEffect, useState, useRef } from 'react';
import { Container } from '@/components/layout/container';
import { useShowcase } from '@/contexts/ShowcaseContext';
import { Product } from '@/data/featured-products';
import { useInView } from 'react-intersection-observer';
import { ProductDetails } from './ProductDetails';
import { InteriorPreview } from './InteriorPreview';

interface EnhancedShowcaseSectionProps {
	sectionId: string;
	title: string;
	subtitle?: string;
	products: Product[];
	initialProductIndex?: number;
	showInteriorPreview?: boolean;
	layoutType?: 'standard' | 'centered' | 'split' | 'immersive';
}

export const EnhancedShowcaseSection: React.FC<EnhancedShowcaseSectionProps> = ({
	sectionId,
	title,
	subtitle,
	products,
	initialProductIndex = 0,
	showInteriorPreview = true,
	layoutType = 'standard'
}) => {
	const {
		activeSection,
		setActiveSection,
		setActiveProduct,
		registerSection,
		unregisterSection
	} = useShowcase();

	const [selectedProductIndex, setSelectedProductIndex] = useState(initialProductIndex);
	const sectionRef = useRef<HTMLDivElement>(null);

	// Intersection Observer で可視状態を検出
	const { ref, inView } = useInView({
		threshold: 0.3, // 30%以上画面内に入ったら可視と判断
		triggerOnce: false
	});

	// ref を複数のエレメントにアタッチするためのコールバック
	const setRefs = React.useCallback((el: HTMLDivElement | null) => {
		// sectionRef を設定
		sectionRef.current = el;
		// react-intersection-observer の ref も設定
		if (typeof ref === 'function') {
			ref(el);
		}
	}, [ref]); // ref を依存配列に追加

	// セクションの登録と解除
	useEffect(() => {
		registerSection(sectionId, products);

		return () => {
			unregisterSection(sectionId);
		};
	}, [sectionId, products, registerSection, unregisterSection]);

	// セクションが表示領域に入ったらアクティブにする
	useEffect(() => {
		if (inView && activeSection !== sectionId) {
			setActiveSection(sectionId);
			setActiveProduct(products[selectedProductIndex]);
		}
	}, [inView, activeSection, sectionId, products, selectedProductIndex, setActiveSection, setActiveProduct]);

	// 製品切り替え
	const handleProductChange = (index: number) => {
		setSelectedProductIndex(index);
		setActiveProduct(products[index]);
	};

	// このセクションがアクティブかどうか
	const isActive = activeSection === sectionId;

	// 選択中の製品
	const selectedProduct = products[selectedProductIndex] || null;

	// 製品のアクセントカラーに基づくスタイル
	const getAccentColorStyle = () => {
		if (!selectedProduct || !selectedProduct.accentColor) return {};

		return {
			borderColor: selectedProduct.accentColor,
			backgroundColor: `${selectedProduct.accentColor}10` // 10%の透明度
		};
	};

	// レイアウトタイプに基づくクラス
	const getLayoutClasses = () => {
		switch (layoutType) {
			case 'centered':
				return 'text-center max-w-4xl mx-auto';
			case 'split':
				return 'grid grid-cols-1 md:grid-cols-2 gap-8 items-center';
			case 'immersive':
				return 'relative';
			default:
				return '';
		}
	};

	return (
		<section
			ref={setRefs}
			id={`showcase-${sectionId}`}
			className={`relative min-h-screen pt-24 pb-32 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-70'
				}`}
			style={{
				scrollSnapAlign: 'start', // スクロールスナップ
			}}
		>
			<Container>
				{/* セクションヘッダー */}
				<div className="mb-16 text-center">
					<h2 className="font-display text-3xl font-bold text-white md:text-4xl mb-4 drop-shadow-md">
						{title}
					</h2>
					{subtitle && (
						<p className="text-white/80 text-lg max-w-2xl mx-auto drop-shadow-md">
							{subtitle}
						</p>
					)}
				</div>

				{/* 商品ナビゲーション */}
				<div className="flex flex-wrap items-center justify-center mb-12 overflow-x-auto pb-4 gap-3">
					{products.map((product, index) => (
						<button
							key={product.id}
							className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors ${index === selectedProductIndex
								? 'bg-white text-neutral-900 shadow-md'
								: 'bg-white/20 text-white hover:bg-white/40'
								}`}
							onClick={() => handleProductChange(index)}
							style={index === selectedProductIndex ? { backgroundColor: selectedProduct?.accentColor || 'white' } : {}}
						>
							{product.title}
						</button>
					))}
				</div>

				{/* インテリアプレビュー（オプション） */}
				{showInteriorPreview && selectedProduct && (
					<InteriorPreview product={selectedProduct} />
				)}

				{/* コンテンツレイアウト */}
				<div className={getLayoutClasses()}>
					{/* 製品詳細表示 */}
					{selectedProduct && (
						<ProductDetails product={selectedProduct} />
					)}
				</div>
			</Container>

			{/* 装飾要素（レイアウトによって条件付き表示） */}
			{layoutType === 'immersive' && (
				<div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
			)}
		</section>
	);
};
'use client';

import React, { useRef, useEffect, useState, useMemo } from 'react';
import Image from 'next/image';
import { Product } from '@/data/featured-products';
import { ProductDetails } from './ProductDetails';
import { InteriorPreview } from './InteriorPreview';
import { Container } from '@/components/layout/container';
import { useImagePreload } from '@/hooks/useImagePreload';
import { useShowcase } from '@/contexts/ShowcaseContext';

interface ProductShowcaseSectionProps {
	product: Product;
	index: number;
}

export const ProductShowcaseSection: React.FC<ProductShowcaseSectionProps> = ({
	product,
	index
}) => {
	const { setActiveProduct } = useShowcase();
	const sectionRef = useRef<HTMLDivElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);
	const [isVisible, setIsVisible] = useState(false);

	// 各製品セクションの一意のID
	const sectionId = useMemo(() => `product-${product.id}`, [product.id]);

	// メイン画像URLと読み込み状態
	const mainImageUrl = useMemo(() => {
		const mainImage = product.images.find(img => img.type === 'main');
		return mainImage?.url || '';
	}, [product.images]);

	const isImageLoaded = useImagePreload(mainImageUrl);

	// セクションのビジビリティをスクロール位置に応じて監視
	useEffect(() => {
		const handleScroll = () => {
			if (!sectionRef.current) return;

			const rect = sectionRef.current.getBoundingClientRect();
			// セクションが画面の中央付近にあるかどうかを判定
			const isCentrallyVisible =
				rect.top <= window.innerHeight / 2 &&
				rect.bottom >= window.innerHeight / 2;

			if (isCentrallyVisible && !isVisible) {
				setIsVisible(true);
				// このセクションがビューポートの中央にあるとき、
				// アクティブな製品として設定
				setActiveProduct(product);
			} else if (!isCentrallyVisible && isVisible) {
				setIsVisible(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll(); // 初期チェック

		return () => window.removeEventListener('scroll', handleScroll);
	}, [product, setActiveProduct, isVisible]);

	// 製品レイアウトタイプに応じたスタイル
	const styles = useMemo(() => {
		const layoutType = product.layoutType as 'standard' | 'dark' | 'minimalist' | 'immersive';
		const accentColor = product.accentColor || '#3B82F6';

		switch (layoutType) {
			case 'dark':
				return {
					contentBg: 'bg-neutral-900',
					textColor: 'text-white',
					accentGradient: `linear-gradient(to right, ${accentColor}22, ${accentColor}44)`,
				};
			case 'minimalist':
				return {
					contentBg: 'bg-white',
					textColor: 'text-neutral-900',
					accentGradient: `linear-gradient(to right, ${accentColor}11, ${accentColor}22)`,
				};
			case 'immersive':
				return {
					contentBg: 'bg-black',
					textColor: 'text-white',
					accentGradient: `linear-gradient(135deg, ${accentColor}33, transparent)`,
				};
			case 'standard':
			default:
				return {
					contentBg: 'bg-neutral-100',
					textColor: 'text-neutral-900',
					accentGradient: `linear-gradient(to right, ${accentColor}22, transparent)`,
				};
		}
	}, [product.layoutType, product.accentColor]);

	return (
		<section
			id={sectionId}
			ref={sectionRef}
			className="product-showcase relative"
		>
			{/* タイトルセクション - 最初の画面で表示するための高さ設定 */}
			<div className="relative h-[100vh] flex items-end">
				<div className="absolute left-0 bottom-0 w-full p-8">
					<Container>
						<h2 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-2">
							{product.title}
						</h2>
						{product.subtitle && (
							<p className="text-xl text-white/90 max-w-xl drop-shadow-md">
								{product.subtitle}
							</p>
						)}
					</Container>
				</div>
			</div>

			{/* 製品紹介セクション */}
			<div
				ref={contentRef}
				className={`relative w-full min-h-screen ${styles.contentBg} ${styles.textColor}`}
				style={{
					background: styles.accentGradient,
				}}
			>
				<Container>
					<div className="py-20">
						{/* インテリアプレビュー */}
						<InteriorPreview product={product} />

						{/* 製品詳細 */}
						<div className="mt-16">
							<ProductDetails product={product} />
						</div>

						{/* 追加情報（オプション） */}
						<div className="mt-20 p-8 bg-white rounded-xl shadow-md">
							<h3 className="text-2xl font-bold mb-4 text-neutral-900">この壁紙について</h3>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
								<div>
									<h4 className="text-lg font-medium mb-2 text-neutral-900">こんな場所におすすめ</h4>
									<ul className="space-y-2">
										{product.tags.map((tag, idx) => (
											<li key={idx} className="flex items-center gap-2 text-neutral-700">
												<span className="w-2 h-2 rounded-full" style={{ backgroundColor: product.accentColor || '#3B82F6' }}></span>
												<span>{tag}テイストの部屋</span>
											</li>
										))}
									</ul>
								</div>
								<div>
									<h4 className="text-lg font-medium mb-2 text-neutral-900">仕様</h4>
									<ul className="space-y-2">
										{Object.entries(product.specifications).map(([key, value], idx) => (
											<li key={idx} className="flex justify-between border-b pb-1">
												<span className="text-neutral-500">{key}</span>
												<span className="font-medium text-neutral-900">{value}</span>
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</div>
		</section>
	);
};
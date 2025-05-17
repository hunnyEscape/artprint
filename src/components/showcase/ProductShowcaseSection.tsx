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
	totalProducts: number;
}

export const ProductShowcaseSection: React.FC<ProductShowcaseSectionProps> = ({
	product,
	index,
	totalProducts
}) => {
	const { setActiveProduct } = useShowcase();
	const sectionRef = useRef<HTMLDivElement>(null);
	const titleSectionRef = useRef<HTMLDivElement>(null);
	const [isActive, setIsActive] = useState(false);

	// 各製品セクションの一意のID
	const sectionId = useMemo(() => `product-${product.id}`, [product.id]);

	// メイン画像URLと読み込み状態
	const mainImageUrl = useMemo(() => {
		const mainImage = product.images.find(img => img.type === 'main');
		return mainImage?.url || '';
	}, [product.images]);

	const isImageLoaded = useImagePreload(mainImageUrl);

	// セクションが画面中央に来ているかを監視
	useEffect(() => {
		const handleScroll = () => {
			if (!titleSectionRef.current) return;

			const rect = titleSectionRef.current.getBoundingClientRect();
			const viewportHeight = window.innerHeight;
			
			// セクションの中央と画面の中央のY座標を計算
			const sectionCenterY = rect.top + rect.height / 2;
			const viewportCenterY = viewportHeight / 2;
			
			// セクションの中央が画面の中央に近いかどうかをチェック
			// 許容誤差を設定して、完全に一致しなくても「中央」と見なす
			const tolerance = viewportHeight * 0.2; // 画面高さの20%の許容範囲
			const isInCenter = Math.abs(sectionCenterY - viewportCenterY) < tolerance;
			
			if (isInCenter && !isActive) {
				setIsActive(true);
				setActiveProduct(product);
				console.log(`${product.title} が画面中央に配置されました - 背景をアクティブ化`);
			} else if (!isInCenter && isActive) {
				setIsActive(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		window.addEventListener('resize', handleScroll);
		handleScroll(); // 初期チェック
		
		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', handleScroll);
		};
	}, [product, setActiveProduct, isActive]);

	return (
		<section
			id={sectionId}
			ref={sectionRef}
			className="product-showcase relative"
			data-index={index}
			data-product-id={product.id}
			data-is-active={isActive}
		>
			{/* タイトルセクション - 最初の画面で表示するための高さ設定 */}
			<div 
				ref={titleSectionRef}
				className="relative h-[120vh] flex items-center justify-center"
			>
				<div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
					<Container>
						<h2 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-4">
							{product.title}
						</h2>
						{product.subtitle && (
							<p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
								{product.subtitle}
							</p>
						)}
					</Container>
				</div>
			</div>

			{/* 製品紹介セクション */}
			<div
				className="relative w-full min-h-screen bg-white text-neutral-900"
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
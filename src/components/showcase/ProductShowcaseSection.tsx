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
	const { setActiveProduct, isTransitioning, activeProduct } = useShowcase();
	const sectionRef = useRef<HTMLDivElement>(null);
	const titleSectionRef = useRef<HTMLDivElement>(null);
	const titleTriggerRef = useRef<HTMLDivElement>(null); // タイトルセクションに関連付けられたトリガー
	const detailsSectionRef = useRef<HTMLDivElement>(null);

	const [isActive, setIsActive] = useState(false);
	const [lastTriggerTime, setLastTriggerTime] = useState(0);

	// 各製品セクションの一意のID
	const sectionId = useMemo(() => `product-${product.id}`, [product.id]);

	// メイン画像URLと読み込み状態
	const mainImageUrl = useMemo(() => {
		const mainImage = product.images.find(img => img.type === 'main');
		return mainImage?.url || '';
	}, [product.images]);

	const isImageLoaded = useImagePreload(mainImageUrl);

	// トリガーハンドラー - 即時応答するよう最適化
	const handleProductTrigger = () => {
		const now = Date.now();
		if (
			isTransitioning ||
			now - lastTriggerTime < 500 || // デバウンス時間
			(activeProduct && activeProduct.id === product.id)
		) {
			return;
		}

		// console.log(`${product.title} のトリガー検出: 背景更新`);
		setLastTriggerTime(now);
		setIsActive(true);

		// 即時に製品をアクティブに設定
		setActiveProduct(product);
	};

	// タイトルトリガーの監視
	useEffect(() => {
		if (!titleTriggerRef.current) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						// console.log(`${product.title} - タイトルトリガー検出: 背景更新`);
						handleProductTrigger();
					}
				});
			},
			{
				// トリガーを少し大きめに設定して、タイトルセクションの前で検出
				threshold: 0 // 1ピクセルでも表示されたら反応
			}
		);

		observer.observe(titleTriggerRef.current);

		return () => observer.disconnect();
	}, [product, handleProductTrigger]);

	// 非アクティブ化の処理
	useEffect(() => {
		if (activeProduct && activeProduct.id !== product.id && isActive) {
			setIsActive(false);
		}
	}, [activeProduct, product.id, isActive]);

	return (
		<section
			id={sectionId}
			ref={sectionRef}
			className="product-showcase relative"
			data-index={index}
			data-product-id={product.id}
			data-is-active={isActive}
		>
			{/* タイトルセクション */}
			<div
				ref={titleSectionRef}
				className="relative h-[120vh] flex items-center justify-center"
			>
				{/* タイトルセクション上にオーバーレイするトリガーゾーン */}
				<div
					ref={titleTriggerRef}
					className="absolute inset-0 -top-[500px] -bottom-[500px]" // 上下に300pxはみ出す
					aria-hidden="true"
					data-trigger="title"
					style={{
						pointerEvents: 'none',
						opacity: 0
					}}
				/>

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
				ref={detailsSectionRef}
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
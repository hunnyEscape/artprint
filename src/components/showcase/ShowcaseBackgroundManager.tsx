'use client';

import React, { useEffect, useState } from 'react';
import { useShowcase } from '@/contexts/ShowcaseContext';
import { Product } from '@/data/featured-products';
import Image from 'next/image';

export const ShowcaseBackgroundManager: React.FC = () => {
	const { activeProduct } = useShowcase();
	const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
	const [previousProduct, setPreviousProduct] = useState<Product | null>(null);
	const [imageLoaded, setImageLoaded] = useState(false);
	const [isTransitioning, setIsTransitioning] = useState(false);

	// 背景トランジションを管理
	useEffect(() => {
		if (activeProduct && (!currentProduct || currentProduct.id !== activeProduct.id)) {
			console.log("背景トランジション開始:", activeProduct.title);
			
			// 現在の製品を前の製品として保存
			if (currentProduct) {
				setPreviousProduct(currentProduct);
			}
			
			// トランジション状態を設定
			setIsTransitioning(true);
			
			// 新しい製品を設定
			setCurrentProduct(activeProduct);
			
			// トランジション完了後に前の背景をクリア
			const timer = setTimeout(() => {
				setIsTransitioning(false);
				setPreviousProduct(null);
			}, 800); // トランジション時間に合わせる
			
			return () => clearTimeout(timer);
		}
	}, [activeProduct, currentProduct]);

	// メイン画像URLを取得する関数
	const getMainImage = (product: Product) => {
		const mainImage = product.images.find(img => img.type === 'main');
		return mainImage?.url || '';
	};

	// 背景がない場合のフォールバック
	if (!currentProduct) {
		return (
			<div
				className="fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-gray-800 to-gray-900"
				style={{ zIndex: -1 }}
			/>
		);
	}

	const currentImageUrl = getMainImage(currentProduct);
	const previousImageUrl = previousProduct ? getMainImage(previousProduct) : '';

	return (
		<div
			className="fixed top-0 left-0 w-full h-screen overflow-hidden"
			style={{ zIndex: -1 }}
		>
			{/* 現在の背景画像 */}
			{currentImageUrl && (
				<div 
					className={`absolute inset-0 transition-opacity duration-800 ease-in-out ${
						isTransitioning ? 'opacity-100' : 'opacity-100'
					}`}
				>
					<Image
						src={currentImageUrl}
						alt={currentProduct.title}
						fill
						priority
						sizes="100vw"
						className="object-cover"
						onLoad={() => setImageLoaded(true)}
						onError={(e) => {
							console.error("画像読み込みエラー:", currentImageUrl);
							e.currentTarget.style.display = 'none';
						}}
					/>
					
					{/* 均一な薄い透明のオーバーレイ */}
					<div className="absolute inset-0 bg-black/40" />
				</div>
			)}
			
			{/* 前の背景画像 (トランジション中のみ表示) */}
			{previousImageUrl && isTransitioning && (
				<div 
					className="absolute inset-0 transition-opacity duration-800 ease-in-out opacity-0"
				>
					<Image
						src={previousImageUrl}
						alt={previousProduct?.title || ""}
						fill
						sizes="100vw"
						className="object-cover"
					/>
					
					{/* 均一な薄い透明のオーバーレイ */}
					<div className="absolute inset-0 bg-black/40" />
				</div>
			)}
			
			{/* 画像読み込み中のプレースホルダー (初回読み込み時のみ) */}
			{!imageLoaded && (
				<div
					className="absolute inset-0 flex items-center justify-center"
					style={{
						background: `linear-gradient(135deg, ${currentProduct.accentColor || '#3B82F6'}33, ${currentProduct.accentColor || '#3B82F6'}11)`,
					}}
				>
					<div className="text-center">
						<div className="animate-pulse mb-4">
							<svg className="w-16 h-16 mx-auto text-white/50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
							</svg>
						</div>
						<h2 className="text-2xl font-bold text-white/70">{currentProduct.title}</h2>
					</div>
				</div>
			)}
		</div>
	);
};
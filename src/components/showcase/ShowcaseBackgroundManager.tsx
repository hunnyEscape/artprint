'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { useShowcase } from '@/contexts/ShowcaseContext';
import { Product } from '@/data/featured-products';
import Image from 'next/image';

// 単一のグローバル背景を管理するコンポーネント
export const ShowcaseBackgroundManager: React.FC = () => {
	const { activeProduct } = useShowcase();
	const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
	const [nextProduct, setNextProduct] = useState<Product | null>(null);
	const [isTransitioning, setIsTransitioning] = useState(false);
	const [imageLoaded, setImageLoaded] = useState(false);
	const [nextImageLoaded, setNextImageLoaded] = useState(false);

	// 背景切り替え処理
	const handleBackgroundTransition = useCallback(() => {
		if (nextProduct) {
			// 次の背景に切り替え
			setCurrentProduct(nextProduct);
			setImageLoaded(nextImageLoaded);
			setNextProduct(null);
			setNextImageLoaded(false);
			setIsTransitioning(false);
		}
	}, [nextProduct, nextImageLoaded]);

	// アクティブな製品が変わったら背景の切り替えを開始
	useEffect(() => {
		if (activeProduct && (!currentProduct || currentProduct.id !== activeProduct.id)) {
			console.log("背景切り替え準備:", activeProduct.title);
			
			// 既に表示中の場合は、スムーズにトランジションする
			if (currentProduct) {
				setNextProduct(activeProduct);
				setIsTransitioning(true);
			} else {
				// 初回表示の場合は直接設定
				setCurrentProduct(activeProduct);
			}
		}
	}, [activeProduct, currentProduct]);

	// トランジション効果（より高速に変更）
	useEffect(() => {
		if (isTransitioning && nextImageLoaded) {
			// トランジション開始 - より速く
			const timer = setTimeout(() => {
				handleBackgroundTransition();
			}, 400); // フェード時間を短縮
			
			return () => clearTimeout(timer);
		}
	}, [isTransitioning, nextImageLoaded, handleBackgroundTransition]);

	// 背景がない場合のフォールバック
	if (!currentProduct) {
		return (
			<div
				className="fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-gray-800 to-gray-900"
				style={{ zIndex: -1 }}
			/>
		);
	}

	// メイン画像URLを取得
	const getMainImage = (product: Product) => {
		const mainImage = product.images.find(img => img.type === 'main');
		return mainImage?.url || '';
	};

	const currentImageUrl = getMainImage(currentProduct);
	const nextImageUrl = nextProduct ? getMainImage(nextProduct) : '';

	return (
		<div
			className="fixed top-0 left-0 w-full h-screen overflow-hidden"
			style={{ zIndex: -1 }}
		>
			{/* 現在の背景 */}
			<div 
				className={`absolute inset-0 transition-opacity duration-400 ${
					isTransitioning ? 'opacity-0' : 'opacity-100'
				}`}
			>
				{currentImageUrl ? (
					<div className="absolute inset-0">
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
				) : (
					// 画像がない場合はグラデーション背景
					<div
						className="absolute inset-0"
						style={{
							background: `linear-gradient(135deg, ${currentProduct.accentColor || '#3B82F6'}33, ${currentProduct.accentColor || '#3B82F6'}11)`,
						}}
					>
						{/* 均一な薄い透明のオーバーレイ */}
						<div className="absolute inset-0 bg-black/30" />
					</div>
				)}
			</div>

			{/* 次の背景 (トランジション中のみ表示) */}
			{isTransitioning && nextProduct && (
				<div 
					className={`absolute inset-0 transition-opacity duration-400 ${
						isTransitioning ? 'opacity-100' : 'opacity-0'
					}`}
				>
					{nextImageUrl ? (
						<div className="absolute inset-0">
							{/* プリロードを優先して高速化 */}
							<Image
								src={nextImageUrl}
								alt={nextProduct.title}
								fill
								priority
								unoptimized={true} // オプション: 高速化のためにNext.jsの最適化をバイパス
								sizes="100vw"
								className="object-cover"
								onLoad={() => {
									setNextImageLoaded(true);
									console.log("次の画像が読み込まれました:", nextProduct.title);
								}}
								onError={(e) => {
									console.error("次の画像読み込みエラー:", nextImageUrl);
									e.currentTarget.style.display = 'none';
									// エラー時でもトランジションを続行
									setNextImageLoaded(true);
								}}
							/>
							
							{/* 均一な薄い透明のオーバーレイ */}
							<div className="absolute inset-0 bg-black/40" />
						</div>
					) : (
						// 画像がない場合はグラデーション背景
						<div
							className="absolute inset-0"
							style={{
								background: `linear-gradient(135deg, ${nextProduct.accentColor || '#3B82F6'}33, ${nextProduct.accentColor || '#3B82F6'}11)`,
							}}
						>
							{/* 均一な薄い透明のオーバーレイ */}
							<div className="absolute inset-0 bg-black/30" />
						</div>
					)}
				</div>
			)}
			
			{/* 画像読み込み中のプレースホルダー (初回読み込み時のみ) */}
			{!imageLoaded && currentProduct && (
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
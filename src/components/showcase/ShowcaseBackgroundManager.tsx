'use client';

import React, { useEffect, useState } from 'react';
import { useShowcase } from '@/contexts/ShowcaseContext';
import { Product } from '@/data/featured-products';
import Image from 'next/image';

// 単一のグローバル背景を管理するコンポーネント
export const ShowcaseBackgroundManager: React.FC = () => {
	const { activeSection, activeProduct } = useShowcase();
	const [currentProduct, setCurrentProduct] = useState<Product | null>(null);

	// アクティブな製品が変わったら背景を更新
	useEffect(() => {
		if (activeProduct && (currentProduct?.id !== activeProduct.id)) {
			console.log("背景更新:", activeProduct.title);
			setCurrentProduct(activeProduct);
		}
	}, [activeProduct, currentProduct]);

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
	const mainImage = currentProduct.images.find(img => img.type === 'main');
	const imageUrl = mainImage?.url || '';

	// デバッグ情報
	console.log("現在の背景:", imageUrl);

	return (
		<div
			className="fixed top-0 left-0 w-full h-screen overflow-hidden"
			style={{ zIndex: -1 }}
		>
			{/* 画像がある場合は背景として表示 */}
			{imageUrl ? (
				<div className="absolute inset-0">
					<Image
						src={imageUrl}
						alt={currentProduct.title}
						fill
						priority
						sizes="100vw"
						className="object-cover"
						onError={(e) => {
							console.error("画像読み込みエラー:", imageUrl);
							e.currentTarget.style.display = 'none';
						}}
					/>
				</div>
			) : (
				// 画像がない場合はグラデーション背景
				<div
					className="absolute inset-0"
					style={{
						background: `linear-gradient(135deg, ${currentProduct.accentColor || '#3B82F6'}33, ${currentProduct.accentColor || '#3B82F6'}11)`,
					}}
				/>
			)}

			{/* オーバーレイグラデーション */}
			<div
				className="absolute inset-0"
				style={{
					background: `linear-gradient(to bottom, transparent 70%, rgba(0,0,0,0.8))`,
				}}
			/>
		</div>
	);
};
'use client';

import React, { useEffect, useState } from 'react';
import { useShowcase } from '@/contexts/ShowcaseContext';
import Image from 'next/image';
import { getMainImageUrl } from '@/data/featured-products';

export const ShowcaseBackgroundManager: React.FC = () => {
	const { activeSection, activeProduct, sections } = useShowcase();
	const [previousImage, setPreviousImage] = useState<string | null>(null);
	const [currentImage, setCurrentImage] = useState<string | null>(null);
	const [isTransitioning, setIsTransitioning] = useState(false);

	// 背景画像の更新
	useEffect(() => {
		if (!activeProduct) return;

		const mainImageUrl = getMainImageUrl(activeProduct);

		if (currentImage !== mainImageUrl) {
			// 前の画像を保存してフェードアウト効果に使用
			setPreviousImage(currentImage);
			setCurrentImage(mainImageUrl);
			setIsTransitioning(true);

			// トランジション終了後にpreviousImageをクリア
			const timer = setTimeout(() => {
				setIsTransitioning(false);
				setPreviousImage(null);
			}, 500); // 500msのトランジション

			return () => clearTimeout(timer);
		}
	}, [activeProduct, currentImage]);

	if (!activeProduct || !currentImage) return null;

	return (
		<div className="fixed inset-0 z-[-1] h-[150vh] overflow-hidden">
			{/* 前の背景画像（フェードアウト） */}
			{isTransitioning && previousImage && (
				<div className="absolute inset-0 w-full h-full transition-opacity duration-500 opacity-0">
					<Image
						src={previousImage}
						alt="Previous showcase background"
						fill
						sizes="100vw"
						className="object-cover"
						priority
					/>
				</div>
			)}

			{/* 現在の背景画像 */}
			<div className={`absolute inset-0 w-full h-full ${isTransitioning ? 'transition-opacity duration-500 opacity-100' : ''}`}>
				<Image
					src={currentImage}
					alt={activeProduct.title}
					fill
					sizes="100vw"
					className="object-cover"
					priority
				/>
			</div>

			{/* オーバーレイ（オプション） */}
			<div className="absolute inset-0 bg-black/10" />
		</div>
	);
};
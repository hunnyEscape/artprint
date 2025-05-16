'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ProductImage } from '@/data/featured-products';

interface ProductGalleryProps {
	images: ProductImage[];
	title: string;
	onFullscreen?: () => void;
}

export function ProductGallery({ images, title, onFullscreen }: ProductGalleryProps) {
	const [activeImageIndex, setActiveImageIndex] = useState(0);
	const [isZoomed, setIsZoomed] = useState(false);
	const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
	const mainImageRef = useRef<HTMLDivElement>(null);
	const hasImages = images && images.length > 0;

	// 画像が変更されたらインデックスをリセット
	useEffect(() => {
		setActiveImageIndex(0);
		setIsZoomed(false);
	}, [images]);

	// メイン画像とサムネイル用のデータ準備
	const mainImage = hasImages ? images[activeImageIndex] : null;
	const thumbnails = hasImages ? images : [];

	// ズーム機能のための関数
	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!mainImageRef.current || !isZoomed) return;

		const { left, top, width, height } = mainImageRef.current.getBoundingClientRect();
		const x = ((e.clientX - left) / width) * 100;
		const y = ((e.clientY - top) / height) * 100;

		setZoomPosition({ x, y });
	};

	// プレースホルダーコンポーネント
	const PlaceholderImage = () => (
		<div className="w-full h-full flex items-center justify-center bg-neutral-100 rounded-lg">
			<span className="text-neutral-400">画像がありません</span>
		</div>
	);

	return (
		<div className="product-gallery">
			{/* メイン画像 */}
			<div
				ref={mainImageRef}
				className={`relative overflow-hidden rounded-lg mb-4 aspect-[4/3] ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
				onClick={() => setIsZoomed(!isZoomed)}
				onMouseMove={handleMouseMove}
				onMouseLeave={() => setIsZoomed(false)}
			>
				{mainImage ? (
					<Image
						src={mainImage.url}
						alt={mainImage.alt || title}
						fill
						sizes="(max-width: 768px) 100vw, 50vw"
						className={`object-cover transition-transform duration-300 ${isZoomed ? 'scale-150' : 'scale-100'
							}`}
						style={isZoomed ? {
							transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`
						} : undefined}
						priority
					/>
				) : (
					<PlaceholderImage />
				)}

				{/* フルスクリーンボタン */}
				<button
					className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-sm hover:bg-white transition-colors"
					onClick={(e) => {
						e.stopPropagation();
						onFullscreen && onFullscreen();
					}}
				>
					<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
						<path d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" />
					</svg>
				</button>

				{/* AR表示ボタン（将来実装用） */}
				<button
					className="absolute bottom-4 right-4 bg-accent-500 text-white px-3 py-1.5 rounded-md shadow-sm hover:bg-accent-600 transition-colors flex items-center gap-1.5"
					onClick={(e) => {
						e.stopPropagation();
						alert('AR機能は近日公開予定です。お楽しみに！');
					}}
				>
					<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
						<path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm1 0v12h12V4H4zm3 9a1 1 0 100-2 1 1 0 000 2zm1-4a1 1 0 11-2 0 1 1 0 012 0zm3 4a1 1 0 100-2 1 1 0 000 2zm1-4a1 1 0 11-2 0 1 1 0 012 0zm3 4a1 1 0 100-2 1 1 0 000 2zm1-4a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
					</svg>
					<span className="font-medium text-sm">ARで見る</span>
				</button>
			</div>

			{/* サムネイルストリップ */}
			{thumbnails.length > 1 && (
				<div className="grid grid-cols-5 gap-2">
					{thumbnails.map((img, index) => (
						<button
							key={img.id}
							className={`relative aspect-square overflow-hidden rounded-md ${index === activeImageIndex
									? 'border-2 border-primary-500'
									: 'border border-neutral-200 hover:border-neutral-300'
								}`}
							onClick={() => setActiveImageIndex(index)}
						>
							<Image
								src={img.url}
								alt={img.alt || `${title} - 画像 ${index + 1}`}
								fill
								sizes="100px"
								className="object-cover"
							/>
						</button>
					))}
				</div>
			)}
		</div>
	);
}
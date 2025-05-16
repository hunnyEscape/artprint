'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Product } from '@/data/featured-products';

interface InteriorPreviewProps {
	product: Product;
}

export const InteriorPreview: React.FC<InteriorPreviewProps> = ({ product }) => {
	const [selectedRoom, setSelectedRoom] = useState<'living' | 'bedroom' | 'office'>('living');

	// 部屋の種類ごとのインテリア画像パス
	const roomImages = {
		living: "/images/interiors/living-room.jpg",
		bedroom: "/images/interiors/bedroom.jpg",
		office: "/images/interiors/office.jpg"
	};

	// 実際の実装ではこれらの画像が存在する必要があります
	// プレースホルダーの場合は下記のようにフォールバック
	const fallbackImage = "/images/placeholder.jpg";

	// 壁紙のオーバーレイサイズと位置（部屋ごとに異なる設定）
	const wallpaperPositions = {
		living: {
			width: '60%',
			height: '70%',
			top: '15%',
			left: '20%',
			transform: 'perspective(1000px) rotateY(-10deg)'
		},
		bedroom: {
			width: '50%',
			height: '60%',
			top: '20%',
			left: '25%',
			transform: 'perspective(1000px) rotateY(-5deg)'
		},
		office: {
			width: '45%',
			height: '65%',
			top: '18%',
			left: '28%',
			transform: 'perspective(1000px) rotateY(-8deg)'
		}
	};

	// 選択中の部屋の壁紙配置情報
	const currentPosition = wallpaperPositions[selectedRoom];

	// 商品のメイン画像取得
	const getMainImage = () => {
		const mainImage = product.images.find(img => img.type === 'main');
		return mainImage?.url || fallbackImage;
	};

	return (
		<div className="mt-12 mb-20">
			<div className="flex justify-center mb-6 space-x-4">
				<button
					className={`px-4 py-2 rounded-full text-sm font-medium ${selectedRoom === 'living'
							? 'bg-primary-500 text-white'
							: 'bg-white/50 text-neutral-700 hover:bg-white/80'
						}`}
					onClick={() => setSelectedRoom('living')}
				>
					リビングルーム
				</button>
				<button
					className={`px-4 py-2 rounded-full text-sm font-medium ${selectedRoom === 'bedroom'
							? 'bg-primary-500 text-white'
							: 'bg-white/50 text-neutral-700 hover:bg-white/80'
						}`}
					onClick={() => setSelectedRoom('bedroom')}
				>
					ベッドルーム
				</button>
				<button
					className={`px-4 py-2 rounded-full text-sm font-medium ${selectedRoom === 'office'
							? 'bg-primary-500 text-white'
							: 'bg-white/50 text-neutral-700 hover:bg-white/80'
						}`}
					onClick={() => setSelectedRoom('office')}
				>
					オフィス/書斎
				</button>
			</div>

			<div className="relative aspect-[16/9] max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl">
				{/* 部屋の背景画像 */}
				<div className="absolute inset-0 bg-neutral-200 flex items-center justify-center">
					<Image
						src={roomImages[selectedRoom] || fallbackImage}
						alt={`${selectedRoom} with ${product.title}`}
						fill
						sizes="(max-width: 768px) 100vw, 800px"
						className="object-cover"
					/>
				</div>

				{/* 壁紙オーバーレイ (3D変形効果付き) */}
				<div
					className="absolute shadow-lg"
					style={{
						width: currentPosition.width,
						height: currentPosition.height,
						top: currentPosition.top,
						left: currentPosition.left,
						transform: currentPosition.transform
					}}
				>
					<Image
						src={getMainImage()}
						alt={product.title}
						fill
						sizes="400px"
						className="object-cover rounded-sm"
					/>
				</div>

				{/* 全体の暗め調整レイヤー */}
				<div className="absolute inset-0 bg-black/15" />

				{/* 説明テキスト */}
				<div className="absolute bottom-4 right-4 bg-black/70 text-white px-4 py-2 rounded-lg text-sm max-w-xs">
					<p>実際の壁に貼った際のイメージです。部屋のサイズや光の状態により見え方が異なる場合があります。</p>
				</div>
			</div>
		</div>
	);
};
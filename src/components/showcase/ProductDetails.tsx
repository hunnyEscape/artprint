'use client';

import React from 'react';
import { Product } from '@/data/featured-products';
import { ECLinkButton } from "@/components/ui/ec-link-button";
import Image from 'next/image';

interface ProductDetailsProps {
	product: Product;
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
	// レイアウトに応じたスタイルを取得
	const getLayoutStyles = (product: Product) => {
		const layoutType = product.layoutType as 'standard' | 'dark' | 'minimalist' | 'immersive';

		switch (layoutType) {
			case 'dark':
				return {
					wrapper: 'bg-neutral-900/85 backdrop-blur-lg text-white',
					title: 'text-white',
					description: 'text-neutral-300',
					price: 'text-white',
					button: 'bg-accent-500 hover:bg-accent-600 text-white',
					features: 'bg-neutral-800 border-neutral-700',
					accent: product.accentColor || '#FF5C5C'
				};

			case 'minimalist':
				return {
					wrapper: 'bg-white/90 backdrop-blur-lg',
					title: 'text-neutral-900',
					description: 'text-neutral-600',
					price: 'text-neutral-900',
					button: 'bg-neutral-900 hover:bg-neutral-800 text-white',
					features: 'bg-neutral-50 border-neutral-100',
					accent: product.accentColor || '#404040'
				};

			case 'immersive':
				return {
					wrapper: `bg-gradient-to-br from-black/70 to-black/50 backdrop-blur-sm text-white`,
					title: 'text-white',
					description: 'text-white/80',
					price: 'text-white',
					button: 'bg-white hover:bg-neutral-100 text-neutral-900',
					features: 'bg-white/10 backdrop-blur-sm border-white/20',
					accent: product.accentColor || '#3B82F6'
				};

			case 'standard':
			default:
				return {
					wrapper: 'bg-white/90 backdrop-blur-lg',
					title: 'text-neutral-900',
					description: 'text-neutral-700',
					price: 'text-neutral-900',
					button: 'bg-primary-500 hover:bg-primary-600 text-white',
					features: 'bg-neutral-50 border-neutral-200',
					accent: product.accentColor || '#3B82F6'
				};
		}
	};

	const styles = getLayoutStyles(product);

	return (
		<div className={`rounded-xl ${styles.wrapper} p-8 shadow-xl max-w-2xl mx-auto transition-all duration-500`}>
			{/* カテゴリとタグ */}
			<div className="flex flex-wrap items-center gap-2 mb-4">
				<span
					className="inline-block px-3 py-1 rounded-full text-xs font-medium text-white"
					style={{ backgroundColor: styles.accent }}
				>
					{product.category}
				</span>
				{product.tags.slice(0, 3).map(tag => (
					<span key={tag} className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 text-neutral-700">
						{tag}
					</span>
				))}
			</div>

			{/* 商品タイトルと説明 */}
			<h3 className={`text-2xl md:text-3xl font-bold mb-2 ${styles.title}`}>
				{product.title}
			</h3>
			{product.subtitle && (
				<p className={`text-lg ${styles.description} mb-4`}>
					{product.subtitle}
				</p>
			)}

			{/* 評価とレビュー */}
			{product.rating && (
				<div className="flex items-center gap-2 mb-4">
					<div className="flex">
						{[...Array(5)].map((_, i) => (
							<svg
								key={i}
								className={`w-5 h-5 ${i < Math.floor(product.rating!.average)
									? 'text-yellow-400'
									: 'text-neutral-300'
									}`}
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
							</svg>
						))}
					</div>
					<span className={`text-sm ${styles.description}`}>
						{product.rating.average} ({product.rating.count}件のレビュー)
					</span>
				</div>
			)}

			{/* 価格情報 */}
			<div className="mb-6">
				{product.discount ? (
					<div className="flex items-center gap-3">
						<span className={`text-3xl font-bold ${styles.price}`}>
							¥{Math.round(product.price * (1 - product.discount.percentage / 100)).toLocaleString()}
						</span>
						<span className="text-lg line-through text-neutral-500">
							¥{product.price.toLocaleString()}
						</span>
						<span className="bg-red-500 text-white px-2 py-0.5 rounded text-sm font-medium">
							{product.discount.percentage}%OFF
						</span>
					</div>
				) : (
					<span className={`text-3xl font-bold ${styles.price}`}>
						¥{product.price.toLocaleString()}
					</span>
				)}
				<p className="text-sm mt-1 text-neutral-500">
					送料無料・税込
				</p>
			</div>

			{/* 商品説明 */}
			<p className={`${styles.description} mb-6`}>
				{product.description}
			</p>

			{/* サイズ */}
			<div className="mb-6">
				<h4 className={`font-medium mb-2 ${styles.title}`}>サイズ</h4>
				<div className="flex items-center gap-4">
					<div className={`border ${styles.features === 'bg-neutral-800 border-neutral-700' ? 'border-neutral-700' : 'border-neutral-200'} rounded-lg p-3 text-center min-w-[80px]`}>
						<div className={`text-sm ${styles.description}`}>幅</div>
						<div className={`font-medium ${styles.title}`}>
							{product.dimensions.width}
							<span className="text-sm">{product.dimensions.unit}</span>
						</div>
					</div>
					<div className={`border ${styles.features === 'bg-neutral-800 border-neutral-700' ? 'border-neutral-700' : 'border-neutral-200'} rounded-lg p-3 text-center min-w-[80px]`}>
						<div className={`text-sm ${styles.description}`}>高さ</div>
						<div className={`font-medium ${styles.title}`}>
							{product.dimensions.height}
							<span className="text-sm">{product.dimensions.unit}</span>
						</div>
					</div>
				</div>
			</div>

			{/* CTAボタン */}
			<div className="flex flex-col sm:flex-row gap-4 mt-8">
				<ECLinkButton
					href={`https://ec.artpaper.com/products/${product.id}`}
					location="showcase"
					variant="primary"
					className={`py-3 px-8 text-lg font-medium rounded-md ${styles.button}`}
				>
					購入する
				</ECLinkButton>

				<button
					className={`py-3 px-8 text-lg font-medium rounded-md border ${styles.wrapper === 'bg-neutral-900/85 backdrop-blur-lg text-white'
						? 'border-neutral-700 text-white hover:bg-neutral-800'
						: 'border-neutral-300 text-neutral-700 hover:bg-neutral-100'
						} transition-colors`}
					onClick={() => alert('お気に入りに追加しました！')}
				>
					<span className="flex items-center justify-center gap-2">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
							<path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
						</svg>
						お気に入り
					</span>
				</button>
			</div>
		</div>
	);
};
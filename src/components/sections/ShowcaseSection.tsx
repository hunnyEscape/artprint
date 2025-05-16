'use client';

import { useState } from 'react';
import { Container } from "@/components/layout/container";
import { ECLinkButton } from "@/components/ui/ec-link-button";
import { ProductGallery } from "./product-showcase/ProductGallery";
import { featuredProducts, Product } from "@/data/featured-products";
import Image from 'next/image';
type LayoutType = 'standard' | 'dark' | 'minimalist' | 'immersive';

export function ShowcaseSection() {
	const [activeProduct, setActiveProduct] = useState<Product>(featuredProducts[0]);
	const [isFullscreen, setIsFullscreen] = useState(false);

	// レイアウトに応じたスタイルを取得
	const getLayoutStyles = (product: Product) => {
		const layoutType = product.layoutType as LayoutType;

		switch (layoutType) {
			case 'dark':
				return {
					wrapper: 'bg-neutral-900 text-white',
					inner: 'py-16 md:py-20',
					title: 'text-white',
					description: 'text-neutral-300',
					price: 'text-white',
					button: 'bg-accent-500 hover:bg-accent-600 text-white',
					features: 'bg-neutral-800 border-neutral-700',
					accent: product.accentColor || '#FF5C5C'
				};

			case 'minimalist':
				return {
					wrapper: 'bg-white',
					inner: 'py-16 md:py-20',
					title: 'text-neutral-900',
					description: 'text-neutral-600',
					price: 'text-neutral-900',
					button: 'bg-neutral-900 hover:bg-neutral-800 text-white',
					features: 'bg-neutral-50 border-neutral-100',
					accent: product.accentColor || '#404040'
				};

			case 'immersive':
				return {
					wrapper: `bg-gradient-to-br from-${product.accentColor?.replace('#', '') || 'primary'}-900 to-${product.accentColor?.replace('#', '') || 'primary'}-600 text-white`,
					inner: 'py-16 md:py-20',
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
					wrapper: 'bg-white',
					inner: 'py-16 md:py-20',
					title: 'text-neutral-900',
					description: 'text-neutral-700',
					price: 'text-neutral-900',
					button: 'bg-primary-500 hover:bg-primary-600 text-white',
					features: 'bg-neutral-50 border-neutral-200',
					accent: product.accentColor || '#3B82F6'
				};
		}
	};

	const styles = getLayoutStyles(activeProduct);

	return (
		<section id="showcase-section" className={`${styles.wrapper} transition-colors duration-500`}>
			<Container>
				<div className={styles.inner}>
					{/* 商品セレクター（ナビゲーション） */}
					<div className="flex items-center justify-center mb-12 overflow-x-auto pb-4 gap-2 md:gap-4">
						{featuredProducts.map((product, index) => (
							<button
								key={product.id}
								className={`px-3 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors ${product.id === activeProduct.id
										? `bg-[${styles.accent}] text-white`
										: 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
									}`}
								style={{
									backgroundColor: product.id === activeProduct.id ? styles.accent : undefined
								}}
								onClick={() => setActiveProduct(product)}
							>
								{product.title}
							</button>
						))}
					</div>

					{/* メインコンテンツ */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
						{/* 左側：画像ギャラリー */}
						<div>
							<ProductGallery
								images={activeProduct.images}
								title={activeProduct.title}
								onFullscreen={() => setIsFullscreen(true)}
							/>
						</div>

						{/* 右側：商品情報 */}
						<div>
							{/* カテゴリとタグ */}
							<div className="flex flex-wrap items-center gap-2 mb-4">
								<span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-[${styles.accent}] text-white`}>
									{activeProduct.category}
								</span>
								{activeProduct.tags.slice(0, 3).map(tag => (
									<span key={tag} className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 text-neutral-700">
										{tag}
									</span>
								))}
							</div>

							{/* 商品タイトルと説明 */}
							<h2 className={`text-3xl md:text-4xl font-bold mb-2 ${styles.title}`}>
								{activeProduct.title}
							</h2>
							{activeProduct.subtitle && (
								<p className={`text-xl ${styles.description} mb-4`}>
									{activeProduct.subtitle}
								</p>
							)}

							{/* 評価とレビュー */}
							{activeProduct.rating && (
								<div className="flex items-center gap-2 mb-4">
									<div className="flex">
										{[...Array(5)].map((_, i) => (
											<svg
												key={i}
												className={`w-5 h-5 ${i < Math.floor(activeProduct.rating!.average)
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
										{activeProduct.rating.average} ({activeProduct.rating.count}件のレビュー)
									</span>
								</div>
							)}

							{/* 価格情報 */}
							<div className="mb-6">
								{activeProduct.discount ? (
									<div className="flex items-center gap-3">
										<span className={`text-3xl font-bold ${styles.price}`}>
											¥{Math.round(activeProduct.price * (1 - activeProduct.discount.percentage / 100)).toLocaleString()}
										</span>
										<span className="text-lg line-through text-neutral-500">
											¥{activeProduct.price.toLocaleString()}
										</span>
										<span className="bg-red-500 text-white px-2 py-0.5 rounded text-sm font-medium">
											{activeProduct.discount.percentage}%OFF
										</span>
									</div>
								) : (
									<span className={`text-3xl font-bold ${styles.price}`}>
										¥{activeProduct.price.toLocaleString()}
									</span>
								)}
								<p className="text-sm mt-1 text-neutral-500">
									送料無料・税込
								</p>
							</div>

							{/* 商品説明 */}
							<p className={`${styles.description} mb-6`}>
								{activeProduct.description}
							</p>

							{/* サイズ */}
							<div className="mb-6">
								<h3 className={`font-medium mb-2 ${styles.title}`}>サイズ</h3>
								<div className="flex items-center gap-4">
									<div className={`border ${styles.features === 'bg-neutral-800 border-neutral-700' ? 'border-neutral-700' : 'border-neutral-200'} rounded-lg p-3 text-center min-w-[100px]`}>
										<div className={`text-sm ${styles.description}`}>幅</div>
										<div className={`font-medium ${styles.title}`}>
											{activeProduct.dimensions.width}
											<span className="text-sm">{activeProduct.dimensions.unit}</span>
										</div>
									</div>
									<div className={`border ${styles.features === 'bg-neutral-800 border-neutral-700' ? 'border-neutral-700' : 'border-neutral-200'} rounded-lg p-3 text-center min-w-[100px]`}>
										<div className={`text-sm ${styles.description}`}>高さ</div>
										<div className={`font-medium ${styles.title}`}>
											{activeProduct.dimensions.height}
											<span className="text-sm">{activeProduct.dimensions.unit}</span>
										</div>
									</div>
								</div>
							</div>

							{/* 主な特徴 */}
							<div className="mb-6">
								<h3 className={`font-medium mb-2 ${styles.title}`}>主な特徴</h3>
								<ul className={`${styles.features} rounded-lg p-4 space-y-2`}>
									{activeProduct.features.map((feature, index) => (
										<li key={index} className="flex items-start gap-2">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className={`h-5 w-5 mt-0.5 flex-shrink-0`}
												viewBox="0 0 20 20"
												fill="currentColor"
												style={{ color: styles.accent }}
											>
												<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
											</svg>
											<span className={styles.description}>{feature}</span>
										</li>
									))}
								</ul>
							</div>

							{/* CTAボタン */}
							<div className="flex flex-col sm:flex-row gap-4 mt-8">
								<ECLinkButton
									href={`https://ec.artpaper.com/products/${activeProduct.id}`}
									location="showcase"
									variant="primary"
									className={`py-3 px-8 text-lg font-medium rounded-md ${styles.button}`}
								>
									購入する
								</ECLinkButton>

								<button
									className={`py-3 px-8 text-lg font-medium rounded-md border ${styles.wrapper === 'bg-neutral-900 text-white'
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

							{/* 配送情報 */}
							<div className="mt-8 pt-6 border-t border-neutral-200">
								<div className="flex items-start gap-3 text-sm">
									<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neutral-500 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
										<path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
										<path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-5h2a1 1 0 00.9-.574l2-4A1 1 0 0015 4H3zm11 3a1 1 0 00-1 1v1h-2V8a1 1 0 00-1-1H3V5h11v2z" />
									</svg>
									<div>
										<p className={`font-medium ${styles.title}`}>送料無料</p>
										<p className={styles.description}>通常2〜4営業日以内に発送</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>

			{/* フルスクリーンビュー */}
			{isFullscreen && (
				<div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
					<button
						className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
						onClick={() => setIsFullscreen(false)}
					>
						<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>

					<div className="w-full h-full flex items-center justify-center">
						{activeProduct.images.length > 0 && (
							<div className="relative w-[90vw] h-[80vh]">
								<Image
									src={activeProduct.images[0].url}
									alt={activeProduct.images[0].alt || activeProduct.title}
									fill
									className="object-contain"
								/>
							</div>
						)}
					</div>
				</div>
			)}
		</section>
	);
}
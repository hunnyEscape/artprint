'use client';

import { Container } from "../layout/container";
import { ECLinkButton } from "../ui/ec-link-button";
import Image from "next/image";
import { useState } from "react";

type ShowcaseProduct = {
	id: string;
	title: string;
	category: string;
	description: string;
	price: number;
	imageUrl: string;
	popularity: number; // 1-100のスケール
	colorScheme?: string;
	isNewArrival?: boolean;
	isBestseller?: boolean;
};

// サンプル商品データ
const showcaseProducts: ShowcaseProduct[] = [
	{
		id: "prod1",
		title: "Urban Neon",
		category: "モダン",
		description: "都会的なネオンカラーが織りなす洗練されたデザイン。モダンなインテリアにぴったりのアートポスター。",
		price: 5800,
		imageUrl: "/images/placeholder.jpg",
		popularity: 95,
		colorScheme: "ブルー・パープル",
		isBestseller: true,
	},
	{
		id: "prod2",
		title: "Nature Flow",
		category: "ナチュラル",
		description: "自然の曲線と有機的な形状を抽象化したデザイン。穏やかな空間を演出します。",
		price: 5800,
		imageUrl: "/images/placeholder2.jpg",
		popularity: 87,
		colorScheme: "グリーン・ブラウン",
		isNewArrival: true,
	},
	{
		id: "prod3",
		title: "Geometric Dreams",
		category: "アブストラクト",
		description: "幾何学パターンが織りなす夢のような世界。どんなインテリアにも合わせやすい汎用性の高いデザイン。",
		price: 5800,
		imageUrl: "/images/placeholder3.jpg",
		popularity: 92,
		colorScheme: "マルチカラー",
		isBestseller: true,
	},
	{
		id: "prod4",
		title: "Nostalgic Wave",
		category: "レトロ",
		description: "80年代を思わせるレトロな波形パターン。ノスタルジックな雰囲気を演出します。",
		price: 5800,
		imageUrl: "/images/placeholder4.jpg",
		popularity: 89,
		colorScheme: "ピンク・ブルー",
		isNewArrival: true,
	},
];

export function ShowcaseSection() {
	const [layoutStyle, setLayoutStyle] = useState<'grid' | 'carousel' | 'featured' | 'minimal'>('grid');

	return (
		<section className="py-16 bg-white md:py-24">
			<Container>
				<div className="max-w-3xl mx-auto text-center mb-8">
					<h2 className="font-display text-3xl font-bold mb-4 md:text-4xl">
						Artpaperの定番デザイン
					</h2>
					<p className="text-lg text-neutral-700 mb-8">
						人気のデザインをチェックして、あなたのお気に入りを見つけてください。
					</p>

					{/* レイアウト切り替えボタン */}
					<div className="flex justify-center mb-8">
						<div className="inline-flex items-center p-1 bg-neutral-100 rounded-full">
							<button
								className={`p-2 rounded-full ${layoutStyle === 'grid' ? 'bg-white shadow-sm' : ''}`}
								onClick={() => setLayoutStyle('grid')}
								title="グリッドビュー"
							>
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
									<rect x="3" y="3" width="7" height="7"></rect>
									<rect x="14" y="3" width="7" height="7"></rect>
									<rect x="14" y="14" width="7" height="7"></rect>
									<rect x="3" y="14" width="7" height="7"></rect>
								</svg>
							</button>
							<button
								className={`p-2 rounded-full ${layoutStyle === 'carousel' ? 'bg-white shadow-sm' : ''}`}
								onClick={() => setLayoutStyle('carousel')}
								title="カルーセルビュー"
							>
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
									<rect x="2" y="7" width="20" height="10" rx="2" ry="2"></rect>
									<circle cx="12" cy="17" r="1"></circle>
								</svg>
							</button>
							<button
								className={`p-2 rounded-full ${layoutStyle === 'featured' ? 'bg-white shadow-sm' : ''}`}
								onClick={() => setLayoutStyle('featured')}
								title="フィーチャードビュー"
							>
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
									<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
								</svg>
							</button>
							<button
								className={`p-2 rounded-full ${layoutStyle === 'minimal' ? 'bg-white shadow-sm' : ''}`}
								onClick={() => setLayoutStyle('minimal')}
								title="ミニマルビュー"
							>
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
									<line x1="8" y1="6" x2="21" y2="6"></line>
									<line x1="8" y1="12" x2="21" y2="12"></line>
									<line x1="8" y1="18" x2="21" y2="18"></line>
									<line x1="3" y1="6" x2="3.01" y2="6"></line>
									<line x1="3" y1="12" x2="3.01" y2="12"></line>
									<line x1="3" y1="18" x2="3.01" y2="18"></line>
								</svg>
							</button>
						</div>
					</div>
				</div>

				{/* グリッドレイアウト */}
				{layoutStyle === 'grid' && (
					<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
						{showcaseProducts.map((product) => (
							<div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-neutral-200 transition-all hover:shadow-md hover:-translate-y-1">
								<div className="relative aspect-[3/4] bg-neutral-100">
									{/* 実際の商品画像 */}
									<div className="absolute inset-0 flex items-center justify-center">
										{product.imageUrl ? (
											<Image
												src={product.imageUrl}
												alt={product.title}
												fill
												sizes="(max-width: 768px) 100vw, 25vw"
												className="object-cover"
											/>
										) : (
											<span className="text-neutral-400">画像準備中</span>
										)}
									</div>

									{/* バッジ表示 */}
									{product.isBestseller && (
										<div className="absolute top-3 left-3 bg-accent-500 text-white px-2 py-1 rounded-md text-xs font-medium z-10">
											人気No.1
										</div>
									)}
									{product.isNewArrival && (
										<div className="absolute top-3 left-3 bg-primary-500 text-white px-2 py-1 rounded-md text-xs font-medium z-10">
											新着
										</div>
									)}
								</div>

								<div className="p-4">
									<div className="flex justify-between items-start mb-2">
										<h3 className="font-medium">{product.title}</h3>
										<span className="text-xs bg-neutral-100 px-2 py-0.5 rounded">
											{product.category}
										</span>
									</div>

									<p className="text-sm text-neutral-600 mb-3 line-clamp-2">
										{product.description}
									</p>

									<div className="flex justify-between items-center mt-3">
										<span className="font-medium">¥{product.price.toLocaleString()}</span>
										<ECLinkButton
											href={`https://ec.artpaper.com/products/${product.id}`}
											location="showcase_grid"
											variant="primary"
											className="text-sm py-1 px-3"
										>
											詳細を見る
										</ECLinkButton>
									</div>
								</div>
							</div>
						))}
					</div>
				)}

				{/* カルーセルレイアウト */}
				{layoutStyle === 'carousel' && (
					<div className="relative py-4">
						<div className="overflow-x-auto pb-6 -mx-4 px-4 flex snap-x snap-mandatory gap-6">
							{showcaseProducts.map((product) => (
								<div
									key={product.id}
									className="flex-shrink-0 w-[280px] snap-center bg-white rounded-xl overflow-hidden shadow-sm border border-neutral-200 transition-all hover:shadow-md"
								>
									<div className="relative aspect-[1/1] bg-neutral-100">
										{/* 実際の商品画像 */}
										<div className="absolute inset-0 flex items-center justify-center">
											{product.imageUrl ? (
												<Image
													src={product.imageUrl}
													alt={product.title}
													fill
													sizes="280px"
													className="object-cover"
												/>
											) : (
												<span className="text-neutral-400">画像準備中</span>
											)}
										</div>

										{/* バッジ */}
										{product.isBestseller && (
											<div className="absolute top-3 left-3 bg-accent-500 text-white px-2 py-1 rounded-md text-xs font-medium">
												人気No.1
											</div>
										)}
										{product.isNewArrival && (
											<div className="absolute top-3 left-3 bg-primary-500 text-white px-2 py-1 rounded-md text-xs font-medium">
												新着
											</div>
										)}
									</div>

									<div className="p-4">
										<h3 className="font-medium mb-1">{product.title}</h3>
										<p className="text-sm text-neutral-600 mb-2 line-clamp-2">
											{product.description}
										</p>
										<div className="flex justify-between items-center">
											<span className="font-medium">¥{product.price.toLocaleString()}</span>
											<span className="text-xs bg-neutral-100 px-2 py-0.5 rounded">
												{product.category}
											</span>
										</div>
									</div>
								</div>
							))}

							{/* もっと見るカード */}
							<div className="flex-shrink-0 w-[280px] snap-center bg-primary-50 rounded-xl overflow-hidden shadow-sm border border-primary-100 flex items-center justify-center">
								<div className="text-center p-6">
									<p className="text-primary-700 font-medium mb-4">
										もっと見る
									</p>
									<ECLinkButton
										href="https://ec.artpaper.com/products"
										location="showcase_carousel_more"
										variant="primary"
										className="whitespace-nowrap"
									>
										全商品を見る
									</ECLinkButton>
								</div>
							</div>
						</div>

						{/* スクロールインジケーター */}
						<div className="flex justify-center mt-4 gap-2">
							{showcaseProducts.map((_, index) => (
								<div key={index} className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-primary-500' : 'bg-neutral-300'}`}></div>
							))}
							<div className="w-2 h-2 rounded-full bg-neutral-300"></div>
						</div>
					</div>
				)}

				{/* フィーチャードレイアウト - 特に人気の高いものを強調 */}
				{layoutStyle === 'featured' && (
					<div>
						{/* メイン商品（人気No.1）*/}
						{showcaseProducts
							.filter(p => p.isBestseller)
							.slice(0, 1)
							.map(product => (
								<div key={product.id} className="mb-12">
									<div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl overflow-hidden p-6 md:p-8">
										<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
											<div className="relative aspect-[3/4] bg-white rounded-lg overflow-hidden shadow-md">
												{product.imageUrl ? (
													<Image
														src={product.imageUrl}
														alt={product.title}
														fill
														sizes="(max-width: 768px) 100vw, 50vw"
														className="object-cover"
													/>
												) : (
													<div className="absolute inset-0 flex items-center justify-center text-neutral-400">
														画像準備中
													</div>
												)}
											</div>
											<div>
												<div className="inline-block bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
													最も人気のデザイン
												</div>
												<h3 className="text-2xl font-bold mb-3">{product.title}</h3>
												<p className="text-neutral-700 mb-4">
													{product.description}
												</p>
												<div className="mb-6">
													<div className="text-sm text-neutral-600 mb-1">人気度</div>
													<div className="w-full h-2 bg-neutral-200 rounded-full overflow-hidden">
														<div
															className="h-full bg-accent-500 rounded-full"
															style={{ width: `${product.popularity}%` }}
														></div>
													</div>
													<div className="flex justify-between text-xs text-neutral-500 mt-1">
														<span>0%</span>
														<span>100%</span>
													</div>
												</div>
												<div className="flex flex-wrap gap-3 mb-6">
													<div className="text-sm bg-white px-3 py-1 rounded-full shadow-sm">
														カテゴリー: {product.category}
													</div>
													{product.colorScheme && (
														<div className="text-sm bg-white px-3 py-1 rounded-full shadow-sm">
															配色: {product.colorScheme}
														</div>
													)}
												</div>
												<div className="flex items-center justify-between">
													<div className="text-2xl font-bold">¥{product.price.toLocaleString()}</div>
													<ECLinkButton
														href={`https://ec.artpaper.com/products/${product.id}`}
														location="showcase_featured"
														variant="primary"
														className="py-2.5 px-6"
													>
														今すぐ購入
													</ECLinkButton>
												</div>
											</div>
										</div>
									</div>
								</div>
							))}

						{/* その他の商品 */}
						<div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
							{showcaseProducts
								.filter(p => !p.isBestseller || showcaseProducts.filter(x => x.isBestseller).indexOf(p) > 0)
								.map(product => (
									<div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-sm border border-neutral-200 transition-all hover:shadow-md hover:-translate-y-1">
										<div className="relative aspect-[3/4] bg-neutral-100">
											<div className="absolute inset-0 flex items-center justify-center">
												{product.imageUrl ? (
													<Image
														src={product.imageUrl}
														alt={product.title}
														fill
														sizes="(max-width: 640px) 100vw, 33vw"
														className="object-cover"
													/>
												) : (
													<span className="text-neutral-400">画像準備中</span>
												)}
											</div>

											{product.isNewArrival && (
												<div className="absolute top-3 left-3 bg-primary-500 text-white px-2 py-1 rounded-md text-xs font-medium">
													新着
												</div>
											)}
										</div>

										<div className="p-4">
											<h3 className="font-medium mb-2">{product.title}</h3>
											<div className="flex justify-between items-center">
												<span className="font-bold">¥{product.price.toLocaleString()}</span>
												<ECLinkButton
													href={`https://ec.artpaper.com/products/${product.id}`}
													location="showcase_featured_sub"
													variant="outline"
													className="text-sm px-3 py-1"
												>
													詳細を見る
												</ECLinkButton>
											</div>
										</div>
									</div>
								))}
						</div>
					</div>
				)}

				{/* ミニマルレイアウト */}
				{layoutStyle === 'minimal' && (
					<div className="max-w-3xl mx-auto space-y-8">
						{showcaseProducts.map((product, index) => (
							<div
								key={product.id}
								className={`flex flex-col md:flex-row md:items-center gap-6 p-6 rounded-xl ${index % 2 === 0 ? 'bg-neutral-50' : 'bg-white border border-neutral-200'
									}`}
							>
								<div className="relative w-full md:w-40 h-40 bg-white rounded-lg overflow-hidden flex-shrink-0">
									{product.imageUrl ? (
										<Image
											src={product.imageUrl}
											alt={product.title}
											fill
											sizes="(max-width: 768px) 100vw, 160px"
											className="object-cover"
										/>
									) : (
										<div className="absolute inset-0 flex items-center justify-center text-neutral-400">
											画像準備中
										</div>
									)}
								</div>

								<div className="flex-grow">
									<div className="flex flex-wrap justify-between items-start gap-2 mb-2">
										<h3 className="text-lg font-medium">{product.title}</h3>
										<div className="flex gap-2">
											{product.isBestseller && (
												<span className="inline-block bg-accent-500 text-white px-2 py-0.5 rounded text-xs">
													人気
												</span>
											)}
											{product.isNewArrival && (
												<span className="inline-block bg-primary-500 text-white px-2 py-0.5 rounded text-xs">
													新着
												</span>
											)}
											<span className="inline-block bg-neutral-100 px-2 py-0.5 rounded text-xs">
												{product.category}
											</span>
										</div>
									</div>

									<p className="text-sm text-neutral-600 mb-4 line-clamp-2">
										{product.description}
									</p>

									<div className="flex flex-wrap items-center justify-between gap-4">
										<div className="flex items-center gap-4">
											<span className="font-bold text-lg">¥{product.price.toLocaleString()}</span>
											<div className="text-xs text-neutral-500">
												人気度: {product.popularity}%
											</div>
										</div>
										<ECLinkButton
											href={`https://ec.artpaper.com/products/${product.id}`}
											location="showcase_minimal"
											variant="primary"
											className="whitespace-nowrap"
										>
											商品を見る
										</ECLinkButton>
									</div>
								</div>
							</div>
						))}
					</div>
				)}

				<div className="mt-12 text-center">
					<ECLinkButton
						href="https://ec.artpaper.com/products"
						location="showcase_all"
						variant="primary"
						className="px-8 py-3"
					>
						すべての商品を見る
					</ECLinkButton>
				</div>
			</Container>
		</section>
	);
}
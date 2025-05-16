'use client';

import { Container } from "../layout/container";
import { ECLinkButton } from "../ui/ec-link-button";
import Image from "next/image";
import { useState } from "react";

type LimitedItem = {
	id: string;
	title: string;
	category: string;
	thumbnail: string;
	stock: number;
	totalStock: number;
	isNew: boolean;
};

// サンプルデータ（実際のデータに置き換えてください）
const limitedItems: LimitedItem[] = [
	{
		id: "limited1",
		title: "Aurora Dreams",
		category: "抽象",
		thumbnail: "/images/placeholder.jpg",
		stock: 7,
		totalStock: 20,
		isNew: true,
	},
	{
		id: "limited2",
		title: "Urban Shadows",
		category: "モダン",
		thumbnail: "/images/placeholder.jpg",
		stock: 3,
		totalStock: 15,
		isNew: true,
	},
	{
		id: "limited3",
		title: "Botanical Flow",
		category: "ナチュラル",
		thumbnail: "/images/placeholder.jpg",
		stock: 12,
		totalStock: 25,
		isNew: false,
	},
	{
		id: "limited4",
		title: "Digital Forest",
		category: "サイバー",
		thumbnail: "/images/placeholder.jpg",
		stock: 5,
		totalStock: 20,
		isNew: false,
	},
];

export function LimitedCollectionSection() {
	const [activeTab, setActiveTab] = useState<'all' | 'new'>('all');

	const filteredItems = activeTab === 'all'
		? limitedItems
		: limitedItems.filter(item => item.isNew);

	return (
		<section className="py-16 bg-neutral-50 md:py-24">
			<Container>
				<div className="max-w-3xl mx-auto text-center mb-12">
					<span className="inline-block px-4 py-1.5 bg-accent-50 text-accent-500 rounded-full text-sm font-medium mb-4">
						数量限定
					</span>
					<h2 className="font-display text-3xl font-bold mb-6 md:text-4xl">
						毎月更新される限定コレクション
					</h2>
					<p className="text-lg text-neutral-700">
						Artpaperの限定デザインは、数量限定で販売されます。<br />
						気に入ったデザインはお早めにお求めください。
					</p>
				</div>

				<div className="flex justify-center mb-8">
					<div className="inline-flex items-center p-1 bg-white rounded-full shadow-sm border border-neutral-200">
						<button
							className={`px-4 py-2 rounded-full text-sm font-medium ${activeTab === 'all' ? 'bg-primary-500 text-white' : 'text-neutral-700'}`}
							onClick={() => setActiveTab('all')}
						>
							すべて
						</button>
						<button
							className={`px-4 py-2 rounded-full text-sm font-medium ${activeTab === 'new' ? 'bg-primary-500 text-white' : 'text-neutral-700'}`}
							onClick={() => setActiveTab('new')}
						>
							新作のみ
						</button>
					</div>
				</div>

				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{filteredItems.map((item) => (
						<div
							key={item.id}
							className="bg-white rounded-lg overflow-hidden shadow-sm border border-neutral-200 transition-all hover:shadow-md hover:-translate-y-1"
						>
							<div className="relative aspect-[3/4]">
								<div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-neutral-100 flex items-center justify-center">
									{item.thumbnail ? (
										<Image
											src={item.thumbnail}
											alt={item.title}
											fill
											sizes="(max-width: 768px) 100vw, 25vw"
											className="object-cover"
										/>
									) : (
										<span className="text-neutral-400">画像準備中</span>
									)}
								</div>

								{/* 新作バッジ */}
								{item.isNew && (
									<div className="absolute top-3 left-3 bg-accent-500 text-white px-2 py-1 rounded-md text-xs font-medium">
										NEW
									</div>
								)}

								{/* 残り在庫表示 */}
								<div className="absolute bottom-3 right-3">
									<div className={`px-2 py-1 rounded text-xs font-medium ${item.stock <= 5
											? 'bg-red-500 text-white'
											: 'bg-white/80 backdrop-blur-sm text-neutral-700'
										}`}>
										残り{item.stock}点
									</div>
								</div>
							</div>

							<div className="p-4">
								<div className="flex justify-between items-start mb-2">
									<h3 className="font-medium">{item.title}</h3>
									<span className="text-xs bg-neutral-100 px-2 py-0.5 rounded">
										{item.category}
									</span>
								</div>

								{/* 在庫残量バー */}
								<div className="w-full h-1.5 bg-neutral-100 rounded-full overflow-hidden mb-3">
									<div
										className={`h-full rounded-full ${item.stock <= 5 ? 'bg-red-500' : 'bg-primary-500'}`}
										style={{ width: `${(item.stock / item.totalStock) * 100}%` }}
									></div>
								</div>

								<div className="mt-3 flex justify-between items-center">
									<span className="text-sm text-neutral-500">
										限定{item.totalStock}点
									</span>
									<ECLinkButton
										href={`https://ec.artpaper.com/products/${item.id}`}
										location="limited_collection"
										variant="outline"
										className="text-sm py-1 px-3"
									>
										詳細を見る
									</ECLinkButton>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="mt-12 text-center">
					<p className="text-sm text-neutral-600 mb-6">
						毎月10種類の新作が追加されます。サブスクリプション会員は、新作発売日の1日前に先行アクセスできます。
					</p>
					<ECLinkButton
						href="https://ec.artpaper.com/collections/limited"
						location="limited_collection_all"
						variant="primary"
					>
						すべての限定コレクションを見る
					</ECLinkButton>
				</div>
			</Container>
		</section>
	);
}
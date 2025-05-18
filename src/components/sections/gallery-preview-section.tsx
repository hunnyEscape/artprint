import { Container } from "../layout/container";
import Link from "next/link";
import Image from "next/image";

type GalleryItem = {
	id: string;
	title: string;
	category: string;
	thumbnail: string;
};

// サンプルデータ（実際のデータに置き換えてください）
const galleryItems: GalleryItem[] = [
	{
		id: "art1",
		title: "青い抽象画",
		category: "抽象",
		thumbnail: "/images/lp/g1.png",
	},
	{
		id: "art2",
		title: "自然風景",
		category: "グラフィックアート",
		thumbnail: "/images/lp/g2.png",
	},
	{
		id: "art3",
		title: "都市の夜景",
		category: "レトロ",
		thumbnail: "/images/lp/g3.png",
	},
	{
		id: "art4",
		title: "ユーモア",
		category: "クリエイティブ",
		thumbnail: "/images/lp/g4.png",
	},
];

export function GalleryPreviewSection() {
	return (
		<section className="py-16 bg-white md:py-24">
			<Container>
				<div className="text-center mb-12">
					<h2 className="font-display text-3xl font-bold mb-4 md:text-4xl">
						あなたの空間を彩るアート
					</h2>
					<p className="text-neutral-700 max-w-2xl mx-auto mb-8">
						150種類以上のデザインから、あなたの好みや部屋の雰囲気に合わせて選べます。
					</p>
					<div className="flex justify-center mb-12">
						<Link
							href="/gallery"
							className="inline-block bg-accent-500 text-white px-6 py-3 rounded-md hover:bg-accent-600 transition-colors font-medium"
						>
							すべてのアートを見る
						</Link>
					</div>
				</div>

				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{galleryItems.map((item) => (
						<Link
							key={item.id}
							href={`/gallery/${item.id}`}
							className="block group"
						>
							<div className="rounded-lg overflow-hidden shadow-card transition-all duration-300 group-hover:shadow-hover group-hover:-translate-y-1">
								<div className="relative aspect-[3/4] w-full">
									<Image
										src={item.thumbnail}
										alt={item.title}
										fill
										className="object-cover transition-transform duration-300 group-hover:scale-105"
									/>
								</div>
								<div className="p-4">
									<h3 className="font-medium text-lg mb-1">{item.title}</h3>
									<p className="text-sm text-neutral-600">{item.category}</p>
								</div>
							</div>
						</Link>
					))}
				</div>
			</Container>
		</section>
	);
}

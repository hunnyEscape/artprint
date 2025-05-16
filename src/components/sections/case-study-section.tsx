import { Container } from "../layout/container";
import Image from "next/image";
import { useState } from "react";
import { ECLinkButton } from "../ui/ec-link-button"; 

type CaseStudy = {
	id: string;
	title: string;
	description: string;
	style: string;
	beforeImage: string;
	afterImage: string;
};

const caseStudies: CaseStudy[] = [
	{
		id: "case1",
		title: "1Kのワンルームが劇的に変化",
		description: "ミニマルな家具のみだった白い壁のワンルームに、大きなアートを追加。空間に奥行きと個性が生まれました。",
		style: "モダン",
		beforeImage: "/images/placeholder-before.jpg",
		afterImage: "/images/placeholder-after.jpg",
	},
	{
		id: "case2",
		title: "リモートワークスペースの改善",
		description: "ビデオ会議の背景になる壁にアートを設置。同僚からの印象が変わり、会話のきっかけにも。",
		style: "アート",
		beforeImage: "/images/placeholder-before2.jpg",
		afterImage: "/images/placeholder-after2.jpg",
	},
	{
		id: "case3",
		title: "リビングの印象を一新",
		description: "家具を変えずに、壁のアートだけを変更。部屋全体の雰囲気がグッと変わりました。",
		style: "ナチュラル",
		beforeImage: "/images/placeholder-before3.jpg",
		afterImage: "/images/placeholder-after3.jpg",
	},
];

// クライアントコンポーネントであることを示す
export function CaseStudySection() {
	return (
		<section className="py-16 bg-white md:py-24">
			<Container>
				<div className="max-w-3xl mx-auto text-center mb-12">
					<h2 className="font-display text-3xl font-bold mb-6 md:text-4xl">
						ビフォー/アフターで見る効果
					</h2>
					<p className="text-lg text-neutral-700">
						Artpaperを使用して、実際にどのような変化が起きるのかをご覧ください。
					</p>
				</div>

				<div className="space-y-16">
					{caseStudies.map((study, index) => (
						<div key={study.id} className="border border-neutral-200 rounded-xl overflow-hidden">
							<div className="grid grid-cols-1 md:grid-cols-2">
								<div className="relative aspect-[4/3] bg-neutral-100">
									{/* プレースホルダー画像 */}
									<div className="absolute inset-0 flex items-center justify-center text-neutral-500">
										{study.beforeImage ? (
											<Image
												src={study.beforeImage}
												alt={`${study.title} - Before`}
												fill
												sizes="(max-width: 768px) 100vw, 50vw"
												className="object-cover"
											/>
										) : (
											"Before画像"
										)}
									</div>
									<div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-medium">
										Before
									</div>
								</div>
								<div className="relative aspect-[4/3] bg-neutral-100">
									{/* プレースホルダー画像 */}
									<div className="absolute inset-0 flex items-center justify-center text-neutral-500">
										{study.afterImage ? (
											<Image
												src={study.afterImage}
												alt={`${study.title} - After`}
												fill
												sizes="(max-width: 768px) 100vw, 50vw"
												className="object-cover"
											/>
										) : (
											"After画像"
										)}
									</div>
									<div className="absolute top-4 left-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
										After
									</div>
								</div>
							</div>
							<div className="p-6">
								<div className="flex items-center justify-between mb-4">
									<h3 className="text-xl font-medium">{study.title}</h3>
									<span className="bg-neutral-100 px-3 py-1 rounded-full text-sm">
										スタイル: {study.style}
									</span>
								</div>
								<p className="text-neutral-700">{study.description}</p>
							</div>
						</div>
					))}
				</div>

				<div className="mt-12 text-center">
					<p className="text-lg font-medium text-neutral-800 mb-6">
						あなたの部屋も、Artpaperでこんな風に変えられます
					</p>
					<ECLinkButton
						href="https://ec.artpaper.com/products"
						location="case_study"
						variant="primary"
						className="inline-block"
					>
						商品を見る
					</ECLinkButton>
				</div>
			</Container>
		</section>
	);
}
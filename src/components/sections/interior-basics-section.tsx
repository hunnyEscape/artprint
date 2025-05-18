import { Container } from "../layout/container";
import Image from "next/image";

type BasicTip = {
	id: string;
	title: string;
	description: string;
	imageUrl?: string;
};

const interiorBasics: BasicTip[] = [
	{
		id: "color",
		title: "色の統一感がカギ",
		description: "プロのインテリアデザイナーは、部屋全体で使用する色を3色程度に抑えます。メインカラー60%、サブカラー30%、アクセントカラー10%という黄金比率を意識すると、まとまりのある空間になります。",
		imageUrl: "/images/lp/InteriorBasicsSection-color.png",
	},
	{
		id: "focal-point",
		title: "視線の焦点を作る",
		description: "人が部屋に入ったとき、最初に目がいく「焦点」があると空間に魅力が生まれます。壁面は視界に入りやすく、焦点を作るのに最適な場所です。",
		imageUrl: "/images/lp/InteriorBasicsSection-focal.png",
	},
	{
		id: "wall-impact",
		title: "壁が与える影響力",
		description: "部屋の視界面積の約40%を占める壁。家具や小物を変えるよりも、壁の印象を変えるほうが空間全体に与える影響が大きいのです。",
		imageUrl: "/images/lp/InteriorBasicsSection-pie.png",
	},
];

export function InteriorBasicsSection() {
	return (
		<section className="py-16 bg-neutral-50 md:py-24">
			<Container>
				<div className="max-w-3xl mx-auto text-center mb-12">
					<h2 className="font-display text-3xl font-bold mb-6 md:text-4xl">
						知っておきたいインテリアの基本
					</h2>
					<p className="text-lg text-neutral-700">
						プロのインテリアデザイナーが実践する、シンプルだけど効果的な3つの原則をご紹介します。
					</p>
				</div>

				<div className="space-y-16">
					{interiorBasics.map((tip, index) => (
						<div
							key={tip.id}
							className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}
						>
							<div className="md:w-1/2">
								{tip.imageUrl ? (
									<div className="w-full flex justify-center">
										<div className="w-full max-w-xs md:max-w-sm rounded-xl overflow-hidden shadow-[0_0px_25px_rgba(0,0,0,0.12)]">
											<img
												src={tip.imageUrl}
												alt={tip.title}
												className="w-full h-auto object-contain rounded-xl"
											/>
										</div>
									</div>

								) : (
									<div className="w-full h-full flex items-center justify-center text-neutral-500">
										画像準備中
									</div>
								)}
							</div>

							<div className="md:w-1/2">
								<h3 className="text-2xl font-medium mb-4">
									{`${index + 1}. ${tip.title}`}
								</h3>
								<p className="text-lg text-neutral-700">
									{tip.description}
								</p>
							</div>
						</div>
					))}
				</div>

				<div className="mt-16 p-8 bg-white rounded-lg border border-neutral-200 shadow-sm">
					<h3 className="text-xl font-medium mb-4 text-center">
						プロのデザイナーが教える、シンプルな法則
					</h3>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						<div className="flex flex-col items-center text-center">
							<div className="w-16 h-16 rounded-full bg-primary-100 text-primary-500 flex items-center justify-center mb-4">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
									<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
								</svg>
							</div>
							<p className="text-neutral-700">
								<span className="font-medium">60-30-10の法則</span>：メインカラー60%、サブカラー30%、アクセントカラー10%の配分
							</p>
						</div>
						<div className="flex flex-col items-center text-center">
							<div className="w-16 h-16 rounded-full bg-primary-100 text-primary-500 flex items-center justify-center mb-4">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
									<circle cx="12" cy="12" r="10"></circle>
									<circle cx="12" cy="12" r="4"></circle>
								</svg>
							</div>
							<p className="text-neutral-700">
								<span className="font-medium">焦点の原則</span>：部屋に一つ、視線を集める「主役」を作る
							</p>
						</div>
						<div className="flex flex-col items-center text-center">
							<div className="w-16 h-16 rounded-full bg-primary-100 text-primary-500 flex items-center justify-center mb-4">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
									<path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"></path>
									<polyline points="14 2 14 8 20 8"></polyline>
									<path d="M2 13h10"></path>
									<path d="M5 16H7"></path>
									<path d="M5 19H9"></path>
								</svg>
							</div>
							<p className="text-neutral-700">
								<span className="font-medium">シンプルの法則</span>：要素は少なく、質と統一感を重視する
							</p>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}
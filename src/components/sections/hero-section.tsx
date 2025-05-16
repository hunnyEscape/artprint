import { Container } from "../layout/container";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
	return (
		<section className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
			<Container>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
					<div className="order-2 md:order-1">
						<h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
							貼るだけ<span className="text-accent-500">3分</span>、<br />
							部屋が変わる。
						</h1>
						<p className="text-lg md:text-xl text-neutral-700 mb-8 max-w-lg">
							賃貸OK・剥がしても跡が残らない<span className="font-medium">アートペーパー</span>。
							150種類以上のデザインから選んで、あなたの空間を一新しませんか？
						</p>
						<div className="flex flex-col sm:flex-row gap-4">
							<Link
								href="/gallery"
								className="bg-accent-500 text-white px-8 py-3 rounded-md font-medium text-lg hover:bg-accent-600 transition-colors inline-block text-center"
							>
								ラインナップを見る
							</Link>
							<Link
								href="/how-it-works"
								className="border border-neutral-300 px-8 py-3 rounded-md font-medium text-lg hover:bg-neutral-100 transition-colors inline-block text-center"
							>
								使い方を見る
							</Link>
						</div>
					</div>
					<div className="order-1 md:order-2 relative">
						<div className="aspect-[4/3] md:aspect-square relative rounded-lg overflow-hidden shadow-product">
							{/* 実際の画像がない場合のプレースホルダー */}
							<div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center">
								<p className="text-neutral-500 font-medium">実際の製品画像</p>
							</div>

							{/* 画像が用意できたら以下のコメントを外してください */}
							{/* <Image
                src="/images/hero-image.jpg"
                alt="部屋に貼られたアートペーパーの様子"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              /> */}
						</div>

						{/* 装飾要素 */}
						<div className="absolute -right-4 -bottom-4 w-32 h-32 rounded-full bg-accent-500/10 -z-10"></div>
						<div className="absolute -left-4 -top-4 w-24 h-24 rounded-full bg-primary-500/10 -z-10"></div>
					</div>
				</div>
			</Container>
		</section>
	);
}
import { Container } from "../layout/container";
import Link from "next/link";

export function CTASection() {
	return (
		<section className="py-16 md:py-24">
			<Container>
				<div
					className="rounded-2xl bg-primary-500 text-white overflow-hidden"
					style={{
						background: "linear-gradient(to right, hsl(196, 97%, 49%), hsl(220, 100%, 45%))"
					}}
				>
					<div className="px-6 py-12 md:px-12 md:py-16 text-center">
						<h2 className="text-3xl font-bold mb-4 md:text-4xl">
							あなたの部屋を今すぐアップデート
						</h2>
						<p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">
							たった3分の施工で、部屋の印象を一新。
							150種類以上のデザインから選べるArtpaperで、あなただけの空間を作りませんか？
						</p>
						<div className="flex flex-col sm:flex-row justify-center gap-4">
							<Link
								href="/gallery"
								className="bg-white text-primary-700 hover:bg-white/90 transition-colors px-8 py-4 rounded-md font-medium text-lg"
							>
								ラインナップを見る
							</Link>
							<Link
								href="/how-it-works"
								className="border border-white/30 hover:bg-white/10 transition-colors px-8 py-4 rounded-md font-medium text-lg"
							>
								施工方法を確認する
							</Link>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}
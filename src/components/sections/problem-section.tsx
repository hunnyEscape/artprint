import { Container } from "../layout/container";

export function ProblemSection() {
	return (
		<section className="py-16 bg-white md:py-24">
			<Container>
				<div className="max-w-3xl mx-auto text-center mb-12">
					<h2 className="font-display text-3xl font-bold mb-6 md:text-4xl">
						インテリアって、難しいですよね
					</h2>
					<p className="text-lg text-neutral-700 mb-8">
						「おしゃれな部屋にしたい」けれど、センスや時間、予算など、さまざまな壁にぶつかっていませんか？
					</p>
				</div>

				<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
					{/* 悩み1 */}
					<div className="bg-neutral-50 rounded-lg p-6 border border-neutral-100">
						<div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center mb-4 text-neutral-700">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
								<path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
								<path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
								<path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
								<line x1="2" x2="22" y1="2" y2="22"></line>
							</svg>
						</div>
						<h3 className="text-xl font-medium mb-3">センスに自信がない</h3>
						<p className="text-neutral-700">
							インテリア雑誌やSNSの素敵な部屋を見ても、「どうやって真似すればいいの？」と思ってしまう。色の組み合わせや配置のセンスに自信が持てない。
						</p>
					</div>

					{/* 悩み2 */}
					<div className="bg-neutral-50 rounded-lg p-6 border border-neutral-100">
						<div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center mb-4 text-neutral-700">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
								<circle cx="12" cy="12" r="10"></circle>
								<path d="M12 6v6l4 2"></path>
							</svg>
						</div>
						<h3 className="text-xl font-medium mb-3">時間とコストの問題</h3>
						<p className="text-neutral-700">
							家具を買い替えたり、DIYで壁を塗り替えたりするのは、時間もお金もかかる。賃貸だと原状回復のことも考えなければならない。
						</p>
					</div>

					{/* 悩み3 */}
					<div className="bg-neutral-50 rounded-lg p-6 border border-neutral-100">
						<div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center mb-4 text-neutral-700">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
								<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
								<line x1="12" x2="12" y1="9" y2="13"></line>
								<line x1="12" x2="12.01" y1="17" y2="17"></line>
							</svg>
						</div>
						<h3 className="text-xl font-medium mb-3">失敗するリスク</h3>
						<p className="text-neutral-700">
							せっかくお金をかけても、イメージと違ったらどうしよう。大きな家具を買ったのに部屋に合わなかったら後悔する。
						</p>
					</div>
				</div>

				<div className="mt-12 text-center">
					<p className="text-lg font-medium text-neutral-800">
						でも、実はインテリアのイメージを劇的に変える<span className="font-bold text-primary-500">シンプルな方法</span>があります。
					</p>
				</div>
			</Container>
		</section>
	);
}
import { Container } from "../layout/container";
import { ECLinkButton } from "../ui/ec-link-button";

export function SolutionSection() {
	return (
		<section className="py-16 bg-white md:py-24">
			<Container>
				<div className="max-w-3xl mx-auto mb-16">
					<div className="text-center mb-12">
						<h2 className="font-display text-3xl font-bold mb-6 md:text-4xl">
							壁を変えれば、部屋が変わる
						</h2>
						<p className="text-lg text-neutral-700">
							インテリアで悩むなら、まず壁に注目してみましょう。Artpaperは、シンプルでありながら最も効果的な解決策を提供します。
						</p>
					</div>

					<div className="bg-neutral-50 rounded-xl p-8 border border-neutral-100">
						<h3 className="text-xl font-medium mb-6 text-center">
							なぜ壁から変えるのが最も合理的なのか
						</h3>

						<div className="space-y-6">
							{/* 理由1 */}
							<div className="flex gap-4">
								<div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold">1</div>
								<div>
									<h4 className="text-lg font-medium mb-2">視界面積が大きく、色彩・印象コントロール力が高い</h4>
									<p className="text-neutral-700">
										部屋の印象の約40%は壁が決めると言われています。家具や小物を何個変えるよりも、壁一面の印象を変えるほうが劇的な効果があります。
									</p>
								</div>
							</div>

							{/* 理由2 */}
							<div className="flex gap-4">
								<div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold">2</div>
								<div>
									<h4 className="text-lg font-medium mb-2">家具と違い「重くない・邪魔にならない・捨てやすい」</h4>
									<p className="text-neutral-700">
										大きな家具の購入は予算も場所も必要です。一方、壁のアートは収納スペースを取らず、気分転換したいときも手軽に変えられます。
									</p>
								</div>
							</div>

							{/* 理由3 */}
							<div className="flex gap-4">
								<div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold">3</div>
								<div>
									<h4 className="text-lg font-medium mb-2">一度の投資で何度でも貼り直せる</h4>
									<p className="text-neutral-700">
										Artpaperは再剥離シートなので、貼る位置を変えたり、別の部屋に移動したりと、PDCAを高速回転させながら最適な空間づくりができます。
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="bg-primary-50 text-neutral-900 rounded-xl p-8 md:p-12">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
						<div>
							<h3 className="text-2xl font-bold mb-4">
								Artpaperなら、理想の部屋づくりがもっと簡単に
							</h3>
							<ul className="space-y-4">
								<li className="flex items-start gap-3">
									<svg className="w-6 h-6 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
										<polyline points="20 6 9 17 4 12"></polyline>
									</svg>
									<span>賃貸OKの再剥離シートで、壁を傷めず原状回復も簡単</span>
								</li>
								<li className="flex items-start gap-3">
									<svg className="w-6 h-6 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
										<polyline points="20 6 9 17 4 12"></polyline>
									</svg>
									<span>150種類以上のアートから選べる、あなただけの空間づくり</span>
								</li>
								<li className="flex items-start gap-3">
									<svg className="w-6 h-6 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
										<polyline points="20 6 9 17 4 12"></polyline>
									</svg>
									<span>道具いらずで3分の簡単施工、1人でも完結</span>
								</li>
								<li className="flex items-start gap-3">
									<svg className="w-6 h-6 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
										<polyline points="20 6 9 17 4 12"></polyline>
									</svg>
									<span>家具購入より圧倒的に低コスト、失敗しても貼り替えるだけ</span>
								</li>
							</ul>
						</div>
						<div className="flex justify-center md:justify-end">
							<div className="flex flex-col items-center gap-4">
								<p className="text-lg font-medium">あなたの部屋をもっと素敵に</p>
								<ECLinkButton
									href="https://ec.artpaper.com/products"
									location="solution"
									variant="primary"
									className="bg-primary-500 text-white px-8 py-4 text-lg shadow-lg hover:bg-primary-900 hover:border-primary-900"
								>
									商品を見てみる
								</ECLinkButton>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}
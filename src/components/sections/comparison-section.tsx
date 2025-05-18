import { Container } from "../layout/container";
import { ECLinkButton } from "../ui/ec-link-button";

type ComparisonItem = {
	feature: string;
	artpaper: string | React.ReactNode;
	poster: string | React.ReactNode;
	furniture: string | React.ReactNode;
};

const comparisonData: ComparisonItem[] = [
	{
		feature: "初期コスト",
		artpaper: "¥2,480(一枚あたり826円)",
		poster: "¥7,000〜",
		furniture: "¥2,000〜",
	},
	{
		feature: "設置時間",
		artpaper: "約3分",
		poster: "約10分",
		furniture: "数時間〜",
	},
	{
		feature: "原状回復",
		artpaper: (
			<span className="flex items-center text-green-600">
				<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
					<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
				</svg>
				簡単
			</span>
		),
		poster: (
			<span className="flex items-center text-yellow-600">
				<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
					<path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
				</svg>
				ピン跡残る
			</span>
		),
		furniture: (
			<span className="flex items-center text-green-600">
				<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
					<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
				</svg>
				簡単
			</span>
		),
	},
	{
		feature: "失敗時のリスク",
		artpaper: (
			<span className="flex items-center text-green-600">
				<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
					<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
				</svg>
				貼り直すだけ、捨てやすい
			</span>
		),
		poster: (
			<span className="flex items-center text-yellow-600">
				<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
					<path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
				</svg>
				フレームがかさむ、捨てづらい
			</span>
		),
		furniture: (
			<span className="flex items-center text-yellow-600">
				<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
					<path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
				</svg>
				捨てづらい、ホコリがたまる
			</span>
		),
	},
	{
		feature: "空間の色調整力",
		artpaper: (
			<span className="flex items-center text-green-600">
				<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
					<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
				</svg>
				大
			</span>
		),
		poster: (
			<span className="flex items-center text-green-600">
				<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
					<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
				</svg>
				大
			</span>
		),
		furniture: (
			<span className="flex items-center text-yellow-600">
				<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
					<path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
				</svg>
				小～中
			</span>
		),
	},
	{
		feature: "種類の豊富さ",
		artpaper: "あらゆる世界観のアート150種類以上を提供。新作も次々と。",
		poster: "量産品は限られる",
		furniture: "基本同じ",
	},
];

export function ComparisonSection() {
	return (
		<section className="py-16 bg-neutral-50 md:py-24">
			<Container>
				<div className="max-w-3xl mx-auto text-center mb-12">
					<h2 className="font-display text-3xl font-bold mb-6 md:text-4xl">
						なぜArtpaperが選ばれるのか
					</h2>
					<p className="text-lg text-neutral-700">
						他のインテリア変更方法と比較すると、Artpaperが「早い・高コスパ・失敗しても痛くない」選択肢であることがわかります。
					</p>
				</div>

				<div className="overflow-x-auto">
					<table className="w-full border-collapse">
						<thead>
							<tr className="border-b-2 border-neutral-200">
								<th className="p-4 text-left"></th>
								<th className="p-4 text-center bg-primary-100 rounded-t-lg">
									<div className="flex flex-col items-center">
										<span className="font-bold text-lg text-primary-700">Artpaper</span>
										<span className="text-sm text-primary-600">大型アートポスター</span>
									</div>
								</th>
								<th className="p-4 text-center">
									<div className="flex flex-col items-center">
										<span className="font-bold text-lg">ファブリックパネル</span>
										<span className="text-sm text-neutral-600">量産の大型サイズ</span>
									</div>
								</th>
								<th className="p-4 text-center">
									<div className="flex flex-col items-center">
										<span className="font-bold text-lg">インテリア品</span>
										<span className="text-sm text-neutral-600">カーペット/観葉植物など</span>
									</div>
								</th>
							</tr>
						</thead>
						<tbody>
							{comparisonData.map((item, index) => (
								<tr
									key={`comparison-${index}`}
									className={index % 2 === 0 ? "bg-white" : "bg-neutral-50"}
								>
									<td className="p-4 font-medium">{item.feature}</td>
									<td className="p-4 text-center bg-primary-50">{item.artpaper}</td>
									<td className="p-4 text-center">{item.poster}</td>
									<td className="p-4 text-center">{item.furniture}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>

				<div className="mt-12 p-6 bg-white rounded-lg border border-neutral-200 shadow-sm">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
						<div>
							<h3 className="text-xl font-medium mb-4">
								「早い・高コスパ・失敗しても痛くない」
							</h3>
							<p className="text-neutral-700 mb-4">
								Artpaperは、インテリア改善の中で最もコストパフォーマンスが高い選択肢です。特にインテリア初心者や賃貸にお住まいの方にとって、リスクを最小限に抑えながら部屋の空間を試行錯誤できます。
							</p>
							<ECLinkButton
								href="https://ec.artpaper.com/products"
								location="comparison"
								variant="primary"
								className="mt-2"
							>
								商品を見る
							</ECLinkButton>
						</div>
						<div className="bg-neutral-100 p-6 rounded-lg">
							<h4 className="font-medium mb-3">Artpaperを選ぶ理由</h4>
							<ul className="space-y-2">
								<li className="flex items-start gap-2">
									<svg className="w-5 h-5 text-green-500 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
										<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
									</svg>
									<span>賃貸物件でも気兼ねなく利用できる</span>
								</li>
								<li className="flex items-start gap-2">
									<svg className="w-5 h-5 text-green-500 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
										<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
									</svg>
									<span>DIY初心者でも3分で完成</span>
								</li>
								<li className="flex items-start gap-2">
									<svg className="w-5 h-5 text-green-500 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
										<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
									</svg>
									<span>イメージが違っても貼り直しOK</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}
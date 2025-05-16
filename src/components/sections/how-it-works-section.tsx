import { Container } from "../layout/container";
import Image from "next/image";

type Step = {
	number: number;
	title: string;
	description: string;
};

const steps: Step[] = [
	{
		number: 1,
		title: "サイズと位置を決める",
		description: "壁のどの位置に貼るか、サイズを測って決めましょう。必要に応じて軽くマーキングをしておくとスムーズです。",
	},
	{
		number: 2,
		title: "シートを剥がして貼る",
		description: "裏面の剥離紙をゆっくり剥がしながら、上から下へ壁に貼っていきます。位置がずれても簡単に調整できます。",
	},
	{
		number: 3,
		title: "手で押さえて気泡を抜く",
		description: "貼り付けた後、手のひらで中央から端に向かって軽く押さえ、気泡を抜きます。それだけで施工完了です。",
	},
];

export function HowItWorksSection() {
	return (
		<section className="py-16 md:py-24 bg-neutral-50">
			<Container>
				<div className="text-center mb-12 md:mb-16">
					<h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
						かんたん3ステップで施工完了
					</h2>
					<p className="text-neutral-700 max-w-2xl mx-auto">
						特別な道具も技術も必要ありません。誰でも簡単に、たった3分で部屋の雰囲気を一新できます。
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<div className="order-2 lg:order-1">
						<div className="space-y-8">
							{steps.map((step) => (
								<div key={step.number} className="flex gap-4">
									<div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold text-xl">
										{step.number}
									</div>
									<div>
										<h3 className="text-xl font-medium mb-2">{step.title}</h3>
										<p className="text-neutral-700">{step.description}</p>
									</div>
								</div>
							))}
						</div>
					</div>

					<div className="order-1 lg:order-2 relative">
						<div className="aspect-[4/5] relative rounded-lg overflow-hidden shadow-product">
							{/* 実際の画像がない場合のプレースホルダー */}
							<div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10 flex items-center justify-center">
								<p className="text-neutral-500 font-medium">施工手順の様子</p>
							</div>

							{/* 画像が用意できたら以下のコメントを外してください */}
							{/* <Image
                src="/images/how-it-works.jpg"
                alt="アートペーパーの施工手順"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              /> */}
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}
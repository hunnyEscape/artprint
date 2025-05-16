import { Container } from "../layout/container";

type Testimonial = {
	id: string;
	name: string;
	role: string;
	content: string;
	rating: number;
};

const testimonials: Testimonial[] = [
	{
		id: "1",
		name: "鈴木 健太",
		role: "ワンルーム在住 / 28歳",
		content: "賃貸物件の壁に穴を開けられないので諦めていましたが、これなら簡単に部屋の雰囲気を変えられます。剥がすときも跡が残らず、引っ越し時も安心です。",
		rating: 5,
	},
	{
		id: "2",
		name: "田中 結衣",
		role: "1LDK在住 / 32歳",
		content: "インテリアを変えたいけど家具を買い換えるほどではない...そんなときにArtpaperは最適です。たった3分で部屋の印象がガラリと変わりました。",
		rating: 4,
	},
	{
		id: "3",
		name: "佐藤 雄太",
		role: "2DK在住 / 35歳",
		content: "リモートワークが増えて、ビデオ会議の背景に悩んでいました。Artpaperを貼ってからは、同僚からの評判も上々です。デザインの種類も豊富で選ぶのが楽しい。",
		rating: 5,
	},
];

export function TestimonialsSection() {
	return (
		<section className="py-16 bg-neutral-50 md:py-24">
			<Container>
				<div className="text-center mb-12">
					<h2 className="font-display text-3xl font-bold mb-4 md:text-4xl">
						お客様の声
					</h2>
					<p className="text-neutral-700 max-w-2xl mx-auto">
						Artpaperを実際に使用されたお客様からいただいた感想をご紹介します。
					</p>
				</div>

				<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
					{testimonials.map((testimonial) => (
						<div
							key={testimonial.id}
							className="bg-white p-6 rounded-lg shadow-card"
						>
							<div className="flex items-center mb-4">
								{/* 星評価 */}
								<div className="flex text-accent-500">
									{[...Array(5)].map((_, i) => (
										<svg
											key={i}
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill={i < testimonial.rating ? "currentColor" : "none"}
											stroke={i < testimonial.rating ? "none" : "currentColor"}
											className="w-5 h-5"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
											/>
										</svg>
									))}
								</div>
							</div>

							<p className="text-neutral-700 mb-6">{testimonial.content}</p>

							<div className="mt-auto">
								<p className="font-medium">{testimonial.name}</p>
								<p className="text-sm text-neutral-600">{testimonial.role}</p>
							</div>
						</div>
					))}
				</div>
			</Container>
		</section>
	);
}
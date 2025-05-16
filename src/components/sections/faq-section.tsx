'use client';

import { Container } from "../layout/container";
import { useState } from "react";
import { ECLinkButton } from "../ui/ec-link-button";

type FAQItem = {
	question: string;
	answer: React.ReactNode;
};

const faqItems: FAQItem[] = [
	{
		question: "賃貸物件でも使えますか？",
		answer: (
			<>
				<p>はい、賃貸物件でも安心してご使用いただけます。Artpaperは特殊な再剥離シートを使用しており、剥がした後に跡が残りません。</p>
				<p className="mt-2">原状回復も簡単に行えるので、引っ越しの際も安心です。</p>
			</>
		),
	},
	{
		question: "どのくらいの時間で貼れますか？",
		answer: (
			<p>初めての方でも約3分で貼ることができます。特別な道具は必要なく、位置決め→シート剥がし→壁に貼る→空気を抜く、の簡単4ステップです。詳しい手順は製品に同梱されている説明書をご覧いただくか、当サイトの「使い方」セクションをご参照ください。</p>
		),
	},
	{
		question: "貼り直しはできますか？",
		answer: (
			<p>はい、何度でも貼り直しができます。位置がずれた場合やイメージと違った場合でも、ゆっくりと剥がして再度貼り付けることができます。何度も貼り直すと粘着力が弱まることがありますが、基本的には数回の貼り直しであれば問題ありません。</p>
		),
	},
	{
		question: "どんな壁面に貼れますか？",
		answer: (
			<>
				<p>一般的な壁紙、ペンキ塗装面、プラスター壁、ガラス面など、平滑な面であれば貼ることができます。</p>
				<p className="mt-2">ただし、以下の面には適していません：</p>
				<ul className="list-disc pl-5 mt-1">
					<li>凹凸の激しい壁面</li>
					<li>砂壁・土壁など粉が出る壁面</li>
					<li>撥水加工されている面</li>
					<li>汚れや湿気の多い場所</li>
				</ul>
			</>
		),
	},
	{
		question: "サイズのカスタマイズはできますか？",
		answer: (
			<p>現在、標準サイズ（W900mm × H1200mm）のみのご提供となっております。ただし、カットして使用することも可能です。特注サイズをご希望の場合は、お問い合わせフォームよりご相談ください。</p>
		),
	},
	{
		question: "配送・納期について教えてください",
		answer: (
			<p>ご注文確定後、通常2〜4営業日以内に発送いたします。配送は日本全国対応で、配送業者はヤマト運輸を利用しています。送料は一律¥880（税込）ですが、¥10,000以上のご注文で送料無料となります。</p>
		),
	},
];

export function FAQSection() {
	const [openItem, setOpenItem] = useState<number | null>(null);

	const toggleItem = (index: number) => {
		setOpenItem(openItem === index ? null : index);
	};

	return (
		<section className="py-16 bg-neutral-50 md:py-24">
			<Container>
				<div className="max-w-3xl mx-auto text-center mb-12">
					<h2 className="font-display text-3xl font-bold mb-6 md:text-4xl">
						よくある質問
					</h2>
					<p className="text-lg text-neutral-700">
						Artpaperについてよくいただく質問をまとめました。
					</p>
				</div>

				<div className="max-w-3xl mx-auto">
					<div className="space-y-4">
						{faqItems.map((item, index) => (
							<div
								key={`faq-${index}`}
								className="border border-neutral-200 rounded-lg overflow-hidden bg-white"
							>
								<button
									className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
									onClick={() => toggleItem(index)}
								>
									<span className="font-medium">{item.question}</span>
									<svg
										className={`w-5 h-5 transition-transform ${openItem === index ? 'transform rotate-180' : ''}`}
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
									</svg>
								</button>
								<div
									className={`px-6 pb-4 text-neutral-700 ${openItem === index ? 'block' : 'hidden'}`}
								>
									{item.answer}
								</div>
							</div>
						))}
					</div>

					<div className="mt-12 text-center">
						<p className="mb-6">
							他にもご質問がございましたら、お気軽にお問い合わせください。
						</p>
						<div className="flex flex-col sm:flex-row justify-center gap-4">
							<ECLinkButton
								href="https://ec.artpaper.com/products"
								location="faq"
								variant="primary"
							>
								商品を見る
							</ECLinkButton>
							<ECLinkButton
								href="https://ec.artpaper.com/contact"
								location="faq"
								variant="outline"
							>
								お問い合わせ
							</ECLinkButton>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}
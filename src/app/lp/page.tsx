import { HeroSection } from "@/components/sections/hero-section";
import { ProblemSection } from "@/components/sections/problem-section";
import { InteriorBasicsSection } from "@/components/sections/interior-basics-section";
import { SolutionSection } from "@/components/sections/solution-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { ComparisonSection } from "@/components/sections/comparison-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { CaseStudySection } from "@/components/sections/case-study-section";
import { SubscriptionCTASection } from "@/components/sections/subscription-cta-section";
import { LimitedCollectionSection } from "@/components/sections/limited-collection-section";
import { NextReleaseCountdownSection } from "@/components/sections/next-release-countdown-section";
import { GalleryPreviewSection } from "@/components/sections/gallery-preview-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FAQSection } from "@/components/sections/faq-section";
import { CTASection } from "@/components/sections/cta-section";
import { PageAnalytics } from "@/components/analytics/page-analytics";
import { Metadata } from "next";
import { featuredProducts } from '@/data/featured-products';
import { ProductShowcaseSection } from '@/components/showcase/ProductShowcaseSection';
import { ShowcaseProvider } from '@/contexts/ShowcaseContext';
import { ShowcaseBackgroundManager } from '@/components/showcase/ShowcaseBackgroundManager';

export const metadata: Metadata = {
	title: 'Artpaper | 貼るだけで部屋の世界観が変わる大型AIアート',
	description: '賃貸OK・跡が残らない再剥離シートで、150種類以上のアートから選べる大型ポスター。部屋の雰囲気を一新するインテリアアート。',
}

export default function LandingPage() {
	// トラッキングするセクションIDのリスト
	const sectionIds = [
		'hero-section',
		'problem-section',
		'interior-basics-section',
		'solution-section',
		'features-section',
		'comparison-section',
		'how-it-works-section',
		'case-study-section',
		'subscription-section',
		'limited-collection-section',
		'next-release-section',
		'gallery-preview-section',
		'testimonials-section',
		'faq-section',
		'cta-section',
		'showcase-section'
	];

	return (
		<>
			{/* アナリティクストラッキングコンポーネント */}
			<PageAnalytics sectionIds={sectionIds} />

			{/* 各セクションにID属性を追加 */}
			<div id="hero-section" data-section-name="ヒーローセクション">
				<HeroSection />
			</div>
			<div id="problem-section" data-section-name="問題提起セクション">
				<ProblemSection />
			</div>
			<div id="interior-basics-section" data-section-name="インテリア基礎知識">
				<InteriorBasicsSection />
			</div>
			<div id="solution-section" data-section-name="解決法の提示">
				<SolutionSection />
			</div>
			<div id="features-section" data-section-name="特徴セクション">
				<FeaturesSection />
			</div>
			<div id="comparison-section" data-section-name="比較セクション">
				<ComparisonSection />
			</div>
			<div id="how-it-works-section" data-section-name="使い方セクション">
				<HowItWorksSection />
			</div>
			<div id="case-study-section" data-section-name="実例セクション">
				<CaseStudySection />
			</div>
			<div id="subscription-section" data-section-name="サブスクリプション">
				<SubscriptionCTASection />
			</div>
			<div id="limited-collection-section" data-section-name="限定コレクション">
				<LimitedCollectionSection />
			</div>
			<div id="next-release-section" data-section-name="次回リリース">
				<NextReleaseCountdownSection />
			</div>
			<div id="gallery-preview-section" data-section-name="ギャラリープレビュー">
				<GalleryPreviewSection />
			</div>
			<div id="testimonials-section" data-section-name="お客様の声">
				<TestimonialsSection />
			</div>
			<div id="faq-section" data-section-name="よくある質問">
				<FAQSection />
			</div>
			<div id="cta-section" data-section-name="CTA">
				<CTASection />
			</div>
			<div id="gallery-section" data-section-name="ギャラリー">
				<ShowcaseProvider initialProducts={featuredProducts}>
					{/* グローバル背景マネージャー */}
					<ShowcaseBackgroundManager />

					<div className="showcase-gallery">
						{/* 各壁紙製品に対してセクションを順番に表示 */}
						{featuredProducts.map((product, index) => (
							<ProductShowcaseSection
								key={product.id}
								product={product}
								index={index}
								totalProducts={featuredProducts.length}
							/>
						))}

						{/* 余白を追加して最後のセクションが完全に表示されるようにする */}
						<div className="h-[50vh]"></div>
					</div>
				</ShowcaseProvider>
			</div>
		</>
	);
}
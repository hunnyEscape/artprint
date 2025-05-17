-e 
### FILE: ./src/data/featured-products.ts

export interface ProductImage {
	id: string;
	url: string;
	alt: string;
	type: 'main' | 'thumbnail' | 'lifestyle' | 'detail';
	order: number;
}

export interface ProductVariant {
	id: string;
	name: string;
	colorCode?: string;
	imageUrl?: string;
	price?: number;
	stock?: number;
}

export interface Product {
	id: string;
	title: string;
	subtitle?: string;
	description: string;
	price: number;
	discount?: {
		percentage: number;
		endDate?: Date;
	};

	// 画像関連
	images: ProductImage[];

	// バリエーション
	variants?: ProductVariant[];

	// 商品情報
	features: string[];
	specifications: { [key: string]: string };
	dimensions: {
		width: number;
		height: number;
		unit: 'cm' | 'mm' | 'inch';
	};

	// メタ情報
	category: string;
	tags: string[];
	popularity: number;
	rating?: {
		average: number;
		count: number;
	};

	// デザイン情報
	layoutType: 'standard' | 'dark' | 'minimalist' | 'immersive';
	accentColor?: string;

	// 表示順
	order: number;
}

// サンプル商品データ
export const featuredProducts: Product[] = [
	{
		id: "art001",
		title: "Urban Horizon",
		subtitle: "モダン都市風景",
		description: "都会的な風景をモダンなタッチで描いたアート作品。リビングやワークスペースに最適な、洗練された雰囲気を演出します。",
		price: 5800,
		discount: {
			percentage: 15,
			endDate: new Date(2025, 5, 30)
		},
		images: [
			{
				id: "art001-main",
				url: "/images/products/urban-horizon-main.png",
				alt: "Urban Horizon メイン画像",
				type: "main",
				order: 1
			},
			{
				id: "art001-thumb1",
				url: "/images/products/urban-horizon-thumb1.png",
				alt: "リビングルームでの設置例",
				type: "lifestyle",
				order: 2
			},
			{
				id: "art001-detail",
				//url: "/images/products/urban-horizon-detail.jpg",
				url: "/images/products/urban-horizon-thumb1.png",
				alt: "質感の詳細",
				type: "detail",
				order: 3
			}
		],
		features: [
			"高解像度プリント",
			"耐久性のある特殊コーティング",
			"賃貸物件でも安心の再剥離シート",
			"壁を傷めない接着技術",
			"簡単3分施工"
		],
		specifications: {
			"素材": "特殊再剥離シート",
			"サイズ": "W900mm x H1200mm",
			"厚さ": "0.2mm",
			"重量": "約300g"
		},
		dimensions: {
			width: 900,
			height: 1200,
			unit: "mm"
		},
		category: "モダン",
		tags: ["都市", "モダン", "ブルー", "リビング向け"],
		popularity: 92,
		rating: {
			average: 4.7,
			count: 28
		},
		layoutType: "standard",
		accentColor: "#3B82F6",
		order: 1
	},
	{
		id: "art002",
		title: "Nature Harmony",
		subtitle: "ナチュラルインテリア",
		description: "自然をモチーフにした落ち着いたデザイン。家の中に癒しの空間を作り出すアートペーパーです。リラックス効果のある色合いで寝室やリビングに最適です。",
		price: 5800,
		images: [
			{
				id: "art002-main",
				url: "/images/products/nature-harmony-main.png",
				alt: "Nature Harmony メイン画像",
				type: "main",
				order: 1
			},
			{
				id: "art002-thumb1",
				url: "/images/products/nature-harmony-thumb1.png",
				alt: "ベッドルームでの設置例",
				type: "lifestyle",
				order: 2
			},
			{
				id: "art002-thumb2",
				url: "/images/products/nature-harmony-thumb2.png",
				alt: "リビングでの設置例",
				type: "lifestyle",
				order: 3
			}
		],
		features: [
			"環境に優しい素材とインク",
			"癒し効果のあるグリーントーン",
			"賃貸物件でも安心の再剥離シート",
			"湿気に強い特殊加工",
			"簡単3分施工"
		],
		specifications: {
			"素材": "特殊再剥離シート",
			"サイズ": "W900mm x H1200mm",
			"厚さ": "0.2mm",
			"重量": "約300g"
		},
		dimensions: {
			width: 900,
			height: 1200,
			unit: "mm"
		},
		category: "ナチュラル",
		tags: ["自然", "グリーン", "癒し", "寝室向け"],
		popularity: 85,
		rating: {
			average: 4.5,
			count: 22
		},
		layoutType: "dark",
		accentColor: "#10B981",
		order: 2
	},
	{
		id: "art003",
		title: "Geometric Dreams",
		subtitle: "ミニマルデザイン",
		description: "幾何学模様が織りなす現代的なデザイン。シンプルでありながら存在感のあるアートペーパーです。どんなインテリアにもマッチする汎用性の高さが特徴です。",
		price: 5800,
		images: [
			{
				id: "art003-main",
				url: "/images/products/geometric-dreams-main.png",
				alt: "Geometric Dreams メイン画像",
				type: "main",
				order: 1
			},
			{
				id: "art003-thumb1",
				url: "/images/products/geometric-dreams-thumb1.png",
				alt: "ダイニングでの設置例",
				type: "lifestyle",
				order: 2
			},
			{
				id: "art003-thumb2",
				url: "/images/products/geometric-dreams-thumb1.png",
				//url: "/images/products/geometric-dreams-thumb2.jpg",
				alt: "ワークスペースでの設置例",
				type: "lifestyle",
				order: 3
			}
		],
		features: [
			"精密な幾何学パターン",
			"どんな部屋にも合うニュートラルカラー",
			"賃貸物件でも安心の再剥離シート",
			"汚れに強いコーティング",
			"簡単3分施工"
		],
		specifications: {
			"素材": "特殊再剥離シート",
			"サイズ": "W900mm x H1200mm",
			"厚さ": "0.2mm",
			"重量": "約300g"
		},
		dimensions: {
			width: 900,
			height: 1200,
			unit: "mm"
		},
		category: "ミニマル",
		tags: ["幾何学", "モノトーン", "ミニマル", "多目的"],
		popularity: 88,
		rating: {
			average: 4.8,
			count: 35
		},
		layoutType: "minimalist",
		accentColor: "#6B7280",
		order: 3
	},
	{
		id: "art004",
		title: "Cosmic Journey",
		subtitle: "壮大な宇宙デザイン",
		description: "宇宙をテーマにした壮大なデザイン。夜空の星や銀河をモチーフにした神秘的な雰囲気が特徴です。リビングや寝室に非日常的な空間を作り出します。",
		price: 5800,
		discount: {
			percentage: 10,
			endDate: new Date(2025, 4, 15)
		},
		images: [
			{
				id: "art004-main",
				url: "/images/products/cosmic-journey-main.png",
				alt: "Cosmic Journey メイン画像",
				type: "main",
				order: 1
			},
			{
				id: "art004-thumb1",
				url: "/images/products/cosmic-journey-thumb1.png",
				alt: "寝室での設置例",
				type: "lifestyle",
				order: 2
			},
			{
				id: "art004-thumb2",
				url: "/images/products/cosmic-journey-thumb2.png",
				alt: "リビングでの設置例",
				type: "lifestyle",
				order: 3
			}
		],
		features: [
			"宇宙をテーマにした幻想的なデザイン",
			"暗い環境で映える色彩設計",
			"賃貸物件でも安心の再剥離シート",
			"高精細プリント技術",
			"簡単3分施工"
		],
		specifications: {
			"素材": "特殊再剥離シート",
			"サイズ": "W900mm x H1200mm",
			"厚さ": "0.2mm",
			"重量": "約300g"
		},
		dimensions: {
			width: 900,
			height: 1200,
			unit: "mm"
		},
		category: "ファンタジー",
		tags: ["宇宙", "ダーク", "ファンタジー", "寝室向け"],
		popularity: 90,
		rating: {
			average: 4.9,
			count: 42
		},
		layoutType: "immersive",
		accentColor: "#8B5CF6",
		order: 4
	}
];

// 商品画像がない場合に表示するプレースホルダー画像URL
export const placeholderImageUrl = "/images/placeholder.jpg";

// 商品IDから商品データを取得する関数
export function getProductById(productId: string): Product | undefined {
	return featuredProducts.find(product => product.id === productId);
}

// 商品のメイン画像URLを取得する関数
export function getMainImageUrl(product: Product): string {
	const mainImage = product.images.find(img => img.type === 'main');
	return mainImage?.url || placeholderImageUrl;
}

// 商品のサムネイル画像一覧を取得する関数
export function getThumbnailImages(product: Product): ProductImage[] {
	return product.images
		.filter(img => img.type === 'thumbnail' || img.type === 'lifestyle' || img.type === 'detail')
		.sort((a, b) => a.order - b.order);
}-e 
### FILE: ./src/contexts/ShowcaseContext.tsx

'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { Product } from '@/data/featured-products';

// コンテキストの型定義を拡張
interface ShowcaseContextType {
  activeSection: string | null;
  activeSectionIndex: number;
  activeProduct: Product | null;
  nextProduct: Product | null;
  previousProduct: Product | null;
  setActiveSection: (sectionId: string) => void;
  setActiveSectionIndex: (index: number) => void;
  setActiveProduct: (product: Product) => void;
  setNextProduct: (product: Product | null) => void;
  setPreviousProduct: (product: Product | null) => void;
  registerSection: (sectionId: string, products: Product[]) => void;
  unregisterSection: (sectionId: string) => void;
  sections: Record<string, { products: Product[] }>;
  allProducts: Product[];
  // 新しく追加した機能
  scrollDirection: 'up' | 'down';
  isTransitioning: boolean;
  setIsTransitioning: (isTransitioning: boolean) => void;
}

// デフォルト値を拡張
const defaultContext: ShowcaseContextType = {
  activeSection: null,
  activeSectionIndex: 0,
  activeProduct: null,
  nextProduct: null,
  previousProduct: null,
  setActiveSection: () => {},
  setActiveSectionIndex: () => {},
  setActiveProduct: () => {},
  setNextProduct: () => {},
  setPreviousProduct: () => {},
  registerSection: () => {},
  unregisterSection: () => {},
  sections: {},
  allProducts: [],
  // 新しいデフォルト値
  scrollDirection: 'down',
  isTransitioning: false,
  setIsTransitioning: () => {}
};

// コンテキスト作成
const ShowcaseContext = createContext<ShowcaseContextType>(defaultContext);

// コンテキストプロバイダー
export const ShowcaseProvider = ({ children, initialProducts = [] }: { children: ReactNode, initialProducts?: Product[] }) => {
  const [state, setState] = useState({
    activeSection: null as string | null,
    activeSectionIndex: 0,
    activeProduct: null as Product | null,
    nextProduct: null as Product | null,
    previousProduct: null as Product | null,
    sections: {} as Record<string, { products: Product[] }>,
    allProducts: initialProducts,
    // 新しい状態
    scrollDirection: 'down' as 'up' | 'down',
    isTransitioning: false
  });
  
  const { 
    activeSection, 
    activeSectionIndex, 
    activeProduct, 
    nextProduct, 
    previousProduct, 
    sections, 
    allProducts, 
    scrollDirection, 
    isTransitioning 
  } = state;

  // スクロール方向の検出
  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY ? 'down' : 'up';
      
      if (scrollDirection !== direction) {
        setState(prev => ({
          ...prev,
          scrollDirection: direction
        }));
      }
      
      lastScrollY = currentScrollY;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollDirection]);

  // アクティブセクションを設定
  const setActiveSection = useCallback((sectionId: string) => {
    setState(prev => ({
      ...prev,
      activeSection: sectionId
    }));
  }, []);

  // アクティブセクションインデックスを設定
  const setActiveSectionIndex = useCallback((index: number) => {
    setState(prev => ({
      ...prev,
      activeSectionIndex: index
    }));
  }, []);

  // トランジション状態設定関数
  const setIsTransitioning = useCallback((value: boolean) => {
    setState(prev => ({
      ...prev,
      isTransitioning: value
    }));
  }, []);

  // アクティブ製品を設定（同じ製品の場合は更新しない）
  const setActiveProduct = useCallback((product: Product | null) => {
    // 同じ製品が選択された場合は更新しない（IDで比較）
    if (activeProduct && product && activeProduct.id === product.id) {
      return;
    }
    
    // トランジション開始
    setState(prev => ({
      ...prev,
      isTransitioning: true
    }));
    
    setState(prev => {
      // 更新されるアクティブな製品情報
      const updatedState: Partial<typeof prev> = {
        activeProduct: product
      };
      
      // 製品が指定された場合、前後の製品も設定
      if (product && allProducts.length > 0) {
        const currentIndex = allProducts.findIndex(p => p.id === product.id);
        
        // 次の製品を設定（存在する場合）
        if (currentIndex >= 0 && currentIndex < allProducts.length - 1) {
          updatedState.nextProduct = allProducts[currentIndex + 1];
        } else {
          updatedState.nextProduct = null;
        }
        
        // 前の製品を設定（存在する場合）
        if (currentIndex > 0) {
          updatedState.previousProduct = allProducts[currentIndex - 1];
        } else {
          updatedState.previousProduct = null;
        }
      } else {
        // 製品が指定されなかった場合はnullに設定
        updatedState.nextProduct = null;
        updatedState.previousProduct = null;
      }
      
      return {
        ...prev,
        ...updatedState
      };
    });
    
    // トランジション完了後にフラグをリセット
    setTimeout(() => {
      setState(prev => ({
        ...prev,
        isTransitioning: false
      }));
    }, 800); // トランジション時間に合わせる
  }, [activeProduct, allProducts]);

  // 次の製品を明示的に設定する関数
  const setNextProduct = useCallback((product: Product | null) => {
    setState(prev => ({
      ...prev,
      nextProduct: product
    }));
  }, []);

  // 前の製品を明示的に設定する関数
  const setPreviousProduct = useCallback((product: Product | null) => {
    setState(prev => ({
      ...prev,
      previousProduct: product
    }));
  }, []);

  // セクションの登録
  const registerSection = useCallback((sectionId: string, products: Product[]) => {
    setState(prev => {
      const newSections = {
        ...prev.sections,
        [sectionId]: { products }
      };
      
      // すべての製品リストを更新
      const allProductsList = Object.values(newSections).flatMap(section => section.products);
      
      // 最初のセクションが登録されたらアクティブにする
      if (!prev.activeSection) {
        const firstProduct = products[0] || null;
        const nextProduct = products.length > 1 ? products[1] : null;
        const previousProduct = null; // 最初のセクションなので前の製品はない
        
        return {
          ...prev,
          activeSection: sectionId,
          activeProduct: firstProduct,
          nextProduct,
          previousProduct,
          sections: newSections,
          allProducts: allProductsList
        };
      }
      
      return {
        ...prev,
        sections: newSections,
        allProducts: allProductsList
      };
    });
  }, []);

  // セクションの登録解除
  const unregisterSection = useCallback((sectionId: string) => {
    setState(prev => {
      const newSections = { ...prev.sections };
      delete newSections[sectionId];
      
      // すべての製品リストを更新
      const allProductsList = Object.values(newSections).flatMap(section => section.products);
      
      // アクティブセクションが削除された場合、別のセクションをアクティブにする
      if (prev.activeSection === sectionId) {
        const remainingSections = Object.keys(newSections);
        
        if (remainingSections.length > 0) {
          const firstSection = remainingSections[0];
          const firstSectionProducts = newSections[firstSection]?.products || [];
          const firstProduct = firstSectionProducts[0] || null;
          const nextProduct = firstSectionProducts.length > 1 ? firstSectionProducts[1] : null;
          
          return {
            ...prev,
            activeSection: firstSection,
            activeProduct: firstProduct,
            nextProduct,
            previousProduct: null, // 最初のセクションを選択するので前の製品はない
            sections: newSections,
            allProducts: allProductsList
          };
        } else {
          return {
            ...prev,
            activeSection: null,
            activeProduct: null,
            nextProduct: null,
            previousProduct: null,
            sections: newSections,
            allProducts: allProductsList
          };
        }
      }
      
      return {
        ...prev,
        sections: newSections,
        allProducts: allProductsList
      };
    });
  }, []);

  return (
    <ShowcaseContext.Provider
      value={{
        activeSection,
        activeSectionIndex,
        activeProduct,
        nextProduct,
        previousProduct,
        setActiveSection,
        setActiveSectionIndex,
        setActiveProduct,
        setNextProduct,
        setPreviousProduct,
        registerSection,
        unregisterSection,
        sections,
        allProducts,
        // 新しく追加した値
        scrollDirection,
        isTransitioning,
        setIsTransitioning
      }}
    >
      {children}
    </ShowcaseContext.Provider>
  );
};

// カスタムフック
export const useShowcase = () => useContext(ShowcaseContext);-e 
### FILE: ./src/lib/analytics.ts

// Google Analytics 4の測定ID
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

// 基本的なGAイベント送信関数
export const sendGAEvent = (
	eventName: string,
	params: { [key: string]: any } = {}
) => {
	if (!GA_MEASUREMENT_ID || typeof window === 'undefined' || !window.gtag) return;

	window.gtag('event', eventName, params);
};

// ページビューのトラッキング
export const trackPageView = (url: string) => {
	sendGAEvent('page_view', {
		page_path: url,
		page_title: document.title,
	});
};

// スクロール深度のトラッキング
export const trackScrollDepth = (depth: number) => {
	const thresholds = [25, 50, 75, 90, 100];
	const reachedThresholds = thresholds.filter(threshold => depth >= threshold);

	if (reachedThresholds.length > 0) {
		// 最も深いしきい値でイベントを送信
		const maxThreshold = Math.max(...reachedThresholds);

		// すでに送信済みのしきい値は再送信しない
		const sentThresholds = window.sessionStorage.getItem('scroll_depth_sent') || '';
		const sentThresholdsArray = sentThresholds ? sentThresholds.split(',').map(Number) : [];

		if (!sentThresholdsArray.includes(maxThreshold)) {
			sendGAEvent('scroll_depth', {
				depth_percentage: maxThreshold,
				page_path: window.location.pathname,
			});

			// 送信済みのしきい値を保存
			window.sessionStorage.setItem(
				'scroll_depth_sent',
				[...sentThresholdsArray, maxThreshold].sort((a, b) => a - b).join(',')
			);
		}
	}
};

// セクション表示のトラッキング
export const trackSectionView = (sectionId: string, sectionName: string) => {
	// すでに表示済みのセクションは再送信しない
	const viewedSections = window.sessionStorage.getItem('viewed_sections') || '';
	const viewedSectionsArray = viewedSections ? viewedSections.split(',') : [];

	if (!viewedSectionsArray.includes(sectionId)) {
		sendGAEvent('section_view', {
			section_id: sectionId,
			section_name: sectionName,
			page_path: window.location.pathname,
		});

		// 表示済みのセクションを保存
		window.sessionStorage.setItem(
			'viewed_sections',
			[...viewedSectionsArray, sectionId].join(',')
		);
	}
};

// ECサイト遷移のトラッキング
export const trackECLinkClick = (
	buttonLocation: string,
	buttonText: string,
	destinationUrl: string
) => {
	sendGAEvent('ec_link_click', {
		button_location: buttonLocation,
		button_text: buttonText,
		destination_url: destinationUrl,
		page_path: window.location.pathname,
	});
};

// UTMパラメータの生成
export const generateUTMParams = (
	source: string = 'lp',
	medium: string = 'cpc',
	campaign: string = 'artpaper',
	content: string,
	term: string = ''
) => {
	const params = new URLSearchParams();
	params.append('utm_source', source);
	params.append('utm_medium', medium);
	params.append('utm_campaign', campaign);
	params.append('utm_content', content);

	if (term) {
		params.append('utm_term', term);
	}

	return params.toString();
};

// ECサイトのURLにUTMパラメータを追加
export const getECUrlWithUTM = (
	baseUrl: string,
	buttonLocation: string,
	additionalParams: { [key: string]: string } = {}
) => {
	// UTMパラメータの生成
	const utmParams = generateUTMParams(
		'lp',
		'referral',
		'artpaper_lp',
		buttonLocation
	);

	// 追加パラメータの処理
	const additionalParamsString = Object.entries(additionalParams)
		.map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
		.join('&');

	// URLの組み立て
	const separator = baseUrl.includes('?') ? '&' : '?';
	return `${baseUrl}${separator}${utmParams}${additionalParamsString ? `&${additionalParamsString}` : ''}`;
};

// ページ滞在時間の開始時間を保存
export const startTimeMeasurement = () => {
	if (typeof window !== 'undefined') {
		window.sessionStorage.setItem('page_enter_time', Date.now().toString());
	}
};

// ページ離脱時の滞在時間計測＆送信
export const trackTimeOnPage = () => {
	if (typeof window === 'undefined') return;

	const startTime = window.sessionStorage.getItem('page_enter_time');
	if (startTime) {
		const timeSpentMs = Date.now() - parseInt(startTime);
		const timeSpentSeconds = Math.floor(timeSpentMs / 1000);

		sendGAEvent('time_on_page', {
			time_seconds: timeSpentSeconds,
			page_path: window.location.pathname
		});
	}
};-e 
### FILE: ./src/app/gallery/page.tsx

'use client';

import React from 'react';
import { featuredProducts } from '@/data/featured-products';
import { ProductShowcaseSection } from '@/components/showcase/ProductShowcaseSection';
import { ShowcaseProvider } from '@/contexts/ShowcaseContext';
import { ShowcaseBackgroundManager } from '@/components/showcase/ShowcaseBackgroundManager';

export default function ShowcaseGalleryPage() {
	return (
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
	);
}-e 
### FILE: ./src/app/lp/page.tsx

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
		</>
	);
}-e 
### FILE: ./src/app/layout.tsx

import { Inter, Noto_Sans_JP, M_PLUS_1p } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';
import { Metadata } from 'next';
import { cn } from '@/utils/cn';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { ShowcaseProvider } from '@/contexts/ShowcaseContext';
import { ShowcaseBackgroundManager } from '@/components/showcase/ShowcaseBackgroundManager';

// フォントの定義
const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-inter',
});

const notoSansJP = Noto_Sans_JP({
	subsets: ['latin'],
	weight: ['400', '500', '700'],
	display: 'swap',
	variable: '--font-noto-sans-jp',
});

const mPlus1p = M_PLUS_1p({
	subsets: ['latin'],
	weight: ['400', '500', '700', '900'],
	display: 'swap',
	variable: '--font-m-plus-1p',
});

// メタデータの設定
export const metadata: Metadata = {
	title: 'Artpaper | 貼るだけで部屋の世界観が変わる大型AIアート',
	description: '賃貸OK・跡が残らない再剥離シートで、150種類以上のアートから選べる大型ポスター。部屋の雰囲気を一新するインテリアアート。',
	keywords: '壁紙, ポスター, アートペーパー, Artpaper, インテリア, 賃貸OK, 大型アート, AIアート, 部屋, リノベーション',
	icons: {
		icon: '/favicon.ico',
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ja" className={cn(
			inter.variable,
			notoSansJP.variable,
			mPlus1p.variable
		)}>
			<body className="min-h-screen bg-neutral-50 font-sans text-neutral-900 antialiased">
				<ShowcaseProvider>
					{/* 固定背景マネージャー */}
					<ShowcaseBackgroundManager />

					<Navbar />
					<main className="pt-16 md:pt-20">
						{children}
					</main>
					<Footer />
					<Analytics />
				</ShowcaseProvider>
			</body>
		</html>
	);
}-e 
### FILE: ./src/app/page.tsx

import Link from "next/link";
import { Container } from "@/components/layout/container";

export default function Home() {
	return (
		<Container className="py-20">
			<div className="text-center">
				<h1 className="text-4xl font-bold mb-6">Artpaper</h1>
				<p className="text-xl mb-10">
					EC機能実装予定のホームページです
				</p>
				<div className="flex justify-center">
					<Link
						href="/lp"
						className="bg-accent-500 text-white px-6 py-3 rounded-md hover:bg-accent-600 transition-colors"
					>
						ランディングページを見る
					</Link>
				</div>
			</div>
		</Container>
	);
}-e 
### FILE: ./src/hooks/useImagePreload.ts

// src/hooks/useImagePreload.ts
'use client';

import { useState, useEffect } from 'react';

export function useImagePreload(src: string): boolean {
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		if (!src) {
			setIsLoaded(false);
			return;
		}

		const img = new Image();
		img.src = src;
		img.onload = () => setIsLoaded(true);
		img.onerror = () => setIsLoaded(false);

		return () => {
			img.onload = null;
			img.onerror = null;
		};
	}, [src]);

	return isLoaded;
}-e 
### FILE: ./src/utils/cn.ts

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Tailwindのクラス名を正しく結合するユーティリティ
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}-e 
### FILE: ./src/components/layout/footer.tsx

import Link from 'next/link';
import { Container } from './container';

export function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-neutral-50 border-t border-neutral-200 py-12">
			<Container>
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					{/* ブランド情報 */}
					<div className="md:col-span-2">
						<Link href="/" className="font-accent text-2xl font-bold">
							Artpaper
						</Link>
						<p className="mt-4 text-neutral-600 max-w-md">
							貼るだけで部屋の世界観を一新できる、賃貸OK・やり直し自由の大型AIアート。
							あなたの空間をアートで彩ります。
						</p>
					</div>

					{/* リンク */}
					<div>
						<h3 className="font-medium text-lg mb-4">商品について</h3>
						<ul className="space-y-2">
							<li>
								<Link href="/gallery" className="text-neutral-600 hover:text-primary-500 transition-colors">
									ギャラリー
								</Link>
							</li>
							<li>
								<Link href="/how-it-works" className="text-neutral-600 hover:text-primary-500 transition-colors">
									使い方
								</Link>
							</li>
							<li>
								<Link href="/about" className="text-neutral-600 hover:text-primary-500 transition-colors">
									特長
								</Link>
							</li>
						</ul>
					</div>

					{/* リンク */}
					<div>
						<h3 className="font-medium text-lg mb-4">サポート</h3>
						<ul className="space-y-2">
							<li>
								<Link href="/faq" className="text-neutral-600 hover:text-primary-500 transition-colors">
									よくある質問
								</Link>
							</li>
							<li>
								<Link href="/contact" className="text-neutral-600 hover:text-primary-500 transition-colors">
									お問い合わせ
								</Link>
							</li>
						</ul>
					</div>
				</div>

				{/* コピーライト */}
				<div className="mt-12 pt-6 border-t border-neutral-200 text-neutral-500 text-sm">
					<p>© {currentYear} Artpaper All rights reserved.</p>
				</div>
			</Container>
		</footer>
	);
}-e 
### FILE: ./src/components/layout/navbar.tsx

import Link from "next/link";
import { Container } from "./container";

export function Navbar() {
	return (
		<header className="top-0 left-0 w-full bg-white/90 backdrop-blur-sm border-b border-neutral-100 z-50">
			<Container>
				<div className="flex items-center justify-between h-16 md:h-20">
					<Link href="/" className="font-accent text-2xl font-bold">
						Artpaper
					</Link>

					{/* デスクトップナビゲーション */}
					<nav className="hidden md:flex items-center space-x-8">
						<Link href="/lp" className="text-neutral-700 hover:text-primary-500 transition-colors">
							ランディングページ
						</Link>
						<Link href="/gallery" className="text-neutral-700 hover:text-primary-500 transition-colors">
							ギャラリー
						</Link>
						<Link href="/how-it-works" className="text-neutral-700 hover:text-primary-500 transition-colors">
							使い方
						</Link>
						<Link href="/about" className="text-neutral-700 hover:text-primary-500 transition-colors">
							特長
						</Link>
					</nav>

					{/* CTA ボタン */}
					<div className="flex items-center">
						<Link href="/gallery" className="bg-accent-500 text-white px-5 py-2 rounded-md hover:bg-accent-600 transition-colors">
							商品を見る
						</Link>

						{/* モバイルメニューボタン */}
						<button className="ml-4 p-1 md:hidden">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
							</svg>
						</button>
					</div>
				</div>
			</Container>
		</header>
	);
}-e 
### FILE: ./src/components/layout/container.tsx

import { cn } from "@/utils/cn";
import { ElementType, ComponentPropsWithoutRef, ReactNode } from "react";

interface ContainerProps<T extends ElementType = "div"> {
	children: ReactNode;
	className?: string;
	as?: T;
	tight?: boolean;
}

// ジェネリックを使ってasプロパティでComponentの型を制御
export function Container<T extends ElementType = "div">({
	children,
	className,
	as,
	tight = false,
	...props
}: ContainerProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ContainerProps<T>>) {
	const Component = as || "div"; // undefined の場合のフォールバック

	return (
		<Component
			className={cn(
				"mx-auto px-4 sm:px-6 lg:px-8",
				{
					"max-w-screen-xl": !tight,
					"max-w-screen-lg": tight,
				},
				className
			)}
			{...props}
		>
			{children}
		</Component>
	);
}-e 
### FILE: ./src/components/sections/how-it-works-section.tsx

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
}-e 
### FILE: ./src/components/sections/testimonials-section.tsx

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
}-e 
### FILE: ./src/components/sections/comparison-section.tsx

import { Container } from "../layout/container";
import { ECLinkButton } from "../ui/ec-link-button";

type ComparisonItem = {
	feature: string;
	artpaper: string | React.ReactNode;
	poster: string | React.ReactNode;
	wallpaper: string | React.ReactNode;
	furniture: string | React.ReactNode;
};

const comparisonData: ComparisonItem[] = [
	{
		feature: "初期コスト",
		artpaper: "¥5,000〜",
		poster: "¥2,000〜",
		wallpaper: "¥30,000〜",
		furniture: "¥50,000〜",
	},
	{
		feature: "設置時間",
		artpaper: "約3分",
		poster: "約10分",
		wallpaper: "数時間〜1日",
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
		wallpaper: (
			<span className="flex items-center text-red-600">
				<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
					<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
				</svg>
				困難
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
				貼り直すだけ
			</span>
		),
		poster: (
			<span className="flex items-center text-yellow-600">
				<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
					<path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
				</svg>
				買い直し
			</span>
		),
		wallpaper: (
			<span className="flex items-center text-red-600">
				<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
					<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
				</svg>
				高コスト
			</span>
		),
		furniture: (
			<span className="flex items-center text-red-600">
				<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
					<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
				</svg>
				高コスト
			</span>
		),
	},
	{
		feature: "DIY難易度",
		artpaper: (
			<span className="flex items-center text-green-600">
				<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
					<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
				</svg>
				超簡単
			</span>
		),
		poster: (
			<span className="flex items-center text-green-600">
				<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
					<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
				</svg>
				簡単
			</span>
		),
		wallpaper: (
			<span className="flex items-center text-red-600">
				<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
					<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
				</svg>
				専門知識必要
			</span>
		),
		furniture: (
			<span className="flex items-center text-yellow-600">
				<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
					<path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
				</svg>
				組立必要
			</span>
		),
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
						他のインテリア変更方法と比較すると、Artpaperが「安い・早い・失敗しても痛くない」選択肢であることがわかります。
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
										<span className="font-bold text-lg">ポスター</span>
										<span className="text-sm text-neutral-600">通常サイズ</span>
									</div>
								</th>
								<th className="p-4 text-center">
									<div className="flex flex-col items-center">
										<span className="font-bold text-lg">壁紙全面張替</span>
										<span className="text-sm text-neutral-600">DIY/業者施工</span>
									</div>
								</th>
								<th className="p-4 text-center">
									<div className="flex flex-col items-center">
										<span className="font-bold text-lg">家具購入</span>
										<span className="text-sm text-neutral-600">テーブル/棚など</span>
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
									<td className="p-4 text-center">{item.wallpaper}</td>
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
								「安い・早い・失敗しても痛くない」
							</h3>
							<p className="text-neutral-700 mb-4">
								Artpaperは、インテリア改善の中で最もコストパフォーマンスが高い選択肢です。特にインテリア初心者や賃貸にお住まいの方にとって、リスクを最小限に抑えながら劇的な効果を得られます。
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
								<li className="flex items-start gap-2">
									<svg className="w-5 h-5 text-green-500 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
										<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
									</svg>
									<span>家具より圧倒的なコスパ</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}-e 
### FILE: ./src/components/sections/solution-section.tsx

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

				<div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl p-8 md:p-12">
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
									className="bg-white text-primary-700 hover:bg-white/90 px-8 py-4 text-lg shadow-lg"
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
}-e 
### FILE: ./src/components/sections/cta-section.tsx

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
}-e 
### FILE: ./src/components/sections/showcase-section.tsx

'use client';

import { Container } from "../layout/container";
import { ECLinkButton } from "../ui/ec-link-button";
import Image from "next/image";
import { useState } from "react";

type ShowcaseProduct = {
	id: string;
	title: string;
	category: string;
	description: string;
	price: number;
	imageUrl: string;
	popularity: number; // 1-100のスケール
	colorScheme?: string;
	isNewArrival?: boolean;
	isBestseller?: boolean;
};

// サンプル商品データ
const showcaseProducts: ShowcaseProduct[] = [
	{
		id: "prod1",
		title: "Urban Neon",
		category: "モダン",
		description: "都会的なネオンカラーが織りなす洗練されたデザイン。モダンなインテリアにぴったりのアートポスター。",
		price: 5800,
		imageUrl: "/images/placeholder.jpg",
		popularity: 95,
		colorScheme: "ブルー・パープル",
		isBestseller: true,
	},
	{
		id: "prod2",
		title: "Nature Flow",
		category: "ナチュラル",
		description: "自然の曲線と有機的な形状を抽象化したデザイン。穏やかな空間を演出します。",
		price: 5800,
		imageUrl: "/images/placeholder2.jpg",
		popularity: 87,
		colorScheme: "グリーン・ブラウン",
		isNewArrival: true,
	},
	{
		id: "prod3",
		title: "Geometric Dreams",
		category: "アブストラクト",
		description: "幾何学パターンが織りなす夢のような世界。どんなインテリアにも合わせやすい汎用性の高いデザイン。",
		price: 5800,
		imageUrl: "/images/placeholder3.jpg",
		popularity: 92,
		colorScheme: "マルチカラー",
		isBestseller: true,
	},
	{
		id: "prod4",
		title: "Nostalgic Wave",
		category: "レトロ",
		description: "80年代を思わせるレトロな波形パターン。ノスタルジックな雰囲気を演出します。",
		price: 5800,
		imageUrl: "/images/placeholder4.jpg",
		popularity: 89,
		colorScheme: "ピンク・ブルー",
		isNewArrival: true,
	},
];

export function ShowcaseSection() {
	const [layoutStyle, setLayoutStyle] = useState<'grid' | 'carousel' | 'featured' | 'minimal'>('grid');

	return (
		<section className="py-16 bg-white md:py-24">
			<Container>
				<div className="max-w-3xl mx-auto text-center mb-8">
					<h2 className="font-display text-3xl font-bold mb-4 md:text-4xl">
						Artpaperの定番デザイン
					</h2>
					<p className="text-lg text-neutral-700 mb-8">
						人気のデザインをチェックして、あなたのお気に入りを見つけてください。
					</p>

					{/* レイアウト切り替えボタン */}
					<div className="flex justify-center mb-8">
						<div className="inline-flex items-center p-1 bg-neutral-100 rounded-full">
							<button
								className={`p-2 rounded-full ${layoutStyle === 'grid' ? 'bg-white shadow-sm' : ''}`}
								onClick={() => setLayoutStyle('grid')}
								title="グリッドビュー"
							>
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
									<rect x="3" y="3" width="7" height="7"></rect>
									<rect x="14" y="3" width="7" height="7"></rect>
									<rect x="14" y="14" width="7" height="7"></rect>
									<rect x="3" y="14" width="7" height="7"></rect>
								</svg>
							</button>
							<button
								className={`p-2 rounded-full ${layoutStyle === 'carousel' ? 'bg-white shadow-sm' : ''}`}
								onClick={() => setLayoutStyle('carousel')}
								title="カルーセルビュー"
							>
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
									<rect x="2" y="7" width="20" height="10" rx="2" ry="2"></rect>
									<circle cx="12" cy="17" r="1"></circle>
								</svg>
							</button>
							<button
								className={`p-2 rounded-full ${layoutStyle === 'featured' ? 'bg-white shadow-sm' : ''}`}
								onClick={() => setLayoutStyle('featured')}
								title="フィーチャードビュー"
							>
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
									<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
								</svg>
							</button>
							<button
								className={`p-2 rounded-full ${layoutStyle === 'minimal' ? 'bg-white shadow-sm' : ''}`}
								onClick={() => setLayoutStyle('minimal')}
								title="ミニマルビュー"
							>
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
									<line x1="8" y1="6" x2="21" y2="6"></line>
									<line x1="8" y1="12" x2="21" y2="12"></line>
									<line x1="8" y1="18" x2="21" y2="18"></line>
									<line x1="3" y1="6" x2="3.01" y2="6"></line>
									<line x1="3" y1="12" x2="3.01" y2="12"></line>
									<line x1="3" y1="18" x2="3.01" y2="18"></line>
								</svg>
							</button>
						</div>
					</div>
				</div>

				{/* グリッドレイアウト */}
				{layoutStyle === 'grid' && (
					<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
						{showcaseProducts.map((product) => (
							<div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-neutral-200 transition-all hover:shadow-md hover:-translate-y-1">
								<div className="relative aspect-[3/4] bg-neutral-100">
									{/* 実際の商品画像 */}
									<div className="absolute inset-0 flex items-center justify-center">
										{product.imageUrl ? (
											<Image
												src={product.imageUrl}
												alt={product.title}
												fill
												sizes="(max-width: 768px) 100vw, 25vw"
												className="object-cover"
											/>
										) : (
											<span className="text-neutral-400">画像準備中</span>
										)}
									</div>

									{/* バッジ表示 */}
									{product.isBestseller && (
										<div className="absolute top-3 left-3 bg-accent-500 text-white px-2 py-1 rounded-md text-xs font-medium z-10">
											人気No.1
										</div>
									)}
									{product.isNewArrival && (
										<div className="absolute top-3 left-3 bg-primary-500 text-white px-2 py-1 rounded-md text-xs font-medium z-10">
											新着
										</div>
									)}
								</div>

								<div className="p-4">
									<div className="flex justify-between items-start mb-2">
										<h3 className="font-medium">{product.title}</h3>
										<span className="text-xs bg-neutral-100 px-2 py-0.5 rounded">
											{product.category}
										</span>
									</div>

									<p className="text-sm text-neutral-600 mb-3 line-clamp-2">
										{product.description}
									</p>

									<div className="flex justify-between items-center mt-3">
										<span className="font-medium">¥{product.price.toLocaleString()}</span>
										<ECLinkButton
											href={`https://ec.artpaper.com/products/${product.id}`}
											location="showcase_grid"
											variant="primary"
											className="text-sm py-1 px-3"
										>
											詳細を見る
										</ECLinkButton>
									</div>
								</div>
							</div>
						))}
					</div>
				)}

				{/* カルーセルレイアウト */}
				{layoutStyle === 'carousel' && (
					<div className="relative py-4">
						<div className="overflow-x-auto pb-6 -mx-4 px-4 flex snap-x snap-mandatory gap-6">
							{showcaseProducts.map((product) => (
								<div
									key={product.id}
									className="flex-shrink-0 w-[280px] snap-center bg-white rounded-xl overflow-hidden shadow-sm border border-neutral-200 transition-all hover:shadow-md"
								>
									<div className="relative aspect-[1/1] bg-neutral-100">
										{/* 実際の商品画像 */}
										<div className="absolute inset-0 flex items-center justify-center">
											{product.imageUrl ? (
												<Image
													src={product.imageUrl}
													alt={product.title}
													fill
													sizes="280px"
													className="object-cover"
												/>
											) : (
												<span className="text-neutral-400">画像準備中</span>
											)}
										</div>

										{/* バッジ */}
										{product.isBestseller && (
											<div className="absolute top-3 left-3 bg-accent-500 text-white px-2 py-1 rounded-md text-xs font-medium">
												人気No.1
											</div>
										)}
										{product.isNewArrival && (
											<div className="absolute top-3 left-3 bg-primary-500 text-white px-2 py-1 rounded-md text-xs font-medium">
												新着
											</div>
										)}
									</div>

									<div className="p-4">
										<h3 className="font-medium mb-1">{product.title}</h3>
										<p className="text-sm text-neutral-600 mb-2 line-clamp-2">
											{product.description}
										</p>
										<div className="flex justify-between items-center">
											<span className="font-medium">¥{product.price.toLocaleString()}</span>
											<span className="text-xs bg-neutral-100 px-2 py-0.5 rounded">
												{product.category}
											</span>
										</div>
									</div>
								</div>
							))}

							{/* もっと見るカード */}
							<div className="flex-shrink-0 w-[280px] snap-center bg-primary-50 rounded-xl overflow-hidden shadow-sm border border-primary-100 flex items-center justify-center">
								<div className="text-center p-6">
									<p className="text-primary-700 font-medium mb-4">
										もっと見る
									</p>
									<ECLinkButton
										href="https://ec.artpaper.com/products"
										location="showcase_carousel_more"
										variant="primary"
										className="whitespace-nowrap"
									>
										全商品を見る
									</ECLinkButton>
								</div>
							</div>
						</div>

						{/* スクロールインジケーター */}
						<div className="flex justify-center mt-4 gap-2">
							{showcaseProducts.map((_, index) => (
								<div key={index} className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-primary-500' : 'bg-neutral-300'}`}></div>
							))}
							<div className="w-2 h-2 rounded-full bg-neutral-300"></div>
						</div>
					</div>
				)}

				{/* フィーチャードレイアウト - 特に人気の高いものを強調 */}
				{layoutStyle === 'featured' && (
					<div>
						{/* メイン商品（人気No.1）*/}
						{showcaseProducts
							.filter(p => p.isBestseller)
							.slice(0, 1)
							.map(product => (
								<div key={product.id} className="mb-12">
									<div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl overflow-hidden p-6 md:p-8">
										<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
											<div className="relative aspect-[3/4] bg-white rounded-lg overflow-hidden shadow-md">
												{product.imageUrl ? (
													<Image
														src={product.imageUrl}
														alt={product.title}
														fill
														sizes="(max-width: 768px) 100vw, 50vw"
														className="object-cover"
													/>
												) : (
													<div className="absolute inset-0 flex items-center justify-center text-neutral-400">
														画像準備中
													</div>
												)}
											</div>
											<div>
												<div className="inline-block bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
													最も人気のデザイン
												</div>
												<h3 className="text-2xl font-bold mb-3">{product.title}</h3>
												<p className="text-neutral-700 mb-4">
													{product.description}
												</p>
												<div className="mb-6">
													<div className="text-sm text-neutral-600 mb-1">人気度</div>
													<div className="w-full h-2 bg-neutral-200 rounded-full overflow-hidden">
														<div
															className="h-full bg-accent-500 rounded-full"
															style={{ width: `${product.popularity}%` }}
														></div>
													</div>
													<div className="flex justify-between text-xs text-neutral-500 mt-1">
														<span>0%</span>
														<span>100%</span>
													</div>
												</div>
												<div className="flex flex-wrap gap-3 mb-6">
													<div className="text-sm bg-white px-3 py-1 rounded-full shadow-sm">
														カテゴリー: {product.category}
													</div>
													{product.colorScheme && (
														<div className="text-sm bg-white px-3 py-1 rounded-full shadow-sm">
															配色: {product.colorScheme}
														</div>
													)}
												</div>
												<div className="flex items-center justify-between">
													<div className="text-2xl font-bold">¥{product.price.toLocaleString()}</div>
													<ECLinkButton
														href={`https://ec.artpaper.com/products/${product.id}`}
														location="showcase_featured"
														variant="primary"
														className="py-2.5 px-6"
													>
														今すぐ購入
													</ECLinkButton>
												</div>
											</div>
										</div>
									</div>
								</div>
							))}

						{/* その他の商品 */}
						<div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
							{showcaseProducts
								.filter(p => !p.isBestseller || showcaseProducts.filter(x => x.isBestseller).indexOf(p) > 0)
								.map(product => (
									<div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-sm border border-neutral-200 transition-all hover:shadow-md hover:-translate-y-1">
										<div className="relative aspect-[3/4] bg-neutral-100">
											<div className="absolute inset-0 flex items-center justify-center">
												{product.imageUrl ? (
													<Image
														src={product.imageUrl}
														alt={product.title}
														fill
														sizes="(max-width: 640px) 100vw, 33vw"
														className="object-cover"
													/>
												) : (
													<span className="text-neutral-400">画像準備中</span>
												)}
											</div>

											{product.isNewArrival && (
												<div className="absolute top-3 left-3 bg-primary-500 text-white px-2 py-1 rounded-md text-xs font-medium">
													新着
												</div>
											)}
										</div>

										<div className="p-4">
											<h3 className="font-medium mb-2">{product.title}</h3>
											<div className="flex justify-between items-center">
												<span className="font-bold">¥{product.price.toLocaleString()}</span>
												<ECLinkButton
													href={`https://ec.artpaper.com/products/${product.id}`}
													location="showcase_featured_sub"
													variant="outline"
													className="text-sm px-3 py-1"
												>
													詳細を見る
												</ECLinkButton>
											</div>
										</div>
									</div>
								))}
						</div>
					</div>
				)}

				{/* ミニマルレイアウト */}
				{layoutStyle === 'minimal' && (
					<div className="max-w-3xl mx-auto space-y-8">
						{showcaseProducts.map((product, index) => (
							<div
								key={product.id}
								className={`flex flex-col md:flex-row md:items-center gap-6 p-6 rounded-xl ${index % 2 === 0 ? 'bg-neutral-50' : 'bg-white border border-neutral-200'
									}`}
							>
								<div className="relative w-full md:w-40 h-40 bg-white rounded-lg overflow-hidden flex-shrink-0">
									{product.imageUrl ? (
										<Image
											src={product.imageUrl}
											alt={product.title}
											fill
											sizes="(max-width: 768px) 100vw, 160px"
											className="object-cover"
										/>
									) : (
										<div className="absolute inset-0 flex items-center justify-center text-neutral-400">
											画像準備中
										</div>
									)}
								</div>

								<div className="flex-grow">
									<div className="flex flex-wrap justify-between items-start gap-2 mb-2">
										<h3 className="text-lg font-medium">{product.title}</h3>
										<div className="flex gap-2">
											{product.isBestseller && (
												<span className="inline-block bg-accent-500 text-white px-2 py-0.5 rounded text-xs">
													人気
												</span>
											)}
											{product.isNewArrival && (
												<span className="inline-block bg-primary-500 text-white px-2 py-0.5 rounded text-xs">
													新着
												</span>
											)}
											<span className="inline-block bg-neutral-100 px-2 py-0.5 rounded text-xs">
												{product.category}
											</span>
										</div>
									</div>

									<p className="text-sm text-neutral-600 mb-4 line-clamp-2">
										{product.description}
									</p>

									<div className="flex flex-wrap items-center justify-between gap-4">
										<div className="flex items-center gap-4">
											<span className="font-bold text-lg">¥{product.price.toLocaleString()}</span>
											<div className="text-xs text-neutral-500">
												人気度: {product.popularity}%
											</div>
										</div>
										<ECLinkButton
											href={`https://ec.artpaper.com/products/${product.id}`}
											location="showcase_minimal"
											variant="primary"
											className="whitespace-nowrap"
										>
											商品を見る
										</ECLinkButton>
									</div>
								</div>
							</div>
						))}
					</div>
				)}

				<div className="mt-12 text-center">
					<ECLinkButton
						href="https://ec.artpaper.com/products"
						location="showcase_all"
						variant="primary"
						className="px-8 py-3"
					>
						すべての商品を見る
					</ECLinkButton>
				</div>
			</Container>
		</section>
	);
}-e 
### FILE: ./src/components/sections/limited-collection-section.tsx

'use client';

import { Container } from "../layout/container";
import { ECLinkButton } from "../ui/ec-link-button";
import Image from "next/image";
import { useState } from "react";

type LimitedItem = {
	id: string;
	title: string;
	category: string;
	thumbnail: string;
	stock: number;
	totalStock: number;
	isNew: boolean;
};

// サンプルデータ（実際のデータに置き換えてください）
const limitedItems: LimitedItem[] = [
	{
		id: "limited1",
		title: "Aurora Dreams",
		category: "抽象",
		thumbnail: "/images/placeholder.jpg",
		stock: 7,
		totalStock: 20,
		isNew: true,
	},
	{
		id: "limited2",
		title: "Urban Shadows",
		category: "モダン",
		thumbnail: "/images/placeholder.jpg",
		stock: 3,
		totalStock: 15,
		isNew: true,
	},
	{
		id: "limited3",
		title: "Botanical Flow",
		category: "ナチュラル",
		thumbnail: "/images/placeholder.jpg",
		stock: 12,
		totalStock: 25,
		isNew: false,
	},
	{
		id: "limited4",
		title: "Digital Forest",
		category: "サイバー",
		thumbnail: "/images/placeholder.jpg",
		stock: 5,
		totalStock: 20,
		isNew: false,
	},
];

export function LimitedCollectionSection() {
	const [activeTab, setActiveTab] = useState<'all' | 'new'>('all');

	const filteredItems = activeTab === 'all'
		? limitedItems
		: limitedItems.filter(item => item.isNew);

	return (
		<section className="py-16 bg-neutral-50 md:py-24">
			<Container>
				<div className="max-w-3xl mx-auto text-center mb-12">
					<span className="inline-block px-4 py-1.5 bg-accent-50 text-accent-500 rounded-full text-sm font-medium mb-4">
						数量限定
					</span>
					<h2 className="font-display text-3xl font-bold mb-6 md:text-4xl">
						毎月更新される限定コレクション
					</h2>
					<p className="text-lg text-neutral-700">
						Artpaperの限定デザインは、数量限定で販売されます。<br />
						気に入ったデザインはお早めにお求めください。
					</p>
				</div>

				<div className="flex justify-center mb-8">
					<div className="inline-flex items-center p-1 bg-white rounded-full shadow-sm border border-neutral-200">
						<button
							className={`px-4 py-2 rounded-full text-sm font-medium ${activeTab === 'all' ? 'bg-primary-500 text-white' : 'text-neutral-700'}`}
							onClick={() => setActiveTab('all')}
						>
							すべて
						</button>
						<button
							className={`px-4 py-2 rounded-full text-sm font-medium ${activeTab === 'new' ? 'bg-primary-500 text-white' : 'text-neutral-700'}`}
							onClick={() => setActiveTab('new')}
						>
							新作のみ
						</button>
					</div>
				</div>

				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{filteredItems.map((item) => (
						<div
							key={item.id}
							className="bg-white rounded-lg overflow-hidden shadow-sm border border-neutral-200 transition-all hover:shadow-md hover:-translate-y-1"
						>
							<div className="relative aspect-[3/4]">
								<div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-neutral-100 flex items-center justify-center">
									{item.thumbnail ? (
										<Image
											src={item.thumbnail}
											alt={item.title}
											fill
											sizes="(max-width: 768px) 100vw, 25vw"
											className="object-cover"
										/>
									) : (
										<span className="text-neutral-400">画像準備中</span>
									)}
								</div>

								{/* 新作バッジ */}
								{item.isNew && (
									<div className="absolute top-3 left-3 bg-accent-500 text-white px-2 py-1 rounded-md text-xs font-medium">
										NEW
									</div>
								)}

								{/* 残り在庫表示 */}
								<div className="absolute bottom-3 right-3">
									<div className={`px-2 py-1 rounded text-xs font-medium ${item.stock <= 5
											? 'bg-red-500 text-white'
											: 'bg-white/80 backdrop-blur-sm text-neutral-700'
										}`}>
										残り{item.stock}点
									</div>
								</div>
							</div>

							<div className="p-4">
								<div className="flex justify-between items-start mb-2">
									<h3 className="font-medium">{item.title}</h3>
									<span className="text-xs bg-neutral-100 px-2 py-0.5 rounded">
										{item.category}
									</span>
								</div>

								{/* 在庫残量バー */}
								<div className="w-full h-1.5 bg-neutral-100 rounded-full overflow-hidden mb-3">
									<div
										className={`h-full rounded-full ${item.stock <= 5 ? 'bg-red-500' : 'bg-primary-500'}`}
										style={{ width: `${(item.stock / item.totalStock) * 100}%` }}
									></div>
								</div>

								<div className="mt-3 flex justify-between items-center">
									<span className="text-sm text-neutral-500">
										限定{item.totalStock}点
									</span>
									<ECLinkButton
										href={`https://ec.artpaper.com/products/${item.id}`}
										location="limited_collection"
										variant="outline"
										className="text-sm py-1 px-3"
									>
										詳細を見る
									</ECLinkButton>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="mt-12 text-center">
					<p className="text-sm text-neutral-600 mb-6">
						毎月10種類の新作が追加されます。サブスクリプション会員は、新作発売日の1日前に先行アクセスできます。
					</p>
					<ECLinkButton
						href="https://ec.artpaper.com/collections/limited"
						location="limited_collection_all"
						variant="primary"
					>
						すべての限定コレクションを見る
					</ECLinkButton>
				</div>
			</Container>
		</section>
	);
}-e 
### FILE: ./src/components/sections/faq-section.tsx

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
}-e 
### FILE: ./src/components/sections/case-study-section.tsx

import { Container } from "../layout/container";
import Image from "next/image";
import { useState } from "react";
import { ECLinkButton } from "../ui/ec-link-button"; 

type CaseStudy = {
	id: string;
	title: string;
	description: string;
	style: string;
	beforeImage: string;
	afterImage: string;
};

const caseStudies: CaseStudy[] = [
	{
		id: "case1",
		title: "1Kのワンルームが劇的に変化",
		description: "ミニマルな家具のみだった白い壁のワンルームに、大きなアートを追加。空間に奥行きと個性が生まれました。",
		style: "モダン",
		beforeImage: "/images/placeholder-before.jpg",
		afterImage: "/images/placeholder-after.jpg",
	},
	{
		id: "case2",
		title: "リモートワークスペースの改善",
		description: "ビデオ会議の背景になる壁にアートを設置。同僚からの印象が変わり、会話のきっかけにも。",
		style: "アート",
		beforeImage: "/images/placeholder-before2.jpg",
		afterImage: "/images/placeholder-after2.jpg",
	},
	{
		id: "case3",
		title: "リビングの印象を一新",
		description: "家具を変えずに、壁のアートだけを変更。部屋全体の雰囲気がグッと変わりました。",
		style: "ナチュラル",
		beforeImage: "/images/placeholder-before3.jpg",
		afterImage: "/images/placeholder-after3.jpg",
	},
];

// クライアントコンポーネントであることを示す
export function CaseStudySection() {
	return (
		<section className="py-16 bg-white md:py-24">
			<Container>
				<div className="max-w-3xl mx-auto text-center mb-12">
					<h2 className="font-display text-3xl font-bold mb-6 md:text-4xl">
						ビフォー/アフターで見る効果
					</h2>
					<p className="text-lg text-neutral-700">
						Artpaperを使用して、実際にどのような変化が起きるのかをご覧ください。
					</p>
				</div>

				<div className="space-y-16">
					{caseStudies.map((study, index) => (
						<div key={study.id} className="border border-neutral-200 rounded-xl overflow-hidden">
							<div className="grid grid-cols-1 md:grid-cols-2">
								<div className="relative aspect-[4/3] bg-neutral-100">
									{/* プレースホルダー画像 */}
									<div className="absolute inset-0 flex items-center justify-center text-neutral-500">
										{study.beforeImage ? (
											<Image
												src={study.beforeImage}
												alt={`${study.title} - Before`}
												fill
												sizes="(max-width: 768px) 100vw, 50vw"
												className="object-cover"
											/>
										) : (
											"Before画像"
										)}
									</div>
									<div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-medium">
										Before
									</div>
								</div>
								<div className="relative aspect-[4/3] bg-neutral-100">
									{/* プレースホルダー画像 */}
									<div className="absolute inset-0 flex items-center justify-center text-neutral-500">
										{study.afterImage ? (
											<Image
												src={study.afterImage}
												alt={`${study.title} - After`}
												fill
												sizes="(max-width: 768px) 100vw, 50vw"
												className="object-cover"
											/>
										) : (
											"After画像"
										)}
									</div>
									<div className="absolute top-4 left-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
										After
									</div>
								</div>
							</div>
							<div className="p-6">
								<div className="flex items-center justify-between mb-4">
									<h3 className="text-xl font-medium">{study.title}</h3>
									<span className="bg-neutral-100 px-3 py-1 rounded-full text-sm">
										スタイル: {study.style}
									</span>
								</div>
								<p className="text-neutral-700">{study.description}</p>
							</div>
						</div>
					))}
				</div>

				<div className="mt-12 text-center">
					<p className="text-lg font-medium text-neutral-800 mb-6">
						あなたの部屋も、Artpaperでこんな風に変えられます
					</p>
					<ECLinkButton
						href="https://ec.artpaper.com/products"
						location="case_study"
						variant="primary"
						className="inline-block"
					>
						商品を見る
					</ECLinkButton>
				</div>
			</Container>
		</section>
	);
}-e 
### FILE: ./src/components/sections/subscription-cta-section.tsx

'use client';

import { Container } from "../layout/container";
import { ECLinkButton } from "../ui/ec-link-button";
import { useState } from "react";

export function SubscriptionCTASection() {
	const [showYearly, setShowYearly] = useState(false);

	// 月額と年額の価格設定
	const monthlyPrice = 2498;
	const yearlyPrice = 24980; // 12ヶ月分 - 1ヶ月分の割引
	const perPieceMonthly = Math.floor(monthlyPrice / 3);
	const perPieceYearly = Math.floor(yearlyPrice / 36); // 年間36枚

	return (
		<section className="py-16 bg-white md:py-24 overflow-hidden relative">
			{/* 装飾要素 */}
			<div className="absolute -right-20 -top-20 w-64 h-64 bg-primary-50 rounded-full opacity-50"></div>
			<div className="absolute -left-20 -bottom-20 w-48 h-48 bg-accent-50 rounded-full opacity-50"></div>

			<Container>
				<div className="relative z-10">
					<div className="max-w-3xl mx-auto text-center mb-12">
						<span className="inline-block px-4 py-1.5 bg-accent-500 text-white rounded-full text-sm font-medium mb-4">
							新登場：サブスクリプション
						</span>
						<h2 className="font-display text-3xl font-bold mb-6 md:text-4xl">
							毎月新しいアートで、<br />部屋の世界観を自由に変える
						</h2>
						<p className="text-lg text-neutral-700">
							Artpaperのサブスクリプションなら、月額定額で最大3枚まで発注できます。<br />
							初月無料でリスクなくお試しいただけます。
						</p>
					</div>

					{/* 料金プラン */}
					<div className="max-w-3xl mx-auto mb-12">
						<div className="flex justify-center mb-8">
							<div className="inline-flex items-center p-1 bg-neutral-100 rounded-full">
								<button
									className={`px-4 py-2 rounded-full text-sm font-medium ${!showYearly ? 'bg-white shadow-sm' : ''}`}
									onClick={() => setShowYearly(false)}
								>
									月額プラン
								</button>
								<button
									className={`px-4 py-2 rounded-full text-sm font-medium ${showYearly ? 'bg-white shadow-sm' : ''}`}
									onClick={() => setShowYearly(true)}
								>
									年額プラン（お得）
								</button>
							</div>
						</div>

						<div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-neutral-200">
							<div className="bg-primary-500 text-white p-6 text-center">
								<h3 className="text-2xl font-bold mb-2">Artpaper サブスクリプション</h3>
								<p className="opacity-90">最高のアートを手軽に楽しむ</p>
							</div>

							<div className="p-8">
								<div className="flex justify-center items-baseline mb-6">
									<span className="text-4xl font-bold">¥{showYearly ? yearlyPrice : monthlyPrice}</span>
									<span className="text-neutral-600 ml-2">{showYearly ? '/ 年' : '/ 月'}</span>
								</div>

								<p className="text-center text-neutral-700 mb-6">
									1枚あたり約 <span className="font-bold text-primary-500">¥{showYearly ? perPieceYearly : perPieceMonthly}</span>
									<span className="block mt-1 text-sm text-neutral-500">
										{showYearly ? '（年間36枚まで利用可能）' : '（月3枚まで利用可能）'}
									</span>
								</p>

								<div className="bg-neutral-50 rounded-lg p-4 mb-6">
									<div className="text-center font-medium text-accent-500 mb-2">初月無料！</div>
									<p className="text-sm text-center text-neutral-600">
										今なら初月のサブスクリプション料金が無料。<br />
										リスクなくお試しいただけます。
									</p>
								</div>

								<ul className="space-y-3 mb-8">
									<li className="flex items-start gap-3">
										<svg className="w-5 h-5 text-green-500 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
											<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
										</svg>
										<span>
											{showYearly ? '年間36枚' : '月3枚'}まで発注可能
										</span>
									</li>
									<li className="flex items-start gap-3">
										<svg className="w-5 h-5 text-green-500 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
											<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
										</svg>
										<span>
											送料込み（全国一律）
										</span>
									</li>
									<li className="flex items-start gap-3">
										<svg className="w-5 h-5 text-green-500 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
											<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
										</svg>
										<span>
											限定デザインへの優先アクセス
										</span>
									</li>
									<li className="flex items-start gap-3">
										<svg className="w-5 h-5 text-green-500 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
											<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
										</svg>
										<span>
											いつでもキャンセル可能
										</span>
									</li>
								</ul>

								<div className="text-center">
									<ECLinkButton
										href="https://ec.artpaper.com/subscription"
										location="subscription_cta"
										variant="primary"
										className="w-full py-3 text-lg"
									>
										サブスクリプションを始める
									</ECLinkButton>
									<p className="mt-3 text-sm text-neutral-500">
										クレジットカード決済のみ。初月無料、2ヶ月目から課金開始。
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="max-w-2xl mx-auto text-center">
						<h3 className="text-xl font-medium mb-6">
							サブスクリプションの流れ
						</h3>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							<div className="p-4">
								<div className="w-12 h-12 rounded-full bg-primary-100 text-primary-500 flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
								<h4 className="font-medium mb-2">登録する</h4>
								<p className="text-sm text-neutral-600">
									簡単な登録で初月無料のサブスクリプションを開始
								</p>
							</div>
							<div className="p-4">
								<div className="w-12 h-12 rounded-full bg-primary-100 text-primary-500 flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
								<h4 className="font-medium mb-2">アートを選ぶ</h4>
								<p className="text-sm text-neutral-600">
									150種類以上のデザインから好きなものを選択
								</p>
							</div>
							<div className="p-4">
								<div className="w-12 h-12 rounded-full bg-primary-100 text-primary-500 flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
								<h4 className="font-medium mb-2">定期的に楽しむ</h4>
								<p className="text-sm text-neutral-600">
									毎月新作が登場。気分に合わせて部屋を変えられる
								</p>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}-e 
### FILE: ./src/components/sections/problem-section.tsx

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
}-e 
### FILE: ./src/components/sections/interior-basics-section.tsx

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
    imageUrl: "/images/placeholder-color.jpg",
  },
  {
    id: "focal-point",
    title: "視線の焦点を作る",
    description: "人が部屋に入ったとき、最初に目がいく「焦点」があると空間に魅力が生まれます。壁面は視界に入りやすく、焦点を作るのに最適な場所です。",
    imageUrl: "/images/placeholder-focal.jpg",
  },
  {
    id: "wall-impact",
    title: "壁が与える影響力",
    description: "部屋の視界面積の約40%を占める壁。家具や小物を変えるよりも、壁の印象を変えるほうが空間全体に与える影響が大きいのです。",
    imageUrl: "/images/placeholder-wall.jpg",
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
                <div className="aspect-[4/3] relative rounded-lg overflow-hidden bg-neutral-200">
                  {tip.imageUrl ? (
                    <Image
                      src={tip.imageUrl}
                      alt={tip.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-neutral-500">
                      画像準備中
                    </div>
                  )}
                </div>
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
}-e 
### FILE: ./src/components/sections/ShowcaseSection.tsx

'use client';

import { useState } from 'react';
import { Container } from "@/components/layout/container";
import { ECLinkButton } from "@/components/ui/ec-link-button";
import { ProductGallery } from "./product-showcase/ProductGallery";
import { featuredProducts, Product } from "@/data/featured-products";
import Image from 'next/image';
type LayoutType = 'standard' | 'dark' | 'minimalist' | 'immersive';

export function ShowcaseSection() {
	const [activeProduct, setActiveProduct] = useState<Product>(featuredProducts[0]);
	const [isFullscreen, setIsFullscreen] = useState(false);

	// レイアウトに応じたスタイルを取得
	const getLayoutStyles = (product: Product) => {
		const layoutType = product.layoutType as LayoutType;

		switch (layoutType) {
			case 'dark':
				return {
					wrapper: 'bg-neutral-900 text-white',
					inner: 'py-16 md:py-20',
					title: 'text-white',
					description: 'text-neutral-300',
					price: 'text-white',
					button: 'bg-accent-500 hover:bg-accent-600 text-white',
					features: 'bg-neutral-800 border-neutral-700',
					accent: product.accentColor || '#FF5C5C'
				};

			case 'minimalist':
				return {
					wrapper: 'bg-white',
					inner: 'py-16 md:py-20',
					title: 'text-neutral-900',
					description: 'text-neutral-600',
					price: 'text-neutral-900',
					button: 'bg-neutral-900 hover:bg-neutral-800 text-white',
					features: 'bg-neutral-50 border-neutral-100',
					accent: product.accentColor || '#404040'
				};

			case 'immersive':
				return {
					wrapper: `bg-gradient-to-br from-${product.accentColor?.replace('#', '') || 'primary'}-900 to-${product.accentColor?.replace('#', '') || 'primary'}-600 text-white`,
					inner: 'py-16 md:py-20',
					title: 'text-white',
					description: 'text-white/80',
					price: 'text-white',
					button: 'bg-white hover:bg-neutral-100 text-neutral-900',
					features: 'bg-white/10 backdrop-blur-sm border-white/20',
					accent: product.accentColor || '#3B82F6'
				};

			case 'standard':
			default:
				return {
					wrapper: 'bg-white',
					inner: 'py-16 md:py-20',
					title: 'text-neutral-900',
					description: 'text-neutral-700',
					price: 'text-neutral-900',
					button: 'bg-primary-500 hover:bg-primary-600 text-white',
					features: 'bg-neutral-50 border-neutral-200',
					accent: product.accentColor || '#3B82F6'
				};
		}
	};

	const styles = getLayoutStyles(activeProduct);

	return (
		<section id="showcase-section" className={`${styles.wrapper} transition-colors duration-500`}>
			<Container>
				<div className={styles.inner}>
					{/* 商品セレクター（ナビゲーション） */}
					<div className="flex items-center justify-center mb-12 overflow-x-auto pb-4 gap-2 md:gap-4">
						{featuredProducts.map((product, index) => (
							<button
								key={product.id}
								className={`px-3 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors ${product.id === activeProduct.id
										? `bg-[${styles.accent}] text-white`
										: 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
									}`}
								style={{
									backgroundColor: product.id === activeProduct.id ? styles.accent : undefined
								}}
								onClick={() => setActiveProduct(product)}
							>
								{product.title}
							</button>
						))}
					</div>

					{/* メインコンテンツ */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
						{/* 左側：画像ギャラリー */}
						<div>
							<ProductGallery
								images={activeProduct.images}
								title={activeProduct.title}
								onFullscreen={() => setIsFullscreen(true)}
							/>
						</div>

						{/* 右側：商品情報 */}
						<div>
							{/* カテゴリとタグ */}
							<div className="flex flex-wrap items-center gap-2 mb-4">
								<span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-[${styles.accent}] text-white`}>
									{activeProduct.category}
								</span>
								{activeProduct.tags.slice(0, 3).map(tag => (
									<span key={tag} className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 text-neutral-700">
										{tag}
									</span>
								))}
							</div>

							{/* 商品タイトルと説明 */}
							<h2 className={`text-3xl md:text-4xl font-bold mb-2 ${styles.title}`}>
								{activeProduct.title}
							</h2>
							{activeProduct.subtitle && (
								<p className={`text-xl ${styles.description} mb-4`}>
									{activeProduct.subtitle}
								</p>
							)}

							{/* 評価とレビュー */}
							{activeProduct.rating && (
								<div className="flex items-center gap-2 mb-4">
									<div className="flex">
										{[...Array(5)].map((_, i) => (
											<svg
												key={i}
												className={`w-5 h-5 ${i < Math.floor(activeProduct.rating!.average)
														? 'text-yellow-400'
														: 'text-neutral-300'
													}`}
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
											</svg>
										))}
									</div>
									<span className={`text-sm ${styles.description}`}>
										{activeProduct.rating.average} ({activeProduct.rating.count}件のレビュー)
									</span>
								</div>
							)}

							{/* 価格情報 */}
							<div className="mb-6">
								{activeProduct.discount ? (
									<div className="flex items-center gap-3">
										<span className={`text-3xl font-bold ${styles.price}`}>
											¥{Math.round(activeProduct.price * (1 - activeProduct.discount.percentage / 100)).toLocaleString()}
										</span>
										<span className="text-lg line-through text-neutral-500">
											¥{activeProduct.price.toLocaleString()}
										</span>
										<span className="bg-red-500 text-white px-2 py-0.5 rounded text-sm font-medium">
											{activeProduct.discount.percentage}%OFF
										</span>
									</div>
								) : (
									<span className={`text-3xl font-bold ${styles.price}`}>
										¥{activeProduct.price.toLocaleString()}
									</span>
								)}
								<p className="text-sm mt-1 text-neutral-500">
									送料無料・税込
								</p>
							</div>

							{/* 商品説明 */}
							<p className={`${styles.description} mb-6`}>
								{activeProduct.description}
							</p>

							{/* サイズ */}
							<div className="mb-6">
								<h3 className={`font-medium mb-2 ${styles.title}`}>サイズ</h3>
								<div className="flex items-center gap-4">
									<div className={`border ${styles.features === 'bg-neutral-800 border-neutral-700' ? 'border-neutral-700' : 'border-neutral-200'} rounded-lg p-3 text-center min-w-[100px]`}>
										<div className={`text-sm ${styles.description}`}>幅</div>
										<div className={`font-medium ${styles.title}`}>
											{activeProduct.dimensions.width}
											<span className="text-sm">{activeProduct.dimensions.unit}</span>
										</div>
									</div>
									<div className={`border ${styles.features === 'bg-neutral-800 border-neutral-700' ? 'border-neutral-700' : 'border-neutral-200'} rounded-lg p-3 text-center min-w-[100px]`}>
										<div className={`text-sm ${styles.description}`}>高さ</div>
										<div className={`font-medium ${styles.title}`}>
											{activeProduct.dimensions.height}
											<span className="text-sm">{activeProduct.dimensions.unit}</span>
										</div>
									</div>
								</div>
							</div>

							{/* 主な特徴 */}
							<div className="mb-6">
								<h3 className={`font-medium mb-2 ${styles.title}`}>主な特徴</h3>
								<ul className={`${styles.features} rounded-lg p-4 space-y-2`}>
									{activeProduct.features.map((feature, index) => (
										<li key={index} className="flex items-start gap-2">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className={`h-5 w-5 mt-0.5 flex-shrink-0`}
												viewBox="0 0 20 20"
												fill="currentColor"
												style={{ color: styles.accent }}
											>
												<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
											</svg>
											<span className={styles.description}>{feature}</span>
										</li>
									))}
								</ul>
							</div>

							{/* CTAボタン */}
							<div className="flex flex-col sm:flex-row gap-4 mt-8">
								<ECLinkButton
									href={`https://ec.artpaper.com/products/${activeProduct.id}`}
									location="showcase"
									variant="primary"
									className={`py-3 px-8 text-lg font-medium rounded-md ${styles.button}`}
								>
									購入する
								</ECLinkButton>

								<button
									className={`py-3 px-8 text-lg font-medium rounded-md border ${styles.wrapper === 'bg-neutral-900 text-white'
											? 'border-neutral-700 text-white hover:bg-neutral-800'
											: 'border-neutral-300 text-neutral-700 hover:bg-neutral-100'
										} transition-colors`}
									onClick={() => alert('お気に入りに追加しました！')}
								>
									<span className="flex items-center justify-center gap-2">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
											<path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
										</svg>
										お気に入り
									</span>
								</button>
							</div>

							{/* 配送情報 */}
							<div className="mt-8 pt-6 border-t border-neutral-200">
								<div className="flex items-start gap-3 text-sm">
									<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neutral-500 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
										<path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
										<path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-5h2a1 1 0 00.9-.574l2-4A1 1 0 0015 4H3zm11 3a1 1 0 00-1 1v1h-2V8a1 1 0 00-1-1H3V5h11v2z" />
									</svg>
									<div>
										<p className={`font-medium ${styles.title}`}>送料無料</p>
										<p className={styles.description}>通常2〜4営業日以内に発送</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Container>

			{/* フルスクリーンビュー */}
			{isFullscreen && (
				<div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
					<button
						className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
						onClick={() => setIsFullscreen(false)}
					>
						<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>

					<div className="w-full h-full flex items-center justify-center">
						{activeProduct.images.length > 0 && (
							<div className="relative w-[90vw] h-[80vh]">
								<Image
									src={activeProduct.images[0].url}
									alt={activeProduct.images[0].alt || activeProduct.title}
									fill
									className="object-contain"
								/>
							</div>
						)}
					</div>
				</div>
			)}
		</section>
	);
}-e 
### FILE: ./src/components/sections/features-section.tsx

import { Container } from "../layout/container";

type FeatureItem = {
	title: string;
	description: string;
	icon: React.ReactNode;
};

const features: FeatureItem[] = [
	{
		title: "賃貸OK",
		description: "特殊な再剥離技術で壁を傷めず、跡が残りません。引っ越し時も安心して使えます。",
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
				<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
				<polyline points="9 22 9 12 15 12 15 22"></polyline>
			</svg>
		),
	},
	{
		title: "簡単施工",
		description: "貼るだけの3分施工。特別な道具や技術は必要ありません。誰でも簡単に部屋の雰囲気を変えられます。",
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
				<circle cx="12" cy="12" r="10"></circle>
				<polyline points="12 6 12 12 16 14"></polyline>
			</svg>
		),
	},
	{
		title: "高品質デザイン",
		description: "150種類以上のAIが生成したユニークなデザイン。あなたの好みやインテリアに合わせて選べます。",
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
				<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
			</svg>
		),
	},
];

export function FeaturesSection() {
	return (
		<section className="py-16 md:py-24 bg-white">
			<Container>
				<div className="text-center mb-12 md:mb-16">
					<h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
						アートペーパーの特長
					</h2>
					<p className="text-neutral-700 max-w-2xl mx-auto">
						一般的な壁紙やポスターとは違う、アートペーパーならではの特長をご紹介します。
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
					{features.map((feature, index) => (
						<div
							key={index}
							className="bg-neutral-50 rounded-lg p-6 border border-neutral-100 transition-all hover:shadow-card hover:-translate-y-1"
						>
							<div className="w-12 h-12 bg-primary-500/10 text-primary-500 rounded-md flex items-center justify-center mb-4">
								{feature.icon}
							</div>
							<h3 className="text-xl font-medium mb-2">{feature.title}</h3>
							<p className="text-neutral-700">{feature.description}</p>
						</div>
					))}
				</div>
			</Container>
		</section>
	);
}-e 
### FILE: ./src/components/sections/hero-section.tsx

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
}-e 
### FILE: ./src/components/sections/product-showcase/ProductGallery.tsx

'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ProductImage } from '@/data/featured-products';

interface ProductGalleryProps {
	images: ProductImage[];
	title: string;
	onFullscreen?: () => void;
}

export function ProductGallery({ images, title, onFullscreen }: ProductGalleryProps) {
	const [activeImageIndex, setActiveImageIndex] = useState(0);
	const [isZoomed, setIsZoomed] = useState(false);
	const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
	const mainImageRef = useRef<HTMLDivElement>(null);
	const hasImages = images && images.length > 0;

	// 画像が変更されたらインデックスをリセット
	useEffect(() => {
		setActiveImageIndex(0);
		setIsZoomed(false);
	}, [images]);

	// メイン画像とサムネイル用のデータ準備
	const mainImage = hasImages ? images[activeImageIndex] : null;
	const thumbnails = hasImages ? images : [];

	// ズーム機能のための関数
	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!mainImageRef.current || !isZoomed) return;

		const { left, top, width, height } = mainImageRef.current.getBoundingClientRect();
		const x = ((e.clientX - left) / width) * 100;
		const y = ((e.clientY - top) / height) * 100;

		setZoomPosition({ x, y });
	};

	// プレースホルダーコンポーネント
	const PlaceholderImage = () => (
		<div className="w-full h-full flex items-center justify-center bg-neutral-100 rounded-lg">
			<span className="text-neutral-400">画像がありません</span>
		</div>
	);

	return (
		<div className="product-gallery">
			{/* メイン画像 */}
			<div
				ref={mainImageRef}
				className={`relative overflow-hidden rounded-lg mb-4 aspect-[4/3] ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
				onClick={() => setIsZoomed(!isZoomed)}
				onMouseMove={handleMouseMove}
				onMouseLeave={() => setIsZoomed(false)}
			>
				{mainImage ? (
					<Image
						src={mainImage.url}
						alt={mainImage.alt || title}
						fill
						sizes="(max-width: 768px) 100vw, 50vw"
						className={`object-cover transition-transform duration-300 ${isZoomed ? 'scale-150' : 'scale-100'
							}`}
						style={isZoomed ? {
							transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`
						} : undefined}
						priority
					/>
				) : (
					<PlaceholderImage />
				)}

				{/* フルスクリーンボタン */}
				<button
					className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-sm hover:bg-white transition-colors"
					onClick={(e) => {
						e.stopPropagation();
						onFullscreen && onFullscreen();
					}}
				>
					<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
						<path d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" />
					</svg>
				</button>

				{/* AR表示ボタン（将来実装用） */}
				<button
					className="absolute bottom-4 right-4 bg-accent-500 text-white px-3 py-1.5 rounded-md shadow-sm hover:bg-accent-600 transition-colors flex items-center gap-1.5"
					onClick={(e) => {
						e.stopPropagation();
						alert('AR機能は近日公開予定です。お楽しみに！');
					}}
				>
					<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
						<path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm1 0v12h12V4H4zm3 9a1 1 0 100-2 1 1 0 000 2zm1-4a1 1 0 11-2 0 1 1 0 012 0zm3 4a1 1 0 100-2 1 1 0 000 2zm1-4a1 1 0 11-2 0 1 1 0 012 0zm3 4a1 1 0 100-2 1 1 0 000 2zm1-4a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
					</svg>
					<span className="font-medium text-sm">ARで見る</span>
				</button>
			</div>

			{/* サムネイルストリップ */}
			{thumbnails.length > 1 && (
				<div className="grid grid-cols-5 gap-2">
					{thumbnails.map((img, index) => (
						<button
							key={img.id}
							className={`relative aspect-square overflow-hidden rounded-md ${index === activeImageIndex
									? 'border-2 border-primary-500'
									: 'border border-neutral-200 hover:border-neutral-300'
								}`}
							onClick={() => setActiveImageIndex(index)}
						>
							<Image
								src={img.url}
								alt={img.alt || `${title} - 画像 ${index + 1}`}
								fill
								sizes="100px"
								className="object-cover"
							/>
						</button>
					))}
				</div>
			)}
		</div>
	);
}-e 
### FILE: ./src/components/sections/next-release-countdown-section.tsx

'use client';

import { Container } from "../layout/container";
import { ECLinkButton } from "../ui/ec-link-button";
import { useEffect, useState } from "react";

// 次回リリース日（例：毎月1日）
const getNextReleaseDate = () => {
	const now = new Date();
	const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
	return nextMonth;
};

export function NextReleaseCountdownSection() {
	const [timeLeft, setTimeLeft] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0
	});

	const [subscriberCount, setSubscriberCount] = useState(378); // 表示用の仮の数値

	useEffect(() => {
		const calculateTimeLeft = () => {
			const targetDate = getNextReleaseDate();
			const difference = targetDate.getTime() - new Date().getTime();

			if (difference > 0) {
				setTimeLeft({
					days: Math.floor(difference / (1000 * 60 * 60 * 24)),
					hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
					minutes: Math.floor((difference / 1000 / 60) % 60),
					seconds: Math.floor((difference / 1000) % 60)
				});
			}
		};

		// 初回計算
		calculateTimeLeft();

		// 毎秒更新
		const timer = setInterval(calculateTimeLeft, 1000);

		// クリーンアップ
		return () => clearInterval(timer);
	}, []);

	// ページ表示時に購読者数を少しずつランダムに増やす効果
	useEffect(() => {
		const interval = setInterval(() => {
			if (Math.random() > 0.7) { // 30%の確率で増加
				setSubscriberCount(prev => prev + 1);
			}
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	// 次回リリースの月表示
	const nextReleaseMonth = getNextReleaseDate().toLocaleString('ja-JP', { month: 'long' });

	return (
		<section className="py-12 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
			<Container>
				<div className="text-center">
					<h2 className="text-2xl font-bold mb-2 md:text-3xl">
						{nextReleaseMonth}のデザイン、まもなく登場
					</h2>
					<p className="text-white/80 mb-8">
						新作デザイン発表まであと
					</p>

					<div className="flex justify-center gap-4 mb-8">
						<div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 min-w-[80px]">
							<div className="text-3xl font-bold">{timeLeft.days}</div>
							<div className="text-xs text-white/70">日</div>
						</div>
						<div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 min-w-[80px]">
							<div className="text-3xl font-bold">{timeLeft.hours}</div>
							<div className="text-xs text-white/70">時間</div>
						</div>
						<div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 min-w-[80px]">
							<div className="text-3xl font-bold">{timeLeft.minutes}</div>
							<div className="text-xs text-white/70">分</div>
						</div>
						<div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 min-w-[80px]">
							<div className="text-3xl font-bold">{timeLeft.seconds}</div>
							<div className="text-xs text-white/70">秒</div>
						</div>
					</div>

					<div className="max-w-md mx-auto mb-8">
						<div className="flex items-center justify-center gap-2 mb-2">
							<svg className="w-5 h-5 text-accent-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
							</svg>
							<p className="text-sm">
								サブスクリプション会員は<span className="font-medium">1日早く</span>アクセスできます
							</p>
						</div>
						<div className="text-xs text-white/60">
							現在 <span className="font-medium">{subscriberCount}人</span> が次回リリースを待っています
						</div>
					</div>

					<div className="flex flex-col sm:flex-row justify-center gap-4">
						<ECLinkButton
							href="https://ec.artpaper.com/subscription"
							location="next_release"
							variant="primary"
							className="bg-white text-primary-700 hover:bg-white/90"
						>
							サブスクリプションに登録する
						</ECLinkButton>
						<ECLinkButton
							href="https://ec.artpaper.com/notify"
							location="next_release"
							variant="outline"
							className="border-white/30 hover:bg-white/10"
						>
							リリース通知を受け取る
						</ECLinkButton>
					</div>
				</div>
			</Container>
		</section>
	);
}-e 
### FILE: ./src/components/sections/gallery-preview-section.tsx

// src/components/sections/gallery-preview-section.tsx
import { Container } from "../layout/container";
import Link from "next/link";

type GalleryItem = {
	id: string;
	title: string;
	category: string;
	thumbnail: string;
};

// サンプルデータ（実際のデータに置き換えてください）
const galleryItems: GalleryItem[] = [
	{
		id: "art1",
		title: "青い抽象画",
		category: "抽象",
		thumbnail: "/images/placeholder.jpg",
	},
	{
		id: "art2",
		title: "自然風景",
		category: "風景",
		thumbnail: "/images/placeholder.jpg",
	},
	{
		id: "art3",
		title: "都市の夜景",
		category: "モダン",
		thumbnail: "/images/placeholder.jpg",
	},
	{
		id: "art4",
		title: "宇宙テーマ",
		category: "サイバー",
		thumbnail: "/images/placeholder.jpg",
	},
];

export function GalleryPreviewSection() {
	return (
		<section className="py-16 md:py-24">
			<Container>
				<div className="text-center mb-12">
					<h2 className="font-display text-3xl font-bold mb-4 md:text-4xl">
						あなたの空間を彩るアート
					</h2>
					<p className="text-neutral-700 max-w-2xl mx-auto mb-8">
						150種類以上のデザインから、あなたの好みや部屋の雰囲気に合わせて選べます。
					</p>
					<div className="flex justify-center mb-12">
						<Link
							href="/gallery"
							className="inline-block bg-accent-500 text-white px-6 py-3 rounded-md hover:bg-accent-600 transition-colors font-medium"
						>
							すべてのアートを見る
						</Link>
					</div>
				</div>

				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{galleryItems.map((item) => (
						<Link
							key={item.id}
							href={`/gallery/${item.id}`}
							className="block group"
						>
							<div className="rounded-lg overflow-hidden shadow-card transition-all duration-300 group-hover:shadow-hover group-hover:-translate-y-1">
								<div
									style={{
										aspectRatio: '3/4',
										background: 'linear-gradient(to bottom right, #f0f9ff, #e0f2fe)',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center'
									}}
								>
									<span className="text-neutral-500">
										{item.title}
									</span>
								</div>
								<div className="p-4">
									<h3 className="font-medium text-lg mb-1">{item.title}</h3>
									<p className="text-sm text-neutral-600">{item.category}</p>
								</div>
							</div>
						</Link>
					))}
				</div>
			</Container>
		</section>
	);
}-e 
### FILE: ./src/components/ui/button.tsx

import { cn } from '@/utils/cn';
import { ButtonHTMLAttributes, forwardRef } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
	size?: 'default' | 'sm' | 'lg';
	isLoading?: boolean;
	leftIcon?: React.ReactNode;
	rightIcon?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			className,
			variant = 'primary',
			size = 'default',
			isLoading = false,
			leftIcon,
			rightIcon,
			children,
			disabled,
			...props
		},
		ref
	) => {
		return (
			<button
				ref={ref}
				className={cn(
					'btn',
					{
						'btn-primary': variant === 'primary',
						'btn-secondary': variant === 'secondary',
						'border border-input bg-transparent hover:bg-muted': variant === 'outline',
						'hover:bg-muted': variant === 'ghost',
						'btn-lg': size === 'lg',
						'h-9 px-3': size === 'sm',
						'opacity-70 pointer-events-none': isLoading,
					},
					className
				)}
				disabled={disabled || isLoading}
				{...props}
			>
				{isLoading && (
					<svg
						className="mr-2 h-4 w-4 animate-spin"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
					>
						<circle
							className="opacity-25"
							cx="12"
							cy="12"
							r="10"
							stroke="currentColor"
							strokeWidth="4"
						></circle>
						<path
							className="opacity-75"
							fill="currentColor"
							d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
						></path>
					</svg>
				)}
				{!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
				{children}
				{!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
			</button>
		);
	}
);

Button.displayName = 'Button';

export { Button };-e 
### FILE: ./src/components/ui/ec-link-button.tsx

'use client';

import { trackECLinkClick, getECUrlWithUTM } from '@/lib/analytics';
import Link from 'next/link';
import { ReactNode } from 'react';

interface ECLinkButtonProps {
	href: string;               // ECサイトの基本URL
	location: string;           // ボタンの設置場所（hero, features, ctaなど）
	children: ReactNode;        // ボタンのテキストやコンテンツ
	className?: string;         // 追加のスタイルクラス
	additionalParams?: Record<string, string>; // 追加のURLパラメータ
	openInNewTab?: boolean;     // 新しいタブで開くかどうか
	variant?: 'primary' | 'secondary' | 'outline'; // バリエーション
}

export function ECLinkButton({
	href,
	location,
	children,
	className = '',
	additionalParams = {},
	openInNewTab = false,
	variant = 'primary'
}: ECLinkButtonProps) {
	// ボタンクラスの設定
	const getButtonClasses = () => {
		const baseClasses = 'inline-block rounded-md font-medium transition-colors';

		const variantClasses = {
			primary: 'bg-accent-500 text-white hover:bg-accent-600 px-6 py-3',
			secondary: 'bg-primary-500 text-white hover:bg-primary-600 px-6 py-3',
			outline: 'border border-neutral-300 hover:bg-neutral-100 px-5 py-2.5'
		};

		return `${baseClasses} ${variantClasses[variant]} ${className}`;
	};

	// クリックハンドラー
	const handleClick = (e: React.MouseEvent) => {
		const buttonText = typeof children === 'string' ? children : 'ECサイトへ';

		// ECサイト遷移のトラッキング
		trackECLinkClick(location, buttonText, href);
	};

	// UTMパラメータ付きのURL生成
	const ecUrl = getECUrlWithUTM(href, location, additionalParams);

	return (
		<Link
			href={ecUrl}
			onClick={handleClick}
			target={openInNewTab ? '_blank' : '_self'}
			rel={openInNewTab ? 'noopener noreferrer' : ''}
			className={getButtonClasses()}
		>
			{children}
		</Link>
	);
}-e 
### FILE: ./src/components/analytics/page-analytics.tsx

'use client';

import { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import {
	trackPageView,
	trackScrollDepth,
	trackSectionView,
	startTimeMeasurement,
	trackTimeOnPage
} from '@/lib/analytics';

type PageAnalyticsProps = {
	sectionIds?: string[];  // トラッキングする特定のセクションのID
};

export function PageAnalytics({ sectionIds = [] }: PageAnalyticsProps) {
	const pathname = usePathname();
	const [observedSections, setObservedSections] = useState<Element[]>([]);
	const scrollThrottleTimeout = useRef<NodeJS.Timeout | null>(null);

	// ページビューのトラッキング
	useEffect(() => {
		if (pathname) {
			trackPageView(pathname);
			startTimeMeasurement();
		}

		// ページを離れる際の処理
		return () => {
			trackTimeOnPage();
		};
	}, [pathname]);

	// スクロール深度のトラッキング
	useEffect(() => {
		const handleScroll = () => {
			// スロットリング処理（パフォーマンス対策）
			if (scrollThrottleTimeout.current) {
				clearTimeout(scrollThrottleTimeout.current);
			}

			scrollThrottleTimeout.current = setTimeout(() => {
				const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
				const scrollTop = window.scrollY;
				const scrollPercentage = Math.floor((scrollTop / docHeight) * 100);

				trackScrollDepth(scrollPercentage);
			}, 500);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// セクション表示のトラッキング
	useEffect(() => {
		if (typeof window === 'undefined' || !sectionIds.length) return;

		// IntersectionObserverの設定
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						const element = entry.target;
						const sectionId = element.id;
						const sectionName = element.getAttribute('data-section-name') || sectionId;

						trackSectionView(sectionId, sectionName);

						// 一度表示されたら監視解除
						observer.unobserve(element);
					}
				});
			},
			{
				root: null,
				rootMargin: '0px',
				threshold: 0.5, // 50%表示されたらイベント発火
			}
		);

		// 指定されたセクションを監視
		const sections: Element[] = [];
		sectionIds.forEach(id => {
			const element = document.getElementById(id);
			if (element) {
				observer.observe(element);
				sections.push(element);
			}
		});

		setObservedSections(sections);

		// セクションIDが指定されていない場合は全セクションを自動検出
		if (sectionIds.length === 0) {
			const autoSections = document.querySelectorAll('section[id]');
			autoSections.forEach(section => {
				observer.observe(section);
				sections.push(section);
			});
			setObservedSections(Array.from(autoSections));
		}

		return () => {
			observedSections.forEach(section => {
				observer.unobserve(section);
			});
		};
	}, [sectionIds, observedSections.length]);

	// 表示のみのコンポーネントなのでUIは不要
	return null;
}-e 
### FILE: ./src/components/showcase/ProductShowcaseSection.tsx

'use client';

import React, { useRef, useEffect, useState, useMemo } from 'react';
import Image from 'next/image';
import { Product } from '@/data/featured-products';
import { ProductDetails } from './ProductDetails';
import { InteriorPreview } from './InteriorPreview';
import { Container } from '@/components/layout/container';
import { useImagePreload } from '@/hooks/useImagePreload';
import { useShowcase } from '@/contexts/ShowcaseContext';

interface ProductShowcaseSectionProps {
	product: Product;
	index: number;
	totalProducts: number;
}

export const ProductShowcaseSection: React.FC<ProductShowcaseSectionProps> = ({
	product,
	index,
	totalProducts
}) => {
	const { setActiveProduct, isTransitioning, activeProduct } = useShowcase();
	const sectionRef = useRef<HTMLDivElement>(null);
	const titleSectionRef = useRef<HTMLDivElement>(null);
	const titleTriggerRef = useRef<HTMLDivElement>(null); // タイトルセクションに関連付けられたトリガー
	const detailsSectionRef = useRef<HTMLDivElement>(null);

	const [isActive, setIsActive] = useState(false);
	const [lastTriggerTime, setLastTriggerTime] = useState(0);

	// 各製品セクションの一意のID
	const sectionId = useMemo(() => `product-${product.id}`, [product.id]);

	// メイン画像URLと読み込み状態
	const mainImageUrl = useMemo(() => {
		const mainImage = product.images.find(img => img.type === 'main');
		return mainImage?.url || '';
	}, [product.images]);

	const isImageLoaded = useImagePreload(mainImageUrl);

	// トリガーハンドラー - 即時応答するよう最適化
	const handleProductTrigger = () => {
		const now = Date.now();
		if (
			isTransitioning ||
			now - lastTriggerTime < 500 || // デバウンス時間
			(activeProduct && activeProduct.id === product.id)
		) {
			return;
		}

		// console.log(`${product.title} のトリガー検出: 背景更新`);
		setLastTriggerTime(now);
		setIsActive(true);

		// 即時に製品をアクティブに設定
		setActiveProduct(product);
	};

	// タイトルトリガーの監視
	useEffect(() => {
		if (!titleTriggerRef.current) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						// console.log(`${product.title} - タイトルトリガー検出: 背景更新`);
						handleProductTrigger();
					}
				});
			},
			{
				// トリガーを少し大きめに設定して、タイトルセクションの前で検出
				threshold: 0 // 1ピクセルでも表示されたら反応
			}
		);

		observer.observe(titleTriggerRef.current);

		return () => observer.disconnect();
	}, [product, handleProductTrigger]);

	// 非アクティブ化の処理
	useEffect(() => {
		if (activeProduct && activeProduct.id !== product.id && isActive) {
			setIsActive(false);
		}
	}, [activeProduct, product.id, isActive]);

	return (
		<section
			id={sectionId}
			ref={sectionRef}
			className="product-showcase relative"
			data-index={index}
			data-product-id={product.id}
			data-is-active={isActive}
		>
			{/* タイトルセクション */}
			<div
				ref={titleSectionRef}
				className="relative h-[120vh] flex items-center justify-center"
			>
				{/* タイトルセクション上にオーバーレイするトリガーゾーン */}
				<div
					ref={titleTriggerRef}
					className="absolute inset-0 -top-[500px] -bottom-[500px]" // 上下に300pxはみ出す
					aria-hidden="true"
					data-trigger="title"
					style={{
						pointerEvents: 'none',
						opacity: 0
					}}
				/>

				<div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
					<Container>
						<h2 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-4">
							{product.title}
						</h2>
						{product.subtitle && (
							<p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
								{product.subtitle}
							</p>
						)}
					</Container>
				</div>
			</div>

			{/* 製品紹介セクション */}
			<div
				className="relative w-full min-h-screen bg-white text-neutral-900"
				ref={detailsSectionRef}
			>
				<Container>
					<div className="py-20">
						{/* インテリアプレビュー */}
						<InteriorPreview product={product} />

						{/* 製品詳細 */}
						<div className="mt-16">
							<ProductDetails product={product} />
						</div>

						{/* 追加情報（オプション） */}
						<div className="mt-20 p-8 bg-white rounded-xl shadow-md">
							<h3 className="text-2xl font-bold mb-4 text-neutral-900">この壁紙について</h3>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
								<div>
									<h4 className="text-lg font-medium mb-2 text-neutral-900">こんな場所におすすめ</h4>
									<ul className="space-y-2">
										{product.tags.map((tag, idx) => (
											<li key={idx} className="flex items-center gap-2 text-neutral-700">
												<span className="w-2 h-2 rounded-full" style={{ backgroundColor: product.accentColor || '#3B82F6' }}></span>
												<span>{tag}テイストの部屋</span>
											</li>
										))}
									</ul>
								</div>
								<div>
									<h4 className="text-lg font-medium mb-2 text-neutral-900">仕様</h4>
									<ul className="space-y-2">
										{Object.entries(product.specifications).map(([key, value], idx) => (
											<li key={idx} className="flex justify-between border-b pb-1">
												<span className="text-neutral-500">{key}</span>
												<span className="font-medium text-neutral-900">{value}</span>
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</div>
		</section>
	);
};-e 
### FILE: ./src/components/showcase/InteriorPreview.tsx

'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Product } from '@/data/featured-products';

interface InteriorPreviewProps {
	product: Product;
}

export const InteriorPreview: React.FC<InteriorPreviewProps> = ({ product }) => {
	const [selectedRoom, setSelectedRoom] = useState<'living' | 'bedroom' | 'office'>('living');

	// 部屋の種類ごとのインテリア画像パス
	const roomImages = {
		living: "/images/interiors/living-room.jpg",
		bedroom: "/images/interiors/bedroom.jpg",
		office: "/images/interiors/office.jpg"
	};

	// 実際の実装ではこれらの画像が存在する必要があります
	// プレースホルダーの場合は下記のようにフォールバック
	const fallbackImage = "/images/placeholder.jpg";

	// 壁紙のオーバーレイサイズと位置（部屋ごとに異なる設定）
	const wallpaperPositions = {
		living: {
			width: '60%',
			height: '70%',
			top: '15%',
			left: '20%',
			transform: 'perspective(1000px) rotateY(-10deg)'
		},
		bedroom: {
			width: '50%',
			height: '60%',
			top: '20%',
			left: '25%',
			transform: 'perspective(1000px) rotateY(-5deg)'
		},
		office: {
			width: '45%',
			height: '65%',
			top: '18%',
			left: '28%',
			transform: 'perspective(1000px) rotateY(-8deg)'
		}
	};

	// 選択中の部屋の壁紙配置情報
	const currentPosition = wallpaperPositions[selectedRoom];

	// 商品のメイン画像取得
	const getMainImage = () => {
		const mainImage = product.images.find(img => img.type === 'main');
		return mainImage?.url || fallbackImage;
	};

	return (
		<div className="mt-12 mb-20">
			<div className="flex justify-center mb-6 space-x-4">
				<button
					className={`px-4 py-2 rounded-full text-sm font-medium ${selectedRoom === 'living'
							? 'bg-primary-500 text-white'
							: 'bg-white/50 text-neutral-700 hover:bg-white/80'
						}`}
					onClick={() => setSelectedRoom('living')}
				>
					リビングルーム
				</button>
				<button
					className={`px-4 py-2 rounded-full text-sm font-medium ${selectedRoom === 'bedroom'
							? 'bg-primary-500 text-white'
							: 'bg-white/50 text-neutral-700 hover:bg-white/80'
						}`}
					onClick={() => setSelectedRoom('bedroom')}
				>
					ベッドルーム
				</button>
				<button
					className={`px-4 py-2 rounded-full text-sm font-medium ${selectedRoom === 'office'
							? 'bg-primary-500 text-white'
							: 'bg-white/50 text-neutral-700 hover:bg-white/80'
						}`}
					onClick={() => setSelectedRoom('office')}
				>
					オフィス/書斎
				</button>
			</div>

			<div className="relative aspect-[16/9] max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl">
				{/* 部屋の背景画像 */}
				<div className="absolute inset-0 bg-neutral-200 flex items-center justify-center">
					<Image
						src={roomImages[selectedRoom] || fallbackImage}
						alt={`${selectedRoom} with ${product.title}`}
						fill
						sizes="(max-width: 768px) 100vw, 800px"
						className="object-cover"
					/>
				</div>

				{/* 壁紙オーバーレイ (3D変形効果付き) */}
				<div
					className="absolute shadow-lg"
					style={{
						width: currentPosition.width,
						height: currentPosition.height,
						top: currentPosition.top,
						left: currentPosition.left,
						transform: currentPosition.transform
					}}
				>
					<Image
						src={getMainImage()}
						alt={product.title}
						fill
						sizes="400px"
						className="object-cover rounded-sm"
					/>
				</div>

				{/* 全体の暗め調整レイヤー */}
				<div className="absolute inset-0 bg-black/15" />

				{/* 説明テキスト */}
				<div className="absolute bottom-4 right-4 bg-black/70 text-white px-4 py-2 rounded-lg text-sm max-w-xs">
					<p>実際の壁に貼った際のイメージです。部屋のサイズや光の状態により見え方が異なる場合があります。</p>
				</div>
			</div>
		</div>
	);
};-e 
### FILE: ./src/components/showcase/ProductDetails.tsx

'use client';

import React from 'react';
import { Product } from '@/data/featured-products';
import { ECLinkButton } from "@/components/ui/ec-link-button";
import Image from 'next/image';

interface ProductDetailsProps {
	product: Product;
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
	// 一貫した白背景スタイルを使用
	const styles = {
		wrapper: 'bg-white/90 backdrop-blur-lg',
		title: 'text-neutral-900',
		description: 'text-neutral-700',
		price: 'text-neutral-900',
		button: 'bg-primary-500 hover:bg-primary-600 text-white',
		features: 'bg-neutral-50 border-neutral-200',
		accent: product.accentColor || '#3B82F6'
	};

	return (
		<div className={`rounded-xl ${styles.wrapper} p-8 shadow-xl max-w-2xl mx-auto transition-all duration-500`}>
			{/* カテゴリとタグ */}
			<div className="flex flex-wrap items-center gap-2 mb-4">
				<span
					className="inline-block px-3 py-1 rounded-full text-xs font-medium text-white"
					style={{ backgroundColor: styles.accent }}
				>
					{product.category}
				</span>
				{product.tags.slice(0, 3).map(tag => (
					<span key={tag} className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 text-neutral-700">
						{tag}
					</span>
				))}
			</div>

			{/* 商品タイトルと説明 */}
			<h3 className={`text-2xl md:text-3xl font-bold mb-2 ${styles.title}`}>
				{product.title}
			</h3>
			{product.subtitle && (
				<p className={`text-lg ${styles.description} mb-4`}>
					{product.subtitle}
				</p>
			)}

			{/* 評価とレビュー */}
			{product.rating && (
				<div className="flex items-center gap-2 mb-4">
					<div className="flex">
						{[...Array(5)].map((_, i) => (
							<svg
								key={i}
								className={`w-5 h-5 ${i < Math.floor(product.rating!.average)
									? 'text-yellow-400'
									: 'text-neutral-300'
									}`}
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
							</svg>
						))}
					</div>
					<span className={`text-sm ${styles.description}`}>
						{product.rating.average} ({product.rating.count}件のレビュー)
					</span>
				</div>
			)}

			{/* 価格情報 */}
			<div className="mb-6">
				{product.discount ? (
					<div className="flex items-center gap-3">
						<span className={`text-3xl font-bold ${styles.price}`}>
							¥{Math.round(product.price * (1 - product.discount.percentage / 100)).toLocaleString()}
						</span>
						<span className="text-lg line-through text-neutral-500">
							¥{product.price.toLocaleString()}
						</span>
						<span className="bg-red-500 text-white px-2 py-0.5 rounded text-sm font-medium">
							{product.discount.percentage}%OFF
						</span>
					</div>
				) : (
					<span className={`text-3xl font-bold ${styles.price}`}>
						¥{product.price.toLocaleString()}
					</span>
				)}
				<p className="text-sm mt-1 text-neutral-500">
					送料無料・税込
				</p>
			</div>

			{/* 商品説明 */}
			<p className={`${styles.description} mb-6`}>
				{product.description}
			</p>

			{/* サイズ */}
			<div className="mb-6">
				<h4 className={`font-medium mb-2 ${styles.title}`}>サイズ</h4>
				<div className="flex items-center gap-4">
					<div className="border border-neutral-200 rounded-lg p-3 text-center min-w-[80px]">
						<div className={`text-sm ${styles.description}`}>幅</div>
						<div className={`font-medium ${styles.title}`}>
							{product.dimensions.width}
							<span className="text-sm">{product.dimensions.unit}</span>
						</div>
					</div>
					<div className="border border-neutral-200 rounded-lg p-3 text-center min-w-[80px]">
						<div className={`text-sm ${styles.description}`}>高さ</div>
						<div className={`font-medium ${styles.title}`}>
							{product.dimensions.height}
							<span className="text-sm">{product.dimensions.unit}</span>
						</div>
					</div>
				</div>
			</div>

			{/* CTAボタン */}
			<div className="flex flex-col sm:flex-row gap-4 mt-8">
				<ECLinkButton
					href={`https://ec.artpaper.com/products/${product.id}`}
					location="showcase"
					variant="primary"
					className={`py-3 px-8 text-lg font-medium rounded-md ${styles.button}`}
				>
					購入する
				</ECLinkButton>

				<button
					className="py-3 px-8 text-lg font-medium rounded-md border border-neutral-300 text-neutral-700 hover:bg-neutral-100 transition-colors"
					onClick={() => alert('お気に入りに追加しました！')}
				>
					<span className="flex items-center justify-center gap-2">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
							<path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
						</svg>
						お気に入り
					</span>
				</button>
			</div>
		</div>
	);
};-e 
### FILE: ./src/components/showcase/ShowcaseBackgroundManager.tsx

'use client';

import React, { useEffect, useState } from 'react';
import { useShowcase } from '@/contexts/ShowcaseContext';
import { Product } from '@/data/featured-products';
import Image from 'next/image';

export const ShowcaseBackgroundManager: React.FC = () => {
	const { activeProduct } = useShowcase();
	const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
	const [previousProduct, setPreviousProduct] = useState<Product | null>(null);
	const [imageLoaded, setImageLoaded] = useState(false);
	const [isTransitioning, setIsTransitioning] = useState(false);

	// 背景トランジションを管理
	useEffect(() => {
		if (activeProduct && (!currentProduct || currentProduct.id !== activeProduct.id)) {
			console.log("背景トランジション開始:", activeProduct.title);
			
			// 現在の製品を前の製品として保存
			if (currentProduct) {
				setPreviousProduct(currentProduct);
			}
			
			// トランジション状態を設定
			setIsTransitioning(true);
			
			// 新しい製品を設定
			setCurrentProduct(activeProduct);
			
			// トランジション完了後に前の背景をクリア
			const timer = setTimeout(() => {
				setIsTransitioning(false);
				setPreviousProduct(null);
			}, 800); // トランジション時間に合わせる
			
			return () => clearTimeout(timer);
		}
	}, [activeProduct, currentProduct]);

	// メイン画像URLを取得する関数
	const getMainImage = (product: Product) => {
		const mainImage = product.images.find(img => img.type === 'main');
		return mainImage?.url || '';
	};

	// 背景がない場合のフォールバック
	if (!currentProduct) {
		return (
			<div
				className="fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-gray-800 to-gray-900"
				style={{ zIndex: -1 }}
			/>
		);
	}

	const currentImageUrl = getMainImage(currentProduct);
	const previousImageUrl = previousProduct ? getMainImage(previousProduct) : '';

	return (
		<div
			className="fixed top-0 left-0 w-full h-screen overflow-hidden"
			style={{ zIndex: -1 }}
		>
			{/* 現在の背景画像 */}
			{currentImageUrl && (
				<div 
					className={`absolute inset-0 transition-opacity duration-800 ease-in-out ${
						isTransitioning ? 'opacity-100' : 'opacity-100'
					}`}
				>
					<Image
						src={currentImageUrl}
						alt={currentProduct.title}
						fill
						priority
						sizes="100vw"
						className="object-cover"
						onLoad={() => setImageLoaded(true)}
						onError={(e) => {
							console.error("画像読み込みエラー:", currentImageUrl);
							e.currentTarget.style.display = 'none';
						}}
					/>
					
					{/* 均一な薄い透明のオーバーレイ */}
					<div className="absolute inset-0 bg-black/40" />
				</div>
			)}
			
			{/* 前の背景画像 (トランジション中のみ表示) */}
			{previousImageUrl && isTransitioning && (
				<div 
					className="absolute inset-0 transition-opacity duration-800 ease-in-out opacity-0"
				>
					<Image
						src={previousImageUrl}
						alt={previousProduct?.title || ""}
						fill
						sizes="100vw"
						className="object-cover"
					/>
					
					{/* 均一な薄い透明のオーバーレイ */}
					<div className="absolute inset-0 bg-black/40" />
				</div>
			)}
			
			{/* 画像読み込み中のプレースホルダー (初回読み込み時のみ) */}
			{!imageLoaded && (
				<div
					className="absolute inset-0 flex items-center justify-center"
					style={{
						background: `linear-gradient(135deg, ${currentProduct.accentColor || '#3B82F6'}33, ${currentProduct.accentColor || '#3B82F6'}11)`,
					}}
				>
					<div className="text-center">
						<div className="animate-pulse mb-4">
							<svg className="w-16 h-16 mx-auto text-white/50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
							</svg>
						</div>
						<h2 className="text-2xl font-bold text-white/70">{currentProduct.title}</h2>
					</div>
				</div>
			)}
		</div>
	);
};-e 
### FILE: ./tailwind.config.js

//tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: [
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			extend: {
				// カラースキーム
				colors: {
					// プライマリーカラー - モダンで都会的な印象
					primary: {
						50: '#f0f9ff',
						100: '#e0f2fe',
						500: '#0ea5e9',  // メインカラー
						700: '#0369a1',
						900: '#0c4a6e',
					},

					// アクセントカラー - CTAやハイライト用（高コントラスト）
					accent: {
						500: '#FF5C5C',  // CTAボタン用
						600: '#E74C4C',  // ホバー状態
					},

					// ニュートラルカラー - テキストとバックグラウンド用
					neutral: {
						50: '#fafafa',   // バックグラウンドライト
						100: '#f5f5f5',  // セクション区切り用
						200: '#e5e5e5',  // ボーダーライト
						300: '#d4d4d4',  // ディバイダー
						600: '#525252',  // サブテキスト
						700: '#404040',  // ボディテキスト
						900: '#171717',  // ヘッドライン
					},

					// 補助カラー - カテゴリ分け用
					category: {
						art: '#3B82F6',       // アート系
						modern: '#10B981',    // モダン系
						natural: '#FBBF24',   // ナチュラル系
						cyber: '#8B5CF6',     // サイバー系
						abstract: '#EC4899',  // 抽象系
					}
				},

				// タイポグラフィー
				fontFamily: {
					// 基本フォント - 可読性とスタイルのバランス
					sans: [
						'"Noto Sans JP"',     // 日本語プライマリ
						'"Inter"',            // ラテン文字プライマリ
						'sans-serif',
					],

					// 見出し用フォント - 個性的でインパクトのあるデザイン
					display: [
						'"M PLUS 1p"',        // 日本語見出し
						'"Poppins"',          // ラテン文字見出し
						'sans-serif',
					],

					// アクセントフォント - 特別な要素やCTA用
					accent: [
						'"Bebas Neue"',       // 英数字アクセント
						'"Noto Sans JP"',     // 日本語フォールバック
						'sans-serif',
					],

					// モノスペースフォント - コードや技術情報用
					mono: [
						'"JetBrains Mono"',
						'monospace',
					],
				},

				// フォントサイズと行の高さ
				fontSize: {
					// ボディテキスト - 基本的な本文用
					'xs': ['0.75rem', { lineHeight: '1.2', letterSpacing: '0.01em' }],    // 12px
					'sm': ['0.875rem', { lineHeight: '1.25', letterSpacing: '0.01em' }],   // 14px
					'base': ['1rem', { lineHeight: '1.5', letterSpacing: '0.01em' }],      // 16px
					'lg': ['1.125rem', { lineHeight: '1.55', letterSpacing: '0.01em' }],   // 18px

					// 見出し - インパクトのあるヘッドライン用
					'xl': ['1.25rem', { lineHeight: '1.4', letterSpacing: '-0.01em' }],    // 20px
					'2xl': ['1.5rem', { lineHeight: '1.35', letterSpacing: '-0.02em' }],   // 24px 
					'3xl': ['1.875rem', { lineHeight: '1.3', letterSpacing: '-0.02em' }],  // 30px
					'4xl': ['2.25rem', { lineHeight: '1.25', letterSpacing: '-0.03em' }],  // 36px
					'5xl': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.03em' }],      // 48px

					// 特大サイズ - Heroセクションやインパクト用
					'6xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.04em' }],   // 60px
					'7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.04em' }],      // 72px
				},

				// スペーシングとサイジング
				spacing: {
					// 特別なセクション高さ用
					'screen-90': '90vh',
					'screen-80': '80vh',
				},

				// ボーダーとシャドウ
				boxShadow: {
					// カスタムシャドウ - 製品ハイライト用
					'product': '0 15px 30px rgba(0, 0, 0, 0.12), 0 5px 10px rgba(0, 0, 0, 0.08)',
					'card': '0 4px 16px rgba(0, 0, 0, 0.08)',
					'hover': '0 20px 40px rgba(0, 0, 0, 0.16), 0 8px 16px rgba(0, 0, 0, 0.1)',
				},

				// トランジションとアニメーション
				transitionTimingFunction: {
					// アート的な動きのためのカスタムイージング
					'art-bounce': 'cubic-bezier(0.8, 0, 0.2, 1.5)',
					'smooth-out': 'cubic-bezier(0.22, 1, 0.36, 1)',
				},

				// アスペクト比
				aspectRatio: {
					'poster': '2 / 3',
					'art': '4 / 5',
				},
			},

			// レスポンシブブレークポイント
			screens: {
				'xs': '480px',     // 小さいモバイルデバイス用
				'sm': '640px',
				'md': '768px',
				'lg': '1024px',
				'xl': '1280px',
				'2xl': '1536px',
				'tall': { 'raw': '(min-height: 800px)' },  // 縦長画面用
				'short': { 'raw': '(max-height: 600px)' },  // 縦短画面用
			},
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
		require('tailwindcss-animate'),
	],
	future: {
		hoverOnlyWhenSupported: true,
	},
};-e 
### FILE: ./postcss.config.js

module.exports = {
	plugins: {
	  '@tailwindcss/postcss': {}, // v4では@tailwindcss/postcssを使用
	  autoprefixer: {},
	},
  }-e 
### FILE: ./next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	sassOptions: {
		includePaths: ['./src'],
	},
	images: {
		formats: ['image/avif', 'image/webp'],
		domains: ['firebasestorage.googleapis.com'],
		// プレースホルダーを追加
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
		// 一時的に画像検証を無効化（開発中のみ）
		unoptimized: process.env.NODE_ENV === 'development',
	},
	experimental: {
		serverActions: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	typescript: {
		ignoreBuildErrors: true,
	},
};

module.exports = nextConfig;-e 
### FILE: ./next-env.d.ts

/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/api-reference/config/typescript for more information.

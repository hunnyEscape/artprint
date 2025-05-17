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
	arModel?: {
		glbUrl: string;           // GLBファイルへのパス
		usdzUrl?: string;         // オプション: iOS向けUSDZファイルへのパス
		scale?: number;           // モデルの表示スケール (デフォルト: 1.0)
		placement?: 'wall' | 'floor' | 'auto'; // ARでの配置タイプ（デフォルト: 'wall'）
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
		arModel: {
			glbUrl: "/models/urban-horizon.glb",
			//usdzUrl: "/models/urban-horizon.usdz", // iOSデバイス用
			scale: 1.0,
			placement: 'wall'
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
		arModel: {
			glbUrl: "/models/urban-horizon.glb",
			//usdzUrl: "/models/urban-horizon.usdz", // iOSデバイス用
			scale: 1.0,
			placement: 'wall'
		},
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
		arModel: {
			glbUrl: "/models/urban-horizon.glb",
			//usdzUrl: "/models/urban-horizon.usdz", // iOSデバイス用
			scale: 1.0,
			placement: 'wall'
		},
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
		arModel: {
			glbUrl: "/models/urban-horizon.glb",
			//usdzUrl: "/models/urban-horizon.usdz", // iOSデバイス用
			scale: 1.0,
			placement: 'wall'
		},
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
}
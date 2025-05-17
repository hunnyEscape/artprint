//tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	/** tailwind.config.js */
	content: [
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
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
				brand: {
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
};
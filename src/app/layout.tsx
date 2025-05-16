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
}
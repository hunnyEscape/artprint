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
}
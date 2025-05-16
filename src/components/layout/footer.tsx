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
}
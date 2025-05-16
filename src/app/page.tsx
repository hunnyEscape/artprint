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
}
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
}
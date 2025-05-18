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
		<section className="relative py-12 bg-cover bg-center" style={{ backgroundImage: "url('/images/lp/june.png')" }}>
			{/* 半透明黒のオーバーレイ */}
			<div className="absolute inset-0 bg-black opacity-60"></div>

			<Container className="relative z-10 text-white">
				<div className="text-center">
					<h2 className="text-2xl font-bold mb-2 md:text-3xl drop-shadow-md">
						{nextReleaseMonth}のデザイン、まもなく登場
					</h2>
					<p className="text-white/80 mb-8 drop-shadow">
						新作デザイン発表開始まで
					</p>

					<div className="flex justify-center gap-4 mb-8">
						{[
							{ value: timeLeft.days, label: '日' },
							{ value: timeLeft.hours, label: '時間' },
							{ value: timeLeft.minutes, label: '分' },
							{ value: timeLeft.seconds, label: '秒' }
						].map((item, index) => (
							<div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 min-w-[80px] drop-shadow-md">
								<div className="text-3xl font-bold drop-shadow">{item.value}</div>
								<div className="text-xs text-white/70 drop-shadow-sm">{item.label}</div>
							</div>
						))}
					</div>

					<div className="max-w-md mx-auto mb-8">
						<div className="flex items-center justify-center gap-2 mb-2">
							<svg className="w-5 h-5 text-accent-300 drop-shadow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
							</svg>
							<p className="text-sm drop-shadow">
								サブスクリプション会員は<span className="font-medium">1日早く</span>アクセスできます
							</p>
						</div>
						<div className="text-xs text-white/60 drop-shadow-sm">
							現在 <span className="font-medium">{subscriberCount}人</span> が次回リリースを待っています
						</div>
					</div>

					<div className="flex flex-col sm:flex-row justify-center gap-4">
						<ECLinkButton
							href="https://ec.artpaper.com/subscription"
							location="next_release"
							variant="primary"
							className="bg-white text-primary-700 hover:bg-white/90 drop-shadow-md"
						>
							サブスクリプションに登録する
						</ECLinkButton>
						<ECLinkButton
							href="https://ec.artpaper.com/notify"
							location="next_release"
							variant="outline"
							className="border-white/30 hover:bg-white/10 drop-shadow-md"
						>
							リリース通知を受け取る
						</ECLinkButton>
					</div>
				</div>
			</Container>
		</section>
	);
}
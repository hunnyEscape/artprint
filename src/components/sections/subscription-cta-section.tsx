'use client';

import { Container } from "../layout/container";
import { ECLinkButton } from "../ui/ec-link-button";
import { useState } from "react";

export function SubscriptionCTASection() {
	const [showYearly, setShowYearly] = useState(false);

	// 月額と年額の価格設定
	const monthlyPrice = 2480;
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
}
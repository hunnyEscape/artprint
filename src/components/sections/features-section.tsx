'use client';

import React from 'react';
import { Container } from "../layout/container";
import { ARView } from '../ar/ar-view';

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
		description: "150種類以上のユニークで高精細なアート。あなたの好みやインテリアに合わせて選べます。",
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
				<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
			</svg>
		),
	},
	{
		title: "数量限定",
		description: "ArtPaterは会員限定です。ここでしか手に入りません。新作デザインが定期的に発表されます。早いもの順です。",
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
				<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
				<polyline points="22 4 12 14.01 9 11.01"></polyline>
				<circle cx="7" cy="17" r="3"></circle>
				<path d="M10.5 17H7v-3l-2 2v3h3.5"></path>
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
						Artpaperの特長
					</h2>
					<p className="text-neutral-700 max-w-2xl mx-auto">
						アートペーパーならではの特長をご紹介します。
					</p>
				</div>

				<div className="grid grid-cols-2 md:grid-cols-2 gap-2 md:gap-12">
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

				{/* 3Dプレビュー部分 - 最初から表示 */}
				<div className="mt-16">
					<h3 className="text-2xl font-medium mb-6 text-center">
						製品を3Dで体験してみよう
					</h3>
					<div className="max-w-3xl mx-auto">
						<ARView modelUrl="/models/urban-horizon.glb" />
					</div>
					<p className="text-center text-neutral-600 mt-4">
						↑ ドラッグで回転、ピンチで拡大縮小できます
					</p>
				</div>
			</Container>
		</section>
	);
}
'use client';

import React from 'react';
import Image from 'next/image';
import { Container } from "../layout/container";

export function WallpaperSizesSection() {
	return (
		<section className="py-16 md:py-24 bg-neutral-50">
			<Container>
				<div className="text-center mb-12 md:mb-16">
					<h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
						Artpaperのサイズの種類
					</h2>
					<p className="text-neutral-700 max-w-2xl mx-auto">
						お部屋のスペースや雰囲気に合わせて、3つのサイズからお選びいただけます。
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-8 items-center">
					<div className="flex justify-center">
						<Image
							src="/images/lp/size.png"
							alt="壁紙サイズ比較"
							width={600}
							height={400}
							className="w-full max-w-md h-auto rounded-lg shadow-[0_0px_25px_-10px_rgba(0,0,0,0.2)]"
						/>
					</div>

					<div className="grid grid-cols-1 gap-6">
						<div className="bg-white rounded-lg p-6 border border-neutral-100 transition-all hover:shadow-card hover:-translate-y-1">
							<h3 className="text-xl font-medium mb-2">横型</h3>
							<div className="text-neutral-600 mb-2 font-medium">
								1m × 50cm
							</div>
							<p className="text-neutral-700">広々としたスペースや、大きな壁面に最適。インパクトのあるアートを楽しめます。</p>
						</div>
						<div className="bg-white rounded-lg p-6 border border-neutral-100 transition-all hover:shadow-card hover:-translate-y-1">
							<h3 className="text-xl font-medium mb-2">縦型</h3>
							<div className="text-neutral-600 mb-2 font-medium">
								50cm × 1m
							</div>
							<p className="text-neutral-700">狭いスペースや、アクセントとして使いたい場所に。垂直方向に空間を演出します。</p>
						</div>
						<div className="bg-white rounded-lg p-6 border border-neutral-100 transition-all hover:shadow-card hover:-translate-y-1">
							<h3 className="text-xl font-medium mb-2">小型</h3>
							<div className="text-neutral-600 mb-2 font-medium">
								30cm × 50cm
							</div>
							<p className="text-neutral-700">小さなスペースやデコレーション用。デスク周りやちょっとした空間に最適です。</p>
						</div>
					</div>
				</div>
			</Container>
		</section>
	);
}
'use client';

import React from 'react';
import { featuredProducts } from '@/data/featured-products';
import { ProductShowcaseSection } from '@/components/showcase/ProductShowcaseSection';
import { ShowcaseProvider } from '@/contexts/ShowcaseContext';
import { ShowcaseBackgroundManager } from '@/components/showcase/ShowcaseBackgroundManager';

export default function ShowcaseGalleryPage() {
	return (
		<ShowcaseProvider initialProducts={featuredProducts}>
			{/* グローバル背景マネージャー */}
			<ShowcaseBackgroundManager />

			<div className="showcase-gallery">
				{/* 各壁紙製品に対してセクションを順番に表示 */}
				{featuredProducts.map((product, index) => (
					<ProductShowcaseSection
						key={product.id}
						product={product}
						index={index}
						totalProducts={featuredProducts.length}
					/>
				))}

				{/* 余白を追加して最後のセクションが完全に表示されるようにする */}
				<div className="h-[50vh]"></div>
			</div>
		</ShowcaseProvider>
	);
}
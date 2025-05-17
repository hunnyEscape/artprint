'use client';

import React from 'react';
import { featuredProducts } from '@/data/featured-products';
import { ProductShowcaseSection } from '@/components/showcase/ProductShowcaseSection';

export default function ShowcaseGalleryPage() {
	return (
		<div className="showcase-gallery">
			{/* 各壁紙製品に対してセクションを順番に表示 */}
			{featuredProducts.map((product, index) => (
				<ProductShowcaseSection
					key={product.id}
					product={product}
					index={index}
				/>
			))}
		</div>
	);
}
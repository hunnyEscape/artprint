'use client';

import React, { useMemo } from 'react';
import { EnhancedShowcaseSection } from './EnhancedShowcaseSection';
import { Product } from '@/data/featured-products';

interface ShowcaseCategorySectionProps {
	categoryTitle: string;
	categoryDescription?: string;
	products: Product[];
	layoutType?: 'standard' | 'centered' | 'split' | 'immersive';
	showInteriorPreview?: boolean;
}

export const ShowcaseCategorySection: React.FC<ShowcaseCategorySectionProps> = ({
	categoryTitle,
	categoryDescription,
	products,
	layoutType = 'standard',
	showInteriorPreview = true
}) => {
	// カテゴリにユニークなIDを生成（URLフレンドリーなスラッグ）
	const categoryId = useMemo(() => {
		return categoryTitle
			.toLowerCase()
			.replace(/\s+/g, '-')
			.replace(/[^\w\-]+/g, '')
			.replace(/\-\-+/g, '-')
			.replace(/^-+/, '')
			.replace(/-+$/, '');
	}, [categoryTitle]);

	// 製品が空の場合は何も表示しない
	if (!products || products.length === 0) {
		return null;
	}

	return (
		<EnhancedShowcaseSection
			sectionId={`category-${categoryId}`}
			title={categoryTitle}
			subtitle={categoryDescription}
			products={products}
			layoutType={layoutType}
			showInteriorPreview={showInteriorPreview}
		/>
	);
};
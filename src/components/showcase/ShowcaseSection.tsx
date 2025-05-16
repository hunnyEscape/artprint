'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Container } from "@/components/layout/container";
import { useShowcase } from '@/contexts/ShowcaseContext';
import { Product } from '@/data/featured-products';
import { useInView } from 'react-intersection-observer';
import { ProductDetails } from './ProductDetails';

interface ShowcaseSectionProps {
	sectionId: string;
	title: string;
	products: Product[];
	initialProductIndex?: number;
}

export const ShowcaseSection: React.FC<ShowcaseSectionProps> = ({
	sectionId,
	title,
	products,
	initialProductIndex = 0
}) => {
	const {
		activeSection,
		setActiveSection,
		setActiveProduct,
		registerSection,
		unregisterSection
	} = useShowcase();

	const [selectedProductIndex, setSelectedProductIndex] = useState(initialProductIndex);

	// Intersection Observer で可視状態を検出
	const { ref, inView, entry } = useInView({
		threshold: 0.5, // 50%以上画面内に入ったら可視と判断
	});

	// セクションの登録と解除
	useEffect(() => {
		registerSection(sectionId, products);

		return () => {
			unregisterSection(sectionId);
		};
	}, [sectionId, products, registerSection, unregisterSection]);

	// セクションが表示領域に入ったらアクティブにする
	useEffect(() => {
		if (inView && activeSection !== sectionId) {
			setActiveSection(sectionId);
			setActiveProduct(products[selectedProductIndex]);
		}
	}, [inView, activeSection, sectionId, products, selectedProductIndex, setActiveSection, setActiveProduct]);

	// 製品切り替え
	const handleProductChange = (index: number) => {
		setSelectedProductIndex(index);
		setActiveProduct(products[index]);
	};

	// このセクションがアクティブかどうか
	const isActive = activeSection === sectionId;

	return (
		<section
			ref={ref}
			id={`showcase-${sectionId}`}
			className={`relative min-h-screen py-20 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-70'}`}
		>
			<Container>
				<div className="mb-12 text-center">
					<h2 className="font-display text-3xl font-bold text-white md:text-4xl">
						{title}
					</h2>
				</div>

				{/* 商品ナビゲーション */}
				<div className="flex items-center justify-center mb-12 overflow-x-auto pb-4 gap-2 md:gap-4">
					{products.map((product, index) => (
						<button
							key={product.id}
							className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors ${index === selectedProductIndex
									? 'bg-white text-neutral-900'
									: 'bg-white/20 text-white hover:bg-white/40'
								}`}
							onClick={() => handleProductChange(index)}
						>
							{product.title}
						</button>
					))}
				</div>

				{/* 製品詳細表示 */}
				{products[selectedProductIndex] && (
					<ProductDetails product={products[selectedProductIndex]} />
				)}
			</Container>
		</section>
	);
};
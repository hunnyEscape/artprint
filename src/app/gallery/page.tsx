'use client';

import React from 'react';
import { featuredProducts, Product } from '@/data/featured-products';
import { EnhancedShowcaseSection } from '@/components/showcase/EnhancedShowcaseSection';
import { ShowcaseCategorySection } from '@/components/showcase/ShowcaseCategorySection';

// カテゴリごとに商品をグループ化
const groupProductsByCategory = (products: Product[]) => {
  const categories: Record<string, Product[]> = {};
  
  products.forEach(product => {
    if (!categories[product.category]) {
      categories[product.category] = [];
    }
    categories[product.category].push(product);
  });
  
  return categories;
};

export default function GalleryPage() {
  // カテゴリ別の商品
  const productsByCategory = groupProductsByCategory(featuredProducts);
  
  // カテゴリを配列に変換
  const categories = Object.entries(productsByCategory).map(([name, products]) => ({
    name,
    products
  }));
  
  // 人気のあるカテゴリを先頭に表示（オプション）
  categories.sort((a, b) => {
    const aPopularity = a.products.reduce((sum, p) => sum + p.popularity, 0) / a.products.length;
    const bPopularity = b.products.reduce((sum, p) => sum + p.popularity, 0) / b.products.length;
    return bPopularity - aPopularity;
  });
  
  const categoryDescriptions: Record<string, string> = {
    'モダン': 'シンプルでありながら洗練された、現代的なデザインの壁紙コレクション。',
    'ナチュラル': '自然の美しさにインスピレーションを得た、穏やかで落ち着いた雰囲気の壁紙。',
    'ミニマル': '余計な要素を削ぎ落とし、本質的な美しさを追求したミニマルデザイン。',
    'ファンタジー': '現実を超えた幻想的な世界を描いた、想像力豊かな壁紙コレクション。'
  };
  
  // レイアウトタイプのバリエーション（カテゴリごとに異なるレイアウト）
  const layoutTypes: ('standard' | 'centered' | 'split' | 'immersive')[] = [
    'immersive', 'standard', 'centered', 'split'
  ];

  return (
    <div className="gallery-page">
      {/* トップセクション：全製品を表示 */}
      <EnhancedShowcaseSection
        sectionId="all-products"
        title="Artpaperコレクション"
        subtitle="あなたの部屋を彩る、Artpaperの壁紙コレクション"
        products={featuredProducts}
        layoutType="immersive"
        showInteriorPreview={true}
      />
      
      {/* カテゴリ別セクション */}
      {categories.map((category, index) => (
        <ShowcaseCategorySection
          key={category.name}
          categoryTitle={category.name}
          categoryDescription={categoryDescriptions[category.name] || `${category.name}カテゴリの壁紙コレクション`}
          products={category.products}
          layoutType={layoutTypes[index % layoutTypes.length]}
          showInteriorPreview={index % 2 === 0} // 交互に表示
        />
      ))}
      
      {/* 空白スペースを追加して背景がスクロール時に見えるようにする */}
      <div className="py-20" />
    </div>
  );
}
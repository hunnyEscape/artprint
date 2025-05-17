'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Product } from '@/data/featured-products';
import { ARPreview } from './ARPreview';

interface InteriorPreviewProps {
  product: Product;
}

export const InteriorPreview: React.FC<InteriorPreviewProps> = ({ product }) => {
  const [showARPreview, setShowARPreview] = useState(false);
  
  // メイン画像取得
  const mainImage = product.images.find(img => img.type === 'main');
  const mainImageUrl = mainImage?.url || '';
  
  // ARプレビューの表示切り替え
  const toggleARPreview = () => {
    setShowARPreview(!showARPreview);
  };
  
  // ARが利用可能かどうかをチェック（URLの存在でチェック）
  const isARAvailable = product.arModel?.glbUrl !== undefined;
  
  return (
    <div className="interior-preview relative rounded-lg overflow-hidden bg-neutral-100">
      {/* ARプレビュー表示時 */}
      {showARPreview ? (
        <div className="ar-preview-wrapper">
          <ARPreview 
            product={product} 
            onClose={toggleARPreview} 
          />
        </div>
      ) : (
        /* 通常のインテリアプレビュー表示 */
        <div className="interior-image relative">
          {mainImageUrl && (
            <div className="relative w-full h-[500px]">
              <Image
                src={mainImageUrl}
                alt={`${product.title} interior preview`}
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
              
              {/* ARプレビューボタン - ARが利用可能な場合のみ表示 */}
              {isARAvailable && (
                <button
                  onClick={toggleARPreview}
                  className="absolute bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transition-all"
                  aria-label="ARで壁紙を見る"
                >
                  <span>ARで壁に表示</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                </button>
              )}
            </div>
          )}
        </div>
      )}
      
      {/* 追加情報やコントロール（オプション） */}
      <div className="preview-controls mt-4 flex justify-between items-center">
        <div className="preview-info text-sm text-neutral-600">
          {isARAvailable ? (
            <p>ARボタンをクリックして実際の壁に壁紙を表示できます</p>
          ) : (
            <p>この商品はインテリアイメージでのみプレビュー可能です</p>
          )}
        </div>
      </div>
    </div>
  );
};
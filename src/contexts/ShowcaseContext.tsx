'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { Product } from '@/data/featured-products';

// コンテキストの型定義
interface ShowcaseContextType {
  activeSection: string | null;
  activeSectionIndex: number;
  activeProduct: Product | null;
  setActiveSection: (sectionId: string) => void;
  setActiveSectionIndex: (index: number) => void;
  setActiveProduct: (product: Product) => void;
  registerSection: (sectionId: string, products: Product[]) => void;
  unregisterSection: (sectionId: string) => void;
  sections: Record<string, { products: Product[] }>;
}

// デフォルト値
const defaultContext: ShowcaseContextType = {
  activeSection: null,
  activeSectionIndex: 0,
  activeProduct: null,
  setActiveSection: () => {},
  setActiveSectionIndex: () => {},
  setActiveProduct: () => {},
  registerSection: () => {},
  unregisterSection: () => {},
  sections: {}
};

// コンテキスト作成
const ShowcaseContext = createContext<ShowcaseContextType>(defaultContext);

// コンテキストプロバイダー
export const ShowcaseProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState({
    activeSection: null as string | null,
    activeSectionIndex: 0,
    activeProduct: null as Product | null,
    sections: {} as Record<string, { products: Product[] }>
  });
  
  const { activeSection, activeSectionIndex, activeProduct, sections } = state;

  // アクティブセクションを設定
  const setActiveSection = useCallback((sectionId: string) => {
    setState(prev => ({
      ...prev,
      activeSection: sectionId
    }));
  }, []);

  // アクティブセクションインデックスを設定
  const setActiveSectionIndex = useCallback((index: number) => {
    setState(prev => ({
      ...prev,
      activeSectionIndex: index
    }));
  }, []);

  // アクティブ製品を設定（同じ製品の場合は更新しない）
  const setActiveProduct = useCallback((product: Product | null) => {
    // 同じ製品が選択された場合は更新しない（IDで比較）
    if (activeProduct && product && activeProduct.id === product.id) {
      return;
    }
    
    setState(prev => ({
      ...prev,
      activeProduct: product
    }));
  }, [activeProduct]);

  // セクションの登録
  const registerSection = useCallback((sectionId: string, products: Product[]) => {
    setState(prev => {
      const newSections = {
        ...prev.sections,
        [sectionId]: { products }
      };
      
      // 最初のセクションが登録されたらアクティブにする
      if (!prev.activeSection) {
        return {
          ...prev,
          activeSection: sectionId,
          activeProduct: products[0] || null,
          sections: newSections
        };
      }
      
      return {
        ...prev,
        sections: newSections
      };
    });
  }, []);

  // セクションの登録解除
  const unregisterSection = useCallback((sectionId: string) => {
    setState(prev => {
      const newSections = { ...prev.sections };
      delete newSections[sectionId];
      
      // アクティブセクションが削除された場合、別のセクションをアクティブにする
      if (prev.activeSection === sectionId) {
        const remainingSections = Object.keys(newSections);
        
        if (remainingSections.length > 0) {
          return {
            ...prev,
            activeSection: remainingSections[0],
            activeProduct: newSections[remainingSections[0]]?.products[0] || null,
            sections: newSections
          };
        } else {
          return {
            ...prev,
            activeSection: null,
            activeProduct: null,
            sections: newSections
          };
        }
      }
      
      return {
        ...prev,
        sections: newSections
      };
    });
  }, []);

  // スクロール位置に応じてアクティブセクションを判定
  useEffect(() => {
    const handleScroll = () => {
      // セクション要素を取得
      const sectionElements = document.querySelectorAll('.product-showcase');
      if (sectionElements.length === 0) return;

      // 画面表示範囲内に最も多く含まれるセクションを判定
      let maxVisibleSection: Element | null = null;
      let maxVisibleArea = 0;

      sectionElements.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const visibleHeight = Math.min(window.innerHeight, rect.bottom) - 
                             Math.max(0, rect.top);
        if (visibleHeight > maxVisibleArea) {
          maxVisibleArea = visibleHeight;
          maxVisibleSection = section;
        }
      });

      // アクティブセクションを更新
      if (maxVisibleSection) {
        const sectionId = maxVisibleSection.id;
        if (sectionId && sectionId !== activeSection) {
          setActiveSection(sectionId);
          // セクションに対応する製品を検索して選択
          for (const [id, data] of Object.entries(sections)) {
            if (id === sectionId && data.products.length > 0) {
              setActiveProduct(data.products[0]);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初期チェック
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections, activeSection, setActiveSection, setActiveProduct]);

  return (
    <ShowcaseContext.Provider
      value={{
        activeSection,
        activeSectionIndex,
        activeProduct,
        setActiveSection,
        setActiveSectionIndex,
        setActiveProduct,
        registerSection,
        unregisterSection,
        sections
      }}
    >
      {children}
    </ShowcaseContext.Provider>
  );
};

// カスタムフック
export const useShowcase = () => useContext(ShowcaseContext);
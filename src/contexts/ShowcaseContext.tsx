'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { Product } from '@/data/featured-products';

// コンテキストの型定義を拡張
interface ShowcaseContextType {
  activeSection: string | null;
  activeSectionIndex: number;
  activeProduct: Product | null;
  nextProduct: Product | null;
  previousProduct: Product | null;
  setActiveSection: (sectionId: string) => void;
  setActiveSectionIndex: (index: number) => void;
  setActiveProduct: (product: Product) => void;
  setNextProduct: (product: Product | null) => void;
  setPreviousProduct: (product: Product | null) => void;
  registerSection: (sectionId: string, products: Product[]) => void;
  unregisterSection: (sectionId: string) => void;
  sections: Record<string, { products: Product[] }>;
  allProducts: Product[];
  // 新しく追加した機能
  scrollDirection: 'up' | 'down';
  isTransitioning: boolean;
  setIsTransitioning: (isTransitioning: boolean) => void;
}

// デフォルト値を拡張
const defaultContext: ShowcaseContextType = {
  activeSection: null,
  activeSectionIndex: 0,
  activeProduct: null,
  nextProduct: null,
  previousProduct: null,
  setActiveSection: () => {},
  setActiveSectionIndex: () => {},
  setActiveProduct: () => {},
  setNextProduct: () => {},
  setPreviousProduct: () => {},
  registerSection: () => {},
  unregisterSection: () => {},
  sections: {},
  allProducts: [],
  // 新しいデフォルト値
  scrollDirection: 'down',
  isTransitioning: false,
  setIsTransitioning: () => {}
};

// コンテキスト作成
const ShowcaseContext = createContext<ShowcaseContextType>(defaultContext);

// コンテキストプロバイダー
export const ShowcaseProvider = ({ children, initialProducts = [] }: { children: ReactNode, initialProducts?: Product[] }) => {
  const [state, setState] = useState({
    activeSection: null as string | null,
    activeSectionIndex: 0,
    activeProduct: null as Product | null,
    nextProduct: null as Product | null,
    previousProduct: null as Product | null,
    sections: {} as Record<string, { products: Product[] }>,
    allProducts: initialProducts,
    // 新しい状態
    scrollDirection: 'down' as 'up' | 'down',
    isTransitioning: false
  });
  
  const { 
    activeSection, 
    activeSectionIndex, 
    activeProduct, 
    nextProduct, 
    previousProduct, 
    sections, 
    allProducts, 
    scrollDirection, 
    isTransitioning 
  } = state;

  // スクロール方向の検出
  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY ? 'down' : 'up';
      
      if (scrollDirection !== direction) {
        setState(prev => ({
          ...prev,
          scrollDirection: direction
        }));
      }
      
      lastScrollY = currentScrollY;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollDirection]);

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

  // トランジション状態設定関数
  const setIsTransitioning = useCallback((value: boolean) => {
    setState(prev => ({
      ...prev,
      isTransitioning: value
    }));
  }, []);

  // アクティブ製品を設定（同じ製品の場合は更新しない）
  const setActiveProduct = useCallback((product: Product | null) => {
    // 同じ製品が選択された場合は更新しない（IDで比較）
    if (activeProduct && product && activeProduct.id === product.id) {
      return;
    }
    
    // トランジション開始
    setState(prev => ({
      ...prev,
      isTransitioning: true
    }));
    
    setState(prev => {
      // 更新されるアクティブな製品情報
      const updatedState: Partial<typeof prev> = {
        activeProduct: product
      };
      
      // 製品が指定された場合、前後の製品も設定
      if (product && allProducts.length > 0) {
        const currentIndex = allProducts.findIndex(p => p.id === product.id);
        
        // 次の製品を設定（存在する場合）
        if (currentIndex >= 0 && currentIndex < allProducts.length - 1) {
          updatedState.nextProduct = allProducts[currentIndex + 1];
        } else {
          updatedState.nextProduct = null;
        }
        
        // 前の製品を設定（存在する場合）
        if (currentIndex > 0) {
          updatedState.previousProduct = allProducts[currentIndex - 1];
        } else {
          updatedState.previousProduct = null;
        }
      } else {
        // 製品が指定されなかった場合はnullに設定
        updatedState.nextProduct = null;
        updatedState.previousProduct = null;
      }
      
      return {
        ...prev,
        ...updatedState
      };
    });
    
    // トランジション完了後にフラグをリセット
    setTimeout(() => {
      setState(prev => ({
        ...prev,
        isTransitioning: false
      }));
    }, 800); // トランジション時間に合わせる
  }, [activeProduct, allProducts]);

  // 次の製品を明示的に設定する関数
  const setNextProduct = useCallback((product: Product | null) => {
    setState(prev => ({
      ...prev,
      nextProduct: product
    }));
  }, []);

  // 前の製品を明示的に設定する関数
  const setPreviousProduct = useCallback((product: Product | null) => {
    setState(prev => ({
      ...prev,
      previousProduct: product
    }));
  }, []);

  // セクションの登録
  const registerSection = useCallback((sectionId: string, products: Product[]) => {
    setState(prev => {
      const newSections = {
        ...prev.sections,
        [sectionId]: { products }
      };
      
      // すべての製品リストを更新
      const allProductsList = Object.values(newSections).flatMap(section => section.products);
      
      // 最初のセクションが登録されたらアクティブにする
      if (!prev.activeSection) {
        const firstProduct = products[0] || null;
        const nextProduct = products.length > 1 ? products[1] : null;
        const previousProduct = null; // 最初のセクションなので前の製品はない
        
        return {
          ...prev,
          activeSection: sectionId,
          activeProduct: firstProduct,
          nextProduct,
          previousProduct,
          sections: newSections,
          allProducts: allProductsList
        };
      }
      
      return {
        ...prev,
        sections: newSections,
        allProducts: allProductsList
      };
    });
  }, []);

  // セクションの登録解除
  const unregisterSection = useCallback((sectionId: string) => {
    setState(prev => {
      const newSections = { ...prev.sections };
      delete newSections[sectionId];
      
      // すべての製品リストを更新
      const allProductsList = Object.values(newSections).flatMap(section => section.products);
      
      // アクティブセクションが削除された場合、別のセクションをアクティブにする
      if (prev.activeSection === sectionId) {
        const remainingSections = Object.keys(newSections);
        
        if (remainingSections.length > 0) {
          const firstSection = remainingSections[0];
          const firstSectionProducts = newSections[firstSection]?.products || [];
          const firstProduct = firstSectionProducts[0] || null;
          const nextProduct = firstSectionProducts.length > 1 ? firstSectionProducts[1] : null;
          
          return {
            ...prev,
            activeSection: firstSection,
            activeProduct: firstProduct,
            nextProduct,
            previousProduct: null, // 最初のセクションを選択するので前の製品はない
            sections: newSections,
            allProducts: allProductsList
          };
        } else {
          return {
            ...prev,
            activeSection: null,
            activeProduct: null,
            nextProduct: null,
            previousProduct: null,
            sections: newSections,
            allProducts: allProductsList
          };
        }
      }
      
      return {
        ...prev,
        sections: newSections,
        allProducts: allProductsList
      };
    });
  }, []);

  return (
    <ShowcaseContext.Provider
      value={{
        activeSection,
        activeSectionIndex,
        activeProduct,
        nextProduct,
        previousProduct,
        setActiveSection,
        setActiveSectionIndex,
        setActiveProduct,
        setNextProduct,
        setPreviousProduct,
        registerSection,
        unregisterSection,
        sections,
        allProducts,
        // 新しく追加した値
        scrollDirection,
        isTransitioning,
        setIsTransitioning
      }}
    >
      {children}
    </ShowcaseContext.Provider>
  );
};

// カスタムフック
export const useShowcase = () => useContext(ShowcaseContext);
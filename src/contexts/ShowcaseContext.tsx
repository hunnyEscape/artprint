'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
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
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [activeSectionIndex, setActiveSectionIndex] = useState<number>(0);
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [sections, setSections] = useState<Record<string, { products: Product[] }>>({});

  // セクションの登録
  const registerSection = (sectionId: string, products: Product[]) => {
    setSections(prev => ({
      ...prev,
      [sectionId]: { products }
    }));

    // 最初のセクションが登録されたらアクティブにする
    if (!activeSection) {
      setActiveSection(sectionId);
      setActiveProduct(products[0] || null);
    }
  };

  // セクションの登録解除
  const unregisterSection = (sectionId: string) => {
    setSections(prev => {
      const newSections = { ...prev };
      delete newSections[sectionId];
      return newSections;
    });

    // アクティブセクションが削除された場合、別のセクションをアクティブにする
    if (activeSection === sectionId) {
      const remainingSections = Object.keys(sections).filter(id => id !== sectionId);
      if (remainingSections.length > 0) {
        setActiveSection(remainingSections[0]);
        setActiveProduct(sections[remainingSections[0]]?.products[0] || null);
      } else {
        setActiveSection(null);
        setActiveProduct(null);
      }
    }
  };

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
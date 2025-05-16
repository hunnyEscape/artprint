'use client';

import { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import {
	trackPageView,
	trackScrollDepth,
	trackSectionView,
	startTimeMeasurement,
	trackTimeOnPage
} from '@/lib/analytics';

type PageAnalyticsProps = {
	sectionIds?: string[];  // トラッキングする特定のセクションのID
};

export function PageAnalytics({ sectionIds = [] }: PageAnalyticsProps) {
	const pathname = usePathname();
	const [observedSections, setObservedSections] = useState<Element[]>([]);
	const scrollThrottleTimeout = useRef<NodeJS.Timeout | null>(null);

	// ページビューのトラッキング
	useEffect(() => {
		if (pathname) {
			trackPageView(pathname);
			startTimeMeasurement();
		}

		// ページを離れる際の処理
		return () => {
			trackTimeOnPage();
		};
	}, [pathname]);

	// スクロール深度のトラッキング
	useEffect(() => {
		const handleScroll = () => {
			// スロットリング処理（パフォーマンス対策）
			if (scrollThrottleTimeout.current) {
				clearTimeout(scrollThrottleTimeout.current);
			}

			scrollThrottleTimeout.current = setTimeout(() => {
				const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
				const scrollTop = window.scrollY;
				const scrollPercentage = Math.floor((scrollTop / docHeight) * 100);

				trackScrollDepth(scrollPercentage);
			}, 500);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// セクション表示のトラッキング
	useEffect(() => {
		if (typeof window === 'undefined' || !sectionIds.length) return;

		// IntersectionObserverの設定
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						const element = entry.target;
						const sectionId = element.id;
						const sectionName = element.getAttribute('data-section-name') || sectionId;

						trackSectionView(sectionId, sectionName);

						// 一度表示されたら監視解除
						observer.unobserve(element);
					}
				});
			},
			{
				root: null,
				rootMargin: '0px',
				threshold: 0.5, // 50%表示されたらイベント発火
			}
		);

		// 指定されたセクションを監視
		const sections: Element[] = [];
		sectionIds.forEach(id => {
			const element = document.getElementById(id);
			if (element) {
				observer.observe(element);
				sections.push(element);
			}
		});

		setObservedSections(sections);

		// セクションIDが指定されていない場合は全セクションを自動検出
		if (sectionIds.length === 0) {
			const autoSections = document.querySelectorAll('section[id]');
			autoSections.forEach(section => {
				observer.observe(section);
				sections.push(section);
			});
			setObservedSections(Array.from(autoSections));
		}

		return () => {
			observedSections.forEach(section => {
				observer.unobserve(section);
			});
		};
	}, [sectionIds, observedSections.length]);

	// 表示のみのコンポーネントなのでUIは不要
	return null;
}
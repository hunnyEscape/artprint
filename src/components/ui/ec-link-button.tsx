'use client';

import { trackECLinkClick, getECUrlWithUTM } from '@/lib/analytics';
import Link from 'next/link';
import { ReactNode } from 'react';

interface ECLinkButtonProps {
	href: string;               // ECサイトの基本URL
	location: string;           // ボタンの設置場所（hero, features, ctaなど）
	children: ReactNode;        // ボタンのテキストやコンテンツ
	className?: string;         // 追加のスタイルクラス
	additionalParams?: Record<string, string>; // 追加のURLパラメータ
	openInNewTab?: boolean;     // 新しいタブで開くかどうか
	variant?: 'primary' | 'secondary' | 'outline'; // バリエーション
}

export function ECLinkButton({
	href,
	location,
	children,
	className = '',
	additionalParams = {},
	openInNewTab = false,
	variant = 'primary'
}: ECLinkButtonProps) {
	// ボタンクラスの設定
	const getButtonClasses = () => {
		const baseClasses = 'inline-block rounded-md font-medium transition-colors';

		const variantClasses = {
			primary: 'bg-primary-500 text-white hover:bg-primary-700 px-6 py-3',
			secondary: 'bg-primary-500 text-white hover:bg-primary-600 px-6 py-3',
			outline: 'border border-neutral-300 hover:bg-neutral-100 px-5 py-2.5'
		};

		return `${baseClasses} ${variantClasses[variant]} ${className}`;
	};

	// クリックハンドラー
	const handleClick = (e: React.MouseEvent) => {
		const buttonText = typeof children === 'string' ? children : 'ECサイトへ';

		// ECサイト遷移のトラッキング
		trackECLinkClick(location, buttonText, href);
	};

	// UTMパラメータ付きのURL生成
	const ecUrl = getECUrlWithUTM(href, location, additionalParams);

	return (
		<Link
			href={ecUrl}
			onClick={handleClick}
			target={openInNewTab ? '_blank' : '_self'}
			rel={openInNewTab ? 'noopener noreferrer' : ''}
			className={getButtonClasses()}
		>
			{children}
		</Link>
	);
}
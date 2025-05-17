'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Product } from '@/data/featured-products';

interface ARPreviewProps {
	product: Product;
	onClose?: () => void;
}

export const ARPreview: React.FC<ARPreviewProps> = ({ product, onClose }) => {
	const [isModelViewerLoaded, setIsModelViewerLoaded] = useState(false);
	const [isARSupported, setIsARSupported] = useState(false);
	const modelViewerRef = useRef<HTMLElement | null>(null);

	// model-viewerがクライアントサイドでのみ読み込まれるようにする
	useEffect(() => {
		// model-viewerの動的インポート
		import('@google/model-viewer').then(() => {
			setIsModelViewerLoaded(true);

			// ARのサポート状態をチェック
			const checkARSupport = () => {
				if (window.navigator.xr) {
					window.navigator.xr.isSessionSupported('immersive-ar')
						.then(supported => setIsARSupported(supported))
						.catch(() => setIsARSupported(false));
				} else {
					// iOS Safari向け (Quick Look)
					const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
					setIsARSupported(isIOS);
				}
			};

			checkARSupport();
		});
	}, []);

	// ARモデルがない場合
	if (!product.arModel?.glbUrl) {
		return (
			<div className="p-4 bg-yellow-50 border border-yellow-200 rounded-md text-yellow-800">
				この商品はARプレビューに対応していません。
			</div>
		);
	}

	return (
		<div className="ar-preview-container relative w-full h-[500px] bg-neutral-100 rounded-lg overflow-hidden">
			{isModelViewerLoaded ? (
				// @ts-ignore - modelviewerはカスタム要素なのでTypeScriptでは認識されない
				<model-viewer
					ref={modelViewerRef}
					src={product.arModel.glbUrl}
					ios-src={product.arModel.usdzUrl}
					alt={`${product.title} のARプレビュー`}
					ar
					ar-modes="webxr scene-viewer quick-look"
					camera-controls
					ar-scale={product.arModel.scale || "fixed"}
					ar-placement={product.arModel.placement || "wall"}
					seamless-poster
					shadow-intensity="1"
					environment-image="neutral"
					exposure="0.8"
					style={{ width: '100%', height: '100%' }}
					className="w-full h-full"
				>
					<button
						slot="ar-button"
						className="ar-button absolute bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
					>
						<span>ARで壁に表示</span>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
							<path d="M3 16l-3-10 7.104 4" />
							<path d="M7 16l-4.918-4.918L3 10 16 3l-5 9h8l2 2" />
						</svg>
					</button>

					<div className="progress-container absolute top-0 left-0 w-full h-full flex items-center justify-center" slot="poster">
						<div className="text-neutral-600">読み込み中...</div>
					</div>
				</model-viewer>
			) : (
				<div className="w-full h-full flex items-center justify-center">
					<div className="text-neutral-600">ARビューアを読み込み中...</div>
				</div>
			)}

			{!isARSupported && isModelViewerLoaded && (
				<div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-3 text-sm">
					<p>お使いのデバイスはARに対応していません。ARを体験するには、ARCoreまたはARKitをサポートするモバイルデバイスをご使用ください。</p>
				</div>
			)}

			{onClose && (
				<button
					onClick={onClose}
					className="absolute top-2 right-2 z-10 bg-white bg-opacity-80 rounded-full p-2"
					aria-label="閉じる"
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
						<line x1="18" y1="6" x2="6" y2="18"></line>
						<line x1="6" y1="6" x2="18" y2="18"></line>
					</svg>
				</button>
			)}
		</div>
	);
};
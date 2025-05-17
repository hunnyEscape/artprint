'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Product } from '@/data/featured-products';
import { scaleModel, togglePlacementMode, optimizeARExperience } from './ar-controls';

interface ARPreviewProps {
	product: Product;
	onClose?: () => void;
}

export const ARPreview: React.FC<ARPreviewProps> = ({ product, onClose }) => {
	const [isModelViewerLoaded, setIsModelViewerLoaded] = useState(false);
	const [isARSupported, setIsARSupported] = useState(false);
	const [isARMode, setIsARMode] = useState(false);
	const [showInstructions, setShowInstructions] = useState(true);

	const modelViewerRef = useRef<HTMLElement | null>(null);

	// model-viewerの読み込み
	useEffect(() => {
		const loadModelViewer = async () => {
			try {
				await import('@google/model-viewer');
				setIsModelViewerLoaded(true);

				// ARのサポート状態をチェック
				if (window.navigator.xr) {
					window.navigator.xr.isSessionSupported('immersive-ar')
						.then(supported => setIsARSupported(supported))
						.catch(() => setIsARSupported(false));
				} else {
					// iOS Safari向け (Quick Look)
					const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
					setIsARSupported(isIOS);
				}
			} catch (error) {
				console.error('Error loading model-viewer:', error);
			}
		};

		loadModelViewer();
	}, []);

	// model-viewerのイベントリスナー設定
	useEffect(() => {
		if (!modelViewerRef.current || !isModelViewerLoaded) return;

		const modelViewer = modelViewerRef.current;

		// AR入室時のイベント
		const handleARStatus = (event: any) => {
			if (event.detail.status === 'session-started') {
				setIsARMode(true);
			} else if (event.detail.status === 'session-ended') {
				setIsARMode(false);
			}
		};

		modelViewer.addEventListener('ar-status', handleARStatus);

		// デバイスに合わせたAR体験の最適化
		try {
			optimizeARExperience(modelViewer);
		} catch (error) {
			console.error('AR最適化中にエラーが発生しました:', error);
		}

		return () => {
			// イベントリスナーのクリーンアップ
			modelViewer.removeEventListener('ar-status', handleARStatus);
		};
	}, [isModelViewerLoaded]);

	// 指示を非表示にする
	const hideInstructions = () => {
		setShowInstructions(false);
	};

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
					ar-scale="fixed"
					ar-placement="wall"
					camera-controls
					touch-action="pan-y"
					seamless-poster
					shadow-intensity="0"
					environment-image="neutral"
					exposure="0.8"
					style={{ width: '100%', height: '100%' }}
					className="w-full h-full"
				>
					{/* AR起動ボタン */}
					<button
						slot="ar-button"
						className="ar-button absolute bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
					>
						<span>ARで壁に表示</span>
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
							<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
						</svg>
					</button>

					{/* 読み込み中表示 */}
					<div className="progress-container absolute top-0 left-0 w-full h-full flex items-center justify-center" slot="poster">
						<div className="bg-white p-4 rounded-lg shadow-md">
							<div className="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-2"></div>
							<div className="text-neutral-600">3Dモデルを読み込み中...</div>
						</div>
					</div>
				</model-viewer>
			) : (
				// モデルビューワー読み込み中
				<div className="w-full h-full flex items-center justify-center">
					<div className="text-neutral-600">ARビューアを読み込み中...</div>
				</div>
			)}

			{/* 操作コントロール - ARモード外でのみ表示 */}
			{isModelViewerLoaded && !isARMode && (
				<div className="absolute bottom-4 left-4 flex flex-col gap-2 z-10">
					<button
						className="p-2 bg-white text-blue-600 rounded-full shadow-md"
						aria-label="拡大"
						onClick={() => {
							if (modelViewerRef.current) {
								scaleModel(modelViewerRef.current, 1.1);
							}
						}}
					>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
							<line x1="12" y1="5" x2="12" y2="19"></line>
							<line x1="5" y1="12" x2="19" y2="12"></line>
						</svg>
					</button>
					<button
						className="p-2 bg-white text-blue-600 rounded-full shadow-md"
						aria-label="縮小"
						onClick={() => {
							if (modelViewerRef.current) {
								scaleModel(modelViewerRef.current, 0.9);
							}
						}}
					>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
							<line x1="5" y1="12" x2="19" y2="12"></line>
						</svg>
					</button>
				</div>
			)}

			{/* AR非対応デバイスの警告 */}
			{!isARSupported && isModelViewerLoaded && (
				<div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-3 text-sm">
					<p>お使いのデバイスはARに対応していません。ARを体験するには、ARCoreまたはARKitをサポートするモバイルデバイスをご使用ください。</p>
				</div>
			)}

			{/* ユーザーガイド */}
			{isModelViewerLoaded && showInstructions && !isARMode && (
				<div className="absolute top-4 left-0 right-0 mx-auto max-w-md bg-white p-4 rounded-lg shadow-lg text-sm">
					<h3 className="font-bold text-lg mb-2">ARプレビューの使い方</h3>
					<ol className="list-decimal pl-5 space-y-2">
						<li>「ARで壁に表示」ボタンをタップしてARモードを起動</li>
						<li>スマートフォンを壁に向けて、平面を認識させる</li>
						<li>認識された壁面に壁紙が表示されます</li>
						<li>指でピンチイン・ピンチアウトして壁紙のサイズを調整</li>
						<li>指でドラッグして位置を調整できます</li>
					</ol>
					<button
						onClick={hideInstructions}
						className="mt-3 w-full py-2 bg-blue-600 text-white rounded-md"
					>
						わかりました
					</button>
				</div>
			)}

			{/* 閉じるボタン */}
			{onClose && (
				<button
					onClick={onClose}
					className="absolute top-2 right-2 z-10 bg-white bg-opacity-80 rounded-full p-2 shadow-md"
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
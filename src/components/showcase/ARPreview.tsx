'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Product } from '@/data/featured-products';
import {
	scaleModel,
	togglePlacementMode,
	optimizeARExperience,
	setupARControls,
	addARStyles,
	showARToast
} from './ar-controls';

interface ARPreviewProps {
	product: Product;
	onClose?: () => void;
}

export const ARPreview: React.FC<ARPreviewProps> = ({ product, onClose }) => {
	const [isModelViewerLoaded, setIsModelViewerLoaded] = useState(false);
	const [isARSupported, setIsARSupported] = useState(false);
	const [isARMode, setIsARMode] = useState(false);
	const [showInstructions, setShowInstructions] = useState(true);
	const [placementMode, setPlacementMode] = useState<'wall' | 'floor'>('wall');

	const modelViewerRef = useRef<HTMLElement | null>(null);
	const arCleanupRef = useRef<{ cleanup: () => void } | null>(null);

	// model-viewerの読み込みとAR対応チェック
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

				// ARモード用のカスタムスタイルを追加
				addARStyles();

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

		// デバイスに合わせたAR体験の最適化
		optimizeARExperience(modelViewer);

		// AR拡張セットアップ
		arCleanupRef.current = setupARControls(modelViewer);

		// AR入室時のイベント
		const handleARStatus = (event: any) => {
			if (event.detail.status === 'session-started') {
				setIsARMode(true);
				// ARセッション開始時に操作ガイドを表示
				showARToast('指でピンチして拡大・縮小、ドラッグして移動できます', 5000);
			} else if (event.detail.status === 'session-ended') {
				setIsARMode(false);
			}
		};

		// モデル読み込み完了イベント
		const handleLoad = () => {
			console.log('モデル読み込み完了');
		};

		modelViewer.addEventListener('ar-status', handleARStatus);
		modelViewer.addEventListener('load', handleLoad);

		// AR起動前の状態を設定
		modelViewer.setAttribute('ar-placement', placementMode);

		return () => {
			// イベントリスナーのクリーンアップ
			modelViewer.removeEventListener('ar-status', handleARStatus);
			modelViewer.removeEventListener('load', handleLoad);

			// AR拡張のクリーンアップ
			if (arCleanupRef.current) {
				arCleanupRef.current.cleanup();
			}
		};
	}, [isModelViewerLoaded, placementMode]);

	// 指示を非表示にする
	const hideInstructions = () => {
		setShowInstructions(false);
	};

	// 配置モード切替処理
	const handleTogglePlacement = () => {
		if (!modelViewerRef.current) return;

		const newMode = togglePlacementMode(modelViewerRef.current);
		if (newMode) {
			setPlacementMode(newMode as 'wall' | 'floor');
			// フィードバックを表示
			showARToast(`${newMode === 'wall' ? '壁' : '床'}配置モードに切り替えました`, 2000);
		}
	};

	// 拡大処理
	const handleScaleUp = () => {
		if (!modelViewerRef.current) return;

		const success = scaleModel(modelViewerRef.current, 1.2);
		if (success && isARMode) {
			showARToast('拡大しました', 1000);
		}
	};

	// 縮小処理
	const handleScaleDown = () => {
		if (!modelViewerRef.current) return;

		const success = scaleModel(modelViewerRef.current, 0.8);
		if (success && isARMode) {
			showARToast('縮小しました', 1000);
		}
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
					ar-scale={product.arModel.scale ? 'fixed' : 'auto'}
					ar-placement={product.arModel.placement || 'wall'}
					camera-controls
					touch-action="pan-y"
					seamless-poster
					shadow-intensity="0" // 壁紙なのでシャドウは不要
					environment-image="neutral"
					exposure="0.8"
					min-camera-orbit="auto auto auto"
					max-camera-orbit="auto auto auto"
					min-field-of-view="5deg"
					max-field-of-view="90deg"
					interaction-prompt="none" // 自動プロンプトを無効化
					interpolation-decay="200" // よりスムーズな操作のため
					style={{ width: '100%', height: '100%' }}
					className="w-full h-full"
				>
					{/* AR起動ボタン（自前のデザイン） */}
					<button
						slot="ar-button"
						className="ar-button absolute bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transition-all hover:bg-blue-700"
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

			{/* AR操作コントロール - 常に画面上に表示する（ARモード中でも） */}
			{isModelViewerLoaded && (
				<div className={`ar-controls-container ${isARMode ? 'ar-floating-controls' : 'absolute bottom-4 left-4 flex flex-col gap-2 z-10'}`}>
					<button
						id="scale-up"
						className={`${isARMode ? 'ar-control-button' : 'p-2 bg-white text-blue-600 rounded-full shadow-md hover:bg-blue-50'}`}
						aria-label="拡大"
						onClick={handleScaleUp}
					>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
							<line x1="12" y1="5" x2="12" y2="19"></line>
							<line x1="5" y1="12" x2="19" y2="12"></line>
						</svg>
					</button>
					<button
						id="scale-down"
						className={`${isARMode ? 'ar-control-button' : 'p-2 bg-white text-blue-600 rounded-full shadow-md hover:bg-blue-50'}`}
						aria-label="縮小"
						onClick={handleScaleDown}
					>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
							<line x1="5" y1="12" x2="19" y2="12"></line>
						</svg>
					</button>
					<button
						id="toggle-placement"
						className={`${isARMode ? 'ar-control-button' : 'p-2 bg-white text-blue-600 rounded-full shadow-md mt-2 hover:bg-blue-50'}`}
						aria-label="配置モード切替"
						title={placementMode === 'wall' ? '床に配置' : '壁に配置'}
						onClick={handleTogglePlacement}
					>
						{placementMode === 'wall' ? (
							// 壁配置アイコン
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
								<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
								<line x1="3" y1="9" x2="21" y2="9"></line>
							</svg>
						) : (
							// 床配置アイコン
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
								<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
								<line x1="3" y1="15" x2="21" y2="15"></line>
							</svg>
						)}
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
						<li><strong>ARモード中でも</strong>画面左下の＋/−ボタンで拡大・縮小ができます</li>
					</ol>
					<button
						onClick={hideInstructions}
						className="mt-3 w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
					>
						わかりました
					</button>
				</div>
			)}

			{/* ARモード中のガイダンスUI */}
			{isARMode && (
				<div className="fixed top-4 left-0 right-0 mx-auto w-max bg-black bg-opacity-70 text-white px-4 py-2 rounded-full text-sm z-50 flex items-center gap-2">
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
						<circle cx="12" cy="12" r="10"></circle>
						<line x1="12" y1="16" x2="12" y2="12"></line>
						<line x1="12" y1="8" x2="12.01" y2="8"></line>
					</svg>
					<span>
						画面左下のボタンで拡大・縮小できます
					</span>
				</div>
			)}

			{/* 閉じるボタン */}
			{onClose && !isARMode && (
				<button
					onClick={onClose}
					className="absolute top-2 right-2 z-10 bg-white bg-opacity-80 rounded-full p-2 shadow-md hover:bg-gray-100"
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
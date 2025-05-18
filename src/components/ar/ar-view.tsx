'use client';

import React, { useEffect, useRef, useState } from 'react';
import { scaleModel, optimizeModelViewer, resetModelView } from './ar-controls';

interface ARViewProps {
	modelUrl: string;
	onClose?: () => void;
}

// ARView メインコンポーネント
export const ARView: React.FC<ARViewProps> = ({ modelUrl, onClose }) => {
	const [isModelViewerLoaded, setIsModelViewerLoaded] = useState(false);
	const [isModelLoaded, setIsModelLoaded] = useState(false);
	const modelViewerRef = useRef<HTMLElement | null>(null);

	// model-viewerの読み込み
	useEffect(() => {
		const loadModelViewer = async () => {
			try {
				await import('@google/model-viewer');
				setIsModelViewerLoaded(true);
			} catch (error) {
				console.error('Error loading model-viewer:', error);
			}
		};

		loadModelViewer();
	}, []);

	// モデルビューワーの初期設定
	useEffect(() => {
		if (!modelViewerRef.current || !isModelViewerLoaded) return;

		const modelViewer = modelViewerRef.current;

		// モデルビューワーの最適化
		optimizeModelViewer(modelViewer);

		// モデルロード完了イベント
		const handleLoad = () => {
			setIsModelLoaded(true);
			console.log('モデルが読み込まれました');
		};

		// モデルの操作イベント
		const handleCameraChange = () => {
			console.log('モデルが操作されました');
		};

		// イベントリスナー登録
		modelViewer.addEventListener('load', handleLoad);
		modelViewer.addEventListener('camera-change', handleCameraChange);

		// イベントリスナーのクリーンアップ
		return () => {
			modelViewer.removeEventListener('load', handleLoad);
			modelViewer.removeEventListener('camera-change', handleCameraChange);
		};
	}, [isModelViewerLoaded]);

	// モデルの拡大処理
	const handleScaleUp = () => {
		if (!modelViewerRef.current) return;
		const success = scaleModel(modelViewerRef.current, 1.2);
		if (success) {
			console.log('拡大しました');
		}
	};

	// モデルの縮小処理
	const handleScaleDown = () => {
		if (!modelViewerRef.current) return;
		const success = scaleModel(modelViewerRef.current, 0.8);
		if (success) {
			console.log('縮小しました');
		}
	};

	// モデルのリセット処理
	const handleReset = () => {
		if (!modelViewerRef.current) return;
		resetModelView(modelViewerRef.current);
		console.log('位置をリセットしました');
	};

	// デバイス判定（簡易版）
	const isMobileDevice = () => {
		if (typeof window !== 'undefined') {
			return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
		}
		return false;
	};

	return (
		<div className="ar-view-container relative w-full h-[500px] bg-neutral-100 rounded-lg overflow-hidden">
			<style jsx global>{`
        model-viewer {
          --poster-color: transparent;
          /* スマホのみpan-yにする */
          touch-action: ${isMobileDevice() ? 'pan-y' : 'none'};
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          user-select: none;
        }
        
        /* カメラコントロールのUI要素を非表示 */
        model-viewer::part(default-progress-bar) {
          display: none;
        }
        
        .ar-view-container {
          position: relative;
          z-index: 10;
        }
      `}</style>

			{isModelViewerLoaded ? (
				// @ts-ignore - model-viewerはカスタム要素
				<model-viewer
					ref={modelViewerRef}
					src={modelUrl}
					alt="3Dモデルプレビュー"
					camera-controls
					touch-action={isMobileDevice() ? 'pan-y' : 'none'}
					seamless-poster
					shadow-intensity="0"
					environment-image="neutral"
					exposure="0.8"
					// Y軸回転の制限
					min-camera-orbit="-Infinity 45deg auto"
					max-camera-orbit="Infinity 135deg auto"
					// 初期カメラ位置
					camera-orbit="0deg 75deg 105%"
					// フィールドオブビューの制限 - ズーム倍率の調整
					// 小さい値ほど拡大でき、大きい値ほど縮小できる
					min-field-of-view="10deg"  // より強いズームイン（拡大）を可能に（小さくするとより拡大可能）
					max-field-of-view="45deg"  // ズームアウト（縮小）の制限（大きくするとより縮小可能）
					// オービット距離の制限（ズームの別の制御方法）
					// min-camera-orbit="auto auto 50%" // 最大ズームイン（モデルの50%まで近づける）
					// max-camera-orbit="auto auto 300%" // 最大ズームアウト（モデルの3倍まで離れられる）
					interaction-prompt="none"
					style={{ width: '100%', height: '100%' }}
					className="w-full h-full"
				>
					{/* 読み込み中表示 */}
					{!isModelLoaded && (
						<div className="progress-container absolute top-0 left-0 w-full h-full flex items-center justify-center" slot="poster">
							<div className="bg-white p-4 rounded-lg shadow-md">
								<div className="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-2"></div>
								<div className="text-neutral-600">3Dモデルを読み込み中...</div>
							</div>
						</div>
					)}
				</model-viewer>
			) : (
				// モデルビューワー読み込み中
				<div className="w-full h-full flex items-center justify-center">
					<div className="text-neutral-600">3Dビューアを読み込み中...</div>
				</div>
			)}

			{/* 操作コントロール */}
			{isModelViewerLoaded && (
				<div className="absolute bottom-4 left-4 flex flex-col gap-2 z-10">
					<button
						className="p-2 bg-white text-blue-600 rounded-full shadow-md hover:bg-blue-50"
						aria-label="拡大"
						onClick={handleScaleUp}
					>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
							<line x1="12" y1="5" x2="12" y2="19"></line>
							<line x1="5" y1="12" x2="19" y2="12"></line>
						</svg>
					</button>
					<button
						className="p-2 bg-white text-blue-600 rounded-full shadow-md hover:bg-blue-50"
						aria-label="縮小"
						onClick={handleScaleDown}
					>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
							<line x1="5" y1="12" x2="19" y2="12"></line>
						</svg>
					</button>
					<button
						className="p-2 bg-white text-blue-600 rounded-full shadow-md mt-1 hover:bg-blue-50"
						aria-label="リセット"
						title="位置をリセット"
						onClick={handleReset}
					>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
							<path d="M3 2v6h6"></path>
							<path d="M21 12A9 9 0 0 0 6 5.3L3 8"></path>
							<path d="M21 22v-6h-6"></path>
							<path d="M3 12a9 9 0 0 0 15 6.7l3-2.7"></path>
						</svg>
					</button>
				</div>
			)}

			{/* 操作ガイド */}
			{isModelViewerLoaded && isModelLoaded && (
				<div className="absolute top-4 left-0 right-0 mx-auto max-w-xs bg-black bg-opacity-70 text-white px-4 py-2 rounded-full text-sm z-10 flex items-center justify-center">
					<span>
						{isMobileDevice()
							? "ドラッグで回転、ピンチで拡大できます"
							: "ドラッグで回転、マウスホイールで拡大できます"}
					</span>
				</div>
			)}

			{/* 閉じるボタン */}
			{onClose && (
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
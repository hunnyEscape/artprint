'use client';

/**
 * ARコントロール用のユーティリティ関数
 */

// ARセッション中のモデルをスケーリングする関数
export function scaleModel(modelViewer: HTMLElement, factor: number) {
	try {
		// 現在のスケールを取得
		const currentScale = modelViewer.getAttribute('scale') || '1 1 1';
		const scaleArray = currentScale.split(' ').map(val => parseFloat(val));

		// 新しいスケール計算
		const newScale = scaleArray.map(val => val * factor);

		// スケール適用
		modelViewer.setAttribute('scale', newScale.join(' '));

		return true;
	} catch (error) {
		console.error('スケーリング処理中にエラーが発生しました:', error);
		return false;
	}
}

// モデルビューワーの初期設定を最適化する関数
export function optimizeModelViewer(modelViewer: HTMLElement) {
	try {
		// カメラの回転制限設定
		// Y軸回転を制限して縦スクロールとの干渉を防止
		modelViewer.setAttribute('min-camera-orbit', '-Infinity 45deg auto');
		modelViewer.setAttribute('max-camera-orbit', 'Infinity 135deg auto');

		// 初期カメラ位置
		modelViewer.setAttribute('camera-orbit', '0deg 75deg 105%');

		// フィールドオブビューの制限（ズームの制限）
		modelViewer.setAttribute('min-field-of-view', '30deg');
		modelViewer.setAttribute('max-field-of-view', '60deg');

		// 自動回転を無効化
		modelViewer.setAttribute('auto-rotate', 'false');

		// タッチアクションの設定
		// 'pan-y'はY軸方向のスクロールをブラウザに委譲
		modelViewer.setAttribute('touch-action', 'pan-y');

		// カメラコントロールの感度調整
		// ここでエラーが発生しているため、この処理を削除または修正
		// @ts-ignore - model-viewerのカスタムプロパティ
		// if (modelViewer.cameraControls) {
		//   // 感度調整は行わない
		// }

		return true;
	} catch (error) {
		console.error('モデルビューワーの設定中にエラーが発生しました:', error);
		return false;
	}
}

// モデルの位置をリセットする関数
export function resetModelView(modelViewer: HTMLElement) {
	try {
		// 回転とズームをリセット
		modelViewer.setAttribute('camera-orbit', '0deg 75deg 105%');
		modelViewer.setAttribute('scale', '1 1 1');

		return true;
	} catch (error) {
		console.error('モデルリセット中にエラーが発生しました:', error);
		return false;
	}
}
// AR体験中のモデル操作を強化するためのヘルパー機能

// ARセッション中のモデルをスケーリングする関数
export function scaleModel(modelViewer: HTMLElement, factor: number) {
	try {
		// 現在のスケールを取得
		const currentScale = modelViewer.getAttribute('scale') || '1 1 1';
		const scaleArray = currentScale.split(' ').map(val => parseFloat(val));

		// 新しいスケール計算 (壁紙の場合、平面的にスケールするため、y座標は変えない)
		const newScale = [
			scaleArray[0] * factor,
			scaleArray[1],  // 壁紙の厚みは変更しない
			scaleArray[2] * factor
		];

		// スケール適用
		modelViewer.setAttribute('scale', newScale.join(' '));

		return true;
	} catch (error) {
		console.error('スケーリング処理中にエラーが発生しました:', error);
		return false;
	}
}

// ARセッション中にモデルの配置モードを変更する
export function togglePlacementMode(modelViewer: HTMLElement) {
	try {
		const currentMode = modelViewer.getAttribute('ar-placement');

		// wall <-> floor の切り替え
		if (currentMode === 'wall') {
			modelViewer.setAttribute('ar-placement', 'floor');
			return 'floor';
		} else {
			modelViewer.setAttribute('ar-placement', 'wall');
			return 'wall';
		}
	} catch (error) {
		console.error('配置モード変更中にエラーが発生しました:', error);
		return null;
	}
}

// ARセッションの状態をチェックする関数
export function checkARStatus(modelViewer: HTMLElement): boolean {
	// ARセッションが進行中かどうかを確認
	// @ts-ignore - カスタムプロパティにアクセス
	return modelViewer.isARActive || false;
}

// デバイスに応じてAR体験をカスタマイズする
export function optimizeARExperience(modelViewer: HTMLElement) {
	// iOSデバイスの検出
	const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;

	if (isIOS) {
		// iOS特有の設定
		modelViewer.setAttribute('ar-scale', 'auto');
		modelViewer.setAttribute('ar', 'quick-look');
	} else {
		// Android特有の設定
		modelViewer.setAttribute('ar-scale', 'fixed');
		modelViewer.setAttribute('ar', 'scene-viewer webxr');

		// Android向けに壁面配置を最適化
		modelViewer.setAttribute('ar-placement', 'wall');
	}
}
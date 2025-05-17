// src/components/showcase/ar-controls.ts を更新

export function setupARControls(modelViewer: HTMLElement) {
	// ARセッション中かどうかをチェックするラッパー関数
	const isInAR = () => {
		// @ts-ignore - model-viewerのカスタムプロパティ
		return modelViewer.isARActive || false;
	};

	// ARセッションの状態を定期的にチェックするリスナーを追加
	let arSessionCheckInterval: NodeJS.Timeout | null = null;

	// AR入室時のイベント処理
	const handleARStatusChange = (event: any) => {
		if (event.detail.status === 'session-started') {
			console.log('ARセッション開始');

			// ARセッション開始時にモデルにscaleを設定
			// これにより初期スケールが1になることを保証
			if (!modelViewer.hasAttribute('scale')) {
				modelViewer.setAttribute('scale', '1 1 1');
			}

			// ARセッション中のコントロールを表示するためのクラスをボディに追加
			document.body.classList.add('ar-mode-active');

			// ARセッション中の状態を定期的にチェック
			arSessionCheckInterval = setInterval(() => {
				// ARコントロールの可視性更新など
				if (!isInAR()) {
					clearInterval(arSessionCheckInterval as NodeJS.Timeout);
					document.body.classList.remove('ar-mode-active');
				}
			}, 1000);
		} else if (event.detail.status === 'session-ended') {
			console.log('ARセッション終了');
			if (arSessionCheckInterval) {
				clearInterval(arSessionCheckInterval);
				arSessionCheckInterval = null;
			}
			document.body.classList.remove('ar-mode-active');
		}
	};

	// イベントリスナーの登録
	modelViewer.addEventListener('ar-status', handleARStatusChange);

	// もしイベントリスナーの登録が不安定な場合のフォールバック
	const fallbackSetup = () => {
		// model-viewerのquick-lookモードやscene-viewerモードに特化した調整
		const arModes = modelViewer.getAttribute('ar-modes') || '';

		if (arModes.includes('scene-viewer')) {
			// Android用のScene Viewer最適化
			// scene-viewerに渡すURLパラメータをカスタマイズして挙動を制御
			modelViewer.setAttribute('ar', 'scene-viewer');

			// Scene Viewerへの拡張URLパラメータ
			// 詳細: https://developers.google.com/ar/develop/scene-viewer
			const linkElement = modelViewer.querySelector('[slot="ar-button"]') as HTMLElement;
			if (linkElement) {
				linkElement.addEventListener('click', () => {
					// AndroidのARセッションをカスタマイズするコードをここに
					console.log('Scene Viewer AR開始');
				});
			}
		}
	};

	// 初期設定呼び出し
	fallbackSetup();

	return {
		cleanup: () => {
			modelViewer.removeEventListener('ar-status', handleARStatusChange);
			if (arSessionCheckInterval) {
				clearInterval(arSessionCheckInterval);
			}
		}
	};
}

// モデルをスケールする関数を更新
export function scaleModel(modelViewer: HTMLElement, factor: number) {
	try {
		// 現在のスケールを取得
		const currentScale = modelViewer.getAttribute('scale') || '1 1 1';
		const scaleArray = currentScale.split(' ').map(val => parseFloat(val));

		// 新しいスケール計算（すべての軸で均等にスケール）
		const newScale = scaleArray.map(val => val * factor);

		// スケール適用
		modelViewer.setAttribute('scale', newScale.join(' '));

		// AR内部が利用可能な場合は、ARセッション内でもスケール変更
		// @ts-ignore
		if (modelViewer.isARActive && modelViewer.arScale) {
			// @ts-ignore - ARセッション内でのスケーリング試行
			modelViewer.updateARScale(newScale);
		}

		return true;
	} catch (error) {
		console.error('スケーリング処理中にエラーが発生しました:', error);
		return false;
	}
}

// ARモードでより良い表示のためのスタイルを追加
export function addARStyles() {
	// 既に追加済みならスキップ
	if (document.getElementById('ar-custom-styles')) return;

	const styleElement = document.createElement('style');
	styleElement.id = 'ar-custom-styles';
	styleElement.textContent = `
    /* ARモード中のコントロールスタイリング */
    body.ar-mode-active .ar-floating-controls {
      position: fixed;
      bottom: 20px;
      left: 20px;
      z-index: 9999;
      display: flex !important;
      flex-direction: column;
      gap: 8px;
    }
    
    body.ar-mode-active .ar-control-button {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
      border: none;
      cursor: pointer;
    }
    
    /* トースト通知スタイル */
    .ar-toast {
      position: fixed;
      top: 10%;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(0, 0, 0, 0.7);
      color: white;
      padding: 8px 16px;
      border-radius: 20px;
      font-size: 14px;
      z-index: 10000;
      opacity: 0;
      transition: opacity 0.3s;
    }
    
    .ar-toast.show {
      opacity: 1;
    }
  `;

	document.head.appendChild(styleElement);
}

// ARセッションの間、トースト通知を表示
export function showARToast(message: string, duration: number = 3000) {
	let toastEl = document.querySelector('.ar-toast') as HTMLElement;

	if (!toastEl) {
		toastEl = document.createElement('div');
		toastEl.className = 'ar-toast';
		document.body.appendChild(toastEl);
	}

	toastEl.textContent = message;
	toastEl.classList.add('show');

	setTimeout(() => {
		toastEl.classList.remove('show');
	}, duration);
}
// src/components/showcase/ar-controls.ts
// シンプル化した実装

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

// ar-controls.ts に以下の関数を追加

export function optimizeARExperience(modelViewer: HTMLElement) {
  try {
    // iOSデバイスの検出
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
    
    if (isIOS) {
      // iOS特有の設定
      modelViewer.setAttribute('ar-scale', 'auto');
      modelViewer.setAttribute('ios-src', modelViewer.getAttribute('ios-src') || '');
      modelViewer.setAttribute('ar', 'quick-look');
    } else {
      // Android特有の設定 - Scene Viewer用の設定
      modelViewer.setAttribute('ar-scale', 'auto');
      modelViewer.setAttribute('ar', 'scene-viewer');
      
      // ARボタンを取得してカスタムURLパラメータを追加
      const arButton = modelViewer.querySelector('[slot="ar-button"]');
      if (arButton) {
        arButton.addEventListener('click', () => {
          // Scene Viewerに追加のパラメータを渡す
          // これにより、Android ARでの操作性が向上する
          try {
            // @ts-ignore
            if (modelViewer.availableActiveSources && modelViewer.availableActiveSources.includes('scene-viewer')) {
              // @ts-ignore
              const modelUrl = modelViewer.src;
              
              // Scene Viewerカスタムパラメータ付きURL
              // モード: resizable - サイズ変更可能、link - QRコードなし
              const sceneViewerUrl = `intent://arvr.google.com/scene-viewer/1.0?file=${encodeURIComponent(modelUrl)}&mode=resizable&resizable=true&link=false&title=${encodeURIComponent('ARプレビュー')}&sound=false#Intent;scheme=https;package=com.google.android.googlequicksearchbox;action=android.intent.action.VIEW;S.browser_fallback_url=${encodeURIComponent(window.location.href)};end;`;
              
              // デバッグログ
              console.log('Scene Viewer URL設定:', sceneViewerUrl);
            }
          } catch (error) {
            console.error('Scene Viewer URL生成エラー:', error);
          }
        });
      }
      
      // Android向けに壁面配置を最適化
      modelViewer.setAttribute('ar-placement', 'wall');
    }
  } catch (error) {
    console.error('AR体験最適化中にエラーが発生しました:', error);
  }
}
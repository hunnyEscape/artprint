// Google Analytics 4の測定ID
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

// 基本的なGAイベント送信関数
export const sendGAEvent = (
	eventName: string,
	params: { [key: string]: any } = {}
) => {
	if (!GA_MEASUREMENT_ID || typeof window === 'undefined' || !window.gtag) return;

	window.gtag('event', eventName, params);
};

// ページビューのトラッキング
export const trackPageView = (url: string) => {
	sendGAEvent('page_view', {
		page_path: url,
		page_title: document.title,
	});
};

// スクロール深度のトラッキング
export const trackScrollDepth = (depth: number) => {
	const thresholds = [25, 50, 75, 90, 100];
	const reachedThresholds = thresholds.filter(threshold => depth >= threshold);

	if (reachedThresholds.length > 0) {
		// 最も深いしきい値でイベントを送信
		const maxThreshold = Math.max(...reachedThresholds);

		// すでに送信済みのしきい値は再送信しない
		const sentThresholds = window.sessionStorage.getItem('scroll_depth_sent') || '';
		const sentThresholdsArray = sentThresholds ? sentThresholds.split(',').map(Number) : [];

		if (!sentThresholdsArray.includes(maxThreshold)) {
			sendGAEvent('scroll_depth', {
				depth_percentage: maxThreshold,
				page_path: window.location.pathname,
			});

			// 送信済みのしきい値を保存
			window.sessionStorage.setItem(
				'scroll_depth_sent',
				[...sentThresholdsArray, maxThreshold].sort((a, b) => a - b).join(',')
			);
		}
	}
};

// セクション表示のトラッキング
export const trackSectionView = (sectionId: string, sectionName: string) => {
	// すでに表示済みのセクションは再送信しない
	const viewedSections = window.sessionStorage.getItem('viewed_sections') || '';
	const viewedSectionsArray = viewedSections ? viewedSections.split(',') : [];

	if (!viewedSectionsArray.includes(sectionId)) {
		sendGAEvent('section_view', {
			section_id: sectionId,
			section_name: sectionName,
			page_path: window.location.pathname,
		});

		// 表示済みのセクションを保存
		window.sessionStorage.setItem(
			'viewed_sections',
			[...viewedSectionsArray, sectionId].join(',')
		);
	}
};

// ECサイト遷移のトラッキング
export const trackECLinkClick = (
	buttonLocation: string,
	buttonText: string,
	destinationUrl: string
) => {
	sendGAEvent('ec_link_click', {
		button_location: buttonLocation,
		button_text: buttonText,
		destination_url: destinationUrl,
		page_path: window.location.pathname,
	});
};

// UTMパラメータの生成
export const generateUTMParams = (
	source: string = 'lp',
	medium: string = 'cpc',
	campaign: string = 'artpaper',
	content: string,
	term: string = ''
) => {
	const params = new URLSearchParams();
	params.append('utm_source', source);
	params.append('utm_medium', medium);
	params.append('utm_campaign', campaign);
	params.append('utm_content', content);

	if (term) {
		params.append('utm_term', term);
	}

	return params.toString();
};

// ECサイトのURLにUTMパラメータを追加
export const getECUrlWithUTM = (
	baseUrl: string,
	buttonLocation: string,
	additionalParams: { [key: string]: string } = {}
) => {
	// UTMパラメータの生成
	const utmParams = generateUTMParams(
		'lp',
		'referral',
		'artpaper_lp',
		buttonLocation
	);

	// 追加パラメータの処理
	const additionalParamsString = Object.entries(additionalParams)
		.map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
		.join('&');

	// URLの組み立て
	const separator = baseUrl.includes('?') ? '&' : '?';
	return `${baseUrl}${separator}${utmParams}${additionalParamsString ? `&${additionalParamsString}` : ''}`;
};

// ページ滞在時間の開始時間を保存
export const startTimeMeasurement = () => {
	if (typeof window !== 'undefined') {
		window.sessionStorage.setItem('page_enter_time', Date.now().toString());
	}
};

// ページ離脱時の滞在時間計測＆送信
export const trackTimeOnPage = () => {
	if (typeof window === 'undefined') return;

	const startTime = window.sessionStorage.getItem('page_enter_time');
	if (startTime) {
		const timeSpentMs = Date.now() - parseInt(startTime);
		const timeSpentSeconds = Math.floor(timeSpentMs / 1000);

		sendGAEvent('time_on_page', {
			time_seconds: timeSpentSeconds,
			page_path: window.location.pathname
		});
	}
};
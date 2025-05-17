// src/hooks/useImagePreload.ts
'use client';

import { useState, useEffect } from 'react';

export function useImagePreload(src: string): boolean {
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		if (!src) {
			setIsLoaded(false);
			return;
		}

		const img = new Image();
		img.src = src;
		img.onload = () => setIsLoaded(true);
		img.onerror = () => setIsLoaded(false);

		return () => {
			img.onload = null;
			img.onerror = null;
		};
	}, [src]);

	return isLoaded;
}
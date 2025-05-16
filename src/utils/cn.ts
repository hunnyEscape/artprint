import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Tailwindのクラス名を正しく結合するユーティリティ
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
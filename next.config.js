/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	sassOptions: {
		includePaths: ['./src'],
	},
	images: {
		formats: ['image/avif', 'image/webp'],
		domains: ['firebasestorage.googleapis.com'],
		// プレースホルダーを追加
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
		// 一時的に画像検証を無効化（開発中のみ）
		unoptimized: process.env.NODE_ENV === 'development',
	},
	experimental: {
		serverActions: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	typescript: {
		ignoreBuildErrors: true,
	},
};

module.exports = nextConfig;
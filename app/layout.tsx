import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PetPresso - 나만의 이모티콘 서비스",
  description: "나만의 반려동물 이모티콘을 사진 한장으로 만들어 보세요!",
  openGraph: {
    title: "MoveMoji - 나만의 이모티콘 서비스",
    description: "MOVEMOJI는 생성형 AI 기반 움직이는 이모티콘 자동 생성 웹서비스 입니다.",
    url: "https://movemoji.reconlabs.ai/",
    siteName: "MoveMoji",
    images: [{
      url: "https://movemoji.reconlabs.ai/main/web_main_img.webp",
      width: 1200,
      height: 630,
      alt: "MoveMoji 메인 이미지",
    }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link href="https://fonts.cdnfonts.com/css/cherry-bomb-one" rel="stylesheet" />
      </head>
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
        {process.env.NODE_ENV === "production" && (
          <>
            <Analytics />
            <SpeedInsights />
            <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID!} />
          </>
        )}
      </body>
    </html>
  );
}

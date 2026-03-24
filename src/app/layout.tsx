import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "5,000+ 무제한 수익화 영상 PLR 패키지",
  description: "얼굴 노출 없이, 저작권 걱정 없이. 하루 10분으로 끝내는 숏폼 수익화",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.min.css"
        />
        <Script src="https://code.iconify.design/iconify-icon/2.3.0/iconify-icon.min.js" strategy="beforeInteractive" />
      </head>
      <body className="font-sans bg-slate-950 text-slate-100 antialiased selection:bg-blue-500/30 selection:text-blue-200">
        {children}
      </body>
    </html>
  );
}

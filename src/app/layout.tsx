import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/FooterSection";
import Head from "next/head";
import { Toaster } from "react-hot-toast";
import AnimatedBackground from "@/components/AnimatedBackground";

export const metadata: Metadata = {
  title: "ZiCA - Môi trường chơi game đầy thú vị",
  description: "ZiCA - Nền tảng game đánh cá trực tuyến hàng đầu Việt Nam. Trải nghiệm game đánh cá đỉnh cao với đồ họa đẹp, âm thanh sống động và phần thưởng hấp dẫn. Tham gia ngay để nhận quà tặng và thưởng thức những trận đánh cá gay cấn!",
  keywords: [
    "ZiCA",
    "game đánh cá",
    "đánh cá trực tuyến",
    "game online",
    "casino online",
    "slot game",
    "game Việt Nam",
    "đánh cá đổi thưởng",
    "game mobile",
    "trò chơi trực tuyến"
  ],
  authors: [{ name: "ZiCA Team" }],
  creator: "ZiCA",
  publisher: "ZiCA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://zica.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "ZiCA - Môi trường chơi game đầy thú vị",
    description: "ZiCA - Nền tảng game đánh cá trực tuyến hàng đầu Việt Nam. Trải nghiệm game đánh cá đỉnh cao với đồ họa đẹp, âm thanh sống động và phần thưởng hấp dẫn.",
    url: 'https://zica.com',
    siteName: 'ZiCA',
    images: [
      {
        url: '/images/banner.png',
        width: 1200,
        height: 630,
        alt: 'ZiCA - Game đánh cá trực tuyến',
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "ZiCA - Môi trường chơi game đầy thú vị",
    description: "ZiCA - Nền tảng game đánh cá trực tuyến hàng đầu Việt Nam. Trải nghiệm game đánh cá đỉnh cao với đồ họa đẹp, âm thanh sống động và phần thưởng hấp dẫn.",
    images: ['/images/banner.png'],
    creator: '@zica_game',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'game',
  classification: 'game',
  other: {
    'theme-color': '#3E33FF',
    'msapplication-TileColor': '#3E33FF',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'ZiCA',
    'application-name': 'ZiCA',
    'mobile-web-app-capable': 'yes',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="mdl-js">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;700;900&display=swap" rel="stylesheet" />
        
        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon-192.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icon-192.png" />
        
        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon.png" />
        
        {/* Android Icons */}
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon-512.png" />
        
        {/* Microsoft Tiles */}
        <meta name="msapplication-TileImage" content="/icon-192.png" />
        <meta name="msapplication-TileColor" content="#3E33FF" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Viewport and Mobile */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="ZiCA" />
        <meta name="application-name" content="ZiCA" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#3E33FF" />
      </Head>
      <body className="font-bevietnampro">
        <AnimatedBackground />
        <main className="w-full flex flex-col items-center justify-center">
          {children}
        </main>
        <Footer />
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#333',
              color: '#fff',
              borderRadius: '8px',
              fontSize: '14px',
            },
            success: {
              style: {
                background: '#10B981',
              },
            },
            error: {
              style: {
                background: '#EF4444',
              },
            },
          }}
        />
      </body>
    </html>
  );
}

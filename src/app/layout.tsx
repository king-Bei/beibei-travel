import type { Metadata } from "next";
import { Noto_Sans_TC, Noto_Serif_TC, Playfair_Display } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const notoSans = Noto_Sans_TC({ 
  subsets: ["latin"],
  variable: "--font-noto-sans",
});

const notoSerif = Noto_Serif_TC({ 
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-serif",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

// 部落格作者設定
const authorConfig = {
  name: "貝貝的旅行日誌",
  bio: "熱愛探索世界的旅遊玩家，20+國家旅遊經驗，分享最真實的旅遊故事、必遊景點與實用攻略。",
  avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  social: {
    instagram: "@beibei.travel",
    email: "beibei@beibei-travel.com",
  }
};

const siteConfig = {
  name: "BEIBEI TRAVEL",
  description: "熱愛探索世界的旅遊玩家，分享20+國家旅遊經驗、最真實的旅遊故事、必遊景點與實用攻略。",
  url: "https://beibei-travel.com",
  keywords: [
    "旅遊部落格", "自由行", "旅遊攻略", "景點推薦", "旅遊須知",
    "日本旅遊", "韓國旅遊", "泰國旅遊", "歐洲旅遊", "海島旅遊",
    "機票攻略", "住宿推薦", "美食推薦", "行程規劃"
  ],
};

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | 旅行玩家貝貝`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: authorConfig.name }],
  creator: authorConfig.name,
  publisher: authorConfig.name,
  alternates: {
    canonical: siteConfig.url,
    languages: {
      'zh-TW': siteConfig.url,
      'zh-CN': siteConfig.url,
    },
  },
  openGraph: {
    type: "website",
    locale: "zh_TW",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | 旅行玩家貝貝`,
    description: siteConfig.description,
    images: [
      {
        url: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | 旅行玩家貝貝`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "travel",
  classification: "Travel Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <head>
        {/* JSON-LD 結構化資料 - 部落格作者 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": authorConfig.name,
              "url": siteConfig.url,
              "image": authorConfig.avatar,
              "description": authorConfig.bio,
              "jobTitle": "旅遊部落客",
              "sameAs": [
                `https://instagram.com/${authorConfig.social.instagram.replace('@', '')}`,
              ],
            }),
          }}
        />
        
        {/* WebSite 結構化資料 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": siteConfig.name,
              "url": siteConfig.url,
              "description": siteConfig.description,
              "author": {
                "@type": "Person",
                "name": authorConfig.name,
              },
            }),
          }}
        />
      </head>

      <body className={`${notoSans.variable} ${notoSerif.variable} ${playfair.variable} font-sans bg-luxury-black text-luxury-cream`}>
        {/* 導航欄 */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-luxury-black/80 backdrop-blur-md border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="font-playfair text-2xl font-bold tracking-wider">
              <span className="text-luxury-gold">B</span>EIBEI
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/blog" className="text-sm uppercase tracking-widest text-luxury-muted hover:text-luxury-gold transition-colors">
                Journal
              </Link>
              <Link href="/destinations" className="text-sm uppercase tracking-widest text-luxury-muted hover:text-luxury-gold transition-colors">
                Destinations
              </Link>
              <Link href="/about" className="text-sm uppercase tracking-widest text-luxury-muted hover:text-luxury-gold transition-colors">
                About
              </Link>
            </div>
            <Link href="/blog" className="btn-luxury text-xs">
              Explore
            </Link>
          </div>
        </nav>

        {/* 主要內容 */}
        <main className="pt-20 min-h-screen">
          {children}
        </main>

        {/* 底部 */}
        <footer className="py-16 bg-luxury-dark border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <Link href="/" className="font-playfair text-2xl font-bold tracking-wider">
                <span className="text-luxury-gold">B</span>EIBEI
              </Link>
              <div className="flex items-center gap-8">
                <Link href="/blog" className="text-sm text-luxury-muted hover:text-luxury-gold transition-colors">
                  Journal
                </Link>
                <Link href="/destinations" className="text-sm text-luxury-muted hover:text-luxury-gold transition-colors">
                  Destinations
                </Link>
                <Link href="/about" className="text-sm text-luxury-muted hover:text-luxury-gold transition-colors">
                  About
                </Link>
              </div>
              <span className="text-sm text-luxury-muted">
                © 2026 BEIBEI. All rights reserved.
              </span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

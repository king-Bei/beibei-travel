import type { Metadata } from "next";
import { Noto_Sans_TC, Noto_Serif_TC } from "next/font/google";
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

// 部落格作者設定
const authorConfig = {
  name: "貝貝的旅行日誌",
  bio: "熱愛探索世界的旅遊玩家，20+國家旅遊經驗，分享最真實的旅遊故事、必遊景點與實用攻略。",
  avatar: "/avatar.jpg",
  social: {
    instagram: "@beibei.travel",
    email: "beibei@beibei-travel.com",
  }
};

const siteConfig = {
  name: "貝貝的旅行日誌",
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
        url: `${siteConfig.url}/og-image.jpg`,
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
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
              "image": `${siteConfig.url}/avatar.jpg`,
              "description": authorConfig.bio,
              "jobTitle": "旅遊部落客",
              "sameAs": [
                `https://instagram.com/${authorConfig.social.instagram.replace('@', '')}`,
              ],
              "worksFor": {
                "@type": "Organization",
                "name": authorConfig.name
              },
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
              "keywords": siteConfig.keywords.join(", "),
              "author": {
                "@type": "Person",
                "name": authorConfig.name,
              },
              "publisher": {
                "@type": "Person",
                "name": authorConfig.name,
              },
              "inLanguage": "zh-TW",
              "about": {
                "@type": "Thing",
                "name": "旅遊",
                "description": "自由行、旅遊攻略、景點推薦",
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": { "@type": "EntryPoint", "urlTemplate": `${siteConfig.url}/blog?q={search_term_string}` },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        {/* Blog 結構化資料 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              "name": siteConfig.name,
              "url": siteConfig.url,
              "description": siteConfig.description,
              "author": {
                "@type": "Person",
                "name": authorConfig.name,
              },
              "keywords": siteConfig.keywords.join(", "),
            }),
          }}
        />
      </head>

      <body className={`${notoSans.variable} ${notoSerif.variable} font-sans bg-cream text-charcoal`}>
        {/* 導航欄 */}
        <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="text-2xl font-black tracking-tight">
              <span className="text-amber-600">貝貝</span>的旅行日誌
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/blog" className="font-medium hover:text-amber-600 transition-colors">文章</Link>
              <Link href="/destinations" className="font-medium hover:text-amber-600 transition-colors">目的地</Link>
              <Link href="/about" className="font-medium hover:text-amber-600 transition-colors">關於貝貝</Link>
            </div>
          </div>
        </nav>

        {/* 主要內容 */}
        <main className="pt-20 min-h-screen">
          {children}
        </main>

        {/* 底部 */}
        <footer className="bg-charcoal text-white py-12 mt-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl font-black">
                    <span className="text-amber-500">貝貝</span>的旅行日誌
                  </span>
                </div>
                <p className="text-slate-400">
                  {authorConfig.bio}
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-4">快速連結</h4>
                <ul className="space-y-2 text-slate-400">
                  <li><Link href="/blog" className="hover:text-amber-500">旅遊文章</Link></li>
                  <li><Link href="/destinations" className="hover:text-amber-500">目的地推薦</Link></li>
                  <li><Link href="/about" className="hover:text-amber-500">關於貝貝</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">聯絡貝貝</h4>
                <ul className="space-y-2 text-slate-400">
                  <li>{authorConfig.social.email}</li>
                  <li>{authorConfig.social.instagram}</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-500 text-sm">
              © 2026 {authorConfig.name}. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

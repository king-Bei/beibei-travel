import Link from "next/link";
import { MapPin, Plane, Star, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-luxury-black text-luxury-cream bg-luxury-pattern">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-luxury-black/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-playfair text-2xl font-bold tracking-wider">
            <span className="text-luxury-gold">B</span>EIBEI
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/blog" className="text-sm uppercase tracking-widest text-luxury-muted hover:text-luxury-gold transition-colors">
              Journal
            </Link>
            <Link href="/about" className="text-sm uppercase tracking-widest text-luxury-muted hover:text-luxury-gold transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm uppercase tracking-widest text-luxury-muted hover:text-luxury-gold transition-colors">
              Contact
            </Link>
          </div>
          <Link href="/blog" className="btn-luxury text-xs">
            Explore
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/50 via-transparent to-luxury-black"></div>
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-luxury-gold/5 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-luxury-gold/3 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
          <div className="inline-flex items-center gap-2 border border-luxury-gold/30 px-4 py-2 rounded-full mb-8 animate-fade-in-up">
            <Star size={12} className="text-luxury-gold" />
            <span className="text-xs uppercase tracking-[0.2em] text-luxury-muted">Travel Journal</span>
          </div>
          
          <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-medium mb-8 leading-tight animate-fade-in-up animate-delay-100">
            探索世界的<br/>
            <span className="gold-gradient">美好瞬間</span>
          </h1>
          
          <p className="text-lg md:text-xl text-luxury-muted max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up animate-delay-200">
            用雙腳丈量世界，用文字記錄美好。<br/>
            分享我的旅遊故事、體驗與發現
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animate-delay-300">
            <Link href="/blog" className="btn-luxury-solid">
              開始探索
            </Link>
            <Link href="/about" className="btn-luxury">
              認識貝貝
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in-up animate-delay-400">
          <span className="text-xs uppercase tracking-widest text-luxury-muted">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-luxury-gold to-transparent"></div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-32 bg-luxury-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-16">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-luxury-gold">Featured</span>
              <h2 className="font-playfair text-4xl md:text-5xl mt-4">精選文章</h2>
            </div>
            <Link href="/blog" className="hidden md:flex items-center gap-2 text-luxury-muted hover:text-luxury-gold transition-colors">
              <span className="text-sm uppercase tracking-widest">View All</span>
              <ChevronRight size={16} />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Featured Article 1 */}
            <Link href="/blog/maldives-2026" className="group relative aspect-[4/3] overflow-hidden rounded-sm">
              <div className="absolute inset-0 bg-luxury-charcoal group-hover:scale-105 transition-transform duration-700"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="inline-block px-3 py-1 bg-luxury-gold/20 text-luxury-gold text-xs uppercase tracking-widest mb-4">
                  景點
                </span>
                <h3 className="font-playfair text-2xl md:text-3xl mb-2 group-hover:text-luxury-gold transition-colors">
                  馬爾代夫全攻略<br/>2026 最新選島指南
                </h3>
                <p className="text-luxury-muted text-sm line-clamp-2">
                  想去馬爾代夫但不知道如何選島？完整分析各價位度假村、推薦必去島嶼
                </p>
              </div>
            </Link>

            {/* Featured Article 2 */}
            <Link href="/blog/palau-diving" className="group relative aspect-[4/3] overflow-hidden rounded-sm">
              <div className="absolute inset-0 bg-luxury-charcoal group-hover:scale-105 transition-transform duration-700"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="inline-block px-3 py-1 bg-luxury-gold/20 text-luxury-gold text-xs uppercase tracking-widest mb-4">
                  體驗
                </span>
                <h3 className="font-playfair text-2xl md:text-3xl mb-2 group-hover:text-luxury-gold transition-colors">
                  帛琉潛水全攻略<br/>與鯊魚共舞
                </h3>
                <p className="text-luxury-muted text-sm line-clamp-2">
                  帛琉是潛水者的天堂！詳細介紹最佳潛點與水下生物觀賞季節
                </p>
              </div>
            </Link>
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link href="/blog" className="btn-luxury inline-flex items-center gap-2">
              <span>查看全部</span>
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-32 bg-luxury-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-xs uppercase tracking-[0.2em] text-luxury-gold">Destinations</span>
            <h2 className="font-playfair text-4xl md:text-5xl mt-4">旅遊足跡</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="group p-8 border border-white/10 hover:border-luxury-gold/50 transition-all duration-500">
              <MapPin className="w-8 h-8 text-luxury-gold mb-6" />
              <h3 className="font-playfair text-2xl mb-4">亞洲海島</h3>
              <p className="text-luxury-muted leading-relaxed">
                馬爾代夫、帛琉、沖繩、濟州島、普吉島、峇里島
              </p>
            </div>
            
            <div className="group p-8 border border-white/10 hover:border-luxury-gold/50 transition-all duration-500">
              <Star className="w-8 h-8 text-luxury-gold mb-6" />
              <h3 className="font-playfair text-2xl mb-4">歐洲風情</h3>
              <p className="text-luxury-muted leading-relaxed">
                法國、義大利、瑞士、荷蘭、英國、西班牙
              </p>
            </div>
            
            <div className="group p-8 border border-white/10 hover:border-luxury-gold/50 transition-all duration-500">
              <Plane className="w-8 h-8 text-luxury-gold mb-6" />
              <h3 className="font-playfair text-2xl mb-4">亞洲城市</h3>
              <p className="text-luxury-muted leading-relaxed">
                東京、首爾、曼谷、新加坡、香港、台北
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-32 bg-luxury-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-luxury-gold">Categories</span>
            <h2 className="font-playfair text-4xl md:text-5xl mt-4">文章分類</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "旅遊攻略", count: 12, href: "/blog?category=攻略" },
              { name: "景點推薦", count: 18, href: "/blog?category=景點" },
              { name: "美食探索", count: 9, href: "/blog?category=美食" },
              { name: "攝影技巧", count: 6, href: "/blog?category=攝影" },
              { name: "旅遊須知", count: 8, href: "/blog?category=須知" },
              { name: "特殊體驗", count: 7, href: "/blog?category=體驗" },
            ].map((cat) => (
              <Link
                key={cat.name}
                href={cat.href}
                className="group p-6 border border-white/10 hover:border-luxury-gold/50 transition-all text-center"
              >
                <h3 className="font-playfair text-xl mb-2 group-hover:text-luxury-gold transition-colors">
                  {cat.name}
                </h3>
                <span className="text-xs text-luxury-muted uppercase tracking-widest">
                  {cat.count} 篇
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-32 bg-luxury-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-luxury-gold/5 rounded-full blur-[120px]"></div>
        </div>
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <span className="text-xs uppercase tracking-[0.2em] text-luxury-gold">Newsletter</span>
          <h2 className="font-playfair text-4xl md:text-5xl mt-4 mb-6">訂閱最新文章</h2>
          <p className="text-luxury-muted mb-10 leading-relaxed">
            獲取最新旅遊資訊、優惠與我的個人分享
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-6 py-4 bg-luxury-dark border border-white/10 text-luxury-cream placeholder:text-luxury-muted focus:outline-none focus:border-luxury-gold transition-colors"
            />
            <button type="submit" className="btn-luxury-solid whitespace-nowrap">
              訂閱
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
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
              <Link href="/about" className="text-sm text-luxury-muted hover:text-luxury-gold transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-sm text-luxury-muted hover:text-luxury-gold transition-colors">
                Contact
              </Link>
            </div>
            <span className="text-sm text-luxury-muted">
              © 2026 BEIBEI. All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

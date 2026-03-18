import Link from "next/link";
import Image from "next/image";
import { Star, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-luxury-black text-luxury-cream bg-luxury-pattern">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1920&h=1080&fit=crop"
            alt="Maldives"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/70 via-luxury-black/50 to-luxury-black"></div>
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-luxury-gold/10 rounded-full blur-[150px]"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
          <div className="inline-flex items-center gap-2 border border-luxury-gold/30 px-4 py-2 rounded-full mb-8">
            <Star size={12} className="text-luxury-gold" />
            <span className="text-xs uppercase tracking-[0.2em] text-luxury-muted">Travel Journal</span>
          </div>
          
          <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-medium mb-8 leading-tight">
            探索世界的<br/>
            <span className="gold-gradient">美好瞬間</span>
          </h1>
          
          <p className="text-lg md:text-xl text-luxury-muted max-w-2xl mx-auto mb-12 leading-relaxed">
            用雙腳丈量世界，用文字記錄美好。<br/>
            分享我的旅遊故事、體驗與發現
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/blog" className="btn-luxury-solid">
              開始探索
            </Link>
            <Link href="/about" className="btn-luxury">
              認識貝貝
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
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
              <Image
                src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&h=600&fit=crop"
                alt="馬爾地夫"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="inline-block px-3 py-1 bg-luxury-gold/20 text-luxury-gold text-xs uppercase tracking-widest mb-4">
                  景點
                </span>
                <h3 className="font-playfair text-2xl md:text-3xl mb-2 group-hover:text-luxury-gold transition-colors">
                  馬爾地夫全攻略<br/>2026 最新選島指南
                </h3>
                <p className="text-luxury-muted text-sm line-clamp-2">
                  想去馬爾地夫但不知道如何選島？完整分析各價位度假村、推薦必去島嶼
                </p>
              </div>
            </Link>

            {/* Featured Article 2 */}
            <Link href="/blog/palau-diving" className="group relative aspect-[4/3] overflow-hidden rounded-sm">
              <Image
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop"
                alt="帛琉潛水"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
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
            <div className="group relative aspect-[3/4] overflow-hidden rounded-sm">
              <Image
                src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&h=800&fit=crop"
                alt="東京"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-playfair text-2xl mb-2">亞洲城市</h3>
                <p className="text-luxury-muted text-sm">東京、首爾、曼谷、新加坡</p>
              </div>
            </div>
            
            <div className="group relative aspect-[3/4] overflow-hidden rounded-sm">
              <Image
                src="https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&h=800&fit=crop"
                alt="海島"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-playfair text-2xl mb-2">亞洲海島</h3>
                <p className="text-luxury-muted text-sm">馬爾地夫、帛琉、沖繩、峇里島</p>
              </div>
            </div>
            
            <div className="group relative aspect-[3/4] overflow-hidden rounded-sm">
              <Image
                src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&h=800&fit=crop"
                alt="歐洲"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-playfair text-2xl mb-2">歐洲風情</h3>
                <p className="text-luxury-muted text-sm">法國、義大利、瑞士、荷蘭</p>
              </div>
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
              { name: "旅遊攻略", count: 12, href: "/blog?category=攻略", img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&h=300&fit=crop" },
              { name: "景點推薦", count: 18, href: "/blog?category=景點", img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400&h=300&fit=crop" },
              { name: "美食探索", count: 9, href: "/blog?category=美食", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop" },
              { name: "攝影技巧", count: 6, href: "/blog?category=攝影", img: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop" },
              { name: "旅遊須知", count: 8, href: "/blog?category=須知", img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=300&fit=crop" },
              { name: "特殊體驗", count: 7, href: "/blog?category=體驗", img: "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?w=400&h=300&fit=crop" },
            ].map((cat) => (
              <Link
                key={cat.name}
                href={cat.href}
                className="group relative aspect-[4/3] overflow-hidden rounded-sm"
              >
                <Image
                  src={cat.img}
                  alt={cat.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-luxury-black/50 group-hover:bg-luxury-black/30 transition-colors"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <h3 className="font-playfair text-xl mb-1">{cat.name}</h3>
                  <span className="text-xs text-luxury-muted uppercase tracking-widest">
                    {cat.count} 篇
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-32 bg-luxury-black relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&h=600&fit=crop"
            alt="Newsletter"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/80 to-luxury-black"></div>
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
    </div>
  );
}

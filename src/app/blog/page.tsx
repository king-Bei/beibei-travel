import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ChevronRight, Search } from "lucide-react";

const articles = [
  {
    slug: "maldives-2026",
    title: "馬爾地夫全攻略｜2026 最新選島指南與預算分析",
    excerpt: "想去馬爾地夫但不知道如何選島？完整攻略幫你分析各價位度假村、推薦必去島嶼，以及隱藏版省錢技巧！",
    category: "景點",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&h=600&fit=crop",
    date: "2026-03-15",
    readTime: "8 分鐘",
    featured: true
  },
  {
    slug: "palau-diving",
    title: "帛琉潛水全攻略｜與鯊魚共舞的夢幻體驗",
    excerpt: "帛琉是潛水者的天堂！詳細介紹最佳潛點、水下生物觀賞季節，以及不會告訴你的省錢秘密。",
    category: "體驗",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
    date: "2026-03-10",
    readTime: "6 分鐘",
    featured: true
  },
  {
    slug: "tokyo-food",
    title: "東京美食地圖｜10 間在地人推薦的隱藏版餐廳",
    excerpt: "打破只有國際通的迷思！探索在地人吃的東京料理，這些美食景點你一定要知道。",
    category: "美食",
    image: "https://images.unsplash.com/photo-1580821810645-11a8fd7c9f83?w=800&h=600&fit=crop",
    date: "2026-03-05",
    readTime: "5 分鐘",
    featured: false
  },
  {
    slug: "tokyo-photography",
    title: "東京攝影指南｜街頭拍攝技巧與最佳取景點",
    excerpt: "用相機記錄東京的美好！分享街頭攝影的構圖技巧，以及 5 個絕對出片的拍攝地點。",
    category: "攝影",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=600&fit=crop",
    date: "2026-02-28",
    readTime: "7 分鐘",
    featured: false
  },
  {
    slug: "jeju-budget",
    title: "濟州島自由行｜一人預算 5000 元的玩轉攻略",
    excerpt: "濟州島是省錢旅行的首選！完整交通攻略、免費景點推薦，以及如何用少少預算玩到翻。",
    category: "攻略",
    image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&h=600&fit=crop",
    date: "2026-02-20",
    readTime: "9 分鐘",
    featured: false
  }
];

const categories = ["全部", "攻略", "景點", "美食", "攝影", "體驗"];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-luxury-black text-luxury-cream">
      {/* Header */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-luxury-muted text-sm mb-4">
            <Link href="/" className="hover:text-luxury-gold transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-luxury-gold">Journal</span>
          </div>
          <h1 className="font-playfair text-5xl md:text-7xl">
            旅行日誌
          </h1>
          <p className="text-luxury-muted text-lg mt-4 max-w-xl">
            記錄每一次旅程的點點滴滴，分享最真實的旅遊體驗
          </p>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Categories */}
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <Link
                  key={cat}
                  href={cat === "全部" ? "/blog" : `/blog?category=${cat}`}
                  className={`px-4 py-2 text-sm transition-all ${
                    cat === "全部"
                      ? "bg-luxury-gold text-luxury-black"
                      : "border border-white/10 text-luxury-muted hover:border-luxury-gold hover:text-luxury-gold"
                  }`}
                >
                  {cat}
                </Link>
              ))}
            </div>
            
            {/* Search */}
            <div className="relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-luxury-muted" />
              <input
                type="text"
                placeholder="搜尋文章..."
                className="pl-12 pr-4 py-3 bg-luxury-dark border border-white/10 text-luxury-cream placeholder:text-luxury-muted focus:outline-none focus:border-luxury-gold transition-colors w-64"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-xs uppercase tracking-[0.2em] text-luxury-gold mb-8">Featured</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {articles.filter(a => a.featured).map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group grid md:grid-cols-2 gap-6 border border-white/10 hover:border-luxury-gold/50 transition-all"
              >
                <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 border border-luxury-gold/30 text-luxury-gold text-xs uppercase tracking-widest">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="font-playfair text-2xl mb-3 group-hover:text-luxury-gold transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-luxury-muted mb-4 line-clamp-2">{article.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-luxury-muted">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {article.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-20 bg-luxury-dark">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-xs uppercase tracking-[0.2em] text-luxury-gold mb-8">Latest</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group border border-white/10 hover:border-luxury-gold/50 transition-all"
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-2 py-1 border border-white/10 text-luxury-muted text-xs uppercase tracking-widest mb-3">
                    {article.category}
                  </span>
                  <h3 className="font-playfair text-lg mb-2 group-hover:text-luxury-gold transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-luxury-muted text-sm mb-4 line-clamp-2">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-luxury-muted">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {article.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

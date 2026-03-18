import Link from "next/link";
import { MapPin, Calendar, Clock } from "lucide-react";

// 模擬文章數據
const articles = [
  {
    slug: "maldives-2026",
    title: "馬爾代夫全攻略｜2026 最新選島指南與預算分析",
    excerpt: "想去馬爾代夫但不知道如何選島？這篇完整攻略幫你分析各价位度假村、推荐必去岛屿，以及隐藏版省钱技巧！",
    category: "景點",
    image: "🏝️",
    date: "2026-03-15",
    readTime: "8 分鐘",
    featured: true
  },
  {
    slug: "palau-diving",
    title: "帛琉潛水全攻略｜與鯊魚共舞的夢幻體驗",
    excerpt: "帛琉是潛水者的天堂！本文详细介绍最佳潜点、水下生物观赏季节，以及不會告訴你的省錢秘密。",
    category: "體驗",
    image: "🤿",
    date: "2026-03-10",
    readTime: "6 分鐘",
    featured: true
  },
  {
    slug: "okinawa-food",
    title: "沖繩美食地圖｜10 間在地人推薦的隱藏版餐廳",
    excerpt: "不再只有國際通！探索在地人吃的沖繩料理，從阿古豬到塔可飯，這些美食景點你一定要知道。",
    category: "美食",
    image: "🍜",
    date: "2026-03-05",
    readTime: "5 分鐘",
    featured: false
  },
  {
    slug: "tokyo-photography",
    title: "東京攝影指南｜街頭拍攝技巧與最佳取景點",
    excerpt: "用相機記錄東京的美好！分享街頭攝影的構圖技巧，以及 5 個絕對出片的拍攝地點。",
    category: "攝影",
    image: "📷",
    date: "2026-02-28",
    readTime: "7 分鐘",
    featured: false
  },
  {
    slug: "jeju-budget",
    title: "濟州島自由行｜一人預算 5000 元的玩轉攻略",
    excerpt: "濟州島是省錢旅行的首選！完整交通攻略、免費景點推薦，以及如何用少少預算玩到翻。",
    category: "攻略",
    image: "🚌",
    date: "2026-02-20",
    readTime: "9 分鐘",
    featured: false
  },
  {
    slug: "thailand-visa",
    title: "泰國簽證最新政策｜2026 免簽入境的要注意的事",
    excerpt: "泰國持續免簽！但這些细节你必须知道。快速通关技巧、落地签流程，以及常见问题解答。",
    category: "須知",
    image: "📋",
    date: "2026-02-15",
    readTime: "4 分鐘",
    featured: false
  }
];

const categories = ["全部", "攻略", "景點", "美食", "攝影", "須知", "體驗"];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-black text-charcoal mb-6">
            貝貝的旅行日誌 📝
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            記錄每一次旅程的點點滴滴，分享最真實的旅遊體驗
          </p>
        </div>
      </section>

      {/* 分類篩選 */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-5 py-2 rounded-full font-medium transition-all ${
                  cat === "全部"
                    ? "bg-amber-600 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-amber-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured 文章 */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-black mb-8 flex items-center gap-2">
            <span>⭐</span> 精選文章
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {articles.filter(a => a.featured).map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="h-64 bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center text-8xl">
                  {article.image}
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                    <span className="text-slate-400 text-sm flex items-center gap-1">
                      <Calendar size={14} /> {article.date}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-amber-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-slate-600 mb-4">{article.excerpt}</p>
                  <span className="text-slate-400 text-sm flex items-center gap-1">
                    <Clock size={14} /> 預計閱讀 {article.readTime}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 所有文章 */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-black mb-8 flex items-center gap-2">
            <span>📚</span> 最新文章
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group bg-cream rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="h-48 bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center text-6xl">
                  {article.image}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-slate-200 text-slate-600 rounded-full text-xs font-medium">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-amber-600 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-slate-500 text-sm mb-3 line-clamp-2">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-slate-400">
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

      {/* Footer CTA */}
      <section className="py-16 bg-charcoal text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black mb-4">
            想看更多旅遊文章嗎？✨
          </h2>
          <p className="text-slate-300 mb-8">
            訂閱電子報，獲取最新文章與旅遊資訊
          </p>
          <form className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="輸入你的 email"
              className="flex-1 px-6 py-4 rounded-full text-charcoal focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <button
              type="submit"
              className="bg-amber-600 px-8 py-4 rounded-full font-bold hover:bg-amber-700 transition-all"
            >
              訂閱
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

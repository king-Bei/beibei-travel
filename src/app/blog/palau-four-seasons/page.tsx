import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ChevronLeft, Share2, Heart, ChevronRight } from "lucide-react";

export const metadata = {
  title: "帛琉四季探索號｜Vogue 也在報導的奢華潛水體驗 - 2026 最新",
  description: "帛琉四季探索號 Four Seasons Explorer 奢華潛水船體驗！Vogue 專題報導，帶你探索世界級潛水點。完整行程、費用分析與預訂攻略。",
};

const article = {
  title: "帛琉四季探索號｜Vogue 也在報導的奢華潛水體驗",
  excerpt: "帛琉四季探索號 Four Seasons Explorer 奢華潛水船體驗！Vogue 專題報導，帶你探索世界級潛水點。完整行程、費用分析與預訂攻略。",
  category: "特殊體驗",
  image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=800&fit=crop",
  date: "2026-03-19",
  readTime: "8 分鐘",
  tags: ["帛琉", "四季探索號", "潛水船", "奢華潛水", "Vogue"],
  author: {
    name: "貝貝",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
  }
};

const relatedArticles = [
  {
    slug: "palau-diving",
    title: "帛琉潛水全攻略｜與鯊魚共舞的夢幻體驗",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop"
  },
  {
    slug: "maldives-2026",
    title: "馬爾地夫全攻略｜2026 最新選島指南與預算分析",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&h=400&fit=crop"
  }
];

export default function Page() {
  return (
    <div className="min-h-screen bg-luxury-black text-luxury-cream">
      {/* Hero Image */}
      <div className="relative h-[50vh] md:h-[60vh]">
        <Image
          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&h=1080&fit=crop"
          alt="帛琉四季探索號"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/30 to-transparent"></div>
      </div>

      {/* Content */}
      <section className="py-16 px-6 -mt-32 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-luxury-muted hover:text-luxury-gold mb-8 transition-colors"
          >
            <ChevronLeft size={20} /> 返回文章列表
          </Link>
          
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-3 py-1 border border-luxury-gold/30 text-luxury-gold text-xs uppercase tracking-widest">
              {article.category}
            </span>
            <span className="text-luxury-muted text-sm flex items-center gap-1">
              <Calendar size={14} /> {article.date}
            </span>
            <span className="text-luxury-muted text-sm flex items-center gap-1">
              <Clock size={14} /> {article.readTime}
            </span>
          </div>

          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl leading-tight mb-8">
            {article.title}
          </h1>

          <p className="text-xl text-luxury-muted leading-relaxed mb-12">
            {article.excerpt}
          </p>

          {/* Author */}
          <div className="flex items-center gap-4 mb-12">
            <Image
              src={article.author.avatar}
              alt={article.author.name}
              width={48}
              height={48}
              className="rounded-full"
            />
            <div>
              <p className="font-medium">{article.author.name}</p>
              <p className="text-sm text-luxury-muted">旅行玩家</p>
            </div>
          </div>

          {/* Article Content */}
          <div className="bg-luxury-dark border border-white/10 rounded-sm p-8 md:p-12">
            {/* 目錄 */}
            <div className="mb-12 p-6 bg-luxury-black/50 rounded-lg border border-white/5">
              <h2 className="text-lg font-bold mb-4 text-luxury-gold">文章目錄</h2>
              <ul className="space-y-2 text-luxury-muted">
                <li><a href="#vogue" className="hover:text-luxury-gold">為何連 Vogue 都推薦？</a></li>
                <li><a href="#about" className="hover:text-luxury-gold">四季探索號是什麼？</a></li>
                <li><a href="#experience" className="hover:text-luxury-gold">船上體驗</a></li>
                <li><a href="#diving" className="hover:text-luxury-gold">潛水行程</a></li>
                <li><a href="#cost" className="hover:text-luxury-gold">費用分析</a></li>
                <li><a href="#booking" className="hover:text-luxury-gold">預訂攻略</a></li>
              </ul>
            </div>

            {/* Vogue 推薦 */}
            <div id="vogue" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-playfair mb-6 text-luxury-gold">為何連 Vogue 都推薦？</h2>
              <p className="text-lg leading-relaxed text-luxury-cream/80 mb-6">
                帛琉（Palau）常年被列為世界級潛水目的地，而四季探索號（Four Seasons Explorer）的出現，更是將帛琉的潛水體驗提升到另一個層次！國際時尚雜誌 Vogue 多次專題報導，稱之為「潛水玩家的終極夢想」。
              </p>
              
              <div className="relative aspect-video rounded-lg overflow-hidden my-8">
                <Image
                  src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=800&fit=crop"
                  alt="帛琉海底世界"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="bg-luxury-black p-6 rounded-lg border border-luxury-gold/30 mb-6">
                <p className="text-luxury-cream/80 italic">
                  「他會默默記錄旅程中的片段：潛水後的笑容、海面上的日落、魚群穿越的瞬間。旅客不必忙著拍照，只要專心感受海洋。晚上大家會聚在客廳，看當天剪輯完成的影片。那種溫度，比任何社群媒體上的按讚都真實。」— Vogue Taiwan
                </p>
              </div>
            </div>

            {/* 四季探索號介紹 */}
            <div id="about" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-playfair mb-6 text-luxury-gold">四季探索號是什麼？</h2>
              <p className="text-lg leading-relaxed text-luxury-cream/80 mb-6">
                四季探索號是 Four Seasons 酒店集團旗下的奢華潛水船，專為追求極致潛水體驗的旅客設計。這不是一般的潛水行程，而是一種結合探險、奢華與探索的完整體驗。
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-luxury-black p-6 rounded-lg border border-white/5">
                  <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop"
                      alt="船上設施"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-3">奢華住宿</h3>
                  <p className="text-luxury-muted">精緻船艙設計，融合帛琉當地藝術與現代舒適</p>
                </div>
                <div className="bg-luxury-black p-6 rounded-lg border border-white/5">
                  <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&h=600&fit=crop"
                      alt="餐飲服務"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-3">米其林級餐飲</h3>
                  <p className="text-luxury-muted">每日新鮮食材，結合國際與當地料理精髓</p>
                </div>
              </div>
            </div>

            {/* 船上體驗 */}
            <div id="experience" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-playfair mb-6 text-luxury-gold">船上體驗</h2>
              <p className="text-lg leading-relaxed text-luxury-cream/80 mb-6">
                在四季探索號上，每一天都是不一樣的冒險。從清晨的日出潛水到夜晚的星空觀測，每一個時刻都令人難忘。
              </p>

              <div className="relative aspect-video rounded-lg overflow-hidden my-8">
                <Image
                  src="https://images.unsplash.com/photo-1591025207163-942350e47db2?w=1200&h=800&fit=crop"
                  alt="帛琉潛水"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-4 my-8">
                <div className="flex items-start gap-4 p-4 bg-luxury-black rounded-lg border border-white/5">
                  <div className="w-8 h-8 bg-luxury-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-luxury-black font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">日出潛水</h3>
                    <p className="text-luxury-muted text-sm">在第一道陽光灑入海中時下水，與剛甦醒的海洋生物相遇</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-luxury-black rounded-lg border border-white/5">
                  <div className="w-8 h-8 bg-luxury-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-luxury-black font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">專業導潛</h3>
                    <p className="text-luxury-muted text-sm">經驗豐富的導潛員帶領，確保安全與最佳觀賞體驗</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-luxury-black rounded-lg border border-white/5">
                  <div className="w-8 h-8 bg-luxury-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-luxury-black font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">每日影片剪輯</h3>
                    <p className="text-luxury-muted text-sm">專業團隊剪輯當天影片，晚上與全船旅客共同欣賞</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-luxury-black rounded-lg border border-white/5">
                  <div className="w-8 h-8 bg-luxury-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-luxury-black font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">星空觀測</h3>
                    <p className="text-luxury-muted text-sm">帛琉遠離光害，是觀賞銀河的絕佳地點</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 潛水行程 */}
            <div id="diving" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-playfair mb-6 text-luxury-gold">潛水行程</h2>
              <p className="text-lg leading-relaxed text-luxury-cream/80 mb-6">
                帛琉被譽為「上帝的水族箱」，而四季探索號帶你探索最精華的潛點：
              </p>

              <div className="space-y-6 my-8">
                <div className="bg-luxury-black p-6 rounded-lg border border-white/5">
                  <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=500&fit=crop"
                      alt="藍角"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">藍角（Blue Corner）</h3>
                  <p className="text-luxury-muted">帛琉最具代表性的潛點，強勁海流帶來豐富魚群，幾乎每次都能看到鯊魚</p>
                </div>

                <div className="bg-luxury-black p-6 rounded-lg border border-white/5">
                  <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=500&fit=crop"
                      alt="水母湖"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">水母湖（Jellyfish Lake）</h3>
                  <p className="text-luxury-muted">數以萬計的無毒黃金水母，浮潛就能體驗夢幻海底世界</p>
                </div>

                <div className="bg-luxury-black p-6 rounded-lg border border-white/5">
                  <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&h=500&fit=crop"
                      alt="大斷層"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">大斷層（Big Drop Off）</h3>
                  <p className="text-luxury-muted">世界七大潛點之一，垂直珊瑚礁牆壯觀至極</p>
                </div>
              </div>
            </div>

            {/* 費用分析 */}
            <div id="cost" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-playfair mb-6 text-luxury-gold">費用分析</h2>
              <p className="text-lg leading-relaxed text-luxury-cream/80 mb-6">
                四季探索號的費用較高，但涵蓋的服務也非常完整：
              </p>

              <div className="relative aspect-video rounded-lg overflow-hidden my-8">
                <Image
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop"
                  alt="奢華船上體驗"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="overflow-x-auto my-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-4 px-4 text-luxury-gold">項目</th>
                      <th className="text-left py-4 px-4 text-luxury-gold">內容</th>
                      <th className="text-left py-4 px-4 text-luxury-gold">價格範圍</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/5">
                      <td className="py-4 px-4">3 天 2 夜</td>
                      <td className="py-4 px-4 text-luxury-muted">5-6 支潛水</td>
                      <td className="py-4 px-4">$3,000-4,000 USD</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-4 px-4">5 天 4 夜</td>
                      <td className="py-4 px-4 text-luxury-muted">10-12 支潛水</td>
                      <td className="py-4 px-4">$5,000-7,000 USD</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4">7 天 6 夜</td>
                      <td className="py-4 px-4 text-luxury-muted">15-18 支潛水</td>
                      <td className="py-4 px-4">$7,000-10,000 USD</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-amber-900/20 border border-amber-500/30 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-2 text-amber-400">費用包含</h3>
                <ul className="text-luxury-muted space-y-1">
                  <li>船上所有餐飲（含酒精飲料）</li>
                  <li>每日潛水導潛與裝備</li>
                  <li>帛琉機場往返接送</li>
                  <li>專業攝影團隊拍攝</li>
                </ul>
              </div>
            </div>

            {/* 預訂攻略 */}
            <div id="booking" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-playfair mb-6 text-luxury-gold">預訂攻略</h2>
              
              <div className="space-y-4 my-8">
                <div className="flex items-start gap-4 p-4 bg-luxury-black rounded-lg border border-white/5">
                  <div className="w-8 h-8 bg-luxury-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-luxury-black font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">提早預訂</h3>
                    <p className="text-luxury-muted text-sm">熱門時段（4-6月）建議提早 3-6 個月預訂</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-luxury-black rounded-lg border border-white/5">
                  <div className="w-8 h-8 bg-luxury-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-luxury-black font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">選擇淡季</h3>
                    <p className="text-luxury-muted text-sm">7-10 月價格較優惠，且能見度依然絕佳</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-luxury-black rounded-lg border border-white/5">
                  <div className="w-8 h-8 bg-luxury-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-luxury-black font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">機票優惠</h3>
                    <p className="text-luxury-muted text-sm">歐洲出發有時優惠達 €672 起，可善用里程兌換</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-luxury-black rounded-lg border border-white/5">
                  <div className="w-8 h-8 bg-luxury-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-luxury-black font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">潛水經驗</h3>
                    <p className="text-luxury-muted text-sm">建議有放流潛水經驗，部分潛點需要進階潛水員資格</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 總結 */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-playfair mb-6 text-luxury-gold">總結</h2>
              <p className="text-lg leading-relaxed text-luxury-cream/80">
                帛琉四季探索號是潛水愛好者的一生必體驗！雖然費用不低，但包含的服務、體驗與回憶是完全值得的。正如 Vogue 所說：「那種溫度，比任何社群媒體上的按讚都真實。”
              </p>
              <p className="text-lg leading-relaxed text-luxury-cream/80 mt-4">
                如果你正在尋找一個與眾不同的潛水體驗，帛琉四季探索號絕對值得考慮！
              </p>
            </div>

            {/* Tags */}
            <div className="mt-16 pt-8 border-t border-white/10">
              <div className="flex flex-wrap gap-3">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 border border-white/10 text-luxury-muted text-sm hover:border-luxury-gold hover:text-luxury-gold transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="mt-12 flex items-center gap-4">
              <button className="flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-luxury-gold text-luxury-muted hover:text-luxury-gold transition-colors">
                <Heart size={18} /> 收藏
              </button>
              <button className="flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-luxury-gold text-luxury-muted hover:text-luxury-gold transition-colors">
                <Share2 size={18} /> 分享
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-20 bg-luxury-dark">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-xs uppercase tracking-[0.2em] text-luxury-gold mb-8">延伸閱讀</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {relatedArticles.map((item) => (
              <Link
                key={item.slug}
                href={`/blog/${item.slug}`}
                className="group relative aspect-[16/9] overflow-hidden rounded-sm"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-playfair text-lg mb-2 group-hover:text-luxury-gold transition-colors">
                    {item.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

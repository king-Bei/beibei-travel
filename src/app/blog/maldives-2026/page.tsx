import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ChevronLeft, Share2, Heart, ChevronRight } from "lucide-react";

export const metadata = {
  title: "馬爾地夫全攻略｜2026 最新選島指南與預算分析",
  description: "想去馬爾地夫但不知道如何選島？這篇完整攻略幫你分析各價位度假村、推薦必去島嶼，以及隱藏版省錢技巧！",
};

const article = {
  title: "馬爾地夫全攻略｜2026 最新選島指南與預算分析",
  excerpt: "想去馬爾地夫但不知道如何選島？這篇完整攻略幫你分析各價位度假村、推薦必去島嶼，以及隱藏版省錢技巧！",
  category: "景點推薦",
  image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1200&h=800&fit=crop",
  date: "2026-03-18",
  readTime: "10 分鐘",
  tags: ["馬爾地夫", "海島", "渡假村", "選島指南", "蜜月"],
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
  }
];

export default function Page() {
  return (
    <div className="min-h-screen bg-luxury-black text-luxury-cream">
      {/* Hero Image */}
      <div className="relative h-[50vh] md:h-[60vh]">
        <Image
          src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1920&h=1080&fit=crop"
          alt="馬爾地夫水上屋"
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
                <li><a href="#why-maldives" className="hover:text-luxury-gold">為什麼選擇馬爾地夫？</a></li>
                <li><a href="#budget" className="hover:text-luxury-gold">預算分析</a></li>
                <li><a href="#choose-island" className="hover:text-luxury-gold">選島技巧</a></li>
                <li><a href="#recommended" className="hover:text-luxury-gold">推薦島嶼</a></li>
                <li><a href="#save-money" className="hover:text-luxury-gold">省錢小技巧</a></li>
              </ul>
            </div>

            {/* 為什麼選擇馬爾地夫 */}
            <div id="why-maldives" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-playfair mb-6 text-luxury-gold">為什麼選擇馬爾地夫？</h2>
              <p className="text-lg leading-relaxed text-luxury-cream/80 mb-6">
                說到海島度假，馬爾地夫絕對是許多人心中的夢想清單第一名！這個由 1,000 多座珊瑚礁島嶼組成的國家，有著「印度洋上的珍珠」之稱，更是無數情侶夢寐以求的蜜月聖地。
              </p>
              
              {/* 特色圖片 */}
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&h=600&fit=crop"
                    alt="馬爾地夫潛水"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1540202404-a2f29016b523?w=800&h=600&fit=crop"
                    alt="馬爾地夫水上屋"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-luxury-black p-6 rounded-lg border border-white/5">
                  <h3 className="text-xl font-bold mb-3">世界級潛水點</h3>
                  <p className="text-luxury-muted">海水能見度達 30-50 公尺，珊瑚礁生態豐富，是潛水愛好者的天堂</p>
                </div>
                <div className="bg-luxury-black p-6 rounded-lg border border-white/5">
                  <h3 className="text-xl font-bold mb-3">水上屋體驗</h3>
                  <p className="text-luxury-muted">直接蓋在海面上的別墅，打開房門就能跳進湛藍的海水</p>
                </div>
                <div className="bg-luxury-black p-6 rounded-lg border border-white/5">
                  <h3 className="text-xl font-bold mb-3">絕美日落</h3>
                  <p className="text-luxury-muted">被譽為世界上觀看日落最美的地點之一，金黃餘暉令人難忘</p>
                </div>
                <div className="bg-luxury-black p-6 rounded-lg border border-white/5">
                  <h3 className="text-xl font-bold mb-3">與鯊魚共游</h3>
                  <p className="text-luxury-muted">運氣好還能遇到鯊魚、海龜、 manta ray 等大型海洋生物</p>
                </div>
              </div>
            </div>

            {/* 預算分析 */}
            <div id="budget" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-playfair mb-6 text-luxury-gold">預算分析</h2>
              <p className="text-lg leading-relaxed text-luxury-cream/80 mb-6">
                馬爾地夫的住宿選擇非常多元，從經濟實惠的居民島到奢華的六星級度假村都有。以下是各價位的詳細分析：
              </p>

              {/* 度假村圖片 */}
              <div className="relative aspect-video rounded-lg overflow-hidden my-8">
                <Image
                  src="https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1200&h=800&fit=crop"
                  alt="馬爾地夫度假村"
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="overflow-x-auto my-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-4 px-4 text-luxury-gold">價位</th>
                      <th className="text-left py-4 px-4 text-luxury-gold">每晚價格</th>
                      <th className="text-left py-4 px-4 text-luxury-gold">特色</th>
                      <th className="text-left py-4 px-4 text-luxury-gold">適合對象</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/5">
                      <td className="py-4 px-4"><span className="text-green-400">經濟型</span></td>
                      <td className="py-4 px-4">$150-300</td>
                      <td className="py-4 px-4 text-luxury-muted">居民島住宿、當地餐廳</td>
                      <td className="py-4 px-4 text-luxury-muted">背包客、预算有限</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-4 px-4"><span className="text-yellow-400">中價位</span></td>
                      <td className="py-4 px-4">$300-600</td>
                      <td className="py-4 px-4 text-luxury-muted">四星級度假村、含早餐</td>
                      <td className="py-4 px-4 text-luxury-muted">家庭、朋友出遊</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-4 px-4"><span className="text-purple-400">奢華型</span></td>
                      <td className="py-4 px-4">$600-1,500</td>
                      <td className="py-4 px-4 text-luxury-muted">五星級度假村、全包方案</td>
                      <td className="py-4 px-4 text-luxury-muted">蜜月、特殊場合</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4"><span className="text-amber-400">頂級奢華</span></td>
                      <td className="py-4 px-4">$1,500+</td>
                      <td className="py-4 px-4 text-luxury-muted">六星級度假村、私人水上屋</td>
                      <td className="py-4 px-4 text-luxury-muted">極致奢華體驗</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-amber-900/20 border border-amber-500/30 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-2 text-amber-400">小提醒</h3>
                <p className="text-luxury-muted">
                  以上價格為基本房價，馬爾地夫的機票另外計算。建議提早 3-6 個月預訂，可獲得更好的價格！
                </p>
              </div>
            </div>

            {/* 選島技巧 */}
            <div id="choose-island" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-playfair mb-6 text-luxury-gold">選島技巧</h2>
              <p className="text-lg leading-relaxed text-luxury-cream/80 mb-6">
                馬爾地夫有超過 100 座開放給觀光客的度假島嶼，如何選擇最適合自己的島呢？以下是我整理的 4 大考量因素：
              </p>

              {/* 島嶼圖片 */}
              <div className="relative aspect-[21/9] rounded-lg overflow-hidden my-8">
                <Image
                  src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1600&h=800&fit=crop"
                  alt="馬爾地夫島嶼"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-6 my-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-luxury-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-luxury-gold font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">看預算</h3>
                    <p className="text-luxury-muted">先決定每天願意花多少錢，再從這個範圍內篩選島嶼。記得把機票錢也算進去！</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-luxury-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-luxury-gold font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">看出行人數</h3>
                    <p className="text-luxury-muted">有些島嶼只接受成人（Adults Only），如果帶小孩的話要注意！</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-luxury-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-luxury-gold font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">看活動</h3>
                    <p className="text-luxury-muted">你是想去浮潛看魚？還是只是想放鬆發呆？不同島嶼的主題活動不同喔！</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-luxury-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-luxury-gold font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">看距離</h3>
                    <p className="text-luxury-muted">從馬列機場到島嶼的交通方式也影響價格：快艇（免費）、水上飛機（貴）</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 推薦島嶼 */}
            <div id="recommended" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-playfair mb-6 text-luxury-gold">推薦島嶼</h2>
              <p className="text-lg leading-relaxed text-luxury-cream/80 mb-6">
                根據不同需求，我精選了以下幾座島嶼推薦給大家：
              </p>

              <div className="space-y-6 my-8">
                <div className="bg-luxury-black p-6 rounded-lg border border-white/5">
                  <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&h=500&fit=crop"
                      alt="馬富施"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-bold">馬富施（Maafushi）</h3>
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">經濟實惠</span>
                  </div>
                  <p className="text-luxury-muted mb-3">居民島，浮潛絕佳，價格親民，是預算有限的首選！</p>
                  <p className="text-sm text-luxury-gold">適合：潛水愛好者、預算有限</p>
                </div>

                <div className="bg-luxury-black p-6 rounded-lg border border-white/5">
                  <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1540202404-a2f29016b523?w=800&h=500&fit=crop"
                      alt="庫拉瑪蒂"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-bold">庫拉瑪蒂（Kuramathi）</h3>
                    <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded">中價位</span>
                  </div>
                  <p className="text-luxury-muted mb-3">著名的拖尾沙灘，島嶼美不勝收，cp 值極高！</p>
                  <p className="text-sm text-luxury-gold">適合：情侶、蜜月、家庭</p>
                </div>

                <div className="bg-luxury-black p-6 rounded-lg border border-white/5">
                  <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&h=500&fit=crop"
                      alt="中央格林德"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-bold">中央格林德（Centara Grand）</h3>
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded">奢華</span>
                  </div>
                  <p className="text-luxury-muted mb-3">六星級度假村，設施頂級，服務無可挑剔</p>
                  <p className="text-sm text-luxury-gold">適合：蜜月、特殊紀念日</p>
                </div>
              </div>
            </div>

            {/* 省錢技巧 */}
            <div id="save-money" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-playfair mb-6 text-luxury-gold">省錢小技巧</h2>

              {/* 省錢攻略圖片 */}
              <div className="relative aspect-video rounded-lg overflow-hidden my-8">
                <Image
                  src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1200&h=800&fit=crop"
                  alt="馬爾地夫省錢攻略"
                  fill
                  className="object-cover opacity-50"
                />
              </div>
              
              <div className="space-y-4 my-8">
                <div className="flex items-start gap-4 p-4 bg-luxury-black rounded-lg border border-white/5">
                  <div className="w-8 h-8 bg-luxury-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-luxury-black font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">淡季前往（5-10月）</h3>
                    <p className="text-luxury-muted text-sm">雨季房價較低，有時可打到 5 折！但記得帶雨具</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-luxury-black rounded-lg border border-white/5">
                  <div className="w-8 h-8 bg-luxury-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-luxury-black font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">選擇居民島</h3>
                    <p className="text-luxury-muted text-sm">體驗當地文化，住宿和餐飲費用都比度假村低很多</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-luxury-black rounded-lg border border-white/5">
                  <div className="w-8 h-8 bg-luxury-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-luxury-black font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">提前預訂</h3>
                    <p className="text-luxury-muted text-sm">提早 3-6 個月預訂，通常有早鳥優惠</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-luxury-black rounded-lg border border-white/5">
                  <div className="w-8 h-8 bg-luxury-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-luxury-black font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">善用航空公司里程</h3>
                    <p className="text-luxury-muted text-sm">國泰、馬航、新航都有飛馬列的航班，用里程兌換機票超划算！</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 總結 */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-playfair mb-6 text-luxury-gold">總結</h2>
              <p className="text-lg leading-relaxed text-luxury-cream/80">
                馬爾地夫確實是個一生必去的夢幻目的地！無論你是預算有限的背包客，還是想要奢華享受的蜜月新人，這裡都有適合你的選擇。希望這篇選島攻略能幫助你找到心儀的島嶼，開始規劃你的馬爾地夫之旅！
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

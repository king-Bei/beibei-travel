import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, Share2, Heart, ChevronLeft, Tag } from "lucide-react";

export const metadata = {
  title: "濟州島自由行｜一人預算5000元的玩轉攻略 | BEIBEI TRAVEL",
  description: "濟州島是省錢旅行的首選！完整交通攻略、免費景點推薦，以及如何用少少預算玩到翻。",
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen bg-luxury-black text-luxury-cream">
      <div className="relative h-[60vh]">
        <Image
          src="https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=1920&h=1080&fit=crop"
          alt="濟州島"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/40 to-transparent"></div>
        
        <nav className="absolute top-0 left-0 right-0 z-50 bg-luxury-black/50 backdrop-blur-md border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="font-playfair text-2xl font-bold tracking-wider">
              <span className="text-luxury-gold">B</span>EIBEI
            </Link>
            <Link href="/blog" className="btn-luxury text-xs">Back</Link>
          </div>
        </nav>
      </div>

      <section className="py-16 px-6 -mt-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 text-luxury-muted hover:text-luxury-gold mb-8 transition-colors">
            <ChevronLeft size={20} /> 返回文章列表
          </Link>
          
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-3 py-1 border border-luxury-gold/30 text-luxury-gold text-xs uppercase tracking-widest">旅遊攻略</span>
            <span className="text-luxury-muted text-sm flex items-center gap-1"><Calendar size={14} /> 2026-02-20</span>
            <span className="text-luxury-muted text-sm flex items-center gap-1"><Clock size={14} /> 9 分鐘</span>
          </div>

          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl leading-tight mb-8">
            濟州島自由行｜一人預算 5000 元的玩轉攻略
          </h1>

          <p className="text-xl text-luxury-muted leading-relaxed mb-12">
            濟州島是省錢旅行的首選！完整交通攻略、免費景點推薦，以及如何用少少預算玩到翻
          </p>

          <article className="bg-luxury-dark border border-white/10 rounded-sm p-8 md:p-12">
            <section className="mb-12">
              <h2 className="font-playfair text-2xl md:text-3xl mb-6 text-luxury-gold">為何選擇濟州島？</h2>
              <p className="text-lg leading-loose text-luxury-cream/80 mb-6">
                濟州島是韓國最大的島嶼，也是最適合預算有限旅人的目的地！這裡有免費的自然景觀、便利的公共交通、以及物美價廉的美食。一個人 5000 元就能玩 5 天 4 夜！
              </p>
              <div className="grid md:grid-cols-2 gap-4 my-8">
                <div className="bg-luxury-black p-6 rounded-sm">
                  <h3 className="font-bold mb-2">✈️ 機票便宜</h3>
                  <p className="text-luxury-muted text-sm">台北直飛僅需 2-3 小時，廉航來回含稅約 3000 元</p>
                </div>
                <div className="bg-luxury-black p-6 rounded-sm">
                  <h3 className="font-bold mb-2">🚌 交通便利</h3>
                  <p className="text-luxury-muted text-sm">公車系統發達，幾乎所有景點都可到達</p>
                </div>
                <div className="bg-luxury-black p-6 rounded-sm">
                  <h3 className="font-bold mb-2">🏖️ 免費景點多</h3>
                  <p className="text-luxury-muted text-sm">海灘、火山、森林全部免費參觀</p>
                </div>
                <div className="bg-luxury-black p-6 rounded-sm">
                  <h3 className="font-bold mb-2">🍖 美食實惠</h3>
                  <p className="text-luxury-muted text-sm">烤肉、海鮮、街头小吃應有盡有</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-playfair text-2xl md:text-3xl mb-6 text-luxury-gold">預算分配（5天4夜）</h2>
              <div className="overflow-x-auto my-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-4 px-4">項目</th>
                      <th className="text-left py-4 px-4">預算</th>
                      <th className="text-left py-4 px-4">說明</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/5">
                      <td className="py-4 px-4">機票</td>
                      <td className="py-4 px-4 text-luxury-gold">¥2500</td>
                      <td className="py-4 px-4 text-luxury-muted">廉航來回</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-4 px-4">住宿</td>
                      <td className="py-4 px-4 text-luxury-gold">¥1200</td>
                      <td className="py-4 px-4 text-luxury-muted">青年旅舍 4 晚</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-4 px-4">交通費</td>
                      <td className="py-4 px-4 text-luxury-gold">¥400</td>
                      <td className="py-4 px-4 text-luxury-muted">公車+計程車</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-4 px-4">餐費</td>
                      <td className="py-4 px-4 text-luxury-gold">¥600</td>
                      <td className="py-4 px-4 text-luxury-muted">路邊小吃為主</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-4 px-4">門票</td>
                      <td className="py-4 px-4 text-luxury-gold">¥200</td>
                      <td className="py-4 px-4 text-luxury-muted">少數付費景點</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-bold">合計</td>
                      <td className="py-4 px-4 text-luxury-gold font-bold">¥4900</td>
                      <td className="py-4 px-4 text-luxury-muted">綽綽有餘！</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-playfair text-2xl md:text-3xl mb-6 text-luxury-gold">交通攻略</h2>
              <div className="space-y-4 text-luxury-cream/80">
                <p className="text-lg">濟州島交通主要靠公車，成本最低但需要時間熟悉路線。</p>
                
                <div className="bg-luxury-black p-6 rounded-sm border border-white/10">
                  <h3 className="font-bold mb-3">🚌 公車攻略</h3>
                  <ul className="space-y-2 text-luxury-muted">
                    <li>• 機場601/502直達市區，票價約 ₩4,500</li>
                    <li>• 市區公車單程 ₩1,400，轉乘免費</li>
                    <li>• 建議購買 T-Money 卡，省去找零麻煩</li>
                    <li>• 安裝 APP「Subway Korea」查詢公車時間</li>
                  </ul>
                </div>

                <div className="bg-luxury-black p-6 rounded-sm border border-white/10">
                  <h3 className="font-bold mb-3">🚕 計程車</h3>
                  <ul className="space-y-2 text-luxury-muted">
                    <li>• 短程約 ₩3,000-5,000</li>
                    <li>• 機場到市區約 ₩15,000</li>
                    <li>• 多人分攤很划算</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-playfair text-2xl md:text-3xl mb-6 text-luxury-gold">免費景點推薦</h2>
              <p className="text-lg leading-loose text-luxury-cream/80 mb-6">
                濟州島最大的好處就是自然景觀幾乎全部免費！
              </p>
              <div className="space-y-4">
                <div className="bg-luxury-black p-6 rounded-sm border border-white/10">
                  <h3 className="font-playfair text-xl mb-2">🌋 城山日出峰</h3>
                  <p className="text-luxury-muted">世界自然遺產，登頂看日出超浪漫！免費參觀</p>
                </div>
                <div className="bg-luxury-black p-6 rounded-sm border border-white/10">
                  <h3 className="font-playfair text-xl mb-2">🌊 月亮海岸</h3>
                  <p className="text-luxury-muted">壯觀的黑色玄武岩海岸，拍照超級出片！</p>
                </div>
                <div className="bg-luxury-black p-6 rounded-sm border border-white/10">
                  <h3 className="font-playfair text-xl mb-2">🌲 森林小火道</h3>
                  <p className="text-luxury-muted">漫步在茂密的森林中，享受芬多精！</p>
                </div>
                <div className="bg-luxury-black p-6 rounded-sm border border-white/10">
                  <h3 className="font-playfair text-xl mb-2">🏖️ 中文海水浴場</h3>
                  <p className="text-luxury-muted">濟州島最美的海灘之一，水清沙白！</p>
                </div>
                <div className="bg-luxury-black p-6 rounded-sm border border-white/10">
                  <h3 className="font-playfair text-xl mb-2">🍊 橘子農場</h3>
                  <p className="text-luxury-muted">免費參觀的橘子農場，可以體驗採摘！</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-playfair text-2xl md:text-3xl mb-6 text-luxury-gold">一天行程範例</h2>
              <div className="bg-luxury-black p-6 rounded-sm border border-white/10">
                <div className="space-y-4 text-luxury-cream/80">
                  <div className="flex gap-4">
                    <span className="text-luxury-gold font-bold">08:00</span>
                    <div>
                      <p><strong>早餐</strong> - 便利商店紫菜包飯 ₩2,000</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-luxury-gold font-bold">09:00</span>
                    <div>
                      <p><strong>城山日出峰</strong> - 免費，爬山3小時</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-luxury-gold font-bold">13:00</span>
                    <div>
                      <p><strong>午餐</strong> - 海鮮拉麵 ₩6,000</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-luxury-gold font-bold">14:30</span>
                    <div>
                      <p><strong>月亮海岸</strong> - 免費拍照</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-luxury-gold font-bold">18:00</span>
                    <div>
                      <p><strong>晚餐</strong> - 黑豬肉烤肉 ₩12,000</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-luxury-gold font-bold">20:00</span>
                    <div>
                      <p><strong>逛街</strong> - 東門市場夜市</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-white/10 mt-4">
                    <p className="text-luxury-gold font-bold">今日總花費：約 ₩20,000（約 NT$500）</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mt-12 pt-8 border-t border-white/10">
              <div className="bg-gradient-to-r from-luxury-gold/10 to-transparent p-8 rounded-sm text-center">
                <h3 className="font-playfair text-2xl mb-4">省錢玩轉濟州島！</h3>
                <p className="text-luxury-muted mb-6">5000元也能玩得很充實</p>
                <Link href="/blog" className="btn-luxury-solid inline-block">
                  探索更多文章
                </Link>
              </div>
            </section>
          </article>

          <div className="mt-12 flex flex-wrap gap-3">
            {["濟州島", "自由行", "省錢", "韓國", "交通"].map((tag) => (
              <span key={tag} className="px-4 py-2 border border-white/10 text-luxury-muted text-sm hover:border-luxury-gold hover:text-luxury-gold transition-colors cursor-pointer flex items-center gap-2">
                <Tag size={12} /> {tag}
              </span>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-4">
            <button className="flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-luxury-gold text-luxury-muted hover:text-luxury-gold transition-colors">
              <Heart size={18} /> 收藏
            </button>
            <button className="flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-luxury-gold text-luxury-muted hover:text-luxury-gold transition-colors">
              <Share2 size={18} /> 分享
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

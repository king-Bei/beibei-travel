import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, Share2, Heart, ChevronLeft, Tag } from "lucide-react";

export const metadata = {
  title: "東京美食地圖｜10間在地人推薦的隱藏版餐廳 | BEIBEI TRAVEL",
  description: "不再只有國際通！探索在地人吃的東京料理，從拉麵到壽司，這些美食餐廳你一定要知道。",
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen bg-luxury-black text-luxury-cream">
      <div className="relative h-[60vh]">
        <Image
          src="https://images.unsplash.com/photo-1580821810645-11a8fd7c9f83?w=1920&h=1080&fit=crop"
          alt="東京美食"
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
            <span className="px-3 py-1 border border-luxury-gold/30 text-luxury-gold text-xs uppercase tracking-widest">美食探索</span>
            <span className="text-luxury-muted text-sm flex items-center gap-1"><Calendar size={14} /> 2026-03-05</span>
            <span className="text-luxury-muted text-sm flex items-center gap-1"><Clock size={14} /> 5 分鐘</span>
          </div>

          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl leading-tight mb-8">
            東京美食地圖｜10間在地人推薦的隱藏版餐廳
          </h1>

          <p className="text-xl text-luxury-muted leading-relaxed mb-12">
            打破只有國際通的迷思！這次帶你探索在地人真正會去的東京巷弄美食
          </p>

          <article className="bg-luxury-dark border border-white/10 rounded-sm p-8 md:p-12">
            <section className="mb-12">
              <h2 className="font-playfair text-2xl md:text-3xl mb-6 text-luxury-gold">打破國際通迷思</h2>
              <p className="text-lg leading-loose text-luxury-cream/80 mb-6">
                大多數遊客去東京只知道去新宿、池袋、澀谷的商業區覓食，但其實真正的美食隱藏在巷弄裡！這次整理了10間在地人推薦的隱藏版餐廳，保證讓你吃到最道地的東京味道。
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-playfair text-2xl md:text-3xl mb-6 text-luxury-gold">10間隱藏版餐廳推薦</h2>
              
              <div className="space-y-8">
                <div className="bg-luxury-black p-6 rounded-sm border border-white/10">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-playfair text-xl">1. 淺草巷弄的米其林拉麵</h3>
                    <span className="px-2 py-1 bg-luxury-gold/20 text-luxury-gold text-xs">¥1000-1500</span>
                  </div>
                  <p className="text-luxury-muted">隱藏在淺草寺後方巷子，連續多年米其林推薦，豚骨魚介湯頭超濃郁</p>
                </div>

                <div className="bg-luxury-black p-6 rounded-sm border border-white/10">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-playfair text-xl">2. 下北澤的昭和風咖哩</h3>
                    <span className="px-2 py-1 bg-luxury-gold/20 text-luxury-gold text-xs">¥800-1200</span>
                  </div>
                  <p className="text-luxury-muted">營業超過50年的老店，咖哩濃郁順滑，配上半熟蛋簡直絕配</p>
                </div>

                <div className="bg-luxury-black p-6 rounded-sm border border-white/10">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-playfair text-xl">3. 神樂坂的隱密法式餐廳</h3>
                    <span className="px-2 py-1 bg-luxury-gold/20 text-luxury-gold text-xs">¥3000-5000</span>
                  </div>
                  <p className="text-luxury-muted">米其林一星法餐，主廚是法國人開的，價格卻意外親民</p>
                </div>

                <div className="bg-luxury-black p-6 rounded-sm border border-white/10">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-playfair text-xl">4. 築地市場的隱藏壽司店</h3>
                    <span className="px-2 py-1 bg-luxury-gold/20 text-luxury-gold text-xs">¥2000-4000</span>
                  </div>
                  <p className="text-luxury-muted">不是觀光客那條街的壽司店，而是在地魚商會去的隱密小店</p>
                </div>

                <div className="bg-luxury-black p-6 rounded-sm border border-white/10">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-playfair text-xl">5. 吉祥寺的元祖炸牛排</h3>
                    <span className="px-2 py-1 bg-luxury-gold/20 text-luxury-gold text-xs">¥1500-2500</span>
                  </div>
                  <p className="text-luxury-muted">現炸的薄片牛肉，外酥內嫩，配上山藥泥和白飯超好吃</p>
                </div>

                <div className="bg-luxury-black p-6 rounded-sm border border-white/10">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-playfair text-xl">6. 代官山的時尚咖啡廳</h3>
                    <span className="px-2 py-1 bg-luxury-gold/20 text-luxury-gold text-xs">¥600-1200</span>
                  </div>
                  <p className="text-luxury-muted">結合藝術與咖啡的網紅店，主打手沖單品咖啡和手作甜點</p>
                </div>

                <div className="bg-luxury-black p-6 rounded-sm border border-white/10">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-playfair text-xl">7. 月島的文字燒老店</h3>
                    <span className="px-2 py-1 bg-luxury-gold/20 text-luxury-gold text-xs">¥1500-2500</span>
                  </div>
                  <p className="text-luxury-muted">月島文字燒發源地，60年老店，醬汁口味超道地</p>
                </div>

                <div className="bg-luxury-black p-6 rounded-sm border border-white/10">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-playfair text-xl">8. 巢鴨的平價天婦羅</h3>
                    <span className="px-2 py-1 bg-luxury-gold/20 text-luxury-gold text-xs">¥800-1500</span>
                  </div>
                  <p className="text-luxury-muted">被稱為「巢鴨的迪斯可」的天婦羅定食，外酥內軟，CP值超高</p>
                </div>

                <div className="bg-luxury-black p-6 rounded-sm border border-white/10">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-playfair text-xl">9. 三軒茶屋的創作料理</h3>
                    <span className="px-2 py-1 bg-luxury-gold/20 text-luxury-gold text-xs">¥2000-3500</span>
                  </div>
                  <p className="text-luxury-muted">年輕主廚的創意料理，結合日本食材與西式烹調，驚喜連連</p>
                </div>

                <div className="bg-luxury-black p-6 rounded-sm border border-white/10">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-playfair text-xl">10. 谷中的懷舊甜點店</h3>
                    <span className="px-2 py-1 bg-luxury-gold/20 text-luxury-gold text-xs">¥500-1000</span>
                  </div>
                  <p className="text-luxury-muted">日式古民家改建的甜點店，抹茶甜點和和果子超正統</p>
                </div>
              </div>
            </section>

            <section className="mt-12 pt-8 border-t border-white/10">
              <div className="bg-gradient-to-r from-luxury-gold/10 to-transparent p-8 rounded-sm text-center">
                <h3 className="font-playfair text-2xl mb-4">吃遍東京！</h3>
                <p className="text-luxury-muted mb-6">東京的美食遠比你想的更豐富</p>
                <Link href="/blog" className="btn-luxury-solid inline-block">
                  探索更多文章
                </Link>
              </div>
            </section>
          </article>

          <div className="mt-12 flex flex-wrap gap-3">
            {["東京美食", "東京餐廳", "淺草", "築地", "隱藏版"].map((tag) => (
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

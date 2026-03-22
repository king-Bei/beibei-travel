import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ChevronLeft, Share2, Heart } from "lucide-react";

export const metadata = {
  title: "【貝貝的大堡礁潛水初體驗】人生最震撼的海底世界",
  description: "貝貝的澳洲大堡礁潛水初體驗！一生必去的海底奇蹟，見證世界最大珊瑚礁群的震撼。從台北出發、潛水攻略、心得分享。",
};

const article = {
  title: "【貝貝的大堡礁潛水初體驗】人生最震撼的海底世界",
  excerpt: "一生必去的海底奇蹟！貝貝帶你見證世界最大珊瑚礁群的震撼，澳洲大堡礁潛水初體驗",
  category: "潛水體驗",
  image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=800&fit=crop",
  date: "2026-03-18",
  readTime: "8 分鐘",
  tags: ["大堡礁", "潛水", "凱恩斯", "澳洲潛水", "浮潛"],
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
          alt="大堡礁潛水"
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
              <p className="text-luxury-muted text-sm">熱愛探索世界的旅遊玩家</p>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="font-playfair text-2xl md:text-3xl mb-6 text-luxury-gold">那一刻，我才知道什麼叫「震撼」</h2>
              <p className="text-luxury-muted leading-relaxed mb-4">
                說到大堡礁，很多人會說「很漂亮」、「一定要去」。
              </p>
              <p className="text-luxury-muted leading-relaxed mb-4">
                但當我真的潛入水中，被數以千計的魚群包圍，看到巨型珊瑚礁的那一刻——我整個人都懵了。
              </p>
              <p className="text-luxury-muted leading-relaxed mb-4">
                眼淚不自覺地流下來（但是在水裡，所以也分不清是海水還是淚水）。
              </p>
              <p className="text-luxury-muted leading-relaxed">
                這就是大堡礁的魅力。它不是「漂亮」兩個字可以形容的。
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-playfair text-2xl md:text-3xl mb-6 text-luxury-gold">大堡礁在哪裡？</h2>
              <p className="text-luxury-muted leading-relaxed mb-4">
                大堡礁（Great Barrier Reef）位於澳洲東北部，橫跨<b>2600公里</b>，是世界上最大的珊瑚礁群，也是聯合國教科文組織認定的世界遺產。
              </p>
              <p className="text-luxury-muted leading-relaxed">
                從台灣出發，主要前往<b>凱恩斯（Cairns）</b>或<b>聖靈群島（Whitsunday Islands）</b>兩個門戶。
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-playfair text-2xl md:text-3xl mb-6 text-luxury-gold">從台灣到大堡礁</h2>
              <p className="text-luxury-muted leading-relaxed mb-4">
                我是從台北出發的，以下是主要選擇：
              </p>
              
              <h3 className="font-playfair text-xl mb-4 text-luxury-gold/80">航空公司</h3>
              <ul className="list-disc pl-6 text-luxury-muted space-y-2 mb-6">
                <li><b>長榮航空 (EVA Air)</b> - 台北直飛凱恩斯，或經香港轉機，約9-10小時</li>
                <li><b>國泰航空</b> - 經香港轉機，約10-12小時</li>
                <li><b>澳洲航空</b> - 經雪梨轉機，約12-14小時</li>
                <li><b>星宇航空</b> - 經雪梨轉機，約12小時</li>
              </ul>

              <div className="bg-luxury-dark border border-luxury-gold/20 p-6 rounded-lg">
                <h4 className="font-playfair text-lg mb-2 text-luxury-gold">💡 貝貝的小建議</h4>
                <p className="text-luxury-muted italic">
                  「我推薦早上班機，下午到凱恩斯，這樣第二天可以一大早就出海潛水！早上水質最好，魚群最活躍。」
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-playfair text-2xl md:text-3xl mb-6 text-luxury-gold">潛水初體驗：浮潛 vs 深潛</h2>
              <p className="text-luxury-muted leading-relaxed mb-4">
                很多人問我：第一次去大堡礁，應該浮潛還是深潛？
              </p>
              
              <h3 className="font-playfair text-xl mb-4 text-luxury-gold/80">浮潛（Snorkeling）</h3>
              <ul className="list-disc pl-6 text-luxury-muted space-y-2 mb-6">
                <li>✅ 不需要證照</li>
                <li>✅ 會游泳不是必須</li>
                <li>✅ 費用較便宜（約AUD 100-200）</li>
                <li>✅ 可以看到大部分的珊瑚和魚群</li>
                <li>❌ 只能看淺層景色</li>
              </ul>

              <h3 className="font-playfair text-xl mb-4 text-luxury-gold/80">深潛（Scuba Diving）</h3>
              <ul className="list-disc pl-6 text-luxury-muted space-y-2 mb-6">
                <li>✅ 可以進入更深的世界</li>
                <li>✅ 看到更多大型海洋生物</li>
                <li>❌ 需要潛水執照或體驗潛水課程</li>
                <li>❌ 費用較高（約AUD 150-300）</li>
              </ul>

              <p className="text-luxury-muted leading-relaxed mb-4">
                <b>貝貝的選擇：</b>我是新手，所以第一次選擇了<b>浮潛 + 體驗深潛</b>！
              </p>
              <p className="text-luxury-muted leading-relaxed">
                上午先浮潛適應，下午教練帶我做體驗深潛，下到12米深的地方——那個瞬間，彷彿進入了另一個世界。
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-playfair text-2xl md:text-3xl mb-6 text-luxury-gold">我看到了什麼？</h2>
              <p className="text-luxury-muted leading-relaxed mb-4">
                在大堡礁的這幾天，我看到：
              </p>
              <ul className="list-disc pl-6 text-luxury-muted space-y-2">
                <li><b>五彩繽紛的珊瑚礁</b> - 紅、橙、黃、綠、藍...像是海底的彩虹</li>
                <li><b>魚風暴</b> - 數以千計的魚群，形成巨大的「魚牆」</li>
                <li><b>大海龜</b> - 優雅地游過身邊，完全不怕人</li>
                <li><b>小丑魚</b> - 住在海葵裡，超可愛！</li>
                <li><b>鯊魚</b> - 遠遠看是白鰭礁鯊，很溫順</li>
                <li><b>Manta Ray</b> - 優雅的 Manta 飄過頭頂，我整個人都軟了</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-playfair text-2xl md:text-3xl mb-6 text-luxury-gold">推薦潛水點</h2>
              
              <h3 className="font-playfair text-xl mb-4 text-luxury-gold/80">凱恩斯周邊</h3>
              <ul className="list-disc pl-6 text-luxury-muted space-y-2 mb-6">
                <li><b>Agincourt Reef</b> - 最適合新手，魚群超級多</li>
                <li><b>Moore Reef</b> - 有海上平台，可深潛可浮潛</li>
                <li><b>Fitzroy Island</b> - 離凱恩斯近一日遊超方便</li>
              </ul>

              <h3 className="font-playfair text-xl mb-4 text-luxury-gold/80">聖靈群島</h3>
              <ul className="list-disc pl-6 text-luxury-muted space-y-2">
                <li><b>Heart Reef</b> - 著名的心形礁，需搭水上飛機</li>
                <li><b>Hardy Reef</b> - 外海大堡礁景觀壯觀</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-playfair text-2xl md:text-3xl mb-6 text-luxury-gold">我的行程安排</h2>
              <p className="text-luxury-muted leading-relaxed mb-4">
                我是安排5天4夜的行程：
              </p>
              <ul className="list-disc pl-6 text-luxury-muted space-y-2 mb-4">
                <li><b>Day 1</b> - 抵達凱恩斯，下午市區逛逛</li>
                <li><b>Day 2</b> - 大堡礁浮潛一日遊</li>
                <li><b>Day 3</b> - 體驗深潛 + 庫蘭達雨林</li>
                <li><b>Day 4</b> - 聖靈群島跳島</li>
                <li><b>Day 5</b> - 返程</li>
              </ul>
              <p className="text-luxury-muted leading-relaxed">
                如果時間有限，3天2夜也夠玩到精華！
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-playfair text-2xl md:text-3xl mb-6 text-luxury-gold">費用參考</h2>
              <ul className="list-disc pl-6 text-luxury-muted space-y-2">
                <li><b>機票</b> - 約 NT$25,000-40,000</li>
                <li><b>潛水一日遊</b> - AUD 150-300</li>
                <li><b>住宿</b> - AUD 100-300/晚</li>
                <li><b>總花費</b> - 約 NT$50,000-80,000</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-playfair text-2xl md:text-3xl mb-6 text-luxury-gold">旅遊須知</h2>
              
              <h3 className="font-playfair text-xl mb-4 text-luxury-gold/80">最佳季節</h3>
              <p className="text-luxury-muted leading-relaxed mb-4">
                澳洲冬季（6-8月）最適合，天氣涼爽乾燥，海水清澈見底。但大堡礁全年都可以玩！
              </p>
              
              <h3 className="font-playfair text-xl mb-4 text-luxury-gold/80">防曬</h3>
              <p className="text-luxury-muted leading-relaxed mb-4">
                一定要用海洋友善的防曬乳！一般防曬會傷害珊瑚。
              </p>
              
              <h3 className="font-playfair text-xl mb-4 text-luxury-gold/80">保護環境</h3>
              <p className="text-luxury-muted leading-relaxed">
                不要觸摸珊瑚、不要餵魚、不要帶走任何海中物品。
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-playfair text-2xl md:text-3xl mb-6 text-luxury-gold">貝貝的真心話</h2>
              <div className="bg-luxury-dark border border-luxury-gold/20 p-6 rounded-lg">
                <p className="text-luxury-muted leading-relaxed italic mb-4">
                  「在台灣，我們很難看到這樣的海底世界。大堡礁讓我覺得，這輩子一定要再去一次！」
                </p>
                <p className="text-luxury-muted leading-relaxed italic">
                  「而且那種被魚群包圍的感覺，真的會讓人上癮。我已經在規劃下次潛水了。」
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-playfair text-2xl md:text-3xl mb-6 text-luxury-gold">常見問題（FAQ）</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-2">Q1: 台灣到大堡礁怎麼去？</h3>
                  <p className="text-luxury-muted">從台灣出發可搭長榮航空、國泰航空或澳洲航空，通常需轉機一次。台北飛凱恩斯約9-12小時。</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Q2: 大堡礁潛水需要證照嗎？</h3>
                  <p className="text-luxury-muted">浮潛不需要證照，深潛需要潛水執照。新手可以選擇體驗潛水，由教練帶領下水。</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Q3: 大堡礁最佳旅遊季節？</h3>
                  <p className="text-luxury-muted">大堡礁最佳旅遊季節是澳洲的冬季（6-8月），天氣涼爽乾燥，海水清澈。但全年都可以潛水。</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Q4: 不會游泳可以潛水嗎？</h3>
                  <p className="text-luxury-muted">可以！浮潛不需要會游泳，體驗深潛也有教練全程帶領。但建議先在淺水區適應。</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Q5: 需要提前預訂嗎？</h3>
                  <p className="text-luxury-muted">建議提前1-2週預訂，尤其是旺季（6-8月）和熱門潛水點。</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-playfair text-2xl md:text-3xl mb-6 text-luxury-gold">總結</h2>
              <p className="text-luxury-muted leading-relaxed mb-4">
                大堡礁是我目前為止最震撼的潛水體驗。雖然它距離台灣遙遠，雖然機票不便宜——但我相信，這是每個人一生一定要去一次的地方。
              </p>
              <p className="text-luxury-muted leading-relaxed mb-8">
                如果你也在考慮要不要去，我的答案是：<b>去！</b>
              </p>
              <hr className="border-white/10 mb-8" />
              <p className="text-luxury-muted">
                我是貝貝，熱愛探索世界的旅遊玩家。<br/>
                如果你喜歡這篇文章，歡迎追蹤我的部落格，看看我下一站會去哪裡！🌍
              </p>
            </section>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-white/10">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-white/5 text-luxury-muted text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Share */}
          <div className="flex items-center gap-4 mt-8">
            <button className="flex items-center gap-2 px-4 py-2 bg-luxury-gold text-luxury-black font-medium hover:bg-luxury-gold/90 transition-colors">
              <Share2 size={18} /> 分享文章
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-white/10 text-luxury-muted hover:border-luxury-gold hover:text-luxury-gold transition-colors">
              <Heart size={18} /> 收藏
            </button>
          </div>

          {/* Related Articles */}
          <section className="mt-16 pt-16 border-t border-white/10">
            <h2 className="font-playfair text-2xl mb-8">延伸閱讀</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedArticles.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group"
                >
                  <div className="relative aspect-video overflow-hidden mb-4">
                    <Image
                      src={related.image}
                      alt={related.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <h3 className="font-playfair text-lg group-hover:text-luxury-gold transition-colors">
                    {related.title}
                  </h3>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

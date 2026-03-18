import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ChevronLeft, Share2, Heart } from "lucide-react";

export const metadata = {
  title: "帛琉潛水全攻略｜與鯊魚共舞的夢幻體驗",
  description: "帛琉是潛水者的天堂！本文詳細介紹最佳潛點、水下生物觀賞季節，以及不會告訴你的省錢秘密。",
};

const article = {
  title: "帛琉潛水全攻略｜與鯊魚共舞的夢幻體驗",
  excerpt: "帛琉是潛水者的天堂！本文詳細介紹最佳潛點、水下生物觀賞季節，以及不會告訴你的省錢秘密。",
  category: "特殊體驗",
  image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=800&fit=crop",
  date: "2026-03-18",
  readTime: "8 分鐘",
  tags: ["帛琉", "潛水", "鯊魚", "水下生物", "帕勞"],
  author: {
    name: "貝貝",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
  }
};

const relatedArticles = [
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
          alt="帛琉潛水"
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
                <li><a href="#why-palau" className="hover:text-luxury-gold">為何選擇帛琉？</a></li>
                <li><a href="#dive-sites" className="hover:text-luxury-gold">最佳潛點介紹</a></li>
                <li><a href="#season" className="hover:text-luxury-gold">季節推薦</a></li>
                <li><a href="#marine-life" className="hover:text-luxury-gold">水下生物介紹</a></li>
                <li><a href="#cost" className="hover:text-luxury-gold">費用分析</a></li>
                <li><a href="#save-money" className="hover:text-luxury-gold">省錢攻略</a></li>
              </ul>
            </div>

            {/* 為何選擇帛琉 */}
            <div id="why-palau" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-playfair mb-6 text-luxury-gold">為何選擇帛琉？</h2>
              <p className="text-lg leading-relaxed text-luxury-cream/80 mb-6">
                帛琉（Palau），這個被稱作「上帝的水族箱」的地方，絕對是潛水愛好者的終極目的地！位於關島西南方約 1,000 公里的帛琉，由超過 340 座島嶼組成，海底景觀壯觀程度被譽為世界七大潛點之一。
              </p>
              
              {/* 特色圖片 */}
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop"
                    alt="帛琉鯊魚"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&h=600&fit=crop"
                    alt="帛琉海底"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-luxury-black p-6 rounded-lg border border-white/5">
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=450&fit=crop"
                      alt="與鯊魚共游"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-3">與鯊魚共游</h3>
                  <p className="text-luxury-muted">帛琉是世界上少數能穩定看到鯊魚的潛點，黑鰭礁鯊幾乎每次潛水都能遇到！</p>
                </div>
                <div className="bg-luxury-black p-6 rounded-lg border border-white/5">
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=600&h=450&fit=crop"
                      alt="繽紛珊瑚"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-3">繽紛珊瑚礁</h3>
                  <p className="text-luxury-muted">軟珊瑚、硬珊瑚種類繁多，色彩鮮豔的海底花園讓你目不暇給</p>
                </div>
                <div className="bg-luxury-black p-6 rounded-lg border border-white/5">
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1591025207163-942350e47db2?w=600&h=450&fit=crop"
                      alt="海龜"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-3">海龜保護區</h3>
                  <p className="text-luxury-muted">到處都是海龜，幸運的話還能遇到正在產卵的海龜媽媽</p>
                </div>
                <div className="bg-luxury-black p-6 rounded-lg border border-white/5">
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1551244072-5d12893278ab?w=600&h=450&fit=crop"
                      alt="潛水體驗"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-3">適合各級潛水員</h3>
                  <p className="text-luxury-muted">從初學者到進階潛水員都有適合的潛點，環境多元且安全</p>
                </div>
              </div>
            </div>

            {/* 最佳潛點 */}
            <div id="dive-sites" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-playfair mb-6 text-luxury-gold">最佳潛點介紹</h2>
              <p className="text-lg leading-relaxed text-luxury-cream/80 mb-6">
                帛琉每個潛點都有其獨特之處，以下是我最推薦的幾個必訪潛點：
              </p>

              <div className="space-y-6 my-8">
                <div className="bg-luxury-black p-6 rounded-lg border border-luxury-gold/30">
                  <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=500&fit=crop"
                      alt="藍角"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-bold">藍角（Blue Corner）</h3>
                    <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded">必訪</span>
                  </div>
                  <p className="text-luxury-muted mb-3">帛琉最具代表性的潛點！強勁的海流帶來大量魚群，黑鰭礁鯊幾乎每次都能看到。有機會看到 Eagle Ray、Manta Ray 等大型生物！</p>
                  <p className="text-sm text-luxury-gold">適合：進階潛水員（需有放流潛水經驗）</p>
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
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-bold">水母湖（Jellyfish Lake）</h3>
                  </div>
                  <p className="text-luxury-muted mb-3">帛琉最夢幻的體驗！數以萬計的無毒黃金水母在湖中悠游，彷彿置身外星世界。不用潛水證，浮潛就可以體驗！</p>
                  <p className="text-sm text-luxury-gold">適合：所有人（浮潛/自由潛水）</p>
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
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-bold">大斷層（Big Drop Off）</h3>
                  </div>
                  <p className="text-luxury-muted mb-3">世界七大潛點之一！垂直的珊瑚礁牆從 3 公尺深一路下降到 2,000 公尺，壯觀程度令人屏息。</p>
                  <p className="text-sm text-luxury-gold">適合：中階以上潛水員</p>
                </div>

                <div className="bg-luxury-black p-6 rounded-lg border border-white/5">
                  <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1591025207163-942350e47db2?w=800&h=500&fit=crop"
                      alt="魚牆"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-bold">魚牆（Fish Factory）</h3>
                  </div>
                  <p className="text-luxury-muted mb-3">滿滿的魚群像牆一樣迎面而來，各種熱帶魚、蘇眉魚、拿破崙魚，非常適合拍照！</p>
                  <p className="text-sm text-luxury-gold">適合：初學者~進階</p>
                </div>

                <div className="bg-luxury-black p-6 rounded-lg border border-white/5">
                  <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=500&fit=crop"
                      alt="烏龍水道"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-bold">烏龍水道（Ulong Channel）</h3>
                  </div>
                  <p className="text-luxury-muted mb-3">著名的鯊魚潛點，放流潛水經過水道時，兩側常有鯊魚悠游，運氣好還能看到數十隻鯊魚！</p>
                  <p className="text-sm text-luxury-gold">適合：進階潛水員</p>
                </div>
              </div>
            </div>

            {/* 季節推薦 */}
            <div id="season" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-playfair mb-6 text-luxury-gold">季節推薦</h2>
              <p className="text-lg leading-relaxed text-luxury-cream/80 mb-6">
                帛琉位於赤道附近，全年氣溫炎熱，但不同季節有不同的特色：
              </p>

              {/* 季節圖片 */}
              <div className="relative aspect-video rounded-lg overflow-hidden my-8">
                <Image
                  src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=800&fit=crop"
                  alt="帛琉海灘"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="overflow-x-auto my-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-4 px-4 text-luxury-gold">月份</th>
                      <th className="text-left py-4 px-4 text-luxury-gold">適合程度</th>
                      <th className="text-left py-4 px-4 text-luxury-gold">特色</th>
                      <th className="text-left py-4 px-4 text-luxury-gold">備註</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/5">
                      <td className="py-4 px-4">3-6月</td>
                      <td className="py-4 px-4"><span className="text-green-400">最佳季節</span></td>
                      <td className="py-4 px-4 text-luxury-muted">最佳季節，天氣穩定</td>
                      <td className="py-4 px-4 text-luxury-muted">旺季，價格較高</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-4 px-4">7-10月</td>
                      <td className="py-4 px-4"><span className="text-yellow-400">不錯</span></td>
                      <td className="py-4 px-4 text-luxury-muted">雨季，但游客較少</td>
                      <td className="py-4 px-4 text-luxury-muted">淡季，價格較低</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4">11-2月</td>
                      <td className="py-4 px-4"><span className="text-yellow-400">尚可</span></td>
                      <td className="py-4 px-4 text-luxury-muted">涼季，偶有東北季風</td>
                      <td className="py-4 px-4 text-luxury-muted">部分潛點可能關閉</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-blue-900/20 border border-blue-500/30 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-2 text-blue-400">我的建議</h3>
                <p className="text-luxury-muted">
                  如果可以話，我推薦 4-5 月前往，天氣穩定、浪小、能見度佳，而且是帛琉的賞鯊季節！
                </p>
              </div>
            </div>

            {/* 水下生物 */}
            <div id="marine-life" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-playfair mb-6 text-luxury-gold">水下生物介紹</h2>
              <p className="text-lg leading-relaxed text-luxury-cream/80 mb-6">
                帛琉的水下生物豐富程度令人驚嘆，以下是在帛琉常見的海洋生物：
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-8">
                <div className="bg-luxury-black p-4 rounded-lg border border-white/5">
                  <div className="relative aspect-square rounded-lg overflow-hidden mb-3">
                    <Image
                      src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&h=300&fit=crop"
                      alt="黑鰭礁鯊"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-bold mb-1 text-center">黑鰭礁鯊</h3>
                  <p className="text-xs text-luxury-muted text-center">幾乎每次潛水都能看到</p>
                </div>
                <div className="bg-luxury-black p-4 rounded-lg border border-white/5">
                  <div className="relative aspect-square rounded-lg overflow-hidden mb-3">
                    <Image
                      src="https://images.unsplash.com/photo-1591025207163-942350e47db2?w=300&h=300&fit=crop"
                      alt="蘇眉魚"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-bold mb-1 text-center">蘇眉魚</h3>
                  <p className="text-xs text-luxury-muted text-center">帛琉的明星魚之一</p>
                </div>
                <div className="bg-luxury-black p-4 rounded-lg border border-white/5">
                  <div className="relative aspect-square rounded-lg overflow-hidden mb-3">
                    <Image
                      src="https://images.unsplash.com/photo-1591025207163-942350e47db2?w=300&h=300&fit=crop"
                      alt="海龜"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-bold mb-1 text-center">海龜</h3>
                  <p className="text-xs text-luxury-muted text-center">到處都有</p>
                </div>
                <div className="bg-luxury-black p-4 rounded-lg border border-white/5">
                  <div className="relative aspect-square rounded-lg overflow-hidden mb-3">
                    <Image
                      src="https://images.unsplash.com/photo-1551244072-5d12893278ab?w=300&h=300&fit=crop"
                      alt="Manta Ray"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-bold mb-1 text-center">Manta Ray</h3>
                  <p className="text-xs text-luxury-muted text-center">優雅的海中巨人</p>
                </div>
                <div className="bg-luxury-black p-4 rounded-lg border border-white/5">
                  <div className="relative aspect-square rounded-lg overflow-hidden mb-3">
                    <Image
                      src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=300&h=300&fit=crop"
                      alt="Eagle Ray"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-bold mb-1 text-center">Eagle Ray</h3>
                  <p className="text-xs text-luxury-muted text-center">飛行般的泳姿</p>
                </div>
                <div className="bg-luxury-black p-4 rounded-lg border border-white/5">
                  <div className="relative aspect-square rounded-lg overflow-hidden mb-3">
                    <Image
                      src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=300&fit=crop"
                      alt="黃金水母"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-bold mb-1 text-center">黃金水母</h3>
                  <p className="text-xs text-luxury-muted text-center">水母湖限定</p>
                </div>
              </div>
            </div>

            {/* 費用分析 */}
            <div id="cost" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-playfair mb-6 text-luxury-gold">費用分析</h2>
              <p className="text-lg leading-relaxed text-luxury-cream/80 mb-6">
                帛琉的費用主要來自機票、住宿和潛水活動。以下是詳細分析：
              </p>

              <div className="space-y-4 my-8">
                <div className="bg-luxury-black p-6 rounded-lg border border-white/5">
                  <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=500&fit=crop"
                      alt="帛琉機票"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-4">機票</h3>
                  <ul className="space-y-2 text-luxury-muted">
                    <li>台北至帛琉：約 $600-900 USD（來回）</li>
                    <li>建議提前 2-3 個月預訂</li>
                    <li>華航、帛琉航空有直飛包機</li>
                  </ul>
                </div>
                <div className="bg-luxury-black p-6 rounded-lg border border-white/5">
                  <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=500&fit=crop"
                      alt="帛琉住宿"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-4">住宿</h3>
                  <ul className="space-y-2 text-luxury-muted">
                    <li>經濟型民宿：$50-100 USD/晚</li>
                    <li>中價位飯店：$100-200 USD/晚</li>
                    <li>度假村：$200-500+ USD/晚</li>
                  </ul>
                </div>
                <div className="bg-luxury-black p-6 rounded-lg border border-white/5">
                  <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=500&fit=crop"
                      alt="帛琉潛水"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-4">潛水費用</h3>
                  <ul className="space-y-2 text-luxury-muted">
                    <li>一天潛水（2-3支）：$100-150 USD</li>
                    <li>潛水套餐（3天）：$250-350 USD</li>
                    <li>夜潛：$60-80 USD/支</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 省錢攻略 */}
            <div id="save-money" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-playfair mb-6 text-luxury-gold">省錢攻略</h2>
              
              <div className="space-y-4 my-8">
                <div className="flex items-start gap-4 p-4 bg-luxury-black rounded-lg border border-white/5">
                  <div className="w-8 h-8 bg-luxury-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-luxury-black font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">機票提早預訂</h3>
                    <p className="text-luxury-muted text-sm">提前 2-3 個月預訂機票，有機會搶到優惠票價</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-luxury-black rounded-lg border border-white/5">
                  <div className="w-8 h-8 bg-luxury-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-luxury-black font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">選擇市區住宿</h3>
                    <p className="text-luxury-muted text-sm">住宿科羅爾（Koror）市區，比度假村便宜 50% 以上</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-luxury-black rounded-lg border border-white/5">
                  <div className="w-8 h-8 bg-luxury-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-luxury-black font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">購買潛水套餐</h3>
                    <p className="text-luxury-muted text-sm">一次購買多天潛水套餐，單價比單日潛水便宜 20-30%</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-luxury-black rounded-lg border border-white/5">
                  <div className="w-8 h-8 bg-luxury-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-luxury-black font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">淡季前往</h3>
                    <p className="text-luxury-muted text-sm">7-10 月是淡季，住宿和潛水都有折扣</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 總結 */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-playfair mb-6 text-luxury-gold">總結</h2>
              <p className="text-lg leading-relaxed text-luxury-cream/80">
                帛琉真的是潛水愛好者一生必去的地方！豐富的水下生態、穩定的潛水條件，讓你每次下水都有驚喜。如果你對潛水有興趣，或是想體驗與鯊魚共舞的感覺，帛琉絕對不會讓你失望！
              </p>
              <p className="text-lg leading-relaxed text-luxury-cream/80 mt-4">
                有任何問題歡迎留言問我喔！
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

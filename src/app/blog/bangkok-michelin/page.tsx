import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ChevronLeft, Share2, Heart } from "lucide-react";

export const metadata = {
  title: "曼谷米其林美食攻略｜2026 米其林星級餐廳完整指南",
  description: "曼谷米其林美食攻略！本文介紹 2026 曼谷米其林最新名單、星級餐廳推薦、米其林必比登，以及街頭米其林美食指南。",
};

const article = {
  title: "曼谷米其林美食攻略｜2026 米其林星級餐廳完整指南",
  excerpt: "曼谷米其林美食攻略！本文介紹 2026 曼谷米其林最新名單、星級餐廳推薦、米其林必比登，以及街頭米其林美食指南。",
  category: "美食探索",
  image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1200&h=800&fit=crop",
  date: "2026-03-19",
  readTime: "12 分鐘",
  tags: ["曼谷", "米其林", "泰國美食", "曼谷餐廳", "米其林指南"],
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
  },
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
          src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1920&h=1080&fit=crop"
          alt="曼谷米其林美食"
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
                <li><a href="#intro" className="hover:text-luxury-gold">曼谷米其林介紹</a></li>
                <li><a href="#3stars" className="hover:text-luxury-gold">三星級餐廳</a></li>
                <li><a href="#2stars" className="hover:text-luxury-gold">二星級餐廳</a></li>
                <li><a href="#1star" className="hover:text-luxury-gold">一星級餐廳</a></li>
                <li><a href="#bibgourmand" className="hover:text-luxury-gold">米其林必比登</a></li>
                <li><a href="#street" className="hover:text-luxury-gold">街頭米其林</a></li>
                <li><a href="#tips" className="hover:text-luxury-gold">訂位攻略</a></li>
              </ul>
            </div>

            {/* 曼谷米其林介紹 */}
            <div id="intro" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-playfair mb-6 text-luxury-gold">曼谷米其林介紹</h2>
              <p className="text-lg leading-relaxed text-luxury-cream/80 mb-6">
                曼谷是東南亞米其林餐廳最密集的城市之一！自 2017 年米其林指南登陸泰國以來，曼谷的美食版圖持續擴大。2026 年的米其林指南涵蓋了從高端星級餐廳到平價街頭美食，呈現了曼谷多元化的美食風貌。
              </p>
              
              <div className="relative aspect-video rounded-lg overflow-hidden my-8">
                <Image
                  src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1200&h=800&fit=crop"
                  alt="曼谷夜景"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="grid md:grid-cols-3 gap-6 my-8">
                <div className="bg-luxury-black p-6 rounded-lg border border-white/5 text-center">
                  <div className="text-4xl font-bold text-luxury-gold mb-2">3</div>
                  <p className="text-luxury-muted">三星級餐廳</p>
                </div>
                <div className="bg-luxury-black p-6 rounded-lg border border-white/5 text-center">
                  <div className="text-4xl font-bold text-luxury-gold mb-2">15+</div>
                  <p className="text-luxury-muted">二星級餐廳</p>
                </div>
                <div className="bg-luxury-black p-6 rounded-lg border border-white/5 text-center">
                  <div className="text-4xl font-bold text-luxury-gold mb-2">50+</div>
                  <p className="text-luxury-muted">一星級餐廳</p>
                </div>
              </div>
            </div>

            {/* 三星級餐廳 */}
            <div id="3stars" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-playfair mb-6 text-luxury-gold">三星級餐廳</h2>
              <p className="text-lg leading-relaxed text-luxury-cream/80 mb-6">
                曼谷目前有 3 間三星級餐廳，，代表了泰國料理的最高水準：
              </p>

              <div className="space-y-8 my-8">
                <div className="bg-luxury-black p-6 rounded-lg border border-amber-500/30">
                  <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=500&fit=crop"
                      alt="Gaggan"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-bold">Gaggan</h3>
                    <span className="px-2 py-1 bg-amber-500/20 text-amber-400 text-xs rounded">三星</span>
                  </div>
                  <p className="text-luxury-muted mb-3">連續多年蟬聯亞洲最佳餐廳榜首，以創新印度料理聞名。主廚 Gaggan Anand 將傳統印度料理與現代烹飪技術完美結合，創造出令人驚艷的味覺體驗。</p>
                  <p className="text-sm text-luxury-gold mb-3">地址：68/1 Soi Lang Suan, Ploenchit Road</p>
                  <p className="text-sm text-luxury-gold">人均：$250-400 USD</p>
                </div>

                <div className="bg-luxury-black p-6 rounded-lg border border-white/5">
                  <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=500&fit=crop"
                      alt="Jay Fai"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-bold">Jay Fai</h3>
                    <span className="px-2 py-1 bg-amber-500/20 text-amber-400 text-xs rounded">三星</span>
                  </div>
                  <p className="text-luxury-muted mb-3">全球唯一的米其林街頭小吃！75 歲的蘇阿姨以精湛的炒河粉技術獲得三星肯定。她戴著護目鏡在路邊炒菜的畫面成為曼谷美食的代表。</p>
                  <p className="text-sm text-luxury-gold mb-3">地址：327 Maha Chai Road, Samran Rat</p>
                  <p className="text-sm text-luxury-gold">人均：$30-50 USD</p>
                </div>

                <div className="bg-luxury-black p-6 rounded-lg border border-white/5">
                  <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=500&fit=crop"
                      alt="Le Normadie"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-bold">Le Normadie</h3>
                    <span className="px-2 py-1 bg-amber-500/20 text-amber-400 text-xs rounded">三星</span>
                  </div>
                  <p className="text-luxury-muted mb-3">位於曼谷文華東方酒店的法式料理餐廳，由名廚 Eric Ripert 領軍。精緻的法式料理與泰國食材完美融合，是曼谷最頂級的餐飲體驗之一。</p>
                  <p className="text-sm text-luxury-gold mb-3">地址：Mandarin Oriental Bangkok, Charoen Krung Road</p>
                  <p className="text-sm text-luxury-gold">人均：$200-350 USD</p>
                </div>
              </div>
            </div>

            {/* 二星級餐廳 */}
            <div id="2stars" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-playfair mb-6 text-luxury-gold">二星級餐廳</h2>
              <p className="text-lg leading-relaxed text-luxury-cream/80 mb-6">
                曼谷有 15+ 間二星級餐廳，以下是特別推薦的幾家：
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-luxury-black p-6 rounded-lg border border-white/5">
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&h=450&fit=crop"
                      alt="Sühring"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-bold">Sühring</h3>
                    <span className="px-2 py-1 bg-gray-500/20 text-gray-400 text-xs rounded">二星</span>
                  </div>
                  <p className="text-luxury-muted text-sm">德國兄弟主理的現代泰式料理，將泰國食材與德國烹飪技術結合</p>
                </div>

                <div className="bg-luxury-black p-6 rounded-lg border border-white/5">
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1544148103-0773bf10d330?w=600&h=450&fit=crop"
                      alt="Paste"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-bold">Paste</h3>
                    <span className="px-2 py-1 bg-gray-500/20 text-gray-400 text-xs rounded">二星</span>
                  </div>
                  <p className="text-luxury-muted text-sm">以泰國皇家料理為基礎的創新泰式 Fine Dining</p>
                </div>

                <div className="bg-luxury-black p-6 rounded-lg border border-white/5">
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=450&fit=crop"
                      alt="Nahm"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-bold">Nahm</h3>
                    <span className="px-2 py-1 bg-gray-500/20 text-gray-400 text-xs rounded">二星</span>
                  </div>
                  <p className="text-luxury-muted text-sm">COMO 酒店集團旗下的泰式餐廳，傳統泰南料理的極致呈現</p>
                </div>

                <div className="bg-luxury-black p-6 rounded-lg border border-white/5">
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=600&h=450&fit=crop"
                      alt="80/20"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-bold">80/20</h3>
                    <span className="px-2 py-1 bg-gray-500/20 text-gray-400 text-xs rounded">二星</span>
                  </div>
                  <p className="text-luxury-muted text-sm">新銳主廚的創意泰式料理，80% 泰國食材 + 20% 國際技術</p>
                </div>
              </div>
            </div>

            {/* 一星級餐廳 */}
            <div id="1star" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-playfair mb-6 text-luxury-gold">一星級餐廳</h2>
              <p className="text-lg leading-relaxed text-luxury-cream/80 mb-6">
                曼谷有 50+ 間一星級餐廳，涵蓋各國料理類型。以下是特別值得一試的選擇：
              </p>

              <div className="grid md:grid-cols-3 gap-4 my-8">
                <div className="bg-luxury-black p-4 rounded-lg border border-white/5">
                  <div className="relative aspect-square rounded-lg overflow-hidden mb-3">
                    <Image
                      src="https://images.unsplash.com/photo-1563245372-f21724e3856d?w=300&h=300&fit=crop"
                      alt="Jay Fai"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-sm">Canvas</h3>
                  <p className="text-xs text-luxury-muted">現代泰式料理</p>
                </div>
                <div className="bg-luxury-black p-4 rounded-lg border border-white/5">
                  <div className="relative aspect-square rounded-lg overflow-hidden mb-3">
                    <Image
                      src="https://images.unsplash.com/photo-1506354666786-959d6d497f1a?w=300&h=300&fit=crop"
                      alt="Jay Fai"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-sm">Haoma</h3>
                  <p className="text-xs text-luxury-muted">印度分子料理</p>
                </div>
                <div className="bg-luxury-black p-4 rounded-lg border border-white/5">
                  <div className="relative aspect-square rounded-lg overflow-hidden mb-3">
                    <Image
                      src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=300&h=300&fit=crop"
                      alt="Jay Fai"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-sm">Krua Apsorn</h3>
                  <p className="text-xs text-luxury-muted">傳統泰式料理</p>
                </div>
              </div>
            </div>

            {/* 米其林必比登 */}
            <div id="bibgourmand" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-playfair mb-6 text-luxury-gold">米其林必比登推薦</h2>
              <p className="text-lg leading-relaxed text-luxury-cream/80 mb-6">
                米其林必比登（Bib Gourmand）代表「物超所值」的美食，價格實惠但品質傑出。曼谷有 50+ 間必比登推薦餐廳：
              </p>

              <div className="relative aspect-video rounded-lg overflow-hidden my-8">
                <Image
                  src="https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?w=1200&h=800&fit=crop"
                  alt="曼谷街頭美食"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-4 my-8">
                <div className="bg-luxury-black p-4 rounded-lg border border-white/5">
                  <h3 className="font-bold mb-2">Raan Jay Fai</h3>
                  <p className="text-luxury-muted text-sm">米其林三星的街頭炒河粉，招牌蟹肉蛋包飯是必點</p>
                </div>
                <div className="bg-luxury-black p-4 rounded-lg border border-white/5">
                  <h3 className="font-bold mb-2">Thipsamai</h3>
                  <p className="text-luxury-muted text-sm">被譽為「全世界最好吃的 Pad Thai」，50 年老店</p>
                </div>
                <div className="bg-luxury-black p-4 rounded-lg border border-white/5">
                  <h3 className="font-bold mb-2">Jok Prince</h3>
                  <p className="text-luxury-muted text-sm">24 小時粥店，招牌蛋粥入口即化</p>
                </div>
                <div className="bg-luxury-black p-4 rounded-lg border border-white/5">
                  <h3 className="font-bold mb-2">Guay Jun Luang</h3>
                  <p className="text-luxury-muted text-sm">船麵老店，湯頭濃郁，牛肉軟嫩</p>
                </div>
                <div className="bg-luxury-black p-4 rounded-lg border border-white/5">
                  <h3 className="font-bold mb-2">Krua Apsorn</h3>
                  <p className="text-luxury-muted text-sm">唐人街的傳統泰國菜，咖哩蟹肉是招牌</p>
                </div>
              </div>
            </div>

            {/* 街頭米其林 */}
            <div id="street" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-playfair mb-6 text-luxury-gold">街頭米其林美食</h2>
              <p className="text-lg leading-relaxed text-luxury-cream/80 mb-6">
                曼谷最迷人的地方之一就是街頭美食！以下是幾間獲得米其林肯定的街頭小吃：
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-luxury-black p-6 rounded-lg border border-white/5">
                  <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1559314809-0d155014e29e?w=600&h=400&fit=crop"
                      alt="Jay Fai 炒河粉"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Jay Fai 蟹肉蛋包飯</h3>
                  <p className="text-luxury-muted text-sm">全世界唯一的米其林三星街頭小吃，75 歲蘇阿姨的招牌料理</p>
                </div>
                <div className="bg-luxury-black p-6 rounded-lg border border-white/5">
                  <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?w=600&h=400&fit=crop"
                      alt="Thipsamai Pad Thai"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Thipsamai 泰式炒河粉</h3>
                  <p className="text-luxury-muted text-sm">50 年老字號，被譽為曼谷最好吃的 Pad Thai</p>
                </div>
              </div>
            </div>

            {/* 訂位攻略 */}
            <div id="tips" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-playfair mb-6 text-luxury-gold">訂位攻略</h2>
              
              <div className="relative aspect-video rounded-lg overflow-hidden my-8">
                <Image
                  src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1200&h=800&fit=crop"
                  alt="曼谷餐廳"
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
                    <h3 className="font-bold mb-1">提前預訂</h3>
                    <p className="text-luxury-muted text-sm">星級餐廳通常需要 1-2 週前預訂，熱門餐廳如 Gaggan 甚至需要 1 個月</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-luxury-black rounded-lg border border-white/5">
                  <div className="w-8 h-8 bg-luxury-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-luxury-black font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">使用官方訂位</h3>
                    <p className="text-luxury-muted text-sm">大部分餐廳接受 Email 或官方網站訂位，建議直接聯繫餐廳</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-luxury-black rounded-lg border border-white/5">
                  <div className="w-8 h-8 bg-luxury-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-luxury-black font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">取消政策</h3>
                    <p className="text-luxury-muted text-sm">高端餐廳通常需要信用卡擔保，請務必遵守取消政策</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-luxury-black rounded-lg border border-white/5">
                  <div className="w-8 h-8 bg-luxury-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-luxury-black font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">著裝要求</h3>
                    <p className="text-luxury-muted text-sm">星級餐廳通常要求 Smart Casual，避免短褲和拖鞋</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 總結 */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-playfair mb-6 text-luxury-gold">總結</h2>
              <p className="text-lg leading-relaxed text-luxury-cream/80">
                曼谷的米其林美食版圖令人驚艷！從三星級的高端料理到路邊的街頭小吃，每一個價位都能享受到令人難忘的美食體驗。如果你計畫前往曼谷，千萬別錯過這些米其林推薦餐廳！
              </p>
              <p className="text-lg leading-relaxed text-luxury-cream/80 mt-4">
                提醒一下，熱門餐廳建議提前預訂，尤其是 Jay Fai 和 Gaggan 等人氣餐廳，祝大家曼谷美食之旅愉快！
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

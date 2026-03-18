import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowLeft, Share2, Heart, ChevronLeft } from "lucide-react";

const articlesData: Record<string, {
  title: string;
  excerpt: string;
  content: string;
  category: string;
  image: string;
  date: string;
  readTime: string;
  tags: string[];
}> = {
  "maldives-2026": {
    title: "馬爾代夫全攻略｜2026 最新選島指南與預算分析",
    excerpt: "想去馬爾代夫但不知道如何選島？這篇完整攻略幫你分析各价位度假村、推荐必去岛屿，以及隐藏版省钱技巧！",
    category: "景點",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1200&h=800&fit=crop",
    date: "2026-03-15",
    readTime: "8 分鐘",
    tags: ["馬爾代夫", "海島", "渡假村", "選島指南"],
    content: `
大家好！我是貝貝～今天要來分享馬爾代夫的完整攻略！🌴

## 為什麼選擇馬爾代夫？

說到海島度假，馬爾代夫絕對是許多人的夢想清單第一名！這裡有：
- 🥽 世界級潛水點
- 🏨 水上屋體驗
- 🌅 絕美日落
- 🤿 與鯊魚、海龜共游

## 預算分析

### 經濟型（$150-300/晚）
- 居民島住宿
- 當地餐廳
- 適合背包客

### 中價位（$300-600/晚）
- 四星級度假村
- 含早餐
- 基本水上活動

### 奢華型（$600+/晚）
- 六星級度假村
- 全包式方案
- 私人水上屋

## 選島技巧

1. **看預算**：先決定每天願意花多少錢
2. **看出行人數**：有些島只接受成人
3. **看活動**：浮潛 vs 放鬆需求不同
4. **看距離**：快艇/水上飛機/國內線

## 必去島嶼推薦

| 島嶼 | 星級 | 特色 | 適合對象 |
|------|------|------|----------|
| 马富施 | 5星 | 浮潛絕佳 | 潛水愛好者 |
| 庫拉瑪蒂 | 5星 | 拖尾沙灘 | 情侶 |
| 中央格林德 | 6星 | 奢華體驗 | 蜜月 |

## 省錢小技巧

1. **淡季前往**（5-10月）：房價較低
2. **選擇居民島**：體驗當地文化
3. **提前預訂**：早鳥優惠
4. **善用積分**：航空公司里程兌換

---

希望這篇攻略對你有幫助！如果喜歡記得按讚訂閱喔～❤️

#馬爾代夫 #海島度假 #旅行攻略
`
  },
  "palau-diving": {
    title: "帛琉潛水全攻略｜與鯊魚共舞的夢幻體驗",
    excerpt: "帛琉是潛水者的天堂！本文详细介绍最佳潜点、水下生物观赏季节，以及不會告訴你的省錢秘密。",
    category: "體驗",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=800&fit=crop",
    date: "2026-03-10",
    readTime: "6 分鐘",
    tags: ["帛琉", "潛水", "鯊魚", "水下生物"],
    content: `
帛琉！这个被称作「上帝的水族箱」的地方，绝对是潜水爱好者的终极目的地！🐠

## 為何選擇帛琉？

- 🦈 與鯊魚共游
- 🪸 繽紛珊瑚礁
- 🐢 海龜保護區
- 🌊 適合各級潛水員

## 最佳潛點

### 藍角（Blue Corner）
帛琉最具代表性的潛點，可以看到大量鯊魚！

### 水母湖
無毒黃金水母，超夢幻體驗

### 大斷層
世界七大潛點之一

## 季節推薦

| 月份 | 適合程度 | 特色 |
|------|----------|------|
| 3-6月 | ⭐⭐⭐⭐⭐ | 最佳季節 |
| 7-10月 | ⭐⭐⭐⭐ | 雨季但便宜 |
| 11-2月 | ⭐⭐⭐ | 涼季 |

## 省錢攻略

1. **機票**：提前半年預訂
2. **潛水**：選擇套裝行程
3. **住宿**：市區 hotel + 跳島

---

有任何問題歡迎留言問我喔！🤿✨

#帛琉 #潛水 #海洋探索
`
  }
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const article = articlesData[slug];

  if (!article) {
    return (
      <div className="min-h-screen bg-luxury-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-playfair text-4xl mb-4">文章不存在</h1>
          <Link href="/blog" className="text-luxury-gold hover:underline">
            返回部落格
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-luxury-black text-luxury-cream">
      {/* Hero Image */}
      <div className="relative h-[50vh] md:h-[60vh]">
        <Image
          src={article.image}
          alt={article.title}
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

          {/* Article Content */}
          <div className="bg-luxury-dark border border-white/10 rounded-sm p-8 md:p-12">
            <div className="text-lg leading-loose text-luxury-cream/80 whitespace-pre-line font-serif-tw">
              {article.content}
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
            {Object.entries(articlesData)
              .filter(([s]) => s !== slug)
              .slice(0, 2)
              .map(([s, a]) => (
                <Link
                  key={s}
                  href={`/blog/${s}`}
                  className="group relative aspect-[16/9] overflow-hidden rounded-sm"
                >
                  <Image
                    src={a.image}
                    alt={a.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-playfair text-lg mb-2 group-hover:text-luxury-gold transition-colors">
                      {a.title}
                    </h3>
                    <p className="text-luxury-muted text-sm">{a.excerpt}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}

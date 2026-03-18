import Link from "next/link";
import { Calendar, Clock, ArrowLeft, Share2, Heart } from "lucide-react";

// 模擬文章數據庫
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
    image: "🏝️",
    date: "2026-03-15",
    readTime: "8 分鐘",
    tags: ["馬爾代夫", "海島", "渡假村", "選島指南"],
    content: `
# 馬爾代夫全攻略｜2026 最新選島指南與預算分析

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
    image: "🤿",
    date: "2026-03-10",
    readTime: "6 分鐘",
    tags: ["帛琉", "潛水", "鯊魚", "水下生物"],
    content: `
# 帛琉潛水全攻略｜與鯊魚共舞的夢幻體驗

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
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black mb-4">文章不存在</h1>
          <Link href="/blog" className="text-amber-600 hover:underline">
            返回部落格
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-amber-600 mb-8 transition-colors"
          >
            <ArrowLeft size={20} /> 返回文章列表
          </Link>
          
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">
              {article.category}
            </span>
            <span className="text-slate-500 text-sm flex items-center gap-1">
              <Calendar size={14} /> {article.date}
            </span>
            <span className="text-slate-500 text-sm flex items-center gap-1">
              <Clock size={14} /> {article.readTime}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-charcoal mb-6">
            {article.title}
          </h1>

          <p className="text-xl text-slate-600 mb-8">
            {article.excerpt}
          </p>

          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all">
              <Heart size={18} className="text-rose-500" /> 收藏
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all">
              <Share2 size={18} /> 分享
            </button>
          </div>
        </div>
      </section>

      {/* 文章內容 */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">
            <div className="prose prose-lg max-w-none">
              <div className="text-xl leading-relaxed text-slate-700 whitespace-pre-line">
                {article.content}
              </div>
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t">
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 相關文章 */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-black mb-8">延伸閱讀 📚</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(articlesData)
              .filter(([s]) => s !== slug)
              .slice(0, 2)
              .map(([s, a]) => (
                <Link
                  key={s}
                  href={`/blog/${s}`}
                  className="group bg-cream rounded-2xl p-6 hover:shadow-lg transition-all"
                >
                  <span className="text-4xl mb-4 block">{a.image}</span>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-amber-600">
                    {a.title}
                  </h3>
                  <p className="text-slate-500 text-sm">{a.excerpt}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}

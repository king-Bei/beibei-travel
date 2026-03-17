import Link from "next/link";
import { MapPin, Compass, Plane, Camera, Utensils, Sunrise } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero 區域 */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-64 h-64 bg-amber-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6">
            <Plane size={16} className="text-amber-600" />
            <span className="text-sm font-medium text-slate-600">旅行玩家貝貝的旅遊日誌</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-charcoal mb-6 tracking-tight">
            用雙腳丈量世界<br/>
            <span className="text-amber-600">用文字記錄美好</span>
          </h1>
          
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            嗨！我是貝貝，一個熱愛探索世界的旅遊玩家。<br/>
            在這裡分享我的旅遊故事、景點推薦與實用攻略，<br/>
            希望我的經驗能幫助你擁有更棒的旅程！ ✨
          </p>
          
          <div className="flex items-center justify-center gap-4">
            <Link 
              href="/blog" 
              className="bg-amber-600 text-white px-8 py-4 rounded-full font-bold hover:bg-amber-700 transition-all hover:scale-105"
            >
              開始閱讀
            </Link>
            <Link 
              href="/about" 
              className="bg-white text-charcoal px-8 py-4 rounded-full font-bold border-2 border-charcoal hover:bg-charcoal hover:text-white transition-all"
            >
              認識貝貝
            </Link>
          </div>
        </div>
      </section>

      {/* 旅遊經驗 */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-black text-center mb-12">
            🌍 貝貝的旅遊足跡
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl">
              <div className="text-5xl mb-4">🏝️</div>
              <h3 className="text-2xl font-bold mb-2">亞洲海島</h3>
              <p className="text-slate-600">馬爾代夫、帛琉、沖繩、濟州島、普吉島</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl">
              <div className="text-5xl mb-4">🏰</div>
              <h3 className="text-2xl font-bold mb-2">歐洲風情</h3>
              <p className="text-slate-600">法國、義大利、瑞士、荷蘭、英國</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl">
              <div className="text-5xl mb-4">🗼</div>
              <h3 className="text-2xl font-bold mb-2">亞洲城市</h3>
              <p className="text-slate-600">東京、首爾、曼谷、新加坡、香港</p>
            </div>
          </div>
        </div>
      </section>

      {/* 部落格分類 */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-black text-center mb-12">
            📝 精選文章分類
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/blog?category=攻略" className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
              <Compass className="w-12 h-12 text-amber-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">旅遊攻略</h3>
              <p className="text-slate-600">行程規劃、機票攻略、住宿推薦</p>
            </Link>
            
            <Link href="/blog?category=景點" className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
              <MapPin className="w-12 h-12 text-amber-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">景點推薦</h3>
              <p className="text-slate-600">必遊景點、在地秘境、網紅打卡點</p>
            </Link>
            
            <Link href="/blog?category=美食" className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
              <Utensils className="w-12 h-12 text-amber-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">美食探索</h3>
              <p className="text-slate-600">當地美食、巷弄小吃、米其林餐廳</p>
            </Link>
            
            <Link href="/blog?category=攝影" className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
              <Camera className="w-12 h-12 text-amber-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">攝影技巧</h3>
              <p className="text-slate-600">拍照技巧、構圖教學、設備分享</p>
            </Link>
            
            <Link href="/blog?category=須知" className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
              <Plane className="w-12 h-12 text-amber-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">旅遊須知</h3>
              <p className="text-slate-600">簽證資訊、貨幣兌換、網路推薦</p>
            </Link>
            
            <Link href="/blog?category=體驗" className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
              <Sunrise className="w-12 h-12 text-amber-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">特殊體驗</h3>
              <p className="text-slate-600">跳傘、潛水、滑雪、熱氣球</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-charcoal text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black mb-6">
            追蹤貝貝的旅程 📸
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            按讚追蹤，獲取最新旅遊資訊與優惠！
          </p>
          <div className="flex items-center justify-center gap-4">
            <a href="#" className="bg-amber-600 px-8 py-4 rounded-full font-bold hover:bg-amber-700 transition-all">
              Instagram
            </a>
            <a href="#" className="bg-white/10 px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all">
              訂閱電子報
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

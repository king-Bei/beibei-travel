import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, Share2, Heart, ChevronLeft, Tag } from "lucide-react";

export const metadata = {
  title: "東京攝影指南｜街頭拍攝技巧與最佳取景點 | BEIBEI TRAVEL",
  description: "用相機記錄東京的美好！分享街頭攝影的構圖技巧，以及5個絕對出片的拍攝地點。",
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen bg-luxury-black text-luxury-cream">
      <div className="relative h-[60vh]">
        <Image
          src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1920&h=1080&fit=crop"
          alt="東京攝影"
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
            <span className="px-3 py-1 border border-luxury-gold/30 text-luxury-gold text-xs uppercase tracking-widest">攝影技巧</span>
            <span className="text-luxury-muted text-sm flex items-center gap-1"><Calendar size={14} /> 2026-02-28</span>
            <span className="text-luxury-muted text-sm flex items-center gap-1"><Clock size={14} /> 7 分鐘</span>
          </div>

          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl leading-tight mb-8">
            東京攝影指南｜街頭拍攝技巧與最佳取景點
          </h1>

          <p className="text-xl text-luxury-muted leading-relaxed mb-12">
            用相機記錄東京的美好！分享街頭攝影的構圖技巧，以及5個絕對出片的拍攝地點
          </p>

          <article className="bg-luxury-dark border border-white/10 rounded-sm p-8 md:p-12">
            <section className="mb-12">
              <h2 className="font-playfair text-2xl md:text-3xl mb-6 text-luxury-gold">東京是攝影天堂</h2>
              <p className="text-lg leading-loose text-luxury-cream/80 mb-6">
                東京是世界上最適合街頭攝影的城市之一。這裡有傳統與現代的完美融合，有繁忙的十字路口與寧靜的寺廟巷弄，每個角落都是絕佳的拍攝素材。
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-playfair text-2xl md:text-3xl mb-6 text-luxury-gold">街頭攝影技巧</h2>
              
              <div className="space-y-6">
                <div className="bg-luxury-black p-6 rounded-sm border border-white/10">
                  <h3 className="font-playfair text-xl mb-3 text-luxury-gold">01. 構圖技巧</h3>
                  <ul className="space-y-2 text-luxury-cream/80">
                    <li>• <strong>三分法則</strong>：將主體放在畫面的三分線上</li>
                    <li>• <strong>引導線</strong>：利用街道、鐵軌引導視線</li>
                    <li>• <strong>框架</strong>：利用門窗、拱門創造框架</li>
                    <li>• <strong>對稱</strong>：東京很多建築左右對稱，善用這個特點</li>
                  </ul>
                </div>

                <div className="bg-luxury-black p-6 rounded-sm border border-white/10">
                  <h3 className="font-playfair text-xl mb-3 text-luxury-gold">02. 光線運用</h3>
                  <ul className="space-y-2 text-luxury-cream/80">
                    <li>• <strong>黃金時段</strong>：日出後1小時、日落前1小時光線最柔和</li>
                    <li>• <strong>藍調時刻</strong>：日落後20分鐘，天空呈現夢幻藍色</li>
                    <li>• <strong>逆光拍攝</strong>：可以拍出剪影效果</li>
                    <li>• <strong>利用反射</strong>：櫥窗、水窪可以創造有趣的反射</li>
                  </ul>
                </div>

                <div className="bg-luxury-black p-6 rounded-sm border border-white/10">
                  <h3 className="font-playfair text-xl mb-3 text-luxury-gold">03. 拍攝時間</h3>
                  <ul className="space-y-2 text-luxury-cream/80">
                    <li>• <strong>清晨 5-7點</strong>：街道空曠，適合拍建築</li>
                    <li>• <strong>上午 9-11點</strong>：光線充足，人潮開始出現</li>
                    <li>• <strong>傍晚 17-19點</strong>：捕捉下班人潮與夜景</li>
                    <li>• <strong>夜晚 20-23點</strong>：霓虹燈閃耀，適合拍夜景</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-playfair text-2xl md:text-3xl mb-6 text-luxury-gold">5個絕對出片的拍攝地點</h2>
              
              <div className="space-y-6">
                <div className="bg-luxury-black p-6 rounded-sm border border-white/10">
                  <h3 className="font-playfair text-xl mb-2">1. 淺草寺雷門</h3>
                  <p className="text-luxury-muted">東京最具代表性的地標！建議清晨或傍晚拍攝，可以避開人潮。夜晚的雷門搭配灯笼超有氛圍感。</p>
                  <p className="text-luxury-muted text-sm mt-2">📍 台東區淺草 | ⏰ 建議清晨6點或夜晚</p>
                </div>

                <div className="bg-luxury-black p-6 rounded-sm border border-white/10">
                  <h3 className="font-playfair text-xl mb-2">2. 澀谷十字路口</h3>
                  <p className="text-luxury-muted">世界最繁忙的十字路口！從星巴克二樓可以拍到完整全景。建議傍晚藍調時刻拍攝，霓虹燈剛好亮起。</p>
                  <p className="text-luxury-muted text-sm mt-2">📍 澀谷區 | ⏰ 建議傍晚17:30-19:00</p>
                </div>

                <div className="bg-luxury-black p-6 rounded-sm border border-white/10">
                  <h3 className="font-playfair text-xl mb-2">3. 晴空塔</h3>
                  <p className="text-luxury-muted">可以從墨田區多個角度拍攝。推薦隅田川河畔步道，或者是押上站的空中徑道。夜景超夢幻！</p>
                  <p className="text-luxury-muted text-sm mt-2">📍 墨田區押上 | ⏰ 建議夜晚</p>
                </div>

                <div className="bg-luxury-black p-6 rounded-sm border border-white/10">
                  <h3 className="font-playfair text-xl mb-2">4. 桂離宮/哲學之道（京都）</h3>
                  <p className="text-luxury-muted">東京近郊的京都更具傳統日本風情！哲學之道春天的櫻花隧道簡直仙境，秋天也是絕美。</p>
                  <p className="text-luxury-muted text-sm mt-2">📍 京都市左京區 | ⏰ 建議清晨或平日</p>
                </div>

                <div className="bg-luxury-black p-6 rounded-sm border border-white/10">
                  <h3 className="font-playfair text-xl mb-2">5. 六本木新城展望台</h3>
                  <p className="text-luxury-muted">拍攝東京鐵塔的最佳地點！可以將東京鐵塔作為前景，背景是都市叢林。日落後的藍調時刻最浪漫。</p>
                  <p className="text-luxury-muted text-sm mt-2">📍 六本木新城 52/F | ⏰ 建議日落前30分鐘</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-playfair text-2xl md:text-3xl mb-6 text-luxury-gold">設備建議</h2>
              <div className="bg-luxury-black p-6 rounded-sm border border-white/10">
                <ul className="space-y-3 text-luxury-cream/80">
                  <li>📷 <strong>相機</strong>：Sony A7C、Canon R6、 Fuji X-T5 都非常適合街拍</li>
                  <li>🔭 <strong>鏡頭</strong>：35mm 定焦（人文視角）或 24-70mm 變焦（彈性）</li>
                  <li>📱 <strong>手機</strong>：iPhone 15 Pro、Samsung S24 Ultra 足夠日常使用</li>
                  <li>🎒 <strong>配件</strong>：備用電池、記憶卡、輕便腳架</li>
                </ul>
              </div>
            </section>

            <section className="mt-12 pt-8 border-t border-white/10">
              <div className="bg-gradient-to-r from-luxury-gold/10 to-transparent p-8 rounded-sm text-center">
                <h3 className="font-playfair text-2xl mb-4">記錄東京的美好</h3>
                <p className="text-luxury-muted mb-6">用鏡頭捕捉這座城市的每一個精彩瞬間</p>
                <Link href="/blog" className="btn-luxury-solid inline-block">
                  探索更多文章
                </Link>
              </div>
            </section>
          </article>

          <div className="mt-12 flex flex-wrap gap-3">
            {["東京攝影", "街頭攝影", "東京拍照", "淺草", "澀谷"].map((tag) => (
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

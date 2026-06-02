"use client";
import { useState, useEffect, useCallback, useRef } from "react";

// ─── SORU VERİTABANI ──────────────────────────────────────────
const QUESTIONS = [
  { id:1, topic:"Hukuk", text:"Özel güvenlik görevlisi, bir kişiyi gözaltına alma yetkisini hangi kanundan alır?", options:["5188 sayılı Özel Güvenlik Hizmetlerine Dair Kanun","2911 sayılı Toplantı ve Gösteri Yürüyüşleri Kanunu","5326 sayılı Kabahatler Kanunu","6458 sayılı Yabancılar Kanunu"], correct:0 },
  { id:2, topic:"Hukuk", text:"Özel güvenlik görevlisinin yakalama yetkisi hangi durumda doğar?", options:["Her zaman yakalama yetkisi vardır","Yalnızca silahlı görevlilerde vardır","Suçüstü halinde veya kaçan kişi durumunda","Sadece amirinin emriyle"], correct:2 },
  { id:3, topic:"Hukuk", text:"5188 sayılı Kanuna göre özel güvenlik izni kaç yıl için verilir?", options:["1 yıl","3 yıl","5 yıl","10 yıl"], correct:2 },
  { id:4, topic:"Hukuk", text:"Özel güvenlik görevlisi, meşru müdafaa hakkını hangi kanun çerçevesinde kullanır?", options:["Sadece 5188 sayılı Kanun","Türk Ceza Kanunu","İdare Hukuku","Anayasa"], correct:1 },
  { id:5, topic:"Hukuk", text:"Kimlik yenileme zorunluluğu kaç yılda bir gerçekleşir?", options:["3 yılda bir","5 yılda bir","8 yılda bir","10 yılda bir"], correct:1 },
  { id:6, topic:"Hukuk", text:"Özel güvenlik birimlerinin denetimi kime aittir?", options:["Mahkemeler","Valiliklere bağlı İl Emniyet Müdürlüğü","Belediyeler","Bakanlık doğrudan"], correct:1 },
  { id:7, topic:"Hukuk", text:"Özel güvenlik görevlisi üst araması yaparken temel kural nedir?", options:["İstediği gibi arama yapar","Aynı cinsiyetten olma zorunluluğu vardır","Her türlü arama yapılabilir","Üst arama yetkisi yoktur"], correct:1 },
  { id:8, topic:"Hukuk", text:"Hukuka aykırı yakalama yapan güvenlik görevlisi hangi suçu işler?", options:["Kişiyi hürriyetinden yoksun kılma","Görevi ihmal","Güveni kötüye kullanma","Zimmet"], correct:0 },
  { id:9, topic:"Genel Kolluk", text:"Özel güvenlik görevlisi ile polis arasındaki temel fark nedir?", options:["Özel güvenlik daha fazla yetkiye sahiptir","Özel güvenlik yalnızca belirli alanda görev yapar","Polis sadece kapalı alanlarda görev yapar","İkisi aynı yetkilere sahiptir"], correct:1 },
  { id:10, topic:"Genel Kolluk", text:"Polis gelene kadar yakalanan şüpheli nasıl muhafaza edilir?", options:["Kelepçe takılarak bağlanır","İnsan haklarına uygun şekilde nezaret altında tutulur","Kapalı bir odaya kilitlenir","Serbest bırakılır"], correct:1 },
  { id:11, topic:"Genel Kolluk", text:"Özel güvenlik görevlisi hangi hallerde silah kullanabilir?", options:["Her türlü saldırıda","Meşru müdafaa ve yasal zorunluluk hallerinde","Sadece amirinin emriyle","Sadece gece vardiyasında"], correct:1 },
  { id:12, topic:"Genel Kolluk", text:"Yasadışı emir alan güvenlik görevlisi ne yapmalıdır?", options:["Hemen uymak","Emre uymayı reddedip durumu kayıt altına almak","Sessiz kalmak","İşi bırakmak"], correct:1 },
  { id:13, topic:"Güvenlik Tedbirleri", text:"Güvenlik görevlisi nöbet sırasında hangi davranışta bulunmamalıdır?", options:["Devriye gezmek","Cep telefonu ile kişisel konuşmak","Çevreyi gözlemlemek","Şüpheli kişileri izlemek"], correct:1 },
  { id:14, topic:"Güvenlik Tedbirleri", text:"Terk edilmiş şüpheli paket bulunduğunda ilk yapılacak iş nedir?", options:["Paketi açmak","Bölgeyi tahliye edip polisi aramak","Paketi dışarıya taşımak","Görmezden gelmek"], correct:1 },
  { id:15, topic:"Güvenlik Tedbirleri", text:"CCTV kamera kayıtları en az ne kadar süre saklanmalıdır?", options:["7 gün","15 gün","30 gün","90 gün"], correct:1 },
  { id:16, topic:"Güvenlik Tedbirleri", text:"Erişim kontrol sistemi hangi ilkeye dayanır?", options:["Herkes girebilir","Tanınan herkese izin verilir","Yalnızca yetkililerin geçişine izin verilir","Güvenlik görevlisi takdirine bırakılır"], correct:2 },
  { id:17, topic:"Güvenlik Tedbirleri", text:"Biyometrik erişim kontrolü hangi veriye dayalıdır?", options:["Şifreye","Parmak izi, retina, yüz gibi fiziksel özelliklere","Karta","İsme"], correct:1 },
  { id:18, topic:"İlk Yardım", text:"Bir kişi bayıldığında ilk yapılacak iş nedir?", options:["Su içirmek","Güvenli ortam sağlayıp bilincini kontrol etmek","Silkelemek","Yüzüne su serpmek"], correct:1 },
  { id:19, topic:"İlk Yardım", text:"Temel yaşam desteğinde göğüs basısı hızı kaç/dakika olmalıdır?", options:["40-60","60-80","100-120","140-160"], correct:2 },
  { id:20, topic:"İlk Yardım", text:"Kanayan yaraya ilk yardımda hangi yöntem kullanılır?", options:["Yara açık bırakılır","Direkt baskı uygulanır","Sıcak su tutulur","Yara yeri ovulur"], correct:1 },
  { id:21, topic:"İlk Yardım", text:"Bilinçsiz bir kişi hangi pozisyona alınmalıdır?", options:["Sırt üstü düz","Kurtarma pozisyonu (yan yatış)","Oturur pozisyon","Baş aşağı"], correct:1 },
  { id:22, topic:"İlk Yardım", text:"Yanık durumunda soğutmak için en doğru yöntem hangisidir?", options:["Buz uygulamak","15-20 dakika ılık-soğuk akan su","Yağ sürmek","Kuru tutmak"], correct:1 },
  { id:23, topic:"İlk Yardım", text:"Epilepsi nöbeti geçiren kişiye ne yapılmamalıdır?", options:["Güvenli ortam sağlamak","Ağzına parmak veya nesne sokmak","Zamanı tutmak","Sakin kalmak"], correct:1 },
  { id:24, topic:"İlk Yardım", text:"Bilinç kaybı yaşayan kişide önce ne kontrol edilmelidir?", options:["Nabız","Solunum ve bilinç","Yaralanma","Kimlik"], correct:1 },
  { id:25, topic:"Yangın", text:"Yangın söndürücü kaç yılda bir test edilmelidir?", options:["3 ayda bir","6 ayda bir","Yılda bir","2 yılda bir"], correct:2 },
  { id:26, topic:"Yangın", text:"ABC kuru kimyevi toz söndürücü hangi yangın sınıfında kullanılabilir?", options:["Sadece A sınıfı","Sadece B sınıfı","A, B ve C sınıfı yangınlarda","Sadece elektrik yangınlarında"], correct:2 },
  { id:27, topic:"Yangın", text:"Yangın ihbar numarası Türkiye'de kaçtır?", options:["110","155","156","112"], correct:0 },
  { id:28, topic:"Yangın", text:"Yangın çıkması halinde ilk yapılacak iş nedir?", options:["Söndürmeye çalışmak","Tahliyeyi sağlamak ve yardım çağırmak","Bagajları almak","Asansörle inmek"], correct:1 },
  { id:29, topic:"Yangın", text:"Elektrik yangınlarında su kullanılmamasının sebebi nedir?", options:["Su pahalıdır","Su elektriği iletir ve elektrik çarpmasına yol açar","Su yanlış sınıf için kullanılır","Su etkili değildir"], correct:1 },
  { id:30, topic:"Yangın", text:"Yangın tüpü kullanımında PASS tekniğinde ilk adım nedir?", options:["Nişan almak","Halkayı çekmek","Sıkıştırmak","Süpürmek"], correct:1 },
  { id:31, topic:"Kişi Koruma", text:"VIP koruma görevlisinin birincil görevi nedir?", options:["Tehdit etmek","Müvekkili her tehlikeden önlemeli korumak","Caydırıcı görünmek","Silah taşımak"], correct:1 },
  { id:32, topic:"Kişi Koruma", text:"'Tehdit değerlendirmesi' kavramı ne anlama gelir?", options:["Güvenlik personelinin eğitimi","Olası tehlikelerin önceden analiz edilmesi","Kalabalık yönetimi","Silah bakımı"], correct:1 },
  { id:33, topic:"Silah Bilgisi", text:"Tabancada 'emniyet' mekanizmasının işlevi nedir?", options:["Hızlı çekmeyi kolaylaştırmak","Kazara ateşlenmeyi önlemek","Doğruluk sağlamak","Gürültüyü azaltmak"], correct:1 },
  { id:34, topic:"Silah Bilgisi", text:"Silah temizliğinde önce hangi adım uygulanır?", options:["Namlu temizliği","Silahın boş olduğunu kontrol etmek","Yağlama","Parça sökümü"], correct:1 },
  { id:35, topic:"Silah Bilgisi", text:"Ateşli silah kullanım sonrası raporlama ne zaman yapılır?", options:["Ertesi gün","En kısa sürede derhal","Mesai sonunda","Haftalık raporda"], correct:1 },
  { id:36, topic:"İletişim", text:"Güvenlik görevlisi iletişimde hangi tutumu benimsemelidir?", options:["Agresif ve baskıcı","Profesyonel, saygılı ve kararlı","Pasif ve çekingen","Duygusal ve anlayışlı"], correct:1 },
  { id:37, topic:"İletişim", text:"Telsiz haberleşmesinde 'Roger' ifadesi ne anlama gelir?", options:["Hayır","Mesaj anlaşıldı","Acil durum","Tekrar et"], correct:1 },
  { id:38, topic:"İletişim", text:"NATO fonetik alfabesinde 'A' harfi nasıl ifade edilir?", options:["Apple","Alpha","Anton","Arrow"], correct:1 },
  { id:39, topic:"Kalabalık Yönetimi", text:"Kalabalık kontrolünde ilk önce ne yapılmalıdır?", options:["Kalabalığa fiziksel müdahale","Durumu değerlendirip yetkilileri bilgilendirmek","Paniklemek","Kaçmak"], correct:1 },
  { id:40, topic:"Kalabalık Yönetimi", text:"Toplu etkinlikte panik anında görevlinin tutumu nasıl olmalıdır?", options:["Kaçmak","Sakin, kararlı ve yönlendirici olmak","Bağırmak","Tahliyeyi durdurmak"], correct:1 },
  { id:41, topic:"Kalabalık Yönetimi", text:"Tahliye planı hazırlanırken öncelikli olarak nelere dikkat edilir?", options:["Dekorasyon","Acil çıkış yolları ve engelli bireyler","Aydınlatma","Isıtma sistemi"], correct:1 },
  { id:42, topic:"Olay Yeri", text:"Olay yeri korumanın temel amacı nedir?", options:["Suçluyu yakalamak","Delillerin bozulmasını önlemek","Kamuoyunu bilgilendirmek","Görevli yoğunluğu sağlamak"], correct:1 },
  { id:43, topic:"Olay Yeri", text:"Olay yerine ulaşan ilk güvenlik görevlisi ne yapmalıdır?", options:["Delillere dokunmak","Alanı güvence altına alıp yetkilileri çağırmak","Fotoğraf çekmek","Tanıklarla konuşmak"], correct:1 },
  { id:44, topic:"Olay Yeri", text:"Olay yeri koruma zincirinde en kritik süreç hangisidir?", options:["Fotoğraf çekmek","Delil zincirinin bozulmadan muhafazası","Tanık ifadesi almak","Basın açıklaması yapmak"], correct:1 },
  { id:45, topic:"Temel Güvenlik", text:"Nöbet tesliminde hangi bilgi mutlaka aktarılmalıdır?", options:["Hava durumu","Önemli olaylar, şüpheli durumlar ve eksiklikler","Yemek programı","Personel listesi"], correct:1 },
  { id:46, topic:"Temel Güvenlik", text:"Gece devriyesinde en önemli güvenlik unsuru nedir?", options:["Hız","Sürekli temas ve düzensiz rota değişimi","Sabit rota","Çift kişi çalışma"], correct:1 },
  { id:47, topic:"Temel Güvenlik", text:"'Güvenlik açığı' terimi ne anlama gelir?", options:["Çalışan eksikliği","Sistemde istismar edilebilecek zayıf nokta","Kapı arızası","Vardiya sorunu"], correct:1 },
  { id:48, topic:"Temel Güvenlik", text:"'Derin savunma' güvenlik konsepti ne anlama gelir?", options:["Derin kazı yaparak depo kurmak","Birden fazla güvenlik katmanının oluşturulması","Yeraltı güvenliği","Gizli görevliler"], correct:1 },
  { id:49, topic:"Hukuk", text:"Özel güvenlik şirketi kurmak için asgari sermaye miktarı ne kadardır?", options:["50.000 TL","100.000 TL","250.000 TL","500.000 TL"], correct:1 },
  { id:50, topic:"Genel Kolluk", text:"Özel güvenlik görevlisi suç delilini ne yapmalıdır?", options:["Yok etmeli","Bizzat analiz etmeli","Dokunmadan muhafaza edip polise teslim etmeli","Saklamalı"], correct:2 },
];

const CATEGORIES = [
  { id:"silahli", label:"Silahlı Özel Güvenlik", icon:"🎯", count:20, difficulty:"Zor", time:30, color:"#f59e0b", glow:"rgba(245,158,11,0.25)", topics:["Hukuk","Silah Bilgisi","Güvenlik Tedbirleri"] },
  { id:"silahsiz", label:"Silahsız Özel Güvenlik", icon:"🛡️", count:20, difficulty:"Orta", time:25, color:"#3b82f6", glow:"rgba(59,130,246,0.25)", topics:["Hukuk","İletişim","Kalabalık Yönetimi"] },
  { id:"yenileme", label:"Yenileme Eğitimi", icon:"🔄", count:15, difficulty:"Kolay", time:20, color:"#10b981", glow:"rgba(16,185,129,0.25)", topics:["Hukuk","İlk Yardım","Yangın"] },
  { id:"genel", label:"Genel Deneme Sınavı", icon:"📋", count:25, difficulty:"Karma", time:35, color:"#8b5cf6", glow:"rgba(139,92,246,0.25)", topics:["Tüm Konular"] },
  { id:"ilkyardim", label:"İlk Yardım & Yangın", icon:"🚑", count:12, difficulty:"Orta", time:15, color:"#ef4444", glow:"rgba(239,68,68,0.25)", topics:["İlk Yardım","Yangın"] },
  { id:"hizli", label:"Hızlı Test (10 Soru)", icon:"⚡", count:10, difficulty:"Hızlı", time:10, color:"#06b6d4", glow:"rgba(6,182,212,0.25)", topics:["Rastgele"] },
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getQuestions(catId: string, count: number) {
  const cat = CATEGORIES.find(c => c.id === catId);
  if (!cat) return shuffle(QUESTIONS).slice(0, count);
  if (catId === "hizli" || catId === "genel") return shuffle(QUESTIONS).slice(0, count);
  const filtered = QUESTIONS.filter(q => cat.topics.includes(q.topic));
  const result = shuffle(filtered).slice(0, Math.min(count, filtered.length));
  if (result.length < count) {
    const extra = shuffle(QUESTIONS.filter(q => !result.find(r => r.id === q.id)));
    return [...result, ...extra.slice(0, count - result.length)];
  }
  return result;
}

type Screen = "hero" | "categories" | "quiz" | "results";
type Q = typeof QUESTIONS[0];

export default function OnlineTestPage() {
  const [screen, setScreen] = useState<Screen>("hero");
  const [questions, setQuestions] = useState<Q[]>([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<(number|null)[]>([]);
  const [chosen, setChosen] = useState<number|null>(null);
  const [revealed, setRevealed] = useState(false);
  const [catId, setCatId] = useState("");
  const [timeLeft, setTimeLeft] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval>|null>(null);
  const startTimeRef = useRef(0);
  const [xp, setXp] = useState(0);
  const [totalTime, setTotalTime] = useState(0);

  // Load XP
  useEffect(() => {
    try { setXp(Number(localStorage.getItem("egg_xp") || "0")); } catch {}
  }, []);

  const stopTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const finishTest = useCallback((qs: Q[], ans: (number|null)[]) => {
    stopTimer();
    const spent = Math.round((Date.now() - startTimeRef.current) / 1000);
    setTotalTime(spent);
    const earned = ans.filter((a, i) => a === qs[i].correct).length * 10;
    const newXp = xp + earned;
    setXp(newXp);
    try { localStorage.setItem("egg_xp", String(newXp)); } catch {}
    setScreen("results");
  }, [xp]);

  const startTest = (id: string) => {
    const cat = CATEGORIES.find(c => c.id === id)!;
    const qs = getQuestions(id, cat.count);
    setCatId(id);
    setQuestions(qs);
    setAnswers(new Array(qs.length).fill(null));
    setCurrent(0);
    setChosen(null);
    setRevealed(false);
    startTimeRef.current = Date.now();
    const totalSec = cat.time * 60;
    setTimeLeft(totalSec);
    stopTimer();
    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    setScreen("quiz");
  };

  // Auto-finish when timer hits 0
  useEffect(() => {
    if (screen === "quiz" && timeLeft === 0 && questions.length > 0) {
      finishTest(questions, answers);
    }
  }, [timeLeft, screen, questions, answers, finishTest]);

  useEffect(() => { return () => stopTimer(); }, []);

  const selectAnswer = (idx: number) => {
    if (revealed) return;
    setChosen(idx);
    setRevealed(true);
    const newAns = [...answers];
    newAns[current] = idx;
    setAnswers(newAns);
  };

  const goNext = () => {
    if (current < questions.length - 1) {
      const next = current + 1;
      setCurrent(next);
      setChosen(answers[next]);
      setRevealed(answers[next] !== null);
    } else {
      finishTest(questions, answers);
    }
  };

  const goPrev = () => {
    if (current > 0) {
      const prev = current - 1;
      setCurrent(prev);
      setChosen(answers[prev]);
      setRevealed(answers[prev] !== null);
    }
  };

  const cat = CATEGORIES.find(c => c.id === catId);
  const q = questions[current];
  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;
  const timerStr = `${mins}:${secs.toString().padStart(2, "0")}`;
  const timerColor = timeLeft < 60 ? "#ef4444" : timeLeft < 120 ? "#f59e0b" : "#22c55e";
  const level = Math.floor(xp / 500) + 1;

  // ── RESULTS ──
  const correct = answers.filter((a, i) => a === questions[i]?.correct).length;
  const wrong = answers.filter((a, i) => a !== null && a !== questions[i]?.correct).length;
  const blank = answers.filter(a => a === null).length;
  const score = questions.length > 0 ? Math.round((correct / questions.length) * 100) : 0;
  const passed = score >= 70;

  const topicStats: Record<string, {c:number;t:number}> = {};
  questions.forEach((q, i) => {
    if (!topicStats[q.topic]) topicStats[q.topic] = {c:0,t:0};
    topicStats[q.topic].t++;
    if (answers[i] === q.correct) topicStats[q.topic].c++;
  });

  const optLabels = ["A","B","C","D"];

  return (
    <div style={{ minHeight:"100vh", background:"linear-gradient(145deg,#010316 0%,#020830 50%,#010520 100%)", color:"#fff", fontFamily:"system-ui,sans-serif" }}>
      <style>{`
        @keyframes spin-cw { to { transform: rotate(360deg); } }
        @keyframes glow-pulse { 0%,100%{opacity:.3;transform:scale(1)} 50%{opacity:.7;transform:scale(1.08)} }
        @keyframes slide-up { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        @keyframes score-in { 0%{stroke-dashoffset:var(--circ)} }
        .slide-up { animation: slide-up .4s ease both; }
        .card { transition: transform .2s, box-shadow .2s, border-color .2s; cursor:pointer; }
        .card:hover { transform: translateY(-5px); }
        .opt { transition: all .18s; cursor:pointer; border:1.5px solid rgba(255,255,255,.1); }
        .opt:hover { border-color:rgba(251,191,36,.5); background:rgba(251,191,36,.07) !important; }
        .opt-ok { border-color:#22c55e !important; background:rgba(34,197,94,.15) !important; }
        .opt-no { border-color:#ef4444 !important; background:rgba(239,68,68,.15) !important; }
      `}</style>

      {/* XP strip */}
      <div style={{ background:"rgba(1,3,22,.97)", borderBottom:"1px solid rgba(251,191,36,.15)", padding:".5rem 1.5rem", display:"flex", alignItems:"center", gap:"1rem" }}>
        <span style={{ fontSize:"1rem" }}>⚔️</span>
        <span style={{ color:"#fbbf24", fontWeight:800, fontSize:".82rem" }}>Sv. {level}</span>
        <div style={{ width:140, background:"rgba(255,255,255,.1)", borderRadius:4, height:6, overflow:"hidden" }}>
          <div style={{ width:`${((xp%500)/500)*100}%`, height:"100%", background:"linear-gradient(90deg,#d97706,#fbbf24)", transition:"width .5s" }}/>
        </div>
        <span style={{ color:"rgba(255,255,255,.4)", fontSize:".72rem" }}>{xp} XP</span>
        {screen !== "hero" && (
          <button onClick={() => { stopTimer(); setScreen("hero"); }} style={{ marginLeft:"auto", background:"rgba(255,255,255,.08)", border:"1px solid rgba(255,255,255,.15)", color:"#fff", padding:".3rem .875rem", borderRadius:".5rem", cursor:"pointer", fontSize:".78rem" }}>← Çıkış</button>
        )}
      </div>

      {/* ══ HERO ══ */}
      {screen === "hero" && (
        <div style={{ position:"relative", overflow:"hidden", minHeight:"calc(100vh - 44px)" }}>
          {/* Video arka plan */}
          <video autoPlay muted loop playsInline preload="auto" style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", objectPosition:"center", zIndex:0 }}>
            <source src="/videos/security-hero.mp4" type="video/mp4"/>
          </video>
          {/* Koyu overlay */}
          <div style={{ position:"absolute", inset:0, zIndex:1, background:"linear-gradient(145deg,rgba(1,3,22,.92) 0%,rgba(2,8,48,.85) 50%,rgba(1,5,32,.78) 100%)" }}/>

        <div className="slide-up" style={{ position:"relative", zIndex:2, maxWidth:860, margin:"0 auto", padding:"4rem 1.5rem", textAlign:"center" }}>
          {/* Shield */}
          <div style={{ position:"relative", width:160, height:180, margin:"0 auto 2rem" }}>
            {[0,1,2].map(i => (
              <div key={i} style={{ position:"absolute", top:"50%", left:"50%", width:160+i*50, height:160+i*50, borderRadius:"50%", border:`1px solid rgba(251,191,36,${.2-i*.05})`, transform:"translate(-50%,-50%)", animation:`glow-pulse ${2+i*.4}s ease-in-out infinite`, animationDelay:`${i*.25}s` }}/>
            ))}
            <svg viewBox="0 0 160 185" style={{ width:"100%", filter:"drop-shadow(0 0 24px rgba(251,191,36,.5))" }}>
              <defs>
                <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#fde68a"/><stop offset="60%" stopColor="#f59e0b"/><stop offset="100%" stopColor="#78350f"/></linearGradient>
                <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e3a8a"/><stop offset="100%" stopColor="#0a1628"/></linearGradient>
              </defs>
              <path d="M80 4L8 28v55q0 64 72 95q72-31 72-95V28Z" fill="url(#g1)"/>
              <path d="M80 16L20 36v48q0 56 60 84q60-28 60-84V36Z" fill="url(#g2)"/>
              <text x="80" y="80" textAnchor="middle" fontFamily="Arial Black" fontSize="28" fontWeight="900" fill="url(#g1)">EGG</text>
              <text x="80" y="100" textAnchor="middle" fontFamily="Arial" fontSize="9" fontWeight="700" fill="#fcd34d" letterSpacing="2">GÜVENLİK</text>
              <text x="80" y="125" textAnchor="middle" fontSize="18" fill="#fbbf24">★</text>
            </svg>
          </div>

          <div style={{ display:"inline-flex", alignItems:"center", gap:".4rem", padding:".3rem .9rem", borderRadius:999, border:"1px solid rgba(34,197,94,.4)", background:"rgba(34,197,94,.08)", marginBottom:"1.25rem" }}>
            <span style={{ width:7, height:7, borderRadius:"50%", background:"#22c55e", display:"inline-block", boxShadow:"0 0 6px #22c55e" }}/>
            <span style={{ color:"#4ade80", fontSize:".7rem", fontWeight:700, letterSpacing:".08em" }}>CANLI SİSTEM · 50+ SORU</span>
          </div>

          <h1 style={{ fontFamily:"Arial Black,sans-serif", fontWeight:900, fontSize:"clamp(1.875rem,5vw,3rem)", lineHeight:1.1, letterSpacing:"-.03em", marginBottom:"1rem" }}>
            <span style={{ color:"#fff" }}>Özel Güvenlik</span><br/>
            <span style={{ background:"linear-gradient(90deg,#d97706,#fbbf24)", WebkitBackgroundClip:"text", backgroundClip:"text", color:"transparent" }}>Online Test Sistemi</span>
          </h1>
          <p style={{ color:"rgba(255,255,255,.55)", fontSize:".95rem", lineHeight:1.75, maxWidth:500, margin:"0 auto 2.5rem" }}>
            Özel güvenlik sınavı konularında bilginizi ölçün. AI analizi ile zayıf noktalarınızı keşfedin.
          </p>

          <button onClick={() => setScreen("categories")} style={{ padding:"1rem 3rem", borderRadius:"1rem", background:"linear-gradient(135deg,#d97706,#fbbf24)", color:"#01051f", fontWeight:900, fontSize:"1.1rem", border:"none", cursor:"pointer", boxShadow:"0 8px 30px rgba(251,191,36,.4)" }}>
            🚀 Teste Başla
          </button>

          <div style={{ display:"flex", justifyContent:"center", gap:"2.5rem", marginTop:"2.5rem", flexWrap:"wrap" }}>
            {[["50+","Soru"],["6","Kategori"],["11","Konu"],["AI","Analiz"]].map(([v,l]) => (
              <div key={l} style={{ textAlign:"center" }}>
                <div style={{ fontFamily:"Arial Black", fontWeight:900, fontSize:"1.75rem", color:"#fbbf24" }}>{v}</div>
                <div style={{ color:"rgba(255,255,255,.4)", fontSize:".75rem" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
        </div>
      )}

      {/* ══ KATEGORİLER ══ */}
      {screen === "categories" && (
        <div style={{ maxWidth:1100, margin:"0 auto", padding:"3rem 1.5rem" }}>
          <div className="slide-up" style={{ textAlign:"center", marginBottom:"2.5rem" }}>
            <h2 style={{ fontFamily:"Arial Black", fontWeight:900, fontSize:"clamp(1.5rem,4vw,2.25rem)", letterSpacing:"-.03em" }}>
              <span style={{ color:"#fff" }}>Kategori </span>
              <span style={{ background:"linear-gradient(90deg,#d97706,#fbbf24)", WebkitBackgroundClip:"text", backgroundClip:"text", color:"transparent" }}>Seç</span>
            </h2>
            <p style={{ color:"rgba(255,255,255,.45)", fontSize:".88rem", marginTop:".5rem" }}>Hedefine uygun kategoriyi seç, hemen test çözmeye başla.</p>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))", gap:"1.25rem" }}>
            {CATEGORIES.map((cat, i) => (
              <div key={cat.id} className="card slide-up" onClick={() => startTest(cat.id)}
                style={{ borderRadius:"1.125rem", background:"linear-gradient(160deg,rgba(5,14,77,.65) 0%,rgba(2,6,38,.88) 100%)", border:"1px solid rgba(255,255,255,.08)", padding:"1.75rem", position:"relative", overflow:"hidden", boxShadow:"0 4px 20px rgba(0,0,0,.35)", animationDelay:`${i*.07}s` }}>
                <div style={{ position:"absolute", inset:0, background:`radial-gradient(circle at 75% 25%, ${cat.glow} 0%, transparent 60%)`, pointerEvents:"none" }}/>
                <div style={{ position:"relative" }}>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"1rem" }}>
                    <span style={{ fontSize:"2.25rem" }}>{cat.icon}</span>
                    <span style={{ padding:".22rem .6rem", borderRadius:999, background:"rgba(255,255,255,.07)", fontSize:".68rem", color:"rgba(255,255,255,.6)", fontWeight:700 }}>{cat.difficulty}</span>
                  </div>
                  <h3 style={{ fontWeight:800, fontSize:"1rem", color:"#fff", marginBottom:".5rem" }}>{cat.label}</h3>
                  <div style={{ display:"flex", gap:".875rem", fontSize:".75rem", color:"rgba(255,255,255,.45)", marginBottom:"1.125rem" }}>
                    <span>📝 {cat.count} soru</span><span>⏱ {cat.time} dk</span>
                  </div>
                  <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
                    <span style={{ color:cat.color, fontWeight:700, fontSize:".82rem" }}>Başla →</span>
                    <div style={{ width:30, height:30, borderRadius:"50%", background:`${cat.color}20`, border:`1px solid ${cat.color}44`, display:"flex", alignItems:"center", justifyContent:"center", color:cat.color, fontSize:".8rem" }}>▶</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ══ QUIZ ══ */}
      {screen === "quiz" && q && (
        <div style={{ maxWidth:780, margin:"0 auto", padding:"2rem 1.5rem" }}>
          {/* Progress & timer */}
          <div className="slide-up" style={{ marginBottom:"1.5rem" }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:".5rem" }}>
              <span style={{ fontSize:".82rem", color:"rgba(255,255,255,.55)", fontWeight:600 }}>
                {cat?.label} — Soru {current+1}/{questions.length}
              </span>
              <span style={{ fontFamily:"monospace", fontWeight:800, fontSize:".95rem", color:timerColor, padding:".3rem .75rem", borderRadius:".5rem", background:`${timerColor}18`, border:`1px solid ${timerColor}44` }}>
                ⏱ {timerStr}
              </span>
            </div>
            <div style={{ background:"rgba(255,255,255,.08)", borderRadius:4, height:7, overflow:"hidden" }}>
              <div style={{ width:`${((current+1)/questions.length)*100}%`, height:"100%", background:"linear-gradient(90deg,#d97706,#fbbf24)", transition:"width .3s ease" }}/>
            </div>
            <div style={{ background:"rgba(255,255,255,.05)", borderRadius:2, height:3, overflow:"hidden", marginTop:3 }}>
              <div style={{ width:`${(timeLeft/((cat?.time||30)*60))*100}%`, height:"100%", background:timerColor, transition:"width 1s linear" }}/>
            </div>
          </div>

          {/* Topic */}
          <div style={{ display:"flex", gap:".5rem", marginBottom:"1.125rem" }}>
            <span style={{ padding:".22rem .625rem", borderRadius:999, background:"rgba(251,191,36,.1)", border:"1px solid rgba(251,191,36,.25)", color:"#fcd34d", fontSize:".7rem", fontWeight:700 }}>{q.topic}</span>
          </div>

          {/* Question */}
          <div className="slide-up" style={{ background:"linear-gradient(160deg,rgba(5,14,77,.7) 0%,rgba(2,6,38,.9) 100%)", border:"1px solid rgba(255,255,255,.09)", borderRadius:"1.25rem", padding:"1.875rem", marginBottom:"1.125rem", boxShadow:"0 8px 32px rgba(0,0,0,.35)" }}>
            <p style={{ fontSize:"clamp(.95rem,2.5vw,1.1rem)", lineHeight:1.8, color:"#fff", fontWeight:600, marginBottom:"1.75rem" }}>
              <span style={{ color:"#fbbf24", fontFamily:"Arial Black", marginRight:".5rem" }}>{current+1}.</span>
              {q.text}
            </p>
            <div style={{ display:"flex", flexDirection:"column", gap:".75rem" }}>
              {q.options.map((opt, i) => {
                const isCorrect = i === q.correct;
                const isChosen = i === chosen;
                let borderColor = "rgba(255,255,255,.1)";
                let bg = "rgba(255,255,255,.04)";
                let textColor = "rgba(255,255,255,.82)";
                if (revealed) {
                  if (isCorrect) { borderColor="#22c55e"; bg="rgba(34,197,94,.15)"; textColor="#fff"; }
                  else if (isChosen) { borderColor="#ef4444"; bg="rgba(239,68,68,.15)"; }
                } else if (isChosen) {
                  borderColor="rgba(251,191,36,.6)"; bg="rgba(251,191,36,.08)";
                }
                return (
                  <button key={i} onClick={() => selectAnswer(i)} disabled={revealed}
                    style={{ width:"100%", textAlign:"left", padding:".875rem 1.125rem", borderRadius:".875rem", background:bg, border:`1.5px solid ${borderColor}`, color:textColor, cursor:revealed?"default":"pointer", display:"flex", alignItems:"center", gap:".875rem", fontSize:".9rem", transition:"all .18s" }}>
                    <span style={{ width:26, height:26, borderRadius:"50%", background: revealed && isCorrect ? "#22c55e" : revealed && isChosen ? "#ef4444" : "rgba(255,255,255,.08)", display:"flex", alignItems:"center", justifyContent:"center", fontWeight:800, fontSize:".75rem", color:"#fff", flexShrink:0, border: revealed && isCorrect ? "2px solid #22c55e" : "none" }}>{optLabels[i]}</span>
                    <span style={{ flex:1 }}>{opt}</span>
                    {revealed && isCorrect && <span style={{ color:"#22c55e", fontSize:"1.1rem", flexShrink:0 }}>✓</span>}
                    {revealed && isChosen && !isCorrect && <span style={{ color:"#ef4444", fontSize:"1.1rem", flexShrink:0 }}>✗</span>}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Nav */}
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", gap:"1rem" }}>
            <button onClick={goPrev} disabled={current===0} style={{ padding:".7rem 1.5rem", borderRadius:".875rem", background:"rgba(255,255,255,.08)", border:"1px solid rgba(255,255,255,.15)", color:current===0?"rgba(255,255,255,.25)":"#fff", cursor:current===0?"default":"pointer", fontWeight:700, fontSize:".86rem" }}>← Önceki</button>
            <div style={{ display:"flex", gap:3, flexWrap:"wrap", justifyContent:"center", flex:1 }}>
              {questions.map((_, qi) => (
                <div key={qi} style={{ width:22, height:22, borderRadius:3, background: qi===current?"#fbbf24":answers[qi]===null?"rgba(255,255,255,.08)":answers[qi]===questions[qi].correct?"rgba(34,197,94,.4)":"rgba(239,68,68,.4)", border: qi===current?"2px solid #fbbf24":"1px solid rgba(255,255,255,.1)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:".58rem", color:qi===current?"#01051f":"#fff", fontWeight:700 }}>{qi+1}</div>
              ))}
            </div>
            <button onClick={current===questions.length-1 ? () => finishTest(questions,answers) : goNext} style={{ padding:".7rem 1.5rem", borderRadius:".875rem", background:current===questions.length-1?"linear-gradient(135deg,#16a34a,#22c55e)":"linear-gradient(135deg,#d97706,#fbbf24)", border:"none", color:current===questions.length-1?"#fff":"#01051f", cursor:"pointer", fontWeight:800, fontSize:".86rem" }}>
              {current===questions.length-1?"Bitir ✓":"Sonraki →"}
            </button>
          </div>
        </div>
      )}

      {/* ══ SONUÇLAR ══ */}
      {screen === "results" && (
        <div style={{ maxWidth:860, margin:"0 auto", padding:"2rem 1.5rem" }}>
          <div className="slide-up" style={{ textAlign:"center", marginBottom:"2rem" }}>
            <div style={{ fontSize:"3rem", marginBottom:".75rem" }}>{passed?"🎉":"💪"}</div>
            <h2 style={{ fontFamily:"Arial Black", fontWeight:900, fontSize:"clamp(1.5rem,4vw,2.25rem)", color:passed?"#22c55e":"#f59e0b", marginBottom:".5rem" }}>
              {passed?"Tebrikler! Geçtiniz!":"Daha Fazla Çalışın"}
            </h2>
            <p style={{ color:"rgba(255,255,255,.45)", fontSize:".88rem" }}>{cat?.label}</p>
          </div>

          {/* Score ring */}
          <div style={{ display:"flex", justifyContent:"center", marginBottom:"2rem" }}>
            <svg width="160" height="160" viewBox="0 0 160 160" className="slide-up">
              <circle cx="80" cy="80" r="65" fill="none" stroke="rgba(255,255,255,.1)" strokeWidth="10"/>
              <circle cx="80" cy="80" r="65" fill="none"
                stroke={score>=70?"#22c55e":score>=50?"#f59e0b":"#ef4444"} strokeWidth="10"
                strokeDasharray={`${2*Math.PI*65}`}
                strokeDashoffset={`${2*Math.PI*65*(1-score/100)}`}
                strokeLinecap="round" transform="rotate(-90 80 80)"
                style={{ transition:"stroke-dashoffset 1.5s ease", filter:`drop-shadow(0 0 8px ${score>=70?"#22c55e":score>=50?"#f59e0b":"#ef4444"})` }}
              />
              <text x="80" y="72" textAnchor="middle" fill="#fff" fontSize="30" fontWeight="900" fontFamily="Arial Black">{score}</text>
              <text x="80" y="92" textAnchor="middle" fill="rgba(255,255,255,.5)" fontSize="13">puan</text>
            </svg>
          </div>

          {/* Stats */}
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"1rem", marginBottom:"1.75rem" }}>
            {[["✅","Doğru",correct,"#22c55e"],["❌","Yanlış",wrong,"#ef4444"],["⭕","Boş",blank,"rgba(255,255,255,.4)"],["⏱","Süre",`${Math.floor(totalTime/60)}:${(totalTime%60).toString().padStart(2,"0")}` ,"#60a5fa"]].map(([ic,lb,vl,cl]) => (
              <div key={String(lb)} style={{ background:"linear-gradient(160deg,rgba(5,14,77,.65) 0%,rgba(2,6,38,.88) 100%)", border:"1px solid rgba(255,255,255,.08)", borderRadius:"1rem", padding:"1rem", textAlign:"center" }}>
                <div style={{ fontSize:"1.4rem", marginBottom:".25rem" }}>{ic}</div>
                <div style={{ fontFamily:"Arial Black", fontWeight:900, fontSize:"1.625rem", color:String(cl) }}>{vl}</div>
                <div style={{ color:"rgba(255,255,255,.4)", fontSize:".72rem" }}>{lb}</div>
              </div>
            ))}
          </div>

          {/* Topic analysis */}
          <div style={{ background:"linear-gradient(160deg,rgba(5,14,77,.65) 0%,rgba(2,6,38,.88) 100%)", border:"1px solid rgba(255,255,255,.08)", borderRadius:"1.125rem", padding:"1.5rem", marginBottom:"1.5rem" }}>
            <h3 style={{ fontWeight:800, fontSize:".95rem", marginBottom:"1.125rem", display:"flex", alignItems:"center", gap:".5rem" }}>📊 Konu Analizi</h3>
            <div style={{ display:"flex", flexDirection:"column", gap:".75rem" }}>
              {Object.entries(topicStats).map(([topic, stat]) => {
                const pct = stat.t > 0 ? (stat.c / stat.t) * 100 : 0;
                const bc = pct>=70?"#22c55e":pct>=50?"#f59e0b":"#ef4444";
                return (
                  <div key={topic}>
                    <div style={{ display:"flex", justifyContent:"space-between", fontSize:".8rem", marginBottom:".3rem" }}>
                      <span style={{ color:"rgba(255,255,255,.7)", fontWeight:600 }}>{topic}</span>
                      <span style={{ color:bc, fontWeight:700 }}>{stat.c}/{stat.t} (%{Math.round(pct)})</span>
                    </div>
                    <div style={{ background:"rgba(255,255,255,.08)", borderRadius:4, height:7, overflow:"hidden" }}>
                      <div style={{ width:`${pct}%`, height:"100%", background:bc, borderRadius:4, transition:"width 1s ease" }}/>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* AI Recommendations */}
          <div style={{ background:"linear-gradient(160deg,rgba(20,10,50,.7) 0%,rgba(10,5,30,.9) 100%)", border:"1px solid rgba(139,92,246,.3)", borderRadius:"1.125rem", padding:"1.5rem", marginBottom:"1.75rem" }}>
            <h3 style={{ fontWeight:800, fontSize:".95rem", marginBottom:"1rem", display:"flex", alignItems:"center", gap:".5rem" }}>
              🤖 AI Öneriler
              <span style={{ padding:".15rem .5rem", borderRadius:4, background:"rgba(139,92,246,.2)", border:"1px solid rgba(139,92,246,.3)", color:"#a78bfa", fontSize:".65rem", fontWeight:700 }}>YAPAY ZEKA</span>
            </h3>
            <div style={{ display:"flex", flexDirection:"column", gap:".625rem" }}>
              {Object.entries(topicStats).map(([topic, stat]) => {
                const pct = stat.t > 0 ? (stat.c / stat.t) * 100 : 0;
                if (pct < 50) return (
                  <div key={topic} style={{ display:"flex", gap:".625rem", padding:".75rem .875rem", borderRadius:".75rem", background:"rgba(239,68,68,.08)", border:"1px solid rgba(239,68,68,.2)" }}>
                    <span>⚠️</span>
                    <span style={{ color:"rgba(255,255,255,.78)", fontSize:".84rem" }}><b>{topic}</b> bölümünde eksikleriniz var — tekrar çalışmanız önerilir.</span>
                  </div>
                );
                if (pct >= 80) return (
                  <div key={topic} style={{ display:"flex", gap:".625rem", padding:".75rem .875rem", borderRadius:".75rem", background:"rgba(34,197,94,.08)", border:"1px solid rgba(34,197,94,.2)" }}>
                    <span>✅</span>
                    <span style={{ color:"rgba(255,255,255,.78)", fontSize:".84rem" }}><b>{topic}</b> konusunda başarılısınız! 💪</span>
                  </div>
                );
                return null;
              })}
              {blank > 2 && (
                <div style={{ display:"flex", gap:".625rem", padding:".75rem .875rem", borderRadius:".75rem", background:"rgba(251,191,36,.08)", border:"1px solid rgba(251,191,36,.2)" }}>
                  <span>💡</span>
                  <span style={{ color:"rgba(255,255,255,.78)", fontSize:".84rem" }}>Boş bıraktığınız {blank} soru var. Sınav stratejinizi gözden geçirin.</span>
                </div>
              )}
              {score >= 85 && (
                <div style={{ display:"flex", gap:".625rem", padding:".75rem .875rem", borderRadius:".75rem", background:"rgba(251,191,36,.08)", border:"1px solid rgba(251,191,36,.2)" }}>
                  <span>🏆</span>
                  <span style={{ color:"rgba(255,255,255,.78)", fontSize:".84rem" }}>Harika sonuç! Farklı bir kategoriyi de deneyin.</span>
                </div>
              )}
            </div>
          </div>

          {/* Actions */}
          <div style={{ display:"flex", gap:"1rem", justifyContent:"center", flexWrap:"wrap" }}>
            <button onClick={() => startTest(catId)} style={{ padding:".875rem 2rem", borderRadius:".875rem", background:"linear-gradient(135deg,#d97706,#fbbf24)", border:"none", color:"#01051f", fontWeight:800, fontSize:".9rem", cursor:"pointer" }}>🔄 Tekrar Dene</button>
            <button onClick={() => setScreen("categories")} style={{ padding:".875rem 2rem", borderRadius:".875rem", background:"rgba(255,255,255,.08)", border:"1px solid rgba(255,255,255,.15)", color:"#fff", fontWeight:700, fontSize:".9rem", cursor:"pointer" }}>📚 Başka Test</button>
            <a href="/kayit-sureci" style={{ padding:".875rem 2rem", borderRadius:".875rem", background:"linear-gradient(135deg,#16a34a,#22c55e)", color:"#fff", fontWeight:800, fontSize:".9rem", textDecoration:"none", display:"inline-flex", alignItems:"center", gap:".4rem" }}>🛡️ Kursa Kayıt Ol</a>
          </div>
        </div>
      )}
    </div>
  );
}

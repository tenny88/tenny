
import React, { useState, useEffect } from 'react';
import { optimizeContent } from './services/geminiService';
import { ReportData, Project } from './types';

const INITIAL_DATA: ReportData = {
  month: '11月',
  year: '2025',
  department: '科技平台部',
  stats: {
    teams: '6',
    requirements: '21',
    completion: '100%'
  },
  posters: [
    { id: 'p1', name: '全线营销魔方', category: 'Core Experience', description: '赋能一线业务，重新定义营销物料的生产效率。', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1200', span: 'large' },
    { id: 'p2', name: '车贷惠民月', category: 'Promotion', description: '助力前线，触达每一个潜在需求。', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800', span: 'tall' },
    { id: 'p3', name: '荣耀City直通', category: 'Events', description: '沉浸式线上展厅交互。', image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800', span: 'medium' },
    { id: 'p4', name: '保险测评', category: 'Material', description: '专业解析内容。', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600', span: 'small' },
    { id: 'p5', name: '权益领券', category: 'Material', description: '高转化率设计。', image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=600', span: 'small' },
    { id: 'p6', name: '分期权益', category: 'FinTech', description: '金融产品推广。', image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=600', span: 'small' },
    { id: 'p7', name: '面签物料', category: 'Offline', description: '线下业务赋能。', image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600', span: 'small' },
  ],
  marketing: [
    { id: 'm1', name: '多端触达', category: 'Social Strategy', description: '直播与小红书全域增长。', image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=1200' },
  ],
  solarTerms: [
    { id: 's1', name: '立春', category: 'Solar Terms', description: '', image: 'https://picsum.photos/600/800?random=1' },
    { id: 's2', name: '惊蛰', category: 'Solar Terms', description: '', image: 'https://picsum.photos/600/800?random=2' },
    { id: 's3', name: '春分', category: 'Solar Terms', description: '', image: 'https://picsum.photos/600/800?random=3' },
    { id: 's4', name: '清明', category: 'Solar Terms', description: '', image: 'https://picsum.photos/600/800?random=4' },
    { id: 's5', name: '立冬', category: 'Solar Terms', description: '', image: 'https://picsum.photos/600/800?random=5' },
    { id: 's6', name: '小雪', category: 'Solar Terms', description: '', image: 'https://picsum.photos/600/800?random=6' },
  ],
  uiInterfaces: [
    { id: 'u1', name: '车贷详情', category: 'Product UI', description: '全新组件化改版。', image: 'https://picsum.photos/800/1600?random=10' },
    { id: 'u2', name: '身份核验', category: 'Interaction', description: '无缝交互体验。', image: 'https://picsum.photos/800/1600?random=11' },
    { id: 'u3', name: '意向录入', category: 'Flow', description: '链路效率提升。', image: 'https://picsum.photos/800/1600?random=12' },
  ],
  videos: [
    { id: 'v1', name: '全线营销魔方', category: 'Motion', description: '赋能全国分中心。', image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1200' },
  ],
  summary: '本月，科技平台部设计团队致力于通过视觉语言的深度进化，为业务注入美学动力。在 100% 达成需求交付的同时，我们在二十四节气系列、UI 交互链路重构以及多维数字营销阵地上，确立了更高的设计标准。'
};

const App: React.FC = () => {
  const [data, setData] = useState<ReportData>(INITIAL_DATA);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOptimizeSummary = async () => {
    setIsOptimizing(true);
    const optimized = await optimizeContent(data.summary);
    setData(prev => ({ ...prev, summary: optimized }));
    setIsOptimizing(false);
  };

  return (
    <div className="min-h-screen">
      {/* Global Navigation - Minimal & Translucent */}
      <nav className="fixed top-0 w-full z-50 apple-blur border-b border-gray-200/20">
        <div className="max-w-[1200px] mx-auto px-6 h-[52px] flex items-center justify-between">
          <div className="flex items-center gap-8">
            <span className="text-[19px] font-bold tracking-tight opacity-90 cursor-pointer">Design Report</span>
          </div>
          <div className="flex gap-10 text-[12px] font-medium text-[#86868b] tracking-tight">
            <span className="hover:text-black transition cursor-pointer">Posters</span>
            <span className="hover:text-black transition cursor-pointer">Interface</span>
            <span className="hover:text-black transition cursor-pointer">Motion</span>
            <span className="text-black font-bold">11. 2025</span>
          </div>
        </div>
      </nav>

      {/* Hero Section - Immersive Typography */}
      <header className="pt-48 pb-32 px-6 max-w-[1100px] mx-auto text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-12">
          <div className="flex-1">
            <span className="text-[#0066cc] font-bold text-sm tracking-wide mb-3 block uppercase">{data.department}</span>
            <h1 className="text-7xl md:text-[120px] font-extrabold tracking-[-0.05em] leading-[0.85] gradient-text mb-10">
              Precision. <br/>Impact.
            </h1>
            <p className="text-2xl md:text-3xl font-medium text-[#86868b] leading-[1.1] max-w-xl">
              Elevating the digital experience through intentional design and strategic execution.
            </p>
          </div>
          <div className="w-48 h-48 md:w-64 md:h-64 flex items-center justify-center p-4">
             <div className="relative group">
                <div className="absolute -inset-8 bg-blue-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                <div className="text-8xl md:text-[160px] drop-shadow-2xl">🐯</div>
             </div>
          </div>
        </div>

        {/* Quick Stats Grid - Apple "Specs" Style */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-32">
          {[
            { label: 'Supporting Teams', val: data.stats.teams },
            { label: 'Requests Fulfilled', val: data.stats.requirements },
            { label: 'Completion Rate', val: data.stats.completion, highlight: true },
            { label: 'Designers', val: '12' }
          ].map((stat, i) => (
            <div key={i} className="apple-card p-10 flex flex-col justify-end min-h-[160px]">
               <div className={`text-4xl md:text-5xl font-extrabold tracking-tighter mb-2 ${stat.highlight ? 'text-[#0066cc]' : ''}`}>{stat.val}</div>
               <span className="text-[#86868b] text-[11px] font-bold uppercase tracking-widest">{stat.label}</span>
            </div>
          ))}
        </div>
      </header>

      <main className="max-w-[1200px] mx-auto px-6 pb-60 space-y-48">
        
        {/* Section: Posters - High Density Bento Grid */}
        <section>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 px-2">
            <div>
              <h2 className="text-5xl font-extrabold tracking-tight mb-4">Poster Showcase.</h2>
              <p className="text-xl text-[#86868b] font-medium">Empowering the front line with visual excellence.</p>
            </div>
            <div className="text-sm font-bold text-[#0066cc] hover:underline cursor-pointer">View Collection →</div>
          </div>

          <div className="grid grid-cols-12 gap-6 auto-rows-[280px] md:auto-rows-[340px]">
            {/* Billboard Layout */}
            <div className="col-span-12 md:col-span-8 row-span-2 apple-card relative group">
               <img src={data.posters[0].image} className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-12">
                 <span className="text-white/70 text-xs font-bold uppercase tracking-[0.2em] mb-3">{data.posters[0].category}</span>
                 <h3 className="text-4xl font-extrabold text-white mb-4">{data.posters[0].name}</h3>
                 <p className="text-white/60 max-w-md">{data.posters[0].description}</p>
               </div>
            </div>
            
            {/* Tall Vertical Layout */}
            <div className="col-span-12 md:col-span-4 row-span-2 apple-card">
               <img src={data.posters[1].image} className="w-full h-full object-cover" />
            </div>

            {/* Square/Small Layouts */}
            {data.posters.slice(2, 6).map((poster) => (
              <div key={poster.id} className="col-span-6 md:col-span-3 apple-card relative group">
                <img src={poster.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-center p-6">
                  <h4 className="text-white font-bold text-lg">{poster.name}</h4>
                  <span className="text-white/70 text-[10px] font-bold uppercase mt-1">{poster.category}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Digital Marketing - Dark Pro Vibe */}
        <section className="bg-black rounded-[40px] p-12 md:p-32 text-white overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
            <div>
              <span className="text-blue-500 font-bold text-sm tracking-widest uppercase mb-6 block">Growth Engine</span>
              <h2 className="text-6xl md:text-7xl font-extrabold tracking-tight mb-10 leading-[0.9]">Digital <br/><span className="text-zinc-600">Marketing.</span></h2>
              <p className="text-xl text-zinc-400 leading-relaxed mb-12">
                直播、小红书全渠道渗透，通过精细化视觉语言驱动获客增长，实现了品牌声量与业务转化的双重跃迁。
              </p>
              <div className="flex gap-8">
                <div>
                   <div className="text-4xl font-extrabold mb-1">1123w+</div>
                   <div className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Exposure</div>
                </div>
                <div className="w-px h-12 bg-zinc-800"></div>
                <div>
                   <div className="text-4xl font-extrabold mb-1">1402k+</div>
                   <div className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Interaction</div>
                </div>
              </div>
            </div>
            <div className="relative group">
               <div className="absolute -inset-10 bg-blue-600/20 blur-[100px] rounded-full"></div>
               <div className="apple-card bg-zinc-900 border-zinc-800 p-2 shadow-2xl transition-transform duration-700 group-hover:rotate-1">
                 <img src={data.marketing[0].image} className="rounded-[28px] w-full h-auto opacity-80" />
               </div>
            </div>
          </div>
        </section>

        {/* Section: Solar Terms - Mosaic Gallery */}
        <section>
          <div className="text-center mb-24">
             <h2 className="text-5xl font-extrabold tracking-tight mb-6">Oriental Aesthetics.</h2>
             <p className="text-[#86868b] text-xl max-w-2xl mx-auto">二十四节气系列海报：探索传统文化在现代商业语境下的视觉回响。</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            {data.solarTerms.map((term, i) => (
              <div key={term.id} className={`group cursor-pointer ${i % 2 === 0 ? 'mt-0' : 'md:mt-12'}`}>
                <div className="apple-card mb-6 aspect-[3/4.5]">
                  <img src={term.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                </div>
                <div className="text-center px-2">
                  <h4 className="font-bold text-lg">{term.name}</h4>
                  <span className="text-[#86868b] text-[10px] font-bold uppercase tracking-widest">2026 Edition</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: UI Design - High Fidelity Mockups */}
        <section className="bg-white rounded-[40px] p-12 md:p-32 border border-zinc-100/50">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-5 flex flex-col justify-center">
              <span className="text-[#0066cc] font-bold text-sm tracking-widest uppercase mb-6 block">User Interface</span>
              <h2 className="text-5xl font-extrabold tracking-tight mb-10 leading-[1.05]">Experience <br/>Defined.</h2>
              <p className="text-xl text-[#86868b] leading-relaxed mb-12">
                从新车详情到意向录入，我们致力于重塑每一处交互节点，通过组件化与流程精简，将操作效率提升至全新境界。
              </p>
              <ul className="space-y-6">
                {['核心链路组件化升级', '身份核验交互重构', '意向录入转化优化'].map((text, i) => (
                  <li key={i} className="flex items-center gap-4 text-lg font-bold">
                    <span className="w-6 h-6 rounded-full bg-zinc-100 flex items-center justify-center text-[10px] text-zinc-500">{i+1}</span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-7 flex gap-6 md:gap-10 overflow-hidden py-10">
               {data.uiInterfaces.map((ui, idx) => (
                 <div key={ui.id} className={`iphone-frame w-56 md:w-64 flex-shrink-0 transition-transform duration-700 ${idx === 1 ? '-translate-y-12' : 'translate-y-4'}`}>
                   <img src={ui.image} className="w-full h-full object-cover rounded-[32px]" />
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* AI Insight Summary - Centered Focus */}
        <section className="text-center py-40">
           <div className="max-w-3xl mx-auto space-y-12 px-6">
             <div className="inline-block p-4 bg-zinc-100 rounded-full mb-8">
                <span className="text-2xl">✨</span>
             </div>
             <p className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] gradient-text italic">
               "{data.summary}"
             </p>
             <button 
               onClick={handleOptimizeSummary}
               disabled={isOptimizing}
               className="bg-[#0066cc] text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-[#0071e3] transition active:scale-95 disabled:opacity-50 shadow-xl shadow-blue-500/10"
             >
               {isOptimizing ? 'Thinking...' : 'Refine Monthly Insight'}
             </button>
           </div>
        </section>

      </main>

      {/* Signature Footer - Absolute Minimal */}
      <footer className="bg-white border-t border-zinc-100 py-32 text-center">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-4xl font-extrabold tracking-tighter mb-10 opacity-20">Driven by Design.</h2>
          <div className="h-px w-20 bg-zinc-200 mx-auto mb-10"></div>
          <p className="text-[#86868b] text-[13px] font-medium tracking-tight">
            科技平台部年度设计回顾 • {data.year}年{data.month}
          </p>
          <div className="mt-8 flex justify-center gap-8 text-[#86868b] text-[11px] font-bold uppercase tracking-[0.3em]">
            <span className="hover:text-black cursor-pointer transition">Precision</span>
            <span className="hover:text-black cursor-pointer transition">Elegance</span>
            <span className="hover:text-black cursor-pointer transition">Impact</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

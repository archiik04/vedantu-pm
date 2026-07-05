import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function YouTubeHome() {
  const navigate = useNavigate();

  return (
    <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-4 pb-20 relative h-[calc(100vh-56px)] bg-[#0F0F0F]">
      
      {/* Filters chips bar */}
      <div className="flex items-center gap-2.5 overflow-x-hidden shrink-0 pb-1 select-none text-xs w-full relative">
        <span className="bg-white text-black font-semibold px-3 py-1.5 rounded-lg cursor-default shrink-0">All</span>
        <span className="bg-[#222222] hover:bg-[#303030] text-white px-3 py-1.5 rounded-lg cursor-not-allowed transition-colors shrink-0">Music</span>
        <span className="bg-[#222222] hover:bg-[#303030] text-white px-3 py-1.5 rounded-lg cursor-not-allowed transition-colors shrink-0">Mixes</span>
        <span className="bg-[#222222] hover:bg-[#303030] text-white px-3 py-1.5 rounded-lg cursor-not-allowed transition-colors shrink-0">Podcasts</span>
        <span className="bg-[#222222] hover:bg-[#303030] text-white px-3 py-1.5 rounded-lg cursor-not-allowed transition-colors shrink-0">AI</span>
        {/* Right shadow cover */}
        <div className="absolute right-0 top-0 bottom-0 bg-gradient-to-l from-[#0F0F0F] via-[#0F0F0F]/90 to-transparent w-16 flex items-center justify-end pr-1 select-none">
          <div className="w-7 h-7 rounded-full bg-[#1F1F1F] flex items-center justify-center text-white pointer-events-auto cursor-not-allowed">
            <ChevronRight className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>

      {/* 3-Column Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-10 mt-2">
        
        {/* Card 1: INDIA'S GOT LATENT S2 EP2 */}
        <div 
          onClick={() => navigate('/watch/latent')}
          className="flex flex-col gap-2.5 bg-transparent hover:bg-white/5 p-2 rounded-2xl shadow-sm shrink-0 transition-colors group cursor-pointer"
        >
          <div className="w-full aspect-video bg-slate-800 rounded-xl relative overflow-hidden shrink-0">
            <img 
              src="/latent.png" 
              alt="India's Got Latent" 
              className="w-full h-full object-cover transition-transform group-hover:scale-101 animate-fadeIn"
            />
            <div className="absolute bottom-2.5 right-2.5 bg-black/80 px-1.5 py-0.5 rounded text-[9.5px] font-bold select-none text-white tracking-wide">
              1:01:25
            </div>
          </div>
          <div className="flex gap-3 px-1">
            <div className="w-9 h-9 rounded-full overflow-hidden shrink-0">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=samay" alt="Samay Raina Profile" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 flex flex-col">
              <div className="flex justify-between items-start gap-1">
                <h4 className="text-[14px] font-medium text-slate-100 line-clamp-2 leading-snug">
                  INDIA'S GOT LATENT S2 EP2 ft. Harssh Limbachiya, Kiku Sharda, Chandan Prabhakar
                </h4>
                <span className="text-slate-400 font-bold text-[14px] cursor-default leading-none">⋮</span>
              </div>
              <p className="text-[12px] text-slate-400 mt-1 flex items-center gap-1.5">
                <span>Samay Raina</span>
                <span className="w-3.5 h-3.5 bg-slate-650/60 text-slate-300 text-[8px] font-black rounded-full flex items-center justify-center">✓</span>
              </p>
              <p className="text-[12px] text-slate-500 mt-0.5">24m views • 1 day ago</p>
            </div>
          </div>
        </div>

        {/* Card 2: 지현꿍 Vlog */}
        <div 
          onClick={() => navigate('/watch/jihyun')}
          className="flex flex-col gap-2.5 bg-[#17120e] border border-[#3c2a1c]/60 p-2.5 rounded-[20px] shadow-md shrink-0 transition-colors group cursor-pointer"
        >
          <div className="w-full aspect-video bg-slate-800 rounded-xl relative overflow-hidden shrink-0">
            <img 
              src="/jihyun.png" 
              alt="지현꿍 Vlog" 
              className="w-full h-full object-cover transition-transform group-hover:scale-101 animate-fadeIn"
            />
            <div className="absolute top-2 right-2 flex gap-1.5">
              <div className="w-7 h-7 rounded-full bg-black/60 flex items-center justify-center text-white shrink-0">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM12 4L9.91 6.09 12 8.18V4zm-8 4v8h4l5 5V3L8 8H4z" />
                </svg>
              </div>
              <div className="w-7 h-7 rounded-full bg-black/60 flex items-center justify-center text-white font-bold text-[10px] shrink-0">
                CC
              </div>
            </div>
            <div className="absolute bottom-2.5 right-2.5 bg-black/80 px-1.5 py-0.5 rounded text-[9.5px] font-bold select-none text-white tracking-wide">
              25:59
            </div>
          </div>
          <div className="flex gap-3 px-1">
            <div className="w-9 h-9 rounded-full overflow-hidden shrink-0">
              <img src="/sub_saranghoe.png" alt="지현꿍 Avatar" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <div className="flex justify-between items-start gap-1">
                <h4 className="text-[14px] font-medium text-slate-100 line-clamp-2 leading-snug">
                  🏡 vlog | Homebody days: eating, working & studying | Buldak naengmyeon, brie toast, ...
                </h4>
                <span className="text-slate-400 font-bold text-[14px] cursor-default leading-none">⋮</span>
              </div>
              <p className="text-[12px] text-slate-400 mt-1 flex items-center gap-1.5">
                <span>지현꿍</span>
                <span className="w-3.5 h-3.5 bg-slate-600/60 text-slate-300 text-[8px] font-black rounded-full flex items-center justify-center">✓</span>
              </p>
              <p className="text-[12px] text-slate-500 mt-0.5">279k views • 1 month ago</p>
            </div>
          </div>
        </div>

        {/* Card 3: Sponsored IBM Coursera ad Card */}
        <div 
          onClick={() => navigate('/watch/coursera')}
          className="flex flex-col gap-2.5 bg-transparent hover:bg-white/5 p-2 rounded-2xl shadow-sm shrink-0 transition-colors group cursor-pointer"
        >
          <div className="w-full aspect-video bg-slate-800 rounded-xl relative overflow-hidden shrink-0">
            <img 
              src="/coursera_ai.png" 
              alt="Coursera IBM AI" 
              className="w-full h-full object-cover transition-transform group-hover:scale-101 animate-fadeIn"
            />
            <div className="absolute bottom-2.5 right-2.5 bg-black/85 w-7 h-7 rounded-full flex items-center justify-center text-white shrink-0 hover:bg-black transition-colors cursor-default">
              <span className="text-sm font-semibold select-none">↗</span>
            </div>
          </div>
          <div className="flex gap-3 px-1">
            <div className="flex-1 flex flex-col">
              <div className="flex justify-between items-start gap-1">
                <h4 className="text-[14px] font-medium text-slate-100 line-clamp-2 leading-snug">
                  Continue Your Journey With AI
                </h4>
                <span className="text-slate-400 font-bold text-[14px] cursor-default leading-none">⋮</span>
              </div>
              <p className="text-[12px] text-slate-400 mt-1 leading-snug">
                Go beyond the basics of AI by building RAG and agentic systems with IBM as your guide.
              </p>
              <p className="text-[12px] text-slate-400 mt-2 font-bold">Sponsored <span className="text-[9px] font-normal text-slate-500">•</span> Coursera</p>
            </div>
          </div>
        </div>

        {/* Card 4: F1 LEGO Race In Full */}
        <div 
          onClick={() => navigate('/watch/lego')}
          className="flex flex-col gap-2.5 bg-transparent hover:bg-white/5 p-2 rounded-2xl shadow-sm shrink-0 transition-colors group cursor-pointer"
        >
          <div className="w-full aspect-video bg-slate-800 rounded-xl relative overflow-hidden shrink-0">
            <img 
              src="/lego_f1.png" 
              alt="F1 Lego Race" 
              className="w-full h-full object-cover transition-transform group-hover:scale-101 animate-fadeIn"
            />
            <div className="absolute bottom-2.5 right-2.5 bg-black/80 px-1.5 py-0.5 rounded text-[9.5px] font-bold select-none text-white tracking-wide">
              15:45
            </div>
          </div>
          <div className="flex gap-3 px-1">
            <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center border border-slate-200 shrink-0 font-black text-[10px] text-[#FF0000] tracking-tighter">
              F1
            </div>
            <div className="flex-1 flex flex-col">
              <div className="flex justify-between items-start gap-1">
                <h4 className="text-[14px] font-medium text-slate-100 line-clamp-2 leading-snug">
                  F1 LEGO Race In Full | 2025 Miami Grand Prix
                </h4>
                <span className="text-slate-400 font-bold text-[14px] cursor-default leading-none">⋮</span>
              </div>
              <p className="text-[12px] text-slate-400 mt-1 flex items-center gap-1.5">
                <span>FORMULA 1</span>
                <span className="w-3.5 h-3.5 bg-slate-600/60 text-slate-300 text-[8px] font-black rounded-full flex items-center justify-center">✓</span>
              </p>
              <p className="text-[12px] text-slate-500 mt-0.5">7.5m views • 1 year ago</p>
            </div>
          </div>
        </div>

        {/* Card 5: Chai aur Book Reading */}
        <div 
          onClick={() => navigate('/watch/code')}
          className="flex flex-col gap-2.5 bg-transparent hover:bg-white/5 p-2 rounded-2xl shadow-sm shrink-0 transition-colors group cursor-pointer"
        >
          <div className="w-full aspect-video bg-slate-800 rounded-xl relative overflow-hidden shrink-0">
            <img 
              src="/chai_book.png" 
              alt="Chai aur Book" 
              className="w-full h-full object-cover transition-transform group-hover:scale-101 animate-fadeIn"
            />
            <div className="absolute top-2.5 left-2.5 bg-[#FF0000] text-white text-[8px] font-black px-1.5 py-0.5 rounded uppercase flex items-center gap-1.5 select-none tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span> LIVE
            </div>
            <div className="absolute bottom-2.5 right-2.5 bg-black/80 px-1.5 py-0.5 rounded text-[9.5px] font-bold select-none text-white tracking-wide">
              1:27:59
            </div>
          </div>
          <div className="flex gap-3 px-1">
            <div className="w-9 h-9 rounded-full bg-[#0c0c0d] flex items-center justify-center border border-slate-800 shrink-0 font-bold text-xs text-emerald-450">
              {"</>"}
            </div>
            <div className="flex-1 flex flex-col">
              <div className="flex justify-between items-start gap-1">
                <h4 className="text-[14px] font-medium text-slate-100 line-clamp-2 leading-snug">
                  Chai aur Book Reading
                </h4>
                <span className="text-slate-400 font-bold text-[14px] cursor-default leading-none">⋮</span>
              </div>
              <p className="text-[12px] text-slate-400 mt-1">Chai aur Code</p>
              <p className="text-[12px] text-slate-500 mt-0.5">38k views • Streamed 4 days ago</p>
            </div>
          </div>
        </div>

        {/* Card 6: HAAREYA Song */}
        <div 
          onClick={() => navigate('/watch/music')}
          className="flex flex-col gap-2.5 bg-transparent hover:bg-white/5 p-2 rounded-2xl shadow-sm shrink-0 transition-colors group cursor-pointer"
        >
          <div className="w-full aspect-video bg-slate-800 rounded-xl relative overflow-hidden shrink-0">
            <img 
              src="/haareya.png" 
              alt="Haareya Song" 
              className="w-full h-full object-cover transition-transform group-hover:scale-101 animate-fadeIn"
            />
            <div className="absolute bottom-2.5 right-2.5 bg-black/80 px-1.5 py-0.5 rounded text-[9.5px] font-bold select-none text-white tracking-wide flex items-center gap-1">
              <span>🎵</span> 3:36
            </div>
          </div>
          <div className="flex gap-3 px-1">
            <div className="w-9 h-9 rounded-full overflow-hidden shrink-0">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=usha" alt="Usha Editors Avatar" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 flex flex-col">
              <div className="flex justify-between items-start gap-1">
                <h4 className="text-[14px] font-medium text-slate-100 line-clamp-2 leading-snug">
                  HAAREYA(ORGINAL VERSION BY ARIJIT SINGH)
                </h4>
                <span className="text-slate-400 font-bold text-[14px] cursor-default leading-none">⋮</span>
              </div>
              <p className="text-[12px] text-slate-400 mt-1">Usha Editors</p>
              <p className="text-[12px] text-slate-500 mt-0.5">112k views • 11 days ago</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

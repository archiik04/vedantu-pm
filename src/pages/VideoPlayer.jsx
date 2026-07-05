import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ThumbsUp, MessageSquare, Share2, Download, Flag } from 'lucide-react';

const VIDEO_DETAILS = {
  latent: {
    title: "INDIA'S GOT LATENT S2 EP2 ft. Harssh Limbachiya, Kiku Sharda, Chandan Prabhakar",
    channel: "Samay Raina",
    views: "24m views",
    time: "1 day ago",
    img: "/latent.png",
    duration: "1:01:25",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=samay"
  },
  jihyun: {
    title: "🏡 vlog | Homebody days: eating, working & studying | Buldak naengmyeon, brie toast, ...",
    channel: "지현꿍",
    views: "279k views",
    time: "1 month ago",
    img: "/jihyun.png",
    duration: "25:59",
    avatar: "/sub_saranghoe.png"
  },
  coursera: {
    title: "Continue Your Journey With AI",
    channel: "Coursera",
    views: "Sponsored",
    time: "Ad",
    img: "/coursera_ai.png",
    duration: "Sponsored",
    avatar: "/sub_breanna.png"
  },
  lego: {
    title: "F1 LEGO Race In Full | 2025 Miami Grand Prix",
    channel: "FORMULA 1",
    views: "7.5m views",
    time: "1 year ago",
    img: "/lego_f1.png",
    duration: "15:45",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=f1"
  },
  code: {
    title: "Chai aur Book Reading",
    channel: "Chai aur Code",
    views: "38k views",
    time: "Streamed 4 days ago",
    img: "/chai_book.png",
    duration: "1:27:59",
    avatar: "/sub_mitali.png"
  },
  music: {
    title: "HAAREYA(ORGINAL VERSION BY ARIJIT SINGH)",
    channel: "Usha Editors",
    views: "112k views",
    time: "11 days ago",
    img: "/haareya.png",
    duration: "3:36",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=usha"
  }
};

export default function VideoPlayer() {
  const { id = 'latent' } = useParams();
  const navigate = useNavigate();
  const video = VIDEO_DETAILS[id] || VIDEO_DETAILS.latent;

  // Scroll to top when loading another video
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col lg:flex-row gap-6 pb-24 h-[calc(100vh-56px)] bg-[#0F0F0F] text-white">
      
      {/* Left side: Main Video Player Block */}
      <div className="flex-1 flex flex-col gap-4">
        
        {/* Mock Player viewport */}
        <div className="w-full aspect-video bg-[#151515] border border-white/5 rounded-2xl overflow-hidden relative shadow-lg group">
          <img 
            src={video.img} 
            alt={video.title} 
            className="w-full h-full object-cover select-none pointer-events-none"
          />
          {/* Overlay play button mock */}
          <div className="absolute inset-0 bg-black/35 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 cursor-pointer hover:scale-105 active:scale-95 transition-transform">
              <span className="text-xl">▶</span>
            </div>
          </div>
          {/* Progress bar mock */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/15">
            <div className="bg-[#FF0000] h-full" style={{ width: '45%' }}></div>
          </div>
        </div>

        {/* Video details metadata block */}
        <h1 className="text-lg font-bold text-[#F1F1F1] mt-1 leading-snug">{video.title}</h1>
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/5 pb-4">
          
          {/* Channel Info & Subscribe Button */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-white/5">
              <img src={video.avatar} alt={video.channel} className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white flex items-center gap-1">
                <span>{video.channel}</span>
                <span className="w-3 h-3 bg-slate-650/60 text-slate-300 text-[8px] font-black rounded-full flex items-center justify-center">✓</span>
              </p>
              <p className="text-[11px] text-[#A8A8A8]">1.24M subscribers</p>
            </div>
            <button className="ml-4 bg-white text-black font-semibold text-xs px-4 py-2 rounded-full hover:bg-[#E5E5E5] transition-colors cursor-pointer select-none">
              Subscribe
            </button>
          </div>

          {/* Action buttons (Like, Share, Download) */}
          <div className="flex items-center gap-2">
            
            {/* Like & Dislike */}
            <div className="flex items-center bg-[#222222] border border-white/5 rounded-full overflow-hidden">
              <button className="flex items-center gap-1.5 px-4 py-2 hover:bg-[#303030] text-xs font-semibold border-r border-white/5 cursor-pointer">
                <ThumbsUp className="w-3.5 h-3.5" /> 142K
              </button>
              <button className="px-3.5 py-2 hover:bg-[#303030] cursor-pointer">
                <ThumbsUp className="w-3.5 h-3.5 rotate-180" />
              </button>
            </div>

            {/* Share */}
            <button className="flex items-center gap-1.5 bg-[#222222] hover:bg-[#303030] border border-white/5 px-4 py-2 rounded-full text-xs font-semibold cursor-pointer">
              <Share2 className="w-3.5 h-3.5" /> Share
            </button>

            {/* Download */}
            <button className="flex items-center gap-1.5 bg-[#222222] hover:bg-[#303030] border border-white/5 px-4 py-2 rounded-full text-xs font-semibold cursor-pointer">
              <Download className="w-3.5 h-3.5" /> Download
            </button>

          </div>

        </div>

        {/* Description panel block */}
        <div className="p-4 bg-[#1B1B1B] border border-white/5 rounded-xl text-xs leading-relaxed select-none">
          <div className="flex items-center gap-2 text-xs font-semibold text-white mb-2">
            <span>{video.views}</span>
            <span>•</span>
            <span>{video.time}</span>
          </div>
          <p className="text-[#A8A8A8] font-light leading-relaxed">
            Welcome to the official stream page. Don't forget to like, subscribe, and hit the notifications bell. Check out the latest links and resources below!
          </p>
        </div>

      </div>

      {/* Right side: Recommendation queue */}
      <div className="w-full lg:w-[360px] shrink-0 flex flex-col gap-4 select-none">
        <h3 className="text-sm font-semibold text-white">Next Up</h3>
        
        {Object.entries(VIDEO_DETAILS).map(([key, item]) => {
          if (key === id) return null; // skip playing video
          return (
            <div 
              key={key}
              onClick={() => navigate(`/watch/${key}`)}
              className="flex gap-2.5 bg-transparent hover:bg-white/5 p-1 rounded-xl cursor-pointer transition-colors group"
            >
              <div className="w-[140px] aspect-video bg-slate-800 rounded-lg relative overflow-hidden shrink-0">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute bottom-1 right-1 bg-black/85 px-1 py-0.5 rounded text-[8px] font-bold text-white">
                  {item.duration}
                </div>
              </div>
              <div className="flex-1 flex flex-col">
                <h4 className="text-xs font-medium text-slate-100 line-clamp-2 leading-snug group-hover:text-white">
                  {item.title}
                </h4>
                <p className="text-[10px] text-slate-400 mt-1">{item.channel}</p>
                <p className="text-[10px] text-slate-500 mt-0.5">{item.views}</p>
              </div>
            </div>
          );
        })}

      </div>

    </div>
  );
}

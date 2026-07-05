import React from 'react';

export default function HistoryTab({ type, paused, setPaused, showToast, setActiveTab }) {
  const isWatch = type === 'watch';
  const title = isWatch ? 'Watch History' : 'Search Activity';
  const desc = isWatch 
    ? "Manage how YouTube stores Aanya's watch activity." 
    : "Manage search logs saved to child profiles.";

  return (
    <div className="flex flex-col animate-fadeIn space-y-10">
      
      <div className="flex flex-col border-b border-white/5 pb-7">
        <h1 className="text-[34px] font-light text-[#F7F7F7] tracking-tight leading-tight">{title}</h1>
        <p className="text-xs text-[#A8A8A8] mt-1.5 font-light">{desc}</p>
      </div>

      <div className="bg-gradient-to-b from-[#1B1B1B] to-[#131313] border border-white/5 rounded-[24px] p-7.5 shadow-[0_12px_40px_rgba(0,0,0,0.65)] flex flex-col gap-4 relative overflow-hidden before:absolute before:inset-0 before:rounded-[24px] before:border-t before:border-white/10 before:pointer-events-none">
        
        {/* Row 1: Toggles */}
        <div className="p-5 bg-[#242424]/40 border border-white/5 rounded-2xl flex justify-between items-center hover:bg-[#242424] transition-all hover:scale-[1.01] duration-200">
          <div className="max-w-[70%]">
            <h4 className="text-[14px] font-medium text-[#F7F7F7]">
              {isWatch ? 'Save watch history' : 'Save search queries'}
            </h4>
            <p className="text-[13px] text-[#A8A8A8] mt-1 leading-relaxed font-light">
              {isWatch 
                ? "Saves lists of videos watched on Aanya's Google account to improve personalized recommendation feeds."
                : "Saves search index details to speed up auto-complete lists."
              }
            </p>
          </div>
          <button 
            onClick={() => {
              setPaused(!paused);
              showToast(isWatch 
                ? (paused ? "YouTube watch history logging resumed." : "YouTube watch history logging paused.")
                : (paused ? "YouTube search history logging resumed." : "YouTube search history logging paused.")
              );
            }}
            className={`w-10 h-6 rounded-full p-0.5 transition-colors relative cursor-pointer ${paused ? 'bg-[#131313] border border-white/5' : 'bg-[#4285F4]'}`}
          >
            <div className={`w-4.5 h-4.5 rounded-full bg-white transition-transform shadow-md ${paused ? 'translate-x-0' : 'translate-x-4'}`}></div>
          </button>
        </div>

        {/* Row 2: Auto Delete */}
        <div className="p-5 bg-[#242424]/40 border border-white/5 rounded-2xl flex justify-between items-center hover:bg-[#242424] transition-all hover:scale-[1.01] duration-200">
          <div>
            <h4 className="text-[14px] font-medium text-[#F7F7F7]">Auto Delete</h4>
            <p className="text-[13px] text-[#A8A8A8] mt-1 font-light">Automatically delete activity logs older than a specific age.</p>
          </div>
          <span className="text-[12px] font-bold text-[#4285F4] bg-[#4285F4]/10 border border-[#4285F4]/20 px-3.5 py-1 rounded-full uppercase tracking-wider select-none">
            18 Months
          </span>
        </div>

        {/* Row 3: View History link */}
        <div 
          onClick={() => setActiveTab('privacy')}
          className="p-5 bg-[#242424]/20 hover:bg-[#242424]/50 border border-white/5 rounded-2xl flex justify-between items-center cursor-pointer transition-all hover:scale-[1.01] duration-200"
        >
          <span className="text-[13px] font-semibold text-[#4285F4]">View History Logs</span>
          <span className="text-[12px] text-[#A8A8A8]">→</span>
        </div>

      </div>

    </div>
  );
}

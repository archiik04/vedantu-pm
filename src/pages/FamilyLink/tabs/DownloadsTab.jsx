import React from 'react';
import { Database, Download } from 'lucide-react';

export default function DownloadsTab({ showToast }) {
  return (
    <div className="flex flex-col animate-fadeIn space-y-10">
      
      <div className="flex flex-col border-b border-white/5 pb-7">
        <h1 className="text-[34px] font-light text-[#F7F7F7] tracking-tight leading-tight">Downloads</h1>
        <p className="text-xs text-[#A8A8A8] mt-1.5 font-light">Export Aanya's full database logs.</p>
      </div>

      <div className="bg-gradient-to-b from-[#1B1B1B] to-[#131313] border border-white/5 rounded-[24px] p-7.5 shadow-[0_12px_40px_rgba(0,0,0,0.65)] flex flex-col gap-6 relative overflow-hidden before:absolute before:inset-0 before:rounded-[24px] before:border-t before:border-white/10 before:pointer-events-none">
        <div>
          <h3 className="text-[18px] font-medium text-[#F7F7F7]">Request Data Export</h3>
          <p className="text-[14px] text-[#A8A8A8] mt-2 leading-relaxed font-light">
            Download a copy of her watched videos history list, typed search queries, and comments database logs.
          </p>
        </div>

        {/* Export history logs as premium list items with status tags */}
        <div className="flex flex-col gap-3.5 select-none">
          
          <div className="p-5 bg-[#242424]/40 border border-white/5 rounded-2xl flex items-center justify-between hover:bg-[#242424] cursor-pointer transition-all duration-200 hover:scale-[1.01] shadow-md">
            <div className="flex items-center gap-3.5">
              <Database className="w-5 h-5 text-[#A8A8A8]" />
              <div>
                <p className="text-[#F7F7F7] font-medium text-xs">YouTube Watched Videos Trails Export</p>
                <p className="text-[10px] text-[#777777] mt-0.5">Size: 42 KB • JSON format</p>
              </div>
            </div>
            <span className="flex items-center gap-2 bg-[#34A853]/10 border border-[#34A853]/15 rounded-lg px-3 py-1.5 text-xs font-semibold text-[#F7F7F7] select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-[#34A853] shrink-0"></span>
              Completed
            </span>
          </div>
          
          <div className="p-5 bg-[#242424]/40 border border-white/5 rounded-2xl flex items-center justify-between hover:bg-[#242424] cursor-pointer transition-all duration-200 hover:scale-[1.01] shadow-md">
            <div className="flex items-center gap-3.5">
              <Database className="w-5 h-5 text-[#A8A8A8]" />
              <div>
                <p className="text-[#F7F7F7] font-medium text-xs">Typed Search Queries & Comments History</p>
                <p className="text-[10px] text-[#777777] mt-0.5">Size: 12 KB • CSV format</p>
              </div>
            </div>
            <span className="flex items-center gap-2 bg-[#4285F4]/10 border border-[#4285F4]/15 rounded-lg px-3 py-1.5 text-xs font-semibold text-[#F7F7F7] select-none animate-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4285F4] shrink-0"></span>
              Processing
            </span>
          </div>

        </div>

        <button 
          onClick={() => showToast("Preparing full export pack. Download link sent to parent's email.")}
          className="px-6 py-2.5 bg-gradient-to-b from-white to-[#E5E5E5] hover:from-[#FAFAFA] hover:to-[#D5D5D5] text-black font-semibold rounded-full shadow-[0_4px_12px_rgba(255,255,255,0.12)] transition-all duration-200 hover:scale-[1.01] active:scale-[0.98] flex items-center gap-2 self-start cursor-pointer"
        >
          <Download className="w-3.5 h-3.5" />
          Request Export
        </button>
      </div>

    </div>
  );
}

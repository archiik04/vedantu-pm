import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, Mic, Bell, Shield } from 'lucide-react';

export default function Header({ sidebarExpanded, setSidebarExpanded }) {
  const navigate = useNavigate();

  return (
    <div className="h-14 bg-[#0F0F0F] pl-4 pr-6 flex items-center justify-between shrink-0 select-none z-35 border-b border-[rgba(255,255,255,0.06)] w-full">
      
      {/* Left logo section */}
      <div className="flex items-center gap-4">
        <button 
          onClick={() => setSidebarExpanded(!sidebarExpanded)}
          className="text-white hover:bg-white/10 p-1.5 rounded-full transition-colors cursor-pointer"
        >
          <Menu className="w-5 h-5" />
        </button>
        <div 
          onClick={() => navigate('/')}
          className="flex items-center gap-1 cursor-pointer select-none"
        >
          <div className="w-[28px] h-[20px] bg-[#FF0000] rounded-[4px] flex items-center justify-center shrink-0">
            <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[7px] border-l-white ml-0.5"></div>
          </div>
          <span className="font-sans font-black text-lg tracking-tighter text-white uppercase select-none flex items-center relative">
            YouTube
            <span className="text-[8px] text-slate-455 absolute -top-1.5 -right-3 font-normal tracking-normal lowercase">in</span>
          </span>
        </div>
      </div>

      {/* Center search bar */}
      <div className="flex items-center">
        <div className="flex items-center bg-[#121212] border border-[#303030] rounded-l-full px-4 w-[480px] h-[40px] shrink-0 focus-within:border-[#1A73E8] transition-colors">
          <input 
            type="text" 
            placeholder="Search" 
            disabled
            className="bg-transparent border-none text-sm text-[#f1f1f1] w-full focus:outline-none placeholder-[#888888] cursor-not-allowed"
          />
        </div>
        <button className="w-[64px] h-[40px] bg-[#222222] border-y border-r border-[#303030] rounded-r-full flex items-center justify-center hover:bg-[#303030] transition-colors cursor-not-allowed shrink-0">
          <svg className="w-4.5 h-4.5 text-slate-350" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
        <button className="w-[40px] h-[40px] rounded-full bg-[#222222] hover:bg-[#303030] ml-3 flex items-center justify-center transition-colors cursor-not-allowed text-white shrink-0">
          <Mic className="w-4.5 h-4.5 text-slate-200" />
        </button>
      </div>

      {/* Right Profile Controls */}
      <div className="flex items-center gap-3">
        {/* Create "+ Video" pill */}
        <button className="bg-[#222222] hover:bg-[#303030] border border-[#303030] text-xs font-semibold px-4 py-2 rounded-full transition-colors cursor-not-allowed flex items-center gap-1 text-white">
          <span className="text-sm font-light">+</span> Create
        </button>
        
        {/* Notification mock bell */}
        <button className="w-[40px] h-[40px] rounded-full hover:bg-white/10 flex items-center justify-center relative transition-colors cursor-not-allowed text-white">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 bg-[#CC0000] text-white text-[8px] font-black w-4 h-4 rounded-full flex items-center justify-center border border-[#0F0F0F]">
            9+
          </span>
        </button>

        {/* Supervised profile pill (Interactive shortcut to Family Link Home) */}
        <button 
          onClick={() => navigate('/family-link/overview')}
          className="flex items-center gap-2 bg-[#222222] hover:bg-[#2e2e2e] border border-[#303030] pl-2.5 pr-3 py-1 rounded-full text-[10px] font-bold text-[#F1F3F4] hover:text-white shadow-sm cursor-pointer transition-colors select-none group active:scale-[0.98]"
        >
          <Shield className="w-3.5 h-3.5 text-white group-hover:scale-102 transition-transform" />
          <span>Aanya's Profile</span>
          <div className="w-6.5 h-6.5 rounded-full overflow-hidden border border-slate-700/20 shadow-md ml-0.5 shrink-0">
            <img src="/sub_saranghoe.png" alt="Aanya Profile Avatar" className="w-full h-full object-cover" />
          </div>
        </button>
      </div>

    </div>
  );
}

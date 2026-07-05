import React from 'react';
import { Shield, ChevronRight, Smartphone } from 'lucide-react';

export default function OverviewTab({ setActiveTab }) {
  return (
    <div className="flex flex-col animate-fadeIn space-y-10">
      {/* Top Hero Heading Block */}
      <div className="flex flex-col border-b border-white/5 pb-7">
        <h1 className="text-[42px] font-extralight text-[#F7F7F7] tracking-tight leading-tight">
          Your Family, <br />
          <span className="font-light">Safely Supervised</span>
        </h1>
        <div className="flex items-center gap-3 mt-4">
          <span className="bg-[#34A853]/10 text-[#34A853] border border-[#34A853]/15 text-[10px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider select-none">
            Supervision Active
          </span>
          <span className="text-xs text-[#777777]">Aanya • 12 years old</span>
        </div>
      </div>

      {/* Primary Actions Grid */}
      <div className="flex flex-col gap-6">
        <h2 className="text-[18px] font-medium text-[#F7F7F7] tracking-tight">Status & Controls</h2>
        
        <div className="grid grid-cols-2 gap-5">
          {/* NEW INTEGRATION FEATURE CARD (Privacy Center highlighted) */}
          <div 
            onClick={() => setActiveTab('privacy')}
            className="col-span-2 bg-[#242424]/40 hover:bg-[#242424]/75 border border-[#4285F4]/30 rounded-[24px] p-6.5 flex items-center justify-between shadow-[0_8px_32px_rgba(0,0,0,0.55)] cursor-pointer transition-all hover:scale-[1.01] relative overflow-hidden before:absolute before:inset-0 before:rounded-[24px] before:border-t before:border-white/5 before:pointer-events-none"
          >
            <div className="flex items-center gap-4.5">
              {/* Dark highlighted circle on left */}
              <div className="w-12 h-12 rounded-full bg-[#4285F4]/10 border border-[#4285F4]/20 flex items-center justify-center text-[#4285F4] shrink-0">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="bg-[#4285F4]/15 text-[#4285F4] border border-[#4285F4]/20 text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">New Control</span>
                  <span className="text-[11px] text-[#777777]">YouTube Logs</span>
                </div>
                <h3 className="text-[15px] font-medium text-[#F7F7F7] mt-1">YouTube Privacy Center</h3>
                <p className="text-xs text-[#A8A8A8] mt-0.5 font-light">
                  Pause search activity, delete watched videos trails, or request complete history data packages.
                </p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-[#777777] shrink-0" />
          </div>

          {/* Screen Time widget */}
          <div className="bg-[#242424]/30 border border-white/5 rounded-[24px] p-7 shadow-lg flex flex-col justify-between min-h-[160px] relative overflow-hidden before:absolute before:inset-0 before:rounded-[24px] before:border-t before:border-white/5 before:pointer-events-none">
            <div>
              <p className="text-[11px] text-[#777777] uppercase font-bold tracking-wider">Screen Time Today</p>
              <p className="text-xl font-bold text-[#F7F7F7] mt-2">35m <span className="text-xs font-light text-[#777777]">/ 2hr limit</span></p>
            </div>
            {/* Custom Password Health style rounded progress bar */}
            <div className="w-full bg-[#131313] h-3 rounded-full overflow-hidden mt-4 shrink-0 p-0.5 border border-white/5 shadow-inner">
              <div className="bg-gradient-to-r from-white to-[#E5E5E5] h-full rounded-full shadow-[0_0_8px_rgba(255,255,255,0.4)]" style={{ width: '30%' }}></div>
            </div>
          </div>

          {/* Location widget */}
          <div className="bg-[#242424]/30 border border-white/5 rounded-[24px] p-7 shadow-lg flex flex-col justify-between min-h-[160px] relative overflow-hidden before:absolute before:inset-0 before:rounded-[24px] before:border-t before:border-white/5 before:pointer-events-none">
            <div>
              <p className="text-[11px] text-[#777777] uppercase font-bold tracking-wider">Real-time Location</p>
              <h4 className="text-[14px] font-medium text-[#F7F7F7] mt-2.5">Home</h4>
              <p className="text-xs text-[#777777] mt-0.5 font-light">Device GPS tracking active</p>
            </div>
            <div className="text-[11px] text-[#34A853] font-bold bg-[#34A853]/10 px-3 py-1 rounded-full border border-[#34A853]/15 self-start select-none">Updated 2m ago</div>
          </div>

          {/* App Restrictions widget */}
          <div className="col-span-2 bg-[#242424]/30 border border-white/5 rounded-[24px] p-6.5 flex items-center justify-between shadow-lg relative overflow-hidden before:absolute before:inset-0 before:rounded-[24px] before:border-t before:border-white/5 before:pointer-events-none">
            <div className="flex items-center gap-4.5 relative z-10">
              <div className="w-10 h-10 rounded-full bg-[#242424]/50 border border-white/5 flex items-center justify-center text-[#A8A8A8] shrink-0">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-[#F7F7F7]">App block lists & restrictions</h4>
                <p className="text-xs text-[#A8A8A8] mt-0.5 font-light">YouTube Kids (Allowed) • Chrome (Filtered) • Search (Filtered)</p>
              </div>
            </div>
            <span className="text-xs text-[#777777] bg-[#131313] px-3.5 py-1.5 rounded-xl border border-white/5 relative z-10">Standard rules enforced</span>
          </div>
        </div>
      </div>
    </div>
  );
}

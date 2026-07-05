import React from 'react';
import { Smartphone, Mic, Lock, ChevronRight } from 'lucide-react';

export default function PermissionsTab() {
  return (
    <div className="flex flex-col animate-fadeIn space-y-10">
      
      <div className="flex flex-col border-b border-white/5 pb-7">
        <h1 className="text-[34px] font-light text-[#F7F7F7] tracking-tight leading-tight">Permissions</h1>
        <p className="text-xs text-[#A8A8A8] mt-1.5 font-light">Standard app permissions tracker.</p>
      </div>

      {/* High fidelity list rows matching native desktop app settings */}
      <div className="flex flex-col gap-3.5 select-none">
        
        {/* Row 1: Geolocation */}
        <div className="p-5 bg-gradient-to-b from-[#1B1B1B] to-[#131313] border border-white/5 rounded-2xl flex items-center justify-between hover:bg-[#242424] cursor-pointer transition-all duration-200 hover:scale-[1.01] shadow-lg relative overflow-hidden before:absolute before:inset-0 before:rounded-2xl before:border-t before:border-white/5 before:pointer-events-none">
          <div className="flex items-center gap-4.5">
            <Smartphone className="w-5 h-5 text-[#A8A8A8] shrink-0" />
            <div>
              <h4 className="text-sm font-medium text-[#F7F7F7]">Device Geolocation tracking</h4>
              <p className="text-xs text-[#A8A8A8] mt-0.5 font-light">Allows parent to verify GPS coordinates in real-time</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <span className="text-[#34A853] font-semibold bg-[#34A853]/10 px-2.5 py-0.5 rounded border border-[#34A853]/15">Allowed</span>
            <ChevronRight className="w-4 h-4 text-[#777777]" />
          </div>
        </div>

        {/* Row 2: Microphone & Audio */}
        <div className="p-5 bg-gradient-to-b from-[#1B1B1B] to-[#131313] border border-white/5 rounded-2xl flex items-center justify-between hover:bg-[#242424] cursor-pointer transition-all duration-200 hover:scale-[1.01] shadow-lg relative overflow-hidden before:absolute before:inset-0 before:rounded-2xl before:border-t before:border-white/5 before:pointer-events-none">
          <div className="flex items-center gap-4.5">
            <Mic className="w-5 h-5 text-[#A8A8A8] shrink-0" />
            <div>
              <h4 className="text-sm font-medium text-[#F7F7F7]">System Microphone & Audio logs</h4>
              <p className="text-xs text-[#A8A8A8] mt-0.5 font-light">Stores Assistant voice query recordings</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <span className="text-[#FBBC05] font-semibold bg-[#FBBC05]/10 px-2.5 py-0.5 rounded border border-[#FBBC05]/15">Filtered</span>
            <ChevronRight className="w-4 h-4 text-[#777777]" />
          </div>
        </div>

        {/* Row 3: Google Purchase Approvals */}
        <div className="p-5 bg-gradient-to-b from-[#1B1B1B] to-[#131313] border border-white/5 rounded-2xl flex items-center justify-between hover:bg-[#242424] cursor-pointer transition-all duration-200 hover:scale-[1.01] shadow-lg relative overflow-hidden before:absolute before:inset-0 before:rounded-2xl before:border-t before:border-white/5 before:pointer-events-none">
          <div className="flex items-center gap-4.5">
            <Lock className="w-5 h-5 text-[#A8A8A8] shrink-0" />
            <div>
              <h4 className="text-sm font-medium text-[#F7F7F7]">Google Purchase Approvals</h4>
              <p className="text-xs text-[#A8A8A8] mt-0.5 font-light">Require guardian consent for Play Store transactions</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <span className="text-[#4285F4] font-semibold bg-[#4285F4]/10 px-2.5 py-0.5 rounded border border-[#4285F4]/15">Required</span>
            <ChevronRight className="w-4 h-4 text-[#777777]" />
          </div>
        </div>

      </div>

    </div>
  );
}

import React from 'react';

export default function SettingsTab() {
  return (
    <div className="flex flex-col animate-fadeIn space-y-10">
      <div className="flex flex-col border-b border-white/5 pb-7">
        <h1 className="text-[34px] font-light text-[#F7F7F7] tracking-tight leading-tight">Settings</h1>
        <p className="text-xs text-[#A8A8A8] mt-1.5 font-light">General settings configuration panel.</p>
      </div>
      <div className="bg-gradient-to-b from-[#1B1B1B] to-[#131313] border border-white/5 rounded-[24px] p-7.5 text-[#A8A8A8] text-xs shadow-lg">
        Supervision limits are managed via Family Link.
      </div>
    </div>
  );
}

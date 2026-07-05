import React from 'react';

export default function Toast({ toast, setToast }) {
  return (
    <div className={`absolute bottom-8 right-8 z-[100] bg-[#1B1B1B] text-[#F7F7F7] text-xs font-light px-5 py-3.5 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.65)] flex items-center justify-between gap-6 transition-all duration-300 border border-white/5 transform ${
      toast.visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'
    }`}>
      <div className="flex items-center gap-2">
        <span>{toast.message}</span>
      </div>
      <button 
        onClick={() => setToast(prev => ({ ...prev, visible: false }))}
        className="text-xs font-medium text-[#4285F4] hover:text-[#6C9EFD] transition-colors cursor-pointer"
      >
        Dismiss
      </button>
    </div>
  );
}

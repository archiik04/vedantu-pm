import React from 'react';

export default function RecommendationsTab({ setErasedCategories, showToast }) {
  return (
    <div className="flex flex-col animate-fadeIn space-y-10">
      
      <div className="flex flex-col border-b border-white/5 pb-7">
        <h1 className="text-[34px] font-light text-[#F7F7F7] tracking-tight leading-tight">Recommendations</h1>
        <p className="text-xs text-[#A8A8A8] mt-1.5 font-light">Reset personalized video suggestion indices.</p>
      </div>

      <div className="bg-gradient-to-b from-[#1B1B1B] to-[#131313] border border-white/5 rounded-[24px] p-7.5 shadow-[0_12px_40px_rgba(0,0,0,0.65)] relative overflow-hidden before:absolute before:inset-0 before:rounded-[24px] before:border-t before:border-white/10 before:pointer-events-none">
        <h3 className="text-[18px] font-medium text-[#F7F7F7]">Reset Feed Index</h3>
        <p className="text-[14px] text-[#A8A8A8] mt-2.5 leading-relaxed font-light">
          Personalized feeds are generated using search and watch histories. Wiping this index resets recommendation logs to neutral defaults.
        </p>
        <button 
          onClick={() => {
            setErasedCategories(prev => ({ ...prev, comments: true }));
            showToast("Aanya's feed recommendations reset successfully.");
          }}
          className="mt-6 px-6 py-2.5 bg-gradient-to-b from-white to-[#E5E5E5] hover:from-[#FAFAFA] hover:to-[#D5D5D5] text-black font-semibold rounded-full shadow-[0_4px_12px_rgba(255,255,255,0.12)] transition-all duration-200 hover:scale-[1.01] active:scale-[0.98] cursor-pointer"
        >
          Reset recommendations
        </button>
      </div>

    </div>
  );
}

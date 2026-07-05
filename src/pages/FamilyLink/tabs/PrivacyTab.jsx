import React from 'react';
import { 
  Shield, 
  Play, 
  Compass, 
  Database, 
  Mic, 
  CheckCircle2, 
  ChevronRight 
} from 'lucide-react';

export default function PrivacyTab({ 
  setActiveTab, 
  watchHistoryPaused, 
  searchHistoryPaused, 
  voiceAudioPaused, 
  setDeleteStep, 
  setDeleteCheckbox1, 
  setDeleteCheckbox2, 
  showToast,
  erasedCategories
}) {
  const isCleared = erasedCategories?.watchSearch;

  return (
    <div className="flex flex-col animate-fadeIn space-y-10">
      {/* Heading */}
      <div className="flex flex-col border-b border-white/5 pb-7">
        <h1 className="text-[42px] font-extralight text-[#F7F7F7] tracking-tight leading-tight">
          Privacy <span className="font-light">Center</span>
        </h1>
        <p className="text-xs text-[#A8A8A8] mt-1.5 font-light">Managing Aanya's YouTube Account</p>
      </div>

      {/* Section 1: Privacy Health Audit */}
      <div className="bg-[#242424]/30 border border-white/5 rounded-[24px] p-7 flex items-center justify-between shadow-[0_12px_40px_rgba(0,0,0,0.65)] relative overflow-hidden before:absolute before:inset-0 before:rounded-[24px] before:border-t before:border-white/5 before:pointer-events-none">
        <div className="flex-1 max-w-[65%]">
          <h3 className="text-[16px] font-medium text-[#F7F7F7] tracking-tight">Privacy Health Audit</h3>
          <p className="text-xs text-[#A8A8A8] mt-2 leading-relaxed font-light">
            Verification modules evaluate active trackers, unencrypted metadata tags, and search index registers.
          </p>
          <div className="flex items-center gap-3.5 mt-4">
            <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#34A853]/10 text-[#F7F7F7] border border-[#34A853]/15 shadow-sm select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-[#34A853] shrink-0"></span>
              Optimized (92%)
            </span>
          </div>
        </div>
        
        {/* SVG Trend Graph matching Dark Web Monitoring design */}
        <div className="w-28 h-16 shrink-0 relative opacity-80 select-none">
          <svg className="w-full h-full" viewBox="0 0 100 50">
            <line x1="0" y1="12.5" x2="100" y2="12.5" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
            <line x1="0" y1="25" x2="100" y2="25" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
            <line x1="0" y1="37.5" x2="100" y2="37.5" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
            <line x1="25" y1="0" x2="25" y2="50" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
            <line x1="50" y1="0" x2="50" y2="50" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
            <line x1="75" y1="0" x2="75" y2="50" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
            <path 
              d="M0,42 Q20,18 40,32 T80,14 T100,6" 
              fill="none" 
              stroke="#34A853" 
              strokeWidth="1.5" 
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {/* Section 2: Recent Activity Timeline */}
      <div className="flex flex-col gap-4 select-none">
        <h2 className="text-[18px] font-medium text-[#F7F7F7] tracking-tight">Recent Activity logs</h2>
        
        <div className="flex flex-col gap-3.5">
          {isCleared ? (
            <div className="p-5 bg-[#242424]/10 border border-white/5 border-dashed rounded-2xl flex items-center justify-center text-center py-8 select-none">
              <div className="flex flex-col items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#34A853] opacity-90" />
                <span className="text-xs font-semibold text-[#F7F7F7]">Activity logs cleared just now</span>
                <span className="text-[11px] text-[#A8A8A8] font-light">Watch and search histories are empty across all surfaces.</span>
              </div>
            </div>
          ) : (
            <>
              {/* Row 1 */}
              <div className="p-4 bg-[#242424]/30 border border-white/5 rounded-2xl flex items-center justify-between hover:bg-[#242424] transition-all hover:scale-[1.01] duration-200 shadow-md">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#131313] border border-white/5 flex items-center justify-center text-[#A8A8A8] shrink-0">
                    <Play className="w-4 h-4 fill-current text-[#F7F7F7]" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-[#F7F7F7]">Watched: Khan Academy Algebra Basics</p>
                    <p className="text-[10px] text-[#777777] mt-0.5">Category: YouTube History • Aanya</p>
                  </div>
                </div>
                <span className="text-[11px] text-[#A8A8A8] font-light">Yesterday, 1:40 PM</span>
              </div>

              {/* Row 2 */}
              <div className="p-4 bg-[#242424]/30 border border-white/5 rounded-2xl flex items-center justify-between hover:bg-[#242424] transition-all hover:scale-[1.01] duration-200 shadow-md">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#131313] border border-white/5 flex items-center justify-center text-[#A8A8A8] shrink-0">
                    <Compass className="w-4 h-4 text-[#F7F7F7]" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-[#F7F7F7]">Removed Search query: "Minecraft mods"</p>
                    <p className="text-[10px] text-[#777777] mt-0.5">Category: Activity Log Control • Parent</p>
                  </div>
                </div>
                <span className="text-[11px] text-[#A8A8A8] font-light">Yesterday, 10:15 AM</span>
              </div>

              {/* Row 3 */}
              <div className="p-4 bg-[#242424]/30 border border-white/5 rounded-2xl flex items-center justify-between hover:bg-[#242424] transition-all hover:scale-[1.01] duration-200 shadow-md">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#131313] border border-white/5 flex items-center justify-center text-[#A8A8A8] shrink-0">
                    <Database className="w-4 h-4 text-[#F7F7F7]" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-[#F7F7F7]">Downloaded: Full activity database logs request package</p>
                    <p className="text-[10px] text-[#777777] mt-0.5">Category: Backups • Parent</p>
                  </div>
                </div>
                <span className="text-[11px] text-[#A8A8A8] font-light">2 Days Ago, 3:55 PM</span>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Section 3: Quick Actions */}
      <div className="flex flex-col gap-4">
        <h2 className="text-[18px] font-medium text-[#F7F7F7] tracking-tight">Quick Actions</h2>
        
        <div className="flex flex-wrap gap-3.5">
          <button 
            onClick={() => setActiveTab('downloads')}
            className="px-6 py-2.5 bg-gradient-to-b from-white to-[#E5E5E5] hover:from-[#FAFAFA] hover:to-[#D5D5D5] text-black font-semibold rounded-full shadow-[0_4px_12px_rgba(255,255,255,0.12)] transition-all duration-200 hover:scale-[1.01] active:scale-[0.98] select-none cursor-pointer"
          >
            Export Data
          </button>

          <button 
            onClick={() => {
              setDeleteStep(1);
              setDeleteCheckbox1(false);
              setDeleteCheckbox2(false);
              setActiveTab('delete-data');
            }}
            className="px-6 py-2.5 bg-gradient-to-b from-[#252525] to-[#151515] hover:from-[#303030] hover:to-[#1C1C1C] border border-white/5 text-[#F7F7F7] font-semibold rounded-full shadow-lg transition-all duration-200 hover:scale-[1.01] active:scale-[0.98] select-none cursor-pointer"
          >
            Delete Activity
          </button>

          <button 
            onClick={() => setActiveTab('watch-history')}
            className="px-6 py-2.5 bg-gradient-to-b from-[#252525] to-[#151515] hover:from-[#303030] hover:to-[#1C1C1C] border border-white/5 text-[#F7F7F7] font-semibold rounded-full shadow-lg transition-all duration-200 hover:scale-[1.01] active:scale-[0.98] select-none cursor-pointer"
          >
            Pause Tracking
          </button>

          <button 
            onClick={() => showToast("Consent settings updated.")}
            className="px-6 py-2.5 bg-gradient-to-b from-[#252525] to-[#151515] hover:from-[#303030] hover:to-[#1C1C1C] border border-white/5 text-[#F7F7F7] font-semibold rounded-full shadow-lg transition-all duration-200 hover:scale-[1.01] active:scale-[0.98] select-none cursor-pointer"
          >
            Manage Consent
          </button>
        </div>
      </div>

      {/* Section 4: Data Categories */}
      <div className="flex flex-col gap-4">
        <h2 className="text-[18px] font-medium text-[#F7F7F7] tracking-tight">Data Categories</h2>
        
        <div className="flex flex-col gap-3.5">
          {/* Watch History */}
          <div 
            onClick={() => setActiveTab('watch-history')}
            className="p-5 bg-[#242424]/30 border border-white/5 rounded-2xl flex items-center justify-between hover:bg-[#242424] cursor-pointer transition-all hover:scale-[1.01] duration-200 shadow-md"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#131313] border border-white/5 flex items-center justify-center text-[#A8A8A8] shrink-0">
                <Play className="w-4 h-4 fill-current text-[#F7F7F7]" />
              </div>
              <div>
                <p className="text-xs font-medium text-[#F7F7F7]">Watch History settings</p>
                <p className="text-[10px] text-[#777777] mt-0.5">Status: {watchHistoryPaused ? 'Paused' : 'Active'}</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-[#777777]" />
          </div>

          {/* Search Activity */}
          <div 
            onClick={() => setActiveTab('search-activity')}
            className="p-5 bg-[#242424]/30 border border-white/5 rounded-2xl flex items-center justify-between hover:bg-[#242424] cursor-pointer transition-all hover:scale-[1.01] duration-200 shadow-md"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#131313] border border-white/5 flex items-center justify-center text-[#A8A8A8] shrink-0">
                <Compass className="w-4 h-4 text-[#F7F7F7]" />
              </div>
              <div>
                <p className="text-xs font-medium text-[#F7F7F7]">Search Activity settings</p>
                <p className="text-[10px] text-[#777777] mt-0.5">Status: {searchHistoryPaused ? 'Paused' : 'Active'}</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-[#777777]" />
          </div>

          {/* Voice & Audio */}
          <div 
            onClick={() => showToast("Voice activity details loaded.")}
            className="p-5 bg-[#242424]/30 border border-white/5 rounded-2xl flex items-center justify-between hover:bg-[#242424] cursor-pointer transition-all hover:scale-[1.01] duration-200 shadow-md"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#131313] border border-white/5 flex items-center justify-center text-[#A8A8A8] shrink-0">
                <Mic className="w-4 h-4 text-[#F7F7F7]" />
              </div>
              <div>
                <p className="text-xs font-medium text-[#F7F7F7]">Voice and audio logging</p>
                <p className="text-[10px] text-[#777777] mt-0.5">Status: {voiceAudioPaused ? 'Paused' : 'Active'}</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-[#777777]" />
          </div>

          {/* Recommendations */}
          <div 
            onClick={() => setActiveTab('recommendations')}
            className="p-5 bg-[#242424]/30 border border-white/5 rounded-2xl flex items-center justify-between hover:bg-[#242424] cursor-pointer transition-all hover:scale-[1.01] duration-200 shadow-md"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#131313] border border-white/5 flex items-center justify-center text-[#A8A8A8] shrink-0">
                <CheckCircle2 className="w-4 h-4 text-[#F7F7F7]" />
              </div>
              <div>
                <p className="text-xs font-medium text-[#F7F7F7]">Recommendations index</p>
                <p className="text-[10px] text-[#777777] mt-0.5">Status: Standard feed</p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-[#777777]" />
          </div>
        </div>
      </div>
    </div>
  );
}

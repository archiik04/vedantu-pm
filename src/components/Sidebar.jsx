import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Shield, ChevronRight } from 'lucide-react';

const HomeSvg = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M4 10V21h6v-6h4v6h6V10l-8-7z" />
  </svg>
);

const ShortsSvg = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M17.77 10.32c-.77-.32-1.2-1.08-1.2-1.08L18 8c1.12-.9 1.12-2.56 0-3.46l-4.5-3.6a2.76 2.76 0 00-3.6 0L5.4 4.54a2.23 2.23 0 000 3.46l1.23 1s-.43.76-1.2 1.08a4.13 4.13 0 00-2.3 4.88c.36 1.83 1.8 3.04 3.77 3.04H8v2h8v-2h1.53c1.97 0 3.4-1.2 3.77-3.04a4.13 4.13 0 00-2.3-4.88zM10 14.65v-5.3L15 12l-5 2.65z" />
  </svg>
);

const SubscriptionsSvg = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z" />
  </svg>
);

const AppleProfile = () => (
  <div className="w-5.5 h-5.5 rounded-full bg-white flex items-center justify-center border border-slate-700/20 shadow-sm overflow-hidden shrink-0">
    <svg viewBox="0 0 170 170" className="w-3.5 h-3.5 fill-black">
      <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.36.13-9.13-1.88-14.31-6.02-3.69-3.04-7.53-7.73-11.51-14.07-8.94-14.24-13.4-28.78-13.4-43.61 0-16.14 4.36-29.6 13.08-40.37 8.71-10.77 19.34-16.22 31.9-16.34 5.37 0 11.18 1.63 17.43 4.88 6.25 3.25 10.43 4.88 12.54 4.88 1.9 0 5.92-1.57 12.06-4.7 6.13-3.13 11.89-4.64 17.29-4.52 14.8.62 26.17 6.01 34.12 16.15-13.08 7.92-19.5 18.59-19.25 32 0 10.7 4.12 19.67 12.36 26.92 8.24 7.25 18.23 11.25 29.98 12-.62 2.12-1.55 4.56-2.76 7.33zm-29.2-103.45c0 7.98-2.88 15.15-8.62 21.5-6.02 6.56-13.29 10.15-21.8 10.77.13-7.61 3.12-14.8 8.97-21.57 5.4-6.32 12.63-10.02 21.7-11.1 0 .27-.25.4-.25.4z" />
    </svg>
  </div>
);

const FccProfile = () => (
  <div className="w-5.5 h-5.5 rounded-full bg-[#0a0a23] flex items-center justify-center border border-slate-750/30 shadow-sm overflow-hidden shrink-0">
    <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 text-white" fill="currentColor">
      <path d="M8 0c-.6 0-1.1.2-1.5.5C6.1 1 5 2.1 4.5 3.4 3.7 5.5 4.1 7.6 5 9.4c-.2-.6-.4-1.3-.4-2 0-1.2.5-2.2 1.4-2.8.2-.1.5.1.4.3-.2.9.1 1.9.9 2.5.8.6 1.8.6 2.5-.1.8-.8.9-2 .4-3C9.7 3.5 9.1 2.8 8.8 2c-.1-.3.2-.5.4-.3.9 1.1 2.4 1.5 3 2.7.5 1.1.2 2.5-.7 3.3.2-.5.3-1.1.3-1.7 0-1.2-.5-2.2-1.4-2.8-.2-.1-.5.1-.4.3.2.9-.1 1.9-.9 2.5-.8.6-1.8.6-2.5-.1-.8-.8-.9-2-.4-3 .5-.8 1.1-1.5 1.4-2.3.1-.3-.2-.5-.4-.3-.9 1.1-2.4 1.5-3 2.7-.5 1.1-.2 2.5.7 3.3.8-.8.9-2 .4-3-.2-.3-.5-.6-.7-.9z" />
    </svg>
  </div>
);

const GiftProfile = () => (
  <div className="w-5.5 h-5.5 rounded-full bg-[#004D40] flex items-center justify-center border border-slate-700/20 shadow-sm overflow-hidden shrink-0">
    <svg viewBox="0 0 24 24" className="w-4.5 h-4.5" fill="none">
      <circle cx="12" cy="12" r="10" stroke="#4CAF50" strokeWidth="2" fill="#00796B" />
      <circle cx="12" cy="12" r="6" stroke="#FF9800" strokeWidth="1.5" />
      <path d="M12 8v8M8 12h8" stroke="#FFFFFF" strokeWidth="1.5" />
    </svg>
  </div>
);

export default function Sidebar({ sidebarExpanded }) {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isFamilyLink = location.pathname.startsWith('/family-link');

  if (sidebarExpanded) {
    return (
      <div className="w-60 bg-[#0F0F0F] shrink-0 border-r border-[rgba(255,255,255,0.06)] flex flex-col py-3 select-none overflow-y-auto h-[calc(100vh-56px)] scrollbar-thin scrollbar-thumb-slate-800">
        
        {/* Top Navigation Group */}
        <div className="flex flex-col px-3 gap-0.5">
          <div 
            onClick={() => navigate('/')}
            className={`flex items-center gap-6 px-3 py-2 text-[14px] cursor-pointer rounded-xl transition-colors ${
              isHome ? 'font-bold text-white bg-white/10' : 'font-medium text-slate-300 hover:bg-white/5'
            }`}
          >
            <HomeSvg className="w-5 h-5 text-white" />
            <span>Home</span>
          </div>
          
          {/* Family Link link embedded natively right here */}
          <div 
            onClick={() => navigate('/family-link/overview')}
            className={`flex items-center gap-6 px-3 py-2 text-[14px] cursor-pointer rounded-xl transition-colors ${
              isFamilyLink ? 'font-bold text-white bg-white/10' : 'font-medium text-slate-300 hover:bg-white/5'
            }`}
          >
            <Shield className="w-5 h-5 text-slate-400" />
            <span>Family Link</span>
          </div>

          <div className="flex items-center gap-6 px-3 py-2 text-[14px] font-medium text-slate-350 hover:bg-white/5 rounded-xl cursor-not-allowed">
            <ShortsSvg className="w-5 h-5 text-slate-455" />
            <span>Shorts</span>
          </div>
          <div className="flex items-center gap-6 px-3 py-2 text-[14px] font-medium text-slate-350 hover:bg-white/5 rounded-xl cursor-not-allowed">
            <SubscriptionsSvg className="w-5 h-5 text-slate-455" />
            <span>Subscriptions</span>
          </div>
        </div>

        <div className="h-px bg-slate-800/60 my-3 mx-3"></div>

        {/* Subscriptions section */}
        <div className="flex flex-col px-3 gap-0.5">
          <div className="flex items-center justify-between px-3 py-1 text-sm font-bold text-white mb-1">
            <span>Subscriptions</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          </div>
          
          <div className="flex items-center justify-between px-3 py-1.5 text-xs rounded-xl hover:bg-white/5 cursor-not-allowed">
            <div className="flex items-center gap-3">
              <AppleProfile />
              <span className="truncate max-w-[120px]">Apple</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-1.5"></div>
          </div>

          <div className="flex items-center justify-between px-3 py-1.5 text-xs rounded-xl hover:bg-white/5 cursor-not-allowed">
            <div className="flex items-center gap-3">
              <div className="w-5.5 h-5.5 rounded-full overflow-hidden shrink-0 border border-slate-700/20">
                <img src="/sub_mitali.png" alt="Mitali Profile" className="w-full h-full object-cover" />
              </div>
              <span className="truncate max-w-[120px]">Mitali This Side!!</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-1.5"></div>
          </div>

          <div className="flex items-center justify-between px-3 py-1.5 text-xs rounded-xl hover:bg-white/5 cursor-not-allowed">
            <div className="flex items-center gap-3">
              <div className="w-5.5 h-5.5 rounded-full overflow-hidden shrink-0 border border-slate-700/20">
                <img src="/sub_saranghoe.png" alt="Saranghoe Profile" className="w-full h-full object-cover" />
              </div>
              <span className="truncate max-w-[120px]">saranghoe</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-1.5"></div>
          </div>

          <div className="flex items-center justify-between px-3 py-1.5 text-xs rounded-xl hover:bg-white/5 cursor-not-allowed">
            <div className="flex items-center gap-3">
              <div className="w-5.5 h-5.5 rounded-full overflow-hidden shrink-0 border border-slate-700/20">
                <img src="/sub_breanna.png" alt="Breanna Profile" className="w-full h-full object-cover" />
              </div>
              <span className="truncate max-w-[120px]">Breanna Quan</span>
            </div>
          </div>

          <div className="flex items-center justify-between px-3 py-1.5 text-xs rounded-xl hover:bg-white/5 cursor-not-allowed">
            <div className="flex items-center gap-3">
              <FccProfile />
              <span className="truncate max-w-[120px]">freeCodeCamp.org</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-1.5"></div>
          </div>

          <div className="flex items-center justify-between px-3 py-1.5 text-xs rounded-xl hover:bg-white/5 cursor-not-allowed">
            <div className="flex items-center gap-3">
              <div className="w-5.5 h-5.5 rounded-full overflow-hidden shrink-0 border border-slate-700/20">
                <img src="/sub_taneesha.png" alt="Taneesha Profile" className="w-full h-full object-cover" />
              </div>
              <span className="truncate max-w-[120px]">Taneesha</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-1.5"></div>
          </div>

          <div className="flex items-center justify-between px-3 py-1.5 text-xs rounded-xl hover:bg-white/5 cursor-not-allowed">
            <div className="flex items-center gap-3">
              <GiftProfile />
              <span className="truncate max-w-[120px]">Global Innovation F...</span>
            </div>
          </div>
        </div>

        <div className="h-px bg-slate-800/60 my-3 mx-3"></div>

        {/* Legal Copyright Footer */}
        <div className="px-6 py-2 flex flex-col gap-3 text-[10.5px] font-bold text-slate-500 leading-tight">
          <div className="flex flex-wrap gap-x-2.5 gap-y-1">
            <span className="hover:underline cursor-not-allowed">About</span>
            <span className="hover:underline cursor-not-allowed">Press</span>
            <span className="hover:underline cursor-not-allowed">Terms</span>
            <span className="hover:underline cursor-not-allowed">Privacy</span>
          </div>
          <div className="text-[9.5px] text-slate-600 font-normal mt-2">
            © 2026 Google LLC
          </div>
        </div>
      </div>
    );
  }

  // Collapsed narrower view
  return (
    <div className="w-18 bg-[#0F0F0F] shrink-0 flex flex-col py-3 px-1 items-center gap-6 select-none z-10 border-r border-[rgba(255,255,255,0.06)]">
      
      {/* Home */}
      <div 
        onClick={() => navigate('/')}
        className={`w-full flex flex-col items-center py-2 rounded-xl transition-all cursor-pointer select-none ${
          isHome ? 'text-white' : 'text-slate-400 hover:text-white hover:bg-white/5'
        }`}
      >
        <HomeSvg className="w-6 h-6 text-white" />
        <span className="text-[10.5px] font-normal mt-1.5 font-sans">Home</span>
      </div>

      {/* Family Link Tab */}
      <div 
        onClick={() => navigate('/family-link/overview')}
        className={`w-full flex flex-col items-center py-2 rounded-xl transition-all cursor-pointer select-none ${
          isFamilyLink ? 'text-white' : 'text-slate-400 hover:text-white hover:bg-white/5'
        }`}
      >
        <Shield className="w-6 h-6 text-slate-400" />
        <span className="text-[10.5px] font-normal mt-1.5 font-sans">Family Link</span>
      </div>

      {/* Shorts */}
      <div className="w-full flex flex-col items-center py-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-xl cursor-not-allowed select-none">
        <ShortsSvg className="w-6 h-6 text-slate-400" />
        <span className="text-[10.5px] font-normal mt-1.5 font-sans">Shorts</span>
      </div>

      {/* Subscriptions */}
      <div className="w-full flex flex-col items-center py-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-xl cursor-not-allowed select-none">
        <SubscriptionsSvg className="w-6 h-6 text-slate-400" />
        <span className="text-[10.5px] font-normal mt-1.5 font-sans">Subscriptions</span>
      </div>
    </div>
  );
}

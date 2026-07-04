import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  ChevronRight, 
  Shield, 
  Trash2, 
  Download, 
  CheckCircle2, 
  Mic, 
  Play, 
  MessageSquare, 
  AlertTriangle, 
  User, 
  Lock, 
  Settings, 
  Wifi, 
  Battery, 
  Check, 
  Smartphone,
  Layers,
  Database,
  Menu,
  Bell,
  Home,
  Compass,
  Gamepad2,
  ShoppingBag,
  Film,
  Flag,
  ThumbsUp,
  Clock,
  ChevronDown
} from 'lucide-react';

// Custom Accurate YouTube SVGs
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

const YouCircleSvg = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M18 21a6 6 0 0 0-12 0" />
    <circle cx="12" cy="10" r="4" />
  </svg>
);

// Subscription custom vector profile pictures
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

export default function App() {
  // Navigation State (Starts with Screen 0)
  const [currentScreen, setCurrentScreen] = useState('screen0');
  
  // Data Clearance States
  const [erasedCategories, setErasedCategories] = useState({
    watchSearch: false,
    voiceAudio: false,
    comments: false
  });
  
  // Inline Confirmation States (shows cancel/confirm inline for each category)
  const [inlineConfirm, setInlineConfirm] = useState({
    watchSearch: false,
    voiceAudio: false,
    comments: false
  });

  // Screen 4 Erasure Scope
  const [erasureScope, setErasureScope] = useState('youtube'); // 'device' | 'youtube' | 'all'

  // Toast Notification State
  const [toast, setToast] = useState({
    message: '',
    visible: false
  });

  // Screen 5 Processing Spinner State
  const [processing, setProcessing] = useState(false);
  const [processingStep, setProcessingStep] = useState(0);

  // Sidebar Expansion State (true: expanded 240px, false: collapsed 72px)
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  // Toggle "You" sidebar popover when collapsed
  const [youMenuOpen, setYouMenuOpen] = useState(false);

  // Auto-dismiss toast helper
  const showToast = (message) => {
    setToast({ message, visible: true });
  };

  useEffect(() => {
    if (toast.visible) {
      const timer = setTimeout(() => {
        setToast(prev => ({ ...prev, visible: false }));
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toast.visible]);

  // Simulate server processing on Screen 5
  useEffect(() => {
    if (processing) {
      const interval = setInterval(() => {
        setProcessingStep(prev => {
          if (prev >= 3) {
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, 400);

      const timer = setTimeout(() => {
        setProcessing(false);
        setProcessingStep(0);
        // Wipe all categories upon successful full-scope erase
        setErasedCategories({
          watchSearch: true,
          voiceAudio: true,
          comments: true
        });
        setCurrentScreen('screen6');
      }, 1600);

      return () => {
        clearInterval(interval);
        clearTimeout(timer);
      };
    }
  }, [processing]);

  // Sidebar navigation settings list for Family Link (screens 1-6)
  const settingsNavItems = [
    { key: 'home', label: 'Home', screens: ['screen1'] },
    { key: 'screentime', label: 'Screen time', screens: [] },
    { key: 'restrictions', label: 'Content restrictions', screens: [] },
    { key: 'permissions', label: 'App permissions', screens: [] },
    { key: 'privacy', label: 'Privacy & data', screens: ['screen2', 'screen3', 'screen4', 'screen5', 'screen6'] },
  ];

  // Helper to render left settings panel
  const isNavActive = (item) => {
    return item.screens.includes(currentScreen);
  };

  return (
    <div className="h-screen w-screen bg-[#0F0F0F] font-sans select-none flex flex-col overflow-hidden">
      
      {/* Content Viewport Wrapper */}
      <div className="flex-1 overflow-hidden flex flex-col relative bg-white">
        
        {/* SCREEN 0: YouTube Web Desktop (Dark Theme matching exact screenshot) */}
        {currentScreen === 'screen0' && (
          <div className="flex-1 flex flex-col bg-[#0F0F0F] text-white overflow-hidden animate-fadeIn relative">
            
            {/* YouTube Desktop Header */}
            <div className="h-14 bg-[#0F0F0F] pl-4 pr-6 flex items-center justify-between shrink-0 select-none z-35">
              
              {/* Left logo section */}
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setSidebarExpanded(!sidebarExpanded)}
                  className="text-white hover:bg-white/10 p-1.5 rounded-full transition-colors cursor-pointer"
                >
                  <Menu className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-1 cursor-pointer select-none">
                  <div className="w-[28px] h-[20px] bg-[#FF0000] rounded-[4px] flex items-center justify-center shrink-0">
                    <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[7px] border-l-white ml-0.5"></div>
                  </div>
                  <span className="font-sans font-black text-lg tracking-tighter text-white uppercase select-none flex items-center relative">
                    YouTube
                    <span className="text-[8px] text-slate-400 absolute -top-1.5 -right-3 font-normal tracking-normal lowercase">in</span>
                  </span>
                </div>
              </div>

              {/* Center search bar */}
              <div className="flex items-center">
                <div className="flex items-center bg-[#121212] border border-[#303030] rounded-l-full px-4 w-[480px] h-[40px] shrink-0">
                  <input 
                    type="text" 
                    placeholder="Search" 
                    disabled
                    className="bg-transparent border-none text-sm text-[#f1f1f1] w-full focus:outline-none placeholder-[#888888] cursor-not-allowed"
                  />
                </div>
                <button className="w-[64px] h-[40px] bg-[#222222] border-y border-r border-[#303030] rounded-r-full flex items-center justify-center hover:bg-[#303030] transition-colors cursor-not-allowed shrink-0">
                  <svg className="w-4.5 h-4.5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                
                {/* Notification mock bell with '9+' badge */}
                <button className="w-[40px] h-[40px] rounded-full hover:bg-white/10 flex items-center justify-center relative transition-colors cursor-not-allowed text-white">
                  <Bell className="w-5 h-5" />
                  <span className="absolute top-1.5 right-1.5 bg-[#CC0000] text-white text-[8px] font-black w-4 h-4 rounded-full flex items-center justify-center border border-[#0F0F0F]">
                    9+
                  </span>
                </button>

                {/* Supervised profile pill & avatar (Interactive, points to Family Link Screen 1) */}
                <button 
                  onClick={() => setCurrentScreen('screen1')}
                  className="flex items-center gap-2 bg-[#222222] hover:bg-[#333333] border border-[#303030] pl-2.5 pr-3 py-1 rounded-full text-[10px] font-bold text-amber-400 shadow-sm cursor-pointer hover:text-amber-300 transition-all select-none group active:scale-[0.98]"
                  title="Manage settings in Family Link"
                >
                  <Shield className="w-3.5 h-3.5 text-amber-400 group-hover:scale-105 transition-transform" />
                  <span>Aanya's Profile</span>
                  <div className="w-6.5 h-6.5 rounded-full bg-gradient-to-tr from-navy to-navy-2 flex items-center justify-center text-white text-[10px] font-black shadow-md ml-0.5 group-hover:opacity-90">
                    A
                  </div>
                </button>
              </div>
            </div>

            {/* YouTube Desktop Sidebar + Content Feed */}
            <div className="flex-1 flex overflow-hidden relative animate-fadeIn">
              
              {/* SIDEBAR COMPONENT */}
              {sidebarExpanded ? (
                /* EXPANDED SIDEBAR: w-60 (240px) */
                <div className="w-60 bg-[#0F0F0F] shrink-0 border-r border-[#202020]/25 flex flex-col py-3 select-none overflow-y-auto h-[calc(100vh-56px)] scrollbar-thin scrollbar-thumb-slate-800">
                  
                  {/* Top Links */}
                  <div className="flex flex-col px-3 gap-0.5">
                    <div className="flex items-center gap-6 px-3 py-2 text-[14px] font-bold text-white bg-white/10 rounded-xl cursor-default">
                      <HomeSvg className="w-5 h-5 text-white" />
                      <span>Home</span>
                    </div>
                    <div className="flex items-center gap-6 px-3 py-2 text-[14px] font-medium text-slate-300 hover:bg-white/5 rounded-xl cursor-not-allowed">
                      <ShortsSvg className="w-5 h-5 text-slate-400" />
                      <span>Shorts</span>
                    </div>
                    <div className="flex items-center gap-6 px-3 py-2 text-[14px] font-medium text-slate-300 hover:bg-white/5 rounded-xl cursor-not-allowed">
                      <SubscriptionsSvg className="w-5 h-5 text-slate-400" />
                      <span>Subscriptions</span>
                    </div>
                  </div>

                  <div className="h-px bg-slate-800/60 my-3 mx-3"></div>

                  {/* Subscriptions section with real images inside circles */}
                  <div className="flex flex-col px-3 gap-0.5">
                    <div className="flex items-center justify-between px-3 py-1 text-sm font-bold text-white mb-1">
                      <span>Subscriptions</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                    </div>
                    
                    {/* Apple */}
                    <div className="flex items-center justify-between px-3 py-1.5 text-xs rounded-xl hover:bg-white/5 cursor-not-allowed">
                      <div className="flex items-center gap-3">
                        <AppleProfile />
                        <span className="truncate max-w-[120px]">Apple</span>
                      </div>
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-1.5"></div>
                    </div>

                    {/* Mitali This Side!! */}
                    <div className="flex items-center justify-between px-3 py-1.5 text-xs rounded-xl hover:bg-white/5 cursor-not-allowed">
                      <div className="flex items-center gap-3">
                        <div className="w-5.5 h-5.5 rounded-full overflow-hidden shrink-0 border border-slate-700/20">
                          <img src="/sub_mitali.png" alt="Mitali Profile" className="w-full h-full object-cover" />
                        </div>
                        <span className="truncate max-w-[120px]">Mitali This Side!!</span>
                      </div>
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-1.5"></div>
                    </div>

                    {/* saranghoe */}
                    <div className="flex items-center justify-between px-3 py-1.5 text-xs rounded-xl hover:bg-white/5 cursor-not-allowed">
                      <div className="flex items-center gap-3">
                        <div className="w-5.5 h-5.5 rounded-full overflow-hidden shrink-0 border border-slate-700/20">
                          <img src="/sub_saranghoe.png" alt="Saranghoe Profile" className="w-full h-full object-cover" />
                        </div>
                        <span className="truncate max-w-[120px]">saranghoe</span>
                      </div>
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-1.5"></div>
                    </div>

                    {/* Breanna Quan */}
                    <div className="flex items-center justify-between px-3 py-1.5 text-xs rounded-xl hover:bg-white/5 cursor-not-allowed">
                      <div className="flex items-center gap-3">
                        <div className="w-5.5 h-5.5 rounded-full overflow-hidden shrink-0 border border-slate-700/20">
                          <img src="/sub_breanna.png" alt="Breanna Profile" className="w-full h-full object-cover" />
                        </div>
                        <span className="truncate max-w-[120px]">Breanna Quan</span>
                      </div>
                    </div>

                    {/* freeCodeCamp.org */}
                    <div className="flex items-center justify-between px-3 py-1.5 text-xs rounded-xl hover:bg-white/5 cursor-not-allowed">
                      <div className="flex items-center gap-3">
                        <FccProfile />
                        <span className="truncate max-w-[120px]">freeCodeCamp.org</span>
                      </div>
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-1.5"></div>
                    </div>

                    {/* Taneesha */}
                    <div className="flex items-center justify-between px-3 py-1.5 text-xs rounded-xl hover:bg-white/5 cursor-not-allowed">
                      <div className="flex items-center gap-3">
                        <div className="w-5.5 h-5.5 rounded-full overflow-hidden shrink-0 border border-slate-700/20">
                          <img src="/sub_taneesha.png" alt="Taneesha Profile" className="w-full h-full object-cover" />
                        </div>
                        <span className="truncate max-w-[120px]">Taneesha</span>
                      </div>
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-1.5"></div>
                    </div>

                    {/* Global Innovation Field Trip */}
                    <div className="flex items-center justify-between px-3 py-1.5 text-xs rounded-xl hover:bg-white/5 cursor-not-allowed">
                      <div className="flex items-center gap-3">
                        <GiftProfile />
                        <span className="truncate max-w-[120px]">Global Innovation F...</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 px-3 py-1.5 text-xs rounded-xl hover:bg-white/5 text-slate-400 cursor-not-allowed">
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                      <span>Show more</span>
                    </div>
                  </div>

                  <div className="h-px bg-slate-800/60 my-3 mx-3"></div>

                  {/* You section (with Parental controls integration) */}
                  <div className="flex flex-col px-3 gap-0.5">
                    <div className="flex items-center justify-between px-3 py-1 text-sm font-bold text-white mb-1">
                      <span>You</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                    </div>

                    <div className="flex items-center gap-6 px-3 py-1.5 text-xs text-slate-300 hover:bg-white/5 rounded-xl cursor-not-allowed">
                      <User className="w-4.5 h-4.5 text-slate-400" />
                      <span>Your channel</span>
                    </div>

                    <div className="flex items-center gap-6 px-3 py-1.5 text-xs text-slate-300 hover:bg-white/5 rounded-xl cursor-not-allowed">
                      <Clock className="w-4.5 h-4.5 text-slate-400" />
                      <span>History</span>
                    </div>

                    <div className="flex items-center gap-6 px-3 py-1.5 text-xs text-slate-300 hover:bg-white/5 rounded-xl cursor-not-allowed">
                      <Layers className="w-4.5 h-4.5 text-slate-400" />
                      <span>Playlists</span>
                    </div>

                    <div className="flex items-center gap-6 px-3 py-1.5 text-xs text-slate-300 hover:bg-white/5 rounded-xl cursor-not-allowed">
                      <Clock className="w-4.5 h-4.5 text-slate-400" />
                      <span>Watch Later</span>
                    </div>

                    <div className="flex items-center gap-6 px-3 py-1.5 text-xs text-slate-300 hover:bg-white/5 rounded-xl cursor-not-allowed">
                      <ThumbsUp className="w-4.5 h-4.5 text-slate-400" />
                      <span>Liked videos</span>
                    </div>

                    {/* INTERACTIVE PARENTAL CONTROLS LINK */}
                    <div 
                      onClick={() => setCurrentScreen('screen1')}
                      className="flex items-center gap-6 px-3 py-2 text-xs font-bold bg-navy/25 hover:bg-navy text-indigo-300 hover:text-white rounded-xl border border-indigo-500/10 hover:border-indigo-400/20 cursor-pointer transition-all group"
                    >
                      <Shield className="w-4.5 h-4.5 text-indigo-400 group-hover:text-white shrink-0 fill-current opacity-85" />
                      <div className="flex flex-col">
                        <span className="leading-tight">Parental controls</span>
                        <span className="text-[7.5px] text-indigo-400/80 group-hover:text-white/80 font-normal">Manage settings</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 px-3 py-1.5 text-xs rounded-xl hover:bg-white/5 text-slate-400 cursor-not-allowed">
                      <ChevronDown className="w-4.5 h-4.5 text-slate-400" />
                      <span>Show more</span>
                    </div>
                  </div>

                  <div className="h-px bg-slate-800/60 my-3 mx-3"></div>

                  {/* Explore Section */}
                  <div className="flex flex-col px-3 gap-0.5">
                    <div className="px-3 py-1 text-xs font-bold text-white mb-1">Explore</div>
                    
                    <div className="flex items-center gap-6 px-3 py-1.5 text-xs text-slate-300 hover:bg-white/5 rounded-xl cursor-not-allowed">
                      <ShoppingBag className="w-4.5 h-4.5 text-slate-400" />
                      <span>Shopping</span>
                    </div>

                    <div className="flex items-center gap-6 px-3 py-1.5 text-xs text-slate-300 hover:bg-white/5 rounded-xl cursor-not-allowed">
                      <Play className="w-4.5 h-4.5 text-slate-400" />
                      <span>Music</span>
                    </div>

                    <div className="flex items-center gap-6 px-3 py-1.5 text-xs text-slate-300 hover:bg-white/5 rounded-xl cursor-not-allowed">
                      <Film className="w-4.5 h-4.5 text-slate-400" />
                      <span>Films</span>
                    </div>

                    <div className="flex items-center gap-6 px-3 py-1.5 text-slate-400 hover:bg-white/5 rounded-xl cursor-not-allowed">
                      <ChevronDown className="w-4.5 h-4.5 text-slate-400" />
                      <span>Show more</span>
                    </div>
                  </div>

                  <div className="h-px bg-slate-800/60 my-3 mx-3"></div>

                  {/* More from YouTube Section */}
                  <div className="flex flex-col px-3 gap-0.5">
                    <div className="px-3 py-1 text-xs font-bold text-white mb-1">More from YouTube</div>

                    <div className="flex items-center gap-6 px-3 py-1.5 text-xs text-slate-300 hover:bg-white/5 rounded-xl cursor-not-allowed">
                      <div className="w-4.5 h-4.5 rounded-full bg-[#FF0000] flex items-center justify-center text-white text-[8px] font-black">Y</div>
                      <span>YouTube Premium</span>
                    </div>

                    <div className="flex items-center gap-6 px-3 py-1.5 text-xs text-slate-300 hover:bg-white/5 rounded-xl cursor-not-allowed">
                      <div className="w-4.5 h-4.5 rounded-full bg-[#FF0000] flex items-center justify-center text-white text-[8px] font-black">M</div>
                      <span>YouTube Music</span>
                    </div>

                    <div className="flex items-center gap-6 px-3 py-1.5 text-xs text-slate-300 hover:bg-white/5 rounded-xl cursor-not-allowed">
                      <div className="w-4.5 h-4.5 rounded-full bg-[#FF0000] flex items-center justify-center text-white text-[8px] font-black">K</div>
                      <span>YouTube Kids</span>
                    </div>
                  </div>

                  <div className="h-px bg-slate-800/60 my-3 mx-3"></div>

                  {/* Report history */}
                  <div className="flex flex-col px-3 gap-0.5">
                    <div className="flex items-center gap-6 px-3 py-1.5 text-xs text-slate-300 hover:bg-white/5 rounded-xl cursor-not-allowed">
                      <Flag className="w-4.5 h-4.5 text-slate-400" />
                      <span>Report history</span>
                    </div>
                  </div>

                  <div className="h-px bg-slate-800/60 my-3 mx-3"></div>

                  {/* Footer small links */}
                  <div className="px-6 py-2 flex flex-col gap-3 text-[10.5px] font-bold text-slate-400 leading-tight">
                    <div className="flex flex-wrap gap-x-2.5 gap-y-1">
                      <span className="cursor-not-allowed hover:underline">About</span>
                      <span className="cursor-not-allowed hover:underline">Press</span>
                      <span className="cursor-not-allowed hover:underline">Copyright</span>
                    </div>
                    <div className="flex flex-wrap gap-x-2.5 gap-y-1">
                      <span className="cursor-not-allowed hover:underline">Contact us</span>
                      <span className="cursor-not-allowed hover:underline">Creator</span>
                      <span className="cursor-not-allowed hover:underline">Advertise</span>
                    </div>
                    <div className="cursor-not-allowed hover:underline">Developers</div>
                    
                    <div className="h-[1px] bg-transparent my-1"></div>

                    <div className="flex flex-wrap gap-x-2.5 gap-y-1">
                      <span className="cursor-not-allowed hover:underline">Terms</span>
                      <span className="cursor-not-allowed hover:underline">Privacy</span>
                      <span className="cursor-not-allowed hover:underline">Policy & Safety</span>
                    </div>
                    <div className="cursor-not-allowed hover:underline">How YouTube works</div>
                    <div className="cursor-not-allowed hover:underline">Test new features</div>
                    
                    <div className="text-[9.5px] text-slate-500 font-normal mt-4">
                      © 2026 Google LLC
                    </div>
                  </div>

                </div>
              ) : (
                /* COLLAPSED SIDEBAR: w-18 (72px) narrow view matching screenshot exactly */
                <div className="w-18 bg-[#0F0F0F] shrink-0 flex flex-col py-3 px-1 items-center gap-6 select-none z-10">
                  
                  {/* Home (Active) */}
                  <div className="w-full flex flex-col items-center py-2 text-white cursor-default select-none">
                    <HomeSvg className="w-6 h-6 text-white" />
                    <span className="text-[10.5px] font-normal mt-1.5 font-sans">Home</span>
                  </div>

                  {/* Shorts */}
                  <div className="w-full flex flex-col items-center py-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-xl cursor-not-allowed select-none transition-colors">
                    <ShortsSvg className="w-6 h-6 text-slate-400" />
                    <span className="text-[10.5px] font-normal mt-1.5 font-sans">Shorts</span>
                  </div>

                  {/* Subscriptions */}
                  <div className="w-full flex flex-col items-center py-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-xl cursor-not-allowed select-none transition-colors">
                    <SubscriptionsSvg className="w-6 h-6 text-slate-400" />
                    <span className="text-[10.5px] font-normal mt-1.5 font-sans">Subscriptions</span>
                  </div>
                  
                  {/* Clicking "You" in collapsed sidebar toggles the popover dropdown menu */}
                  <div 
                    onClick={() => setYouMenuOpen(!youMenuOpen)}
                    className={`w-full flex flex-col items-center py-2 rounded-xl transition-all cursor-pointer select-none ${
                      youMenuOpen 
                        ? 'bg-white/10 text-white font-bold' 
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <YouCircleSvg className="w-6 h-6 text-slate-400" />
                    <span className="text-[10.5px] font-normal mt-1.5 font-sans">You</span>
                  </div>

                </div>
              )}

              {/* Main Content Area (Video grid, Scrollable) */}
              <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-4 pb-20 relative h-[calc(100vh-56px)] bg-[#0F0F0F]">
                
                {/* Filters chips bar with right chevron */}
                <div className="flex items-center gap-2.5 overflow-x-hidden shrink-0 pb-1 select-none text-xs w-full relative">
                  <span className="bg-white text-black font-semibold px-3 py-1.5 rounded-lg cursor-default shrink-0">All</span>
                  <span className="bg-[#222222] hover:bg-[#303030] text-white px-3 py-1.5 rounded-lg cursor-not-allowed transition-colors shrink-0">Music</span>
                  <span className="bg-[#222222] hover:bg-[#303030] text-white px-3 py-1.5 rounded-lg cursor-not-allowed transition-colors shrink-0">Mixes</span>
                  <span className="bg-[#222222] hover:bg-[#303030] text-white px-3 py-1.5 rounded-lg cursor-not-allowed transition-colors shrink-0">Podcasts</span>
                  <span className="bg-[#222222] hover:bg-[#303030] text-white px-3 py-1.5 rounded-lg cursor-not-allowed transition-colors shrink-0">Romantic comedies</span>
                  <span className="bg-[#222222] hover:bg-[#303030] text-white px-3 py-1.5 rounded-lg cursor-not-allowed transition-colors shrink-0">AI</span>
                  <span className="bg-[#222222] hover:bg-[#303030] text-white px-3 py-1.5 rounded-lg cursor-not-allowed transition-colors shrink-0">Colleges</span>
                  <span className="bg-[#222222] hover:bg-[#303030] text-white px-3 py-1.5 rounded-lg cursor-not-allowed transition-colors shrink-0">Korean cuisines</span>
                  <span className="bg-[#222222] hover:bg-[#303030] text-white px-3 py-1.5 rounded-lg cursor-not-allowed transition-colors shrink-0">Formula 1</span>
                  <span className="bg-[#222222] hover:bg-[#303030] text-white px-3 py-1.5 rounded-lg cursor-not-allowed transition-colors shrink-0">Lunches</span>
                  <span className="bg-[#222222] hover:bg-[#303030] text-white px-3 py-1.5 rounded-lg cursor-not-allowed transition-colors shrink-0">Data Structures</span>
                  <span className="bg-[#222222] hover:bg-[#303030] text-white px-3 py-1.5 rounded-lg cursor-not-allowed transition-colors shrink-0">Indian pop music</span>
                  {/* Right chevron pill */}
                  <div className="absolute right-0 top-0 bottom-0 bg-gradient-to-l from-[#0F0F0F] via-[#0F0F0F]/90 to-transparent w-16 flex items-center justify-end pr-1 select-none">
                    <div className="w-7 h-7 rounded-full bg-[#1F1F1F] flex items-center justify-center text-white pointer-events-auto cursor-not-allowed">
                      <ChevronRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* 3-Column Video Grid (Replicating exactly your uploaded screenshots) */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-10 mt-2">
                  
                  {/* Card 1: INDIA'S GOT LATENT S2 EP2 */}
                  <div className="flex flex-col gap-2.5 bg-transparent hover:bg-white/5 p-2 rounded-2xl shadow-sm shrink-0 transition-colors group">
                    <div className="w-full aspect-video bg-slate-800 rounded-xl relative overflow-hidden shrink-0">
                      <img 
                        src="/latent.png" 
                        alt="India's Got Latent" 
                        className="w-full h-full object-cover transition-transform group-hover:scale-101 animate-fadeIn"
                      />
                      <div className="absolute bottom-2.5 right-2.5 bg-black/80 px-1.5 py-0.5 rounded text-[9.5px] font-bold select-none text-white tracking-wide">
                        1:01:25
                      </div>
                    </div>
                    <div className="flex gap-3 px-1">
                      {/* Avatar with Dicebear character face */}
                      <div className="w-9 h-9 rounded-full overflow-hidden shrink-0">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=samay" alt="Samay Raina Profile" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 flex flex-col">
                        <div className="flex justify-between items-start gap-1">
                          <h4 className="text-[14px] font-medium text-slate-100 line-clamp-2 leading-snug">
                            INDIA'S GOT LATENT S2 EP2 ft. Harssh Limbachiya, Kiku Sharda, Chandan Prabhakar
                          </h4>
                          <span className="text-slate-400 font-bold text-[14px] cursor-default leading-none">⋮</span>
                        </div>
                        <p className="text-[12px] text-slate-400 mt-1 flex items-center gap-1.5">
                          <span>Samay Raina</span>
                          <span className="w-3.5 h-3.5 bg-slate-600/60 text-slate-300 text-[8px] font-black rounded-full flex items-center justify-center">✓</span>
                        </p>
                        <p className="text-[12px] text-slate-500 mt-0.5">24m views • 1 day ago</p>
                      </div>
                    </div>
                  </div>

                  {/* Card 2: 지현꿍 Vlog with Custom brown background box & audio icons */}
                  <div className="flex flex-col gap-2.5 bg-[#17120e] border border-[#3c2a1c]/60 p-2.5 rounded-[20px] shadow-md shrink-0 transition-colors group">
                    <div className="w-full aspect-video bg-slate-800 rounded-xl relative overflow-hidden shrink-0">
                      <img 
                        src="/jihyun.png" 
                        alt="지현꿍 Vlog" 
                        className="w-full h-full object-cover transition-transform group-hover:scale-101 animate-fadeIn"
                      />
                      {/* Top-Right Volume and CC Badges */}
                      <div className="absolute top-2 right-2 flex gap-1.5">
                        <div className="w-7 h-7 rounded-full bg-black/60 flex items-center justify-center text-white shrink-0">
                          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM12 4L9.91 6.09 12 8.18V4zm-8 4v8h4l5 5V3L8 8H4z" />
                          </svg>
                        </div>
                        <div className="w-7 h-7 rounded-full bg-black/60 flex items-center justify-center text-white font-bold text-[10px] shrink-0">
                          CC
                        </div>
                      </div>
                      <div className="absolute bottom-2.5 right-2.5 bg-black/80 px-1.5 py-0.5 rounded text-[9.5px] font-bold select-none text-white tracking-wide">
                        25:59
                      </div>
                    </div>
                    <div className="flex gap-3 px-1">
                      {/* Using the generated profile picture for 지현꿍 */}
                      <div className="w-9 h-9 rounded-full overflow-hidden shrink-0">
                        <img src="/sub_saranghoe.png" alt="지현꿍 Avatar" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 flex flex-col justify-center">
                        <div className="flex justify-between items-start gap-1">
                          <h4 className="text-[14px] font-medium text-slate-100 line-clamp-2 leading-snug">
                            🏡 vlog | Homebody days: eating, working & studying | Buldak naengmyeon, brie toast, ...
                          </h4>
                          <span className="text-slate-400 font-bold text-[14px] cursor-default leading-none">⋮</span>
                        </div>
                        <p className="text-[12px] text-slate-400 mt-1 flex items-center gap-1.5">
                          <span>지현꿍</span>
                          <span className="w-3.5 h-3.5 bg-slate-600/60 text-slate-300 text-[8px] font-black rounded-full flex items-center justify-center">✓</span>
                        </p>
                        <p className="text-[12px] text-slate-500 mt-0.5">279k views • 1 month ago</p>
                      </div>
                    </div>
                  </div>

                  {/* Card 3: Sponsored IBM Coursera ad Card (No channel avatar, matches screenshot) */}
                  <div className="flex flex-col gap-2.5 bg-transparent hover:bg-white/5 p-2 rounded-2xl shadow-sm shrink-0 transition-colors group">
                    <div className="w-full aspect-video bg-slate-800 rounded-xl relative overflow-hidden shrink-0">
                      <img 
                        src="/coursera_ai.png" 
                        alt="Coursera IBM AI" 
                        className="w-full h-full object-cover transition-transform group-hover:scale-101 animate-fadeIn"
                      />
                      <div className="absolute bottom-2.5 right-2.5 bg-black/85 w-7 h-7 rounded-full flex items-center justify-center text-white shrink-0 hover:bg-black transition-colors cursor-default">
                        <span className="text-sm font-semibold select-none">↗</span>
                      </div>
                    </div>
                    <div className="flex gap-3 px-1">
                      {/* Note: NO avatar circle, matches screenshot exactly! */}
                      <div className="flex-1 flex flex-col">
                        <div className="flex justify-between items-start gap-1">
                          <h4 className="text-[14px] font-medium text-slate-100 line-clamp-2 leading-snug">
                            Continue Your Journey With AI
                          </h4>
                          <span className="text-slate-400 font-bold text-[14px] cursor-default leading-none">⋮</span>
                        </div>
                        <p className="text-[12px] text-slate-400 mt-1 leading-snug">
                          Go beyond the basics of AI by building RAG and agentic systems with IBM as your guide.
                        </p>
                        <p className="text-[12px] text-slate-400 mt-2 font-bold">Sponsored <span className="text-[9px] font-normal text-slate-500">•</span> Coursera</p>
                      </div>
                    </div>
                  </div>

                  {/* Card 4: F1 LEGO Race In Full */}
                  <div className="flex flex-col gap-2.5 bg-transparent hover:bg-white/5 p-2 rounded-2xl shadow-sm shrink-0 transition-colors group">
                    <div className="w-full aspect-video bg-slate-800 rounded-xl relative overflow-hidden shrink-0">
                      <img 
                        src="/lego_f1.png" 
                        alt="F1 Lego Race" 
                        className="w-full h-full object-cover transition-transform group-hover:scale-101 animate-fadeIn"
                      />
                      <div className="absolute bottom-2.5 right-2.5 bg-black/80 px-1.5 py-0.5 rounded text-[9.5px] font-bold select-none text-white tracking-wide">
                        15:45
                      </div>
                    </div>
                    <div className="flex gap-3 px-1">
                      {/* Vector F1 white circle profile picture */}
                      <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center border border-slate-200 shrink-0 font-black text-[10px] text-[#FF0000] tracking-tighter">
                        F1
                      </div>
                      <div className="flex-1 flex flex-col">
                        <div className="flex justify-between items-start gap-1">
                          <h4 className="text-[14px] font-medium text-slate-100 line-clamp-2 leading-snug">
                            F1 LEGO Race In Full | 2025 Miami Grand Prix
                          </h4>
                          <span className="text-slate-400 font-bold text-[14px] cursor-default leading-none">⋮</span>
                        </div>
                        <p className="text-[12px] text-slate-400 mt-1 flex items-center gap-1.5">
                          <span>FORMULA 1</span>
                          <span className="w-3.5 h-3.5 bg-slate-600/60 text-slate-300 text-[8px] font-black rounded-full flex items-center justify-center">✓</span>
                        </p>
                        <p className="text-[12px] text-slate-500 mt-0.5">7.5m views • 1 year ago</p>
                      </div>
                    </div>
                  </div>

                  {/* Card 5: Chai aur Book Reading (Live Stream) */}
                  <div className="flex flex-col gap-2.5 bg-transparent hover:bg-white/5 p-2 rounded-2xl shadow-sm shrink-0 transition-colors group">
                    <div className="w-full aspect-video bg-slate-800 rounded-xl relative overflow-hidden shrink-0">
                      <img 
                        src="/chai_book.png" 
                        alt="Chai aur Book" 
                        className="w-full h-full object-cover transition-transform group-hover:scale-101 animate-fadeIn"
                      />
                      {/* LIVE RED OVERLAY */}
                      <div className="absolute top-2.5 left-2.5 bg-[#FF0000] text-white text-[8px] font-black px-1.5 py-0.5 rounded uppercase flex items-center gap-1.5 select-none tracking-wider">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span> LIVE
                      </div>
                      <div className="absolute bottom-2.5 right-2.5 bg-black/80 px-1.5 py-0.5 rounded text-[9.5px] font-bold select-none text-white tracking-wide">
                        1:27:59
                      </div>
                    </div>
                    <div className="flex gap-3 px-1">
                      {/* Developer code avatar */}
                      <div className="w-9 h-9 rounded-full bg-[#0c0c0d] flex items-center justify-center border border-slate-800 shrink-0 font-bold text-xs text-emerald-450">
                        {"</>"}
                      </div>
                      <div className="flex-1 flex flex-col">
                        <div className="flex justify-between items-start gap-1">
                          <h4 className="text-[14px] font-medium text-slate-100 line-clamp-2 leading-snug">
                            Chai aur Book Reading
                          </h4>
                          <span className="text-slate-400 font-bold text-[14px] cursor-default leading-none">⋮</span>
                        </div>
                        <p className="text-[12px] text-slate-400 mt-1">Chai aur Code</p>
                        <p className="text-[12px] text-slate-500 mt-0.5">38k views • Streamed 4 days ago</p>
                      </div>
                    </div>
                  </div>

                  {/* Card 6: HAAREYA Song with music badge */}
                  <div className="flex flex-col gap-2.5 bg-transparent hover:bg-white/5 p-2 rounded-2xl shadow-sm shrink-0 transition-colors group">
                    <div className="w-full aspect-video bg-slate-800 rounded-xl relative overflow-hidden shrink-0">
                      <img 
                        src="/haareya.png" 
                        alt="Haareya Song" 
                        className="w-full h-full object-cover transition-transform group-hover:scale-101 animate-fadeIn"
                      />
                      {/* Music note duration badge */}
                      <div className="absolute bottom-2.5 right-2.5 bg-black/80 px-1.5 py-0.5 rounded text-[9.5px] font-bold select-none text-white tracking-wide flex items-center gap-1">
                        <span>🎵</span> 3:36
                      </div>
                    </div>
                    <div className="flex gap-3 px-1">
                      {/* Cute girl anime face avatar */}
                      <div className="w-9 h-9 rounded-full overflow-hidden shrink-0">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=usha" alt="Usha Editors Avatar" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 flex flex-col">
                        <div className="flex justify-between items-start gap-1">
                          <h4 className="text-[14px] font-medium text-slate-100 line-clamp-2 leading-snug">
                            HAAREYA(ORGINAL VERSION BY ARIJIT SINGH)
                          </h4>
                          <span className="text-slate-400 font-bold text-[14px] cursor-default leading-none">⋮</span>
                        </div>
                        <p className="text-[12px] text-slate-400 mt-1">Usha Editors</p>
                        <p className="text-[12px] text-slate-500 mt-0.5">112k views • 11 days ago</p>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>
        )}

        {/* SCREEN 1: Family Link Home */}
        {currentScreen === 'screen1' && (
          <div className="flex-1 flex bg-[#F8FAFC] animate-fadeIn text-ink overflow-hidden">
            
            {/* Left Settings Rail (Fixed 280px wide) */}
            <div className="w-[280px] bg-white border-r border-slate-200/80 flex flex-col p-6 shrink-0 select-none">
              <div className="flex items-center gap-2.5 text-navy mb-8 px-2">
                <Shield className="w-6 h-6 text-navy fill-current opacity-90" />
                <span className="font-extrabold text-lg tracking-tight">Family Link</span>
              </div>
              <div className="flex flex-col gap-1.5 flex-1">
                {settingsNavItems.map(item => {
                  const active = isNavActive(item);
                  return (
                    <div
                      key={item.key}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold transition-all ${
                        active 
                          ? 'bg-slate-100/90 text-navy animate-fadeIn' 
                          : 'text-slate-400 cursor-not-allowed opacity-50'
                      }`}
                    >
                      <span>{item.label}</span>
                      {item.key === 'privacy' && active && (
                        <span className="w-1.5 h-1.5 rounded-full bg-navy"></span>
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="border-t border-slate-155 pt-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-navy font-bold text-xs">P</div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-bold text-ink truncate">Parent Account</p>
                  <p className="text-[9px] text-muted truncate">parent@google.com</p>
                </div>
              </div>
            </div>

            {/* Right Settings Content Area (generous ~48px padding) */}
            <div className="flex-1 overflow-y-auto p-12 bg-white flex flex-col">
              <div className="max-w-[1000px] w-full mx-auto flex-1 flex flex-col">
                <div className="flex-1 flex flex-col animate-fadeIn">
                  
                  {/* Header with back row to Screen 0 */}
                  <div className="flex items-center justify-between border-b border-slate-150 pb-5 mb-6">
                    <div className="flex items-center gap-3">
                      <button 
                        onClick={() => setCurrentScreen('screen0')}
                        className="w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center active:scale-90 transition-all border border-slate-200 cursor-pointer"
                      >
                        <ArrowLeft className="w-4 h-4 text-ink" />
                      </button>
                      <h1 className="text-xl font-black text-navy leading-none">Aanya's Profile Dashboard</h1>
                    </div>
                    <span className="bg-navy text-ice text-[8px] font-bold px-2.5 py-0.5 rounded-full tracking-wider uppercase">
                      Supervised
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-1 bg-card rounded-3xl p-6 border border-slate-150 shadow-sm flex flex-col items-center text-center">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-navy to-navy-2 flex items-center justify-center text-white text-3xl font-bold shadow-md">A</div>
                      <h2 className="text-lg font-bold text-ink mt-4">Aanya</h2>
                      <p className="text-[10px] text-muted font-medium mt-0.5">12 years old • Active profile</p>
                      <div className="w-full bg-slate-200 h-px my-4"></div>
                      <div className="flex flex-col gap-2 w-full text-left">
                        <div className="text-[9px] uppercase font-bold text-muted tracking-wider">Device logs</div>
                        <div className="bg-white p-2.5 rounded-xl border border-slate-200/50 flex justify-between items-center text-[10px] font-semibold">
                          <span>Aanya's Phone</span>
                          <span className="text-[9px] text-good bg-green-50 px-1.5 py-0.5 rounded font-bold">Online</span>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-2 flex flex-col gap-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-card rounded-2xl p-5 border border-slate-150 shadow-sm">
                          <p className="text-[9px] text-muted uppercase font-bold tracking-wider">Screen Time Today</p>
                          <p className="text-xl font-black text-ink mt-1.5">35m <span className="text-xs font-semibold text-muted">/ 2hr limit</span></p>
                          <div className="w-full bg-slate-200 h-2 rounded-full mt-3 overflow-hidden">
                            <div className="bg-warm h-full rounded-full" style={{ width: '30%' }}></div>
                          </div>
                        </div>
                        <div className="bg-card rounded-2xl p-5 border border-slate-150 shadow-sm flex flex-col justify-between">
                          <div>
                            <p className="text-[9px] text-muted uppercase font-bold tracking-wider">Real-time Location</p>
                            <p className="text-base font-bold text-ink mt-1">Home</p>
                          </div>
                          <p className="text-[9px] text-good font-semibold mt-2">Updated 2m ago</p>
                        </div>
                      </div>

                      <div className="flex flex-col gap-3">
                        <div className="bg-card rounded-2xl p-4 flex justify-between items-center border border-slate-150 opacity-50 cursor-not-allowed">
                          <div className="flex items-center gap-3">
                            <span className="text-base">⏳</span>
                            <div>
                              <h4 className="text-xs font-bold text-ink">App limits & schedules</h4>
                              <p className="text-[9px] text-muted">Add timing limits to specific apps</p>
                            </div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-muted" />
                        </div>

                        <button
                          onClick={() => setCurrentScreen('screen2')}
                          className="bg-card hover:bg-slate-100 border border-slate-150 hover:border-navy/20 p-4.5 rounded-2xl flex justify-between items-center text-left relative overflow-hidden transition-all active:scale-[0.99] cursor-pointer"
                        >
                          <div className="absolute top-3 right-3 flex items-center gap-1.5 z-10">
                            <span className="bg-warm-bg text-warm text-[8px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider animate-pulse border border-warm/25">New</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-navy text-white flex items-center justify-center shrink-0 shadow-sm">
                              <Lock className="w-4 h-4 text-ice" />
                            </div>
                            <div>
                              <h4 className="text-xs font-bold text-ink">Privacy & data controls</h4>
                              <p className="text-[9px] text-muted">Unified dashboard for YouTube activity and search history</p>
                            </div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-navy" />
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        )}

        {/* SCREEN 2: Privacy & Data Landing */}
        {currentScreen === 'screen2' && (
          <div className="flex-1 flex bg-[#F8FAFC] animate-fadeIn text-ink overflow-hidden">
            
            {/* Left Settings Rail (Fixed 280px wide) */}
            <div className="w-[280px] bg-white border-r border-slate-200/80 flex flex-col p-6 shrink-0 select-none">
              <div className="flex items-center gap-2.5 text-navy mb-8 px-2">
                <Shield className="w-6 h-6 text-navy fill-current opacity-90" />
                <span className="font-extrabold text-lg tracking-tight">Family Link</span>
              </div>
              <div className="flex flex-col gap-1.5 flex-1">
                {settingsNavItems.map(item => {
                  const active = isNavActive(item);
                  return (
                    <div
                      key={item.key}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold transition-all ${
                        active 
                          ? 'bg-slate-100/90 text-navy' 
                          : 'text-slate-400 cursor-not-allowed opacity-50'
                      }`}
                    >
                      <span>{item.label}</span>
                      {item.key === 'privacy' && active && (
                        <span className="w-1.5 h-1.5 rounded-full bg-navy"></span>
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="border-t border-slate-155 pt-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-navy font-bold text-xs">P</div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-bold text-ink truncate">Parent Account</p>
                  <p className="text-[9px] text-muted truncate">parent@google.com</p>
                </div>
              </div>
            </div>

            {/* Right Settings Content Area */}
            <div className="flex-1 overflow-y-auto p-12 bg-white flex flex-col">
              <div className="max-w-[1000px] w-full mx-auto flex-1 flex flex-col">
                <div className="flex-1 flex flex-col animate-fadeIn">
                  
                  {/* Header */}
                  <div className="flex items-center gap-3 border-b border-slate-150 pb-5 mb-8">
                    <button 
                      onClick={() => setCurrentScreen('screen1')}
                      className="w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center active:scale-90 transition-all border border-slate-200 cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4 text-ink" />
                    </button>
                    <h1 className="text-xl font-black text-navy leading-none">Privacy & data</h1>
                  </div>

                  <div className="grid grid-cols-5 gap-8">
                    <div className="col-span-3 flex flex-col gap-6">
                      <h2 className="text-lg font-black text-ink leading-snug">Manage Aanya's account activity and data privacy settings</h2>
                      <p className="text-xs text-muted leading-relaxed">
                        Control what activity from Aanya's search logs and YouTube experiences is saved. Clearing history resets her feed recommendations to neutral.
                      </p>

                      <div className="bg-card border border-slate-150 rounded-3xl p-6 shadow-sm mt-2">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-2xl bg-navy-2 text-white flex items-center justify-center shrink-0 shadow-md">
                            <Layers className="w-6 h-6 text-ice" />
                          </div>
                          <div>
                            <h3 className="text-sm font-bold text-ink">Family Privacy Center</h3>
                            <p className="text-[11px] text-muted mt-1 leading-relaxed">
                              We have consolidated settings across three platforms. You can now view, download, or permanently erase search logs, audio files, and comments in one unified screen.
                            </p>
                          </div>
                        </div>
                        <div className="mt-6 border-t border-slate-200/60 pt-5">
                          <button
                            onClick={() => setCurrentScreen('screen3')}
                            className="px-5 py-3 bg-navy hover:bg-navy-2 text-white font-bold text-xs rounded-xl shadow-md cursor-pointer hover:shadow-lg active:scale-95 transition-all flex items-center gap-2"
                          >
                            Open Family Privacy Center
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-2 flex items-center justify-center">
                      <div className="w-48 h-48 rounded-full bg-ice/20 border-2 border-dashed border-ice flex items-center justify-center">
                        <div className="w-36 h-36 rounded-full bg-white shadow-xl flex items-center justify-center border border-slate-100">
                          <Shield className="w-16 h-16 text-navy fill-current opacity-80" />
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        )}

        {/* SCREEN 3: Family Privacy Center (Consolidated row of 3 cards) */}
        {currentScreen === 'screen3' && (
          <div className="flex-1 flex bg-[#F8FAFC] animate-fadeIn text-ink overflow-hidden">
            
            {/* Left Rail */}
            <div className="w-[280px] bg-white border-r border-slate-200/85 flex flex-col p-6 shrink-0 select-none">
              <div className="flex items-center gap-2.5 text-navy mb-8 px-2">
                <Shield className="w-6 h-6 text-navy fill-current opacity-90" />
                <span className="font-extrabold text-lg tracking-tight">Family Link</span>
              </div>
              <div className="flex flex-col gap-1.5 flex-1">
                {settingsNavItems.map(item => {
                  const active = isNavActive(item);
                  return (
                    <div
                      key={item.key}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold transition-all ${
                        active 
                          ? 'bg-slate-100/90 text-navy' 
                          : 'text-slate-400 cursor-not-allowed opacity-50'
                      }`}
                    >
                      <span>{item.label}</span>
                      {item.key === 'privacy' && active && (
                        <span className="w-1.5 h-1.5 rounded-full bg-navy"></span>
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="border-t border-slate-155 pt-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-navy font-bold text-xs">P</div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-bold text-ink truncate">Parent Account</p>
                  <p className="text-[9px] text-muted truncate">parent@google.com</p>
                </div>
              </div>
            </div>

            {/* Right Settings Content Area */}
            <div className="flex-1 overflow-y-auto p-12 bg-white flex flex-col">
              <div className="max-w-[1000px] w-full mx-auto flex-1 flex flex-col">
                <div className="flex-1 flex flex-col animate-fadeIn">
                  
                  {/* Header */}
                  <div className="flex items-center justify-between border-b border-slate-150 pb-5 mb-5">
                    <div className="flex items-center gap-3">
                      <button 
                        onClick={() => setCurrentScreen('screen2')}
                        className="w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center active:scale-90 transition-all border border-slate-200 cursor-pointer"
                      >
                        <ArrowLeft className="w-4 h-4 text-ink" />
                      </button>
                      <div>
                        <h1 className="text-xl font-black text-navy leading-none">Family Privacy Center</h1>
                        <p className="text-[10px] text-muted font-bold mt-1 uppercase tracking-wider">Aanya • Unified Data center</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-ice/30 border border-navy/10 rounded-2xl p-4 flex items-start gap-3">
                    <span className="text-lg shrink-0">💡</span>
                    <div className="text-xs text-navy-2 font-medium leading-relaxed">
                      <strong>Data settings consolidated.</strong> You no longer need to manage history settings across three separate screens (YouTube dashboard, Google Assistant logs, and Google My Activity registers). All active user activity stores are visible below.
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-6 mt-6">
                    
                    {/* Card 1: Watch & Search History */}
                    <div className="bg-card rounded-2xl p-5 border border-slate-200/60 shadow-sm flex flex-col justify-between h-[300px] relative transition-all duration-300">
                      <div className="flex justify-between items-start">
                        <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm shrink-0">
                          <Play className="w-4.5 h-4.5 text-navy fill-current" />
                        </div>
                        {erasedCategories.watchSearch ? (
                          <span className="bg-green-100 text-good border border-green-200 text-[8px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 select-none">
                            <Check className="w-2.5 h-2.5" /> Cleared
                          </span>
                        ) : (
                          <span className="bg-blue-50 text-navy border border-blue-100 text-[8px] font-bold px-2 py-0.5 rounded-full">Active</span>
                        )}
                      </div>
                      <div className="mt-4 flex-1">
                        <h4 className="text-sm font-bold text-ink">Watch & Search History</h4>
                        <p className="text-[11px] text-muted mt-2 leading-relaxed">
                          YouTube search logs, watched videos, recommendation profiles, and playlist logs.
                        </p>
                      </div>
                      <div className="mt-4 pt-3.5 border-t border-slate-200/40 shrink-0">
                        {erasedCategories.watchSearch ? (
                          <div className="text-[10px] text-good font-bold flex items-center gap-1.5 p-1">
                            <CheckCircle2 className="w-4.5 h-4.5" /> Log purged from Google database
                          </div>
                        ) : inlineConfirm.watchSearch ? (
                          <div className="flex flex-col gap-2 p-1.5 bg-bad-bg/40 rounded-xl border border-bad/10 animate-fadeIn">
                            <p className="text-[9px] font-bold text-bad">Erase history permanently?</p>
                            <div className="flex justify-end gap-1.5">
                              <button onClick={() => setInlineConfirm(prev => ({ ...prev, watchSearch: false }))} className="px-2 py-1 text-[9px] font-bold text-muted hover:text-ink cursor-pointer">Cancel</button>
                              <button onClick={() => {
                                setErasedCategories(prev => ({ ...prev, watchSearch: true }));
                                setInlineConfirm(prev => ({ ...prev, watchSearch: false }));
                                showToast("Watch & Search history cleared.");
                              }} className="px-2.5 py-1 text-[9px] font-bold bg-bad text-white rounded shadow-sm cursor-pointer">Confirm</button>
                            </div>
                          </div>
                        ) : (
                          <div className="flex gap-2">
                            <button onClick={() => showToast("Preparing files. Export link sent to parent email.")} className="flex-1 py-1.5 border border-slate-200 hover:bg-slate-50 text-[10px] font-bold text-ink rounded-lg flex items-center justify-center gap-1 active:scale-95 transition-all cursor-pointer bg-white">
                              <Download className="w-3 h-3 text-muted" /> Export
                            </button>
                            <button onClick={() => setInlineConfirm(prev => ({ ...prev, watchSearch: true }))} className="flex-1 py-1.5 border border-bad/20 bg-bad-bg/20 text-[10px] font-bold text-bad rounded-lg flex items-center justify-center gap-1 hover:bg-bad-bg/60 active:scale-95 transition-all cursor-pointer">
                              <Trash2 className="w-3 h-3" /> Erase
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Card 2: Voice & Audio */}
                    <div className="bg-card rounded-2xl p-5 border border-slate-200/60 shadow-sm flex flex-col justify-between h-[300px] relative transition-all duration-300">
                      <div className="flex justify-between items-start">
                        <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm shrink-0">
                          <Mic className="w-4.5 h-4.5 text-navy" />
                        </div>
                        {erasedCategories.voiceAudio ? (
                          <span className="bg-green-100 text-good border border-green-200 text-[8px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 select-none">
                            <Check className="w-2.5 h-2.5" /> Cleared
                          </span>
                        ) : (
                          <span className="bg-blue-50 text-navy border border-blue-100 text-[8px] font-bold px-2 py-0.5 rounded-full">Active</span>
                        )}
                      </div>
                      <div className="mt-4 flex-1">
                        <h4 className="text-sm font-bold text-ink">Voice & Audio</h4>
                        <p className="text-[11px] text-muted mt-2 leading-relaxed">
                          Assistant search commands, YouTube speech-to-text queries, and voice templates.
                        </p>
                      </div>
                      <div className="mt-4 pt-3.5 border-t border-slate-200/40 shrink-0">
                        {erasedCategories.voiceAudio ? (
                          <div className="text-[10px] text-good font-bold flex items-center gap-1.5 p-1">
                            <CheckCircle2 className="w-4.5 h-4.5" /> Log purged from Google database
                          </div>
                        ) : inlineConfirm.voiceAudio ? (
                          <div className="flex flex-col gap-2 p-1.5 bg-bad-bg/40 rounded-xl border border-bad/10 animate-fadeIn">
                            <p className="text-[9px] font-bold text-bad">Erase voice logs permanently?</p>
                            <div className="flex justify-end gap-1.5">
                              <button onClick={() => setInlineConfirm(prev => ({ ...prev, voiceAudio: false }))} className="px-2 py-1 text-[9px] font-bold text-muted hover:text-ink cursor-pointer">Cancel</button>
                              <button onClick={() => {
                                setErasedCategories(prev => ({ ...prev, voiceAudio: true }));
                                setInlineConfirm(prev => ({ ...prev, voiceAudio: false }));
                                showToast("Voice & Audio logs cleared.");
                              }} className="px-2.5 py-1 text-[9px] font-bold bg-bad text-white rounded shadow-sm cursor-pointer">Confirm</button>
                            </div>
                          </div>
                        ) : (
                          <div className="flex gap-2">
                            <button onClick={() => showToast("Preparing files. Export link sent to parent email.")} className="flex-1 py-1.5 border border-slate-200 hover:bg-slate-50 text-[10px] font-bold text-ink rounded-lg flex items-center justify-center gap-1 active:scale-95 transition-all cursor-pointer bg-white">
                              <Download className="w-3 h-3 text-muted" /> Export
                            </button>
                            <button onClick={() => setInlineConfirm(prev => ({ ...prev, voiceAudio: true }))} className="flex-1 py-1.5 border border-bad/20 bg-bad-bg/20 text-[10px] font-bold text-bad rounded-lg flex items-center justify-center gap-1 hover:bg-bad-bg/60 active:scale-95 transition-all cursor-pointer">
                              <Trash2 className="w-3 h-3" /> Erase
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Card 3: Comments & Activity */}
                    <div className="bg-card rounded-2xl p-5 border border-slate-200/60 shadow-sm flex flex-col justify-between h-[300px] relative transition-all duration-300">
                      <div className="flex justify-between items-start">
                        <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm shrink-0">
                          <MessageSquare className="w-4.5 h-4.5 text-navy" />
                        </div>
                        {erasedCategories.comments ? (
                          <span className="bg-green-100 text-good border border-green-200 text-[8px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 select-none">
                            <Check className="w-2.5 h-2.5" /> Cleared
                          </span>
                        ) : (
                          <span className="bg-blue-50 text-navy border border-blue-100 text-[8px] font-bold px-2 py-0.5 rounded-full">Active</span>
                        )}
                      </div>
                      <div className="mt-4 flex-1">
                        <h4 className="text-sm font-bold text-ink">Comments & Activity</h4>
                        <p className="text-[11px] text-muted mt-2 leading-relaxed">
                          YouTube community postings, comments on video timelines, and reply threads.
                        </p>
                      </div>
                      <div className="mt-4 pt-3.5 border-t border-slate-200/40 shrink-0">
                        {erasedCategories.comments ? (
                          <div className="text-[10px] text-good font-bold flex items-center gap-1.5 p-1">
                            <CheckCircle2 className="w-4.5 h-4.5" /> Log purged from Google database
                          </div>
                        ) : inlineConfirm.comments ? (
                          <div className="flex flex-col gap-2 p-1.5 bg-bad-bg/40 rounded-xl border border-bad/10 animate-fadeIn">
                            <p className="text-[9px] font-bold text-bad">Erase comments permanently?</p>
                            <div className="flex justify-end gap-1.5">
                              <button onClick={() => setInlineConfirm(prev => ({ ...prev, comments: false }))} className="px-2 py-1 text-[9px] font-bold text-muted hover:text-ink cursor-pointer">Cancel</button>
                              <button onClick={() => {
                                setErasedCategories(prev => ({ ...prev, comments: true }));
                                setInlineConfirm(prev => ({ ...prev, comments: false }));
                                showToast("Comments and community activity cleared.");
                              }} className="px-2.5 py-1 text-[9px] font-bold bg-bad text-white rounded shadow-sm cursor-pointer">Confirm</button>
                            </div>
                          </div>
                        ) : (
                          <div className="flex gap-2">
                            <button onClick={() => showToast("Preparing files. Export link sent to parent email.")} className="flex-1 py-1.5 border border-slate-200 hover:bg-slate-50 text-[10px] font-bold text-ink rounded-lg flex items-center justify-center gap-1 active:scale-95 transition-all cursor-pointer bg-white">
                              <Download className="w-3 h-3 text-muted" /> Export
                            </button>
                            <button onClick={() => setInlineConfirm(prev => ({ ...prev, comments: true }))} className="flex-1 py-1.5 border border-bad/20 bg-bad-bg/20 text-[10px] font-bold text-bad rounded-lg flex items-center justify-center gap-1 hover:bg-bad-bg/60 active:scale-95 transition-all cursor-pointer">
                              <Trash2 className="w-3 h-3" /> Erase
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                  </div>

                  {/* Bottom Action Center */}
                  <div className="mt-12 bg-white border border-slate-200 p-6 rounded-3xl flex justify-between items-center shadow-sm">
                    <div className="max-w-[55%]">
                      <h3 className="text-sm font-bold text-ink">Erase everything Google has on Aanya</h3>
                      <p className="text-[11px] text-muted mt-1 leading-relaxed">
                        Permanently wipe watch patterns, audio entries, Chrome search histories, and linked accounts from her active Google database records.
                      </p>
                    </div>
                    <button
                      onClick={() => setCurrentScreen('screen4')}
                      className="px-6 py-3.5 bg-bad hover:bg-[#b03a3a] text-white font-bold text-xs rounded-xl shadow-md hover:shadow-lg active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                      Erase everything Google has on this child
                    </button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        )}

        {/* SCREEN 4: Choose Erasure Scope */}
        {currentScreen === 'screen4' && (
          <div className="flex-1 flex bg-[#F8FAFC] animate-fadeIn text-ink overflow-hidden">
            
            {/* Left Rail */}
            <div className="w-[280px] bg-white border-r border-slate-200/80 flex flex-col p-6 shrink-0 select-none">
              <div className="flex items-center gap-2.5 text-navy mb-8 px-2">
                <Shield className="w-6 h-6 text-navy fill-current opacity-90" />
                <span className="font-extrabold text-lg tracking-tight">Family Link</span>
              </div>
              <div className="flex flex-col gap-1.5 flex-1">
                {settingsNavItems.map(item => {
                  const active = isNavActive(item);
                  return (
                    <div
                      key={item.key}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold transition-all ${
                        active 
                          ? 'bg-slate-100/90 text-navy' 
                          : 'text-slate-400 cursor-not-allowed opacity-50'
                      }`}
                    >
                      <span>{item.label}</span>
                      {item.key === 'privacy' && active && (
                        <span className="w-1.5 h-1.5 rounded-full bg-navy"></span>
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="border-t border-slate-155 pt-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-navy font-bold text-xs">P</div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-bold text-ink truncate">Parent Account</p>
                  <p className="text-[9px] text-muted truncate">parent@google.com</p>
                </div>
              </div>
            </div>

            {/* Right Content Area */}
            <div className="flex-1 overflow-y-auto p-12 bg-white flex flex-col">
              <div className="max-w-[1000px] w-full mx-auto flex-1 flex flex-col">
                <div className="flex-1 flex flex-col animate-fadeIn">
                  
                  <div className="flex items-center gap-3 border-b border-slate-150 pb-5 mb-6">
                    <button onClick={() => setCurrentScreen('screen3')} className="w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center active:scale-90 transition-all border border-slate-200 cursor-pointer">
                      <ArrowLeft className="w-5 h-5 text-ink" />
                    </button>
                    <h1 className="text-lg font-black text-navy leading-none">Choose Erasure Scope</h1>
                  </div>

                  <div className="mt-2">
                    <h2 className="text-sm font-bold text-ink">Select the scope of data to delete:</h2>
                    <p className="text-xs text-muted mt-1">This determines what records will be cleared from Google servers.</p>
                  </div>

                  <div className="grid grid-cols-3 gap-6 mt-6">
                    <div onClick={() => setErasureScope('device')} className={`p-5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between h-[160px] ${erasureScope === 'device' ? 'border-navy bg-indigo-50/20 shadow-sm' : 'border-slate-200 bg-white hover:bg-slate-50'}`}>
                      <div className="flex items-start justify-between">
                        <Smartphone className="w-5 h-5 text-navy" />
                        <input type="radio" checked={erasureScope === 'device'} onChange={() => {}} className="accent-navy w-4 h-4 cursor-pointer" />
                      </div>
                      <div className="mt-4">
                        <h4 className="text-xs font-bold text-ink">This device only</h4>
                        <p className="text-[10px] text-muted mt-1.5 leading-normal">Remove Aanya's YouTube activity saved on this device</p>
                      </div>
                    </div>

                    <div onClick={() => setErasureScope('youtube')} className={`p-5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between h-[160px] ${erasureScope === 'youtube' ? 'border-navy bg-indigo-50/20 shadow-sm' : 'border-slate-200 bg-white hover:bg-slate-50'}`}>
                      <div className="flex items-start justify-between">
                        <Play className="w-4.5 h-4.5 text-navy fill-current" />
                        <input type="radio" checked={erasureScope === 'youtube'} onChange={() => {}} className="accent-navy w-4 h-4 cursor-pointer" />
                      </div>
                      <div className="mt-4">
                        <h4 className="text-xs font-bold text-ink">YouTube activity only</h4>
                        <p className="text-[10px] text-muted mt-1.5 leading-normal">Watch history, searches, comments, voice query logs across all active devices</p>
                      </div>
                    </div>

                    <div onClick={() => setErasureScope('all')} className={`p-5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between h-[160px] ${erasureScope === 'all' ? 'border-bad bg-red-50/10 shadow-sm' : 'border-slate-200 bg-white hover:bg-slate-50'}`}>
                      <div className="flex items-start justify-between">
                        <Database className="w-5 h-5 text-bad" />
                        <input type="radio" checked={erasureScope === 'all'} onChange={() => {}} className="accent-bad w-4 h-4 cursor-pointer" />
                      </div>
                      <div className="mt-4">
                        <h4 className="text-xs font-bold text-ink">Everything Google has on this child</h4>
                        <p className="text-[10px] text-muted mt-1.5 leading-normal">YouTube history plus any other Google services linked to this account</p>
                      </div>
                    </div>
                  </div>

                  {erasureScope === 'all' && (
                    <div className="bg-bad-bg text-bad text-xs font-bold p-4.5 rounded-2xl border border-bad/10 flex items-center gap-3 mt-6 animate-slideDown max-w-full">
                      <AlertTriangle className="w-5 h-5 text-bad shrink-0" />
                      <span>This is broad. We recommend reviewing what's included first.</span>
                    </div>
                  )}

                  <div className="mt-12 flex gap-4 justify-end">
                    <button onClick={() => setCurrentScreen('screen3')} className="px-6 py-3 border border-slate-200 hover:bg-slate-50 text-ink font-bold text-xs rounded-xl cursor-pointer active:scale-95 transition-transform text-center">Cancel</button>
                    <button onClick={() => setCurrentScreen('screen5')} className={`px-8 py-3 text-white font-bold text-xs rounded-xl shadow-md cursor-pointer active:scale-95 transition-transform ${erasureScope === 'all' ? 'bg-bad hover:bg-[#b03a3a]' : 'bg-navy hover:bg-navy-2'}`}>Continue</button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        )}

        {/* SCREEN 5: Confirm & Processing */}
        {currentScreen === 'screen5' && (
          <div className="flex-1 flex bg-[#F8FAFC] animate-fadeIn text-ink overflow-hidden">
            
            {/* Left Rail */}
            <div className="w-[280px] bg-white border-r border-slate-200/80 flex flex-col p-6 shrink-0 select-none">
              <div className="flex items-center gap-2.5 text-navy mb-8 px-2">
                <Shield className="w-6 h-6 text-navy fill-current opacity-90" />
                <span className="font-extrabold text-lg tracking-tight">Family Link</span>
              </div>
              <div className="flex flex-col gap-1.5 flex-1">
                {settingsNavItems.map(item => {
                  const active = isNavActive(item);
                  return (
                    <div
                      key={item.key}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold transition-all ${
                        active 
                          ? 'bg-slate-100/90 text-navy' 
                          : 'text-slate-400 cursor-not-allowed opacity-50'
                      }`}
                    >
                      <span>{item.label}</span>
                      {item.key === 'privacy' && active && (
                        <span className="w-1.5 h-1.5 rounded-full bg-navy"></span>
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="border-t border-slate-155 pt-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-navy font-bold text-xs">P</div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-bold text-ink truncate">Parent Account</p>
                  <p className="text-[9px] text-muted truncate">parent@google.com</p>
                </div>
              </div>
            </div>

            {/* Right Content Area */}
            <div className="flex-1 overflow-y-auto p-12 bg-white flex flex-col items-center justify-center">
              <div className="max-w-[640px] w-full bg-white border border-slate-200 p-8 rounded-3xl shadow-md flex flex-col relative overflow-hidden text-left">
                <div className="flex items-center gap-3 border-b border-slate-150 pb-4.5 mb-6">
                  <button onClick={() => setCurrentScreen('screen4')} className="w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center active:scale-90 transition-all border border-slate-200 cursor-pointer">
                    <ArrowLeft className="w-4 h-4 text-ink" />
                  </button>
                  <h1 className="text-base font-bold text-ink">Confirm data erasure</h1>
                </div>

                <div className="bg-bad-bg/30 border border-bad/10 rounded-2xl p-5">
                  <div className="flex items-center gap-2.5 text-bad font-bold text-xs">
                    <AlertTriangle className="w-4.5 h-4.5" />
                    <span>This action cannot be undone</span>
                  </div>
                  
                  <h3 className="text-xs font-bold text-ink mt-4">You are about to erase:</h3>
                  <ul className="mt-3.5 flex flex-col gap-2.5 text-[11px] text-muted">
                    {erasureScope === 'device' && (
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-bad shrink-0 text-red-500"></span>
                        Local YouTube cache and watch registries stored on this device.
                      </li>
                    )}
                    {erasureScope === 'youtube' && (
                      <>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-bad shrink-0 mt-1.5 text-red-500"></span>
                          <span>YouTube watch history and search trails across **all active devices**.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-bad shrink-0 mt-1.5 text-red-500"></span>
                          <span>Aanya's comments, channel activities, and assistant voice inputs on YouTube.</span>
                        </li>
                      </>
                    )}
                    {erasureScope === 'all' && (
                      <>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-bad shrink-0 mt-1.5 text-red-500"></span>
                          <span>YouTube search logs, video histories, playlist records, and comments.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-bad shrink-0 mt-1.5 text-red-500"></span>
                          <span>All Google Assistant voice files, transcripts, and audio inputs.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-bad shrink-0 mt-1.5 text-red-500"></span>
                          <span>Search logs and browser configurations linked to Aanya's Google Account.</span>
                        </li>
                      </>
                    )}
                  </ul>
                  <p className="text-[10px] text-bad font-semibold mt-5 border-t border-slate-200/50 pt-3 leading-relaxed">
                    ⚠️ Clearing this data resets her custom YouTube content recommendation filters to default.
                  </p>
                </div>

                <div className="mt-6 px-1">
                  <h4 className="text-xs font-bold text-ink">Supervised account policy</h4>
                  <p className="text-[10px] text-muted mt-1 leading-normal">
                    This deletion triggers an automated parent-approved notification log. We suggest discussing this change with Aanya.
                  </p>
                </div>

                <div className="mt-8">
                  <button onClick={() => setProcessing(true)} className="w-full py-3.5 bg-bad hover:bg-[#b03a3a] text-white font-bold text-xs rounded-xl shadow-md hover:shadow-lg active:scale-95 transition-transform flex items-center justify-center gap-2 cursor-pointer">
                    <Trash2 className="w-4 h-4" /> Erase now
                  </button>
                </div>

                {processing && (
                  <div className="absolute inset-0 bg-white/95 z-50 flex flex-col items-center justify-center p-8 text-center animate-fadeIn">
                    <div className="relative w-16 h-16 flex items-center justify-center">
                      <div className="w-12 h-12 border-4 border-slate-200 border-t-bad rounded-full animate-spin"></div>
                      <Database className="w-5 h-5 text-bad absolute" />
                    </div>
                    <h3 className="text-sm font-bold text-ink mt-6">Erasing data records...</h3>
                    <div className="h-6 mt-1.5 overflow-hidden">
                      <p className="text-[10px] text-muted font-bold animate-slideUp">
                        {processingStep === 0 && "Connecting to Google Cloud clusters..."}
                        {processingStep === 1 && "Purging YouTube transaction directories..."}
                        {processingStep === 2 && "Synchronizing updates to secondary databases..."}
                        {processingStep === 3 && "Completing database security registers..."}
                      </p>
                    </div>
                    <div className="w-40 bg-slate-100 h-1.5 rounded-full mt-4 overflow-hidden mx-auto">
                      <div className="bg-bad h-full rounded-full animate-[loading_1.5s_ease-in-out_forwards]"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>
        )}

        {/* SCREEN 6: Success */}
        {currentScreen === 'screen6' && (
          <div className="flex-1 flex bg-[#F8FAFC] animate-fadeIn text-ink overflow-hidden">
            
            {/* Left Rail */}
            <div className="w-[280px] bg-white border-r border-slate-200/80 flex flex-col p-6 shrink-0 select-none">
              <div className="flex items-center gap-2.5 text-navy mb-8 px-2">
                <Shield className="w-6 h-6 text-navy fill-current opacity-90" />
                <span className="font-extrabold text-lg tracking-tight">Family Link</span>
              </div>
              <div className="flex flex-col gap-1.5 flex-1">
                {settingsNavItems.map(item => {
                  const active = isNavActive(item);
                  return (
                    <div
                      key={item.key}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-xs font-bold transition-all ${
                        active 
                          ? 'bg-slate-100/90 text-navy' 
                          : 'text-slate-400 cursor-not-allowed opacity-50'
                      }`}
                    >
                      <span>{item.label}</span>
                      {item.key === 'privacy' && active && (
                        <span className="w-1.5 h-1.5 rounded-full bg-navy"></span>
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="border-t border-slate-155 pt-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-navy font-bold text-xs">P</div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-bold text-ink truncate">Parent Account</p>
                  <p className="text-[9px] text-muted truncate">parent@google.com</p>
                </div>
              </div>
            </div>

            {/* Right Content Area */}
            <div className="flex-1 overflow-y-auto p-12 bg-white flex flex-col items-center justify-center">
              <div className="max-w-[640px] w-full bg-white border border-slate-200 p-8 rounded-3xl shadow-md flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-green-50 border-4 border-green-100 flex items-center justify-center text-good shadow-inner mb-6 relative">
                  <div className="absolute inset-0 rounded-full bg-green-300 opacity-20 animate-ping"></div>
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h1 className="text-lg font-black text-good tracking-tight">Data Purged Successfully</h1>
                <p className="text-xs text-ink font-bold mt-1">Deletion registers have been processed</p>

                <div className="mt-6 bg-card rounded-2xl p-5 border border-slate-200/50 text-left w-full">
                  <h3 className="text-xs font-bold text-ink mb-3.5">Verification Details:</h3>
                  <div className="flex flex-col gap-3 text-[11px] text-muted">
                    <div className="flex items-start gap-2.5 leading-normal">
                      <Check className="w-4 h-4 text-good shrink-0 mt-0.5" />
                      <span>Purged active watch/search logs across <strong>all active YouTube instances</strong></span>
                    </div>
                    <div className="flex items-start gap-2.5 leading-normal">
                      <Check className="w-4 h-4 text-good shrink-0 mt-0.5" />
                      <span>Removed indices and logs from <strong>myactivity.google.com</strong> console</span>
                    </div>
                    <div className="flex items-start gap-2.5 leading-normal">
                      <Check className="w-4 h-4 text-good shrink-0 mt-0.5" />
                      <span>Synced deletion policies across <strong>Aanya's Google Account database</strong></span>
                    </div>
                  </div>
                </div>

                <p className="text-[10px] text-muted mt-6 leading-relaxed px-4">
                  Activity counters will reset. It may take a brief moment for Aanya's active suggestions feed on YouTube to adjust to the reset state.
                </p>

                <div className="w-full mt-8">
                  <button onClick={() => setCurrentScreen('screen3')} className="w-full py-3.5 bg-navy hover:bg-navy-2 text-white font-bold text-xs rounded-xl shadow-md hover:shadow-lg active:scale-95 transition-transform cursor-pointer">
                    Back to Privacy Center
                  </button>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>

      {/* Floating "You" popup menu (only when sidebar is collapsed) */}
      {!sidebarExpanded && youMenuOpen && (
        <div className="absolute left-[78px] bottom-3 bg-[#282828] text-[#F1F1F1] rounded-xl border border-slate-700/40 shadow-2xl w-56 p-2.5 flex flex-col gap-0.5 z-40 select-none animate-fadeIn">
          <div className="px-3 py-1 text-xs font-bold text-slate-400 select-none">You</div>
          
          <button className="flex items-center gap-3 px-3 py-2 text-xs font-medium rounded-lg hover:bg-white/10 text-left transition-colors w-full cursor-not-allowed text-slate-300">
            <User className="w-4 h-4 text-slate-400" />
            <span>Your channel</span>
          </button>
          
          <button className="flex items-center gap-3 px-3 py-2 text-xs font-medium rounded-lg hover:bg-white/10 text-left transition-colors w-full cursor-not-allowed text-slate-300">
            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>History</span>
          </button>

          <button className="flex items-center gap-3 px-3 py-2 text-xs font-medium rounded-lg hover:bg-white/10 text-left transition-colors w-full cursor-not-allowed text-slate-300">
            <Layers className="w-4 h-4 text-slate-400" />
            <span>Playlists</span>
          </button>

          <button className="flex items-center gap-3 px-3 py-2 text-xs font-medium rounded-lg hover:bg-white/10 text-left transition-colors w-full cursor-not-allowed text-slate-300">
            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3" />
            </svg>
            <span>Watch Later</span>
          </button>

          <button className="flex items-center gap-3 px-3 py-2 text-xs font-medium rounded-lg hover:bg-white/10 text-left transition-colors w-full cursor-not-allowed text-slate-300">
            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.757a1 1 0 00.707-1.707l-5.414-5.414a1 1 0 00-1.414 0L7.222 8.293A1 1 0 007.93 10H10v4a1 1 0 001 1h2a1 1 0 001-1v-4z" />
            </svg>
            <span>Liked videos</span>
          </button>

          <button className="flex items-center gap-3 px-3 py-2 text-xs font-medium rounded-lg hover:bg-white/10 text-left transition-colors w-full cursor-not-allowed text-slate-300">
            <Play className="w-4 h-4 text-slate-400" />
            <span>Your videos</span>
          </button>

          <button className="flex items-center gap-3 px-3 py-2 text-xs font-medium rounded-lg hover:bg-white/10 text-left transition-colors w-full cursor-not-allowed text-slate-300">
            <Download className="w-4 h-4 text-slate-400" />
            <span>Downloads</span>
          </button>

          {/* Divider line */}
          <div className="h-px bg-slate-700/60 my-1"></div>

          {/* Highly interactive Parental controls Row */}
          <button
            onClick={() => {
              setYouMenuOpen(false);
              setCurrentScreen('screen1');
            }}
            className="flex items-center gap-3 px-3 py-2.5 text-xs font-bold rounded-lg bg-navy/20 hover:bg-navy text-indigo-300 hover:text-white text-left transition-all cursor-pointer border border-indigo-500/10 hover:border-indigo-400/20 group"
          >
            <Shield className="w-4.5 h-4.5 text-indigo-400 group-hover:text-white shrink-0 fill-current opacity-80" />
            <div className="flex-1">
              <p className="leading-tight">Parental controls</p>
              <p className="text-[8.5px] text-indigo-400/80 group-hover:text-white/80 font-normal">Managed in Family Link</p>
            </div>
          </button>

        </div>
      )}

      {/* Global Toast Banner */}
      <div className={`absolute bottom-8 right-8 z-[100] bg-ink text-white text-xs font-semibold px-4.5 py-3.5 rounded-2xl shadow-2xl flex items-center justify-between gap-5 transition-all duration-300 transform ${
        toast.visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'
      }`}>
        <div className="flex items-center gap-2.5">
          <span className="text-sm">📥</span>
          <span>{toast.message}</span>
        </div>
        <button 
          onClick={() => setToast(prev => ({ ...prev, visible: false }))}
          className="text-[10px] font-bold text-ice hover:text-white px-1.5 py-0.5 rounded cursor-pointer"
        >
          Dismiss
        </button>
      </div>

      {/* Added inline styles for custom animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes loading {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.25s ease-out forwards;
        }
        .animate-slideDown {
          animation: slideDown 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-slideUp {
          animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        /* Custom scrollbar adjustments for a clean dark look */
        .scrollbar-thin::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: #0F0F0F;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background-color: #2F2F2F;
          border-radius: 10px;
          border: 2px solid #0F0F0F;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background-color: #3F3F3F;
        }
      `}</style>
    </div>
  );
}

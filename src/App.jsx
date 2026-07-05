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
  // Navigation Routing States
  // currentScreen: 'screen0' (YouTube Home), 'family-link' (FL Application shell)
  const [currentScreen, setCurrentScreen] = useState('screen0');
  
  // Tab within the Family Link application shell (Proton Pass Visual layout style)
  // 'Overview' | 'Privacy' | 'Watch History' | 'Search Activity' | 'Recommendations' | 'Downloads' | 'Permissions' | 'Delete Data' | 'Settings'
  const [activeTab, setActiveTab] = useState('Overview');

  // Sidebar Expansion State (true: expanded 240px, false: collapsed 72px)
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  // History Pause States (State variables for switches)
  const [watchHistoryPaused, setWatchHistoryPaused] = useState(false);
  const [searchHistoryPaused, setSearchHistoryPaused] = useState(false);
  const [voiceAudioPaused, setVoiceAudioPaused] = useState(false);
  const [confirmDeleteText, setConfirmDeleteText] = useState("");

  // Data Clearance confirmation tags (Cleared badge toggles)
  const [erasedCategories, setErasedCategories] = useState({
    watchSearch: false,
    voiceAudio: false,
    comments: false
  });

  // Erasure Scope Dialog states (Step 1-5 deletion flow)
  const [deleteStep, setDeleteStep] = useState(1); 
  const [erasureScope, setErasureScope] = useState('7-days'); // '7-days' | '30-days' | 'all' | 'account'
  const [deleteCheckbox1, setDeleteCheckbox1] = useState(false);
  const [deleteCheckbox2, setDeleteCheckbox2] = useState(false);
  const [deleteProcessing, setDeleteProcessing] = useState(false);
  const [deleteProgress, setDeleteProgress] = useState(0);
  const [deleteTicker, setDeleteTicker] = useState('');

  // Toast Notification State
  const [toast, setToast] = useState({
    message: '',
    visible: false
  });

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

  // Simulate server processing ticks for Deletion Step 4
  useEffect(() => {
    if (deleteProcessing) {
      let progress = 0;
      const interval = setInterval(() => {
        progress += 25;
        setDeleteProgress(progress);
        
        if (progress === 25) setDeleteTicker("Connecting to Google Cloud clusters...");
        if (progress === 50) setDeleteTicker("Purging index files and search logs...");
        if (progress === 75) setDeleteTicker("Updating child activity logs...");
        
        if (progress >= 100) {
          clearInterval(interval);
          setDeleteProcessing(false);
          setDeleteStep(5);
          // Purge corresponding categories depending on scope
          if (erasureScope === '7-days' || erasureScope === '30-days') {
            setErasedCategories(prev => ({ ...prev, watchSearch: true }));
          } else if (erasureScope === 'all') {
            setErasedCategories(prev => ({ ...prev, watchSearch: true, voiceAudio: true }));
          } else {
            setErasedCategories({ watchSearch: true, voiceAudio: true, comments: true });
          }
        }
      }, 450);
      return () => clearInterval(interval);
    }
  }, [deleteProcessing, erasureScope]);

  // Fast redirect to Family Link helper
  const openFamilyLink = (tab = 'Overview') => {
    setCurrentScreen('family-link');
    setActiveTab(tab);
  };

  return (
    <div className="h-screen w-screen bg-[#0F0F0F] font-sans select-none flex flex-col overflow-hidden text-[#F5F5F5]">
      
      {/* Content Viewport Wrapper */}
      <div className="flex-1 overflow-hidden flex flex-col relative bg-[#0F0F0F]">
        
        {/* YouTube Desktop Header (Global, always visible) */}
        <div className="h-14 bg-[#0F0F0F] pl-4 pr-6 flex items-center justify-between shrink-0 select-none z-35 border-b border-[rgba(255,255,255,0.06)]">
          
          {/* Left logo section */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSidebarExpanded(!sidebarExpanded)}
              className="text-white hover:bg-white/10 p-1.5 rounded-full transition-colors cursor-pointer"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div 
              onClick={() => setCurrentScreen('screen0')}
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
              onClick={() => openFamilyLink('Overview')}
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

        {/* Global Sidebar + Workspace Flex wrapper */}
        <div className="flex-1 flex overflow-hidden relative">
          
          {/* LEFT SIDEBAR (Standard YouTube layout retained on all pages) */}
          {sidebarExpanded ? (
            /* EXPANDED SIDEBAR: w-60 (240px) */
            <div className="w-60 bg-[#0F0F0F] shrink-0 border-r border-[rgba(255,255,255,0.06)] flex flex-col py-3 select-none overflow-y-auto h-[calc(100vh-56px)] scrollbar-thin scrollbar-thumb-slate-800">
              
              {/* Top Navigation Group */}
              <div className="flex flex-col px-3 gap-0.5">
                <div 
                  onClick={() => setCurrentScreen('screen0')}
                  className={`flex items-center gap-6 px-3 py-2 text-[14px] cursor-pointer rounded-xl transition-colors ${
                    currentScreen === 'screen0' ? 'font-bold text-white bg-white/10' : 'font-medium text-slate-300 hover:bg-white/5'
                  }`}
                >
                  <HomeSvg className="w-5 h-5 text-white" />
                  <span>Home</span>
                </div>
                
                {/* Family Link link embedded natively right here */}
                <div 
                  onClick={() => openFamilyLink('Overview')}
                  className={`flex items-center gap-6 px-3 py-2 text-[14px] cursor-pointer rounded-xl transition-colors ${
                    currentScreen === 'family-link' ? 'font-bold text-white bg-white/10' : 'font-medium text-slate-300 hover:bg-white/5'
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
          ) : (
            /* COLLAPSED SIDEBAR: w-18 (72px) narrow view */
            <div className="w-18 bg-[#0F0F0F] shrink-0 flex flex-col py-3 px-1 items-center gap-6 select-none z-10 border-r border-[rgba(255,255,255,0.06)]">
              
              {/* Home */}
              <div 
                onClick={() => setCurrentScreen('screen0')}
                className={`w-full flex flex-col items-center py-2 rounded-xl transition-all cursor-pointer select-none ${
                  currentScreen === 'screen0' ? 'text-white' : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <HomeSvg className="w-6 h-6 text-white" />
                <span className="text-[10.5px] font-normal mt-1.5 font-sans">Home</span>
              </div>

              {/* Family Link Tab */}
              <div 
                onClick={() => openFamilyLink('Overview')}
                className={`w-full flex flex-col items-center py-2 rounded-xl transition-all cursor-pointer select-none ${
                  currentScreen === 'family-link' ? 'text-white' : 'text-slate-400 hover:text-white hover:bg-white/5'
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
          )}

          {/* MAIN VIEWPORT WORKSPACE AREA */}
          <div className="flex-1 overflow-hidden relative flex bg-[#0F0F0F]">
            
            {/* VIEW 0: YouTube Web Desktop Video Grid */}
            {currentScreen === 'screen0' && (
              <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-4 pb-20 relative h-[calc(100vh-56px)] bg-[#0F0F0F]">
                
                {/* Filters chips bar */}
                <div className="flex items-center gap-2.5 overflow-x-hidden shrink-0 pb-1 select-none text-xs w-full relative">
                  <span className="bg-white text-black font-semibold px-3 py-1.5 rounded-lg cursor-default shrink-0">All</span>
                  <span className="bg-[#222222] hover:bg-[#303030] text-white px-3 py-1.5 rounded-lg cursor-not-allowed transition-colors shrink-0">Music</span>
                  <span className="bg-[#222222] hover:bg-[#303030] text-white px-3 py-1.5 rounded-lg cursor-not-allowed transition-colors shrink-0">Mixes</span>
                  <span className="bg-[#222222] hover:bg-[#303030] text-white px-3 py-1.5 rounded-lg cursor-not-allowed transition-colors shrink-0">Podcasts</span>
                  <span className="bg-[#222222] hover:bg-[#303030] text-white px-3 py-1.5 rounded-lg cursor-not-allowed transition-colors shrink-0">AI</span>
                  {/* Right shadow cover */}
                  <div className="absolute right-0 top-0 bottom-0 bg-gradient-to-l from-[#0F0F0F] via-[#0F0F0F]/90 to-transparent w-16 flex items-center justify-end pr-1 select-none">
                    <div className="w-7 h-7 rounded-full bg-[#1F1F1F] flex items-center justify-center text-white pointer-events-auto cursor-not-allowed">
                      <ChevronRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* 3-Column Video Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-10 mt-2">
                  
                  {/* Card 1: INDIA'S GOT LATENT S2 EP2 */}
                  <div className="flex flex-col gap-2.5 bg-transparent hover:bg-white/5 p-2 rounded-2xl shadow-sm shrink-0 transition-colors group cursor-pointer">
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
                      <div className="w-9 h-9 rounded-full overflow-hidden shrink-0">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=samay" alt="Samay Raina Profile" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 flex flex-col">
                        <div className="flex justify-between items-start gap-1">
                          <h4 className="text-[14px] font-medium text-slate-100 line-clamp-2 leading-snug">
                            INDIA'S GOT LATENT S2 EP2 ft. Harssh Limbachiya, Kiku Sharda, Chandan Prabhakar
                          </h4>
                          <span className="text-slate-405 font-bold text-[14px] cursor-default leading-none">⋮</span>
                        </div>
                        <p className="text-[12px] text-slate-400 mt-1 flex items-center gap-1.5">
                          <span>Samay Raina</span>
                          <span className="w-3.5 h-3.5 bg-slate-650/60 text-slate-300 text-[8px] font-black rounded-full flex items-center justify-center">✓</span>
                        </p>
                        <p className="text-[12px] text-slate-500 mt-0.5">24m views • 1 day ago</p>
                      </div>
                    </div>
                  </div>

                  {/* Card 2: 지현꿍 Vlog with Custom brown background box */}
                  <div className="flex flex-col gap-2.5 bg-[#17120e] border border-[#3c2a1c]/60 p-2.5 rounded-[20px] shadow-md shrink-0 transition-colors group cursor-pointer">
                    <div className="w-full aspect-video bg-slate-800 rounded-xl relative overflow-hidden shrink-0">
                      <img 
                        src="/jihyun.png" 
                        alt="지현꿍 Vlog" 
                        className="w-full h-full object-cover transition-transform group-hover:scale-101 animate-fadeIn"
                      />
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

                  {/* Card 3: Sponsored IBM Coursera ad Card */}
                  <div className="flex flex-col gap-2.5 bg-transparent hover:bg-white/5 p-2 rounded-2xl shadow-sm shrink-0 transition-colors group cursor-pointer">
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
                  <div className="flex flex-col gap-2.5 bg-transparent hover:bg-white/5 p-2 rounded-2xl shadow-sm shrink-0 transition-colors group cursor-pointer">
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

                  {/* Card 5: Chai aur Book Reading */}
                  <div className="flex flex-col gap-2.5 bg-transparent hover:bg-white/5 p-2 rounded-2xl shadow-sm shrink-0 transition-colors group cursor-pointer">
                    <div className="w-full aspect-video bg-slate-800 rounded-xl relative overflow-hidden shrink-0">
                      <img 
                        src="/chai_book.png" 
                        alt="Chai aur Book" 
                        className="w-full h-full object-cover transition-transform group-hover:scale-101 animate-fadeIn"
                      />
                      <div className="absolute top-2.5 left-2.5 bg-[#FF0000] text-white text-[8px] font-black px-1.5 py-0.5 rounded uppercase flex items-center gap-1.5 select-none tracking-wider">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span> LIVE
                      </div>
                      <div className="absolute bottom-2.5 right-2.5 bg-black/80 px-1.5 py-0.5 rounded text-[9.5px] font-bold select-none text-white tracking-wide">
                        1:27:59
                      </div>
                    </div>
                    <div className="flex gap-3 px-1">
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

                  {/* Card 6: HAAREYA Song */}
                  <div className="flex flex-col gap-2.5 bg-transparent hover:bg-white/5 p-2 rounded-2xl shadow-sm shrink-0 transition-colors group cursor-pointer">
                    <div className="w-full aspect-video bg-slate-800 rounded-xl relative overflow-hidden shrink-0">
                      <img 
                        src="/haareya.png" 
                        alt="Haareya Song" 
                        className="w-full h-full object-cover transition-transform group-hover:scale-101 animate-fadeIn"
                      />
                      <div className="absolute bottom-2.5 right-2.5 bg-black/80 px-1.5 py-0.5 rounded text-[9.5px] font-bold select-none text-white tracking-wide flex items-center gap-1">
                        <span>🎵</span> 3:36
                      </div>
                    </div>
                    <div className="flex gap-3 px-1">
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
            )}

            {/* THREE-PANEL FAMILY LINK SHELL SYSTEM */}
            {currentScreen === 'family-link' && (
              <div className="flex-1 flex overflow-hidden bg-[#131313] animate-fadeIn">
                
                {/* PANEL 1: Vertical Family Member Drawer (64px wide - Proton surface layout) */}
                <div className="w-16 bg-[#131313] border-r border-white/5 flex flex-col py-4 items-center gap-6 shrink-0 select-none">
                  {/* Close/Back button */}
                  <button 
                    onClick={() => setCurrentScreen('screen0')}
                    className="w-9 h-9 rounded-xl bg-[#1B1B1B] hover:bg-[#242424] flex items-center justify-center text-[#F7F7F7] cursor-pointer transition-all duration-200 border border-white/5 hover:scale-[1.01] hover:shadow-md active:scale-95"
                    title="Back to YouTube"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>

                  <div className="w-8 h-[1px] bg-white/5"></div>

                  {/* Family member avatars */}
                  <div className="flex flex-col gap-4 items-center">
                    {/* Parent Profile */}
                    <div className="w-8.5 h-8.5 rounded-full overflow-hidden border border-white/10 shadow-sm select-none shrink-0 animate-fadeIn" title="Parent Account">
                      <img src="/sub_breanna.png" alt="Parent Avatar" className="w-full h-full object-cover" />
                    </div>

                    {/* Aanya Profile (Active highlighted with subtle blue border glow) */}
                    <div className="w-9.5 h-9.5 rounded-full p-[2px] bg-[#4285F4] flex items-center justify-center cursor-pointer shadow-md shadow-[#4285F4]/20 overflow-hidden shrink-0" title="Aanya's Profile">
                      <div className="w-full h-full rounded-full overflow-hidden border border-[#131313]">
                        <img src="/sub_saranghoe.png" alt="Aanya Avatar" className="w-full h-full object-cover" />
                      </div>
                    </div>

                    {/* Aarav Profile */}
                    <div className="w-8.5 h-8.5 rounded-full overflow-hidden border border-white/5 hover:border-white/20 cursor-pointer transition-colors shadow-sm shrink-0" title="Aarav's Profile">
                      <img src="/sub_taneesha.png" alt="Aarav Avatar" className="w-full h-full object-cover" />
                    </div>
                  </div>

                  <div className="flex-1"></div>

                  {/* Add family member button */}
                  <button className="w-8.5 h-8.5 rounded-full bg-[#1B1B1B] hover:bg-[#242424] flex items-center justify-center text-[#A8A8A8] cursor-not-allowed border border-white/5">
                    <span className="text-sm font-medium">+</span>
                  </button>
                </div>

                {/* PANEL 2: Category sub-navigation rail matching Proton menu items */}
                <div className="w-[220px] bg-[#131313] border-r border-white/5 flex flex-col py-5 gap-1 px-3.5 shrink-0 select-none">
                  
                  {/* AANYA'S PROFILE group */}
                  <div className="px-3 py-1.5 text-[10px] font-bold text-[#777777] uppercase tracking-wider">
                    Aanya's Profile
                  </div>
                  <button 
                    onClick={() => setActiveTab('Overview')}
                    className={`flex items-center gap-3.5 px-3 py-2 rounded-xl text-xs font-light transition-all w-full cursor-pointer text-left ${
                      activeTab === 'Overview' 
                        ? 'bg-[#1B1B1B] border border-white/5 text-[#F7F7F7] font-normal shadow-[0_2px_8px_rgba(0,0,0,0.4)]' 
                        : 'text-[#A8A8A8] hover:bg-white/5 hover:text-[#F7F7F7]'
                    }`}
                  >
                    <Home className="w-3.5 h-3.5 opacity-80" />
                    <span>Overview</span>
                  </button>

                  <div className="h-px bg-white/5 my-2.5"></div>

                  {/* CONTROLS group */}
                  <div className="px-3 py-1.5 text-[10px] font-bold text-[#777777] uppercase tracking-wider">
                    Controls
                  </div>
                  
                  <button 
                    onClick={() => setActiveTab('Privacy')}
                    className={`flex items-center gap-3.5 px-3 py-2 rounded-xl text-xs font-light transition-all w-full cursor-pointer text-left ${
                      activeTab === 'Privacy' 
                        ? 'bg-[#1B1B1B] border border-white/5 text-[#F7F7F7] font-normal shadow-[0_2px_8px_rgba(0,0,0,0.4)]' 
                        : 'text-[#A8A8A8] hover:bg-white/5 hover:text-[#F7F7F7]'
                    }`}
                  >
                    <Shield className="w-3.5 h-3.5 opacity-80" />
                    <span>Privacy Center</span>
                  </button>

                  <button 
                    onClick={() => setActiveTab('Watch History')}
                    className={`flex items-center gap-3.5 px-3 py-2 rounded-xl text-xs font-light transition-all w-full cursor-pointer text-left ${
                      activeTab === 'Watch History' 
                        ? 'bg-[#1B1B1B] border border-white/5 text-[#F7F7F7] font-normal shadow-[0_2px_8px_rgba(0,0,0,0.4)]' 
                        : 'text-[#A8A8A8] hover:bg-white/5 hover:text-[#F7F7F7]'
                    }`}
                  >
                    <Play className="w-3.5 h-3.5 opacity-80" />
                    <span>Watch History</span>
                  </button>

                  <button 
                    onClick={() => setActiveTab('Search Activity')}
                    className={`flex items-center gap-3.5 px-3 py-2 rounded-xl text-xs font-light transition-all w-full cursor-pointer text-left ${
                      activeTab === 'Search Activity' 
                        ? 'bg-[#1B1B1B] border border-white/5 text-[#F7F7F7] font-normal shadow-[0_2px_8px_rgba(0,0,0,0.4)]' 
                        : 'text-[#A8A8A8] hover:bg-white/5 hover:text-[#F7F7F7]'
                    }`}
                  >
                    <Compass className="w-3.5 h-3.5 opacity-80" />
                    <span>Search Activity</span>
                  </button>

                  <button 
                    onClick={() => setActiveTab('Recommendations')}
                    className={`flex items-center gap-3.5 px-3 py-2 rounded-xl text-xs font-light transition-all w-full cursor-pointer text-left ${
                      activeTab === 'Recommendations' 
                        ? 'bg-[#1B1B1B] border border-white/5 text-[#F7F7F7] font-normal shadow-[0_2px_8px_rgba(0,0,0,0.4)]' 
                        : 'text-[#A8A8A8] hover:bg-white/5 hover:text-[#F7F7F7]'
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5 opacity-80" />
                    <span>Recommendations</span>
                  </button>

                  <button 
                    onClick={() => setActiveTab('Downloads')}
                    className={`flex items-center gap-3.5 px-3 py-2 rounded-xl text-xs font-light transition-all w-full cursor-pointer text-left ${
                      activeTab === 'Downloads' 
                        ? 'bg-[#1B1B1B] border border-white/5 text-[#F7F7F7] font-normal shadow-[0_2px_8px_rgba(0,0,0,0.4)]' 
                        : 'text-[#A8A8A8] hover:bg-white/5 hover:text-[#F7F7F7]'
                    }`}
                  >
                    <Download className="w-3.5 h-3.5 opacity-80" />
                    <span>Downloads</span>
                  </button>

                  <button 
                    onClick={() => setActiveTab('Permissions')}
                    className={`flex items-center gap-3.5 px-3 py-2 rounded-xl text-xs font-light transition-all w-full cursor-pointer text-left ${
                      activeTab === 'Permissions' 
                        ? 'bg-[#1B1B1B] border border-white/5 text-[#F7F7F7] font-normal shadow-[0_2px_8px_rgba(0,0,0,0.4)]' 
                        : 'text-[#A8A8A8] hover:bg-white/5 hover:text-[#F7F7F7]'
                    }`}
                  >
                    <Lock className="w-3.5 h-3.5 opacity-80" />
                    <span>Permissions</span>
                  </button>

                  <button 
                    onClick={() => {
                      setDeleteCheckbox1(false);
                      setDeleteCheckbox2(false);
                      setDeleteStep(1);
                      setActiveTab('Delete Data');
                    }}
                    className={`flex items-center gap-3.5 px-3 py-2 rounded-xl text-xs font-light transition-all w-full cursor-pointer text-left ${
                      activeTab === 'Delete Data' 
                        ? 'bg-[#1B1B1B] border border-white/5 text-[#F7F7F7] font-normal shadow-[0_2px_8px_rgba(0,0,0,0.4)]' 
                        : 'text-[#A8A8A8] hover:bg-white/5 hover:text-[#F7F7F7]'
                    }`}
                  >
                    <Trash2 className="w-3.5 h-3.5 opacity-80" />
                    <span>Delete Data</span>
                  </button>

                  <div className="h-px bg-white/5 my-2.5"></div>

                  {/* SYSTEM group */}
                  <div className="px-3 py-1.5 text-[10px] font-bold text-[#777777] uppercase tracking-wider">
                    System
                  </div>
                  <button 
                    onClick={() => setActiveTab('Settings')}
                    className={`flex items-center gap-3.5 px-3 py-2 rounded-xl text-xs font-light transition-all w-full cursor-pointer text-left ${
                      activeTab === 'Settings' 
                        ? 'bg-[#1B1B1B] border border-white/5 text-[#F7F7F7] font-normal shadow-[0_2px_8px_rgba(0,0,0,0.4)]' 
                        : 'text-[#A8A8A8] hover:bg-white/5 hover:text-[#F7F7F7]'
                    }`}
                  >
                    <Settings className="w-3.5 h-3.5 opacity-80" />
                    <span>Settings</span>
                  </button>

                </div>

                {/* PANEL 3: Settings Workspace Area (Proton Pass Visual Overhaul) */}
                <div className="flex-1 proton-grid overflow-y-auto p-12 flex flex-col pb-28 select-none">
                  
                  {/* Wrapper to ensure content sits above the grid lines */}
                  <div className="relative z-10 flex flex-col w-full">
                    
                    {/* TAB 1: Overview Dashboard Home */}
                    {activeTab === 'Overview' && (
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
                              onClick={() => setActiveTab('Privacy')}
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
                    )}

                    {/* TAB 2: Privacy Center Screen */}
                    {activeTab === 'Privacy' && (
                      <div className="flex flex-col animate-fadeIn space-y-10">
                        
                        {/* Heading */}
                        <div className="flex flex-col border-b border-white/5 pb-7">
                          <h1 className="text-[42px] font-extralight text-[#F7F7F7] tracking-tight leading-tight">
                            Privacy <span className="font-light">Center</span>
                          </h1>
                          <p className="text-xs text-[#A8A8A8] mt-1.5 font-light">Managing Aanya's YouTube Account</p>
                        </div>

                        {/* Section 1: Privacy Health Audit (Styled exactly like Dark Web Monitoring card) */}
                        <div className="bg-[#242424]/30 border border-white/5 rounded-[24px] p-7 flex items-center justify-between shadow-[0_12px_40px_rgba(0,0,0,0.65)] relative overflow-hidden before:absolute before:inset-0 before:rounded-[24px] before:border-t before:border-white/5 before:pointer-events-none">
                          <div className="flex-1 max-w-[65%]">
                            <h3 className="text-[16px] font-medium text-[#F7F7F7] tracking-tight">Privacy Health Audit</h3>
                            <p className="text-xs text-[#A8A8A8] mt-2 leading-relaxed font-light">
                              Verification modules evaluate active trackers, unencrypted metadata tags, and search index registers.
                            </p>
                            <div className="flex items-center gap-3.5 mt-4">
                              <span className="text-[11px] font-bold text-[#34A853] bg-[#34A853]/10 border border-[#34A853]/15 px-3 py-0.5 rounded-full uppercase tracking-wider select-none">
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

                        {/* Section 2: Recent Activity Timeline (Styled like today's list items list) */}
                        <div className="flex flex-col gap-4 select-none">
                          <h2 className="text-[18px] font-medium text-[#F7F7F7] tracking-tight">Recent Activity logs</h2>
                          
                          <div className="flex flex-col gap-3.5">
                            
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

                          </div>
                        </div>

                        {/* Section 3: Quick Actions */}
                        <div className="flex flex-col gap-4">
                          <h2 className="text-[18px] font-medium text-[#F7F7F7] tracking-tight">Quick Actions</h2>
                          
                          <div className="flex flex-wrap gap-3.5">
                            <button 
                              onClick={() => setActiveTab('Downloads')}
                              className="px-6 py-2.5 bg-gradient-to-b from-white to-[#E5E5E5] hover:from-[#FAFAFA] hover:to-[#D5D5D5] text-black font-semibold rounded-full shadow-[0_4px_12px_rgba(255,255,255,0.12)] transition-all duration-200 hover:scale-[1.01] active:scale-[0.98] select-none cursor-pointer"
                            >
                              Export Data
                            </button>

                            <button 
                              onClick={() => {
                                setDeleteStep(1);
                                setDeleteCheckbox1(false);
                                setDeleteCheckbox2(false);
                                setActiveTab('Delete Data');
                              }}
                              className="px-6 py-2.5 bg-gradient-to-b from-[#252525] to-[#151515] hover:from-[#303030] hover:to-[#1C1C1C] border border-white/5 text-[#F7F7F7] font-semibold rounded-full shadow-lg transition-all duration-200 hover:scale-[1.01] active:scale-[0.98] select-none cursor-pointer"
                            >
                              Delete Activity
                            </button>

                            <button 
                              onClick={() => setActiveTab('Watch History')}
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
                              onClick={() => setActiveTab('Watch History')}
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
                              onClick={() => setActiveTab('Search Activity')}
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
                              onClick={() => setActiveTab('Recommendations')}
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
                    )}

                    {/* TAB 3: Watch History Settings (Proton style settings view) */}
                    {activeTab === 'Watch History' && (
                      <div className="flex flex-col animate-fadeIn space-y-10">
                        
                        <div className="flex flex-col border-b border-white/5 pb-7">
                          <h1 className="text-[34px] font-light text-[#F7F7F7] tracking-tight leading-tight">Watch History</h1>
                          <p className="text-xs text-[#A8A8A8] mt-1.5 font-light">Manage how YouTube stores Aanya's watch activity.</p>
                        </div>

                        <div className="bg-gradient-to-b from-[#1B1B1B] to-[#131313] border border-white/5 rounded-[24px] p-7.5 shadow-[0_12px_40px_rgba(0,0,0,0.65)] flex flex-col gap-4 relative overflow-hidden before:absolute before:inset-0 before:rounded-[24px] before:border-t before:border-white/10 before:pointer-events-none">
                          
                          {/* Row 1: Save Watch History */}
                          <div className="p-5 bg-[#242424]/40 border border-white/5 rounded-2xl flex justify-between items-center hover:bg-[#242424] transition-all hover:scale-[1.01] duration-200">
                            <div className="max-w-[70%]">
                              <h4 className="text-[14px] font-medium text-[#F7F7F7]">Save watch history</h4>
                              <p className="text-[13px] text-[#A8A8A8] mt-1 leading-relaxed font-light">
                                Saves lists of videos watched on Aanya's Google account to improve personalized recommendation feeds.
                              </p>
                            </div>
                            <button 
                              onClick={() => {
                                setWatchHistoryPaused(!watchHistoryPaused);
                                showToast(watchHistoryPaused ? "YouTube watch history logging resumed." : "YouTube watch history logging paused.");
                              }}
                              className={`w-10 h-6 rounded-full p-0.5 transition-colors relative cursor-pointer ${watchHistoryPaused ? 'bg-[#131313] border border-white/5' : 'bg-[#4285F4]'}`}
                            >
                              <div className={`w-4.5 h-4.5 rounded-full bg-white transition-transform shadow-md ${watchHistoryPaused ? 'translate-x-0' : 'translate-x-4'}`}></div>
                            </button>
                          </div>

                          {/* Row 2: Pause History toggles */}
                          <div className="p-5 bg-[#242424]/40 border border-white/5 rounded-2xl flex justify-between items-center hover:bg-[#242424] transition-all hover:scale-[1.01] duration-200">
                            <div className="max-w-[70%]">
                              <h4 className="text-[14px] font-medium text-[#F7F7F7]">Pause activity logs</h4>
                              <p className="text-[13px] text-[#A8A8A8] mt-1 leading-relaxed font-light">
                                Temporarily stop recording search trails, audio logs, and video history.
                              </p>
                            </div>
                            <button 
                              onClick={() => {
                                setWatchHistoryPaused(!watchHistoryPaused);
                                showToast(watchHistoryPaused ? "Supervision logging active." : "Supervision logging paused.");
                              }}
                              className={`w-10 h-6 rounded-full p-0.5 transition-colors relative cursor-pointer ${watchHistoryPaused ? 'bg-[#131313] border border-white/5' : 'bg-[#4285F4]'}`}
                            >
                              <div className={`w-4.5 h-4.5 rounded-full bg-white transition-transform shadow-md ${watchHistoryPaused ? 'translate-x-0' : 'translate-x-4'}`}></div>
                            </button>
                          </div>

                          {/* Row 3: Auto Delete */}
                          <div className="p-5 bg-[#242424]/40 border border-white/5 rounded-2xl flex justify-between items-center hover:bg-[#242424] transition-all hover:scale-[1.01] duration-200">
                            <div>
                              <h4 className="text-[14px] font-medium text-[#F7F7F7]">Auto Delete</h4>
                              <p className="text-[13px] text-[#A8A8A8] mt-1 font-light">Automatically delete activity logs older than a specific age.</p>
                            </div>
                            <span className="text-[12px] font-bold text-[#4285F4] bg-[#4285F4]/10 border border-[#4285F4]/20 px-3.5 py-1 rounded-full uppercase tracking-wider select-none">
                              18 Months
                            </span>
                          </div>

                          {/* Row 4: View History link */}
                          <div 
                            onClick={() => setActiveTab('Privacy')}
                            className="p-5 bg-[#242424]/20 hover:bg-[#242424]/50 border border-white/5 rounded-2xl flex justify-between items-center cursor-pointer transition-all hover:scale-[1.01] duration-200"
                          >
                            <span className="text-[13px] font-semibold text-[#4285F4]">View History Logs</span>
                            <span className="text-[12px] text-[#A8A8A8]">→</span>
                          </div>

                        </div>

                      </div>
                    )}

                    {/* TAB 4: Search Activity Settings */}
                    {activeTab === 'Search Activity' && (
                      <div className="flex flex-col animate-fadeIn space-y-10">
                        
                        <div className="flex flex-col border-b border-white/5 pb-7">
                          <h1 className="text-[34px] font-light text-[#F7F7F7] tracking-tight leading-tight">Search Activity</h1>
                          <p className="text-xs text-[#A8A8A8] mt-1.5 font-light">Manage search logs saved to child profiles.</p>
                        </div>

                        <div className="bg-gradient-to-b from-[#1B1B1B] to-[#131313] border border-white/5 rounded-[24px] p-7.5 shadow-[0_12px_40px_rgba(0,0,0,0.65)] flex flex-col gap-4 relative overflow-hidden before:absolute before:inset-0 before:rounded-[24px] before:border-t before:border-white/10 before:pointer-events-none">
                          
                          {/* Row 1: Save Search History */}
                          <div className="p-5 bg-[#242424]/40 border border-white/5 rounded-2xl flex justify-between items-center hover:bg-[#242424] transition-all hover:scale-[1.01] duration-200">
                            <div className="max-w-[70%]">
                              <h4 className="text-[14px] font-medium text-[#F7F7F7]">Save search queries</h4>
                              <p className="text-[13px] text-[#A8A8A8] mt-1 leading-relaxed font-light">
                                Saves search index details to speed up auto-complete lists.
                              </p>
                            </div>
                            <button 
                              onClick={() => {
                                setSearchHistoryPaused(!searchHistoryPaused);
                                showToast(searchHistoryPaused ? "YouTube search history logging resumed." : "YouTube search history logging paused.");
                              }}
                              className={`w-10 h-6 rounded-full p-0.5 transition-colors relative cursor-pointer ${searchHistoryPaused ? 'bg-[#131313] border border-white/5' : 'bg-[#4285F4]'}`}
                            >
                              <div className={`w-4.5 h-4.5 rounded-full bg-white transition-transform shadow-md ${searchHistoryPaused ? 'translate-x-0' : 'translate-x-4'}`}></div>
                            </button>
                          </div>

                          {/* Row 2: Auto Delete */}
                          <div className="p-5 bg-[#242424]/40 border border-white/5 rounded-2xl flex justify-between items-center hover:bg-[#242424] transition-all hover:scale-[1.01] duration-200">
                            <div>
                              <h4 className="text-[14px] font-medium text-[#F7F7F7]">Auto Delete</h4>
                              <p className="text-[13px] text-[#A8A8A8] mt-1 font-light">Automatically delete activity logs older than a specific age.</p>
                            </div>
                            <span className="text-[12px] font-bold text-[#4285F4] bg-[#4285F4]/10 border border-[#4285F4]/20 px-3.5 py-1 rounded-full uppercase tracking-wider select-none">
                              18 Months
                            </span>
                          </div>

                          {/* Row 3: View History link */}
                          <div 
                            onClick={() => setActiveTab('Privacy')}
                            className="p-5 bg-[#242424]/20 hover:bg-[#242424]/50 border border-white/5 rounded-2xl flex justify-between items-center cursor-pointer transition-all hover:scale-[1.01] duration-200"
                          >
                            <span className="text-[13px] font-semibold text-[#4285F4]">View History Logs</span>
                            <span className="text-[12px] text-[#A8A8A8]">→</span>
                          </div>

                        </div>

                      </div>
                    )}

                    {/* TAB 5: Recommendations */}
                    {activeTab === 'Recommendations' && (
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
                    )}

                    {/* TAB 6: Downloads Data Export */}
                    {activeTab === 'Downloads' && (
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
                              <span className="text-[9px] text-[#34A853] bg-[#34A853]/10 border border-[#34A853]/20 px-2.5 py-0.5 rounded font-bold uppercase tracking-wider">Completed</span>
                            </div>
                            
                            <div className="p-5 bg-[#242424]/40 border border-white/5 rounded-2xl flex items-center justify-between hover:bg-[#242424] cursor-pointer transition-all duration-200 hover:scale-[1.01] shadow-md">
                              <div className="flex items-center gap-3.5">
                                <Database className="w-5 h-5 text-[#A8A8A8]" />
                                <div>
                                  <p className="text-[#F7F7F7] font-medium text-xs">Typed Search Queries & Comments History</p>
                                  <p className="text-[10px] text-[#777777] mt-0.5">Size: 12 KB • CSV format</p>
                                </div>
                              </div>
                              <span className="text-[9px] text-[#4285F4] bg-[#4285F4]/10 border border-[#4285F4]/20 px-2.5 py-0.5 rounded font-bold uppercase tracking-wider animate-pulse">Processing</span>
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
                    )}

                    {/* TAB 7: Permissions Inactive */}
                    {activeTab === 'Permissions' && (
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
                    )}

                    {/* TAB 8: Settings Inactive */}
                    {activeTab === 'Settings' && (
                      <div className="flex flex-col animate-fadeIn space-y-10">
                        <div className="flex flex-col border-b border-white/5 pb-7">
                          <h1 className="text-[34px] font-light text-[#F7F7F7] tracking-tight leading-tight">Settings</h1>
                          <p className="text-xs text-[#A8A8A8] mt-1.5 font-light">General settings configuration panel.</p>
                        </div>
                        <div className="bg-gradient-to-b from-[#1B1B1B] to-[#131313] border border-white/5 rounded-[24px] p-7.5 text-[#A8A8A8] text-xs shadow-lg">
                          Supervision limits are managed via Family Link.
                        </div>
                      </div>
                    )}

                    {/* TAB 9: Delete Data Flow (Apple/Proton Style Confirmation Dialog) */}
                    {activeTab === 'Delete Data' && (
                      <div className="max-w-[620px] w-full bg-gradient-to-b from-[#1B1B1B] to-[#131313] border border-white/5 rounded-[24px] shadow-2xl flex flex-col relative overflow-hidden text-left p-8 animate-fadeIn mt-1 before:absolute before:inset-0 before:rounded-[24px] before:border-t before:border-white/10 before:pointer-events-none">
                        
                        {/* Header dialog */}
                        <div className="flex items-center gap-3 border-b border-white/5 pb-5 mb-6.5 select-none relative z-10">
                          {deleteStep < 4 && deleteStep > 1 && (
                            <button 
                              onClick={() => setDeleteStep(deleteStep - 1)}
                              className="w-7 h-7 rounded-full bg-[#1B1B1B] hover:bg-[#242424] flex items-center justify-center text-white cursor-pointer transition-colors active:scale-90 border border-white/5 shadow-inner"
                            >
                              <ArrowLeft className="w-4 h-4" />
                            </button>
                          )}
                          <div className="flex-1">
                            <h3 className="text-sm font-medium text-[#F7F7F7]">Erase Aanya's YouTube activity</h3>
                            <p className="text-[10px] text-[#A8A8A8] font-light">Google Family Link Data Deletion</p>
                          </div>
                          {/* Step progress label */}
                          {deleteStep < 4 && (
                            <span className="text-[11px] font-semibold text-[#808080] bg-[#131313] px-2.5 py-1 rounded-lg border border-white/5">
                              Step {deleteStep} of 3
                            </span>
                          )}
                        </div>

                        {/* STEP 1: Choose time range scope */}
                        {deleteStep === 1 && (
                          <div className="flex flex-col gap-5 animate-fadeIn relative z-10">
                            <p className="text-xs text-[#A8A8A8] font-light">Select the scope of history you wish to delete from Google servers:</p>
                            <div className="flex flex-col gap-3">
                              {/* Option 1: 7 Days */}
                              <label className="flex items-center justify-between p-4 bg-[#232323]/35 border border-white/5 rounded-xl cursor-pointer hover:bg-[#2A2A2A]/40 transition-colors">
                                <div className="flex flex-col">
                                  <span className="text-xs font-medium text-[#F7F7F7]">Erase last 7 days</span>
                                  <span className="text-[10.5px] text-[#777777] mt-0.5">Wipe watched videos and searches from the past week</span>
                                </div>
                                <input 
                                  type="radio" 
                                  name="scope" 
                                  checked={erasureScope === '7-days'}
                                  onChange={() => setErasureScope('7-days')}
                                  className="accent-[#4285F4] w-4.5 h-4.5 cursor-pointer" 
                                />
                              </label>

                              {/* Option 2: 30 Days */}
                              <label className="flex items-center justify-between p-4 bg-[#232323]/35 border border-white/5 rounded-xl cursor-pointer hover:bg-[#2A2A2A]/40 transition-colors">
                                <div className="flex flex-col">
                                  <span className="text-xs font-medium text-[#F7F7F7]">Erase last 30 days</span>
                                  <span className="text-[10.5px] text-[#777777] mt-0.5">Wipe watched videos and searches from the past month</span>
                                </div>
                                <input 
                                  type="radio" 
                                  name="scope" 
                                  checked={erasureScope === '30-days'}
                                  onChange={() => setErasureScope('30-days')}
                                  className="accent-[#4285F4] w-4.5 h-4.5 cursor-pointer" 
                                />
                              </label>

                              {/* Option 3: All history */}
                              <label className="flex items-center justify-between p-4 bg-[#232323]/35 border border-white/5 rounded-xl cursor-pointer hover:bg-[#2A2A2A]/40 transition-colors">
                                <div className="flex flex-col">
                                  <span className="text-xs font-medium text-[#F7F7F7]">Erase all watch & search history</span>
                                  <span className="text-[10.5px] text-[#777777] mt-0.5">Purge full history lists across all linked devices</span>
                                </div>
                                <input 
                                  type="radio" 
                                  name="scope" 
                                  checked={erasureScope === 'all'}
                                  onChange={() => setErasureScope('all')}
                                  className="accent-[#4285F4] w-4.5 h-4.5 cursor-pointer" 
                                />
                              </label>

                              {/* Option 4: Entire Account Activity */}
                              <label className="flex items-center justify-between p-4 bg-[#232323]/35 border border-white/5 rounded-xl cursor-pointer hover:bg-[#2A2A2A]/40 transition-colors">
                                <div className="flex flex-col">
                                  <span className="text-xs font-medium text-[#EA4335]">Erase entire account activity database</span>
                                  <span className="text-[10.5px] text-[#777777] mt-0.5">YouTube logs, Assistant audio entries, and Chrome browser logs</span>
                                </div>
                                <input 
                                  type="radio" 
                                  name="scope" 
                                  checked={erasureScope === 'account'}
                                  onChange={() => setErasureScope('account')}
                                  className="accent-[#4285F4] w-4.5 h-4.5 cursor-pointer" 
                                />
                              </label>
                            </div>

                            <div className="flex justify-end gap-3 border-t border-white/5 pt-5 mt-2 shrink-0">
                              <button 
                                onClick={() => setActiveTab('Privacy')} 
                                className="px-5 py-2.5 bg-gradient-to-b from-[#252525] to-[#151515] border border-white/5 text-xs font-semibold rounded-full cursor-pointer transition-colors text-white"
                              >
                                Cancel
                              </button>
                              <button 
                                onClick={() => setDeleteStep(2)} 
                                className="px-6 py-2.5 bg-gradient-to-b from-white to-[#E5E5E5] hover:from-[#FAFAFA] hover:to-[#D5D5D5] text-black text-xs font-bold rounded-full cursor-pointer transition-all duration-200 shadow-md hover:scale-[1.01] active:scale-[0.98]"
                              >
                                Next
                              </button>
                            </div>
                          </div>
                        )}

                        {/* STEP 2: Review details */}
                        {deleteStep === 2 && (
                          <div className="flex flex-col gap-5 animate-fadeIn relative z-10">
                            
                            {/* Acme-style Warning Box */}
                            <div className="bg-[#E04F3F]/5 border border-[#E04F3F]/25 rounded-xl p-4 flex gap-4 text-xs leading-relaxed select-none relative overflow-hidden">
                              <div className="w-1 bg-[#E04F3F] rounded-full shrink-0"></div>
                              <div>
                                <span className="font-bold text-[#F7F7F7]">Warning:</span> This action <span className="font-bold">cannot be undone</span>. Deleting these registers will wipe all historical watch activity logs, personalized search trails, and comments databases. Recommendation engines will be <span className="font-bold">permanently lost</span>.
                              </div>
                            </div>

                            {/* Acme-style Target Profile Card */}
                            <div className="p-4 bg-[#242424]/30 border border-white/5 rounded-xl flex items-center justify-between shadow-inner select-none">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#14A4E5]/10 border border-[#14A4E5]/25 flex items-center justify-center text-[#14A4E5] shrink-0 font-bold text-sm">
                                  A
                                </div>
                                <div>
                                  <h4 className="text-xs font-bold text-[#F7F7F7]">Aanya's Profile</h4>
                                  <p className="text-[10px] text-[#777777] mt-0.5">
                                    {erasureScope === '7-days' && 'Scope: Last 7 days activity logs'}
                                    {erasureScope === '30-days' && 'Scope: Last 30 days activity logs'}
                                    {erasureScope === 'all' && 'Scope: All watch & search logs'}
                                    {erasureScope === 'account' && 'Scope: Full account logs database'}
                                  </p>
                                </div>
                              </div>
                              <span className="text-[10.5px] text-[#A8A8A8] bg-[#131313] px-3.5 py-1.5 rounded-lg border border-white/5">
                                YouTube Kids
                              </span>
                            </div>

                            <div className="flex justify-end gap-3 border-t border-white/5 pt-5 mt-2 shrink-0">
                              <button 
                                onClick={() => setDeleteStep(1)} 
                                className="px-5 py-2.5 bg-gradient-to-b from-[#252525] to-[#151515] border border-white/5 text-xs font-semibold rounded-full cursor-pointer transition-colors text-white"
                              >
                                Back
                              </button>
                              <button 
                                onClick={() => {
                                  setConfirmDeleteText("");
                                  setDeleteStep(3);
                                }} 
                                className="px-6 py-2.5 bg-gradient-to-b from-white to-[#E5E5E5] hover:from-[#FAFAFA] hover:to-[#D5D5D5] text-black text-xs font-bold rounded-full cursor-pointer transition-all duration-200 shadow-md hover:scale-[1.01] active:scale-[0.98]"
                              >
                                Next
                              </button>
                            </div>
                          </div>
                        )}

                        {/* STEP 3: Parental Confirmation */}
                        {deleteStep === 3 && (
                          <div className="flex flex-col gap-5 animate-fadeIn relative z-10">
                            
                            {/* Acme-style validation input text field */}
                            <div className="flex flex-col gap-4 select-none">
                              <p className="text-xs text-[#B7B7B7] font-light leading-relaxed">
                                Please type the profile name <span className="font-bold text-[#F7F7F7]">Aanya</span> below to authorize deletion:
                              </p>
                              
                              <div className="relative w-full">
                                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#777777]">
                                  <Trash2 className="w-4 h-4" />
                                </div>
                                <input 
                                  type="text"
                                  placeholder="Enter Aanya"
                                  value={confirmDeleteText}
                                  onChange={(e) => setConfirmDeleteText(e.target.value)}
                                  className="w-full bg-[#131313] border border-white/5 rounded-xl pl-10 pr-4 py-3 text-xs text-[#F7F7F7] placeholder-[#777777] focus:outline-none focus:border-[#EA4335]/30 transition-all font-light"
                                />
                              </div>
                            </div>

                            <div className="flex justify-end gap-3 border-t border-white/5 pt-5 mt-2 shrink-0">
                              <button 
                                onClick={() => setDeleteStep(2)} 
                                className="px-5 py-2.5 bg-gradient-to-b from-[#252525] to-[#151515] border border-white/5 text-xs font-semibold rounded-full cursor-pointer transition-colors text-white"
                              >
                                Back
                              </button>
                              <button 
                                disabled={confirmDeleteText !== "Aanya"}
                                onClick={() => {
                                  setDeleteProcessing(true);
                                  setDeleteStep(4);
                                  setDeleteProgress(0);
                                }} 
                                className={`px-6 py-2.5 text-xs font-bold rounded-full transition-all flex items-center gap-2 ${
                                  confirmDeleteText === "Aanya"
                                    ? 'bg-gradient-to-b from-[#EA4335] to-[#C0392B] hover:from-[#FF4D4D] hover:to-[#EA4335] cursor-pointer text-white shadow-md'
                                    : 'bg-[#2A2A2A] text-[#808080] border border-white/5 cursor-not-allowed'
                                }`}
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                                Yes, Delete Activity
                              </button>
                            </div>
                          </div>
                        )}

                        {/* STEP 4: Processing Spinner */}
                        {deleteStep === 4 && (
                          <div className="flex flex-col items-center justify-center p-8 text-center animate-fadeIn min-h-[220px] relative z-10">
                            <div className="relative w-20 h-20 flex items-center justify-center mb-4 select-none">
                              {/* Blue radial glow */}
                              <div className="absolute inset-0 bg-[#4285F4]/10 rounded-full blur-xl animate-pulse"></div>
                              {/* Outer border shell */}
                              <div className="absolute inset-0 rounded-full border border-white/5 bg-[#1B1B1B]/40 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.5)]"></div>
                              {/* Spin glow sweep indicator */}
                              <div className="absolute inset-0 rounded-full border border-t-[#4285F4] border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
                              {/* Inner bezel */}
                              <div className="absolute inset-1.5 rounded-full border border-white/5 bg-gradient-to-b from-[#242424] to-[#121212] shadow-inner"></div>
                              {/* Database icon with neon glow */}
                              <Database className="w-6 h-6 text-[#4285F4] relative z-10 drop-shadow-[0_0_8px_rgba(66,133,244,0.55)]" />
                            </div>
                            <h4 className="text-sm font-medium text-[#F7F7F7] mt-3">Erasing activity registers...</h4>
                            <p className="text-[10px] text-[#A8A8A8] mt-1.5 h-4 font-bold select-none">{deleteTicker}</p>
                            <div className="w-48 bg-[#151515] h-1.5 rounded-full mt-4 overflow-hidden mx-auto shrink-0 border border-white/5 shadow-inner">
                              <div 
                                className="bg-[#4285F4] h-full rounded-full transition-all duration-300"
                                style={{ width: `${deleteProgress}%` }}
                              ></div>
                            </div>
                          </div>
                        )}

                        {/* STEP 5: Success screen */}
                        {deleteStep === 5 && (
                          <div className="flex flex-col items-center justify-center p-6 text-center animate-fadeIn min-h-[220px] relative z-10">
                            <div className="relative w-20 h-20 flex items-center justify-center mb-6 select-none">
                              {/* Deep background green radial pulse glow */}
                              <div className="absolute inset-0 bg-[#34A853]/15 rounded-full blur-xl animate-pulse"></div>
                              {/* Layer 1: Outer glossy ring */}
                              <div className="absolute inset-0 rounded-full border border-[#34A853]/35 bg-[#1B1B1B]/40 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.5)]"></div>
                              {/* Layer 2: Inner metallic bezel */}
                              <div className="absolute inset-1.5 rounded-full border border-white/5 bg-gradient-to-b from-[#242424] to-[#121212] shadow-inner"></div>
                              {/* Check icon with drop shadow */}
                              <CheckCircle2 className="w-7 h-7 text-[#34A853] relative z-10 drop-shadow-[0_0_8px_rgba(52,168,83,0.55)]" />
                            </div>
                            <h3 className="text-sm font-medium text-[#F7F7F7]">Data Purged Successfully</h3>
                            <p className="text-[10px] text-[#A8A8A8] mt-1 font-light">Google active database indexes have updated.</p>

                            <div className="w-full mt-6 border-t border-white/5 pt-4.5 flex justify-center">
                              <button 
                                onClick={() => {
                                  setDeleteStep(1);
                                  setActiveTab('Privacy');
                                }}
                                className="px-6 py-2.5 bg-gradient-to-b from-white to-[#E5E5E5] hover:from-[#FAFAFA] hover:to-[#D5D5D5] text-black text-xs font-semibold rounded-full shadow-[0_4px_12px_rgba(255,255,255,0.12)] transition-all duration-200 hover:scale-[1.01] active:scale-[0.98] cursor-pointer"
                              >
                                Return to Privacy Center
                              </button>
                            </div>
                          </div>
                        )}

                      </div>
                    )}

                  </div>

                </div>

              </div>
            )}

          </div>

        </div>

      </div>

      {/* Global Toast Banner */}
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

      {/* Custom Styles */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.25s ease-out forwards;
        }
        
        /* Proton Pass Grid Pattern with top radial glow */
        .proton-grid {
          background-color: #090909;
          background-image: 
            radial-gradient(circle at 50% -120px, rgba(66, 133, 244, 0.15) 0%, transparent 55%),
            linear-gradient(rgba(255, 255, 255, 0.012) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.012) 1px, transparent 1px);
          background-size: 100% 100%, 28px 28px, 28px 28px;
          position: relative;
        }

        /* Custom scrollbar adjustments for clean dark look */
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

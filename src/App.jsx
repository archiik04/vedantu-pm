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
  Database
} from 'lucide-react';

export default function App() {
  // Navigation State
  const [currentScreen, setCurrentScreen] = useState('screen1');
  
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

  // Current system time for fake status bar
  const [currentTime, setCurrentTime] = useState('09:41');
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? '0' + minutes : minutes;
      setCurrentTime(`${hours}:${minutes} ${ampm}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-page-bg p-4 select-none">
      {/* Interactive Mobile Device Frame */}
      <div className="relative w-[390px] h-[844px] bg-white rounded-[48px] shadow-2xl border-[10px] border-gray-900 overflow-hidden flex flex-col">
        
        {/* Dynamic Notch / Camera Island */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-[26px] bg-gray-900 rounded-b-2xl z-50 flex items-center justify-center">
          <div className="w-3 h-3 bg-gray-800 rounded-full mr-4"></div>
          <div className="w-12 h-1 bg-gray-800 rounded-full"></div>
        </div>

        {/* Fake Status Bar */}
        <div className="h-11 bg-white text-ink text-xs font-semibold px-6 pt-3 flex justify-between items-center z-40 shrink-0">
          <span>{currentTime}</span>
          <div className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L17.61 5.03C16.07 3.74 14.12 3 12 3zm7.03 3.39L6.39 19.03C7.93 20.26 9.88 21 12 21c4.97 0 9-4.03 9-9 0-2.12-.74-4.07-1.97-5.61z" />
            </svg>
            <Wifi className="w-3.5 h-3.5" />
            <Battery className="w-4 h-4" />
          </div>
        </div>

        {/* Dynamic Screen Viewport */}
        <div className="flex-1 overflow-y-auto flex flex-col bg-white pb-6 relative">
          
          {/* SCREEN 1: Family Link Home */}
          {currentScreen === 'screen1' && (
            <div className="flex-1 flex flex-col px-5">
              {/* Header */}
              <div className="py-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Shield className="w-6 h-6 text-navy" />
                  <span className="font-extrabold text-lg text-navy tracking-tight">Family Link</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 cursor-pointer">
                  <Settings className="w-4 h-4 text-muted" />
                </div>
              </div>

              {/* Kid Card Profile */}
              <div className="mt-4 bg-card rounded-3xl p-5 border border-slate-100 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-navy text-ice text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                  Supervised
                </div>
                
                <div className="flex items-center gap-4">
                  {/* Styled Avatar */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-navy to-navy-2 flex items-center justify-center text-white text-2xl font-bold shadow-md">
                    A
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-ink leading-tight">Aanya</h2>
                    <p className="text-xs text-muted">12 years old • Active now</p>
                  </div>
                </div>

                {/* Dashboard Stats */}
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="bg-white rounded-xl p-3 border border-slate-100">
                    <p className="text-[10px] text-muted uppercase font-semibold">Today's limit</p>
                    <p className="text-sm font-bold text-ink mt-0.5">35m / 2hr</p>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full mt-2 overflow-hidden">
                      <div className="bg-warm h-full rounded-full" style={{ width: '30%' }}></div>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-3 border border-slate-100">
                    <p className="text-[10px] text-muted uppercase font-semibold">Location</p>
                    <p className="text-sm font-bold text-ink mt-0.5">Home</p>
                    <p className="text-[9px] text-good font-medium mt-1">Updated 2m ago</p>
                  </div>
                </div>
              </div>

              {/* Navigation Options List */}
              <div className="mt-6 flex flex-col gap-2.5">
                <h3 className="text-xs font-bold text-muted uppercase tracking-wider px-1">Settings</h3>
                
                <div className="bg-card rounded-2xl p-4 flex justify-between items-center border border-slate-100 opacity-60">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-navy font-semibold text-xs border border-slate-200">
                      ⌛
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-ink">App Limits</h4>
                      <p className="text-[10px] text-muted">Restricted apps & categories</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted" />
                </div>

                {/* Privacy and Data clickable row */}
                <button 
                  onClick={() => setCurrentScreen('screen2')}
                  className="bg-card hover:bg-slate-100 hover:border-navy/20 cursor-pointer active:scale-[0.99] transition-all rounded-2xl p-4 flex justify-between items-center border border-slate-100 text-left relative overflow-hidden"
                >
                  {/* Glow effect for NEW */}
                  <div className="absolute top-2 right-2 flex items-center gap-1.5">
                    <span className="bg-warm-bg text-warm text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider animate-pulse border border-warm/20">
                      New
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-navy-2 flex items-center justify-center text-white text-xs border border-navy/10">
                      <Lock className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-ink">Privacy & data</h4>
                      <p className="text-[10px] text-muted">Manage YouTube & Google data</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-navy" />
                </button>

                <div className="bg-card rounded-2xl p-4 flex justify-between items-center border border-slate-100 opacity-60">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-navy font-semibold text-xs border border-slate-200">
                      🌐
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-ink">Content restrictions</h4>
                      <p className="text-[10px] text-muted">Web filters, search safety</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted" />
                </div>
              </div>
            </div>
          )}

          {/* SCREEN 2: Privacy & Data Landing */}
          {currentScreen === 'screen2' && (
            <div className="flex-1 flex flex-col px-5">
              {/* Custom Header with Back */}
              <div className="py-4 flex items-center gap-3">
                <button 
                  onClick={() => setCurrentScreen('screen1')}
                  className="w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center active:scale-90 transition-transform cursor-pointer"
                >
                  <ArrowLeft className="w-5 h-5 text-ink" />
                </button>
                <h1 className="text-lg font-bold text-ink py-0 my-0">Privacy & data</h1>
              </div>

              {/* Graphic/Illustration Container */}
              <div className="mt-4 bg-gradient-to-b from-ice/30 to-transparent rounded-3xl p-6 flex flex-col items-center text-center border border-slate-100">
                <div className="w-20 h-20 rounded-2xl bg-white shadow-md flex items-center justify-center text-navy mb-4 border border-slate-100/50">
                  <Shield className="w-10 h-10 text-navy" />
                </div>
                <h2 className="text-base font-bold text-ink">Aanya's Privacy Settings</h2>
                <p className="text-xs text-muted mt-2 leading-relaxed px-2">
                  Review the search queries, videos watched, and voice transcripts stored in Aanya's Google Account.
                </p>
              </div>

              {/* Console consolidated promo block */}
              <div className="mt-6 bg-card rounded-3xl p-5 border border-slate-100 relative">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-navy flex items-center justify-center text-white shrink-0 mt-0.5 shadow-sm">
                    <Layers className="w-5 h-5 text-ice" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-ink">Unified Settings Center</h3>
                    <p className="text-xs text-muted mt-1 leading-relaxed">
                      We consolidated Google account data controls. You can now audit YouTube activity, audio inputs, and comments in one single place.
                    </p>
                  </div>
                </div>

                <div className="mt-5 border-t border-slate-200/60 pt-4">
                  <button
                    onClick={() => setCurrentScreen('screen3')}
                    className="w-full py-3 bg-navy hover:bg-navy-2 text-white font-bold text-xs rounded-xl shadow-md cursor-pointer hover:shadow-lg active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                  >
                    Open Family Privacy Center
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Other settings */}
              <div className="mt-5 bg-card rounded-2xl p-4 flex justify-between items-center opacity-40">
                <span className="text-xs font-bold text-ink">Active Sessions</span>
                <span className="text-[10px] font-semibold text-muted bg-white border border-slate-200 px-2 py-0.5 rounded-full">1 Device</span>
              </div>
            </div>
          )}

          {/* SCREEN 3: Family Privacy Center (Consolidated Dashboard) */}
          {currentScreen === 'screen3' && (
            <div className="flex-1 flex flex-col px-5">
              {/* Header */}
              <div className="py-4 flex items-center gap-3">
                <button 
                  onClick={() => setCurrentScreen('screen2')}
                  className="w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center active:scale-90 transition-transform cursor-pointer"
                >
                  <ArrowLeft className="w-5 h-5 text-ink" />
                </button>
                <div>
                  <h1 className="text-base font-bold text-ink leading-tight">Family Privacy Center</h1>
                  <p className="text-[10px] text-muted font-medium">Consolidated Controls • Aanya</p>
                </div>
              </div>

              {/* Info notice about consolidation */}
              <div className="mt-2 bg-ice/40 border border-navy/10 rounded-2xl p-3 flex items-start gap-2.5">
                <span className="text-sm shrink-0">💡</span>
                <p className="text-[10px] text-navy-2 font-medium leading-relaxed">
                  No more jumping between YouTube settings, Google Assistant history, and Account dashboards. All profile activity settings are united below.
                </p>
              </div>

              {/* Categories Cards List */}
              <div className="mt-5 flex flex-col gap-4">
                
                {/* Category 1: Watch & Search History */}
                <div className="bg-card rounded-2xl p-4 border border-slate-200/50 shadow-sm relative overflow-hidden transition-all duration-300">
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    {erasedCategories.watchSearch ? (
                      <span className="bg-green-100 text-good border border-green-200 text-[9px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                        <Check className="w-2.5 h-2.5" /> Cleared just now
                      </span>
                    ) : (
                      <span className="bg-blue-50 text-navy border border-blue-100 text-[9px] font-semibold px-2 py-0.5 rounded-full">
                        Active Logs
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-ink shrink-0 shadow-sm">
                      <Play className="w-4 h-4 text-navy fill-current" />
                    </div>
                    <div className="pr-16">
                      <h4 className="text-xs font-bold text-ink">Watch & Search History</h4>
                      <p className="text-[10px] text-muted mt-1 leading-normal">
                        YouTube searches, watched clips, and automated recommendation filters.
                      </p>
                    </div>
                  </div>

                  {/* Actions Grid */}
                  {!erasedCategories.watchSearch && (
                    <div className="mt-4 border-t border-slate-200/50 pt-3">
                      {inlineConfirm.watchSearch ? (
                        <div className="flex items-center justify-between bg-bad-bg/60 p-2.5 rounded-xl border border-bad/10 animate-fadeIn">
                          <span className="text-[10px] font-bold text-bad">Erase history permanently?</span>
                          <div className="flex gap-2">
                            <button 
                              onClick={() => setInlineConfirm(prev => ({ ...prev, watchSearch: false }))}
                              className="px-2.5 py-1 text-[10px] font-bold text-muted hover:text-ink cursor-pointer"
                            >
                              Cancel
                            </button>
                            <button 
                              onClick={() => {
                                setErasedCategories(prev => ({ ...prev, watchSearch: true }));
                                setInlineConfirm(prev => ({ ...prev, watchSearch: false }));
                                showToast("Watch & Search history successfully erased.");
                              }}
                              className="px-3 py-1 text-[10px] font-bold bg-bad text-white rounded-lg cursor-pointer"
                            >
                              Erase
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="flex gap-2 justify-end">
                          <button
                            onClick={() => showToast("Preparing files. Export link sent to parent email.")}
                            className="px-3 py-1.5 border border-slate-200 hover:bg-slate-50 text-[10px] font-bold text-ink rounded-lg flex items-center gap-1.5 active:scale-95 transition-all cursor-pointer"
                          >
                            <Download className="w-3 h-3 text-muted" /> Export
                          </button>
                          <button
                            onClick={() => setInlineConfirm(prev => ({ ...prev, watchSearch: true }))}
                            className="px-3 py-1.5 border border-bad/20 bg-bad-bg/30 text-[10px] font-bold text-bad rounded-lg flex items-center gap-1.5 hover:bg-bad-bg/70 active:scale-95 transition-all cursor-pointer"
                          >
                            <Trash2 className="w-3 h-3" /> Erase
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Category 2: Voice & Audio Recordings */}
                <div className="bg-card rounded-2xl p-4 border border-slate-200/50 shadow-sm relative overflow-hidden transition-all duration-300">
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    {erasedCategories.voiceAudio ? (
                      <span className="bg-green-100 text-good border border-green-200 text-[9px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                        <Check className="w-2.5 h-2.5" /> Cleared just now
                      </span>
                    ) : (
                      <span className="bg-blue-50 text-navy border border-blue-100 text-[9px] font-semibold px-2 py-0.5 rounded-full">
                        Active Logs
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-ink shrink-0 shadow-sm">
                      <Mic className="w-4 h-4 text-navy" />
                    </div>
                    <div className="pr-16">
                      <h4 className="text-xs font-bold text-ink">Voice & Audio</h4>
                      <p className="text-[10px] text-muted mt-1 leading-normal">
                        Assistant commands, mic searches, and voice recognition audio recordings.
                      </p>
                    </div>
                  </div>

                  {/* Actions Grid */}
                  {!erasedCategories.voiceAudio && (
                    <div className="mt-4 border-t border-slate-200/50 pt-3">
                      {inlineConfirm.voiceAudio ? (
                        <div className="flex items-center justify-between bg-bad-bg/60 p-2.5 rounded-xl border border-bad/10 animate-fadeIn">
                          <span className="text-[10px] font-bold text-bad">Erase voice logs permanently?</span>
                          <div className="flex gap-2">
                            <button 
                              onClick={() => setInlineConfirm(prev => ({ ...prev, voiceAudio: false }))}
                              className="px-2.5 py-1 text-[10px] font-bold text-muted hover:text-ink cursor-pointer"
                            >
                              Cancel
                            </button>
                            <button 
                              onClick={() => {
                                setErasedCategories(prev => ({ ...prev, voiceAudio: true }));
                                setInlineConfirm(prev => ({ ...prev, voiceAudio: false }));
                                showToast("Voice & Audio logs successfully erased.");
                              }}
                              className="px-3 py-1 text-[10px] font-bold bg-bad text-white rounded-lg cursor-pointer"
                            >
                              Erase
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="flex gap-2 justify-end">
                          <button
                            onClick={() => showToast("Preparing files. Export link sent to parent email.")}
                            className="px-3 py-1.5 border border-slate-200 hover:bg-slate-50 text-[10px] font-bold text-ink rounded-lg flex items-center gap-1.5 active:scale-95 transition-all cursor-pointer"
                          >
                            <Download className="w-3 h-3 text-muted" /> Export
                          </button>
                          <button
                            onClick={() => setInlineConfirm(prev => ({ ...prev, voiceAudio: true }))}
                            className="px-3 py-1.5 border border-bad/20 bg-bad-bg/30 text-[10px] font-bold text-bad rounded-lg flex items-center gap-1.5 hover:bg-bad-bg/70 active:scale-95 transition-all cursor-pointer"
                          >
                            <Trash2 className="w-3 h-3" /> Erase
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Category 3: Comments & Activity */}
                <div className="bg-card rounded-2xl p-4 border border-slate-200/50 shadow-sm relative overflow-hidden transition-all duration-300">
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    {erasedCategories.comments ? (
                      <span className="bg-green-100 text-good border border-green-200 text-[9px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                        <Check className="w-2.5 h-2.5" /> Cleared just now
                      </span>
                    ) : (
                      <span className="bg-blue-50 text-navy border border-blue-100 text-[9px] font-semibold px-2 py-0.5 rounded-full">
                        Active Logs
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-ink shrink-0 shadow-sm">
                      <MessageSquare className="w-4 h-4 text-navy" />
                    </div>
                    <div className="pr-16">
                      <h4 className="text-xs font-bold text-ink">Comments & Activity</h4>
                      <p className="text-[10px] text-muted mt-1 leading-normal">
                        Channel interactions, YouTube public comments, and message responses.
                      </p>
                    </div>
                  </div>

                  {/* Actions Grid */}
                  {!erasedCategories.comments && (
                    <div className="mt-4 border-t border-slate-200/50 pt-3">
                      {inlineConfirm.comments ? (
                        <div className="flex items-center justify-between bg-bad-bg/60 p-2.5 rounded-xl border border-bad/10 animate-fadeIn">
                          <span className="text-[10px] font-bold text-bad">Erase comments permanently?</span>
                          <div className="flex gap-2">
                            <button 
                              onClick={() => setInlineConfirm(prev => ({ ...prev, comments: false }))}
                              className="px-2.5 py-1 text-[10px] font-bold text-muted hover:text-ink cursor-pointer"
                            >
                              Cancel
                            </button>
                            <button 
                              onClick={() => {
                                setErasedCategories(prev => ({ ...prev, comments: true }));
                                setInlineConfirm(prev => ({ ...prev, comments: false }));
                                showToast("Comments and community activity successfully erased.");
                              }}
                              className="px-3 py-1 text-[10px] font-bold bg-bad text-white rounded-lg cursor-pointer"
                            >
                              Erase
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="flex gap-2 justify-end">
                          <button
                            onClick={() => showToast("Preparing files. Export link sent to parent email.")}
                            className="px-3 py-1.5 border border-slate-200 hover:bg-slate-50 text-[10px] font-bold text-ink rounded-lg flex items-center gap-1.5 active:scale-95 transition-all cursor-pointer"
                          >
                            <Download className="w-3 h-3 text-muted" /> Export
                          </button>
                          <button
                            onClick={() => setInlineConfirm(prev => ({ ...prev, comments: true }))}
                            className="px-3 py-1.5 border border-bad/20 bg-bad-bg/30 text-[10px] font-bold text-bad rounded-lg flex items-center gap-1.5 hover:bg-bad-bg/70 active:scale-95 transition-all cursor-pointer"
                          >
                            <Trash2 className="w-3 h-3" /> Erase
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>

              </div>

              {/* Big global delete button */}
              <div className="mt-8 mb-4">
                <button
                  onClick={() => setCurrentScreen('screen4')}
                  className="w-full py-3.5 bg-bad hover:bg-[#b03a3a] text-white font-bold text-xs rounded-xl shadow-md hover:shadow-lg active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Trash2 className="w-4 h-4" />
                  Erase everything Google has on this child
                </button>
                <p className="text-[10px] text-center text-muted mt-2 px-6">
                  Erasing is instant and clears information across all connected platforms & search terminals.
                </p>
              </div>
            </div>
          )}

          {/* SCREEN 4: Choose Erasure Scope */}
          {currentScreen === 'screen4' && (
            <div className="flex-1 flex flex-col px-5">
              {/* Header */}
              <div className="py-4 flex items-center gap-3">
                <button 
                  onClick={() => setCurrentScreen('screen3')}
                  className="w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center active:scale-90 transition-transform cursor-pointer"
                >
                  <ArrowLeft className="w-5 h-5 text-ink" />
                </button>
                <h1 className="text-base font-bold text-ink">Choose Erasure Scope</h1>
              </div>

              <div className="mt-2">
                <h2 className="text-sm font-bold text-ink">Select what you want to delete:</h2>
                <p className="text-xs text-muted mt-1">This will affect Aanya's Google Account database permanently.</p>
              </div>

              {/* Radio Group Selection */}
              <div className="mt-5 flex flex-col gap-3">
                
                {/* Option 1: This device only */}
                <label 
                  className={`flex flex-col p-4 rounded-2xl border-2 transition-all cursor-pointer ${
                    erasureScope === 'device' 
                      ? 'border-navy bg-indigo-50/20' 
                      : 'border-slate-200 bg-white hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <input 
                      type="radio" 
                      name="erasureScope"
                      value="device"
                      checked={erasureScope === 'device'}
                      onChange={() => setErasureScope('device')}
                      className="mt-1 accent-navy w-4 h-4 cursor-pointer"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <Smartphone className="w-4 h-4 text-navy" />
                        <span className="text-xs font-bold text-ink">This device only</span>
                      </div>
                      <p className="text-[10px] text-muted mt-1 leading-normal">
                        Remove Aanya's YouTube activity saved on this device
                      </p>
                    </div>
                  </div>
                </label>

                {/* Option 2: YouTube activity only (default) */}
                <label 
                  className={`flex flex-col p-4 rounded-2xl border-2 transition-all cursor-pointer ${
                    erasureScope === 'youtube' 
                      ? 'border-navy bg-indigo-50/20' 
                      : 'border-slate-200 bg-white hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <input 
                      type="radio" 
                      name="erasureScope"
                      value="youtube"
                      checked={erasureScope === 'youtube'}
                      onChange={() => setErasureScope('youtube')}
                      className="mt-1 accent-navy w-4 h-4 cursor-pointer"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <Play className="w-3.5 h-3.5 text-navy fill-current" />
                        <span className="text-xs font-bold text-ink">YouTube activity only</span>
                      </div>
                      <p className="text-[10px] text-muted mt-1 leading-normal">
                        Watch history, search history, comments, voice activity across all devices
                      </p>
                    </div>
                  </div>
                </label>

                {/* Option 3: Everything Google has on this child */}
                <label 
                  className={`flex flex-col p-4 rounded-2xl border-2 transition-all cursor-pointer relative overflow-hidden ${
                    erasureScope === 'all' 
                      ? 'border-bad bg-red-50/10' 
                      : 'border-slate-200 bg-white hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <input 
                      type="radio" 
                      name="erasureScope"
                      value="all"
                      checked={erasureScope === 'all'}
                      onChange={() => setErasureScope('all')}
                      className="mt-1 accent-bad w-4 h-4 cursor-pointer"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <Database className="w-4 h-4 text-bad" />
                        <span className="text-xs font-bold text-ink">Everything Google has on this child</span>
                      </div>
                      <p className="text-[10px] text-muted mt-1 leading-normal">
                        YouTube plus any other Google services linked to this profile
                      </p>
                    </div>
                  </div>
                </label>

                {/* Warning Strip specifically for Option 3 */}
                {erasureScope === 'all' && (
                  <div className="bg-bad-bg text-bad text-[10px] font-bold p-3 rounded-xl border border-bad/10 flex items-start gap-2 animate-slideDown">
                    <AlertTriangle className="w-4 h-4 text-bad shrink-0" />
                    <span>This is broad. We recommend reviewing what's included first.</span>
                  </div>
                )}

              </div>

              {/* Action Buttons */}
              <div className="mt-auto pt-6 flex gap-3">
                <button
                  onClick={() => setCurrentScreen('screen3')}
                  className="flex-1 py-3 border border-slate-200 hover:bg-slate-50 text-ink font-bold text-xs rounded-xl cursor-pointer active:scale-95 transition-transform text-center"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setCurrentScreen('screen5')}
                  className={`flex-1 py-3 text-white font-bold text-xs rounded-xl shadow-md cursor-pointer active:scale-95 transition-transform ${
                    erasureScope === 'all' ? 'bg-bad hover:bg-[#b03a3a]' : 'bg-navy hover:bg-navy-2'
                  }`}
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* SCREEN 5: Confirm & Processing Simulation */}
          {currentScreen === 'screen5' && (
            <div className="flex-1 flex flex-col px-5 relative">
              {/* Header */}
              <div className="py-4 flex items-center gap-3">
                <button 
                  onClick={() => setCurrentScreen('screen4')}
                  className="w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center active:scale-90 transition-transform cursor-pointer"
                >
                  <ArrowLeft className="w-5 h-5 text-ink" />
                </button>
                <h1 className="text-base font-bold text-ink">Confirm Erasure</h1>
              </div>

              {/* Detailed Summary Box */}
              <div className="mt-2 bg-bad-bg/30 border border-bad/10 rounded-2xl p-4">
                <div className="flex items-center gap-2 text-bad font-bold text-xs">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Permanent Action Required</span>
                </div>
                
                <h3 className="text-xs font-bold text-ink mt-3">You are about to delete:</h3>
                
                <ul className="mt-2 flex flex-col gap-2">
                  {erasureScope === 'device' && (
                    <li className="text-[10px] text-muted flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-bad"></span>
                      Local YouTube cache and search entries on this phone.
                    </li>
                  )}
                  {erasureScope === 'youtube' && (
                    <>
                      <li className="text-[10px] text-muted flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-bad"></span>
                        Entire YouTube watch history across all devices.
                      </li>
                      <li className="text-[10px] text-muted flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-bad"></span>
                        Search entries, voice commands, and comment history.
                      </li>
                    </>
                  )}
                  {erasureScope === 'all' && (
                    <>
                      <li className="text-[10px] text-muted flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-bad"></span>
                        All YouTube search logs, watch trails, & comments.
                      </li>
                      <li className="text-[10px] text-muted flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-bad"></span>
                        Voice search transcripts & voice logs on Google Assistant.
                      </li>
                      <li className="text-[10px] text-muted flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-bad flex-shrink-0"></span>
                        Database cache entries from other connected Google services.
                      </li>
                    </>
                  )}
                </ul>

                <p className="text-[10px] text-bad font-medium mt-4 border-t border-slate-200/60 pt-3 leading-relaxed">
                  ⚠️ This will permanently reset Aanya's recommendations and remove all associated activity records across the web.
                </p>
              </div>

              {/* Explanatory text */}
              <div className="mt-5 px-1">
                <h4 className="text-xs font-bold text-ink">Is Aanya aware?</h4>
                <p className="text-[10px] text-muted mt-1 leading-normal">
                  Google will log this action as a parent-managed event. We recommend discussing this with Aanya so she knows why her history is clean.
                </p>
              </div>

              {/* Confirm Action Button */}
              <div className="mt-auto pt-6">
                <button
                  onClick={() => setProcessing(true)}
                  className="w-full py-3.5 bg-bad hover:bg-[#b03a3a] text-white font-bold text-xs rounded-xl shadow-md hover:shadow-lg active:scale-95 transition-transform flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Trash2 className="w-4 h-4" />
                  Erase now
                </button>
              </div>

              {/* Processing Spinner Overlay */}
              {processing && (
                <div className="absolute inset-0 bg-white/95 z-50 flex flex-col items-center justify-center p-6 text-center animate-fadeIn">
                  {/* Styled Google Spinner */}
                  <div className="relative w-16 h-16 flex items-center justify-center">
                    <div className="w-12 h-12 border-4 border-slate-200 border-t-bad rounded-full animate-spin"></div>
                    <Database className="w-5 h-5 text-bad absolute" />
                  </div>
                  
                  <h3 className="text-sm font-bold text-ink mt-6">Erasing data...</h3>
                  
                  {/* Rotating status lines for realism */}
                  <div className="h-6 mt-1.5 overflow-hidden">
                    <p className="text-[10px] text-muted font-medium animate-slideUp">
                      {processingStep === 0 && "Connecting to secure Google API servers..."}
                      {processingStep === 1 && "Purging YouTube Activity directories..."}
                      {processingStep === 2 && "Syncing changes to cloud databases..."}
                      {processingStep === 3 && "Completing database transaction registers..."}
                    </p>
                  </div>

                  {/* Visual Fake Progress Bar */}
                  <div className="w-32 bg-slate-100 h-1 rounded-full mt-4 overflow-hidden mx-auto">
                    <div className="bg-bad h-full rounded-full animate-[loading_1.5s_ease-in-out_forwards]"></div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* SCREEN 6: Success */}
          {currentScreen === 'screen6' && (
            <div className="flex-1 flex flex-col px-5 items-center justify-center text-center">
              {/* Pulsing Checkmark Container */}
              <div className="w-20 h-20 rounded-full bg-green-50 border-4 border-green-100 flex items-center justify-center text-good shadow-inner mb-6 relative">
                <div className="absolute inset-0 rounded-full bg-green-300 opacity-20 animate-ping"></div>
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h1 className="text-xl font-extrabold text-good tracking-tight">Data Erased</h1>
              <p className="text-xs font-bold text-ink mt-1">Successfully cleared & purged</p>

              {/* Explanatory Details Card */}
              <div className="mt-6 bg-card rounded-2xl p-4 border border-slate-200/50 text-left w-full">
                <h3 className="text-xs font-bold text-ink mb-3">Verification Details:</h3>
                
                <div className="flex flex-col gap-2.5">
                  <div className="flex items-start gap-2 text-[10px] text-muted leading-tight">
                    <Check className="w-3.5 h-3.5 text-good shrink-0 mt-0.5" />
                    <span>Purged across <strong>YouTube sessions</strong> globally</span>
                  </div>
                  <div className="flex items-start gap-2 text-[10px] text-muted leading-tight">
                    <Check className="w-3.5 h-3.5 text-good shrink-0 mt-0.5" />
                    <span>Removed records from <strong>myactivity.google.com</strong></span>
                  </div>
                  <div className="flex items-start gap-2 text-[10px] text-muted leading-tight">
                    <Check className="w-3.5 h-3.5 text-good shrink-0 mt-0.5" />
                    <span>Updated consolidated <strong>Google Account settings</strong></span>
                  </div>
                </div>
              </div>

              <p className="text-[10px] text-muted mt-5 leading-relaxed px-2">
                It may take a few minutes for Aanya's active video suggestions feed to adjust to the reset state.
              </p>

              {/* Go back to Screen 3 button (now showing cleared categories) */}
              <div className="w-full mt-8">
                <button
                  onClick={() => setCurrentScreen('screen3')}
                  className="w-full py-3.5 bg-navy hover:bg-navy-2 text-white font-bold text-xs rounded-xl shadow-md hover:shadow-lg active:scale-95 transition-transform cursor-pointer"
                >
                  Back to Privacy Center
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Global Toast Component */}
        <div className={`absolute bottom-6 left-5 right-5 z-[100] bg-ink text-white text-xs font-medium px-4 py-3 rounded-xl shadow-xl flex items-center justify-between transition-all duration-300 transform ${
          toast.visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'
        }`}>
          <div className="flex items-center gap-2">
            <span className="text-sm">📧</span>
            <span>{toast.message}</span>
          </div>
          <button 
            onClick={() => setToast(prev => ({ ...prev, visible: false }))}
            className="text-[10px] font-bold text-ice hover:text-white px-1 py-0.5 rounded cursor-pointer"
          >
            Dismiss
          </button>
        </div>

        {/* Fake iOS/Android Home Indicator Bar */}
        <div className="h-6 bg-white flex justify-center items-center shrink-0 z-40">
          <div className="w-32 h-1 bg-slate-300 rounded-full"></div>
        </div>

      </div>

      {/* Added inline styles for custom animations in React App */}
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
      `}</style>
    </div>
  );
}

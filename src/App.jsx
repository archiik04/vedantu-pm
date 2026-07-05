import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Components
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Toast from './components/Toast';

// Pages
import YouTubeHome from './pages/YouTubeHome';
import VideoPlayer from './pages/VideoPlayer';
import FamilyLinkLayout from './pages/FamilyLink/FamilyLinkLayout';

export default function App() {
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

  return (
    <BrowserRouter>
      <div className="h-screen w-screen bg-[#0F0F0F] font-sans select-none flex flex-col overflow-hidden text-[#F5F5F5]">
        
        {/* Content Viewport Wrapper */}
        <div className="flex-1 overflow-hidden flex flex-col relative bg-[#0F0F0F]">
          
          {/* YouTube Desktop Header (Global, always visible) */}
          <Header sidebarExpanded={sidebarExpanded} setSidebarExpanded={setSidebarExpanded} />

          {/* Global Sidebar + Workspace Flex wrapper */}
          <div className="flex-1 flex overflow-hidden relative">
            
            {/* LEFT SIDEBAR (Standard YouTube layout retained on all pages) */}
            <Sidebar sidebarExpanded={sidebarExpanded} />

            {/* MAIN VIEWPORT WORKSPACE AREA */}
            <Routes>
              {/* YouTube Home Video Grid */}
              <Route path="/" element={<YouTubeHome />} />

              {/* YouTube Video Player Detail page */}
              <Route path="/watch/:id" element={<VideoPlayer />} />

              {/* Family Link route redirects */}
              <Route path="/family-link" element={<Navigate to="/family-link/overview" replace />} />
              
              {/* Family Link active category subpage */}
              <Route 
                path="/family-link/:tab" 
                element={
                  <FamilyLinkLayout 
                    watchHistoryPaused={watchHistoryPaused}
                    setWatchHistoryPaused={setWatchHistoryPaused}
                    searchHistoryPaused={searchHistoryPaused}
                    setSearchHistoryPaused={setSearchHistoryPaused}
                    voiceAudioPaused={voiceAudioPaused}
                    setVoiceAudioPaused={setVoiceAudioPaused}
                    erasedCategories={erasedCategories}
                    setErasedCategories={setErasedCategories}
                    deleteStep={deleteStep}
                    setDeleteStep={setDeleteStep}
                    erasureScope={erasureScope}
                    setErasureScope={setErasureScope}
                    confirmDeleteText={confirmDeleteText}
                    setConfirmDeleteText={setConfirmDeleteText}
                    setDeleteProcessing={setDeleteProcessing}
                    deleteProgress={deleteProgress}
                    deleteTicker={deleteTicker}
                    setDeleteProgress={setDeleteProgress}
                    showToast={showToast}
                  />
                } 
              />
            </Routes>

          </div>

        </div>

        {/* Global Toast Banner */}
        <Toast toast={toast} setToast={setToast} />

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
    </BrowserRouter>
  );
}

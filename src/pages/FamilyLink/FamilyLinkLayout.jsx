import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Home, 
  Shield, 
  Play, 
  Compass, 
  Layers, 
  Download, 
  Lock, 
  Trash2, 
  Settings 
} from 'lucide-react';

import OverviewTab from './tabs/OverviewTab';
import PrivacyTab from './tabs/PrivacyTab';
import HistoryTab from './tabs/HistoryTab';
import RecommendationsTab from './tabs/RecommendationsTab';
import DownloadsTab from './tabs/DownloadsTab';
import PermissionsTab from './tabs/PermissionsTab';
import SettingsTab from './tabs/SettingsTab';
import DeleteDataTab from './tabs/DeleteDataTab';

export default function FamilyLinkLayout({
  watchHistoryPaused,
  setWatchHistoryPaused,
  searchHistoryPaused,
  setSearchHistoryPaused,
  voiceAudioPaused,
  setVoiceAudioPaused,
  erasedCategories,
  setErasedCategories,
  deleteStep,
  setDeleteStep,
  erasureScope,
  setErasureScope,
  confirmDeleteText,
  setConfirmDeleteText,
  setDeleteProcessing,
  deleteProgress,
  deleteTicker,
  setDeleteProgress,
  showToast
}) {
  const { tab = 'overview' } = useParams();
  const navigate = useNavigate();

  const setActiveTab = (targetTab) => {
    navigate(`/family-link/${targetTab}`);
  };

  return (
    <div className="flex-1 flex overflow-hidden bg-[#131313] animate-fadeIn">
      
      {/* PANEL 1: Vertical Family Member Drawer (64px wide - Proton surface layout) */}
      <div className="w-16 bg-[#131313] border-r border-white/5 flex flex-col py-4 items-center gap-6 shrink-0 select-none">
        {/* Close/Back button */}
        <button 
          onClick={() => navigate('/')}
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
          onClick={() => setActiveTab('overview')}
          className={`flex items-center gap-3.5 px-3 py-2 rounded-xl text-xs font-light transition-all w-full cursor-pointer text-left ${
            tab === 'overview' 
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
          onClick={() => setActiveTab('privacy')}
          className={`flex items-center gap-3.5 px-3 py-2 rounded-xl text-xs font-light transition-all w-full cursor-pointer text-left ${
            tab === 'privacy' 
              ? 'bg-[#1B1B1B] border border-white/5 text-[#F7F7F7] font-normal shadow-[0_2px_8px_rgba(0,0,0,0.4)]' 
              : 'text-[#A8A8A8] hover:bg-white/5 hover:text-[#F7F7F7]'
          }`}
        >
          <Shield className="w-3.5 h-3.5 opacity-80" />
          <span>Privacy Center</span>
        </button>

        <button 
          onClick={() => setActiveTab('watch-history')}
          className={`flex items-center gap-3.5 px-3 py-2 rounded-xl text-xs font-light transition-all w-full cursor-pointer text-left ${
            tab === 'watch-history' 
              ? 'bg-[#1B1B1B] border border-white/5 text-[#F7F7F7] font-normal shadow-[0_2px_8px_rgba(0,0,0,0.4)]' 
              : 'text-[#A8A8A8] hover:bg-white/5 hover:text-[#F7F7F7]'
          }`}
        >
          <Play className="w-3.5 h-3.5 opacity-80" />
          <span>Watch History</span>
        </button>

        <button 
          onClick={() => setActiveTab('search-activity')}
          className={`flex items-center gap-3.5 px-3 py-2 rounded-xl text-xs font-light transition-all w-full cursor-pointer text-left ${
            tab === 'search-activity' 
              ? 'bg-[#1B1B1B] border border-white/5 text-[#F7F7F7] font-normal shadow-[0_2px_8px_rgba(0,0,0,0.4)]' 
              : 'text-[#A8A8A8] hover:bg-white/5 hover:text-[#F7F7F7]'
          }`}
        >
          <Compass className="w-3.5 h-3.5 opacity-80" />
          <span>Search Activity</span>
        </button>

        <button 
          onClick={() => setActiveTab('recommendations')}
          className={`flex items-center gap-3.5 px-3 py-2 rounded-xl text-xs font-light transition-all w-full cursor-pointer text-left ${
            tab === 'recommendations' 
              ? 'bg-[#1B1B1B] border border-white/5 text-[#F7F7F7] font-normal shadow-[0_2px_8px_rgba(0,0,0,0.4)]' 
              : 'text-[#A8A8A8] hover:bg-white/5 hover:text-[#F7F7F7]'
          }`}
        >
          <Layers className="w-3.5 h-3.5 opacity-80" />
          <span>Recommendations</span>
        </button>

        <button 
          onClick={() => setActiveTab('downloads')}
          className={`flex items-center gap-3.5 px-3 py-2 rounded-xl text-xs font-light transition-all w-full cursor-pointer text-left ${
            tab === 'downloads' 
              ? 'bg-[#1B1B1B] border border-white/5 text-[#F7F7F7] font-normal shadow-[0_2px_8px_rgba(0,0,0,0.4)]' 
              : 'text-[#A8A8A8] hover:bg-white/5 hover:text-[#F7F7F7]'
          }`}
        >
          <Download className="w-3.5 h-3.5 opacity-80" />
          <span>Downloads</span>
        </button>

        <button 
          onClick={() => setActiveTab('permissions')}
          className={`flex items-center gap-3.5 px-3 py-2 rounded-xl text-xs font-light transition-all w-full cursor-pointer text-left ${
            tab === 'permissions' 
              ? 'bg-[#1B1B1B] border border-white/5 text-[#F7F7F7] font-normal shadow-[0_2px_8px_rgba(0,0,0,0.4)]' 
              : 'text-[#A8A8A8] hover:bg-white/5 hover:text-[#F7F7F7]'
          }`}
        >
          <Lock className="w-3.5 h-3.5 opacity-80" />
          <span>Permissions</span>
        </button>

        <button 
          onClick={() => {
            setDeleteStep(1);
            setActiveTab('delete-data');
          }}
          className={`flex items-center gap-3.5 px-3 py-2 rounded-xl text-xs font-light transition-all w-full cursor-pointer text-left ${
            tab === 'delete-data' 
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
          onClick={() => setActiveTab('settings')}
          className={`flex items-center gap-3.5 px-3 py-2 rounded-xl text-xs font-light transition-all w-full cursor-pointer text-left ${
            tab === 'settings' 
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
          {tab === 'overview' && (
            <OverviewTab setActiveTab={setActiveTab} />
          )}

          {tab === 'privacy' && (
            <PrivacyTab 
              setActiveTab={setActiveTab}
              watchHistoryPaused={watchHistoryPaused}
              searchHistoryPaused={searchHistoryPaused}
              voiceAudioPaused={voiceAudioPaused}
              setDeleteStep={setDeleteStep}
              showToast={showToast}
              erasedCategories={erasedCategories}
            />
          )}

          {tab === 'watch-history' && (
            <HistoryTab 
              type="watch" 
              paused={watchHistoryPaused} 
              setPaused={setWatchHistoryPaused} 
              showToast={showToast} 
              setActiveTab={setActiveTab}
            />
          )}

          {tab === 'search-activity' && (
            <HistoryTab 
              type="search" 
              paused={searchHistoryPaused} 
              setPaused={setSearchHistoryPaused} 
              showToast={showToast} 
              setActiveTab={setActiveTab}
            />
          )}

          {tab === 'recommendations' && (
            <RecommendationsTab 
              setErasedCategories={setErasedCategories} 
              showToast={showToast} 
            />
          )}

          {tab === 'downloads' && (
            <DownloadsTab showToast={showToast} />
          )}

          {tab === 'permissions' && (
            <PermissionsTab />
          )}

          {tab === 'settings' && (
            <SettingsTab />
          )}

          {tab === 'delete-data' && (
            <DeleteDataTab 
              setActiveTab={setActiveTab}
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
            />
          )}
        </div>

      </div>

    </div>
  );
}

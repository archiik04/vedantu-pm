import React from 'react';
import { 
  ArrowLeft, 
  AlertTriangle, 
  Trash2, 
  Database, 
  CheckCircle2 
} from 'lucide-react';

export default function DeleteDataTab({
  setActiveTab,
  deleteStep,
  setDeleteStep,
  erasureScope,
  setErasureScope,
  confirmDeleteText,
  setConfirmDeleteText,
  setDeleteProcessing,
  deleteProgress,
  deleteTicker,
  setDeleteProgress
}) {
  return (
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
                <span className="text-xs font-bold text-[#EA4335]">Erase entire account activity database</span>
                <span className="text-[10.5px] text-[#808080] mt-0.5">YouTube logs, Assistant audio entries, and Chrome browser logs</span>
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
              onClick={() => setActiveTab('privacy')} 
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
                setActiveTab('privacy');
              }}
              className="px-6 py-2.5 bg-gradient-to-b from-white to-[#E5E5E5] hover:from-[#FAFAFA] hover:to-[#D5D5D5] text-black text-xs font-semibold rounded-full shadow-[0_4px_12px_rgba(255,255,255,0.12)] transition-all duration-200 hover:scale-[1.01] active:scale-[0.98] cursor-pointer"
            >
              Return to Privacy Center
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

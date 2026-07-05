import React, { useState } from 'react';
import { 
  MapPin, 
  Mic, 
  Lock, 
  Shield, 
  ChevronRight, 
  X, 
  ExternalLink, 
  Eye, 
  Settings2, 
  AlertCircle, 
  CheckCircle2 
} from 'lucide-react';

const INITIAL_PERMISSIONS = [
  {
    id: 'location',
    title: 'Device Location',
    description: "Allows parents to verify Aanya's location in real time.",
    status: 'Allowed', // 'Allowed' | 'Filtered' | 'Protected' | 'Requires Approval'
    icon: MapPin,
    lastUpdated: 'Updated 2 hours ago',
    lastAccessed: 'Today at 3:40 PM',
    syncedDevice: 'Pixel 9',
    managedBy: 'Family Link Organizer',
    serviceName: 'Google Maps Services',
    activityLog: 'Viewed location coordinate log 2 hours ago'
  },
  {
    id: 'microphone',
    title: 'Microphone & Audio Logs',
    description: "Saves search voice commands and Assistant audio registers.",
    status: 'Filtered',
    icon: Mic,
    lastUpdated: 'Updated 3 days ago',
    lastAccessed: 'Today at 2:15 PM',
    syncedDevice: 'Chromebook 11',
    managedBy: 'Google Assistant Console',
    serviceName: 'Speech Recognition Engine',
    activityLog: 'Filtered speech audio capture logged'
  },
  {
    id: 'purchases',
    title: 'Play Store Purchases',
    description: "Requires family organizer approval for paid app downloads.",
    status: 'Requires Approval',
    icon: Lock,
    lastUpdated: 'Updated 1 month ago',
    lastAccessed: 'Yesterday at 5:30 PM',
    syncedDevice: 'Family Tablet',
    managedBy: 'Google Play Family Library',
    serviceName: 'Play Store Accounts',
    activityLog: 'Blocked download: Minecraft Pocket Edition (Paid)'
  },
  {
    id: 'safety',
    title: 'Google Chrome Safety Check',
    description: "Filters malicious web search indexes and browser cookies.",
    status: 'Protected',
    icon: Shield,
    lastUpdated: 'Updated 5 days ago',
    lastAccessed: 'Always Active',
    syncedDevice: 'Pixel 9',
    managedBy: 'SafeSearch Web Guard',
    serviceName: 'Google SafeSearch API',
    activityLog: 'SafeSearch filtered 4 queries today'
  }
];

export default function PermissionsTab() {
  const [permissions, setPermissions] = useState(INITIAL_PERMISSIONS);
  const [selectedId, setSelectedId] = useState(null);

  const selectedPermission = permissions.find(p => p.id === selectedId);

  // Toggle status inside detail drawer dynamically
  const togglePermissionStatus = (id) => {
    setPermissions(prev => prev.map(p => {
      if (p.id === id) {
        let newStatus = p.status;
        if (p.status === 'Allowed') newStatus = 'Protected';
        else if (p.status === 'Filtered') newStatus = 'Protected';
        else if (p.status === 'Requires Approval') newStatus = 'Allowed';
        else newStatus = 'Allowed';
        return { ...p, status: newStatus, lastUpdated: 'Updated Just Now' };
      }
      return p;
    }));
  };

  const getStatusChip = (status) => {
    switch (status) {
      case 'Allowed':
        return (
          <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#34A853]/10 text-[#F7F7F7] border border-[#34A853]/15 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#34A853] shrink-0"></span>
            Allowed
          </span>
        );
      case 'Filtered':
        return (
          <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#E28743]/10 text-[#F7F7F7] border border-[#E28743]/15 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E28743] shrink-0"></span>
            Filtered
          </span>
        );
      case 'Protected':
        return (
          <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#888888]/10 text-[#F7F7F7] border border-[#888888]/15 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#888888] shrink-0"></span>
            Protected
          </span>
        );
      case 'Requires Approval':
        return (
          <span className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#4285F4]/10 text-[#F7F7F7] border border-[#4285F4]/15 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4285F4] shrink-0"></span>
            Requires Approval
          </span>
        );
      default:
        return null;
    }
  };

  // Determine health details
  const attentionCount = permissions.filter(p => p.status === 'Filtered').length;
  const protectedCount = permissions.filter(p => p.status !== 'Filtered').length;

  return (
    <div className="flex-1 flex flex-col relative w-full h-full select-none overflow-hidden">
      
      {/* Scrollable container for main content */}
      <div className={`flex-1 overflow-y-auto pr-2 transition-all duration-300 ${selectedId ? 'mr-[380px]' : ''}`}>
        
        {/* PAGE HEADER */}
        <div className="flex flex-col border-b border-white/5 pb-7 mb-7">
          <h1 className="text-[36px] font-light text-[#F7F7F7] tracking-tight leading-tight font-sans">
            Permissions
          </h1>
          <p className="text-[14px] text-[#A8A8A8] mt-1.5 font-light leading-relaxed">
            Manage which Google services and device capabilities your child account can access.
          </p>
        </div>

        {/* PERMISSION HEALTH SUMMARY CARD */}
        <div className="bg-[#181818] border border-white/5 rounded-[22px] p-6.5 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-[0_8px_24px_rgba(0,0,0,0.5)] relative overflow-hidden before:absolute before:inset-0 before:rounded-[22px] before:border-t before:border-white/5 before:pointer-events-none">
          <div className="flex flex-col gap-4">
            <h3 className="text-[12px] font-medium tracking-wider text-[#777777] uppercase">
              Permission Health
            </h3>
            
            <div className="flex items-center gap-4 text-xs text-[#F7F7F7]">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#34A853]/10 border border-[#34A853]/15 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#34A853] shrink-0"></span>
                {protectedCount} Protected
              </div>
              
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#E28743]/10 border border-[#E28743]/15 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E28743] shrink-0"></span>
                {attentionCount} Needs Attention
              </div>
            </div>
          </div>

          <div className="flex flex-col md:items-end justify-center">
            <span className="text-[12px] text-[#777777] font-medium uppercase tracking-wider">
              Last reviewed
            </span>
            <span className="text-sm font-semibold text-[#F7F7F7] mt-1">
              Today at 3:42 PM
            </span>
          </div>
        </div>

        <div className="h-px bg-white/5 my-7"></div>

        {/* PERMISSION ROWS SECTION */}
        <div className="flex flex-col gap-4 select-none">
          <h2 className="text-[22px] font-light text-[#F7F7F7] tracking-tight">System Permissions</h2>
          
          <div className="flex flex-col gap-4">
            {permissions.map((p) => {
              const IconComp = p.icon;
              const isSelected = selectedId === p.id;
              
              return (
                <div 
                  key={p.id}
                  onClick={() => setSelectedId(p.id)}
                  className={`group w-full p-6 bg-[#181818] border rounded-[22px] flex items-center justify-between cursor-pointer transition-all duration-200 ease-out shadow-md relative overflow-hidden before:absolute before:inset-0 before:rounded-[22px] before:border-t before:border-white/5 before:pointer-events-none ${
                    isSelected 
                      ? 'border-[#4285F4]/40 bg-[#202020] shadow-[0_12px_28px_rgba(0,0,0,0.65)] scale-[1.01]' 
                      : 'border-white/5 hover:border-white/12 hover:bg-[#202020] hover:shadow-[0_12px_24px_rgba(0,0,0,0.6)] hover:scale-[1.01]'
                  }`}
                >
                  <div className="flex items-center gap-5 flex-1 min-w-0 pr-4">
                    {/* Material Icon Backer */}
                    <div className="w-11 h-11 rounded-full bg-[#131313] border border-white/5 flex items-center justify-center text-[#A8A8A8] shrink-0 group-hover:text-white transition-colors">
                      <IconComp className="w-[18px] h-[18px] stroke-[1.8]" />
                    </div>
                    
                    {/* Texts block */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h4 className="text-[17px] font-medium text-[#F7F7F7]">{p.title}</h4>
                        <span className="text-[12px] text-[#777777] font-light">• {p.syncedDevice}</span>
                      </div>
                      <p className="text-[14px] text-[#A8A8A8] mt-1.5 font-light leading-relaxed">
                        {p.description}
                      </p>
                      
                      {/* Secondary Information */}
                      <p className="text-[12px] text-[#777777] mt-2 font-light">
                        {p.lastUpdated}
                      </p>
                    </div>
                  </div>

                  {/* Status chip & slide chevron block */}
                  <div className="flex items-center gap-4.5 shrink-0">
                    {getStatusChip(p.status)}
                    <ChevronRight className="w-5 h-5 text-[#777777] group-hover:text-white transition-all duration-200 transform group-hover:translate-x-1" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* DETAILS DRAWER / SIDE SHEET PANEL */}
      <div className={`absolute top-0 bottom-0 right-0 w-[360px] bg-[#181818] border-l border-white/5 shadow-[0_0_40px_rgba(0,0,0,0.85)] z-40 p-7.5 transition-transform duration-300 ease-out transform flex flex-col justify-between overflow-y-auto ${
        selectedPermission ? 'translate-x-0' : 'translate-x-full pointer-events-none'
      }`}>
        {selectedPermission && (
          <div className="flex flex-col h-full justify-between">
            {/* Drawer Body Container */}
            <div className="flex flex-col gap-6">
              
              {/* Close Button Header Row */}
              <div className="flex items-center justify-between pb-4.5 border-b border-white/5">
                <span className="text-[12px] font-medium tracking-wider text-[#777777] uppercase">
                  Details View
                </span>
                <button 
                  onClick={() => setSelectedId(null)}
                  className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center text-[#777777] hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Title & Icon summary */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#131313] border border-white/5 flex items-center justify-center text-[#4285F4] shrink-0 shadow-inner">
                  {React.createElement(selectedPermission.icon, { className: "w-5.5 h-5.5 stroke-[1.8]" })}
                </div>
                <div>
                  <h3 className="text-[20px] font-light text-[#F7F7F7] tracking-tight">
                    {selectedPermission.title}
                  </h3>
                  <p className="text-[13px] text-[#A8A8A8] mt-1 font-light leading-relaxed">
                    {selectedPermission.description}
                  </p>
                </div>
              </div>

              <div className="h-px bg-white/5 my-1"></div>

              {/* Stats Table List */}
              <div className="flex flex-col gap-4">
                
                {/* Status Row */}
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#777777] font-medium">Current Status</span>
                  {getStatusChip(selectedPermission.status)}
                </div>

                {/* Last Used Row */}
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#777777] font-medium">Last Used</span>
                  <span className="text-[#F7F7F7] font-semibold">{selectedPermission.lastAccessed}</span>
                </div>

                {/* Linked Device Row */}
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#777777] font-medium">Linked Device</span>
                  <span className="text-[#F7F7F7] font-semibold">{selectedPermission.syncedDevice}</span>
                </div>

                {/* Google Service Row */}
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#777777] font-medium">Google Service</span>
                  <span className="text-[#F7F7F7] font-semibold truncate max-w-[180px]">
                    {selectedPermission.serviceName}
                  </span>
                </div>

                {/* Managed By Row */}
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#777777] font-medium">Managed By</span>
                  <span className="text-[#F7F7F7] font-semibold">{selectedPermission.managedBy}</span>
                </div>
              </div>

              <div className="h-px bg-white/5 my-1"></div>

              {/* Recent Action Activity Row */}
              <div className="flex flex-col gap-2 bg-[#131313]/50 p-4 border border-white/5 rounded-xl select-none">
                <span className="text-[10px] font-bold text-[#777777] uppercase tracking-wider">
                  Recent Activity logs
                </span>
                <p className="text-xs text-[#A8A8A8] font-light mt-0.5 leading-normal">
                  {selectedPermission.activityLog}
                </p>
              </div>

            </div>

            {/* Bottom Actions controls */}
            <div className="flex flex-col gap-3 border-t border-white/5 pt-5 mt-6">
              
              {/* Dynamic Toggle action button */}
              <button 
                onClick={() => togglePermissionStatus(selectedPermission.id)}
                className="w-full py-2.5 bg-gradient-to-b from-white to-[#E5E5E5] hover:from-[#FAFAFA] hover:to-[#D5D5D5] text-black text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 shadow-md hover:scale-[1.01] active:scale-[0.98] cursor-pointer transition-all"
              >
                <Settings2 className="w-3.5 h-3.5" />
                {selectedPermission.status === 'Protected' ? 'Allow Service' : 'Restrict Service'}
              </button>

              {/* Muted action options */}
              <div className="grid grid-cols-2 gap-2 mt-1 select-none">
                <button 
                  onClick={() => alert("History Logs for " + selectedPermission.title + " are currently stored in Privacy Center logs.")}
                  className="py-2.5 bg-[#242424]/40 hover:bg-[#242424]/80 border border-white/5 rounded-xl text-[11px] text-[#A8A8A8] hover:text-[#F7F7F7] flex items-center justify-center gap-1 cursor-pointer transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  View History
                </button>
                <button 
                  onClick={() => window.open('https://support.google.com/familylink', '_blank')}
                  className="py-2.5 bg-[#242424]/40 hover:bg-[#242424]/80 border border-white/5 rounded-xl text-[11px] text-[#A8A8A8] hover:text-[#F7F7F7] flex items-center justify-center gap-1 cursor-pointer transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Learn More
                </button>
              </div>

            </div>
          </div>
        )}
      </div>

    </div>
  );
}

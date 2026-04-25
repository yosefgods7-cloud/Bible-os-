import { useState, useRef, useEffect } from "react";
import { ChevronLeft, Check, Settings as SettingsIcon, Book, Languages, Download, Moon, Upload, Search, Edit3, Activity, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { db } from "@/db";
import { useLiveQuery } from "dexie-react-hooks";
import { searchDictionary } from "@/services/ai";
import ReactMarkdown from 'react-markdown';
import { useNavigate } from 'react-router-dom';

function ProfileSection({ setActiveSection, habits }: { setActiveSection: any, habits: any }) {
  const [customKey, setCustomKey] = useState(localStorage.getItem('customGeminiKey') || '');
  const [userName, setUserName] = useState(habits?.name || 'Believer');
  const [userEmoji, setUserEmoji] = useState(localStorage.getItem('userEmoji') || '🙏');
  const [userIdentityNote, setUserIdentityNote] = useState(localStorage.getItem('userIdentityNote') || '');
  const usageCount = parseInt(localStorage.getItem('apiUsageCount') || '0', 10);

  const handleSaveProfile = async () => {
     localStorage.setItem('customGeminiKey', customKey);
     localStorage.setItem('userEmoji', userEmoji);
     localStorage.setItem('userIdentityNote', userIdentityNote);
     window.dispatchEvent(new Event('api-key-changed'));
     
     if (habits && habits.name !== userName) {
         await db.habits.update(1, { name: userName });
     }
     
     alert("Profile and API credentials saved securely to your local device.");
  };

  return (
    <div className="flex flex-col flex-1 p-6 md:p-0 space-y-6 animate-in slide-in-from-right duration-300 pb-24 md:pb-8 max-w-3xl mx-auto w-full">
      <header className="md:pt-4 flex items-center justify-between">
         <div className="flex items-center gap-4">
             <button onClick={() => setActiveSection(null)} className="p-2 -ml-2 rounded-full hover:bg-sacred-surface-dark transition-colors">
                <ChevronLeft className="w-6 h-6 text-sacred-text-primary" />
             </button>
             <h1 className="text-3xl font-light text-sacred-text-primary">Profile</h1>
         </div>
         <button onClick={handleSaveProfile} className="bg-sacred-gold text-sacred-bg-dark px-4 py-2 rounded text-xs uppercase tracking-widest font-bold font-sans">
             Save
         </button>
      </header>

      {/* Identity & Core Details */}
      <div className="bg-sacred-surface-dark p-6 rounded-xl border border-sacred-gold/10">
         <h3 className="uppercase tracking-widest text-xs font-bold text-sacred-text-secondary mb-4">Identity</h3>
         <div className="flex gap-4 mb-4">
            <div className="w-16">
              <label className="text-[10px] uppercase font-sans tracking-widest text-sacred-text-secondary block mb-1">Emoji</label>
              <input type="text" maxLength={2} value={userEmoji} onChange={e => setUserEmoji(e.target.value)} className="w-full bg-sacred-bg-dark border border-sacred-gold/30 rounded-lg p-3 text-center text-xl text-sacred-text-primary outline-none focus:border-sacred-gold" />
            </div>
            <div className="flex-1">
              <label className="text-[10px] uppercase font-sans tracking-widest text-sacred-text-secondary block mb-1">Name</label>
              <input type="text" value={userName} onChange={e => setUserName(e.target.value)} className="w-full bg-sacred-bg-dark border border-sacred-gold/30 rounded-lg p-3 text-sacred-text-primary outline-none focus:border-sacred-gold" />
            </div>
         </div>
         <div>
            <label className="text-[10px] uppercase font-sans tracking-widest text-sacred-text-secondary block mb-1">Identity Note</label>
            <textarea 
              value={userIdentityNote} 
              onChange={e => setUserIdentityNote(e.target.value)} 
              placeholder="A personal note, life verse, or spiritual goal..."
              className="w-full bg-sacred-bg-dark border border-sacred-gold/30 rounded-lg p-3 text-sacred-text-primary outline-none focus:border-sacred-gold min-h-[80px]"
            ></textarea>
         </div>
      </div>

      {/* AI Settings & Usage */}
      <div className="bg-sacred-surface-dark p-6 rounded-xl border border-sacred-gold/10">
         <h3 className="uppercase tracking-widest text-xs font-bold text-sacred-text-secondary mb-4 flex items-center gap-2"><Sparkles className="w-4 h-4 text-sacred-gold"/> AI Configuration</h3>
         
         <div className="mb-6 pb-6 border-b border-sacred-gold/10">
            <label className="text-[10px] uppercase font-sans tracking-widest text-sacred-text-secondary block mb-1">Custom Gemini API Key</label>
            <input 
              type="password" 
              value={customKey} 
              onChange={e => setCustomKey(e.target.value)} 
              placeholder="AI Studio System Key is used by default..."
              className="w-full bg-sacred-bg-dark border border-sacred-gold/30 rounded-lg p-3 text-sacred-text-primary outline-none focus:border-sacred-gold font-mono text-sm" 
            />
            <p className="text-[10px] text-sacred-text-secondary mt-2 opacity-70">Overriding the key will bypass rate limits and utilize your own quota constraints directly from Google AI Studio.</p>
         </div>

         <div className="flex items-center justify-between bg-sacred-bg-dark p-4 rounded-lg border border-sacred-gold/10 group">
            <div className="flex items-center gap-3">
               <div className="w-10 h-10 rounded-full bg-sacred-surface-dark flex items-center justify-center">
                  <Activity className="w-5 h-5 text-sacred-gold" />
               </div>
               <div className="flex flex-col">
                  <span className="text-sm font-medium text-sacred-text-primary">Total Computations</span>
                  <span className="text-[10px] uppercase tracking-widest text-sacred-text-secondary">Requests Sent to AI Guide</span>
               </div>
            </div>
            <div className="text-xl font-bold font-mono text-sacred-text-primary">{usageCount}</div>
         </div>
      </div>

    </div>
  );
}

export function More() {
  const habits = useLiveQuery(() => db.habits.get(1));
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [preferredVersion, setPreferredVersion] = useState(localStorage.getItem('preferredVersion') || 'KJV');
  
  const [dictTerm, setDictTerm] = useState("");
  const [dictResult, setDictResult] = useState<string | null>(null);
  const [isDictLoading, setIsDictLoading] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleExport = async () => {
    try {
      const data = {
        habits: await db.habits.toArray(),
        highlights: await db.highlights.toArray(),
        bookmarks: await db.bookmarks.toArray(),
        notes: await db.notes.toArray(),
        history: await db.history.toArray(),
      };
      const blob = new Blob([JSON.stringify(data)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "bibleos-backup.json";
      a.click();
    } catch (e) {
      console.error(e);
      alert("Failed to export data.");
    }
  };

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async (event) => {
      try {
         const data = JSON.parse(event.target?.result as string);
         if (data.habits) await db.habits.bulkPut(data.habits);
         if (data.highlights) await db.highlights.bulkPut(data.highlights);
         if (data.bookmarks) await db.bookmarks.bulkPut(data.bookmarks);
         if (data.notes) await db.notes.bulkPut(data.notes);
         if (data.history) await db.history.bulkPut(data.history);
         alert("Data imported successfully!");
      } catch(err) {
         console.error(err);
         alert("Invalid backup file format.");
      }
    };
    reader.readAsText(file);
    // reset
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleDictSearch = async () => {
    if (!dictTerm.trim()) return;
    setIsDictLoading(true);
    setDictResult(null);
    try {
       const res = await searchDictionary(dictTerm.trim());
       setDictResult(res);
    } catch (e: any) {
       setDictResult(e.message || "Unable to search dictionary at this time.");
    } finally {
       setIsDictLoading(false);
    }
  }

  const versions = [
    { id: 'KJV', name: 'King James Version' },
    { id: 'NKJV', name: 'New King James Version (Simulated)' },
    { id: 'NIV', name: 'New International Version (Simulated)' },
    { id: 'ESV', name: 'English Standard Version (Simulated)' },
    { id: 'NASB', name: 'New American Standard Bible (Simulated)' },
    { id: 'AMP', name: 'Amplified Bible (Simulated)' },
    { id: 'NLT', name: 'New Living Translation (Simulated)' },
    { id: 'MSG', name: 'The Message (Simulated)' },
    { id: 'WEB', name: 'World English Bible' },
    { id: 'BBE', name: 'Bible in Basic English' }
  ];

  if (activeSection) {
    if (activeSection === 'Bible Versions') {
      return (
        <div className="flex flex-col flex-1 p-6 md:p-0 space-y-6 animate-in slide-in-from-right duration-300 pb-24 md:pb-8 max-w-3xl mx-auto w-full">
          <header className="md:pt-4 flex items-center gap-4">
             <button onClick={() => setActiveSection(null)} className="p-2 -ml-2 rounded-full hover:bg-sacred-surface-dark transition-colors">
                <ChevronLeft className="w-6 h-6 text-sacred-text-primary" />
             </button>
             <h1 className="text-3xl font-light text-sacred-text-primary">Bible Versions</h1>
          </header>
          <p className="text-[10px] uppercase tracking-widest text-sacred-text-secondary mt-2 px-1">
             Note: Copyrighted modern versions are simulated via KJV for offline mode consistency.
          </p>
          <div className="space-y-3 mt-4">
             {versions.map(v => (
               <button 
                 key={v.id} 
                 onClick={() => {
                   setPreferredVersion(v.id);
                   localStorage.setItem('preferredVersion', v.id);
                 }}
                 className={cn(`w-full flex items-center justify-between p-5 bg-sacred-surface-dark border rounded-xl transition-colors shadow-lg`, preferredVersion === v.id ? 'border-sacred-gold shadow-sacred-gold/5' : 'border-sacred-gold/10 hover:border-sacred-gold/50')}
               >
                 <div className="flex flex-col text-left">
                   <span className="text-lg font-medium text-sacred-text-primary">{v.id}</span>
                   <span className="text-sm text-sacred-text-secondary">{v.name}</span>
                 </div>
                 {preferredVersion === v.id && (
                   <div className="w-8 h-8 rounded-full bg-sacred-gold/20 flex items-center justify-center">
                     <Check className="w-5 h-5 text-sacred-gold" />
                   </div>
                 )}
               </button>
             ))}
          </div>
        </div>
      );
    }
    
    if (activeSection === 'Dictionary') {
      return (
        <div className="flex flex-col flex-1 p-6 md:p-0 space-y-6 animate-in slide-in-from-right duration-300 pb-24 md:pb-8 max-w-3xl mx-auto w-full">
          <header className="md:pt-4 flex items-center gap-4">
             <button onClick={() => { setActiveSection(null); setDictResult(null); setDictTerm(""); }} className="p-2 -ml-2 rounded-full hover:bg-sacred-surface-dark transition-colors">
                <ChevronLeft className="w-6 h-6 text-sacred-text-primary" />
             </button>
             <h1 className="text-3xl font-light text-sacred-text-primary">Lexicon</h1>
          </header>
          <p className="text-[10px] uppercase tracking-widest text-sacred-text-secondary mt-2 px-1">
             Search historical biblical definitions, regions, names, and rituals.
          </p>
          
          <div className="flex space-x-2 mt-4">
            <input 
              type="text" 
              value={dictTerm}
              onChange={e => setDictTerm(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleDictSearch()}
              placeholder="e.g. Tabernacle, Judah, Atonement..."
              className="flex-1 bg-sacred-surface-dark border border-sacred-gold/30 rounded-lg px-4 py-3 text-sacred-text-primary outline-none focus:border-sacred-gold transition"
            />
            <button onClick={handleDictSearch} disabled={isDictLoading} className="bg-sacred-gold px-5 py-3 rounded-lg text-sacred-bg-dark font-bold hover:bg-sacred-gold-light transition disabled:opacity-50">
               <Search className="w-5 h-5" />
            </button>
          </div>

          {(isDictLoading || dictResult) && (
            <div className="bg-sacred-card-dark border border-sacred-gold/20 rounded-xl p-6 shadow-2xl font-sans mt-4">
               {isDictLoading ? (
                 <div className="flex justify-center items-center py-10 opacity-60">
                   <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-sacred-gold"></div>
                 </div>
               ) : (
                 <div className="text-[15px] text-sacred-text-primary leading-relaxed prose prose-invert prose-p:mb-4 last:prose-p:mb-0 prose-strong:text-sacred-gold-light max-w-none">
                    <ReactMarkdown>{dictResult || ""}</ReactMarkdown>
                 </div>
               )}
            </div>
          )}
        </div>
      );
    }
    
    if (activeSection === 'Profile') {
      // (Hooks moved to top of More component previously? Wait, Hooks can't be conditional. Ah. That's the React error coming if I render conditional hooks. But I just need to fix the syntax error right now).
      return <ProfileSection setActiveSection={setActiveSection} habits={habits} />;
    }
    
    if (activeSection === 'Appearance') {
      const themes = [
        { id: 'theme-charcoal', name: 'Charcoal', type: 'Dark' },
        { id: 'theme-navy', name: 'Navy', type: 'Dark' },
        { id: 'theme-plum', name: 'Plum', type: 'Dark' },
        { id: 'theme-parchment', name: 'Parchment', type: 'Light' },
        { id: 'theme-alabaster', name: 'Alabaster', type: 'Light' },
        { id: 'theme-sand', name: 'Sand', type: 'Light' }
      ];
      const currentTheme = localStorage.getItem('themePreference') || 'theme-charcoal';
      
      return (
        <div className="flex flex-col flex-1 p-6 md:p-0 space-y-6 animate-in slide-in-from-right duration-300 pb-24 md:pb-8 max-w-3xl mx-auto w-full">
          <header className="md:pt-4 flex items-center gap-4">
             <button onClick={() => setActiveSection(null)} className="p-2 -ml-2 rounded-full hover:bg-sacred-surface-dark transition-colors">
                <ChevronLeft className="w-6 h-6 text-sacred-text-primary" />
             </button>
             <h1 className="text-3xl font-light text-sacred-text-primary">Appearance</h1>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
             {themes.map(t => (
               <button 
                 key={t.id} 
                 onClick={() => {
                   localStorage.setItem('themePreference', t.id);
                   window.dispatchEvent(new Event('theme-changed'));
                   setActiveSection(null); // Optional: go back on select
                 }}
                 className={cn(`w-full flex items-center justify-between p-5 bg-sacred-surface-dark border rounded-xl transition-colors shadow-lg`, currentTheme === t.id ? 'border-sacred-gold shadow-sacred-gold/5' : 'border-sacred-gold/10 hover:border-sacred-gold/50')}
               >
                 <div className="flex flex-col text-left">
                   <span className="text-lg font-medium text-sacred-text-primary">{t.name}</span>
                   <span className="text-xs uppercase tracking-widest text-sacred-text-secondary mt-1">{t.type} Mode</span>
                 </div>
                 {currentTheme === t.id && (
                   <div className="w-8 h-8 rounded-full bg-sacred-gold/20 flex items-center justify-center">
                     <Check className="w-5 h-5 text-sacred-gold" />
                   </div>
                 )}
               </button>
             ))}
          </div>
        </div>
      );
    }

    if (activeSection === 'API Usage Tracker') {
      const usageCount = parseInt(localStorage.getItem('apiUsageCount') || '0', 10);
      return (
        <div className="flex flex-col flex-1 p-6 md:p-0 space-y-6 animate-in slide-in-from-right duration-300 pb-24 md:pb-8 max-w-3xl mx-auto w-full">
          <header className="md:pt-4 flex items-center gap-4">
             <button onClick={() => setActiveSection(null)} className="p-2 -ml-2 rounded-full hover:bg-sacred-surface-dark transition-colors">
                <ChevronLeft className="w-6 h-6 text-sacred-text-primary" />
             </button>
             <h1 className="text-3xl font-light text-sacred-text-primary">API Usage Tracker</h1>
          </header>
          
          <div className="mt-6 flex flex-col items-center justify-center bg-sacred-surface-dark border border-sacred-gold/10 rounded-xl p-10 shadow-lg">
             <Activity className="w-12 h-12 text-sacred-gold mb-6" />
             <div className="text-6xl font-bold text-sacred-text-primary mb-2">{usageCount}</div>
             <p className="text-sacred-text-secondary font-sans text-sm tracking-wide lowercase">Total Gemini AI Tokens / Calls Computed</p>
             
             <div className="mt-8 border-t border-sacred-gold/10 pt-8 w-full max-w-sm">
                <div className="flex justify-between items-center text-sm font-sans mb-4">
                   <span className="text-sacred-text-secondary">Status</span>
                   <span className="text-sacred-gold-light">Active</span>
                </div>
                <div className="flex justify-between items-center text-sm font-sans mb-4">
                   <span className="text-sacred-text-secondary">Current Limit</span>
                   <span className="text-sacred-text-primary">Free Tier</span>
                </div>
                <button onClick={() => {
                   if(window.confirm('Reset your API usage counter?')) {
                     localStorage.setItem('apiUsageCount', '0');
                     setActiveSection(null);
                   }
                }} className="w-full mt-6 py-3 border border-red-500/30 text-red-400 rounded hover:bg-red-500/10 transition-colors uppercase tracking-widest text-[10px] font-bold">
                   Reset Usage Counter
                </button>
             </div>
          </div>
        </div>
      );
    }
  }

  const menus = [
    { name: 'Profile', icon: SettingsIcon },
    { name: 'Journal & Annotations', icon: Edit3, action: () => navigate('/journal') },
    { name: 'Bible Versions', icon: Book, active: preferredVersion },
    { name: 'Lexicon Offline', icon: Languages, action: () => navigate('/dictionary') },
    { name: 'AI Deep Dive', icon: Search, action: () => navigate('/ai-deep-dive') },
    { name: 'Memorization', icon: Book, action: () => navigate('/memorize') },
    { name: 'API Usage Tracker', icon: Activity },
    { name: 'Appearance', icon: Moon },
    { name: 'Export Data', icon: Download, action: handleExport },
    { name: 'Import Data', icon: Upload, action: () => fileInputRef.current?.click() }
  ];

  return (
    <div className="flex flex-col flex-1 p-6 md:p-0 space-y-6 animate-in fade-in duration-700 pb-24 md:pb-8 max-w-3xl mx-auto w-full">
      <header className="md:pt-4">
        <h1 className="text-3xl font-light text-sacred-text-primary">Settings</h1>
      </header>
      
      <div className="space-y-4 pt-2">
        <input 
          type="file" 
          accept=".json" 
          ref={fileInputRef} 
          onChange={handleImport} 
          className="hidden" 
        />
        {menus.map(item => (
          <button 
            key={item.name} 
            onClick={() => item.action ? item.action() : setActiveSection(item.name)}
            className="w-full flex items-center p-6 bg-sacred-surface-dark border border-sacred-gold/10 rounded-xl hover:border-sacred-gold/30 hover:bg-sacred-card-dark transition-all shadow-lg group outline-none"
          >
            <div className="w-10 h-10 rounded-full bg-sacred-card-dark flex items-center justify-center mr-4 border border-sacred-gold/5 group-hover:border-sacred-gold/20 transition-colors">
               <item.icon className="w-5 h-5 text-sacred-gold-light" />
            </div>
            <div className="flex flex-col text-left flex-1">
              <span className="text-lg font-medium text-sacred-text-primary">{item.name}</span>
              {item.active && <span className="text-[10px] uppercase tracking-widest text-sacred-text-secondary mt-1">{item.active}</span>}
            </div>
            <span className="text-sacred-text-secondary text-xl font-light transform group-hover:translate-x-1 transition-transform">›</span>
          </button>
        ))}
      </div>
    </div>
  );
}

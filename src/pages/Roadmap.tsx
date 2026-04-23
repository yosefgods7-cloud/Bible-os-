import { useState } from "react";
import { Link } from "react-router-dom";
import { Lock, Map as MapIcon, Plus, Loader2 } from "lucide-react";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/db";
import { generateRoadmap } from "@/services/ai";

export function Roadmap() {
  const roadmaps = useLiveQuery(() => db.roadmaps.toArray());
  const [showAiModal, setShowAiModal] = useState(false);
  const [promptStr, setPromptStr] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleCreateRoadmap = async () => {
    if (!promptStr.trim()) return;
    setIsGenerating(true);
    try {
       const res = await generateRoadmap(promptStr);
       const data = JSON.parse(res);
       await db.roadmaps.add({
         title: data.title || "Custom Path",
         desc: data.desc || "A custom reading path",
         progress: 0,
         locked: false,
         bookFocus: data.bookFocus || "Multiple",
         timeToFinish: data.timeToFinish || "Variable",
         goals: data.goals || "Grow closer to God.",
         modules: data.modules || []
       });
       setShowAiModal(false);
       setPromptStr("");
    } catch (e) {
       console.error("Error generating roadmap:", e);
       alert("Failed to generate roadmap. Please try again.");
    } finally {
       setIsGenerating(false);
    }
  };

  return (
    <div className="flex flex-col flex-1 p-6 md:p-0 space-y-6 animate-in fade-in duration-700 pb-24 md:pb-8 max-w-3xl mx-auto w-full relative">
      <header className="flex justify-between items-center md:pt-4">
        <h1 className="text-3xl font-light text-sacred-text-primary">Roadmap</h1>
        <button 
           onClick={() => setShowAiModal(true)}
           className="flex items-center gap-1 text-xs uppercase tracking-widest text-sacred-bg-dark bg-sacred-gold px-3 py-2 rounded hover:bg-sacred-gold-light transition-all"
        >
          <Plus className="w-4 h-4" /> Custom Path
        </button>
      </header>
      
      {showAiModal && (
         <div className="absolute top-0 inset-x-0 bg-sacred-surface-dark border border-sacred-gold/30 rounded-xl p-6 shadow-2xl z-20">
            <h3 className="text-xl font-medium text-sacred-text-primary mb-2">AI Roadmap Generator</h3>
            <p className="text-xs text-sacred-text-secondary uppercase tracking-widest mb-4">What do you want to learn? (e.g. "I want to study forgiveness" or "Read the Prophets in 30 days")</p>
            <textarea 
               value={promptStr}
               disabled={isGenerating}
               onChange={e => setPromptStr(e.target.value)}
               className="w-full bg-sacred-bg-dark border border-sacred-gold/10 rounded-lg p-3 text-sacred-text-primary min-h-[100px] outline-none focus:border-sacred-gold"
               placeholder="Describe your reading goals here..."
            ></textarea>
            <div className="flex justify-end gap-3 mt-4">
               <button onClick={() => setShowAiModal(false)} disabled={isGenerating} className="text-sacred-text-secondary hover:text-sacred-text-primary uppercase text-xs tracking-widest px-4">Cancel</button>
               <button onClick={handleCreateRoadmap} disabled={isGenerating} className="bg-sacred-gold text-sacred-bg-dark font-bold uppercase tracking-widest text-xs px-6 py-2 rounded flex items-center justify-center min-w-[120px]">
                  {isGenerating ? <Loader2 className="w-4 h-4 animate-spin" /> : "Generate"}
               </button>
            </div>
         </div>
      )}

      <div className="space-y-4">
        {roadmaps?.map(path => (
          <div 
            key={path.id} 
            className={`p-6 rounded-xl border transition-colors shadow-2xl relative overflow-hidden ${
              path.locked 
                ? 'bg-sacred-surface-dark opacity-80 border-transparent hover:border-sacred-gold/5' 
                : 'bg-sacred-surface-dark border-sacred-gold/20'
            }`}
          >
            {!path.locked && (
               <div className="absolute top-0 right-0 p-4 opacity-[0.03] pointer-events-none">
                  <MapIcon className="w-48 h-48 -mr-10 -mt-10 text-sacred-gold" />
               </div>
            )}
            <div className="flex justify-between items-center mb-6 relative z-10 w-full">
              <div className="flex items-center gap-4">
                 <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center shrink-0 flex-shrink-0 ${
                    path.locked ? 'border-sacred-text-secondary/20 text-sacred-text-secondary/50' : 'border-sacred-success text-sacred-success'
                 }`}>
                   {path.locked ? <Lock className="w-5 h-5 mx-auto" /> : <span className="text-xs font-bold">{path.progress}%</span>}
                 </div>
                 <div>
                   <p className="text-xs text-sacred-text-secondary uppercase tracking-wide">Path: {path.title}</p>
                   <h3 className="text-lg md:text-xl font-medium text-sacred-text-primary">
                     {path.desc}
                   </h3>
                   <div className="text-[10px] uppercase text-sacred-gold-light tracking-widest mt-1 opacity-80">
                     {path.timeToFinish} • {path.bookFocus}
                   </div>
                 </div>
              </div>
              
              {!path.locked && (
                <Link to="/read" className="hidden md:flex ml-auto bg-sacred-gold text-sacred-bg-dark px-6 py-2 rounded font-bold uppercase text-xs tracking-widest hover:bg-sacred-gold-light transition-colors relative z-10">
                  Resume
                </Link>
              )}
            </div>
            
            <p className="text-sm text-sacred-text-secondary leading-relaxed mb-6 border-t border-white/5 pt-4">
               {path.goals}
            </p>

            {!path.locked && (
              <div className="w-full h-1.5 bg-sacred-card-dark rounded-full overflow-hidden relative z-10">
                <div 
                  className="h-full bg-sacred-gold rounded-full transition-all duration-1000" 
                  style={{ width: `${path.progress}%` }}
                ></div>
              </div>
            )}

            {!path.locked && (
               <Link to="/read" className="md:hidden mt-4 w-full flex justify-center bg-sacred-gold text-sacred-bg-dark px-6 py-2 rounded font-bold uppercase text-xs tracking-widest hover:bg-sacred-gold-light transition-colors relative z-10">
                 Resume
               </Link>
            )}
          </div>
        ))}

        {roadmaps?.length === 0 && (
           <p className="text-center text-sacred-text-secondary mt-12 opacity-50 uppercase tracking-widest text-xs">No active study paths.</p>
        )}
      </div>
    </div>
  );
}

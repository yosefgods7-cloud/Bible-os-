import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Lock, Map as MapIcon, Plus, Loader2, ChevronDown, ChevronUp, BookOpen, CheckCircle } from "lucide-react";
import { useLiveQuery } from "dexie-react-hooks";
import { db, RoadmapDailyPlan, RoadmapChapter } from "@/db";
import { generateRoadmap } from "@/services/ai";

export function Roadmap() {
  const roadmaps = useLiveQuery(() => db.roadmaps.toArray());
  const [showAiModal, setShowAiModal] = useState(false);
  const [promptStr, setPromptStr] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [expandedPathId, setExpandedPathId] = useState<number | null>(null);
  
  const navigate = useNavigate();

  const handleCreateRoadmap = async () => {
    if (!promptStr.trim()) return;
    setIsGenerating(true);
    try {
       const res = await generateRoadmap(promptStr);
       const data = JSON.parse(res);
       
       let plans = data.dailyPlans || [];
       if (!plans.length && data.modules) {
          // Fallback if AI gave old format
          plans = data.modules.map((m: any) => ({
             day: m.day,
             dailyGoal: `Read Chapter ${m.chapterToRead}`,
             chapters: [{ book: data.bookFocus, chapter: m.chapterToRead, isRead: false, notesTaken: false }],
             isCompleted: false
          }));
       }

       await db.roadmaps.add({
         title: data.title || "Custom Path",
         desc: data.desc || "A custom reading path",
         progress: 0,
         locked: false,
         bookFocus: data.bookFocus || "Multiple",
         timeToFinish: data.timeToFinish || "Variable",
         goals: data.goals || "Grow closer to God.",
         dailyPlans: plans
       });
       setShowAiModal(false);
       setPromptStr("");
    } catch (e: any) {
       console.error("Error generating roadmap:", e);
       alert(e.message || "Failed to generate roadmap. Please try again.");
    } finally {
       setIsGenerating(false);
    }
  };

  const calculateProgress = (plans: RoadmapDailyPlan[]) => {
     if (!plans || plans.length === 0) return 0;
     const totalChapters = plans.reduce((acc, plan) => acc + plan.chapters.length, 0);
     if (totalChapters === 0) return 0;
     const readChapters = plans.reduce((acc, plan) => acc + plan.chapters.filter(c => c.isRead && c.notesTaken).length, 0);
     return Math.round((readChapters / totalChapters) * 100);
  };

  const calculateRemainingDays = (plans: RoadmapDailyPlan[]) => {
      if (!plans) return 0;
      return plans.filter(p => !p.isCompleted).length;
  }

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
        {roadmaps?.map(path => {
          const isExpanded = expandedPathId === path.id;
          const currentProgress = calculateProgress(path.dailyPlans || []);
          const dailyPlans = path.dailyPlans || [];
          
          return (
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
            <div className="flex justify-between items-center mb-6 relative z-10 w-full cursor-pointer" onClick={() => setExpandedPathId(isExpanded ? null : (path.id || null))}>
              <div className="flex items-center gap-4">
                 <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center shrink-0 flex-shrink-0 ${
                    path.locked ? 'border-sacred-text-secondary/20 text-sacred-text-secondary/50' : 'border-sacred-success text-sacred-success'
                 }`}>
                   {path.locked ? <Lock className="w-5 h-5 mx-auto" /> : <span className="text-xs font-bold">{currentProgress}%</span>}
                 </div>
                 <div>
                   <p className="text-xs text-sacred-text-secondary uppercase tracking-wide flex items-center gap-2">
                     Path: {path.title}
                     {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                   </p>
                   <h3 className="text-lg md:text-xl font-medium text-sacred-text-primary">
                     {path.desc}
                   </h3>
                   <div className="text-[10px] uppercase text-sacred-gold-light tracking-widest mt-1 opacity-80">
                     {path.timeToFinish} • {dailyPlans.length} Days Total • {calculateRemainingDays(dailyPlans)} Days Left
                   </div>
                 </div>
              </div>
            </div>
            
            <p className="text-sm text-sacred-text-secondary leading-relaxed mb-6 border-t border-white/5 pt-4">
               {path.goals}
            </p>

            {!path.locked && (
              <div className="w-full h-1.5 bg-sacred-card-dark rounded-full overflow-hidden relative z-10 mb-4">
                <div 
                  className="h-full bg-sacred-gold rounded-full transition-all duration-1000" 
                  style={{ width: `${currentProgress}%` }}
                ></div>
              </div>
            )}

            {isExpanded && !path.locked && dailyPlans.length > 0 && (
               <div className="mt-6 space-y-4 relative z-10 border-t border-sacred-gold/10 pt-4">
                 <h4 className="text-xs uppercase tracking-widest text-sacred-gold font-bold mb-4">Schedule & Daily Goals</h4>
                 {dailyPlans.map((plan, idx) => (
                   <div key={idx} className={`p-4 rounded-lg border ${plan.isCompleted ? 'bg-sacred-success/10 border-sacred-success/20' : 'bg-sacred-card-dark border-sacred-surface-light/5'}`}>
                     <div className="flex justify-between items-start mb-2">
                        <div className="flex gap-3">
                           <div className="w-8 h-8 rounded bg-sacred-bg-dark flex flex-col items-center justify-center border border-sacred-surface-light/10">
                              <span className="text-[8px] uppercase text-sacred-text-secondary">Day</span>
                              <span className="text-sm font-bold text-sacred-gold-light leading-none">{plan.day}</span>
                           </div>
                           <div>
                              <p className="text-sm font-medium text-sacred-text-primary">{plan.dailyGoal}</p>
                              {plan.guideText && <p className="text-xs text-sacred-text-secondary mt-1 max-w-lg">{plan.guideText}</p>}
                           </div>
                        </div>
                        {plan.isCompleted && <CheckCircle className="w-5 h-5 text-sacred-success opacity-80" />}
                     </div>

                     <div className="mt-4 flex flex-col gap-2 pl-11">
                        {plan.chapters.map((chap, cIdx) => (
                           <div key={cIdx} className="flex items-center justify-between bg-sacred-bg-dark p-2 rounded border border-sacred-surface-light/5">
                              <div className="flex items-center gap-2">
                                <BookOpen className="w-3.5 h-3.5 text-sacred-text-secondary" />
                                <span className="text-xs font-bold text-sacred-gold-light">{chap.book} {chap.chapter}</span>
                              </div>
                              <div className="flex items-center gap-3">
                                 <span className={`text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-sm ${chap.isRead ? 'bg-sacred-success/20 text-sacred-success font-bold' : 'bg-sacred-surface-dark text-sacred-text-secondary'}`}>{chap.isRead ? 'Read' : 'Unread'}</span>
                                 <span className={`text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-sm ${chap.notesTaken ? 'bg-sacred-success/20 text-sacred-success font-bold' : 'bg-sacred-warning/20 text-sacred-warning'}`}>{chap.notesTaken ? 'Notes Taken' : 'Needs Notes'}</span>
                                 
                                 {(!chap.isRead || !chap.notesTaken) && (
                                   <button 
                                      onClick={() => navigate(`/read?book=${chap.book}&chapter=${chap.chapter}&roadmap=${path.id}&planDay=${plan.day}`)}
                                      className="text-[10px] uppercase tracking-wider text-sacred-bg-dark bg-sacred-gold px-2 py-1 rounded ml-2 hover:bg-sacred-gold-light transition"
                                   >
                                     Start Reading
                                   </button>
                                 )}
                              </div>
                           </div>
                        ))}
                     </div>
                   </div>
                 ))}
               </div>
            )}
          </div>
        )})}

        {roadmaps?.length === 0 && (
           <p className="text-center text-sacred-text-secondary mt-12 opacity-50 uppercase tracking-widest text-xs">No active study paths.</p>
        )}
      </div>
    </div>
  );
}

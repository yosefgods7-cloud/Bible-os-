import { useState, useEffect } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/db";
import { Link } from "react-router-dom";
import { Flame, Star, BookOpen, Quote, ChevronRight } from "lucide-react";

function FidelityHeatmap() {
  const history = useLiveQuery(() => db.history.toArray(), []);
  
  // Calculate past 14 days
  const boxes = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  for (let i = 13; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().split('T')[0];
    const log = history?.find(h => h.date === dateStr);
    
    let opacityClass = "bg-sacred-card-dark"; // none
    if (log) {
      if (log.chaptersRead >= 3) opacityClass = "bg-sacred-success";
      else if (log.chaptersRead == 2) opacityClass = "bg-sacred-success opacity-80";
      else if (log.chaptersRead == 1) opacityClass = "bg-sacred-success opacity-50";
    }

    if (i === 0) {
      // Today can pulse if empty to encourage reading
      if (!log) opacityClass = "bg-sacred-gold-light animate-pulse";
    }

    boxes.push(<div key={dateStr} className={`w-4 h-4 rounded-sm ${opacityClass}`}></div>);
  }

  return (
    <div className="grid grid-cols-7 gap-1 px-4 justify-items-center">
      {boxes}
    </div>
  );
}

export function Home() {
  const habits = useLiveQuery(() => db.habits.get(1));
  const recentNoteArr = useLiveQuery(async () => {
     const notes = await db.notes.toArray();
     return notes.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()).slice(0, 1);
  });
  const recentNote = recentNoteArr && recentNoteArr.length > 0 ? recentNoteArr[0] : null;

  const verseOfTheDayHeader = "For I know the plans I have for you... — Jeremiah 29:11"; 
  const verseOfTheDayBody = "\"I am the vine; you are the branches. If you remain in me and I in you, you will bear much fruit; apart from me you can do nothing.\"";

  if (!habits) return null;

  return (
    <div className="flex flex-col flex-1 p-6 md:p-0 space-y-6 md:space-y-0 md:grid md:grid-cols-12 md:gap-6 animate-in fade-in duration-700 pb-24 md:pb-8">
      
      {/* LEFT COLUMN */}
      <div className="md:col-span-8 flex flex-col gap-6">
        {/* GREETING & VERSE OF THE DAY */}
        <div className="bg-sacred-surface-dark p-8 rounded-xl border border-sacred-gold/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor" className="text-sacred-gold"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/></svg>
          </div>
          <h1 className="text-3xl font-light mb-2 text-sacred-text-primary">Good morning, {habits.name}.</h1>
          <p className="text-sacred-text-secondary text-sm mb-6">"{verseOfTheDayHeader}"</p>
          
          <div className="bg-sacred-card-dark p-6 rounded-lg border-l-4 border-sacred-gold">
            <p className="italic text-xl mb-4 font-serif leading-relaxed text-sacred-text-primary">
              {verseOfTheDayBody}
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sacred-gold font-semibold">John 15:5 — NIV</span>
              <button className="text-xs uppercase tracking-widest text-sacred-text-secondary border border-sacred-text-secondary px-3 py-1 rounded hover:bg-sacred-text-primary hover:text-sacred-bg-dark transition-all">
                Share Verse
              </button>
            </div>
          </div>
        </div>

        {/* ROADMAP PREVIEW (Substituting Goal Card visual style) */}
        <div className="bg-sacred-surface-dark p-6 rounded-xl border border-sacred-gold/10 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h3 className="uppercase tracking-widest text-xs font-bold text-sacred-text-secondary">Active Roadmap</h3>
            <Link to="/roadmap" className="text-xs text-sacred-gold hover:underline">View Full Map</Link>
          </div>
          <div className="flex gap-4">
            <div className="flex-1 bg-sacred-card-dark p-5 rounded-lg flex flex-col md:flex-row md:items-center gap-4 border border-sacred-gold/5">
              <div className="w-12 h-12 rounded-full border-2 border-sacred-success flex items-center justify-center text-sacred-success shrink-0">
                <span className="text-xs font-bold">65%</span>
              </div>
              <div className="flex flex-col">
                <p className="text-xs text-sacred-text-secondary uppercase tracking-wide">Path: Foundations</p>
                <p className="text-lg font-medium text-sacred-text-primary">Moses & The Exodus</p>
              </div>
              <Link to="/roadmap" className="mt-4 md:mt-0 md:ml-auto w-full md:w-auto text-center bg-sacred-gold text-sacred-bg-dark px-6 py-2 rounded font-bold uppercase text-xs tracking-widest hover:bg-sacred-gold-light transition-colors">
                Resume
              </Link>
            </div>
          </div>
        </div>

        {/* QUICK RESUME */}
        <div className="grid grid-cols-2 gap-4">
          <Link to="/read" className="bg-sacred-card-dark p-5 rounded-xl border border-sacred-gold/10 hover:border-sacred-gold/30 transition-colors group">
            <p className="text-xs text-sacred-text-secondary uppercase mb-2">Last Read</p>
            <h4 className="text-xl text-sacred-text-primary flex items-center gap-2">
              Genesis 1 
              <ChevronRight className="w-4 h-4 text-sacred-gold opacity-0 group-hover:opacity-100 transition-opacity -ml-1 group-hover:translate-x-1 duration-300" />
            </h4>
            <p className="text-xs text-sacred-text-secondary mt-1 italic">The Creation of the World</p>
          </Link>
          <div className="bg-sacred-card-dark p-5 rounded-xl border border-sacred-gold/10">
            <p className="text-xs text-sacred-text-secondary uppercase mb-2">Recent Note</p>
            {recentNote ? (
              <>
                <h4 className="text-lg text-sacred-text-primary overflow-hidden text-ellipsis whitespace-nowrap">{recentNote.book} {recentNote.chapter}:{recentNote.verse}</h4>
                <p className="text-xs text-sacred-text-secondary mt-1 line-clamp-2 italic">"{recentNote.text}"</p>
              </>
            ) : (
              <>
                <h4 className="text-lg text-sacred-text-primary">No Notes Yet</h4>
                <p className="text-xs text-sacred-text-secondary mt-1 italic">Annotate a verse to see it here.</p>
              </>
            )}
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="md:col-span-4 flex flex-col gap-6">
        
        {/* HABIT TRACKER */}
        <div className="bg-sacred-surface-dark p-6 rounded-xl border border-sacred-gold/10">
          <div className="flex justify-between items-center mb-6">
            <h3 className="uppercase tracking-widest text-xs font-bold text-sacred-text-secondary">Spirit Rhythm</h3>
            <span className="text-xs text-sacred-success flex items-center gap-1">● Streak Active</span>
          </div>
          
          <div className="flex flex-col items-center mb-6">
            <div className="relative flex items-center justify-center">
               <svg className="w-32 h-32 transform -rotate-90">
                  <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-sacred-card-dark" />
                  <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="4" fill="transparent" strokeDasharray="364" strokeDashoffset={364 - (364 * (Math.min(habits.streak, 30)/30))} className="text-sacred-gold shadow-lg transition-all duration-1000" />
               </svg>
               <div className="absolute flex flex-col items-center">
                 <span className="text-4xl font-bold text-sacred-text-primary">{habits.streak}</span>
                 <span className="text-[10px] uppercase tracking-widest text-sacred-text-secondary">Days</span>
               </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between text-xs uppercase tracking-tighter">
              <span className="text-sacred-text-secondary">Daily Reading Goal</span>
              <span className="text-sacred-text-primary">3 / 5 Chapters</span>
            </div>
            <div className="w-full bg-sacred-card-dark h-1.5 rounded-full overflow-hidden">
              <div className="bg-sacred-gold h-full w-[60%] transition-all duration-1000"></div>
            </div>
          </div>
        </div>

        {/* AI SUGGESTION CARD */}
        <div className="bg-sacred-card-dark p-6 rounded-xl border border-sacred-gold/30 flex flex-col gap-4 relative overflow-hidden shadow-xl group">
          <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-sacred-gold/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
          <div className="flex items-center gap-2 mb-1 relative z-10">
            <div className="w-2 h-2 rounded-full bg-sacred-gold-light animate-pulse"></div>
            <span className="text-xs font-bold uppercase tracking-widest text-sacred-gold-light">AI Guide Suggestion</span>
          </div>
          <p className="text-sm text-sacred-text-primary leading-relaxed relative z-10">
            "You've been studying the life of Joseph. Consider reading <span className="text-sacred-gold font-semibold">Psalm 105</span> today to see how the psalmist recounts God's faithfulness during those years of trial."
          </p>
          <button className="w-full py-2 border border-sacred-gold/50 rounded text-xs uppercase tracking-widest font-bold text-sacred-text-primary hover:bg-sacred-gold/10 transition-colors relative z-10">
            Generate Devotional
          </button>
        </div>

        {/* METRICS HEATMAP MINI */}
        <div className="bg-sacred-surface-dark p-4 rounded-xl border border-sacred-gold/10">
          <p className="text-[10px] uppercase tracking-widest text-sacred-text-secondary mb-3 text-center">Past 2 Weeks Fidelity</p>
          <FidelityHeatmap />
        </div>

      </div>
    </div>
  );
}

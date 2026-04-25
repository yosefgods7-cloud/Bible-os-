import { useState, useEffect } from "react";
import { ChevronLeft, BrainCircuit, RefreshCw, X, Check, Save, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { useLiveQuery } from "dexie-react-hooks";
import { db, Flashcard } from "@/db";

export function Memorize() {
  const flashcards = useLiveQuery(() => db.flashcards.toArray());
  const [activeCard, setActiveCard] = useState<Flashcard | null>(null);
  const [flipped, setFlipped] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  // New Card State
  const [newBook, setNewBook] = useState("Genesis");
  const [newChapter, setNewChapter] = useState("1");
  const [newVerse, setNewVerse] = useState("1");
  const [newText, setNewText] = useState("");

  const pendingCards = flashcards?.filter(c => new Date(c.nextReview) <= new Date());
  
  useEffect(() => {
    if (!activeCard && pendingCards && pendingCards.length > 0) {
      setActiveCard(pendingCards[0]);
      setFlipped(false);
    }
  }, [pendingCards, activeCard]);

  const handleCreate = async () => {
    if (!newBook || !newChapter || !newVerse || !newText) return;
    await db.flashcards.add({
       book: newBook,
       chapter: parseInt(newChapter),
       verse: parseInt(newVerse),
       text: newText,
       nextReview: new Date().toISOString(),
       interval: 0,
       easeFactor: 2.5,
       repetitions: 0
    });
    setIsAdding(false);
    setNewText("");
  };

  // SuperMemo-2 (SM-2) algorithm
  // Quality: 0 = completely forgot, 5 = perfect recall
  const handleReview = async (quality: number) => {
    if (!activeCard || !activeCard.id) return;
    
    let { interval, easeFactor, repetitions, id } = activeCard;
    
    if (quality >= 3) {
      if (repetitions === 0) interval = 1;
      else if (repetitions === 1) interval = 6;
      else interval = Math.round(interval * easeFactor);
      
      repetitions += 1;
      easeFactor = easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
    } else {
      repetitions = 0;
      interval = 1;
      easeFactor = Math.max(1.3, easeFactor - 0.2);
    }

    const nextReview = new Date();
    nextReview.setDate(nextReview.getDate() + interval);

    await db.flashcards.update(id, {
      interval, easeFactor, repetitions, nextReview: nextReview.toISOString()
    });
    
    setActiveCard(null); // will be re-populated by useEffect
  };

  const getNextReviewStr = (iso: string) => {
     const date = new Date(iso);
     const hours = Math.round((date.getTime() - Date.now()) / (1000 * 60 * 60));
     if (hours <= 0) return "Ready";
     if (hours < 24) return `${hours} hrs`;
     return `${Math.round(hours/24)} days`;
  };

  return (
    <div className="flex flex-col flex-1 h-[100dvh] relative bg-sacred-bg-dark text-sacred-text-primary overflow-y-auto">
      <header className="flex items-center justify-between p-4 border-b border-sacred-surface-light/10 sticky top-0 bg-sacred-bg-dark/95 backdrop-blur z-20">
        <div className="flex items-center space-x-2">
           <Link to="/more" className="p-2 -ml-2"><ChevronLeft className="w-5 h-5 text-sacred-text-secondary hover:text-sacred-text-primary transition" /></Link>
           <h1 className="text-xl font-medium tracking-wide flex items-center gap-2"><BrainCircuit className="w-4 h-4 text-sacred-gold"/> Memorize</h1>
        </div>
      </header>

      <div className="p-6 max-w-3xl mx-auto w-full pb-24 flex flex-col pt-8">
        {!activeCard && !isAdding && (
          <div className="text-center mb-8">
             <div className="w-20 h-20 bg-sacred-gold/10 mx-auto rounded-full flex items-center justify-center mb-4 border border-sacred-gold/20">
                <Check className="w-8 h-8 text-sacred-gold-light" />
             </div>
             <h2 className="text-2xl font-serif text-sacred-text-primary mb-2">You're Caught Up!</h2>
             <p className="text-sm text-sacred-text-secondary max-w-md mx-auto mb-6">You have reviewed all your verses for today. Return tomorrow or add new verses to commit to memory.</p>
             
             <button onClick={() => setIsAdding(true)} className="bg-sacred-gold text-sacred-bg-dark font-bold uppercase tracking-widest text-xs px-6 py-3 rounded-lg hover:bg-sacred-gold-light transition shadow-xl inline-flex items-center gap-2">
                <BrainCircuit className="w-4 h-4" /> Add Verses
             </button>
             
             {flashcards && flashcards.length > 0 && (
                <div className="mt-12 bg-sacred-surface-dark border border-sacred-surface-light/10 p-6 rounded-xl text-left">
                   <h3 className="text-xs uppercase tracking-widest text-sacred-text-secondary mb-4">Your Cards ({flashcards.length})</h3>
                   <div className="space-y-2 max-h-64 overflow-y-auto hidden-scrollbar">
                      {flashcards.map((fc, i) => (
                         <div key={i} className="flex justify-between p-3 rounded bg-sacred-bg-dark border border-sacred-surface-light/5 items-center">
                            <span className="font-bold text-sacred-gold-light text-sm">{fc.book} {fc.chapter}:{fc.verse}</span>
                            <span className="text-[10px] uppercase tracking-widest text-sacred-text-secondary bg-sacred-surface-dark px-2 py-1 rounded">Next: {getNextReviewStr(fc.nextReview)}</span>
                         </div>
                      ))}
                   </div>
                </div>
             )}
          </div>
        )}

        {isAdding && (
          <div className="bg-sacred-card-dark border border-sacred-gold/20 p-6 rounded-xl">
             <h2 className="text-xl font-serif text-sacred-gold-light mb-4">Add Memory Verse</h2>
             <div className="grid grid-cols-3 gap-4 mb-4">
               <div>
                  <label className="text-xs uppercase tracking-widest text-sacred-text-secondary mb-1 block">Book</label>
                  <input value={newBook} onChange={(e) => setNewBook(e.target.value)} className="w-full bg-sacred-bg-dark border border-sacred-surface-light/10 rounded p-2 text-sm focus:border-sacred-gold outline-none" />
               </div>
               <div>
                  <label className="text-xs uppercase tracking-widest text-sacred-text-secondary mb-1 block">Chapter</label>
                  <input type="number" value={newChapter} onChange={(e) => setNewChapter(e.target.value)} className="w-full bg-sacred-bg-dark border border-sacred-surface-light/10 rounded p-2 text-sm focus:border-sacred-gold outline-none" />
               </div>
               <div>
                  <label className="text-xs uppercase tracking-widest text-sacred-text-secondary mb-1 block">Verse</label>
                  <input type="number" value={newVerse} onChange={(e) => setNewVerse(e.target.value)} className="w-full bg-sacred-bg-dark border border-sacred-surface-light/10 rounded p-2 text-sm focus:border-sacred-gold outline-none" />
               </div>
             </div>
             <div className="mb-6">
                <label className="text-xs uppercase tracking-widest text-sacred-text-secondary mb-1 block">Verse Text</label>
                <textarea rows={4} value={newText} onChange={(e) => setNewText(e.target.value)} className="w-full bg-sacred-bg-dark border border-sacred-surface-light/10 rounded p-3 text-sm focus:border-sacred-gold outline-none resize-none" placeholder="Paste the verse text here..." />
             </div>
             
             <div className="flex gap-4">
                <button onClick={() => setIsAdding(false)} className="flex-1 bg-sacred-surface-dark border border-sacred-surface-light/10 text-sacred-text-secondary uppercase text-xs tracking-widest font-bold py-3 rounded">Cancel</button>
                <button onClick={handleCreate} className="flex-1 bg-sacred-gold text-sacred-bg-dark uppercase text-xs tracking-widest font-bold py-3 rounded flex items-center justify-center gap-2">
                   <Save className="w-4 h-4" /> Save Card
                </button>
             </div>
          </div>
        )}

        {activeCard && !isAdding && (
           <div className="flex flex-col items-center">
              <span className="text-[10px] uppercase tracking-widest text-sacred-text-secondary mb-6 bg-sacred-surface-dark px-3 py-1 rounded-full">{pendingCards?.length} Cards Remaining</span>
              
              <div 
                 onClick={() => setFlipped(true)}
                 className={`w-full aspect-[4/3] max-w-sm rounded-2xl shadow-2xl relative transition-all duration-500 cursor-pointer p-8 flex flex-col justify-center text-center group border border-sacred-gold/20 ${flipped ? 'bg-sacred-card-dark' : 'bg-sacred-surface-dark hover:bg-sacred-surface-dark/80'}`}
              >
                 {!flipped ? (
                    <div>
                      <BookOpen className="w-8 h-8 text-sacred-gold mx-auto mb-4 opacity-70 group-hover:opacity-100 transition" />
                      <h2 className="text-2xl font-serif text-sacred-gold-light">{activeCard.book} {activeCard.chapter}:{activeCard.verse}</h2>
                      <p className="text-[10px] uppercase tracking-widest text-sacred-text-secondary mt-6 animate-pulse">Tap to Reveal</p>
                    </div>
                 ) : (
                    <div className="animate-in fade-in duration-500 max-h-full overflow-y-auto hidden-scrollbar">
                      <p className="text-lg md:text-xl font-serif leading-relaxed text-sacred-text-primary text-pretty">{activeCard.text}</p>
                    </div>
                 )}
              </div>

              {flipped && (
                <div className="w-full max-w-sm mt-8 animate-in slide-in-from-bottom-4 duration-500">
                   <p className="text-center text-xs uppercase tracking-widest text-sacred-text-secondary mb-3">How well did you recall?</p>
                   <div className="grid grid-cols-4 gap-2">
                      <button onClick={() => handleReview(0)} className="bg-sacred-surface-dark border border-red-500/20 text-red-400 py-3 rounded uppercase text-[10px] font-bold tracking-widest hover:bg-red-500/20 transition">Again</button>
                      <button onClick={() => handleReview(3)} className="bg-sacred-surface-dark border border-sacred-warning/20 text-sacred-warning py-3 rounded uppercase text-[10px] font-bold tracking-widest hover:bg-sacred-warning/20 transition">Hard</button>
                      <button onClick={() => handleReview(4)} className="bg-sacred-surface-dark border border-sacred-success/20 text-sacred-success py-3 rounded uppercase text-[10px] font-bold tracking-widest hover:bg-sacred-success/20 transition">Good</button>
                      <button onClick={() => handleReview(5)} className="bg-sacred-surface-dark border border-blue-400/20 text-blue-400 py-3 rounded uppercase text-[10px] font-bold tracking-widest hover:bg-blue-400/20 transition">Easy</button>
                   </div>
                </div>
              )}
              
              {!flipped && (
                  <button onClick={() => setIsAdding(true)} className="mt-8 text-xs text-sacred-gold flex items-center gap-2 hover:underline">
                     <BrainCircuit className="w-3 h-3" /> Add new verses to deck
                  </button>
              )}
           </div>
        )}
      </div>
    </div>
  );
}

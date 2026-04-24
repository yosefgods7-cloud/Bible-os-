import { useState, useEffect } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/db";
import { Sparkles, ChevronLeft, ChevronRight, Play, Settings, BookOpenText, Copy, Bookmark, Highlighter, Edit3, Speech, Pause, Languages } from "lucide-react";
import { cn } from "@/lib/utils";
import { explainVerse, generateDevotional, analyzeWord } from "@/services/ai";
import { fetchAndCacheChapter, BIBLE_BOOKS } from "@/services/bible";
import { Link } from "react-router-dom";
import ReactMarkdown from 'react-markdown';

export function Reader() {
  const [currentChapter, setCurrentChapter] = useState(Number(localStorage.getItem('lastChapter')) || 1);
  const [book, setBook] = useState(localStorage.getItem('lastBook') || 'Genesis');
  const [version, setVersion] = useState(localStorage.getItem('preferredVersion') || 'KJV');
  
  const [selectedVerse, setSelectedVerse] = useState<number | null>(null);
  const [aiResponse, setAiResponse] = useState<{type: string, text: string} | null>(null);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [isFetchingChapter, setIsFetchingChapter] = useState(false);
  const [showSelector, setShowSelector] = useState(false);
  
  const [isPlaying, setIsPlaying] = useState(false);

  // Sync state with localStorage and fetch chapter
  useEffect(() => {
    localStorage.setItem('lastChapter', currentChapter.toString());
    localStorage.setItem('lastBook', book);
    localStorage.setItem('preferredVersion', version);
  }, [currentChapter, book, version]);

  useEffect(() => {
    const loadChapter = async () => {
      setIsFetchingChapter(true);
      await fetchAndCacheChapter(version, book, currentChapter);
      setIsFetchingChapter(false);
      
      try {
          const statsStr = localStorage.getItem('reading_stats');
          const stats = statsStr ? JSON.parse(statsStr) : {};
          const key = `${book} ${currentChapter}`;
          stats[key] = (stats[key] || 0) + 1;
          
          const bookStatsStr = localStorage.getItem('reading_book_stats');
          const bookStats = bookStatsStr ? JSON.parse(bookStatsStr) : {};
          bookStats[book] = (bookStats[book] || 0) + 1;

          localStorage.setItem('reading_stats', JSON.stringify(stats));
          localStorage.setItem('reading_book_stats', JSON.stringify(bookStats));
      } catch(e) {}
    };
    loadChapter();
  }, [book, currentChapter, version]);
  
  const verses = useLiveQuery(
    () => db.verses.where({ version, book, chapter: currentChapter }).sortBy('verse'),
    [version, book, currentChapter]
  );
  
  const highlights = useLiveQuery(() => db.highlights.where({ book, chapter: currentChapter }).toArray(), [book, currentChapter]);
  const bookmarks = useLiveQuery(() => db.bookmarks.where({ book, chapter: currentChapter }).toArray(), [book, currentChapter]);

  // Read history logging
  const logReading = async () => {
     const today = new Date().toISOString().split('T')[0];
     const existingLog = await db.history.get(today);
     if (existingLog) {
        await db.history.update(today, { chaptersRead: existingLog.chaptersRead + 1 });
     } else {
        await db.history.put({ date: today, chaptersRead: 1 });
     }
  };

  const handleNext = async () => {
    setSelectedVerse(null);
    setCurrentChapter(c => c + 1);
    await logReading();
  };

  const handlePrev = async () => {
    if (currentChapter > 1) {
       setSelectedVerse(null);
       setCurrentChapter(c => c - 1);
       await logReading();
    }
  };

  const handleAskAI = async (verseText: string, verseNum: number, action: 'explain'|'devotion'|'word') => {
    setIsAiLoading(true);
    setSelectedVerse(verseNum);
    setAiResponse(null);
    try {
      if (action === 'explain') {
        const response = await explainVerse(verseText, verseNum, book, currentChapter, version);
        setAiResponse({ type: 'Explain', text: response });
      } else if (action === 'devotion') {
        const passage = `${book} ${currentChapter}:${verseNum} (${version}) - ${verseText}`;
        const response = await generateDevotional(passage);
        setAiResponse({ type: 'Devotional', text: response });
      } else if (action === 'word') {
        const response = await analyzeWord("this verse's key words", verseText);
        setAiResponse({ type: 'Deep Dive', text: response });
      }
    } catch (e: any) {
      console.error(e);
      setAiResponse({ type: 'Error', text: e.message || "Could not load AI module." });
    } finally {
      setIsAiLoading(false);
    }
  };

  const [showColorPickerFor, setShowColorPickerFor] = useState<number | null>(null);

  const HIGHLIGHT_COLORS = [
    { id: 'sacred-gold', hex: '#C9A84C', bgClass: 'bg-[#C9A84C]/20' },
    { id: 'sacred-success', hex: '#4A9B6F', bgClass: 'bg-[#4A9B6F]/20' },
    { id: 'blue', hex: '#3B82F6', bgClass: 'bg-[#3B82F6]/20' },
    { id: 'purple', hex: '#A855F7', bgClass: 'bg-[#A855F7]/20' },
    { id: 'red', hex: '#EF4444', bgClass: 'bg-[#EF4444]/20' },
    { id: 'orange', hex: '#F97316', bgClass: 'bg-[#F97316]/20' },
  ];

  const handleCopy = (verseText: string, verseNum: number) => {
      const referenceText = `"${verseText}" - ${book} ${currentChapter}:${verseNum} (${version})`;
      navigator.clipboard.writeText(referenceText);
  };

  const handleHighlight = async (verseNum: number, colorId: string) => {
      const existings = await db.highlights.where({ book, chapter: currentChapter, verse: verseNum }).toArray();
      
      let wasSameColor = false;
      for (const ex of existings) {
          if (ex.color === colorId) {
              wasSameColor = true;
          }
          if (ex.id) await db.highlights.delete(ex.id);
      }
      
      if (!wasSameColor) {
         await db.highlights.add({ book, chapter: currentChapter, verse: verseNum, color: colorId, timestamp: new Date().toISOString() });
      }
      setShowColorPickerFor(null);
  };

  const [composingNoteForVerse, setComposingNoteForVerse] = useState<number | null>(null);
  const [noteDraft, setNoteDraft] = useState("");

  const handleNoteStart = async (verseNum: number) => {
      const existing = await db.notes.where({ book, chapter: currentChapter, verse: verseNum }).first();
      setNoteDraft(existing ? existing.text : "");
      setComposingNoteForVerse(verseNum);
  };

  const handleNoteSave = async (verseNum: number) => {
      const existing = await db.notes.where({ book, chapter: currentChapter, verse: verseNum }).first();
      if (noteDraft.trim() === "") {
         if (existing && existing.id) await db.notes.delete(existing.id);
      } else {
         if (existing && existing.id) {
             await db.notes.update(existing.id, { text: noteDraft, timestamp: new Date().toISOString() });
         } else {
             await db.notes.add({ book, chapter: currentChapter, verse: verseNum, text: noteDraft, timestamp: new Date().toISOString() });
         }
      }
      setComposingNoteForVerse(null);
      setNoteDraft("");
  };

  const handleBookmark = async (verseNum: number, isBookmarked: boolean) => {
      if (isBookmarked) {
          const existings = await db.bookmarks.where({ book, chapter: currentChapter, verse: verseNum }).toArray();
          for (const ex of existings) {
             if (ex.id) await db.bookmarks.delete(ex.id);
          }
      } else {
          const count = await db.bookmarks.where({ book, chapter: currentChapter, verse: verseNum }).count();
          if (count === 0) {
             await db.bookmarks.add({ book, chapter: currentChapter, verse: verseNum, timestamp: new Date().toISOString() });
          }
      }
  };

  // TTS State
  const [ttsSpeed, setTtsSpeed] = useState(1);
  const [showTtsControls, setShowTtsControls] = useState(false);
  const [currentSpeechVerseIndex, setCurrentSpeechVerseIndex] = useState(-1);

  const performSpeak = (startIndex: number, speed: number) => {
    window.speechSynthesis.cancel();
    if (!verses || verses.length === 0) return;
    setIsPlaying(true);
    
    // We only queue from the startIndex forward
    const versesToPlay = verses.slice(startIndex);
    
    versesToPlay.forEach((v, idx) => {
       if (!v.text.trim()) return;
       const utterance = new SpeechSynthesisUtterance(v.text);
       utterance.rate = speed;
       
       utterance.onstart = () => {
         setCurrentSpeechVerseIndex(startIndex + idx);
       };

       if (idx === versesToPlay.length - 1) {
           utterance.onend = () => {
             setIsPlaying(false);
             setCurrentSpeechVerseIndex(-1);
           };
       }
       
       utterance.onerror = (e) => { 
           console.error("TTS Error:", e);
           setIsPlaying(false); 
           setCurrentSpeechVerseIndex(-1);
       };
       
       window.speechSynthesis.speak(utterance);
    });
  };

  const toggleTTS = () => {
    if (!verses || verses.length === 0) return;
    
    if (isPlaying) {
       window.speechSynthesis.cancel();
       setIsPlaying(false);
       setCurrentSpeechVerseIndex(-1);
       
    } else {
       setShowTtsControls(true);
       performSpeak(0, ttsSpeed);
    }
  };

  const skipTtsForward = () => {
    if (!verses || currentSpeechVerseIndex >= verses.length - 1) return;
    performSpeak(currentSpeechVerseIndex + 1, ttsSpeed);
  };

  const skipTtsBackward = () => {
    if (!verses || currentSpeechVerseIndex <= 0) {
      performSpeak(0, ttsSpeed); // Restart chapter
      return;
    }
    performSpeak(currentSpeechVerseIndex - 1, ttsSpeed);
  };
  
  const handleSpeedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSpeed = parseFloat(e.target.value);
    setTtsSpeed(newSpeed);
    if (isPlaying && currentSpeechVerseIndex >= 0) {
       performSpeak(currentSpeechVerseIndex, newSpeed);
    }
  };

  // cleanup TTS
  useEffect(() => {
     window.speechSynthesis.cancel();
    return () => {
       window.speechSynthesis.cancel();
    };
  }, []);

  return (
    <div className="flex flex-col flex-1 h-[100dvh] relative bg-sacred-bg-dark text-sacred-text-primary">
      {/* Book/Chapter Selector Modal */}
      {showSelector && (
        <div className="absolute inset-0 bg-sacred-bg-dark z-50 overflow-y-auto p-6 md:p-12 animate-in slide-in-from-bottom pb-24">
          <div className="flex justify-between items-center mb-8 max-w-5xl mx-auto">
            <h2 className="text-3xl font-light text-sacred-text-primary">Select Book</h2>
            <button onClick={() => setShowSelector(false)} className="text-sacred-text-secondary uppercase tracking-widest text-xs border border-sacred-surface-light px-4 py-2 hover:bg-sacred-surface-dark transition rounded">Close</button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 max-w-5xl mx-auto">
            {BIBLE_BOOKS.map(b => (
               <button 
                  key={b}
                  onClick={() => { setBook(b); setCurrentChapter(1); setShowSelector(false); }}
                  className={cn("p-4 border rounded-xl text-left bg-sacred-surface-dark transition-all shadow-md group outline-none", book === b ? "border-sacred-gold text-sacred-gold shadow-sacred-gold/10" : "border-transparent text-sacred-text-primary hover:border-sacred-gold/30")}
               >
                  <span className="font-medium group-hover:text-sacred-gold-light transition">{b}</span>
               </button>
            ))}
          </div>
        </div>
      )}

      {/* Top Bar */}
      <header className="flex items-center justify-between p-4 border-b border-sacred-surface-dark bg-sacred-surface-dark/95 backdrop-blur-sm sticky top-0 z-20">
        <div className="flex items-center space-x-2">
           <Link to="/" className="p-2 -ml-2"><ChevronLeft className="w-5 h-5 text-sacred-text-secondary hover:text-sacred-text-primary transition" /></Link>
           <button 
             onClick={() => setShowSelector(true)}
             className="text-lg font-serif text-sacred-text-primary font-medium tracking-wide hover:text-sacred-gold transition-colors"
           >
             {book} {currentChapter}
           </button>
           <select 
             className="bg-transparent border border-sacred-surface-light text-xs text-sacred-text-secondary rounded px-2 py-1 outline-none appearance-none ml-2 cursor-pointer hover:border-sacred-gold transition-colors"
             value={version}
             onChange={(e) => setVersion(e.target.value)}
           >
              <option value="KJV" className="bg-sacred-surface-dark">KJV</option>
              <option value="NIV" className="bg-sacred-surface-dark">NIV</option>
              <option value="ESV" className="bg-sacred-surface-dark">ESV</option>
              <option value="NLT" className="bg-sacred-surface-dark">NLT</option>
           </select>
        </div>
        <div className="flex items-center space-x-1">
          {isPlaying && (
             <button onClick={skipTtsBackward} className="p-2 text-sacred-text-secondary hover:text-sacred-gold transition">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line></svg>
             </button>
          )}
          <button onClick={() => setShowTtsControls(!showTtsControls)} onDoubleClick={toggleTTS} className="p-2 relative flex items-center justify-center">
             {isPlaying ? (
               <Pause className="w-5 h-5 text-sacred-gold animate-pulse" fill="currentColor"/>
             ) : (
               <Speech className="w-5 h-5 text-sacred-text-secondary hover:text-sacred-text-primary transition" />
             )}
          </button>
          {isPlaying && (
             <button onClick={skipTtsForward} className="p-2 text-sacred-text-secondary hover:text-sacred-gold transition">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line></svg>
             </button>
          )}
          <Link to="/more" className="p-2"><Settings className="w-4 h-4 text-sacred-text-secondary hover:text-sacred-text-primary transition" /></Link>
        </div>
      </header>
      
      {/* TTS Controls Panel */}
      {showTtsControls && (
        <div className="bg-sacred-surface-dark border-b border-sacred-gold/10 p-4 sticky top-[65px] z-10 shadow-lg animate-in fade-in slide-in-from-top-2">
           <div className="max-w-md mx-auto flex flex-col gap-4">
              <div className="flex justify-center items-center gap-6">
                 <button onClick={skipTtsBackward} className="p-2 rounded-full hover:bg-sacred-bg-dark text-sacred-text-secondary hover:text-sacred-gold transition-colors">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line></svg>
                 </button>
                 <button onClick={toggleTTS} className="p-4 rounded-full bg-sacred-gold text-sacred-bg-dark hover:bg-sacred-gold-light transition-colors shadow-lg shadow-sacred-gold/20">
                     {isPlaying ? (
                        <Pause className="w-6 h-6" fill="currentColor" />
                     ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                     )}
                 </button>
                 <button onClick={skipTtsForward} className="p-2 rounded-full hover:bg-sacred-bg-dark text-sacred-text-secondary hover:text-sacred-gold transition-colors">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line></svg>
                 </button>
              </div>
              <div className="flex items-center gap-4">
                 <span className="text-[10px] uppercase font-bold tracking-widest text-sacred-text-secondary w-16 text-right">Speed</span>
                 <input 
                   type="range" 
                   min="0.5" max="2" step="0.1" 
                   value={ttsSpeed} 
                   onChange={handleSpeedChange}
                   className="flex-1 h-1 bg-sacred-card-dark rounded-lg appearance-none cursor-pointer accent-sacred-gold"
                 />
                 <span className="text-[10px] uppercase font-bold tracking-widest text-sacred-gold w-8">{ttsSpeed.toFixed(1)}x</span>
              </div>
           </div>
        </div>
      )}

      {/* Reader Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6 pb-32">
        <div className="max-w-prose mx-auto font-serif text-[1.35rem] leading-relaxed text-sacred-text-primary tracking-wide">
          
          <div className="mb-8 flex justify-between items-center opacity-40">
             <button onClick={handlePrev} className="uppercase tracking-widest text-[10px] font-sans flex items-center gap-1 hover:text-sacred-gold transition disabled:opacity-50" disabled={currentChapter <= 1}>
               <ChevronLeft className="w-3 h-3" /> Prev
             </button>
             <button onClick={handleNext} className="uppercase tracking-widest text-[10px] font-sans flex items-center gap-1 hover:text-sacred-gold transition">
               Next <ChevronRight className="w-3 h-3" />
             </button>
          </div>

          {!verses?.length && isFetchingChapter && <p className="text-center font-sans text-sacred-text-secondary text-sm opacity-70 animate-pulse mt-12">Loading chapter...</p>}
          {!verses?.length && !isFetchingChapter && <p className="text-center font-sans text-sacred-text-secondary text-sm opacity-70 mt-12">Chapter not available offline.</p>}
          
           {verses?.filter((v, i, a) => a.findIndex(t => t.verse === v.verse) === i).map((v) => {
            const highlightRecord = highlights?.find(h => h.verse === v.verse);
            const isHighlighted = !!highlightRecord;
            const highlightClass = isHighlighted ? HIGHLIGHT_COLORS.find(c => c.id === highlightRecord.color)?.bgClass || 'bg-[#C9A84C]/20' : '';
            const isBookmarked = !!(bookmarks?.find(b => b.verse === v.verse));

            return (
              <div 
                key={v.id} 
                className={cn(
                  "relative transition-all rounded-lg p-2.5 -mx-2.5 group cursor-pointer mb-2",
                  selectedVerse === v.verse ? "bg-sacred-surface-dark shadow-lg ring-1 ring-sacred-gold/10" : "hover:bg-sacred-surface-dark/50",
                  isHighlighted && selectedVerse !== v.verse ? highlightClass : "" // Highlight styling
                )}
                onClick={() => setSelectedVerse(selectedVerse === v.verse ? null : v.verse)}
              >
                <sup className="text-xs text-sacred-gold mr-3 font-sans font-medium">{v.verse}</sup>
                <span className={cn(isHighlighted && selectedVerse === v.verse ? highlightClass : "", "rounded")}>{v.text}</span>
                
                {/* Context Actions */}
                {selectedVerse === v.verse && (
                  <div className="mt-6 flex flex-col space-y-4 animate-in fade-in slide-in-from-top-2 duration-300 pb-2">
                     
                     {/* Core Action Tools */}
                     <div className="flex flex-wrap gap-2 border-t border-sacred-surface-light/10 pt-4">
                       <button 
                         onClick={(e) => { e.stopPropagation(); handleAskAI(v.text, v.verse, 'explain'); }}
                         className="flex items-center space-x-1.5 px-4 py-2 bg-sacred-gold/10 text-sacred-gold rounded-full text-xs font-sans font-medium hover:bg-sacred-gold/20 transition-colors"
                       >
                         <Sparkles className="w-3.5 h-3.5" />
                         <span>Explain</span>
                       </button>

                       <button 
                         onClick={(e) => { e.stopPropagation(); handleAskAI(v.text, v.verse, 'devotion'); }}
                         className="flex items-center space-x-1.5 px-4 py-2 bg-sacred-surface-light/5 text-sacred-text-primary rounded-full text-xs font-sans font-medium hover:bg-sacred-surface-light/10 transition-colors border border-sacred-surface-light/10"
                       >
                         <BookOpenText className="w-3.5 h-3.5" />
                         <span>Devotional</span>
                       </button>
                       
                       <button 
                         onClick={(e) => { e.stopPropagation(); handleAskAI(v.text, v.verse, 'word'); }}
                         className="flex items-center space-x-1.5 px-4 py-2 bg-sacred-surface-light/5 text-sacred-text-primary rounded-full text-xs font-sans font-medium hover:bg-sacred-surface-light/10 transition-colors border border-sacred-surface-light/10"
                       >
                         <Languages className="w-3.5 h-3.5" />
                         <span>Word Study</span>
                       </button>
                     </div>

                     {/* Utility Tools Grid */}
                     <div className="grid grid-cols-4 gap-2 pt-2 relative">
                        <button onClick={(e) => { e.stopPropagation(); handleCopy(v.text, v.verse); }} className="flex flex-col items-center p-3 rounded-lg bg-sacred-bg-dark border border-sacred-surface-light/10 hover:border-sacred-gold/30 hover:text-sacred-gold transition group">
                           <Copy className="w-4 h-4 mb-2 text-sacred-text-secondary group-hover:text-sacred-gold" />
                           <span className="text-[10px] uppercase font-sans tracking-widest text-sacred-text-secondary group-hover:text-sacred-gold">Copy</span>
                        </button>
                        <div className="relative">
                          <button onClick={(e) => { e.stopPropagation(); setShowColorPickerFor(showColorPickerFor === v.verse ? null : v.verse); }} className="w-full flex flex-col items-center p-3 rounded-lg bg-sacred-bg-dark border border-sacred-surface-light/10 hover:border-sacred-gold/30 hover:text-sacred-gold transition group">
                             <Highlighter className="w-4 h-4 mb-2 text-sacred-text-secondary group-hover:text-sacred-gold" />
                             <span className="text-[10px] uppercase font-sans tracking-widest text-sacred-text-secondary group-hover:text-sacred-gold">Highlight</span>
                          </button>
                          
                          {showColorPickerFor === v.verse && (
                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-sacred-surface-dark border border-sacred-gold/20 rounded-full p-2 flex space-x-2 z-20 shadow-2xl animate-in slide-in-from-top-2">
                               {HIGHLIGHT_COLORS.map(c => (
                                 <button 
                                   key={c.id} 
                                   onClick={(e) => { e.stopPropagation(); handleHighlight(v.verse, c.id); }}
                                   className="w-6 h-6 rounded-full border border-white/20 hover:scale-125 transition-transform"
                                   style={{ backgroundColor: c.hex }}
                                 ></button>
                               ))}
                            </div>
                          )}
                        </div>
                        <button onClick={(e) => { e.stopPropagation(); handleBookmark(v.verse, isBookmarked); }} className="flex flex-col items-center p-3 rounded-lg bg-sacred-bg-dark border border-sacred-surface-light/10 hover:border-sacred-gold/30 hover:text-sacred-gold transition group">
                           <Bookmark className={cn("w-4 h-4 mb-2 group-hover:text-sacred-gold", isBookmarked ? "text-sacred-gold fill-sacred-gold" : "text-sacred-text-secondary")} />
                           <span className={cn("text-[10px] uppercase font-sans tracking-widest group-hover:text-sacred-gold", isBookmarked ? "text-sacred-gold" : "text-sacred-text-secondary")}>
                             {isBookmarked ? 'Bookmarked' : 'Bookmark'}
                           </span>
                        </button>
                        <button onClick={(e) => { e.stopPropagation(); handleNoteStart(v.verse); }} className="flex flex-col items-center p-3 rounded-lg bg-sacred-bg-dark border border-sacred-surface-light/10 hover:border-sacred-gold/30 hover:text-sacred-gold transition group">
                           <Edit3 className="w-4 h-4 mb-2 text-sacred-text-secondary group-hover:text-sacred-gold" />
                           <span className="text-[10px] uppercase font-sans tracking-widest text-sacred-text-secondary group-hover:text-sacred-gold">Note</span>
                        </button>
                     </div>

                     {/* Inline Note Editor */}
                     {composingNoteForVerse === v.verse && (
                        <div className="mt-4 animate-in fade-in" onClick={e => e.stopPropagation()}>
                           <textarea
                             value={noteDraft}
                             onChange={e => setNoteDraft(e.target.value)}
                             placeholder="Write your thoughts..."
                             className="w-full bg-sacred-bg-dark border border-sacred-gold/30 text-sacred-text-primary rounded-lg p-3 min-h-[100px] text-sm font-sans outline-none focus:border-sacred-gold"
                             autoFocus
                           />
                           <div className="flex justify-end gap-2 mt-2">
                              <button onClick={() => setComposingNoteForVerse(null)} className="px-4 py-2 text-xs uppercase tracking-widest text-sacred-text-secondary hover:text-sacred-text-primary font-sans">
                                Cancel
                              </button>
                              <button onClick={() => handleNoteSave(v.verse)} className="bg-sacred-gold text-sacred-bg-dark px-4 py-2 rounded text-xs uppercase tracking-widest font-bold font-sans">
                                Save
                              </button>
                           </div>
                        </div>
                     )}

                     {/* AI Insight Card */}
                     {(isAiLoading || aiResponse) && (
                       <div className="bg-sacred-card-dark border border-sacred-gold/20 rounded-xl p-6 shadow-2xl font-sans mt-4" onClick={(e) => e.stopPropagation()}>
                         <div className="flex flex-col space-y-3 mb-4">
                           <div className="flex items-center space-x-2">
                             {(aiResponse?.type === 'Devotional') && <BookOpenText className="w-4 h-4 text-sacred-gold" />}
                             {(aiResponse?.type === 'Explain') && <Sparkles className="w-4 h-4 text-sacred-gold" />}
                             {(aiResponse?.type === 'Deep Dive') && <Languages className="w-4 h-4 text-sacred-gold" />}
                             {isAiLoading && <Sparkles className="w-4 h-4 text-sacred-gold animate-spin" />}
                             
                             <span className="text-[10px] font-bold text-sacred-gold uppercase tracking-widest bg-sacred-gold/10 px-2 py-0.5 rounded">
                               {aiResponse?.type || 'Synthesizing...'}
                             </span>
                           </div>
                         </div>
                         {isAiLoading ? (
                           <div className="flex space-x-1.5 py-4 pl-1">
                              <div className="w-2 h-2 bg-sacred-gold/50 rounded-full animate-bounce"></div>
                              <div className="w-2 h-2 bg-sacred-gold/50 rounded-full animate-bounce delay-75"></div>
                              <div className="w-2 h-2 bg-sacred-gold/50 rounded-full animate-bounce delay-150"></div>
                           </div>
                         ) : (
                           <div className="text-[15px] text-sacred-text-primary leading-relaxed prose prose-invert prose-p:mb-4 last:prose-p:mb-0 prose-a:text-sacred-gold prose-strong:text-sacred-gold-light max-w-none">
                             <ReactMarkdown>{aiResponse?.text || ""}</ReactMarkdown>
                           </div>
                         )}
                       </div>
                     )}
                  </div>
                )}
              </div>
            );
          })}
          
          {verses && verses.length > 0 && (
            <div className="mt-16 flex justify-between items-center border-t border-sacred-surface-light/10 pt-8 opacity-60">
               <button onClick={handlePrev} className="uppercase tracking-widest text-xs font-sans flex items-center gap-2 hover:text-sacred-gold transition disabled:opacity-50" disabled={currentChapter <= 1}>
                 <ChevronLeft className="w-4 h-4" /> Previous Chapter
               </button>
               <button onClick={handleNext} className="uppercase tracking-widest text-xs font-sans flex items-center gap-2 hover:text-sacred-gold transition bg-sacred-surface-dark px-4 py-2 rounded-full border border-sacred-surface-light/10">
                 Next Chapter <ChevronRight className="w-4 h-4" />
               </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

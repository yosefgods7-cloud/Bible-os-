import { useState, useMemo, useEffect } from "react";
import { ChevronLeft, Search, BookOpen, MapPin, Clock, Quote, Sparkles, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { OFFLINE_DICTIONARY } from "@/data/dictionary";
import { fetchAndCacheChapter, BIBLE_BOOKS } from "@/services/bible";
import { db } from "@/db";

export function OfflineDictionary() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");
  
  // Passage Search State
  const [passageResult, setPassageResult] = useState<{book: string, chapter: number, text: string, versesStr: string, isFullChapter: boolean} | null>(null);
  const [isSearchingPassage, setIsSearchingPassage] = useState(false);
  
  const navigate = useNavigate();

  const categories = ["All", "Aramaic", "Greek", "Hebrew", "Location", "Tradition", "History"];

  const allTerms = useMemo(() => {
    return [...OFFLINE_DICTIONARY]
      .map(t => t.term)
      .sort((a, b) => b.length - a.length);
  }, []);

  useEffect(() => {
    // Attempt passage detection
    const delayDebounceFn = setTimeout(async () => {
       const trimmed = search.trim();
       if (trimmed.length < 3) {
         setPassageResult(null);
         return;
       }
       
       // Regex for standard bible verse e.g., Genesis 1:1, 1 John 3:16, John 3, etc.
       const match = trimmed.match(/^((?:\d\s+)?[A-Za-z\s]+)\s+(\d+)(?::(\d+)(?:-(\d+))?)?$/);
       if (match) {
         const rawBook = match[1].trim();
         const bookMatch = BIBLE_BOOKS.find(b => b.toLowerCase() === rawBook.toLowerCase() || b.toLowerCase().startsWith(rawBook.toLowerCase()));
         
         if (bookMatch) {
            const ch = parseInt(match[2]);
            const vStart = match[3] ? parseInt(match[3]) : null;
            const vEnd = match[4] ? parseInt(match[4]) : vStart;
            
            setIsSearchingPassage(true);
            try {
               await fetchAndCacheChapter('KJV', bookMatch, ch);
               
               let query = db.verses.where({ version: 'KJV', book: bookMatch, chapter: ch });
               const allVerses = await query.toArray();
               
               if (allVerses.length > 0) {
                 if (vStart) {
                    const filtered = allVerses.filter(v => v.verse >= vStart && v.verse <= (vEnd || vStart));
                    if (filtered.length > 0) {
                      setPassageResult({
                         book: bookMatch,
                         chapter: ch,
                         versesStr: vStart === vEnd ? `${vStart}` : `${vStart}-${vEnd}`,
                         text: filtered.map(v => `${v.verse} ${v.text}`).join(' '),
                         isFullChapter: false
                      });
                    } else {
                      setPassageResult(null);
                    }
                 } else {
                    // Just chapter
                    setPassageResult({
                       book: bookMatch,
                       chapter: ch,
                       versesStr: '',
                       text: `Select "Open Chapter" to read all ${allVerses.length} verses of ${bookMatch} ${ch}.`,
                       isFullChapter: true
                    });
                 }
               } else {
                 setPassageResult(null);
               }
            } catch (e) {
               console.error(e);
               setPassageResult(null);
            } finally {
               setIsSearchingPassage(false);
            }
            return;
         }
       }
       // Not a match
       setPassageResult(null);
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [search]);

  const renderDefinition = (text: string, currentTerm: string) => {
    if (!text) return null;
    
    // Create regex matching any of the dictionary terms, as whole words. case-insensitive.
    const escapedTerms = allTerms.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const regex = new RegExp(`\\b(${escapedTerms.join('|')})\\b`, 'gi');
    
    const parts = text.split(regex);
    
    return parts.map((part, index) => {
      if (index % 2 !== 0) {
        // It's a matched term
        // Ignore if it's the exact same term as the current entry to prevent self-linking
        if (part.toLowerCase() === currentTerm.toLowerCase()) {
           return <span key={index} className="font-bold text-sacred-text-primary">{part}</span>;
        }

        const actualTerm = allTerms.find(t => t.toLowerCase() === part.toLowerCase()) || part;
        
        return (
          <button
            key={index}
            className="text-sacred-gold hover:underline font-medium hover:text-sacred-gold-light focus:outline-none transition-colors mx-0.5 inline-block"
            onClick={(e) => {
              e.preventDefault();
              setSearch(actualTerm);
              setActiveCategory('All');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            {part}
          </button>
        );
      }
      return part;
    });
  };

  const filteredEntries = useMemo(() => {
    return OFFLINE_DICTIONARY.filter(entry => {
      const matchesSearch = entry.term.toLowerCase().includes(search.toLowerCase()) || 
                            entry.definition.toLowerCase().includes(search.toLowerCase());
      const matchesCat = activeCategory === "All" || entry.category === activeCategory;
      return matchesSearch && matchesCat;
    });
  }, [search, activeCategory]);

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
       case "Aramaic": case "Greek": case "Hebrew": return <Quote className="w-4 h-4 text-sacred-gold" />;
       case "Location": return <MapPin className="w-4 h-4 text-sacred-gold" />;
       case "History": case "Tradition": return <Clock className="w-4 h-4 text-sacred-gold" />;
       default: return <BookOpen className="w-4 h-4 text-sacred-gold" />;
    }
  }

  return (
    <div className="flex flex-col flex-1 h-[100dvh] relative bg-sacred-bg-dark text-sacred-text-primary overflow-y-auto">
      <header className="flex items-center justify-between p-4 border-b border-sacred-surface-light/10 sticky top-0 bg-sacred-bg-dark/95 backdrop-blur z-20">
        <div className="flex items-center space-x-2">
           <Link to="/more" className="p-2 -ml-2"><ChevronLeft className="w-5 h-5 text-sacred-text-secondary hover:text-sacred-text-primary transition" /></Link>
           <h1 className="text-xl font-medium tracking-wide">Lexicon & Search</h1>
        </div>
      </header>

      <div className="p-6 max-w-3xl mx-auto w-full pb-24">
        <div className="relative mb-6">
           <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-sacred-text-secondary" />
           <input 
             value={search}
             onChange={e => setSearch(e.target.value)}
             placeholder="Search passages (e.g. John 3:16) or terms..." 
             className="w-full bg-sacred-surface-dark border border-sacred-gold/20 rounded-full py-4 pl-12 pr-6 outline-none focus:border-sacred-gold transition shadow-xl"
           />
           {isSearchingPassage && (
              <Sparkles className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 text-sacred-gold animate-spin" />
           )}
        </div>

        {passageResult && (
          <div className="mb-8 p-6 bg-sacred-card-dark border border-sacred-gold/30 rounded-xl shadow-2xl relative overflow-hidden animate-in fade-in slide-in-from-bottom-2">
             <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                <BookOpen className="w-32 h-32 text-sacred-gold -mr-10 -mt-10" />
             </div>
             
             <div className="relative z-10">
                <h3 className="text-xl font-serif text-sacred-gold-light mb-3">
                   {passageResult.book} {passageResult.chapter}{passageResult.versesStr ? `:${passageResult.versesStr}` : ''}
                </h3>
                
                <p className="text-sacred-text-primary tracking-wide text-sm leading-relaxed mb-6">
                   {passageResult.text}
                </p>
                
                <div className="flex items-center gap-3">
                   <button 
                     onClick={() => navigate(`/read?book=${passageResult.book}&chapter=${passageResult.chapter}`)}
                     className="bg-sacred-gold text-sacred-bg-dark font-bold text-xs uppercase tracking-widest px-4 py-2 rounded flex items-center gap-2 hover:bg-sacred-gold-light transition"
                   >
                      <BookOpen className="w-4 h-4" />
                      Open Chapter
                   </button>
                   
                   {!passageResult.isFullChapter && (
                     <button
                       onClick={() => navigate('/ai-deep-dive', { state: { initialQuery: `Explain ${passageResult.book} ${passageResult.chapter}:${passageResult.versesStr}` } })}
                       className="bg-sacred-surface-dark text-sacred-gold font-bold text-xs uppercase tracking-widest px-4 py-2 rounded border border-sacred-gold/20 flex items-center gap-2 hover:bg-sacred-surface-light transition"
                     >
                        <Sparkles className="w-4 h-4" />
                        AI Deep Dive
                     </button>
                   )}
                </div>
             </div>
          </div>
        )}

        <div className="flex overflow-x-auto space-x-2 mb-8 hidden-scrollbar pb-2">
           {categories.map(cat => (
             <button
               key={cat}
               onClick={() => setActiveCategory(cat)}
               className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-colors ${activeCategory === cat ? 'bg-sacred-gold text-sacred-bg-dark' : 'bg-sacred-surface-dark text-sacred-text-secondary hover:text-sacred-text-primary border border-sacred-surface-light/10'}`}
             >
               {cat}
             </button>
           ))}
        </div>

        <div className="space-y-4">
           {filteredEntries.map((entry, idx) => (
              <div key={idx} className="bg-sacred-surface-dark border border-sacred-gold/10 p-6 rounded-xl relative overflow-hidden group hover:border-sacred-gold/30 transition-colors">
                 <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-2xl font-serif text-sacred-text-primary mb-1 flex items-center gap-2">
                         {entry.term}
                      </h3>
                      <div className="flex items-center gap-2">
                         <span className="text-[10px] uppercase tracking-widest text-sacred-text-secondary bg-sacred-bg-dark px-2 py-0.5 rounded border border-sacred-surface-light/10 inline-flex items-center gap-1">
                           {getCategoryIcon(entry.category)} {entry.category}
                         </span>
                         {entry.transliteration && <span className="text-sm font-serif italic text-sacred-gold-light opacity-80">{entry.transliteration}</span>}
                      </div>
                    </div>
                 </div>
                 <p className="text-sacred-text-primary leading-relaxed mt-4">
                    {renderDefinition(entry.definition, entry.term)}
                 </p>
                 {entry.references && entry.references.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-sacred-surface-light/10 text-xs text-sacred-text-secondary uppercase tracking-widest flex items-center gap-2">
                       <BookOpen className="w-3.5 h-3.5" />
                       {entry.references.join(", ")}
                    </div>
                 )}
              </div>
           ))}
           {filteredEntries.length === 0 && !passageResult && search.length > 0 && (
              <p className="text-center text-sacred-text-secondary mt-12 uppercase tracking-widest text-sm">No terms match your search.</p>
           )}
        </div>
      </div>
    </div>
  );
}

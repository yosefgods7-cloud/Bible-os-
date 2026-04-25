import { useState } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/db";
import { Link } from "react-router-dom";
import { Bookmark, Edit3, Highlighter, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

function SelectableVerse({ book, chapter, verse, itemRef } : {book: string, chapter: number, verse: number, itemRef: any}) {
  const [expanded, setExpanded] = useState(false);
  const verseData = useLiveQuery(() => db.verses.where({ book, chapter, verse }).first(), [book, chapter, verse]);

  return (
    <div className="bg-sacred-card-dark p-4 rounded-xl border border-sacred-gold/10 relative">
      <div className="flex justify-between items-center mb-1">
         <Link to="/read" onClick={() => { localStorage.setItem('lastBook', book); localStorage.setItem('lastChapter', chapter.toString()); }} className="text-sacred-gold-light font-bold hover:underline flex items-center gap-2">
            {book} {chapter}:{verse}
         </Link>
         <div className="flex items-center gap-3">
            {itemRef.color && <div className="w-4 h-4 rounded-full border border-white/20" style={{backgroundColor: itemRef.color === 'sacred-gold' ? '#C9A84C' : itemRef.color}}></div>}
            {!itemRef.color && <Bookmark className="w-4 h-4 text-sacred-gold" />}
            <button onClick={() => setExpanded(!expanded)} className="p-1 text-sacred-text-secondary hover:text-sacred-text-primary transition rounded-full hover:bg-sacred-surface-light/10">
               <ChevronRight className={cn("w-4 h-4 transition-transform", expanded ? "rotate-90" : "rotate-0")} />
            </button>
         </div>
      </div>
      {expanded && (
        <div className="text-sm text-sacred-text-primary mt-3 p-3 bg-sacred-surface-dark rounded animate-in fade-in zoom-in-95 duration-200 shadow-inner">
           {verseData ? verseData.text : <span className="opacity-50 italic">Chapter not downloaded yet...</span>}
        </div>
      )}
      <p className="text-[10px] text-sacred-text-secondary mt-3">{new Date(itemRef.timestamp).toLocaleDateString()}</p>
    </div>
  );
}

export function Journal() {
  const [activeTab, setActiveTab] = useState<'notes'|'roadmap-notes'|'highlights'|'bookmarks'>('notes');
  const [search, setSearch] = useState("");

  const highlights = useLiveQuery(() => db.highlights.toArray());
  const bookmarks = useLiveQuery(() => db.bookmarks.toArray());
  const notes = useLiveQuery(() => db.notes.toArray());
  const roadmaps = useLiveQuery(() => db.roadmaps.toArray());

  const filterItems = (items: any[]) => {
     if (!items) return [];
     if (!search) return items;
     return items.filter(i => 
       i.book.toLowerCase().includes(search.toLowerCase()) || 
       (i.text && i.text.toLowerCase().includes(search.toLowerCase()))
     );
  };
  
  const regularNotes = notes ? notes.filter(n => !n.roadmapId) : [];
  const roadmapNotes = notes ? notes.filter(n => !!n.roadmapId) : [];

  return (
    <div className="flex flex-col flex-1 p-6 md:p-0 space-y-6 animate-in fade-in duration-700 pb-24 md:pb-8 max-w-3xl mx-auto w-full">
      <header className="md:pt-4">
        <h1 className="text-3xl font-light text-sacred-text-primary">Journal</h1>
        <p className="text-[10px] uppercase tracking-widest text-sacred-text-secondary mt-2">
          Your personal annotations and records.
        </p>
      </header>
      
      <div className="flex space-x-2">
         <input 
            type="text" 
            placeholder="Search book or text..." 
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="flex-1 bg-sacred-surface-dark border border-sacred-gold/30 rounded-lg px-4 py-2 text-sm text-sacred-text-primary outline-none focus:border-sacred-gold transition"
         />
      </div>

      <div className="flex overflow-x-auto hide-scrollbar space-x-4 border-b border-sacred-surface-light/10">
        <button 
          onClick={() => setActiveTab('notes')}
          className={`pb-2 text-sm uppercase tracking-widest whitespace-nowrap ${activeTab === 'notes' ? 'text-sacred-gold border-b-2 border-sacred-gold font-bold' : 'text-sacred-text-secondary hover:text-sacred-text-primary'}`}
        >Notes</button>
        <button 
          onClick={() => setActiveTab('roadmap-notes')}
          className={`pb-2 text-sm uppercase tracking-widest whitespace-nowrap ${activeTab === 'roadmap-notes' ? 'text-sacred-gold border-b-2 border-sacred-gold font-bold' : 'text-sacred-text-secondary hover:text-sacred-text-primary'}`}
        >Roadmap Notes</button>
        <button 
          onClick={() => setActiveTab('highlights')}
          className={`pb-2 text-sm uppercase tracking-widest whitespace-nowrap ${activeTab === 'highlights' ? 'text-sacred-gold border-b-2 border-sacred-gold font-bold' : 'text-sacred-text-secondary hover:text-sacred-text-primary'}`}
        >Highlights</button>
        <button 
          onClick={() => setActiveTab('bookmarks')}
          className={`pb-2 text-sm uppercase tracking-widest whitespace-nowrap ${activeTab === 'bookmarks' ? 'text-sacred-gold border-b-2 border-sacred-gold font-bold' : 'text-sacred-text-secondary hover:text-sacred-text-primary'}`}
        >Bookmarks</button>
      </div>

      <div className="flex flex-col space-y-4">
        {activeTab === 'notes' && filterItems(regularNotes).map(note => (
           <div key={note.id} className="bg-sacred-card-dark p-5 rounded-xl border border-sacred-gold/10">
              <div className="flex justify-between items-center mb-3">
                 <Link to="/read" onClick={() => { localStorage.setItem('lastBook', note.book); localStorage.setItem('lastChapter', note.chapter.toString()); }} className="text-sacred-gold-light font-bold hover:underline">
                    {note.book} {note.chapter}:{note.verse}
                 </Link>
                 <Edit3 className="w-4 h-4 text-sacred-text-secondary" />
              </div>
              <p className="text-sacred-text-primary bg-sacred-surface-dark p-3 rounded">{note.text}</p>
              <p className="text-[10px] text-sacred-text-secondary mt-3">{new Date(note.timestamp).toLocaleDateString()}</p>
           </div>
        ))}
        
        {activeTab === 'roadmap-notes' && filterItems(roadmapNotes).map(note => {
           let rTitle = 'Deleted Roadmap';
           if (roadmaps) {
               const r = roadmaps.find((rx: any) => rx.id === note.roadmapId);
               if (r) rTitle = r.title;
           }
           
           return (
           <div key={note.id} className="bg-sacred-card-dark p-5 rounded-xl border border-sacred-gold/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2 opacity-5 pointer-events-none">
                 <Edit3 className="w-24 h-24 -mr-4 -mt-4 text-sacred-gold" />
              </div>
              <div className="flex justify-between items-center mb-3 relative z-10">
                 <Link to="/read" onClick={() => { localStorage.setItem('lastBook', note.book); localStorage.setItem('lastChapter', note.chapter.toString()); }} className="text-sacred-gold-light font-bold hover:underline">
                    {note.book} {note.chapter}:{note.verse}
                 </Link>
                 <div className="flex items-center gap-2">
                    <span className="text-[9px] uppercase tracking-widest text-sacred-text-secondary bg-sacred-surface-dark px-2 py-1 rounded">
                       {rTitle} - Day {note.roadmapDay}
                    </span>
                 </div>
              </div>
              <p className="text-sacred-text-primary bg-sacred-surface-dark p-3 rounded relative z-10">{note.text}</p>
              <p className="text-[10px] text-sacred-text-secondary mt-3 relative z-10">{new Date(note.timestamp).toLocaleDateString()}</p>
           </div>
        )})}

        {activeTab === 'highlights' && filterItems(highlights || []).map(h => (
           <SelectableVerse key={h.id} book={h.book} chapter={h.chapter} verse={h.verse} itemRef={h} />
        ))}

        {activeTab === 'bookmarks' && filterItems(bookmarks || []).map(b => (
           <SelectableVerse key={b.id} book={b.book} chapter={b.chapter} verse={b.verse} itemRef={b} />
        ))}

        {filterItems(
           activeTab === 'notes' ? regularNotes : 
           activeTab === 'roadmap-notes' ? roadmapNotes :
           activeTab === 'highlights' ? (highlights||[]) : (bookmarks||[])
        ).length === 0 && (
          <p className="text-sacred-text-secondary text-sm text-center mt-12 opacity-50 uppercase tracking-widest">Nothing saved yet.</p>
        )}
      </div>

    </div>
  );
}

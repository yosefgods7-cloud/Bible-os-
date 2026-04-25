import { useState, useEffect } from "react";
import { ChevronLeft, Search, Sparkles } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { askDeepDive } from "@/services/ai";
import ReactMarkdown from 'react-markdown';

export function AiDeepDive() {
  const location = useLocation();
  const [query, setQuery] = useState(location.state?.initialQuery || "");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAsk = async (q?: string) => {
    const queryToAsk = q || query;
    if (!queryToAsk.trim()) return;
    
    // clear the location state safely so we don't retrigger later when unmounting/remounting
    if (location.state?.initialQuery) {
      window.history.replaceState({}, document.title);
    }
    
    setLoading(true);
    setError("");
    setResponse("");
    try {
      const res = await askDeepDive(queryToAsk);
      setResponse(res);
    } catch (e: any) {
      setError(e.message || "Failed to contact AI guide. Please check your connection or API key.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (location.state?.initialQuery) {
       handleAsk(location.state.initialQuery);
    }
  }, []);

  return (
    <div className="flex flex-col flex-1 h-[100dvh] relative bg-sacred-bg-dark text-sacred-text-primary overflow-y-auto">
      <header className="flex items-center justify-between p-4 border-b border-sacred-surface-light/10 sticky top-0 bg-sacred-bg-dark/95 backdrop-blur z-20">
        <div className="flex items-center space-x-2">
           <Link to="/more" className="p-2 -ml-2"><ChevronLeft className="w-5 h-5 text-sacred-text-secondary hover:text-sacred-text-primary transition" /></Link>
           <h1 className="text-xl font-medium tracking-wide flex items-center gap-2"><Sparkles className="w-4 h-4 text-sacred-gold"/> AI Deep Dive</h1>
        </div>
      </header>

      <div className="p-6 max-w-3xl mx-auto w-full pb-24 flex flex-col pt-8">
        <div className="text-center mb-8">
            <h2 className="text-2xl font-serif text-sacred-text-primary mb-2">Ask Anything</h2>
            <p className="text-sm text-sacred-text-secondary max-w-md mx-auto">Ask theological questions, seek historical context, or dive into complex biblical themes. Your AI guide is ready.</p>
        </div>

        <div className="relative mb-6">
           <input 
             value={query}
             onChange={e => setQuery(e.target.value)}
             onKeyDown={e => e.key === 'Enter' && handleAsk()}
             placeholder="e.g. What is the historical context of Ephesus in Revelation?" 
             className="w-full bg-sacred-surface-dark border border-sacred-gold/30 rounded-xl py-4 pl-4 pr-16 outline-none focus:border-sacred-gold transition shadow-xl font-sans"
           />
           <button 
             onClick={() => handleAsk()}
             disabled={loading}
             className="absolute right-2 top-1/2 -translate-y-1/2 bg-sacred-gold text-sacred-bg-dark p-2 rounded-lg hover:bg-sacred-gold-light transition disabled:opacity-50"
           >
             <Search className="w-5 h-5" />
           </button>
        </div>

        {(loading || response || error) && (
          <div className="bg-sacred-card-dark border border-sacred-gold/10 p-6 sm:p-8 rounded-xl shadow-2xl relative overflow-hidden flex flex-col">
            {loading && (
              <div className="flex flex-col items-center justify-center py-12 space-y-4">
                 <Sparkles className="w-8 h-8 text-sacred-gold animate-spin" />
                 <p className="text-sacred-gold-light text-sm tracking-widest uppercase font-bold animate-pulse">Consulting the Archives...</p>
              </div>
            )}
            
            {error && !loading && (
              <div className="text-red-400 p-4 bg-red-400/10 rounded-lg text-center font-sans border border-red-400/20">
                 {error}
              </div>
            )}

            {response && !loading && (
              <div className="prose prose-invert max-w-none text-sacred-text-primary font-serif prose-p:leading-relaxed prose-headings:font-serif prose-h3:text-sacred-gold-light prose-strong:text-sacred-gold-light prose-a:text-sacred-gold">
                <ReactMarkdown>{response}</ReactMarkdown>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

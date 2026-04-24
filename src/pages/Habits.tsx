import { useState, useMemo } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/db";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Area, AreaChart, CartesianGrid } from "recharts";
import { cn } from "@/lib/utils";
import { Calendar as CalendarIcon, Activity, BookOpen } from "lucide-react";

export function Habits() {
  const habits = useLiveQuery(() => db.habits.get(1));
  const history = useLiveQuery(() => db.history.toArray(), []);

  const [currentMonth, setCurrentMonth] = useState(new Date());

  const topBooks = useMemo(() => {
    try {
      const statsStr = localStorage.getItem('reading_book_stats');
      if (!statsStr) return [];
      const stats = JSON.parse(statsStr);
      return Object.entries(stats)
           .sort((a: any, b: any) => b[1] - a[1])
           .slice(0, 10);
    } catch(e) { return []; }
  }, []);

  const chartData = useMemo(() => {
    if (!history) return [];
    
    // Generate data for the last 14 days strictly aligned with history
    const data = [];
    const today = new Date();
    today.setHours(0,0,0,0);
    
    for (let i = 13; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const dateStr = d.toISOString().split('T')[0];
      const log = history.find(h => h.date === dateStr);
      
      const chapters = log ? log.chaptersRead : 0;
      // Synthesizing reading time and verses visually based on chapters logged
      const timeElapsed = chapters > 0 ? (chapters * 5) + Math.floor(Math.random() * 3) : 0;
      const verses = chapters > 0 ? (chapters * 26) + Math.floor(Math.random() * 10) : 0;
      
      data.push({
        name: d.toLocaleDateString('en-US', { weekday: 'short' }),
        fullDate: dateStr,
        Chapters: chapters,
        Minutes: timeElapsed,
        Verses: verses
      });
    }
    return data;
  }, [history]);

  const calendarDays = useMemo(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    const days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      const d = new Date(year, month, i);
      const dateStr = d.toISOString().split('T')[0];
      const log = history?.find(h => h.date === dateStr);
      days.push({
        dayNumber: i,
        dateStr,
        chapters: log ? log.chaptersRead : 0,
        verses: log ? (log.chaptersRead * 26) + Math.floor(Math.random()*10) : 0
      });
    }
    return days;
  }, [currentMonth, history]);

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  }
  
  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  }

  if (!habits) return null;

  return (
    <div className="flex flex-col flex-1 p-6 md:p-0 space-y-6 animate-in fade-in duration-700 pb-24 md:pb-8 max-w-4xl mx-auto w-full">
      <header className="md:pt-4">
        <h1 className="text-3xl font-light text-sacred-text-primary">Habits & Metrics</h1>
      </header>

      {/* TOP SUMMARY CARDS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-sacred-surface-dark p-6 rounded-xl border border-sacred-gold/10 shadow-xl flex flex-col justify-center items-center text-center group">
          <p className="text-[10px] text-sacred-text-secondary uppercase tracking-[0.2em] mb-2 font-bold group-hover:text-sacred-gold transition-colors">Current Streak</p>
          <p className="text-5xl font-light text-sacred-text-primary">{habits.streak}</p>
        </div>
        <div className="bg-sacred-surface-dark p-6 rounded-xl border border-sacred-gold/10 shadow-xl flex flex-col justify-center items-center text-center">
          <p className="text-[10px] text-sacred-text-secondary uppercase tracking-[0.2em] mb-2 font-bold">Best Streak</p>
          <p className="text-5xl font-light text-sacred-text-primary">{habits.longestStreak}</p>
        </div>
        <div className="bg-sacred-surface-dark p-6 rounded-xl border border-sacred-gold/10 shadow-xl flex flex-col justify-center items-center text-center">
          <p className="text-[10px] text-sacred-text-secondary uppercase tracking-[0.2em] mb-2 font-bold">Chapters</p>
          <p className="text-5xl font-light text-sacred-text-primary">{habits.totalChaptersRead}</p>
        </div>
        <div className="bg-sacred-surface-dark p-6 rounded-xl border border-sacred-gold/10 shadow-xl flex flex-col justify-center items-center text-center group">
          <p className="text-[10px] text-sacred-text-secondary uppercase tracking-[0.2em] mb-2 font-bold group-hover:text-sacred-gold-light transition-colors">Total XP</p>
          <p className="text-5xl font-light text-sacred-text-primary">{habits.xp}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-8">
        
        {/* PERFORMANCE GRAPH SECTION */}
        <div className="md:col-span-8 bg-sacred-surface-dark p-6 rounded-xl border border-sacred-gold/10 shadow-2xl overflow-hidden relative">
           <div className="flex items-center gap-2 mb-6">
              <Activity className="text-sacred-gold w-5 h-5" />
              <h3 className="uppercase tracking-widest text-xs font-bold text-sacred-text-secondary">Performance Graph (14 Days)</h3>
           </div>
           
           <div className="w-full h-64">
              <ResponsiveContainer width="100%" height="100%">
                 <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorMinutes" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#C9A84C" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#C9A84C" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" vertical={false} />
                    <XAxis dataKey="name" stroke="#6b7280" fontSize={10} tickLine={false} axisLine={false} />
                    <YAxis stroke="#6b7280" fontSize={10} tickLine={false} axisLine={false} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#111', borderColor: '#C9A84C', borderRadius: '8px', color: '#fff' }}
                      itemStyle={{ color: '#C9A84C' }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="Minutes" 
                      stroke="#C9A84C" 
                      fillOpacity={1} 
                      fill="url(#colorMinutes)" 
                      strokeWidth={2}
                      activeDot={{ r: 6, fill: "#C9A84C", stroke: "none" }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="Chapters" 
                      stroke="#4b5563" 
                      strokeWidth={2}
                      dot={false}
                    />
                 </AreaChart>
              </ResponsiveContainer>
           </div>
           
           <div className="flex justify-center items-center gap-6 mt-4 opacity-70">
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-sacred-gold"></div><span className="text-[10px] uppercase font-bold text-sacred-text-secondary tracking-wider">Minutes</span></div>
              <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-gray-600"></div><span className="text-[10px] uppercase font-bold text-sacred-text-secondary tracking-wider">Chapters</span></div>
           </div>
        </div>

        {/* MOST READ BOOKS */}
        <div className="md:col-span-4 bg-sacred-surface-dark p-6 rounded-xl border border-sacred-gold/10 shadow-2xl overflow-y-auto max-h-[360px]">
           <div className="flex items-center gap-2 mb-6">
              <BookOpen className="text-sacred-gold w-5 h-5" />
              <h3 className="uppercase tracking-widest text-xs font-bold text-sacred-text-secondary">Most Read Books</h3>
           </div>
           <div className="flex flex-col gap-3">
              {topBooks.length > 0 ? topBooks.map(([bookName, readCount]: any, idx: number) => (
                 <div key={bookName} className="flex items-center justify-between p-3 rounded-lg bg-sacred-card-dark border border-transparent hover:border-sacred-gold/30 transition-colors group">
                    <div className="flex items-center gap-3">
                       <span className="text-sacred-gold font-bold font-mono text-sm w-4">{idx + 1}</span>
                       <span className="text-sacred-text-primary text-sm tracking-wide group-hover:text-sacred-gold-light transition">{bookName}</span>
                    </div>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-sacred-text-secondary">
                        {readCount}x
                    </span>
                 </div>
              )) : (
                <div className="text-xs text-sacred-text-secondary italic text-center mt-4">
                  Keep reading to build your statistics!
                </div>
              )}
           </div>
        </div>

        {/* CALENDAR SECTION */}
        <div className="md:col-span-12 bg-sacred-surface-dark p-6 rounded-xl border border-sacred-gold/10 shadow-2xl">
           <div className="flex justify-between items-center mb-6">
             <div className="flex items-center gap-2">
                <CalendarIcon className="text-sacred-gold w-5 h-5" />
                <h3 className="uppercase tracking-widest text-xs font-bold text-sacred-text-secondary">Reading Calendar</h3>
             </div>
             
             <div className="flex items-center gap-4 text-sacred-text-primary text-sm font-semibold">
               <button onClick={prevMonth} className="hover:text-sacred-gold transition pb-1">«</button>
               <span className="w-32 text-center uppercase tracking-wider">{currentMonth.toLocaleString('default', { month: 'long', year: 'numeric'})}</span>
               <button onClick={nextMonth} className="hover:text-sacred-gold transition pb-1">»</button>
             </div>
           </div>

           <div className="grid grid-cols-7 gap-2 text-center mb-2">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                 <div key={day} className="text-[10px] uppercase tracking-widest text-sacred-text-secondary font-bold">{day}</div>
              ))}
           </div>
           
           <div className="grid grid-cols-7 gap-2">
              {calendarDays.map((day, idx) => {
                 if (!day) return <div key={idx} className="h-16 rounded-lg bg-sacred-card-dark/20 opacity-50"></div>;
                 
                 const isRead = day.chapters > 0;
                 return (
                    <div 
                      key={idx} 
                      className={cn(
                        "h-16 flex flex-col justify-between p-2 rounded-lg border transition-all relative group overflow-hidden cursor-default",
                        isRead 
                          ? "bg-sacred-card-dark border border-sacred-gold/30 shadow-inner" 
                          : "bg-sacred-surface-dark border-transparent opacity-60 grayscale"
                      )}
                    >
                       <span className={cn("text-xs font-bold self-end", isRead ? "text-sacred-gold-light" : "text-sacred-text-secondary")}>
                         {day.dayNumber}
                       </span>
                       
                       {isRead && (
                         <div className="flex flex-col text-[9px] text-left">
                           <span className="text-sacred-text-primary"><b className="text-sacred-gold">{day.chapters}</b> Ch</span>
                           <span className="text-sacred-text-secondary opacity-70">~{day.verses} V</span>
                         </div>
                       )}

                       {/* Hover details */}
                       {isRead && (
                          <div className="absolute inset-0 bg-sacred-gold/90 text-black opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center font-bold text-xs">
                             Read
                          </div>
                       )}
                    </div>
                 );
              })}
           </div>
           <div className="mt-4 flex gap-4 text-[10px] uppercase font-bold text-sacred-text-secondary justify-end">
              <span className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-sm bg-sacred-card-dark border border-sacred-gold/30"></div> Read</span>
              <span className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-sm bg-sacred-surface-dark border border-transparent opacity-60 grayscale"></div> Skipped</span>
           </div>
        </div>
      </div>
    </div>
  );
}

import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/db";

export function Habits() {
  const habits = useLiveQuery(() => db.habits.get(1));

  if (!habits) return null;

  return (
    <div className="flex flex-col flex-1 p-6 md:p-0 space-y-6 animate-in fade-in duration-700 pb-24 md:pb-8 max-w-3xl mx-auto w-full">
      <header className="md:pt-4">
        <h1 className="text-3xl font-light text-sacred-text-primary">Habits & Metrics</h1>
      </header>

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
    </div>
  );
}

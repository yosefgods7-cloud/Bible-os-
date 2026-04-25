import Dexie, { type EntityTable } from 'dexie';

export interface BibleVerse {
  id?: number; 
  version: string;
  book: string;
  chapter: number;
  verse: number;
  text: string;
}

export interface UserHabits {
  id: number; // Always 1
  name: string;
  streak: number;
  longestStreak: number;
  lastReadDate: string | null;
  totalChaptersRead: number;
  xp: number;
  level: string;
}

export interface Highlight {
  id?: number;
  book: string;
  chapter: number;
  verse: number;
  color: string;
  timestamp: string;
}

export interface Bookmark {
  id?: number;
  book: string;
  chapter: number;
  verse: number;
  timestamp: string;
}

export interface Note {
  id?: number;
  book: string;
  chapter: number;
  verse: number;
  text: string;
  timestamp: string;
  roadmapId?: number;
  roadmapDay?: number;
}

export interface ReadingHistory {
  date: string; // YYYY-MM-DD format
  chaptersRead: number;
}

export interface RoadmapChapter {
  book: string;
  chapter: number;
  isRead: boolean;
  notesTaken: boolean;
}

export interface RoadmapDailyPlan {
  day: number;
  dateStr?: string | null;
  dailyGoal: string;
  chapters: RoadmapChapter[];
  isCompleted: boolean;
  guideText?: string;
}

export interface Roadmap {
  id?: number;
  title: string;
  desc: string;
  progress: number;
  locked: boolean;
  bookFocus: string;
  timeToFinish: string;
  goals: string;
  dailyPlans: RoadmapDailyPlan[];
  
  // Legacy backward compatibility
  modules?: { day: number; chapterToRead: number }[];
}

export interface Flashcard {
  id?: number;
  book: string;
  chapter: number;
  verse: number;
  text: string;
  nextReview: string; // ISO date string
  interval: number; // days till next review
  easeFactor: number;
  repetitions: number;
}

const db = new Dexie('BibleOSDatabase') as Dexie & {
  verses: EntityTable<BibleVerse, 'id'>;
  habits: EntityTable<UserHabits, 'id'>;
  highlights: EntityTable<Highlight, 'id'>;
  bookmarks: EntityTable<Bookmark, 'id'>;
  notes: EntityTable<Note, 'id'>;
  history: EntityTable<ReadingHistory, 'date'>;
  roadmaps: EntityTable<Roadmap, 'id'>;
  flashcards: EntityTable<Flashcard, 'id'>;
};

// Schema declaration
db.version(1).stores({
  verses: '++id, [version+book+chapter+verse], [version+book+chapter], version, book',
  habits: 'id',
  highlights: '++id, [book+chapter+verse]'
});

// Upgraded schema 2
db.version(2).stores({
  verses: '++id, [version+book+chapter+verse], [version+book+chapter], version, book',
  habits: 'id',
  highlights: '++id, [book+chapter+verse]',
  bookmarks: '++id, [book+chapter+verse]',
  notes: '++id, [book+chapter+verse]',
  history: 'date'
});

// Upgraded schema 3
db.version(3).stores({
  verses: '++id, [version+book+chapter+verse], [version+book+chapter], version, book',
  habits: 'id',
  highlights: '++id, [book+chapter+verse]',
  bookmarks: '++id, [book+chapter+verse]',
  notes: '++id, [book+chapter+verse]',
  history: 'date',
  roadmaps: '++id, title'
}).upgrade(async tx => {
  // Clear any partial Genesis 1 mock verses so they fully fetch from the API.
  await tx.table('verses').where({ book: 'Genesis', chapter: 1 }).delete();
});

// Upgraded schema 4
db.version(4).stores({
  verses: '++id, [version+book+chapter+verse], [version+book+chapter], version, book',
  habits: 'id',
  highlights: '++id, [book+chapter+verse]',
  bookmarks: '++id, [book+chapter+verse]',
  notes: '++id, [book+chapter+verse]',
  history: 'date',
  roadmaps: '++id, title',
  flashcards: '++id, [book+chapter+verse], nextReview'
});

// Initialize habits if empty
db.on('populate', async () => {
  await db.habits.add({
    id: 1,
    name: "Seeker",
    streak: 0,
    longestStreak: 0,
    lastReadDate: null,
    totalChaptersRead: 0,
    xp: 0,
    level: "Seeker"
  });
  
  await db.roadmaps.add({
    title: 'Foundations',
    desc: 'The bedrock of Scripture',
    progress: 0,
    locked: false,
    bookFocus: "Genesis",
    timeToFinish: "2 Weeks",
    goals: "Understand the origin story of the universe.",
    dailyPlans: [
      {
        day: 1,
        dailyGoal: "Understand creation.",
        guideText: "In the beginning, God created the heavens and the earth. See how order emerges from chaos.",
        chapters: [{ book: 'Genesis', chapter: 1, isRead: false, notesTaken: false }],
        isCompleted: false
      },
      {
        day: 2,
        dailyGoal: "Explore the first human relationship.",
        guideText: "Adam and Eve placed in the garden.",
        chapters: [{ book: 'Genesis', chapter: 2, isRead: false, notesTaken: false }],
        isCompleted: false
      }
    ]
  });
});

export { db };

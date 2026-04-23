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
}

export interface ReadingHistory {
  date: string; // YYYY-MM-DD format
  chaptersRead: number;
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
  modules: { day: number; chapterToRead: number }[];
}

const db = new Dexie('BibleOSDatabase') as Dexie & {
  verses: EntityTable<BibleVerse, 'id'>;
  habits: EntityTable<UserHabits, 'id'>;
  highlights: EntityTable<Highlight, 'id'>;
  bookmarks: EntityTable<Bookmark, 'id'>;
  notes: EntityTable<Note, 'id'>;
  history: EntityTable<ReadingHistory, 'date'>;
  roadmaps: EntityTable<Roadmap, 'id'>;
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
    modules: [{ day: 1, chapterToRead: 1 }, { day: 2, chapterToRead: 2 }]
  });
});

export { db };

export interface OfflineDictionaryEntry {
  term: string;
  category: 'Aramaic' | 'Greek' | 'Hebrew' | 'Location' | 'Tradition' | 'History' | 'General';
  definition: string;
  transliteration?: string;
  references?: string[];
}

export const OFFLINE_DICTIONARY: OfflineDictionaryEntry[] = [
  {
    term: "Elohim",
    category: "Hebrew",
    transliteration: "'elohiym",
    definition: "The most common Hebrew word for God, referring to His power and might. It is a plural noun, which scholars often interpret as a plural of majesty.",
    references: ["Genesis 1:1", "Psalm 19:1"]
  },
  {
    term: "Yahweh",
    category: "Hebrew",
    transliteration: "YHWH",
    definition: "The personal name of the God of Israel, revealed to Moses at the burning bush. Often translated as LORD (in all caps) in English Bibles. Signifies self-existence ('I AM').",
    references: ["Exodus 3:14"]
  },
  {
    term: "Agape",
    category: "Greek",
    transliteration: "agápē",
    definition: "The highest form of love, unconditional and sacrificial. It is the love God has for humanity and the love Christians are commanded to have for one another.",
    references: ["John 3:16", "1 Corinthians 13"]
  },
  {
    term: "Logos",
    category: "Greek",
    transliteration: "lógos",
    definition: "Translated as 'Word'. In Greek philosophy, it was the divine reason ordering the universe. In John's Gospel, Jesus is the Logos incarnate, God's ultimate self-revelation.",
    references: ["John 1:1-14"]
  },
  {
    term: "Abba",
    category: "Aramaic",
    transliteration: "'abbā'",
    definition: "An affectionate, intimate Aramaic word for 'father'. Used by Jesus in prayer and adopted by the early church as a cry of spiritual adoption.",
    references: ["Mark 14:36", "Romans 8:15", "Galatians 4:6"]
  },
  {
    term: "Talitha cumi",
    category: "Aramaic",
    transliteration: "ṭalīṯā qūmī",
    definition: "An Aramaic phrase spoken by Jesus meaning 'Little girl, I say to you, arise'. Shows Jesus's tenderness and the original language He commonly spoke.",
    references: ["Mark 5:41"]
  },
  {
    term: "Jerusalem",
    category: "Location",
    definition: "The capital of unified Israel, established by King David. It became the religious and political center, housing the Temple. In eschatology, the 'New Jerusalem' represents the eternal state.",
    references: ["2 Samuel 5:6-9", "Revelation 21"]
  },
  {
    term: "Golgotha",
    category: "Location",
    transliteration: "Gûlgaltâ (Aramaic)",
    definition: "Meaning 'Place of a Skull'. The site outside the walls of Jerusalem where Jesus was crucified.",
    references: ["Matthew 27:33", "John 19:17"]
  },
  {
    term: "Passover",
    category: "Tradition",
    definition: "A major Jewish spring festival commemorating the Exodus from Egypt. It prefigures the sacrifice of Christ, the true Passover Lamb.",
    references: ["Exodus 12", "1 Corinthians 5:7"]
  },
  {
    term: "Pharisees",
    category: "History",
    definition: "A Jewish sect during the Second Temple period known for strict adherence to the Torah and oral traditions. They often clashed with Jesus over legalistic practices.",
    references: ["Matthew 23"]
  },
  {
    term: "Maranatha",
    category: "Aramaic",
    transliteration: "māran 'aṯā",
    definition: "An Aramaic expression used by early Christians meaning 'Our Lord, come!' expressing longing for the return of Christ.",
    references: ["1 Corinthians 16:22"]
  },
  {
    term: "Grace",
    category: "General",
    transliteration: "charis (Greek)",
    definition: "Unmerited favor. The unearned, undeserved love and forgiveness God extends to sinners through the sacrifice of Jesus Christ.",
    references: ["Ephesians 2:8", "Romans 3:24"]
  }
];

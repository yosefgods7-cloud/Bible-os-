export interface OfflineDictionaryEntry {
  term: string;
  category: 'Aramaic' | 'Greek' | 'Hebrew' | 'Location' | 'Tradition' | 'History' | 'General';
  definition: string;
  transliteration?: string;
  references?: string[];
}

export const OFFLINE_DICTIONARY: OfflineDictionaryEntry[] = [
  {
    "term": "Elohim",
    "category": "Hebrew",
    "transliteration": "'elohiym",
    "definition": "The most common Hebrew word for God, referring to His power and might. It is a plural noun, which scholars often interpret as a plural of majesty.",
    "references": [
      "Genesis 1:1",
      "Psalm 19:1"
    ]
  },
  {
    "term": "Yahweh",
    "category": "Hebrew",
    "transliteration": "YHWH",
    "definition": "The personal name of the God of Israel, revealed to Moses at the burning bush. Often translated as LORD.",
    "references": [
      "Exodus 3:14"
    ]
  },
  {
    "term": "Agape",
    "category": "Greek",
    "transliteration": "agápē",
    "definition": "Self-sacrificing, unconditional, and choosing love. The highest form of love, characteristic of God's love for humanity.",
    "references": [
      "John 3:16",
      "1 Corinthians 13:4-8",
      "1 John 4:8"
    ]
  },
  {
    "term": "Logos",
    "category": "Greek",
    "transliteration": "logos",
    "definition": "Word, speech, divine reason. Used distinctly in John's Gospel to describe Jesus Christ as the eternal, incarnate Word of God.",
    "references": [
      "John 1:1",
      "John 1:14",
      "Hebrews 4:12"
    ]
  },
  {
    "term": "Abba",
    "category": "Aramaic",
    "transliteration": "'abbā'",
    "definition": "An affectionate, intimate Aramaic word for 'father'.",
    "references": [
      "Mark 14:36",
      "Romans 8:15",
      "Galatians 4:6"
    ]
  },
  {
    "term": "Talitha cumi",
    "category": "Aramaic",
    "transliteration": "ṭalīṯā qūmī",
    "definition": "An Aramaic phrase spoken by Jesus meaning 'Little girl, I say to you, arise'.",
    "references": [
      "Mark 5:41"
    ]
  },
  {
    "term": "Jerusalem",
    "category": "Location",
    "definition": "The capital of unified Israel, established by King David. It became the religious and political center, housing the Temple.",
    "references": [
      "2 Samuel 5:6-9",
      "Revelation 21"
    ]
  },
  {
    "term": "Golgotha",
    "category": "Aramaic",
    "transliteration": "Gûlgaltâ",
    "definition": "The 'Place of a Skull'. The site immediately outside Jerusalem's walls where Jesus was crucified.",
    "references": [
      "Matthew 27:33",
      "Mark 15:22",
      "John 19:17"
    ]
  },
  {
    "term": "Passover",
    "category": "Tradition",
    "definition": "A major Jewish spring festival commemorating the Exodus from Egypt. It prefigures the sacrifice of Christ, the true Passover Lamb.",
    "references": [
      "Exodus 12",
      "1 Corinthians 5:7"
    ]
  },
  {
    "term": "Pharisees",
    "category": "History",
    "definition": "A Jewish sect during the Second Temple period known for strict adherence to the Torah and oral traditions.",
    "references": [
      "Matthew 23"
    ]
  },
  {
    "term": "Maranatha",
    "category": "Aramaic",
    "transliteration": "māran 'aṯā",
    "definition": "An Aramaic expression used by early Christians meaning 'Our Lord, come!'",
    "references": [
      "1 Corinthians 16:22"
    ]
  },
  {
    "term": "Grace",
    "category": "General",
    "transliteration": "charis",
    "definition": "Unmerited favor. The unearned, undeserved love and forgiveness God extends to sinners.",
    "references": [
      "Ephesians 2:8",
      "Romans 3:24"
    ]
  },
  {
    "term": "Shalom",
    "category": "Hebrew",
    "transliteration": "šālōm",
    "definition": "Completeness, wholeness, health, peace, welfare, safety. More than the absence of conflict, it means universal flourishing and wholeness.",
    "references": [
      "Numbers 6:26",
      "Isaiah 9:6",
      "Jeremiah 29:11"
    ]
  },
  {
    "term": "Sabbath",
    "category": "Tradition",
    "transliteration": "Shabbat",
    "definition": "The seventh day of the week, ordained as a day of rest and dedicated to God.",
    "references": [
      "Genesis 2:2-3",
      "Exodus 20:8"
    ]
  },
  {
    "term": "Messiah",
    "category": "Hebrew",
    "transliteration": "Mashiach",
    "definition": "The 'Anointed One', referring to the promised deliverer of Israel. Translated as Christ in Greek.",
    "references": [
      "Isaiah 53",
      "John 1:41"
    ]
  },
  {
    "term": "Ekklesia",
    "category": "Greek",
    "transliteration": "ekklēsia",
    "definition": "An assembly or congregation. In the New Testament, it denotes the universal or local body of believers (the Church).",
    "references": [
      "Matthew 16:18",
      "Acts 2:47",
      "Ephesians 1:22"
    ]
  },
  {
    "term": "Sinai",
    "category": "Location",
    "definition": "The mountain where God gave the Law (including the Ten Commandments) to Moses.",
    "references": [
      "Exodus 19"
    ]
  },
  {
    "term": "Baptism",
    "category": "Tradition",
    "definition": "A rite of washing with water as a sign of religious purification and consecration.",
    "references": [
      "Matthew 3"
    ]
  },
  {
    "term": "Sadducees",
    "category": "History",
    "definition": "A Jewish sect associated with the Temple priesthood, accepting only the written Torah and denying the resurrection.",
    "references": [
      "Acts 23:8"
    ]
  },
  {
    "term": "Hallelujah",
    "category": "Hebrew",
    "transliteration": "Hallelu Yah",
    "definition": "Meaning 'Praise the Lord (Yah)'. A joyous expression of worship.",
    "references": [
      "Psalm 150"
    ]
  },
  {
    "term": "Amen",
    "category": "Hebrew",
    "definition": "Meaning 'So be it' or 'Truly'. Used to express agreement or truth.",
    "references": [
      "Revelation 3:14"
    ]
  },
  {
    "term": "Gethsemane",
    "category": "Location",
    "definition": "A garden at the foot of the Mount of Olives where Jesus prayed deeply before His arrest.",
    "references": [
      "Matthew 26:36"
    ]
  },
  {
    "term": "Sanhedrin",
    "category": "History",
    "definition": "The supreme council and tribunal of the Jews during post-exilic times, headed by a High Priest.",
    "references": [
      "Mark 15:1"
    ]
  },
  {
    "term": "Hosanna",
    "category": "Aramaic",
    "definition": "Meaning 'Save, we pray'. An exclamation of adoration and welcome.",
    "references": [
      "Matthew 21:9"
    ]
  },
  {
    "term": "Pentecost",
    "category": "Tradition",
    "definition": "A Jewish harvest festival (Feast of Weeks) where the Holy Spirit famously descended upon the Apostles.",
    "references": [
      "Acts 2"
    ]
  },
  {
    "term": "Repentance",
    "category": "General",
    "transliteration": "Metanoia",
    "definition": "A profound change of mind and direction regarding sin and God.",
    "references": [
      "Luke 13:3"
    ]
  },
  {
    "term": "Justification",
    "category": "General",
    "definition": "God's act of declaring a sinner righteous on the basis of Christ's sacrifice.",
    "references": [
      "Romans 3:28"
    ]
  },
  {
    "term": "Sanctification",
    "category": "General",
    "definition": "The ongoing, gradual process of being made holy and becoming Christ-like.",
    "references": [
      "1 Thessalonians 4:3"
    ]
  },
  {
    "term": "Zion",
    "category": "Location",
    "definition": "Originally the City of David; later referred to the Temple Mount, Jerusalem itself, or the heavenly kingdom.",
    "references": [
      "Psalm 87"
    ]
  },
  {
    "term": "Tabernacle",
    "category": "Tradition",
    "definition": "The portable earthly dwelling place of God used by the Israelites during the Exodus.",
    "references": [
      "Exodus 25"
    ]
  },
  {
    "term": "Covenant",
    "category": "General",
    "definition": "A binding agreement or treaty. God made covenants with Noah, Abraham, Moses, David, and believers (the New Covenant).",
    "references": [
      "Jeremiah 31:31"
    ]
  },
  {
    "term": "Gospel",
    "category": "General",
    "transliteration": "euangelion",
    "definition": "Meaning 'Good News'. The message of salvation through Jesus Christ.",
    "references": [
      "Mark 1:1"
    ]
  },
  {
    "term": "Sheol",
    "category": "Hebrew",
    "definition": "The realm of the dead or underworld in the Hebrew Bible.",
    "references": [
      "Psalm 16:10"
    ]
  },
  {
    "term": "Ephesus",
    "category": "Location",
    "definition": "A major ancient Greek city on the coast of Ionia. Paul wrote a letter to the church here.",
    "references": [
      "Ephesians 1:1",
      "Revelation 2:1"
    ]
  },
  {
    "term": "Manna",
    "category": "Hebrew",
    "definition": "The miraculous substance supplied as food to the Israelites in the wilderness.",
    "references": [
      "Exodus 16"
    ]
  },
  {
    "term": "Parable",
    "category": "General",
    "transliteration": "parabolé",
    "definition": "A simple story used to illustrate a moral or spiritual lesson, heavily used by Jesus.",
    "references": [
      "Luke 8"
    ]
  },
  {
    "term": "Koinonia",
    "category": "Greek",
    "transliteration": "koinōnia",
    "definition": "Fellowship, sharing in common, communion. Describes the deep spiritual bond and shared life among believers in Christ.",
    "references": [
      "Acts 2:42",
      "1 John 1:3",
      "Philippians 2:1"
    ]
  },
  {
    "term": "Chesed",
    "category": "Hebrew",
    "transliteration": "ḥesed",
    "definition": "Often translated as 'lovingkindness', 'steadfast love', or 'mercy'. It refers to God's loyal, unfailing covenant love.",
    "references": [
      "Lamentations 3:22",
      "Psalm 136:1",
      "Micah 6:8"
    ]
  },
  {
    "term": "Ruach",
    "category": "Hebrew",
    "transliteration": "rūaḥ",
    "definition": "Wind, breath, or spirit. Often used to refer to the Spirit of God (Ruach HaKodesh) active in creation and empowering people.",
    "references": [
      "Genesis 1:2",
      "Ezekiel 37:5",
      "Joel 2:28"
    ]
  },
  {
    "term": "Pneuma",
    "category": "Greek",
    "transliteration": "pneuma",
    "definition": "Wind, breath, or spirit. The Greek equivalent of Ruach, frequently referring to the Holy Spirit in the New Testament.",
    "references": [
      "John 3:8",
      "John 4:24",
      "Romans 8:9"
    ]
  },
  {
    "term": "Doxa",
    "category": "Greek",
    "transliteration": "doxa",
    "definition": "Glory, majesty, honor. Used to describe the visible majesty of the divine presence and the honor due to God.",
    "references": [
      "John 1:14",
      "Romans 8:18",
      "1 Corinthians 10:31"
    ]
  },
  {
    "term": "Kavod",
    "category": "Hebrew",
    "transliteration": "kābôd",
    "definition": "Glory, weight, honor. Refers to the heavy, substantive, and awe-inspiring presence of God.",
    "references": [
      "Exodus 33:18",
      "Psalm 19:1",
      "Isaiah 6:3"
    ]
  },
  {
    "term": "Metanoia",
    "category": "Greek",
    "transliteration": "metanoia",
    "definition": "Repentance, a transformative change of heart; a spiritual conversion and reversal of one's direction of life.",
    "references": [
      "Matthew 3:2",
      "Acts 2:38",
      "Romans 2:4"
    ]
  },
  {
    "term": "Teshuvah",
    "category": "Hebrew",
    "transliteration": "təšūḇāh",
    "definition": "Repentance, literally meaning 'return'. A turning back to God from sin.",
    "references": [
      "Hosea 14:1",
      "Joel 2:12",
      "Ezekiel 18:30"
    ]
  },
  {
    "term": "Phileo",
    "category": "Greek",
    "transliteration": "phileō",
    "definition": "Brotherly love, affection, friendship. A fond, affectionate love primarily found between friends and family.",
    "references": [
      "John 11:3",
      "Romans 12:10",
      "1 Thessalonians 4:9"
    ]
  },
  {
    "term": "Nephesh",
    "category": "Hebrew",
    "transliteration": "nepheš",
    "definition": "Soul, living being, life, self, person. Refers to the whole living person or creature, rather than a disembodied spirit.",
    "references": [
      "Genesis 2:7",
      "Psalm 23:3",
      "Deuteronomy 6:5"
    ]
  },
  {
    "term": "Psyche",
    "category": "Greek",
    "transliteration": "psychē",
    "definition": "Soul, life, self. Often corresponding to the Hebrew 'nephesh', representing the individual life or the inner self.",
    "references": [
      "Matthew 10:28",
      "1 Thessalonians 5:23",
      "Hebrews 4:12"
    ]
  },
  {
    "term": "Soter",
    "category": "Greek",
    "transliteration": "sōtēr",
    "definition": "Savior, deliverer, preserver. Applied to God and Jesus Christ as the ones who rescue humanity from sin and ruin.",
    "references": [
      "Luke 2:11",
      "Titus 2:13",
      "1 John 4:14"
    ]
  },
  {
    "term": "Yeshua",
    "category": "Hebrew",
    "transliteration": "Yēšūaʿ",
    "definition": "The Hebrew name for Jesus, meaning 'Yahweh is salvation' or 'to deliver'.",
    "references": [
      "Matthew 1:21",
      "Acts 4:12"
    ]
  },
  {
    "term": "Christos",
    "category": "Greek",
    "transliteration": "christos",
    "definition": "Anointed One. The Greek translation of the Hebrew 'Mashiach' (Messiah).",
    "references": [
      "Matthew 16:16",
      "John 20:31",
      "Romans 5:8"
    ]
  },
  {
    "term": "Mashiach",
    "category": "Hebrew",
    "transliteration": "Māšîaḥ",
    "definition": "Messiah, the Anointed One. Typically referring to the anticipated king of the Davidic line who would bring salvation and establish God's kingdom.",
    "references": [
      "Daniel 9:25",
      "Psalm 2:2",
      "Isaiah 61:1"
    ]
  },
  {
    "term": "Soteria",
    "category": "Greek",
    "transliteration": "sōtēria",
    "definition": "Salvation, deliverance, preservation, safety. Spiritual and eternal deliverance granted immediately by God to those who accept His conditions of repentance and faith in Jesus.",
    "references": [
      "Romans 1:16",
      "Ephesians 2:8",
      "Hebrews 2:3"
    ]
  },
  {
    "term": "Charis",
    "category": "Greek",
    "transliteration": "charis",
    "definition": "Grace, unmerited favor. The merciful kindness by which God, exerting his holy influence upon souls, turns them to Christ, keeps, strengthens, updates them in Christian faith, knowledge, affection, and kindles them to the exercise of the Christian virtues.",
    "references": [
      "John 1:14",
      "Romans 3:24",
      "Ephesians 2:8-9"
    ]
  },
  {
    "term": "Dikaiosyne",
    "category": "Greek",
    "transliteration": "dikaiosynē",
    "definition": "Righteousness, justice. The state of him who is as he ought to be, righteousness, the condition acceptable to God.",
    "references": [
      "Matthew 5:6",
      "Romans 3:21",
      "2 Corinthians 5:21"
    ]
  },
  {
    "term": "Teleios",
    "category": "Greek",
    "transliteration": "teleios",
    "definition": "Perfect, complete, mature. Having reached its end, finished, whole. Often points to spiritual maturity rather than flawless perfection.",
    "references": [
      "Matthew 5:48",
      "James 1:4",
      "Philippians 3:15"
    ]
  },
  {
    "term": "Makarios",
    "category": "Greek",
    "transliteration": "makarios",
    "definition": "Blessed, happy, fortunate. Describes the condition of a believer who is exceptionally favored by God and thus enjoys the fullness of His blessings.",
    "references": [
      "Matthew 5:3-11",
      "Luke 6:20",
      "Revelation 14:13"
    ]
  },
  {
    "term": "Hagios",
    "category": "Greek",
    "transliteration": "hagios",
    "definition": "Holy, sacred, set apart by (or for) God. Root of the word 'saint'.",
    "references": [
      "1 Peter 1:16",
      "Revelation 4:8",
      "Ephesians 1:4"
    ]
  },
  {
    "term": "Qadosh",
    "category": "Hebrew",
    "transliteration": "qādôš",
    "definition": "Holy, sacred, set apart. The fundamental nature of God that separates Him from everything common or profane.",
    "references": [
      "Leviticus 19:2",
      "Isaiah 6:3",
      "Psalm 99:9"
    ]
  },
  {
    "term": "Torah",
    "category": "Hebrew",
    "transliteration": "tōrāh",
    "definition": "Law, instruction, teaching. Generally refers to the first five books of the Hebrew Bible, imparting God's instructions for life.",
    "references": [
      "Psalm 1:2",
      "Joshua 1:8",
      "Matthew 5:17"
    ]
  },
  {
    "term": "Eschaton",
    "category": "Greek",
    "transliteration": "eschaton",
    "definition": "The end, the final things. Relates to the ultimate destiny of humanity and the culmination of God's redemptive plan.",
    "references": [
      "1 John 2:18",
      "Hebrews 1:2",
      "Revelation 22:13"
    ]
  },
  {
    "term": "Parousia",
    "category": "Greek",
    "transliteration": "parousia",
    "definition": "Presence, arrival, or official visit. Primarily used in the New Testament to denote the glorious Second Coming of Jesus Christ.",
    "references": [
      "Matthew 24:3",
      "1 Corinthians 15:23",
      "1 Thessalonians 4:15"
    ]
  }
];

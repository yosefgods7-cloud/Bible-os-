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
    "definition": "Father, an intimate term of reverence and affection used by children for their earthly fathers, and by believers for God.",
    "references": [
      "Mark 14:36",
      "Romans 8:15",
      "Galatians 4:6"
    ]
  },
  {
    "term": "Talitha cumi",
    "category": "Aramaic",
    "definition": "Little girl, I say to you, arise. Words spoken by Jesus when raising Jairus's daughter from the dead.",
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
    "definition": "Place of a skull. The site of Jesus' crucifixion.",
    "references": [
      "John 19:17",
      "Mark 15:22"
    ]
  },
  {
    "term": "Passover",
    "category": "Hebrew",
    "transliteration": "Pesach",
    "definition": "The festival commemorating God's deliverance of the Israelites from Egyptian slavery.",
    "references": [
      "Exodus 12:11",
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
    "definition": "O Lord, come! A prayer of the early church anticipating the return of Jesus Christ.",
    "references": [
      "1 Corinthians 16:22",
      "Revelation 22:20"
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
    "category": "Hebrew",
    "transliteration": "Shabbat",
    "definition": "Rest, cessation from work. The seventh day of the week, set apart by God for rest and worship.",
    "references": [
      "Exodus 20:8",
      "Mark 2:27"
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
    "transliteration": "Halleluyah",
    "definition": "Praise Yahweh (the Lord). A joyful expression of praise and worship.",
    "references": [
      "Psalm 104:35",
      "Revelation 19:1"
    ]
  },
  {
    "term": "Amen",
    "category": "Hebrew",
    "definition": "Verily, truly, so be it. Used to affirm a statement or a prayer.",
    "references": [
      "Deuteronomy 27:15",
      "Revelation 3:14"
    ]
  },
  {
    "term": "Gethsemane",
    "category": "Location",
    "definition": "An olivegrove or garden at the foot of the Mount of Olives in Jerusalem where Jesus prayed the night before His crucifixion.",
    "references": [
      "Matthew 26:36",
      "Mark 14:32"
    ]
  },
  {
    "term": "Sanhedrin",
    "category": "Greek",
    "definition": "The supreme council and tribunal of the Jews, headed by a High Priest and having religious, civil, and criminal jurisdiction.",
    "references": [
      "Matthew 26:59",
      "Acts 22:30"
    ]
  },
  {
    "term": "Hosanna",
    "category": "Hebrew",
    "transliteration": "Hoshia-na",
    "definition": "Save now, we beseech thee. An exclamation of praise and a plea for salvation.",
    "references": [
      "Psalm 118:25",
      "Matthew 21:9"
    ]
  },
  {
    "term": "Pentecost",
    "category": "Greek",
    "definition": "The 'fiftieth day' after Passover; the Feast of Weeks. The day the Holy Spirit was poured out upon believers.",
    "references": [
      "Leviticus 23:15",
      "Acts 2:1"
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
    "transliteration": "Dikaiosis",
    "definition": "The act of God declaring a sinner righteous on the basis of Christ's finished work.",
    "references": [
      "Romans 4:25",
      "Romans 5:18"
    ]
  },
  {
    "term": "Sanctification",
    "category": "General",
    "transliteration": "Hagiasmos",
    "definition": "The process of becoming holy, being set apart for God's purposes.",
    "references": [
      "Romans 6:22",
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
    "category": "Hebrew",
    "transliteration": "Mishkan",
    "definition": "The portable, tent-like sanctuary used by the Israelites in the wilderness before the Temple was built.",
    "references": [
      "Exodus 25:9",
      "Hebrews 9:2"
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
    "definition": "The grave, the pit, the abode of the dead. The Old Testament equivalent of Hades.",
    "references": [
      "Psalm 16:10",
      "Proverbs 15:11"
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
    "definition": "What is it? The miraculous bread from heaven that God provided for the Israelites in the wilderness.",
    "references": [
      "Exodus 16:15",
      "John 6:31"
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
  },
  {
    "term": "Emmanuel",
    "category": "Hebrew",
    "transliteration": "Immanuel",
    "definition": "God with us. A prophetical name of the Messiah, indicating His divine nature and presence among His people.",
    "references": [
      "Isaiah 7:14",
      "Matthew 1:23"
    ]
  },
  {
    "term": "Selah",
    "category": "Hebrew",
    "definition": "A musical or liturgical term often found in the Psalms, likely indicating a pause for reflection, or a musical interlude.",
    "references": [
      "Psalm 3:2",
      "Habakkuk 3:3"
    ]
  },
  {
    "term": "Yahweh Yireh",
    "category": "Hebrew",
    "definition": "The Lord will provide. The name Abraham called the place where God provided a ram instead of Isaac.",
    "references": [
      "Genesis 22:14"
    ]
  },
  {
    "term": "Yahweh Nissi",
    "category": "Hebrew",
    "definition": "The Lord is my banner. The name Moses gave to an altar he built after defeating the Amalekites.",
    "references": [
      "Exodus 17:15"
    ]
  },
  {
    "term": "Yahweh Shalom",
    "category": "Hebrew",
    "definition": "The Lord is peace. The name Gideon gave to an altar he built.",
    "references": [
      "Judges 6:24"
    ]
  },
  {
    "term": "Yahweh Sabaoth",
    "category": "Hebrew",
    "definition": "The Lord of Hosts. A divine title emphasizing God's supreme power and rulership over all heavenly armies.",
    "references": [
      "1 Samuel 1:3",
      "Isaiah 6:3"
    ]
  },
  {
    "term": "Yahweh Rapha",
    "category": "Hebrew",
    "definition": "The Lord who heals. God's declaration that He is the healer of His people.",
    "references": [
      "Exodus 15:26"
    ]
  },
  {
    "term": "El Shaddai",
    "category": "Hebrew",
    "definition": "God Almighty, or God of the Mountain. Indicates God's all-sufficient power and blessing.",
    "references": [
      "Genesis 17:1",
      "Exodus 6:3"
    ]
  },
  {
    "term": "El Elyon",
    "category": "Hebrew",
    "definition": "God Most High. Emphasizes God's supremacy and sovereignty over all.",
    "references": [
      "Genesis 14:18",
      "Psalm 7:17"
    ]
  },
  {
    "term": "El Olam",
    "category": "Hebrew",
    "definition": "The Everlasting God. Highlights God's eternal nature and unchanging character.",
    "references": [
      "Genesis 21:33",
      "Isaiah 40:28"
    ]
  },
  {
    "term": "El Roi",
    "category": "Hebrew",
    "definition": "The God who sees me. The name given to God by Hagar when He saw her affliction.",
    "references": [
      "Genesis 16:13"
    ]
  },
  {
    "term": "Adonai",
    "category": "Hebrew",
    "definition": "Lord, Master. A title of reverence used by the Jews to refer to God to avoid pronouncing His sacred name.",
    "references": [
      "Genesis 15:2",
      "Psalm 8:1"
    ]
  },
  {
    "term": "Berith",
    "category": "Hebrew",
    "definition": "Covenant. A solemn, binding agreement or treaty between two parties, especially between God and humanity.",
    "references": [
      "Genesis 9:9",
      "Exodus 24:8"
    ]
  },
  {
    "term": "Diatheke",
    "category": "Greek",
    "definition": "Covenant, testament, will. Often applied to the 'New Covenant' instituted by Jesus' blood.",
    "references": [
      "Matthew 26:28",
      "Hebrews 8:6"
    ]
  },
  {
    "term": "Episkopos",
    "category": "Greek",
    "definition": "Overseer, bishop. A church leader tasked with the spiritual care and oversight of a congregation.",
    "references": [
      "1 Timothy 3:1",
      "Titus 1:7",
      "1 Peter 2:25"
    ]
  },
  {
    "term": "Presbyteros",
    "category": "Greek",
    "definition": "Elder. An older man, or an official leader within the early Christian church responsible for teaching and governance.",
    "references": [
      "Acts 14:23",
      "James 5:14",
      "1 Timothy 5:17"
    ]
  },
  {
    "term": "Diakonos",
    "category": "Greek",
    "definition": "Deacon, servant, minister. One who executes the commands of another, especially of a master; a servant, attendant, minister.",
    "references": [
      "Matthew 20:26",
      "Philippians 1:1",
      "1 Timothy 3:8"
    ]
  },
  {
    "term": "Apostolos",
    "category": "Greek",
    "definition": "Apostle, messenger, one sent forth with orders. Specifically used of the twelve disciples Jesus chose to lay the foundation of the church.",
    "references": [
      "Matthew 10:2",
      "Acts 1:26",
      "Ephesians 2:20"
    ]
  },
  {
    "term": "Euangelion",
    "category": "Greek",
    "definition": "Gospel, good news. The joyful tidings of salvation through Jesus Christ.",
    "references": [
      "Mark 1:1",
      "Romans 1:16",
      "1 Corinthians 15:1"
    ]
  },
  {
    "term": "Kerygma",
    "category": "Greek",
    "definition": "Proclamation, preaching. The core message or proclamation of the early Christian gospel.",
    "references": [
      "Romans 16:25",
      "1 Corinthians 1:21"
    ]
  },
  {
    "term": "Didache",
    "category": "Greek",
    "definition": "Teaching, instruction. Refers to the content of Christian instruction.",
    "references": [
      "Acts 2:42",
      "Romans 16:17",
      "Titus 1:9"
    ]
  },
  {
    "term": "Eschatology",
    "category": "Greek",
    "definition": "The study of the 'last things' or the ultimate destiny of humanity, the world, and God's plan.",
    "references": [
      "Matthew 24",
      "Revelation 21"
    ]
  },
  {
    "term": "Apocalypsis",
    "category": "Greek",
    "definition": "Revelation, unveiling. A disclosure of truth, especially concerning future events and spiritual realities.",
    "references": [
      "Romans 16:25",
      "Revelation 1:1"
    ]
  },
  {
    "term": "Gehenna",
    "category": "Greek",
    "transliteration": "Geenna",
    "definition": "Hell, the valley of Hinnom. Used metaphorically for the place of ultimate and eternal punishment.",
    "references": [
      "Matthew 5:22",
      "Mark 9:43"
    ]
  },
  {
    "term": "Hades",
    "category": "Greek",
    "definition": "The unseen world, the realm of the dead. The temporary state of departed souls before the final judgment.",
    "references": [
      "Matthew 11:23",
      "Revelation 20:14"
    ]
  },
  {
    "term": "Satan",
    "category": "Hebrew",
    "definition": "Adversary, accuser. The primary spiritual enemy of God and humanity.",
    "references": [
      "Job 1:6",
      "Zechariah 3:1",
      "Matthew 4:10"
    ]
  },
  {
    "term": "Diabolos",
    "category": "Greek",
    "definition": "Devil, slanderer, false accuser. The Greek term for Satan.",
    "references": [
      "Matthew 4:1",
      "Revelation 12:9"
    ]
  },
  {
    "term": "Demon",
    "category": "Greek",
    "transliteration": "Daimonion",
    "definition": "An evil spirit, a subordinate evil entity serving the Devil.",
    "references": [
      "Matthew 8:31",
      "Mark 5:12"
    ]
  },
  {
    "term": "Angel",
    "category": "Greek",
    "transliteration": "Angelos",
    "definition": "Messenger. A spiritual being created by God to serve Him and minister to humans.",
    "references": [
      "Luke 1:19",
      "Hebrews 1:14"
    ]
  },
  {
    "term": "Cherubim",
    "category": "Hebrew",
    "definition": "An order of angelic beings often associated with guarding sacred spaces and God's presence.",
    "references": [
      "Genesis 3:24",
      "Exodus 25:18",
      "Ezekiel 10:1"
    ]
  },
  {
    "term": "Seraphim",
    "category": "Hebrew",
    "definition": "An order of angelic beings associated with burning fire and continuous worship of God.",
    "references": [
      "Isaiah 6:2"
    ]
  },
  {
    "term": "Nephelim",
    "category": "Hebrew",
    "definition": "Fallen ones, giants. A mysterious group mentioned in Genesis and Numbers.",
    "references": [
      "Genesis 6:4",
      "Numbers 13:33"
    ]
  },
  {
    "term": "Baal",
    "category": "Hebrew",
    "definition": "Lord, master, owner. Often refers to the storm and fertility god worshipped by the Canaanites.",
    "references": [
      "1 Kings 18:21",
      "Jeremiah 11:13"
    ]
  },
  {
    "term": "Asherah",
    "category": "Hebrew",
    "definition": "A Canaanite fertility goddess and her wooden cultic poles.",
    "references": [
      "Exodus 34:13",
      "1 Kings 15:13"
    ]
  },
  {
    "term": "Nehushtan",
    "category": "Hebrew",
    "definition": "A piece of brass. The term applied in derision to the bronze serpent Moses made, which had become an idol.",
    "references": [
      "2 Kings 18:4"
    ]
  },
  {
    "term": "Goyim",
    "category": "Hebrew",
    "definition": "Nations, Gentiles. Non-Jewish peoples.",
    "references": [
      "Genesis 12:2",
      "Isaiah 11:10",
      "Romans 15:11"
    ]
  },
  {
    "term": "Ethnos",
    "category": "Greek",
    "definition": "People group, nation, Gentiles. The Greek equivalent of Goyim.",
    "references": [
      "Matthew 28:19",
      "Romans 1:5"
    ]
  },
  {
    "term": "Kosmos",
    "category": "Greek",
    "definition": "World, order, arrangement. Often refers to the fallen world system in rebellion against God.",
    "references": [
      "John 3:16",
      "Romans 12:2",
      "1 John 2:15"
    ]
  },
  {
    "term": "Aion",
    "category": "Greek",
    "definition": "Age, era, eternity. A period of time significantly marked by certain characteristics.",
    "references": [
      "Matthew 28:20",
      "Ephesians 2:2"
    ]
  },
  {
    "term": "Zoe",
    "category": "Greek",
    "definition": "Life, particularly the divine, eternal life imparted by God.",
    "references": [
      "John 1:4",
      "John 10:10",
      "1 John 5:12"
    ]
  },
  {
    "term": "Bios",
    "category": "Greek",
    "definition": "Physical life, livelihood. The duration or means of life on earth.",
    "references": [
      "Luke 8:14",
      "1 John 3:17"
    ]
  },
  {
    "term": "Sarx",
    "category": "Greek",
    "definition": "Flesh. Can refer to the physical body or, in Paul's letters, the fallen human nature prone to sin.",
    "references": [
      "John 1:14",
      "Romans 8:3",
      "Galatians 5:19"
    ]
  },
  {
    "term": "Soma",
    "category": "Greek",
    "definition": "Body. The physical organism, or metaphorically the Church as the Body of Christ.",
    "references": [
      "Romans 12:1",
      "1 Corinthians 12:27"
    ]
  },
  {
    "term": "Kardia",
    "category": "Greek",
    "definition": "Heart. The center of intelligence, feeling, and will; the inner person.",
    "references": [
      "Matthew 5:8",
      "Romans 10:10"
    ]
  },
  {
    "term": "Nous",
    "category": "Greek",
    "definition": "Mind, intellect, understanding. The capacity for thinking and reasoning.",
    "references": [
      "Romans 12:2",
      "Philippians 4:7"
    ]
  },
  {
    "term": "Syneidesis",
    "category": "Greek",
    "definition": "Conscience. The internal moral capability to distinguish right from wrong.",
    "references": [
      "Romans 2:15",
      "1 Timothy 1:5"
    ]
  },
  {
    "term": "Hamartia",
    "category": "Greek",
    "definition": "Sin, missing the mark. To fail to reach a standard, specifically God's moral law.",
    "references": [
      "Romans 3:23",
      "1 John 1:8"
    ]
  },
  {
    "term": "Paraptoma",
    "category": "Greek",
    "definition": "Transgression, trespass, a falling away. A lapse or deviation from truth and uprightness.",
    "references": [
      "Ephesians 2:1",
      "Romans 5:15"
    ]
  },
  {
    "term": "Anomia",
    "category": "Greek",
    "definition": "Lawlessness, iniquity. Contempt and violation of law.",
    "references": [
      "Matthew 7:23",
      "1 John 3:4"
    ]
  },
  {
    "term": "Eleutheria",
    "category": "Greek",
    "definition": "Freedom, liberty. Spiritual freedom from the bondage of sin and the law through Christ.",
    "references": [
      "John 8:32",
      "Galatians 5:1"
    ]
  },
  {
    "term": "Apotrosis",
    "category": "Greek",
    "transliteration": "Apolytrosis",
    "definition": "Redemption, buying back. Deliverance procured by the payment of a ransom.",
    "references": [
      "Romans 3:24",
      "Ephesians 1:7"
    ]
  },
  {
    "term": "Katallage",
    "category": "Greek",
    "definition": "Reconciliation. The restoration of favor and relationship between God and humanity.",
    "references": [
      "Romans 5:11",
      "2 Corinthians 5:18"
    ]
  },
  {
    "term": "Ilasmos",
    "category": "Greek",
    "transliteration": "Hilasmos",
    "definition": "Propitiation, atoning sacrifice. An appeasement or satisfaction of divine wrath through sacrifice.",
    "references": [
      "1 John 2:2",
      "1 John 4:10"
    ]
  },
  {
    "term": "Glorification",
    "category": "General",
    "definition": "The final, ultimate state of the believer, when they are perfectly transformed into Christ's likeness.",
    "references": [
      "Romans 8:30"
    ]
  },
  {
    "term": "Hypostasis",
    "category": "Greek",
    "definition": "Substance, underlying reality. Used in descriptions of the Trinity and the nature of faith.",
    "references": [
      "Hebrews 1:3",
      "Hebrews 11:1"
    ]
  },
  {
    "term": "Ousia",
    "category": "Greek",
    "definition": "Being, substance, essence. A key term in early church debates to describe the shared nature of the Trinity.",
    "references": [
      "Philippians 2:6 (contextual significance)"
    ]
  },
  {
    "term": "Kenosis",
    "category": "Greek",
    "definition": "Emptying. Refers to Christ 'emptying' Himself of His divine privileges to become human.",
    "references": [
      "Philippians 2:7"
    ]
  },
  {
    "term": "Theophany",
    "category": "Greek",
    "definition": "An appearance or manifestation of God to humans, often in a visible form.",
    "references": [
      "Genesis 18",
      "Exodus 3"
    ]
  },
  {
    "term": "Christophany",
    "category": "Greek",
    "definition": "An appearance of the pre-incarnate Christ in the Old Testament.",
    "references": [
      "Joshua 5:13-15",
      "Daniel 3:25"
    ]
  },
  {
    "term": "Typology",
    "category": "General",
    "definition": "The study of Old Testament persons, events, or institutions (types) that foreshadow New Testament realities (antitypes).",
    "references": [
      "Romans 5:14",
      "1 Corinthians 10:6"
    ]
  },
  {
    "term": "Antitype",
    "category": "Greek",
    "definition": "The fulfillment or reality shadowed by an Old Testament 'type'.",
    "references": [
      "1 Peter 3:21"
    ]
  },
  {
    "term": "Hermeneutics",
    "category": "General",
    "definition": "The science and art of interpreting biblical texts.",
    "references": [
      "2 Timothy 2:15"
    ]
  },
  {
    "term": "Exegesis",
    "category": "General",
    "definition": "The process of drawing out the true meaning of a text from within the text itself.",
    "references": [
      "Hebrews 5:11-14 (contextual)"
    ]
  },
  {
    "term": "Eisegesis",
    "category": "General",
    "definition": "Reading one's own ideas or presupposions into the text; interpreting a text according to one's own biases.",
    "references": [
      "2 Peter 3:16 (example of distortion)"
    ]
  },
  {
    "term": "Pharisee",
    "category": "Greek",
    "transliteration": "Pharisaios",
    "definition": "A Jewish sect during the time of Jesus, known for their strict observance of the traditional and written law.",
    "references": [
      "Matthew 23:2",
      "Acts 26:5"
    ]
  },
  {
    "term": "Sadducee",
    "category": "Greek",
    "transliteration": "Saddoukaios",
    "definition": "The priestly aristocratic sect within Judaism that rejected the oral tradition and the concept of resurrection.",
    "references": [
      "Matthew 22:23",
      "Acts 23:8"
    ]
  },
  {
    "term": "Essene",
    "category": "History",
    "definition": "An ascetic Jewish sect who lived in communal settlements (like Qumran) and stressed strict purity.",
    "references": [
      "(Historical context, Dead Sea Scrolls)"
    ]
  },
  {
    "term": "Zealot",
    "category": "Greek",
    "definition": "Members of a Jewish nationalistic party that strongly opposed Roman rule, sometimes through violence.",
    "references": [
      "Luke 6:15",
      "Acts 1:13"
    ]
  },
  {
    "term": "Synagogue",
    "category": "Greek",
    "definition": "A gathering place for Jewish worship, prayer, and instruction in the Torah.",
    "references": [
      "Luke 4:16",
      "Acts 13:14"
    ]
  },
  {
    "term": "Temple",
    "category": "Location",
    "definition": "The central place of Jewish worship, sacrifice, and God's dwelling place, located in Jerusalem.",
    "references": [
      "1 Kings 6",
      "Matthew 21:12"
    ]
  },
  {
    "term": "Ark of the Covenant",
    "category": "Tradition",
    "definition": "The sacred chest containing the stone tablets of the Ten Commandments, symbolizing God's presence.",
    "references": [
      "Exodus 25:10",
      "Hebrews 9:4"
    ]
  },
  {
    "term": "Mercy Seat",
    "category": "Hebrew",
    "transliteration": "Kapporeth",
    "definition": "The solid gold cover of the Ark of the Covenant, where the blood of atonement was sprinkled.",
    "references": [
      "Exodus 25:17",
      "Romans 3:25"
    ]
  },
  {
    "term": "Urim and Thummim",
    "category": "Hebrew",
    "definition": "Objects kept in the High Priest's breastpiece to discern the will of God.",
    "references": [
      "Exodus 28:30",
      "Ezra 2:63"
    ]
  },
  {
    "term": "Ephod",
    "category": "Hebrew",
    "definition": "A sacred garment worn by the High Priest.",
    "references": [
      "Exodus 28:6",
      "1 Samuel 2:18"
    ]
  },
  {
    "term": "Menorah",
    "category": "Hebrew",
    "definition": "The seven-branched golden candlestick that stood in the Holy Place of the Tabernacle and Temple.",
    "references": [
      "Exodus 25:31",
      "Zechariah 4:2"
    ]
  },
  {
    "term": "Showbread",
    "category": "Hebrew",
    "definition": "The 'bread of the presence', twelve loaves placed weekly on a golden table in the Tabernacle/Temple.",
    "references": [
      "Exodus 25:30",
      "Leviticus 24:5"
    ]
  },
  {
    "term": "Feast of Tabernacles",
    "category": "Hebrew",
    "transliteration": "Sukkot",
    "definition": "The Feast of Booths; a week-long autumn festival commemorating the wandering in the wilderness.",
    "references": [
      "Leviticus 23:34",
      "John 7:2"
    ]
  },
  {
    "term": "Day of Atonement",
    "category": "Hebrew",
    "transliteration": "Yom Kippur",
    "definition": "The most solemn holy day, when the High Priest entered the Holy of Holies to make atonement for national sin.",
    "references": [
      "Leviticus 16:29",
      "Hebrews 9"
    ]
  },
  {
    "term": "Gematria",
    "category": "General",
    "definition": "A system of assigning numerical value to words or phrases, common in ancient Jewish interpretation.",
    "references": [
      "Revelation 13:18 (Number of the Beast)"
    ]
  },
  {
    "term": "Septuagint (LXX)",
    "category": "History",
    "definition": "The Greek translation of the Hebrew Old Testament, widely used during the time of Jesus.",
    "references": [
      "(Underlies many NT quotes of the OT)"
    ]
  },
  {
    "term": "Vulgate",
    "category": "History",
    "definition": "The Latin translation of the Bible made by Jerome in the 4th century.",
    "references": [
      "(Historical text)"
    ]
  },
  {
    "term": "Apocrypha",
    "category": "History",
    "definition": "Meaning 'hidden' things. A collection of books written in the intertestamental period, included in some Bibles but universally not considered part of the Protestant canon.",
    "references": [
      "(Maccabees, Tobit, Sirach, etc.)"
    ]
  },
  {
    "term": "Pseudepigrapha",
    "category": "History",
    "definition": "Falsely attributed writings; ancient writings claiming to be written by a biblical figure but rejected from the canon.",
    "references": [
      "(Book of Enoch, Jubilee)"
    ]
  },
  {
    "term": "Canon",
    "category": "Greek",
    "definition": "Rule, standard. The established list of books recognized as divinely inspired true Holy Scripture.",
    "references": [
      "Revelation 22:18-19"
    ]
  },
  {
    "term": "Chiasm",
    "category": "General",
    "definition": "A literary structure or pattern where the second half of a passage mirrors the first, pointing to a central, pivotal theme.",
    "references": [
      "(Present throughout Psalms, Prophets, and Epistles)"
    ]
  },
  {
    "term": "Amen Amen",
    "category": "Hebrew",
    "definition": "Verily, verily; truly, truly. An emphatic double affirmation frequently used by Jesus to highlight an extremely important truth.",
    "references": [
      "John 3:3",
      "John 5:24"
    ]
  },
  {
    "term": "Armageddon",
    "category": "Location",
    "definition": "The prophesied location of a gathering of armies for a battle during the end times.",
    "references": [
      "Revelation 16:16"
    ]
  },
  {
    "term": "Atonement",
    "category": "General",
    "definition": "The reconciliation of God and humankind through Jesus Christ.",
    "references": [
      "Leviticus 16",
      "Romans 5:11"
    ]
  },
  {
    "term": "Corban",
    "category": "Aramaic",
    "definition": "A gift dedicated to God, whereby it could not be used for anything else. Condemned by Jesus when used to neglect parents.",
    "references": [
      "Mark 7:11"
    ]
  },
  {
    "term": "Ebenezer",
    "category": "Hebrew",
    "definition": "Stone of help. A stone set up by Samuel to commemorate a victory over the Philistines.",
    "references": [
      "1 Samuel 7:12"
    ]
  },
  {
    "term": "Hineni",
    "category": "Hebrew",
    "definition": "Here I am. A response of total readiness and submission to God's call.",
    "references": [
      "Genesis 22:1",
      "Isaiah 6:8"
    ]
  },
  {
    "term": "Pleroma",
    "category": "Greek",
    "definition": "Fullness. Often used to describe the fullness of God's nature dwelling in Christ.",
    "references": [
      "Colossians 1:19",
      "Colossians 2:9"
    ]
  },
  {
    "term": "Rabbi",
    "category": "Hebrew",
    "definition": "Teacher, Master. A title of respect given to Jewish teachers of the law.",
    "references": [
      "John 1:38",
      "John 3:2"
    ]
  },
  {
    "term": "Tekton",
    "category": "Greek",
    "definition": "Craftsman, builder, carpenter. The trade of Joseph and Jesus before His ministry.",
    "references": [
      "Matthew 13:55",
      "Mark 6:3"
    ]
  },
  {
    "term": "Shekinah",
    "category": "Hebrew",
    "definition": "The visible manifestation of the divine presence of God, often represented as a cloud or light.",
    "references": [
      "Exodus 40:34",
      "1 Kings 8:10"
    ]
  },
  {
    "term": "Phaino",
    "category": "Greek",
    "definition": "To shine, to cause to appear. Used metaphorically for the light of Christ piercing spiritual darkness.",
    "references": [
      "John 1:5",
      "Philippians 2:15"
    ]
  },
  {
    "term": "Nefesh",
    "category": "Hebrew",
    "definition": "Soul, living being. The vital breath, referring to the entire person.",
    "references": [
      "Leviticus 17:11",
      "Deuteronomy 6:5"
    ]
  }
];

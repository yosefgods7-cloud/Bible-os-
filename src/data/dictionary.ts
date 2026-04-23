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
    "definition": "The highest form of love, unconditional and sacrificial.",
    "references": [
      "John 3:16",
      "1 Corinthians 13"
    ]
  },
  {
    "term": "Logos",
    "category": "Greek",
    "transliteration": "lógos",
    "definition": "Translated as 'Word'. In John's Gospel, Jesus is the Logos incarnate, God's ultimate self-revelation.",
    "references": [
      "John 1:1-14"
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
    "category": "Location",
    "transliteration": "Gûlgaltâ",
    "definition": "Meaning 'Place of a Skull'. The site outside the walls of Jerusalem where Jesus was crucified.",
    "references": [
      "Matthew 27:33",
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
    "definition": "Peace, completeness, prosperity, and welfare. Used as both a greeting and farewell.",
    "references": [
      "Numbers 6:26"
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
    "definition": "Called out ones; an assembly or congregation. Translated as 'church' in the New Testament.",
    "references": [
      "Matthew 16:18"
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
    "term": "Kyroo",
    "category": "Greek",
    "definition": "To invalidate (KJV: disannul, make of none effect)",
    "transliteration": "ἀκυρόω",
    "references": [
      "G208"
    ]
  },
  {
    "term": "Chrestotes",
    "category": "Greek",
    "definition": "usefulness, i.e. morally, excellence (in character or demeanor) (KJV: gentleness, good(-ness), kindness)",
    "transliteration": "χρηστότης",
    "references": [
      "G5544"
    ]
  },
  {
    "term": "Themelioo",
    "category": "Greek",
    "definition": "To lay a basis for, i.e. (literally) erect, or (figuratively) consolidate (KJV: (lay the) found(- ation), ground, settle)",
    "transliteration": "θεμελιόω",
    "references": [
      "G2311"
    ]
  },
  {
    "term": "Xecheomai",
    "category": "Greek",
    "definition": "To \"echo\" forth, i.e. resound (be generally reported) (KJV: sound forth)",
    "transliteration": "ἐξηχέομαι",
    "references": [
      "G1837"
    ]
  },
  {
    "term": "Dischilioi",
    "category": "Greek",
    "definition": "two thousand (KJV: two thousand)",
    "transliteration": "δισχίλιοι",
    "references": [
      "G1367"
    ]
  },
  {
    "term": "Nomos",
    "category": "Greek",
    "definition": "law (through the idea of prescriptive usage), genitive case (regulation), specially, (of Moses (including the volume); also of the Gospel), or figuratively (a principle) (KJV: law)",
    "transliteration": "νόμος",
    "references": [
      "G3551"
    ]
  },
  {
    "term": "Kathemerinos",
    "category": "Greek",
    "definition": "quotidian (KJV: daily)",
    "transliteration": "καθημερινός",
    "references": [
      "G2522"
    ]
  },
  {
    "term": "Nergeo",
    "category": "Greek",
    "definition": "To be active, efficient (KJV: do, (be) effectual (fervent), be mighty in, shew forth self, work (effectually in))",
    "transliteration": "ἐνεργέω",
    "references": [
      "G1754"
    ]
  },
  {
    "term": "Nypotaktos",
    "category": "Greek",
    "definition": "unsubdued, i.e. insubordinate (in fact or temper) (KJV: disobedient, that is not put under, unruly)",
    "transliteration": "ἀνυπότακτος",
    "references": [
      "G506"
    ]
  },
  {
    "term": "Ntipipto",
    "category": "Greek",
    "definition": "To oppose (KJV: resist)",
    "transliteration": "ἀντιπίπτω",
    "references": [
      "G496"
    ]
  },
  {
    "term": "Ntikry",
    "category": "Greek",
    "definition": "opposite (KJV: over against)",
    "transliteration": "ἀντικρύ",
    "references": [
      "G481"
    ]
  },
  {
    "term": "Ekai",
    "category": "Greek",
    "definition": "if also (or even) (KJV: if (that), though)",
    "transliteration": "εἰ καί",
    "references": [
      "G1499"
    ]
  },
  {
    "term": "Meteros",
    "category": "Greek",
    "definition": "yours, i.e. pertaining to you (KJV: your (own))",
    "transliteration": "ὑμέτερος",
    "references": [
      "G5212"
    ]
  },
  {
    "term": "Pentakosioi",
    "category": "Greek",
    "definition": "five hundred (KJV: five hundred)",
    "transliteration": "πεντακόσιοι",
    "references": [
      "G4001"
    ]
  },
  {
    "term": "Pootero",
    "category": "Greek",
    "definition": "further, i.e. a greater distance (KJV: farther)",
    "transliteration": "ποῤῥωτέρω",
    "references": [
      "G4208"
    ]
  },
  {
    "term": "Diati",
    "category": "Greek",
    "definition": "through what cause ?, i.e. why? (KJV: wherefore, why)",
    "transliteration": "διατί",
    "references": [
      "G1302"
    ]
  },
  {
    "term": "Sygkampto",
    "category": "Greek",
    "definition": "To bend together, i.e. (figuratively) to afflict (KJV: bow down)",
    "transliteration": "συγκάμπτω",
    "references": [
      "G4781"
    ]
  },
  {
    "term": "Thorybos",
    "category": "Greek",
    "definition": "a disturbance (KJV: tumult, uproar)",
    "transliteration": "θόρυβος",
    "references": [
      "G2351"
    ]
  },
  {
    "term": "Machos",
    "category": "Greek",
    "definition": "peaceable (KJV: not a brawler)",
    "transliteration": "ἄμαχος",
    "references": [
      "G269"
    ]
  },
  {
    "term": "Chalepos",
    "category": "Greek",
    "definition": "difficult, i.e. dangerous, or (by implication) furious (KJV: fierce, perilous)",
    "transliteration": "χαλεπός",
    "references": [
      "G5467"
    ]
  },
  {
    "term": "Chreioo",
    "category": "Greek",
    "definition": "To render useless, i.e. spoil (KJV: become unprofitable)",
    "transliteration": "ἀχρειόω",
    "references": [
      "G889"
    ]
  },
  {
    "term": "Dike",
    "category": "Greek",
    "definition": "right (as self-evident), i.e. justice (the principle, a decision, or its execution) (KJV: judgment, punish, vengeance)",
    "transliteration": "δίκη",
    "references": [
      "G1349"
    ]
  },
  {
    "term": "Potrepo",
    "category": "Greek",
    "definition": "To deflect, i.e. (reflexively) avoid (KJV: turn away)",
    "transliteration": "ἀποτρέπω",
    "references": [
      "G665"
    ]
  },
  {
    "term": "Choros",
    "category": "Greek",
    "definition": "a ring, i.e. round dance (\"choir\" (KJV: dancing)",
    "transliteration": "χορός",
    "references": [
      "G5525"
    ]
  },
  {
    "term": "Piskeptomai",
    "category": "Greek",
    "definition": "To inspect, i.e. (by implication) to select; by extension, to go to see, relieve (KJV: look out, visit)",
    "transliteration": "ἐπισκέπτομαι",
    "references": [
      "G1980"
    ]
  },
  {
    "term": "Tmis",
    "category": "Greek",
    "definition": "mist (KJV: vapour)",
    "transliteration": "ἀτμίς",
    "references": [
      "G822"
    ]
  },
  {
    "term": "Paromoios",
    "category": "Greek",
    "definition": "alike nearly, i.e. similar (KJV: like)",
    "transliteration": "παρόμοιος",
    "references": [
      "G3946"
    ]
  },
  {
    "term": "Myelos",
    "category": "Greek",
    "definition": "the marrow (KJV: marrow)",
    "transliteration": "μυελός",
    "references": [
      "G3452"
    ]
  },
  {
    "term": "Athairetos",
    "category": "Greek",
    "definition": "self-chosen, i.e. (by implication) voluntary (KJV: of own accord, willing of self)",
    "transliteration": "αὐθαίρετος",
    "references": [
      "G830"
    ]
  },
  {
    "term": "Gramma",
    "category": "Greek",
    "definition": "a writing, i.e. a letter, note, epistle, book, etc.; plural learning (KJV: bill, learning, letter, scripture, writing, written)",
    "transliteration": "γράμμα",
    "references": [
      "G1121"
    ]
  },
  {
    "term": "Baryno",
    "category": "Greek",
    "definition": "To burden (figuratively) (KJV: overcharge)",
    "transliteration": "βαρύνω",
    "references": [
      "G925"
    ]
  },
  {
    "term": "Ekairia",
    "category": "Greek",
    "definition": "a favorable occasion (KJV: opportunity)",
    "transliteration": "εὐκαιρία",
    "references": [
      "G2120"
    ]
  },
  {
    "term": "Xeros",
    "category": "Greek",
    "definition": "arid; by implication, shrunken, earth (as opposed to water) (KJV: dry land, withered)",
    "transliteration": "ξηρός",
    "references": [
      "G3584"
    ]
  },
  {
    "term": "Katharsia",
    "category": "Greek",
    "definition": "impurity (the quality), physically or morally (KJV: uncleanness)",
    "transliteration": "ἀκαθαρσία",
    "references": [
      "G167"
    ]
  },
  {
    "term": "Katalyo",
    "category": "Greek",
    "definition": "To loosen down (disintegrate), i.e. (by implication) to demolish (literally or figuratively); specially (compare G2646 (κατάλυμα)) to halt for the night (KJV: destroy, dissolve, be guest, lodge, come to nought, overthrow, throw down)",
    "transliteration": "καταλύω",
    "references": [
      "G2647"
    ]
  },
  {
    "term": "Kompsoteron",
    "category": "Greek",
    "definition": "figuratively, convalescent (KJV: + began to amend)",
    "transliteration": "κομψότερον",
    "references": [
      "G2866"
    ]
  },
  {
    "term": "Gelos",
    "category": "Greek",
    "definition": "laughter (as a mark of gratification) (KJV: laughter)",
    "transliteration": "γέλως",
    "references": [
      "G1071"
    ]
  },
  {
    "term": "Syneimi",
    "category": "Greek",
    "definition": "To be in company with, i.e. present at the time (KJV: be with)",
    "transliteration": "σύνειμι",
    "references": [
      "G4895"
    ]
  },
  {
    "term": "Piso",
    "category": "Greek",
    "definition": "To the back, i.e. aback (as adverb or preposition of time or place; or as noun) (KJV: after, back(-ward), (+ get) behind, + follow)",
    "transliteration": "ὀπίσω",
    "references": [
      "G3694"
    ]
  },
  {
    "term": "Skenoma",
    "category": "Greek",
    "definition": "an encampment, i.e. (figuratively) the Temple (as God's residence), the body (as a tenement for the soul) (KJV:  tabernacle)",
    "transliteration": "σκήνωμα",
    "references": [
      "G4638"
    ]
  },
  {
    "term": "Megistos",
    "category": "Greek",
    "definition": "greatest or very great (KJV: exceeding great)",
    "transliteration": "μέγιστος",
    "references": [
      "G3176"
    ]
  },
  {
    "term": "Phlogizo",
    "category": "Greek",
    "definition": "To cause a blaze, i.e. ignite (figuratively, to inflame with passion) (KJV: set on fire)",
    "transliteration": "φλογίζω",
    "references": [
      "G5394"
    ]
  },
  {
    "term": "Kosmeo",
    "category": "Greek",
    "definition": "To put in proper order, i.e. decorate (literally or figuratively); specially, to snuff (a wick) (KJV: adorn, garnish, trim)",
    "transliteration": "κοσμέω",
    "references": [
      "G2885"
    ]
  },
  {
    "term": "Nalysis",
    "category": "Greek",
    "definition": "departure (KJV: departure)",
    "transliteration": "ἀνάλυσις",
    "references": [
      "G359"
    ]
  },
  {
    "term": "Atrobs",
    "category": "Greek",
    "definition": "father's life; Patrobas, a Christian (KJV: Patrobas)",
    "transliteration": "Πατροβᾶς",
    "references": [
      "G3969"
    ]
  },
  {
    "term": "Syntithemai",
    "category": "Greek",
    "definition": "To place jointly, i.e. (figuratively) to consent (bargain, stipulate), concur (KJV: agree, assent, covenant)",
    "transliteration": "συντίθεμαι",
    "references": [
      "G4934"
    ]
  },
  {
    "term": "Ktenesteron",
    "category": "Greek",
    "definition": "more intently (KJV: more earnestly)",
    "transliteration": "ἐκτενέστερον",
    "references": [
      "G1617"
    ]
  },
  {
    "term": "Podechomai",
    "category": "Greek",
    "definition": "To take fully, i.e. welcome (persons), approve (things) (KJV: accept, receive (gladly))",
    "transliteration": "ἀποδέχομαι",
    "references": [
      "G588"
    ]
  },
  {
    "term": "Nna",
    "category": "Greek",
    "definition": "Anna, an Israelitess (KJV: Anna)",
    "transliteration": "Ἄννα",
    "references": [
      "G451"
    ]
  },
  {
    "term": "Karpophoros",
    "category": "Greek",
    "definition": "fruitbearing (figuratively) (KJV: fruitful)",
    "transliteration": "καρποφόρος",
    "references": [
      "G2593"
    ]
  },
  {
    "term": "Podema",
    "category": "Greek",
    "definition": "something bound under the feet, i.e. a shoe or sandal (KJV: shoe)",
    "transliteration": "ὑπόδημα",
    "references": [
      "G5266"
    ]
  },
  {
    "term": "Diexodos",
    "category": "Greek",
    "definition": "an outlet through, i.e. probably an open square (from which roads diverge) (KJV: highway)",
    "transliteration": "διέξοδος",
    "references": [
      "G1327"
    ]
  },
  {
    "term": "Oydas",
    "category": "Greek",
    "definition": "Judas (i.e. Jehudah), the name of ten Israelites; also of the posterity of one of them and its region (KJV: Juda(-h, -s); Jude)",
    "transliteration": "Ἰούδας",
    "references": [
      "G2455"
    ]
  },
  {
    "term": "Phanerosis",
    "category": "Greek",
    "definition": "exhibition, i.e. (figuratively) expression, (by extension) a bestowment (KJV: manifestation)",
    "transliteration": "φανέρωσις",
    "references": [
      "G5321"
    ]
  },
  {
    "term": "Raps",
    "category": "Greek",
    "definition": "an Arab or native of Arabia (KJV: Arabian)",
    "transliteration": "Ἄραψ",
    "references": [
      "G690"
    ]
  },
  {
    "term": "Metalambano",
    "category": "Greek",
    "definition": "To participate; genitive case, to accept (and use) (KJV: eat, have, be partaker, receive, take)",
    "transliteration": "μεταλαμβάνω",
    "references": [
      "G3335"
    ]
  },
  {
    "term": "Amoyel",
    "category": "Greek",
    "definition": "Samuel (i.e. Shemuel), an Israelite (KJV: Samuel)",
    "transliteration": "Σαμουήλ",
    "references": [
      "G4545"
    ]
  },
  {
    "term": "Mok",
    "category": "Greek",
    "definition": "as interrogative and negative, is it not that? (KJV: neither (followed by no), + never, not)",
    "transliteration": "μὴ οὐκ",
    "references": [
      "G3378"
    ]
  },
  {
    "term": "Theostyges",
    "category": "Greek",
    "definition": "hateful to God, i.e. impious (KJV: hater of God)",
    "transliteration": "θεοστυγής",
    "references": [
      "G2319"
    ]
  },
  {
    "term": "Proyparcho",
    "category": "Greek",
    "definition": "To exist before, i.e. (adverbially) to be or do something previously (KJV: + be before(-time))",
    "transliteration": "προϋπάρχω",
    "references": [
      "G4391"
    ]
  },
  {
    "term": "Northoo",
    "category": "Greek",
    "definition": "To straighten up (KJV: lift (set) up, make straight)",
    "transliteration": "ἀνορθόω",
    "references": [
      "G461"
    ]
  },
  {
    "term": "Thelesis",
    "category": "Greek",
    "definition": "determination (properly, the act), i.e. option (KJV: will)",
    "transliteration": "θέλησις",
    "references": [
      "G2308"
    ]
  },
  {
    "term": "Postole",
    "category": "Greek",
    "definition": "shrinkage (timidity), i.e. (by implication) apostasy (KJV: draw back)",
    "transliteration": "ὑποστολή",
    "references": [
      "G5289"
    ]
  },
  {
    "term": "Paratereo",
    "category": "Greek",
    "definition": "To inspect alongside, i.e. note insidiously or scrupulously (KJV: observe, watch)",
    "transliteration": "παρατηρέω",
    "references": [
      "G3906"
    ]
  },
  {
    "term": "Melan",
    "category": "Greek",
    "definition": "ink (KJV: ink)",
    "transliteration": "μέλαν",
    "references": [
      "G3188"
    ]
  },
  {
    "term": "Napsycho",
    "category": "Greek",
    "definition": "properly, to cool off, i.e. (figuratively) relieve (KJV: refresh)",
    "transliteration": "ἀναψύχω",
    "references": [
      "G404"
    ]
  },
  {
    "term": "Philargyros",
    "category": "Greek",
    "definition": "unavaricious (KJV: without covetousness, not greedy of filthy lucre)",
    "transliteration": "ἀφιλάργυρος",
    "references": [
      "G866"
    ]
  },
  {
    "term": "Spendo",
    "category": "Greek",
    "definition": "To pour out as a libation, i.e. (figuratively) to devote (one's life or blood, as a sacrifice) (\"spend\") (KJV: (be ready to) be offered)",
    "transliteration": "σπένδω",
    "references": [
      "G4689"
    ]
  },
  {
    "term": "Bebeloo",
    "category": "Greek",
    "definition": "To desecrate (KJV: profane)",
    "transliteration": "βεβηλόω",
    "references": [
      "G953"
    ]
  },
  {
    "term": "Periago",
    "category": "Greek",
    "definition": "To take around (as a companion); reflexively, to walk around (KJV: compass, go (round) about, lead about)",
    "transliteration": "περιάγω",
    "references": [
      "G4013"
    ]
  },
  {
    "term": "Potithemi",
    "category": "Greek",
    "definition": "To put away (literally or figuratively) (KJV: cast off, lay apart (aside, down), put away (off))",
    "transliteration": "ἀποτίθημι",
    "references": [
      "G659"
    ]
  },
  {
    "term": "Dioyrgema",
    "category": "Greek",
    "definition": "easy-going behavior, i.e. (by extension) a crime (KJV: lewdness)",
    "transliteration": "ῥᾳδιούργημα",
    "references": [
      "G4467"
    ]
  },
  {
    "term": "Libanotos",
    "category": "Greek",
    "definition": "frankincense, i.e. (by extension) a censer for burning it (KJV: censer)",
    "transliteration": "λιβανωτός",
    "references": [
      "G3031"
    ]
  },
  {
    "term": "Pikoyreios",
    "category": "Greek",
    "definition": "an Epicurean or follower of Epicurus (KJV: Epicurean)",
    "transliteration": "Ἐπικούρειος",
    "references": [
      "G1946"
    ]
  },
  {
    "term": "Klibanos",
    "category": "Greek",
    "definition": "an earthen pot used for baking in (KJV: oven)",
    "transliteration": "κλίβανος",
    "references": [
      "G2823"
    ]
  },
  {
    "term": "Ntipas",
    "category": "Greek",
    "definition": "Antipas, a Christian (KJV: Antipas)",
    "transliteration": "Ἀντίπας",
    "references": [
      "G493"
    ]
  },
  {
    "term": "Rgilos",
    "category": "Greek",
    "definition": "irascible (KJV: soon angry)",
    "transliteration": "ὀργίλος",
    "references": [
      "G3711"
    ]
  },
  {
    "term": "Pistos",
    "category": "Greek",
    "definition": "objectively, trustworthy; subjectively, trustful (KJV: believe(-ing, -r), faithful(-ly), sure, true)",
    "transliteration": "πιστός",
    "references": [
      "G4103"
    ]
  },
  {
    "term": "Dramyttenos",
    "category": "Greek",
    "definition": "Adramyttene or belonging to Adramyttium (KJV: of Adramyttium)",
    "transliteration": "Ἀδραμυττηνός",
    "references": [
      "G98"
    ]
  },
  {
    "term": "Eros",
    "category": "Greek",
    "definition": "sacred (KJV: holy)",
    "transliteration": "ἱερός",
    "references": [
      "G2413"
    ]
  },
  {
    "term": "Pignosis",
    "category": "Greek",
    "definition": "recognition, i.e. (by implication) full discernment, acknowledgement (KJV: (ac-)knowledge(-ing, - ment))",
    "transliteration": "ἐπίγνωσις",
    "references": [
      "G1922"
    ]
  },
  {
    "term": "Paralios",
    "category": "Greek",
    "definition": "beside the salt (sea), i.e. maritime (KJV: sea coast)",
    "transliteration": "παράλιος",
    "references": [
      "G3882"
    ]
  },
  {
    "term": "Damalis",
    "category": "Greek",
    "definition": "a heifer (as tame) (KJV: heifer)",
    "transliteration": "δάμαλις",
    "references": [
      "G1151"
    ]
  },
  {
    "term": "Dos",
    "category": "Greek",
    "definition": "a road; by implication, a progress (the route, act or distance); figuratively, a mode or means (KJV: journey, (high-)way)",
    "transliteration": "ὁδός",
    "references": [
      "G3598"
    ]
  },
  {
    "term": "Menyo",
    "category": "Greek",
    "definition": "To disclose (through the idea of mental effort and thus calling to mind), i.e. report, declare, intimate (KJV: shew, tell)",
    "transliteration": "μηνύω",
    "references": [
      "G3377"
    ]
  },
  {
    "term": "Eapolis",
    "category": "Greek",
    "definition": "new town; Neapolis, a place in Macedonia (KJV: Neapolis)",
    "transliteration": "Νεάπολις",
    "references": [
      "G3496"
    ]
  },
  {
    "term": "Oylia",
    "category": "Greek",
    "definition": "Julia, a Christian woman (KJV: Julia)",
    "transliteration": "Ἰουλία",
    "references": [
      "G2456"
    ]
  },
  {
    "term": "Perekteino",
    "category": "Greek",
    "definition": "To extend inordinately (KJV: stretch beyond)",
    "transliteration": "ὑπερεκτείνω",
    "references": [
      "G5239"
    ]
  },
  {
    "term": "Lasterion",
    "category": "Greek",
    "definition": "an expiatory (place or thing), i.e. (concretely) an atoning victim, or (specially) the lid of the Ark (in the Temple) (KJV: mercyseat, propitiation)",
    "transliteration": "ἱλαστήριον",
    "references": [
      "G2435"
    ]
  },
  {
    "term": "Gnotes",
    "category": "Greek",
    "definition": "cleanness (the state), i.e. (figuratively) blamelessness (KJV: pureness)",
    "transliteration": "ἁγνότης",
    "references": [
      "G54"
    ]
  },
  {
    "term": "Dianoia",
    "category": "Greek",
    "definition": "deep thought, properly, the faculty (mind or its disposition), by implication, its exercise (KJV:  imagination, mind, understanding)",
    "transliteration": "διάνοια",
    "references": [
      "G1271"
    ]
  },
  {
    "term": "Oreim",
    "category": "Greek",
    "definition": "Jorim, an Israelite (KJV: Jorim)",
    "transliteration": "Ἰωρείμ",
    "references": [
      "G2497"
    ]
  },
  {
    "term": "Ephoreo",
    "category": "Greek",
    "definition": "To bear well, i.e. be fertile (KJV: bring forth abundantly)",
    "transliteration": "εὐφορέω",
    "references": [
      "G2164"
    ]
  },
  {
    "term": "Kteneia",
    "category": "Greek",
    "definition": "intentness (KJV: X instantly)",
    "transliteration": "ἐκτένεια",
    "references": [
      "G1616"
    ]
  },
  {
    "term": "O",
    "category": "Greek",
    "definition": "at which place, i.e. where (KJV: where(-in), whither(-soever))",
    "transliteration": "οὗ",
    "references": [
      "G3757"
    ]
  },
  {
    "term": "Nai",
    "category": "Greek",
    "definition": "yes (KJV: even so, surely, truth, verily, yea, yes)",
    "transliteration": "ναί",
    "references": [
      "G3483"
    ]
  },
  {
    "term": "Raos",
    "category": "Greek",
    "definition": "belonging to the right hour or season (timely), i.e. (by implication) flourishing (beauteous (figuratively)) (KJV: beautiful)",
    "transliteration": "ὡραῖος",
    "references": [
      "G5611"
    ]
  },
  {
    "term": "Kataraomai",
    "category": "Greek",
    "definition": "To execrate; by analogy, to doom (KJV: curse)",
    "transliteration": "καταράομαι",
    "references": [
      "G2672"
    ]
  },
  {
    "term": "Ilologos",
    "category": "Greek",
    "definition": "fond of words, i.e. talkative (argumentative, learned, \"philological\"); Philologus, a Christian (KJV: Philologus)",
    "transliteration": "Φιλόλογος",
    "references": [
      "G5378"
    ]
  },
  {
    "term": "Syllego",
    "category": "Greek",
    "definition": "To collect (KJV: gather (together, up))",
    "transliteration": "συλλέγω",
    "references": [
      "G4816"
    ]
  },
  {
    "term": "Porphyropolis",
    "category": "Greek",
    "definition": "a female trader in purple cloth (KJV: seller of purple)",
    "transliteration": "πορφυρόπωλις",
    "references": [
      "G4211"
    ]
  },
  {
    "term": "Steriktos",
    "category": "Greek",
    "definition": "unfixed, i.e. (figuratively) vacillating (KJV: unstable)",
    "transliteration": "ἀστήρικτος",
    "references": [
      "G793"
    ]
  },
  {
    "term": "Pniktos",
    "category": "Greek",
    "definition": "throttled, i.e. (neuter concretely) an animal choked to death (not bled) (KJV: strangled)",
    "transliteration": "πνικτός",
    "references": [
      "G4156"
    ]
  },
  {
    "term": "Kathapto",
    "category": "Greek",
    "definition": "To seize upon (KJV: fasten on)",
    "transliteration": "καθάπτω",
    "references": [
      "G2510"
    ]
  },
  {
    "term": "Popneo",
    "category": "Greek",
    "definition": "To breathe gently, i.e. breeze (KJV: blow softly)",
    "transliteration": "ὑποπνέω",
    "references": [
      "G5285"
    ]
  },
  {
    "term": "Ponomazo",
    "category": "Greek",
    "definition": "To name further, i.e. denominate (KJV: call)",
    "transliteration": "ἐπονομάζω",
    "references": [
      "G2028"
    ]
  },
  {
    "term": "Polytimos",
    "category": "Greek",
    "definition": "extremely valuable (KJV: very costly, of great price)",
    "transliteration": "πολύτιμος",
    "references": [
      "G4186"
    ]
  },
  {
    "term": "Poloyo",
    "category": "Greek",
    "definition": "To wash fully, i.e. (figuratively) have remitted (reflexively) (KJV: wash (away))",
    "transliteration": "ἀπολούω",
    "references": [
      "G628"
    ]
  },
  {
    "term": "Peita",
    "category": "Greek",
    "definition": "thereafter (KJV: after that(-ward), then)",
    "transliteration": "ἔπειτα",
    "references": [
      "G1899"
    ]
  },
  {
    "term": "Kephalis",
    "category": "Greek",
    "definition": "properly, a knob, i.e. (by implication) a roll (by extension from the end of a stick on which the manuscript was rolled) (KJV: volume)",
    "transliteration": "κεφαλίς",
    "references": [
      "G2777"
    ]
  },
  {
    "term": "Photismos",
    "category": "Greek",
    "definition": "illumination (figuratively) (KJV: light)",
    "transliteration": "φωτισμός",
    "references": [
      "G5462"
    ]
  },
  {
    "term": "Allion",
    "category": "Greek",
    "definition": "Gallion (i.e. Gallio), a Roman officer (KJV: Gallio)",
    "transliteration": "Γαλλίων",
    "references": [
      "G1058"
    ]
  },
  {
    "term": "Paesiazomai",
    "category": "Greek",
    "definition": "To be frank in utterance, or confident in spirit and demeanor (KJV: be (wax) bold, (preach, speak) boldly)",
    "transliteration": "παῤῥησιάζομαι",
    "references": [
      "G3955"
    ]
  },
  {
    "term": "Skene",
    "category": "Greek",
    "definition": "a tent or cloth hut (literally or figuratively) (KJV: habitation, tabernacle)",
    "transliteration": "σκηνή",
    "references": [
      "G4633"
    ]
  },
  {
    "term": "Podoche",
    "category": "Greek",
    "definition": "acceptance (KJV: acceptation)",
    "transliteration": "ἀποδοχή",
    "references": [
      "G594"
    ]
  },
  {
    "term": "Poderes",
    "category": "Greek",
    "definition": "a dress (G2066 (ἐσθής) implied) reaching the ankles (KJV: garment down to the foot)",
    "transliteration": "ποδήρης",
    "references": [
      "G4158"
    ]
  },
  {
    "term": "Tryphao",
    "category": "Greek",
    "definition": "To indulge in luxury (KJV: live in pleasure)",
    "transliteration": "τρυφάω",
    "references": [
      "G5171"
    ]
  },
  {
    "term": "Ichael",
    "category": "Greek",
    "definition": "Michael, an archangel (KJV: Michael)",
    "transliteration": "Μιχαήλ",
    "references": [
      "G3413"
    ]
  },
  {
    "term": "Stronnymi",
    "category": "Greek",
    "definition": "To \"strew,\" i.e. spread (as a carpet or couch) (KJV: make bed, furnish, spread, strew)",
    "transliteration": "στρώννυμι",
    "references": [
      "G4766"
    ]
  },
  {
    "term": "Bed",
    "category": "Greek",
    "definition": "Obed, an Israelite (KJV: Obed)",
    "transliteration": "Ὠβήδ",
    "references": [
      "G5601"
    ]
  },
  {
    "term": "Metadidomi",
    "category": "Greek",
    "definition": "To give over, i.e. share (KJV: give, impart)",
    "transliteration": "μεταδίδωμι",
    "references": [
      "G3330"
    ]
  },
  {
    "term": "Steon",
    "category": "Greek",
    "definition": "a bone (KJV: bone)",
    "transliteration": "ὀστέον",
    "references": [
      "G3747"
    ]
  },
  {
    "term": "Ainan",
    "category": "Greek",
    "definition": "Mainan, an Israelite (KJV: Mainan)",
    "transliteration": "Μαϊνάν",
    "references": [
      "G3104"
    ]
  },
  {
    "term": "Philaytos",
    "category": "Greek",
    "definition": "fond of self, i.e. selfish (KJV: lover of own self)",
    "transliteration": "φίλαυτος",
    "references": [
      "G5367"
    ]
  },
  {
    "term": "Lieyo",
    "category": "Greek",
    "definition": "To be a fisher, i.e. (by implication) to fish (KJV: go a-fishing)",
    "transliteration": "ἁλιεύω",
    "references": [
      "G232"
    ]
  },
  {
    "term": "Rion",
    "category": "Greek",
    "definition": "a boundary-line, i.e. (by implication) a frontier (region) (KJV: border, coast)",
    "transliteration": "ὅριον",
    "references": [
      "G3725"
    ]
  },
  {
    "term": "Rchomai",
    "category": "Greek",
    "definition": "To commence (in order of time) (KJV: (rehearse from the) begin(-ning))",
    "transliteration": "ἄρχομαι",
    "references": [
      "G756"
    ]
  },
  {
    "term": "Kriboo",
    "category": "Greek",
    "definition": "To be exact, i.e. ascertain (KJV: enquire diligently)",
    "transliteration": "ἀκριβόω",
    "references": [
      "G198"
    ]
  },
  {
    "term": "Pletho",
    "category": "Greek",
    "definition": "To \"fill\" (literally or figuratively (imbue, influence, supply)); specially, to fulfil (time) (KJV: accomplish, full (…come), furnish)",
    "transliteration": "πλήθω",
    "references": [
      "G4130"
    ]
  },
  {
    "term": "Dos",
    "category": "Greek",
    "definition": "a Median, or inhabitant of Media (KJV: Mede)",
    "transliteration": "Μῆδος",
    "references": [
      "G3370"
    ]
  },
  {
    "term": "Kleroo",
    "category": "Greek",
    "definition": "To allot, i.e. (figuratively) to assign (a privilege) (KJV: obtain an inheritance)",
    "transliteration": "κληρόω",
    "references": [
      "G2820"
    ]
  },
  {
    "term": "Perperisseyo",
    "category": "Greek",
    "definition": "To super-abound (KJV: abound much more, exceeding)",
    "transliteration": "ὑπερπερισσεύω",
    "references": [
      "G5248"
    ]
  },
  {
    "term": "Kokkos",
    "category": "Greek",
    "definition": "a kernel of seed (KJV: corn, grain)",
    "transliteration": "κόκκος",
    "references": [
      "G2848"
    ]
  },
  {
    "term": "Lysis",
    "category": "Greek",
    "definition": "a loosening, i.e. (specially), divorce (KJV: to be loosed)",
    "transliteration": "λύσις",
    "references": [
      "G3080"
    ]
  },
  {
    "term": "Kyroo",
    "category": "Greek",
    "definition": "To make authoritative, i.e. ratify (KJV: confirm)",
    "transliteration": "κυρόω",
    "references": [
      "G2964"
    ]
  },
  {
    "term": "Nomothesia",
    "category": "Greek",
    "definition": "legislation (specially, the institution of the Mosaic code) (KJV: giving of the law)",
    "transliteration": "νομοθεσία",
    "references": [
      "G3548"
    ]
  },
  {
    "term": "Kstrepho",
    "category": "Greek",
    "definition": "To pervert (figuratively) (KJV: subvert)",
    "transliteration": "ἐκστρέφω",
    "references": [
      "G1612"
    ]
  },
  {
    "term": "Kayteriazo",
    "category": "Greek",
    "definition": "To brand (\"cauterize\"), i.e. (by implication) to render unsensitive (figuratively) (KJV: sear with a hot iron)",
    "transliteration": "καυτηριάζω",
    "references": [
      "G2743"
    ]
  },
  {
    "term": "Cheimazo",
    "category": "Greek",
    "definition": "To storm, i.e. (passively) to labor under a gale (KJV: be tossed with tempest)",
    "transliteration": "χειμάζω",
    "references": [
      "G5492"
    ]
  },
  {
    "term": "Kpetannymi",
    "category": "Greek",
    "definition": "To fly out, i.e. (by analogy) to extend (KJV: stretch forth)",
    "transliteration": "ἐκπετάννυμι",
    "references": [
      "G1600"
    ]
  },
  {
    "term": "Schma",
    "category": "Greek",
    "definition": "a figure (as a mode or circumstance), i.e. (by implication) external condition (KJV: fashion)",
    "transliteration": "σχῆμα",
    "references": [
      "G4976"
    ]
  },
  {
    "term": "Pistoo",
    "category": "Greek",
    "definition": "To assure (KJV: assure of)",
    "transliteration": "πιστόω",
    "references": [
      "G4104"
    ]
  },
  {
    "term": "Distazo",
    "category": "Greek",
    "definition": "properly, to duplicate, i.e. (mentally) to waver (in opinion) (KJV: doubt)",
    "transliteration": "διστάζω",
    "references": [
      "G1365"
    ]
  },
  {
    "term": "Kdechomai",
    "category": "Greek",
    "definition": "To accept from some source, i.e. (by implication) to await (KJV: expect, look (tarry) for, wait (for))",
    "transliteration": "ἐκδέχομαι",
    "references": [
      "G1551"
    ]
  },
  {
    "term": "Esos",
    "category": "Greek",
    "definition": "Jesus (i.e. Jehoshua), the name of our Lord and two (three) other Israelites (KJV: Jesus)",
    "transliteration": "Ἰησοῦς",
    "references": [
      "G2424"
    ]
  },
  {
    "term": "Strebloo",
    "category": "Greek",
    "definition": "To wrench, i.e. (specially), to torture (by the rack), but only figuratively, to pervert (KJV:  wrest)",
    "transliteration": "στρεβλόω",
    "references": [
      "G4761"
    ]
  },
  {
    "term": "Mastos",
    "category": "Greek",
    "definition": "a (properly, female) breast (as if kneaded up) (KJV: pap)",
    "transliteration": "μαστός",
    "references": [
      "G3149"
    ]
  },
  {
    "term": "Er",
    "category": "Greek",
    "definition": "by analogy, to blow); \"air\" (as naturally circumambient) (KJV: air)",
    "transliteration": "ἀήρ",
    "references": [
      "G109"
    ]
  },
  {
    "term": "Kkethen",
    "category": "Greek",
    "definition": "likewise from that place (or time) (KJV: and afterward (from) (thence), thence also)",
    "transliteration": "κἀκεῖθεν",
    "references": [
      "G2547"
    ]
  },
  {
    "term": "Stadion",
    "category": "Greek",
    "definition": "a stade or certain measure of distance; by implication, a stadium or race-course (KJV: furlong, race)",
    "transliteration": "στάδιον",
    "references": [
      "G4712"
    ]
  },
  {
    "term": "Prtos",
    "category": "Greek",
    "definition": "foremost (in time, place, order or importance) (KJV: before, beginning, best, chief(-est), first (of all), former)",
    "transliteration": "πρῶτος",
    "references": [
      "G4413"
    ]
  },
  {
    "term": "Gony",
    "category": "Greek",
    "definition": "the \"knee\" (KJV: knee(X -l))",
    "transliteration": "γόνυ",
    "references": [
      "G1119"
    ]
  },
  {
    "term": "Sysparasso",
    "category": "Greek",
    "definition": "To rend completely, i.e. (by analogy) to convulse violently (KJV: throw down)",
    "transliteration": "συσπαράσσω",
    "references": [
      "G4952"
    ]
  },
  {
    "term": "Sophrosyne",
    "category": "Greek",
    "definition": "soundness of mind, i.e. (literally) sanity or (figuratively) self-control (KJV: soberness, sobriety)",
    "transliteration": "σωφροσύνη",
    "references": [
      "G4997"
    ]
  },
  {
    "term": "Mbros",
    "category": "Greek",
    "definition": "a thunder storm (KJV: shower)",
    "transliteration": "ὄμβρος",
    "references": [
      "G3655"
    ]
  },
  {
    "term": "Ntapodosis",
    "category": "Greek",
    "definition": "requital (properly, the act) (KJV: reward)",
    "transliteration": "ἀνταπόδοσις",
    "references": [
      "G469"
    ]
  },
  {
    "term": "Eserchomai",
    "category": "Greek",
    "definition": "To enter (literally or figuratively) (KJV: X arise, come (in, into), enter in(-to), go in (through))",
    "transliteration": "εἰσέρχομαι",
    "references": [
      "G1525"
    ]
  },
  {
    "term": "Proporeyomai",
    "category": "Greek",
    "definition": "To precede (as guide or herald) (KJV: go before)",
    "transliteration": "προπορεύομαι",
    "references": [
      "G4313"
    ]
  },
  {
    "term": "Dma",
    "category": "Greek",
    "definition": "properly, an edifice, i.e. (specially) a roof (KJV: housetop)",
    "transliteration": "δῶμα",
    "references": [
      "G1430"
    ]
  },
  {
    "term": "Palaios",
    "category": "Greek",
    "definition": "antique, i.e. not recent, worn out (KJV: old)",
    "transliteration": "παλαιός",
    "references": [
      "G3820"
    ]
  },
  {
    "term": "Imon",
    "category": "Greek",
    "definition": "Simon (i.e. Shimon), the name of nine Israelites (KJV: Simon)",
    "transliteration": "Σίμων",
    "references": [
      "G4613"
    ]
  },
  {
    "term": "Klanthanomai",
    "category": "Greek",
    "definition": "To be utterly oblivious of (KJV: forget)",
    "transliteration": "ἐκλανθάνομαι",
    "references": [
      "G1585"
    ]
  },
  {
    "term": "Graodes",
    "category": "Greek",
    "definition": "crone-like, i.e. silly (KJV: old wives')",
    "transliteration": "γραώδης",
    "references": [
      "G1126"
    ]
  },
  {
    "term": "Pantokrator",
    "category": "Greek",
    "definition": "the all-ruling, i.e. God (as absolute and universal sovereign) (KJV: Almighty, Omnipotent)",
    "transliteration": "παντοκράτωρ",
    "references": [
      "G3841"
    ]
  },
  {
    "term": "Lektor",
    "category": "Greek",
    "definition": "a cock or male fowl (KJV: cock)",
    "transliteration": "ἀλέκτωρ",
    "references": [
      "G220"
    ]
  },
  {
    "term": "Symparakaleo",
    "category": "Greek",
    "definition": "To console jointly (KJV: comfort together)",
    "transliteration": "συμπαρακαλέω",
    "references": [
      "G4837"
    ]
  },
  {
    "term": "Kataskapto",
    "category": "Greek",
    "definition": "To undermine, i.e. (by implication) destroy (KJV: dig down, ruin)",
    "transliteration": "κατασκάπτω",
    "references": [
      "G2679"
    ]
  },
  {
    "term": "Eskaleo",
    "category": "Greek",
    "definition": "To invite in (KJV: call in)",
    "transliteration": "εἰσκαλέω",
    "references": [
      "G1528"
    ]
  },
  {
    "term": "Elchisedek",
    "category": "Greek",
    "definition": "Melchisedek (i.e. Malkitsedek), a patriarch (KJV: Melchisedec)",
    "transliteration": "Μελχισεδέκ",
    "references": [
      "G3198"
    ]
  },
  {
    "term": "Kenodoxos",
    "category": "Greek",
    "definition": "vainly glorifying, i.e. self-conceited (KJV: desirous of vain-glory)",
    "transliteration": "κενόδοξος",
    "references": [
      "G2755"
    ]
  },
  {
    "term": "Tessarakontetes",
    "category": "Greek",
    "definition": "of forty years of age (KJV: (+ full, of) forty years (old))",
    "transliteration": "τεσσαρακοντ��ετής",
    "references": [
      "G5063"
    ]
  },
  {
    "term": "Prra",
    "category": "Greek",
    "definition": "the prow, i.e. forward part of a vessel (KJV: forepart(-ship))",
    "transliteration": "πρῶρα",
    "references": [
      "G4408"
    ]
  },
  {
    "term": "Ris",
    "category": "Greek",
    "definition": "a rainbow (\"iris\") (KJV: rainbow)",
    "transliteration": "ἶρις",
    "references": [
      "G2463"
    ]
  },
  {
    "term": "Philoneikos",
    "category": "Greek",
    "definition": "probably akin to G3534 (νῖκος)); fond of strife, i.e. disputatious (KJV: contentious)",
    "transliteration": "φιλόνεικος",
    "references": [
      "G5380"
    ]
  },
  {
    "term": "Kchoreo",
    "category": "Greek",
    "definition": "To depart (KJV: depart out)",
    "transliteration": "ἐκχωρέω",
    "references": [
      "G1633"
    ]
  },
  {
    "term": "Pseydomai",
    "category": "Greek",
    "definition": "To utter an untruth or attempt to deceive by falsehood (KJV: falsely, lie)",
    "transliteration": "ψεύδομαι",
    "references": [
      "G5574"
    ]
  },
  {
    "term": "Tekmerion",
    "category": "Greek",
    "definition": "a token (as defining a fact), i.e. criterion of certainty (KJV: infallible proof)",
    "transliteration": "τεκμήριον",
    "references": [
      "G5039"
    ]
  },
  {
    "term": "Phesis",
    "category": "Greek",
    "definition": "freedom; (figuratively) pardon (KJV: deliverance, forgiveness, liberty, remission)",
    "transliteration": "ἄφεσις",
    "references": [
      "G859"
    ]
  },
  {
    "term": "Chronotribeo",
    "category": "Greek",
    "definition": "To be a time-wearer, i.e. to procrastinate (linger) (KJV: spend time)",
    "transliteration": "χρονοτριβέω",
    "references": [
      "G5551"
    ]
  },
  {
    "term": "Pronoeo",
    "category": "Greek",
    "definition": "To consider in advance, i.e. look out for beforehand (actively, by way of maintenance for others; middle voice by way of circumspection for oneself) (KJV: provide (for))",
    "transliteration": "προνοέω",
    "references": [
      "G4306"
    ]
  },
  {
    "term": "Rnion",
    "category": "Greek",
    "definition": "a lambkin (KJV: lamb)",
    "transliteration": "ἀρνίον",
    "references": [
      "G721"
    ]
  },
  {
    "term": "Eme",
    "category": "Greek",
    "definition": "Semei (i.e. Shimi), an Israelite (KJV: Semei)",
    "transliteration": "Σεμεΐ",
    "references": [
      "G4584"
    ]
  },
  {
    "term": "Pipto",
    "category": "Greek",
    "definition": "To fall (literally or figuratively) (KJV: fail, fall (down), light on)",
    "transliteration": "πίπτω",
    "references": [
      "G4098"
    ]
  },
  {
    "term": "Dioyrgia",
    "category": "Greek",
    "definition": "recklessness, i.e. (by extension) malignity (KJV: mischief)",
    "transliteration": "ῥᾳδιουργία",
    "references": [
      "G4468"
    ]
  },
  {
    "term": "Perichoros",
    "category": "Greek",
    "definition": "around the region, i.e. circumjacent (as noun, with G1093 (γῆ) implied vicinity) (KJV: country (round) about, region (that lieth) round about)",
    "transliteration": "περίχωρος",
    "references": [
      "G4066"
    ]
  },
  {
    "term": "Riska",
    "category": "Greek",
    "definition": "feminine of Priscus, ancient; Priska, a Christian woman (KJV: Prisca)",
    "transliteration": "Πρίσκα",
    "references": [
      "G4251"
    ]
  },
  {
    "term": "Synathroizo",
    "category": "Greek",
    "definition": "To convene (KJV: call (gather) together)",
    "transliteration": "συναθροίζω",
    "references": [
      "G4867"
    ]
  },
  {
    "term": "Rodianoi",
    "category": "Greek",
    "definition": "Herodians, i.e. partisans of Herod (KJV: Herodians)",
    "transliteration": "Ἡρωδιανοί",
    "references": [
      "G2265"
    ]
  },
  {
    "term": "Polenion",
    "category": "Greek",
    "definition": "vessel or receptacle under the press, i.e. lower wine-vat (KJV: winefat)",
    "transliteration": "ὑπολήνιον",
    "references": [
      "G5276"
    ]
  },
  {
    "term": "Aleim",
    "category": "Greek",
    "definition": "Salim, a place in Palestine (KJV: Salim)",
    "transliteration": "Σαλείμ",
    "references": [
      "G4530"
    ]
  },
  {
    "term": "Sylagogeo",
    "category": "Greek",
    "definition": "To lead away as booty, i.e. (figuratively) seduce (KJV: spoil)",
    "transliteration": "συλαγωγέω",
    "references": [
      "G4812"
    ]
  },
  {
    "term": "Pyazo",
    "category": "Greek",
    "definition": "To redden (intransitively) (KJV: be red)",
    "transliteration": "πυῤῥάζω",
    "references": [
      "G4449"
    ]
  },
  {
    "term": "Zeykteria",
    "category": "Greek",
    "definition": "a fastening (tiller-rope) (KJV: band)",
    "transliteration": "ζευκτηρία",
    "references": [
      "G2202"
    ]
  },
  {
    "term": "Brma",
    "category": "Greek",
    "definition": "food (literally or figuratively), especially (ceremonially) articles allowed or forbidden by the Jewish law (KJV: meat, victuals)",
    "transliteration": "βρῶμα",
    "references": [
      "G1033"
    ]
  },
  {
    "term": "Athenteo",
    "category": "Greek",
    "definition": "To act of oneself, i.e. (figuratively) dominate (KJV: usurp authority over)",
    "transliteration": "αὐθεντέω",
    "references": [
      "G831"
    ]
  },
  {
    "term": "Trecho",
    "category": "Greek",
    "definition": "compare G2359 (θρίξ)); which uses (the base of G1408 (δρόμος)) as alternate in certain tenses; to run or walk hastily (literally or figuratively) (KJV: have course, run)",
    "transliteration": "τρέχω",
    "references": [
      "G5143"
    ]
  },
  {
    "term": "Xoysiazo",
    "category": "Greek",
    "definition": "To control (KJV: exercise authority upon, bring under the (have) power of)",
    "transliteration": "ἐξουσιάζω",
    "references": [
      "G1850"
    ]
  },
  {
    "term": "Katakritos",
    "category": "Greek",
    "definition": "without (legal) trial (KJV: uncondemned)",
    "transliteration": "ἀκατάκριτος",
    "references": [
      "G178"
    ]
  },
  {
    "term": "Parasemos",
    "category": "Greek",
    "definition": "side-marked, i.e. labelled (with a badge (figure-head) of a ship) (KJV: sign)",
    "transliteration": "παράσημος",
    "references": [
      "G3902"
    ]
  },
  {
    "term": "Paygasma",
    "category": "Greek",
    "definition": "an off-flash, i.e. effulgence (KJV: brightness)",
    "transliteration": "ἀπαύγασμα",
    "references": [
      "G541"
    ]
  },
  {
    "term": "Mesembria",
    "category": "Greek",
    "definition": "midday; by implication, the south (KJV: noon, south)",
    "transliteration": "μεσημβρία",
    "references": [
      "G3314"
    ]
  },
  {
    "term": "Kodrantes",
    "category": "Greek",
    "definition": "a quadrans, i.e. the fourth part of an as (KJV: farthing)",
    "transliteration": "κοδράντης",
    "references": [
      "G2835"
    ]
  },
  {
    "term": "Prosregnymi",
    "category": "Greek",
    "definition": "To tear towards, i.e. burst upon (as a tempest or flood) (KJV: beat vehemently against (upon))",
    "transliteration": "προσρήγνυμι",
    "references": [
      "G4366"
    ]
  },
  {
    "term": "Sporimos",
    "category": "Greek",
    "definition": "sown, i.e. (neuter plural) a planted field (KJV: corn(-field))",
    "transliteration": "σπόριμος",
    "references": [
      "G4702"
    ]
  },
  {
    "term": "Opo",
    "category": "Greek",
    "definition": "not yet (KJV: hitherto not, (no…) as yet, not yet)",
    "transliteration": "οὔπω",
    "references": [
      "G3768"
    ]
  },
  {
    "term": "Mnma",
    "category": "Greek",
    "definition": "a memorial, i.e. sepulchral monument (burial-place) (KJV: grave, sepulchre, tomb)",
    "transliteration": "μνῆμα",
    "references": [
      "G3418"
    ]
  },
  {
    "term": "Alinos",
    "category": "Greek",
    "definition": "glassy, i.e. transparent (KJV: of glass)",
    "transliteration": "ὑάλινος",
    "references": [
      "G5193"
    ]
  },
  {
    "term": "Ktinasso",
    "category": "Greek",
    "definition": "To shake violently (KJV: shake (off))",
    "transliteration": "ἐκτινάσσω",
    "references": [
      "G1621"
    ]
  },
  {
    "term": "Paineo",
    "category": "Greek",
    "definition": "To applaud (KJV: commend, laud, praise)",
    "transliteration": "ἐπαινέω",
    "references": [
      "G1867"
    ]
  },
  {
    "term": "Xyrao",
    "category": "Greek",
    "definition": "To shave or \"shear\" the hair (KJV: shave)",
    "transliteration": "ξυράω",
    "references": [
      "G3587"
    ]
  },
  {
    "term": "Phronimos",
    "category": "Greek",
    "definition": "thoughtful, i.e. sagacious or discreet (implying a cautious character; while G4680 (σοφός) denotes practical skill or acumen; and G4908 (συνετός) indicates rather intelligence or mental acquirement); in a bad sense conceited (also in the comparative) (KJV: wise(-r))",
    "transliteration": "φρόνιμος",
    "references": [
      "G5429"
    ]
  },
  {
    "term": "Diagnorizo",
    "category": "Greek",
    "definition": "To tell abroad (KJV: make known)",
    "transliteration": "διαγνωρίζω",
    "references": [
      "G1232"
    ]
  },
  {
    "term": "Lepton",
    "category": "Greek",
    "definition": "something scaled (light), i.e. a small coin (KJV: mite)",
    "transliteration": "λεπτόν",
    "references": [
      "G3016"
    ]
  },
  {
    "term": "Schys",
    "category": "Greek",
    "definition": "compare , a form of G2192 (ἔχω)); forcefulness (literally or figuratively) (KJV: ability, might(-ily), power, strength)",
    "transliteration": "ἰσχύς",
    "references": [
      "G2479"
    ]
  },
  {
    "term": "Topos",
    "category": "Greek",
    "definition": "a spot (general in space, but limited by occupancy; whereas G5561 (χώρα) is a large but participle locality), i.e. location (as a position, home, tract, etc.); figuratively, condition, opportunity; specially, a scabbard (KJV: coast, licence, place, X plain, quarter, + rock, room, where)",
    "transliteration": "τόπος",
    "references": [
      "G5117"
    ]
  },
  {
    "term": "Psephizo",
    "category": "Greek",
    "definition": "To use pebbles in enumeration, i.e. (generally) to compute (KJV: count)",
    "transliteration": "ψηφίζω",
    "references": [
      "G5585"
    ]
  },
  {
    "term": "Polytropos",
    "category": "Greek",
    "definition": "in many ways, i.e. variously as to method or form (KJV: in divers manners)",
    "transliteration": "πολυτρόπως",
    "references": [
      "G4187"
    ]
  },
  {
    "term": "Sotimos",
    "category": "Greek",
    "definition": "of equal value or honor (KJV: like precious)",
    "transliteration": "ἰσότιμος",
    "references": [
      "G2472"
    ]
  },
  {
    "term": "Elogetos",
    "category": "Greek",
    "definition": "adorable (KJV: blessed)",
    "transliteration": "εὐλογητός",
    "references": [
      "G2128"
    ]
  },
  {
    "term": "Katapayo",
    "category": "Greek",
    "definition": "To settle down, i.e. (literally) to colonize, or (figuratively) to (cause to) desist (KJV: cease, (give) rest(-rain))",
    "transliteration": "καταπαύω",
    "references": [
      "G2664"
    ]
  },
  {
    "term": "Sophronos",
    "category": "Greek",
    "definition": "with sound mind, i.e. moderately (KJV: soberly)",
    "transliteration": "σωφρόνως",
    "references": [
      "G4996"
    ]
  },
  {
    "term": "Makrothen",
    "category": "Greek",
    "definition": "from a distance or afar (KJV: afar off, from far)",
    "transliteration": "μακρόθεν",
    "references": [
      "G3113"
    ]
  },
  {
    "term": "Ntichristos",
    "category": "Greek",
    "definition": "an opponent of the Messiah (KJV: antichrist)",
    "transliteration": "ἀντίχριστος",
    "references": [
      "G500"
    ]
  },
  {
    "term": "Photeinos",
    "category": "Greek",
    "definition": "lustrous, i.e. transparent or well-illuminated (figuratively) (KJV: bright, full of light)",
    "transliteration": "φωτεινός",
    "references": [
      "G5460"
    ]
  },
  {
    "term": "Atthan",
    "category": "Greek",
    "definition": "Matthan (i.e. Mattan), an Israelite (KJV: Matthan)",
    "transliteration": "Ματθάν",
    "references": [
      "G3157"
    ]
  },
  {
    "term": "Diaphylasso",
    "category": "Greek",
    "definition": "To guard thoroughly, i.e. protect (KJV: keep)",
    "transliteration": "διαφυλάσσω",
    "references": [
      "G1314"
    ]
  },
  {
    "term": "Kathartes",
    "category": "Greek",
    "definition": "impurity (the state), morally (KJV: filthiness)",
    "transliteration": "ἀκαθάρτης",
    "references": [
      "G168"
    ]
  },
  {
    "term": "Krothinion",
    "category": "Greek",
    "definition": "properly (in the plural) the top of the heap, i.e. (by implication) best of the booty (KJV: spoils)",
    "transliteration": "ἀκροθίνιον",
    "references": [
      "G205"
    ]
  },
  {
    "term": "Strape",
    "category": "Greek",
    "definition": "lightning; by analogy, glare (KJV: lightning, bright shining)",
    "transliteration": "ἀστραπή",
    "references": [
      "G796"
    ]
  },
  {
    "term": "Kampto",
    "category": "Greek",
    "definition": "To bend (KJV: bow)",
    "transliteration": "κάμπτω",
    "references": [
      "G2578"
    ]
  },
  {
    "term": "Pothesis",
    "category": "Greek",
    "definition": "a laying aside (literally or figuratively) (KJV: putting away (off))",
    "transliteration": "ἀπόθεσις",
    "references": [
      "G595"
    ]
  },
  {
    "term": "Prostemi",
    "category": "Greek",
    "definition": "To stand before, i.e. (in rank) to preside, or (by implication) to practise (KJV: maintain, be over, rule)",
    "transliteration": "προΐστημι",
    "references": [
      "G4291"
    ]
  },
  {
    "term": "Mathetes",
    "category": "Greek",
    "definition": "a learner, i.e. pupil (KJV: disciple)",
    "transliteration": "μαθητής",
    "references": [
      "G3101"
    ]
  },
  {
    "term": "Moschos",
    "category": "Greek",
    "definition": "a young bullock (KJV: calf)",
    "transliteration": "μόσχος",
    "references": [
      "G3448"
    ]
  },
  {
    "term": "Age",
    "category": "Greek",
    "definition": "a ray of light, i.e. (by implication) radiance, dawn (KJV: break of day)",
    "transliteration": "αὐγή",
    "references": [
      "G827"
    ]
  },
  {
    "term": "Popodion",
    "category": "Greek",
    "definition": "something under the feet, i.e. a foot-rest (figuratively) (KJV: footstool)",
    "transliteration": "ὑποπόδιον",
    "references": [
      "G5286"
    ]
  },
  {
    "term": "Drepanon",
    "category": "Greek",
    "definition": "a gathering hook (especially for harvesting) (KJV: sickle)",
    "transliteration": "δρέπανον",
    "references": [
      "G1407"
    ]
  },
  {
    "term": "Xys",
    "category": "Greek",
    "definition": "keen; by analogy, rapid (KJV: sharp, swift)",
    "transliteration": "ὀξύς",
    "references": [
      "G3691"
    ]
  },
  {
    "term": "Diabolos",
    "category": "Greek",
    "definition": "a traducer; specially, Satan (compare H07854) (KJV: false accuser, devil, slanderer)",
    "transliteration": "διάβολος",
    "references": [
      "G1228"
    ]
  },
  {
    "term": "Limne",
    "category": "Greek",
    "definition": "a pond (large or small) (KJV: lake)",
    "transliteration": "λίμνη",
    "references": [
      "G3041"
    ]
  },
  {
    "term": "Piapto",
    "category": "Greek",
    "definition": "To stitch upon, i.e. fasten with the needle (KJV: sew on)",
    "transliteration": "ἐπιῤῥάπτω",
    "references": [
      "G1976"
    ]
  },
  {
    "term": "Dios",
    "category": "Greek",
    "definition": "pertaining to self, i.e. one's own; by implication, private or separate (KJV: X his acquaintance, when they were alone, apart, aside, due, his (own, proper, several), home, (her, our, thine, your) own (business), private(-ly), proper, severally, their (own))",
    "transliteration": "ἴδιος",
    "references": [
      "G2398"
    ]
  },
  {
    "term": "Kaige",
    "category": "Greek",
    "definition": "and at least (or even, indeed) (KJV: and, at least)",
    "transliteration": "καίγε",
    "references": [
      "G2534"
    ]
  },
  {
    "term": "Philophron",
    "category": "Greek",
    "definition": "friendly of mind, i.e. kind (KJV: courteous)",
    "transliteration": "φιλόφρων",
    "references": [
      "G5391"
    ]
  },
  {
    "term": "Diermeneyo",
    "category": "Greek",
    "definition": "To explain thoroughly, by implication, to translate (KJV: expound, interpret(-ation))",
    "transliteration": "διερμηνεύω",
    "references": [
      "G1329"
    ]
  },
  {
    "term": "Syndrome",
    "category": "Greek",
    "definition": "a running together, i.e. (riotous) concourse (KJV: run together)",
    "transliteration": "συνδρομή",
    "references": [
      "G4890"
    ]
  },
  {
    "term": "Katoikia",
    "category": "Greek",
    "definition": "residence (properly, the condition; but by implication, the abode itself) (KJV: habitation)",
    "transliteration": "κατοικία",
    "references": [
      "G2733"
    ]
  },
  {
    "term": "Nthymesis",
    "category": "Greek",
    "definition": "deliberation (KJV: device, thought)",
    "transliteration": "ἐνθύμησις",
    "references": [
      "G1761"
    ]
  },
  {
    "term": "Mphipolis",
    "category": "Greek",
    "definition": "a city surrounded by a river; Amphipolis, a place in Macedonia (KJV: Amphipolis)",
    "transliteration": "Ἀμφίπολις",
    "references": [
      "G295"
    ]
  },
  {
    "term": "Prosaiteo",
    "category": "Greek",
    "definition": "To ask repeatedly (importune), i.e. solicit (KJV: beg)",
    "transliteration": "προσαιτέω",
    "references": [
      "G4319"
    ]
  },
  {
    "term": "Skelos",
    "category": "Greek",
    "definition": "through the idea of leanness); the leg (as lank) (KJV: leg)",
    "transliteration": "σκέλος",
    "references": [
      "G4628"
    ]
  },
  {
    "term": "Stocheo",
    "category": "Greek",
    "definition": "To miss the mark, i.e. (figuratively) deviate from truth (KJV: err, swerve)",
    "transliteration": "ἀστοχέω",
    "references": [
      "G795"
    ]
  },
  {
    "term": "Lalaps",
    "category": "Greek",
    "definition": "a whirlwind (squall) (KJV: storm, tempest)",
    "transliteration": "λαῖλαψ",
    "references": [
      "G2978"
    ]
  },
  {
    "term": "Anigma",
    "category": "Greek",
    "definition": "an obscure saying (\"enigma\"), i.e. (abstractly) obscureness (KJV: X darkly)",
    "transliteration": "αἴνιγμα",
    "references": [
      "G135"
    ]
  },
  {
    "term": "Steko",
    "category": "Greek",
    "definition": "To be stationary, i.e. (figuratively) to persevere (KJV: stand (fast))",
    "transliteration": "στήκω",
    "references": [
      "G4739"
    ]
  },
  {
    "term": "Pokatastasis",
    "category": "Greek",
    "definition": "reconstitution (KJV: restitution)",
    "transliteration": "ἀποκατάστασις",
    "references": [
      "G605"
    ]
  },
  {
    "term": "Spis",
    "category": "Greek",
    "definition": "a buckler (or round shield); used of a serpent (as coiling itself), probably the \"asp\" (KJV: asp)",
    "transliteration": "ἀσπίς",
    "references": [
      "G785"
    ]
  },
  {
    "term": "Gonia",
    "category": "Greek",
    "definition": "a struggle (properly, the state), i.e. (figuratively) anguish (KJV: agony)",
    "transliteration": "ἀγωνία",
    "references": [
      "G74"
    ]
  },
  {
    "term": "Pibaino",
    "category": "Greek",
    "definition": "To walk upon, i.e. mount, ascend, embark, arrive (KJV: come (into), enter into, go abroad, sit upon, take ship)",
    "transliteration": "ἐπιβαίνω",
    "references": [
      "G1910"
    ]
  },
  {
    "term": "Leos",
    "category": "Greek",
    "definition": "smooth, i.e. \"level\" (KJV: smooth)",
    "transliteration": "λεῖος",
    "references": [
      "G3006"
    ]
  },
  {
    "term": "Kathaper",
    "category": "Greek",
    "definition": "exactly as (KJV: (even, as well) as)",
    "transliteration": "καθάπερ",
    "references": [
      "G2509"
    ]
  },
  {
    "term": "Synago",
    "category": "Greek",
    "definition": "To lead together, i.e. collect or convene; specially, to entertain (hospitably) (KJV: + accompany, assemble (selves, together), bestow, come together, gather (selves together, up, together), lead into, resort, take in)",
    "transliteration": "συνάγω",
    "references": [
      "G4863"
    ]
  },
  {
    "term": "Trapeza",
    "category": "Greek",
    "definition": "a table or stool (as being four-legged), usually for food (figuratively, a meal); also a counter for money (figuratively, a broker's office for loans at interest) (KJV: bank, meat, table)",
    "transliteration": "τράπεζα",
    "references": [
      "G5132"
    ]
  },
  {
    "term": "Alatia",
    "category": "Greek",
    "definition": "Galatia, a region of Asia (KJV: Galatia)",
    "transliteration": "Γαλατία",
    "references": [
      "G1053"
    ]
  },
  {
    "term": "Okodome",
    "category": "Greek",
    "definition": "architecture, i.e. (concretely) a structure; figuratively, confirmation (KJV: building, edify(-ication, -ing))",
    "transliteration": "οἰκοδομή",
    "references": [
      "G3619"
    ]
  },
  {
    "term": "Eko",
    "category": "Greek",
    "definition": "properly, to be weak, i.e. yield (KJV: give place)",
    "transliteration": "εἴκω",
    "references": [
      "G1502"
    ]
  },
  {
    "term": "Os",
    "category": "Greek",
    "definition": "Lois, a Christian woman (KJV: Lois)",
    "transliteration": "Λωΐς",
    "references": [
      "G3090"
    ]
  },
  {
    "term": "Eles",
    "category": "Greek",
    "definition": "Meleas, an Israelite (KJV: Meleas)",
    "transliteration": "Μελεᾶς",
    "references": [
      "G3190"
    ]
  },
  {
    "term": "Napsyxis",
    "category": "Greek",
    "definition": "properly, a recovery of breath, i.e. (figuratively) revival (KJV: revival)",
    "transliteration": "ἀνάψυξις",
    "references": [
      "G403"
    ]
  },
  {
    "term": "Phren",
    "category": "Greek",
    "definition": "the midrif (as a partition of the body), i.e. (figuratively and by implication, of sympathy) the feelings (or sensitive nature; by extension (also in the plural) the mind or cognitive faculties) (KJV: understanding)",
    "transliteration": "φρήν",
    "references": [
      "G5424"
    ]
  },
  {
    "term": "Katallasso",
    "category": "Greek",
    "definition": "To change mutually, i.e. (figuratively) to compound a difference (KJV: reconcile)",
    "transliteration": "καταλλάσσω",
    "references": [
      "G2644"
    ]
  },
  {
    "term": "Aodikeys",
    "category": "Greek",
    "definition": "a Laodicean, i.e. inhabitant of Laodicia (KJV: Laodicean)",
    "transliteration": "Λαοδικεύς",
    "references": [
      "G2994"
    ]
  },
  {
    "term": "Ggelia",
    "category": "Greek",
    "definition": "an announcement, i.e. (by implication) precept (KJV: message)",
    "transliteration": "ἀγγελία",
    "references": [
      "G31"
    ]
  },
  {
    "term": "Alos",
    "category": "Greek",
    "definition": "Saulus (i.e. Shaul), the Jewish name of Paul (KJV: Saul)",
    "transliteration": "Σαῦλος",
    "references": [
      "G4569"
    ]
  },
  {
    "term": "Plastos",
    "category": "Greek",
    "definition": "moulded, i.e. (by implication) artificial or (figuratively) fictitious (false) (KJV: feigned)",
    "transliteration": "πλαστός",
    "references": [
      "G4112"
    ]
  },
  {
    "term": "Nossion",
    "category": "Greek",
    "definition": "a birdling (KJV: chicken)",
    "transliteration": "νοσσίον",
    "references": [
      "G3556"
    ]
  },
  {
    "term": "Methorios",
    "category": "Greek",
    "definition": "bounded alongside, i.e. contiguous (neuter plural as noun, frontier) (KJV: border)",
    "transliteration": "μεθόριος",
    "references": [
      "G3181"
    ]
  },
  {
    "term": "Myrna",
    "category": "Greek",
    "definition": "Smyrna, a place in Asia Minor (KJV: Smyrna)",
    "transliteration": "Σμύρνα",
    "references": [
      "G4667"
    ]
  },
  {
    "term": "Enochos",
    "category": "Greek",
    "definition": "a castrated person (such being employed in Oriental bed-chambers); by extension an impotent or unmarried man; by implication, a chamberlain (state-officer) (KJV: eunuch)",
    "transliteration": "εὐνοῦχος",
    "references": [
      "G2135"
    ]
  },
  {
    "term": "Orinthos",
    "category": "Greek",
    "definition": "Corinthus, a city of Greece (KJV: Corinth)",
    "transliteration": "Κόρινθος",
    "references": [
      "G2882"
    ]
  },
  {
    "term": "Eprosedros",
    "category": "Greek",
    "definition": "sitting well towards, i.e. (figuratively) assiduous (neuter, diligent service) (KJV: X attend upon)",
    "transliteration": "εὐπρόσεδρος",
    "references": [
      "G2145"
    ]
  },
  {
    "term": "Gns",
    "category": "Greek",
    "definition": "purely, i.e. honestly (KJV: sincerely)",
    "transliteration": "ἁγνῶς",
    "references": [
      "G55"
    ]
  },
  {
    "term": "Brochos",
    "category": "Greek",
    "definition": "a noose (KJV: snare)",
    "transliteration": "βρόχος",
    "references": [
      "G1029"
    ]
  },
  {
    "term": "Mete",
    "category": "Greek",
    "definition": "not too, i.e. (in continued negation) neither or nor; also, not even (KJV: neither, (n-)or, so as much)",
    "transliteration": "μήτε",
    "references": [
      "G3383"
    ]
  },
  {
    "term": "Phortizo",
    "category": "Greek",
    "definition": "To load up (properly, as a vessel or animal), i.e. (figuratively) to overburden with ceremony (or spiritual anxiety) (KJV: lade, by heavy laden)",
    "transliteration": "φορτίζω",
    "references": [
      "G5412"
    ]
  },
  {
    "term": "Klyo",
    "category": "Greek",
    "definition": "To relax (literally or figuratively) (KJV: faint)",
    "transliteration": "ἐκλύω",
    "references": [
      "G1590"
    ]
  },
  {
    "term": "Melo",
    "category": "Greek",
    "definition": "To be of interest to, i.e. to concern (only third person singular present indicative used impersonally, it matters) (KJV: (take) care)",
    "transliteration": "μέλω",
    "references": [
      "G3199"
    ]
  },
  {
    "term": "Pago",
    "category": "Greek",
    "definition": "To lead (oneself) under, i.e. withdraw or retire (as if sinking out of sight), literally or figuratively (KJV: depart, get hence, go (a-)way)",
    "transliteration": "ὑπάγω",
    "references": [
      "G5217"
    ]
  },
  {
    "term": "Ses",
    "category": "Greek",
    "definition": "a moth (KJV: moth)",
    "transliteration": "σής",
    "references": [
      "G4597"
    ]
  },
  {
    "term": "Proskairos",
    "category": "Greek",
    "definition": "for the occasion only, i.e. temporary (KJV: dur-(eth) for awhile, endure for a time, for a season, temporal)",
    "transliteration": "πρόσκαιρος",
    "references": [
      "G4340"
    ]
  },
  {
    "term": "Phlyaros",
    "category": "Greek",
    "definition": "a garrulous person, i.e. prater (KJV: tattler)",
    "transliteration": "φλύαρος",
    "references": [
      "G5397"
    ]
  },
  {
    "term": "K",
    "category": "Greek",
    "definition": "literal or figurative; direct or remote) (KJV: after, among, X are, at, betwixt(-yond), by (the means of), exceedingly, (+ abundantly above), for(- th), from (among, forth, up), + grudgingly, + heartily, X heavenly, X hereby, + very highly, in, …ly, (because, by reason) of, off (from), on, out among (from, of), over, since, X thenceforth, through, X unto, X vehemently, with(-out))",
    "transliteration": "ἐκ",
    "references": [
      "G1537"
    ]
  },
  {
    "term": "Trimenon",
    "category": "Greek",
    "definition": "a three months' space (KJV: three months)",
    "transliteration": "τρίμηνον",
    "references": [
      "G5150"
    ]
  },
  {
    "term": "Boynos",
    "category": "Greek",
    "definition": "a hillock (KJV: hill)",
    "transliteration": "βουνός",
    "references": [
      "G1015"
    ]
  },
  {
    "term": "Astheterion",
    "category": "Greek",
    "definition": "properly, an organ of perception, i.e. (figuratively) judgment (KJV: senses)",
    "transliteration": "αἰσθητήριον",
    "references": [
      "G145"
    ]
  },
  {
    "term": "Thorybeo",
    "category": "Greek",
    "definition": "To be in tumult, i.e. disturb, clamor (KJV: make ado (a noise), trouble self, set on an uproar)",
    "transliteration": "θορυβέω",
    "references": [
      "G2350"
    ]
  },
  {
    "term": "Lychnos",
    "category": "Greek",
    "definition": "a portable lamp or other illuminator (literally or figuratively) (KJV: candle, light)",
    "transliteration": "λύχνος",
    "references": [
      "G3088"
    ]
  },
  {
    "term": "Iberios",
    "category": "Greek",
    "definition": "probably pertaining to the river Tiberis or Tiber; Tiberius, a Roman emperor (KJV: Tiberius)",
    "transliteration": "Τιβέριος",
    "references": [
      "G5086"
    ]
  },
  {
    "term": "Brsis",
    "category": "Greek",
    "definition": "(abstractly) eating (literally or figuratively); by extension (concretely) food (literally or figuratively) (KJV: eating, food, meat)",
    "transliteration": "βρῶσις",
    "references": [
      "G1035"
    ]
  },
  {
    "term": "Synomileo",
    "category": "Greek",
    "definition": "To converse mutually (KJV: talk with)",
    "transliteration": "συνομιλέω",
    "references": [
      "G4926"
    ]
  },
  {
    "term": "Sakis",
    "category": "Greek",
    "definition": "how (i.e. with G302 (ἄν), so) many times as (KJV: as oft(-en) as)",
    "transliteration": "ὁσάκις",
    "references": [
      "G3740"
    ]
  },
  {
    "term": "Daimon",
    "category": "Greek",
    "definition": "a dæmon or supernatural spirit (of a bad nature) (KJV: devil)",
    "transliteration": "δαίμων",
    "references": [
      "G1142"
    ]
  },
  {
    "term": "Pseydes",
    "category": "Greek",
    "definition": "untrue, i.e. erroneous, deceitful, wicked (KJV: false, liar)",
    "transliteration": "ψευδής",
    "references": [
      "G5571"
    ]
  },
  {
    "term": "Dena",
    "category": "Greek",
    "definition": "so and so (when the person is not specified) (KJV: such a man)",
    "transliteration": "δεῖνα",
    "references": [
      "G1170"
    ]
  },
  {
    "term": "Pharagx",
    "category": "Greek",
    "definition": "a gap or chasm, i.e. ravine (winter-torrent) (KJV: valley)",
    "transliteration": "φάραγξ",
    "references": [
      "G5327"
    ]
  },
  {
    "term": "Dynamis",
    "category": "Greek",
    "definition": "force (literally or figuratively); specially, miraculous power (usually by implication, a miracle itself) (KJV: ability, abundance, meaning, might(-ily, -y, -y deed), (worker of) miracle(-s), power, strength, violence, mighty (wonderful) work)",
    "transliteration": "δύναμις",
    "references": [
      "G1411"
    ]
  },
  {
    "term": "Perisseyma",
    "category": "Greek",
    "definition": "a surplus, or superabundance (KJV: abundance, that was left, over and above)",
    "transliteration": "περίσσευμα",
    "references": [
      "G4051"
    ]
  },
  {
    "term": "Koniao",
    "category": "Greek",
    "definition": "by analogy, lime); to whitewash (KJV: whiten)",
    "transliteration": "κονιάω",
    "references": [
      "G2867"
    ]
  },
  {
    "term": "Kathemai",
    "category": "Greek",
    "definition": "and (to sit; akin to the base of G1476 (ἑδραῖος)); to sit down; figuratively, to remain, reside (KJV: dwell, sit (by, down))",
    "transliteration": "κάθημαι",
    "references": [
      "G2521"
    ]
  },
  {
    "term": "Katapetasma",
    "category": "Greek",
    "definition": "something spread thoroughly, i.e. (specially) the door screen (to the Most Holy Place) in the Jewish Temple (KJV: vail)",
    "transliteration": "καταπέτασμα",
    "references": [
      "G2665"
    ]
  },
  {
    "term": "Lastos",
    "category": "Greek",
    "definition": "Blastus, an officer of Herod Agrippa (KJV: Blastus)",
    "transliteration": "Βλάστος",
    "references": [
      "G986"
    ]
  },
  {
    "term": "Charin",
    "category": "Greek",
    "definition": "through favor of, i.e. on account of (KJV: be-(for) cause of, for sake of, +…fore, X reproachfully)",
    "transliteration": "χάριν",
    "references": [
      "G5484"
    ]
  },
  {
    "term": "Niaytos",
    "category": "Greek",
    "definition": "a year (KJV: year)",
    "transliteration": "ἐνιαυτός",
    "references": [
      "G1763"
    ]
  },
  {
    "term": "Mpelos",
    "category": "Greek",
    "definition": "a vine (as coiling about a support) (KJV: vine)",
    "transliteration": "ἄμπελος",
    "references": [
      "G288"
    ]
  },
  {
    "term": "Periblepo",
    "category": "Greek",
    "definition": "To look all around (KJV: look (round) about (on))",
    "transliteration": "περιβλέπω",
    "references": [
      "G4017"
    ]
  },
  {
    "term": "Lmodam",
    "category": "Greek",
    "definition": "Elmodam, an Israelite (KJV: Elmodam)",
    "transliteration": "Ἐλμωδάμ",
    "references": [
      "G1678"
    ]
  },
  {
    "term": "Petomai",
    "category": "Greek",
    "definition": "To fly (KJV: fly(-ing))",
    "transliteration": "πέτομαι",
    "references": [
      "G4072"
    ]
  },
  {
    "term": "Moichao",
    "category": "Greek",
    "definition": "(middle voice) to commit adultery (KJV: commit adultery)",
    "transliteration": "μοιχάω",
    "references": [
      "G3429"
    ]
  },
  {
    "term": "Kakosis",
    "category": "Greek",
    "definition": "maltreatment (KJV: affliction)",
    "transliteration": "κάκωσις",
    "references": [
      "G2561"
    ]
  },
  {
    "term": "Llos",
    "category": "Greek",
    "definition": "\"else,\" i.e. different (in many applications) (KJV: more, one (another), (an-, some an-)other(-s, -wise))",
    "transliteration": "ἄλλος",
    "references": [
      "G243"
    ]
  },
  {
    "term": "Stamnos",
    "category": "Greek",
    "definition": "a jar or earthen tank (KJV: pot)",
    "transliteration": "στάμνος",
    "references": [
      "G4713"
    ]
  },
  {
    "term": "Spasmos",
    "category": "Greek",
    "definition": "a greeting (in person or by letter) (KJV: greeting, salutation)",
    "transliteration": "ἀσπασμός",
    "references": [
      "G783"
    ]
  },
  {
    "term": "Lasmos",
    "category": "Greek",
    "definition": "atonement, i.e. (concretely) an expiator (KJV: propitiation)",
    "transliteration": "ἱλασμός",
    "references": [
      "G2434"
    ]
  },
  {
    "term": "Pipothetos",
    "category": "Greek",
    "definition": "yearned upon, i.e. greatly loved (KJV: longed for)",
    "transliteration": "ἐπιπόθητος",
    "references": [
      "G1973"
    ]
  },
  {
    "term": "Erychoros",
    "category": "Greek",
    "definition": "spacious (KJV: broad)",
    "transliteration": "εὐρύχωρος",
    "references": [
      "G2149"
    ]
  },
  {
    "term": "Parakalypto",
    "category": "Greek",
    "definition": "To cover alongside, i.e. veil (figuratively) (KJV: hide)",
    "transliteration": "παρακαλύπτω",
    "references": [
      "G3871"
    ]
  },
  {
    "term": "Bma",
    "category": "Greek",
    "definition": "a step, i.e. foot-breath; by implication, a rostrum, i.e. a tribunal (KJV: judgment-seat, set (foot) on, throne)",
    "transliteration": "βῆμα",
    "references": [
      "G968"
    ]
  },
  {
    "term": "On",
    "category": "Greek",
    "definition": "(adverbially) certainly, or (conjunctionally) accordingly (KJV: and (so, truly), but, now (then), so (likewise then), then, therefore, verily, wherefore)",
    "transliteration": "οὖν",
    "references": [
      "G3767"
    ]
  },
  {
    "term": "Nendektos",
    "category": "Greek",
    "definition": "unadmitted, i.e. (by implication) not supposable (KJV: impossible)",
    "transliteration": "ἀνένδεκτος",
    "references": [
      "G418"
    ]
  },
  {
    "term": "Chrsma",
    "category": "Greek",
    "definition": "an unguent or smearing, i.e. (figuratively) the special endowment (\"chrism\") of the Holy Spirit (KJV: anointing, unction)",
    "transliteration": "χρῖσμα",
    "references": [
      "G5545"
    ]
  },
  {
    "term": "Thorax",
    "category": "Greek",
    "definition": "the chest (\"thorax\"), i.e. (by implication) a corslet (KJV: breast-plate)",
    "transliteration": "θώραξ",
    "references": [
      "G2382"
    ]
  },
  {
    "term": "Sygkakoycheo",
    "category": "Greek",
    "definition": "To maltreat in company with, i.e. (passively) endure persecution together (KJV: suffer affliction with)",
    "transliteration": "συγκακουχέω",
    "references": [
      "G4778"
    ]
  },
  {
    "term": "Diamachomai",
    "category": "Greek",
    "definition": "To fight fiercely (in altercation) (KJV: strive)",
    "transliteration": "διαμάχομαι",
    "references": [
      "G1264"
    ]
  },
  {
    "term": "Krystallizo",
    "category": "Greek",
    "definition": "To make (i.e. intransitively, resemble) ice (\"crystallize\") (KJV: be clear as crystal)",
    "transliteration": "κρυσταλλίζω",
    "references": [
      "G2929"
    ]
  },
  {
    "term": "Philanthropos",
    "category": "Greek",
    "definition": "fondly to man (\"philanthropically\"), i.e. humanely (KJV: courteously)",
    "transliteration": "φιλανθρώπως",
    "references": [
      "G5364"
    ]
  },
  {
    "term": "Sygkalypto",
    "category": "Greek",
    "definition": "To conceal altogether (KJV: cover)",
    "transliteration": "συγκαλύπτω",
    "references": [
      "G4780"
    ]
  },
  {
    "term": "Phoros",
    "category": "Greek",
    "definition": "a load (as borne), i.e. (figuratively) a tax (properly, an individual assessment on persons or property; whereas G5056 (τέλος) is usually a general toll on goods or travel) (KJV: tribute)",
    "transliteration": "φόρος",
    "references": [
      "G5411"
    ]
  },
  {
    "term": "Poreo",
    "category": "Greek",
    "definition": "To have no way out, i.e. be at a loss (mentally) (KJV:  (stand in) doubt, be perplexed)",
    "transliteration": "ἀπορέω",
    "references": [
      "G639"
    ]
  },
  {
    "term": "Sygkakopatheo",
    "category": "Greek",
    "definition": "To suffer hardship in company with (KJV: be partaker of afflictions)",
    "transliteration": "συγκακοπαθέω",
    "references": [
      "G4777"
    ]
  },
  {
    "term": "Edos",
    "category": "Greek",
    "definition": "a view, i.e. form (literally or figuratively) (KJV: appearance, fashion, shape, sight)",
    "transliteration": "εἶδος",
    "references": [
      "G1491"
    ]
  },
  {
    "term": "Kakopoios",
    "category": "Greek",
    "definition": "a bad-doer; (specially), a criminal (KJV: evil-doer, malefactor)",
    "transliteration": "κακοποιός",
    "references": [
      "G2555"
    ]
  },
  {
    "term": "Nagnorizomai",
    "category": "Greek",
    "definition": "To make (oneself) known (KJV: be made known)",
    "transliteration": "ἀναγνωρίζομαι",
    "references": [
      "G319"
    ]
  },
  {
    "term": "Lo",
    "category": "Greek",
    "definition": " (KJV: Eloi)",
    "transliteration": "ἐλοΐ",
    "references": [
      "G1682"
    ]
  },
  {
    "term": "Soreyo",
    "category": "Greek",
    "definition": "To pile up (literally or figuratively) (KJV: heap, load)",
    "transliteration": "σωρεύω",
    "references": [
      "G4987"
    ]
  },
  {
    "term": "Memphomai",
    "category": "Greek",
    "definition": "To blame (KJV: find fault)",
    "transliteration": "μέμφομαι",
    "references": [
      "G3201"
    ]
  },
  {
    "term": "Sthesis",
    "category": "Greek",
    "definition": "clothing (concretely) (KJV: government)",
    "transliteration": "ἔσθησις",
    "references": [
      "G2067"
    ]
  },
  {
    "term": "Pneymatiks",
    "category": "Greek",
    "definition": "non-physically, i.e. divinely, figuratively (KJV: spiritually)",
    "transliteration": "πνευματικῶς",
    "references": [
      "G4153"
    ]
  },
  {
    "term": "Chnos",
    "category": "Greek",
    "definition": "compare G2240 (ἥκω)); a track (figuratively) (KJV: step)",
    "transliteration": "ἴχνος",
    "references": [
      "G2487"
    ]
  },
  {
    "term": "Desmeyo",
    "category": "Greek",
    "definition": "To be a binder (captor), i.e. to enchain (a prisoner), to tie on (a load) (KJV:  bind)",
    "transliteration": "δεσμεύω",
    "references": [
      "G1195"
    ]
  },
  {
    "term": "Diktyon",
    "category": "Greek",
    "definition": "a seine (for fishing) (KJV: net)",
    "transliteration": "δίκτυον",
    "references": [
      "G1350"
    ]
  },
  {
    "term": "Phomoioo",
    "category": "Greek",
    "definition": "To assimilate closely (KJV: make like)",
    "transliteration": "ἀφομοιόω",
    "references": [
      "G871"
    ]
  },
  {
    "term": "Mempsimoiros",
    "category": "Greek",
    "definition": "akin to the base of G3313 (μέρος)); blaming fate, i.e. querulous (discontented) (KJV: complainer)",
    "transliteration": "μεμψίμοιρος",
    "references": [
      "G3202"
    ]
  },
  {
    "term": "Phistemi",
    "category": "Greek",
    "definition": "To remove, i.e. (actively) instigate to revolt; usually (reflexively) to desist, desert, etc. (KJV: depart, draw (fall) away, refrain, withdraw self)",
    "transliteration": "ἀφίστημι",
    "references": [
      "G868"
    ]
  },
  {
    "term": "Phedron",
    "category": "Greek",
    "definition": "a place of sitting apart, i.e. a privy (KJV: draught)",
    "transliteration": "ἀφεδρών",
    "references": [
      "G856"
    ]
  },
  {
    "term": "Kama",
    "category": "Greek",
    "definition": "properly, a burn (concretely), but used (abstractly) of a glow (KJV: heat)",
    "transliteration": "καῦμα",
    "references": [
      "G2738"
    ]
  },
  {
    "term": "Metralas",
    "category": "Greek",
    "definition": "a mother-thresher, i.e. matricide (KJV: murderer of mothers)",
    "transliteration": "μητραλῴας",
    "references": [
      "G3389"
    ]
  },
  {
    "term": "Proaireomai",
    "category": "Greek",
    "definition": "To choose for oneself before another thing (prefer), i.e. (by implication) to propose (intend) (KJV: purpose)",
    "transliteration": "προαιρέομαι",
    "references": [
      "G4255"
    ]
  },
  {
    "term": "Proa",
    "category": "Greek",
    "definition": "day-dawn (KJV: early, morning)",
    "transliteration": "πρωΐα",
    "references": [
      "G4405"
    ]
  },
  {
    "term": "Demioyrgos",
    "category": "Greek",
    "definition": "a worker for the people, i.e. mechanic (spoken of the Creator) (KJV: maker)",
    "transliteration": "δημιουργός",
    "references": [
      "G1217"
    ]
  },
  {
    "term": "Tolmeroteron",
    "category": "Greek",
    "definition": "more daringly, i.e. with greater confidence than otherwise (KJV: the more boldly)",
    "transliteration": "τολμηρότερον",
    "references": [
      "G5112"
    ]
  },
  {
    "term": "Palaioo",
    "category": "Greek",
    "definition": "To make (passively, become) worn out, or declare obsolete (KJV: decay, make (wax) old)",
    "transliteration": "παλαιόω",
    "references": [
      "G3822"
    ]
  },
  {
    "term": "Tameon",
    "category": "Greek",
    "definition": "akin to , to cut); a dispensary or magazine, i.e. a chamber on the ground-floor or interior of an Oriental house (generally used for storage or privacy, a spot for retirement) (KJV: secret chamber, closet, storehouse)",
    "transliteration": "ταμεῖον",
    "references": [
      "G5009"
    ]
  },
  {
    "term": "Nosema",
    "category": "Greek",
    "definition": "an ailment (KJV: disease)",
    "transliteration": "νόσημα",
    "references": [
      "G3553"
    ]
  },
  {
    "term": "Krabbatos",
    "category": "Greek",
    "definition": "a mattress (KJV: bed)",
    "transliteration": "κράββατος",
    "references": [
      "G2895"
    ]
  },
  {
    "term": "Arion",
    "category": "Greek",
    "definition": "properly, fresh, i.e. (adverb with ellipsis of G2250 (ἡμέρα)) to-morrow (KJV: (to-)morrow, next day)",
    "transliteration": "αὔριον",
    "references": [
      "G839"
    ]
  },
  {
    "term": "Bareo",
    "category": "Greek",
    "definition": "To weigh down (figuratively) (KJV: burden, charge, heavy, press)",
    "transliteration": "βαρέω",
    "references": [
      "G916"
    ]
  },
  {
    "term": "Klines",
    "category": "Greek",
    "definition": "not leaning, i.e. (figuratively) firm (KJV: without wavering)",
    "transliteration": "ἀκλινής",
    "references": [
      "G186"
    ]
  },
  {
    "term": "Panteles",
    "category": "Greek",
    "definition": "full-ended, i.e. entire (neuter as noun, completion) (KJV: + in (no) wise, uttermost)",
    "transliteration": "παντελής",
    "references": [
      "G3838"
    ]
  },
  {
    "term": "Strepho",
    "category": "Greek",
    "definition": "To twist, i.e. turn quite around or reverse (literally or figuratively) (KJV: convert, turn (again, back again, self, self about))",
    "transliteration": "στρέφω",
    "references": [
      "G4762"
    ]
  },
  {
    "term": "Leysis",
    "category": "Greek",
    "definition": "an advent (KJV: coming)",
    "transliteration": "ἔλευσις",
    "references": [
      "G1660"
    ]
  },
  {
    "term": "Panistamai",
    "category": "Greek",
    "definition": "To stand up on, i.e. (figuratively) to attack (KJV: rise up against)",
    "transliteration": "ἐπανίσταμαι",
    "references": [
      "G1881"
    ]
  },
  {
    "term": "Mbapto",
    "category": "Greek",
    "definition": "To whelm on, i.e. wet (a part of the person, etc.) by contact with a fluid (KJV: dip)",
    "transliteration": "ἐμβάπτω",
    "references": [
      "G1686"
    ]
  },
  {
    "term": "Syneyocheo",
    "category": "Greek",
    "definition": "To entertain sumptuously in company with, i.e. (middle voice or passive) to revel together (KJV: feast with)",
    "transliteration": "συνευωχέω",
    "references": [
      "G4910"
    ]
  },
  {
    "term": "Gdoos",
    "category": "Greek",
    "definition": "the eighth (KJV: eighth)",
    "transliteration": "ὄγδοος",
    "references": [
      "G3590"
    ]
  },
  {
    "term": "Eelzeboyl",
    "category": "Greek",
    "definition": "dung-god; Beelzebul, a name of Satan (KJV: Beelzebub)",
    "transliteration": "Βεελζεβούλ",
    "references": [
      "G954"
    ]
  },
  {
    "term": "Pilysis",
    "category": "Greek",
    "definition": "explanation, i.e. application (KJV: interpretation)",
    "transliteration": "ἐπίλυσις",
    "references": [
      "G1955"
    ]
  },
  {
    "term": "Stenazo",
    "category": "Greek",
    "definition": "To make (intransitively, be) in straits, i.e. (by implication) to sigh, murmur, pray inaudibly (KJV: with grief, groan, grudge, sigh)",
    "transliteration": "στενάζω",
    "references": [
      "G4727"
    ]
  },
  {
    "term": "Thymos",
    "category": "Greek",
    "definition": "passion (as if breathing hard) (KJV: fierceness, indignation, wrath)",
    "transliteration": "θυμός",
    "references": [
      "G2372"
    ]
  },
  {
    "term": "Perentygchano",
    "category": "Greek",
    "definition": "To intercede in behalf of (KJV: make intercession for)",
    "transliteration": "ὑπερεντυγχάνω",
    "references": [
      "G5241"
    ]
  },
  {
    "term": "Sos",
    "category": "Greek",
    "definition": "similar (in amount and kind) (KJV: + agree, as much, equal, like)",
    "transliteration": "ἴσος",
    "references": [
      "G2470"
    ]
  },
  {
    "term": "Prton",
    "category": "Greek",
    "definition": "firstly (in time, place, order, or importance) (KJV: before, at the beginning, chiefly (at, at the) first (of all))",
    "transliteration": "πρῶτον",
    "references": [
      "G4412"
    ]
  },
  {
    "term": "Prositos",
    "category": "Greek",
    "definition": "inaccessible (KJV: which no man can approach)",
    "transliteration": "ἀπρόσιτος",
    "references": [
      "G676"
    ]
  },
  {
    "term": "Geenna",
    "category": "Greek",
    "definition": "valley of (the son of) Hinnom; ge-henna (or Ge-Hinnom), a valley of Jerusalem, used (figuratively) as a name for the place (or state) of everlasting punishment (KJV: hell)",
    "transliteration": "γέεννα",
    "references": [
      "G1067"
    ]
  },
  {
    "term": "Pathetos",
    "category": "Greek",
    "definition": "liable (i.e. doomed) to experience pain (KJV: suffer)",
    "transliteration": "παθητός",
    "references": [
      "G3805"
    ]
  },
  {
    "term": "Dermatinos",
    "category": "Greek",
    "definition": "made of hide (KJV: leathern, of a skin)",
    "transliteration": "δερμάτινος",
    "references": [
      "G1193"
    ]
  },
  {
    "term": "Okiakos",
    "category": "Greek",
    "definition": "familiar, i.e. (as noun) relatives (KJV: they (them) of (his own) household)",
    "transliteration": "οἰκιακός",
    "references": [
      "G3615"
    ]
  },
  {
    "term": "Postereo",
    "category": "Greek",
    "definition": "To despoil (KJV: defraud, destitute, kept back by fraud)",
    "transliteration": "ἀποστερέω",
    "references": [
      "G650"
    ]
  },
  {
    "term": "Pelos",
    "category": "Greek",
    "definition": "clay (KJV: clay)",
    "transliteration": "πηλός",
    "references": [
      "G4081"
    ]
  },
  {
    "term": "Ethphage",
    "category": "Greek",
    "definition": "fig-house; Beth-phage, a place in Palestine (KJV: Bethphage)",
    "transliteration": "Βηθφαγή",
    "references": [
      "G967"
    ]
  },
  {
    "term": "Bastazo",
    "category": "Greek",
    "definition": "To lift, literally or figuratively (endure, declare, sustain, receive, etc.) (KJV: bear, carry, take up)",
    "transliteration": "βαστάζω",
    "references": [
      "G941"
    ]
  },
  {
    "term": "Skaphe",
    "category": "Greek",
    "definition": "a \"skiff\" (as if dug out), or yawl (carried aboard a large vessel for landing) (KJV: boat)",
    "transliteration": "σκάφη",
    "references": [
      "G4627"
    ]
  },
  {
    "term": "Atos",
    "category": "Greek",
    "definition": "the reflexive pronoun self, used (alone or in the comparative G1438 (ἑαυτοῦ)) of the third person , and (with the proper personal pronoun) of the other persons (KJV: her, it(-self), one, the other, (mine) own, said, (self-), the) same, ((him-, my-, thy- )self, (your-)selves, she, that, their(-s), them(-selves), there(-at, - by, -in, -into, -of, -on, -with), they, (these) things, this (man), those, together, very, which)",
    "transliteration": "αὐτός",
    "references": [
      "G846"
    ]
  },
  {
    "term": "Protrecho",
    "category": "Greek",
    "definition": "To run forward, i.e. outstrip, precede (KJV: outrun, run before)",
    "transliteration": "προτρέχω",
    "references": [
      "G4390"
    ]
  },
  {
    "term": "Thoos",
    "category": "Greek",
    "definition": "not guilty (KJV: innocent)",
    "transliteration": "ἄθωος",
    "references": [
      "G121"
    ]
  },
  {
    "term": "Okodomeo",
    "category": "Greek",
    "definition": "To be a house-builder, i.e. construct or (figuratively) confirm (KJV: (be in) build(-er, -ing, up), edify, embolden)",
    "transliteration": "οἰκοδομέω",
    "references": [
      "G3618"
    ]
  },
  {
    "term": "Pneymatikos",
    "category": "Greek",
    "definition": "non-carnal, i.e. (humanly) ethereal (as opposed to gross), or (dæmoniacally) a spirit (concretely), or (divinely) supernatural, regenerate, religious (KJV: spiritual)",
    "transliteration": "πνευματικός",
    "references": [
      "G4152"
    ]
  },
  {
    "term": "Kletos",
    "category": "Greek",
    "definition": "invited, i.e. appointed, or (specially), a saint (KJV: called)",
    "transliteration": "κλητός",
    "references": [
      "G2822"
    ]
  },
  {
    "term": "Poiesis",
    "category": "Greek",
    "definition": "action, i.e. performance (of the law) (KJV: deed)",
    "transliteration": "ποίησις",
    "references": [
      "G4162"
    ]
  },
  {
    "term": "Mmos",
    "category": "Greek",
    "definition": "a flaw or blot, i.e. (figuratively) disgraceful person (KJV: blemish)",
    "transliteration": "μῶμος",
    "references": [
      "G3470"
    ]
  },
  {
    "term": "Oibe",
    "category": "Greek",
    "definition": "probably akin to the base of G5457 (φῶς)); Phœbe, a Christian woman (KJV: Phebe)",
    "transliteration": "Φοίβη",
    "references": [
      "G5402"
    ]
  },
  {
    "term": "Aboylon",
    "category": "Greek",
    "definition": "Zabulon (i.e. Zebulon), a region of Palestine (KJV: Zabulon)",
    "transliteration": "Ζαβουλών",
    "references": [
      "G2194"
    ]
  },
  {
    "term": "Perissoteron",
    "category": "Greek",
    "definition": "in a more superabundant way (KJV: more abundantly, a great deal, far more)",
    "transliteration": "περισσότερον",
    "references": [
      "G4054"
    ]
  },
  {
    "term": "Xotheo",
    "category": "Greek",
    "definition": "To expel; by implication, to propel (KJV: drive out, thrust in)",
    "transliteration": "ἐξωθέω",
    "references": [
      "G1856"
    ]
  },
  {
    "term": "Karpos",
    "category": "Greek",
    "definition": "fruit (as plucked), literally or figuratively (KJV: fruit)",
    "transliteration": "καρπός",
    "references": [
      "G2590"
    ]
  },
  {
    "term": "Spilas",
    "category": "Greek",
    "definition": "a ledge or reef of rock in the sea (KJV: spot (by confusion with G4696 (σπίλος)))",
    "transliteration": "σπιλάς",
    "references": [
      "G4694"
    ]
  },
  {
    "term": "Kakopatheo",
    "category": "Greek",
    "definition": "To undergo hardship (KJV: be afflicted, endure afflictions (hardness), suffer trouble)",
    "transliteration": "κακοπαθέω",
    "references": [
      "G2553"
    ]
  },
  {
    "term": "Diasozo",
    "category": "Greek",
    "definition": "To save thoroughly, i.e. (by implication or analogy) to cure, preserve, rescue, etc. (KJV: bring safe, escape (safe), heal, make perfectly whole, save)",
    "transliteration": "διασώζω",
    "references": [
      "G1295"
    ]
  },
  {
    "term": "Ntos",
    "category": "Greek",
    "definition": "inside (adverb or noun) (KJV: within)",
    "transliteration": "ἐντός",
    "references": [
      "G1787"
    ]
  },
  {
    "term": "Syndoxazo",
    "category": "Greek",
    "definition": "To exalt to dignity in company (i.e. similarly) with (KJV: glorify together)",
    "transliteration": "συνδοξάζω",
    "references": [
      "G4888"
    ]
  },
  {
    "term": "Ipteo",
    "category": "Greek",
    "definition": "To toss up (KJV: cast off)",
    "transliteration": "ῥιπτέω",
    "references": [
      "G4495"
    ]
  },
  {
    "term": "Li",
    "category": "Greek",
    "definition": "my God (KJV:  Eli)",
    "transliteration": "ἠλί",
    "references": [
      "G2241"
    ]
  },
  {
    "term": "Narion",
    "category": "Greek",
    "definition": "a little ass (KJV: young ass)",
    "transliteration": "ὀνάριον",
    "references": [
      "G3678"
    ]
  },
  {
    "term": "Dolon",
    "category": "Greek",
    "definition": "subservient (KJV: servant)",
    "transliteration": "δοῦλον",
    "references": [
      "G1400"
    ]
  },
  {
    "term": "Ntalma",
    "category": "Greek",
    "definition": "an injunction, i.e. religious precept (KJV: commandment)",
    "transliteration": "ἔνταλμα",
    "references": [
      "G1778"
    ]
  },
  {
    "term": "Nexikakos",
    "category": "Greek",
    "definition": "enduring of ill, i.e. forbearing (KJV: patient)",
    "transliteration": "ἀνεξίκακος",
    "references": [
      "G420"
    ]
  },
  {
    "term": "Phistemi",
    "category": "Greek",
    "definition": "To stand upon, i.e. be present (in various applications, friendly or otherwise, usually literal); (KJV: --assault, come (in, to, unto, upon), be at hand (instant), present, stand (before, by, over))",
    "transliteration": "ἐφίστημι",
    "references": [
      "G2186"
    ]
  },
  {
    "term": "Postomatizo",
    "category": "Greek",
    "definition": "To speak off-hand (properly, dictate), i.e. to catechize (in an invidious manner) (KJV: provoke to speak)",
    "transliteration": "ἀποστοματίζω",
    "references": [
      "G653"
    ]
  },
  {
    "term": "Akinthos",
    "category": "Greek",
    "definition": "the \"hyacinth\" or \"jacinth\", i.e. some gem of a deep blue color, probably the zirkon (KJV:  jacinth)",
    "transliteration": "ὑάκινθος",
    "references": [
      "G5192"
    ]
  },
  {
    "term": "Smyrna",
    "category": "Greek",
    "definition": "myrrh (KJV: myrrh)",
    "transliteration": "σμύρνα",
    "references": [
      "G4666"
    ]
  },
  {
    "term": "Prospipto",
    "category": "Greek",
    "definition": "To fall towards, i.e. (gently) prostrate oneself (in supplication or homage), or (violently) to rush upon (in storm) (KJV: beat upon, fall (down) at (before))",
    "transliteration": "προσπίπτω",
    "references": [
      "G4363"
    ]
  },
  {
    "term": "Phelimos",
    "category": "Greek",
    "definition": "helpful or serviceable, i.e. advantageous (KJV: profit(-able))",
    "transliteration": "ὠφέλιμος",
    "references": [
      "G5624"
    ]
  },
  {
    "term": "Phtheiro",
    "category": "Greek",
    "definition": "properly, to shrivel or wither, i.e. to spoil (by any process) or (generally) to ruin (especially figuratively, by moral influences, to deprave) (KJV: corrupt (self), defile, destroy)",
    "transliteration": "φθείρω",
    "references": [
      "G5351"
    ]
  },
  {
    "term": "Pnos",
    "category": "Greek",
    "definition": "sleep, i.e. (figuratively) spiritual torpor (KJV: sleep)",
    "transliteration": "ὕπνος",
    "references": [
      "G5258"
    ]
  },
  {
    "term": "Theoreo",
    "category": "Greek",
    "definition": "To be a spectator of, i.e. discern, (literally, figuratively (experience) or intensively (acknowledge)) (KJV: behold, consider, look on, perceive, see)",
    "transliteration": "θεωρέω",
    "references": [
      "G2334"
    ]
  },
  {
    "term": "Azaros",
    "category": "Greek",
    "definition": "Lazarus (i.e. Elazar), the name of two Israelites (one imaginary) (KJV: Lazarus)",
    "transliteration": "Λάζαρος",
    "references": [
      "G2976"
    ]
  },
  {
    "term": "Nakemai",
    "category": "Greek",
    "definition": "To recline (as a corpse or at a meal) (KJV: guest, lean, lie, sit (down, at meat), at the table)",
    "transliteration": "ἀνακεῖμαι",
    "references": [
      "G345"
    ]
  },
  {
    "term": "Prothymos",
    "category": "Greek",
    "definition": "forward in spirit, i.e. predisposed; neuter (as noun) alacrity (KJV: ready, willing)",
    "transliteration": "πρόθυμος",
    "references": [
      "G4289"
    ]
  },
  {
    "term": "Telos",
    "category": "Greek",
    "definition": "properly, the point aimed at as a limit, i.e. (by implication) the conclusion of an act or state (termination (literally, figuratively or indefinitely), result (immediate, ultimate or prophetic), purpose); specially, an impost or levy (as paid) (KJV: + continual, custom, end(-ing), finally, uttermost)",
    "transliteration": "τέλος",
    "references": [
      "G5056"
    ]
  },
  {
    "term": "Palos",
    "category": "Greek",
    "definition": "soft (KJV: tender)",
    "transliteration": "ἀπαλός",
    "references": [
      "G527"
    ]
  },
  {
    "term": "Mos",
    "category": "Greek",
    "definition": "at the same time, i.e. (conjunctionally) notwithstanding, yet still (KJV: and even, nevertheless, though but)",
    "transliteration": "ὅμως",
    "references": [
      "G3676"
    ]
  },
  {
    "term": "Kathaireo",
    "category": "Greek",
    "definition": "To lower (or with violence) demolish (literally or figuratively) (KJV: cast (pull, put, take) down, destroy)",
    "transliteration": "καθαιρέω",
    "references": [
      "G2507"
    ]
  },
  {
    "term": "Kythes",
    "category": "Greek",
    "definition": "a Scythene or Scythian, i.e. (by implication) a savage (KJV: Scythian)",
    "transliteration": "Σκύθης",
    "references": [
      "G4658"
    ]
  },
  {
    "term": "Xylon",
    "category": "Greek",
    "definition": "timber (as fuel or material); by implication, a stick, club or tree or other wooden article or substance (KJV: staff, stocks, tree, wood)",
    "transliteration": "ξύλον",
    "references": [
      "G3586"
    ]
  },
  {
    "term": "Gonypeteo",
    "category": "Greek",
    "definition": "To fall on the knee (KJV: bow the knee, kneel down)",
    "transliteration": "γονυπετέω",
    "references": [
      "G1120"
    ]
  },
  {
    "term": "Eergeteo",
    "category": "Greek",
    "definition": "To be philanthropic (KJV: do good)",
    "transliteration": "εὐεργετέω",
    "references": [
      "G2109"
    ]
  },
  {
    "term": "Baon",
    "category": "Greek",
    "definition": "a palm twig (as going out far) (KJV: branch)",
    "transliteration": "βαΐον",
    "references": [
      "G902"
    ]
  },
  {
    "term": "Melas",
    "category": "Greek",
    "definition": "black (KJV: black)",
    "transliteration": "μέλας",
    "references": [
      "G3189"
    ]
  },
  {
    "term": "Metis",
    "category": "Greek",
    "definition": "whether any (KJV: any (sometimes unexpressed except by the simple interrogative form of the sentence))",
    "transliteration": "μήτις",
    "references": [
      "G3387"
    ]
  },
  {
    "term": "Remia",
    "category": "Greek",
    "definition": "solitude (concretely) (KJV: desert, wilderness)",
    "transliteration": "ἐρημία",
    "references": [
      "G2047"
    ]
  },
  {
    "term": "Diastole",
    "category": "Greek",
    "definition": "a variation (KJV: difference, distinction)",
    "transliteration": "διαστολή",
    "references": [
      "G1293"
    ]
  },
  {
    "term": "Makros",
    "category": "Greek",
    "definition": "long (in place (distant) or time (neuter plural)) (KJV: far, long)",
    "transliteration": "μακρός",
    "references": [
      "G3117"
    ]
  },
  {
    "term": "Oannes",
    "category": "Greek",
    "definition": "Joannes (i.e. Jochanan), the name of four Israelites (KJV: John)",
    "transliteration": "Ἰωάννης",
    "references": [
      "G2491"
    ]
  },
  {
    "term": "Keraios",
    "category": "Greek",
    "definition": "unmixed, i.e. (figuratively) innocent (KJV: harmless, simple)",
    "transliteration": "ἀκέραιος",
    "references": [
      "G185"
    ]
  },
  {
    "term": "Elabeia",
    "category": "Greek",
    "definition": "properly, caution, i.e. (religiously) reverence (piety); by implication, dread (concretely) (KJV: fear(-ed))",
    "transliteration": "εὐλάβεια",
    "references": [
      "G2124"
    ]
  },
  {
    "term": "Ipe",
    "category": "Greek",
    "definition": "a jerk (of the eye, i.e. (by analogy) an instant) (KJV: twinkling)",
    "transliteration": "ῥιπή",
    "references": [
      "G4493"
    ]
  },
  {
    "term": "Pedalion",
    "category": "Greek",
    "definition": "from the same as G3976 (πέδη)); a \"pedal\", i.e. helm (KJV: rudder)",
    "transliteration": "πηδάλιον",
    "references": [
      "G4079"
    ]
  },
  {
    "term": "Keiro",
    "category": "Greek",
    "definition": "To shear (KJV: shear(-er))",
    "transliteration": "κείρω",
    "references": [
      "G2751"
    ]
  },
  {
    "term": "Oron",
    "category": "Greek",
    "definition": "a forum or market-place; only in comparative with G675 (Ἄππιος); a station on the Appian road (KJV: forum)",
    "transliteration": "Φόρον",
    "references": [
      "G5410"
    ]
  },
  {
    "term": "Proteino",
    "category": "Greek",
    "definition": "To protend, i.e. tie prostrate (for scourging) (KJV: bind)",
    "transliteration": "προτείνω",
    "references": [
      "G4385"
    ]
  },
  {
    "term": "Miasma",
    "category": "Greek",
    "definition": "(morally) foulness (properly, the effect) (KJV: pollution)",
    "transliteration": "μίασμα",
    "references": [
      "G3393"
    ]
  },
  {
    "term": "Rodion",
    "category": "Greek",
    "definition": "Herodion, a Christian (KJV: Herodion)",
    "transliteration": "Ἡρωδίων",
    "references": [
      "G2267"
    ]
  },
  {
    "term": "Schyros",
    "category": "Greek",
    "definition": "forcible (literally or figuratively) (KJV: boisterous, mighty(-ier), powerful, strong(-er, man), valiant)",
    "transliteration": "ἰσχυρός",
    "references": [
      "G2478"
    ]
  },
  {
    "term": "Erosylos",
    "category": "Greek",
    "definition": "a temple-despoiler (KJV: robber of churches)",
    "transliteration": "ἱερόσυλος",
    "references": [
      "G2417"
    ]
  },
  {
    "term": "Byssos",
    "category": "Greek",
    "definition": "white linen (KJV: fine linen)",
    "transliteration": "βύσσος",
    "references": [
      "G1040"
    ]
  },
  {
    "term": "Rchomai",
    "category": "Greek",
    "definition": "To come or go (in a great variety of applications, literally and figuratively) (KJV: accompany, appear, bring, come, enter, fall out, go, grow, X light, X next, pass, resort, be set)",
    "transliteration": "ἔρχομαι",
    "references": [
      "G2064"
    ]
  },
  {
    "term": "Riskilla",
    "category": "Greek",
    "definition": "Priscilla (i.e. little Prisca), a Christian woman (KJV: Priscilla)",
    "transliteration": "Πρίσκιλλα",
    "references": [
      "G4252"
    ]
  },
  {
    "term": "Men",
    "category": "Greek",
    "definition": "a particle of affirmation (only with G2229 (ἦ)); assuredly (KJV: + surely)",
    "transliteration": "μήν",
    "references": [
      "G3375"
    ]
  },
  {
    "term": "Dokimos",
    "category": "Greek",
    "definition": "properly, acceptable (current after assayal), i.e. approved (KJV: approved, tried)",
    "transliteration": "δόκιμος",
    "references": [
      "G1384"
    ]
  },
  {
    "term": "Koinonia",
    "category": "Greek",
    "definition": "partnership, i.e. (literally) participation, or (social) intercourse, or (pecuniary) benefaction (KJV: (to) communicate(-ation), communion, (contri-)distribution, fellowship)",
    "transliteration": "κοινωνία",
    "references": [
      "G2842"
    ]
  },
  {
    "term": "Psithyrismos",
    "category": "Greek",
    "definition": "by implication, a slander; probably akin to G5574 (ψεύδομαι)); whispering, i.e. secret detraction (KJV: whispering)",
    "transliteration": "ψιθυρισμός",
    "references": [
      "G5587"
    ]
  },
  {
    "term": "Penes",
    "category": "Greek",
    "definition": "starving, i.e. indigent (KJV: poor)",
    "transliteration": "πένης",
    "references": [
      "G3993"
    ]
  },
  {
    "term": "Addaos",
    "category": "Greek",
    "definition": "Thaddæus, one of the Apostles (KJV: Thaddæus)",
    "transliteration": "Θαδδαῖος",
    "references": [
      "G2280"
    ]
  },
  {
    "term": "Rkos",
    "category": "Greek",
    "definition": "perhaps akin to G3725 (ὅριον)); a limit, i.e. (sacred) restraint (specially, an oath) (KJV: oath)",
    "transliteration": "ὅρκος",
    "references": [
      "G3727"
    ]
  },
  {
    "term": "Sebeia",
    "category": "Greek",
    "definition": "impiety, i.e. (by implication) wickedness (KJV: ungodly(-liness))",
    "transliteration": "ἀσέβεια",
    "references": [
      "G763"
    ]
  },
  {
    "term": "Aiaphas",
    "category": "Greek",
    "definition": "the dell; Caiaphas (i.e. Cajepha), an Israelite (KJV: Caiaphas)",
    "transliteration": "Καϊάφας",
    "references": [
      "G2533"
    ]
  },
  {
    "term": "Yateira",
    "category": "Greek",
    "definition": "Thyatira, a place in Asia Minor (KJV: Thyatira)",
    "transliteration": "Θυάτειρα",
    "references": [
      "G2363"
    ]
  },
  {
    "term": "Dysenteria",
    "category": "Greek",
    "definition": "a \"dysentery\" (KJV: bloody flux)",
    "transliteration": "δυσεντερία",
    "references": [
      "G1420"
    ]
  },
  {
    "term": "Rchaos",
    "category": "Greek",
    "definition": "original or primeval (KJV: (them of) old (time))",
    "transliteration": "ἀρχαῖος",
    "references": [
      "G744"
    ]
  },
  {
    "term": "Techos",
    "category": "Greek",
    "definition": "a wall (as formative of a house) (KJV: wall)",
    "transliteration": "τεῖχος",
    "references": [
      "G5038"
    ]
  },
  {
    "term": "Prophetes",
    "category": "Greek",
    "definition": "a foreteller (\"prophet\"); by analogy, an inspired speaker; by extension, a poet (KJV: prophet)",
    "transliteration": "προφήτης",
    "references": [
      "G4396"
    ]
  },
  {
    "term": "Piosa",
    "category": "Greek",
    "definition": "supervening, i.e. (G2250 (ἡμέρα) or G3571 (νύξ) being expressed or implied) the ensuing day or night (KJV: following, next)",
    "transliteration": "ἐπιοῦσα",
    "references": [
      "G1966"
    ]
  },
  {
    "term": "Perissoteros",
    "category": "Greek",
    "definition": "more superabundantly (KJV: more abundant(-ly), X the more earnest, (more) exceedingly, more frequent, much more, the rather)",
    "transliteration": "περισσοτέρως",
    "references": [
      "G4056"
    ]
  },
  {
    "term": "Pantachothen",
    "category": "Greek",
    "definition": "from all directions (KJV: from every quarter)",
    "transliteration": "πανταχόθεν",
    "references": [
      "G3836"
    ]
  },
  {
    "term": "Diatagma",
    "category": "Greek",
    "definition": "an arrangement, i.e. (authoritative) edict (KJV: commandment)",
    "transliteration": "διάταγμα",
    "references": [
      "G1297"
    ]
  },
  {
    "term": "Porphanizo",
    "category": "Greek",
    "definition": "To bereave wholly, i.e. (figuratively) separate (from intercourse) (KJV: take)",
    "transliteration": "ἀπορφανίζω",
    "references": [
      "G642"
    ]
  },
  {
    "term": "Nanias",
    "category": "Greek",
    "definition": "Ananias, the name of three Israelites (KJV: Ananias)",
    "transliteration": "Ἀνανίας",
    "references": [
      "G367"
    ]
  },
  {
    "term": "Phron",
    "category": "Greek",
    "definition": "properly, mindless, i.e. stupid, (by implication) ignorant, (specially) egotistic, (practically) rash, or (morally) unbelieving (KJV: fool(-ish), unwise)",
    "transliteration": "ἄφρων",
    "references": [
      "G878"
    ]
  },
  {
    "term": "Yrophoinissa",
    "category": "Greek",
    "definition": "a Syro-phœnician woman, i.e. a female native of Phœnicia in Syria (KJV: Syrophenician)",
    "transliteration": "Συροφοίνισσα",
    "references": [
      "G4949"
    ]
  },
  {
    "term": "Pseydapostolos",
    "category": "Greek",
    "definition": "a spurious apostle, i.e. pretended pracher (KJV: false teacher)",
    "transliteration": "ψευδαπόστολος",
    "references": [
      "G5570"
    ]
  },
  {
    "term": "Proerchomai",
    "category": "Greek",
    "definition": "To go onward, precede (in place or time) (KJV: go before (farther, forward), outgo, pass on)",
    "transliteration": "προέρχομαι",
    "references": [
      "G4281"
    ]
  },
  {
    "term": "Dokeo",
    "category": "Greek",
    "definition": "compare the base of G1166 (δεικνύω)) of the same meaning; to think; by implication, to seem (truthfully or uncertainly) (KJV: be accounted, (of own) please(-ure), be of reputation, seem (good), suppose, think, trow)",
    "transliteration": "δοκέω",
    "references": [
      "G1380"
    ]
  },
  {
    "term": "Dis",
    "category": "Greek",
    "definition": "twice (KJV: again, twice)",
    "transliteration": "δίς",
    "references": [
      "G1364"
    ]
  },
  {
    "term": "Symmimetes",
    "category": "Greek",
    "definition": "a co-imitator, i.e. fellow votary (KJV: follower together)",
    "transliteration": "συμμιμητής",
    "references": [
      "G4831"
    ]
  },
  {
    "term": "Syntasso",
    "category": "Greek",
    "definition": "To arrange jointly, i.e. (figuratively) to direct (KJV: appoint)",
    "transliteration": "συντάσσω",
    "references": [
      "G4929"
    ]
  },
  {
    "term": "Tristegon",
    "category": "Greek",
    "definition": "a third roof (story) (KJV: third loft)",
    "transliteration": "τρίστεγον",
    "references": [
      "G5152"
    ]
  },
  {
    "term": "Posis",
    "category": "Greek",
    "definition": "a drinking (the act), i.e. (concretely) a draught (KJV: drink)",
    "transliteration": "πόσις",
    "references": [
      "G4213"
    ]
  },
  {
    "term": "Eroia",
    "category": "Greek",
    "definition": "Berœa, a place in Macedonia (KJV: Berea)",
    "transliteration": "Βέροια",
    "references": [
      "G960"
    ]
  },
  {
    "term": "Erbe",
    "category": "Greek",
    "definition": "Derbe, a place in Asia Minor (KJV: Derbe)",
    "transliteration": "Δέρβη",
    "references": [
      "G1191"
    ]
  },
  {
    "term": "Goge",
    "category": "Greek",
    "definition": "a bringing up, i.e. mode of living (KJV: manner of life)",
    "transliteration": "ἀγωγή",
    "references": [
      "G72"
    ]
  },
  {
    "term": "Typho",
    "category": "Greek",
    "definition": "To make a smoke, i.e. slowly consume without flame (KJV: smoke)",
    "transliteration": "τύφω",
    "references": [
      "G5188"
    ]
  },
  {
    "term": "Meta",
    "category": "Greek",
    "definition": "properly, denoting accompaniment; \"amid\" (local or causal); modified variously according to the case (genitive association, or accusative succession) with which it is joined; occupying an intermediate position between G575 (ἀπό) or G1537 (ἐκ) and G1519 (εἰς) or G4314 (πρός); less intimate than G1722 (ἐν) and less close than G4862 (σύν)) (KJV: after(-ward), X that he again, against, among, X and, + follow, hence, hereafter, in, of, (up-)on, + our, X and setting, since, (un-)to, + together, when, with (+ -out))",
    "transliteration": "μετά",
    "references": [
      "G3326"
    ]
  },
  {
    "term": "Kataskopos",
    "category": "Greek",
    "definition": "a reconnoiterer (KJV: spy)",
    "transliteration": "κατάσκοπος",
    "references": [
      "G2685"
    ]
  },
  {
    "term": "Doche",
    "category": "Greek",
    "definition": "a reception, i.e. convivial entertainment (KJV: feast)",
    "transliteration": "δοχή",
    "references": [
      "G1403"
    ]
  },
  {
    "term": "Podekatoo",
    "category": "Greek",
    "definition": "To tithe (as debtor or creditor) (KJV: (give, pay, take) tithe)",
    "transliteration": "ἀποδεκατόω",
    "references": [
      "G586"
    ]
  },
  {
    "term": "Bleteos",
    "category": "Greek",
    "definition": "fit to be cast (i.e. applied) (KJV: must be put)",
    "transliteration": "βλητέος",
    "references": [
      "G992"
    ]
  },
  {
    "term": "Epsycheo",
    "category": "Greek",
    "definition": "To be in good spirits, i.e. feel encouraged (KJV: be of good comfort)",
    "transliteration": "εὐψυχέω",
    "references": [
      "G2174"
    ]
  },
  {
    "term": "Kryptos",
    "category": "Greek",
    "definition": "concealed, i.e. private (KJV: hid(-den), inward(-ly), secret)",
    "transliteration": "κρυπτός",
    "references": [
      "G2927"
    ]
  },
  {
    "term": "Mphobos",
    "category": "Greek",
    "definition": "in fear, i.e. alarmed (KJV: affrighted, afraid, tremble)",
    "transliteration": "ἔμφοβος",
    "references": [
      "G1719"
    ]
  },
  {
    "term": "Gnorizo",
    "category": "Greek",
    "definition": "To make known; subjectively, to know (KJV: certify, declare, make known, give to understand, do to wit, wot)",
    "transliteration": "γνωρίζω",
    "references": [
      "G1107"
    ]
  },
  {
    "term": "Diacheirizomai",
    "category": "Greek",
    "definition": "To handle thoroughly, i.e. lay violent hands upon (KJV: kill, slay)",
    "transliteration": "διαχειρίζομαι",
    "references": [
      "G1315"
    ]
  },
  {
    "term": "Mone",
    "category": "Greek",
    "definition": "a staying, i.e. residence (the act or the place) (KJV: abode, mansion)",
    "transliteration": "μονή",
    "references": [
      "G3438"
    ]
  },
  {
    "term": "Kmazo",
    "category": "Greek",
    "definition": "To make a point, i.e. (figuratively) mature (KJV: be fully ripe)",
    "transliteration": "ἀκμάζω",
    "references": [
      "G187"
    ]
  },
  {
    "term": "Stemi",
    "category": "Greek",
    "definition": "To stand (transitively or intransitively), used in various applications (literally or figuratively) (KJV: abide, appoint, bring, continue, covenant, establish, hold up, lay, present, set (up), stanch, stand (by, forth, still, up))",
    "transliteration": "ἵστημι",
    "references": [
      "G2476"
    ]
  },
  {
    "term": "Xereynao",
    "category": "Greek",
    "definition": "To explore (figuratively) (KJV: search diligently)",
    "transliteration": "ἐξερευνάω",
    "references": [
      "G1830"
    ]
  },
  {
    "term": "Sygkathemai",
    "category": "Greek",
    "definition": "To seat oneself in company with (KJV: sit with)",
    "transliteration": "συγκάθημαι",
    "references": [
      "G4775"
    ]
  },
  {
    "term": "Talitha",
    "category": "Greek",
    "definition": "the fresh, i.e. young girl; talitha (O maiden) (KJV: talitha)",
    "transliteration": "ταλιθά",
    "references": [
      "G5008"
    ]
  },
  {
    "term": "Brizo",
    "category": "Greek",
    "definition": "To exercise violence, i.e. abuse (KJV: use despitefully, reproach, entreat shamefully (spitefully))",
    "transliteration": "ὑβρίζω",
    "references": [
      "G5195"
    ]
  },
  {
    "term": "Emeti",
    "category": "Greek",
    "definition": "if not somewhat (KJV: except)",
    "transliteration": "εἰ μή τι",
    "references": [
      "G1509"
    ]
  },
  {
    "term": "Gathopoia",
    "category": "Greek",
    "definition": "well-doing, i.e. virtue (KJV: well-doing)",
    "transliteration": "ἀγαθοποιΐα",
    "references": [
      "G16"
    ]
  },
  {
    "term": "Nothros",
    "category": "Greek",
    "definition": "sluggish, i.e. (literally) lazy, or (figuratively) stupid (KJV: dull, slothful)",
    "transliteration": "νωθρός",
    "references": [
      "G3576"
    ]
  },
  {
    "term": "Mylos",
    "category": "Greek",
    "definition": "a \"mill\", i.e. (by implication), a grinder (millstone) (KJV: millstone)",
    "transliteration": "μύλος",
    "references": [
      "G3458"
    ]
  },
  {
    "term": "Theoria",
    "category": "Greek",
    "definition": "spectatorship, i.e. (concretely) a spectacle (KJV: sight)",
    "transliteration": "θεωρία",
    "references": [
      "G2335"
    ]
  },
  {
    "term": "Gabos",
    "category": "Greek",
    "definition": "Agabus, an Israelite (KJV: Agabus)",
    "transliteration": "Ἄγαβος",
    "references": [
      "G13"
    ]
  },
  {
    "term": "Piblema",
    "category": "Greek",
    "definition": "a patch (KJV: piece)",
    "transliteration": "ἐπίβλημα",
    "references": [
      "G1915"
    ]
  },
  {
    "term": "Perephanos",
    "category": "Greek",
    "definition": "appearing above others (conspicuous), i.e. (figuratively) haughty (KJV: proud)",
    "transliteration": "ὑπερήφανος",
    "references": [
      "G5244"
    ]
  },
  {
    "term": "Chthydion",
    "category": "Greek",
    "definition": "a petty fish (KJV: little (small) fish)",
    "transliteration": "ἰχθύδιον",
    "references": [
      "G2485"
    ]
  },
  {
    "term": "Kathoplizo",
    "category": "Greek",
    "definition": "and G3695 (ὁπλίζω); to equip fully with armor (KJV: arm)",
    "transliteration": "καθοπλίζω",
    "references": [
      "G2528"
    ]
  },
  {
    "term": "Ponipto",
    "category": "Greek",
    "definition": "To wash off (reflexively, one's own hands symbolically) (KJV: wash)",
    "transliteration": "ἀπονίπτω",
    "references": [
      "G633"
    ]
  },
  {
    "term": "Thnikos",
    "category": "Greek",
    "definition": "national (\"ethnic\"), i.e. (specially) a Gentile (KJV: heathen (man))",
    "transliteration": "ἐθνικός",
    "references": [
      "G1482"
    ]
  },
  {
    "term": "Kataponeo",
    "category": "Greek",
    "definition": "To labor down, i.e. wear with toil (figuratively, harass) (KJV: oppress, vex)",
    "transliteration": "καταπονέω",
    "references": [
      "G2669"
    ]
  },
  {
    "term": "Dianeyo",
    "category": "Greek",
    "definition": "To nod (or express by signs) across an intervening space (KJV: beckon)",
    "transliteration": "διανεύω",
    "references": [
      "G1269"
    ]
  },
  {
    "term": "Katalaleo",
    "category": "Greek",
    "definition": "To be a traducer, i.e. to slander (KJV: speak against (evil of))",
    "transliteration": "καταλαλέω",
    "references": [
      "G2635"
    ]
  },
  {
    "term": "Pi",
    "category": "Greek",
    "definition": "properly, meaning superimposition (of time, place, order, etc.), as a relation of distribution (with the genitive case), i.e. over, upon, etc.; of rest (with the dative case) at, on, etc.; of direction (with the accusative case) towards, upon, etc. (KJV: about (the times), above, after, against, among, as long as (touching), at, beside, X have charge of, (be-, (where-))fore, in (a place, as much as, the time of, -to), (because) of, (up-)on (behalf of), over, (by, for) the space of, through(-out), (un-)to(-ward), with)",
    "transliteration": "ἐπί",
    "references": [
      "G1909"
    ]
  },
  {
    "term": "Rchipoimen",
    "category": "Greek",
    "definition": "a head shepherd (KJV: chief shepherd)",
    "transliteration": "ἀρχιποίμην",
    "references": [
      "G750"
    ]
  },
  {
    "term": "Pelikos",
    "category": "Greek",
    "definition": "how much (as an indefinite), i.e. in size or (figuratively) dignity (KJV: how great (large))",
    "transliteration": "πηλίκος",
    "references": [
      "G4080"
    ]
  },
  {
    "term": "Koniortos",
    "category": "Greek",
    "definition": "pulverulence (as blown about) (KJV: dust)",
    "transliteration": "κονιορτός",
    "references": [
      "G2868"
    ]
  },
  {
    "term": "Isidia",
    "category": "Greek",
    "definition": "Pisidia, a region of Asia Minor (KJV: Pisidia)",
    "transliteration": "Πισιδία",
    "references": [
      "G4099"
    ]
  },
  {
    "term": "Merimna",
    "category": "Greek",
    "definition": "solicitude (KJV: care)",
    "transliteration": "μέριμνα",
    "references": [
      "G3308"
    ]
  },
  {
    "term": "Knepho",
    "category": "Greek",
    "definition": "(figuratively) to rouse (oneself) out of stupor (KJV: awake)",
    "transliteration": "ἐκνήφω",
    "references": [
      "G1594"
    ]
  },
  {
    "term": "Prosopoleptes",
    "category": "Greek",
    "definition": "an accepter of a face (individual), i.e. (specially), one exhibiting partiality (KJV: respecter of persons)",
    "transliteration": "προσωπολήπτης",
    "references": [
      "G4381"
    ]
  },
  {
    "term": "Lizo",
    "category": "Greek",
    "definition": "To salt (KJV: salt)",
    "transliteration": "ἁλίζω",
    "references": [
      "G233"
    ]
  },
  {
    "term": "Teknos",
    "category": "Greek",
    "definition": "childless (KJV: childless, without children)",
    "transliteration": "ἄτεκνος",
    "references": [
      "G815"
    ]
  },
  {
    "term": "Grippas",
    "category": "Greek",
    "definition": "wild-horse tamer; Agrippas, one of the Herods (KJV: Agrippa)",
    "transliteration": "Ἀγρίππας",
    "references": [
      "G67"
    ]
  },
  {
    "term": "Paroimia",
    "category": "Greek",
    "definition": "apparently a state alongside of supposition, i.e. (concretely) an adage; specially, an enigmatical or fictitious illustration (KJV: parable, proverb)",
    "transliteration": "παροιμία",
    "references": [
      "G3942"
    ]
  },
  {
    "term": "Ekairos",
    "category": "Greek",
    "definition": "opportunely (KJV: conveniently, in season)",
    "transliteration": "εὐκαίρως",
    "references": [
      "G2122"
    ]
  },
  {
    "term": "Probaino",
    "category": "Greek",
    "definition": "To walk forward, i.e. advance (literally, or in years) (KJV: + be of a great age, go farther (on), be well stricken)",
    "transliteration": "προβαίνω",
    "references": [
      "G4260"
    ]
  },
  {
    "term": "Arsos",
    "category": "Greek",
    "definition": "Tarsus, a place in Asia Minor (KJV: Tarsus)",
    "transliteration": "Ταρσός",
    "references": [
      "G5019"
    ]
  },
  {
    "term": "Rmogenes",
    "category": "Greek",
    "definition": "born of Hermes; Hermogenes, an apostate Christian (KJV: Hermogenes)",
    "transliteration": "Ἑρμογένης",
    "references": [
      "G2061"
    ]
  },
  {
    "term": "Brycho",
    "category": "Greek",
    "definition": "To grate the teeth (in pain or rage) (KJV: gnash)",
    "transliteration": "βρύχω",
    "references": [
      "G1031"
    ]
  },
  {
    "term": "Bomos",
    "category": "Greek",
    "definition": "properly, a stand, i.e. (specially) an altar (KJV: altar)",
    "transliteration": "βωμός",
    "references": [
      "G1041"
    ]
  },
  {
    "term": "Machaira",
    "category": "Greek",
    "definition": "a knife, i.e. dirk; figuratively, war, judicial punishment (KJV: sword)",
    "transliteration": "μάχαιρα",
    "references": [
      "G3162"
    ]
  },
  {
    "term": "Phikneomai",
    "category": "Greek",
    "definition": "To arrive upon, i.e. extend to (KJV: reach)",
    "transliteration": "ἐφικνέομαι",
    "references": [
      "G2185"
    ]
  },
  {
    "term": "Miantos",
    "category": "Greek",
    "definition": "unsoiled, i.e. (figuratively) pure (KJV: undefiled)",
    "transliteration": "ἀμίαντος",
    "references": [
      "G283"
    ]
  },
  {
    "term": "Xomologeo",
    "category": "Greek",
    "definition": "To acknowledge or (by implication, of assent) agree fully (KJV: confess, profess, promise)",
    "transliteration": "ἐξομολογέω",
    "references": [
      "G1843"
    ]
  },
  {
    "term": "Esi",
    "category": "Greek",
    "definition": "they are (KJV: agree, are, be, dure, X is, were)",
    "transliteration": "εἰσί",
    "references": [
      "G1526"
    ]
  },
  {
    "term": "Dianyo",
    "category": "Greek",
    "definition": "To accomplish thoroughly (KJV: finish)",
    "transliteration": "διανύω",
    "references": [
      "G1274"
    ]
  },
  {
    "term": "Piezo",
    "category": "Greek",
    "definition": "To pack (KJV: press down)",
    "transliteration": "πιέζω",
    "references": [
      "G4085"
    ]
  },
  {
    "term": "Parateino",
    "category": "Greek",
    "definition": "To extend along, i.e. prolong (in point of time) (KJV: continue)",
    "transliteration": "παρατείνω",
    "references": [
      "G3905"
    ]
  },
  {
    "term": "Armens",
    "category": "Greek",
    "definition": "constant; Parmenas, a Christian (KJV: Parmenas)",
    "transliteration": "Παρμενᾶς",
    "references": [
      "G3937"
    ]
  },
  {
    "term": "Pharmakeys",
    "category": "Greek",
    "definition": "a druggist (\"pharmacist\") or poisoner, i.e. (by extension) a magician (KJV: sorcerer)",
    "transliteration": "φαρμακεύς",
    "references": [
      "G5332"
    ]
  },
  {
    "term": "Pantao",
    "category": "Greek",
    "definition": "To go opposite (meet) under (quietly), i.e. to encounter, fall in with (KJV: (go to) meet)",
    "transliteration": "ὑπαντάω",
    "references": [
      "G5221"
    ]
  },
  {
    "term": "Nexereynetos",
    "category": "Greek",
    "definition": "not searched out, i.e. (by implication) inscrutable (KJV: unsearchable)",
    "transliteration": "ἀνεξερεύνητος",
    "references": [
      "G419"
    ]
  },
  {
    "term": "Pereido",
    "category": "Greek",
    "definition": "To overlook, i.e. not punish (KJV: wink at)",
    "transliteration": "ὑπερείδω",
    "references": [
      "G5237"
    ]
  },
  {
    "term": "Sympino",
    "category": "Greek",
    "definition": "To partake a beverage in company (KJV: drink with)",
    "transliteration": "συμπίνω",
    "references": [
      "G4844"
    ]
  },
  {
    "term": "Kryph",
    "category": "Greek",
    "definition": "privately (KJV: in secret)",
    "transliteration": "κρυφῆ",
    "references": [
      "G2931"
    ]
  },
  {
    "term": "Phe",
    "category": "Greek",
    "definition": "probably a ligament (as fastening) (KJV: joint)",
    "transliteration": "ἁφή",
    "references": [
      "G860"
    ]
  },
  {
    "term": "Planetes",
    "category": "Greek",
    "definition": "a rover (\"planet\"), i.e. (figuratively) an erratic teacher (KJV: wandering)",
    "transliteration": "πλανήτης",
    "references": [
      "G4107"
    ]
  },
  {
    "term": "Rithmos",
    "category": "Greek",
    "definition": "a number (as reckoned up) (KJV: number)",
    "transliteration": "ἀριθμός",
    "references": [
      "G706"
    ]
  },
  {
    "term": "Kaleo",
    "category": "Greek",
    "definition": "To \"call\" (properly, aloud, but used in a variety of applications, directly or otherwise) (KJV: bid, call (forth), (whose, whose sur-)name (was (called)))",
    "transliteration": "καλέω",
    "references": [
      "G2564"
    ]
  },
  {
    "term": "Noch",
    "category": "Greek",
    "definition": "Enoch (i.e. Chanok), an antediluvian (KJV: Enoch)",
    "transliteration": "Ἐνώχ",
    "references": [
      "G1802"
    ]
  },
  {
    "term": "Dios",
    "category": "Greek",
    "definition": "everduring (forward and backward, or forward only) (KJV: eternal, everlasting)",
    "transliteration": "ἀΐδιος",
    "references": [
      "G126"
    ]
  },
  {
    "term": "Peinao",
    "category": "Greek",
    "definition": "\"pine\"); to famish (absolutely or comparatively); figuratively, to crave (KJV: be an hungered)",
    "transliteration": "πεινάω",
    "references": [
      "G3983"
    ]
  },
  {
    "term": "Naballomai",
    "category": "Greek",
    "definition": "To put off (for oneself) (KJV: defer)",
    "transliteration": "ἀναβάλλομαι",
    "references": [
      "G306"
    ]
  },
  {
    "term": "Proereo",
    "category": "Greek",
    "definition": "used as alternate of G4277 (προέπω); to say already, predict (KJV: foretell, say (speak, tell) before)",
    "transliteration": "προερέω",
    "references": [
      "G4280"
    ]
  },
  {
    "term": "Posakis",
    "category": "Greek",
    "definition": "how many times (KJV: how oft(-en))",
    "transliteration": "ποσάκις",
    "references": [
      "G4212"
    ]
  },
  {
    "term": "Alos",
    "category": "Greek",
    "definition": "a flute (as blown) (KJV: pipe)",
    "transliteration": "αὐλός",
    "references": [
      "G836"
    ]
  },
  {
    "term": "Pimpremi",
    "category": "Greek",
    "definition": "To fire, i.e. burn (figuratively and passively, become inflamed with fever) (KJV: be (X should have) swollen)",
    "transliteration": "πίμπρημι",
    "references": [
      "G4092"
    ]
  },
  {
    "term": "Sarkinos",
    "category": "Greek",
    "definition": "similar to flesh, i.e. (by analogy) soft (KJV: fleshly)",
    "transliteration": "σάρκινος",
    "references": [
      "G4560"
    ]
  },
  {
    "term": "Ayto",
    "category": "Greek",
    "definition": "him- (her-, it-, them-, also (in conjunction with the personal pronoun of the other persons) my-, thy-, our-, your-) self (selves), etc. (KJV: alone, her (own, -self), (he) himself, his (own), itself, one (to) another, our (thine) own(-selves), + that she had, their (own, own selves), (of) them(-selves), they, thyself, you, your (own, own conceits, own selves, -selves))",
    "transliteration": "ἑαυτοῦ",
    "references": [
      "G1438"
    ]
  },
  {
    "term": "Mneme",
    "category": "Greek",
    "definition": "memory (KJV: remembrance)",
    "transliteration": "μνήμη",
    "references": [
      "G3420"
    ]
  },
  {
    "term": "Parakletos",
    "category": "Greek",
    "definition": "an intercessor, consoler (KJV: advocate, comforter)",
    "transliteration": "παράκλητος",
    "references": [
      "G3875"
    ]
  },
  {
    "term": "Dynatos",
    "category": "Greek",
    "definition": "powerful or capable (literally or figuratively); neuter possible (KJV: able, could, (that is) mighty (man), possible, power, strong)",
    "transliteration": "δυνατός",
    "references": [
      "G1415"
    ]
  },
  {
    "term": "Thanasia",
    "category": "Greek",
    "definition": "deathlessness (KJV: immortality)",
    "transliteration": "ἀθανασία",
    "references": [
      "G110"
    ]
  },
  {
    "term": "Rtios",
    "category": "Greek",
    "definition": "fresh, i.e. (by implication) complete (KJV: perfect)",
    "transliteration": "ἄρτιος",
    "references": [
      "G739"
    ]
  },
  {
    "term": "Martyria",
    "category": "Greek",
    "definition": "evidence given (judicially or genitive case) (KJV: record, report, testimony, witness)",
    "transliteration": "μαρτυρία",
    "references": [
      "G3141"
    ]
  },
  {
    "term": "Pokalypsis",
    "category": "Greek",
    "definition": "disclosure (KJV: appearing, coming, lighten, manifestation, be revealed, revelation)",
    "transliteration": "ἀποκάλυψις",
    "references": [
      "G602"
    ]
  },
  {
    "term": "Phanes",
    "category": "Greek",
    "definition": "non-apparent) (KJV: that is not manifest)",
    "transliteration": "ἀφανής",
    "references": [
      "G852"
    ]
  },
  {
    "term": "Psis",
    "category": "Greek",
    "definition": "properly, sight (the act), i.e. (by implication) the visage, an external show (KJV: appearance, countenance, face)",
    "transliteration": "ὄψις",
    "references": [
      "G3799"
    ]
  },
  {
    "term": "Dikaiosyne",
    "category": "Greek",
    "definition": "equity (of character or act); specially (Christian) justification (KJV: righteousness)",
    "transliteration": "δικαιοσύνη",
    "references": [
      "G1343"
    ]
  },
  {
    "term": "Baddon",
    "category": "Greek",
    "definition": "a destroying angel (KJV: Abaddon)",
    "transliteration": "Ἀβαδδών",
    "references": [
      "G3"
    ]
  },
  {
    "term": "Pokato",
    "category": "Greek",
    "definition": "down under, i.e. beneath (KJV: under)",
    "transliteration": "ὑποκάτω",
    "references": [
      "G5270"
    ]
  },
  {
    "term": "Rgeo",
    "category": "Greek",
    "definition": "To be idle, i.e. (figuratively) to delay (KJV: linger)",
    "transliteration": "ἀργέω",
    "references": [
      "G691"
    ]
  },
  {
    "term": "Lazon",
    "category": "Greek",
    "definition": "braggart (KJV: boaster)",
    "transliteration": "ἀλαζών",
    "references": [
      "G213"
    ]
  },
  {
    "term": "Ipto",
    "category": "Greek",
    "definition": "To fling (properly, with a quick toss, thus differing from G906 (βάλλω), which denotes a deliberate hurl; and from (see in G1614 (ἐκτείνω)), which indicates an extended projection); by qualification, to deposit (as if a load); by extension, to disperse (KJV: cast (down, out), scatter abroad, throw)",
    "transliteration": "ῥίπτω",
    "references": [
      "G4496"
    ]
  },
  {
    "term": "Phatne",
    "category": "Greek",
    "definition": "a crib (for fodder) (KJV: manager, stall)",
    "transliteration": "φάτνη",
    "references": [
      "G5336"
    ]
  },
  {
    "term": "Matheteyo",
    "category": "Greek",
    "definition": "intransitively, to become a pupil; transitively, to disciple, i.e. enrol as scholar (KJV: be disciple, instruct, teach)",
    "transliteration": "μαθητεύω",
    "references": [
      "G3100"
    ]
  },
  {
    "term": "Paideyo",
    "category": "Greek",
    "definition": "To train up a child, i.e. educate, or (by implication), discipline (by punishment) (KJV: chasten(-ise), instruct, learn, teach)",
    "transliteration": "παιδεύω",
    "references": [
      "G3811"
    ]
  },
  {
    "term": "Eremias",
    "category": "Greek",
    "definition": "Hieremias (i.e. Jermijah), an Israelite (KJV: Jeremiah)",
    "transliteration": "Ἱερεμίας",
    "references": [
      "G2408"
    ]
  },
  {
    "term": "Pepoithesis",
    "category": "Greek",
    "definition": "reliance (KJV: confidence, trust)",
    "transliteration": "πεποίθησις",
    "references": [
      "G4006"
    ]
  },
  {
    "term": "Rodes",
    "category": "Greek",
    "definition": "heroic; Herod, the name of four Jewish kings (KJV: Herod)",
    "transliteration": "Ἡρώδης",
    "references": [
      "G2264"
    ]
  },
  {
    "term": "Etor",
    "category": "Greek",
    "definition": "a speaker, i.e. (by implication) a forensic advocate (KJV: orator)",
    "transliteration": "ῥήτωρ",
    "references": [
      "G4489"
    ]
  },
  {
    "term": "Skariotes",
    "category": "Greek",
    "definition": "inhabitant of Kerioth; Iscariotes (i.e. Keriothite), an epithet of Judas the traitor (KJV: Iscariot)",
    "transliteration": "Ἰσκαριώτης",
    "references": [
      "G2469"
    ]
  },
  {
    "term": "Chortos",
    "category": "Greek",
    "definition": "a \"court\" or \"garden\", i.e. (by implication, of pasture) herbage or vegetation (KJV: blade, grass, hay)",
    "transliteration": "χόρτος",
    "references": [
      "G5528"
    ]
  },
  {
    "term": "Paggello",
    "category": "Greek",
    "definition": "To announce (KJV: bring word (again), declare, report, shew (again), tell)",
    "transliteration": "ἀπαγγέλλω",
    "references": [
      "G518"
    ]
  },
  {
    "term": "Dianoigo",
    "category": "Greek",
    "definition": "To open thoroughly, literally (as a first-born) or figuratively (to expound) (KJV: open)",
    "transliteration": "διανοίγω",
    "references": [
      "G1272"
    ]
  },
  {
    "term": "Ypoo",
    "category": "Greek",
    "definition": "To soil, i.e. (intransitively) to become dirty (morally) (KJV: be filthy)",
    "transliteration": "ῥυπόω",
    "references": [
      "G4510"
    ]
  },
  {
    "term": "Lithazo",
    "category": "Greek",
    "definition": "To lapidate (KJV: stone)",
    "transliteration": "λιθάζω",
    "references": [
      "G3034"
    ]
  },
  {
    "term": "Echonias",
    "category": "Greek",
    "definition": "Jechonias (i.e. Jekonjah), an Israelite (KJV: Jechonias)",
    "transliteration": "Ἰεχονίας",
    "references": [
      "G2423"
    ]
  },
  {
    "term": "Paraballo",
    "category": "Greek",
    "definition": "To throw alongside, i.e. (reflexively) to reach a place, or (figuratively) to liken (KJV: arrive, compare)",
    "transliteration": "παραβάλλω",
    "references": [
      "G3846"
    ]
  },
  {
    "term": "Metabaino",
    "category": "Greek",
    "definition": "To change place (KJV: depart, go, pass, remove)",
    "transliteration": "μεταβαίνω",
    "references": [
      "G3327"
    ]
  },
  {
    "term": "Schemoneo",
    "category": "Greek",
    "definition": "To be (i.e. act) unbecoming (KJV: behave self uncomely (unseemly))",
    "transliteration": "ἀσχημονέω",
    "references": [
      "G807"
    ]
  },
  {
    "term": "Glossokomon",
    "category": "Greek",
    "definition": "properly, a case (to keep mouthpieces of wind-instruments in) i.e. (by extension) a casket or (specially) purse (KJV: bag)",
    "transliteration": "γλωσσόκομον",
    "references": [
      "G1101"
    ]
  },
  {
    "term": "Onos",
    "category": "Greek",
    "definition": "\"wine\" (literally or figuratively) (KJV: wine)",
    "transliteration": "οἶνος",
    "references": [
      "G3631"
    ]
  },
  {
    "term": "Peimi",
    "category": "Greek",
    "definition": "To go away (KJV: go)",
    "transliteration": "ἄπειμι",
    "references": [
      "G549"
    ]
  },
  {
    "term": "Prospegnymi",
    "category": "Greek",
    "definition": "To fasten to, i.e. (specially), to impale (on a cross) (KJV: crucify)",
    "transliteration": "προσπήγνυμι",
    "references": [
      "G4362"
    ]
  },
  {
    "term": "Parabatos",
    "category": "Greek",
    "definition": "not passing away, i.e. untransferable (perpetual) (KJV:  unchangeable)",
    "transliteration": "ἀπαράβατος",
    "references": [
      "G531"
    ]
  },
  {
    "term": "Nossia",
    "category": "Greek",
    "definition": "a brood (of chickens) (KJV: brood)",
    "transliteration": "νοσσιά",
    "references": [
      "G3555"
    ]
  },
  {
    "term": "Kkaio",
    "category": "Greek",
    "definition": "To inflame deeply (KJV: burn)",
    "transliteration": "ἐκκαίω",
    "references": [
      "G1572"
    ]
  },
  {
    "term": "Kolymbao",
    "category": "Greek",
    "definition": "To plunge into water (KJV: swim)",
    "transliteration": "κολυμβάω",
    "references": [
      "G2860"
    ]
  },
  {
    "term": "Sachar",
    "category": "Greek",
    "definition": "Isachar (i.e. Jissaskar), a son of Jacob (figuratively, his descendant) (KJV: Issachar)",
    "transliteration": "Ἰσαχάρ",
    "references": [
      "G2466"
    ]
  },
  {
    "term": "Los",
    "category": "Greek",
    "definition": "\"whole\" or \"all\", i.e. complete (in extent, amount, time or degree), especially (neuter) as noun or adverb (KJV: all, altogether, every whit, + throughout, whole)",
    "transliteration": "ὅλος",
    "references": [
      "G3650"
    ]
  },
  {
    "term": "Ptocheia",
    "category": "Greek",
    "definition": "beggary, i.e. indigence (literally or figuratively) (KJV: poverty)",
    "transliteration": "πτωχεία",
    "references": [
      "G4432"
    ]
  },
  {
    "term": "Lype",
    "category": "Greek",
    "definition": "sadness (KJV: grief, grievous, + grudgingly, heaviness, sorrow)",
    "transliteration": "λύπη",
    "references": [
      "G3077"
    ]
  },
  {
    "term": "Esporeyomai",
    "category": "Greek",
    "definition": "To enter (literally or figuratively) (KJV: come (enter) in, go into)",
    "transliteration": "εἰσπορεύομαι",
    "references": [
      "G1531"
    ]
  },
  {
    "term": "Poskiasma",
    "category": "Greek",
    "definition": "a shading off, i.e. obscuration (KJV: shadow)",
    "transliteration": "ἀποσκίασμα",
    "references": [
      "G644"
    ]
  },
  {
    "term": "Ni",
    "category": "Greek",
    "definition": "impersonally, there is in or among (KJV: be, (there) is)",
    "transliteration": "ἔνι",
    "references": [
      "G1762"
    ]
  },
  {
    "term": "Dynateo",
    "category": "Greek",
    "definition": "To be efficient (figuratively) (KJV: be mighty)",
    "transliteration": "δυνατέω",
    "references": [
      "G1414"
    ]
  },
  {
    "term": "Mmanoyel",
    "category": "Greek",
    "definition": "God with us; Emmanuel, a name of Christ (KJV: Emmanuel)",
    "transliteration": "Ἐμμανουήλ",
    "references": [
      "G1694"
    ]
  },
  {
    "term": "Chonix",
    "category": "Greek",
    "definition": "a chœnix or certain dry measure (KJV: measure)",
    "transliteration": "χοῖνιξ",
    "references": [
      "G5518"
    ]
  },
  {
    "term": "Goes",
    "category": "Greek",
    "definition": "properly, a wizard (as muttering spells), i.e. (by implication) an imposter (KJV: seducer)",
    "transliteration": "γόης",
    "references": [
      "G1114"
    ]
  },
  {
    "term": "Lamprs",
    "category": "Greek",
    "definition": "brilliantly, i.e. figuratively, luxuriously (KJV: sumptuously)",
    "transliteration": "λαμπρῶς",
    "references": [
      "G2988"
    ]
  },
  {
    "term": "Sygkypto",
    "category": "Greek",
    "definition": "To stoop altogether, i.e. be completely overcome by (KJV: bow together)",
    "transliteration": "συγκύπτω",
    "references": [
      "G4794"
    ]
  },
  {
    "term": "Prospoieomai",
    "category": "Greek",
    "definition": "To do forward for oneself, i.e. pretend (as if about to do a thing) (KJV: make as though)",
    "transliteration": "προσποιέομαι",
    "references": [
      "G4364"
    ]
  },
  {
    "term": "Diaporeo",
    "category": "Greek",
    "definition": "To be thoroughly nonplussed (KJV: (be in) doubt, be (much) perplexed)",
    "transliteration": "διαπορέω",
    "references": [
      "G1280"
    ]
  },
  {
    "term": "Ktetor",
    "category": "Greek",
    "definition": "an owner (KJV: possessor)",
    "transliteration": "κτήτωρ",
    "references": [
      "G2935"
    ]
  },
  {
    "term": "Metakaleo",
    "category": "Greek",
    "definition": "To call elsewhere, i.e. summon (KJV: call (for, hither))",
    "transliteration": "μετακαλέω",
    "references": [
      "G3333"
    ]
  },
  {
    "term": "Ggyteron",
    "category": "Greek",
    "definition": "nearer (KJV: nearer)",
    "transliteration": "ἐγγύτερον",
    "references": [
      "G1452"
    ]
  },
  {
    "term": "Parepidemos",
    "category": "Greek",
    "definition": "an alien alongside, i.e. a resident foreigner (KJV: pilgrim, stranger)",
    "transliteration": "παρεπίδημος",
    "references": [
      "G3927"
    ]
  },
  {
    "term": "Lattoo",
    "category": "Greek",
    "definition": "To lessen (in rank or influence) (KJV: decrease, make lower)",
    "transliteration": "ἐλαττόω",
    "references": [
      "G1642"
    ]
  },
  {
    "term": "Chalkedon",
    "category": "Greek",
    "definition": "copper-like, i.e. \"chalcedony\" (KJV: chalcedony)",
    "transliteration": "χαλκηδών",
    "references": [
      "G5472"
    ]
  },
  {
    "term": "Sigao",
    "category": "Greek",
    "definition": "To keep silent (transitively or intransitively) (KJV: keep close (secret, silence), hold peace)",
    "transliteration": "σιγάω",
    "references": [
      "G4601"
    ]
  },
  {
    "term": "Ginosko",
    "category": "Greek",
    "definition": "To \"know\" (absolutely) in a great variety of applications and with many implications (as follow, with others not thus clearly expressed) (KJV: allow, be aware (of), feel, (have) know(-ledge), perceived, be resolved, can speak, be sure, understand)",
    "transliteration": "γινώσκω",
    "references": [
      "G1097"
    ]
  },
  {
    "term": "Xapina",
    "category": "Greek",
    "definition": "of a sudden, i.e. unexpectedly (KJV: suddenly)",
    "transliteration": "ἐξάπινα",
    "references": [
      "G1819"
    ]
  },
  {
    "term": "Tephans",
    "category": "Greek",
    "definition": "from G4737 (στεφανόω)); Stephanas, a Christian (KJV: Stephanas)",
    "transliteration": "Στεφανᾶς",
    "references": [
      "G4734"
    ]
  },
  {
    "term": "Katara",
    "category": "Greek",
    "definition": "imprecation, execration (KJV: curse(-d, ing))",
    "transliteration": "κατάρα",
    "references": [
      "G2671"
    ]
  },
  {
    "term": "Dichostasia",
    "category": "Greek",
    "definition": "disunion, i.e. (figuratively) dissension (KJV: division, sedition)",
    "transliteration": "διχοστασία",
    "references": [
      "G1370"
    ]
  },
  {
    "term": "Kribs",
    "category": "Greek",
    "definition": "exactly (KJV: circumspectly, diligently, perfect(-ly))",
    "transliteration": "ἀκριβῶς",
    "references": [
      "G199"
    ]
  },
  {
    "term": "Sklon",
    "category": "Greek",
    "definition": "something stripped (as a hide), i.e. booty (KJV: spoil)",
    "transliteration": "σκῦλον",
    "references": [
      "G4661"
    ]
  },
  {
    "term": "Oanerges",
    "category": "Greek",
    "definition": "sons of commotion; Boanerges, an epithet of two of the apostles (KJV: Boanerges)",
    "transliteration": "Βοανεργές",
    "references": [
      "G993"
    ]
  },
  {
    "term": "Ser",
    "category": "Greek",
    "definition": "Aser (i.e. Asher), an Israelite tribe (KJV: Aser)",
    "transliteration": "Ἀσήρ",
    "references": [
      "G768"
    ]
  },
  {
    "term": "Skotia",
    "category": "Greek",
    "definition": "dimness, obscurity (literally or figuratively) (KJV: dark(-ness))",
    "transliteration": "σκοτία",
    "references": [
      "G4653"
    ]
  },
  {
    "term": "Syneydokeo",
    "category": "Greek",
    "definition": "To think well of in common, i.e. assent to, feel gratified with (KJV: allow, assent, be pleased, have pleasure)",
    "transliteration": "συνευδοκέω",
    "references": [
      "G4909"
    ]
  },
  {
    "term": "Pobletos",
    "category": "Greek",
    "definition": "cast off, i.e. (figuratively) such as to be rejected (KJV: be refused)",
    "transliteration": "ἀπόβλητος",
    "references": [
      "G579"
    ]
  },
  {
    "term": "Psocho",
    "category": "Greek",
    "definition": "To triturate, i.e. (by analogy) to rub out (kernels from husks with the fingers or hand) (KJV: rub)",
    "transliteration": "ψώχω",
    "references": [
      "G5597"
    ]
  },
  {
    "term": "A",
    "category": "Greek",
    "definition": "Eua (or Eva, i.e. Chavvah), the first woman (KJV: Eve)",
    "transliteration": "Εὖα",
    "references": [
      "G2096"
    ]
  },
  {
    "term": "Synerchomai",
    "category": "Greek",
    "definition": "To convene, depart in company with, associate with, or (specially), cohabit (conjugally) (KJV: accompany, assemble (with), come (together), come (company, go) with, resort)",
    "transliteration": "συνέρχομαι",
    "references": [
      "G4905"
    ]
  },
  {
    "term": "Degos",
    "category": "Greek",
    "definition": "a conductor (literally or figuratively (teacher)) (KJV: guide, leader)",
    "transliteration": "ὁδηγός",
    "references": [
      "G3595"
    ]
  },
  {
    "term": "Phapax",
    "category": "Greek",
    "definition": "upon one occasion (only) (KJV: (at) once (for all))",
    "transliteration": "ἐφάπαξ",
    "references": [
      "G2178"
    ]
  },
  {
    "term": "Gelao",
    "category": "Greek",
    "definition": "To laugh (as a sign of joy or satisfaction) (KJV: laugh)",
    "transliteration": "γελάω",
    "references": [
      "G1070"
    ]
  },
  {
    "term": "Dokimazo",
    "category": "Greek",
    "definition": "To test (literally or figuratively); by implication, to approve (KJV: allow, discern, examine, X like, (ap-)prove, try)",
    "transliteration": "δοκιμάζω",
    "references": [
      "G1381"
    ]
  },
  {
    "term": "Loipo",
    "category": "Greek",
    "definition": "remaining time (KJV: from henceforth)",
    "transliteration": "λοιποῦ",
    "references": [
      "G3064"
    ]
  },
  {
    "term": "Peripateo",
    "category": "Greek",
    "definition": "To tread all around, i.e. walk at large (especially as proof of ability); figuratively, to live, deport oneself, follow (as a companion or votary) (KJV: go, be occupied with, walk (about))",
    "transliteration": "περιπατέω",
    "references": [
      "G4043"
    ]
  },
  {
    "term": "Meteorizo",
    "category": "Greek",
    "definition": "To raise in mid-air, i.e. (figuratively) suspend (passively, fluctuate or be anxious) (KJV: be of doubtful mind)",
    "transliteration": "μετεωρίζω",
    "references": [
      "G3349"
    ]
  },
  {
    "term": "Parabaino",
    "category": "Greek",
    "definition": "To go contrary to, i.e. violate a command (KJV: (by) transgress(-ion))",
    "transliteration": "παραβαίνω",
    "references": [
      "G3845"
    ]
  },
  {
    "term": "Splagchnizomai",
    "category": "Greek",
    "definition": "To have the bowels yearn, i.e. (figuratively) feel sympathy, to pity (KJV: have (be moved with) compassion)",
    "transliteration": "σπλαγχνίζομαι",
    "references": [
      "G4697"
    ]
  },
  {
    "term": "Chrma",
    "category": "Greek",
    "definition": "something useful or needed, i.e. wealth, price (KJV: money, riches)",
    "transliteration": "χρῆμα",
    "references": [
      "G5536"
    ]
  },
  {
    "term": "Painos",
    "category": "Greek",
    "definition": "laudation; concretely, a commendable thing (KJV: praise)",
    "transliteration": "ἔπαινος",
    "references": [
      "G1868"
    ]
  },
  {
    "term": "Kleronomos",
    "category": "Greek",
    "definition": "a sharer by lot, i.e. inheritor (literally or figuratively); by implication, a possessor (KJV: heir)",
    "transliteration": "κληρονόμος",
    "references": [
      "G2818"
    ]
  },
  {
    "term": "Ons",
    "category": "Greek",
    "definition": "Jonas (i.e. Jonah), the name of two Israelites (KJV: Jonas)",
    "transliteration": "Ἰωνᾶς",
    "references": [
      "G2495"
    ]
  },
  {
    "term": "Pigrapho",
    "category": "Greek",
    "definition": "To inscribe (physically or mentally) (KJV: inscription, write in (over, thereon))",
    "transliteration": "ἐπιγράφω",
    "references": [
      "G1924"
    ]
  },
  {
    "term": "Ω",
    "category": "Greek",
    "definition": "the last letter of the Greek alphabet, i.e. (figuratively) the finality (KJV: Omega)",
    "transliteration": "Ω",
    "references": [
      "G5598"
    ]
  },
  {
    "term": "Prosanabaino",
    "category": "Greek",
    "definition": "To ascend farther, i.e. be promoted (take an upper (more honorable) seat) (KJV: go up)",
    "transliteration": "προσαναβαίνω",
    "references": [
      "G4320"
    ]
  },
  {
    "term": "Distemi",
    "category": "Greek",
    "definition": "To stand apart, i.e. (reflexively) to remove, intervene (KJV: go further, be parted, after the space of)",
    "transliteration": "διΐστημι",
    "references": [
      "G1339"
    ]
  },
  {
    "term": "Nepho",
    "category": "Greek",
    "definition": "To abstain from wine (keep sober), i.e. (figuratively) be discreet (KJV: be sober, watch)",
    "transliteration": "νήφω",
    "references": [
      "G3525"
    ]
  },
  {
    "term": "Thalpo",
    "category": "Greek",
    "definition": "To brood, i.e. (figuratively) to foster (KJV: cherish)",
    "transliteration": "θάλπω",
    "references": [
      "G2282"
    ]
  },
  {
    "term": "Ysanias",
    "category": "Greek",
    "definition": "grief-dispelling; Lysanias, a governor of Abilene (KJV: Lysanias)",
    "transliteration": "Λυσανίας",
    "references": [
      "G3078"
    ]
  },
  {
    "term": "Sper",
    "category": "Greek",
    "definition": "just as, i.e. exactly like (KJV: (even, like) as)",
    "transliteration": "ὥσπερ",
    "references": [
      "G5618"
    ]
  },
  {
    "term": "Kptyo",
    "category": "Greek",
    "definition": "To spit out, i.e. (figuratively) spurn (KJV: reject)",
    "transliteration": "ἐκπτύω",
    "references": [
      "G1609"
    ]
  },
  {
    "term": "Diaspora",
    "category": "Greek",
    "definition": "dispersion, i.e. (specially and concretely) the (converted) Israelite resident in Gentile countries (KJV: (which are) scattered (abroad))",
    "transliteration": "διασπορά",
    "references": [
      "G1290"
    ]
  },
  {
    "term": "Diakonos",
    "category": "Greek",
    "definition": "an attendant, i.e. (genitive case) a waiter (at table or in other menial duties); specially, a Christian teacher and pastor (technically, a deacon or deaconess) (KJV: deacon, minister, servant)",
    "transliteration": "διάκονος",
    "references": [
      "G1249"
    ]
  },
  {
    "term": "Gynaikarion",
    "category": "Greek",
    "definition": "a little (i.e. foolish) woman (KJV: silly woman)",
    "transliteration": "γυναικάριον",
    "references": [
      "G1133"
    ]
  },
  {
    "term": "Enai",
    "category": "Greek",
    "definition": "To exist (KJV: am, was)",
    "transliteration": "εἶναι",
    "references": [
      "G1511"
    ]
  },
  {
    "term": "Nomikos",
    "category": "Greek",
    "definition": "according (or pertaining) to law, i.e. legal (ceremonially); as noun, an expert in the (Mosaic) law (KJV: about the law, lawyer)",
    "transliteration": "νομικός",
    "references": [
      "G3544"
    ]
  },
  {
    "term": "Lention",
    "category": "Greek",
    "definition": "a \"linen\" cloth, i.e. apron (KJV: towel)",
    "transliteration": "λέντιον",
    "references": [
      "G3012"
    ]
  },
  {
    "term": "Chlys",
    "category": "Greek",
    "definition": "dimness of sight, i.e. (probably) a cataract (KJV: mist)",
    "transliteration": "ἀχλύς",
    "references": [
      "G887"
    ]
  },
  {
    "term": "Narithmetos",
    "category": "Greek",
    "definition": "unnumbered, i.e. without number (KJV: innumerable)",
    "transliteration": "ἀναρίθμητος",
    "references": [
      "G382"
    ]
  },
  {
    "term": "Naggello",
    "category": "Greek",
    "definition": "To announce (in detail) (KJV: declare, rehearse, report, show, speak, tell)",
    "transliteration": "ἀναγγέλλω",
    "references": [
      "G312"
    ]
  },
  {
    "term": "Egenes",
    "category": "Greek",
    "definition": "well born, i.e. (literally) high in rank, or (figuratively) generous (KJV: more noble, nobleman)",
    "transliteration": "εὐγενής",
    "references": [
      "G2104"
    ]
  },
  {
    "term": "Sti",
    "category": "Greek",
    "definition": "he (she or it) is; also (with neuter plural) they are (KJV: are, be(-long), call, X can(-not), come, consisteth, X dure for a while, + follow, X have, (that) is (to say), make, meaneth, X must needs, + profit, + remaineth, + wrestle)",
    "transliteration": "ἐστί",
    "references": [
      "G2076"
    ]
  },
  {
    "term": "Kenos",
    "category": "Greek",
    "definition": "empty (literally or figuratively) (KJV: empty, (in) vain)",
    "transliteration": "κενός",
    "references": [
      "G2756"
    ]
  },
  {
    "term": "Potinasso",
    "category": "Greek",
    "definition": "To brush off (KJV: shake off)",
    "transliteration": "ἀποτινάσσω",
    "references": [
      "G660"
    ]
  },
  {
    "term": "Kai",
    "category": "Greek",
    "definition": "and, also, even, so then, too, etc.; often used in connection (or composition) with other particles or small words (KJV: and, also, both, but, even, for, if, or, so, that, then, therefore, when, yet)",
    "transliteration": "καί",
    "references": [
      "G2532"
    ]
  },
  {
    "term": "Psychos",
    "category": "Greek",
    "definition": "coolness (KJV: cold)",
    "transliteration": "ψύχος",
    "references": [
      "G5592"
    ]
  },
  {
    "term": "Ggrapho",
    "category": "Greek",
    "definition": "To \"engrave\", i.e. inscribe (KJV: write (in))",
    "transliteration": "ἐγγράφω",
    "references": [
      "G1449"
    ]
  },
  {
    "term": "Pikria",
    "category": "Greek",
    "definition": "acridity (especially poison), literally or figuratively (KJV: bitterness)",
    "transliteration": "πικρία",
    "references": [
      "G4088"
    ]
  },
  {
    "term": "Kallion",
    "category": "Greek",
    "definition": "(adverbially) better than many (KJV: very well)",
    "transliteration": "καλλίον",
    "references": [
      "G2566"
    ]
  },
  {
    "term": "Thriambeyo",
    "category": "Greek",
    "definition": "and a derivative of G680 (ἅπτομαι) (meaning a noisy iambus, sung in honor of Bacchus); to make an acclamatory procession, i.e. (figuratively) to conquer or (by Hebraism) to give victory (KJV: (cause) to triumph (over))",
    "transliteration": "θριαμβεύω",
    "references": [
      "G2358"
    ]
  },
  {
    "term": "Xothen",
    "category": "Greek",
    "definition": "external(-ly) (KJV: out(-side, -ward, - wardly), (from) without)",
    "transliteration": "ἔξωθεν",
    "references": [
      "G1855"
    ]
  },
  {
    "term": "Thyra",
    "category": "Greek",
    "definition": "a portal or entrance (the opening or the closure, literally or figuratively) (KJV: door, gate)",
    "transliteration": "θύρα",
    "references": [
      "G2374"
    ]
  },
  {
    "term": "Tochos",
    "category": "Greek",
    "definition": "a wall (KJV: wall)",
    "transliteration": "τοῖχος",
    "references": [
      "G5109"
    ]
  },
  {
    "term": "Myrizo",
    "category": "Greek",
    "definition": "To apply (perfumed) unguent to (KJV: anoint)",
    "transliteration": "μυρίζω",
    "references": [
      "G3462"
    ]
  },
  {
    "term": "Llen",
    "category": "Greek",
    "definition": "a Hellen (Grecian) or inhabitant of Hellas; by extension a Greek-speaking person, especially a non-Jew (KJV:  Gentile, Greek)",
    "transliteration": "Ἕλλην",
    "references": [
      "G1672"
    ]
  },
  {
    "term": "Akos",
    "category": "Greek",
    "definition": "a \"rag,\" i.e. piece of cloth (KJV: cloth)",
    "transliteration": "ῥάκος",
    "references": [
      "G4470"
    ]
  },
  {
    "term": "Koloboo",
    "category": "Greek",
    "definition": "To dock, i.e. (figuratively) abridge (KJV: shorten)",
    "transliteration": "κολοβόω",
    "references": [
      "G2856"
    ]
  },
  {
    "term": "Diamerizo",
    "category": "Greek",
    "definition": "To partition thoroughly (literally in distribution, figuratively in dissension) (KJV: cloven, divide, part)",
    "transliteration": "διαμερίζω",
    "references": [
      "G1266"
    ]
  },
  {
    "term": "Meti",
    "category": "Greek",
    "definition": "whether at all (KJV: not (the particle usually not expressed, except by the form of the question))",
    "transliteration": "μήτι",
    "references": [
      "G3385"
    ]
  },
  {
    "term": "Katastreniao",
    "category": "Greek",
    "definition": "To become voluptuous against (KJV: begin to wax wanton against)",
    "transliteration": "καταστρηνιάω",
    "references": [
      "G2691"
    ]
  },
  {
    "term": "Momos",
    "category": "Greek",
    "definition": "unblemished (literally or figuratively) (KJV: without blame (blemish, fault, spot), faultless, unblamable)",
    "transliteration": "ἄμωμος",
    "references": [
      "G299"
    ]
  },
  {
    "term": "Dino",
    "category": "Greek",
    "definition": "To experience the pains of parturition (literally or figuratively) (KJV: travail in (birth))",
    "transliteration": "ὠδίνω",
    "references": [
      "G5605"
    ]
  },
  {
    "term": "Prepo",
    "category": "Greek",
    "definition": "To tower up (be conspicuous), i.e. (by implication) to be suitable or proper (third person singular present indicative, often used impersonally, it is fit or right) (KJV: become, comely)",
    "transliteration": "πρέπω",
    "references": [
      "G4241"
    ]
  },
  {
    "term": "Kairos",
    "category": "Greek",
    "definition": "inopportunely (KJV: out of season)",
    "transliteration": "ἀκαίρως",
    "references": [
      "G171"
    ]
  },
  {
    "term": "Okon",
    "category": "Greek",
    "definition": "is it not therefore that, i.e. (affirmatively) hence or so (KJV: then)",
    "transliteration": "οὐκοῦν",
    "references": [
      "G3766"
    ]
  },
  {
    "term": "Moi",
    "category": "Greek",
    "definition": "To me (KJV: I, me, mine, my)",
    "transliteration": "μοί",
    "references": [
      "G3427"
    ]
  },
  {
    "term": "Katabole",
    "category": "Greek",
    "definition": "a deposition, i.e. founding; figuratively, conception (KJV: conceive, foundation)",
    "transliteration": "καταβολή",
    "references": [
      "G2602"
    ]
  },
  {
    "term": "Sardonyx",
    "category": "Greek",
    "definition": "hence the \"onyx\" stone); a \"sardonyx\", i.e. the gem so called (KJV:  sardonyx)",
    "transliteration": "σαρδόνυξ",
    "references": [
      "G4557"
    ]
  },
  {
    "term": "Pinoia",
    "category": "Greek",
    "definition": "attention of the mind, i.e. (by implication) purpose (KJV: thought)",
    "transliteration": "ἐπίνοια",
    "references": [
      "G1963"
    ]
  },
  {
    "term": "Promeletao",
    "category": "Greek",
    "definition": "To premeditate (KJV: meditate before)",
    "transliteration": "προμελετάω",
    "references": [
      "G4304"
    ]
  },
  {
    "term": "Echomai",
    "category": "Greek",
    "definition": "To wish; by implication, to pray to God (KJV: pray, will, wish)",
    "transliteration": "εὔχομαι",
    "references": [
      "G2172"
    ]
  },
  {
    "term": "Paraphero",
    "category": "Greek",
    "definition": "To bear along or aside, i.e. carry off (literally or figuratively); by implication, to avert (KJV: remove, take away)",
    "transliteration": "παραφέρω",
    "references": [
      "G3911"
    ]
  },
  {
    "term": "Pathroizo",
    "category": "Greek",
    "definition": "To accumulate (KJV: gather thick together)",
    "transliteration": "ἐπαθροίζω",
    "references": [
      "G1865"
    ]
  },
  {
    "term": "Symphyletes",
    "category": "Greek",
    "definition": "a co-tribesman, i.e. native of the same country (KJV: countryman)",
    "transliteration": "συμφυλέτης",
    "references": [
      "G4853"
    ]
  },
  {
    "term": "Kainos",
    "category": "Greek",
    "definition": " (KJV: new)",
    "transliteration": "καινός",
    "references": [
      "G2537"
    ]
  },
  {
    "term": "Ntiocheys",
    "category": "Greek",
    "definition": "an Antiochian or inhabitant of Antiochia (KJV: of Antioch)",
    "transliteration": "Ἀντιοχεύς",
    "references": [
      "G491"
    ]
  },
  {
    "term": "Ninemi",
    "category": "Greek",
    "definition": "for which another prolonged form () is used as an alternate in some tenses (unless indeed it be identical with the base of G3686 (ὄνομα) through the idea of notoriety); to gratify, i.e. (middle voice) to derive pleasure or advantage from (KJV: have joy)",
    "transliteration": "ὀνίνημι",
    "references": [
      "G3685"
    ]
  },
  {
    "term": "Onopotes",
    "category": "Greek",
    "definition": "a tippler (KJV: winebibber)",
    "transliteration": "οἰνοπότης",
    "references": [
      "G3630"
    ]
  },
  {
    "term": "Amphylia",
    "category": "Greek",
    "definition": "every-tribal, i.e. heterogeneous (G5561 (χώρα) being implied); Pamphylia, a region of Asia Minor (KJV: Pamphylia)",
    "transliteration": "Παμφυλία",
    "references": [
      "G3828"
    ]
  },
  {
    "term": "Pheilo",
    "category": "Greek",
    "definition": "To owe (pecuniarily); figuratively, to be under obligation (ought, must, should); morally, to fail in duty (KJV: behove, be bound, (be) debt(-or), (be) due(-ty), be guilty (indebted), (must) need(-s), ought, owe, should)",
    "transliteration": "ὀφείλω",
    "references": [
      "G3784"
    ]
  },
  {
    "term": "Notizomai",
    "category": "Greek",
    "definition": "To take in one's ear, i.e. to listen (KJV: hearken)",
    "transliteration": "ἐνωτίζομαι",
    "references": [
      "G1801"
    ]
  },
  {
    "term": "Misthapodosia",
    "category": "Greek",
    "definition": "requital (good or bad) (KJV: recompence of reward)",
    "transliteration": "μισθαποδοσία",
    "references": [
      "G3405"
    ]
  },
  {
    "term": "Sophia",
    "category": "Greek",
    "definition": "wisdom (higher or lower, worldly or spiritual) (KJV: wisdom)",
    "transliteration": "σοφία",
    "references": [
      "G4678"
    ]
  },
  {
    "term": "Mologoymenos",
    "category": "Greek",
    "definition": "confessedly (KJV: without controversy)",
    "transliteration": "ὁμολογουμένως",
    "references": [
      "G3672"
    ]
  },
  {
    "term": "Rchon",
    "category": "Greek",
    "definition": "a first (in rank or power) (KJV: chief (ruler), magistrate, prince, ruler)",
    "transliteration": "ἄρχων",
    "references": [
      "G758"
    ]
  },
  {
    "term": "Nos",
    "category": "Greek",
    "definition": "Enos (i.e. Enosh), a patriarch (KJV: Enos)",
    "transliteration": "Ἐνώς",
    "references": [
      "G1800"
    ]
  },
  {
    "term": "Diakatelegchomai",
    "category": "Greek",
    "definition": "To prove downright, i.e. confute (KJV: convince)",
    "transliteration": "διακατελέγχομαι",
    "references": [
      "G1246"
    ]
  },
  {
    "term": "Bia",
    "category": "Greek",
    "definition": "force (KJV: violence)",
    "transliteration": "βία",
    "references": [
      "G970"
    ]
  },
  {
    "term": "Tessarakonta",
    "category": "Greek",
    "definition": "forty (KJV: forty)",
    "transliteration": "τεσσαράκοντα",
    "references": [
      "G5062"
    ]
  },
  {
    "term": "Pizeteo",
    "category": "Greek",
    "definition": "To search (inquire) for; intensively, to demand, to crave (KJV: desire, enquire, seek (after, for))",
    "transliteration": "ἐπιζητέω",
    "references": [
      "G1934"
    ]
  },
  {
    "term": "Theosebeia",
    "category": "Greek",
    "definition": "devoutness, i.e. piety (KJV: godliness)",
    "transliteration": "θεοσέβεια",
    "references": [
      "G2317"
    ]
  },
  {
    "term": "Sphragis",
    "category": "Greek",
    "definition": "a signet (as fencing in or protecting from misappropriation); by implication, the stamp impressed (as a mark of privacy, or genuineness), literally or figuratively (KJV: seal)",
    "transliteration": "σφραγίς",
    "references": [
      "G4973"
    ]
  },
  {
    "term": "Katalego",
    "category": "Greek",
    "definition": "To lay down, i.e. (figuratively) to enrol (KJV: take into the number)",
    "transliteration": "καταλέγω",
    "references": [
      "G2639"
    ]
  },
  {
    "term": "Llotriepiskopos",
    "category": "Greek",
    "definition": "overseeing others' affairs, i.e. a meddler (specially, in Gentile customs) (KJV: busybody in other men's matters)",
    "transliteration": "ἀλλοτριεπίσκοπος",
    "references": [
      "G244"
    ]
  },
  {
    "term": "Deisidaimonia",
    "category": "Greek",
    "definition": "religion (KJV: superstition)",
    "transliteration": "δεισιδαιμονία",
    "references": [
      "G1175"
    ]
  },
  {
    "term": "N",
    "category": "Greek",
    "definition": "I (thou, etc.) was (wast or were) (KJV: + agree, be, X have (+ charge of), hold, use, was(-t), were)",
    "transliteration": "ἦν",
    "references": [
      "G2258"
    ]
  },
  {
    "term": "Loe",
    "category": "Greek",
    "definition": "\"green\"; Chloë, a Christian female (KJV: Chloe)",
    "transliteration": "Χλόη",
    "references": [
      "G5514"
    ]
  },
  {
    "term": "Loao",
    "category": "Greek",
    "definition": "To tread out grain (KJV: thresh, tread out the corn)",
    "transliteration": "ἀλοάω",
    "references": [
      "G248"
    ]
  },
  {
    "term": "Borboros",
    "category": "Greek",
    "definition": "mud (KJV: mire)",
    "transliteration": "βόρβορος",
    "references": [
      "G1004"
    ]
  },
  {
    "term": "Etros",
    "category": "Greek",
    "definition": "a (piece of) rock (larger than G3037 (λίθος)); as a name, Petrus, an apostle (KJV: Peter, rock)",
    "transliteration": "Πέτρος",
    "references": [
      "G4074"
    ]
  },
  {
    "term": "Pikrs",
    "category": "Greek",
    "definition": "bitterly, i.e. (figuratively) violently (KJV: bitterly)",
    "transliteration": "πικρῶς",
    "references": [
      "G4090"
    ]
  },
  {
    "term": "Legon",
    "category": "Greek",
    "definition": "blazing; Phlegon, a Christian (KJV: Phlegon)",
    "transliteration": "Φλέγων",
    "references": [
      "G5393"
    ]
  },
  {
    "term": "Ktenes",
    "category": "Greek",
    "definition": "intent (KJV: without ceasing, fervent)",
    "transliteration": "ἐκτενής",
    "references": [
      "G1618"
    ]
  },
  {
    "term": "Chera",
    "category": "Greek",
    "definition": "a widow (as lacking a husband), literally or figuratively (KJV: widow)",
    "transliteration": "χήρα",
    "references": [
      "G5503"
    ]
  },
  {
    "term": "Symphonesis",
    "category": "Greek",
    "definition": "accordance (KJV: concord)",
    "transliteration": "συμφώνησις",
    "references": [
      "G4857"
    ]
  },
  {
    "term": "Abylon",
    "category": "Greek",
    "definition": "Babylon, the capitol of Chaldæa (literally or figuratively (as a type of tyranny)) (KJV:  Babylon)",
    "transliteration": "Βαβυλών",
    "references": [
      "G897"
    ]
  },
  {
    "term": "Synoikodomeo",
    "category": "Greek",
    "definition": "To construct, i.e. (passively) to compose (in company with other Christians, figuratively) (KJV: build together)",
    "transliteration": "συνοικοδομέω",
    "references": [
      "G4925"
    ]
  },
  {
    "term": "Mileo",
    "category": "Greek",
    "definition": "To be in company with, i.e. (by implication) to converse (KJV: commune, talk)",
    "transliteration": "ὁμιλέω",
    "references": [
      "G3656"
    ]
  },
  {
    "term": "No",
    "category": "Greek",
    "definition": "upward or on the top (KJV: above, brim, high, up)",
    "transliteration": "ἄνω",
    "references": [
      "G507"
    ]
  },
  {
    "term": "Tryphe",
    "category": "Greek",
    "definition": "effeminacy, i.e. luxury or debauchery (KJV: delicately, riot)",
    "transliteration": "τρυφή",
    "references": [
      "G5172"
    ]
  },
  {
    "term": "Methyo",
    "category": "Greek",
    "definition": "To drink to intoxication, i.e. get drunk (KJV: drink well, make (be) drunk(-en))",
    "transliteration": "μεθύω",
    "references": [
      "G3184"
    ]
  },
  {
    "term": "Paraphroneo",
    "category": "Greek",
    "definition": "To misthink, i.e. be insane (silly) (KJV: as a fool)",
    "transliteration": "παραφρονέω",
    "references": [
      "G3912"
    ]
  },
  {
    "term": "Thonion",
    "category": "Greek",
    "definition": "a linen bandage (KJV: linen clothes)",
    "transliteration": "ὀθόνιον",
    "references": [
      "G3608"
    ]
  },
  {
    "term": "Kmen",
    "category": "Greek",
    "definition": "adverbially, just now, i.e. still (KJV: yet)",
    "transliteration": "ἀκμήν",
    "references": [
      "G188"
    ]
  },
  {
    "term": "Sygkoinoneo",
    "category": "Greek",
    "definition": "To share in company with, i.e. co-participate in (KJV: communicate (have fellowship) with, be partaker of)",
    "transliteration": "συγκοινωνέω",
    "references": [
      "G4790"
    ]
  },
  {
    "term": "Perikykloo",
    "category": "Greek",
    "definition": "To encircle all around, i.e. blockade completely (KJV: compass round)",
    "transliteration": "περικυκλόω",
    "references": [
      "G4033"
    ]
  },
  {
    "term": "Athan",
    "category": "Greek",
    "definition": "Nathan, an Israelite (KJV: Nathan)",
    "transliteration": "Ναθάν",
    "references": [
      "G3481"
    ]
  },
  {
    "term": "Oydaikos",
    "category": "Greek",
    "definition": "Judaïc, i.e. resembling a Judæan (KJV: Jewish)",
    "transliteration": "Ἰουδαϊκός",
    "references": [
      "G2451"
    ]
  },
  {
    "term": "Lagchano",
    "category": "Greek",
    "definition": "To lot, i.e. determine (by implication, receive) especially by lot (KJV: his lot be, cast lots, obtain)",
    "transliteration": "λαγχάνω",
    "references": [
      "G2975"
    ]
  },
  {
    "term": "Rpagmos",
    "category": "Greek",
    "definition": "plunder (properly concrete) (KJV: robbery)",
    "transliteration": "ἁρπαγμός",
    "references": [
      "G725"
    ]
  },
  {
    "term": "Oyda",
    "category": "Greek",
    "definition": "Judah (i.e. Jehudah or Juttah), a part of (or place in) Palestine (KJV: Judah)",
    "transliteration": "Ἰουδά",
    "references": [
      "G2448"
    ]
  },
  {
    "term": "Popsycho",
    "category": "Greek",
    "definition": "To breathe out, i.e. faint (KJV: hearts failing)",
    "transliteration": "ἀποψύχω",
    "references": [
      "G674"
    ]
  },
  {
    "term": "Pitrepo",
    "category": "Greek",
    "definition": "To turn over (transfer), i.e. allow (KJV: give leave (liberty, license), let, permit, suffer)",
    "transliteration": "ἐπιτρέπω",
    "references": [
      "G2010"
    ]
  },
  {
    "term": "Men",
    "category": "Greek",
    "definition": "properly, firm, i.e. (figuratively) trustworthy; adverbially, surely (often as interjection, so be it) (KJV: amen, verily)",
    "transliteration": "ἀμήν",
    "references": [
      "G281"
    ]
  },
  {
    "term": "Kon",
    "category": "Greek",
    "definition": "voluntary (KJV: willingly)",
    "transliteration": "ἑκών",
    "references": [
      "G1635"
    ]
  },
  {
    "term": "Chrao",
    "category": "Greek",
    "definition": "To loan (KJV: lend)",
    "transliteration": "χράω",
    "references": [
      "G5531"
    ]
  },
  {
    "term": "Dikastes",
    "category": "Greek",
    "definition": "a judger (KJV: judge)",
    "transliteration": "δικαστής",
    "references": [
      "G1348"
    ]
  },
  {
    "term": "Kreitton",
    "category": "Greek",
    "definition": "stronger, i.e. (figuratively) better, i.e. nobler (KJV: best, better)",
    "transliteration": "κρείττων",
    "references": [
      "G2909"
    ]
  },
  {
    "term": "Tres",
    "category": "Greek",
    "definition": "\"three\" (KJV: three)",
    "transliteration": "τρεῖς",
    "references": [
      "G5140"
    ]
  },
  {
    "term": "Rtemas",
    "category": "Greek",
    "definition": "gift of Artemis; Artemas (or Artemidorus), a Christian (KJV: Artemas)",
    "transliteration": "Ἀρτεμάς",
    "references": [
      "G734"
    ]
  },
  {
    "term": "Batrachos",
    "category": "Greek",
    "definition": "a frog (KJV: frog)",
    "transliteration": "βάτραχος",
    "references": [
      "G944"
    ]
  },
  {
    "term": "Na",
    "category": "Greek",
    "definition": "compare G3588 (ὁ)); in order that (denoting the purpose or the result) (KJV: albeit, because, to the intent (that), lest, so as, (so) that, (for) to)",
    "transliteration": "ἵνα",
    "references": [
      "G2443"
    ]
  },
  {
    "term": "Thermaino",
    "category": "Greek",
    "definition": "To heat (oneself) (KJV: (be) warm(-ed, self))",
    "transliteration": "θερμαίνω",
    "references": [
      "G2328"
    ]
  },
  {
    "term": "Skolekobrotos",
    "category": "Greek",
    "definition": "worm-eaten, i.e. diseased with maggots (KJV: eaten of worms)",
    "transliteration": "σκωληκόβρωτος",
    "references": [
      "G4662"
    ]
  },
  {
    "term": "Skia",
    "category": "Greek",
    "definition": "\"shade\" or a shadow (literally or figuratively (darkness of error or an adumbration)) (KJV:  shadow)",
    "transliteration": "σκιά",
    "references": [
      "G4639"
    ]
  },
  {
    "term": "Ktrepo",
    "category": "Greek",
    "definition": "To deflect, i.e. turn away (literally or figuratively) (KJV: avoid, turn (aside, out of the way))",
    "transliteration": "ἐκτρέπω",
    "references": [
      "G1624"
    ]
  },
  {
    "term": "Pomnesis",
    "category": "Greek",
    "definition": "a reminding or (reflexively) recollection (KJV: remembrance)",
    "transliteration": "ὑπόμνησις",
    "references": [
      "G5280"
    ]
  },
  {
    "term": "Katallage",
    "category": "Greek",
    "definition": "exchange (figuratively, adjustment), i.e. restoration to (the divine) favor (KJV: atonement, reconciliation(-ing))",
    "transliteration": "καταλλαγή",
    "references": [
      "G2643"
    ]
  },
  {
    "term": "Klisia",
    "category": "Greek",
    "definition": "properly, reclination, i.e. (concretely and specially), a party at a meal (KJV: company)",
    "transliteration": "κλισία",
    "references": [
      "G2828"
    ]
  },
  {
    "term": "Kstasis",
    "category": "Greek",
    "definition": "a displacement of the mind, i.e. bewilderment, \"ecstasy\" (KJV: + be amazed, amazement, astonishment, trance)",
    "transliteration": "ἔκστασις",
    "references": [
      "G1611"
    ]
  },
  {
    "term": "Kyriakos",
    "category": "Greek",
    "definition": "belonging to the Lord (Jehovah or Jesus) (KJV: Lord's)",
    "transliteration": "κυριακός",
    "references": [
      "G2960"
    ]
  },
  {
    "term": "Tachys",
    "category": "Greek",
    "definition": "fleet, i.e. (figuratively) prompt or ready (KJV: swift)",
    "transliteration": "ταχύς",
    "references": [
      "G5036"
    ]
  },
  {
    "term": "Xorysso",
    "category": "Greek",
    "definition": "To dig out, i.e. (by extension) to extract (an eye), remove (roofing) (KJV: break up, pluck out)",
    "transliteration": "ἐξορύσσω",
    "references": [
      "G1846"
    ]
  },
  {
    "term": "Logomachia",
    "category": "Greek",
    "definition": "disputation about trifles (\"logomachy\") (KJV: strife of words)",
    "transliteration": "λογομαχία",
    "references": [
      "G3055"
    ]
  },
  {
    "term": "Pokrinomai",
    "category": "Greek",
    "definition": "To decide (speak or act) under a false part, i.e. (figuratively) dissemble (pretend) (KJV: feign)",
    "transliteration": "ὑποκρίνομαι",
    "references": [
      "G5271"
    ]
  },
  {
    "term": "Dialogismos",
    "category": "Greek",
    "definition": "discussion, i.e. (internal) consideration (by implication, purpose), or (external) debate (KJV: dispute, doubtful(-ing), imagination, reasoning, thought)",
    "transliteration": "διαλογισμός",
    "references": [
      "G1261"
    ]
  },
  {
    "term": "Proskopos",
    "category": "Greek",
    "definition": "actively, inoffensive, i.e. not leading into sin; passively, faultless, i.e. not led into sin (KJV: none (void of, without) offence)",
    "transliteration": "ἀπρόσκοπος",
    "references": [
      "G677"
    ]
  },
  {
    "term": "Thera",
    "category": "Greek",
    "definition": "hunting, i.e. (figuratively) destruction (KJV: trap)",
    "transliteration": "θήρα",
    "references": [
      "G2339"
    ]
  },
  {
    "term": "Pekeina",
    "category": "Greek",
    "definition": "upon those parts of, i.e. on the further side of (KJV: beyond)",
    "transliteration": "ἐπέκεινα",
    "references": [
      "G1900"
    ]
  },
  {
    "term": "Prosopolepteo",
    "category": "Greek",
    "definition": "To favor an individual, i.e. show partiality (KJV: have respect to persons)",
    "transliteration": "προσωποληπτέω",
    "references": [
      "G4380"
    ]
  },
  {
    "term": "Edmege",
    "category": "Greek",
    "definition": "but if not (KJV: (or) else, if (not, otherwise), otherwise)",
    "transliteration": "εἰ δὲ μή(γε)",
    "references": [
      "G1490"
    ]
  },
  {
    "term": "Spera",
    "category": "Greek",
    "definition": "a coil (spira, \"spire\"), i.e. (figuratively) a mass of men (a Roman military cohort; also (by analogy) a squad of Levitical janitors) (KJV: band)",
    "transliteration": "σπεῖρα",
    "references": [
      "G4686"
    ]
  },
  {
    "term": "Ados",
    "category": "Greek",
    "definition": "bashfulness, i.e. (towards men), modesty or (towards God) awe (KJV: reverence, shamefacedness)",
    "transliteration": "αἰδώς",
    "references": [
      "G127"
    ]
  },
  {
    "term": "Ntiloidoreo",
    "category": "Greek",
    "definition": "To rail in reply (KJV: revile again)",
    "transliteration": "ἀντιλοιδορέω",
    "references": [
      "G486"
    ]
  },
  {
    "term": "Beltion",
    "category": "Greek",
    "definition": "better (KJV: very well)",
    "transliteration": "βελτίον",
    "references": [
      "G957"
    ]
  },
  {
    "term": "Ti",
    "category": "Greek",
    "definition": "demonstrative, that (sometimes redundant); causative, because (KJV: as concerning that, as though, because (that), for (that), how (that), (in) that, though, why)",
    "transliteration": "ὅτι",
    "references": [
      "G3754"
    ]
  },
  {
    "term": "Kkenos",
    "category": "Greek",
    "definition": "likewise that (or those) (KJV: and him (other, them), even he, him also, them (also), (and) they)",
    "transliteration": "κἀκεῖνος",
    "references": [
      "G2548"
    ]
  },
  {
    "term": "Noixis",
    "category": "Greek",
    "definition": "opening (throat) (KJV: X open)",
    "transliteration": "ἄνοιξις",
    "references": [
      "G457"
    ]
  },
  {
    "term": "Podeiknymi",
    "category": "Greek",
    "definition": "To show off, i.e. exhibit; figuratively, to demonstrate, i.e. accredit (KJV: (ap-)prove, set forth, shew)",
    "transliteration": "ἀποδείκνυμι",
    "references": [
      "G584"
    ]
  },
  {
    "term": "Tribos",
    "category": "Greek",
    "definition": "akin to , , and the base of G5131 (τράγος), G5134 (τραῦμα)); a rut or worn track (KJV: path)",
    "transliteration": "τρίβος",
    "references": [
      "G5147"
    ]
  },
  {
    "term": "Eeman",
    "category": "Greek",
    "definition": "Neeman (i.e. Naaman), a Syrian (KJV: Naaman)",
    "transliteration": "Νεεμάν",
    "references": [
      "G3497"
    ]
  },
  {
    "term": "Synomoreo",
    "category": "Greek",
    "definition": "To border together, i.e. adjoin (KJV: join hard)",
    "transliteration": "συνομορέω",
    "references": [
      "G4927"
    ]
  },
  {
    "term": "Cheiron",
    "category": "Greek",
    "definition": "from an obsolete equivalent (of uncertain derivation); more evil or aggravated (physically, mentally or morally) (KJV: sorer, worse)",
    "transliteration": "χείρων",
    "references": [
      "G5501"
    ]
  },
  {
    "term": "B",
    "category": "Hebrew",
    "definition": "father, in a literal and immediate, or figurative and remote application (KJV: chief, (fore-) father(-less), [idiom] patrimony, principal. Compare names in 'Abi-'.)",
    "transliteration": "אָב",
    "references": [
      "H1"
    ]
  },
  {
    "term": "B",
    "category": "Hebrew",
    "definition": "{father} (KJV: father.)",
    "transliteration": "אַב",
    "references": [
      "H2"
    ]
  },
  {
    "term": "B",
    "category": "Hebrew",
    "definition": "a green plant (KJV: greenness, fruit.)",
    "transliteration": "אֵב",
    "references": [
      "H3"
    ]
  },
  {
    "term": "B",
    "category": "Hebrew",
    "definition": "{a green plant} (KJV: fruit.)",
    "transliteration": "אֵב",
    "references": [
      "H4"
    ]
  },
  {
    "term": "Bgt",
    "category": "Hebrew",
    "definition": "Abagtha, a eunuch of Xerxes (KJV: Abagtha.)",
    "transliteration": "אֲבַגְתָא",
    "references": [
      "H5"
    ]
  },
  {
    "term": "Bd",
    "category": "Hebrew",
    "definition": "properly, to wander away, i.e. lose oneself; by implication to perish (causative, destroy) (KJV: break, destroy(-uction), [phrase] not escape, fail, lose, (cause to, make) perish, spend, [idiom] and surely, take, be undone, [idiom] utterly, be void of, have no way to flee.)",
    "transliteration": "אָבַד",
    "references": [
      "H6"
    ]
  },
  {
    "term": "Bd",
    "category": "Hebrew",
    "definition": "{properly, to wander away, i.e. lose oneself; by implication to perish (causative, destroy)} (KJV: destroy, perish.)",
    "transliteration": "אֲבַד",
    "references": [
      "H7"
    ]
  },
  {
    "term": "Bd",
    "category": "Hebrew",
    "definition": "(concrete) wretched or (abstract) destruction (KJV: perish.)",
    "transliteration": "אֹבֵד",
    "references": [
      "H8"
    ]
  },
  {
    "term": "Bdh",
    "category": "Hebrew",
    "definition": "concrete, something lost; abstract, destruction, i.e. Hades (KJV: lost.)",
    "transliteration": "אֲבֵדָה",
    "references": [
      "H9"
    ]
  },
  {
    "term": "Bdh",
    "category": "Hebrew",
    "definition": "a perishing (KJV: destruction.)",
    "transliteration": "אֲבַדֹּה",
    "references": [
      "H10"
    ]
  },
  {
    "term": "Bdvn",
    "category": "Hebrew",
    "definition": "abstract, a perishing; concrete, Hades (KJV: destruction.)",
    "transliteration": "אֲבַדּוֹן",
    "references": [
      "H11"
    ]
  },
  {
    "term": "Bdn",
    "category": "Hebrew",
    "definition": "a perishing (KJV: destruction.)",
    "transliteration": "אַבְדָן",
    "references": [
      "H12"
    ]
  },
  {
    "term": "Bdn",
    "category": "Hebrew",
    "definition": "a perishing (KJV: destruction.)",
    "transliteration": "אׇבְדַן",
    "references": [
      "H13"
    ]
  },
  {
    "term": "Bh",
    "category": "Hebrew",
    "definition": "To breathe after, i.e. (figuratively) to be acquiescent (KJV: consent, rest content will, be willing.)",
    "transliteration": "אָבָה",
    "references": [
      "H14"
    ]
  },
  {
    "term": "Bh",
    "category": "Hebrew",
    "definition": "longing (KJV: desire.)",
    "transliteration": "אָבֶה",
    "references": [
      "H15"
    ]
  },
  {
    "term": "Bh",
    "category": "Hebrew",
    "definition": "the papyrus (KJV: swift.)",
    "transliteration": "אֵבֶה",
    "references": [
      "H16"
    ]
  },
  {
    "term": "Bvy",
    "category": "Hebrew",
    "definition": "want (KJV: sorrow.)",
    "transliteration": "אֲבוֹי",
    "references": [
      "H17"
    ]
  },
  {
    "term": "Bvs",
    "category": "Hebrew",
    "definition": "a manger or stall (KJV: crib.)",
    "transliteration": "אֵבוּס",
    "references": [
      "H18"
    ]
  },
  {
    "term": "Bchh",
    "category": "Hebrew",
    "definition": "brandishing of a sword (KJV: point.)",
    "transliteration": "אִבְחָה",
    "references": [
      "H19"
    ]
  },
  {
    "term": "Btych",
    "category": "Hebrew",
    "definition": "a melon (only plural) (KJV: melon.)",
    "transliteration": "אֲבַטִּיחַ",
    "references": [
      "H20"
    ]
  },
  {
    "term": "By",
    "category": "Hebrew",
    "definition": "Abi, Hezekiah's mother (KJV: Abi.)",
    "transliteration": "אֲבִי",
    "references": [
      "H21"
    ]
  },
  {
    "term": "Byl",
    "category": "Hebrew",
    "definition": "Abiel, the name of two Israelites (KJV: Abiel.)",
    "transliteration": "אֲבִיאֵל",
    "references": [
      "H22"
    ]
  },
  {
    "term": "Bysp",
    "category": "Hebrew",
    "definition": "Abiasaph, an Israelite (KJV: Abiasaph.)",
    "transliteration": "אֲבִיאָסָף",
    "references": [
      "H23"
    ]
  },
  {
    "term": "Byb",
    "category": "Hebrew",
    "definition": "green, i.e. a young ear of grain; hence, the name of the month Abib or Nisan (KJV: Abib, ear, green ears of corn (not maize).)",
    "transliteration": "אָבִיב",
    "references": [
      "H24"
    ]
  },
  {
    "term": "Bygbvn",
    "category": "Hebrew",
    "definition": "Abi-Gibon, perhaps an Israelite (KJV: father of Gibeon.)",
    "transliteration": "אֲבִי גִבְעוֹן",
    "references": [
      "H25"
    ]
  },
  {
    "term": "Bygyl",
    "category": "Hebrew",
    "definition": "Abigail or Abigal, the name of two Israelitesses (KJV: Abigal.)",
    "transliteration": "אֲבִיגַיִל",
    "references": [
      "H26"
    ]
  },
  {
    "term": "Bydn",
    "category": "Hebrew",
    "definition": "Abidan, an Israelite (KJV: Abidan.)",
    "transliteration": "אֲבִידָן",
    "references": [
      "H27"
    ]
  },
  {
    "term": "Byd",
    "category": "Hebrew",
    "definition": "Abida, a son of Abraham by Keturah (KJV: Abida, Abidah.)",
    "transliteration": "אֲבִידָע",
    "references": [
      "H28"
    ]
  },
  {
    "term": "Byh",
    "category": "Hebrew",
    "definition": "Abijah, the name of several Israelite men and two Israelitesses (KJV: Abiah, Abijah.)",
    "transliteration": "אֲבִיָּה",
    "references": [
      "H29"
    ]
  },
  {
    "term": "Byhv",
    "category": "Hebrew",
    "definition": "Abihu, a son of Aaron (KJV: Abihu.)",
    "transliteration": "אֲבִיהוּא",
    "references": [
      "H30"
    ]
  },
  {
    "term": "Byhvd",
    "category": "Hebrew",
    "definition": "Abihud, the name of two Israelites (KJV: Abihud.)",
    "transliteration": "אֲבִיהוּד",
    "references": [
      "H31"
    ]
  },
  {
    "term": "Byhyl",
    "category": "Hebrew",
    "definition": "Abihail or Abichail, the name of three Israelites and two Israelitesses (KJV: Abihail.)",
    "transliteration": "אֲבִיהַיִל",
    "references": [
      "H32"
    ]
  },
  {
    "term": "Byhzry",
    "category": "Hebrew",
    "definition": "an Abiezrite or descendant of Abiezer (KJV: Abiezrite.)",
    "transliteration": "אֲבִי הָעֶזְרִי",
    "references": [
      "H33"
    ]
  },
  {
    "term": "Byvn",
    "category": "Hebrew",
    "definition": "destitute (KJV: beggar, needy, poor (man).)",
    "transliteration": "אֶבְיוֹן",
    "references": [
      "H34"
    ]
  },
  {
    "term": "Byvnh",
    "category": "Hebrew",
    "definition": "provocative of desire; the caper berry (from its stimulative taste) (KJV: desire.)",
    "transliteration": "אֲבִיּוֹנָה",
    "references": [
      "H35"
    ]
  },
  {
    "term": "Bytvb",
    "category": "Hebrew",
    "definition": "Abitub, an Israelite (KJV: Abitub.)",
    "transliteration": "אֲבִיטוּב",
    "references": [
      "H36"
    ]
  },
  {
    "term": "Bytl",
    "category": "Hebrew",
    "definition": "Abital, a wife of King David (KJV: Abital.)",
    "transliteration": "אֲבִיטָל",
    "references": [
      "H37"
    ]
  },
  {
    "term": "Bym",
    "category": "Hebrew",
    "definition": "Abijam (or Abijah), a king of Judah (KJV: Abijam.)",
    "transliteration": "אֲבִיָּם",
    "references": [
      "H38"
    ]
  },
  {
    "term": "Byml",
    "category": "Hebrew",
    "definition": "Abimael, a son of Joktan (KJV: Abimael.)",
    "transliteration": "אֲבִימָאֵל",
    "references": [
      "H39"
    ]
  },
  {
    "term": "Bymlk",
    "category": "Hebrew",
    "definition": "Abimelek, the name of two Philistine kings and of two Israelites (KJV: Abimelech.)",
    "transliteration": "אֲבִימֶלֶךְ",
    "references": [
      "H40"
    ]
  },
  {
    "term": "Byndb",
    "category": "Hebrew",
    "definition": "Abinadab, the name of four Israelites (KJV: Abinadab.)",
    "transliteration": "אֲבִינָדָב",
    "references": [
      "H41"
    ]
  },
  {
    "term": "Bynm",
    "category": "Hebrew",
    "definition": "Abinoam, an Israelite (KJV: Abinoam.)",
    "transliteration": "אֲבִינֹעַם",
    "references": [
      "H42"
    ]
  },
  {
    "term": "Bysp",
    "category": "Hebrew",
    "definition": "Ebjasaph, an Israelite (KJV: Ebiasaph.)",
    "transliteration": "אֶבְיָסָף",
    "references": [
      "H43"
    ]
  },
  {
    "term": "Byzr",
    "category": "Hebrew",
    "definition": "Abiezer, the name of two Israelites (KJV: Abiezer.)",
    "transliteration": "אֲבִיעֶזֶר",
    "references": [
      "H44"
    ]
  },
  {
    "term": "Bylbvn",
    "category": "Hebrew",
    "definition": "Abialbon, an Israelite (KJV: Abialbon.)",
    "transliteration": "אֲבִי־עַלְבוֹן",
    "references": [
      "H45"
    ]
  },
  {
    "term": "Byr",
    "category": "Hebrew",
    "definition": "mighty (spoken of God) (KJV: mighty (one).)",
    "transliteration": "אָבִיר",
    "references": [
      "H46"
    ]
  },
  {
    "term": "Byr",
    "category": "Hebrew",
    "definition": "{mighty (spoken of God)} (KJV: angel, bull, chiefest, mighty (one), stout(-hearted), strong (one), valiant.)",
    "transliteration": "אַבִּיר",
    "references": [
      "H47"
    ]
  },
  {
    "term": "Byrm",
    "category": "Hebrew",
    "definition": "Abiram, the name of two Israelites (KJV: Abiram.)",
    "transliteration": "אֲבִירָם",
    "references": [
      "H48"
    ]
  },
  {
    "term": "Byshg",
    "category": "Hebrew",
    "definition": "Abishag, a concubine of David (KJV: Abishag.)",
    "transliteration": "אֲבִישַׁג",
    "references": [
      "H49"
    ]
  },
  {
    "term": "Byshv",
    "category": "Hebrew",
    "definition": "Abishua, the name of two Israelites (KJV: Abishua.)",
    "transliteration": "אֲבִישׁוּעַ",
    "references": [
      "H50"
    ]
  },
  {
    "term": "Byshvr",
    "category": "Hebrew",
    "definition": "Abishur, an Israelite (KJV: Abishur.)",
    "transliteration": "אֲבִישׁוּר",
    "references": [
      "H51"
    ]
  },
  {
    "term": "Byshy",
    "category": "Hebrew",
    "definition": "Abishai, an Israelite (KJV: Abishai.)",
    "transliteration": "אֲבִישַׁי",
    "references": [
      "H52"
    ]
  },
  {
    "term": "Byshlvm",
    "category": "Hebrew",
    "definition": "Abshalom, a son of David; also (the fuller form) a later Israelite (KJV: Abishalom, Absalom.)",
    "transliteration": "אֲבִישָׁלוֹם",
    "references": [
      "H53"
    ]
  },
  {
    "term": "Bytr",
    "category": "Hebrew",
    "definition": "Ebjathar, an Israelite (KJV: Abiathar.)",
    "transliteration": "אֶבְיָתָר",
    "references": [
      "H54"
    ]
  },
  {
    "term": "Bk",
    "category": "Hebrew",
    "definition": "probably to coil upward (KJV: mount up.)",
    "transliteration": "אָבַךְ",
    "references": [
      "H55"
    ]
  },
  {
    "term": "Bl",
    "category": "Hebrew",
    "definition": "To bewail (KJV: lament, mourn.)",
    "transliteration": "אָבַל",
    "references": [
      "H56"
    ]
  },
  {
    "term": "Bl",
    "category": "Hebrew",
    "definition": "lamenting (KJV: mourn(-er, -ing).)",
    "transliteration": "אָבֵל",
    "references": [
      "H57"
    ]
  },
  {
    "term": "Bl",
    "category": "Hebrew",
    "definition": "a meadow (KJV: plain. Compare also the proper names beginning with Abel-.)",
    "transliteration": "אָבֵל",
    "references": [
      "H58"
    ]
  },
  {
    "term": "Bl",
    "category": "Hebrew",
    "definition": "Abel, the name of two places in Palestine. (KJV: Abel.)",
    "transliteration": "אָבֵל",
    "references": [
      "H59"
    ]
  },
  {
    "term": "Bl",
    "category": "Hebrew",
    "definition": "lamentation (KJV: mourning.)",
    "transliteration": "אֵבֶל",
    "references": [
      "H60"
    ]
  },
  {
    "term": "Bl",
    "category": "Hebrew",
    "definition": "nay, i.e. truly or yet (KJV: but, indeed, nevertheless, verily.)",
    "transliteration": "אֲבָל",
    "references": [
      "H61"
    ]
  },
  {
    "term": "Blbytmkh",
    "category": "Hebrew",
    "definition": "Abel of Beth-maakah, a place in Palestine (KJV: Abel-beth-maachah, Abel of Beth-maachah,)",
    "transliteration": "אָבֵל בֵּית־מֲעַכָה",
    "references": [
      "H62"
    ]
  },
  {
    "term": "Blhshtym",
    "category": "Hebrew",
    "definition": "Abel hash-Shittim, a place in Palestine (KJV: Abelshittim.)",
    "transliteration": "אָבֵל הַשִּׁטִּים",
    "references": [
      "H63"
    ]
  },
  {
    "term": "Blkrmym",
    "category": "Hebrew",
    "definition": "Abel-Keramim, a place in Palestine (KJV: plain of the vineyards.)",
    "transliteration": "אָבֵל כְּרָמִים",
    "references": [
      "H64"
    ]
  },
  {
    "term": "Blmchvlh",
    "category": "Hebrew",
    "definition": "Abel-Mecholah, a place in Palestine (KJV: Abel-meholah.)",
    "transliteration": "אָבֵל מְחוֹלָה",
    "references": [
      "H65"
    ]
  },
  {
    "term": "Blmym",
    "category": "Hebrew",
    "definition": "Abel-Majim, a place in Palestine (KJV: Abel-maim.)",
    "transliteration": "אַבֵל מַיִם",
    "references": [
      "H66"
    ]
  },
  {
    "term": "Blmtsrym",
    "category": "Hebrew",
    "definition": "Abel-Mitsrajim, a place in Palestine (KJV: Abel-mizraim.)",
    "transliteration": "אָבֵל מִצְרַיִם",
    "references": [
      "H67"
    ]
  },
  {
    "term": "Bn",
    "category": "Hebrew",
    "definition": "a stone (KJV: [phrase] carbuncle, [phrase] mason, [phrase] plummet, (chalk-, hail-, head-, sling-) stone(-ny), (divers) weight(-s).)",
    "transliteration": "אֶבֶן",
    "references": [
      "H68"
    ]
  },
  {
    "term": "Bn",
    "category": "Hebrew",
    "definition": "{a stone} (KJV: stone.)",
    "transliteration": "אֶבֶן",
    "references": [
      "H69"
    ]
  },
  {
    "term": "Bn",
    "category": "Hebrew",
    "definition": "a pair of stones (only dual); a potter's wheel or a midwife's stool (consisting alike of two horizontal disks with a support between) (KJV: wheel, stool.)",
    "transliteration": "אֹבֶן",
    "references": [
      "H70"
    ]
  },
  {
    "term": "Bnh",
    "category": "Hebrew",
    "definition": "Abanah, a river near Damascus (KJV: Abana.)",
    "transliteration": "אֲבָנָה",
    "references": [
      "H71"
    ]
  },
  {
    "term": "Bnhzr",
    "category": "Hebrew",
    "definition": "Eben-ha-Ezer, a place in Palestine (KJV: Ebenezer.)",
    "transliteration": "אֶבֶן הָעֵזֶר",
    "references": [
      "H72"
    ]
  },
  {
    "term": "Bnt",
    "category": "Hebrew",
    "definition": "a belt (KJV: girdle.)",
    "transliteration": "אַבְנֵט",
    "references": [
      "H73"
    ]
  },
  {
    "term": "Bnr",
    "category": "Hebrew",
    "definition": "Abner, an Israelite (KJV: Abner.)",
    "transliteration": "אַבְנֵר",
    "references": [
      "H74"
    ]
  },
  {
    "term": "Bs",
    "category": "Hebrew",
    "definition": "To fodder (KJV: fatted, stalled.)",
    "transliteration": "אָבַס",
    "references": [
      "H75"
    ]
  },
  {
    "term": "Bbh",
    "category": "Hebrew",
    "definition": "an inflammatory pustule (as eruption) (KJV: blains.)",
    "transliteration": "אֲבַעְבֻּעָה",
    "references": [
      "H76"
    ]
  },
  {
    "term": "Bts",
    "category": "Hebrew",
    "definition": "Ebets, a place in Palestine (KJV: Abez.)",
    "transliteration": "אֶבֶץ",
    "references": [
      "H77"
    ]
  },
  {
    "term": "Btsn",
    "category": "Hebrew",
    "definition": "Ibtsan, an Israelite (KJV: Ibzan.)",
    "transliteration": "אִבְצָן",
    "references": [
      "H78"
    ]
  },
  {
    "term": "Bq",
    "category": "Hebrew",
    "definition": "To bedust, i.e. grapple (KJV: wrestle.)",
    "transliteration": "אָבַק",
    "references": [
      "H79"
    ]
  },
  {
    "term": "Bq",
    "category": "Hebrew",
    "definition": "light particles (as volatile) (KJV: (small) dust, powder.)",
    "transliteration": "אָבָק",
    "references": [
      "H80"
    ]
  },
  {
    "term": "Bqh",
    "category": "Hebrew",
    "definition": "{light particles (as volatile)} (KJV: powder.)",
    "transliteration": "אֲבָקָה",
    "references": [
      "H81"
    ]
  },
  {
    "term": "Br",
    "category": "Hebrew",
    "definition": "To soar (KJV: fly.)",
    "transliteration": "אָבַר",
    "references": [
      "H82"
    ]
  },
  {
    "term": "Br",
    "category": "Hebrew",
    "definition": "a pinion (KJV: (long-) wing(-ed).)",
    "transliteration": "אֵבֶר",
    "references": [
      "H83"
    ]
  },
  {
    "term": "Brh",
    "category": "Hebrew",
    "definition": "{a pinion} (KJV: feather, wing.)",
    "transliteration": "אֶבְרָה",
    "references": [
      "H84"
    ]
  },
  {
    "term": "Brhm",
    "category": "Hebrew",
    "definition": "Abraham, the later name of Abram (KJV: Abraham.)",
    "transliteration": "אַבְרָהָם",
    "references": [
      "H85"
    ]
  },
  {
    "term": "Brk",
    "category": "Hebrew",
    "definition": "kneel (KJV: bow the knee.)",
    "transliteration": "אַבְרֵךְ",
    "references": [
      "H86"
    ]
  },
  {
    "term": "Brm",
    "category": "Hebrew",
    "definition": "Abram, the original name of Abraham (KJV: Abram.)",
    "transliteration": "אַבְרָם",
    "references": [
      "H87"
    ]
  },
  {
    "term": "Bt",
    "category": "Hebrew",
    "definition": "Oboth, a place in the Desert (KJV: Oboth.)",
    "transliteration": "אֹבֹת",
    "references": [
      "H88"
    ]
  },
  {
    "term": "G",
    "category": "Hebrew",
    "definition": "Age, an Israelite (KJV: Agee.)",
    "transliteration": "אָגֵא",
    "references": [
      "H89"
    ]
  },
  {
    "term": "Gg",
    "category": "Hebrew",
    "definition": "Agag, a title of Amalekitish kings (KJV: Agag.)",
    "transliteration": "אֲגַג",
    "references": [
      "H90"
    ]
  },
  {
    "term": "Ggy",
    "category": "Hebrew",
    "definition": "an Agagite or descendent (subject) of Agag (KJV: Agagite.)",
    "transliteration": "אֲגָגִי",
    "references": [
      "H91"
    ]
  },
  {
    "term": "Gdh",
    "category": "Hebrew",
    "definition": "a band, bundle, knot, or arch (KJV: bunch, burden, troop.)",
    "transliteration": "אֲגֻדָּה",
    "references": [
      "H92"
    ]
  },
  {
    "term": "Gvz",
    "category": "Hebrew",
    "definition": "a nut (KJV: nut.)",
    "transliteration": "אֱגוֹז",
    "references": [
      "H93"
    ]
  },
  {
    "term": "Gvr",
    "category": "Hebrew",
    "definition": "Agur, a fanciful name for Solomon (KJV: Agur.)",
    "transliteration": "אָגוּר",
    "references": [
      "H94"
    ]
  },
  {
    "term": "Gvrh",
    "category": "Hebrew",
    "definition": "properly, something gathered, i.e. perhaps a grain or berry; used only of a small (silver) coin (KJV: piece (of) silver.)",
    "transliteration": "אֲגוֹרָה",
    "references": [
      "H95"
    ]
  },
  {
    "term": "Gl",
    "category": "Hebrew",
    "definition": "a reservoir (KJV: drop.)",
    "transliteration": "אֶגֶל",
    "references": [
      "H96"
    ]
  },
  {
    "term": "Glym",
    "category": "Hebrew",
    "definition": "Eglajim, a place in Moab (KJV: Eglaim.)",
    "transliteration": "אֶגְלַיִם",
    "references": [
      "H97"
    ]
  },
  {
    "term": "Gm",
    "category": "Hebrew",
    "definition": "a marsh; hence a rush (as growing in swamps); hence a stockade of reeds (KJV: pond, pool, standing (water).)",
    "transliteration": "אֲגַם",
    "references": [
      "H98"
    ]
  },
  {
    "term": "Gm",
    "category": "Hebrew",
    "definition": "figuratively, sad (KJV: pond.)",
    "transliteration": "אָגֵם",
    "references": [
      "H99"
    ]
  },
  {
    "term": "Gmvn",
    "category": "Hebrew",
    "definition": "a bulrush (as growing there); collectively a rope of bulrushes (KJV: bulrush, caldron, hook, rush.)",
    "transliteration": "אַגְמוֹן",
    "references": [
      "H100"
    ]
  },
  {
    "term": "Gn",
    "category": "Hebrew",
    "definition": "a bowl (as pounded out hollow) (KJV: basin, cup, goblet.)",
    "transliteration": "אַגָּן",
    "references": [
      "H101"
    ]
  },
  {
    "term": "Gp",
    "category": "Hebrew",
    "definition": "(only plural) wings of an army, or crowds of troops (KJV: bands.)",
    "transliteration": "אַגָּף",
    "references": [
      "H102"
    ]
  },
  {
    "term": "Gr",
    "category": "Hebrew",
    "definition": "To harvest (KJV: gather.)",
    "transliteration": "אָגַר",
    "references": [
      "H103"
    ]
  },
  {
    "term": "Gr",
    "category": "Hebrew",
    "definition": "an epistle (as carried by a state courier or postman) (KJV: letter.)",
    "transliteration": "אִגְּרָא",
    "references": [
      "H104"
    ]
  },
  {
    "term": "Grtl",
    "category": "Hebrew",
    "definition": "a basin (KJV: charger.)",
    "transliteration": "אֲגַרְטָל",
    "references": [
      "H105"
    ]
  },
  {
    "term": "Grp",
    "category": "Hebrew",
    "definition": "the clenched hand (KJV: fist.)",
    "transliteration": "אֶגְרֹף",
    "references": [
      "H106"
    ]
  },
  {
    "term": "Grt",
    "category": "Hebrew",
    "definition": "an epistle (KJV: letter.)",
    "transliteration": "אִגֶּרֶת",
    "references": [
      "H107"
    ]
  },
  {
    "term": "D",
    "category": "Hebrew",
    "definition": "a fog (KJV: mist, vapor.)",
    "transliteration": "אֵד",
    "references": [
      "H108"
    ]
  },
  {
    "term": "Db",
    "category": "Hebrew",
    "definition": "To languish (KJV: grieve.)",
    "transliteration": "אָדַב",
    "references": [
      "H109"
    ]
  },
  {
    "term": "Dbl",
    "category": "Hebrew",
    "definition": "Adbeel, a son of Ishmael (KJV: Adbeel.)",
    "transliteration": "אַדְבְּאֵל",
    "references": [
      "H110"
    ]
  },
  {
    "term": "Dd",
    "category": "Hebrew",
    "definition": "Adad (or Hadad), an Edomite (KJV: Hadad.)",
    "transliteration": "אֲדַד",
    "references": [
      "H111"
    ]
  },
  {
    "term": "Dv",
    "category": "Hebrew",
    "definition": "Iddo, an Israelite (KJV: Iddo.)",
    "transliteration": "אִדּוֹ",
    "references": [
      "H112"
    ]
  },
  {
    "term": "Dvn",
    "category": "Hebrew",
    "definition": "sovereign, i.e. controller (human or divine) (KJV: lord, master, owner. Compare also names beginning with 'Adoni-'.)",
    "transliteration": "אָדוֹן",
    "references": [
      "H113"
    ]
  },
  {
    "term": "Dvn",
    "category": "Hebrew",
    "definition": "Addon, apparently an Israelite (KJV: Addon.)",
    "transliteration": "אַדּוֹן",
    "references": [
      "H114"
    ]
  },
  {
    "term": "Dvrym",
    "category": "Hebrew",
    "definition": "Adorajim, a place in Palestine (KJV: Adoraim.)",
    "transliteration": "אֲדוֹרַיִם",
    "references": [
      "H115"
    ]
  },
  {
    "term": "Dyn",
    "category": "Hebrew",
    "definition": "then (of time) (KJV: now, that time, then.)",
    "transliteration": "אֱדַיִן",
    "references": [
      "H116"
    ]
  },
  {
    "term": "Dyr",
    "category": "Hebrew",
    "definition": "wide or (generally) large; figuratively, powerful (KJV: excellent, famous, gallant, glorious, goodly, lordly, mighty(-ier one), noble, principal, worthy.)",
    "transliteration": "אַדִּיר",
    "references": [
      "H117"
    ]
  },
  {
    "term": "Dly",
    "category": "Hebrew",
    "definition": "Adalja, a son of Haman (KJV: Adalia.)",
    "transliteration": "אֲדַלְיָא",
    "references": [
      "H118"
    ]
  },
  {
    "term": "Dm",
    "category": "Hebrew",
    "definition": "flush or turn rosy (KJV: be (dyed, made) red (ruddy).)",
    "transliteration": "אָדַם",
    "references": [
      "H119"
    ]
  },
  {
    "term": "Dm",
    "category": "Hebrew",
    "definition": "ruddy i.e. a human being (an individual or the species, mankind, etc.) (KJV: [idiom] another, [phrase] hypocrite, [phrase] common sort, [idiom] low, man (mean, of low degree), person.)",
    "transliteration": "אָדָם",
    "references": [
      "H120"
    ]
  },
  {
    "term": "Dm",
    "category": "Hebrew",
    "definition": "Adam the name of the first man, also of a place in Palestine (KJV: Adam.)",
    "transliteration": "אָדָם",
    "references": [
      "H121"
    ]
  },
  {
    "term": "Dm",
    "category": "Hebrew",
    "definition": "rosy (KJV: red, ruddy.)",
    "transliteration": "אָדֹם",
    "references": [
      "H122"
    ]
  },
  {
    "term": "Dm",
    "category": "Hebrew",
    "definition": "Edom, the elder twin-brother of Jacob; hence the region (Idumaea) occupied by him (KJV: Edom, Edomites, Idumea.)",
    "transliteration": "אֱדֹם",
    "references": [
      "H123"
    ]
  },
  {
    "term": "Dm",
    "category": "Hebrew",
    "definition": "redness, i.e. the ruby, garnet, or some other red gem (KJV: sardius.)",
    "transliteration": "אֹדֶם",
    "references": [
      "H124"
    ]
  },
  {
    "term": "Dmdm",
    "category": "Hebrew",
    "definition": "reddish (KJV: (somewhat) reddish.)",
    "transliteration": "אֲדַמְדָּם",
    "references": [
      "H125"
    ]
  },
  {
    "term": "Dmh",
    "category": "Hebrew",
    "definition": "Admah, a place near the Dead Sea (KJV: Admah.)",
    "transliteration": "אַדְמָה",
    "references": [
      "H126"
    ]
  },
  {
    "term": "Dmh",
    "category": "Hebrew",
    "definition": "soil (from its general redness) (KJV: country, earth, ground, husband(-man) (-ry), land.)",
    "transliteration": "אֲדָמָה",
    "references": [
      "H127"
    ]
  },
  {
    "term": "Dmh",
    "category": "Hebrew",
    "definition": "Adamah, a place in Palestine (KJV: Adamah.)",
    "transliteration": "אֲדָמָה",
    "references": [
      "H128"
    ]
  },
  {
    "term": "Dmy",
    "category": "Hebrew",
    "definition": "Adami, a place in Palestine (KJV: Adami.)",
    "transliteration": "אֲדָמִי",
    "references": [
      "H129"
    ]
  },
  {
    "term": "Dmy",
    "category": "Hebrew",
    "definition": "an Edomite, or descendants from (or inhabitants of) Edom (KJV: Edomite. )",
    "transliteration": "אֱדֹמִי",
    "references": [
      "H130"
    ]
  },
  {
    "term": "Dmym",
    "category": "Hebrew",
    "definition": "Adummim, a pass in Palestine (KJV: Adummim.)",
    "transliteration": "אֲדֻמִּים",
    "references": [
      "H131"
    ]
  },
  {
    "term": "Dmny",
    "category": "Hebrew",
    "definition": "reddish (of the hair or the complexion) (KJV: red, ruddy.)",
    "transliteration": "אַדְמֹנִי",
    "references": [
      "H132"
    ]
  },
  {
    "term": "Dmt",
    "category": "Hebrew",
    "definition": "Admatha, a Persian nobleman (KJV: Admatha.)",
    "transliteration": "אַדְמָתָא",
    "references": [
      "H133"
    ]
  },
  {
    "term": "Dn",
    "category": "Hebrew",
    "definition": "a basis (of a building, a column, etc.) (KJV: foundation, socket.)",
    "transliteration": "אֶדֶן",
    "references": [
      "H134"
    ]
  },
  {
    "term": "Dn",
    "category": "Hebrew",
    "definition": "Addan, an Israelite (KJV: Addan.)",
    "transliteration": "אַדָּן",
    "references": [
      "H135"
    ]
  },
  {
    "term": "Dny",
    "category": "Hebrew",
    "definition": "the Lord (used as a proper name of God only) (KJV: (my) Lord.)",
    "transliteration": "אֲדֹנָי",
    "references": [
      "H136"
    ]
  },
  {
    "term": "Dnybzq",
    "category": "Hebrew",
    "definition": "Adoni-Bezek; a Canaanitish king (KJV: Adonibezek.)",
    "transliteration": "אֲדֹנִי־בֶזֶק",
    "references": [
      "H137"
    ]
  },
  {
    "term": "Dnyh",
    "category": "Hebrew",
    "definition": "Adonijah, the name of three Israelites (KJV: Adonijah.)",
    "transliteration": "אֲדֹנִיָּה",
    "references": [
      "H138"
    ]
  },
  {
    "term": "Dnytsdq",
    "category": "Hebrew",
    "definition": "Adoni-Tsedek, a Canaanitish king (KJV: Adonizedec.)",
    "transliteration": "אֲדֹנִי־צֶדֶק",
    "references": [
      "H139"
    ]
  },
  {
    "term": "Dnyqm",
    "category": "Hebrew",
    "definition": "Adonikam, the name of one or two Israelites (KJV: Adonikam.)",
    "transliteration": "אֲדֹנִיקָם",
    "references": [
      "H140"
    ]
  },
  {
    "term": "Dnyrm",
    "category": "Hebrew",
    "definition": "Adoniram, an Israelite (KJV: Adoniram.)",
    "transliteration": "אֲדֹנִירָם",
    "references": [
      "H141"
    ]
  },
  {
    "term": "Dr",
    "category": "Hebrew",
    "definition": "To expand, i.e. be great or (figuratively) magnificent (KJV: (become) glorious, honourable.)",
    "transliteration": "אָדַר",
    "references": [
      "H142"
    ]
  },
  {
    "term": "Dr",
    "category": "Hebrew",
    "definition": "Adar, the 12th Hebrew month (KJV: Adar.)",
    "transliteration": "אֲדָר",
    "references": [
      "H143"
    ]
  },
  {
    "term": "Dr",
    "category": "Hebrew",
    "definition": "{Adar, the 12th Hebrew month} (KJV: Adar.)",
    "transliteration": "אֲדָר",
    "references": [
      "H144"
    ]
  },
  {
    "term": "Dr",
    "category": "Hebrew",
    "definition": "amplitude, i.e. (concrete) a mantle; also (figuratively) splendor (KJV: goodly, robe.)",
    "transliteration": "אֶדֶר",
    "references": [
      "H145"
    ]
  },
  {
    "term": "Dr",
    "category": "Hebrew",
    "definition": "Addar, a place in Palestine; also an Israelite (KJV: Addar.)",
    "transliteration": "אַדָּר",
    "references": [
      "H146"
    ]
  },
  {
    "term": "Dr",
    "category": "Hebrew",
    "definition": "ample, i.e. a threshing-floor (KJV: threshingfloor.)",
    "transliteration": "אִדַּר",
    "references": [
      "H147"
    ]
  },
  {
    "term": "Drgzr",
    "category": "Hebrew",
    "definition": "a chief diviner, or astrologer (KJV: judge.)",
    "transliteration": "אֲדַרְגָּזֵר",
    "references": [
      "H148"
    ]
  },
  {
    "term": "Drzd",
    "category": "Hebrew",
    "definition": "quickly or carefully (KJV: diligently.)",
    "transliteration": "אַדְרַזְדָּא",
    "references": [
      "H149"
    ]
  },
  {
    "term": "Drkn",
    "category": "Hebrew",
    "definition": "a daric or Persian coin (KJV: dram.)",
    "transliteration": "אֲדַרְכֹּן",
    "references": [
      "H150"
    ]
  },
  {
    "term": "Drm",
    "category": "Hebrew",
    "definition": "Adoram (or Adoniram), an Israelite (KJV: Adoram.)",
    "transliteration": "אֲדֹרָם",
    "references": [
      "H151"
    ]
  },
  {
    "term": "Drmlk",
    "category": "Hebrew",
    "definition": "Adrammelek, the name of an Assyrian idol, also of a son of Sennacherib (KJV: Adrammelech.)",
    "transliteration": "אֲדְרַמֶּלֶךְ",
    "references": [
      "H152"
    ]
  },
  {
    "term": "Dr",
    "category": "Hebrew",
    "definition": "an arm, i.e. (figuratively) power (KJV: force.)",
    "transliteration": "אֶדְרָע",
    "references": [
      "H153"
    ]
  },
  {
    "term": "Dry",
    "category": "Hebrew",
    "definition": "Edrei, the name of two places in Palestine (KJV: Edrei.)",
    "transliteration": "אֶדְרֶעִי",
    "references": [
      "H154"
    ]
  },
  {
    "term": "Drt",
    "category": "Hebrew",
    "definition": "something ample (as a large vine, a wide dress) (KJV: garment, glory, goodly, mantle, robe.)",
    "transliteration": "אַדֶּרֶת",
    "references": [
      "H155"
    ]
  },
  {
    "term": "Dsh",
    "category": "Hebrew",
    "definition": "To tread out (grain) (KJV: thresh.)",
    "transliteration": "אָדַשׁ",
    "references": [
      "H156"
    ]
  },
  {
    "term": "Hb",
    "category": "Hebrew",
    "definition": "To have affection for (sexually or otherwise) (KJV: (be-) love(-d, -ly, -r), like, friend.)",
    "transliteration": "אָהַב",
    "references": [
      "H157"
    ]
  },
  {
    "term": "Hb",
    "category": "Hebrew",
    "definition": "affection (in a good or a bad sense) (KJV: love(-r).)",
    "transliteration": "אַהַב",
    "references": [
      "H158"
    ]
  },
  {
    "term": "Hb",
    "category": "Hebrew",
    "definition": "{affection (in a good or a bad sense)} (KJV: love.)",
    "transliteration": "אֹהַב",
    "references": [
      "H159"
    ]
  },
  {
    "term": "Hbh",
    "category": "Hebrew",
    "definition": "{affection (in a good or a bad sense)} (KJV: love.)",
    "transliteration": "אַהֲבָה",
    "references": [
      "H160"
    ]
  },
  {
    "term": "Hd",
    "category": "Hebrew",
    "definition": "Ohad, an Israelite (KJV: Ohad.)",
    "transliteration": "אֹהַד",
    "references": [
      "H161"
    ]
  },
  {
    "term": "Hh",
    "category": "Hebrew",
    "definition": "Oh! (KJV: ah, alas.)",
    "transliteration": "אֲהָהּ",
    "references": [
      "H162"
    ]
  },
  {
    "term": "Hv",
    "category": "Hebrew",
    "definition": "Ahava, a river of Babylonia (KJV: Ahava.)",
    "transliteration": "אַהֲוָא",
    "references": [
      "H163"
    ]
  },
  {
    "term": "Hvd",
    "category": "Hebrew",
    "definition": "Ehud, the name of two or three Israelites (KJV: Ehud.)",
    "transliteration": "אֵהוּד",
    "references": [
      "H164"
    ]
  },
  {
    "term": "Hy",
    "category": "Hebrew",
    "definition": "where (KJV: I will be (Hosea 13:10,14) (which is often the rendering of the same Hebrew form from H1961 (הָיָה)).)",
    "transliteration": "אֱהִי",
    "references": [
      "H165"
    ]
  },
  {
    "term": "Hl",
    "category": "Hebrew",
    "definition": "To be clear (KJV: shine.)",
    "transliteration": "אָהַל",
    "references": [
      "H166"
    ]
  },
  {
    "term": "Hl",
    "category": "Hebrew",
    "definition": "To tent (KJV: pitch (remove) a tent.)",
    "transliteration": "אָהַל",
    "references": [
      "H167"
    ]
  },
  {
    "term": "Hl",
    "category": "Hebrew",
    "definition": "a tent (as clearly conspicuous from a distance) (KJV: covering, (dwelling) (place), home, tabernacle, tent.)",
    "transliteration": "אֹהֶל",
    "references": [
      "H168"
    ]
  },
  {
    "term": "Hl",
    "category": "Hebrew",
    "definition": "Ohel, an Israelite (KJV: Ohel.)",
    "transliteration": "אֹהֶל",
    "references": [
      "H169"
    ]
  },
  {
    "term": "Hlh",
    "category": "Hebrew",
    "definition": "Oholah, a symbolic name for Samaria (KJV: Aholah.)",
    "transliteration": "אׇהֳלָה",
    "references": [
      "H170"
    ]
  },
  {
    "term": "Hlyb",
    "category": "Hebrew",
    "definition": "Oholiab, an Israelite (KJV: Aholiab.)",
    "transliteration": "אׇהֳלִיאָב",
    "references": [
      "H171"
    ]
  },
  {
    "term": "Hlybh",
    "category": "Hebrew",
    "definition": "Oholibah, a symbolic name for Judah (KJV: Aholibah.)",
    "transliteration": "אׇהֳלִיבָה",
    "references": [
      "H172"
    ]
  },
  {
    "term": "Hlybmh",
    "category": "Hebrew",
    "definition": "Oholibamah, a wife of Esau (KJV: Aholibamah.)",
    "transliteration": "אׇהֳלִיבָמָה",
    "references": [
      "H173"
    ]
  },
  {
    "term": "Hlym",
    "category": "Hebrew",
    "definition": "aloe wood (i.e. sticks) (KJV: (tree of lign-) aloes.)",
    "transliteration": "אֲהָלִים",
    "references": [
      "H174"
    ]
  },
  {
    "term": "Hrvn",
    "category": "Hebrew",
    "definition": "Aharon, the brother of Moses (KJV: Aaron.)",
    "transliteration": "אַהֲרוֹן",
    "references": [
      "H175"
    ]
  },
  {
    "term": "V",
    "category": "Hebrew",
    "definition": "desire (and so probably in Proverbs 31:4); hence (by way of alternative) or, also if (KJV: also, and, either, if, at the least, [idiom] nor, or, otherwise, then, whether.)",
    "transliteration": "אוֹ",
    "references": [
      "H176"
    ]
  },
  {
    "term": "Vl",
    "category": "Hebrew",
    "definition": "Uel, and Israelite (KJV: Uel.)",
    "transliteration": "אוּאֵל",
    "references": [
      "H177"
    ]
  },
  {
    "term": "Vb",
    "category": "Hebrew",
    "definition": "properly, a mumble, i.e. a water skin (from its hollow sound); hence a necromancer (ventriloquist, as from a jar) (KJV: bottle, familiar spirit.)",
    "transliteration": "אוֹב",
    "references": [
      "H178"
    ]
  },
  {
    "term": "Vbyl",
    "category": "Hebrew",
    "definition": "Obil, an Ishmaelite (KJV: Obil.)",
    "transliteration": "אוֹבִיל",
    "references": [
      "H179"
    ]
  },
  {
    "term": "Vbl",
    "category": "Hebrew",
    "definition": "a stream (KJV: river.)",
    "transliteration": "אוּבָל",
    "references": [
      "H180"
    ]
  },
  {
    "term": "Vd",
    "category": "Hebrew",
    "definition": "a poker (for turning or gathering embers) (KJV: (fire-) brand.)",
    "transliteration": "אוּד",
    "references": [
      "H181"
    ]
  },
  {
    "term": "Vdvt",
    "category": "Hebrew",
    "definition": "turnings (i.e. occasions); (adverb) on account of (KJV: (be-) cause, concerning, sake.)",
    "transliteration": "אוֹדוֹת",
    "references": [
      "H182"
    ]
  },
  {
    "term": "Vh",
    "category": "Hebrew",
    "definition": "To wish for (KJV: covet, (greatly) desire, be desirous, long, lust (after).)",
    "transliteration": "אָוָה",
    "references": [
      "H183"
    ]
  },
  {
    "term": "Vh",
    "category": "Hebrew",
    "definition": "To extend or mark out (KJV: point out.)",
    "transliteration": "אָוָה",
    "references": [
      "H184"
    ]
  },
  {
    "term": "Vh",
    "category": "Hebrew",
    "definition": "longing (KJV: desire, lust after, pleasure.)",
    "transliteration": "אַוָּה",
    "references": [
      "H185"
    ]
  },
  {
    "term": "Vzy",
    "category": "Hebrew",
    "definition": "Uzai, an Israelite (KJV: Uzai.)",
    "transliteration": "אוּזַי",
    "references": [
      "H186"
    ]
  },
  {
    "term": "Vzl",
    "category": "Hebrew",
    "definition": "Uzal, a son of Joktan (KJV: Uzal.)",
    "transliteration": "אוּזָל",
    "references": [
      "H187"
    ]
  },
  {
    "term": "Vy",
    "category": "Hebrew",
    "definition": "lamentation; also interjectionally Oh! (KJV: alas, woe.)",
    "transliteration": "אוֹי",
    "references": [
      "H188"
    ]
  },
  {
    "term": "Vy",
    "category": "Hebrew",
    "definition": "Evi, a Midianitish chief (KJV: Evi.)",
    "transliteration": "אֱוִי",
    "references": [
      "H189"
    ]
  },
  {
    "term": "Vyh",
    "category": "Hebrew",
    "definition": "{lamentation; also interjectionally Oh!} (KJV: woe.)",
    "transliteration": "אוֹיָה",
    "references": [
      "H190"
    ]
  },
  {
    "term": "Vyl",
    "category": "Hebrew",
    "definition": "(figuratively) silly (KJV: fool(-ish) (man).)",
    "transliteration": "אֱוִיל",
    "references": [
      "H191"
    ]
  },
  {
    "term": "Vylmrdk",
    "category": "Hebrew",
    "definition": "Evil-Merodak, a Babylonian king (KJV: Evil-merodach.)",
    "transliteration": "אֱוִיל מְרֹדַךְ",
    "references": [
      "H192"
    ]
  },
  {
    "term": "Vl",
    "category": "Hebrew",
    "definition": "the body (as being rolled together); also powerful (KJV: mighty, strength.)",
    "transliteration": "אוּל",
    "references": [
      "H193"
    ]
  },
  {
    "term": "Vly",
    "category": "Hebrew",
    "definition": "if not; hence perhaps (KJV: if so be, may be, peradventure, unless.)",
    "transliteration": "אוּלַי",
    "references": [
      "H194"
    ]
  },
  {
    "term": "Vly",
    "category": "Hebrew",
    "definition": "the Ulai (or Eulaeus), a river of Persia (KJV: Ulai.)",
    "transliteration": "אוּלַי",
    "references": [
      "H195"
    ]
  },
  {
    "term": "Vly",
    "category": "Hebrew",
    "definition": "silly, foolish; hence (morally) impious (KJV: foolish.)",
    "transliteration": "אֱוִלִי",
    "references": [
      "H196"
    ]
  },
  {
    "term": "Vlm",
    "category": "Hebrew",
    "definition": "a vestibule (as bound to the building) (KJV: porch.)",
    "transliteration": "אוּלָם",
    "references": [
      "H197"
    ]
  },
  {
    "term": "Vlm",
    "category": "Hebrew",
    "definition": "Ulam, the name of two Israelites (KJV: Ulam.)",
    "transliteration": "אוּלָם",
    "references": [
      "H198"
    ]
  },
  {
    "term": "Vlm",
    "category": "Hebrew",
    "definition": "however or on the contrary (KJV: as for, but, howbeit, in very deed, surely, truly, wherefore.)",
    "transliteration": "אוּלָם",
    "references": [
      "H199"
    ]
  },
  {
    "term": "Vlt",
    "category": "Hebrew",
    "definition": "silliness (KJV: folly, foolishly(-ness).)",
    "transliteration": "אִוֶּלֶת",
    "references": [
      "H200"
    ]
  },
  {
    "term": "Vmr",
    "category": "Hebrew",
    "definition": "Omar, a grandson of Esau (KJV: Omar.)",
    "transliteration": "אוֹמָר",
    "references": [
      "H201"
    ]
  },
  {
    "term": "Vn",
    "category": "Hebrew",
    "definition": "ability, power, (figuratively) wealth (KJV: force, goods, might, strength, substance.)",
    "transliteration": "אוֹן",
    "references": [
      "H202"
    ]
  },
  {
    "term": "Vn",
    "category": "Hebrew",
    "definition": "On, an Israelite (KJV: On.)",
    "transliteration": "אוֹן",
    "references": [
      "H203"
    ]
  },
  {
    "term": "Vn",
    "category": "Hebrew",
    "definition": "On, a city of Egypt (KJV: On.)",
    "transliteration": "אוֹן",
    "references": [
      "H204"
    ]
  },
  {
    "term": "Vn",
    "category": "Hebrew",
    "definition": "strictly nothingness; also trouble. vanity, wickedness; specifically an idol (KJV: affliction, evil, false, idol, iniquity, mischief, mourners(-ing), naught, sorrow, unjust, unrighteous, vain, vanity, wicked(-ness). Compare H369 (אַיִן).)",
    "transliteration": "אָוֶן",
    "references": [
      "H205"
    ]
  },
  {
    "term": "Vn",
    "category": "Hebrew",
    "definition": "Aven, the contemptuous synonym of three places, one in Coele-Syria, one in Egypt (On), and one in Palestine (Bethel) (KJV: Aven. See also H204 (אוֹן), H1007 (בֵּית אָוֶן).)",
    "transliteration": "אָוֶן",
    "references": [
      "H206"
    ]
  },
  {
    "term": "Vnv",
    "category": "Hebrew",
    "definition": "Ono, a place in Palestine (KJV: Ono.)",
    "transliteration": "אוֹנוֹ",
    "references": [
      "H207"
    ]
  },
  {
    "term": "Vnm",
    "category": "Hebrew",
    "definition": "Onam, the name of an Edomite and of an Israelite (KJV: Onam.)",
    "transliteration": "אוֹנָם",
    "references": [
      "H208"
    ]
  },
  {
    "term": "Vnn",
    "category": "Hebrew",
    "definition": "Onan, a son of Judah (KJV: Onan.)",
    "transliteration": "אוֹנָן",
    "references": [
      "H209"
    ]
  },
  {
    "term": "Vpz",
    "category": "Hebrew",
    "definition": "Uphaz, a famous gold region (KJV: Uphaz.)",
    "transliteration": "אוּפָז",
    "references": [
      "H210"
    ]
  },
  {
    "term": "Vpyr",
    "category": "Hebrew",
    "definition": "Ophir, the name of a son of Joktan, and of a gold region in the East (KJV: Ophir.)",
    "transliteration": "אוֹפִיר",
    "references": [
      "H211"
    ]
  },
  {
    "term": "Vpn",
    "category": "Hebrew",
    "definition": "a wheel (KJV: wheel.)",
    "transliteration": "אוֹפָן",
    "references": [
      "H212"
    ]
  },
  {
    "term": "Vts",
    "category": "Hebrew",
    "definition": "To press; (by implication) to be close, hurry, withdraw (KJV: (make) haste(-n, -y), labor, be narrow.)",
    "transliteration": "אוּץ",
    "references": [
      "H213"
    ]
  },
  {
    "term": "Vtsr",
    "category": "Hebrew",
    "definition": "a depository (KJV: armory, cellar, garner, store(-house), treasure(-house) (-y).)",
    "transliteration": "אוֹצָר",
    "references": [
      "H214"
    ]
  },
  {
    "term": "Vr",
    "category": "Hebrew",
    "definition": "To be (causative, make) luminous (literally and metaphorically) (KJV: [idiom] break of day, glorious, kindle, (be, en-, give, show) light (-en, -ened), set on fire, shine.)",
    "transliteration": "אוֹר",
    "references": [
      "H215"
    ]
  },
  {
    "term": "Vr",
    "category": "Hebrew",
    "definition": "illumination or (concrete) luminary (in every sense, including lightning, happiness, etc.) (KJV: bright, clear, [phrase] day, light (-ning), morning, sun.)",
    "transliteration": "אוֹר",
    "references": [
      "H216"
    ]
  },
  {
    "term": "Vr",
    "category": "Hebrew",
    "definition": "flame; hence (in the plural) the East (as being the region of light) (KJV: fire, light. See also H224 (אוּרִים).)",
    "transliteration": "אוּר",
    "references": [
      "H217"
    ]
  },
  {
    "term": "Vr",
    "category": "Hebrew",
    "definition": "Ur, a place in Chaldaea; also an Israelite (KJV: Ur.)",
    "transliteration": "אוּר",
    "references": [
      "H218"
    ]
  },
  {
    "term": "Vrh",
    "category": "Hebrew",
    "definition": "luminousness, i.e. (figuratively) prosperity; also a plant (as being bright) (KJV: herb, light.)",
    "transliteration": "אוֹרָה",
    "references": [
      "H219"
    ]
  },
  {
    "term": "Vrh",
    "category": "Hebrew",
    "definition": "a stall (KJV: cote.)",
    "transliteration": "אֲוֵרָה",
    "references": [
      "H220"
    ]
  },
  {
    "term": "Vry",
    "category": "Hebrew",
    "definition": "Uri, the name of three Israelites (KJV: Uri.)",
    "transliteration": "אוּרִי",
    "references": [
      "H221"
    ]
  },
  {
    "term": "Vryl",
    "category": "Hebrew",
    "definition": "Uriel, the name of two Israelites (KJV: Uriel.)",
    "transliteration": "אוּרִיאֵל",
    "references": [
      "H222"
    ]
  },
  {
    "term": "Vryh",
    "category": "Hebrew",
    "definition": "Urijah, the name of one Hittite and five Israelites (KJV: Uriah, Urijah.)",
    "transliteration": "אוּרִיָּה",
    "references": [
      "H223"
    ]
  },
  {
    "term": "Vrym",
    "category": "Hebrew",
    "definition": "Urim, the oracular brilliancy of the figures in the high-priest's breastplate (KJV: Urim.)",
    "transliteration": "אוּרִים",
    "references": [
      "H224"
    ]
  },
  {
    "term": "Vt",
    "category": "Hebrew",
    "definition": "properly, to come, i.e. (implied) to assent (KJV: consent.)",
    "transliteration": "אוּת",
    "references": [
      "H225"
    ]
  },
  {
    "term": "Vt",
    "category": "Hebrew",
    "definition": "a signal (literally or figuratively), as aflag, beacon, monument, omen, prodigy, evidence, etc. (KJV: mark, miracle, (en-) sign, token.)",
    "transliteration": "אוֹת",
    "references": [
      "H226"
    ]
  },
  {
    "term": "Z",
    "category": "Hebrew",
    "definition": "at that time or place; also as a conjunction, therefore (KJV: beginning, for, from, hitherto, now, of old, once, since, then, at which time, yet.)",
    "transliteration": "אָז",
    "references": [
      "H227"
    ]
  },
  {
    "term": "Z",
    "category": "Hebrew",
    "definition": "To kindle; (by implication) to heat (KJV: heat, hot.)",
    "transliteration": "אֲזָא",
    "references": [
      "H228"
    ]
  },
  {
    "term": "Zby",
    "category": "Hebrew",
    "definition": "Ezbai, an Israelite (KJV: Ezbai.)",
    "transliteration": "אֶזְבַּי",
    "references": [
      "H229"
    ]
  },
  {
    "term": "Zd",
    "category": "Hebrew",
    "definition": "firm (KJV: be gone.)",
    "transliteration": "אֲזָד",
    "references": [
      "H230"
    ]
  },
  {
    "term": "Zvb",
    "category": "Hebrew",
    "definition": "hyssop (KJV: hyssop.)",
    "transliteration": "אֵזוֹב",
    "references": [
      "H231"
    ]
  },
  {
    "term": "Zvr",
    "category": "Hebrew",
    "definition": "something girt; a belt, also a band (KJV: girdle.)",
    "transliteration": "אֵזוֹר",
    "references": [
      "H232"
    ]
  },
  {
    "term": "Zy",
    "category": "Hebrew",
    "definition": "at that time (KJV: then.)",
    "transliteration": "אֲזַי",
    "references": [
      "H233"
    ]
  },
  {
    "term": "Zkrh",
    "category": "Hebrew",
    "definition": "a reminder; specifically remembrance-offering (KJV: memorial.)",
    "transliteration": "אַזְכָּרָה",
    "references": [
      "H234"
    ]
  },
  {
    "term": "Zl",
    "category": "Hebrew",
    "definition": "To go away, hence, to disappear (KJV: fail, gad about, go to and fro (but in Ezekiel 27:19 the word is rendered by many 'from Uzal,' by others 'yarn'), be gone (spent).)",
    "transliteration": "אָזַל",
    "references": [
      "H235"
    ]
  },
  {
    "term": "Zl",
    "category": "Hebrew",
    "definition": "To depart (KJV: go (up).)",
    "transliteration": "אֲזַל",
    "references": [
      "H236"
    ]
  },
  {
    "term": "Zl",
    "category": "Hebrew",
    "definition": "Ezel, a memorial stone in Palestine (KJV: Ezel.)",
    "transliteration": "אֶזֶל",
    "references": [
      "H237"
    ]
  },
  {
    "term": "Zn",
    "category": "Hebrew",
    "definition": "To broaden out the ear (with the hand), i.e. (by implication) to listen (KJV: give (perceive by the) ear, hear(-ken). See H239 (אָזַן).)",
    "transliteration": "אָזַן",
    "references": [
      "H238"
    ]
  },
  {
    "term": "Zn",
    "category": "Hebrew",
    "definition": "To weigh, i.e. (figuratively) ponder (KJV: give good heed.)",
    "transliteration": "אָזַן",
    "references": [
      "H239"
    ]
  },
  {
    "term": "Zn",
    "category": "Hebrew",
    "definition": "a spade or paddle (as having a broad end) (KJV: weapon.)",
    "transliteration": "אָזֵן",
    "references": [
      "H240"
    ]
  },
  {
    "term": "Zn",
    "category": "Hebrew",
    "definition": "broadness. i.e. (concrete) the ear (from its form in man) (KJV: [phrase] advertise, audience, [phrase] displease, ear, hearing, [phrase] show.)",
    "transliteration": "אֹזֶן",
    "references": [
      "H241"
    ]
  },
  {
    "term": "Znshrh",
    "category": "Hebrew",
    "definition": "Uzzen-Sheerah, a place in Palestine (KJV: Uzzen-sherah.)",
    "transliteration": "אֻזֵּן שֶׁאֱרָה",
    "references": [
      "H242"
    ]
  },
  {
    "term": "Znvttbvr",
    "category": "Hebrew",
    "definition": "Aznoth-Tabor, a place in Palestine (KJV: Aznoth-tabor.)",
    "transliteration": "אַזְנוֹת תָּבוֹר",
    "references": [
      "H243"
    ]
  },
  {
    "term": "Zny",
    "category": "Hebrew",
    "definition": "Ozni, an Israelite; also an Oznite (collectively), his descendant (KJV: Ozni, Oznites.)",
    "transliteration": "אׇזְנִי",
    "references": [
      "H244"
    ]
  },
  {
    "term": "Znyh",
    "category": "Hebrew",
    "definition": "Azanjah, an Israelite (KJV: Azaniah.)",
    "transliteration": "אֲזַנְיָה",
    "references": [
      "H245"
    ]
  },
  {
    "term": "Zqym",
    "category": "Hebrew",
    "definition": "manacles (KJV: chains.)",
    "transliteration": "אֲזִקִּים",
    "references": [
      "H246"
    ]
  },
  {
    "term": "Zr",
    "category": "Hebrew",
    "definition": "To belt (KJV: bind (compass) about, gird (up, with).)",
    "transliteration": "אָזַר",
    "references": [
      "H247"
    ]
  },
  {
    "term": "Zrv",
    "category": "Hebrew",
    "definition": "the arm (KJV: arm.)",
    "transliteration": "אֶזְרוֹעַ",
    "references": [
      "H248"
    ]
  },
  {
    "term": "Zrch",
    "category": "Hebrew",
    "definition": "a spontaneous growth, i.e. native (tree or persons) (KJV: bay tree, (home-) born (in the land), of the (one's own) country (nation).)",
    "transliteration": "אֶזְרָח",
    "references": [
      "H249"
    ]
  },
  {
    "term": "Zrchy",
    "category": "Hebrew",
    "definition": "an Ezrachite or descendant of Zerach (KJV: Ezrahite.)",
    "transliteration": "אֶזְרָחִי",
    "references": [
      "H250"
    ]
  },
  {
    "term": "Ch",
    "category": "Hebrew",
    "definition": "a brother (used in the widest sense of literal relationship and metaphorical affinity or resemblance (like father)) (KJV: another, brother(-ly); kindred, like, other. Compare also the proper names beginning with 'Ah-' or 'Ahi-'.)",
    "transliteration": "אָח",
    "references": [
      "H251"
    ]
  },
  {
    "term": "Ch",
    "category": "Hebrew",
    "definition": "{a brother (used in the widest sense of literal relationship and metaphorical affinity or resemblance)} (KJV: brother.)",
    "transliteration": "אַח",
    "references": [
      "H252"
    ]
  },
  {
    "term": "Ch",
    "category": "Hebrew",
    "definition": "Oh! (expressive of grief or surprise) (KJV: ah, alas.)",
    "transliteration": "אָח",
    "references": [
      "H253"
    ]
  },
  {
    "term": "Ch",
    "category": "Hebrew",
    "definition": "a fire-pot or chafing dish (KJV: hearth.)",
    "transliteration": "אָח",
    "references": [
      "H254"
    ]
  },
  {
    "term": "Ch",
    "category": "Hebrew",
    "definition": "a howler or lonesome wild animal (KJV: doleful creature.)",
    "transliteration": "אֹחַ",
    "references": [
      "H255"
    ]
  },
  {
    "term": "Chb",
    "category": "Hebrew",
    "definition": "Achab, the name of a king of Israel and of a prophet at Babylon (KJV: Ahab.)",
    "transliteration": "אַחְאָב",
    "references": [
      "H256"
    ]
  },
  {
    "term": "Chbn",
    "category": "Hebrew",
    "definition": "Achban, an Israelite (KJV: Ahban.)",
    "transliteration": "אַחְבָן",
    "references": [
      "H257"
    ]
  },
  {
    "term": "Chd",
    "category": "Hebrew",
    "definition": "To unify, i.e. (figuratively) collect (one's thoughts) (KJV: go one way or other.)",
    "transliteration": "אָחַד",
    "references": [
      "H258"
    ]
  },
  {
    "term": "Chd",
    "category": "Hebrew",
    "definition": "properly, united, i.e. one; or (as an ordinal) first (KJV: a, alike, alone, altogether, and, any(-thing), apiece, a certain, (dai-) ly, each (one), [phrase] eleven, every, few, first, [phrase] highway, a man, once, one, only, other, some, together,)",
    "transliteration": "אֶחָד",
    "references": [
      "H259"
    ]
  },
  {
    "term": "Chv",
    "category": "Hebrew",
    "definition": "a bulrush or any marshy grass (particularly that along the Nile) (KJV: flag, meadow.)",
    "transliteration": "אָחוּ",
    "references": [
      "H260"
    ]
  },
  {
    "term": "Chvd",
    "category": "Hebrew",
    "definition": "Echud, the name of three Israelites (KJV: Ehud.)",
    "transliteration": "אֵחוּד",
    "references": [
      "H261"
    ]
  },
  {
    "term": "Chvh",
    "category": "Hebrew",
    "definition": "an utterance (KJV: declaration.)",
    "transliteration": "אַחְוָה",
    "references": [
      "H262"
    ]
  },
  {
    "term": "Chvh",
    "category": "Hebrew",
    "definition": "solution (of riddles) (KJV: showing.)",
    "transliteration": "אַחֲוָה",
    "references": [
      "H263"
    ]
  },
  {
    "term": "Chvh",
    "category": "Hebrew",
    "definition": "fraternity (KJV: brotherhood.)",
    "transliteration": "אַחֲוָה",
    "references": [
      "H264"
    ]
  },
  {
    "term": "Chvch",
    "category": "Hebrew",
    "definition": "Achoach, an Israelite (KJV: Ahoah.)",
    "transliteration": "אֲחוֹחַ",
    "references": [
      "H265"
    ]
  },
  {
    "term": "Chvchy",
    "category": "Hebrew",
    "definition": "an Achochite or descendant of Achoach (KJV: Ahohite.)",
    "transliteration": "אֲחוֹחִי",
    "references": [
      "H266"
    ]
  },
  {
    "term": "Chvmy",
    "category": "Hebrew",
    "definition": "Achumai, an Israelite (KJV: Ahumai.)",
    "transliteration": "אֲחוּמַי",
    "references": [
      "H267"
    ]
  },
  {
    "term": "Chvr",
    "category": "Hebrew",
    "definition": "the hinder part; hence (adverb) behind, backward; also (as facing north) the West (KJV: after(-ward), back (part, -side, -ward), hereafter, (be-) hind(-er part), time to come, without.)",
    "transliteration": "אָחוֹר",
    "references": [
      "H268"
    ]
  },
  {
    "term": "Chvt",
    "category": "Hebrew",
    "definition": "a sister (used very widely (like brother), literally and figuratively) (KJV: (an-) other, sister, together.)",
    "transliteration": "אָחוֹת",
    "references": [
      "H269"
    ]
  },
  {
    "term": "Chz",
    "category": "Hebrew",
    "definition": "To seize (often with the accessory idea of holding in possession) (KJV: [phrase] be affrighted, bar, (catch, lay, take) hold (back), come upon, fasten, handle, portion, (get, have or take) possess(-ion).)",
    "transliteration": "אָחַז",
    "references": [
      "H270"
    ]
  },
  {
    "term": "Chz",
    "category": "Hebrew",
    "definition": "Achaz, the name of a Jewish king and of an Israelite (KJV: Ahaz.)",
    "transliteration": "אָחָז",
    "references": [
      "H271"
    ]
  },
  {
    "term": "Chzh",
    "category": "Hebrew",
    "definition": "something seized, i.e. a possession (especially of land) (KJV: possession.)",
    "transliteration": "אֲחֻזָּה",
    "references": [
      "H272"
    ]
  },
  {
    "term": "Chzy",
    "category": "Hebrew",
    "definition": "Achzai, an Israelite (KJV: Ahasai.)",
    "transliteration": "אַחְזַי",
    "references": [
      "H273"
    ]
  },
  {
    "term": "Chzyh",
    "category": "Hebrew",
    "definition": "Achazjah, the name of a Jewish and an Israelite king (KJV: Ahaziah.)",
    "transliteration": "אֲחַזְיָה",
    "references": [
      "H274"
    ]
  },
  {
    "term": "Chzm",
    "category": "Hebrew",
    "definition": "Achuzzam, an Israelite (KJV: Ahuzam.)",
    "transliteration": "אֲחֻזָּם",
    "references": [
      "H275"
    ]
  },
  {
    "term": "Chzt",
    "category": "Hebrew",
    "definition": "Achuzzath, a Philistine (KJV: Ahuzzath.)",
    "transliteration": "אֲחֻזַּת",
    "references": [
      "H276"
    ]
  },
  {
    "term": "Chy",
    "category": "Hebrew",
    "definition": "Achi, the name of two Israelites (KJV: Ahi.)",
    "transliteration": "אֲחִי",
    "references": [
      "H277"
    ]
  },
  {
    "term": "Chy",
    "category": "Hebrew",
    "definition": "Echi, an Israelite (KJV: Ehi.)",
    "transliteration": "אֵחִי",
    "references": [
      "H278"
    ]
  },
  {
    "term": "Chym",
    "category": "Hebrew",
    "definition": "Achiam, an Israelite (KJV: Ahiam.)",
    "transliteration": "אֲחִיאָם",
    "references": [
      "H279"
    ]
  },
  {
    "term": "Chydh",
    "category": "Hebrew",
    "definition": "an enigma (KJV: hard sentence.)",
    "transliteration": "אֲחִידָה",
    "references": [
      "H280"
    ]
  },
  {
    "term": "Chyh",
    "category": "Hebrew",
    "definition": "Achijah, the name of nine Israelites (KJV: Ahiah, Ahijah.)",
    "transliteration": "אֲחִיָּה",
    "references": [
      "H281"
    ]
  },
  {
    "term": "Chyhvd",
    "category": "Hebrew",
    "definition": "Achihud, an Israelite (KJV: Ahihud.)",
    "transliteration": "אֲחִיהוּד",
    "references": [
      "H282"
    ]
  },
  {
    "term": "Chyv",
    "category": "Hebrew",
    "definition": "Achio, the name of three Israelites (KJV: Ahio.)",
    "transliteration": "אַחְיוֹ",
    "references": [
      "H283"
    ]
  },
  {
    "term": "Chychd",
    "category": "Hebrew",
    "definition": "Achichud, an Israelite (KJV: Ahihud.)",
    "transliteration": "אֲחִיחֻד",
    "references": [
      "H284"
    ]
  },
  {
    "term": "Chytvb",
    "category": "Hebrew",
    "definition": "Achitub, the name of several priests (KJV: Ahitub.)",
    "transliteration": "אֲחִיטוּב",
    "references": [
      "H285"
    ]
  },
  {
    "term": "Chylvd",
    "category": "Hebrew",
    "definition": "Achilud, an Israelite (KJV: Ahilud.)",
    "transliteration": "אֲחִילוּד",
    "references": [
      "H286"
    ]
  },
  {
    "term": "Chymvt",
    "category": "Hebrew",
    "definition": "Achimoth, an Israelite (KJV: Ahimoth.)",
    "transliteration": "אֲחִימוֹת",
    "references": [
      "H287"
    ]
  },
  {
    "term": "Chymlk",
    "category": "Hebrew",
    "definition": "Achimelek, the name of an Israelite and of a Hittite (KJV: Ahimelech.)",
    "transliteration": "אֲחִימֶלֶךְ",
    "references": [
      "H288"
    ]
  },
  {
    "term": "Chymn",
    "category": "Hebrew",
    "definition": "Achiman, the name of an Anakite and of an Israelite (KJV: Ahiman.)",
    "transliteration": "אֲחִימַן",
    "references": [
      "H289"
    ]
  },
  {
    "term": "Chymts",
    "category": "Hebrew",
    "definition": "Achimaats, the name of three Israelites (KJV: Ahimaaz.)",
    "transliteration": "אֲחִימַעַץ",
    "references": [
      "H290"
    ]
  },
  {
    "term": "Chyn",
    "category": "Hebrew",
    "definition": "Achjan, an Israelite (KJV: Ahian.)",
    "transliteration": "אַחְיָן",
    "references": [
      "H291"
    ]
  },
  {
    "term": "Chyndb",
    "category": "Hebrew",
    "definition": "Achinadab, an Israelite (KJV: Ahinadab.)",
    "transliteration": "אֲחִינָדָב",
    "references": [
      "H292"
    ]
  },
  {
    "term": "Chynm",
    "category": "Hebrew",
    "definition": "Achinoam, the name of two Israelitesses (KJV: Ahinoam.)",
    "transliteration": "אֲחִינֹעַם",
    "references": [
      "H293"
    ]
  },
  {
    "term": "Chysmk",
    "category": "Hebrew",
    "definition": "Achisamak, an Israelite (KJV: Ahisamach.)",
    "transliteration": "אֲחִיסָמָךְ",
    "references": [
      "H294"
    ]
  },
  {
    "term": "Chyzr",
    "category": "Hebrew",
    "definition": "Achiezer, the name of two Israelites (KJV: Ahiezer.)",
    "transliteration": "אֲחִיעֶזֶר",
    "references": [
      "H295"
    ]
  },
  {
    "term": "Chyqm",
    "category": "Hebrew",
    "definition": "Achikam, an Israelite (KJV: Ahikam.)",
    "transliteration": "אֲחִיקָם",
    "references": [
      "H296"
    ]
  },
  {
    "term": "Chyrm",
    "category": "Hebrew",
    "definition": "Achiram, an Israelite (KJV: Ahiram.)",
    "transliteration": "אֲחִירָם",
    "references": [
      "H297"
    ]
  },
  {
    "term": "Chyrmy",
    "category": "Hebrew",
    "definition": "an Achiramite or descendant (collectively) of Achiram (KJV: Ahiramites.)",
    "transliteration": "אֲחִירָמִי",
    "references": [
      "H298"
    ]
  },
  {
    "term": "Chyr",
    "category": "Hebrew",
    "definition": "Achira, an Israelite (KJV: Ahira.)",
    "transliteration": "אֲחִירַע",
    "references": [
      "H299"
    ]
  },
  {
    "term": "Chyshchr",
    "category": "Hebrew",
    "definition": "Achishachar, an Israelite (KJV: Ahishar.)",
    "transliteration": "אֲחִישַׁחַר",
    "references": [
      "H300"
    ]
  },
  {
    "term": "Chyshr",
    "category": "Hebrew",
    "definition": "Achishar, an Israelite (KJV: Ahishar.)",
    "transliteration": "אֲחִישָׁר",
    "references": [
      "H301"
    ]
  },
  {
    "term": "Chytpl",
    "category": "Hebrew",
    "definition": "Achithophel, an Israelite (KJV: Ahithophel.)",
    "transliteration": "אֲחִיתֹפֶל",
    "references": [
      "H302"
    ]
  },
  {
    "term": "Chlb",
    "category": "Hebrew",
    "definition": "Achlab, a place in Palestine (KJV: Ahlab.)",
    "transliteration": "אַחְלָב",
    "references": [
      "H303"
    ]
  },
  {
    "term": "Chly",
    "category": "Hebrew",
    "definition": "Achlai, the name of an Israelitess and of an Israelite (KJV: Ahlai.)",
    "transliteration": "אַחְלַי",
    "references": [
      "H304"
    ]
  },
  {
    "term": "Chly",
    "category": "Hebrew",
    "definition": "would that! (KJV: O that, would God.)",
    "transliteration": "אַחֲלַי",
    "references": [
      "H305"
    ]
  },
  {
    "term": "Chlmh",
    "category": "Hebrew",
    "definition": "a gem, probably the amethyst (KJV: amethyst.)",
    "transliteration": "אַחְלָמָה",
    "references": [
      "H306"
    ]
  },
  {
    "term": "Chmt",
    "category": "Hebrew",
    "definition": "Achmetha (i.e. Ecbatana), the summer capital of Persia (KJV: Achmetha.)",
    "transliteration": "אַחְמְתָא",
    "references": [
      "H307"
    ]
  },
  {
    "term": "Chsby",
    "category": "Hebrew",
    "definition": "Achasbai, an Israelite (KJV: Ahasbai.)",
    "transliteration": "אֲחַסְבַּי",
    "references": [
      "H308"
    ]
  },
  {
    "term": "Chr",
    "category": "Hebrew",
    "definition": "To loiter (i.e. be behind); by implication to procrastinate (KJV: continue, defer, delay, hinder, be late (slack), stay (there), tarry (longer).)",
    "transliteration": "אָחַר",
    "references": [
      "H309"
    ]
  },
  {
    "term": "Chr",
    "category": "Hebrew",
    "definition": "properly, the hind part; generally used as an adverb or conjunction, after (in various senses) (KJV: after (that, -ward), again, at, away from, back (from, -side), behind, beside, by, follow (after, -ing), forasmuch, from, hereafter, hinder end, [phrase] out (over) live, [phrase] persecute, posterity, pursuing, remnant, seeing, since, thence(-forth), when, with.)",
    "transliteration": "אַחַר",
    "references": [
      "H310"
    ]
  },
  {
    "term": "Chr",
    "category": "Hebrew",
    "definition": "after (KJV: (here-) after.)",
    "transliteration": "אַחַר",
    "references": [
      "H311"
    ]
  },
  {
    "term": "Chr",
    "category": "Hebrew",
    "definition": "properly, hinder; generally, next, other, etc. (KJV: (an-) other man, following, next, strange.)",
    "transliteration": "אַחֵר",
    "references": [
      "H312"
    ]
  },
  {
    "term": "Chr",
    "category": "Hebrew",
    "definition": "Acher, an Israelite (KJV: Aher.)",
    "transliteration": "אַחֵר",
    "references": [
      "H313"
    ]
  },
  {
    "term": "Chrvn",
    "category": "Hebrew",
    "definition": "hinder; generally, late or last; specifically (as facing the east) western (KJV: after (-ward), to come, following, hind(-er, -ermost, -most), last, latter, rereward, ut(ter) most.)",
    "transliteration": "אַחֲרוֹן",
    "references": [
      "H314"
    ]
  },
  {
    "term": "Chrch",
    "category": "Hebrew",
    "definition": "Achrach, an Israelite (KJV: Aharah.)",
    "transliteration": "אַחְרַח",
    "references": [
      "H315"
    ]
  },
  {
    "term": "Chrchl",
    "category": "Hebrew",
    "definition": "Acharchel, an Israelite (KJV: Aharhel,)",
    "transliteration": "אֲחַרְחֵל",
    "references": [
      "H316"
    ]
  },
  {
    "term": "Chry",
    "category": "Hebrew",
    "definition": "other (KJV: (an-) other.)",
    "transliteration": "אׇחֳרִי",
    "references": [
      "H317"
    ]
  },
  {
    "term": "Chryn",
    "category": "Hebrew",
    "definition": "last (KJV: at last.)",
    "transliteration": "אׇחֳרֵין",
    "references": [
      "H318"
    ]
  },
  {
    "term": "Chryt",
    "category": "Hebrew",
    "definition": "the last or end, hence, the future; also posterity (KJV: (last, latter) end (time), hinder (utter) -most, length, posterity, remnant, residue, reward.)",
    "transliteration": "אַחֲרִית",
    "references": [
      "H319"
    ]
  },
  {
    "term": "Chryt",
    "category": "Hebrew",
    "definition": "later (KJV: latter.)",
    "transliteration": "אַחֲרִית",
    "references": [
      "H320"
    ]
  },
  {
    "term": "Chrn",
    "category": "Hebrew",
    "definition": "other (KJV: (an-) other.)",
    "transliteration": "אׇחֳרָן",
    "references": [
      "H321"
    ]
  },
  {
    "term": "Chrnyt",
    "category": "Hebrew",
    "definition": "backwards (KJV: back (-ward, again).)",
    "transliteration": "אֲחֹרַנִּית",
    "references": [
      "H322"
    ]
  },
  {
    "term": "Chshdrpn",
    "category": "Hebrew",
    "definition": "a satrap or governorof amain province (of Persia) (KJV: lieutenant.)",
    "transliteration": "אֲחַשְׁדַּרְפַּן",
    "references": [
      "H323"
    ]
  },
  {
    "term": "Chshdrpn",
    "category": "Hebrew",
    "definition": "{a satrap or governorof amain province (of Persia)} (KJV: prince.)",
    "transliteration": "אֲחַשְׁדַּרְפַּן",
    "references": [
      "H324"
    ]
  },
  {
    "term": "Chshvrvsh",
    "category": "Hebrew",
    "definition": "Achashverosh (i.e. Ahasuerus or Artaxerxes, but in this case Xerxes), the title (rather than name) of a Persian king (KJV: Ahasuerus.)",
    "transliteration": "אֲחַשְׁוֵרוֹשׁ",
    "references": [
      "H325"
    ]
  },
  {
    "term": "Chshtry",
    "category": "Hebrew",
    "definition": "an achastarite (i.e. courier); the designation (rather than name) of an Israelite (KJV: Haakashtari (includ. the article).)",
    "transliteration": "אֲחַשְׁתָּרִי",
    "references": [
      "H326"
    ]
  },
  {
    "term": "Chshtrn",
    "category": "Hebrew",
    "definition": "a mule (KJV: camel.)",
    "transliteration": "אֲחַשְׁתָּרָן",
    "references": [
      "H327"
    ]
  },
  {
    "term": "T",
    "category": "Hebrew",
    "definition": "(as a noun) a necromancer (from their soft incantations), (as an adverb) gently (KJV: charmer, gently, secret, softly.)",
    "transliteration": "אַט",
    "references": [
      "H328"
    ]
  },
  {
    "term": "Td",
    "category": "Hebrew",
    "definition": "a thorn-tree (especially the buckthorn) (KJV: Atad, bramble, thorn.)",
    "transliteration": "אָטָד",
    "references": [
      "H329"
    ]
  },
  {
    "term": "Tvn",
    "category": "Hebrew",
    "definition": "properly, twisted (yarn), i.e. tapestry (KJV: fine linen.)",
    "transliteration": "אֵטוּן",
    "references": [
      "H330"
    ]
  },
  {
    "term": "Tm",
    "category": "Hebrew",
    "definition": "To close (the lips or ears); by analology to contract (a window by bevelled jambs) (KJV: narrow, shut, stop.)",
    "transliteration": "אָטַם",
    "references": [
      "H331"
    ]
  },
  {
    "term": "Tr",
    "category": "Hebrew",
    "definition": "To close up (KJV: shut.)",
    "transliteration": "אָטַר",
    "references": [
      "H332"
    ]
  },
  {
    "term": "Tr",
    "category": "Hebrew",
    "definition": "Ater, the name of three Israelites (KJV: Ater.)",
    "transliteration": "אָטֵר",
    "references": [
      "H333"
    ]
  },
  {
    "term": "Tr",
    "category": "Hebrew",
    "definition": "shut up, i.e. impeded (as to the use of the right hand) (KJV: [phrase] left-handed.)",
    "transliteration": "אִטֵּר",
    "references": [
      "H334"
    ]
  },
  {
    "term": "Y",
    "category": "Hebrew",
    "definition": "where? hence how? (KJV: how, what, whence, where, whether, which (way).)",
    "transliteration": "אַי",
    "references": [
      "H335"
    ]
  },
  {
    "term": "Y",
    "category": "Hebrew",
    "definition": "not (KJV: island (Job 22:30).)",
    "transliteration": "אִי",
    "references": [
      "H336"
    ]
  },
  {
    "term": "Y",
    "category": "Hebrew",
    "definition": "alas! (KJV: woe.)",
    "transliteration": "אִי",
    "references": [
      "H337"
    ]
  },
  {
    "term": "Y",
    "category": "Hebrew",
    "definition": "a howler (used only in the plural), i.e. any solitary wild creature (KJV: wild beast of the islands.)",
    "transliteration": "אִי",
    "references": [
      "H338"
    ]
  },
  {
    "term": "Y",
    "category": "Hebrew",
    "definition": "properly, a habitable spot (as desirable); dry land, a coast, an island (KJV: country, isle, island.)",
    "transliteration": "אִי",
    "references": [
      "H339"
    ]
  },
  {
    "term": "Yb",
    "category": "Hebrew",
    "definition": "To hate (as one of an opposite tribe or party); hence to be hostile (KJV: be an enemy.)",
    "transliteration": "אָיַב",
    "references": [
      "H340"
    ]
  },
  {
    "term": "Yb",
    "category": "Hebrew",
    "definition": "hating; an adversary (KJV: enemy, foe.)",
    "transliteration": "אֹיֵב",
    "references": [
      "H341"
    ]
  },
  {
    "term": "Ybh",
    "category": "Hebrew",
    "definition": "hostility (KJV: emnity, hatred.)",
    "transliteration": "אֵיבָה",
    "references": [
      "H342"
    ]
  },
  {
    "term": "Yd",
    "category": "Hebrew",
    "definition": "oppression; by implication misfortune, ruin (KJV: calamity, destruction.)",
    "transliteration": "אֵיד",
    "references": [
      "H343"
    ]
  },
  {
    "term": "Yh",
    "category": "Hebrew",
    "definition": "the screamer, i.e. a hawk (KJV: kite, vulture.)",
    "transliteration": "אַיָּה",
    "references": [
      "H344"
    ]
  },
  {
    "term": "Yh",
    "category": "Hebrew",
    "definition": "Ajah, the name of two Israelites (KJV: Aiah, Ajah.)",
    "transliteration": "אַיָּה",
    "references": [
      "H345"
    ]
  },
  {
    "term": "Yh",
    "category": "Hebrew",
    "definition": "where? (KJV: where.)",
    "transliteration": "אַיֵּה",
    "references": [
      "H346"
    ]
  },
  {
    "term": "Yvb",
    "category": "Hebrew",
    "definition": "Ijob, the patriarch famous for his patience (KJV: Job.)",
    "transliteration": "אִיּוֹב",
    "references": [
      "H347"
    ]
  },
  {
    "term": "Yzbl",
    "category": "Hebrew",
    "definition": "Izebel, the wife of king Ahab (KJV: Jezebel.)",
    "transliteration": "אִיזֶבֶל",
    "references": [
      "H348"
    ]
  },
  {
    "term": "Yk",
    "category": "Hebrew",
    "definition": "how? or how!; also where (KJV: how, what.)",
    "transliteration": "אֵיךְ",
    "references": [
      "H349"
    ]
  },
  {
    "term": "Ykbvd",
    "category": "Hebrew",
    "definition": "Ikabod, a son of Phineas (KJV: I-chabod.)",
    "transliteration": "אִי־כָבוֹד",
    "references": [
      "H350"
    ]
  },
  {
    "term": "Ykh",
    "category": "Hebrew",
    "definition": "where (KJV: where.)",
    "transliteration": "אֵיכֹה",
    "references": [
      "H351"
    ]
  },
  {
    "term": "Yl",
    "category": "Hebrew",
    "definition": "properly, strength; hence, anything strong; specifically a chief (politically); also a ram (from his strength); a pilaster (as a strong support); an oak or other strong tree (KJV: mighty (man), lintel, oak, post, ram, tree.)",
    "transliteration": "אַיִל",
    "references": [
      "H352"
    ]
  },
  {
    "term": "Yl",
    "category": "Hebrew",
    "definition": "strength (KJV: strength.)",
    "transliteration": "אֱיָל",
    "references": [
      "H353"
    ]
  },
  {
    "term": "Yl",
    "category": "Hebrew",
    "definition": "a stag or male deer (KJV: hart.)",
    "transliteration": "אַיָּל",
    "references": [
      "H354"
    ]
  },
  {
    "term": "Ylh",
    "category": "Hebrew",
    "definition": "a doe or female deer (KJV: hind.)",
    "transliteration": "אַיָּלָה",
    "references": [
      "H355"
    ]
  },
  {
    "term": "Ylvn",
    "category": "Hebrew",
    "definition": "Elon, the name of a place in Palestine, and also of one Hittite, two Israelites (KJV: Elon.)",
    "transliteration": "אֵילוֹן",
    "references": [
      "H356"
    ]
  },
  {
    "term": "Ylvn",
    "category": "Hebrew",
    "definition": "Ajalon, the name of five places in Palestine (KJV: Aijalon, Ajalon.)",
    "transliteration": "אַיָּלוֹן",
    "references": [
      "H357"
    ]
  },
  {
    "term": "Ylvnbytchnn",
    "category": "Hebrew",
    "definition": "Elon of Beth-chanan, a place in Palestine (KJV: Elon-bethhanan.)",
    "transliteration": "אֵילוֹן בֵּית חָנָן",
    "references": [
      "H358"
    ]
  },
  {
    "term": "Ylvt",
    "category": "Hebrew",
    "definition": "Eloth or Elath, a place on the Red Sea (KJV: Elath, Eloth.)",
    "transliteration": "אֵילוֹת",
    "references": [
      "H359"
    ]
  },
  {
    "term": "Ylvt",
    "category": "Hebrew",
    "definition": "power; by implication, protection (KJV: strength.)",
    "transliteration": "אֱיָלוּת",
    "references": [
      "H360"
    ]
  },
  {
    "term": "Ylm",
    "category": "Hebrew",
    "definition": "a pillar-space (or colonnade), i.e. a pale (or portico) (KJV: arch.)",
    "transliteration": "אֵילָם",
    "references": [
      "H361"
    ]
  },
  {
    "term": "Ylm",
    "category": "Hebrew",
    "definition": "Elim, a place in the Desert (KJV: Elim.)",
    "transliteration": "אֵילִם",
    "references": [
      "H362"
    ]
  },
  {
    "term": "Yln",
    "category": "Hebrew",
    "definition": "a tree (KJV: tree.)",
    "transliteration": "אִילָן",
    "references": [
      "H363"
    ]
  },
  {
    "term": "Ylprn",
    "category": "Hebrew",
    "definition": "El-Paran, a portion of the district of Paran (KJV: El-paran.)",
    "transliteration": "אֵיל פָּארָן",
    "references": [
      "H364"
    ]
  },
  {
    "term": "Ylt",
    "category": "Hebrew",
    "definition": "a doe (KJV: hind, Aijeleth.)",
    "transliteration": "אַיֶּלֶת",
    "references": [
      "H365"
    ]
  },
  {
    "term": "Ym",
    "category": "Hebrew",
    "definition": "frightful (KJV: terrible.)",
    "transliteration": "אָיֹם",
    "references": [
      "H366"
    ]
  },
  {
    "term": "Ymh",
    "category": "Hebrew",
    "definition": "fright; concrete, an idol (as a bugbear) (KJV: dread, fear, horror, idol, terrible, terror.)",
    "transliteration": "אֵימָה",
    "references": [
      "H367"
    ]
  },
  {
    "term": "Ymym",
    "category": "Hebrew",
    "definition": "Emim, an early Canaanitish (or Maobitish) tribe (KJV: Emims.)",
    "transliteration": "אֵימִים",
    "references": [
      "H368"
    ]
  },
  {
    "term": "Yn",
    "category": "Hebrew",
    "definition": "a non-entity; generally used as a negative particle (KJV: else, except, fail, (father-) less, be gone, in(-curable), neither, never, no (where), none, nor, (any, thing), not, nothing, to nought, past, un(-searchable), well-nigh, without. Compare H370 (אַיִן).)",
    "transliteration": "אַיִן",
    "references": [
      "H369"
    ]
  },
  {
    "term": "Yn",
    "category": "Hebrew",
    "definition": "where? (only in connection with prepositional prefix, whence) (KJV: whence, where.)",
    "transliteration": "אַיִן",
    "references": [
      "H370"
    ]
  },
  {
    "term": "Yn",
    "category": "Hebrew",
    "definition": "is it not? (KJV: not.)",
    "transliteration": "אִין",
    "references": [
      "H371"
    ]
  },
  {
    "term": "Yzr",
    "category": "Hebrew",
    "definition": "Iezer, an Israelite (KJV: Jeezer.)",
    "transliteration": "אִיעֶזֵר",
    "references": [
      "H372"
    ]
  },
  {
    "term": "Yzry",
    "category": "Hebrew",
    "definition": "an Iezrite or descendant of Iezer (KJV: Jezerite.)",
    "transliteration": "אִיעֶזְרִי",
    "references": [
      "H373"
    ]
  },
  {
    "term": "Yph",
    "category": "Hebrew",
    "definition": "an ephah or measure for grain; hence, a measure in general (KJV: ephah, (divers) measure(-s).)",
    "transliteration": "אֵיפָה",
    "references": [
      "H374"
    ]
  },
  {
    "term": "Yph",
    "category": "Hebrew",
    "definition": "what place?; also (of time) when?; or (of means) how? (KJV: what manner, where.)",
    "transliteration": "אֵיפֹה",
    "references": [
      "H375"
    ]
  },
  {
    "term": "Ysh",
    "category": "Hebrew",
    "definition": "a man as an individual or a male person; often used as an adjunct to a more definite term (and in such cases frequently not expressed in translation) (KJV: also, another, any (man), a certain, [phrase] champion, consent, each, every (one), fellow, (foot-, husband-) man, (good-, great, mighty) man, he, high (degree), him (that is), husband, man(-kind), [phrase] none, one, people, person, [phrase] steward, what (man) soever, whoso(-ever), worthy. Compare H802 (אִשָּׁה).)",
    "transliteration": "אִישׁ",
    "references": [
      "H376"
    ]
  },
  {
    "term": "Ysh",
    "category": "Hebrew",
    "definition": "To be a man, i.e. act in amanly way (KJV: show (one) self a man.)",
    "transliteration": "אִישׁ",
    "references": [
      "H377"
    ]
  },
  {
    "term": "Yshbsht",
    "category": "Hebrew",
    "definition": "Ish-Bosheth, a son of King Saul (KJV: Ish-bosheth.)",
    "transliteration": "אִישׁ־בֹּשֶׁת",
    "references": [
      "H378"
    ]
  },
  {
    "term": "Yshhvd",
    "category": "Hebrew",
    "definition": "Ishod, an Israelite (KJV: Ishod.)",
    "transliteration": "אִישְׁהוֹד",
    "references": [
      "H379"
    ]
  },
  {
    "term": "Yshvn",
    "category": "Hebrew",
    "definition": "the little man of the eye; the pupil or ball; hence, the middle (of night) (KJV: apple (of the eye), black, obscure.)",
    "transliteration": "אִישׁוֹן",
    "references": [
      "H380"
    ]
  },
  {
    "term": "Yshchyl",
    "category": "Hebrew",
    "definition": "Ishchail (or Ish-chai), an Israelite (KJV: a valiant man.)",
    "transliteration": "אִישׁ־חַיִל",
    "references": [
      "H381"
    ]
  },
  {
    "term": "Yshtvb",
    "category": "Hebrew",
    "definition": "Ish-Tob, a place in Palestine (KJV: Ish-tob.)",
    "transliteration": "אִישׁ־טוֹב",
    "references": [
      "H382"
    ]
  },
  {
    "term": "Yty",
    "category": "Hebrew",
    "definition": "properly, entity; used only as aparticle of affirmation, there is (KJV: art thou, can, do ye, have, it be, there is (are), [idiom] we will not.)",
    "transliteration": "אִיתַי",
    "references": [
      "H383"
    ]
  },
  {
    "term": "Ytyl",
    "category": "Hebrew",
    "definition": "Ithiel, the name of an Israelite, also of a symbolical person (KJV: Ithiel.)",
    "transliteration": "אִיתִיאֵל",
    "references": [
      "H384"
    ]
  },
  {
    "term": "Ytmr",
    "category": "Hebrew",
    "definition": "Ithamar, a son of Aaron (KJV: Ithamar.)",
    "transliteration": "אִיתָמָר",
    "references": [
      "H385"
    ]
  },
  {
    "term": "Ytn",
    "category": "Hebrew",
    "definition": "permanence; hence (concrete) permanent; specifically a chieftain (KJV: hard, mighty, rough, strength, strong.)",
    "transliteration": "אֵיתָן",
    "references": [
      "H386"
    ]
  },
  {
    "term": "Ytn",
    "category": "Hebrew",
    "definition": "Ethan, the name of four Israelites (KJV: Ethan.)",
    "transliteration": "אֵיתָן",
    "references": [
      "H387"
    ]
  },
  {
    "term": "Ytnym",
    "category": "Hebrew",
    "definition": "Ethanim, the name of a month (KJV: Ethanim.)",
    "transliteration": "אֵיתָנִים",
    "references": [
      "H388"
    ]
  },
  {
    "term": "K",
    "category": "Hebrew",
    "definition": "a particle of affirmation, surely; hence (by limitation) only (KJV: also, in any wise, at least, but, certainly, even, howbeit, nevertheless, notwithstanding, only, save, surely, of a surety, truly, verily, [phrase] wherefore, yet (but).)",
    "transliteration": "אַךְ",
    "references": [
      "H389"
    ]
  },
  {
    "term": "Kd",
    "category": "Hebrew",
    "definition": "Accad, a place in Babylon (KJV: Accad.)",
    "transliteration": "אַכַּד",
    "references": [
      "H390"
    ]
  },
  {
    "term": "Kzb",
    "category": "Hebrew",
    "definition": "falsehood; by implication treachery (KJV: liar, lie.)",
    "transliteration": "אַכְזָב",
    "references": [
      "H391"
    ]
  },
  {
    "term": "Kzyb",
    "category": "Hebrew",
    "definition": "Akzib, the name of two places in Palestine (KJV: Achzib.)",
    "transliteration": "אַכְזִיב",
    "references": [
      "H392"
    ]
  },
  {
    "term": "Kzr",
    "category": "Hebrew",
    "definition": "violent; by implication deadly; also (in a good sense) brave (KJV: cruel, fierce.)",
    "transliteration": "אַכְזָר",
    "references": [
      "H393"
    ]
  },
  {
    "term": "Kzry",
    "category": "Hebrew",
    "definition": "terrible (KJV: cruel (one).)",
    "transliteration": "אַכְזָרִי",
    "references": [
      "H394"
    ]
  },
  {
    "term": "Kzryvt",
    "category": "Hebrew",
    "definition": "fierceness (KJV: cruel.)",
    "transliteration": "אַכְזְרִיּוּת",
    "references": [
      "H395"
    ]
  },
  {
    "term": "Kylh",
    "category": "Hebrew",
    "definition": "something eatable, i.e. food (KJV: meat.)",
    "transliteration": "אֲכִילָה",
    "references": [
      "H396"
    ]
  },
  {
    "term": "Kysh",
    "category": "Hebrew",
    "definition": "Akish, a Philistine king (KJV: Achish.)",
    "transliteration": "אֲכִישׁ",
    "references": [
      "H397"
    ]
  },
  {
    "term": "Kl",
    "category": "Hebrew",
    "definition": "To eat (literally or figuratively) (KJV: [idiom] at all, burn up, consume, devour(-er, up), dine, eat(-er, up), feed (with), food, [idiom] freely, [idiom] in...wise(-deed, plenty), (lay) meat, [idiom] quite.)",
    "transliteration": "אָכַל",
    "references": [
      "H398"
    ]
  },
  {
    "term": "Kl",
    "category": "Hebrew",
    "definition": "{to eat (literally or figuratively)} (KJV: [phrase] accuse, devour, eat.)",
    "transliteration": "אֲכַל",
    "references": [
      "H399"
    ]
  },
  {
    "term": "Kl",
    "category": "Hebrew",
    "definition": "food (KJV: eating, food, meal(-time), meat, prey, victuals.)",
    "transliteration": "אֹכֶל",
    "references": [
      "H400"
    ]
  },
  {
    "term": "Kl",
    "category": "Hebrew",
    "definition": "Ucal, a fancy name (KJV: Ucal.)",
    "transliteration": "אֻכָל",
    "references": [
      "H401"
    ]
  },
  {
    "term": "Klh",
    "category": "Hebrew",
    "definition": "food (KJV: consume, devour, eat, food, meat.)",
    "transliteration": "אׇכְלָה",
    "references": [
      "H402"
    ]
  },
  {
    "term": "Kn",
    "category": "Hebrew",
    "definition": "firmly; figuratively, surely; also (advers.) but (KJV: but, certainly, nevertheless, surely, truly, verily.)",
    "transliteration": "אָכֵן",
    "references": [
      "H403"
    ]
  },
  {
    "term": "Kp",
    "category": "Hebrew",
    "definition": "To urge (KJV: crave.)",
    "transliteration": "אָכַף",
    "references": [
      "H404"
    ]
  },
  {
    "term": "Kp",
    "category": "Hebrew",
    "definition": "a load; by implication, a stroke (others dignity) (KJV: hand.)",
    "transliteration": "אֶכֶף",
    "references": [
      "H405"
    ]
  },
  {
    "term": "Kr",
    "category": "Hebrew",
    "definition": "a farmer (KJV: husbandman, ploughman.)",
    "transliteration": "אִכָּר",
    "references": [
      "H406"
    ]
  },
  {
    "term": "Kshp",
    "category": "Hebrew",
    "definition": "Acshaph, a place in Palestine (KJV: Achshaph.)",
    "transliteration": "אַכְשָׁף",
    "references": [
      "H407"
    ]
  },
  {
    "term": "L",
    "category": "Hebrew",
    "definition": "not (the qualified negation, used as a deprecative); once (Job 24:25) as a noun, nothing (KJV: nay, neither, [phrase] never, no, nor, not, nothing (worth), rather than.)",
    "transliteration": "אַל",
    "references": [
      "H408"
    ]
  },
  {
    "term": "L",
    "category": "Hebrew",
    "definition": "{not (the qualified negation, used as a deprecative); once (Job 24:25) as a noun, nothing} (KJV: not.)",
    "transliteration": "אַל",
    "references": [
      "H409"
    ]
  },
  {
    "term": "L",
    "category": "Hebrew",
    "definition": "strength; as adjective, mighty; especially the Almighty (but used also of any deity) (KJV: God (god), [idiom] goodly, [idiom] great, idol, might(-y one), power, strong. Compare names in '-el.')",
    "transliteration": "אֵל",
    "references": [
      "H410"
    ]
  },
  {
    "term": "L",
    "category": "Hebrew",
    "definition": "these or those (KJV: these, those. Compare H428 (אֵלֶּה).)",
    "transliteration": "אֵל",
    "references": [
      "H411"
    ]
  },
  {
    "term": "L",
    "category": "Hebrew",
    "definition": "{these or those} (KJV: these.)",
    "transliteration": "אֵל",
    "references": [
      "H412"
    ]
  },
  {
    "term": "L",
    "category": "Hebrew",
    "definition": "near, with or among; often in general, to (KJV: about, according to, after, against, among, as for, at, because(-fore, -side), both...and, by, concerning, for, from, [idiom] hath, in(-to), near, (out) of, over, through, to(-ward), under, unto, upon, whether, with(-in).)",
    "transliteration": "אֵל",
    "references": [
      "H413"
    ]
  },
  {
    "term": "L",
    "category": "Hebrew",
    "definition": "Ela, an Israelite (KJV: Elah.)",
    "transliteration": "אֵלָא",
    "references": [
      "H414"
    ]
  },
  {
    "term": "Llhyyshrl",
    "category": "Hebrew",
    "definition": "El-Elohi-Jisrael, the title given to a consecrated spot by Jacob (KJV: Elelohe-israel.)",
    "transliteration": "אֵל אֱלֹהֵי יִשְׂרָאֵל",
    "references": [
      "H415"
    ]
  },
  {
    "term": "Lbytl",
    "category": "Hebrew",
    "definition": "El-Bethel, the title given to a consecrated spot by Jacob (KJV: El-beth-el.)",
    "transliteration": "אֵל בֵּית־אֵל",
    "references": [
      "H416"
    ]
  },
  {
    "term": "Lgbysh",
    "category": "Hebrew",
    "definition": "hail (as if a great pearl) (KJV: great hail(-stones).)",
    "transliteration": "אֶלְגָּבִישׁ",
    "references": [
      "H417"
    ]
  },
  {
    "term": "Lgvmym",
    "category": "Hebrew",
    "definition": "sticks of algum wood (KJV: algum (trees).)",
    "transliteration": "אַלְגּוּמִּים",
    "references": [
      "H418"
    ]
  },
  {
    "term": "Ldd",
    "category": "Hebrew",
    "definition": "Eldad, an Israelite (KJV: Eldad.)",
    "transliteration": "אֶלְדָּד",
    "references": [
      "H419"
    ]
  },
  {
    "term": "Ldh",
    "category": "Hebrew",
    "definition": "Eldaah, a son of Midian (KJV: Eldaah.)",
    "transliteration": "אֶלְדָּעָה",
    "references": [
      "H420"
    ]
  },
  {
    "term": "Lh",
    "category": "Hebrew",
    "definition": "To bewail (KJV: lament.)",
    "transliteration": "אָלָה",
    "references": [
      "H421"
    ]
  },
  {
    "term": "Lh",
    "category": "Hebrew",
    "definition": "properly, to adjure, i.e. (usually in a bad sense) imprecate (KJV: adjure, curse, swear.)",
    "transliteration": "אָלָה",
    "references": [
      "H422"
    ]
  },
  {
    "term": "Lh",
    "category": "Hebrew",
    "definition": "an imprecation (KJV: curse, cursing, execration, oath, swearing.)",
    "transliteration": "אָלָה",
    "references": [
      "H423"
    ]
  },
  {
    "term": "Lh",
    "category": "Hebrew",
    "definition": "an oak or other strong tree (KJV: elm, oak, teil-tree.)",
    "transliteration": "אֵלָה",
    "references": [
      "H424"
    ]
  },
  {
    "term": "Lh",
    "category": "Hebrew",
    "definition": "Elah, the name of an Edomite, of four Israelites, and also of a place in Palestine (KJV: Elah.)",
    "transliteration": "אֵלָה",
    "references": [
      "H425"
    ]
  },
  {
    "term": "Lh",
    "category": "Hebrew",
    "definition": "God (KJV: God, god.)",
    "transliteration": "אֱלָהּ",
    "references": [
      "H426"
    ]
  },
  {
    "term": "Lh",
    "category": "Hebrew",
    "definition": "{an oak or other strong tree} (KJV: oak.)",
    "transliteration": "אַלָּה",
    "references": [
      "H427"
    ]
  },
  {
    "term": "Lh",
    "category": "Hebrew",
    "definition": "these or those (KJV: an-(the) other; one sort, so, some, such, them, these (same), they, this, those, thus, which, who(-m).)",
    "transliteration": "אֵלֶּה",
    "references": [
      "H428"
    ]
  },
  {
    "term": "Lh",
    "category": "Hebrew",
    "definition": "{these or those} (KJV: these.)",
    "transliteration": "אֵלֶּה",
    "references": [
      "H429"
    ]
  },
  {
    "term": "Lhym",
    "category": "Hebrew",
    "definition": "gods in the ordinary sense; but specifically used (in the plural thus, especially with the article) of the supreme God; occasionally applied by way of deference to magistrates; and sometimes as a superlative (KJV: angels, [idiom] exceeding, God (gods) (-dess, -ly), [idiom] (very) great, judges, [idiom] mighty.)",
    "transliteration": "אֱלֹהִים",
    "references": [
      "H430"
    ]
  },
  {
    "term": "Lv",
    "category": "Hebrew",
    "definition": "lo! (KJV: behold.)",
    "transliteration": "אֲלוּ",
    "references": [
      "H431"
    ]
  },
  {
    "term": "Lv",
    "category": "Hebrew",
    "definition": "nay, i.e. (softened) if (KJV: but if, yea though.)",
    "transliteration": "אִלּוּ",
    "references": [
      "H432"
    ]
  },
  {
    "term": "Lvh",
    "category": "Hebrew",
    "definition": "a deity or the Deity (KJV: God, god. See H430 (אֱלֹהִים).)",
    "transliteration": "אֱלוֹהַּ",
    "references": [
      "H433"
    ]
  },
  {
    "term": "Lvl",
    "category": "Hebrew",
    "definition": "good for nothing (KJV: thing of nought.)",
    "transliteration": "אֱלוּל",
    "references": [
      "H434"
    ]
  },
  {
    "term": "Lvl",
    "category": "Hebrew",
    "definition": "Elul, the sixth Jewish month (KJV: Elul.)",
    "transliteration": "אֱלוּל",
    "references": [
      "H435"
    ]
  },
  {
    "term": "Lvn",
    "category": "Hebrew",
    "definition": "an oak or other strong tree (KJV: plain. See also H356 (אֵילוֹן).)",
    "transliteration": "אֵלוֹן",
    "references": [
      "H436"
    ]
  },
  {
    "term": "Lvn",
    "category": "Hebrew",
    "definition": "{an oak or other strong tree} (KJV: oak.)",
    "transliteration": "אַלּוֹן",
    "references": [
      "H437"
    ]
  },
  {
    "term": "Lvn",
    "category": "Hebrew",
    "definition": "Allon, an Israelite, also a place in Palestine (KJV: Allon.)",
    "transliteration": "אַלּוֹן",
    "references": [
      "H438"
    ]
  },
  {
    "term": "Lvnbkvt",
    "category": "Hebrew",
    "definition": "Allon-Bakuth, a monumental tree (KJV: Allon-bachuth.)",
    "transliteration": "אַלּוֹן בָּכוּת",
    "references": [
      "H439"
    ]
  },
  {
    "term": "Lvny",
    "category": "Hebrew",
    "definition": "an Elonite or descendant (collectively) of Elon (KJV: Elonites.)",
    "transliteration": "אֵלוֹנִי",
    "references": [
      "H440"
    ]
  },
  {
    "term": "Lvp",
    "category": "Hebrew",
    "definition": "familiar; a friend, also gentle; hence, a bullock (as being tame; applied, although masculine, to a cow); and so, a chieftain (as notable, like neat cattle) (KJV: captain, duke, (chief) friend, governor, guide, ox.)",
    "transliteration": "אַלּוּף",
    "references": [
      "H441"
    ]
  },
  {
    "term": "Lvsh",
    "category": "Hebrew",
    "definition": "Alush, a place in the Desert (KJV: Alush.)",
    "transliteration": "אָלוּשׁ",
    "references": [
      "H442"
    ]
  },
  {
    "term": "Lzbd",
    "category": "Hebrew",
    "definition": "Elzabad, the name of two Israelites (KJV: Elzabad.)",
    "transliteration": "אֶלְזָבָד",
    "references": [
      "H443"
    ]
  },
  {
    "term": "Lch",
    "category": "Hebrew",
    "definition": "To muddle, i.e. (figuratively and intransitive) to turn (morally) corrupt (KJV: become filthy.)",
    "transliteration": "אָלַח",
    "references": [
      "H444"
    ]
  },
  {
    "term": "Lchnn",
    "category": "Hebrew",
    "definition": "Elchanan, an Israelite (KJV: Elkanan.)",
    "transliteration": "אֶלְחָנָן",
    "references": [
      "H445"
    ]
  },
  {
    "term": "Lyb",
    "category": "Hebrew",
    "definition": "Eliab, the name of six Israelites (KJV: Eliab.)",
    "transliteration": "אֱלִיאָב",
    "references": [
      "H446"
    ]
  },
  {
    "term": "Lyl",
    "category": "Hebrew",
    "definition": "Eliel, the name of nine Israelites (KJV: Eliel.)",
    "transliteration": "אֱלִיאֵל",
    "references": [
      "H447"
    ]
  },
  {
    "term": "Lyth",
    "category": "Hebrew",
    "definition": "Eliathah, an Israelite (KJV: Eliathah.)",
    "transliteration": "אֱלִיאָתָה",
    "references": [
      "H448"
    ]
  },
  {
    "term": "Lydd",
    "category": "Hebrew",
    "definition": "Elidad, an Israelite (KJV: Elidad.)",
    "transliteration": "אֱלִידָד",
    "references": [
      "H449"
    ]
  },
  {
    "term": "Lyd",
    "category": "Hebrew",
    "definition": "Eljada, the name of two Israelites and of an Aramaean leader (KJV: Eliada.)",
    "transliteration": "אֶלְיָדָע",
    "references": [
      "H450"
    ]
  },
  {
    "term": "Lyh",
    "category": "Hebrew",
    "definition": "the stout part, i.e. the fat tail of the Oriental sheep (KJV: rump.)",
    "transliteration": "אַלְיָה",
    "references": [
      "H451"
    ]
  },
  {
    "term": "Lyh",
    "category": "Hebrew",
    "definition": "Elijah, the name of the famous prophet and of two other Israelites (KJV: Elijah, Eliah.)",
    "transliteration": "אֵלִיָּה",
    "references": [
      "H452"
    ]
  },
  {
    "term": "Lyhv",
    "category": "Hebrew",
    "definition": "Elihu, the name of one of Job's friends, and of three Israelites (KJV: Elihu.)",
    "transliteration": "אֱלִיהוּ",
    "references": [
      "H453"
    ]
  },
  {
    "term": "Lyhvyny",
    "category": "Hebrew",
    "definition": "Eljehoenai or Eljoenai, the name of seven Israelites (KJV: Elihoenai, Elionai.)",
    "transliteration": "אֶלְיְהוֹעֵינַי",
    "references": [
      "H454"
    ]
  },
  {
    "term": "Lychb",
    "category": "Hebrew",
    "definition": "Eljachba, an Israelite (KJV: Eliahbah.)",
    "transliteration": "אֶלְיַחְבָּא",
    "references": [
      "H455"
    ]
  },
  {
    "term": "Lychrp",
    "category": "Hebrew",
    "definition": "Elichoreph, an Israelite (KJV: Elihoreph.)",
    "transliteration": "אֱלִיחֹרֶף",
    "references": [
      "H456"
    ]
  },
  {
    "term": "Lyl",
    "category": "Hebrew",
    "definition": "good for nothing, by anal. vain or vanity; specifically an idol (KJV: idol, no value, thing of nought.)",
    "transliteration": "אֱלִיל",
    "references": [
      "H457"
    ]
  },
  {
    "term": "Lymlk",
    "category": "Hebrew",
    "definition": "Elimelek, an Israelite (KJV: Elimelech.)",
    "transliteration": "אֱלִימֶלֶךְ",
    "references": [
      "H458"
    ]
  },
  {
    "term": "Lyn",
    "category": "Hebrew",
    "definition": "these (KJV: the, these.)",
    "transliteration": "אִלֵּין",
    "references": [
      "H459"
    ]
  },
  {
    "term": "Lysp",
    "category": "Hebrew",
    "definition": "Eljasaph, the name of two Israelites (KJV: Eliasaph.)",
    "transliteration": "אֶלְיָסָף",
    "references": [
      "H460"
    ]
  },
  {
    "term": "Lyzr",
    "category": "Hebrew",
    "definition": "Eliezer, the name of a Damascene and of ten Israelites (KJV: Eliezer.)",
    "transliteration": "אֱלִיעֶזֶר",
    "references": [
      "H461"
    ]
  },
  {
    "term": "Lyyny",
    "category": "Hebrew",
    "definition": "Elienai, an Israelite (KJV: Elienai.)",
    "transliteration": "אֱלִיעֵינַי",
    "references": [
      "H462"
    ]
  },
  {
    "term": "Lym",
    "category": "Hebrew",
    "definition": "Eliam, an Israelite (KJV: Eliam.)",
    "transliteration": "אֱלִיעָם",
    "references": [
      "H463"
    ]
  },
  {
    "term": "Lypz",
    "category": "Hebrew",
    "definition": "Eliphaz, the name of one of Job's friends, and of a son of Esau (KJV: Eliphaz.)",
    "transliteration": "אֱלִיפַז",
    "references": [
      "H464"
    ]
  },
  {
    "term": "Lypl",
    "category": "Hebrew",
    "definition": "Eliphal, an Israelite (KJV: Eliphal.)",
    "transliteration": "אֱלִיפָל",
    "references": [
      "H465"
    ]
  },
  {
    "term": "Lyplhv",
    "category": "Hebrew",
    "definition": "Eliphelehu, an Israelite (KJV: Elipheleh.)",
    "transliteration": "אֱלִיפְלֵהוּ",
    "references": [
      "H466"
    ]
  },
  {
    "term": "Lyplt",
    "category": "Hebrew",
    "definition": "Eliphelet or Elpelet, the name of six Israelites (KJV: Eliphalet, Eliphelet, Elpalet.)",
    "transliteration": "אֱלִיפֶלֶט",
    "references": [
      "H467"
    ]
  },
  {
    "term": "Lytsvr",
    "category": "Hebrew",
    "definition": "Elitsur, an Israelite (KJV: Elizur.)",
    "transliteration": "אֱלִיצוּר",
    "references": [
      "H468"
    ]
  },
  {
    "term": "Lytspn",
    "category": "Hebrew",
    "definition": "Elitsaphan or Eltsaphan, an Israelite (KJV: Elizaphan, Elzaphan.)",
    "transliteration": "אֱלִיצָפָן",
    "references": [
      "H469"
    ]
  },
  {
    "term": "Lyq",
    "category": "Hebrew",
    "definition": "Elika, an Israelite (KJV: Elika.)",
    "transliteration": "אֱלִיקָא",
    "references": [
      "H470"
    ]
  },
  {
    "term": "Lyqym",
    "category": "Hebrew",
    "definition": "Eljakim, the name of four Israelites (KJV: Eliakim.)",
    "transliteration": "אֶלְיָקִים",
    "references": [
      "H471"
    ]
  },
  {
    "term": "Lyshb",
    "category": "Hebrew",
    "definition": "Elisheba, the wife of Aaron (KJV: Elisheba.)",
    "transliteration": "אֱלִישֶׁבַע",
    "references": [
      "H472"
    ]
  },
  {
    "term": "Lyshh",
    "category": "Hebrew",
    "definition": "Elishah, a son of Javan (KJV: Elishah.)",
    "transliteration": "אֱלִישָׁה",
    "references": [
      "H473"
    ]
  },
  {
    "term": "Lyshv",
    "category": "Hebrew",
    "definition": "Elishua, the son of King David (KJV: Elishua.)",
    "transliteration": "אֱלִישׁוּעַ",
    "references": [
      "H474"
    ]
  },
  {
    "term": "Lyshyb",
    "category": "Hebrew",
    "definition": "Eljashib, the name of six Israelites (KJV: Eliashib.)",
    "transliteration": "אֶלְיָשִׁיב",
    "references": [
      "H475"
    ]
  },
  {
    "term": "Lyshm",
    "category": "Hebrew",
    "definition": "Elishama, the name of seven Israelites (KJV: Elishama.)",
    "transliteration": "אֱלִישָׁמָע",
    "references": [
      "H476"
    ]
  },
  {
    "term": "Lysh",
    "category": "Hebrew",
    "definition": "Elisha, the famous prophet (KJV: Elisha.)",
    "transliteration": "אֱלִישָׁע",
    "references": [
      "H477"
    ]
  },
  {
    "term": "Lyshpt",
    "category": "Hebrew",
    "definition": "Elishaphat, an Israelite (KJV: Elishaphat.)",
    "transliteration": "אֱלִישָׁפָט",
    "references": [
      "H478"
    ]
  },
  {
    "term": "Lk",
    "category": "Hebrew",
    "definition": "these (KJV: these, those.)",
    "transliteration": "אִלֵּךְ",
    "references": [
      "H479"
    ]
  },
  {
    "term": "Lly",
    "category": "Hebrew",
    "definition": "alas! (KJV: woe.)",
    "transliteration": "אַלְלַי",
    "references": [
      "H480"
    ]
  },
  {
    "term": "Lm",
    "category": "Hebrew",
    "definition": "To tie fast; hence (of the mouth) to be tongue-tied (KJV: bind, be dumb, put to silence.)",
    "transliteration": "אָלַם",
    "references": [
      "H481"
    ]
  },
  {
    "term": "Lm",
    "category": "Hebrew",
    "definition": "silence (i.e. mute justice) (KJV: congregation. Compare H3128 (יוֹנַת אֵלֶם רְחֹקִים).)",
    "transliteration": "אֵלֶם",
    "references": [
      "H482"
    ]
  },
  {
    "term": "Lm",
    "category": "Hebrew",
    "definition": "speechless (KJV: dumb (man).)",
    "transliteration": "אִלֵּם",
    "references": [
      "H483"
    ]
  },
  {
    "term": "Lmgym",
    "category": "Hebrew",
    "definition": "almug (i.e. probably sandle-wood) sticks (KJV: almug trees. Compare H418 (אַלְגּוּמִּים).)",
    "transliteration": "אַלְמֻגִּים",
    "references": [
      "H484"
    ]
  },
  {
    "term": "Lmh",
    "category": "Hebrew",
    "definition": "something bound; a sheaf (KJV: sheaf.)",
    "transliteration": "אֲלֻמָּה",
    "references": [
      "H485"
    ]
  },
  {
    "term": "Lmvdd",
    "category": "Hebrew",
    "definition": "Almodad, a son of Joktan (KJV: Almodad.)",
    "transliteration": "אַלְמוֹדָד",
    "references": [
      "H486"
    ]
  },
  {
    "term": "Lmlk",
    "category": "Hebrew",
    "definition": "Allammelek, a place in Palestine (KJV: Alammelech.)",
    "transliteration": "אַלַּמֶּלֶךְ",
    "references": [
      "H487"
    ]
  },
  {
    "term": "Lmn",
    "category": "Hebrew",
    "definition": "discarded (as a divorced person) (KJV: forsaken.)",
    "transliteration": "אַלְמָן",
    "references": [
      "H488"
    ]
  },
  {
    "term": "Lmn",
    "category": "Hebrew",
    "definition": "bereavement (KJV: widowhood.)",
    "transliteration": "אַלְמֹן",
    "references": [
      "H489"
    ]
  },
  {
    "term": "Lmnh",
    "category": "Hebrew",
    "definition": "a widow; also a desolate place (KJV: desolate house (palace), widow.)",
    "transliteration": "אַלְמָנָה",
    "references": [
      "H490"
    ]
  },
  {
    "term": "Lmnvt",
    "category": "Hebrew",
    "definition": "concrete, a widow; abstract, widowhood (KJV: widow, widowhood.)",
    "transliteration": "אַלְמָנוּת",
    "references": [
      "H491"
    ]
  },
  {
    "term": "Lmny",
    "category": "Hebrew",
    "definition": "some one (i.e. so and so, without giving the name of the person or place) (KJV: one, and such.)",
    "transliteration": "אַלְמֹנִי",
    "references": [
      "H492"
    ]
  },
  {
    "term": "Lnm",
    "category": "Hebrew",
    "definition": "Elnaam, an Israelite (KJV: Elnaam.)",
    "transliteration": "אֶלְנַעַם",
    "references": [
      "H493"
    ]
  },
  {
    "term": "Lntn",
    "category": "Hebrew",
    "definition": "Elnathan, the name of four Israelites (KJV: Elnathan.)",
    "transliteration": "אֶלְנָתָן",
    "references": [
      "H494"
    ]
  },
  {
    "term": "Lsr",
    "category": "Hebrew",
    "definition": "Ellasar, an early country of Asia (KJV: Ellasar.)",
    "transliteration": "אֶלָּסָר",
    "references": [
      "H495"
    ]
  },
  {
    "term": "Ld",
    "category": "Hebrew",
    "definition": "Elad, an Israelite (KJV: Elead.)",
    "transliteration": "אֶלְעָד",
    "references": [
      "H496"
    ]
  },
  {
    "term": "Ldh",
    "category": "Hebrew",
    "definition": "Eladah, an Israelite (KJV: Eladah.)",
    "transliteration": "אֶלְעָדָה",
    "references": [
      "H497"
    ]
  },
  {
    "term": "Lvzy",
    "category": "Hebrew",
    "definition": "Eluzai, an Israelite (KJV: Eluzai.)",
    "transliteration": "אֶלְעוּזַי",
    "references": [
      "H498"
    ]
  },
  {
    "term": "Lzr",
    "category": "Hebrew",
    "definition": "Elazar, the name of seven Israelites (KJV: Eleazar.)",
    "transliteration": "אֶלְעָזָר",
    "references": [
      "H499"
    ]
  },
  {
    "term": "Ll",
    "category": "Hebrew",
    "definition": "Elale or Elaleh, a place east of the Jordan (KJV: Elealeh.)",
    "transliteration": "אֶלְעָלֵא",
    "references": [
      "H500"
    ]
  },
  {
    "term": "Lshh",
    "category": "Hebrew",
    "definition": "Elasah, the name of four Israelites (KJV: Elasah, Eleasah.)",
    "transliteration": "אֶלְעָשָׂה",
    "references": [
      "H501"
    ]
  },
  {
    "term": "Lp",
    "category": "Hebrew",
    "definition": "hence, to learn (and causatively to teach) (KJV: learn, teach, utter.)",
    "transliteration": "אָלַף",
    "references": [
      "H502"
    ]
  },
  {
    "term": "Lp",
    "category": "Hebrew",
    "definition": "causative, to make athousandfold (KJV: bring forth thousands.)",
    "transliteration": "אָלַף",
    "references": [
      "H503"
    ]
  },
  {
    "term": "Lp",
    "category": "Hebrew",
    "definition": "a family; also (from the sense of yoking or taming) an ox or cow (KJV: family, kine, oxen.)",
    "transliteration": "אֶלֶף",
    "references": [
      "H504"
    ]
  },
  {
    "term": "Lp",
    "category": "Hebrew",
    "definition": "hence (the ox's head being the first letter of the alphabet, and this eventually used as a numeral) a thousand (KJV: thousand.)",
    "transliteration": "אֶלֶף",
    "references": [
      "H505"
    ]
  },
  {
    "term": "Lp",
    "category": "Hebrew",
    "definition": "{hence (the ox's head being the first letter of the alphabet, and this eventually used as a numeral) a thousand} (KJV: thousand.)",
    "transliteration": "אֲלַף",
    "references": [
      "H506"
    ]
  },
  {
    "term": "Lp",
    "category": "Hebrew",
    "definition": "Eleph, a place in Palestine (KJV: Eleph.)",
    "transliteration": "אֶלֶף",
    "references": [
      "H507"
    ]
  },
  {
    "term": "Lpl",
    "category": "Hebrew",
    "definition": "Elpaal, an Israelite (KJV: Elpaal.)",
    "transliteration": "אֶלְפַּעַל",
    "references": [
      "H508"
    ]
  },
  {
    "term": "Lts",
    "category": "Hebrew",
    "definition": "To press (KJV: urge.)",
    "transliteration": "אָלַץ",
    "references": [
      "H509"
    ]
  },
  {
    "term": "Lqvm",
    "category": "Hebrew",
    "definition": "a non-rising (i.e. resistlessness) (KJV: no rising up.)",
    "transliteration": "אַלְקוּם",
    "references": [
      "H510"
    ]
  },
  {
    "term": "Lqnh",
    "category": "Hebrew",
    "definition": "Elkanah, the name of several Israelites (KJV: Elkanah.)",
    "transliteration": "אֶלְקָנָה",
    "references": [
      "H511"
    ]
  },
  {
    "term": "Lqshy",
    "category": "Hebrew",
    "definition": "an Elkoshite or native of Elkosh (KJV: Elkoshite.)",
    "transliteration": "אֶלְקֹשִׁי",
    "references": [
      "H512"
    ]
  },
  {
    "term": "Ltvld",
    "category": "Hebrew",
    "definition": "Eltolad, a place in Palestine (KJV: Eltolad.)",
    "transliteration": "אֶלְתּוֹלַד",
    "references": [
      "H513"
    ]
  },
  {
    "term": "Ltq",
    "category": "Hebrew",
    "definition": "Eltekeh or Elteke, a place in Palestine (KJV: Eltekeh.)",
    "transliteration": "אֶלְתְּקֵא",
    "references": [
      "H514"
    ]
  },
  {
    "term": "Ltqn",
    "category": "Hebrew",
    "definition": "Eltekon, a place in Palestine (KJV: Eltekon.)",
    "transliteration": "אֶלְתְּקֹן",
    "references": [
      "H515"
    ]
  },
  {
    "term": "Ltshcht",
    "category": "Hebrew",
    "definition": "'Thou must not destroy'; probably the opening words to a popular song (KJV: Al-taschith.)",
    "transliteration": "אַל תַּשְׁחֵת",
    "references": [
      "H516"
    ]
  },
  {
    "term": "M",
    "category": "Hebrew",
    "definition": "a mother (as the bond of the family); in a wide sense (both literally and figuratively (like father)) (KJV: dam, mother, [idiom] parting.)",
    "transliteration": "אֵם",
    "references": [
      "H517"
    ]
  },
  {
    "term": "M",
    "category": "Hebrew",
    "definition": "used very widely as demonstrative, lo!; interrogative, whether?; or conditional, if, although; also Oh that!, when; hence, as a negative, not (KJV: (and, can-, doubtless, if, that) (not), [phrase] but, either, [phrase] except, [phrase] more(-over if, than), neither, nevertheless, nor, oh that, or, [phrase] save (only, -ing), seeing, since, sith, [phrase] surely (no more, none, not), though, [phrase] of a truth, [phrase] unless, [phrase] verily, when, whereas, whether, while, [phrase] yet.)",
    "transliteration": "אִם",
    "references": [
      "H518"
    ]
  },
  {
    "term": "Mh",
    "category": "Hebrew",
    "definition": "a maidservant or female slave (KJV: (hand-) bondmaid(-woman), maid(-servant).)",
    "transliteration": "אָמָה",
    "references": [
      "H519"
    ]
  },
  {
    "term": "Mh",
    "category": "Hebrew",
    "definition": "properly, a mother (i.e. unit of measure, or the fore-arm (below the elbow), i.e. a cubit; also a door-base (as a bond of the entrance) (KJV: cubit, [phrase] hundred (by exchange for H3967 (מֵאָה)), measure, post.)",
    "transliteration": "אַמָּה",
    "references": [
      "H520"
    ]
  },
  {
    "term": "Mh",
    "category": "Hebrew",
    "definition": "{properly, a mother (i.e. unit of measure, or the fore-arm (below the elbow), i.e. a cubit; also a door-base (as a bond of the entrance)} (KJV: cubit.)",
    "transliteration": "אַמָּה",
    "references": [
      "H521"
    ]
  },
  {
    "term": "Mh",
    "category": "Hebrew",
    "definition": "Ammah, a hill in Palestine (KJV: Ammah.)",
    "transliteration": "אַמָּה",
    "references": [
      "H522"
    ]
  },
  {
    "term": "Mh",
    "category": "Hebrew",
    "definition": "a collection, i.e. community of persons (KJV: nation, people.)",
    "transliteration": "אֻמַּה",
    "references": [
      "H523"
    ]
  },
  {
    "term": "Mh",
    "category": "Hebrew",
    "definition": "{a collection, i.e. community of persons} (KJV: nation.)",
    "transliteration": "אֻמָּה",
    "references": [
      "H524"
    ]
  },
  {
    "term": "Mvn",
    "category": "Hebrew",
    "definition": "skilled, i.e. an architect (KJV: one brought up.)",
    "transliteration": "אָמוֹן",
    "references": [
      "H525"
    ]
  },
  {
    "term": "Mvn",
    "category": "Hebrew",
    "definition": "Amon, the name of three Israelites (KJV: Amon.)",
    "transliteration": "אָמוֹן",
    "references": [
      "H526"
    ]
  },
  {
    "term": "Mvn",
    "category": "Hebrew",
    "definition": "a throng of people (KJV: multitude.)",
    "transliteration": "אָמוֹן",
    "references": [
      "H527"
    ]
  },
  {
    "term": "Mvn",
    "category": "Hebrew",
    "definition": "Amon (i.e. Ammon or Amn), a deity of Egypt (KJV: multitude, populous.)",
    "transliteration": "אָמוֹן",
    "references": [
      "H528"
    ]
  },
  {
    "term": "Mvn",
    "category": "Hebrew",
    "definition": "established, i.e. (figuratively) trusty; also (abstractly) trustworthiness (KJV: faith(-ful), truth.)",
    "transliteration": "אֵמוּן",
    "references": [
      "H529"
    ]
  },
  {
    "term": "Mvnh",
    "category": "Hebrew",
    "definition": "literally firmness; figuratively security; morally fidelity (KJV: faith(-ful, -ly, -ness, (man)), set office, stability, steady, truly, truth, verily.)",
    "transliteration": "אֱמוּנָה",
    "references": [
      "H530"
    ]
  },
  {
    "term": "Mvts",
    "category": "Hebrew",
    "definition": "Amots, an Israelite (KJV: Amoz.)",
    "transliteration": "אָמוֹץ",
    "references": [
      "H531"
    ]
  },
  {
    "term": "My",
    "category": "Hebrew",
    "definition": "Ami, an Israelite (KJV: Ami.)",
    "transliteration": "אָמִי",
    "references": [
      "H532"
    ]
  },
  {
    "term": "Myts",
    "category": "Hebrew",
    "definition": "strong or (abstractly) strength (KJV: courageous, mighty, strong (one).)",
    "transliteration": "אַמִּיץ",
    "references": [
      "H533"
    ]
  },
  {
    "term": "Myr",
    "category": "Hebrew",
    "definition": "a summit (of a tree or mountain (KJV: bough, branch.)",
    "transliteration": "אָמִיר",
    "references": [
      "H534"
    ]
  },
  {
    "term": "Ml",
    "category": "Hebrew",
    "definition": "To droop; by implication to be sick, to mourn (KJV: languish, be weak, wax feeble.)",
    "transliteration": "אָמַל",
    "references": [
      "H535"
    ]
  },
  {
    "term": "Mll",
    "category": "Hebrew",
    "definition": "sick (KJV: weak.)",
    "transliteration": "אֻמְלַל",
    "references": [
      "H536"
    ]
  },
  {
    "term": "Mll",
    "category": "Hebrew",
    "definition": "languid (KJV: feeble.)",
    "transliteration": "אֲמֵלָל",
    "references": [
      "H537"
    ]
  },
  {
    "term": "Mm",
    "category": "Hebrew",
    "definition": "Amam, a place in Palestine (KJV: Amam.)",
    "transliteration": "אֲמָם",
    "references": [
      "H538"
    ]
  },
  {
    "term": "Mn",
    "category": "Hebrew",
    "definition": "properly, to build up or support; to foster as a parent or nurse; figuratively to render (or be) firm or faithful, to trust or believe, to be permanent or quiet; morally to be true or certain; (KJV: hence, assurance, believe, bring up, establish, [phrase] fail, be faithful (of long continuance, stedfast, sure, surely, trusty, verified), nurse, (-ing father), (put), trust, turn to the right.)",
    "transliteration": "אָמַן",
    "references": [
      "H539"
    ]
  },
  {
    "term": "Mn",
    "category": "Hebrew",
    "definition": "{properly, to build up or support; to foster as a parent or nurse; figuratively to render (or be) firm or faithful, to trust or believe, to be permanent or quiet; morally to be true or certain}; (KJV: believe, faithful, sure.)",
    "transliteration": "אֲמַן",
    "references": [
      "H540"
    ]
  },
  {
    "term": "Mn",
    "category": "Hebrew",
    "definition": "To take the right hand road (KJV: turn to the right. See H539 (אָמַן).)",
    "transliteration": "אָמַן",
    "references": [
      "H541"
    ]
  },
  {
    "term": "Mn",
    "category": "Hebrew",
    "definition": "an expert (KJV: cunning workman.)",
    "transliteration": "אָמָן",
    "references": [
      "H542"
    ]
  },
  {
    "term": "Mn",
    "category": "Hebrew",
    "definition": "sure; abstract, faithfulness; adverb, truly (KJV: Amen, so be it, truth.)",
    "transliteration": "אָמֵן",
    "references": [
      "H543"
    ]
  },
  {
    "term": "Mn",
    "category": "Hebrew",
    "definition": "verity (KJV: truth.)",
    "transliteration": "אֹמֶן",
    "references": [
      "H544"
    ]
  },
  {
    "term": "Mnh",
    "category": "Hebrew",
    "definition": "tutelage (KJV: brought up.)",
    "transliteration": "אׇמְנָה",
    "references": [
      "H545"
    ]
  },
  {
    "term": "Mnh",
    "category": "Hebrew",
    "definition": "adverb, surely (KJV: indeed.)",
    "transliteration": "אׇמְנָה",
    "references": [
      "H546"
    ]
  },
  {
    "term": "Mnh",
    "category": "Hebrew",
    "definition": "a column (KJV: pillar.)",
    "transliteration": "אֹמְנָה",
    "references": [
      "H547"
    ]
  },
  {
    "term": "Mnh",
    "category": "Hebrew",
    "definition": "something fixed, i.e. a covenant. an allowance (KJV: certain portion, sure.)",
    "transliteration": "אֲמָנָה",
    "references": [
      "H548"
    ]
  },
  {
    "term": "Mnh",
    "category": "Hebrew",
    "definition": "Amanah, a mountain near Damascus (KJV: Amana.)",
    "transliteration": "אֲמָנָה",
    "references": [
      "H549"
    ]
  },
  {
    "term": "Mnvn",
    "category": "Hebrew",
    "definition": "Amnon (or Aminon), a son of David (KJV: Amnon.)",
    "transliteration": "אַמְנוֹן",
    "references": [
      "H550"
    ]
  },
  {
    "term": "Mnm",
    "category": "Hebrew",
    "definition": "verily (KJV: indeed, no doubt, surely, (it is, of a) true(-ly, -th).)",
    "transliteration": "אׇמְנָם",
    "references": [
      "H551"
    ]
  },
  {
    "term": "Mnm",
    "category": "Hebrew",
    "definition": "{verily} (KJV: in (very) deed; of a surety.)",
    "transliteration": "אֻמְנָם",
    "references": [
      "H552"
    ]
  },
  {
    "term": "Mts",
    "category": "Hebrew",
    "definition": "To be alert, physically (on foot) or mentally (in courage) (KJV: confirm, be courageous (of good courage, stedfastly minded, strong, stronger), establish, fortify, harden, increase, prevail, strengthen (self), make strong (obstinate, speed).)",
    "transliteration": "אָמַץ",
    "references": [
      "H553"
    ]
  },
  {
    "term": "Mts",
    "category": "Hebrew",
    "definition": "of a strong color, i.e. red (others fleet) (KJV: bay.)",
    "transliteration": "אָמֹץ",
    "references": [
      "H554"
    ]
  },
  {
    "term": "Mts",
    "category": "Hebrew",
    "definition": "strength (KJV: stronger.)",
    "transliteration": "אֹמֶץ",
    "references": [
      "H555"
    ]
  },
  {
    "term": "Mtsh",
    "category": "Hebrew",
    "definition": "force (KJV: strength.)",
    "transliteration": "אַמְצָה",
    "references": [
      "H556"
    ]
  },
  {
    "term": "Mtsy",
    "category": "Hebrew",
    "definition": "Amtsi, an Israelite (KJV: Amzi.)",
    "transliteration": "אַמְצִי",
    "references": [
      "H557"
    ]
  },
  {
    "term": "Mtsyh",
    "category": "Hebrew",
    "definition": "Amatsjah, the name of four Israelites (KJV: Amaziah.)",
    "transliteration": "אֲמַצְיָה",
    "references": [
      "H558"
    ]
  },
  {
    "term": "Mr",
    "category": "Hebrew",
    "definition": "To say (used with great latitude) (KJV: answer, appoint, avouch, bid, boast self, call, certify, challenge, charge, [phrase] (at the, give) command(-ment), commune, consider, declare, demand, [idiom] desire, determine, [idiom] expressly, [idiom] indeed, [idiom] intend, name, [idiom] plainly, promise, publish, report, require, say, speak (against, of), [idiom] still, [idiom] suppose, talk, tell, term, [idiom] that is, [idiom] think, use (speech), utter, [idiom] verily, [idiom] yet.)",
    "transliteration": "אָמַר",
    "references": [
      "H559"
    ]
  },
  {
    "term": "Mr",
    "category": "Hebrew",
    "definition": "{to say (used with great latitude)} (KJV: command, declare, say, speak, tell.)",
    "transliteration": "אֲמַר",
    "references": [
      "H560"
    ]
  },
  {
    "term": "Mr",
    "category": "Hebrew",
    "definition": "something said (KJV: answer, [idiom] appointed unto him, saying, speech, word.)",
    "transliteration": "אֵמֶר",
    "references": [
      "H561"
    ]
  },
  {
    "term": "Mr",
    "category": "Hebrew",
    "definition": "{something said} (KJV: promise, speech, thing, word.)",
    "transliteration": "אֹמֶר",
    "references": [
      "H562"
    ]
  },
  {
    "term": "Mr",
    "category": "Hebrew",
    "definition": "a lamb (KJV: lamb.)",
    "transliteration": "אִמַּר",
    "references": [
      "H563"
    ]
  },
  {
    "term": "Mr",
    "category": "Hebrew",
    "definition": "Immer, the name of five Israelites (KJV: Immer.)",
    "transliteration": "אִמֵּר",
    "references": [
      "H564"
    ]
  },
  {
    "term": "Mrh",
    "category": "Hebrew",
    "definition": "{something said} (KJV: commandment, speech, word.)",
    "transliteration": "אִמְרָה",
    "references": [
      "H565"
    ]
  },
  {
    "term": "Mry",
    "category": "Hebrew",
    "definition": "Imri, the name of two Israelites (KJV: Imri.)",
    "transliteration": "אִמְרִי",
    "references": [
      "H566"
    ]
  },
  {
    "term": "Mry",
    "category": "Hebrew",
    "definition": "an Emorite, one of the Canaanitish tribes (KJV: Amorite.)",
    "transliteration": "אֱמֹרִי",
    "references": [
      "H567"
    ]
  },
  {
    "term": "Mryh",
    "category": "Hebrew",
    "definition": "Amarjah, the name of nine Israelites (KJV: Amariah.)",
    "transliteration": "אֲמַרְיָה",
    "references": [
      "H568"
    ]
  },
  {
    "term": "Mrpl",
    "category": "Hebrew",
    "definition": "Amraphel, a king of Shinar (KJV: Amraphel.)",
    "transliteration": "אַמְרָפֶל",
    "references": [
      "H569"
    ]
  },
  {
    "term": "Msh",
    "category": "Hebrew",
    "definition": "yesterday or last night (KJV: former time, yesterday(-night))",
    "transliteration": "אֶמֶשׁ",
    "references": [
      "H570"
    ]
  },
  {
    "term": "Mt",
    "category": "Hebrew",
    "definition": "stability; (figuratively) certainty, truth, trustworthiness (KJV: assured(-ly), establishment, faithful, right, sure, true (-ly, -th), verity.)",
    "transliteration": "אֶמֶת",
    "references": [
      "H571"
    ]
  },
  {
    "term": "Mtcht",
    "category": "Hebrew",
    "definition": "properly, something expansive, i.e. a bag (KJV: sack.)",
    "transliteration": "אַמְתַּחַת",
    "references": [
      "H572"
    ]
  },
  {
    "term": "Mty",
    "category": "Hebrew",
    "definition": "Amittai, an Israelite (KJV: Amittai.)",
    "transliteration": "אֲמִתַּי",
    "references": [
      "H573"
    ]
  },
  {
    "term": "Mtny",
    "category": "Hebrew",
    "definition": "well-loined (i.e. burly) or mighty (KJV: terrible.)",
    "transliteration": "אֵמְתָּנִי",
    "references": [
      "H574"
    ]
  },
  {
    "term": "N",
    "category": "Hebrew",
    "definition": "where?; hence, whither?, when?; also hither and thither (KJV: [phrase] any (no) whither, now, where, whither(-soever).)",
    "transliteration": "אָן",
    "references": [
      "H575"
    ]
  },
  {
    "term": "N",
    "category": "Hebrew",
    "definition": "I (KJV: I, as for me.)",
    "transliteration": "אֲנָא",
    "references": [
      "H576"
    ]
  },
  {
    "term": "N",
    "category": "Hebrew",
    "definition": "oh now! (KJV: I (me) beseech (pray) thee, O.)",
    "transliteration": "אָנָּא",
    "references": [
      "H577"
    ]
  },
  {
    "term": "Nh",
    "category": "Hebrew",
    "definition": "To groan (KJV: lament, mourn.)",
    "transliteration": "אָנָה",
    "references": [
      "H578"
    ]
  },
  {
    "term": "Nh",
    "category": "Hebrew",
    "definition": "To approach; hence, to meet in various senses (KJV: befall, deliver, happen, seek a quarrel.)",
    "transliteration": "אָנָה",
    "references": [
      "H579"
    ]
  },
  {
    "term": "Nv",
    "category": "Hebrew",
    "definition": "we (KJV: we.)",
    "transliteration": "אֲנוּ",
    "references": [
      "H580"
    ]
  },
  {
    "term": "Nvn",
    "category": "Hebrew",
    "definition": "they (KJV: [idiom] are, them, these.)",
    "transliteration": "אִנּוּן",
    "references": [
      "H581"
    ]
  },
  {
    "term": "Nvsh",
    "category": "Hebrew",
    "definition": "a man in general (singly or collectively) (KJV: another, [idiom] (blood-) thirsty, certain, chap(-man); divers, fellow, [idiom] in the flower of their age, husband, (certain, mortal) man, people, person, servant, some ([idiom] of them), [phrase] stranger, those, [phrase] their trade. It is often unexpressed in the English versions, especially when used in apposition with another word. Compare H376 (אִישׁ).)",
    "transliteration": "אֱנוֹשׁ",
    "references": [
      "H582"
    ]
  },
  {
    "term": "Nvsh",
    "category": "Hebrew",
    "definition": "Enosh, a son of Seth (KJV: Enos.)",
    "transliteration": "אֱנוֹשׁ",
    "references": [
      "H583"
    ]
  },
  {
    "term": "Nch",
    "category": "Hebrew",
    "definition": "To sigh (KJV: groan, mourn, sigh.)",
    "transliteration": "אָנַח",
    "references": [
      "H584"
    ]
  },
  {
    "term": "Nchh",
    "category": "Hebrew",
    "definition": "sighing (KJV: groaning, mourn, sigh.)",
    "transliteration": "אֲנָחָה",
    "references": [
      "H585"
    ]
  },
  {
    "term": "Nchn",
    "category": "Hebrew",
    "definition": "we (KJV: we.)",
    "transliteration": "אֲנַחְנָא",
    "references": [
      "H586"
    ]
  },
  {
    "term": "Nchnv",
    "category": "Hebrew",
    "definition": "we (KJV: ourselves, us, we.)",
    "transliteration": "אֲנַחְנוּ",
    "references": [
      "H587"
    ]
  },
  {
    "term": "Nchrt",
    "category": "Hebrew",
    "definition": "Anacharath, a place in Palestine (KJV: Anaharath.)",
    "transliteration": "אֲנָחֲרָת",
    "references": [
      "H588"
    ]
  },
  {
    "term": "Ny",
    "category": "Hebrew",
    "definition": "I (KJV: I, (as for) me, mine, myself, we, [idiom] which, [idiom] who.)",
    "transliteration": "אֲנִי",
    "references": [
      "H589"
    ]
  },
  {
    "term": "Ny",
    "category": "Hebrew",
    "definition": "-a ship or (collectively) a fleet (KJV: galley, navy (of ships).)",
    "transliteration": "אֳנִי",
    "references": [
      "H590"
    ]
  },
  {
    "term": "Nyh",
    "category": "Hebrew",
    "definition": "a ship (KJV: ship(-men).)",
    "transliteration": "אֳנִיָּה",
    "references": [
      "H591"
    ]
  },
  {
    "term": "Nyh",
    "category": "Hebrew",
    "definition": "groaning (KJV: lamentation, sorrow.)",
    "transliteration": "אֲנִיָּה",
    "references": [
      "H592"
    ]
  },
  {
    "term": "Nym",
    "category": "Hebrew",
    "definition": "Aniam, an Israelite (KJV: Aniam.)",
    "transliteration": "אֲנִיעָם",
    "references": [
      "H593"
    ]
  },
  {
    "term": "Nk",
    "category": "Hebrew",
    "definition": "according to most a plumb-line, and to others a hook (KJV: plumb-line)",
    "transliteration": "אֲנָךְ",
    "references": [
      "H594"
    ]
  },
  {
    "term": "Nky",
    "category": "Hebrew",
    "definition": "I (KJV: I, me, [idiom] which.)",
    "transliteration": "אָנֹכִי",
    "references": [
      "H595"
    ]
  },
  {
    "term": "Nn",
    "category": "Hebrew",
    "definition": "To mourn, i.e. complain (KJV: complain.)",
    "transliteration": "אָנַן",
    "references": [
      "H596"
    ]
  },
  {
    "term": "Ns",
    "category": "Hebrew",
    "definition": "To insist (KJV: compel.)",
    "transliteration": "אָנַס",
    "references": [
      "H597"
    ]
  },
  {
    "term": "Ns",
    "category": "Hebrew",
    "definition": "figuratively, to distress (KJV: trouble.)",
    "transliteration": "אֲנַס",
    "references": [
      "H598"
    ]
  },
  {
    "term": "Np",
    "category": "Hebrew",
    "definition": "To breathe hard, i.e. be enraged (KJV: be angry (displeased).)",
    "transliteration": "אָנַף",
    "references": [
      "H599"
    ]
  },
  {
    "term": "Np",
    "category": "Hebrew",
    "definition": "the face (KJV: face, visage.)",
    "transliteration": "אֲנַף",
    "references": [
      "H600"
    ]
  },
  {
    "term": "Nph",
    "category": "Hebrew",
    "definition": "an unclean bird, perhaps the parrot (from its irascibility) (KJV: heron.)",
    "transliteration": "אֲנָפָה",
    "references": [
      "H601"
    ]
  },
  {
    "term": "Nq",
    "category": "Hebrew",
    "definition": "To shriek (KJV: cry, groan.)",
    "transliteration": "אָנַק",
    "references": [
      "H602"
    ]
  },
  {
    "term": "Nqh",
    "category": "Hebrew",
    "definition": "shrieking (KJV: crying out, groaning, sighing.)",
    "transliteration": "אֲנָקָה",
    "references": [
      "H603"
    ]
  },
  {
    "term": "Nqh",
    "category": "Hebrew",
    "definition": "some kind of lizard, probably the gecko (from its wail) (KJV: ferret.)",
    "transliteration": "אֲנָקָה",
    "references": [
      "H604"
    ]
  },
  {
    "term": "Nsh",
    "category": "Hebrew",
    "definition": "To be frail, feeble, or (figuratively) melancholy (KJV: desperate(-ly wicked), incurable, sick, woeful.)",
    "transliteration": "אָנַשׁ",
    "references": [
      "H605"
    ]
  },
  {
    "term": "Nsh",
    "category": "Hebrew",
    "definition": "a man (KJV: man, [phrase] whosoever.)",
    "transliteration": "אֱנָשׁ",
    "references": [
      "H606"
    ]
  },
  {
    "term": "Nth",
    "category": "Hebrew",
    "definition": "thou (KJV: as for thee, thou.)",
    "transliteration": "אַנְתָּה",
    "references": [
      "H607"
    ]
  },
  {
    "term": "Ntvn",
    "category": "Hebrew",
    "definition": "ye (KJV: ye.)",
    "transliteration": "אַנְתּוּן",
    "references": [
      "H608"
    ]
  },
  {
    "term": "S",
    "category": "Hebrew",
    "definition": "Asa, the name of a king and of a Levite (KJV: Asa.)",
    "transliteration": "אָסָא",
    "references": [
      "H609"
    ]
  },
  {
    "term": "Svk",
    "category": "Hebrew",
    "definition": "anointed, i.e. an oil-flask (KJV: pot.)",
    "transliteration": "אָסוּךְ",
    "references": [
      "H610"
    ]
  },
  {
    "term": "Svn",
    "category": "Hebrew",
    "definition": "hurt (KJV: mischief.)",
    "transliteration": "אָסוֹן",
    "references": [
      "H611"
    ]
  },
  {
    "term": "Svr",
    "category": "Hebrew",
    "definition": "a bond (especially manacles of a prisoner) (KJV: band, [phrase] prison.)",
    "transliteration": "אֵסוּר",
    "references": [
      "H612"
    ]
  },
  {
    "term": "Svr",
    "category": "Hebrew",
    "definition": "{a bond (especially manacles of a prisoner)} (KJV: band, imprisonment.)",
    "transliteration": "אֱסוּר",
    "references": [
      "H613"
    ]
  },
  {
    "term": "Syp",
    "category": "Hebrew",
    "definition": "gathered, i.e. (abstractly) a gathering in of crops (KJV: ingathering.)",
    "transliteration": "אָסִיף",
    "references": [
      "H614"
    ]
  },
  {
    "term": "Syr",
    "category": "Hebrew",
    "definition": "bound, i.e. a captive (KJV: (those which are) bound, prisoner.)",
    "transliteration": "אָסִיר",
    "references": [
      "H615"
    ]
  },
  {
    "term": "Syr",
    "category": "Hebrew",
    "definition": "{bound, i.e. a captive} (KJV: prisoner.)",
    "transliteration": "אַסִּיר",
    "references": [
      "H616"
    ]
  },
  {
    "term": "Syr",
    "category": "Hebrew",
    "definition": "Assir, the name of two Israelites (KJV: Assir.)",
    "transliteration": "אַסִּיר",
    "references": [
      "H617"
    ]
  },
  {
    "term": "Sm",
    "category": "Hebrew",
    "definition": "a storehouse (only in the plural) (KJV: barn, storehouse.)",
    "transliteration": "אָסָם",
    "references": [
      "H618"
    ]
  },
  {
    "term": "Snh",
    "category": "Hebrew",
    "definition": "Asnah, one of the Nethinim (KJV: Asnah.)",
    "transliteration": "אַסְנָה",
    "references": [
      "H619"
    ]
  },
  {
    "term": "Snpr",
    "category": "Hebrew",
    "definition": "Osnappar, an Assyrian king (KJV: Asnapper.)",
    "transliteration": "אׇסְנַפַּר",
    "references": [
      "H620"
    ]
  },
  {
    "term": "Snt",
    "category": "Hebrew",
    "definition": "Asenath, the wife of Joseph (KJV: Asenath.)",
    "transliteration": "אָסְנַת",
    "references": [
      "H621"
    ]
  },
  {
    "term": "Sp",
    "category": "Hebrew",
    "definition": "To gather for any purpose; hence, to receive, take away, i.e. remove (destroy, leave behind, put up, restore, etc.) (KJV: assemble, bring, consume, destroy, felch, gather (in, together, up again), [idiom] generally, get (him), lose, put all together, receive, recover (another from leprosy), (be) rereward, [idiom] surely, take (away, into, up), [idiom] utterly, withdraw.)",
    "transliteration": "אָסַף",
    "references": [
      "H622"
    ]
  },
  {
    "term": "Sp",
    "category": "Hebrew",
    "definition": "Asaph, the name of three Israelites, and of the family of the first (KJV: Asaph.)",
    "transliteration": "אָסָף",
    "references": [
      "H623"
    ]
  },
  {
    "term": "Sp",
    "category": "Hebrew",
    "definition": "collected (only in the plural), i.e. a collection of offerings) (KJV: threshold, Asuppim.)",
    "transliteration": "אָסֻף",
    "references": [
      "H624"
    ]
  },
  {
    "term": "Sp",
    "category": "Hebrew",
    "definition": "a collection (of fruits) (KJV: gathering.)",
    "transliteration": "אֹסֶף",
    "references": [
      "H625"
    ]
  },
  {
    "term": "Sph",
    "category": "Hebrew",
    "definition": "a collection of people (only adverbial) (KJV: [idiom] together.)",
    "transliteration": "אֲסֵפָה",
    "references": [
      "H626"
    ]
  },
  {
    "term": "Sph",
    "category": "Hebrew",
    "definition": "a collection of (learned) men (only in the plural) (KJV: assembly.)",
    "transliteration": "אֲסֻפָּה",
    "references": [
      "H627"
    ]
  },
  {
    "term": "Spsp",
    "category": "Hebrew",
    "definition": "gathered up together, i.e. a promiscuous assemblage (of people) (KJV: mixt multitude.)",
    "transliteration": "אֲסְפְּסֻף",
    "references": [
      "H628"
    ]
  },
  {
    "term": "Sprn",
    "category": "Hebrew",
    "definition": "diligently (KJV: fast, forthwith, speed(-ily).)",
    "transliteration": "אׇסְפַּרְנָא",
    "references": [
      "H629"
    ]
  },
  {
    "term": "Spt",
    "category": "Hebrew",
    "definition": "Aspatha, a son of Haman (KJV: Aspatha.)",
    "transliteration": "אַסְפָּתָא",
    "references": [
      "H630"
    ]
  },
  {
    "term": "Sr",
    "category": "Hebrew",
    "definition": "To yoke or hitch; by analogy, to fasten in any sense, to join battle (KJV: bind, fast, gird, harness, hold, keep, make ready, order, prepare, prison(-er), put in bonds, set in array, tie.)",
    "transliteration": "אָסַר",
    "references": [
      "H631"
    ]
  },
  {
    "term": "Sr",
    "category": "Hebrew",
    "definition": "an obligation or vow (of abstinence) (KJV: binding, bond.)",
    "transliteration": "אֱסָר",
    "references": [
      "H632"
    ]
  },
  {
    "term": "Sr",
    "category": "Hebrew",
    "definition": "an interdict (KJV: decree.)",
    "transliteration": "אֱסָר",
    "references": [
      "H633"
    ]
  },
  {
    "term": "Srchdvn",
    "category": "Hebrew",
    "definition": "Esar-chaddon, an Assyrian king (KJV: Esar-haddon.)",
    "transliteration": "אֵסַר־חַדּוֹן",
    "references": [
      "H634"
    ]
  },
  {
    "term": "Str",
    "category": "Hebrew",
    "definition": "Ester, the Jewish heroine (KJV: Esther.)",
    "transliteration": "אֶסְתֵּר",
    "references": [
      "H635"
    ]
  },
  {
    "term": "אָע",
    "category": "Hebrew",
    "definition": "a tree or wood (KJV: timber, wood.)",
    "transliteration": "אָע",
    "references": [
      "H636"
    ]
  },
  {
    "term": "P",
    "category": "Hebrew",
    "definition": "meaning accession (used as an adverb or conjunction); also or yea; adversatively though (KJV: also, [phrase] although, and (furthermore, yet), but, even, [phrase] how much less (more, rather than), moreover, with, yea.)",
    "transliteration": "אַף",
    "references": [
      "H637"
    ]
  },
  {
    "term": "P",
    "category": "Hebrew",
    "definition": "{meaning accession (used as an adverb or conjunction); also or yea; adversatively though} (KJV: also.)",
    "transliteration": "אַף",
    "references": [
      "H638"
    ]
  },
  {
    "term": "P",
    "category": "Hebrew",
    "definition": "properly, the nose or nostril; hence, the face, and occasionally a person; also (from the rapid breathing in passion) ire (KJV: anger(-gry), [phrase] before, countenance, face, [phrase] forebearing, forehead, [phrase] (long-) suffering, nose, nostril, snout, [idiom] worthy, wrath.)",
    "transliteration": "אַף",
    "references": [
      "H639"
    ]
  },
  {
    "term": "Pd",
    "category": "Hebrew",
    "definition": "To gird on (the ephod) (KJV: bind, gird.)",
    "transliteration": "אָפַד",
    "references": [
      "H640"
    ]
  },
  {
    "term": "Pd",
    "category": "Hebrew",
    "definition": "Ephod, an Israelite (KJV: Ephod.)",
    "transliteration": "אֵפֹד",
    "references": [
      "H641"
    ]
  },
  {
    "term": "Pdh",
    "category": "Hebrew",
    "definition": "a girding on (of the ephod); hence, generally, a plating (of metal) (KJV: ephod, ornament.)",
    "transliteration": "אֵפֻדָּה",
    "references": [
      "H642"
    ]
  },
  {
    "term": "Pdn",
    "category": "Hebrew",
    "definition": "a pavilion or palace-tent (KJV: palace.)",
    "transliteration": "אַפֶּדֶן",
    "references": [
      "H643"
    ]
  },
  {
    "term": "Ph",
    "category": "Hebrew",
    "definition": "To cook, especially to bake (KJV: bake(-r, (-meats)).)",
    "transliteration": "אָפָה",
    "references": [
      "H644"
    ]
  },
  {
    "term": "Pv",
    "category": "Hebrew",
    "definition": "strictly a demonstrative particle, here; but used of time, now or then (KJV: here, now, where?)",
    "transliteration": "אֵפוֹ",
    "references": [
      "H645"
    ]
  },
  {
    "term": "Pvd",
    "category": "Hebrew",
    "definition": "a girdle; specifically the ephod or highpriest's shoulder-piece; also generally, an image (KJV: ephod.)",
    "transliteration": "אֵפוֹד",
    "references": [
      "H646"
    ]
  },
  {
    "term": "Pych",
    "category": "Hebrew",
    "definition": "Aphiach, an Israelite (KJV: Aphiah.)",
    "transliteration": "אֲפִיחַ",
    "references": [
      "H647"
    ]
  },
  {
    "term": "Pyl",
    "category": "Hebrew",
    "definition": "unripe (KJV: not grown up.)",
    "transliteration": "אָפִיל",
    "references": [
      "H648"
    ]
  },
  {
    "term": "Pym",
    "category": "Hebrew",
    "definition": "Appajim, an Israelite (KJV: Appaim.)",
    "transliteration": "אַפַּיִם",
    "references": [
      "H649"
    ]
  },
  {
    "term": "Pyq",
    "category": "Hebrew",
    "definition": "properly, containing, i.e. a tube; also a bed or valley of astream; also a strong thing or a hero (KJV: brook, channel, mighty, river, [phrase] scale, stream, strong piece.)",
    "transliteration": "אָפִיק",
    "references": [
      "H650"
    ]
  },
  {
    "term": "Pl",
    "category": "Hebrew",
    "definition": "dusky (KJV: very dark.)",
    "transliteration": "אָפֵל",
    "references": [
      "H651"
    ]
  },
  {
    "term": "Pl",
    "category": "Hebrew",
    "definition": "dusk (KJV: darkness, obscurity, privily.)",
    "transliteration": "אֹפֶל",
    "references": [
      "H652"
    ]
  },
  {
    "term": "Plh",
    "category": "Hebrew",
    "definition": "duskiness, figuratively, misfortune; concrete, concealment (KJV: dark, darkness, gloominess, [idiom] thick.)",
    "transliteration": "אֲפֵלָה",
    "references": [
      "H653"
    ]
  },
  {
    "term": "Pll",
    "category": "Hebrew",
    "definition": "Ephlal, an Israelite (KJV: Ephlal.)",
    "transliteration": "אֶפְלָל",
    "references": [
      "H654"
    ]
  },
  {
    "term": "Pn",
    "category": "Hebrew",
    "definition": "a turn, i.e. a season (KJV: [phrase] fitly.)",
    "transliteration": "אֹפֶן",
    "references": [
      "H655"
    ]
  },
  {
    "term": "Ps",
    "category": "Hebrew",
    "definition": "To disappear, i.e. cease (KJV: be clean gone (at an end, brought to nought), fail.)",
    "transliteration": "אָפֵס",
    "references": [
      "H656"
    ]
  },
  {
    "term": "Ps",
    "category": "Hebrew",
    "definition": "cessation, i.e. an end (especially of the earth); often used adverb, no further; also the ankle (in the dual), as being the extremity of the leg or foot (KJV: ankle, but (only), end, howbeit, less than nothing, nevertheless (where), no, none (beside), not (any, -withstanding), thing of nought, save(-ing), there, uttermost part, want, without (cause).)",
    "transliteration": "אֶפֶס",
    "references": [
      "H657"
    ]
  },
  {
    "term": "Psdmym",
    "category": "Hebrew",
    "definition": "Ephes-Dammim, a place in Palestine (KJV: Ephes-dammim.)",
    "transliteration": "אֶפֶס דַּמִּים",
    "references": [
      "H658"
    ]
  },
  {
    "term": "P",
    "category": "Hebrew",
    "definition": "properly, a breath, i.e. nothing (KJV: of nought.)",
    "transliteration": "אֵפַע",
    "references": [
      "H659"
    ]
  },
  {
    "term": "Ph",
    "category": "Hebrew",
    "definition": "an asp or other venomous serpent (KJV: viper.)",
    "transliteration": "אֶפְעֶה",
    "references": [
      "H660"
    ]
  },
  {
    "term": "Pp",
    "category": "Hebrew",
    "definition": "To surround (KJV: compass.)",
    "transliteration": "אָפַף",
    "references": [
      "H661"
    ]
  },
  {
    "term": "Pq",
    "category": "Hebrew",
    "definition": "To contain, i.e. (reflex.) abstain (KJV: force (oneself), restrain.)",
    "transliteration": "אָפַק",
    "references": [
      "H662"
    ]
  },
  {
    "term": "Pq",
    "category": "Hebrew",
    "definition": "Aphek (or Aphik), the name of three places in Palestine (KJV: Aphek, Aphik.)",
    "transliteration": "אֲפֵק",
    "references": [
      "H663"
    ]
  },
  {
    "term": "Pqh",
    "category": "Hebrew",
    "definition": "Aphekah, a place in Palestine (KJV: Aphekah.)",
    "transliteration": "אֲפֵקָה",
    "references": [
      "H664"
    ]
  },
  {
    "term": "Pr",
    "category": "Hebrew",
    "definition": "ashes (KJV: ashes.)",
    "transliteration": "אֵפֶר",
    "references": [
      "H665"
    ]
  },
  {
    "term": "Pr",
    "category": "Hebrew",
    "definition": "a turban (KJV: ashes.)",
    "transliteration": "אֲפֵר",
    "references": [
      "H666"
    ]
  },
  {
    "term": "Prch",
    "category": "Hebrew",
    "definition": "the brood of a bird (KJV: young (one).)",
    "transliteration": "אֶפְרֹחַ",
    "references": [
      "H667"
    ]
  },
  {
    "term": "Pryvn",
    "category": "Hebrew",
    "definition": "a palanquin (KJV: chariot.)",
    "transliteration": "אַפִּרְיוֹן",
    "references": [
      "H668"
    ]
  },
  {
    "term": "Prym",
    "category": "Hebrew",
    "definition": "Ephrajim, a son of Joseph; also the tribe descended from him, and its territory (KJV: Ephraim, Ephraimites.)",
    "transliteration": "אֶפְרַיִם",
    "references": [
      "H669"
    ]
  },
  {
    "term": "Prsy",
    "category": "Hebrew",
    "definition": "an Apherasite or inhabitant of an unknown region of Assyria (KJV: Apharsite.)",
    "transliteration": "אֲפָרְסַי",
    "references": [
      "H670"
    ]
  },
  {
    "term": "Prsky",
    "category": "Hebrew",
    "definition": "an Apharsekite or Apharsathkite, an unknown Assyrian tribe (KJV: Apharsachites, Apharasthchites.)",
    "transliteration": "אֲפַרְסְכַי",
    "references": [
      "H671"
    ]
  },
  {
    "term": "Prt",
    "category": "Hebrew",
    "definition": "Ephrath, another name for Bethlehem; (KJV: once (Psalm 132:6) perhaps for Ephraim; also of an Israelitish woman; Ephrath, Ephratah.)",
    "transliteration": "אֶפְרָת",
    "references": [
      "H672"
    ]
  },
  {
    "term": "Prty",
    "category": "Hebrew",
    "definition": "an Ephrathite or an Ephraimite (KJV: Ephraimite, Ephrathite.)",
    "transliteration": "אֶפְרָתִי",
    "references": [
      "H673"
    ]
  },
  {
    "term": "Ptm",
    "category": "Hebrew",
    "definition": "revenue; others at the last (KJV: revenue.)",
    "transliteration": "אַפְּתֹם",
    "references": [
      "H674"
    ]
  },
  {
    "term": "Tsbvn",
    "category": "Hebrew",
    "definition": "Etsbon, the name of two Israelites (KJV: Ezbon.)",
    "transliteration": "אֶצְבּוֹן",
    "references": [
      "H675"
    ]
  },
  {
    "term": "Tsb",
    "category": "Hebrew",
    "definition": "something to sieze with, i.e. a finger; by analogy, a toe (KJV: finger, toe.)",
    "transliteration": "אֶצְבַּע",
    "references": [
      "H676"
    ]
  },
  {
    "term": "Tsb",
    "category": "Hebrew",
    "definition": "{something to sieze with, i.e. a finger; by analogy, a toe} (KJV: finger, toe.)",
    "transliteration": "אֶצְבַּע",
    "references": [
      "H677"
    ]
  },
  {
    "term": "Tsyl",
    "category": "Hebrew",
    "definition": "an extremity (Isaiah 41:9), also a noble (KJV: chief man, noble.)",
    "transliteration": "אָצִיל",
    "references": [
      "H678"
    ]
  },
  {
    "term": "Tsyl",
    "category": "Hebrew",
    "definition": "a joint of the hand (i.e. knuckle); also (according to some) a party-wall (Ezekiel 41:8) (KJV: (arm) hole, great.)",
    "transliteration": "אַצִּיל",
    "references": [
      "H679"
    ]
  },
  {
    "term": "Tsl",
    "category": "Hebrew",
    "definition": "To separate; hence, to select, refuse, contract (KJV: keep, reserve, straiten, take.)",
    "transliteration": "אָצַל",
    "references": [
      "H680"
    ]
  },
  {
    "term": "Tsl",
    "category": "Hebrew",
    "definition": "a side; (as a preposition) near (KJV: at, (hard) by, (from) (beside), near (unto), toward, with. See also H1018 (בֵּית הָאֵצֶל).)",
    "transliteration": "אֵצֶל",
    "references": [
      "H681"
    ]
  },
  {
    "term": "Tsl",
    "category": "Hebrew",
    "definition": "Atsel, the name of an Israelite, and of a place in Palestine (KJV: Azal, Azel.)",
    "transliteration": "אָצֵל",
    "references": [
      "H682"
    ]
  },
  {
    "term": "Tslyhv",
    "category": "Hebrew",
    "definition": "Atsaljah, an Israelite (KJV: Azaliah.)",
    "transliteration": "אֲצַלְיָהוּ",
    "references": [
      "H683"
    ]
  },
  {
    "term": "Tsm",
    "category": "Hebrew",
    "definition": "Otsem, the name of two Israelites (KJV: Ozem.)",
    "transliteration": "אֹצֶם",
    "references": [
      "H684"
    ]
  },
  {
    "term": "Tsdh",
    "category": "Hebrew",
    "definition": "properly, a step-chain; by analogy, a bracelet (KJV: bracelet, chain.)",
    "transliteration": "אֶצְעָדָה",
    "references": [
      "H685"
    ]
  },
  {
    "term": "Tsr",
    "category": "Hebrew",
    "definition": "To store up (KJV: (lay up in) store, [phrase] (make) treasure(-r).)",
    "transliteration": "אָצַר",
    "references": [
      "H686"
    ]
  },
  {
    "term": "Tsr",
    "category": "Hebrew",
    "definition": "Etser, an Idumaean (KJV: Ezer.)",
    "transliteration": "אֶצֶר",
    "references": [
      "H687"
    ]
  },
  {
    "term": "Qdch",
    "category": "Hebrew",
    "definition": "burning, i.e. a carbuncle or other fiery gem (KJV: carbuncle.)",
    "transliteration": "אֶקְדָּח",
    "references": [
      "H688"
    ]
  },
  {
    "term": "Qv",
    "category": "Hebrew",
    "definition": "slender, i.e. the ibex (KJV: wild goat.)",
    "transliteration": "אַקּוֹ",
    "references": [
      "H689"
    ]
  },
  {
    "term": "R",
    "category": "Hebrew",
    "definition": "Ara, an Israelite (KJV: Ara.)",
    "transliteration": "אֲרָא",
    "references": [
      "H690"
    ]
  },
  {
    "term": "Rl",
    "category": "Hebrew",
    "definition": "a hero (collectively) (KJV: valiant one.)",
    "transliteration": "אֶרְאֵל",
    "references": [
      "H691"
    ]
  },
  {
    "term": "Rly",
    "category": "Hebrew",
    "definition": "Areli (or an Arelite, collectively), an Israelite and his descendants (KJV: Areli, Arelites.)",
    "transliteration": "אַרְאֵלִי",
    "references": [
      "H692"
    ]
  },
  {
    "term": "Rb",
    "category": "Hebrew",
    "definition": "To lurk (KJV: (lie in) ambush(-ment), lay (lie in) wait.)",
    "transliteration": "אָרַב",
    "references": [
      "H693"
    ]
  },
  {
    "term": "Rb",
    "category": "Hebrew",
    "definition": "Arab, a place in Palestine (KJV: Arab.)",
    "transliteration": "אֲרָב",
    "references": [
      "H694"
    ]
  },
  {
    "term": "Rb",
    "category": "Hebrew",
    "definition": "ambuscade (KJV: den, lie in wait.)",
    "transliteration": "אֶרֶב",
    "references": [
      "H695"
    ]
  },
  {
    "term": "Rb",
    "category": "Hebrew",
    "definition": "{ambuscade} (KJV: wait.)",
    "transliteration": "אֹרֶב",
    "references": [
      "H696"
    ]
  },
  {
    "term": "Rbh",
    "category": "Hebrew",
    "definition": "a locust (from its rapid increase) (KJV: grasshopper, locust.)",
    "transliteration": "אַרְבֶּה",
    "references": [
      "H697"
    ]
  },
  {
    "term": "Rbh",
    "category": "Hebrew",
    "definition": "ambuscades (KJV: spoils.)",
    "transliteration": "אׇרֳבָה",
    "references": [
      "H698"
    ]
  },
  {
    "term": "Rbh",
    "category": "Hebrew",
    "definition": "a lattice; (by implication) a window, dovecot (because of the pigeon-holes), chimney (with its apertures for smoke), sluice (with openings for water) (KJV: chimney, window.)",
    "transliteration": "אֲרֻבָּה",
    "references": [
      "H699"
    ]
  },
  {
    "term": "Rbvt",
    "category": "Hebrew",
    "definition": "Arubboth, a place in Palestine (KJV: Aruboth.)",
    "transliteration": "אֲרֻבּוֹת",
    "references": [
      "H700"
    ]
  },
  {
    "term": "Rby",
    "category": "Hebrew",
    "definition": "an Arbite or native of Arab (KJV: Arbite.)",
    "transliteration": "אַרְבִּי",
    "references": [
      "H701"
    ]
  },
  {
    "term": "Rb",
    "category": "Hebrew",
    "definition": "four (KJV: four.)",
    "transliteration": "אַרְבַּע",
    "references": [
      "H702"
    ]
  },
  {
    "term": "Rb",
    "category": "Hebrew",
    "definition": "{four} (KJV: four.)",
    "transliteration": "אַרְבַּע",
    "references": [
      "H703"
    ]
  },
  {
    "term": "Rb",
    "category": "Hebrew",
    "definition": "Arba, one of the Anakim (KJV: Arba.)",
    "transliteration": "אַרְבַּע",
    "references": [
      "H704"
    ]
  },
  {
    "term": "Rbym",
    "category": "Hebrew",
    "definition": "forty (KJV: -forty.)",
    "transliteration": "אַרְבָּעִים",
    "references": [
      "H705"
    ]
  },
  {
    "term": "Rbtym",
    "category": "Hebrew",
    "definition": "fourfold (KJV: fourfold.)",
    "transliteration": "אַרְבַּעְתַּיִם",
    "references": [
      "H706"
    ]
  },
  {
    "term": "Rg",
    "category": "Hebrew",
    "definition": "To plait or weave (KJV: weaver(-r).)",
    "transliteration": "אָרַג",
    "references": [
      "H707"
    ]
  },
  {
    "term": "Rg",
    "category": "Hebrew",
    "definition": "a weaving; a braid; also a shuttle (KJV: beam, weaver's shuttle.)",
    "transliteration": "אֶרֶג",
    "references": [
      "H708"
    ]
  },
  {
    "term": "Rgb",
    "category": "Hebrew",
    "definition": "Argob, a district of Palestine (KJV: Argob.)",
    "transliteration": "אַרְגֹּב",
    "references": [
      "H709"
    ]
  },
  {
    "term": "Rgvn",
    "category": "Hebrew",
    "definition": "purple (KJV: purple.)",
    "transliteration": "אַרְגְּוָן",
    "references": [
      "H710"
    ]
  },
  {
    "term": "Rgvn",
    "category": "Hebrew",
    "definition": "{purple} (KJV: purple.)",
    "transliteration": "אַרְגְּוָן",
    "references": [
      "H711"
    ]
  },
  {
    "term": "Rgz",
    "category": "Hebrew",
    "definition": "a box (as a pannier) (KJV: coffer.)",
    "transliteration": "אַרְגָּז",
    "references": [
      "H712"
    ]
  },
  {
    "term": "Rgmn",
    "category": "Hebrew",
    "definition": "purple (the color or the dyed stuff) (KJV: purple.)",
    "transliteration": "אַרְגָּמָן",
    "references": [
      "H713"
    ]
  },
  {
    "term": "Rd",
    "category": "Hebrew",
    "definition": "Ard, the name of two Israelites (KJV: Ard.)",
    "transliteration": "אַרְדְּ",
    "references": [
      "H714"
    ]
  },
  {
    "term": "Rdvn",
    "category": "Hebrew",
    "definition": "Ardon, an Israelite (KJV: Ardon.)",
    "transliteration": "אַרְדּוֹן",
    "references": [
      "H715"
    ]
  },
  {
    "term": "Rdy",
    "category": "Hebrew",
    "definition": "an Ardite (collectively) or descendant of Ard (KJV: Ardites.)",
    "transliteration": "אַרְדִּי",
    "references": [
      "H716"
    ]
  },
  {
    "term": "Rh",
    "category": "Hebrew",
    "definition": "To pluck (KJV: gather, pluck.)",
    "transliteration": "אָרָה",
    "references": [
      "H717"
    ]
  },
  {
    "term": "Rv",
    "category": "Hebrew",
    "definition": "lo! (KJV: behold, lo.)",
    "transliteration": "אֲרוּ",
    "references": [
      "H718"
    ]
  },
  {
    "term": "Rvd",
    "category": "Hebrew",
    "definition": "Arvad, an island-city of Palestine (KJV: Arvad.)",
    "transliteration": "אַרְוַד",
    "references": [
      "H719"
    ]
  },
  {
    "term": "Rvd",
    "category": "Hebrew",
    "definition": "Arod, an Israelite (KJV: Arod.)",
    "transliteration": "אֲרוֹד",
    "references": [
      "H720"
    ]
  },
  {
    "term": "Rvdy",
    "category": "Hebrew",
    "definition": "an Arvadite or citizen of Arvad (KJV: Arvadite.)",
    "transliteration": "אַרְוָדִי",
    "references": [
      "H721"
    ]
  },
  {
    "term": "Rvdy",
    "category": "Hebrew",
    "definition": "an Arodite or descendant of Arod (KJV: Arodi, Arodites.)",
    "transliteration": "אֲרוֹדִי",
    "references": [
      "H722"
    ]
  },
  {
    "term": "Rvh",
    "category": "Hebrew",
    "definition": "a herding-place for an animal (KJV: stall.)",
    "transliteration": "אֻרְוָה",
    "references": [
      "H723"
    ]
  },
  {
    "term": "Rvkh",
    "category": "Hebrew",
    "definition": "wholeness (literally or figuratively) (KJV: health, made up, perfected.)",
    "transliteration": "אֲרוּכָה",
    "references": [
      "H724"
    ]
  },
  {
    "term": "Rvmh",
    "category": "Hebrew",
    "definition": "Arumah, a place in Palestine (KJV: Arumah.)",
    "transliteration": "אֲרוּמָה",
    "references": [
      "H725"
    ]
  },
  {
    "term": "Rvmy",
    "category": "Hebrew",
    "definition": "an Edomite (as in the margin) (KJV: Syrian.)",
    "transliteration": "אֲרוֹמִי",
    "references": [
      "H726"
    ]
  },
  {
    "term": "Rvn",
    "category": "Hebrew",
    "definition": "a box (KJV: ark, chest, coffin.)",
    "transliteration": "אָרוֹן",
    "references": [
      "H727"
    ]
  },
  {
    "term": "Rvnh",
    "category": "Hebrew",
    "definition": "Aravnah (or Arnijah or Ornah), a Jebusite (KJV: Araunah.)",
    "transliteration": "אֲרַוְנָה",
    "references": [
      "H728"
    ]
  },
  {
    "term": "Rz",
    "category": "Hebrew",
    "definition": "of cedar (KJV: made of cedar.)",
    "transliteration": "אָרַז",
    "references": [
      "H729"
    ]
  },
  {
    "term": "Rz",
    "category": "Hebrew",
    "definition": "a cedar tree (from the tenacity of its roots) (KJV: cedar (tree).)",
    "transliteration": "אֶרֶז",
    "references": [
      "H730"
    ]
  },
  {
    "term": "Rzh",
    "category": "Hebrew",
    "definition": "cedar wainscoating (KJV: cedar work.)",
    "transliteration": "אַרְזָה",
    "references": [
      "H731"
    ]
  },
  {
    "term": "Rch",
    "category": "Hebrew",
    "definition": "To travel (KJV: go, wayfaring (man).)",
    "transliteration": "אָרַח",
    "references": [
      "H732"
    ]
  },
  {
    "term": "Rch",
    "category": "Hebrew",
    "definition": "Arach, the name of three Israelites (KJV: Arah.)",
    "transliteration": "אָרַח",
    "references": [
      "H733"
    ]
  },
  {
    "term": "Rch",
    "category": "Hebrew",
    "definition": "a well-trodden road (literally or figuratively); also a caravan (KJV: manner, path, race, rank, traveller, troop, (by-, high-) way.)",
    "transliteration": "אֹרַח",
    "references": [
      "H734"
    ]
  },
  {
    "term": "Rch",
    "category": "Hebrew",
    "definition": "a road (KJV: way.)",
    "transliteration": "אֹרַח",
    "references": [
      "H735"
    ]
  },
  {
    "term": "Rchh",
    "category": "Hebrew",
    "definition": "a caravan (KJV: (travelling) company.)",
    "transliteration": "אֹרְחָה",
    "references": [
      "H736"
    ]
  },
  {
    "term": "Rchh",
    "category": "Hebrew",
    "definition": "a ration of food (KJV: allowance, diet, dinner, victuals.)",
    "transliteration": "אֲרֻחָה",
    "references": [
      "H737"
    ]
  },
  {
    "term": "Ry",
    "category": "Hebrew",
    "definition": "a lion (KJV: (young) lion, [phrase] pierce (from the margin).)",
    "transliteration": "אֲרִי",
    "references": [
      "H738"
    ]
  },
  {
    "term": "Ryl",
    "category": "Hebrew",
    "definition": "lion of God; i.e. heroic (KJV: lionlike men.)",
    "transliteration": "אֲרִיאֵל",
    "references": [
      "H739"
    ]
  },
  {
    "term": "Ryl",
    "category": "Hebrew",
    "definition": "Ariel, a symbolical name for Jerusalem, also the name of an Israelite (KJV: Ariel.)",
    "transliteration": "אֲרִיאֵל",
    "references": [
      "H740"
    ]
  },
  {
    "term": "Ryl",
    "category": "Hebrew",
    "definition": "the altar of the temple (KJV: altar.)",
    "transliteration": "אֲרִאֵיל",
    "references": [
      "H741"
    ]
  },
  {
    "term": "Rydy",
    "category": "Hebrew",
    "definition": "Aridai, a son of Haman (KJV: Aridai.)",
    "transliteration": "אֲרִידַי",
    "references": [
      "H742"
    ]
  },
  {
    "term": "Rydt",
    "category": "Hebrew",
    "definition": "Aridatha, a son of Haman (KJV: Aridatha.)",
    "transliteration": "אֲרִידָתָא",
    "references": [
      "H743"
    ]
  },
  {
    "term": "Ryh",
    "category": "Hebrew",
    "definition": "{a lion} (KJV: lion.)",
    "transliteration": "אַרְיֵה",
    "references": [
      "H744"
    ]
  },
  {
    "term": "Ryh",
    "category": "Hebrew",
    "definition": "Arjeh, an Israelite (KJV: Arieh.)",
    "transliteration": "אַרְיֵה",
    "references": [
      "H745"
    ]
  },
  {
    "term": "Ryvk",
    "category": "Hebrew",
    "definition": "Arjok, the name of two Babylonians (KJV: Arioch.)",
    "transliteration": "אֲרְיוֹךְ",
    "references": [
      "H746"
    ]
  },
  {
    "term": "Rysy",
    "category": "Hebrew",
    "definition": "Arisai, a son of Haman (KJV: Arisai.)",
    "transliteration": "אֲרִיסַי",
    "references": [
      "H747"
    ]
  },
  {
    "term": "Rk",
    "category": "Hebrew",
    "definition": "To be (causative, make) long (literally or figuratively) (KJV: defer, draw out, lengthen, (be, become, make, pro-) long, [phrase] (out-, over-) live, tarry (long).)",
    "transliteration": "אָרַךְ",
    "references": [
      "H748"
    ]
  },
  {
    "term": "Rk",
    "category": "Hebrew",
    "definition": "To suit (KJV: be meet.)",
    "transliteration": "אֲרַךְ",
    "references": [
      "H749"
    ]
  },
  {
    "term": "Rk",
    "category": "Hebrew",
    "definition": "long (KJV: long(-suffering, -winged), patient, slow (to anger).)",
    "transliteration": "אָרֵךְ",
    "references": [
      "H750"
    ]
  },
  {
    "term": "Rk",
    "category": "Hebrew",
    "definition": "Erek, a place in Babylon (KJV: Erech.)",
    "transliteration": "אֶרֶךְ",
    "references": [
      "H751"
    ]
  },
  {
    "term": "Rk",
    "category": "Hebrew",
    "definition": "long (KJV: long.)",
    "transliteration": "אָרֹךְ",
    "references": [
      "H752"
    ]
  },
  {
    "term": "Rk",
    "category": "Hebrew",
    "definition": "length (KJV: [phrase] forever, length, long.)",
    "transliteration": "אֹרֶךְ",
    "references": [
      "H753"
    ]
  },
  {
    "term": "Rk",
    "category": "Hebrew",
    "definition": "length (KJV: lengthening, prolonged.)",
    "transliteration": "אַרְכָּא",
    "references": [
      "H754"
    ]
  },
  {
    "term": "Rkbh",
    "category": "Hebrew",
    "definition": "the knee (KJV: knee.)",
    "transliteration": "אַרְכֻבָה",
    "references": [
      "H755"
    ]
  },
  {
    "term": "Rkvy",
    "category": "Hebrew",
    "definition": "an Arkevite (collectively) or native of Erek (KJV: Archevite.)",
    "transliteration": "אַרְכְּוַי",
    "references": [
      "H756"
    ]
  },
  {
    "term": "Rky",
    "category": "Hebrew",
    "definition": "an Arkite or native of Erek (KJV: Archi, Archite.)",
    "transliteration": "אַרְכִּי",
    "references": [
      "H757"
    ]
  },
  {
    "term": "Rm",
    "category": "Hebrew",
    "definition": "Aram or Syria, and its inhabitants; also the name of the son of Shem, a grandson of Nahor, and of an Israelite (KJV: Aram, Mesopotamia, Syria, Syrians.)",
    "transliteration": "אֲרָם",
    "references": [
      "H758"
    ]
  },
  {
    "term": "Rmvn",
    "category": "Hebrew",
    "definition": "a citadel (from its height) (KJV: castle, palace. Compare H2038 (הַרְמוֹן).)",
    "transliteration": "אַרְמוֹן",
    "references": [
      "H759"
    ]
  },
  {
    "term": "Rmtsvbh",
    "category": "Hebrew",
    "definition": "Aram of Tsoba (or Coele-Syria) (KJV: Aram-zobah.)",
    "transliteration": "אֲרַם צוֹבָה",
    "references": [
      "H760"
    ]
  },
  {
    "term": "Rmy",
    "category": "Hebrew",
    "definition": "an Aramite or Aramaean (KJV: Syrian, Aramitess.)",
    "transliteration": "אֲרַמִּי",
    "references": [
      "H761"
    ]
  },
  {
    "term": "Rmyt",
    "category": "Hebrew",
    "definition": "(only adverbial) in Aramean (KJV: in the Syrian language (tongue), in Syriac.)",
    "transliteration": "אֲרָמִית",
    "references": [
      "H762"
    ]
  },
  {
    "term": "Rmnhrym",
    "category": "Hebrew",
    "definition": "Aram of (the) two rivers (Euphrates and Tigris) or Mesopotamia (KJV: Aham-naharaim, Mesopotamia.)",
    "transliteration": "אֲרַם נַהֲרַיִם",
    "references": [
      "H763"
    ]
  },
  {
    "term": "Rmny",
    "category": "Hebrew",
    "definition": "Armoni, an Israelite (KJV: Armoni.)",
    "transliteration": "אַרְמֹנִי",
    "references": [
      "H764"
    ]
  },
  {
    "term": "Rn",
    "category": "Hebrew",
    "definition": "Aran, an Edomite (KJV: Aran.)",
    "transliteration": "אֲרָן",
    "references": [
      "H765"
    ]
  },
  {
    "term": "Rn",
    "category": "Hebrew",
    "definition": "the ash tree (from its toughness) (KJV: ash.)",
    "transliteration": "אֹרֶן",
    "references": [
      "H766"
    ]
  },
  {
    "term": "Rn",
    "category": "Hebrew",
    "definition": "Oren, an Israelite (KJV: Oren.)",
    "transliteration": "אֹרֶן",
    "references": [
      "H767"
    ]
  },
  {
    "term": "Rnbt",
    "category": "Hebrew",
    "definition": "the hare (KJV: hare.)",
    "transliteration": "אַרְנֶבֶת",
    "references": [
      "H768"
    ]
  },
  {
    "term": "Rnvn",
    "category": "Hebrew",
    "definition": "the Arnon, a river east of the Jordan, also its territory (KJV: Arnon.)",
    "transliteration": "אַרְנוֹן",
    "references": [
      "H769"
    ]
  },
  {
    "term": "Rnn",
    "category": "Hebrew",
    "definition": "Arnan, an Israelite (KJV: Arnan.)",
    "transliteration": "אַרְנָן",
    "references": [
      "H770"
    ]
  },
  {
    "term": "Rnn",
    "category": "Hebrew",
    "definition": "Ornan, a Jebusite (KJV: Ornan. See H728 (אֲרַוְנָה).)",
    "transliteration": "אׇרְנָן",
    "references": [
      "H771"
    ]
  },
  {
    "term": "R",
    "category": "Hebrew",
    "definition": "the earth; by implication (figuratively) low (KJV: earth, interior.)",
    "transliteration": "אֲרַע",
    "references": [
      "H772"
    ]
  },
  {
    "term": "Ryt",
    "category": "Hebrew",
    "definition": "the bottom (KJV: bottom.)",
    "transliteration": "אַרְעִית",
    "references": [
      "H773"
    ]
  },
  {
    "term": "Rpd",
    "category": "Hebrew",
    "definition": "Arpad, a place in Syria (KJV: Arpad, Arphad.)",
    "transliteration": "אַרְפָּד",
    "references": [
      "H774"
    ]
  },
  {
    "term": "Rpkshd",
    "category": "Hebrew",
    "definition": "Arpakshad, a son of Noah; also the region settled by him (KJV: Arphaxad.)",
    "transliteration": "אַרְפַּכְשַׁד",
    "references": [
      "H775"
    ]
  },
  {
    "term": "Rts",
    "category": "Hebrew",
    "definition": "the earth (at large, or partitively a land) (KJV: [idiom] common, country, earth, field, ground, land, [idiom] natins, way, [phrase] wilderness, world.)",
    "transliteration": "אֶרֶץ",
    "references": [
      "H776"
    ]
  },
  {
    "term": "Rts",
    "category": "Hebrew",
    "definition": "Artsa, an Israelite (KJV: Arza.)",
    "transliteration": "אַרְצָא",
    "references": [
      "H777"
    ]
  },
  {
    "term": "Rq",
    "category": "Hebrew",
    "definition": "the earth (KJV: earth.)",
    "transliteration": "אֲרַק",
    "references": [
      "H778"
    ]
  },
  {
    "term": "Rr",
    "category": "Hebrew",
    "definition": "To execrate (KJV: [idiom] bitterly curse.)",
    "transliteration": "אָרַר",
    "references": [
      "H779"
    ]
  },
  {
    "term": "Rrt",
    "category": "Hebrew",
    "definition": "Ararat (or rather Armenia) (KJV: Ararat, Armenia.)",
    "transliteration": "אֲרָרַט",
    "references": [
      "H780"
    ]
  },
  {
    "term": "Rsh",
    "category": "Hebrew",
    "definition": "To engage for matrimony (KJV: betroth, espouse.)",
    "transliteration": "אָרַשׂ",
    "references": [
      "H781"
    ]
  },
  {
    "term": "Rsht",
    "category": "Hebrew",
    "definition": "a longing for (KJV: request.)",
    "transliteration": "אֲרֶשֶׁת",
    "references": [
      "H782"
    ]
  },
  {
    "term": "Rtchshsht",
    "category": "Hebrew",
    "definition": "Artachshasta (or Artaxerxes), a title (rather than name) of several Persian kings (KJV: Artaxerxes.)",
    "transliteration": "אַרְתַּחְשַׁשְׁתָּא",
    "references": [
      "H783"
    ]
  },
  {
    "term": "Sh",
    "category": "Hebrew",
    "definition": "fire (literally or figuratively) (KJV: burning, fiery, fire, flaming, hot.)",
    "transliteration": "אֵשׁ",
    "references": [
      "H784"
    ]
  },
  {
    "term": "Sh",
    "category": "Hebrew",
    "definition": "{fire (literally or figuratively)} (KJV: flame.)",
    "transliteration": "אֵשׁ",
    "references": [
      "H785"
    ]
  },
  {
    "term": "Sh",
    "category": "Hebrew",
    "definition": "entity, used only adverbially, there is or are (KJV: are there, none can. Compare H3426 (יֵשׁ).)",
    "transliteration": "אִשׁ",
    "references": [
      "H786"
    ]
  },
  {
    "term": "Sh",
    "category": "Hebrew",
    "definition": "a foundation (KJV: foundation.)",
    "transliteration": "אֹשׁ",
    "references": [
      "H787"
    ]
  },
  {
    "term": "Shbl",
    "category": "Hebrew",
    "definition": "Ashbel, an Israelite (KJV: Ashbel.)",
    "transliteration": "אַשְׁבֵּל",
    "references": [
      "H788"
    ]
  },
  {
    "term": "Shbly",
    "category": "Hebrew",
    "definition": "an Ashbelite (collectively) or descendant of Ashbel (KJV: Ashbelites.)",
    "transliteration": "אַשְׁבֵּלִי",
    "references": [
      "H789"
    ]
  },
  {
    "term": "Shbn",
    "category": "Hebrew",
    "definition": "Eshban, an Idumaean (KJV: Eshban.)",
    "transliteration": "אֶשְׁבָּן",
    "references": [
      "H790"
    ]
  },
  {
    "term": "Shb",
    "category": "Hebrew",
    "definition": "Asbea, an Israelite (KJV: Ashbea.)",
    "transliteration": "אַשְׁבֵּעַ",
    "references": [
      "H791"
    ]
  },
  {
    "term": "Shbl",
    "category": "Hebrew",
    "definition": "Eshbaal (or Ishbosheth), a son of Saul (KJV: Eshbaal.)",
    "transliteration": "אֶשְׁבַּעַל",
    "references": [
      "H792"
    ]
  },
  {
    "term": "Shd",
    "category": "Hebrew",
    "definition": "an outpouring (KJV: stream.)",
    "transliteration": "אֶשֶׁד",
    "references": [
      "H793"
    ]
  },
  {
    "term": "Shdh",
    "category": "Hebrew",
    "definition": "a ravine (KJV: springs.)",
    "transliteration": "אֲשֵׁדָה",
    "references": [
      "H794"
    ]
  },
  {
    "term": "Shdvd",
    "category": "Hebrew",
    "definition": "Ashdod, a place in Palestine (KJV: Ahdod.)",
    "transliteration": "אַשְׁדּוֹד",
    "references": [
      "H795"
    ]
  },
  {
    "term": "Shdvdy",
    "category": "Hebrew",
    "definition": "an Ashdodite (often collectively) or inhabitant of Asdod (KJV: Ashdodites, of Ashdod.)",
    "transliteration": "אַשְׁדּוֹדִי",
    "references": [
      "H796"
    ]
  },
  {
    "term": "Shdvdyt",
    "category": "Hebrew",
    "definition": "(only adverb) in the language of Ashdod (KJV: in the speech of Ashdod.)",
    "transliteration": "אַשְׁדּוֹדִית",
    "references": [
      "H797"
    ]
  },
  {
    "term": "Shdvthpsgh",
    "category": "Hebrew",
    "definition": "Ashdoth-Pisgah, a place east of the Jordan (KJV: Ashdoth-pisgah.)",
    "transliteration": "אַשְׁדּוֹת הַפִּסְגָּה",
    "references": [
      "H798"
    ]
  },
  {
    "term": "Shdt",
    "category": "Hebrew",
    "definition": "a fire-law (KJV: fiery law.)",
    "transliteration": "אֶשְׁדָּת",
    "references": [
      "H799"
    ]
  },
  {
    "term": "Shh",
    "category": "Hebrew",
    "definition": "fire (KJV: fire.)",
    "transliteration": "אֶשָּׁה",
    "references": [
      "H800"
    ]
  }
];

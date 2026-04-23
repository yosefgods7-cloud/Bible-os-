import fs from 'fs';
import https from 'https';

const getJSONFromJS = (jsStr, varName) => {
  const prefix = "var " + varName + " = ";
  const start = jsStr.indexOf(prefix) + prefix.length;
  const jsonStr = jsStr.substring(start).trim().replace(/;$/, '');
  return JSON.parse(jsonStr);
};

const fetchData = (url) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
};

const greekMap = {'α':'a','ά':'a','β':'b','γ':'g','δ':'d','ε':'e','έ':'e','ζ':'z','η':'e','ή':'e','θ':'th','ι':'i','ί':'i','ϊ':'i','κ':'k','λ':'l','μ':'m','ν':'n','ξ':'x','ο':'o','ό':'o','π':'p','ρ':'r','σ':'s','ς':'s','τ':'t','υ':'y','ύ':'y','ϋ':'y','φ':'ph','χ':'ch','ψ':'ps','ω':'o','ώ':'o'};
const hebrewMap = {'א':'','ב':'b','ג':'g','ד':'d','ה':'h','ו':'v','ז':'z','ח':'ch','ט':'t','י':'y','כ':'k','ך':'k','ל':'l','מ':'m','ם':'m','נ':'n','ן':'n','ס':'s','ע':'','פ':'p','ף':'p','צ':'ts','ץ':'ts','ק':'q','ר':'r','ש':'sh','ת':'t'};
const transliterate = (text, map) => {
  if (!text) return "";
  let res = "";
  for (let char of text) {
    if (map[char] !== undefined) res += map[char];
  }
  return res ? res.charAt(0).toUpperCase() + res.slice(1) : "";
};

async function buildDictionary() {
  const greekJs = await fetchData('https://raw.githubusercontent.com/markomanninen/strongs3/master/data_original/strongs-greek-dictionary.js');
  const greekDict = getJSONFromJS(greekJs, 'strongsGreekDictionary');

  const hebrewJs = await fetchData('https://raw.githubusercontent.com/markomanninen/strongs3/master/data_original/strongs-hebrew-dictionary.js');
  const hebrewDict = getJSONFromJS(hebrewJs, 'strongsHebrewDictionary');

  const entries = [];
  const greekKeys = Object.keys(greekDict).slice(0, 800);
  for (const k of greekKeys) {
    const item = greekDict[k];
    const englishName = transliterate(item.lemma, greekMap) || item.lemma;
    entries.push({
      term: englishName,
      category: 'Greek',
      definition: (item.strongs_def || "").trim().replace(/^to /, 'To ') + (item.kjv_def ? ' (KJV: ' + item.kjv_def + ')' : ''),
      transliteration: item.lemma,
      references: [k]
    });
  }

  const hebrewKeys = Object.keys(hebrewDict).slice(0, 800);
  for (const k of hebrewKeys) {
    const item = hebrewDict[k];
    const englishName = transliterate(item.lemma, hebrewMap) || item.lemma;
    entries.push({
      term: englishName,
      category: 'Hebrew',
      definition: (item.strongs_def || "").trim().replace(/^to /, 'To ') + (item.kjv_def ? ' (KJV: ' + item.kjv_def + ')' : ''),
      transliteration: item.lemma,
      references: [k]
    });
  }

  const currentTs = fs.readFileSync('src/data/dictionary.ts', 'utf-8');
  const match = currentTs.match(/export const OFFLINE_DICTIONARY: OfflineDictionaryEntry\[\] = (\[[\s\S]*?\]);/);
  
  let baseEntries = [];
  if (match) {
    eval("baseEntries = " + match[1]);
  }
  const first36 = baseEntries.slice(0, 36);
  const finalEntries = [...first36, ...entries];
  
  let output = "export interface OfflineDictionaryEntry {\n  term: string;\n  category: 'Aramaic' | 'Greek' | 'Hebrew' | 'Location' | 'Tradition' | 'History' | 'General';\n  definition: string;\n  transliteration?: string;\n  references?: string[];\n}\n\nexport const OFFLINE_DICTIONARY: OfflineDictionaryEntry[] = ";
  output += JSON.stringify(finalEntries, null, 2) + ";\n";

  fs.writeFileSync('src/data/dictionary.ts', output);
  console.log("Dictionary built successfully with " + finalEntries.length + " entries!");
}

buildDictionary().catch(console.error);

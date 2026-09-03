export const player = {
  name: "Caalaa Bultum",
  initials: "CB",
  level: 5,
  title: "Oda Explorer",
  xp: 1302,
  nextLevelXp: 1800,
  streak: 12,
  puzzlesCompleted: 47,
  badges: 9,
  rank: 7,
  region: "Bishoftu",
};

export const featuredQuest = {
  title: "Hora Harsadi Pilgrimage & Irreechaa Quest",
  subtitle:
    "Walk the thanksgiving route to Hora Harsadi, learn the Irreechaa blessing chants, and unlock the Gadaa Elder badge.",
  progress: 68,
  chapter: "Chapter 4 of 6 — Blessings at the Lakeshore",
  reward: "320 XP + Irreechaa Ceremonial Badge",
};

export const quickStats = [
  { label: "Daily streak", value: "12 days", hint: "Best: 21 days" },
  { label: "Vocabulary puzzles", value: "47", hint: "+3 today" },
  { label: "Badges earned", value: "9", hint: "2 rare" },
  { label: "National rank", value: "#7", hint: "Up 4 places" },
];

export const modules = [
  {
    id: "vocabulary",
    name: "Afan Oromo Vocabulary Puzzles",
    blurb:
      "Word-builder cards, daily trivia and pronunciation drills that grow your everyday Afan Oromo.",
    stat: "18 puzzle packs",
    to: "/quests" as const,
  },
  {
    id: "tourism",
    name: "Oromia Tourism Exploration Map",
    blurb:
      "Travel Sof Omar Caves, Bishoftu crater lakes and Bale Mountains with click-to-play location quizzes.",
    stat: "24 destinations",
    to: "/map" as const,
  },
  {
    id: "heritage",
    name: "Gadaa Heritage & Cultural History",
    blurb:
      "Age-grades, Odaa assembly trees and living tradition explained through story chapters.",
    stat: "6 heritage chapters",
    to: "/heritage" as const,
  },
];

export const puzzles = [
  {
    prompt: "Welcome / greeting used across Oromia",
    answer: "BAGA NAGAAN DHUFTAN",
    scrambled: ["NAGAAN", "BAGA", "DHUFTAN"],
    xp: 40,
  },
  {
    prompt: "How do you say “thank you”?",
    answer: "GALATOOMAA",
    scrambled: ["TOO", "GA", "MAA", "LA"],
    xp: 25,
  },
  {
    prompt: "Word for “water” — central to Irreechaa",
    answer: "BISHAAN",
    scrambled: ["SHAAN", "BI"],
    xp: 20,
  },
  {
    prompt: "Word for “peace”, the Gadaa ideal",
    answer: "NAGAA",
    scrambled: ["GAA", "NA"],
    xp: 20,
  },
];

export const trivia = [
  {
    question: "How many years does one Gadaa leadership term last?",
    options: ["4 years", "8 years", "12 years"],
    answer: 1,
  },
  {
    question: "Irreechaa at Hora Harsadi is celebrated in which town?",
    options: ["Adama", "Jimma", "Bishoftu"],
    answer: 2,
  },
  {
    question: "Odaa Nabee served historically as a…",
    options: ["Marketplace", "Gadaa assembly ground", "Royal palace"],
    answer: 1,
  },
];

export const destinations = [
  {
    id: "sof-omar",
    name: "Sof Omar Caves",
    zone: "Bale",
    x: 72,
    y: 68,
    tag: "Sacred limestone labyrinth",
    quiz: "Which river carved the Sof Omar cave system?",
    options: ["Web (Weyib) River", "Awash River", "Gibe River"],
    answer: 0,
    xp: 60,
  },
  {
    id: "bishoftu",
    name: "Kuriftu & Bishoftu Lakes",
    zone: "East Shewa",
    x: 52,
    y: 40,
    tag: "Seven crater lakes",
    quiz: "Hora Harsadi hosts which national thanksgiving festival?",
    options: ["Ashenda", "Irreechaa", "Fichee"],
    answer: 1,
    xp: 45,
  },
  {
    id: "bale",
    name: "Bale Mountains",
    zone: "Bale",
    x: 66,
    y: 78,
    tag: "Home of the Ethiopian wolf",
    quiz: "Sanetti Plateau in Bale is famous for which endemic animal?",
    options: ["Gelada baboon", "Ethiopian wolf", "Walia ibex"],
    answer: 1,
    xp: 55,
  },
  {
    id: "odaa-nabee",
    name: "Odaa Nabee",
    zone: "Finfinnee area",
    x: 47,
    y: 33,
    tag: "Historic Gadaa assembly tree",
    quiz: "Odaa Nabee was the assembly ground of which confederacy?",
    options: ["Tuulama Oromo", "Arsi Oromo", "Mecha Oromo"],
    answer: 0,
    xp: 50,
  },
  {
    id: "jimma",
    name: "Jimma & Coffee Forests",
    zone: "Jimma",
    x: 26,
    y: 58,
    tag: "Birthplace of coffee culture",
    quiz: "The Afan Oromo word buna refers to…",
    options: ["Honey", "Coffee", "Milk"],
    answer: 1,
    xp: 40,
  },
  {
    id: "wenchi",
    name: "Wenchi Crater Lake",
    zone: "West Shewa",
    x: 38,
    y: 42,
    tag: "Island monastery & hot springs",
    quiz: "Wenchi is best known as which type of lake?",
    options: ["Rift valley lake", "Crater lake", "Man-made reservoir"],
    answer: 1,
    xp: 45,
  },
];

export const heritageChapters = [
  {
    title: "The Gadaa System",
    body: "An indigenous democratic order where power rotates every eight years across generational age-grades, recognized by UNESCO as intangible cultural heritage.",
    meta: "Chapter 1",
  },
  {
    title: "Age-Grades (Sadeetta)",
    body: "From Dabballee childhood through Raaba, Doorii and Luba leadership to Yuba elderhood — each grade carries duties, learning and rites of passage.",
    meta: "Chapter 2",
  },
  {
    title: "Odaa Assembly Trees",
    body: "Odaa Nabee, Odaa Bultum, Odaa Bisil and Odaa Roobaa hosted the Caffee assemblies where laws (seera) were proclaimed and revised.",
    meta: "Chapter 3",
  },
  {
    title: "Irreechaa Thanksgiving",
    body: "At the turn of the rainy season, millions gather at Hora Harsadi with fresh grass and flowers to give thanks to Waaqa for life and abundance.",
    meta: "Chapter 4",
  },
  {
    title: "Safuu & Moral Order",
    body: "Safuu is the ethical compass of Oromo life — balance between people, nature and Waaqa, upheld through the Gadaa laws.",
    meta: "Chapter 5",
  },
  {
    title: "Living Craft & Song",
    body: "Weaving, Geerarsa songs, Shaggooyyee dance and coffee ceremony carry Gadaa values into everyday modern Oromia.",
    meta: "Chapter 6",
  },
];

export const regions = ["All Oromia", "Finfinnee", "Bishoftu", "Adama", "Jimma"] as const;

export const leaderboard = [
  { rank: 1, name: "Hawi Tolera", region: "Finfinnee", xp: 4820, level: 12, badge: "Abbaa Gadaa" },
  { rank: 2, name: "Lensa Gemechu", region: "Adama", xp: 4415, level: 11, badge: "Odaa Keeper" },
  { rank: 3, name: "Boona Dhaba", region: "Jimma", xp: 4102, level: 11, badge: "Buna Master" },
  { rank: 4, name: "Meti Abdi", region: "Finfinnee", xp: 3870, level: 10, badge: "Irreechaa Guide" },
  { rank: 5, name: "Gadisa Ifa", region: "Bishoftu", xp: 3540, level: 10, badge: "Lake Walker" },
  { rank: 6, name: "Sifan Roba", region: "Adama", xp: 3320, level: 9, badge: "Bale Ranger" },
  { rank: 7, name: "Caalaa Bultum", region: "Bishoftu", xp: 1302, level: 5, badge: "Oda Explorer" },
  { rank: 8, name: "Ayantu Kebede", region: "Jimma", xp: 1240, level: 5, badge: "Word Builder" },
  { rank: 9, name: "Tolasa Nagawo", region: "Finfinnee", xp: 1180, level: 4, badge: "Storyteller" },
  { rank: 10, name: "Kena Wako", region: "Bishoftu", xp: 1105, level: 4, badge: "Trail Scout" },
];

export const rewards = [
  {
    name: "Irreechaa Ceremonial Badge",
    kind: "Digital badge",
    cost: 600,
    note: "Animated profile badge with gold Irreechaa crest.",
  },
  {
    name: "Kuriftu Resort Day-Pass Voucher",
    kind: "Travel voucher",
    cost: 2400,
    note: "Redeemable at partner resorts in Bishoftu.",
  },
  {
    name: "Afan Oromo Fluency Certificate",
    kind: "Certificate",
    cost: 1500,
    note: "OCTB-signed digital certificate, level A2.",
  },
  {
    name: "Bale Mountains Guided Trek",
    kind: "Travel voucher",
    cost: 5200,
    note: "Two-day guided trek with a local ranger.",
  },
  {
    name: "Odaa Nabee Heritage Badge",
    kind: "Digital badge",
    cost: 850,
    note: "Awarded for completing the Gadaa heritage track.",
  },
  {
    name: "Sof Omar Caves Entry Pass",
    kind: "Travel voucher",
    cost: 1900,
    note: "Single entry with cultural guide included.",
  },
];

export const aiPrompts = [
  "Tell me about Irreechaa",
  "Practice Afan Oromo travel phrases",
  "History of Oda Nabee",
  "Plan a 3-day Bale Mountains trip",
];

export const aiAnswers: Record<string, string> = {
  "Tell me about Irreechaa":
    "Irreechaa is the Oromo thanksgiving festival held at the end of the rainy season. Millions gather at Hora Harsadi in Bishoftu carrying fresh grass (coqorsa) and flowers to thank Waaqa for life, peace and harvest. Say “Irreecha baga geessan!” to greet fellow celebrants.",
  "Practice Afan Oromo travel phrases":
    "Try these: Akkam? (How are you?) · Maqaan kee eenyu? (What is your name?) · Meeqa? (How much?) · Bishaan barbaada (I need water) · Galatoomaa (Thank you). Repeat each aloud, then tap Quests to unlock the travel phrase puzzle pack.",
  "History of Oda Nabee":
    "Odaa Nabee, near Dukem, was the Caffee assembly ground of the Tuulama Oromo. Under its sycamore canopy the Abbaa Gadaa proclaimed seera (laws) every eight years — a living parliament older than many written constitutions.",
  "Plan a 3-day Bale Mountains trip":
    "Day 1: Dinsho headquarters, mountain nyala at dusk. Day 2: Sanetti Plateau for the Ethiopian wolf, then the Harenna cloud forest. Day 3: Sof Omar Caves on the way back. Pack warm layers — nights on the plateau drop near freezing.",
};

export function aiReply(question: string) {
  const hit = Object.keys(aiAnswers).find((k) =>
    question.toLowerCase().includes(k.toLowerCase().slice(0, 12)),
  );
  if (hit) return aiAnswers[hit];
  return `Aadaa AI: great question about “${question}”. In Oromo tradition, knowledge travels through the Gadaa councils. Here is the short version — explore the Heritage module for the full story, and I will quiz you on it afterwards in Afan Oromo.`;
}

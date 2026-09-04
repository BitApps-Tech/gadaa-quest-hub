export type Locale = "en" | "am" | "om";

export type AuthErrorCode = "invalid_phone" | "short_password" | "wrong_password";

export type Messages = {
  brand: { name: string; bureau: string; opening: string };
  nav: {
    dashboard: string;
    quests: string;
    map: string;
    heritage: string;
    leaderboard: string;
    aiGuide: string;
    signOut: string;
    menu: string;
    language: string;
    theme: string;
    light: string;
    dark: string;
    account: string;
    profile: string;
    myProgress: string;
    phone: string;
  };
  login: {
    title: string;
    subtitle: string;
    phone: string;
    phoneHint: string;
    password: string;
    passwordPlaceholder: string;
    showPassword: string;
    hidePassword: string;
    submit: string;
    submitting: string;
    newNumber: string;
    errors: Record<AuthErrorCode, string>;
  };
  common: {
    level: string;
    you: string;
    goHome: string;
    tryAgain: string;
    pageNotFound: string;
    pageNotFoundBody: string;
    pageFailed: string;
    pageFailedBody: string;
  };
  dashboard: {
    featured: string;
    questTitle: string;
    questSubtitle: string;
    chapter: string;
    complete: string;
    continueQuest: string;
    reward: string;
    rewardValue: string;
    progression: string;
    xpToLevel: string;
    dayStreak: string;
    nationalRank: string;
    modulesTitle: string;
    modulesIntro: string;
    heritageLibrary: string;
    source: string;
    playerTitle: string;
    stats: {
      streak: { label: string; value: string; hint: string };
      puzzles: { label: string; value: string; hint: string };
      badges: { label: string; value: string; hint: string };
      rank: { label: string; value: string; hint: string };
    };
    modules: Record<string, { name: string; blurb: string; stat: string }>;
  };
  progress: {
    eyebrow: string;
    title: string;
    intro: string;
    region: string;
    tracks: string;
    badges: string;
    earned: string;
    locked: string;
    continue: string;
    ofTotal: string;
    featured: string;
  };
  quests: {
    eyebrow: string;
    title: string;
    intro: string;
    wordBuilder: string;
    trivia: string;
    tapTiles: string;
    solved: string;
    reset: string;
    source: string;
    puzzles: Record<string, string>;
    triviaItems: { category: string; question: string; options: [string, string, string] }[];
  };
  map: {
    eyebrow: string;
    title: string;
    intro: string;
    correct: string;
    wrong: string;
    source: string;
    search: string;
    allTypes: string;
    sitesCount: string;
    openFullMap: string;
    panHint: string;
    noResults: string;
    types: Record<string, string>;
    places: Record<
      string,
      { name: string; zone: string; tag: string; quiz: string; options: [string, string, string] }
    >;
  };
  heritage: {
    eyebrow: string;
    title: string;
    intro: string;
    source: string;
    open: string;
    related: string;
    viewOnMap: string;
    chapters: { id: string; meta: string; title: string; body: string }[];
  };
  leaderboard: {
    eyebrow: string;
    title: string;
    intro: string;
    standings: string;
    player: string;
    region: string;
    titleCol: string;
    rankNote: string;
    store: string;
    redeem: string;
    locked: string;
    regions: Record<string, string>;
    badges: Record<string, string>;
    rewards: Record<string, { name: string; kind: string; note: string }>;
  };
  ai: {
    eyebrow: string;
    title: string;
    intro: string;
    quickPrompts: string;
    tapChip: string;
    trained: string;
    greeting: string;
    subtitle: string;
    placeholder: string;
    send: string;
    open: string;
    fallback: string;
    prompts: { id: string; text: string }[];
    answers: Record<string, string>;
  };
};

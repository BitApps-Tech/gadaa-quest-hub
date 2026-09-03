import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Flame, Map, Play, Trophy } from "lucide-react";
import { featuredQuest, modules, player, quickStats } from "@/lib/gadaa-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gadaa Quest — Oromia Cultural, Language & Tourism Game" },
      {
        name: "description",
        content:
          "Play Gadaa Quest: Afan Oromo vocabulary puzzles, an interactive Oromia tourism map, Gadaa heritage lessons and an AI cultural guide.",
      },
      { property: "og:title", content: "Gadaa Quest — Explore Oromia, Level Up" },
      {
        property: "og:description",
        content:
          "Ethiopia's AI-driven Oromia cultural, language and tourism gaming ecosystem by the Oromia Culture and Tourism Bureau.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Dashboard,
});

function Dashboard() {
  const xpPct = Math.round((player.xp / player.nextLevelXp) * 100);

  return (
    <main className="animate-rise mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
      <section
        className="glass shadow-panel relative overflow-hidden rounded-3xl p-6 sm:p-10"
        style={{ backgroundImage: "var(--gradient-hero)" }}
      >
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
          <div className="min-w-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-[11px] font-semibold tracking-widest text-gold uppercase">
              Featured Quest
            </span>
            <h1 className="mt-4 text-3xl leading-tight font-bold sm:text-5xl">
              {featuredQuest.title}
            </h1>
            <p className="mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
              {featuredQuest.subtitle}
            </p>

            <div className="mt-7 max-w-xl">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{featuredQuest.chapter}</span>
                <span className="font-semibold text-gold">
                  {featuredQuest.progress}% complete
                </span>
              </div>
              <div className="mt-2 h-3 overflow-hidden rounded-full bg-secondary">
                <div
                  className="h-full rounded-full transition-[width] duration-1000 ease-out"
                  style={{
                    width: `${featuredQuest.progress}%`,
                    background: "var(--gradient-gold)",
                  }}
                />
              </div>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                to="/quests"
                className="shadow-glow inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                <Play className="h-4 w-4" /> Continue Quest
              </Link>
              <span className="text-xs text-muted-foreground">
                Reward: {featuredQuest.reward}
              </span>
            </div>
          </div>

          <div className="glass animate-float flex flex-col justify-center rounded-2xl p-6">
            <p className="text-xs tracking-widest text-muted-foreground uppercase">
              Your progression
            </p>
            <p className="mt-2 font-display text-2xl font-bold">
              Level {player.level}: {player.title}
            </p>
            <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-secondary">
              <div
                className="h-full rounded-full bg-primary"
                style={{ width: `${xpPct}%` }}
              />
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              {player.xp.toLocaleString()} / {player.nextLevelXp.toLocaleString()} XP to
              Level {player.level + 1}
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3 text-center">
              <div className="rounded-xl bg-secondary/70 p-3">
                <Flame className="mx-auto h-4 w-4 text-primary" />
                <p className="mt-1 text-lg font-bold">{player.streak}</p>
                <p className="text-[11px] text-muted-foreground">Day streak</p>
              </div>
              <div className="rounded-xl bg-secondary/70 p-3">
                <Trophy className="mx-auto h-4 w-4 text-gold" />
                <p className="mt-1 text-lg font-bold">#{player.rank}</p>
                <p className="text-[11px] text-muted-foreground">National rank</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {quickStats.map((s) => (
          <div key={s.label} className="glass hover-lift rounded-2xl p-5">
            <p className="text-xs tracking-wide text-muted-foreground uppercase">
              {s.label}
            </p>
            <p className="mt-2 font-display text-2xl font-bold">{s.value}</p>
            <p className="text-[11px] text-gold">{s.hint}</p>
          </div>
        ))}
      </section>

      <section className="mt-12">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
          <div className="min-w-0">
            <h2 className="text-2xl font-bold sm:text-3xl">Core game modules</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Three tracks, one journey through Oromia.
            </p>
          </div>
          <Link
            to="/heritage"
            className="hidden items-center gap-1 text-sm font-medium text-gold sm:inline-flex"
          >
            Heritage library <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          {modules.map((m) => (
            <Link
              key={m.id}
              to={m.to}
              className="glass hover-lift group relative overflow-hidden rounded-2xl p-6"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/40">
                <Map className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-bold">{m.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{m.blurb}</p>
              <p className="mt-5 flex items-center justify-between text-xs font-semibold text-gold">
                {m.stat}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

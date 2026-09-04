import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Flame, Map, Play, Trophy } from "lucide-react";
import { featuredQuest, moduleIds, moduleLinks, octbSourceUrl, player } from "@/lib/gadaa-data";
import { fill, useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [{ title: "Gadaa Quest" }],
  }),
  component: Dashboard,
});

function Dashboard() {
  const { t } = useI18n();
  const xpPct = Math.round((player.xp / player.nextLevelXp) * 100);
  const stats = [t.dashboard.stats.streak, t.dashboard.stats.puzzles, t.dashboard.stats.badges, t.dashboard.stats.rank];

  return (
    <main className="animate-rise mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
      <section
        className="glass shadow-panel relative overflow-hidden rounded-3xl p-6 sm:p-10"
        style={{ backgroundImage: "var(--gradient-hero)" }}
      >
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
          <div className="min-w-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-[11px] font-semibold tracking-widest text-gold uppercase">
              {t.dashboard.featured}
            </span>
            <h1 className="mt-4 text-3xl leading-tight font-bold sm:text-5xl">
              {t.dashboard.questTitle}
            </h1>
            <p className="mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
              {t.dashboard.questSubtitle}
            </p>
            <p className="mt-2 max-w-xl text-xs text-muted-foreground">
              {t.dashboard.source}{" "}
              <a
                href={octbSourceUrl}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-gold underline-offset-2 hover:underline"
              >
                oromiatourism.gov.et
              </a>
            </p>

            <div className="mt-7 max-w-xl">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{t.dashboard.chapter}</span>
                <span className="font-semibold text-gold">
                  {fill(t.dashboard.complete, { pct: featuredQuest.progress })}
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
                <Play className="h-4 w-4" /> {t.dashboard.continueQuest}
              </Link>
              <span className="text-xs text-muted-foreground">
                {t.dashboard.reward}: {t.dashboard.rewardValue}
              </span>
            </div>
          </div>

          <div className="glass animate-float flex flex-col justify-center rounded-2xl p-6">
            <p className="text-xs tracking-widest text-muted-foreground uppercase">
              {t.dashboard.progression}
            </p>
            <p className="mt-2 font-display text-2xl font-bold">
              {fill(t.common.level, { level: player.level, title: t.dashboard.playerTitle })}
            </p>
            <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-secondary">
              <div className="h-full rounded-full bg-primary" style={{ width: `${xpPct}%` }} />
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              {fill(t.dashboard.xpToLevel, {
                xp: player.xp.toLocaleString(),
                next: player.nextLevelXp.toLocaleString(),
                level: player.level + 1,
              })}
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3 text-center">
              <div className="rounded-xl bg-secondary/70 p-3">
                <Flame className="mx-auto h-4 w-4 text-primary" />
                <p className="mt-1 text-lg font-bold">{player.streak}</p>
                <p className="text-[11px] text-muted-foreground">{t.dashboard.dayStreak}</p>
              </div>
              <div className="rounded-xl bg-secondary/70 p-3">
                <Trophy className="mx-auto h-4 w-4 text-gold" />
                <p className="mt-1 text-lg font-bold">#{player.rank}</p>
                <p className="text-[11px] text-muted-foreground">{t.dashboard.nationalRank}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="glass hover-lift rounded-2xl p-5">
            <p className="text-xs tracking-wide text-muted-foreground uppercase">{s.label}</p>
            <p className="mt-2 font-display text-2xl font-bold">{s.value}</p>
            <p className="text-[11px] text-gold">{s.hint}</p>
          </div>
        ))}
      </section>

      <section className="mt-12">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
          <div className="min-w-0">
            <h2 className="text-2xl font-bold sm:text-3xl">{t.dashboard.modulesTitle}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{t.dashboard.modulesIntro}</p>
          </div>
          <Link
            to="/heritage"
            className="hidden items-center gap-1 text-sm font-medium text-gold sm:inline-flex"
          >
            {t.dashboard.heritageLibrary} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          {moduleIds.map((id) => {
            const m = t.dashboard.modules[id];
            if (!m) return null;
            return (
              <Link
                key={id}
                to={moduleLinks[id]}
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
            );
          })}
        </div>
      </section>
    </main>
  );
}

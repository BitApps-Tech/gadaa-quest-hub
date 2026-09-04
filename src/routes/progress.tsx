import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Flame, Lock, Sparkles, Trophy } from "lucide-react";
import { Page } from "@/components/gadaa/Page";
import {
  featuredQuest,
  moduleLinks,
  player,
  progressBadges,
  progressTracks,
} from "@/lib/gadaa-data";
import { getClientSession } from "@/lib/auth";
import { fill, useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/progress")({
  head: () => ({
    meta: [{ title: "My progress — Odaa Play" }],
  }),
  component: ProgressPage,
});

function ProgressPage() {
  const { t } = useI18n();
  const session = getClientSession();
  const xpPct = Math.min(100, Math.round((player.xp / player.nextLevelXp) * 100));
  const earnedCount = progressBadges.filter((b) => b.earned).length;
  const stats = [
    t.dashboard.stats.streak,
    t.dashboard.stats.puzzles,
    t.dashboard.stats.badges,
    t.dashboard.stats.rank,
  ];

  return (
    <Page eyebrow={t.progress.eyebrow} title={t.progress.title} intro={t.progress.intro}>
      <section className="glass shadow-panel overflow-hidden rounded-3xl p-6 sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
          <span className="grid h-20 w-20 shrink-0 place-items-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
            {player.initials}
          </span>
          <div className="min-w-0 flex-1">
            <h2 className="font-display text-2xl font-bold">{player.name}</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {fill(t.common.level, { level: player.level, title: t.dashboard.playerTitle })}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              {t.progress.region}: {t.leaderboard.regions[player.region] ?? player.region}
              {session?.phone ? ` · ${t.nav.phone}: ${session.phone}` : ""}
            </p>
            <div className="mt-4 max-w-md">
              <div className="h-2.5 overflow-hidden rounded-full bg-secondary">
                <div className="h-full rounded-full bg-primary" style={{ width: `${xpPct}%` }} />
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                {fill(t.dashboard.xpToLevel, {
                  xp: player.xp.toLocaleString(),
                  next: player.nextLevelXp.toLocaleString(),
                  level: player.level + 1,
                })}
              </p>
            </div>
          </div>
          <div className="grid w-full grid-cols-2 gap-3 sm:w-auto">
            <div className="rounded-xl bg-secondary/70 p-3 text-center">
              <Flame className="mx-auto h-4 w-4 text-primary" />
              <p className="mt-1 text-lg font-bold">{player.streak}</p>
              <p className="text-[11px] text-muted-foreground">{t.dashboard.dayStreak}</p>
            </div>
            <div className="rounded-xl bg-secondary/70 p-3 text-center">
              <Trophy className="mx-auto h-4 w-4 text-gold" />
              <p className="mt-1 text-lg font-bold">#{player.rank}</p>
              <p className="text-[11px] text-muted-foreground">{t.dashboard.nationalRank}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="glass hover-lift rounded-2xl p-5">
            <p className="text-xs tracking-wide text-muted-foreground uppercase">{s.label}</p>
            <p className="mt-2 font-display text-2xl font-bold">{s.value}</p>
            <p className="text-[11px] text-gold">{s.hint}</p>
          </div>
        ))}
      </section>

      <section>
        <h2 className="text-xl font-bold">{t.progress.featured}</h2>
        <div className="glass mt-4 rounded-2xl p-5">
          <p className="font-display text-lg font-bold">{t.dashboard.questTitle}</p>
          <p className="mt-1 text-sm text-muted-foreground">{t.dashboard.chapter}</p>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{t.dashboard.questSubtitle}</p>
          <div className="mt-4">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>{fill(t.dashboard.complete, { pct: featuredQuest.progress })}</span>
            </div>
            <div className="mt-2 h-3 overflow-hidden rounded-full bg-secondary">
              <div
                className="h-full rounded-full"
                style={{ width: `${featuredQuest.progress}%`, background: "var(--gradient-gold)" }}
              />
            </div>
          </div>
          <Link
            to="/quests"
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold"
          >
            {t.dashboard.continueQuest} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold">{t.progress.tracks}</h2>
        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          {progressTracks.map((track) => {
            const mod = t.dashboard.modules[track.id];
            const pct = Math.round((track.done / track.total) * 100);
            return (
              <div key={track.id} className="glass hover-lift rounded-2xl p-5">
                <h3 className="font-display text-lg font-bold">{mod?.name ?? track.id}</h3>
                {mod?.blurb && (
                  <p className="mt-2 text-sm text-muted-foreground">{mod.blurb}</p>
                )}
                <p className="mt-3 text-xs font-semibold text-gold">
                  {fill(t.progress.ofTotal, { done: track.done, total: track.total })} · {pct}%
                </p>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-secondary">
                  <div className="h-full rounded-full bg-primary" style={{ width: `${pct}%` }} />
                </div>
                <Link
                  to={moduleLinks[track.id]}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold"
                >
                  {t.progress.continue} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      <section>
        <div className="flex items-end justify-between gap-3">
          <h2 className="text-xl font-bold">{t.progress.badges}</h2>
          <p className="text-xs font-semibold text-gold">
            {fill(t.progress.ofTotal, { done: earnedCount, total: progressBadges.length })}
          </p>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {progressBadges.map((badge) => (
            <div
              key={badge.id}
              className={`rounded-2xl p-4 ${
                badge.earned ? "glass" : "border border-dashed border-border bg-secondary/20 opacity-70"
              }`}
            >
              <span
                className={`grid h-9 w-9 place-items-center rounded-xl ${
                  badge.earned ? "bg-gold/15 text-gold" : "bg-muted text-muted-foreground"
                }`}
              >
                {badge.earned ? <Sparkles className="h-4 w-4" /> : <Lock className="h-4 w-4" />}
              </span>
              <p className="mt-3 text-sm font-semibold">
                {t.leaderboard.badges[badge.id] ?? badge.id}
              </p>
              <p className="mt-1 text-[11px] text-muted-foreground">
                {badge.earned ? t.progress.earned : t.progress.locked}
              </p>
            </div>
          ))}
        </div>
      </section>
    </Page>
  );
}

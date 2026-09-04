import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Gift, Sparkles } from "lucide-react";
import { Page } from "@/components/gadaa/Page";
import { leaderboard, player, regionIds, rewards } from "@/lib/gadaa-data";
import { fill, useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/leaderboard")({
  head: () => ({
    meta: [{ title: "Leaderboard — Gadaa Quest" }],
  }),
  component: Leaderboard,
});

function Leaderboard() {
  const { t } = useI18n();
  const [region, setRegion] = useState<string>("all");
  const rows = leaderboard.filter((r) => region === "all" || r.region === region);

  return (
    <Page
      eyebrow={t.leaderboard.eyebrow}
      title={t.leaderboard.title}
      intro={t.leaderboard.intro}
    >
      <section>
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 sm:flex sm:justify-between">
          <h2 className="truncate text-xl font-bold">{t.leaderboard.standings}</h2>
          <div className="flex flex-wrap gap-2">
            {regionIds.map((r) => (
              <button
                key={r}
                onClick={() => setRegion(r)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                  region === r
                    ? "bg-primary text-primary-foreground"
                    : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {t.leaderboard.regions[r] ?? r}
              </button>
            ))}
          </div>
        </div>

        <div className="glass mt-5 overflow-hidden rounded-2xl">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[34rem] text-sm">
              <thead>
                <tr className="border-b border-border text-left text-[11px] tracking-widest text-muted-foreground uppercase">
                  <th className="px-4 py-3">#</th>
                  <th className="px-4 py-3">{t.leaderboard.player}</th>
                  <th className="px-4 py-3">{t.leaderboard.region}</th>
                  <th className="px-4 py-3">{t.leaderboard.titleCol}</th>
                  <th className="px-4 py-3 text-right">XP</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => {
                  const me = r.name === player.name;
                  return (
                    <tr
                      key={r.rank}
                      className={`border-b border-border/60 last:border-0 ${
                        me ? "bg-primary/12 ring-1 ring-primary/40 ring-inset" : ""
                      }`}
                    >
                      <td className="px-4 py-3 font-display font-bold text-gold">{r.rank}</td>
                      <td className="px-4 py-3 font-medium">
                        {r.name}
                        {me && (
                          <span className="ml-2 rounded-full bg-primary px-2 py-0.5 text-[10px] text-primary-foreground">
                            {t.common.you}
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">
                        {t.leaderboard.regions[r.region] ?? r.region}
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">
                        Lv{r.level} · {t.leaderboard.badges[r.badge] ?? r.badge}
                      </td>
                      <td className="px-4 py-3 text-right font-semibold">
                        {r.xp.toLocaleString()}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          {fill(t.leaderboard.rankNote, { rank: player.rank, xp: player.xp.toLocaleString() })}
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold">{t.leaderboard.store}</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {rewards.map((r) => {
            const copy = t.leaderboard.rewards[r.id];
            if (!copy) return null;
            const affordable = player.xp >= r.cost;
            return (
              <div key={r.id} className="glass hover-lift rounded-2xl p-6">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold/15 text-gold ring-1 ring-gold/40">
                  <Gift className="h-5 w-5" />
                </span>
                <p className="mt-4 text-[11px] tracking-widest text-muted-foreground uppercase">
                  {copy.kind}
                </p>
                <h3 className="mt-1 text-base font-bold">{copy.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{copy.note}</p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-sm font-semibold text-gold">
                    <Sparkles className="h-4 w-4" />
                    {r.cost.toLocaleString()} XP
                  </span>
                  <button
                    disabled={!affordable}
                    className="rounded-xl bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:bg-secondary disabled:text-muted-foreground disabled:hover:scale-100"
                  >
                    {affordable ? t.leaderboard.redeem : t.leaderboard.locked}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Page>
  );
}

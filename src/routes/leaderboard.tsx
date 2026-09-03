import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Gift, Sparkles } from "lucide-react";
import { Page } from "@/components/gadaa/Page";
import { leaderboard, player, regions, rewards } from "@/lib/gadaa-data";

export const Route = createFileRoute("/leaderboard")({
  head: () => ({
    meta: [
      { title: "Leaderboard & Rewards — Gadaa Quest" },
      {
        name: "description",
        content:
          "See top Gadaa Quest players by region and redeem cultural badges, travel vouchers and digital certificates.",
      },
      { property: "og:title", content: "Leaderboard & Rewards — Gadaa Quest" },
      {
        property: "og:description",
        content: "National rankings across Finfinnee, Bishoftu, Adama and Jimma.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Leaderboard,
});

function Leaderboard() {
  const [region, setRegion] = useState<string>("All Oromia");
  const rows = leaderboard.filter((r) => region === "All Oromia" || r.region === region);

  return (
    <Page
      eyebrow="Compete & redeem"
      title="Leaderboard & Rewards Catalog"
      intro="Rankings refresh as players complete quests across Oromia. Trade your XP for cultural badges, travel vouchers and OCTB certificates."
    >
      <section>
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 sm:flex sm:justify-between">
          <h2 className="truncate text-xl font-bold">National standings</h2>
          <div className="flex flex-wrap gap-2">
            {regions.map((r) => (
              <button
                key={r}
                onClick={() => setRegion(r)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                  region === r
                    ? "bg-primary text-primary-foreground"
                    : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {r}
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
                  <th className="px-4 py-3">Player</th>
                  <th className="px-4 py-3">Region</th>
                  <th className="px-4 py-3">Title</th>
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
                      <td className="px-4 py-3 font-display font-bold text-gold">
                        {r.rank}
                      </td>
                      <td className="px-4 py-3 font-medium">
                        {r.name}
                        {me && (
                          <span className="ml-2 rounded-full bg-primary px-2 py-0.5 text-[10px] text-primary-foreground">
                            You
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">{r.region}</td>
                      <td className="px-4 py-3 text-muted-foreground">
                        Lv{r.level} · {r.badge}
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
          You are ranked #{player.rank} nationally with {player.xp.toLocaleString()} XP —
          198 XP behind Sifan Roba.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold">Reward store</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {rewards.map((r) => {
            const affordable = player.xp >= r.cost;
            return (
              <div key={r.name} className="glass hover-lift rounded-2xl p-6">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold/15 text-gold ring-1 ring-gold/40">
                  <Gift className="h-5 w-5" />
                </span>
                <p className="mt-4 text-[11px] tracking-widest text-muted-foreground uppercase">
                  {r.kind}
                </p>
                <h3 className="mt-1 text-base font-bold">{r.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{r.note}</p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-sm font-semibold text-gold">
                    <Sparkles className="h-4 w-4" />
                    {r.cost.toLocaleString()} XP
                  </span>
                  <button
                    disabled={!affordable}
                    className="rounded-xl bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:bg-secondary disabled:text-muted-foreground disabled:hover:scale-100"
                  >
                    {affordable ? "Redeem" : "Locked"}
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

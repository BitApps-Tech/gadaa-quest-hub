import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Sparkles } from "lucide-react";
import { Page } from "@/components/gadaa/Page";
import { destinations } from "@/lib/gadaa-data";

export const Route = createFileRoute("/map")({
  head: () => ({
    meta: [
      { title: "Oromia Tourism Exploration Map — Gadaa Quest" },
      {
        name: "description",
        content:
          "Explore Sof Omar Caves, Bishoftu crater lakes, Bale Mountains and more with click-to-play location quizzes.",
      },
      { property: "og:title", content: "Oromia Tourism Exploration Map — Gadaa Quest" },
      {
        property: "og:description",
        content: "An interactive map of Oromia's iconic destinations with location quizzes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TourismMap;
});

function TourismMap() {
  const [activeId, setActiveId] = useState(destinations[0]!.id);
  const [choice, setChoice] = useState<number | null>(null);
  const active = destinations.find((d) => d.id === activeId)!;

  return (
    <Page
      eyebrow="Module 02"
      title="Oromia Tourism Exploration Map"
      intro="Tap a beacon on the map to preview the destination and play its location quiz. Correct answers unlock travel XP toward reward vouchers."
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
        <div
          className="glass shadow-panel relative aspect-[4/3] w-full overflow-hidden rounded-3xl"
          style={{ backgroundImage: "var(--gradient-hero)" }}
        >
          <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
            <defs>
              <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
                <path
                  d="M8 0H0V8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.2"
                  className="text-foreground/10"
                />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
            <path
              d="M16 34C24 22 40 16 54 20c12 3 18 2 26 9 7 6 6 18 1 27-6 11-19 22-34 24-14 2-27-5-33-16-6-12-2-22 2-30z"
              fill="color-mix(in oklab, var(--primary) 16%, transparent)"
              stroke="color-mix(in oklab, var(--gold) 55%, transparent)"
              strokeWidth="0.6"
            />
          </svg>

          {destinations.map((d) => (
            <button
              key={d.id}
              onClick={() => {
                setActiveId(d.id);
                setChoice(null);
              }}
              style={{ left: `${d.x}%`, top: `${d.y}%` }}
              className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full p-1 transition-transform hover:scale-110 ${
                d.id === activeId ? "scale-110" : ""
              }`}
              aria-label={d.name}
            >
              <span
                className={`grid h-9 w-9 place-items-center rounded-full ${
                  d.id === activeId
                    ? "shadow-glow bg-primary text-primary-foreground"
                    : "glass text-gold"
                }`}
              >
                <MapPin className="h-4 w-4" />
              </span>
              <span className="glass mt-1 block rounded-md px-2 py-0.5 text-[10px] whitespace-nowrap">
                {d.name}
              </span>
            </button>
          ))}
        </div>

        <aside className="glass rounded-3xl p-6">
          <p className="text-xs tracking-widest text-gold uppercase">{active.zone}</p>
          <h2 className="mt-1 text-2xl font-bold">{active.name}</h2>
          <p className="mt-1 text-sm text-muted-foreground">{active.tag}</p>

          <div className="mt-6 rounded-2xl bg-secondary/60 p-4">
            <p className="text-sm font-semibold">{active.quiz}</p>
            <div className="mt-3 grid gap-2">
              {active.options.map((o, i) => {
                const state =
                  choice === null
                    ? "idle"
                    : i === active.answer
                      ? "right"
                      : i === choice
                        ? "wrong"
                        : "idle";
                return (
                  <button
                    key={o}
                    onClick={() => setChoice(i)}
                    className={`rounded-xl px-3.5 py-2.5 text-left text-sm transition-colors ${
                      state === "right"
                        ? "bg-gold/20 text-gold ring-1 ring-gold/60"
                        : state === "wrong"
                          ? "bg-primary/20 ring-1 ring-primary/60"
                          : "bg-background/60 hover:bg-accent"
                    }`}
                  >
                    {o}
                  </button>
                );
              })}
            </div>
            {choice !== null && (
              <p className="animate-rise mt-3 flex items-center gap-1.5 text-xs font-semibold text-gold">
                <Sparkles className="h-3.5 w-3.5" />
                {choice === active.answer
                  ? `Correct! +${active.xp} XP added to your travel track.`
                  : "Not quite — revisit the destination story and try again."}
              </p>
            )}
          </div>

          <div className="mt-6 grid gap-2">
            {destinations.map((d) => (
              <button
                key={d.id}
                onClick={() => {
                  setActiveId(d.id);
                  setChoice(null);
                }}
                className={`flex items-center justify-between rounded-xl px-3 py-2 text-left text-sm transition-colors ${
                  d.id === activeId ? "bg-primary/15 text-foreground" : "hover:bg-accent"
                }`}
              >
                <span className="truncate">{d.name}</span>
                <span className="shrink-0 text-[11px] text-gold">+{d.xp} XP</span>
              </button>
            ))}
          </div>
        </aside>
      </div>
    </Page>
  );
}

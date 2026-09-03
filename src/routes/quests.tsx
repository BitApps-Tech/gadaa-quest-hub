import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, RotateCcw, Sparkles } from "lucide-react";
import { Page } from "@/components/gadaa/Page";
import { puzzles, trivia } from "@/lib/gadaa-data";

export const Route = createFileRoute("/quests")({
  head: () => ({
    meta: [
      { title: "Afan Oromo Vocabulary Puzzles — Gadaa Quest" },
      {
        name: "description",
        content:
          "Build Afan Oromo words, answer daily culture trivia and earn XP in the Gadaa Quest vocabulary module.",
      },
      { property: "og:title", content: "Afan Oromo Vocabulary Puzzles — Gadaa Quest" },
      {
        property: "og:description",
        content: "Word-builder cards and daily trivia to grow your Afan Oromo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Quests,
});

function WordBuilder({ p }: { p: (typeof puzzles)[number] }) {
  const [picked, setPicked] = useState<string[]>([]);
  const built = picked.join(p.scrambled.some((s) => s.length > 4) ? " " : "");
  const solved = built.replace(/\s+/g, "") === p.answer.replace(/\s+/g, "");
  const pool = p.scrambled.filter((s) => !picked.includes(s));

  return (
    <div className="glass hover-lift rounded-2xl p-5">
      <p className="text-sm text-muted-foreground">{p.prompt}</p>
      <div
        className={`mt-4 min-h-12 rounded-xl border border-dashed px-4 py-3 font-display text-lg font-bold tracking-wide ${
          solved ? "border-gold/60 text-gold" : "border-border"
        }`}
      >
        {built || <span className="text-sm text-muted-foreground">Tap the tiles…</span>}
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {pool.map((s) => (
          <button
            key={s}
            onClick={() => setPicked((v) => [...v, s])}
            className="rounded-lg bg-secondary px-3 py-2 text-sm font-semibold transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            {s}
          </button>
        ))}
      </div>
      <div className="mt-5 flex items-center justify-between">
        <span className="flex items-center gap-1.5 text-xs font-semibold text-gold">
          <Sparkles className="h-3.5 w-3.5" /> +{p.xp} XP
        </span>
        {solved ? (
          <span className="flex items-center gap-1.5 text-xs font-semibold text-gold">
            <Check className="h-4 w-4" /> Solved — galatoomaa!
          </span>
        ) : (
          <button
            onClick={() => setPicked([])}
            className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground"
          >
            <RotateCcw className="h-3.5 w-3.5" /> Reset
          </button>
        )}
      </div>
    </div>
  );
}

function Trivia() {
  const [answers, setAnswers] = useState<Record<number, number>>({});

  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {trivia.map((t, i) => {
        const chosen = answers[i];
        return (
          <div key={t.question} className="glass rounded-2xl p-5">
            <p className="font-display text-sm font-bold">{t.question}</p>
            <div className="mt-4 grid gap-2">
              {t.options.map((o, oi) => {
                const state =
                  chosen === undefined
                    ? "idle"
                    : oi === t.answer
                      ? "right"
                      : oi === chosen
                        ? "wrong"
                        : "idle";
                return (
                  <button
                    key={o}
                    onClick={() => setAnswers((a) => ({ ...a, [i]: oi }))}
                    className={`rounded-xl px-3.5 py-2.5 text-left text-sm transition-colors ${
                      state === "right"
                        ? "bg-gold/20 text-gold ring-1 ring-gold/60"
                        : state === "wrong"
                          ? "bg-primary/20 text-foreground ring-1 ring-primary/60"
                          : "bg-secondary hover:bg-accent"
                    }`}
                  >
                    {o}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Quests() {
  return (
    <Page
      eyebrow="Module 01"
      title="Afan Oromo Vocabulary Puzzles"
      intro="Assemble words tile by tile, then test your culture knowledge with today's trivia round. Every solved card feeds your XP and daily streak."
    >
      <section>
        <h2 className="text-xl font-bold">Word builder cards</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {puzzles.map((p) => (
            <WordBuilder key={p.answer} p={p} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold">Daily trivia</h2>
        <div className="mt-5">
          <Trivia />
        </div>
      </section>
    </Page>
  );
}

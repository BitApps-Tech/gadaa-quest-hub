import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check, RotateCcw, Sparkles } from "lucide-react";
import { Page } from "@/components/gadaa/Page";
import { puzzles, trivia } from "@/lib/gadaa-data";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/quests")({
  head: () => ({
    meta: [{ title: "Quests — Oda Play" }],
  }),
  component: Quests,
});

function WordBuilder({
  p,
  prompt,
  tapTiles,
  solvedLabel,
  resetLabel,
}: {
  p: (typeof puzzles)[number];
  prompt: string;
  tapTiles: string;
  solvedLabel: string;
  resetLabel: string;
}) {
  const [picked, setPicked] = useState<string[]>([]);
  const built = picked.join(p.scrambled.some((s) => s.length > 4) ? " " : "");
  const solved = built.replace(/\s+/g, "") === p.answer.replace(/\s+/g, "");
  const pool = p.scrambled.filter((s) => !picked.includes(s));

  return (
    <div className="glass hover-lift rounded-2xl p-5">
      <p className="text-sm text-muted-foreground">{prompt}</p>
      <div
        className={`mt-4 min-h-12 rounded-xl border border-dashed px-4 py-3 font-display text-lg font-bold tracking-wide ${
          solved ? "border-gold/60 text-gold" : "border-border"
        }`}
      >
        {built || <span className="text-sm text-muted-foreground">{tapTiles}</span>}
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
            <Check className="h-4 w-4" /> {solvedLabel}
          </span>
        ) : (
          <button
            onClick={() => setPicked([])}
            className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground"
          >
            <RotateCcw className="h-3.5 w-3.5" /> {resetLabel}
          </button>
        )}
      </div>
    </div>
  );
}

function Trivia() {
  const { t } = useI18n();
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const categories = [...new Set(t.quests.triviaItems.map((item) => item.category))];

  return (
    <div className="space-y-8">
      {categories.map((category) => {
        const items = t.quests.triviaItems
          .map((item, i) => ({ item, i }))
          .filter(({ item }) => item.category === category);
        return (
          <div key={category}>
            <h3 className="mb-4 text-xs font-semibold tracking-[0.16em] text-gold uppercase">
              {category}
            </h3>
            <div className="grid gap-5 lg:grid-cols-3">
              {items.map(({ item, i }) => {
                const chosen = answers[i];
                const answer = trivia[i]?.answer;
                return (
                  <div key={item.question} className="glass rounded-2xl p-5">
                    <p className="font-display text-sm font-bold">{item.question}</p>
                    <div className="mt-4 grid gap-2">
                      {item.options.map((o, oi) => {
                        const state =
                          chosen === undefined
                            ? "idle"
                            : oi === answer
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
          </div>
        );
      })}
    </div>
  );
}

function Quests() {
  const { t } = useI18n();

  return (
    <Page eyebrow={t.quests.eyebrow} title={t.quests.title} intro={t.quests.intro} source={t.quests.source}>
      <section>
        <h2 className="text-xl font-bold">{t.quests.wordBuilder}</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {puzzles.map((p) => (
            <WordBuilder
              key={p.id}
              p={p}
              prompt={t.quests.puzzles[p.id] ?? p.id}
              tapTiles={t.quests.tapTiles}
              solvedLabel={t.quests.solved}
              resetLabel={t.quests.reset}
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold">{t.quests.trivia}</h2>
        <div className="mt-5">
          <Trivia />
        </div>
      </section>
    </Page>
  );
}

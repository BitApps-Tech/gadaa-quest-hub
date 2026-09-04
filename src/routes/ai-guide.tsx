import { createFileRoute } from "@tanstack/react-router";
import { Page } from "@/components/gadaa/Page";
import { AadaaPanel } from "@/components/gadaa/AadaaAI";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/ai-guide")({
  head: () => ({
    meta: [{ title: "Aadaa AI — Odaa Play" }],
  }),
  component: AiGuide,
});

function AiGuide() {
  const { t } = useI18n();

  return (
    <Page eyebrow={t.ai.eyebrow} title={t.ai.title} intro={t.ai.intro}>
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
        <aside className="glass rounded-3xl p-6">
          <h2 className="text-lg font-bold">{t.ai.quickPrompts}</h2>
          <p className="mt-1 text-sm text-muted-foreground">{t.ai.tapChip}</p>
          <ul className="mt-5 space-y-2 text-sm">
            {t.ai.prompts.map((p) => (
              <li
                key={p.id}
                className="rounded-xl border border-gold/30 bg-gold/10 px-3.5 py-2.5 text-gold"
              >
                {p.text}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-muted-foreground">{t.ai.trained}</p>
        </aside>

        <div className="glass shadow-gold flex h-[34rem] flex-col overflow-hidden rounded-3xl">
          <AadaaPanel />
        </div>
      </div>
    </Page>
  );
}

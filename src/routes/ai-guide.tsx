import { createFileRoute } from "@tanstack/react-router";
import { Page } from "@/components/gadaa/Page";
import { AadaaPanel } from "@/components/gadaa/AadaaAI";
import { aiPrompts } from "@/lib/gadaa-data";

export const Route = createFileRoute("/ai-guide")({
  head: () => ({
    meta: [
      { title: "Aadaa AI — 24/7 Oromia Cultural Guide | Gadaa Quest" },
      {
        name: "description",
        content:
          "Chat with Aadaa AI about Irreechaa, Afan Oromo travel phrases, Odaa Nabee history and trip planning across Oromia.",
      },
      { property: "og:title", content: "Aadaa AI — 24/7 Oromia Cultural Guide" },
      {
        property: "og:description",
        content: "Your always-on guide to Oromo culture, language and travel.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AiGuide,
});

function AiGuide() {
  return (
    <Page
      eyebrow="Always on"
      title="Aadaa AI Cultural Guide"
      intro="Ask anything about Oromo culture, Afan Oromo language practice or travel planning. Aadaa AI answers around the clock and turns answers into quests."
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
        <aside className="glass rounded-3xl p-6">
          <h2 className="text-lg font-bold">Quick prompts</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Tap a chip inside the chat to start instantly.
          </p>
          <ul className="mt-5 space-y-2 text-sm">
            {aiPrompts.map((p) => (
              <li
                key={p}
                className="rounded-xl border border-gold/30 bg-gold/10 px-3.5 py-2.5 text-gold"
              >
                {p}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-muted-foreground">
            Aadaa AI is trained on OCTB heritage material, Afan Oromo phrasebooks and
            verified destination guides.
          </p>
        </aside>

        <div className="glass shadow-gold flex h-[34rem] flex-col overflow-hidden rounded-3xl">
          <AadaaPanel />
        </div>
      </div>
    </Page>
  );
}

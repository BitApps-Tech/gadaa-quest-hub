import { createFileRoute } from "@tanstack/react-router";
import { Landmark } from "lucide-react";
import { Page } from "@/components/gadaa/Page";
import { heritageChapters } from "@/lib/gadaa-data";

export const Route = createFileRoute("/heritage")({
  head: () => ({
    meta: [
      { title: "Gadaa Heritage & Cultural History — Gadaa Quest" },
      {
        name: "description",
        content:
          "Learn the Gadaa system, age-grades, Odaa assembly trees, Irreechaa and safuu through short heritage chapters.",
      },
      { property: "og:title", content: "Gadaa Heritage & Cultural History" },
      {
        property: "og:description",
        content: "Age-grades, Odaa trees and living Oromo tradition, chapter by chapter.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Heritage,
});

function Heritage() {
  return (
    <Page
      eyebrow="Module 03"
      title="Gadaa Heritage & Cultural History"
      intro="Six chapters on the indigenous democratic order of the Oromo — its age-grades, assembly grounds, festivals and moral code."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {heritageChapters.map((c) => (
          <article key={c.title} className="glass hover-lift rounded-2xl p-6">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold/15 text-gold ring-1 ring-gold/40">
              <Landmark className="h-5 w-5" />
            </span>
            <p className="mt-4 text-[11px] tracking-widest text-muted-foreground uppercase">
              {c.meta}
            </p>
            <h2 className="mt-1 text-lg font-bold">{c.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
          </article>
        ))}
      </div>
    </Page>
  );
}

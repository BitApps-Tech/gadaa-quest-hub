import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, Landmark, MapPin } from "lucide-react";
import { Page } from "@/components/gadaa/Page";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { octbSourceUrl } from "@/lib/gadaa-data";
import { useI18n } from "@/lib/i18n";
import { mapSites, type MapSite } from "@/lib/oromia-map";

export const Route = createFileRoute("/heritage")({
  head: () => ({
    meta: [{ title: "Heritage — Odaa Play" }],
  }),
  component: Heritage,
});

const relatedMatchers: Record<string, (site: MapSite) => boolean> = {
  gadaa: (s) => s.type === "gada" || /gada|oda\b|abba/i.test(s.name),
  sadeetta: (s) =>
    s.type === "cave" ||
    s.type === "lake" ||
    s.type === "forest" ||
    s.type === "waterfall" ||
    s.type === "mountain" ||
    s.type === "spring" ||
    s.type === "gorge",
  odaa: (s) => /sof|umar|melka|yayo|sheikh|unesco|bale/i.test(`${s.name} ${s.summary}`),
  irreechaa: (s) => /hora|irree|arsadi|bishoftu|finfinne/i.test(`${s.name} ${s.woreda} ${s.zone}`),
  safuu: (s) => s.type === "museum" || s.type === "heritage" || /palace|museum/i.test(s.name),
  craft: (s) =>
    s.type === "mountain" || /bale|nyala|wolf|sanctuary|park/i.test(`${s.name} ${s.summary}`),
};

function relatedPlaces(chapterId: string, limit = 6) {
  const match = relatedMatchers[chapterId];
  if (!match) return [];
  return mapSites.filter(match).slice(0, limit);
}

function Heritage() {
  const { t } = useI18n();
  const [openId, setOpenId] = useState<string | null>(null);
  const chapter = t.heritage.chapters.find((c) => c.id === openId) ?? null;
  const places = useMemo(() => (openId ? relatedPlaces(openId) : []), [openId]);

  return (
    <Page eyebrow={t.heritage.eyebrow} title={t.heritage.title} intro={t.heritage.intro} source={t.heritage.source}>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {t.heritage.chapters.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => setOpenId(c.id)}
            className={`glass hover-lift rounded-2xl p-6 text-left transition-shadow focus-visible:ring-2 focus-visible:ring-primary/60 ${
              openId === c.id ? "ring-1 ring-primary/50 shadow-glow" : ""
            }`}
          >
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold/15 text-gold ring-1 ring-gold/40">
              <Landmark className="h-5 w-5" />
            </span>
            <p className="mt-4 text-[11px] tracking-widest text-muted-foreground uppercase">
              {c.meta}
            </p>
            <h2 className="mt-1 text-lg font-bold">{c.title}</h2>
            <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{c.body}</p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold">
              {t.heritage.open} <ArrowRight className="h-4 w-4" />
            </span>
          </button>
        ))}
      </div>

      <Dialog open={chapter !== null} onOpenChange={(open) => !open && setOpenId(null)}>
        <DialogContent className="glass-strong max-h-[85vh] overflow-y-auto border-border sm:max-w-lg sm:rounded-2xl">
          {chapter && (
            <>
              <DialogHeader className="pr-6 text-left">
                <p className="text-[11px] tracking-widest text-muted-foreground uppercase">
                  {chapter.meta}
                </p>
                <DialogTitle className="font-display text-xl">{chapter.title}</DialogTitle>
                <DialogDescription className="text-sm leading-relaxed text-muted-foreground">
                  {chapter.body}
                </DialogDescription>
              </DialogHeader>

              {places.length > 0 && (
                <div>
                  <p className="text-xs font-semibold tracking-wide text-gold uppercase">
                    {t.heritage.related}
                  </p>
                  <ul className="mt-2 space-y-1">
                    {places.map((site) => (
                      <li key={site.id}>
                        <Link
                          to="/map"
                          search={{ site: site.id }}
                          onClick={() => setOpenId(null)}
                          className="flex w-full items-start gap-2 rounded-xl px-3 py-2.5 text-left transition-colors hover:bg-accent"
                        >
                          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                          <span className="min-w-0">
                            <span className="block truncate text-sm font-semibold">{site.name}</span>
                            <span className="block truncate text-[11px] text-muted-foreground">
                              {t.map.types[site.type] ?? site.type}
                              {site.zone ? ` · ${site.zone}` : ""}
                            </span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/map"
                    onClick={() => setOpenId(null)}
                    className="mt-3 inline-flex items-center gap-1.5 px-3 text-sm font-semibold text-gold"
                  >
                    {t.heritage.viewOnMap} <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              )}

              <a
                href={octbSourceUrl}
                target="_blank"
                rel="noreferrer"
                className="px-1 text-xs font-medium text-gold underline-offset-2 hover:underline"
              >
                oromiatourism.gov.et
              </a>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Page>
  );
}

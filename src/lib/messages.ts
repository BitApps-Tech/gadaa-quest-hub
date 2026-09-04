import { am } from "./locales/am";
import { en } from "./locales/en";
import { om } from "./locales/om";
import type { Locale, Messages } from "./locales/types";

export type { AuthErrorCode, Locale, Messages } from "./locales/types";

export const messages: Record<Locale, Messages> = { en, am, om };

export function aiReply(question: string, t: Messages): string {
  const q = question.trim().toLowerCase();
  for (const loc of Object.values(messages)) {
    const hit = loc.ai.prompts.find(
      (p) => q.includes(p.text.toLowerCase().slice(0, 10)) || q === p.text.toLowerCase(),
    );
    if (hit) return t.ai.answers[hit.id] ?? t.ai.fallback.replace("{q}", question);
  }
  if (q.includes("gada") || q.includes("luba") || q.includes("chafe")) return t.ai.answers["gada"] ?? "";
  if (q.includes("fact") || q.includes("oromia") || q.includes("oromiya") || q.includes("finfinnee")) {
    return t.ai.answers["facts"] ?? "";
  }
  if (q.includes("sof") || q.includes("umar") || q.includes("omar") || q.includes("cave") || q.includes("holqa")) {
    return t.ai.answers["sofumar"] ?? "";
  }
  if (q.includes("wild") || q.includes("nyala") || q.includes("wolf") || q.includes("bineensa") || q.includes("እንስሳ")) {
    return t.ai.answers["wildlife"] ?? "";
  }
  return t.ai.fallback.replace("{q}", question);
}

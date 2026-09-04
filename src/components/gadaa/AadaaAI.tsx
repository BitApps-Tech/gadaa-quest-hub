import { useEffect, useRef, useState } from "react";
import { MessageCircle, Send, Sparkles, X } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { aiReply } from "@/lib/messages";

type Msg = { role: "ai" | "user"; text: string };

export function AadaaPanel({ compact = false }: { compact?: boolean }) {
  const { t, locale } = useI18n();
  const [messages, setMessages] = useState<Msg[]>([{ role: "ai", text: t.ai.greeting }]);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages([{ role: "ai", text: t.ai.greeting }]);
  }, [locale, t.ai.greeting]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }, [messages]);

  function send(text: string) {
    const q = text.trim();
    if (!q) return;
    setMessages((m) => [...m, { role: "user", text: q }]);
    setInput("");
    setTimeout(
      () => setMessages((m) => [...m, { role: "ai", text: aiReply(q, t) }]),
      380,
    );
  }

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center gap-3 border-b border-border px-4 py-3">
        <span className="animate-glow-pulse grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gold text-gold-foreground">
          <Sparkles className="h-4 w-4" />
        </span>
        <div className="min-w-0">
          <p className="truncate font-display text-sm font-bold">Aadaa AI</p>
          <p className="truncate text-[11px] text-muted-foreground">{t.ai.subtitle}</p>
        </div>
      </div>

      <div className={`flex-1 space-y-3 overflow-y-auto px-4 py-4 ${compact ? "max-h-80" : ""}`}>
        {messages.map((m, i) => (
          <div
            key={i}
            className={`animate-rise max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
              m.role === "ai"
                ? "glass rounded-tl-sm text-foreground"
                : "ml-auto rounded-tr-sm bg-primary text-primary-foreground"
            }`}
          >
            {m.text}
          </div>
        ))}
        <div ref={endRef} />
      </div>

      <div className="flex flex-wrap gap-2 px-4 pb-3">
        {t.ai.prompts.map((p) => (
          <button
            key={p.id}
            onClick={() => send(p.text)}
            className="rounded-full border border-gold/40 bg-gold/10 px-3 py-1.5 text-[11px] font-medium text-gold transition-colors hover:bg-gold/20"
          >
            {p.text}
          </button>
        ))}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
        className="flex items-center gap-2 border-t border-border p-3"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={t.ai.placeholder}
          className="min-w-0 flex-1 rounded-xl bg-secondary px-3.5 py-2.5 text-sm outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/60"
        />
        <button
          type="submit"
          className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground transition-transform hover:scale-105"
          aria-label={t.ai.send}
        >
          <Send className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
}

export function AadaaWidget() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && (
        <div className="glass-strong animate-rise shadow-panel fixed right-4 bottom-24 z-50 flex h-[30rem] w-[min(23rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl">
          <AadaaPanel />
        </div>
      )}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={t.ai.open}
        className="animate-glow-pulse fixed right-4 bottom-5 z-50 flex items-center gap-2 rounded-full bg-gold px-5 py-3.5 font-semibold text-gold-foreground transition-transform hover:scale-105"
      >
        {open ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
        <span className="text-sm">Aadaa AI</span>
      </button>
    </>
  );
}

import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, Sparkles, X } from "lucide-react";
import { OdaaLogo } from "./OdaaLogo";
import { player } from "@/lib/gadaa-data";

const links = [
  { to: "/", label: "Dashboard" },
  { to: "/quests", label: "Quests" },
  { to: "/map", label: "Tourism Map" },
  { to: "/leaderboard", label: "Leaderboard" },
  { to: "/ai-guide", label: "AI Guide" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40">
      <div className="flex h-1">
        <span className="flex-1 bg-[oklch(0.14_0.01_265)]" />
        <span className="flex-1 bg-primary" />
        <span className="flex-1 bg-white" />
      </div>

      <div className="glass-strong shadow-panel">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6">
          <Link to="/" className="flex min-w-0 items-center gap-3">
            <span className="glass grid h-11 w-11 shrink-0 place-items-center rounded-xl">
              <OdaaLogo />
            </span>
            <span className="min-w-0">
              <span className="block truncate font-display text-lg leading-tight font-bold">
                Gadaa Quest
              </span>
              <span className="block truncate text-[11px] tracking-wide text-muted-foreground uppercase">
                Oromia Culture &amp; Tourism Bureau
              </span>
            </span>
          </Link>

          <nav className="ml-auto hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{
                  className:
                    "bg-primary/15 text-foreground ring-1 ring-primary/50 shadow-glow",
                }}
                className="rounded-lg px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2 lg:ml-0">
            <div className="glass hidden items-center gap-3 rounded-full py-1.5 pr-4 pl-1.5 sm:flex">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                {player.initials}
              </span>
              <span className="leading-tight">
                <span className="block text-xs font-semibold">
                  Level {player.level}: {player.title}
                </span>
                <span className="flex items-center gap-1 text-[11px] text-gold">
                  <Sparkles className="h-3 w-3" />
                  {player.xp.toLocaleString()} XP
                </span>
              </span>
            </div>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle navigation"
              className="glass grid h-10 w-10 place-items-center rounded-xl lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="animate-rise grid gap-1 border-t border-border px-4 pt-2 pb-4 lg:hidden">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "bg-primary/15 text-foreground" }}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}

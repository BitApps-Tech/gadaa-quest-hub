import { useNavigate, useRouter } from "@tanstack/react-router";
import { ChevronDown, LogOut, Phone, Sparkles, Trophy } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getClientSession, signOut } from "@/lib/auth";
import { player } from "@/lib/gadaa-data";
import { fill, useI18n } from "@/lib/i18n";

export function AccountMenu() {
  const { t } = useI18n();
  const router = useRouter();
  const navigate = useNavigate();
  const session = getClientSession();

  function handleSignOut() {
    signOut();
    void router.invalidate().then(() => {
      void navigate({ to: "/login", replace: true });
    });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          aria-label={t.nav.account}
          className="glass flex items-center gap-1.5 rounded-full py-1 pr-2 pl-1 transition-colors hover:bg-accent"
        >
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
            {player.initials}
          </span>
          <ChevronDown className="mr-0.5 h-4 w-4 text-muted-foreground" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="glass-strong w-72 rounded-2xl border-border p-2">
        <div className="rounded-xl bg-secondary/60 px-3 py-3">
          <p className="mb-2 text-[10px] font-semibold tracking-widest text-gold uppercase">
            {t.nav.profile}
          </p>
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
              {player.initials}
            </span>
            <div className="min-w-0 leading-tight">
              <p className="truncate font-display text-sm font-bold">{player.name}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                {fill(t.common.level, { level: player.level, title: t.dashboard.playerTitle })}
              </p>
              <p className="mt-1 flex items-center gap-1 text-[11px] font-semibold text-gold">
                <Sparkles className="h-3 w-3" />
                {player.xp.toLocaleString()} XP
              </p>
            </div>
          </div>
          {session?.phone && (
            <p className="mt-3 flex items-center gap-1.5 truncate text-[11px] text-muted-foreground">
              <Phone className="h-3 w-3 shrink-0" />
              {t.nav.phone}: {session.phone}
            </p>
          )}
        </div>

        <DropdownMenuSeparator className="bg-border" />

        <DropdownMenuItem
          className="cursor-pointer rounded-lg"
          onSelect={() => void navigate({ to: "/progress" })}
        >
          <Sparkles className="h-4 w-4 text-gold" />
          {t.nav.myProgress}
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer rounded-lg"
          onSelect={() => void navigate({ to: "/leaderboard" })}
        >
          <Trophy className="h-4 w-4 text-gold" />
          {t.nav.leaderboard}
        </DropdownMenuItem>

        <DropdownMenuSeparator className="bg-border" />

        <DropdownMenuItem
          className="cursor-pointer rounded-lg text-muted-foreground focus:text-foreground"
          onSelect={handleSignOut}
        >
          <LogOut className="h-4 w-4" />
          {t.nav.signOut}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

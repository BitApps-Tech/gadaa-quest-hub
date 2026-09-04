import { Languages } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { locales, useI18n } from "@/lib/i18n";

export function LanguageSwitcher({
  className = "",
  variant = "icon",
}: {
  className?: string;
  variant?: "icon" | "pills";
}) {
  const { locale, setLocale, t } = useI18n();

  if (variant === "pills") {
    return (
      <div
        role="group"
        aria-label={t.nav.language}
        className={`glass inline-flex items-center gap-0.5 rounded-full p-1 ${className}`}
      >
        {locales.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setLocale(item.id)}
            className={`rounded-full px-2.5 py-1 text-[11px] font-semibold transition-colors ${
              locale === item.id
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
            aria-pressed={locale === item.id}
          >
            {item.short}
          </button>
        ))}
      </div>
    );
  }

  const current = locales.find((item) => item.id === locale);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          aria-label={t.nav.language}
          title={t.nav.language}
          className={`glass grid h-10 w-10 place-items-center rounded-xl text-muted-foreground transition-colors hover:text-foreground ${className}`}
        >
          <Languages className="h-4 w-4" />
          <span className="sr-only">
            {t.nav.language}: {current?.name}
          </span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="glass-strong min-w-44 rounded-xl border-border p-1">
        {locales.map((item) => (
          <DropdownMenuItem
            key={item.id}
            onSelect={() => setLocale(item.id)}
            className={`cursor-pointer rounded-lg ${
              locale === item.id ? "bg-primary/15 text-foreground" : ""
            }`}
          >
            <span className="w-8 font-semibold">{item.short}</span>
            <span>{item.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

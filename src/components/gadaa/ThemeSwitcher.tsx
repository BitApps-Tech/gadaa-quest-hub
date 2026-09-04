import { Moon, Sun } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useI18n } from "@/lib/i18n";
import { useTheme, type Theme } from "@/lib/theme";

const options: { id: Theme; Icon: typeof Sun }[] = [
  { id: "light", Icon: Sun },
  { id: "dark", Icon: Moon },
];

export function ThemeSwitcher({ className = "" }: { className?: string }) {
  const { t } = useI18n();
  const { theme, setTheme } = useTheme();
  const CurrentIcon = theme === "light" ? Sun : Moon;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          aria-label={t.nav.theme}
          title={t.nav.theme}
          className={`glass grid h-10 w-10 place-items-center rounded-xl text-muted-foreground transition-colors hover:text-foreground ${className}`}
        >
          <CurrentIcon className="h-4 w-4" />
          <span className="sr-only">
            {t.nav.theme}: {theme === "light" ? t.nav.light : t.nav.dark}
          </span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="glass-strong min-w-44 rounded-xl border-border p-1">
        {options.map((item) => (
          <DropdownMenuItem
            key={item.id}
            onSelect={() => setTheme(item.id)}
            className={`cursor-pointer rounded-lg ${
              theme === item.id ? "bg-primary/15 text-foreground" : ""
            }`}
          >
            <item.Icon className="h-4 w-4" />
            <span>{item.id === "light" ? t.nav.light : t.nav.dark}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

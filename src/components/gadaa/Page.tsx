import type { ReactNode } from "react";

export function Page({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <main className="animate-rise mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-12">
      <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">
        {eyebrow}
      </p>
      <h1 className="mt-2 text-3xl font-bold sm:text-4xl">{title}</h1>
      <p className="mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">{intro}</p>
      <div className="mt-8 space-y-8">{children}</div>
    </main>
  );
}

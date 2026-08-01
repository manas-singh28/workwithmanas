import { useMemo } from "react";

/** Floating gradient orbs + subtle particle field. Purely decorative. */
export function AmbientBackground() {
  const particles = useMemo(
    () =>
      Array.from({ length: 34 }, (_, i) => ({
        id: i,
        left: (i * 37) % 100,
        top: (i * 61) % 100,
        size: (i % 3) + 1,
        delay: (i % 11) * 1.3,
        duration: 16 + (i % 7) * 3,
      })),
    [],
  );

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="animate-float-slow absolute -left-40 -top-40 h-[38rem] w-[38rem] rounded-full bg-primary/22 blur-[140px]" />
      <div className="animate-drift absolute -right-52 top-[28%] h-[34rem] w-[34rem] rounded-full bg-primary-glow/18 blur-[150px]" />
      <div className="animate-float-slow absolute bottom-[-16rem] left-[28%] h-[32rem] w-[32rem] rounded-full bg-primary/14 blur-[160px]" />
      <div className="absolute inset-0 opacity-[0.35] [background-image:radial-gradient(circle_at_1px_1px,var(--color-border)_1px,transparent_0)] [background-size:44px_44px]" />
      {particles.map((p) => (
        <span
          key={p.id}
          className="animate-drift absolute rounded-full bg-primary-glow/45"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

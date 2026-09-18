export function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink" aria-hidden="true">
      <div
        className="aurora-blob aurora-blob-1 h-[38rem] w-[38rem]"
        style={{ top: "-10%", left: "-8%", background: "var(--color-primary)" }}
      />
      <div
        className="aurora-blob aurora-blob-2 h-[34rem] w-[34rem]"
        style={{ top: "10%", right: "-10%", background: "var(--color-secondary)" }}
      />
      <div
        className="aurora-blob aurora-blob-3 h-[30rem] w-[30rem]"
        style={{ bottom: "-14%", left: "20%", background: "var(--color-accent)" }}
      />
      <div className="absolute inset-0 grid-texture opacity-60" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 100% at 50% 0%, transparent 0%, var(--color-ink) 75%)",
        }}
      />
    </div>
  );
}

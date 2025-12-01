type SplashScreenProps = {
  onContinue: () => void;
};

const SplashScreen = ({ onContinue }: SplashScreenProps) => (
  <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-black via-zinc-950 to-black px-6 text-white">
    <div className="flex w-full max-w-sm flex-col items-center text-center">
      <div className="relative mb-6 flex h-28 w-28 items-center justify-center">
        <div className="absolute inset-0 rounded-full bg-[#ccff00]/30 blur-2xl" />
        <div className="absolute inset-1 rounded-full border border-[#ccff00]/40 opacity-70" />
        <div className="absolute inset-3 rounded-full border border-[#ccff00]/70 opacity-60" />
        <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#f3ff7a] to-[#ccff00] text-lg font-semibold text-black shadow-[0_12px_35px_rgba(204,255,0,0.45)]">
          FP
        </div>
      </div>

      <p className="text-xs uppercase tracking-[0.5em] text-[#ccff00]/70">FitPass</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white">Find your next session</h1>
      <p className="mt-3 text-sm text-zinc-400">Unlock every gym in the city with one pass.</p>

      <button
        onClick={onContinue}
        className="mt-8 w-full rounded-full border border-white/15 bg-white/5 py-3 text-base font-semibold text-white backdrop-blur-lg shadow-[0_0_40px_rgba(204,255,0,0.18)] transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ccff00]/50"
      >
        <span className="inline-flex items-center justify-center gap-2">
          Enter
          <span className="h-2 w-2 animate-ping rounded-full bg-black/60" />
        </span>
      </button>
    </div>
  </div>
);

export default SplashScreen;


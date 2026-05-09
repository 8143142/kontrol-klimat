export function SnowVortex() {
  const flakes = [
    { left: "2%", top: "4%", size: "14px", delay: "0s", duration: "15s", symbol: "❄" },
    { left: "10%", top: "16%", size: "10px", delay: "-4s", duration: "18s", symbol: "✦" },
    { left: "18%", top: "7%", size: "18px", delay: "-8s", duration: "21s", symbol: "❄" },
    { left: "28%", top: "24%", size: "9px", delay: "-3s", duration: "16s", symbol: "✧" },
    { left: "38%", top: "10%", size: "13px", delay: "-11s", duration: "22s", symbol: "❄" },
    { left: "50%", top: "30%", size: "11px", delay: "-6s", duration: "17s", symbol: "✦" },
    { left: "63%", top: "14%", size: "16px", delay: "-13s", duration: "20s", symbol: "❄" },
    { left: "72%", top: "40%", size: "10px", delay: "-2s", duration: "19s", symbol: "✧" },
    { left: "84%", top: "20%", size: "15px", delay: "-9s", duration: "23s", symbol: "❄" },
    { left: "94%", top: "8%", size: "12px", delay: "-5s", duration: "18s", symbol: "✦" },
    { left: "7%", top: "62%", size: "18px", delay: "-10s", duration: "24s", symbol: "❄", reverse: true },
    { left: "22%", top: "80%", size: "10px", delay: "-7s", duration: "19s", symbol: "✧", reverse: true },
    { left: "44%", top: "72%", size: "13px", delay: "-1s", duration: "17s", symbol: "❄", reverse: true },
    { left: "67%", top: "86%", size: "9px", delay: "-12s", duration: "20s", symbol: "✦", reverse: true },
    { left: "88%", top: "68%", size: "16px", delay: "-15s", duration: "25s", symbol: "❄", reverse: true }
  ];

  return (
    <div className="snow-vortex pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="snow-ring one" />
      <div className="snow-ring two" />
      {flakes.map((flake, index) => (
        <span
          key={index}
          className={`snow-particle ${flake.reverse ? "reverse" : ""}`}
          style={{ left: flake.left, top: flake.top, fontSize: flake.size, animationDelay: flake.delay, animationDuration: flake.duration }}
        >
          {flake.symbol}
        </span>
      ))}
    </div>
  );
}

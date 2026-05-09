import { useEffect, useState } from "react";

export function BeforeAfterCleaning() {
  const [position, setPosition] = useState(50);
  return (
    <div className="rounded-[2rem] bg-white p-5 shadow-xl ring-1 ring-blue-100 sm:p-7">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.25em] text-sky-500">До / После</p>
          <h3 className="mt-2 text-2xl font-black uppercase text-blue-950 sm:text-3xl">Эффект чистки</h3>
        </div>
        <span className="rounded-full bg-sky-50 px-4 py-2 text-xs font-black uppercase text-sky-600 ring-1 ring-blue-100">Интерактивно</span>
      </div>
      <div className="relative h-64 overflow-hidden rounded-[1.7rem] bg-slate-100 ring-1 ring-blue-100 sm:h-80">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-300 via-slate-200 to-stone-200">
          <div className="absolute left-5 top-5 rounded-full bg-slate-700/75 px-4 py-2 text-xs font-black uppercase text-white">До чистки</div>
          <div className="absolute inset-x-8 top-24 grid grid-cols-5 gap-2 opacity-80 sm:inset-x-12">
            {Array.from({ length: 25 }).map((_, index) => <div key={index} className="h-5 rounded bg-slate-500/45" />)}
          </div>
          <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-slate-800/15 p-4 text-sm font-bold text-slate-700">Пыль, запах, слабый поток воздуха</div>
        </div>
        <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 0 0 ${position}%)` }}>
          <div className="absolute inset-0 bg-gradient-to-br from-white via-sky-50 to-cyan-100">
            <div className="absolute right-5 top-5 rounded-full bg-sky-500 px-4 py-2 text-xs font-black uppercase text-white">После чистки</div>
            <div className="absolute inset-x-8 top-24 grid grid-cols-5 gap-2 sm:inset-x-12">
              {Array.from({ length: 25 }).map((_, index) => <div key={index} className="h-5 rounded bg-white shadow-sm ring-1 ring-sky-100" />)}
            </div>
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/80 p-4 text-sm font-bold text-blue-950 shadow-sm">Чистый поток, лучшее охлаждение, меньше запаха</div>
          </div>
        </div>
        <div className="absolute bottom-0 top-0 w-1 bg-blue-950/70 shadow-xl" style={{ left: `${position}%` }}>
          <div className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-xl shadow-xl ring-4 ring-sky-100">↔</div>
        </div>
      </div>
      <input type="range" min="15" max="85" value={position} onChange={(event) => setPosition(Number(event.target.value))} className="mt-5 w-full accent-sky-500" aria-label="Сравнить до и после чистки" />
    </div>
  );
}

export function LiveThermostat() {
  const [temperature, setTemperature] = useState(28);
  const [target, setTarget] = useState(22);

  useEffect(() => {
    const targetTimer = setInterval(() => setTarget((prev) => (prev === 22 ? 28 : 22)), 5200);
    return () => clearInterval(targetTimer);
  }, []);

  useEffect(() => {
    const stepTimer = setInterval(() => {
      setTemperature((prev) => {
        if (Math.abs(prev - target) < 0.1) return target;
        return prev + (target > prev ? 0.2 : -0.2);
      });
    }, 70);
    return () => clearInterval(stepTimer);
  }, [target]);

  const isCooling = temperature > 22.5;

  return (
    <div className="temp-glow relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-950 via-blue-900 to-sky-700 p-5 text-white shadow-2xl sm:p-7">
      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-sky-300/20 blur-2xl" />
      <div className="absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-white/10 blur-3xl" />
      <div className="relative">
        <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-100">Живой термостат</p>
        <h3 className="mt-2 text-2xl font-black uppercase leading-tight sm:text-3xl">Комфортная температура</h3>
        <div className="mt-7 rounded-[1.7rem] bg-white/12 p-5 ring-1 ring-white/20 backdrop-blur">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold text-blue-100">Сейчас в комнате</p>
              <div className="mt-2 flex items-start gap-1">
                <span className="text-6xl font-black tracking-tight sm:text-7xl">{temperature.toFixed(0)}</span>
                <span className="mt-3 text-2xl font-black">°C</span>
              </div>
            </div>
            <div className="rounded-2xl bg-white px-4 py-3 text-right text-blue-950 shadow-lg">
              <p className="text-xs font-black uppercase text-sky-500">Цель</p>
              <p className="text-2xl font-black">22°C</p>
            </div>
          </div>
          <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/20">
            <div className="h-full rounded-full bg-gradient-to-r from-sky-300 to-white transition-all duration-700" style={{ width: `${Math.max(20, Math.min(100, (30 - temperature) * 14))}%` }} />
          </div>
        </div>
        <div className="mt-6 flex items-center gap-3 rounded-3xl bg-white/10 p-4 ring-1 ring-white/15">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white text-2xl text-blue-950">❄️</div>
          <div className="min-w-0 flex-1">
            <p className="font-black uppercase">{isCooling ? "Идет охлаждение" : "Комфорт достигнут"}</p>
            <p className="text-sm leading-6 text-blue-100">Кондиционер плавно снижает температуру с +28°C до +22°C.</p>
          </div>
          <div className="hidden gap-1 text-3xl text-sky-100 sm:flex">
            <span className="chill-wave">≋</span>
            <span className="chill-wave" style={{ animationDelay: "0.35s" }}>≋</span>
          </div>
        </div>
      </div>
    </div>
  );
}

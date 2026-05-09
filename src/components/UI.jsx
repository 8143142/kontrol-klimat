import { useEffect, useRef, useState } from "react";
import WhatsAppIcon from "./WhatsAppIcon.jsx";
import { whatsappLink } from "../data.js";

export function SiteEffects() {
  return (
    <style>{`
      html { scroll-behavior: smooth; }
      body { overflow-x: hidden; }
      * { box-sizing: border-box; }
      @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-14px); } }
      @keyframes pulse { 0%,100% { transform: scale(1); opacity: .8; } 50% { transform: scale(1.08); opacity: 1; } }
      @keyframes wind { 0% { transform: translateX(-15px); opacity: 0; } 40% { opacity: 1; } 100% { transform: translateX(28px); opacity: 0; } }
      @keyframes spin { to { transform: rotate(360deg); } }
      @keyframes chillWave { 0% { transform: translateX(-22px); opacity: 0; } 35% { opacity: .9; } 100% { transform: translateX(34px); opacity: 0; } }
      @keyframes tempGlow { 0%,100% { box-shadow: 0 18px 55px rgba(14,165,233,.18); } 50% { box-shadow: 0 26px 80px rgba(14,165,233,.36); } }
      @keyframes snowVortex {
        0% { transform: translate3d(-12vw, -8vh, 0) rotate(0deg) scale(.75); opacity: 0; }
        12% { opacity: .85; }
        50% { transform: translate3d(45vw, 38vh, 0) rotate(520deg) scale(1.05); opacity: .75; }
        88% { opacity: .65; }
        100% { transform: translate3d(115vw, 82vh, 0) rotate(1080deg) scale(.8); opacity: 0; }
      }
      @keyframes snowVortexReverse {
        0% { transform: translate3d(112vw, 18vh, 0) rotate(0deg) scale(.7); opacity: 0; }
        15% { opacity: .7; }
        55% { transform: translate3d(45vw, 55vh, 0) rotate(-560deg) scale(1.1); opacity: .75; }
        100% { transform: translate3d(-18vw, 92vh, 0) rotate(-1100deg) scale(.75); opacity: 0; }
      }
      @keyframes snowRing { 0%,100% { transform: rotate(0deg) scale(.95); opacity: .18; } 50% { transform: rotate(180deg) scale(1.08); opacity: .32; } }
      .float { animation: float 5s ease-in-out infinite; }
      .pulse { animation: pulse 3s ease-in-out infinite; }
      .wind { animation: wind 2.5s ease-in-out infinite; }
      .spin { animation: spin 9s linear infinite; }
      .chill-wave { animation: chillWave 2.4s ease-in-out infinite; }
      .temp-glow { animation: tempGlow 3.5s ease-in-out infinite; }
      main > section { position: relative; z-index: 10; }
      .snow-vortex { filter: drop-shadow(0 8px 18px rgba(14,165,233,.18)); z-index: 0; }
      .snow-particle { position: absolute; display: grid; place-items: center; color: rgba(14,165,233,.5); font-weight: 900; line-height: 1; animation-name: snowVortex; animation-timing-function: linear; animation-iteration-count: infinite; }
      .snow-particle:nth-child(even) { color: rgba(255,255,255,.9); text-shadow: 0 0 10px rgba(14,165,233,.35); }
      .snow-particle.reverse { animation-name: snowVortexReverse; }
      .snow-ring { position: absolute; width: 26rem; height: 26rem; border-radius: 9999px; border: 1px solid rgba(56,189,248,.16); background: radial-gradient(circle, transparent 52%, rgba(125,211,252,.13) 53%, transparent 68%); animation: snowRing 12s ease-in-out infinite; }
      .snow-ring.one { left: 8%; top: 16%; }
      .snow-ring.two { right: 6%; top: 48%; width: 18rem; height: 18rem; animation-delay: -4s; }
      .reveal { opacity: 0; transform: translateY(28px); transition: opacity .65s ease, transform .65s ease; }
      .reveal.show { opacity: 1; transform: translateY(0); }
      .card { transition: transform .3s ease, box-shadow .3s ease; }
      .card:hover { transform: translateY(-7px); }
      .shine { position: relative; overflow: hidden; }
      .shine:after { content: ""; position: absolute; top: -60%; bottom: -60%; left: -45%; width: 35%; background: linear-gradient(90deg, transparent, rgba(255,255,255,.55), transparent); transform: skewX(-18deg); }
      .shine:hover:after { left: 120%; transition: left .8s ease; }
      @media (max-width: 640px) { .card:hover { transform: none; } .shine:hover:after { left: -45%; transition: none; } .snow-ring { display: none; } .snow-particle { opacity: .45; } }
      @media (prefers-reduced-motion: reduce) { .float, .pulse, .wind, .spin, .chill-wave, .temp-glow, .snow-particle, .snow-ring { animation: none; } .snow-vortex { display: none; } .reveal { opacity: 1; transform: none; transition: none; } }
    `}</style>
  );
}

export function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.unobserve(node);
      }
    }, { threshold: 0.12 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`reveal ${visible ? "show" : ""} ${className}`}>{children}</div>;
}

export function Button({ children, variant = "primary", className = "" }) {
  const style = variant === "primary"
    ? "bg-gradient-to-r from-blue-950 to-sky-600 text-white hover:from-blue-900 hover:to-sky-500"
    : "border border-blue-200 bg-white text-blue-950 hover:bg-blue-50";
  return <button className={`shine flex h-12 w-full items-center justify-center rounded-2xl px-5 text-sm font-black shadow-lg transition hover:-translate-y-1 sm:h-14 sm:w-auto sm:px-7 sm:text-base ${style} ${className}`}>{children}</button>;
}

export function WhatsAppButton({ children = "WhatsApp", className = "" }) {
  return (
    <a href={whatsappLink} target="_blank" rel="noreferrer" className={`shine flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 px-5 text-sm font-black text-white shadow-lg transition hover:-translate-y-1 sm:h-14 sm:w-auto sm:px-7 sm:text-base ${className}`}>
      <WhatsAppIcon className="h-5 w-5 shrink-0" />
      <span>{children}</span>
    </a>
  );
}

export function SectionTitle({ eyebrow, title, text, align = "center" }) {
  const center = align === "center";
  return (
    <Reveal className={center ? "mb-8 text-center sm:mb-10" : "mb-8 grid items-end gap-5 sm:mb-10 lg:grid-cols-[1fr_0.85fr]"}>
      <div>
        <p className="text-xs font-black uppercase tracking-[0.25em] text-sky-500 sm:text-sm sm:tracking-[0.35em]">{eyebrow}</p>
        <h2 className="mt-3 text-2xl font-black uppercase leading-tight text-blue-950 sm:text-4xl lg:text-5xl">{title}</h2>
      </div>
      {text && <p className={`${center ? "mx-auto" : ""} mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 lg:mt-0`}>{text}</p>}
    </Reveal>
  );
}

export function CardGrid({ items, type = "default" }) {
  const gridClass = type === "problems" ? "grid gap-4 sm:grid-cols-2 lg:grid-cols-4" : "grid gap-5 md:grid-cols-2 lg:grid-cols-3";
  return (
    <div className={gridClass}>
      {items.map((item, index) => (
        <Reveal key={item.title} delay={index * 70}>
          <div className="card h-full rounded-3xl bg-white p-5 shadow-lg ring-1 ring-blue-100 hover:shadow-2xl sm:p-6">
            <div className="mb-4 text-3xl sm:text-4xl">{item.icon}</div>
            <h3 className="text-base font-black uppercase text-blue-950 sm:text-lg">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">{item.text}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

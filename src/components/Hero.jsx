import { useState } from "react";
import { phoneNumber, whatsappLink } from "../data.js";
import { Button, Reveal, WhatsAppButton } from "./UI.jsx";
import WhatsAppIcon from "./WhatsAppIcon.jsx";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menu = [
    ["#services", "Услуги"], ["#problems", "Проблемы"], ["#parts", "Запчасти"],
    ["#included", "Монтаж"], ["#work", "Как работаем"], ["#prices", "Цены"], ["#contact", "Контакты"]
  ];

  return (
    <nav className="sticky top-3 z-40 mx-auto max-w-7xl rounded-3xl bg-white/85 px-4 py-4 shadow-xl backdrop-blur sm:px-5">
      <div className="flex items-center justify-between gap-3">
        <a href="#top" onClick={() => setMobileMenuOpen(false)} className="flex min-w-0 items-center gap-3">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-blue-900 to-sky-400 text-sm font-black text-white sm:h-11 sm:w-11 sm:text-lg">КК</div>
          <div className="min-w-0">
            <p className="truncate text-sm font-black uppercase leading-none text-blue-950 sm:text-lg">Контроль Климат</p>
            <p className="truncate text-[10px] font-medium text-slate-500 sm:text-xs">Ремонт и установка кондиционеров</p>
          </div>
        </a>

        <div className="hidden items-center gap-4 text-sm font-semibold text-slate-600 lg:flex xl:gap-5">
          {menu.map(([href, label]) => <a key={href} href={href} className="hover:text-blue-700">{label}</a>)}
        </div>

        <div className="hidden items-center gap-3 xl:flex">
          <Button className="px-5">📞 Позвонить</Button>
          <WhatsAppButton className="px-5">WhatsApp</WhatsAppButton>
        </div>

        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-blue-100 bg-white text-xl font-black text-blue-950 shadow-sm lg:hidden" aria-label="Открыть меню">
          {mobileMenuOpen ? "×" : "☰"}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="mt-4 rounded-2xl border border-blue-100 bg-white p-4 lg:hidden">
          <div className="grid gap-2 text-sm font-semibold text-slate-700 sm:grid-cols-2">
            {menu.map(([href, label]) => (
              <a key={href} href={href} onClick={() => setMobileMenuOpen(false)} className="rounded-xl px-3 py-2 hover:bg-blue-50">{label}</a>
            ))}
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <Button>📞 Позвонить</Button>
            <WhatsAppButton>WhatsApp</WhatsAppButton>
          </div>
        </div>
      )}
    </nav>
  );
}

export function AirConditionerIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-xs sm:max-w-xl">
      <div className="float relative rounded-[1.5rem] border border-white bg-white/90 p-4 shadow-2xl sm:rounded-[2rem] sm:p-5">
        <div className="relative h-24 rounded-[1.25rem] bg-gradient-to-b from-white to-slate-100 shadow-inner ring-1 ring-slate-200 sm:h-32 sm:rounded-[1.5rem]">
          <div className="absolute right-6 top-5 text-xs font-bold text-slate-300 sm:right-10 sm:top-7 sm:text-sm">23°</div>
          <div className="flex h-full items-end px-5 pb-4 sm:px-8"><div className="h-3 w-full rounded-full bg-slate-300 shadow-inner sm:h-4" /></div>
        </div>
        <div className="mt-4 flex justify-center gap-3 text-4xl font-black text-sky-400 sm:mt-5 sm:gap-4 sm:text-5xl">
          <span className="wind">≋</span><span className="wind opacity-70" style={{ animationDelay: "0.35s" }}>≋</span><span className="wind opacity-40" style={{ animationDelay: "0.7s" }}>≋</span>
        </div>
      </div>
      <div className="float absolute -bottom-16 left-0 hidden w-40 rounded-3xl bg-white p-4 shadow-xl ring-1 ring-slate-100 sm:block lg:-bottom-20 lg:w-48">
        <div className="mb-3 grid h-20 place-items-center rounded-2xl bg-slate-100 text-4xl lg:h-24">🌀</div>
        <p className="text-sm font-bold text-blue-950">Наружный блок</p>
      </div>
      <div className="float absolute -bottom-14 right-0 hidden w-40 rounded-3xl bg-white p-4 shadow-xl ring-1 ring-slate-100 sm:block lg:-bottom-16 lg:w-44">
        <div className="mb-3 grid h-16 place-items-center rounded-2xl bg-blue-950 text-3xl text-white lg:h-20 lg:text-4xl">🌡️</div>
        <p className="text-sm font-bold text-blue-950">Контроль давления</p>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative px-3 py-4 sm:px-6 sm:py-6 lg:px-12">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.22),transparent_35%),radial-gradient(circle_at_top_right,rgba(30,64,175,0.16),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 hidden sm:block">
        <div className="pulse absolute left-[8%] top-32 h-28 w-28 rounded-full bg-sky-300/30 blur-2xl" />
        <div className="float absolute right-[10%] top-44 h-44 w-44 rounded-full bg-blue-300/20 blur-3xl" />
        <div className="spin absolute right-[18%] top-72 text-5xl text-sky-200/70">❄️</div>
      </div>
      <Header />

      <div className="mx-auto grid max-w-7xl items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:py-24">
        <Reveal>
          <div className="text-center lg:text-left">
            <div className="shine mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-blue-900 shadow-sm ring-1 ring-blue-100 sm:text-sm">❄️ Выезд по Астане и области</div>
            <h1 className="mx-auto max-w-4xl text-3xl font-black uppercase leading-[1] tracking-tight text-blue-950 sm:text-5xl lg:mx-0 lg:text-7xl">Ремонт, установка и обслуживание кондиционеров</h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 lg:mx-0">Профессиональная диагностика, монтаж, чистка, заправка фреоном и замена комплектующих для бытовых и офисных кондиционеров.</p>
            <div className="mt-8 grid gap-3 sm:mx-auto sm:max-w-xl sm:grid-cols-2 lg:mx-0">
              <WhatsAppButton>Написать в WhatsApp</WhatsAppButton>
              <a
  href="#prices"
  className="shine flex h-12 w-full items-center justify-center rounded-2xl border border-blue-200 bg-white px-5 text-sm font-black text-blue-950 shadow-lg transition hover:-translate-y-1 hover:bg-blue-50 sm:h-14 sm:w-auto sm:px-7 sm:text-base"
>
  Узнать стоимость
</a>
            </div>
          </div>
        </Reveal>
        <Reveal className="pb-2 sm:pb-24 lg:pb-20" delay={160}><AirConditionerIllustration /></Reveal>
      </div>
    </section>
  );
}

export function FloatingWhatsApp() {
  return (
    <a href={whatsappLink} target="_blank" rel="noreferrer" className="pulse fixed bottom-4 left-4 z-50 flex h-14 items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 px-4 text-white shadow-2xl ring-4 ring-white transition hover:scale-105 sm:bottom-5 sm:left-5 sm:h-16 sm:px-5">
      <WhatsAppIcon className="h-6 w-6 shrink-0 sm:h-7 sm:w-7" />
      <span className="hidden text-xs font-black uppercase sm:block sm:text-sm">WhatsApp</span>
    </a>
  );
}

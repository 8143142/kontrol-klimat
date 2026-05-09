import { services, problems, installSteps, workSteps, prices, parts, conditionerTypes, faq, phoneNumber } from "./data.js";
import { SiteEffects, SectionTitle, CardGrid, Reveal, Button, WhatsAppButton } from "./components/UI.jsx";
import { Hero, FloatingWhatsApp } from "./components/Hero.jsx";
import { SnowVortex } from "./components/Effects.jsx";
import { KKLogo } from "./components/Logo.jsx";
import { BeforeAfterCleaning, LiveThermostat } from "./components/Interactive.jsx";
import AIAssistant from "./components/AIAssistant.jsx";

export default function KontrolKlimatLanding() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-gradient-to-b from-white via-sky-50 to-white text-slate-900">
      <SiteEffects />
      <SnowVortex />
      <Hero />

      <section id="services" className="px-4 py-12 sm:px-6 sm:py-16 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Что мы обслуживаем" title="Все по кондиционерам в одном месте" />
          <CardGrid items={services} />
        </div>
      </section>

      <section id="cleaning-effect" className="px-4 pb-12 sm:px-6 sm:pb-16 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Результат" title="До / После чистки и живой климат" text="Небольшой интерактивный блок показывает, зачем нужна профилактика: поток воздуха становится чище, а температура быстрее приходит к комфортному уровню." />
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal><BeforeAfterCleaning /></Reveal>
            <Reveal delay={140}><LiveThermostat /></Reveal>
          </div>
        </div>
      </section>

      <section id="problems" className="px-4 py-12 sm:px-6 sm:py-16 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Симптомы" title="С какими поломками поможем" align="left" text="Клиенту проще выбрать не услугу, а свою проблему. Поэтому добавили блок с понятными симптомами." />
          <CardGrid items={problems} type="problems" />
        </div>
      </section>

      <section id="parts" className="px-4 py-12 sm:px-6 sm:py-16 lg:px-12">
        <Reveal className="mx-auto grid max-w-7xl items-center gap-8 rounded-[2rem] bg-gradient-to-br from-blue-950 via-blue-900 to-sky-700 p-5 text-white shadow-2xl sm:rounded-[2.5rem] sm:p-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="text-center lg:text-left">
            <div className="mb-6 flex justify-center lg:justify-start"><KKLogo /></div>
            <h2 className="text-2xl font-black uppercase leading-tight sm:text-4xl lg:text-5xl">Контроль климата — наша работа!</h2>
            <p className="mt-5 text-base leading-7 text-blue-100 sm:text-lg sm:leading-8">Подбираем комплектующие, проверяем систему и выполняем ремонт так, чтобы кондиционер снова охлаждал стабильно.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {parts.map((part) => <div key={part} className="rounded-2xl bg-white/12 px-4 py-4 text-sm font-bold ring-1 ring-white/20 sm:text-base">🛠️ {part}</div>)}
          </div>
        </Reveal>
      </section>

      <section id="included" className="px-4 pb-12 sm:px-6 sm:pb-16 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-white p-5 shadow-xl ring-1 ring-blue-100 sm:rounded-[2.5rem] sm:p-10">
          <SectionTitle eyebrow="Монтаж под ключ" title="Что входит в установку" text="Монтаж — это не просто повесить кондиционер, а полноценная работа по технологии." />
          <CardGrid items={installSteps} />
        </div>
      </section>

      <section className="px-4 pb-12 sm:px-6 sm:pb-16 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <div className="rounded-[2rem] bg-gradient-to-br from-blue-950 to-sky-700 p-5 text-white shadow-2xl sm:rounded-[2.5rem] sm:p-8">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-100 sm:text-sm">Склад</p>
              <h2 className="mt-3 text-2xl font-black uppercase leading-tight sm:text-4xl lg:text-5xl">Запчасти и расходники под рукой</h2>
              <p className="mt-5 text-base leading-7 text-blue-100 sm:text-lg sm:leading-8">Когда расходники есть в наличии, ремонт проходит быстрее.</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {parts.map((item) => (
                  <div key={item} className="rounded-2xl bg-white/12 px-4 py-3 text-sm font-bold ring-1 ring-white/20">{item}</div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div id="choose" className="rounded-[2rem] bg-white p-5 shadow-xl ring-1 ring-blue-100 sm:rounded-[2.5rem] sm:p-8">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-sky-500 sm:text-sm">Подбор</p>
              <h2 className="mt-3 text-2xl font-black uppercase leading-tight text-blue-950 sm:text-4xl">Какой кондиционер выбрать?</h2>
              <div className="mt-6 grid gap-3">
                {conditionerTypes.map((item) => (
                  <div key={item.title} className="rounded-2xl bg-sky-50 p-4 ring-1 ring-blue-100">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h3 className="text-sm font-black uppercase text-blue-950 sm:text-base">{item.title}</h3>
                      <span className="rounded-full bg-white px-3 py-1 text-xs font-black uppercase text-sky-600 ring-1 ring-blue-100">{item.tag}</span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="work" className="px-4 py-12 sm:px-6 sm:py-16 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Процесс" title="Как мы работаем" align="left" text="Сначала выясняем причину проблемы, затем согласовываем стоимость и только после этого выполняем работы." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {workSteps.map((step, index) => (
              <Reveal key={step.num} delay={index * 80}>
                <div className="card relative h-full overflow-hidden rounded-3xl bg-white p-5 shadow-lg ring-1 ring-blue-100 hover:shadow-2xl sm:p-7">
                  <div className="absolute -right-4 -top-6 text-6xl font-black text-sky-100 sm:text-7xl">{step.num}</div>
                  <div className="relative">
                    <div className="mb-5 grid h-11 w-11 place-items-center rounded-2xl bg-blue-950 text-xs font-black text-white sm:h-12 sm:w-12">{step.num}</div>
                    <h3 className="text-lg font-black uppercase text-blue-950 sm:text-xl">{step.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">{step.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="px-4 pb-12 sm:px-6 sm:pb-16 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-white p-5 shadow-xl ring-1 ring-blue-100 sm:rounded-[2.5rem] sm:p-10">
          <SectionTitle eyebrow="Стоимость" title="Популярные услуги" text="Точная цена зависит от модели кондиционера, сложности работы и необходимости замены запчастей." />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {prices.map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
                <div className="card shine h-full rounded-3xl bg-gradient-to-b from-sky-50 to-white p-5 ring-1 ring-blue-100 hover:shadow-xl sm:p-6">
                  <h3 className="text-base font-black uppercase text-blue-950 sm:text-lg">{item.title}</h3>
                  <p className="mt-4 text-2xl font-black text-sky-600 sm:text-3xl">{item.price}</p>
                  <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-12 sm:px-6 sm:pb-16 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div className="rounded-[2rem] bg-gradient-to-br from-blue-950 to-sky-700 p-5 text-white shadow-2xl sm:rounded-[2.5rem] sm:p-8">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-100 sm:text-sm">FAQ</p>
              <h2 className="mt-3 text-2xl font-black uppercase leading-tight sm:text-4xl lg:text-5xl">Частые вопросы</h2>
              <p className="mt-5 text-base leading-7 text-blue-100 sm:text-lg sm:leading-8">Ответы на основные вопросы перед вызовом мастера.</p>
            </div>
          </Reveal>
          <div className="grid gap-4">
            {faq.map((item, index) => (
              <Reveal key={item.q} delay={index * 80}>
                <div className="rounded-3xl bg-white p-5 shadow-lg ring-1 ring-blue-100 sm:p-6">
                  <h3 className="text-base font-black uppercase text-blue-950 sm:text-lg">{item.q}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">{item.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-4 pb-24 sm:px-6 sm:pb-28 lg:px-12">
        <Reveal className="mx-auto max-w-7xl rounded-[2rem] bg-white p-5 shadow-xl ring-1 ring-blue-100 sm:rounded-[2.5rem] sm:p-10">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div className="text-center lg:text-left">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-sky-500 sm:text-sm">Заявка</p>
              <h2 className="mt-3 text-2xl font-black uppercase leading-tight text-blue-950 sm:text-4xl lg:text-5xl">Нужен ремонт или установка?</h2>
              <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 lg:mx-0">Оставьте заявку — специалист уточнит задачу, примерную стоимость и время выезда.</p>
            </div>
            <div className="grid gap-4 lg:w-80 lg:justify-self-end">
              <Button className="w-full">📞 {phoneNumber}</Button>
              <WhatsAppButton className="w-full">Написать в WhatsApp</WhatsAppButton>
              <Button variant="outline" className="w-full">📍 Астана</Button>
            </div>
          </div>
        </Reveal>
      </section>

      <FloatingWhatsApp />
      <AIAssistant />
    </main>
  );
}

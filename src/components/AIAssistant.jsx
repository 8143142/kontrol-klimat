import { useState } from "react";

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { role: "bot", text: "Здравствуйте! Я AI-ассистент Контроль Климат. Задайте вопрос про услуги, цены, чистку, заправку, установку или этапы работы.", link: "#services", linkText: "Смотреть услуги" }
  ]);

  const answers = [
    { words: ["цена", "стоимость", "сколько", "прайс", "тг"], text: "Ориентировочные цены: диагностика — от 5 000 ₸, чистка — от 10 000 ₸, заправка фреоном — от 12 000 ₸, установка — от 35 000 ₸. Точная цена зависит от модели и сложности работы.", link: "#prices", linkText: "Перейти к ценам" },
    { words: ["чистка", "запах", "пахнет", "фильтр"], text: "Чистка включает фильтры, теплообменник, корпус и дренаж. Если есть запах, чаще всего нужна глубокая профилактика.", link: "#cleaning-effect", linkText: "Смотреть эффект" },
    { words: ["фреон", "заправка", "давление"], text: "При заправке мастер проверяет давление, ищет возможную утечку и дозаправляет систему для стабильного охлаждения.", link: "#prices", linkText: "Смотреть стоимость" },
    { words: ["установка", "монтаж", "трасса"], text: "Установка включает монтаж блоков, прокладку трассы, подключение, проверку давления и запуск системы.", link: "#included", linkText: "Что входит в монтаж" },
    { words: ["не охлаждает", "плохо", "капает", "шум", "ошибка", "лед", "не включается"], text: "Такие симптомы могут быть из-за фильтров, фреона, дренажа, платы, наружного блока или компрессора. Лучше начать с диагностики.", link: "#problems", linkText: "Смотреть поломки" },
    { words: ["заявка", "мастер", "выезд", "как вызвать", "контакт", "телефон", "whatsapp", "ватсап"], text: "Можно оставить заявку по телефону или через WhatsApp. Мастер уточнит задачу, стоимость и время выезда.", link: "#contact", linkText: "Контакты" }
  ];

  function findAnswer(question) {
    const q = question.toLowerCase();
    const found = answers.find((item) => item.words.some((word) => q.includes(word)));
    return found || { text: "Я могу подсказать по услугам, ценам, чистке, фреону, установке, поломкам и заявке. Для точного ответа лучше связаться с мастером.", link: "#contact", linkText: "Оставить заявку" };
  }

  function sendMessage(question = input) {
    const clean = question.trim();
    if (!clean) return;
    const answer = findAnswer(clean);
    setMessages((prev) => [...prev, { role: "user", text: clean }, { role: "bot", ...answer }]);
    setInput("");
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 sm:bottom-5 sm:right-5">
      {open && (
        <div className="mb-3 flex max-h-[75vh] w-[calc(100vw-2rem)] max-w-md flex-col overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-blue-100">
          <div className="bg-gradient-to-r from-blue-950 to-sky-600 p-4 text-white sm:p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-100 sm:text-sm">AI-ассистент сайта</p>
                <h3 className="text-lg font-black sm:text-xl">Контроль Климат</h3>
              </div>
              <button onClick={() => setOpen(false)} className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/15 text-xl font-bold hover:bg-white/25">×</button>
            </div>
          </div>
          <div className="flex-1 space-y-3 overflow-y-auto p-4 sm:p-5">
            {messages.map((message, index) => (
              <div key={index} className={message.role === "user" ? "flex justify-end" : "flex justify-start"}>
                <div className={message.role === "user" ? "max-w-[90%] rounded-2xl bg-blue-950 px-4 py-3 text-sm leading-6 text-white" : "max-w-[90%] rounded-2xl bg-sky-50 px-4 py-3 text-sm leading-6 text-slate-700 ring-1 ring-sky-100"}>
                  <p>{message.text}</p>
                  {message.link && <a href={message.link} onClick={() => setOpen(false)} className="mt-3 inline-flex rounded-xl bg-white px-3 py-2 text-xs font-black uppercase text-blue-950 ring-1 ring-blue-100 hover:bg-blue-50">{message.linkText}</a>}
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-blue-100 p-3 sm:p-4">
            <div className="mb-3 flex flex-wrap gap-2">
              {["Сколько стоит чистка?", "Плохо охлаждает", "Как проходит установка?"].map((question) => (
                <button key={question} onClick={() => sendMessage(question)} className="rounded-full bg-blue-50 px-3 py-2 text-[11px] font-bold text-blue-950 hover:bg-blue-100 sm:text-xs">{question}</button>
              ))}
            </div>
            <div className="flex gap-2">
              <input value={input} onChange={(event) => setInput(event.target.value)} onKeyDown={(event) => event.key === "Enter" && sendMessage()} placeholder="Напишите вопрос..." className="h-11 min-w-0 flex-1 rounded-2xl border border-blue-100 px-4 text-sm outline-none focus:border-sky-400 sm:h-12" />
              <button onClick={() => sendMessage()} className="h-11 rounded-2xl bg-blue-950 px-4 text-sm font-black text-white hover:bg-blue-800 sm:h-12 sm:px-5">➜</button>
            </div>
          </div>
        </div>
      )}
      <button onClick={() => setOpen(!open)} className="pulse flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-950 to-sky-500 text-2xl text-white shadow-2xl ring-4 ring-white transition hover:scale-105 sm:h-16 sm:w-16 sm:text-3xl">🤖</button>
    </div>
  );
}

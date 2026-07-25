"use client";

import { useEffect, useState } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const asset = (path: string) => `${basePath}${path}`;

const developers = [
  "LEGENDA", "КВС", "AAG", "GloraX", "Трест", "Брусника", "ЛСР", "Setl",
  "Аквилон", "Element", "RBI", "Полис", "Вита", "РСТИ", "Евроинвест",
  "Новое Измерение", "Смольячково", "ЗапСтрой", "Лидер Групп", "Fizika",
  "ФСК", "ПСК", "Едино", "DOGMA", "Расцветай", "НСК", "ЗаСтрой", "БФА",
  "Развитие", "ИнтерГрупп", "БауСити", "POINT", "VEREN",
];

const program = [
  {
    time: "14:30–16:00",
    title: "Регистрация гостей",
    text: "Встреча участников, получение материалов, приветственный фуршет и первые знакомства.",
  },
  {
    time: "16:00–16:45",
    title: "Выставочная часть",
    text: "Знакомство с решениями партнёров и свободное общение с представителями строительной отрасли.",
  },
  {
    time: "16:45–19:00",
    title: "Официальная часть",
    text: "Открытие Дня Застройщика, деловая конференция, выступления экспертов и презентации компаний.",
  },
  {
    time: "19:00–19:15",
    title: "Переход в банкетный зал",
    text: "Сбор зарегистрированных гостей и рассадка на торжественной части.",
  },
  {
    time: "19:15–23:00",
    title: "Торжественный ужин",
    text: "Банкет, ведущий, концерт артистов, шоу-программа, подарки, танцы и праздничный финал.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const items = [...document.querySelectorAll<HTMLElement>("[data-reveal]")];
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("visible")),
      { threshold: 0.12 },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <header className="topbar">
        <a href="#top" className="date">7 августа 2026</a>
        <button
          className="menu"
          aria-label="Открыть меню"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          МЕНЮ <span />
        </button>
        <nav className={menuOpen ? "nav open" : "nav"}>
          <a href="#about" onClick={() => setMenuOpen(false)}>О событии</a>
          <a href="#program" onClick={() => setMenuOpen(false)}>Программа</a>
          <a href="#banquet" onClick={() => setMenuOpen(false)}>Банкет</a>
          <a href="#moe" onClick={() => setMenuOpen(false)}>МОЁ</a>
          <a href="#registration" onClick={() => setMenuOpen(false)}>Регистрация</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow hero-in">Будем рады видеть вас среди гостей</p>
          <h1 className="hero-in delay-1">День<br />Застройщика</h1>
          <div className="hero-meta hero-in delay-2">
            <span>Санкт-Петербург</span>
            <span>Охта Парк</span>
          </div>
          <a href="#registration" className="action hero-in delay-3">Подтвердить участие <b>→</b></a>
          <div className="hero-logos hero-in delay-3">
            <img src={asset("/eurostroy-logo.jpg")} alt="Еврострой" />
            <a href="https://agencymoe.ru/" target="_blank" rel="noreferrer">
              <img src={asset("/moe-logo.svg")} alt="МОЁ — генеральный партнёр" />
            </a>
          </div>
        </div>
        <div className="hero-image" aria-label="Агентство МОЁ — генеральный партнёр Дня Застройщика">
          <img
            src={asset("/moe-hero.webp")}
            alt="Девушка в сером жакете и шляпе — образ агентства недвижимости МОЁ"
            fetchPriority="high"
          />
          <span>Приглашение от генерального партнёра МОЁ</span>
        </div>
      </section>

      <section className="intro section" id="about" data-reveal>
        <p className="number">01</p>
        <div>
          <p className="eyebrow">О событии</p>
          <h2>Один день.<br />Вся отрасль.</h2>
        </div>
        <div className="intro-text">
          <p>
            «День Застройщика Санкт-Петербург» впервые объединит на одной площадке
            руководителей девелоперских компаний, производителей, подрядчиков и ведущих
            специалистов отрасли.
          </p>
          <p>
            В программе — выставка решений, профессиональная конференция и торжественный
            вечер. Это новый ежегодный формат всероссийского проекта команды
            «Дня Проектировщика».
          </p>
          <a href="https://www.denproekt.ru/" target="_blank" rel="noreferrer" className="text-link">
            О проекте «День Проектировщика» ↗
          </a>
        </div>
      </section>

      <div className="ticker" aria-label="Компании-застройщики, представители которых будут присутствовать">
        <div>
          {[...developers, ...developers].map((name, index) => <span key={`${name}-${index}`}>{name}</span>)}
        </div>
      </div>

      <section className="audience section" data-reveal>
        <p className="eyebrow">В зале</p>
        <h2>Лица, принимающие решения</h2>
        <p className="big-copy">
          На мероприятии будут присутствовать руководители и представители крупных
          компаний-застройщиков Санкт-Петербурга, партнёры деловой программы и ведущие
          специалисты строительной отрасли.
        </p>
      </section>

      <section className="program section" id="program" data-reveal>
        <div className="program-head">
          <p className="number">02</p>
          <div>
            <p className="eyebrow">7 августа</p>
            <h2>Программа дня</h2>
          </div>
        </div>
        <div className="timeline">
          {program.map((item) => (
            <article key={item.time}>
              <time>{item.time}</time>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="celebration section" id="banquet" data-reveal>
        <div className="celebration-intro">
          <p className="eyebrow">19:15–23:00</p>
          <h2>Вечер, который<br />запомнится</h2>
          <p>
            После деловой программы гостей ждёт настоящий праздник: торжественный
            ужин, харизматичный ведущий, артисты, яркие постановки, интерактивы,
            подарки и танцы. Это время для лёгкого общения и новых знакомств уже
            вне формальной части.
          </p>
        </div>
        <div className="celebration-gallery">
          <figure className="gallery-wide">
            <img src={asset("/XXX02564.jpg")} alt="Ведущий торжественной программы Дня Застройщика" />
            <figcaption>Ведущий и большая вечерняя программа</figcaption>
          </figure>
          <figure>
            <img src={asset("/DSC_3068.jpg")} alt="Танцевальное шоу и гости на празднике" />
            <figcaption>Шоу, в которое включаются гости</figcaption>
          </figure>
          <figure>
            <img src={asset("/DSC_2261.jpg")} alt="Яркое танцевальное выступление артистов" />
            <figcaption>Постановки артистов</figcaption>
          </figure>
          <figure className="gallery-wide cinematic">
            <img src={asset("/XXX02613.jpg")} alt="Артисты на сцене банкетной части" />
            <figcaption>Эффектная концертная часть</figcaption>
          </figure>
          <figure>
            <img src={asset("/DSC_1996.jpg")} alt="Гости за столами во время торжественного ужина" />
            <figcaption>Торжественный ужин и общение</figcaption>
          </figure>
          <figure>
            <img src={asset("/XXX02923.jpg")} alt="Гости с подарками после праздничной программы" />
            <figcaption>Подарки и тёплый финал вечера</figcaption>
          </figure>
        </div>
      </section>

      <section className="moe section" id="moe" data-reveal>
        <div className="portrait">
          <img src={asset("/moe-partner-1.jpg")} alt="Екатерина Алексеева, владелица агентства недвижимости МОЁ" />
        </div>
        <div className="moe-copy">
          <img className="moe-mark" src={asset("/moe-logo.svg")} alt="Агентство недвижимости МОЁ" />
          <p className="eyebrow">Генеральный партнёр</p>
          <h2>Екатерина Алексеева</h2>
          <p>
            Владелица семейного агентства недвижимости МОЁ и представитель генерального
            партнёра мероприятия. Вместе с командой МОЁ Екатерина участвует в создании
            гостевой атмосферы, деловых знакомств и тёплого общения на площадке.
          </p>
          <a className="text-link" href="https://agencymoe.ru/" target="_blank" rel="noreferrer">
            Сайт агентства МОЁ ↗
          </a>
        </div>
      </section>

      <section className="place section" data-reveal>
        <div>
          <p className="eyebrow">Место встречи</p>
          <h2>Охта Парк</h2>
          <p>
            Загородная площадка рядом с Санкт-Петербургом: деловая программа сменится
            вечером в ресторанном пространстве.
          </p>
          <p className="transfer">
            Организован трансфер от метро «Парнас» до площадки и обратно после
            завершения мероприятия в 23:00. Точное время отправления сообщит оргкомитет
            зарегистрированным гостям.
          </p>
        </div>
        <img src={asset("/ohta-restaurant-new.jpg")} alt="Ресторан в Охта Парке" />
      </section>

      <section className="registration" id="registration" data-reveal>
        <div className="registration-kicker">Важная информация для гостей</div>
        <h2>Подтвердите участие<br />до 30 июля включительно</h2>
        <div className="registration-grid">
          <div>
            <p>
              Для регистрации и рассадки на торжественной части заполните анкету
              отдельно на каждого гостя и отправьте её координатору.
            </p>
            <p className="warning">
              Доступ к банкетной части и место за столом подтверждаются только после
              регистрации заполненной анкеты.
            </p>
          </div>
          <div className="registration-actions">
            <a className="button light" href={asset("/anketa-gostya.doc")} download>
              Скачать анкету <span>↓</span>
            </a>
            <a
              className="button dark"
              href="mailto:evrostroy1996@mail.ru?subject=Анкета%20гостя%20—%20День%20Застройщика%202026"
            >
              Отправить анкету <span>→</span>
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div>
          <p className="eyebrow">Координатор регистрации</p>
          <h3>Юлия Мельникова</h3>
          <a href="tel:+79119105472">+7 911 910-54-72</a>
          <a href="mailto:evrostroy1996@mail.ru">evrostroy1996@mail.ru</a>
        </div>
        <div className="footer-links">
          <a href="https://www.denproekt.ru/" target="_blank" rel="noreferrer">День Проектировщика ↗</a>
          <a href="https://agencymoe.ru/" target="_blank" rel="noreferrer">Агентство МОЁ ↗</a>
          <a href="#top">Наверх ↑</a>
        </div>
        <p className="footnote">День Застройщика · Санкт-Петербург · 2026</p>
      </footer>
    </main>
  );
}

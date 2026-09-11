"use client";

import { useEffect, useRef, useState } from "react";
import {
  ARTICLE_URL,
  CAROUSEL_SLIDES,
  CATEGORIES,
  COOKIE_COPY,
  FOOTER_COLUMNS,
  LINKS,
  MEDIA,
  NEWS_NAV,
  PRODUCT_NAV,
  RECENT_NEWS,
  RELATED,
  SECURITY_POINTS,
  TAKEAWAYS,
} from "@/lib/content";

function MetaMark() {
  return (
    <svg height="18" viewBox="0 0 496 100" aria-hidden>
      <path fill="currentColor" d="M108,0c-12.3,0-22,9.3-30.7,21.1C65.3,5.8,55.2,0,43.2,0C18.8,0,0,31.9,0,65.6C0,86.7,10.2,100,27.3,100c12.3,0,21.2-5.8,36.9-33.3c0,0,6.6-11.6,11.1-19.6c1.6,2.6,3.2,5.3,5,8.3l7.4,12.4C102,91.8,110,100,124.6,100C141.2,100,150.5,86.5,150.5,65C150.5,29.7,131.3,0,108,0z M52.2,59.2c-12.8,20-17.2,24.5-24.3,24.5c-7.3,0-11.7-6.4-11.7-17.9c0-24.5,12.2-49.5,26.8-49.5c7.9,0,14.5,4.6,24.6,19C58,50,52.2,59.2,52.2,59.2z M100.4,56.7L91.5,42c-2.4-3.9-4.7-7.5-6.9-10.7c8-12.3,14.5-18.4,22.3-18.4c16.2,0,29.2,23.9,29.2,53.2c0,11.2-3.7,17.7-11.2,17.7C117.6,83.7,114.2,78.9,100.4,56.7z" />
      <path fill="currentColor" d="M182.1,3.2h18.8l32,57.8l32-57.8h18.4v95.1h-15.3V25.4l-28,50.4h-14.4l-28-50.4v72.9h-15.3V3.2z" />
      <path fill="currentColor" d="M332.8,100c-7.1,0-13.4-1.6-18.7-4.7s-9.6-7.5-12.6-13.1S297,70.2,297,63c0-7.3,1.5-13.7,4.4-19.4s7-10,12.3-13.2s11.2-4.8,18-4.8c6.7,0,12.5,1.6,17.4,4.8s8.6,7.7,11.2,13.4s3.9,12.5,3.9,20.2v4.2h-52.1c1,5.8,3.3,10.4,7,13.7s8.5,5,14.2,5c4.6,0,8.5-0.7,11.8-2s6.4-3.4,9.3-6.2l8.1,10C354.5,96.3,344.6,100,332.8,100z M344,43.6c-3.2-3.3-7.4-4.9-12.6-4.9s-9.3,1.7-12.7,5s-5.6,7.9-6.5,13.5h37.3C349.1,51.4,347.2,46.9,344,43.6z" />
      <path fill="currentColor" d="M382.8,40h-14.1V27.5h14.1V6.7h14.8v20.8h21.5V40h-21.5v31.8c0,5.3,0.9,9.1,2.7,11.3s4.9,3.4,9.3,3.4c1.9,0,3.6-0.1,5-0.2s2.9-0.4,4.5-0.6v12.3c-1.7,0.5-3.6,0.9-5.7,1.2s-4.3,0.5-6.6,0.5c-16,0-24-8.7-24-26.2V40z" />
      <path fill="currentColor" d="M496.2,98.3h-14.5V88.4c-2.6,3.7-5.9,6.6-9.8,8.6s-8.5,3-13.6,3c-6.2,0-11.8-1.6-16.6-4.8s-8.6-7.6-11.4-13.2s-4.1-12-4.1-19.2s1.4-13.6,4.2-19.2s6.7-9.9,11.6-13.1s10.6-4.8,17.1-4.8c4.8,0,9.2,0.9,13,2.8s7,4.5,9.6,8v-9.1h14.5V98.3z M481.4,52.2c-1.6-4-4.1-7.2-7.5-9.5s-7.4-3.5-11.8-3.5s-11.4,2.1-15.1,6.4s-5.6,10-5.6,17.2s1.8,13.1,5.4,17.3s8.5,6.4,14.7,6.4c4.6,0,8.6-1.2,12.2-3.5s6.2-5.5,7.7-9.5V52.2z" />
    </svg>
  );
}

function Waveform() {
  return (
    <svg width="46" height="14" viewBox="0 0 46 14" fill="none" aria-hidden>
      <line x1="0.6" y1="4.58" x2="0.6" y2="9.42" stroke="#0064E0" strokeWidth="1.21" strokeLinecap="round" />
      <line x1="4.64" y1="3.37" x2="4.64" y2="10.63" stroke="#0064E0" strokeWidth="1.21" strokeLinecap="round" />
      <line x1="8.27" y1="2.16" x2="8.27" y2="11.84" stroke="#0064E0" strokeWidth="1.21" strokeLinecap="round" />
      <line x1="11.9" y1="0.95" x2="11.9" y2="13.05" stroke="#0064E0" strokeWidth="1.21" strokeLinecap="round" />
      <line x1="16.13" y1="1.56" x2="16.13" y2="11.84" stroke="#0064E0" strokeWidth="1.21" strokeLinecap="round" />
      <line x1="19.76" y1="2.77" x2="19.76" y2="10.63" stroke="#0064E0" strokeWidth="1.21" strokeLinecap="round" />
      <line x1="22.78" y1="4.58" x2="22.78" y2="9.42" stroke="#0064E0" strokeWidth="1.21" strokeLinecap="round" />
      <line x1="26.41" y1="3.37" x2="26.41" y2="10.63" stroke="#0064E0" strokeWidth="1.21" strokeLinecap="round" />
      <line x1="30.04" y1="2.16" x2="30.04" y2="11.84" stroke="#0064E0" strokeWidth="1.21" strokeLinecap="round" />
      <line x1="33.67" y1="0.95" x2="33.67" y2="13.05" stroke="#0064E0" strokeWidth="1.21" strokeLinecap="round" />
      <line x1="37.91" y1="1.56" x2="37.91" y2="11.84" stroke="#0064E0" strokeWidth="1.21" strokeLinecap="round" />
      <line x1="41.54" y1="2.77" x2="41.54" y2="10.63" stroke="#0064E0" strokeWidth="1.21" strokeLinecap="round" />
      <line x1="45.17" y1="3.98" x2="45.17" y2="8.81" stroke="#0064E0" strokeWidth="1.21" strokeLinecap="round" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.7" />
      <path d="M16.5 16.5L21 21" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

type ClonePageProps = {
  methodLabel: string;
  notesHref?: string;
};

export function ClonePage({ methodLabel, notesHref = "./NOTES.md" }: ClonePageProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cookieOn, setCookieOn] = useState(true);
  const [listening, setListening] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [slide, setSlide] = useState(0);
  const [mediaError, setMediaError] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (listening) {
      void audio.play().catch(() => setListening(false));
    } else {
      audio.pause();
    }
  }, [listening]);

  function formatTime(value: number) {
    if (!Number.isFinite(value) || value <= 0) return "00:00";
    const minutes = Math.floor(value / 60);
    const seconds = Math.floor(value % 60);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }

  const currentSlide = CAROUSEL_SLIDES[slide];

  return (
    <div>
      <div className="study-banner" role="note">
        <strong>{methodLabel}</strong>
        {" · "}
        study clone · not an official Meta page ·{" "}
        <a href={ARTICLE_URL} target="_blank" rel="noreferrer">原站 / original</a>
        {notesHref ? (<> {" "}· <a href={notesHref}>方法笔记 / notes</a></>) : null}
      </div>
      <header className="site-header" id="masthead">
        <div className="headernav">
          <div className="header-row">
            <a className="wordmark" href={LINKS.aboutMeta} aria-label="Meta"><MetaMark /></a>
            <nav className="product-nav" aria-label="Meta products">
              <span className="product-nav-left">{PRODUCT_NAV.slice(0, 3).map((item) => (<a key={item.label} href={item.href}>{item.label}</a>))}</span>
              <span className="product-nav-right">{PRODUCT_NAV.slice(3).map((item) => (<a key={item.label} href={item.href}>{item.label}</a>))}</span>
            </nav>
            <button className="icon-btn" type="button" aria-label="Search" onClick={() => setMobileOpen((value) => !value)}><SearchIcon /></button>
            <button className="icon-btn icon-menu" type="button" aria-label="Open menu" aria-expanded={mobileOpen} onClick={() => setMobileOpen((value) => !value)}>{mobileOpen ? "✕" : "☰"}</button>
          </div>
        </div>
        <div className="subnav">
          <div className="header-row">
            <nav className="news-nav" aria-label="Newsroom categories">{NEWS_NAV.map((item) => (<a key={item.label} href={item.href}>{item.label}</a>))}</nav>
            <a className="search-news" href={`${LINKS.newsroom}/`}><SearchIcon /> Search News</a>
          </div>
        </div>
        <div className={mobileOpen ? "mobile-nav open" : "mobile-nav"}>{[...PRODUCT_NAV, ...NEWS_NAV].map((item) => (<a key={item.label} href={item.href}>{item.label}</a>))}</div>
      </header>
      <main className="page">
        <a className="back-link" href={LINKS.newsroom}><span aria-hidden>‹</span> Back to Newsroom</a>
        <div className="news-label">META</div>
        <h1 className="entry-title">Introducing Muse: The World’s First Personal AI Agent Built for Everyone</h1>
        <div className="meta-row">
          <p className="entry-date"><time dateTime="2026-09-08T12:00:51-07:00">September 8, 2026</time></p>
          <button className="listen-btn" type="button" onClick={() => setListening((value) => !value)}><Waveform />{listening ? "PAUSE ARTICLE" : "LISTEN TO ARTICLE"}</button>
          <audio ref={audioRef} src={MEDIA.audio} preload="none" />
        </div>
        <div className="layout">
          <div>
            <div className="hero">
              {mediaError ? (<div className="error-state">Hero video could not load from about.fb.com.</div>) : (
                <video ref={videoRef} poster={MEDIA.poster} src={MEDIA.sizzle} playsInline onError={() => setMediaError(true)} onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)} onTimeUpdate={(event) => setProgress(event.currentTarget.currentTime)} onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} />
              )}
              <div className="hero-chrome">
                <button type="button" aria-label={playing ? "Pause" : "Play"} onClick={() => { const video = videoRef.current; if (!video) return; if (video.paused) void video.play(); else video.pause(); }}>{playing ? "❚❚" : "▶"}</button>
                <span>{formatTime(progress)}</span>
                <input className="hero-track" type="range" min={0} max={duration || 0} value={progress} onChange={(event) => { const next = Number(event.target.value); if (videoRef.current) videoRef.current.currentTime = next; setProgress(next); }} />
                <span>{formatTime(duration)}</span>
              </div>
            </div>
            <section className="takeaways">
              <h2 className="highlights-title">Takeaways</h2>
              <ul>
                {TAKEAWAYS.map((item) => (<li key={item}>{item}</li>))}
                <li>For a deeper look at how Muse was designed and how safety, security, and privacy were built into it, read <a href={LINKS.security}>How We Built Safety Into Muse</a> and <a href={LINKS.designed}>How We Designed Muse</a>.</li>
              </ul>
            </section>
            <article className="article-prose">
              <p>Today, Meta is introducing Muse, a secure, private personal AI agent that proactively helps with people’s goals and suggests ideas. Because personal agents need a new kind of secure computer, <a href={LINKS.security}>Muse runs on Muse Secure VM</a>, a dedicated, virtual machine (VM) that houses both the agent and a person’s data. Muse is designed around the way people already communicate, so talking to it works just like messaging another person, in the Muse app or directly in WhatsApp.</p>
              <p>It’s simple to use. People just tell Muse what needs to get done, and it takes action, powered by <a href={LINKS.spark}>Muse Spark</a>, Meta’s most capable model to date, built for real-world agentic work like this.</p>
              <h2>How It Works</h2>
              <p>Unlike other agents, <a href={LINKS.designed}>Muse was built to work for billions</a> of people worldwide, so there’s no learning curve. Anyone can use it out of the box, no technical experience required. It can handle tasks, like sending an email or booking travel, and it can take on big audacious goals. Once a person shares a goal with Muse, it helps them develop a personalized plan and coordinate their time and resources, then advances the work on its own.</p>
              <p>For tasks that take more time, Muse keeps working after people close the app, and comes back when something changes or when it needs approval, like before it sends an email or makes a purchase.</p>
              <p>When it comes time to pay, Muse can checkout with Link built by Stripe, and it is the first AI agent covered by <a href={LINKS.linkProtections}>Link’s purchase protections</a>.</p>
              <div className="carousel">
                {currentSlide ? (<video key={currentSlide.id} src={currentSlide.src} controls playsInline aria-label={currentSlide.label} />) : (<div className="empty-state">No carousel media.</div>)}
                <div className="carousel-dots">{CAROUSEL_SLIDES.map((item, index) => (<button key={item.id} type="button" aria-label={item.label} aria-current={index === slide} onClick={() => setSlide(index)} />))}</div>
              </div>
              <h2>Built to be Private, Safe, and Secure</h2>
              <p>Personal agents need a new kind of secure computer, so Meta built one for everyone. Muse Secure VM has first-of-its-kind privacy, safety, and security protections engineered into it that no other agent provides:</p>
              <ul>{SECURITY_POINTS.map((point) => (<li key={point}>{point}</li>))}</ul>
              <video src={MEDIA.shopping} controls playsInline aria-label="Muse shopping" />
              <p>Later this year, Meta will introduce Muse Confidential VM, where the whole VM, including a person’s data and conversations with Muse, is encrypted with a key only they hold, so not even Meta can access it.</p>
              <h2>Looking Ahead</h2>
              <p>Meta thinks personal superintelligence will be one of the most transformative technologies of a lifetime. Muse is a first step: an agent that takes on more of the work so people can focus on what matters to them.</p>
              <p>Muse is rolling out in the US on iOS, Android, and <a href={LINKS.museAi}>muse.ai</a>, and coming soon to AI glasses. It’s free for most of what people need, with subscription plans for people who want to do more.</p>
              <p><span style={{ color: "#8A9BA8" }}>Categories: </span>{CATEGORIES.map((cat, index) => (<span key={cat.href}>{index > 0 ? ", " : null}<a href={cat.href}>{cat.label}</a></span>))}</p>
            </article>
          </div>
          <aside className="recent" aria-label="Recent News">
            <h2>RECENT NEWS</h2>
            {RECENT_NEWS.map((item) => (<a key={item.href} href={item.href}><span>{item.title}</span><span aria-hidden>›</span></a>))}
          </aside>
        </div>
        <section className="related">
          {RELATED.map((item) => (<a className="related-card" key={item.href} href={item.href}><img src={item.image} alt="" /><div><div className="news-label">META</div><h3>{item.title}</h3><p className="entry-date">{item.date}</p></div></a>))}
        </section>
        <section className="press-row"><div>Follow Meta Newsroom</div><div>Press Resources · <a href="mailto:press@meta.com">press@meta.com</a></div></section>
      </main>
      <footer className="site-footer">
        <div className="footer-grid">
          {FOOTER_COLUMNS.map((column) => (<div key={column.title}><h3>{column.title}</h3>{column.links.map((link) => (<a key={link} href={LINKS.aboutMeta}>{link}</a>))}</div>))}
        </div>
      </footer>
      {cookieOn ? (<div className="cookie-bar" id="GDPRConsentBar">{COOKIE_COPY.replace("Cookie Policy.", "")}<a href={LINKS.cookiePolicy}> Cookie Policy</a>. <button type="button" onClick={() => setCookieOn(false)} style={{ marginLeft: 12, background: "transparent", color: "#fff", border: "1px solid #fff", padding: "4px 10px", cursor: "pointer" }}>Close</button></div>) : null}
    </div>
  );
}

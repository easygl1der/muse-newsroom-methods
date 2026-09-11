import { useEffect, useRef, useState } from "react";
import "./Section4Section.css";
// Section4Section — authored from pwc section evidence.
export default function Section4Section() {
  const heroRef = useRef(null);
  const [heroPlaying, setHeroPlaying] = useState(false);
  const [heroStarted, setHeroStarted] = useState(false);
  const [heroTime, setHeroTime] = useState(0);
  const [heroDuration, setHeroDuration] = useState(82);
  const [activeSlide, setActiveSlide] = useState(0);
  const [running, setRunning] = useState(true);

  const formatTime = (value) => {
    if (!Number.isFinite(value) || value < 0) return "00:00";
    const minutes = Math.floor(value / 60);
    const seconds = Math.floor(value % 60);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  const startHero = (event) => {
    event?.stopPropagation?.();
    const node = heroRef.current;
    if (!node) return;
    setHeroStarted(true);
    const attempt = node.play();
    if (attempt && typeof attempt.then === "function") {
      attempt.then(() => setHeroPlaying(true)).catch(() => {
        setHeroStarted(false);
        setHeroPlaying(false);
      });
    }
  };
  useEffect(() => {
    const onBannerPlay = () => {
      const node = heroRef.current;
      if (!node) return;
      setHeroStarted(true);
      const attempt = node.play();
      if (attempt && typeof attempt.then === "function") {
        attempt.then(() => setHeroPlaying(true)).catch(() => {
          setHeroStarted(false);
          setHeroPlaying(false);
        });
      }
    };
    window.addEventListener("pwc-play-hero", onBannerPlay);
    return () => window.removeEventListener("pwc-play-hero", onBannerPlay);
  }, []);
  useEffect(() => {
    const root = document.querySelector('[data-pwc-critical="hero-1"]');
    if (!root) return;
    const slides = root.querySelectorAll('.fbcorp-mixed-media-carousel__slide');
    slides.forEach((el, index) => {
      const on = index === activeSlide;
      el.classList.toggle('is-active', on);
      el.style.opacity = on ? '1' : '0';
      el.style.visibility = on ? 'visible' : 'hidden';
    });
    const toggle = root.querySelector('[data-pwc-interaction="interaction-6"]');
    if (toggle) {
      toggle.classList.toggle('is-running', running);
      toggle.setAttribute('aria-pressed', running ? 'true' : 'false');
    }
  }, [activeSlide, running]);
  useEffect(() => {
    if (!running) return undefined;
    const id = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % 3);
    }, 6000);
    return () => window.clearInterval(id);
  }, [running]);
  const onCarouselClick = (event) => {
    const target = event.target.closest('[data-pwc-interaction]');
    if (!target) return;
    const id = target.getAttribute('data-pwc-interaction');
    if (id === 'interaction-4') {
      event.preventDefault();
      setActiveSlide((current) => (current + 2) % 3);
    } else if (id === 'interaction-5') {
      event.preventDefault();
      setActiveSlide((current) => (current + 1) % 3);
    } else if (id === 'interaction-6') {
      event.preventDefault();
      setRunning((value) => !value);
    } else if (id === 'interaction-1' || id === 'interaction-2' || id === 'interaction-3') {
      event.preventDefault();
      const index = Number(id.slice(-1)) - 1;
      setActiveSlide(index);
    }
  };
  return (
      <div className="pwc-section-4" onClick={onCarouselClick}>
          <div className="uk-grid uk-flex uk-flex-start initial">
            <div className="uk-width-2-3@m uk-width-3-4@l article-container">
              <div className="featured-container">
                <div className="featured-video">
                  <div className="hero-player">
                    <video
                      ref={heroRef}
                      className="hero-player-video"
                      id="video-50106-1_html5"
                      controls={heroStarted}
                      preload="auto"
                      playsInline
                      poster="https://about.fb.com/wp-content/uploads/2026/09/Introducing-Muse_-Personal-AI-Agent_SocialShare.jpg?w=1600"
                      src="https://about.fb.com/wp-content/uploads/2026/09/Introducing-Muse_Sizzle-Video.mp4"
                      onPlay={() => setHeroPlaying(true)}
                      onPause={() => setHeroPlaying(false)}
                      onTimeUpdate={(event) => setHeroTime(event.currentTarget.currentTime)}
                      onLoadedMetadata={(event) => setHeroDuration(event.currentTarget.duration || 82)}
                    >
                      <source src="https://about.fb.com/wp-content/uploads/2026/09/Introducing-Muse_Sizzle-Video.mp4" type="video/mp4" />
                      <source src="/assets/videos/Introducing-Muse_Sizzle-Video.mp4" type="video/mp4" />
                    </video>
                    {heroStarted ? null : (
                      <button
                        type="button"
                        className="hero-play-hit"
                        data-hero-play="true"
                        aria-label="Play hero video"
                        onPointerDown={startHero}
                        onClick={startHero}
                        style={{
                          position: "absolute",
                          inset: 0,
                          zIndex: 20,
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 12,
                          margin: 0,
                          border: 0,
                          padding: 0,
                          width: "100%",
                          height: "100%",
                          background: "rgba(0, 0, 0, 0.28)",
                          cursor: "pointer",
                        }}
                      >
                        <span
                          aria-hidden
                          className="hero-play-icon"
                          style={{
                            width: 72,
                            height: 72,
                            borderRadius: 999,
                            background: "#fff",
                            boxShadow: "0 8px 24px rgba(0,0,0,0.28)",
                            display: "grid",
                            placeItems: "center",
                            color: "#1c2b33",
                            fontSize: 28,
                            lineHeight: 1,
                          }}
                        >
                          ▶
                        </span>
                        <span className="hero-play-time" style={{ color: "#fff", fontSize: 13 }}>
                          Play video · {formatTime(heroDuration)}
                        </span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
              <div className="highlights-container">
                <h2 className="highlights-title news-label label-line label-meta ui-heading1">
                  Takeaways
                </h2>
                <div className="the-highlights">
                  <div className="highlights-content ui-body2">
                    <ul>
                      <li style={{ fontWeight: '400' }}>
                        <span style={{ fontWeight: '400' }}>
                          Muse is a personal AI agent. It doesn’t just answer questions, it actually does the work. It helps people stay on top of things, takes tasks and projects off their plate, and turns long-term goals into action plans.
                        </span>
                      </li>
                      <li style={{ fontWeight: '400' }}>
                        <span style={{ fontWeight: '400' }}>
                          Meta built Muse from the ground up to be a safe, secure, private, and widely available personal AI agent.
                        </span>
                      </li>
                      <li style={{ fontWeight: '400' }}>
                        <span style={{ fontWeight: '400' }}>
                          Muse runs on Muse Secure VM, a dedicated secure computer with its own browser, and can work on a person’s behalf across the apps they use daily, learning from conversations, reflecting on what matters to them, and getting sharper along the way.
                        </span>
                      </li>
                      <li style={{ fontWeight: '400' }}>
                        <span style={{ fontWeight: '400' }}>
                          Each person stays in control of their Muse and decides how much access it gets.
                        </span>
                      </li>
                      <li style={{ fontWeight: '400' }}>
                        <span style={{ fontWeight: '400' }}>
                          For a deeper look at how Muse was designed and how safety, security, and privacy were built into it, read
                        </span>
                        <a href="http://security.muse.ai">
                          <span style={{ fontWeight: '400' }}>
                            How We Built Safety Into Muse
                          </span>
                        </a>
                        <span style={{ fontWeight: '400' }}>
                          and
                        </span>
                        <a href="http://introducing.muse.ai">
                          <span style={{ fontWeight: '400' }}>
                            How We Designed Muse
                          </span>
                        </a>
                        <span style={{ fontWeight: '400' }}>
                          .
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="uk-width-1-1@m article-container">
                <article className="post-50106 post type-post status-publish format-standard hentry category-meta category-product-news category-recent-news category-featured category-technology-and-innovation tag-ai" id="post-50106">
                  <div className="entry-content">
                    <div className="content uk-width-90@m uk-width-1-1@s">
                      <p>
                        <span style={{ fontWeight: '400' }}>
                          Today, Meta is introducing Muse, a secure, private personal AI agent that proactively helps with people’s goals and suggests ideas. Because personal agents need a new kind of secure computer,
                        </span>
                        <a className="in_article_link" href="http://security.muse.ai">
                          <span style={{ fontWeight: '400' }}>
                            Muse runs on Muse Secure VM
                          </span>
                        </a>
                        <span style={{ fontWeight: '400' }}>
                          , a dedicated, virtual machine (VM) that houses both the agent and a person’s data. Muse is designed around the way people already communicate, so talking to it works just like messaging another person, in the Muse app or directly in WhatsApp.
                        </span>
                      </p>
                      <p>
                        <span style={{ fontWeight: '400' }}>
                          It’s simple to use. People just tell Muse what needs to get done, and it takes action, powered by
                        </span>
                        <a className="in_article_link" href="https://research.meta.ai/blog/introducing-muse-spark-1-3">
                          <span style={{ fontWeight: '400' }}>
                            Muse Spark
                          </span>
                        </a>
                        <span style={{ fontWeight: '400' }}>
                          , Meta’s most capable model to date, built for real-world agentic work like this.
                        </span>
                      </p>
                      <h2>
                        How It Works
                      </h2>
                      <p>
                        <span style={{ fontWeight: '400' }}>
                          Unlike other agents,
                        </span>
                        <a className="in_article_link" href="http://introducing.muse.ai">
                          <span style={{ fontWeight: '400' }}>
                            Muse was built to work for billions
                          </span>
                        </a>
                        <span style={{ fontWeight: '400' }}>
                          of people worldwide, so there’s no learning curve. Anyone can use it out of the box, no technical experience required. It can handle tasks, like sending an email or booking travel, and it can take on big audacious goals. Once a person shares a goal with Muse, it helps them develop a personalized plan and coordinate their time and resources, then advances the work on its own. It can open a browser, fill out forms, and negotiate on their behalf.
                        </span>
                      </p>
                      <p>
                        <span style={{ fontWeight: '400' }}>
                          For tasks that take more time, Muse keeps working after people close the app, and comes back when something changes or when it needs approval, like before it sends an email or makes a purchase. It gets better results with less effort: selling a car for more, lowering a bill, adjusting a training plan as the rest of someone’s life shifts.
                        </span>
                      </p>
                      <p>
                        <span style={{ fontWeight: '400' }}>
                          When it comes time to pay, Muse can checkout with Link built by Stripe, and it is the first AI agent covered by
                        </span>
                        <a className="in_article_link" href="https://support.link.com/questions/what-s-covered-with-protections">
                          <span style={{ fontWeight: '400' }}>
                            Link’s purchase protections
                          </span>
                        </a>
                        <span style={{ fontWeight: '400' }}>
                          : free coverage for damaged or lost items, price drops, no-fee returns, and a return guarantee on eligible purchases. Link’s wallet for agents generates a one-time-use card so your real card details stay hidden, allowing you to purchase safely across the internet. Shop Pay is coming soon as another way to pay, along with 1Password support so Muse can use logins a person already has.
                        </span>
                      </p>
                      <p>
                        <span style={{ fontWeight: '400' }}>
                          Muse also remembers what matters to a person, so it can make suggestions unprompted and act on details that person only mentioned once. It can turn a recipe reel the person saved on Instagram into a grocery list, suggest a menu for their dinner party, and remember their friends’ dietary restrictions before it sends the invites.
                        </span>
                      </p>
                      <section className="fbcorp-mixed-media-carousel has-video-slide" data-fbcorp-mixed-media-carousel="" data-fbcorp-mixed-media-ready="true" data-frame-ratio="960 / 836" data-pwc-controlled="interaction-4" data-pwc-critical="hero-1" id="fbcorp-mixed-media-carousel-1" style={{ '--fbcorp-mixed-media-carousel-ratio': '960 / 836' }}>
                        <div className="fbcorp-mixed-media-carousel__viewport" data-pwc-critical="hero-2">
                          <div className="fbcorp-mixed-media-carousel__slides" data-pwc-critical="hero-3">
                            <figure aria-hidden="false" className="fbcorp-mixed-media-carousel__slide is-active is-width-constrained" data-fbcorp-mixed-media-slide="" data-is-gif="false" data-media-type="video" data-ratio="960/836" data-slide-index="0" style={{ '--fbcorp-mixed-media-item-ratio': '960 / 836' }}>
                              <div className="fbcorp-mixed-media-carousel__frame pmz-img-wrapper" data-pwc-critical="hero-4">
                                <video autoPlay className="fbcorp-mixed-media-carousel__media" controls controlsList="nodownload noplaybackrate" data-fbcorp-mixed-media-video="" data-pwc-critical="hero-5" muted playsInline preload="auto" src="https://about.fb.com/wp-content/uploads/2026/09/Muse_FieldTrip.mp4">
                                  <source src="https://about.fb.com/wp-content/uploads/2026/09/Muse_FieldTrip.mp4" type="video/mp4" />
                                  <source src="/assets/videos/Muse_FieldTrip.mp4" type="video/mp4" />
                                </video>
                                <button aria-label="Download video" className="pmz-img-download fbcorp-mixed-media-carousel__download" data-attachment-id="50110" data-mixed-media-icon="/wp-content/plugins/post-media-zip/assets/downloadicon_arrowimg.png" data-mixed-media-icon-light="/wp-content/plugins/post-media-zip/assets/downloadicon_arrow.png" data-pwc-interaction="interaction-1" data-tooltip="Download video" type="button">
                                  <img alt="" data-mixed-media-icon-theme="dark" data-recalc-dims="1" decoding="async" height="18" loading="eager" src="/assets/images/downloadicon_arrowimg.png" width="18" />
                                  <span className="pmz-sr-only">
                                    Download video
                                  </span>
                                </button>
                              </div>
                            </figure>
                            <figure aria-hidden="true" className="fbcorp-mixed-media-carousel__slide is-width-constrained" data-fbcorp-mixed-media-slide="" data-is-gif="false" data-media-type="video" data-ratio="960/836" data-slide-index="1" style={{ '--fbcorp-mixed-media-item-ratio': '960 / 836' }}>
                              <div className="fbcorp-mixed-media-carousel__frame pmz-img-wrapper" data-pwc-critical="hero-6">
                                <video autoPlay className="fbcorp-mixed-media-carousel__media" controls controlsList="nodownload noplaybackrate" data-fbcorp-mixed-media-video="" data-pwc-critical="hero-7" muted playsInline preload="auto" src="https://about.fb.com/wp-content/uploads/2026/09/Muse_Japan.mp4">
                                  <source src="https://about.fb.com/wp-content/uploads/2026/09/Muse_Japan.mp4" type="video/mp4" />
                                  <source src="/assets/videos/Muse_Japan.mp4" type="video/mp4" />
                                </video>
                                <button aria-label="Download video" className="pmz-img-download fbcorp-mixed-media-carousel__download" data-attachment-id="50109" data-mixed-media-icon="/wp-content/plugins/post-media-zip/assets/downloadicon_arrowimg.png" data-mixed-media-icon-light="/wp-content/plugins/post-media-zip/assets/downloadicon_arrow.png" data-pwc-interaction="interaction-2" data-tooltip="Download video" type="button">
                                  <img alt="" data-mixed-media-icon-theme="dark" data-recalc-dims="1" decoding="async" height="18" loading="eager" src="/assets/images/downloadicon_arrowimg-1.png" width="18" />
                                  <span className="pmz-sr-only">
                                    Download video
                                  </span>
                                </button>
                              </div>
                            </figure>
                            <figure aria-hidden="true" className="fbcorp-mixed-media-carousel__slide is-width-constrained" data-fbcorp-mixed-media-slide="" data-is-gif="false" data-media-type="video" data-ratio="960/836" data-slide-index="2" style={{ '--fbcorp-mixed-media-item-ratio': '960 / 836' }}>
                              <div className="fbcorp-mixed-media-carousel__frame pmz-img-wrapper" data-pwc-critical="hero-8">
                                <video autoPlay className="fbcorp-mixed-media-carousel__media" controls controlsList="nodownload noplaybackrate" data-fbcorp-mixed-media-video="" data-pwc-critical="hero-9" muted playsInline preload="auto" src="https://about.fb.com/wp-content/uploads/2026/09/Muse_Relationships.mp4">
                                  <source src="https://about.fb.com/wp-content/uploads/2026/09/Muse_Relationships.mp4" type="video/mp4" />
                                  <source src="/assets/videos/Muse_Relationships.mp4" type="video/mp4" />
                                </video>
                                <button aria-label="Download video" className="pmz-img-download fbcorp-mixed-media-carousel__download" data-attachment-id="50108" data-mixed-media-icon="/wp-content/plugins/post-media-zip/assets/downloadicon_arrowimg.png" data-mixed-media-icon-light="/wp-content/plugins/post-media-zip/assets/downloadicon_arrow.png" data-pwc-interaction="interaction-3" data-tooltip="Download video" type="button">
                                  <img alt="" data-mixed-media-icon-theme="dark" data-recalc-dims="1" decoding="async" height="18" loading="eager" src="/assets/images/downloadicon_arrowimg-1.png" width="18" />
                                  <span className="pmz-sr-only">
                                    Download video
                                  </span>
                                </button>
                              </div>
                            </figure>
                          </div>
                          <button aria-label="Previous slide" className="fbcorp-mixed-media-carousel__arrow fbcorp-mixed-media-carousel__arrow--prev" data-fbcorp-mixed-media-prev="" data-pwc-interaction="interaction-4" type="button" />
                          <button aria-label="Next slide" className="fbcorp-mixed-media-carousel__arrow fbcorp-mixed-media-carousel__arrow--next" data-fbcorp-mixed-media-next="" data-pwc-interaction="interaction-5" type="button" />
                          <button aria-label="Pause carousel" className="fbcorp-mixed-media-carousel__toggle is-running" data-fbcorp-mixed-media-toggle="" data-pwc-controlled="interaction-6" data-pwc-interaction="interaction-6" type="button" />
                        </div>
                      </section>
                      <h2>
                        Built to be Private, Safe, and Secure
                      </h2>
                      <p>
                        <span style={{ fontWeight: '400' }}>
                          Personal agents need a new kind of secure computer, so Meta built one for everyone. Muse Secure VM has first-of-its-kind privacy, safety, and security protections engineered into it that no other agent provides:
                        </span>
                      </p>
                      <ul>
                        <li style={{ fontWeight: '400' }}>
                          <span style={{ fontWeight: '400' }}>
                            Muse runs on its own dedicated computer in the cloud, contained so no one else’s agent can reach it. That is where Muse lives and where the data and credentials for any service a person connects are securely stored.
                          </span>
                        </li>
                        <li style={{ fontWeight: '400' }}>
                          <span style={{ fontWeight: '400' }}>
                            A separate Sentinel agent runs on that same machine, kept apart from Muse at the system level. Nothing Muse does reaches the internet unless the Sentinel approves it, and it asks the person for permission when needed.
                          </span>
                        </li>
                        <li style={{ fontWeight: '400' }}>
                          <span style={{ fontWeight: '400' }}>
                            Muse has no visibility into people’s passwords or payment methods. Any credentials a person shares go into secure storage, so Muse can use them without seeing them, including passwords a person types into the browser themselves.
                          </span>
                        </li>
                        <li style={{ fontWeight: '400' }}>
                          <span style={{ fontWeight: '400' }}>
                            Muse checks with the person before sensitive actions like sending an email or making a purchase. Muse shows people a complete audit trail of everything it has done and plans to do.
                          </span>
                        </li>
                        <li style={{ fontWeight: '400' }}>
                          <span style={{ fontWeight: '400' }}>
                            People choose which apps Muse connects to and exactly how much access it gets. For things like email, people choose what Muse can do, whether it reads their mail or can also send on their behalf.
                          </span>
                        </li>
                        <li style={{ fontWeight: '400' }}>
                          <span style={{ fontWeight: '400' }}>
                            People can change access or disconnect a service whenever they want. People can also opt out of their interactions being used to train Meta’s AI models.
                          </span>
                        </li>
                        <li style={{ fontWeight: '400' }}>
                          <span style={{ fontWeight: '400' }}>
                            Muse doesn’t share a person’s conversations or the data in their VM with Meta’s ad systems.
                          </span>
                        </li>
                        <li style={{ fontWeight: '400' }}>
                          <span style={{ fontWeight: '400' }}>
                            Muse remembers what matters to a person, and they can always tell it to “forget” specific things it’s learned.
                          </span>
                        </li>
                      </ul>
                      <div className="jetpack-video-wrapper">
                        <div className="wp-video fbcorp-autoplay-loop-video-wrap">
                          <video autoPlay className="fbcorp-autoplay-loop-video" controls data-fbcorp-autoplay-loop="true" id="video-50106-2" loop muted playsInline preload="auto" src="https://about.fb.com/wp-content/uploads/2026/09/Muse_Shopping.mp4">
                            <source src="https://about.fb.com/wp-content/uploads/2026/09/Muse_Shopping.mp4" type="video/mp4" />
                            <source src="/assets/videos/Muse_Shopping.mp4" type="video/mp4" />
                            <a className="in_article_link" href="https://about.fb.com/wp-content/uploads/2026/09/Muse_Shopping.mp4">
                              /wp-content/uploads/2026/09/Muse_Shopping.mp4
                            </a>
                          </video>
                        </div>
                      </div>
                      <p>
                        <span style={{ fontWeight: '400' }}>
                          Later this year, Meta will introduce Muse Confidential VM, where the whole VM, including a person’s data and conversations with Muse, is encrypted with a key only they hold, so not even Meta can access it.
                        </span>
                      </p>
                      <h2>
                        Looking Ahead
                      </h2>
                      <p>
                        <span style={{ fontWeight: '400' }}>
                          Meta thinks personal superintelligence will be one of the most transformative technologies of a lifetime. Muse is a first step: an agent that takes on more of the work so people can focus on what matters to them.
                        </span>
                      </p>
                      <p>
                        <span style={{ fontWeight: '400' }}>
                          Muse is rolling out in the US on iOS, Android, and
                        </span>
                        <a className="in_article_link" href="http://muse.ai">
                          <span style={{ fontWeight: '400' }}>
                            muse.ai
                          </span>
                        </a>
                        <span style={{ fontWeight: '400' }}>
                          , and coming soon to AI glasses. It’s free for most of what people need, with subscription plans for people who want to do more.
                        </span>
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div className="entry-taxonomy">
                    <div className="uk-flex uk-flex-middle uk-flex-column">
                      <div className="cattagsdlmedia">
                        <div className="uk-width-1-2">
                          <div className="article-categories">
                            <div className="entry-meta-label">
                              Categories
                            </div>
                            :
                            <div className="entry-categories">
                              <span className="taxonomy-link tag-1">
                                <a className="in_article_link" href="/news/category/technologies/meta/ " rel="tag">
                                  Meta
                                </a>
                              </span>
                              <span className="taxonomy-link tag-2">
                                <a className="in_article_link" href="/news/category/product-news/ " rel="tag">
                                  Product News
                                </a>
                              </span>
                              <span className="taxonomy-link tag-3">
                                <a className="in_article_link" href="/news/category/technology-and-innovation/ " rel="tag">
                                  Technology and Innovation
                                </a>
                              </span>
                            </div>
                          </div>
                          <div className="article-tags">
                            <div className="entry-meta-label">
                              Tags:
                            </div>
                            <div className="entry-tags">
                              <span className="taxonomy-link">
                                <a className="in_article_link" href="/news/tag/ai/" rel="tag">
                                  AI
                                </a>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="uk-width-1-2 pmz-container">
                          <div className="pmz-wrap" data-post-id="50106" data-url="/wp-admin/admin-post.php?action=pmz_download&post_id=50106&pmz_nonce=699d7331a9">
                            <a className="pmz-button pmz-download in_article_link" href="/wp-admin/admin-post.php?action=pmz_download&post_id=50106&pmz_nonce=699d7331a9">
                              <img alt="" className="pmz-icon" height="18" loading="eager" src="/assets/images/downloadicon_arrowimg.png" width="18" />
                              <span className="pmz-label">
                                DOWNLOAD ALL IMAGES
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="uk-width-1-1" style={{ marginTop: '30px' }}>
                        <div className="entry-share">
                          <div className="uk-flex uk-flex-middle">
                            <div className="entry-meta-label" style={{ marginRight: '20px' }}>
                              Share this article
                            </div>
                            <img alt="Share on Threads" loading="eager" onclick="window.open('https://www.threads.net/intent/post?text=https%3A%2F%2Fabout.fb.com%2Fnews%2F2026%2F09%2Fintroducing-muse-personal-ai-agent%2F');" src="/assets/images/article_threads.png" style={{ maxWidth: '24px', marginRight: '24px', cursor: 'pointer' }} />
                            <img alt="Share on Facebook" loading="eager" onclick="popupWindow('https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fabout.fb.com%2Fnews%2F2026%2F09%2Fintroducing-muse-personal-ai-agent%2F&src=sdkpreparse', 'share_on_fb', window, 626, 436);" src="/assets/images/article_fb.png" style={{ maxWidth: '24px', marginRight: '24px', cursor: 'pointer' }} />
                            <img alt="Share on X" loading="eager" onclick="window.open('https://twitter.com/share?text=Introducing%20Muse%3A%20The%20World%E2%80%99s%20First%20Personal%20AI%20Agent%20Built%20for%20Everyone%20%23Meta&url=https%3A%2F%2Fabout.fb.com%2Fnews%2F2026%2F09%2Fintroducing-muse-personal-ai-agent%2F');" src="/assets/images/article_x.png" style={{ maxWidth: '24px', marginRight: '24px', cursor: 'pointer' }} />
                            <a className="in_article_link" href="mailto:?subject=Meta%3A%20Introducing%20Muse%3A%20The%20World%E2%80%99s%20First%20Personal%20AI%20Agent%20Built%20for%20Everyone&body=Muse%20is%20a%20secure%2C%20private%20personal%20AI%20agent%20that%20proactively%20helps%20people%20meet%20their%20goals%20and%20suggests%20ideas.%20%20%20%20Read%20at%20https%3A%2F%2Fabout.fb.com%2Fnews%2F2026%2F09%2Fintroducing-muse-personal-ai-agent%2F">
                              <svg alt="Share on Email" height="24" style={{ maxWidth: '24px' }} viewBox="0 0 24 24" width="24">
                                <path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z" />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                </article>
              </div>
            </div>
            <div className="uk-width-1-3@m uk-width-1-4@l uk-padding-remove-left">
              <div className="sidebar-container" style={{ position: 'relative', top: '0px', marginBottom: '191px' }}>
                <aside className="widget-area" id="secondary">
                  <section className="widget widget_recent_entries featured_news" id="featured-news-2">
                    <h2 className="widget-title ui-meta1">
                      <svg fill="none" height="28" viewBox="0 0 39 39" width="39" xmlns="http://www.w3.org/2000/svg">
                        <path clipRule="evenodd" d="M28.7309 13.9068C29.2311 14.3444 29.2818 15.1046 28.8441 15.6048L20.4207 25.2316C20.1921 25.4928 19.8621 25.6426 19.515 25.6426C19.168 25.6426 18.8379 25.4928 18.6094 25.2316L10.1859 15.6048C9.7482 15.1046 9.79899 14.3444 10.2991 13.9068C10.7992 13.4691 11.5595 13.5198 11.9972 14.02L19.515 22.6118L27.0329 14.02C27.4705 13.5198 28.2308 13.4691 28.7309 13.9068Z" fill="#1C2B33" fillRule="evenodd" />
                      </svg>
                      Recent News
                    </h2>
                    <ul>
                      <li className="featurednews_link">
                        <a className="sidebar article-title ui-body1 a_sidebar_featured_news_link" href="/news/2026/09/inside-metas-infrastructure-lab/">
                          Inside Meta’s Infrastructure Lab
                        </a>
                        <svg fill="none" height="43" viewBox="0 0 43 43" width="43" xmlns="http://www.w3.org/2000/svg">
                          <g opacity="0.8">
                            <path clipRule="evenodd" d="M19.5 0.999996C29.7173 0.999995 38 9.28272 38 19.5C38 29.7173 29.7173 38 19.5 38C9.28273 38 0.999999 29.7173 0.999997 19.5C0.999995 9.28273 9.28273 0.999998 19.5 0.999996Z" fillRule="evenodd" stroke="#1C2B33" />
                            <path clipRule="evenodd" d="M16.6074 13.5966C16.8877 13.2762 17.3747 13.2437 17.6951 13.5241L23.8617 18.9199C24.029 19.0663 24.125 19.2777 24.125 19.5C24.125 19.7223 24.029 19.9338 23.8617 20.0801L17.6951 25.476C17.3747 25.7563 16.8877 25.7238 16.6074 25.4034C16.327 25.0831 16.3595 24.5961 16.6799 24.3157L22.1835 19.5L16.6799 14.6843C16.3595 14.4039 16.327 13.917 16.6074 13.5966Z" fill="#1C2B33" fillRule="evenodd" />
                          </g>
                        </svg>
                      </li>
                      <li className="featurednews_link">
                        <a className="sidebar article-title ui-body1 a_sidebar_featured_news_link" href="/news/2026/08/closed-loop-cooling-explained-the-plumbing-behind-metas-ai/">
                          Closed-Loop Cooling Explained: The Plumbing Behind Meta’s AI
                        </a>
                        <svg fill="none" height="43" viewBox="0 0 43 43" width="43" xmlns="http://www.w3.org/2000/svg">
                          <g opacity="0.8">
                            <path clipRule="evenodd" d="M19.5 0.999996C29.7173 0.999995 38 9.28272 38 19.5C38 29.7173 29.7173 38 19.5 38C9.28273 38 0.999999 29.7173 0.999997 19.5C0.999995 9.28273 9.28273 0.999998 19.5 0.999996Z" fillRule="evenodd" stroke="#1C2B33" />
                            <path clipRule="evenodd" d="M16.6074 13.5966C16.8877 13.2762 17.3747 13.2437 17.6951 13.5241L23.8617 18.9199C24.029 19.0663 24.125 19.2777 24.125 19.5C24.125 19.7223 24.029 19.9338 23.8617 20.0801L17.6951 25.476C17.3747 25.7563 16.8877 25.7238 16.6074 25.4034C16.327 25.0831 16.3595 24.5961 16.6799 24.3157L22.1835 19.5L16.6799 14.6843C16.3595 14.4039 16.327 13.917 16.6074 13.5966Z" fill="#1C2B33" fillRule="evenodd" />
                          </g>
                        </svg>
                      </li>
                      <li className="featurednews_link">
                        <a className="sidebar article-title ui-body1 a_sidebar_featured_news_link" href="/news/2026/08/open-letter-to-tiktok-and-youtube-to-join-us-in-supporting-teens/">
                          An Open Letter to TikTok and YouTube to Join Us in Supporting Teens
                        </a>
                        <svg fill="none" height="43" viewBox="0 0 43 43" width="43" xmlns="http://www.w3.org/2000/svg">
                          <g opacity="0.8">
                            <path clipRule="evenodd" d="M19.5 0.999996C29.7173 0.999995 38 9.28272 38 19.5C38 29.7173 29.7173 38 19.5 38C9.28273 38 0.999999 29.7173 0.999997 19.5C0.999995 9.28273 9.28273 0.999998 19.5 0.999996Z" fillRule="evenodd" stroke="#1C2B33" />
                            <path clipRule="evenodd" d="M16.6074 13.5966C16.8877 13.2762 17.3747 13.2437 17.6951 13.5241L23.8617 18.9199C24.029 19.0663 24.125 19.2777 24.125 19.5C24.125 19.7223 24.029 19.9338 23.8617 20.0801L17.6951 25.476C17.3747 25.7563 16.8877 25.7238 16.6074 25.4034C16.327 25.0831 16.3595 24.5961 16.6799 24.3157L22.1835 19.5L16.6799 14.6843C16.3595 14.4039 16.327 13.917 16.6074 13.5966Z" fill="#1C2B33" fillRule="evenodd" />
                          </g>
                        </svg>
                      </li>
                      <li className="featurednews_link">
                        <a className="sidebar article-title ui-body1 a_sidebar_featured_news_link" href="/news/2026/08/agreement-with-state-attorneys-general-supporting-teens/">
                          Our Agreement With Bipartisan Attorneys General: Calling on TikTok and YouTube to Join Us in Supporting Teens
                        </a>
                        <svg fill="none" height="43" viewBox="0 0 43 43" width="43" xmlns="http://www.w3.org/2000/svg">
                          <g opacity="0.8">
                            <path clipRule="evenodd" d="M19.5 0.999996C29.7173 0.999995 38 9.28272 38 19.5C38 29.7173 29.7173 38 19.5 38C9.28273 38 0.999999 29.7173 0.999997 19.5C0.999995 9.28273 9.28273 0.999998 19.5 0.999996Z" fillRule="evenodd" stroke="#1C2B33" />
                            <path clipRule="evenodd" d="M16.6074 13.5966C16.8877 13.2762 17.3747 13.2437 17.6951 13.5241L23.8617 18.9199C24.029 19.0663 24.125 19.2777 24.125 19.5C24.125 19.7223 24.029 19.9338 23.8617 20.0801L17.6951 25.476C17.3747 25.7563 16.8877 25.7238 16.6074 25.4034C16.327 25.0831 16.3595 24.5961 16.6799 24.3157L22.1835 19.5L16.6799 14.6843C16.3595 14.4039 16.327 13.917 16.6074 13.5966Z" fill="#1C2B33" fillRule="evenodd" />
                          </g>
                        </svg>
                      </li>
                    </ul>
                  </section>
                </aside>
              </div>
            </div>
          </div>
      </div>
  );
}

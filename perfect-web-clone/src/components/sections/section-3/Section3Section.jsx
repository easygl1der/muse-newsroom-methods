import { useRef, useState } from "react";
import "./Section3Section.css";
// Section3Section — authored from pwc section evidence.
export default function Section3Section() {

  const audioRef = useRef(null);
  const [listening, setListening] = useState(false);
  const toggleListen = () => {
    const node = audioRef.current;
    if (!node) return;
    if (listening) {
      node.pause();
      setListening(false);
      return;
    }
    node.play().catch(() => {});
    setListening(true);
  };
  return (
      <>
        <div className="pwc-section-3 uk-grid uk-flex uk-flex-start">
          <div className="uk-width-2-3@m uk-width-3-4@l header-section">
            <div className="news-label label-line label-meta">
              <a href="/news/category/technologies/meta/">
                META
              </a>
            </div>
            <header className="entry-header" data-pwc-critical="header-2">
              <h1 className="entry-title uk-margin-remove-top ui-display2">
                Introducing Muse: The World’s First Personal AI Agent Built for Everyone
              </h1>
            </header>
            <div className="post-date">
              <span className="posted-on">
                <time className="entry-date published" dateTime="2026-09-08T12:00:51-07:00">
                  September 8, 2026
                </time>
                <time className="updated" dateTime="2026-09-08T11:45:34-07:00">
                  September 8, 2026
                </time>
              </span>
            </div>
            <div className="post-custom_author" />
            <div className="post-custom_note" />
            <div className="speechify-player elabs-player" data-audio-url="https://about.fb.com/wp-content/uploads/2026/09/elevenlabs-50106-1788888978.mp3" data-nonce="624f5a0053" data-post="50106" data-voice="nPczCjzI2devNBz1zQrb">
              <div className="speechify-controls">
                <button aria-label="Listen to Article" aria-live="polite" className="speechify-btn" onClick={toggleListen} data-state={listening ? "playing" : "idle"} type="button">
                  <span aria-hidden="true" className="speechify-icon">
                    <svg fill="none" height="14" viewBox="0 0 46 14" width="46" xmlns="http://www.w3.org/2000/svg">
                      <line stroke="#0064E0" strokeLinecap="round" strokeWidth="1.20983" x1="0.604915" x2="0.604915" y1="4.58026" y2="9.41958" />
                      <line stroke="#0064E0" strokeLinecap="round" strokeWidth="1.20983" x1="22.7842" x2="22.7842" y1="4.58026" y2="9.41958" />
                      <line stroke="#0064E0" strokeLinecap="round" strokeWidth="1.20983" transform="matrix(7.59195e-08 1 1 -2.51671e-08 45.166 3.97534)" x1="0.604915" x2="5.44424" y1="-0.604915" y2="-0.604915" />
                      <line stroke="#0064E0" strokeLinecap="round" strokeWidth="1.20983" x1="4.63671" x2="4.63671" y1="3.37054" y2="10.6295" />
                      <line stroke="#0064E0" strokeLinecap="round" strokeWidth="1.20983" x1="26.4137" x2="26.4137" y1="3.37054" y2="10.6295" />
                      <line stroke="#0064E0" strokeLinecap="round" strokeWidth="1.20983" transform="matrix(7.59198e-08 1 1 -2.51672e-08 19.7596 2.76562)" x1="0.604915" x2="7.8639" y1="-0.604915" y2="-0.604915" />
                      <line stroke="#0064E0" strokeLinecap="round" strokeWidth="1.20983" transform="matrix(7.59198e-08 1 1 -2.51672e-08 41.5365 2.76562)" x1="0.604915" x2="7.8639" y1="-0.604915" y2="-0.604915" />
                      <line stroke="#0064E0" strokeLinecap="round" strokeWidth="1.20983" x1="8.26617" x2="8.26617" y1="2.16058" y2="11.8392" />
                      <line stroke="#0064E0" strokeLinecap="round" strokeWidth="1.20983" x1="30.0431" x2="30.0431" y1="2.16058" y2="11.8392" />
                      <line stroke="#0064E0" strokeLinecap="round" strokeWidth="1.20983" transform="matrix(7.59198e-08 1 1 -2.51672e-08 16.1301 1.55566)" x1="0.604915" x2="10.2836" y1="-0.604915" y2="-0.604915" />
                      <line stroke="#0064E0" strokeLinecap="round" strokeWidth="1.20983" transform="matrix(7.59198e-08 1 1 -2.51672e-08 37.907 1.55566)" x1="0.604915" x2="10.2836" y1="-0.604915" y2="-0.604915" />
                      <line stroke="#0064E0" strokeLinecap="round" strokeWidth="1.20983" x1="11.8957" x2="11.8957" y1="0.950863" y2="13.0492" />
                      <line stroke="#0064E0" strokeLinecap="round" strokeWidth="1.20983" x1="33.6726" x2="33.6726" y1="0.950863" y2="13.0492" />
                    </svg>
                  </span>
                  <span className="speechify-label ui-body4">
                    {listening ? "PAUSE ARTICLE" : "LISTEN TO ARTICLE"}
                  </span>
                </button>
                <button aria-label="Rewind 10 seconds" className="speechify-seek-btn speechify-rewind-btn" disabled style={{ display: 'none' }} type="button">
                  <span aria-hidden="true" className="speechify-icon">
                    <svg fill="none" height="20" viewBox="0 0 36 20" width="36" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 4L10 10L18 16V4Z" fill="#0064E0" />
                      <path d="M26 4L18 10L26 16V4Z" fill="#0064E0" />
                    </svg>
                  </span>
                  10
                </button>
                <button aria-label="Pause" className="speechify-pause-btn" style={{ display: 'none' }} type="button">
                  <span className="speechify-pause-label">
                    Pause
                  </span>
                </button>
                <button aria-label="Skip ahead 10 seconds" className="speechify-seek-btn speechify-skip-btn" disabled style={{ display: 'none' }} type="button">
                  <span aria-hidden="true" className="speechify-icon">
                    <svg fill="none" height="20" viewBox="0 0 36 20" width="36" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 4L18 10L10 16V4Z" fill="#0064E0" />
                      <path d="M18 4L26 10L18 16V4Z" fill="#0064E0" />
                    </svg>
                  </span>
                  10
                </button>
                <div className="speechify-speed" style={{ display: 'none' }}>
                  <select aria-label="Playback speed" className="speechify-speed-select" defaultValue="1" disabled style={{ display: 'none' }}>
                    <option value="0.25">
                      0.25×
                    </option>
                    <option value="0.5">
                      0.5×
                    </option>
                    <option value="1">
                      1×
                    </option>
                    <option value="1.25">
                      1.25×
                    </option>
                    <option value="1.5">
                      1.5×
                    </option>
                    <option value="2">
                      2×
                    </option>
                  </select>
                </div>
              </div>
              <audio ref={audioRef} className="audioplayer" controls id="html5_audio_k45pj7q10mq" preload="none" src="https://about.fb.com/wp-content/uploads/2026/09/elevenlabs-50106-1788888978.mp3" style={{ width: '100%', display: 'none' }}>
                <source src="https://about.fb.com/wp-content/uploads/2026/09/elevenlabs-50106-1788888978.mp3" type="audio/mpeg" />
                <source src="/assets/videos/elevenlabs-50106-1788888978.mp3" type="audio/mpeg" />
              </audio>
            </div>
          </div>
        </div>
      </>
  );
}

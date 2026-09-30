import { useEffect } from "react";
import "./HeaderSection.css";
// HeaderSection — authored from pwc section evidence.
export default function HeaderSection() {
  useEffect(() => {
    document.body.classList.add("single", "logged-in-false");
    document.title =
      "方法 B · Perfect-Web-Clone · :43212 — Muse study clone (not official Meta)";
  }, []);
  return (
    <>
      <header id="masthead" className="site-header" data-pwc-critical="header-1">
        <div className="uk-section uk-padding-remove-vertical headernav">
          <div className="uk-container-expand">
            <div className="uk-grid uk-grid-collapse site-header-grid">
              <div className="reverseorder-mobile">
                <button aria-label="Menu" className="menu-back swaporder3" id="menu-back" title="Menu">
                  Menu
                </button>
                <div className="uk-width-generic uk-padding-remove site-branding-column swaporder2" id="branding-column">
                  <div className="site-branding">
                    <p className="site-title site-title-graphic">
                      <a className="a_header_logo_link" href="https://about.meta.com/" rel="home">
                        <span className="screen-reader-text">Meta</span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

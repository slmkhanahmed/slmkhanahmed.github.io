import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Copy,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Search,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import "./App.css";
import { content } from "./data/content";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

const IconLink = ({ href, label, children }) => (
  <a
    className="icon-link"
    href={href}
    target={href.startsWith("http") ? "_blank" : undefined}
    rel={href.startsWith("http") ? "noreferrer" : undefined}
    aria-label={label}
  >
    {children}
  </a>
);

const ProjectPreview = ({ type }) => {
  if (type === "feedback") {
    return (
      <div className="product-preview feedback-preview" aria-hidden="true">
        <div className="preview-toolbar">
          <div className="preview-brand">
            <span className="preview-brand-mark">P</span>
            Product feedback
          </div>
          <span className="preview-avatar">SA</span>
        </div>
        <div className="feedback-summary">
          <div>
            <span className="preview-kicker">Roadmap</span>
            <strong>Shape what comes next.</strong>
          </div>
          <span className="preview-chip preview-chip--lime">+ Add feedback</span>
        </div>
        <div className="feedback-columns">
          <div className="feedback-column">
            <span className="column-title">Planned <b>2</b></span>
            <div className="feedback-ticket">
              <span className="ticket-tag ticket-tag--violet">Feature</span>
              <strong>Dark mode support</strong>
              <span className="ticket-meta">▲ 46</span>
            </div>
            <div className="feedback-ticket feedback-ticket--muted">
              <span className="ticket-tag ticket-tag--sky">UX</span>
              <strong>Keyboard shortcuts</strong>
              <span className="ticket-meta">▲ 31</span>
            </div>
          </div>
          <div className="feedback-column">
            <span className="column-title">In progress <b>1</b></span>
            <div className="feedback-ticket feedback-ticket--active">
              <span className="ticket-tag ticket-tag--lime">Building</span>
              <strong>Advanced search</strong>
              <span className="ticket-meta">▲ 72</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="product-preview galaxy-preview" aria-hidden="true">
      <div className="preview-toolbar galaxy-toolbar">
        <div className="preview-brand">
          <span className="galaxy-mark">✦</span>
          Git Galaxy Finder
        </div>
        <div className="browser-controls">
          <i />
          <i />
          <i />
        </div>
      </div>
      <div className="galaxy-content">
        <span className="preview-kicker">Your stars, within reach</span>
        <strong className="galaxy-heading">Find a saved repository.</strong>
        <div className="galaxy-search">
          <Search size={16} />
          <span>Search your starred repositories…</span>
          <kbd>⌘ K</kbd>
        </div>
        <div className="repo-list">
          {["design-system", "developer-tools", "api-starter"].map((repo, index) => (
            <div className="repo-row" key={repo}>
              <span className="repo-icon">{index + 1}</span>
              <div>
                <strong>{repo}</strong>
                <small>{index === 0 ? "TypeScript" : index === 1 ? "JavaScript" : "React"}</small>
              </div>
              <span className="repo-star">★</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const { hero, projects, about, skillGroups, journey, contact } = content;

  useEffect(() => {
    const revealItems = document.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${contact.email}`;
    }
  };

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <nav className="nav-shell" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="Salman Ahmed Khan — home">
            <span className="brand-mark">SA</span>
            <span className="brand-name">Salman Ahmed Khan</span>
          </a>

          <div className="nav-links">
            {navItems.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </div>

          <a className="button button--nav" href="/Salman%20CV.pdf" target="_blank" rel="noreferrer">
            Resume <ArrowUpRight size={15} aria-hidden="true" />
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        <div id="mobile-navigation" className={`mobile-navigation ${menuOpen ? "is-open" : ""}`}>
          <div className="mobile-navigation__inner">
            <span className="mobile-navigation__label">Navigate</span>
            {navItems.map((item, index) => (
              <a href={item.href} key={item.href} onClick={() => setMenuOpen(false)}>
                <span>0{index + 1}</span>
                {item.label}
                <ArrowDownRight aria-hidden="true" />
              </a>
            ))}
            <a
              className="button button--primary mobile-resume"
              href="/Salman%20CV.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Open resume <Download size={17} />
            </a>
          </div>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" id="top">
          <div className="hero-glow hero-glow--one" />
          <div className="hero-glow hero-glow--two" />
          <div className="page-width hero-grid">
            <div className="hero-copy">
              <p className="eyebrow hero-eyebrow">
                <span className="status-dot" />
                {hero.eyebrow}
              </p>
              <h1>
                Thoughtful interfaces.
                <span>Solid front-end.</span>
              </h1>
              <p className="hero-intro">{hero.intro}</p>
              <div className="hero-actions">
                <a className="button button--primary" href="#work">
                  View selected work <ArrowDownRight size={18} aria-hidden="true" />
                </a>
                <a className="button button--secondary" href={`mailto:${contact.email}`}>
                  Email me <ArrowUpRight size={18} aria-hidden="true" />
                </a>
              </div>
              <div className="hero-meta">
                <span>{hero.availability}</span>
                <div className="social-links">
                  <IconLink href={contact.github} label="Visit Salman's GitHub profile">
                    <Github size={18} />
                  </IconLink>
                  <IconLink href={contact.linkedin} label="Visit Salman's LinkedIn profile">
                    <Linkedin size={18} />
                  </IconLink>
                </div>
              </div>
            </div>

            <div className="hero-visual" aria-hidden="true">
              <div className="workbench-card">
                <div className="workbench-topbar">
                  <div className="window-dots"><i /><i /><i /></div>
                  <span>salman / workbench</span>
                  <span className="workbench-live"><i /> live</span>
                </div>
                <div className="workbench-body">
                  <div className="workbench-title-row">
                    <div>
                      <span className="preview-kicker">What I bring</span>
                      <strong>Build quality, end to end.</strong>
                    </div>
                    <span className="workbench-monogram">SA</span>
                  </div>
                  <div className="quality-list">
                    {["Responsive by default", "Accessible interaction", "Performance-minded"].map((item) => (
                      <div className="quality-row" key={item}>
                        <Check size={16} />
                        <span>{item}</span>
                        <i />
                      </div>
                    ))}
                  </div>
                  <div className="workbench-canvas">
                    <div className="canvas-sidebar">
                      <span />
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="canvas-main">
                      <div className="canvas-nav"><i /><i /><i /></div>
                      <div className="canvas-copy"><span /><strong /><span /></div>
                      <div className="canvas-cards"><i /><i /><i /></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="floating-note floating-note--top">React · TypeScript</div>
              <div className="floating-note floating-note--bottom">Useful. Clear. Fast.</div>
            </div>
          </div>

          <div className="page-width focus-strip" aria-label="Areas of focus">
            {[
              "Front-end development",
              "Responsive interfaces",
              "Browser extensions",
              "Product-focused UI",
            ].map((item, index) => (
              <span key={item}>
                <b>0{index + 1}</b>
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="section section--work" id="work">
          <div className="page-width">
            <div className="section-heading" data-reveal>
              <p className="section-label">01 — Selected work</p>
              <div>
                <h2>Useful products, shaped with care.</h2>
                <p>Two focused builds that show how I approach product thinking, interaction, and front-end detail.</p>
              </div>
            </div>

            <div className="projects-list">
              {projects.map((project, index) => (
                <article className={`project-card ${index % 2 ? "project-card--reverse" : ""}`} key={project.title} data-reveal>
                  <div className="project-visual">
                    <ProjectPreview type={project.preview} />
                  </div>
                  <div className="project-content">
                    <div className="project-topline">
                      <span>{project.number}</span>
                      <span>{project.type}</span>
                    </div>
                    <h3>{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-outcome">
                      <span>What it solves</span>
                      <p>{project.outcome}</p>
                    </div>
                    <ul className="tag-list" aria-label={`${project.title} technologies`}>
                      {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                    </ul>
                    <div className="project-actions">
                      <a href={project.live} target="_blank" rel="noreferrer">
                        {project.liveLabel} <ArrowUpRight size={17} />
                      </a>
                      <a href={project.source} target="_blank" rel="noreferrer">
                        Source code <Github size={17} />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--about" id="about">
          <div className="page-width">
            <div className="about-grid" data-reveal>
              <div>
                <p className="section-label">02 — About</p>
                <h2>{about.title}</h2>
              </div>
              <div className="about-copy">
                {about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                <a className="text-link" href="/Salman%20CV.pdf" target="_blank" rel="noreferrer">
                  Read my resume <ArrowUpRight size={17} />
                </a>
              </div>
            </div>

            <div className="skills-grid">
              {skillGroups.map((group, index) => (
                <article className="skill-card" key={group.label} data-reveal style={{ "--delay": `${index * 80}ms` }}>
                  <div className="skill-card__header">
                    <span>0{index + 1}</span>
                    <h3>{group.label}</h3>
                  </div>
                  <ul>
                    {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--journey" id="journey">
          <div className="page-width">
            <div className="section-heading section-heading--journey" data-reveal>
              <p className="section-label">03 — Journey</p>
              <div>
                <h2>Learning by building, then building better.</h2>
                <p>A concise view of the hands-on work and education behind my front-end practice.</p>
              </div>
            </div>
            <div className="journey-list">
              {journey.map((item, index) => (
                <article className="journey-row" key={`${item.title}-${item.period}`} data-reveal>
                  <span className="journey-number">0{index + 1}</span>
                  <div className="journey-meta">
                    <span>{item.period}</span>
                    <strong>{item.place}</strong>
                  </div>
                  <div className="journey-copy">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--contact" id="contact">
          <div className="page-width">
            <div className="contact-card" data-reveal>
              <div className="contact-copy">
                <p className="section-label section-label--dark">04 — Contact</p>
                <h2>Have a useful idea that needs a thoughtful front end?</h2>
                <p>Tell me what you are building, what is getting in the way, and where I can help.</p>
                <a className="contact-email" href={`mailto:${contact.email}`}>
                  {contact.email} <ArrowUpRight aria-hidden="true" />
                </a>
              </div>
              <div className="contact-panel">
                <div className="contact-detail">
                  <MapPin size={18} aria-hidden="true" />
                  <span>Based in</span>
                  <strong>{contact.location}</strong>
                </div>
                <a className="contact-detail" href={`tel:${contact.phoneHref}`}>
                  <Phone size={18} aria-hidden="true" />
                  <span>Call</span>
                  <strong>{contact.phoneDisplay}</strong>
                </a>
                <button className="copy-button" type="button" onClick={copyEmail}>
                  <Copy size={17} aria-hidden="true" />
                  {copied ? "Email copied" : "Copy email address"}
                </button>
                <p className="copy-status" aria-live="polite">{copied ? "Email address copied to clipboard." : ""}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-width footer-grid">
          <div>
            <span className="brand-mark brand-mark--footer">SA</span>
            <p>Front-end developer creating clear, responsive digital experiences.</p>
          </div>
          <div className="footer-links">
            <a href={contact.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
            <a href={`mailto:${contact.email}`}><Mail size={17} /> Email</a>
          </div>
          <p className="footer-meta">© {new Date().getFullYear()} Salman Ahmed Khan</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

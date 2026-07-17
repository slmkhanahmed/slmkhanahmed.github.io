import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  Command,
  Copy,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Search,
  X,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";
import { content } from "./data/content";

const navItems = [
  { label: "Work", href: "#work", id: "work" },
  { label: "Lab", href: "#lab", id: "lab" },
  { label: "Method", href: "#method", id: "method" },
  { label: "About", href: "#about", id: "about" },
  { label: "Contact", href: "#contact", id: "contact" },
];

const commandItems = [
  { label: "Selected work", note: "Two detailed case files", href: "#work" },
  { label: "Interface lab", note: "Try the interactions", href: "#lab" },
  { label: "How I build", note: "Capabilities and process", href: "#method" },
  { label: "About Salman", note: "Story and education", href: "#about" },
  { label: "Start a conversation", note: "Email Salman", href: "mailto:slmkhanahmed@gmail.com" },
  { label: "GitHub profile", note: "Public projects", href: "https://github.com/slmkhanahmed", external: true },
  { label: "Resume", note: "Open PDF", href: "/Salman%20CV.pdf", external: true },
];

const IconLink = ({ href, label, children, className = "" }) => (
  <a
    className={`icon-link ${className}`.trim()}
    href={href}
    target={href.startsWith("http") ? "_blank" : undefined}
    rel={href.startsWith("http") ? "noreferrer" : undefined}
    aria-label={label}
  >
    {children}
  </a>
);

const SectionHeading = ({ number, eyebrow, title, description, light = false }) => (
  <div className={`section-heading ${light ? "section-heading--light" : ""}`} data-reveal>
    <div className="section-heading__index">
      <span>{number}</span>
      <i />
      <span>{eyebrow}</span>
    </div>
    <div>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  </div>
);

const GalaxyPreview = () => {
  const repos = [
    ["design-system", "TypeScript", "Updated now"],
    ["developer-tools", "JavaScript", "Updated 2d"],
    ["api-starter", "React", "Updated 4d"],
  ];

  return (
    <div className="case-preview case-preview--galaxy" aria-hidden="true">
      <div className="browser-bar">
        <div className="browser-dots"><i /><i /><i /></div>
        <span>github.com / stars / useful-tools</span>
        <span className="browser-secure">secure</span>
      </div>
      <div className="galaxy-app">
        <div className="galaxy-app__head">
          <div>
            <span className="micro-label">Git Galaxy Finder</span>
            <strong>Your saved universe.</strong>
          </div>
          <span className="extension-chip">Firefox add-on</span>
        </div>
        <div className="galaxy-search">
          <Search size={17} />
          <span>Search starred repositories...</span>
          <kbd>⌘ K</kbd>
        </div>
        <div className="galaxy-results">
          <span className="result-count">3 repositories found</span>
          {repos.map(([name, language, updated], index) => (
            <div className="galaxy-repo" key={name}>
              <span className="repo-number">0{index + 1}</span>
              <div>
                <strong>{name}</strong>
                <span>{language}</span>
              </div>
              <small>{updated}</small>
              <span className="repo-star">★</span>
            </div>
          ))}
        </div>
      </div>
      <span className="preview-sticker preview-sticker--a">SPA aware</span>
      <span className="preview-sticker preview-sticker--b">theme adaptive</span>
    </div>
  );
};

const FeedbackPreview = () => (
  <div className="case-preview case-preview--feedback" aria-hidden="true">
    <div className="feedback-shell">
      <aside className="feedback-sidebar">
        <div className="feedback-logo"><span>SA</span><strong>Productboard</strong></div>
        <nav>
          <span className="is-active">Suggestions <b>12</b></span>
          <span>Roadmap <b>3</b></span>
          <span>Changelog</span>
        </nav>
        <div className="feedback-status"><i /> Local state saved</div>
      </aside>
      <div className="feedback-main">
        <header>
          <div><span className="micro-label">Product feedback</span><strong>Shape what comes next.</strong></div>
          <span className="new-feedback">+ Add feedback</span>
        </header>
        <div className="feedback-toolbar">
          <span>12 suggestions</span>
          <span>Sort: Most upvotes</span>
        </div>
        <div className="feedback-list">
          {[
            ["72", "Advanced search", "In progress", "Feature"],
            ["46", "Dark mode support", "Planned", "UI"],
            ["31", "Keyboard shortcuts", "Planned", "UX"],
          ].map(([votes, title, status, category]) => (
            <div className="feedback-item" key={title}>
              <span className="vote-box">▲<b>{votes}</b></span>
              <div><strong>{title}</strong><p>Make everyday product work faster and clearer.</p><span>{category}</span></div>
              <small>{status}</small>
            </div>
          ))}
        </div>
      </div>
    </div>
    <span className="preview-sticker preview-sticker--c">3 breakpoints</span>
    <span className="preview-sticker preview-sticker--d">stateful UI</span>
  </div>
);

const ProjectPreview = ({ type }) => (type === "feedback" ? <FeedbackPreview /> : <GalaxyPreview />);

const ProjectCase = ({ project }) => (
  <article className={`case-file case-file--${project.theme}`} id={project.slug} aria-labelledby={`${project.slug}-title`}>
    <div className="case-file__masthead page-width" data-reveal>
      <div className="case-number">{project.number}</div>
      <div>
        <span>{project.descriptor}</span>
        <span>{project.period}</span>
      </div>
      <h3 id={`${project.slug}-title`}>{project.title}</h3>
      <p>{project.statement}</p>
    </div>

    <div className="page-width case-file__visual" data-reveal>
      <ProjectPreview type={project.preview} />
    </div>

    <div className="page-width case-file__story">
      <div className="case-summary" data-reveal>
        <span className="micro-label">The short version</span>
        <p>{project.summary}</p>
        <div className="case-links">
          <a href={project.live} target="_blank" rel="noreferrer">
            {project.liveLabel} <ArrowUpRight size={18} />
          </a>
          <a href={project.source} target="_blank" rel="noreferrer">
            Source on GitHub <Github size={18} />
          </a>
        </div>
      </div>

      <dl className="case-decisions" data-reveal>
        <div><dt>What I owned</dt><dd>{project.role}</dd></div>
        <div><dt>Hard part</dt><dd>{project.constraint}</dd></div>
        <div><dt>Key decision</dt><dd>{project.decision}</dd></div>
        <div><dt>Result</dt><dd>{project.result}</dd></div>
      </dl>
    </div>

    <div className="page-width proof-grid" data-reveal>
      {project.proof.map((item) => (
        <div className="proof-card" key={item.label}>
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </div>
      ))}
    </div>

    <div className="page-width case-file__footer" data-reveal>
      <div>
        <span className="micro-label">Build notes</span>
        <ul>
          {project.notes.map((note) => <li key={note}><Check size={16} />{note}</li>)}
        </ul>
      </div>
      <div>
        <span className="micro-label">Stack</span>
        <ul className="stack-list">
          {project.stack.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </div>
  </article>
);

const SearchLab = () => {
  const [query, setQuery] = useState("");
  const repos = ["interface-notes", "github-search", "product-roadmap", "motion-study"];
  const results = repos.filter((repo) => repo.includes(query.toLowerCase().trim()));

  return (
    <article className="lab-card lab-card--search">
      <div className="lab-card__head">
        <span>LAB / 01</span>
        <span>Search states</span>
      </div>
      <div className="lab-demo search-demo">
        <label htmlFor="lab-search">Filter the repository list</label>
        <div className="lab-search-field">
          <Search size={17} />
          <input
            id="lab-search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Try 'motion'"
          />
          <span>{results.length}</span>
        </div>
        <div className="lab-results" aria-live="polite">
          {results.length ? results.map((repo) => <span key={repo}>{repo}<ArrowRight size={14} /></span>) : <p>No match. Try another signal.</p>}
        </div>
      </div>
      <h3>Useful feedback in every state.</h3>
      <p>Search is not just an input. It is focus, filtering, counts, empty states, and a clear next move.</p>
    </article>
  );
};

const ResponsiveLab = () => {
  const [width, setWidth] = useState(430);
  const mode = width < 300 ? "mobile" : width < 430 ? "tablet" : "desktop";

  return (
    <article className="lab-card lab-card--responsive">
      <div className="lab-card__head">
        <span>LAB / 02</span>
        <span>Responsive pressure</span>
      </div>
      <div className="lab-demo responsive-demo">
        <div className="responsive-control">
          <label htmlFor="viewport-range">Preview width</label>
          <output htmlFor="viewport-range">{width}px / {mode}</output>
        </div>
        <input
          id="viewport-range"
          className="range-control"
          type="range"
          min="240"
          max="520"
          value={width}
          onChange={(event) => setWidth(Number(event.target.value))}
        />
        <div className={`mini-viewport is-${mode}`} style={{ "--demo-width": `${width}px` }}>
          <i className="mini-nav" />
          <div className="mini-layout"><span /><span /><span /></div>
        </div>
      </div>
      <h3>Breakpoints follow content.</h3>
      <p>Drag the viewport. The composition changes when the content needs a new arrangement, not at an arbitrary device label.</p>
    </article>
  );
};

const StateLab = () => {
  const [voted, setVoted] = useState(false);
  const [saved, setSaved] = useState(true);

  return (
    <article className="lab-card lab-card--state">
      <div className="lab-card__head">
        <span>LAB / 03</span>
        <span>Interaction feedback</span>
      </div>
      <div className="lab-demo state-demo">
        <div className="state-demo__ticket">
          <button type="button" aria-pressed={voted} onClick={() => setVoted((current) => !current)}>
            ▲ <strong>{voted ? 73 : 72}</strong>
          </button>
          <div><span>In progress</span><strong>Advanced search</strong><small>Make finding feedback faster.</small></div>
        </div>
        <button className={`save-state ${saved ? "is-saved" : ""}`} type="button" onClick={() => setSaved((current) => !current)}>
          {saved ? <Check size={16} /> : null}{saved ? "Saved locally" : "Save preference"}
        </button>
      </div>
      <h3>Every action answers back.</h3>
      <p>Try the vote and save controls. Good interaction design removes doubt the moment a person acts.</p>
    </article>
  );
};

const CommandPalette = ({ open, query, setQuery, onClose }) => {
  const inputRef = useRef(null);
  const results = useMemo(() => {
    const normalized = query.toLowerCase().trim();
    if (!normalized) return commandItems;
    return commandItems.filter((item) => `${item.label} ${item.note}`.toLowerCase().includes(normalized));
  }, [query]);

  useEffect(() => {
    if (open) window.setTimeout(() => inputRef.current?.focus(), 20);
  }, [open]);

  if (!open) return null;

  return (
    <div className="command-layer" role="presentation" onMouseDown={(event) => {
      if (event.target === event.currentTarget) onClose();
    }}>
      <div className="command-dialog" role="dialog" aria-modal="true" aria-labelledby="command-title">
        <div className="command-search">
          <Command size={19} />
          <label className="sr-only" htmlFor="command-input">Search portfolio navigation</label>
          <input
            ref={inputRef}
            id="command-input"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Where do you want to go?"
          />
          <button type="button" onClick={onClose} aria-label="Close quick navigation"><X size={18} /></button>
        </div>
        <div className="command-meta"><span id="command-title">Quick navigation</span><span>ESC to close</span></div>
        <div className="command-results">
          {results.length ? results.map((item, index) => (
            <a
              href={item.href}
              key={item.label}
              onClick={onClose}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
            >
              <span>0{index + 1}</span>
              <div><strong>{item.label}</strong><small>{item.note}</small></div>
              {item.external ? <ExternalLink size={16} /> : <ArrowRight size={16} />}
            </a>
          )) : <p className="command-empty">No result. Try “work”, “about”, or “email”.</p>}
        </div>
      </div>
    </div>
  );
};

const formatLocalTime = (date) => new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Karachi",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
}).format(date);

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);
  const [commandQuery, setCommandQuery] = useState("");
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [now, setNow] = useState(() => new Date());
  const menuToggleRef = useRef(null);
  const mobileNavigationRef = useRef(null);
  const previousMenuOpenRef = useRef(false);
  const commandReturnFocusRef = useRef(null);
  const previousCommandOpenRef = useRef(false);
  const { identity, quickFacts, projects, capabilities, process, sideQuest, about, journey, contact } = content;

  useEffect(() => {
    const interval = window.setInterval(() => setNow(new Date()), 30000);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    let firstFrame;
    let secondFrame;

    const scrollToCurrentHash = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (!id) return;

      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
      firstFrame = window.requestAnimationFrame(() => {
        secondFrame = window.requestAnimationFrame(() => {
          document.getElementById(id)?.scrollIntoView({ block: "start" });
        });
      });
    };

    scrollToCurrentHash();
    window.addEventListener("hashchange", scrollToCurrentHash);

    return () => {
      window.removeEventListener("hashchange", scrollToCurrentHash);
      window.cancelAnimationFrame(firstFrame);
      if (secondFrame) window.cancelAnimationFrame(secondFrame);
    };
  }, []);

  useEffect(() => {
    let focusTimer;
    if (menuOpen) {
      focusTimer = window.setTimeout(() => {
        mobileNavigationRef.current?.querySelector("a, button")?.focus();
      }, 20);
    } else if (previousMenuOpenRef.current) {
      menuToggleRef.current?.focus();
    }
    previousMenuOpenRef.current = menuOpen;
    return () => window.clearTimeout(focusTimer);
  }, [menuOpen]);

  useEffect(() => {
    let focusTimer;
    if (!commandOpen && previousCommandOpenRef.current) {
      focusTimer = window.setTimeout(() => commandReturnFocusRef.current?.focus?.(), 20);
    }
    previousCommandOpenRef.current = commandOpen;
    return () => window.clearTimeout(focusTimer);
  }, [commandOpen]);

  useEffect(() => {
    const revealItems = document.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -8%" });

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return undefined;
    const sections = navItems.map((item) => document.getElementById(item.id)).filter(Boolean);
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible[0]) setActiveSection(visible[0].target.id);
    }, { rootMargin: "-30% 0px -55%", threshold: [0, 0.15, 0.4] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
      document.documentElement.style.setProperty("--scroll-progress", progress.toString());
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setMenuOpen(false);
        setCommandOpen((current) => {
          if (!current) commandReturnFocusRef.current = menuOpen ? menuToggleRef.current : document.activeElement;
          return !current;
        });
      }
      if (event.key === "Escape") {
        setMenuOpen(false);
        setCommandOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    const locked = menuOpen || commandOpen;
    document.body.style.overflow = locked ? "hidden" : "";
    if (commandOpen) {
      [document.querySelector(".site-header"), document.getElementById("main-content"), document.querySelector(".site-footer")]
        .filter(Boolean)
        .forEach((surface) => surface.setAttribute("inert", ""));
    }
    return () => {
      document.body.style.overflow = "";
      if (commandOpen) {
        [document.querySelector(".site-header"), document.getElementById("main-content"), document.querySelector(".site-footer")]
          .filter(Boolean)
          .forEach((surface) => surface.removeAttribute("inert"));
      }
    };
  }, [menuOpen, commandOpen]);

  const openCommand = () => {
    commandReturnFocusRef.current = menuOpen ? menuToggleRef.current : document.activeElement;
    setMenuOpen(false);
    setCommandQuery("");
    setCommandOpen(true);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${contact.email}`;
    }
  };

  const handleHeroPointer = (event) => {
    if (event.pointerType === "touch") return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5).toFixed(3);
    const y = ((event.clientY - rect.top) / rect.height - 0.5).toFixed(3);
    event.currentTarget.style.setProperty("--mx", x);
    event.currentTarget.style.setProperty("--my", y);
  };

  return (
    <div className="site-shell">
      <div className="scroll-progress" aria-hidden="true" />
      <a className="skip-link" href="#main-content">Skip to content</a>

      <header className="site-header">
        <nav className="nav-shell page-width" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="Salman Ahmed Khan - home">
            <span className="brand-mark">SA</span>
            <span className="brand-copy"><strong>Salman Ahmed Khan</strong><small>Front-end / PK</small></span>
          </a>

          <div className="nav-links">
            {navItems.map((item) => (
              <a className={activeSection === item.id ? "is-active" : ""} href={item.href} key={item.href} aria-current={activeSection === item.id ? "location" : undefined}>
                {item.label}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <button className="command-button" type="button" onClick={openCommand} aria-label="Open quick navigation">
              <Command size={16} /><span>Quick jump</span><kbd>Ctrl K</kbd>
            </button>
            <a className="resume-button" href="/Salman%20CV.pdf" target="_blank" rel="noreferrer">
              Resume <ArrowUpRight size={16} />
            </a>
            <button
              ref={menuToggleRef}
              className="menu-toggle"
              type="button"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen((current) => !current)}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        <div ref={mobileNavigationRef} id="mobile-navigation" className={`mobile-navigation ${menuOpen ? "is-open" : ""}`}>
          <div className="mobile-navigation__inner page-width">
            <div className="mobile-navigation__meta"><span>Navigate</span><span>PK {formatLocalTime(now)}</span></div>
            {navItems.map((item, index) => (
              <a href={item.href} key={item.href} onClick={() => setMenuOpen(false)}>
                <span>0{index + 1}</span>{item.label}<ArrowDownRight />
              </a>
            ))}
            <div className="mobile-navigation__actions">
              <button type="button" onClick={openCommand}><Command size={17} />Quick navigation</button>
              <a href="/Salman%20CV.pdf" target="_blank" rel="noreferrer"><Download size={17} />Open resume</a>
            </div>
          </div>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" id="top">
          <div className="page-width hero-topline">
            <span>{identity.eyebrow}</span>
            <span><i />{identity.availability}</span>
            <span>PK {formatLocalTime(now)}</span>
          </div>

          <div className="page-width hero-grid">
            <div className="hero-copy">
              <p className="hero-kicker">Salman Ahmed Khan presents / Field notes 2026</p>
              <h1>
                <span className="sr-only">Salman Ahmed Khan, front-end developer. </span>
                {identity.headline.map((line, index) => <span className={index === identity.headline.length - 1 ? "hero-accent" : ""} key={line}>{line}</span>)}
              </h1>
              <div className="hero-intro-row">
                <p>{identity.introduction}</p>
                <div className="hero-actions">
                  <a className="button button--ink" href="#work">Explore the work <ArrowDownRight size={18} /></a>
                  <button className="button button--line" type="button" onClick={openCommand}><Command size={17} />Quick jump</button>
                </div>
              </div>
            </div>

            <div className="hero-lab" onPointerMove={handleHeroPointer} onPointerLeave={(event) => {
              event.currentTarget.style.setProperty("--mx", "0");
              event.currentTarget.style.setProperty("--my", "0");
            }}>
              <div className="hero-lab__grid" aria-hidden="true" />
              <div className="portrait-card">
                <div className="portrait-card__head"><span>IDENT / 01</span><span>RAWALPINDI</span></div>
                <img src="/salman-portrait.png" alt="Salman Ahmed Khan" />
                <div className="portrait-card__foot"><strong>SAK</strong><span>Front-end developer<br />Browser-tool builder</span></div>
              </div>
              <div className="field-note field-note--one"><span>01</span>React systems</div>
              <div className="field-note field-note--two"><span>02</span>Browser tools</div>
              <div className="field-note field-note--three"><span>03</span>Product states</div>
              <div className="hero-code-card" aria-hidden="true">
                <span>interface.tsx</span>
                <code><i>const</i> build = &#123;<br />&nbsp;&nbsp;useful: <b>true</b>,<br />&nbsp;&nbsp;clear: <b>true</b>,<br />&nbsp;&nbsp;tested: <b>true</b><br />&#125;;</code>
              </div>
            </div>
          </div>

          <div className="page-width fact-strip" aria-label="Quick facts">
            {quickFacts.map((fact, index) => (
              <div key={fact.label}><span>0{index + 1} / {fact.label}</span><strong>{fact.value}</strong></div>
            ))}
          </div>

          <div className="name-ribbon" aria-hidden="true">
            <div><span>SALMAN AHMED KHAN</span><i>✦</i><span>INTERFACE FIELD NOTES</span><i>✦</i><span>SALMAN AHMED KHAN</span><i>✦</i><span>INTERFACE FIELD NOTES</span></div>
          </div>
        </section>

        <section className="work-intro" id="work">
          <div className="page-width">
            <SectionHeading
              number="01"
              eyebrow="Selected work"
              title="Two real products. No filler projects."
              description="The strongest portfolios guide people through the thinking underneath the interface. These case files show the problem, ownership, constraints, decisions, and result."
            />
            <div className="work-index" data-reveal>
              {projects.map((project) => (
                <a href={`#${project.slug}`} key={project.slug}>
                  <span>{project.number}</span>
                  <div><strong>{project.title}</strong><small>{project.descriptor}</small></div>
                  <p>{project.statement}</p>
                  <ArrowDownRight />
                </a>
              ))}
            </div>
          </div>
        </section>

        {projects.map((project) => <ProjectCase project={project} key={project.slug} />)}

        <section className="section lab-section" id="lab">
          <div className="page-width">
            <SectionHeading
              number="02"
              eyebrow="Interface lab"
              title="The site should prove the craft, not only claim it."
              description="Three small, working demonstrations of the details I think about when building product interfaces. Try them."
            />
            <div className="lab-grid" data-reveal>
              <SearchLab />
              <ResponsiveLab />
              <StateLab />
            </div>
            <article className="side-quest" data-reveal>
              <div className="side-quest__label"><span>+1</span>{sideQuest.label}</div>
              <div>
                <h3>{sideQuest.title}</h3>
                <p>{sideQuest.description}</p>
              </div>
              <ul>{sideQuest.notes.map((note) => <li key={note}>{note}</li>)}</ul>
              <a href={sideQuest.source} target="_blank" rel="noreferrer">Inspect the fork <Github size={17} /><span className="sr-only"> (opens in a new tab)</span></a>
            </article>
          </div>
        </section>

        <section className="section method-section" id="method">
          <div className="page-width">
            <SectionHeading
              number="03"
              eyebrow="How I build"
              title="Visual confidence, backed by engineering discipline."
              description="Technology is supporting evidence. The real capability is choosing the right system for the product and carrying quality through every layer."
              light
            />

            <div className="capability-list">
              {capabilities.map((capability) => (
                <article key={capability.number} data-reveal>
                  <span>{capability.number}</span>
                  <h3>{capability.title}</h3>
                  <p>{capability.description}</p>
                  <small>{capability.tools}</small>
                  <ArrowUpRight aria-hidden="true" />
                </article>
              ))}
            </div>

            <div className="process-board" data-reveal>
              <div className="process-board__title"><span>BUILD SEQUENCE</span><strong>From friction to finished interface.</strong></div>
              <div className="process-grid">
                {process.map((step) => (
                  <article key={step.number}>
                    <div><span>{step.number}</span><small>{step.artifact}</small></div>
                    <h3>{step.title}</h3>
                    <p>{step.detail}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="page-width">
            <SectionHeading
              number="04"
              eyebrow="About"
              title={about.title}
              description="A useful interface starts with attention: noticing the confusing moment, the missing feature, or the state nobody designed."
            />

            <div className="about-layout">
              <div className="about-portrait" data-reveal>
                <img src="/salman-portrait.png" alt="Portrait of Salman Ahmed Khan" />
                <span>Salman / Rawalpindi / PK</span>
                <div><i />Available for collaboration</div>
              </div>
              <div className="about-story" data-reveal>
                {about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                <a href="/Salman%20CV.pdf" target="_blank" rel="noreferrer">Read the resume <ArrowUpRight size={18} /></a>
              </div>
              <ol className="principle-list" data-reveal>
                {about.principles.map((principle, index) => <li key={principle}><span>0{index + 1}</span>{principle}</li>)}
              </ol>
            </div>

            <div className="journey-board" data-reveal>
              <div className="journey-board__heading"><span>Timeline</span><h3>Learning by building, then building better.</h3></div>
              <div className="journey-list">
                {journey.map((item, index) => (
                  <article key={`${item.title}-${item.period}`}>
                    <span>0{index + 1}</span>
                    <div><small>{item.period}</small><strong>{item.place}</strong></div>
                    <div><h4>{item.title}</h4><p>{item.description}</p></div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="page-width contact-layout">
            <div className="contact-main" data-reveal>
              <span className="contact-index">05 / CONTACT</span>
              <h2>Bring the problem.<br /><em>We’ll shape the interface.</em></h2>
              <p>Have a useful product idea, a front end that needs more clarity, or an open-source problem worth solving? Tell me what is getting in the way.</p>
              <a className="contact-email" href={`mailto:${contact.email}`}>{contact.email}<ArrowUpRight /></a>
            </div>

            <div className="contact-aside" data-reveal>
              <div><MapPin size={18} /><span>Based in</span><strong>{contact.location}</strong></div>
              <div><span className="contact-status-dot" /><span>Status</span><strong>{identity.availability}</strong></div>
              <button type="button" onClick={copyEmail}><Copy size={17} />{copied ? "Email copied" : "Copy email address"}</button>
              <p className="sr-only" aria-live="polite">{copied ? "Email address copied to clipboard." : ""}</p>
              <div className="contact-socials">
                <IconLink href={contact.github} label="Visit Salman's GitHub profile"><Github /></IconLink>
                <IconLink href={contact.linkedin} label="Visit Salman's LinkedIn profile"><Linkedin /></IconLink>
                <IconLink href={`mailto:${contact.email}`} label="Email Salman"><Mail /></IconLink>
              </div>
            </div>
          </div>
          <div className="contact-ribbon" aria-hidden="true"><span>LET'S BUILD SOMETHING USEFUL</span><ArrowRight /><span>LET'S BUILD SOMETHING USEFUL</span></div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-width footer-grid">
          <div className="footer-brand"><span className="brand-mark">SA</span><div><strong>Salman Ahmed Khan</strong><small>Front-end developer / Rawalpindi</small></div></div>
          <div className="footer-links">
            <a href={contact.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} /></a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14} /></a>
            <a href="/Salman%20CV.pdf" target="_blank" rel="noreferrer">Resume <ArrowUpRight size={14} /></a>
          </div>
          <p>Designed and built with React, CSS, restraint, and curiosity. © {new Date().getFullYear()}</p>
          <a className="back-to-top" href="#top">Back to top <ArrowUpRight size={14} /></a>
        </div>
      </footer>

      <CommandPalette
        open={commandOpen}
        query={commandQuery}
        setQuery={setCommandQuery}
        onClose={() => setCommandOpen(false)}
      />
    </div>
  );
}

export default App;

export const content = {
  identity: {
    name: "Salman Ahmed Khan",
    role: "Front-end developer",
    location: "Rawalpindi, Pakistan",
    eyebrow: "Front-end developer / Browser-tool builder",
    headline: ["Useful software,", "shaped down to", "the last pixel."],
    introduction:
      "I turn practical problems into responsive, accessible interfaces - from browser tools that improve GitHub to product workflows with many moving states.",
    availability: "Available for independent projects and collaborations",
  },
  quickFacts: [
    { label: "Primary craft", value: "React + TypeScript" },
    { label: "Shipped", value: "Firefox add-on" },
    { label: "Based in", value: "Rawalpindi, PK" },
    { label: "Working style", value: "Useful. Clear. Tested." },
  ],
  projects: [
    {
      number: "01",
      slug: "galaxy",
      title: "Git Galaxy Finder",
      descriptor: "Browser extension / Public source",
      period: "April 2024 - March 2026 / public releases",
      statement: "A missing GitHub feature, designed, built, and shipped as a Firefox add-on.",
      summary:
        "GitHub stars are valuable until the list becomes too large to use. Git Galaxy Finder adds fast search directly to starred-repository pages, so saved tools stay findable.",
      role: "Product idea, interaction design, extension architecture, React implementation, and public releases.",
      constraint:
        "The interface has to feel native inside GitHub while surviving client-side navigation, theme changes, and continuously changing repository data.",
      decision:
        "Treat the extension like a respectful guest: adapt to GitHub's theme, observe SPA transitions, keep results current, and avoid taking over the page.",
      result:
        "Published for Firefox, source available on GitHub, and refined across multiple public releases with persistence, loading feedback, and performance improvements.",
      proof: [
        { value: "Firefox", label: "published add-on" },
        { value: "52+", label: "public commits" },
        { value: "4+", label: "public releases" },
        { value: "Public", label: "source on GitHub" },
      ],
      notes: [
        "Search by repository name or description",
        "Theme-aware GitHub integration",
        "SPA navigation and data-sync handling",
        "Loading, empty, and persistence states",
      ],
      stack: ["React", "TypeScript", "WebExtensions", "Primer UI", "DOM APIs"],
      liveLabel: "Install on Firefox",
      live: "https://addons.mozilla.org/en-US/firefox/addon/git-star/",
      source: "https://github.com/slmkhanahmed/Git-Galaxy-Finder",
      preview: "galaxy",
      theme: "ink",
    },
    {
      number: "02",
      slug: "feedback",
      title: "Product Feedback App",
      descriptor: "Product workflow / Responsive web app",
      period: "May - June 2024",
      statement: "A multi-view product workflow that turns scattered requests into a clear roadmap.",
      summary:
        "A responsive feedback experience for browsing requests, sorting ideas, joining discussions, and understanding what is planned, in progress, or complete.",
      role: "Interface design, responsive system, component architecture, application state, and end-to-end implementation.",
      constraint:
        "Dense product information has to stay easy to scan across desktop, tablet, and mobile while forms, comments, filters, and roadmap states remain coherent.",
      decision:
        "Build the experience around reusable product states rather than isolated screens, with local persistence keeping the prototype useful between visits.",
      result:
        "A deployed TypeScript application spanning suggestions, categories, sorting, comments, add/edit flows, detail views, and a responsive roadmap.",
      proof: [
        { value: "TypeScript", label: "primary language" },
        { value: "Multi-view", label: "complete product flow" },
        { value: "Local", label: "persistent state" },
        { value: "3 modes", label: "responsive layouts" },
      ],
      notes: [
        "Suggestions, categories, and sorting",
        "Roadmap with planned product states",
        "Feedback creation and editing",
        "Comment and reply interactions",
      ],
      stack: ["React", "TypeScript", "Tailwind CSS", "Context", "Local storage"],
      liveLabel: "Open live app",
      live: "https://product-feedback-app-lovat.vercel.app/",
      source: "https://github.com/slmkhanahmed/responsive",
      preview: "feedback",
      theme: "orange",
    },
  ],
  capabilities: [
    {
      number: "01",
      title: "Interface engineering",
      description: "Component systems that stay understandable as the interface gains more states.",
      tools: "React / TypeScript / JavaScript",
    },
    {
      number: "02",
      title: "Responsive systems",
      description: "Layouts designed around content behavior, touch targets, and real breakpoint pressure.",
      tools: "CSS / Tailwind / HTML",
    },
    {
      number: "03",
      title: "Browser tooling",
      description: "Extensions and page integrations that cooperate with the host product instead of fighting it.",
      tools: "WebExtensions / DOM APIs / REST",
    },
    {
      number: "04",
      title: "Product states",
      description: "Useful feedback for loading, empty, error, success, filtering, and editing moments.",
      tools: "Context / Redux / Local state",
    },
    {
      number: "05",
      title: "The quality layer",
      description: "Accessibility, semantics, performance, and polish treated as part of the build.",
      tools: "A11y / Testing / Git",
    },
  ],
  process: [
    {
      number: "01",
      title: "Understand",
      detail: "Name the user, the friction, and what success should feel like before choosing a layout.",
      artifact: "problem.txt",
    },
    {
      number: "02",
      title: "Structure",
      detail: "Map the content, states, and responsive behavior into a system that can grow cleanly.",
      artifact: "system.map",
    },
    {
      number: "03",
      title: "Build",
      detail: "Move from reusable components to the details that make the interface feel intentional.",
      artifact: "ui.tsx",
    },
    {
      number: "04",
      title: "Test",
      detail: "Pressure-test keyboard use, narrow screens, edge states, speed, and the final production build.",
      artifact: "qa.log",
    },
  ],
  sideQuest: {
    label: "Engineering side quest / Upstream fork",
    title: "Pekka Kana 2: Greta contribution",
    description:
      "A focused C++ and SDL2 contribution to an existing platformer fork: quick-save and load controls, rendering work, and a Windows x64 release. Clearly not a from-scratch project - useful proof that I am comfortable stepping outside the React layer.",
    notes: ["F5 quick-save / F9 load", "60 FPS rendering work", "Windows x64 release"],
    source: "https://github.com/slmkhanahmed/pk2_greta",
  },
  about: {
    title: "Curiosity is the operating system.",
    paragraphs: [
      "I am a front-end developer who learns by noticing friction and building a better path through it. That is how a missing GitHub search feature became a real browser extension instead of staying an idea.",
      "My best work sits between visual clarity and dependable engineering. I care about the things people feel immediately - pace, hierarchy, feedback, and responsiveness - and the things they should never have to notice, like brittle state or inaccessible controls.",
    ],
    principles: [
      "Solve the real problem before decorating it.",
      "Make every state explain what happens next.",
      "Design mobile behavior, not just mobile sizes.",
      "Keep learning in public through useful work.",
    ],
  },
  journey: [
    {
      period: "2024 - Present",
      title: "Independent front-end projects",
      place: "Project-based practice",
      description: "Building public-source browser tooling and responsive product interfaces with React and TypeScript.",
    },
    {
      period: "2024 - Present",
      title: "Intermediate in Computer Science (ICS)",
      place: "Civil College",
      description: "Strengthening the computer-science foundation behind hands-on software development.",
    },
    {
      period: "2018 - 2020",
      title: "Computer Science Matric",
      place: "Ideal Cambridge School",
      description: "The academic starting point for continued study, programming, and independent building.",
    },
  ],
  contact: {
    email: "slmkhanahmed@gmail.com",
    phoneDisplay: "+92 310 5404668",
    phoneHref: "+923105404668",
    location: "Rawalpindi, Pakistan",
    github: "https://github.com/slmkhanahmed",
    linkedin: "https://www.linkedin.com/in/slmkhanahmed/",
  },
};

/* ============================================================================
   components.js  —  shared chrome + renderers
   Injects the nav + footer on every page and turns the arrays in data.js into
   HTML. Pages only contain empty mount points (id="...").
   ========================================================================== */

const $  = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];

/* Bold your own name in author lists */
function hlAuthors(str) {
  const n = PROFILE.authorName;
  return str.split(n).join(`<span class="member">${n}</span>`);
}

/* ---- icons ---------------------------------------------------------------- */
const ICONS = {
  share:  '<path d="M18 8a3 3 0 1 0-2.83-4H15a3 3 0 0 0 .17 4l-6.34 3.66M6 12a3 3 0 1 0 0 .01M18 16a3 3 0 1 0 .01 0l-6.34-3.66"/>',
  wave:   '<path d="M2 12c2 0 2-6 4-6s2 12 4 12 2-12 4-12 2 6 4 6"/>',
  signal: '<path d="M4 20V10M9 20V4M14 20v-8M19 20V7"/>',
  camera: '<rect x="3" y="7" width="18" height="13" rx="2"/><circle cx="12" cy="13.5" r="3.5"/><path d="M8 7l1.5-3h5L16 7"/>',
  brain:  '<path d="M9 3a3 3 0 0 0-3 3 3 3 0 0 0-1 5 3 3 0 0 0 2 5 3 3 0 0 0 5 1V4a3 3 0 0 0-.34-1M15 3a3 3 0 0 1 3 3 3 3 0 0 1 1 5 3 3 0 0 1-2 5 3 3 0 0 1-5 1"/>',
  bolt:   '<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
  car:    '<path d="M5 17h14M6 17v2M18 17v2M4 13l2-5a2 2 0 0 1 2-1.3h8A2 2 0 0 1 18 8l2 5v4H4z"/><circle cx="8" cy="14" r="1"/><circle cx="16" cy="14" r="1"/>',
  grid:   '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  orbit:  '<circle cx="12" cy="12" r="3"/><ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(30 12 12)"/>',
  heart:  '<path d="M20.8 5.6a5 5 0 0 0-7.1 0L12 7.3l-1.7-1.7a5 5 0 0 0-7.1 7.1L12 21.5l8.8-8.8a5 5 0 0 0 0-7.1z"/><path d="M3 12h5l2-3 3 6 2-3h6"/>',
  leaf:   '<path d="M5 21c0-9 5-15 15-16-1 10-7 15-15 16z"/><path d="M5 21l8-8"/>'
};
const icon = name => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ICONS.signal}</svg>`;

/* profile-link badges (same visual language as the C2NS team cards) */
const LINK_META = {
  scholar:      { l: "GS", c: "#4285F4", t: "Google Scholar" },
  orcid:        { l: "iD", c: "#7FA82E", t: "ORCID" },
  researchgate: { l: "RG", c: "#00A98F", t: "ResearchGate" },
  linkedin:     { l: "in", c: "#0A66C2", t: "LinkedIn" },
  github:       { l: "GH", c: "#24292f", t: "GitHub" },
  x:            { l: "X",  c: "#0f1419", t: "X (Twitter)" },
  bracu:        { l: "BU", c: "#0f766e", t: "BRAC University profile" }
};
function linkBadges(withLabels = false) {
  return Object.keys(LINK_META).filter(k => PROFILE.links[k]).map(k => {
    const d = LINK_META[k];
    return withLabels
      ? `<a class="lrow" href="${PROFILE.links[k]}" target="_blank" rel="noopener"><span class="tcard__ico" style="--c:${d.c}">${d.l}</span><span>${d.t}</span><i aria-hidden="true">↗</i></a>`
      : `<a class="tcard__ico" style="--c:${d.c}" href="${PROFILE.links[k]}" target="_blank" rel="noopener" title="${d.t}" aria-label="${d.t}">${d.l}</a>`;
  }).join("");
}

/* ---- shared HEADER -------------------------------------------------------- */
function mountHeader() {
  const mount = $("#site-header"); if (!mount) return;
  const page = document.body.dataset.page || "";
  const nav = [
    ["index", "index.html", "Home"],
    ["research", "research.html", "Research"],
    ["publications", "publications.html", "Publications"],
    ["projects", "projects.html", "Projects"],
    ["cv", "cv.html", "Experience"],
    ["contact", "contact.html", "Contact"]
  ];
  mount.innerHTML = `
    <a class="skip-link" href="#main">Skip to content</a>
    <header class="nav" id="nav">
      <div class="wrap nav__inner">
        <a class="brand" href="index.html" aria-label="${PROFILE.name} — home">
          <span class="brand__mark" aria-hidden="true"><span></span><span></span><span></span></span>
          <span class="brand__text"><b>${PROFILE.name}</b><i>${PROFILE.honorific} · BRAC University</i></span>
        </a>
        <button class="nav__toggle" id="navToggle" aria-label="Menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
        <nav class="nav__links" id="navLinks" aria-label="Primary">
          ${nav.map(([id, href, label]) => `<a href="${href}" class="${id === page ? "is-active" : ""}">${label}</a>`).join("")}
        </nav>
      </div>
    </header>`;
}

/* ---- shared FOOTER -------------------------------------------------------- */
function mountFooter() {
  const mount = $("#site-footer"); if (!mount) return;
  mount.innerHTML = `
    <footer class="foot">
      <span class="spectrum-bar" aria-hidden="true"></span>
      <div class="wrap foot__grid">
        <div class="foot__brand">
          <div class="brand brand--foot">
            <span class="brand__mark" aria-hidden="true"><span></span><span></span><span></span></span>
            <span class="brand__text"><b>${PROFILE.name}, ${PROFILE.honorific}</b><i>${PROFILE.role}</i></span>
          </div>
          <p class="foot__inst">${PROFILE.dept}<br>${PROFILE.school}</p>
          <p>Member of <a class="text-link" href="${PROFILE.lab.url}" target="_blank" rel="noopener">${PROFILE.lab.short} ↗</a></p>
        </div>
        <div class="foot__col">
          <h4>Explore</h4>
          <a href="research.html">Research</a>
          <a href="publications.html">Publications</a>
          <a href="projects.html">Projects</a>
          <a href="cv.html">Experience &amp; teaching</a>
          <a href="${PROFILE.lab.url}" target="_blank" rel="noopener">${PROFILE.lab.short} research cluster</a>
        </div>
        <div class="foot__col">
          <h4>Contact</h4>
          <a href="mailto:${PROFILE.email}">${PROFILE.email}</a>
          <span class="foot__addr">Room ${PROFILE.room} · Ext. ${PROFILE.ext}</span>
          <span class="foot__addr">${PROFILE.address}</span>
        </div>
      </div>
      <div class="wrap foot__base">
        <span>© ${new Date().getFullYear()} ${PROFILE.name}</span>
        <span class="foot__icons">${linkBadges()}</span>
      </div>
    </footer>`;
}

/* ---- publication helpers -------------------------------------------------- */
const MONTH_ORDER = { Jan: 1, Feb: 2, Mar: 3, Apr: 4, May: 5, Jun: 6, Jul: 7, Aug: 8, Sep: 9, Oct: 10, Nov: 11, Dec: 12 };
const TYPE_ORDER  = { journal: 1, conference: 2 };
const sortedPubs = () => [...PUBLICATIONS].sort((a, b) =>
  (b.year - a.year) ||
  ((MONTH_ORDER[b.month] || 0) - (MONTH_ORDER[a.month] || 0)) ||
  ((TYPE_ORDER[a.type] || 9) - (TYPE_ORDER[b.type] || 9)));

const isQ1 = p => p.type === "journal" && (p.quartile || "").toUpperCase() === "Q1";
const pubCount = {
  journal:    () => PUBLICATIONS.filter(p => p.type === "journal").length,
  conference: () => PUBLICATIONS.filter(p => p.type === "conference").length,
  standard:   () => (typeof STANDARDS !== "undefined" ? STANDARDS.length : 0),
  q1:         () => PUBLICATIONS.filter(isQ1).length,
  all:        () => PUBLICATIONS.length
};
/* ---- Google Scholar metrics ---------------------------------------------
   Starts with the fallback numbers from data.js, then loadScholar() replaces
   them with assets/data/scholar.json (written weekly by a GitHub Action). */
const SCHOLAR = Object.assign({ live: false }, (PROFILE.scholar || {}).fallback || {});

const resolveStat = v => {
  if (typeof v !== "string") return v;
  if (v.startsWith("auto:")) return pubCount[v.slice(5)]();
  if (v.startsWith("scholar:")) return SCHOLAR[v.slice(8)] ?? "";
  return v;
};
const statSuffix = s =>
  (typeof s.value === "string" && s.value.startsWith("scholar:")) ? (SCHOLAR.live ? "" : "+") : (s.suffix || "");
const fmt = n => (typeof n === "number" ? n.toLocaleString("en-US") : n);

function scholarMetricsHTML() {
  const cells = [["Citations", SCHOLAR.citations], ["h-index", SCHOLAR.hindex], ["i10-index", SCHOLAR.i10index]]
    .filter(([, v]) => v !== null && v !== undefined && v !== "");
  if (!cells.length) return "";
  const url = PROFILE.links.scholar || `https://scholar.google.com/citations?user=${PROFILE.scholar.id}`;
  return `
    <dl class="pcard__metrics">
      ${cells.map(([k, v]) => `<div><dt>${k}</dt><dd>${fmt(v)}${!SCHOLAR.live && k === "Citations" ? "+" : ""}</dd></div>`).join("")}
    </dl>
    <a class="pcard__src" href="${url}" target="_blank" rel="noopener">Google Scholar${SCHOLAR.live && SCHOLAR.updated ? ` · updated ${SCHOLAR.updated}` : ""} ↗</a>`;
}

function applyScholar() {
  $$("[data-scholar-stat]").forEach(n => {
    const s = PROFILE.stats[+n.dataset.scholarStat];
    const v = resolveStat(s.value), suf = statSuffix(s);
    n.dataset.count = v; n.dataset.suffix = suf;
    if (!n.dataset.animating) n.textContent = fmt(v) + suf;
  });
  const box = $("#scholarMetrics");
  if (box) box.innerHTML = scholarMetricsHTML();
}

async function loadScholar() {
  const cfg = PROFILE.scholar; if (!cfg) return;
  const day = new Date().toISOString().slice(0, 10);
  const urls = [
    cfg.repo ? `https://raw.githubusercontent.com/${cfg.repo}/${cfg.branch || "main"}/assets/data/scholar.json?d=${day}` : null,
    `assets/data/scholar.json?d=${day}`
  ].filter(Boolean);
  for (const url of urls) {
    try {
      const ctrl = new AbortController(); const t = setTimeout(() => ctrl.abort(), 5000);
      const r = await fetch(url, { signal: ctrl.signal, cache: "no-cache" });
      clearTimeout(t);
      if (!r.ok) continue;
      const d = await r.json();
      if (!d || !d.citations) continue;
      Object.assign(SCHOLAR, d, { live: true });
      applyScholar();
      return;
    } catch (e) { /* try the next source */ }
  }
}

function pubDetails(p) {
  const parts = [];
  if (p.type === "journal") {
    if (p.volume) parts.push(`vol. ${p.volume}`);
    if (p.issue)  parts.push(`no. ${p.issue}`);
    if (p.pages)  parts.push(`pp. ${p.pages}`);
  } else if (p.type === "conference") {
    if (p.location) parts.push(p.location);
    if (p.pages)    parts.push(`pp. ${p.pages}`);
  }
  parts.push(p.month ? `${p.month}. ${p.year}` : `${p.year}`);
  if (p.doi) parts.push(`DOI: <a href="https://doi.org/${p.doi}" target="_blank" rel="noopener">${p.doi}</a>`);
  return parts.join(", ");
}

function pubRow(p) {
  const badge = { journal: "Journal", conference: "Conference" }[p.type] || p.type;
  const href = p.url || (p.doi ? `https://doi.org/${p.doi}` : "");
  return `
    <li class="pub reveal" data-type="${p.type}" data-year="${p.year}" data-q1="${isQ1(p)}" data-first="${p.authors.startsWith(PROFILE.authorName)}">
      <span class="pub__year">${p.year}</span>
      <div class="pub__body">
        <div class="pub__tags">
          <span class="pub__badge pub__badge--${p.type}">${badge}</span>
          ${p.quartile ? `<span class="pub__badge pub__badge--quartile pub__badge--${p.quartile.toLowerCase()}">${p.quartile}</span>` : ""}
          ${p.status ? `<span class="pub__badge pub__badge--status">${p.status}</span>` : ""}
          ${p.domestic ? `<span class="pub__badge pub__badge--status">Domestic · Korea</span>` : ""}
          ${p.award ? `<span class="pub__award">★ ${p.award}</span>` : ""}
        </div>
        <p class="pub__title">${href ? `<a href="${href}" target="_blank" rel="noopener">${p.title}</a>` : p.title}</p>
        <p class="pub__meta"><span class="pub__authors">${hlAuthors(p.authors)}</span> · <em>${p.venue}</em>, ${pubDetails(p)}</p>
      </div>
    </li>`;
}

function renderPublications(mountSel, opts = {}) {
  const m = $(mountSel); if (!m) return;
  let list = sortedPubs();
  if (opts.filter) list = list.filter(opts.filter);
  if (opts.limit)  list = list.slice(0, opts.limit);
  m.innerHTML = list.map(pubRow).join("");
}

function renderPubStats(mountSel) {
  const m = $(mountSel); if (!m) return;
  // citations come from the "Citations" entry in PROFILE.stats
  const cs = PROFILE.stats.find(s => /citation/i.test(s.label));
  const cv = cs ? resolveStat(cs.value) : 0;
  const csuf = cs ? (typeof statSuffix === "function" ? statSuffix(cs) : (cs.suffix || "")) : "";
  const k = n => n >= 1000 ? (n / 1000).toFixed(1).replace(/\.0$/, "") + "k" : String(n);
  const cells = [
    [pubCount.all(), "Total"],
    [pubCount.journal(), "Journals"],
    [pubCount.q1(), "Q1 Journals"],
    [pubCount.conference(), "Conferences"],
    [cv ? k(cv) + csuf : "—", "Citations", "pubstats__cell--wide"]
  ];
  m.innerHTML = cells.map(([n, l, cls]) =>
    `<div class="pubstats__cell ${cls || ""}"><b>${n}</b><span>${l}</span></div>`).join("");
}

/* ---- other renderers ------------------------------------------------------ */
function renderStats(mountSel) {
  const m = $(mountSel); if (!m) return;
  m.innerHTML = PROFILE.stats.map((s, i) => `
    <div class="stat reveal">
      <div class="stat__num" data-count="${resolveStat(s.value)}" data-suffix="${statSuffix(s)}"${typeof s.value === "string" && s.value.startsWith("scholar:") ? ` data-scholar-stat="${i}"` : ""}>${fmt(resolveStat(s.value))}${statSuffix(s)}</div>
      <div class="stat__label">${s.label}</div>
    </div>`).join("");
}

function researchCard(r, i) {
  return `
    <article class="rcard reveal" style="--i:${i}" id="${r.id}">
      <span class="rcard__band">${r.band}</span>
      <div class="rcard__icon">${icon(r.icon)}</div>
      <h3>${r.title}</h3>
      <p>${r.lead}</p>
      <ul class="rcard__pts">${r.points.map(p => `<li>${p}</li>`).join("")}</ul>
    </article>`;
}
function renderResearch(mountSel, limit) {
  const m = $(mountSel); if (!m) return;
  m.innerHTML = (limit ? RESEARCH.slice(0, limit) : RESEARCH).map(researchCard).join("");
}

const LINK_LABEL = { paper: "Paper", code: "Code", website: "Website", slides: "Slides", video: "Video" };
function projectCard(p, i) {
  const status = (p.status || "").toLowerCase();
  const fig = p.image
    ? `<div class="proj__fig"><img src="${p.image}" alt="${p.title}" loading="lazy"></div>`
    : `<div class="proj__fig proj__fig--ph">${icon(p.icon)}<span>${(p.tags && p.tags[0]) || "Research"}</span></div>`;
  const links = Object.keys(LINK_LABEL).filter(k => p.links && p.links[k])
    .map(k => `<a href="${p.links[k]}" target="_blank" rel="noopener">${LINK_LABEL[k]} ↗</a>`).join("");
  return `
    <article class="proj reveal" style="--i:${i % 3}" data-status="${status}">
      ${fig}
      <div class="proj__pad">
        <div class="proj__top">
          ${p.status ? `<span class="proj__status proj__status--${status}">${p.status}</span>` : ""}
          <span class="proj__period">${p.period}</span>
        </div>
        <h3>${p.title}</h3>
        <p class="proj__org">${p.role} · ${p.org}</p>
        <p class="proj__desc">${p.desc}</p>
        ${p.funding ? `<p class="proj__meta"><b>Funding</b> ${p.funding}</p>` : ""}
        ${p.team ? `<p class="proj__meta"><b>Team</b> ${p.team}</p>` : ""}
        <div class="chips">${(p.tags || []).map(t => `<span class="chip">${t}</span>`).join("")}</div>
        ${links ? `<div class="proj__links">${links}</div>` : ""}
      </div>
    </article>`;
}
function renderProjects(mountSel, opts = {}) {
  const m = $(mountSel); if (!m) return;
  let list = PROJECTS;
  if (opts.status) list = list.filter(p => (p.status || "").toLowerCase() === opts.status);
  if (opts.limit) list = list.slice(0, opts.limit);
  m.innerHTML = list.map(projectCard).join("");
}

/* project page filter (All / Ongoing / Completed) */
function projectFilters() {
  const bar = $("#projFilters"), grid = $("#allProjects");
  if (!bar || !grid) return;
  const statuses = [...new Set(PROJECTS.map(p => (p.status || "").toLowerCase()).filter(Boolean))];
  const label = s => s.charAt(0).toUpperCase() + s.slice(1);
  const count = s => s === "all" ? PROJECTS.length : PROJECTS.filter(p => (p.status || "").toLowerCase() === s).length;
  bar.innerHTML = ["all", ...statuses].map(s =>
    `<button class="fbtn${s === "all" ? " is-on" : ""}" data-status="${s}">${s === "all" ? "All" : label(s)} <span class="fbtn__n">${count(s)}</span></button>`).join("");
  bar.querySelectorAll("button").forEach(b => b.addEventListener("click", () => {
    bar.querySelectorAll("button").forEach(x => x.classList.toggle("is-on", x === b));
    const s = b.dataset.status;
    grid.querySelectorAll(".proj").forEach(c => { c.style.display = (s === "all" || c.dataset.status === s) ? "" : "none"; });
  }));
}

/* standardization list (Experience page) */
function renderStandards(mountSel) {
  const m = $(mountSel); if (!m || typeof STANDARDS === "undefined") return;
  m.innerHTML = STANDARDS.map(d => `
    <li class="pub reveal is-in">
      <span class="pub__year">${d.year}</span>
      <div class="pub__body">
        <div class="pub__tags">
          <span class="pub__badge pub__badge--standard">${d.venue}</span>
          ${d.number ? `<span class="pub__badge pub__badge--status">Doc. ${d.number}</span>` : ""}
        </div>
        <p class="pub__title">${d.url ? `<a href="${d.url}" target="_blank" rel="noopener">${d.title}</a>` : d.title}</p>
        <p class="pub__meta"><span class="pub__authors">${hlAuthors(d.authors)}</span> · ${d.month ? d.month + ". " : ""}${d.year}</p>
      </div>
    </li>`).join("");
}

function renderBio(mountSel) {
  const m = $(mountSel); if (!m) return;
  m.innerHTML = PROFILE.bio.map(p => `<p>${p}</p>`).join("");
}
function renderInterests(mountSel) {
  const m = $(mountSel); if (!m) return;
  m.innerHTML = PROFILE.interests.map(x => `<li>${x}</li>`).join("");
}

function renderTimeline(mountSel, items, kind) {
  const m = $(mountSel); if (!m) return;
  m.innerHTML = items.map(e => kind === "edu"
    ? `<li><span class="timeline__year">${e.year}</span><div><b>${e.deg}</b><em>${e.org}</em>${e.thesis ? `<span class="timeline__note">Thesis: ${e.thesis}</span>` : ""}</div></li>`
    : `<li><span class="timeline__year">${e.year}</span><div><b>${e.position}</b><em>${e.org}</em>${e.note ? `<span class="timeline__note">${e.note}</span>` : ""}</div></li>`
  ).join("");
}

function renderTeaching(mountSel) {
  const m = $(mountSel); if (!m) return;
  m.innerHTML = TEACHING.map((t, i) => `
    <article class="teach reveal" style="--i:${i}">
      <div class="teach__head">
        <h3>${t.org}</h3>
        <span class="proj__period">${t.period}</span>
      </div>
      <p class="teach__role">${t.role}</p>
      ${t.courses.length ? `<ul class="teach__list">${t.courses.map(c => `<li>${c}</li>`).join("")}</ul>` : ""}
    </article>`).join("");
}

function renderProfileCard(mountSel) {
  const m = $(mountSel); if (!m) return;
  m.innerHTML = `
    <div class="pcard__photo">
      <img src="${PROFILE.photo}" alt="Portrait of ${PROFILE.name}"
           onerror="this.style.display='none';this.nextElementSibling.style.display='grid'">
      <span class="person__mono" style="display:none">AI</span>
    </div>
    <div class="pcard__body">
      <b class="pcard__name">${PROFILE.name}, ${PROFILE.honorific}</b>
      <span class="pcard__role">${PROFILE.role}, Dept. of EEE</span>
      <dl class="dossier__meta">
        <div><dt>Room</dt><dd>${PROFILE.room}</dd></div>
        <div><dt>Ext</dt><dd>${PROFILE.ext}</dd></div>
      </dl>
      <div id="scholarMetrics">${scholarMetricsHTML()}</div>
      <a class="pcard__mail" href="mailto:${PROFILE.email}">${PROFILE.email}</a>
      <div class="tcard__icons">${linkBadges()}</div>
    </div>`;
}

function renderContact() {
  const set = (id, html) => { const n = $(id); if (n) n.innerHTML = html; };
  set("#cEmail", `<a href="mailto:${PROFILE.email}">${PROFILE.email}</a>${PROFILE.emailAlt ? `<a href="mailto:${PROFILE.emailAlt}">${PROFILE.emailAlt}</a>` : ""}`);
  set("#cOffice", `Room ${PROFILE.room}, Ext. ${PROFILE.ext}`);
  set("#cDept", `${PROFILE.dept}<br>${PROFILE.school}`);
  set("#cPhone", `<a href="tel:${PROFILE.phone.replace(/\s/g, "")}">${PROFILE.phone}</a> <span class="muted">(ext. ${PROFILE.ext})</span>`);
  set("#cAddr", PROFILE.address);
  set("#cLinks", linkBadges(true));
  const map = $("#cMap"); if (map) map.src = PROFILE.mapEmbed;
}

/* ---- pagination control --------------------------------------------------- */
function buildPager(container, current, total, onGo) {
  if (!container) return;
  if (total <= 1) { container.innerHTML = ""; return; }
  const b = (label, page, o = {}) =>
    `<button class="pagebtn${o.active ? " is-active" : ""}" ${o.disabled ? "disabled" : ""} data-page="${page}"${o.aria ? ` aria-label="${o.aria}"` : ""}>${label}</button>`;
  let html = b("‹", current - 1, { disabled: current === 1, aria: "Previous page" });
  const nums = [];
  for (let p = 1; p <= total; p++) {
    if (p === 1 || p === total || Math.abs(p - current) <= 1) nums.push(p);
    else if (nums[nums.length - 1] !== "…") nums.push("…");
  }
  nums.forEach(p => { html += p === "…" ? `<span class="pagegap">…</span>` : b(p, p, { active: p === current }); });
  html += b("›", current + 1, { disabled: current === total, aria: "Next page" });
  container.innerHTML = html;
  container.querySelectorAll(".pagebtn").forEach(btn => {
    if (!btn.disabled) btn.addEventListener("click", () => onGo(parseInt(btn.dataset.page, 10)));
  });
}
window.buildPager = buildPager;

/* ---- boot ----------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  mountHeader();
  mountFooter();

  renderProfileCard("#profileCard");
  renderStats("#homeStats");
  renderBio("#bio");
  renderInterests("#interests");
  renderResearch("#homeResearch", 3);
  renderResearch("#allResearch");
  renderProjects("#allProjects");
  renderProjects("#homeProjects", { status: "ongoing", limit: 3 });
  projectFilters();
  renderStandards("#standardsList");
  renderPublications("#homePubs", { limit: 5, filter: p => isQ1(p) && p.authors.startsWith(PROFILE.authorName) });
  renderPublications("#allPubs");
  renderPubStats("#pubStats");
  renderTimeline("#expTimeline", PROFILE.experience, "exp");
  renderTimeline("#eduTimeline", PROFILE.education, "edu");
  renderTeaching("#teaching");
  renderContact();

  // counts used inline in page copy: <span data-count-of="journal"></span>
  $$("[data-count-of]").forEach(n => { n.textContent = pubCount[n.dataset.countOf](); });

  window.SITE_JS && window.SITE_JS.init();
  loadScholar();
});

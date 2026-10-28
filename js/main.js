/* ============================================================================
   main.js  —  interactions & motion
   ========================================================================== */
window.SITE_JS = (function () {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* nav: shrink on scroll + mobile toggle */
  function nav() {
    const bar = document.getElementById("nav");
    const toggle = document.getElementById("navToggle");
    const links = document.getElementById("navLinks");
    if (bar) {
      const onScroll = () => bar.classList.toggle("is-scrolled", window.scrollY > 8);
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }
    if (toggle && links) {
      toggle.addEventListener("click", () => {
        const open = links.classList.toggle("is-open");
        toggle.classList.toggle("is-open", open);
        toggle.setAttribute("aria-expanded", open);
      });
      links.querySelectorAll("a").forEach(a =>
        a.addEventListener("click", () => {
          links.classList.remove("is-open");
          toggle.classList.remove("is-open");
          toggle.setAttribute("aria-expanded", "false");
        }));
    }
  }

  /* scroll reveal */
  function reveal() {
    const items = document.querySelectorAll(".reveal");
    if (reduce || !("IntersectionObserver" in window)) {
      items.forEach(i => i.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    items.forEach(i => io.observe(i));
  }

  /* animated counters */
  function counters() {
    const nums = document.querySelectorAll(".stat__num[data-count]");
    if (!nums.length) return;
    const run = (node) => {
      const target = parseFloat(node.dataset.count) || 0;
      const suffix = node.dataset.suffix || "";
      if (reduce) { node.textContent = target + suffix; return; }
      node.textContent = "0" + suffix;
      const dur = 1400, t0 = performance.now();
      const tick = (t) => {
        const k = Math.min(1, (t - t0) / dur);
        const eased = 1 - Math.pow(1 - k, 3);
        node.textContent = Math.round(target * eased) + suffix;
        if (k < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { run(e.target); io.unobserve(e.target); } });
    }, { threshold: 0.5 });
    nums.forEach(n => io.observe(n));
  }

  /* publications: filtering + search + pagination */
  function pubFilters() {
    const bar = document.getElementById("pubFilters");
    const list = document.getElementById("allPubs");
    if (!list) return;
    const rows = [...list.querySelectorAll(".pub")];
    rows.forEach(r => r.classList.add("is-in")); // pagination controls visibility
    const search = document.getElementById("pubSearch");
    const empty = document.getElementById("pubEmpty");
    const pager = document.getElementById("pubPager");
    const count = document.getElementById("pubCount");
    const PAGE = 10;
    const f = { type: "all", only: "all", q: "" };
    let page = 1;

    // allow deep links like publications.html#journal or #conference
    const hash = location.hash.slice(1);
    if (["journal", "conference"].includes(hash)) f.type = hash;

    const matches = row =>
      (f.type === "all" || row.dataset.type === f.type) &&
      (f.only === "all" || (f.only === "q1" && row.dataset.q1 === "true") || (f.only === "first" && row.dataset.first === "true")) &&
      (!f.q || row.textContent.toLowerCase().includes(f.q));

    const sync = () => bar && bar.querySelectorAll("[data-filter]").forEach(b => {
      const [k, v] = b.dataset.filter.split(":");
      b.classList.toggle("is-on", f[k] === v);
    });

    const apply = () => {
      const matched = rows.filter(matches);
      const pages = Math.max(1, Math.ceil(matched.length / PAGE));
      if (page > pages) page = pages;
      const start = (page - 1) * PAGE, end = start + PAGE;
      rows.forEach(r => { r.style.display = "none"; });
      matched.forEach((r, i) => { if (i >= start && i < end) r.style.display = ""; });
      if (empty) empty.style.display = matched.length ? "none" : "block";
      if (count) count.textContent = `${matched.length} of ${rows.length}`;
      buildPager(pager, page, pages, p => {
        page = p; apply();
        list.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
      });
    };

    bar && bar.querySelectorAll("[data-filter]").forEach(btn => {
      btn.addEventListener("click", () => {
        const [k, v] = btn.dataset.filter.split(":");
        f[k] = v; page = 1; sync(); apply();
      });
    });
    if (search) search.addEventListener("input", e => { f.q = e.target.value.toLowerCase().trim(); page = 1; apply(); });
    sync(); apply();
  }

  /* hero signal canvas — overlapping sine waves + drifting network nodes */
  function heroSignal() {
    const canvas = document.getElementById("heroCanvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w, h, dpr, nodes = [], raf, t = 0;
    const COLORS = ["#0d9488", "#0891b2", "#7c3aed"];

    const size = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.max(14, Math.round(w / 55));
      nodes = Array.from({ length: n }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - .5) * .25, vy: (Math.random() - .5) * .25
      }));
    };

    const waves = () => {
      const mids = [0.46, 0.6, 0.74];
      for (let s = 0; s < 3; s++) {
        ctx.beginPath();
        const amp = 70 - s * 12, freq = 0.0016 + s * 0.0006, speed = t * (0.5 + s * 0.3);
        for (let x = 0; x <= w; x += 5) {
          const y = h * mids[s] + Math.sin(x * freq + speed) * amp
                  + Math.sin(x * 0.006 + t * 0.6) * (amp * 0.35);
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.strokeStyle = COLORS[s] + "40";
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }
    };

    const network = () => {
      for (const p of nodes) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 130) {
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(79,70,229,${(1 - d / 130) * 0.16})`;
            ctx.lineWidth = 1; ctx.stroke();
          }
        }
      }
      for (const p of nodes) {
        ctx.beginPath(); ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(8,145,178,.45)"; ctx.fill();
      }
    };

    const frame = () => {
      ctx.clearRect(0, 0, w, h);
      network();
      waves();
      t += 0.02;
      raf = requestAnimationFrame(frame);
    };

    size();
    window.addEventListener("resize", size);
    if (reduce) {
      // draw a single static frame
      network(); waves();
    } else {
      frame();
      document.addEventListener("visibilitychange", () => {
        if (document.hidden) cancelAnimationFrame(raf);
        else frame();
      });
    }
  }

  /* smooth-scroll for in-page anchors */
  function anchors() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener("click", e => {
        const id = a.getAttribute("href");
        if (id.length < 2) return;
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
        }
      });
    });
  }

  function init() {
    nav();
    reveal();
    counters();
    pubFilters();
    heroSignal();
    anchors();
  }

  return { init };
})();

(function () {
  const STORAGE = "llb1-progress-v1";
  const THEME_KEY = "llb1-theme";
  const papers = window.LLB && window.LLB.papers ? window.LLB.papers : {};
  const extra = window.LLB && window.LLB.pages ? window.LLB.pages : {};

  const subjectNav = document.getElementById("subjectNav");
  const topicNav = document.getElementById("topicNav");
  const sidebarTitle = document.getElementById("sidebarTitle");
  const filterRow = document.getElementById("filterRow");
  const main = document.getElementById("main");
  const sidebar = document.getElementById("sidebar");
  const globalProgress = document.getElementById("globalProgress");
  const searchOverlay = document.getElementById("searchOverlay");
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");

  let filter = "all";
  let charts = [];

  function loadProgress() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE) || "{}");
    } catch {
      return {};
    }
  }
  function saveProgress(p) {
    localStorage.setItem(STORAGE, JSON.stringify(p));
  }
  function sortedTopics(paper) {
    return (paper.topics || []).slice().sort((a, b) => (a.seq || 99) - (b.seq || 99));
  }
  function allTopics() {
    const list = [];
    Object.values(papers).forEach((paper) => {
      sortedTopics(paper).forEach((t) => list.push({ paper, topic: t }));
    });
    return list;
  }
  function sealedCount() {
    const p = loadProgress();
    const all = allTopics();
    const n = all.filter((x) => p[x.topic.id]).length;
    return { n, t: all.length };
  }
  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_KEY, theme);
    document.getElementById("themeBtn").textContent = theme === "light" ? "Dark" : "Light";
  }

  function parseHash() {
    const raw = (location.hash || "#/overview").replace(/^#\/?/, "");
    const [page, id] = raw.split("/");
    return { page: page || "overview", id: id || "" };
  }

  const EXTRA_DEFAULTS = { overview: "dash", strategy: "method", resources: "publishers" };
  let scrollToken = 0;

  function headerOffset() {
    const top = document.querySelector(".topbar");
    const nav = document.querySelector(".subject-nav");
    return (top ? top.offsetHeight : 72) + (nav ? nav.offsetHeight : 58) + 12;
  }

  function revealSidebarLink() {
    const active = document.querySelector(".topic-link.active");
    const nav = document.getElementById("topicNav");
    if (!active || !nav) return;
    const a = active.getBoundingClientRect();
    const n = nav.getBoundingClientRect();
    if (a.top < n.top) nav.scrollTop -= n.top - a.top;
    else if (a.bottom > n.bottom) nav.scrollTop += a.bottom - n.bottom;
  }

  function findJumpTarget(id) {
    if (id) {
      return (
        document.getElementById("topic-" + id) ||
        document.getElementById("sec-" + id) ||
        document.querySelector("#main [data-jump=\"" + id + "\"]")
      );
    }
    return document.querySelector("#main .hero, #main article.topic[id], #main .panel[id]");
  }

  function pageAlreadyMounted(page) {
    if (page === "overview") return !!document.getElementById("topic-dash");
    if (page === "resources") return !!document.getElementById("topic-publishers");
    if (page === "strategy") return !!document.getElementById("topic-method");
    const paper = papers[page];
    if (!paper) return false;
    const first = sortedTopics(paper)[0];
    return !!(first && document.getElementById("topic-" + first.id));
  }

  function scrollToHashTarget(id) {
    const target = findJumpTarget(id);
    if (!target) return false;
    const scroller = document.scrollingElement || document.documentElement;
    const y = Math.max(0, scroller.scrollTop + target.getBoundingClientRect().top - headerOffset());
    scroller.scrollTop = y;
    revealSidebarLink();
    return true;
  }

  function afterPaint(fn) {
    requestAnimationFrame(() => requestAnimationFrame(fn));
  }

  function queueScroll(id) {
    const token = ++scrollToken;
    const run = () => {
      if (token !== scrollToken) return;
      scrollToHashTarget(id || "");
    };
    run();
    afterPaint(run);
    [32, 80, 160, 320, 640, 1000].forEach((ms) => setTimeout(run, ms));
  }

  function syncChrome() {
    navTabs();
    renderSidebar();
  }

  function go(page, id) {
    const next = id ? `#/${page}/${id}` : `#/${page}`;
    sidebar.classList.remove("open");
    if (location.hash === next) {
      queueScroll(id || "");
      return;
    }
    history.pushState({ page, id: id || "" }, "", next);
    if (pageAlreadyMounted(page)) {
      syncChrome();
      queueScroll(id || "");
      return;
    }
    render();
  }

  function onRouteChange() {
    const { page, id } = parseHash();
    if (pageAlreadyMounted(page)) {
      syncChrome();
      queueScroll(id || "");
      return;
    }
    render();
  }

  function destroyCharts() {
    charts.forEach((c) => {
      try { c.destroy(); } catch { /* ignore */ }
    });
    charts = [];
  }

  function navTabs() {
    const tabs = [
      { id: "overview", label: "Overview", small: "Dashboard" },
      { id: "k1001", label: "Jurisprudence", small: "K-1001" },
      { id: "k1002", label: "Constitution", small: "K-1002" },
      { id: "k1003", label: "Torts + CPA", small: "K-1003" },
      { id: "k1004", label: "Crimes · BNS", small: "K-1004" },
      { id: "k1005", label: "Contract-I", small: "K-1005" },
      { id: "strategy", label: "Exam strategy", small: "Dec 2026" },
      { id: "resources", label: "Resources", small: "Books + YT" }
    ];
    const { page } = parseHash();
    subjectNav.innerHTML = tabs
      .map(
        (t) =>
          `<button class="tab ${t.id === page ? "active" : ""}" type="button" data-nav="${t.id}"><small>${t.small}</small>${t.label}</button>`
      )
      .join("");
  }

  function renderSidebar() {
    const { page, id } = parseHash();
    const paper = papers[page];
    filterRow.innerHTML = "";
    if (!paper) {
      sidebarTitle.textContent = page === "resources" ? "Shelf" : page === "strategy" ? "Plan" : "Navigate";
      const extras =
        page === "resources"
          ? [
              ["publishers", "Publishers"],
              ["youtube", "YouTube"],
              ["bnsmap", "BNS ↔ IPC map"],
              ["copyright", "How to cite"]
            ]
          : page === "strategy"
            ? [
                ["method", "Study method"],
                ["answers", "Answer formula"],
                ["heatmap", "PYQ heatmap"]
              ]
            : [
                ["dash", "Dashboard"],
                ["papers", "Five papers"],
                ["countdown", "Dec 2026"],
                ["heatmap", "PYQ heatmap"],
                ["coverage", "Syllabus map"]
              ];
      topicNav.innerHTML = extras
        .map(
          ([eid, label]) =>
            `<button class="topic-link ${id === eid || (!id && eid === extras[0][0]) ? "active" : ""}" data-nav="${page}" data-topic="${eid}">${label}</button>`
        )
        .join("");
      return;
    }
    sidebarTitle.textContent = paper.short;
    ["all", "high", "open", "sealed"].forEach((f) => {
      const b = document.createElement("button");
      b.className = "chip" + (filter === f ? " on" : "");
      b.textContent = f;
      b.onclick = () => {
        filter = f;
        renderSidebar();
      };
      filterRow.appendChild(b);
    });
    const prog = loadProgress();
    const topics = sortedTopics(paper);
    topicNav.innerHTML = topics
      .filter((t) => {
        if (filter === "high") return t.yield === "high";
        if (filter === "sealed") return !!prog[t.id];
        if (filter === "open") return !prog[t.id];
        return true;
      })
      .map((t) => {
        const active = t.id === id || (!id && t.id === topics[0].id);
        return `<button class="topic-link ${active ? "active" : ""} ${prog[t.id] ? "sealed" : ""} ${t.yield === "high" ? "high" : ""}" data-nav="${page}" data-topic="${t.id}">
          <span class="dot"></span>
          <span>${t.title}${t.readAs ? `<div class="yield">${t.readAs}</div>` : t.yield === "high" ? '<div class="yield">high-yield</div>' : ""}</span>
        </button>`;
      })
      .join("");
  }

  function topicHtml(paper, topic) {
    const prog = loadProgress();
    const sealed = !!prog[topic.id];
    const cases = (topic.cases || [])
      .map(
        (c) =>
          `<div class="case"><div><strong>${c.name}</strong><div class="search-query">${c.citation || ""}</div></div><span>${c.point}</span></div>`
      )
      .join("");
    const pyqs = (topic.pyqs || [])
      .map(
        (q) => `<article class="pyq">
          <div class="meta">${q.year} · ${q.section || "theme"} · ${q.marks || ""} marks</div>
          <h4>${q.q}</h4>
          <ol class="outline">${(q.outline || []).map((li) => `<li>${li}</li>`).join("")}</ol>
        </article>`
      )
      .join("");
    const yt = (topic.youtube || paper.youtube || [])
      .slice(0, 3)
      .map(
        (y) => `<div class="yt-card"><strong>${y.title}</strong><div class="search-query">Search: ${y.search}</div>
        <p><a href="https://www.youtube.com/results?search_query=${encodeURIComponent(y.search)}" target="_blank" rel="noopener">Open YouTube search</a></p></div>`
      )
      .join("");
    const checks = (topic.check || []).map((c) => `<li>${c}</li>`).join("");
    const shelf = paper.shelf
      ? `<aside class="note shelf-banner"><h3>Primary textbook</h3><p>${paper.shelf.primary}${topic.readAs ? ` · <em>${topic.readAs}</em>` : ""}. Site prose is original — use the book for full case extracts, then Unique only as a question drill.</p></aside>`
      : "";
    return `<article class="topic" id="topic-${topic.id}">
      <div class="topic-head">
        <div>
          <p class="kicker">${paper.code} · ${topic.readAs || "Unit " + (topic.unit || "—")} ${topic.yield === "high" ? '<span class="badge">High-yield PYQ</span>' : ""}</p>
          <h1>${topic.title}</h1>
          <p class="lede">${topic.summary || ""}</p>
        </div>
        <button class="seal-btn ${sealed ? "sealed" : ""}" data-seal="${topic.id}">${sealed ? "Sealed ✓" : "Seal this topic"}</button>
      </div>
      ${shelf}
      <h2 class="section-title">Concept</h2>
      <div class="explainer">${topic.explainer}</div>
      ${
        topic.analogy
          ? `<aside class="analogy"><h3>${topic.analogy.title || "Engineer analogy"}</h3><p>${topic.analogy.body}</p></aside>`
          : ""
      }
      <h2 class="section-title">Diagram</h2>
      ${window.LLBDiagrams.render(topic.diagram)}
      ${
        topic.mnemonic
          ? `<aside class="mnemonic"><h3>Memory hook · ${topic.mnemonic.name}</h3><p><strong>${topic.mnemonic.hook}</strong></p><p>${topic.mnemonic.recite || ""}</p></aside>`
          : ""
      }
      <h2 class="section-title">Landmark cases / statutes</h2>
      <div class="cases">${cases}</div>
      <h2 class="section-title">CCS-style questions (public themes)</h2>
      <p class="note">Worded from public PYQ themes (≈2018–2025 blogs/indexes). Unique/Nitin and the five primary textbooks are not reproduced. Write your own English; confirm the year’s paper with college.</p>
      ${pyqs}
      <h2 class="section-title">Seal checklist</h2>
      <ul class="check-list">${checks}</ul>
      <h2 class="section-title">Watch next</h2>
      <div class="yt-row">${yt}</div>
    </article>`;
  }

  function overviewHtml() {
    const { n, t } = sealedCount();
    const exam = new Date("2026-12-01T09:00:00+05:30");
    const days = Math.max(0, Math.ceil((exam - Date.now()) / 86400000));
    const cards = Object.values(papers)
      .map((p) => {
        const prog = loadProgress();
        const tot = sortedTopics(p).length;
        const done = sortedTopics(p).filter((x) => prog[x.id]).length;
        const pct = tot ? Math.round((done / tot) * 100) : 0;
        return `<div class="card" data-nav="${p.id}">
          <div class="code">${p.code}</div>
          <h3>${p.title}</h3>
          <p>${p.blurb}</p>
          <div class="meter" aria-label="${pct}% sealed"><span style="width:${pct}%"></span></div>
          <p>${done}/${tot} topics sealed</p>
        </div>`;
      })
      .join("");
    return `<section class="hero" id="topic-dash" data-jump="dash">
      <p class="kicker">Gaurav · Engineer → advocate track</p>
      <h2>Five papers, one operating system</h2>
      <p class="lede">CCS University Meerut LL.B. 3-year Semester 1. HLM College, Ghaziabad. Target window: December 2026. Tone: systems, decision trees, comparison tables — not textbook sludge.</p>
      <div class="stat-row">
        <div class="stat"><b>${days}</b>days to Dec 2026 window</div>
        <div class="stat"><b>${n}/${t}</b>topics sealed</div>
        <div class="stat"><b>500</b>theory marks</div>
        <div class="stat"><b>BNS</b>primary for Crimes</div>
      </div>
    </section>
    <section class="panel" id="topic-papers" data-jump="papers">
      <h2 class="display">Papers</h2>
      <div class="grid-cards">${cards}</div>
    </section>
    <section class="panel">
      <h2 class="display">How to use this bench</h2>
      <ol>
        <li>Open a topic → read concept + analogy → redraw the diagram from memory.</li>
        <li>Recite the mnemonic in 60 seconds; write a 5-line mini-answer.</li>
        <li>Attempt the CCS-style outline under time (20-marker ≈ 25–30 min).</li>
        <li>Hit <strong>Seal this topic</strong> only when you can do that without scrolling.</li>
        <li>Read the matching chapter in the <strong>primary textbook</strong> (Paranjape / Narender Kumar / Bangia) for case extracts — this site does not copy those books.</li>
        <li>Use Unique/Nitin 30 Q&amp;A as a <em>private question bank after</em> the textbook + this site + bare act.</li>
      </ol>
    </section>
    <section class="panel">
      <h2 class="display">Primary shelf (buy / use)</h2>
      <ol>
        <li>K-1001 — Dr. N.V. Paranjape, <em>Studies in Jurisprudence &amp; Legal Theory</em> (Central Law Agency)</li>
        <li>K-1002 — Dr. Narender Kumar, <em>Introduction To The Constitution Law Of India</em> (Allahabad Law Agency, latest)</li>
        <li>K-1003 — Dr. R.K. Bangia, <em>Law of Torts</em> (Allahabad Law Agency; CPA 2019 ed.)</li>
        <li>K-1004 — Dr. N.V. Paranjape, <em>The Bharatiya Nyaya Sanhita, 2023</em></li>
        <li>K-1005 — Dr. R.K. Bangia, <em>Law of Contract</em> (Contract-I / Ss. 1–75)</li>
      </ol>
      <p>Jain Book Agency Constitution bare act stays on the desk for K-1002. Unique 30 Q&amp;A is drill-only.</p>
      <aside class="note"><h3>Syllabus vs exam titles</h3>
        <p>Official CCS PDF (Aug 2025 CDN) still lists K-1001–K-1005, with Paper IV titled IPC. Public Dec 2024/2025 papers title Crimes as Bharatiya Nyaya Sanhita 2023. This site follows <strong>Paranjape BNS</strong> first with IPC mapping. Infipark “revision” pages that swap Contract for Legal Method do not displace the official K-1005 paper unless HLM issues a circular.</p>
      </aside>
    </section>
    <section class="panel" id="topic-countdown" data-jump="countdown">
      <h2 class="display">December 2026 window</h2>
      <p>Treat this as a hard deadline, not a vibe. ${days} days remain from today. Five theory papers × 100 marks. Seal topics only when you can write a timed outline without scrolling this site.</p>
      <div class="stat-row">
        <div class="stat"><b>${days}</b>days remaining</div>
        <div class="stat"><b>5 × 100</b>theory marks</div>
        <div class="stat"><b>${n}/${t}</b>topics sealed</div>
      </div>
    </section>
    <section class="panel" id="topic-heatmap" data-jump="heatmap">
      <h2 class="display">PYQ frequency (theme heatmap)</h2>
      <p>Relative weight from public CCS transcriptions 2018–2025 — not an official mark scheme. Use it to sequence revision, not to skip syllabus tails.</p>
      <canvas id="heatChart" height="120"></canvas>
    </section>
    <section class="panel" id="topic-coverage" data-jump="coverage">
      <h2 class="display">Official CCS Sem-1 map (nothing extra required)</h2>
      <p>Checked against the <a href="https://cdn.ccsuniversity.ac.in/public/pdf/2025/08/2%20llb%20syllabus.pdf" target="_blank" rel="noopener">CCS LL.B. syllabus PDF (Aug 2025 CDN)</a>, papers K-1001–K-1005. Every numbered unit is on this site. A second wave of <strong>mid-grain PYQ cards</strong> (distinctions, ingredients lists, case ladders) now has its own left-nav rows so a 10-marker is not buried inside a school/chapter essay.</p>
      <table class="compare">
        <thead><tr><th>Paper</th><th>Official unit</th><th>On this site</th></tr></thead>
        <tbody>
          <tr><td>K-1001</td><td>Intro; Natural (Stammler/Kohler); Analytical (Austin/Kelsen/Hart); Historical (Savigny/Maine); Sociological (Pound/Duguit); American Realism; Marxist economic</td><td>14 sidebar topics — school units plus stock distinctions (Historical jurisprudence vs legal history; Austin/Hart unpacked; law &amp; morals; Pound’s interests; Analytical vs Natural; Sociological vs Historical)</td></tr>
          <tr><td>K-1002</td><td>Nature (federal + form of govt); Preamble; FR general; 14–18; 19(1)(a); 20; 21; 21A; 23–24; 25–28; 29–30; 32; DPSP; Duties</td><td>23 sidebar topics — official units plus mid-grain cards (Art. 12; eclipse/severability/waiver; Emergency 358/359; Art. 14 classification; 15–16/EWS; 19 suite traps; privacy/dignity/livelihood; HMPCQ writs; FR–DPSP case ladder). CCS lists only <em>19(1)(a)</em>; the 19 suite card is an exam-trap sheet</td></tr>
          <tr><td>K-1003</td><td>Intro (incl. damnum/injuria, mental element, parties, strict/absolute); justifications; vicarious/State/joint; negligence, nuisance, trespass, defamation; CPA consumer / service / enforcement</td><td>18 topics. Added pigeon-hole; Rylands elements/exceptions; Mehta absolute; Kasturilal→Nagendra Rao; Wagon Mound; contributory vs composite; nervous shock; defamation defences; CPA 2019 hierarchy + product liability</td></tr>
          <tr><td>K-1004</td><td>General principles; inchoate; general exceptions; body; property; State/public tranquility; marriage (bigamy/adultery)</td><td>19 topics. Hurt/kidnap still share a parent chapter, plus dedicated BNS cards (mens rea; mistake; intoxication; PD death lists; murder exceptions; GH list; theft ladder; cheating; unlawful assembly; 152; attempt vs preparation). Official PDF still says IPC; site teaches <strong>BNS first</strong></td></tr>
          <tr><td>K-1005</td><td>Purpose/scope; proposal; consideration/privity; lawful object; capacity/restitution; consent; standard form; void/voidable; contingent; quasi; discharge/frustration; compensation</td><td>22 topics — numbered CCS units plus mid-grain (offer vs ITT; ss.4–6 clock; past consideration/s.25; privity exceptions; minor+restitution; CUFM matrix; ss.26–28; wager vs contingent; frustration limits; Hadley/s.73)</td></tr>
        </tbody>
      </table>
      <p><strong>Not Sem-1 (do not study these here):</strong> Jurisprudence-II concepts (person, possession, ownership — K-2001); Union Parliament/Executive (K-2002); Family Law; Contract-II. Infipark pages that swap K-1005 for Legal Method are not the official CCS PDF.</p>
    </section>`;
  }

  function pageHtml(page, id) {
    if (page === "overview") return overviewHtml();
    if (page === "strategy") return extra.strategy(id);
    if (page === "resources") return extra.resources(id);
    const paper = papers[page];
    if (!paper) return `<section class="panel"><p>Unknown page.</p></section>`;
    const topics = sortedTopics(paper);
    return topics.map((t) => topicHtml(paper, t)).join("");
  }

  function paintHeatChart() {
    const el = document.getElementById("heatChart");
    if (!el || typeof Chart === "undefined") return;
    const chart = new Chart(el, {
      type: "bar",
      data: {
        labels: [
          "Pound / Kelsen / Austin",
          "Art. 21 + 14/16 + quasi-federal",
          "Damnum / State liability",
          "CH vs murder + 34/149",
          "Consideration / frustration"
        ],
        datasets: [
          {
            label: "Relative PYQ pressure",
            data: [92, 95, 88, 96, 90],
            backgroundColor: ["#d4af37", "#6ea8ff", "#3fa796", "#c45c4a", "#f0d78c"]
          }
        ]
      },
      options: {
        animation: false,
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: true, max: 100, ticks: { color: "#b8ae97" }, grid: { color: "rgba(212,175,55,0.12)" } },
          x: { ticks: { color: "#b8ae97", maxRotation: 20 }, grid: { display: false } }
        }
      }
    });
    charts.push(chart);
  }

  function updateProgressChip() {
    const { n, t } = sealedCount();
    globalProgress.textContent = `${n}/${t} sealed`;
  }

  function render() {
    destroyCharts();
    navTabs();
    renderSidebar();
    const { page, id } = parseHash();
    main.innerHTML = pageHtml(page, id);
    updateProgressChip();
    if (page === "overview") paintHeatChart();
    sidebar.classList.remove("open");
    main.focus({ preventScroll: true });
    queueScroll(id || EXTRA_DEFAULTS[page] || "", false);
  }

  function searchIndex() {
    const hits = [];
    Object.values(papers).forEach((paper) => {
      paper.topics.forEach((t) => {
        const blob = [
          t.title,
          t.summary,
          t.explainer,
          t.mnemonic && t.mnemonic.hook,
          (t.cases || []).map((c) => c.name).join(" "),
          (t.tags || []).join(" ")
        ]
          .join(" ")
          .toLowerCase();
        hits.push({ paper, topic: t, blob });
      });
    });
    return hits;
  }
  const INDEX = searchIndex();

  function runSearch(q) {
    const query = q.trim().toLowerCase();
    if (!query) {
      searchResults.innerHTML = "";
      return;
    }
    const found = INDEX.filter((h) => h.blob.includes(query)).slice(0, 12);
    searchResults.innerHTML = found
      .map(
        (h, i) =>
          `<li><button class="${i === 0 ? "active" : ""}" data-nav="${h.paper.id}" data-topic="${h.topic.id}"><small>${h.paper.code}</small> · ${h.topic.title}</button></li>`
      )
      .join("");
  }

  document.addEventListener("click", (e) => {
    const nav = e.target.closest("[data-nav]");
    if (nav && !e.target.closest("[data-seal]")) {
      go(nav.getAttribute("data-nav"), nav.getAttribute("data-topic") || "");
      searchOverlay.hidden = true;
    }
    const seal = e.target.closest("[data-seal]");
    if (seal) {
      const id = seal.getAttribute("data-seal");
      const p = loadProgress();
      if (p[id]) delete p[id];
      else p[id] = Date.now();
      saveProgress(p);
      render();
    }
    if (e.target.id === "searchBtn") {
      searchOverlay.hidden = false;
      searchInput.focus();
    }
    if (e.target.id === "themeBtn") {
      const next = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
      setTheme(next);
    }
    if (e.target.id === "topicsFab") sidebar.classList.toggle("open");
    if (e.target === searchOverlay) searchOverlay.hidden = true;
  });

  searchInput.addEventListener("input", () => runSearch(searchInput.value));
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const first = searchResults.querySelector("button");
      if (first) first.click();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "/" && document.activeElement.tagName !== "INPUT") {
      e.preventDefault();
      searchOverlay.hidden = false;
      searchInput.focus();
    }
    if (e.key === "Escape") searchOverlay.hidden = true;
  });

  window.addEventListener("hashchange", onRouteChange);
  window.addEventListener("popstate", onRouteChange);
  document.querySelector(".brand").addEventListener("click", () => go("overview"));

  const savedTheme = localStorage.getItem(THEME_KEY) || "dark";
  setTheme(savedTheme);
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  if (!location.hash) location.hash = "#/overview";
  else render();
})();

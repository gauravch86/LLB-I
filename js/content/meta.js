(function (global) {
  global.LLB = global.LLB || {};
  global.LLB.papers = global.LLB.papers || {};

  const bnsRows = [
    ["Common intention", "IPC 34", "BNS 3(5)", "Still the annual constructive-liability pair"],
    ["Unlawful assembly", "IPC 141", "BNS 189", "≥5 persons + one of five objects"],
    ["Common object (member liability)", "IPC 149", "BNS 190", "Membership + object; pre-concert not essential"],
    ["Rioting", "IPC 146", "BNS 191", "Force/violence by unlawful assembly"],
    ["Affray", "IPC 159", "BNS 194", "Two+ fighting in public, disturbing peace"],
    ["Abetment", "IPC 107–120", "BNS 45–60", "Instigation / conspiracy / aid"],
    ["Criminal conspiracy", "IPC 120A–120B", "BNS 61", "Agreement is the offence"],
    ["Attempt (general)", "IPC 511", "BNS 62", "Plus specific attempts e.g. BNS 109"],
    ["Mistake of fact (bound by law)", "IPC 76", "BNS 14", "Fact ≠ law"],
    ["Mistake of fact (justified)", "IPC 79", "BNS 17", "Good-faith justification"],
    ["Accident", "IPC 80", "BNS 18", "Lawful act, lawful manner, proper care"],
    ["Necessity", "IPC 81", "BNS 19", "Without criminal intent, to prevent harm"],
    ["Child under 7", "IPC 82", "BNS 20", "Absolute incapacity"],
    ["Child 7–12 immature", "IPC 83", "BNS 21", "Understanding test"],
    ["Unsoundness of mind", "IPC 84", "BNS 22", "Legal insanity, McNaughten logic"],
    ["Involuntary intoxication", "IPC 85", "BNS 23", "Against will / without knowledge"],
    ["Voluntary intoxication (intent)", "IPC 86", "BNS 24", "Knowledge presumed"],
    ["Private defence (things done)", "IPC 96", "BNS 34", "Shield, not sword"],
    ["Private defence body/property", "IPC 97", "BNS 35", "Subject to restrictions"],
    ["No PD vs public servant etc.", "IPC 99", "BNS 37", "Also: more harm than necessary"],
    ["PD body → death", "IPC 100", "BNS 38", "Enumerated deadly threats"],
    ["PD property → death", "IPC 103", "BNS 41", "Robbery, night house-breaking, fire, etc."],
    ["Culpable homicide", "IPC 299", "BNS 100", "Genus"],
    ["Murder (definition)", "IPC 300", "BNS 101", "Species / bullseye"],
    ["Punishment for murder", "IPC 302", "BNS 103", "§103(2) group murder — verify text"],
    ["CH not amounting to murder", "IPC 304", "BNS 105", "Two parts survive in spirit"],
    ["Death by negligence", "IPC 304A", "BNS 106", "Hit-and-run enhancement — know 106(2)"],
    ["Hurt", "IPC 319", "BNS 114", "Bodily pain, disease, infirmity"],
    ["Grievous hurt", "IPC 320", "BNS 116", "Eight clauses — list them"],
    ["Wrongful restraint", "IPC 339", "BNS 126", "Obstructing direction of movement"],
    ["Wrongful confinement", "IPC 340", "BNS 127", "Restraint from proceeding beyond bounds"],
    ["Criminal force", "IPC 350", "BNS 129", "Force + intent/knowledge + without consent"],
    ["Assault", "IPC 351", "BNS 130", "Gesture/prep causing apprehension"],
    ["Kidnapping", "IPC 359–363", "BNS 137", "From India / from lawful guardianship"],
    ["Abduction", "IPC 362", "BNS 138", "Force or deceit; continuing offence"],
    ["Theft", "IPC 378/379", "BNS 303", "Movable + dishonest + possession + moving"],
    ["Snatching (new)", "—", "BNS 304", "BNS innovation — dedicated topic card"],
    ["Extortion", "IPC 383/384", "BNS 308", "Fear of injury → delivery"],
    ["Robbery", "IPC 390", "BNS 309", "Theft or extortion + violence/fear"],
    ["Dacoity", "IPC 391/395", "BNS 310", "Robbery by five or more"],
    ["Cheating", "IPC 415/420", "BNS 318", "Deception + inducing delivery/act"],
    ["Sedition → sovereignty", "IPC 124A", "BNS 152", "Do not paste old 124A essays blindly"],
    ["Bigamy", "IPC 494", "BNS 82", "Marrying again during lifetime"],
    ["Adultery", "IPC 497", "Omitted", "Joseph Shine (2018) + BNS silence"],
    ["Dowry death", "IPC 304B", "BNS 80", "Dec 2024 20-marker — dedicated topic card"],
    ["Stalking", "IPC 354D", "BNS 78", "Dec 2024 short — dedicated topic card"]
  ];

  function bnsTable() {
    const rows = bnsRows
      .map((r) => `<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td></tr>`)
      .join("");
    return `<div class="map-wrap">
      <input id="bnsFilter" type="search" placeholder="Filter map (e.g. murder, 149, adultery)…" oninput="window.LLB.filterBns(this.value)" />
      <table class="compare" id="bnsTable">
        <thead><tr><th>Concept</th><th>IPC (classic)</th><th>BNS 2023</th><th>Exam note</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
      <p class="search-query">Numbers confirmed against India Code BNS section titles + public comparative PDFs. Re-verify on <a href="https://www.indiacode.nic.in/handle/123456789/20062" target="_blank" rel="noopener">India Code</a> / <a href="https://uppolice.gov.in/site/writereaddata/siteContent/Three%20New%20Major%20Acts/202406281710564823BNS_IPC_Comparative.pdf" target="_blank" rel="noopener">UP Police comparative PDF</a> before the script.</p>
    </div>`;
  }

  global.LLB.filterBns = function (q) {
    const query = (q || "").toLowerCase();
    document.querySelectorAll("#bnsTable tbody tr").forEach((tr) => {
      tr.style.display = tr.textContent.toLowerCase().includes(query) ? "" : "none";
    });
  };

  global.LLB.pages = {
    strategy() {
      return `<article class="topic" id="topic-method" data-jump="method">
        <p class="kicker">Dec 2026 · 5 × 100</p>
        <h1>Exam strategy for an engineer who thinks in systems</h1>
        <p class="lede">CCS long answers reward named sections, named cases, and a visible structure — not originality of philosophy. Treat each 20-marker as a spec document: definition, essentials, authorities, distinction, criticism, conclusion.</p>
        <h2 class="section-title">Weekly OS (repeat until December)</h2>
        ${window.LLBDiagrams.render({ type: "flow", steps: ["Juris schools", "FR 12–32", "Torts + CPA", "BNS core", "Contract 2–75", "Timed PYQ"] })}
        <table class="compare">
          <thead><tr><th>Week slice</th><th>Hours</th><th>Output artefact</th></tr></thead>
          <tbody>
            <tr><td>Jurisprudence schools</td><td>6–8</td><td>7 one-pagers + Austin/Hart/Kelsen table from memory</td></tr>
            <tr><td>Constitution FR</td><td>8–10</td><td>Art. 14 / 19 / 21 / 32 sheets with 3 cases each</td></tr>
            <tr><td>Torts + CPA 2019</td><td>6–8</td><td>Maxim matrix + State-liability timeline + commission flowchart</td></tr>
            <tr><td>Crimes BNS core</td><td>8–10</td><td>CH/murder tree + 3(5)/190 + property ladder + PD death lists</td></tr>
            <tr><td>Contract formation→damages</td><td>8–10</td><td>S.10 state machine + S.25 exceptions + S.56 + S.73</td></tr>
            <tr><td>PYQ writing</td><td>6</td><td>One timed 20-marker per paper</td></tr>
          </tbody>
        </table>
      </article>
      <article class="topic" id="topic-answers" data-jump="answers">
        <p class="kicker">Dec 2026 · writing</p>
        <h1>Answer formula (print this)</h1>
        <ol>
          <li><strong>Hook (2 lines):</strong> define the concept + name the statute/article/school.</li>
          <li><strong>Essentials:</strong> numbered ingredients. Examiners tick lists.</li>
          <li><strong>Authorities:</strong> 2–3 cases with one-line ratio (not story-time).</li>
          <li><strong>Distinction / diagram:</strong> CH vs murder, 34 vs 149, strict vs absolute, void vs voidable.</li>
          <li><strong>Indian illustration or critique:</strong> one paragraph.</li>
          <li><strong>Close:</strong> answer the exact verb in the question (comment / distinguish / critically examine).</li>
        </ol>
        <aside class="analogy"><h3>Latency budget in the hall</h3>
          <p>20-marker ≈ 25–30 minutes. 10-marker ≈ 12–14. Short notes ≈ 4–5. If you cannot name two cases in the first 8 minutes of an Art. 21 or Pound essay, you are in the wrong question — switch.</p>
        </aside>
      </article>
      <article class="topic" id="topic-heatmap" data-jump="heatmap">
        <p class="kicker">Dec 2026 · recall spine</p>
        <h1>Paper-wise spine (write these cold)</h1>
        <ul>
          <li><strong>K-1001:</strong> Pound social engineering; Kelsen Grundnorm; Austin command + Hart critique; definition/nature/utility.</li>
          <li><strong>K-1002:</strong> Quasi-federal; Art. 21 expansion; Art. 14 + reservation; FR–DPSP; Art. 32/PIL; 19(1)(a) press.</li>
          <li><strong>K-1003:</strong> Damnum/injuria; strict vs absolute; State liability; defamation; CPA 2019 commissions.</li>
          <li><strong>K-1004:</strong> CH vs murder in BNS numbers; 3(5) vs 190; private defence to death; theft ladder; stages of crime.</li>
          <li><strong>K-1005:</strong> Proposal rules; consideration + exceptions; minor; free consent; frustration; quasi-contracts; damages.</li>
        </ul>
        <h2 class="section-title">Crimes conversion drill</h2>
        <p>When you practise 2022–23 IPC papers, rewrite the heading with BNS numbers in the margin the same evening. Dec 2024/25 public files already title the paper BNS.</p>
        <h2 class="section-title">Last 48 hours</h2>
        <p>One A4 hook sheet (NASH-SRM, HMPCQ, FAME, OAC-CL, EDS). Physical stack: Paranjape Juris + Narender Kumar + Bangia Torts + Paranjape BNS + Bangia Contract, plus Jain Constitution bare, BNS bare, Contract Act. Unique only for question-shape. Nothing new except section flash.</p>
      </article>`;
    },
    resources() {
      return `<article class="topic" id="topic-publishers" data-jump="publishers">
        <p class="kicker">Gaurav’s shelf · then Unique drill · then extras</p>
        <h1>Primary textbooks, exam drill, secondary refs</h1>
        <p class="lede">The five books below are the <strong>authoritative physical shelf</strong> this site tracks for structure, landmark cases, and depth. Read the matching chapter there; this website is original teaching prose (syllabus + bare acts + public case law + PYQ themes). It does not reproduce those textbooks or Unique/Nitin Q&amp;A.</p>

        <h2 class="section-title">1. Primary textbooks (buy / use)</h2>
        <table class="compare">
          <thead><tr><th>Paper</th><th>Book</th><th>How this site tracks it</th></tr></thead>
          <tbody>
            <tr><td>K-1001</td><td>Dr. <strong>N.V. Paranjape</strong> — <em>Studies in Jurisprudence &amp; Legal Theory</em> (Central Law Agency)</td><td>Part I school order: meaning → analytical → historical → natural/ethical → sociological → realist → economic/Indian trends. Definitions + one critique per thinker.</td></tr>
            <tr><td>K-1002</td><td>Dr. <strong>Narender Kumar</strong> — <em>Introduction To The Constitution Law Of India</em> (Allahabad Law Agency, <strong>latest edition</strong>)</td><td>Salient features → Preamble → FR general → equality → freedoms (19–22) → 21A → exploitation → religion → minorities → remedies → DPSPs → duties. Jain bare act beside it.</td></tr>
            <tr><td>K-1003</td><td>Dr. <strong>R.K. Bangia</strong> — <em>Law of Torts</em> (Allahabad Law Agency; use an edition with <strong>CPA 2019</strong>)</td><td>Nature → general defences → vicarious / State → strict &amp; absolute (Bangia’s dedicated chapter) → defamation → nuisance → negligence → trespass → CPA commissions.</td></tr>
            <tr><td>K-1004</td><td>Dr. <strong>N.V. Paranjape</strong> — <em>The Bharatiya Nyaya Sanhita, 2023</em></td><td><strong>BNS section numbers first.</strong> Exceptions then inchoate (Sanhita chapter order). IPC numbers stay in mapping tables for older PYQs and pre-2024 judgments.</td></tr>
            <tr><td>K-1005</td><td>Dr. <strong>R.K. Bangia</strong> — <em>Law of Contract</em> (Contract-I; ICA Ss. 1–75 + Specific Relief as extra)</td><td>Formation → consideration → capacity → free consent → legality of object → void agreements → contingent → discharge/frustration → quasi → damages (s.73–74).</td></tr>
          </tbody>
        </table>
        <p>Also keep on the desk: <strong>Jain Book Agency</strong> Constitution (post-Art. 370 abolition reprint), <strong>BNS 2023 bare</strong>, <strong>Contract Act 1872 bare</strong>, <strong>CPA 2019 bare</strong>.</p>

        <h2 class="section-title">2. Unique Q&amp;A — exam drill only</h2>
        <p>Unique Law Series / Nitin Prakashan (Meerut) “30 Questions &amp; Answers” is what you already own for CCS question <em>shape</em>. Use it <strong>after</strong> Paranjape/Kumar/Bangia + this site + the bare act — never as first principles.</p>
        ${window.LLBDiagrams.render({
          type: "compare",
          headers: ["Good for", "Bad for"],
          rows: [
            ["Seeing CCS-style long questions", "Learning first principles"],
            ["Last 10–15 days recall", "Outdated CPA 1986 “Forum” vocabulary"],
            ["Hindi-medium phrasing practice", "IPC-only Crimes answers after BNS papers began"],
            ["Checking you did not miss a unit", "Case ratios and section precision (use the five textbooks)"]
          ]
        })}

        <h2 class="section-title">3. Secondary references (library / if you want more depth)</h2>
        <table class="compare">
          <thead><tr><th>Paper</th><th>Secondary (do not replace the five)</th></tr></thead>
          <tbody>
            <tr><td>K-1001</td><td>V.D. Mahajan; Dias; Salmond (Fitzgerald); Bodenheimer; CCS PDF also lists Friedmann, Lloyd, Paton</td></tr>
            <tr><td>K-1002</td><td>V.N. Shukla (M.P. Singh); J.N. Pandey; M.P. Jain; H.M. Seervai (library); CCS PDF also lists Chander Pal, Hidayatullah, Tope</td></tr>
            <tr><td>K-1003</td><td>Ratanlal &amp; Dhirajlal; V.K. Aggarwal (consumer); Winfield; CCS PDF also lists Kapoor, Paranjape (torts), Salmond</td></tr>
            <tr><td>K-1004</td><td>Ratanlal IPC / K.D. Gaur / S.N. Misra for <em>case law still cited in IPC numbers</em>; India Code BNS; UP Police comparative PDF</td></tr>
            <tr><td>K-1005</td><td>Avtar Singh; Pollock &amp; Mulla; Anson; CCS PDF also lists Desai, Kapoor, Moitra</td></tr>
          </tbody>
        </table>

        <h2 class="section-title">Bare acts (non-negotiable)</h2>
        <div class="pub-grid">
          <div class="pub-card"><strong>Constitution</strong><p>Jain Book Agency / Universal — Arts. 12–32, 36–51, 51A, 352–360. <a href="https://www.indiacode.nic.in/" target="_blank" rel="noopener">indiacode.nic.in</a></p></div>
          <div class="pub-card"><strong>BNS 2023</strong><p>Pair the official text with Paranjape’s BNS commentary. Enforcement 1 July 2024.</p></div>
          <div class="pub-card"><strong>Contract Act 1872</strong><p>Ss. 2–75 especially 10–30, 56, 68–72, 73–75. Bangia walks the same stretch.</p></div>
          <div class="pub-card"><strong>CPA 2019</strong><p>Commissions, not 1986 Forums. Know 2021 pecuniary revision. Bangia Torts later editions include this Act.</p></div>
        </div>

      </article>
      <article class="topic" id="topic-youtube" data-jump="youtube">
        <p class="kicker">Resources · video</p>
        <h1>YouTube (search titles — playlists move)</h1>
        <div class="yt-row">
          <div class="yt-card"><strong>StudyIQ Judiciary</strong><p>@studyiqjudiciary — Consti + BNS marathons.</p></div>
          <div class="yt-card"><strong>StudyIQ After LL.B</strong><p>@StudyIQAfterLLB — BNS one-shots, juris shorts.</p></div>
          <div class="yt-card"><strong>Law Wallah (PW)</strong><p>@LawWallahPW — Torts, Contract, FR foundations.</p></div>
          <div class="yt-card"><strong>Unacademy Judiciary</strong><p>@UnacademyJudiciary — live Consti/Crimes.</p></div>
          <div class="yt-card"><strong>LegalEdge After College</strong><p>@LegalEdgeAfterCollege — conceptual Consti.</p></div>
          <div class="yt-card"><strong>Law Prep / Judiciary Gold / Adda247 JS</strong><p>PYQ/MCQ drill and capsules.</p></div>
        </div>
        <p>Hygiene: prefer 2024+ uploads for BNS and CPA 2019; confirm every section in Paranjape BNS / Bangia / Kumar, then the bare act.</p>
      </article>
      <article class="topic" id="topic-bnsmap" data-jump="bnsmap">
        <p class="kicker">Resources · conversion table</p>
        <h1>BNS ↔ IPC map (syllabus offences — for older PYQs)</h1>
        <p>Paranjape writes in BNS numbers. When you drill 2022–23 CCS papers, convert IPC cites with this table. Filter is live.</p>
        ${bnsTable()}
        <h2 class="section-title">Public PYQ hubs</h2>
        <ul>
          <li><a href="https://ccsullb.blogspot.com/" target="_blank" rel="noopener">ccsullb.blogspot.com</a> — transcribed papers</li>
          <li><a href="https://www.ccsustudy.com/ccsu-llb-papers.html" target="_blank" rel="noopener">ccsustudy.com</a> — Dec 2024/2025 BNS filenames</li>
          <li>Official syllabus PDF: <a href="https://cdn.ccsuniversity.ac.in/public/pdf/2025/08/2%20llb%20syllabus.pdf" target="_blank" rel="noopener">CCS CDN Aug 2025</a></li>
        </ul>
      </article>
      <article class="topic" id="topic-copyright" data-jump="copyright">
        <p class="kicker">Resources · citation</p>
        <h1>How to cite this site</h1>
        <aside class="note"><h3>Copyright stance</h3>
          <p>Original teaching material only. Cites publicly available statutes, the CCS syllabus outline, landmark case names/holdings, and publicly blogged exam <em>themes</em>. Does not copy Unique Law Series, Nitin Prakashan, Paranjape, Narender Kumar, or Bangia prose, tables, or chapter text.</p>
        </aside>
      </article>`;
    }
  };
})(window);

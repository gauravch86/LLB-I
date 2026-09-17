# LL.B. Semester-1 Study Bench

Interactive, original study site for **CCS University Meerut** LL.B. 3-year **Semester 1** (paper codes **K-1001–K-1005**). Built for **Gaurav**, **HLM College, Ghaziabad**, December **2026** exams — an engineer moving into law, so the notes use systems analogies, decision trees, and comparison tables rather than textbook walls of text.

Live on GitHub Pages once enabled (see below). Open `index.html` locally if you prefer.

## Papers

| Code | Paper | Primary textbook this site tracks |
|------|--------|-----------------------------------|
| **K-1001** | Jurisprudence-I (Legal Theory) | **Dr. N.V. Paranjape** — *Studies in Jurisprudence & Legal Theory* (Central Law Agency). Student books may print **K-101**; official CCS code is K-1001. |
| **K-1002** | Constitutional Law-I (Nature + FRs) | **Dr. Narender Kumar** — *Introduction To The Constitution Law Of India* (Allahabad Law Agency, latest). Keep the Jain Book Agency bare Constitution open. |
| **K-1003** | Law of Torts + Consumer Protection | **Dr. R.K. Bangia** — *Law of Torts* (Allahabad Law Agency; CPA 2019 edition). |
| **K-1004** | Law of Crimes-I | **Dr. N.V. Paranjape** — *The Bharatiya Nyaya Sanhita, 2023*. **BNS first**, IPC mapping for older PYQs. Official syllabus PDF still says IPC; public Dec 2024/2025 papers title BNS. |
| **K-1005** | Contract-I (General Principles) | **Dr. R.K. Bangia** — *Law of Contract* (Contract-I; ICA Ss. 1–75). |

Also included: **Overview** (progress + PYQ heatmap), **Exam strategy**, and **Resources** (primary shelf → Unique drill → secondary refs, YouTube, BNS↔IPC map).

## How to study (topic → PYQ → seal)

1. Pick a subject tab, then a syllabus topic in the sidebar (order follows the primary textbook, with CCS unit labels).
2. Read **Concept** + the engineer analogy; redraw the **diagram** from memory.
3. Open the matching chapter in the **physical primary book** for full case extracts — this site does not copy those books.
4. Recite the **mnemonic** in 60 seconds; write a 5-line mini-answer.
5. Attempt the **CCS-style question** under time (20-marker ≈ 25–30 minutes). Outlines follow public PYQ *themes* (≈2018–2025), not Unique/Nitin or textbook prose.
6. Tick **Seal this topic** only when you can do that without scrolling. Progress is stored in `localStorage` on this browser.

Unique Law Series / Nitin Prakashan “30 Questions & Answers” is a **private question bank for last-week shape**, used **after** Paranjape / Kumar / Bangia.

## Run locally

No build step. Static HTML/CSS/JS (Chart.js from CDN).

```bash
git clone https://github.com/gauravch86/LLB-I.git
cd LLB-I
python3 -m http.server 8080
```

Open [http://localhost:8080](http://localhost:8080). Keyboard: `/` search, `Esc` close search. Theme toggle is in the header.

## GitHub Pages

1. Repo **Settings → Pages**.
2. Source: **Deploy from a branch**.
3. Branch: `main` (or this feature branch while reviewing), folder: `/ (root)`.
4. Site URL will be `https://gauravch86.github.io/LLB-I/`.

`index.html` sits at the repository root. `.nojekyll` is included so GitHub Pages does not mangle the `_` paths if any appear later.

## Official syllabus vs. exam titles

- Authoritative topic lists: [CCS LL.B. syllabus PDF (CDN, Aug 2025)](https://cdn.ccsuniversity.ac.in/public/pdf/2025/08/2%20llb%20syllabus.pdf) — K-1001–K-1005.
- **Crimes:** study **BNS 2023** section numbers; keep IPC numbers in parentheses for old judgments and 2022–23 PYQs. Confirm figures on [India Code](https://www.indiacode.nic.in/handle/123456789/20062) before the hall.
- Infipark “revision” pages that swap Contract for Legal Method do **not** displace K-1005 unless HLM issues a circular.

## Copyright

All teaching prose here is **original**. It cites:

- Bare acts and India Code section titles
- The public CCS syllabus outline
- Landmark case names and holdings
- Publicly blogged exam *themes* (e.g. ccsullb.blogspot.com, ccsustudy.com)

It does **not** copy Unique Law Series, Nitin Prakashan, Paranjape, Narender Kumar, Bangia, or other copyrighted textbook / Q&A language.

## Repo layout

```
index.html
css/styles.css
js/app.js
js/diagrams.js
js/content/meta.js          # strategy, resources, BNS map
js/content/jurisprudence.js
js/content/constitution.js
js/content/torts.js
js/content/crimes.js
js/content/contract.js
assets/favicon.svg
```

## Primary textbooks (the shelf this site tracks)

Buy and use these five. The sidebar order and case emphasis follow how they usually organise CCS Sem-1 — the website’s sentences are original.

1. **Jurisprudence (K-1001):** Dr. N.V. Paranjape — *Studies in Jurisprudence & Legal Theory* (Central Law Agency)
2. **Constitution (K-1002):** Dr. Narender Kumar — *Introduction To The Constitution Law Of India* (Allahabad Law Agency, latest edition)
3. **Torts (K-1003):** Dr. R.K. Bangia — *Law of Torts* (Allahabad Law Agency; CPA 2019 edition)
4. **Crimes (K-1004):** Dr. N.V. Paranjape — *The Bharatiya Nyaya Sanhita, 2023*
5. **Contract (K-1005):** Dr. R.K. Bangia — *Law of Contract* (Contract-I)

Also: Jain Book Agency Constitution bare act; BNS 2023 bare; Contract Act 1872 bare. Unique 30 Q&A = drill only. Secondary names (Mahajan, Shukla, Avtar Singh, Ratanlal IPC, etc.) live on the **Resources** tab.

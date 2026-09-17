(function (g) {
  g.LLB = g.LLB || {};
  g.LLB.papers = g.LLB.papers || {};
  g.LLB.papers.k1001 = {
    id: "k1001",
    code: "K-1001",
    title: "Jurisprudence-I (Legal Theory)",
    short: "Jurisprudence",
    blurb: "Tracks Paranjape’s school chapters. Student books may print K-101; official CCS code is K-1001.",
    shelf: {
      primary: "Dr. N.V. Paranjape — <em>Studies in Jurisprudence &amp; Legal Theory</em> (Central Law Agency)"
    },
    youtube: [
      { title: "Schools of Jurisprudence series", search: "Schools of Jurisprudence Austin Kelsen Hart StudyIQ" },
      { title: "Pound Social Engineering", search: "Jurisprudence Roscoe Pound social engineering Hindi" },
      { title: "Kelsen Pure Theory", search: "Kelson pure theory of law judiciary Grundnorm" }
    ],
    topics: [
      {
        id: "j-intro",
        seq: 1,
        readAs: "Paranjape ch. 1 — meaning, nature &amp; scope",
        unit: 1,
        yield: "high",
        tags: ["definition", "salmond", "austin", "holland", "gray", "pound", "utility", "ulpian", "kelsen", "hart"],
        title: "Introduction — definition, nature, scope, importance",
        summary: "Jurisprudence is the grammar of law: not the statute book of one State, but the theories that explain what ‘law’ is, how it binds, and why courts should care.",
        explainer: `<p>Paranjape opens with the province of jurisprudence before any school: meaning, nature, scope. CCS still loves the fight: is Jurisprudence the law of <em>one</em> nation, or a science <em>about</em> law? Short notes have asked that almost verbatim. If you say “it is Indian law,” you have confused jurisprudence with a municipal code. If you say “it is philosophy with no courtroom use,” you have written yourself out of the marks for <em>utility</em>.</p>
        <p><strong>Working definition (write this, then pick a favourite):</strong> Jurisprudence is the systematic study of the concept of law, its sources, its relationship with the State, morals and society, and the ideas that organise legal reasoning. Examiners still expect named definitions:</p>
        <ul>
          <li><strong>Austin:</strong> “the philosophy of positive law” — law as it <em>is</em>, laid down by a political superior.</li>
          <li><strong>Holland:</strong> “the formal science of positive law” — form, not the contents of the Indian Penal Code.</li>
          <li><strong>Salmond:</strong> “the science of the first principles of the civil law.”</li>
          <li><strong>Gray:</strong> law as what courts <em>do</em>; jurisprudence as the statement of the rules courts apply.</li>
          <li><strong>Pound:</strong> law as social engineering — a process of reconciling overlapping claims.</li>
        </ul>
        <p><strong>Nature:</strong> it is abstract (concepts: right, duty, personality, possession), normative in part (ought-questions leak in), and comparative (English command theory vs German Volksgeist vs American realism). It is not a “subject” in the same way Contract is a subject; it is the meta-layer.</p>
        <p><strong>Scope:</strong> (1) legal theory / schools; (2) legal concepts (person, right, liability — more Sem-2 in some schemes, but definitions still leak into Sem-1 answers); (3) sources of law; (4) law and allied disciplines (morals, economics, sociology). CCS Sem-1 K-1001 is school-heavy: Natural, Analytical, Historical, Sociological, Realist, Marxist.</p>
        <p><strong>Importance for an engineer-lawyer:</strong> statutes are APIs; jurisprudence is architecture. Without it you can recite S.10 of the Contract Act and still fail a “nature of law” essay. With it you can attack Austin in a Crimes mens rea question, or Pound in a Constitution social-justice question. Stone’s line that jurisprudence is “lawyers’ extroversion” is a regular short note: law looking outward at philosophy, sociology, economics.</p>
        <p><strong>Law and morals:</strong> keep a 10-mark pocket. Overlap (murder is illegal and immoral), divergence (parking tickets; some religious duties not legally enforced), and the positivist claim that validity ≠ merit. Hart vs Fuller is extra credit; CCS usually wants Austin/Kelsen “separation” plus a sociological critique.</p>
        <p><strong>Definition evolution (do not skip):</strong> CCS still sets “trace the evolution of the definition of jurisprudence.” The <strong>left-rail</strong> on this card is the <em>whole Sem-1 cast in year order</em> (Ulpian to Hart), each node a card with a school chip and a country (Where). Toggle <strong>Rail | Matrix</strong> for the same beats as a compact study sheet (Where included). Gold <strong>B-A-H-G-S-P</strong> is a compact definitions inset — and a filter — not the only timeline. Footer kernels: <strong>A→K→H</strong> (analytical) and <strong>I→D→P</strong> (sociological). Dedicated card + PYQ: <button type="button" class="text-link" data-nav="k1001" data-topic="j-def-evolution">Definitions — evolution of jurisprudence</button>.</p>`,
        analogy: {
          title: "Compiler vs runtime",
          body: "Bare acts are runtime libraries. Jurisprudence is the language spec: types (right/duty), package managers (schools), and why two compilers (Austin vs Hart) reject each other’s programs. You do not ship production code from the spec alone — but you cannot debug a 20-marker without it."
        },
        diagram: {
          type: "tree",
          title: "Where jurisprudence sits",
          root: "Jurisprudence",
          branches: ["Theories of law (schools)", "Legal concepts", "Sources & method", "Law × morals / society / economy"]
        },
        mnemonic: {
          name: "D-N-S-U",
          hook: "Define → Nature → Scope → Utility. Favourite defs: ASH-GP (Austin, Salmond, Holland, Gray, Pound).",
          recite: "‘Jurisprudence is not the IPC of one nation; it is the science of the first principles of civil law (Salmond) and, for Austin, the philosophy of positive law.’"
        },
        cases: [
          { name: "Not a ‘case paper’", citation: "Use thinkers as authorities", point: "Cite Austin, Salmond, Holland, Gray, Pound, Stone. Cases appear later (Realists love Holmes; Marxists love class-structure critiques of colonial codes)." },
          { name: "Kesavananda Bharati (bridge)", citation: "(1973) 4 SCC 225", point: "When asked utility, one Indian landing: basic-structure is jurisprudence (limits of constituent power) leaking into constitutional doctrine." }
        ],
        pyqs: [
          {
            year: "Dec 2024",
            section: "C",
            marks: "20",
            q: "How would you define Jurisprudence? Which definition according to you would be the most appropriate one?",
            outline: [
              "Open: not municipal law of one State; science/philosophy of law.",
              "Parade 4–5 definitions with one criticism each (Austin too narrow; Holland ‘formal’; Salmond useful for exams; Gray court-centric; Pound functional).",
              "Pick one and defend (recommended: Salmond + Pound hybrid: first principles oriented to social task).",
              "Nature + three utilities (clarity of concepts; critique of legislation; professional self-consciousness).",
              "Close with Stone ‘extroversion’ in one line."
            ]
          },
          {
            year: "Dec 2023",
            section: "C",
            marks: "20",
            q: "Definition, nature, scope and utility of jurisprudence.",
            outline: ["Same spine as 2024; add scope map (schools in K-1001). Short-note cousins: ‘eye of law’; ‘lawyers’ extroversion’."]
          },
          {
            year: "Dec 2024",
            section: "A",
            marks: "4–5",
            q: "Is Jurisprudence the study of the law of one nation?",
            outline: ["No. Formal/philosophical science of law as such. Illustrate: Austin still studied as English thinker in an Indian paper."]
          }
        ],
        check: [
          "Can write 5 named definitions without notes.",
          "Can answer the ‘one nation?’ short note in 8 lines.",
          "Can list three utilities with an Indian illustration.",
          "Can recite the ought → command → form → courts → first principles → social ends spine.",
          "Can name Ulpian, Aquinas, Kelsen (Grundnorm), Hart, Allen, Realists, and Marx — and the one school chip each wears."
        ]
      },
      {
        id: "j-def-evolution",
        seq: 1.15,
        readAs: "Paranjape ch. 1 — definitions as a story, not a list",
        unit: 1,
        yield: "high",
        tags: ["definition", "evolution", "austin", "holland", "gray", "salmond", "pound", "bentham", "ulpian", "allen", "kelsen", "hart", "marx", "realism", "timeline"],
        title: "Definitions — evolution of jurisprudence",
        summary: "The 20-marker is a changelog. Primary rail = full Sem-1 cast in year order (Ulpian to Hart), with school chip and country. Toggle Rail | Matrix for a compact study sheet of the same beats. Gold B-A-H-G-S-P = compact definitions inset/filter. Footer: A→K→H analytical; I→D→P sociological.",
        explainer: `<p>CCS will say some flavour of <em>trace the evolution of the definition of jurisprudence</em>. The fail mode is five unnamed sentences. The pass mode is a <strong>dated chronological arc with one school chip per thinker</strong>: each inherits a problem and ships a new job for the word.</p>
        <p><strong>Primary artefact = the holistic left-rail</strong> (year · who · where · landmark · said · challenged · school tag). Walk it in year order: Ulpian’s <em>jurisprudentia</em> / <em>suum cuique</em> (Roman Empire); Aquinas (Italy); Bentham and Austin (England); Savigny (Germany, Volksgeist); Maine (England, status → contract); Marx (Germany / England, base–superstructure); Ihering (Germany, Zweck / Interessenjurisprudenz); Holland (England); Salmond (New Zealand); Stammler (Germany, just law); Gray and Pound (United States); Kohler (Germany, cultural NL revival); Duguit (France, social solidarity); C.K. Allen (Australia / England, <em>Law in the Making</em>); American Realists (United States, law in action); Kelsen (Austria, <em>Grundnorm</em>); Hart (England, primary/secondary rules, rule of recognition).</p>
        <p><strong>Three mnemonic callouts, scoped — do not mix them:</strong> (1) gold <strong>B-A-H-G-S-P</strong> inset — Bentham · Austin · Holland · Gray · Salmond · Pound — definition jobs only (ought → command → form → courts → first principles → social ends). Filter chip shows just those six. (2) Footer <strong>A→K→H</strong> = analytical only (Austin command → Kelsen <em>Grundnorm</em> → Hart). (3) Footer <strong>I→D→P</strong> = sociological only (Ihering → Duguit → Pound). Dual-tradition names get one chip: Kohler = Natural (culture in Challenged); Gray = Analytical (realist in Challenged); Allen = Definitions / sources.</p>
        <p><strong>Date hygiene:</strong> Salmond’s first edition slightly predates Gray’s book. Realists sit after Pound as a school even though Holmes (1897) is earlier. Marx is 1859 base/superstructure, not a 1920s afterthought. Bentham’s anti-rights blast is <em>Anarchical Fallacies</em> (written c. 1791; often taught with IPML 1789). Holland 1880 and Austin 1832 are not contested.</p>
        <p><strong>Compare questions:</strong> Austin vs Salmond = command-philosophy vs first-principles science. A→K→H = command vs pyramid vs ruleset (say <em>Grundnorm</em>). I→D→P = purpose vs solidarity vs engineering. Pound vs Marx = patch the machine vs name the class. Do not mash Holland into Austin; Holland is form, not a barking person.</p>
        <p>Redraw the left-rail from memory (year · who · where · landmark · said · pushed back · school), or scan the <strong>Matrix</strong> sheet (same columns, denser). Then open Paranjape chapter 1 for the longer extracts — this card does not copy that book.</p>`,
        analogy: {
          title: "Same identifier, many APIs — plus the rest of the monorepo",
          body: "B-A-H-G-S-P is the public API changelog of the word ‘jurisprudence.’ The chronological rail is the rest of the monorepo: Natural (Ulpian, Aquinas, Stammler, Kohler), Historical (Savigny/Maine), Sociological (Ihering, Duguit, Pound), Realist (Holmes/Llewellyn/Frank), Marxist (base–superstructure), Allen’s sources toolkit, Kelsen’s Grundnorm, Hart’s rule of recognition. Your 20-marker is git log of the identifier; shorts can ping any named package."
        },
        diagram: {
          type: "flow",
          title: "Definition inset (not the whole rail)",
          steps: ["ought (philosophy)", "is/command (Austin)", "form (Holland)", "courts (Gray)", "first principles (Salmond)", "social ends (Pound)"]
        },
        mnemonic: {
          name: "B-A-H-G-S-P",
          hook: "Bentham · Austin · Holland · Gray · Salmond · Pound — gold inset / filter only. Footer legends: A→K→H (analytical) and I→D→P (sociological).",
          recite: "Chronological rail: Ulpian, Aquinas, Bentham, Austin, Savigny, Marx, Maine, Ihering, Holland, Salmond, Stammler, Gray, Kohler, Duguit, Pound, Allen, Realists, Kelsen (Grundnorm), Hart. One chip each."
        },
        cases: [
          { name: "Thinkers are the authorities", citation: "dated works, not SCC cites", point: "Ulpian Digest; Aquinas Summa; Austin 1832; Savigny 1814; Maine 1861; Holland 1880; Salmond 1902; Gray 1909; Kelsen 1934 (Grundnorm); Hart 1961; Pound c. 1922. Kesavananda is a one-line Indian landing for utility, not a definition source." },
          { name: "Kesavananda Bharati (bridge only)", citation: "(1973) 4 SCC 225", point: "If asked ‘why bother defining jurisprudence,’ one Indian landing: limits of constituent power is legal theory leaking into doctrine." }
        ],
        pyqs: [
          {
            year: "theme 2018–25",
            section: "C",
            marks: "20",
            q: "Trace the evolution of the definition of jurisprudence. Which definition is most appropriate?",
            outline: [
              "Open with the gold B-A-H-G-S-P inset (ought → command → form → courts → first principles → social ends).",
              "Walk the chronological Sem-1 rail (one chip each): Ulpian jurisprudentia; Aquinas; Bentham; Austin; Savigny/Maine; Ihering; Holland/Salmond/Gray; Stammler/Kohler; Duguit/Pound; Allen; Realists; Kelsen Grundnorm; Hart; Marx.",
              "Kernel asides: A→K→H (say Grundnorm); I→D→P; Marx vs Pound in four lines if time.",
              "One criticism each on the definition jobs (Austin too narrow; Holland empty of contents; Gray court-or-nothing; Pound who weighs interests?).",
              "Pick a hybrid close: Salmond’s first principles oriented to Pound’s social task — useful in an Indian courtroom paper."
            ]
          },
          {
            year: "Dec 2024 cousin",
            section: "C",
            marks: "20",
            q: "How would you define Jurisprudence? Which definition according to you would be the most appropriate one?",
            outline: [
              "Lead with evolution, not a beauty contest of quotations.",
              "Parade Austin / Holland / Salmond / Gray / Pound with the shift each made; one line on Bentham and on Kelsen/Hart if the question stretches to schools.",
              "Defend Salmond + Pound hybrid."
            ]
          },
          {
            year: "stock distinguish",
            section: "B",
            marks: "10",
            q: "Austin and Salmond on jurisprudence / Pound’s definition / Austin vs Kelsen vs Hart.",
            outline: [
              "Austin: philosophy of positive law; is/ought split; command + sanction.",
              "Salmond: first principles of civil law; administration of justice.",
              "A→K→H: command → Grundnorm pyramid → primary/secondary rules.",
              "Pound: social engineering — what law does; contrast Marx superstructure in one line."
            ]
          }
        ],
        check: [
          "Recite B-A-H-G-S-P without looking — and name each thinker’s school chip and country.",
          "A→K→H with Grundnorm in the Kelsen sentence.",
          "I→D→P in one breath; Pound vs Marx in four lines.",
          "Austin vs Salmond in four lines."
        ]
      },
      {
        id: "j-natural",
        seq: 4,
        readAs: "Paranjape ch. 4 ethical/philosophical + ch. 8 natural law",
        unit: 2,
        yield: "high",
        tags: ["natural law", "stammler", "kohler", "aquinas", "fuller", "revival"],
        title: "Natural Law — classical and revival (Stammler, Kohler)",
        summary: "Natural law says law is not only a command; it is answerable to reason, justice, or the moral architecture of human association. CCS wants classical roots plus the German revival names.",
        explainer: `<p>Paranjape splits the “ought” tradition: a Philosophical/Ethical school chapter and a later dedicated Natural Law chapter. CCS paper unit 2 names <strong>classical natural law plus Stammler and Kohler</strong> — that is the examinable payload. We keep those names even though Paranjape places natural law after realism in the table of contents.</p>
        <p><strong>Classical natural law</strong> is the claim that there are principles of right reason, discoverable by reflection on human nature or divine order, that <em>measure</em> human laws. Greek strand: Aristotle’s distinction of natural and conventional justice. Roman: Cicero — true law is right reason in agreement with nature. Medieval: Aquinas — lex humana participates in lex aeterna; an unjust law is a corruption of law (exam phrase: <em>lex injusta non est lex</em>, handled carefully — not an invitation to private rebellion in every case). Early modern: Grotius secularises natural law (“even if God did not exist”); Locke ties it to rights the State does not create.</p>
        <p><strong>Why it died in the 19th century (for the analytical exam contrast):</strong> science-envy and sovereignty theory. If law is the sovereign’s command, “higher law” looks like smuggling morals into validity. Austin’s province is a demolition job on natural-law vagueness.</p>
        <p><strong>Revival (20th century):</strong> World wars, genocidal ‘legal’ systems, and the sense that a purely formal validity test baptises atrocity. Radbruch’s formula (extreme injustice is not law) is the European moral of the story — useful as critique even if CCS names <strong>Stammler</strong> and <strong>Kohler</strong> specifically.</p>
        <p><strong>Rudolf Stammler</strong> — “natural law with a variable content.” There is no eternal code of detailed rules; there is a <em>method</em> of just law: a community of free-willing persons, where the law’s form aims at harmony of individual purposes. Hook: <em>the protocol is stable; the payload changes with society</em>. He tries to keep Kantian form (universalizable justness) without pretending 13th-century property rules are natural forever.</p>
        <p><strong>Josef Kohler</strong> — neo-Hegelian cultural interpretation. Law is a product of civilisation’s cultural evolution; jural postulates of a civilisation (a phrase Pound also uses) grow as culture grows. Law’s job is to support cultural development, not freeze a Roman or English past. Pair Kohler with Savigny: both historicise law, but Kohler is more progressive/cultural than Volksgeist-romantic.</p>
        <p><strong>Indian landing:</strong> Directive Principles, “justice — social, economic, political” in the Preamble, and basic-structure morality are natural-law <em>echoes</em> inside a positivist-looking Constitution. Do not claim the Constitution <em>is</em> Aquinas; claim that Indian public law never fully accepted “law is law because it is commanded.”</p>
        <p><strong>Critiques to memorise:</strong> vagueness; competing ‘natures’ (whose reason?); risk of judges as philosopher-kings; Stammler’s ‘form’ can be empty; Kohler under-specifies institutions.</p>`,
        analogy: {
          title: "Schema vs data",
          body: "Classical natural law is a rigid schema: tables must satisfy moral constraints or they are not ‘law’ rows. Stammler is JSON Schema with a versioned payload — variable content, stable validity shape. Kohler is schema evolution driven by product culture, not by a DBA-sovereign."
        },
        diagram: {
          type: "flow",
          title: "Natural-law timeline for CCS",
          steps: ["Greeks/Romans (reason)", "Aquinas (eternal law)", "Grotius/Locke (rights)", "19c eclipse (Austin)", "Stammler/Kohler revival", "Post-war Radbruch / Indian constitutional morality"]
        },
        mnemonic: {
          name: "CLASS → REVIVE",
          hook: "Cicero/Aquinas/Locke as CLASS; Stammler = variable content; Kohler = culture engine.",
          recite: "Natural law measures positive law. Stammler: variable content, constant just-law form. Kohler: law as cultural evolution."
        },
        cases: [
          { name: "Nuremberg / Radbruch (theory)", citation: "post-1945 discourse", point: "‘Legal’ Nazi statutes failed a minimum justice test — revival’s political proof." },
          { name: "Kesavananda Bharati", citation: "(1973) 4 SCC 225", point: "Constituent power is not morally empty; basic features as a higher-law analogue." },
          { name: "Maneka Gandhi", citation: "(1978) 1 SCC 248", point: "‘Procedure established by law’ read as just, fair, reasonable — natural-law pressure on positivist text." }
        ],
        pyqs: [
          {
            year: "theme 2018–25",
            section: "C",
            marks: "20",
            q: "Classical Natural Law and its 20th-century revival with special reference to Stammler and Kohler.",
            outline: ["Define NL; classical names; eclipse by positivism; why revival; Stammler variable content; Kohler culture; Indian echo; three critiques."]
          }
        ],
        check: [
          "Can define ‘natural law with variable content’ in two sentences.",
          "Can distinguish Kohler from Savigny in one paragraph.",
          "Can name one Indian constitutional doctrine as NL echo without overclaiming."
        ]
      },
      {
        id: "j-analytical",
        seq: 2,
        readAs: "Paranjape ch. 2 — analytical school",
        unit: 3,
        yield: "high",
        tags: ["austin", "kelsen", "hart", "command", "grundnorm", "primary secondary"],
        title: "Analytical School — Austin, Kelsen, H.L.A. Hart",
        summary: "Three positivist kernels: law as command (Austin), law as a validity pyramid (Kelsen), law as a union of primary and secondary rules (Hart). This is the highest-frequency K-1001 cluster.",
        explainer: `<p>Paranjape’s second chapter is the analytical (positivist) school — the CCS high-frequency cluster. Analytical jurisprudence asks: what is law <em>as a social fact and a logical system</em>, not what law ought to be. CCS will ask you to <em>distinguish</em> Austin, Kelsen and Hart, not mash them into “all Englishmen who hate natural law.”</p>
        <h3>John Austin</h3>
        <p>Law properly so called = command of a <strong>sovereign</strong>, habitually obeyed, backed by <strong>sanction</strong>, to an independent political society. Sovereign is illimitable and legally uncommanded. International law and constitutional conventions become “positive morality.” <strong>Imperative theory</strong> is a beautiful compiler if your only type is <code>Command</code>. Failures: custom; judge-made law; duty-imposing rules without a barking sovereign (Hart); democratic constitutions that bind the legislature; international law’s stubborn existence; sanctions that are nullities rather than punishments (Kelsen’s later point).</p>
        <p>Bentham is the short-note cousin (Dec 2023/24). Bentham: utilitarian reformer, censors law; Austin: expositor, more dry. Do not swap them.</p>
        <h3>Hans Kelsen — Pure Theory</h3>
        <p>Strip law of sociology, psychology, morals. Law is a hierarchy of <strong>norms</strong>, each authorised by a higher norm, terminating in the <strong>Grundnorm</strong> — a presupposed base (“the historically first constitution ought to be obeyed”) that is not ‘proved’ inside the system. A norm’s validity is membership in this chain, not its justice. Sanction is a directed coercive act. The State is the legal order personified — no dualism of State-standing-behind-law.</p>
        <p><strong>Indian exam use:</strong> 26 January 1950 as a Grundnorm shift from colonial legality; or the basic-structure debate as a fight about whether even the ‘highest’ amending norm is unconditioned (Kelsen would be uneasy with a judicial super-norm, but you can discuss it).</p>
        <p><strong>Critiques:</strong> Grundnorm is a fiction; ‘purity’ is impossible; cannot explain revolutions except by a new presupposition; empty of justice.</p>
        <h3>H.L.A. Hart</h3>
        <p>From <em>The Concept of Law</em>: law is the union of <strong>primary rules</strong> (duties: do not steal) and <strong>secondary rules</strong> that fix the system’s operations:</p>
        <ul>
          <li><strong>Recognition</strong> — pedigree test (what counts as law: Queen-in-Parliament, Indian Constitution + legislation + precedent).</li>
          <li><strong>Change</strong> — how to legislate / repeal.</li>
          <li><strong>Adjudication</strong> — who decides disputes.</li>
        </ul>
        <p>The rule of recognition is a social practice of officials, not a Kelsenian presupposition and not Austin’s gunman. Hart’s gunman vs legal obligation: being obliged (threat) ≠ having an obligation (rule). Open texture of language → judicial discretion in penumbra. Soft positivism later admits some moral criteria <em>if</em> the rule of recognition includes them (not needed for a CCS 20-marker unless you are showing off).</p>
        <p><strong>Hart vs Austin:</strong> habits are not rules; successors of the sovereign; self-binding; power-conferring rules (wills, contracts, legislation) are not commands. <strong>Hart vs Kelsen:</strong> sociology of officials vs pure ought-pyramid; English ordinary-language vs continental norm-logic.</p>`,
        analogy: {
          title: "Austin shouts; Kelsen stacks; Hart updates the repo",
          body: "Austin = root user who yells and kills processes (sanction). Kelsen = Git history: each commit valid if parent commit authorises it, root commit is the Grundnorm you clone the repo with. Hart = CONTRIBUTING.md (recognition) + CODEOWNERS (adjudication) + RFC process (change) sitting on top of duty-rules in src/."
        },
        diagram: {
          type: "compare",
          title: "Command / Pyramid / Ruleset",
          headers: ["", "Austin", "Kelsen", "Hart"],
          rows: [
            ["One-word OS", "Command", "Pyramid", "Ruleset"],
            ["Kernel", "Sovereign + sanction", "Grundnorm → validity chain", "Primary + secondary rules"],
            ["What is ‘legal’?", "Command of political superior", "Norm authorised by higher norm", "Pedigree via rule of recognition"],
            ["Morals?", "Separate (positive morality)", "Expelled from science of law", "Separate, but obligation ≠ threat"],
            ["Weak spot", "Custom, constitutions, IL", "Fictional base; empty justice", "Officials’ practice can be circular"]
          ]
        },
        mnemonic: {
          name: "C-P-R",
          hook: "Command · Pyramid · Ruleset. Hart’s secondary trio: RCA — Recognition, Change, Adjudication.",
          recite: "Austin: sovereign command + sanction. Kelsen: pure hierarchy to Grundnorm. Hart: primary duties + secondary power rules."
        },
        cases: [
          { name: "Austin as foil in Indian federalism", citation: "doctrine, not a case", point: "A legally illimitable sovereign cannot describe a Constitution that binds Parliament (Art. 13, basic structure)." },
          { name: "Golaknath / Kesavananda", citation: "1967 / 1973", point: "Fight over whether amending power is unlimited — a live anti-Austin laboratory." }
        ],
        pyqs: [
          {
            year: "Dec 2024",
            section: "C",
            marks: "20",
            q: "Describe Hans Kelsen’s pure theory of law.",
            outline: ["Purity programme; norm vs fact; hierarchy; Grundnorm; sanction as coercive ought; State = order; critiques; one Indian illustration."]
          },
          {
            year: "Dec 2023",
            section: "C",
            marks: "20",
            q: "‘Jurisprudence is the philosophy of Positive Law’ (Austin) — Discuss.",
            outline: ["Quote; unpack command/sovereign/sanction; province of jurisprudence; Bentham contrast; Hart/Kelsen critiques; residual usefulness for criminal law’s sanction picture."]
          },
          {
            year: "Dec 2023",
            section: "B",
            marks: "10",
            q: "Difference between Austin and Kelsen.",
            outline: ["Command vs norm; person-sovereign vs impersonal order; sanction as evil vs legal consequence; morality: both separate but Kelsen more radical; Grundnorm vs habitual obedience."]
          },
          {
            year: "Dec 2024",
            section: "C",
            marks: "20",
            q: "Salient features of the analytical school. Distinguish analytical and historical school.",
            outline: ["Features: positivism, logic, present law, sovereign/State. Historical: evolution, Volksgeist, against legislation-as-command. Table + Maine/Savigny vs Austin."]
          }
        ],
        check: [
          "Draw the three-column table from memory.",
          "Define Grundnorm without saying ‘Constitution of India’ as if they were identical.",
          "List Hart’s three secondary rules."
        ]
      },
      {
        id: "j-historical",
        seq: 3,
        readAs: "Paranjape ch. 3 — historical school",
        unit: 4,
        yield: "high",
        tags: ["savigny", "maine", "volksgeist", "status contract"],
        title: "Historical School — Savigny and Sir Henry Maine",
        summary: "Law grows; it is not a midnight command. Savigny gives the people’s spirit; Maine gives the movement from status to contract.",
        explainer: `<p>Historical jurisprudence is a protest against both natural-law eternal codes and analytical legislation-worship. Law is an organic growth, like language.</p>
        <p><strong>Friedrich Karl von Savigny.</strong> Famous opposition to a hasty German civil code: you cannot manufacture a Volksgeist on a committee timetable. <em>Volksgeist</em> = the common consciousness of the people, expressed first in custom, then in juristic working-out. Legislation is late and dangerous if it cuts against that spirit. Lawyers are the specialised organs of the Volksgeist (not village poets). <strong>Critiques:</strong> whose Volk? Romantic nationalism; underestimates conscious reform (slavery, sati, untouchability — waiting for spirit can be an alibi); Indian Constitution is a deliberate transplant <em>against</em> parts of ‘people’s custom.’</p>
        <p><strong>Sir Henry Sumner Maine</strong> (<em>Ancient Law</em>). Comparative-historical method. Progressive societies move <strong>from status to contract</strong>: rights/duties once fixed by birth-family-caste position become arrangements of individual agreement. From primitive law’s formalism to equitable and legislative stages. Village communities; patriarchal theory. <strong>Indian use:</strong> Maine wrote on Indian village communities as a colonial administrator-scholar — mention without writing a history dissertation. <strong>Critiques:</strong> linear Victorian progress; ignores that modern societies re-create status (labour, consumer, welfare, reservation — ‘status’ returns as protective classification). Contract-I students should feel the irony: the Contract Act is Maine’s direction; labour and consumer statutes are the counter-movement.</p>
        <p><strong>Analytical vs Historical (stock 20-marker):</strong> present logical structure vs past organic growth; sovereign vs people; legislation vs custom; universal concepts vs national peculiarity. Best answers say modern legal science needs both: Hart’s secondary rules <em>and</em> a story of how the rule of recognition got there.</p>`,
        analogy: {
          title: "Legacy codebase vs greenfield rewrite",
          body: "Savigny is the principal engineer forbidding a full rewrite of a 200-year monolith because the undocumented domain lives in the team’s heads (Volksgeist). Maine is the anthropologist of API versions: v0 status-typed objects; v1 contract interfaces. Neither is git blame for today’s Parliament, but both explain why sudden codes fail."
        },
        diagram: {
          type: "flow",
          steps: ["Custom / folkways", "Juristic elaboration", "Legislation (late)", "Codification risk if it ignores Volksgeist"]
        },
        mnemonic: {
          name: "SPIRIT → STATUS→CONTRACT",
          hook: "Savigny = Volksgeist. Maine = status to contract.",
          recite: "Historical school: law grows with the people. Savigny warns against premature codes. Maine charts progressive societies from birth-status to free agreement."
        },
        cases: [
          { name: "Colonial codes as anti-Savigny", citation: "IPC 1860 / Contract Act 1872", point: "Conscious transplants. Use as critique: India did not wait for a Hindu Volksgeist to produce a penal code." },
          { name: "Personal law persistence", citation: "constitutional pluralism", point: "Status still organises family law — Maine’s arrow is incomplete." }
        ],
        pyqs: [
          {
            year: "theme",
            section: "C",
            marks: "20",
            q: "Discuss the Historical School with reference to Savigny and Maine. Distinguish Historical and Analytical schools.",
            outline: ["Programme of historical school; Volksgeist; Maine’s formula; two critiques each; comparison table vs Austin."]
          }
        ],
        check: [
          "Define Volksgeist without making it a mystical slogan.",
          "State Maine’s formula and one modern counter-example.",
          "Four-row Analytical vs Historical table."
        ]
      },
      {
        id: "j-socio",
        seq: 5,
        readAs: "Paranjape ch. 5 — sociological school",
        unit: 5,
        yield: "high",
        tags: ["pound", "duguit", "social engineering", "solidarity", "jural postulates"],
        title: "Sociological School — Pound and Duguit",
        summary: "Law as a social process. Pound schedules conflicting interests (social engineering). Duguit grounds law in social solidarity, not sovereign command. Highest-yield 20-marker in the paper.",
        explainer: `<p><strong>Background &amp; characteristics.</strong> Industrialisation, urban poverty, labour, the realisation that ‘equal rights to sleep under bridges’ is a sick joke. Sociological jurists study law <em>in action</em>: effects, institutions, pressure groups. Features to list: functional approach; law as balancer of interests; interdisciplinary method; scepticism toward abstract ‘will of the sovereign’; emphasis on social justice. Ihering (purpose in law / struggle for rights) is a useful ancestor; Ehrlich’s ‘living law’ vs paper law is a good extra name.</p>
        <h3>Roscoe Pound — Social Engineering</h3>
        <p>Law is social engineering: a process of satisfying the maximum of wants with the minimum of friction and waste. Inventory of <strong>interests</strong>:</p>
        <ul>
          <li><strong>Individual:</strong> personality, domestic relations, substance (property, contract, employment).</li>
          <li><strong>Public:</strong> interests of the State as juristic person (efficient administration, etc.).</li>
          <li><strong>Social:</strong> general security, security of social institutions, general morals, conservation of resources, general progress, individual life (claim to a human existence).</li>
        </ul>
        <p><strong>Jural postulates</strong> of civilisation: assumed claims a society treats as reasonable (e.g. others will not commit intentional aggression; they will not deceive in bargains). Postulates change — that is how Pound stays historicist without being Savigny.</p>
        <p><strong>Indian illustrations:</strong> labour statutes vs freedom of contract; environmental PIL vs development; reservation as engineering between equality-as-neutrality and equality-as-outcome. <strong>Critiques:</strong> who weighs the interests (unelected judges)?; engineering metaphor hides politics; American progressive era bias; measuring ‘friction’ is hand-waving.</p>
        <h3>Léon Duguit</h3>
        <p>French public lawyer. There is no metaphysical sovereign and no subjective right as a mysterious will-power. There is <strong>social solidarity</strong> — interdependence of division of labour. Law is the body of rules that <em>must</em> exist because society exists; even the State is under those rules (no Austinian legally unlimited sovereign). Rights are social functions. Property is a social function (very examinable in India next to DPSP / Art. 39). <strong>Critiques:</strong> solidarity can be conservative (everyone stay in your function); underplays conflict and class (Marxist reply); ‘must’ slides from is to ought.</p>`,
        analogy: {
          title: "Law as OS scheduler",
          body: "Pound: conflicting processes (interests) compete for CPU; the kernel’s job is throughput with minimum priority inversion (friction). Jural postulates = default sysctl values of a civilisation. Duguit: there is no root user above the SLA — even systemd (the State) is bound by the service mesh of interdependence."
        },
        diagram: {
          type: "tree",
          root: "Sociological lens",
          branches: ["Pound: engineer interests", "Duguit: solidarity > command", "Ehrlich: living law", "Ihering: purpose / struggle"]
        },
        mnemonic: {
          name: "IPS + SOLIDARITY",
          hook: "Pound’s interests: Individual, Public, Social. Duguit: solidarity kills the Austinian sovereign.",
          recite: "Social engineering maximises satisfied claims with minimum waste. Duguit: law is the obligatory rules of social interdependence."
        },
        cases: [
          { name: "Labour & consumer statutes", citation: "legislative trend", point: "Freedom of contract re-engineered after Maine’s high-water mark." },
          { name: "M.C. Mehta line (environment)", citation: "Art. 21 cases", point: "Social interest in security of resources vs individual enterprise — Pound in a PIL wig." },
          { name: "State of Madras v Champakam Dorairajan", citation: "AIR 1951 SC 226", point: "Early FR vs DPSP clash — engineering failed until amendments / Minerva Mills harmony." }
        ],
        pyqs: [
          {
            year: "Dec 2024 & 2023",
            section: "C",
            marks: "20",
            q: "Write a detailed essay on the Social Engineering Theory / Dean Roscoe Pound’s Theory of Social Engineering.",
            outline: ["Define; why sociological break from Austin; interests taxonomy with examples; jural postulates; Indian illustrations; critiques; one-line Duguit contrast if time."]
          },
          {
            year: "Dec 2024",
            section: "A",
            marks: "4",
            q: "Social Solidarity (Duguit).",
            outline: ["Interdependence; law as obligatory social rules; State not above law; property as function."]
          }
        ],
        check: [
          "Recite Individual / Public / Social interests with one example each.",
          "Define jural postulates in one sentence.",
          "Duguit vs Austin in four lines."
        ]
      },
      {
        id: "j-realism",
        seq: 6,
        readAs: "Paranjape ch. 6 — realist theory",
        unit: 6,
        yield: "high",
        tags: ["realism", "holmes", "lllewellyn", "frank", "american"],
        title: "American Modern Realism",
        summary: "Realists ask what courts and officials actually do. Rules on paper are hypotheses. CCS 2024 even asked you to treat American realism as a blend of analytical and sociological approaches.",
        explainer: `<p><strong>Holmes’s manifesto:</strong> “The prophecies of what the courts will do in fact, and nothing more pretentious, are what I mean by the law.” Path of the law: wash law with cynical acid; distinguish law and morals for prediction; the bad man cares about courts, not sermons.</p>
        <p><strong>American Legal Realism (1920s–40s)</strong> — Llewellyn, Jerome Frank, Oliphant, Rodell, sometimes Cardozo as a milder cousin. Two sub-currents:</p>
        <ul>
          <li><strong>Rule-scepticism (Llewellyn):</strong> paper rules under-determine outcomes; grand style vs formal style; law-jobs; Uniform Commercial Code as realist drafting.</li>
          <li><strong>Fact-scepticism (Frank):</strong> the real wild card is fact-finding — witnesses, prejudice, the trial judge’s hunch. Upper-court myth: we pretend appellate doctrine is the law.</li>
        </ul>
        <p><strong>Scandinavian realism (contrast short note):</strong> Hägerström, Olivecrona, Ross — law as psychological / behavioural facts, ‘rights’ as mystical. CCS says <em>American</em> modern realism; a one-paragraph Nordic contrast scores.</p>
        <p><strong>“Combination of analytical and sociological” (Dec 2024 20-marker):</strong> agree, with nuance. Realists keep a positivist spine (law is what officials enforce, not natural law) — analytical heritage. They explode the idea that logic of rules explains decisions; they demand study of behaviour, economics, psychology — sociological/functional heritage. They are not Austin (commands) and not Pound (they distrust neat interest-balancing as too pretty).</p>
        <p><strong>Critiques:</strong> cynicism that dissolves obligation; underplays that rules <em>do</em> constrain most easy cases (Hart’s reply); American appellate culture not India’s district-court reality; can become ‘might makes law.’</p>
        <p><strong>Indian landing:</strong> gap between CPC/CrPC text and docket reality; PIL creativity; sentencing disparity. Do not slander the entire Indian judiciary — use as a method: always ask “what will the bench actually do?”</p>`,
        analogy: {
          title: "Spec vs production metrics",
          body: "The Code is OpenAPI. Realists instrument production: traces, error budgets, which handlers actually fire. Frank thinks the bugs are in the data pipeline (facts). Llewellyn thinks the routing rules are incomplete. Hart replies that without a published spec, ‘the system’ is just random load-balancers."
        },
        diagram: {
          type: "compare",
          headers: ["Lens", "What it watches", "Risk"],
          rows: [
            ["Holmes", "Prediction of courts", "Bad-man amoralism"],
            ["Llewellyn", "Paper rule vs real rule", "Rule scepticism overplayed"],
            ["Frank", "Facts, hunches, trial", "Everything is psychology"],
            ["Hart’s reply", "Core of settled rules", "May underplay politics"]
          ]
        },
        mnemonic: {
          name: "PREDICT / SCEPTIC",
          hook: "Holmes predicts; Llewellyn doubts rules; Frank doubts facts.",
          recite: "American realism: law is official behaviour. Analytical (no natural law) + sociological (study action), minus Pound’s tidy engineering."
        },
        cases: [
          { name: "Holmes, The Path of the Law", citation: "10 Harv. L. Rev. 457 (1897)", point: "Primary text — quote the prophecy line." },
          { name: "Indian PIL expansion", citation: "e.g. Bandhua Mukti Morcha", point: "Procedure on paper vs what the Court actually entertained — realist observation, not a holding that ‘rules don’t exist.’" }
        ],
        pyqs: [
          {
            year: "Dec 2024",
            section: "C",
            marks: "20",
            q: "American modern realism is a combination of the analytical positivists and sociological approaches. Comment.",
            outline: ["Define realism; Holmes; rule vs fact scepticism; why analytical; why sociological; how it differs from both; critiques; Indian illustration."]
          },
          {
            year: "Dec 2023",
            section: "C",
            marks: "20",
            q: "Realist Movement.",
            outline: ["Same body; add Scandinavian contrast paragraph."]
          }
        ],
        check: [
          "Quote Holmes’s prophecy definition.",
          "Distinguish rule-scepticism and fact-scepticism.",
          "Answer the 2024 ‘combination’ question in a structured yes-but."
        ]
      },
      {
        id: "j-marx",
        seq: 7,
        readAs: "Paranjape ch. 7 Indian legal theory / economic approach (CCS unit)",
        unit: 7,
        yield: "standard",
        tags: ["marx", "economic", "base superstructure", "pashukanis"],
        title: "Economic / Marxist approach to law",
        summary: "Law is not a neutral operating system. It is superstructure that stabilises a mode of production — until contradiction forces a rewrite.",
        explainer: `<p>CCS lists a dedicated “economic / Marxist approach.” Paranjape’s nearby chapters are Indian legal theory and recent trends in Indian jurisprudence — use them for Indian illustrations, but still write Marx/Engels base–superstructure as the exam spine.</p>
        <p>Marx and Engels: the <strong>economic base</strong> (forces + relations of production) conditions the <strong>superstructure</strong> (State, law, ideology). Law presents class interest as universal right (“freedom of contract” in a factory society). The State is not Austin’s neutral sovereign; it is organised class violence with a legal face. Rights to property are historically specific, not natural (clash with Locke / classical NL).</p>
        <p><strong>What to write as ‘features’:</strong> (1) historical materialism; (2) law as class instrument; (3) withering of law in a classless society (contested even on the Left); (4) critique of formal equality; (5) ideology — legal consciousness hides exploitation.</p>
        <p><strong>Pashukanis</strong> (optional depth): commodity-form theory of law — legal subject and contract mirror commodity exchange; criminal law as a distorted equivalent. Good for a distinction paragraph vs Pound (Pound reforms capitalism; Pashukanis thinks the legal form itself is capitalist).</p>
        <p><strong>Indian landing (careful, high-scoring):</strong> colonial codes protecting trade and land revenue; labour jurisprudence as counter-movement; Constitution’s simultaneous property fights (repealed Art. 31, 300A) and socialist Preamble word (42nd Amendment). Do not write a party pamphlet; write a <em>jurisprudential</em> critique of ‘equal bargaining’ in Contract-I and of ‘sovereign command’ in Crimes.</p>
        <p><strong>Critiques:</strong> reductionism (cannot explain family law, religious personal law, or why socialist States still had harsh penal codes); agency of judges; human-rights vocabulary after 1945; India’s mixed economy and constitutional liberalism are not a simple base-superstructure cartoon.</p>
        <p>Pair with Sociological: both attack Austin. Pound wants better engineering inside the market-State. Marx wants a different machine.</p>`,
        analogy: {
          title: "Infrastructure vs UI",
          body: "Base = cloud infrastructure and ownership of the racks. Superstructure = the Terms of Service, the courts, the ‘community guidelines.’ Marxist claim: ToS language about ‘freedom’ is a UI skin over who owns the GPU cluster. Analytical positivists only parse the ToS. Pound patches the ToS. Marx asks who billed the account."
        },
        diagram: {
          type: "stack",
          layers: [
            "Ideology & legal consciousness",
            "Law / State / rights talk (superstructure)",
            "Relations of production (property, contract, labour)",
            "Forces of production (tech, capital, land)"
          ]
        },
        mnemonic: {
          name: "BASE ↑ SUPER",
          hook: "Economy loads first; law renders. Formal equality can hide class payload.",
          recite: "Marxist approach: law is historically specific superstructure. Instrument of class; ideology of universality; critique of Austin’s neutral sovereign and Maine’s contract romance."
        },
        cases: [
          { name: "Lochner-style freedom of contract (US foil)", citation: "comparative", point: "Formal contract freedom as class weapon — Indian labour codes as a reply." },
          { name: "Kesavananda / property amendments", citation: "constitutional history", point: "Struggle over property as a production relation, not a mere civil right." }
        ],
        pyqs: [
          {
            year: "theme",
            section: "C",
            marks: "20",
            q: "Discuss the Marxist / economic approach to law.",
            outline: ["Base-superstructure; law as class instrument + ideology; contrast Austin and Pound; Indian illustrations; three critiques; conclusion on residual usefulness for labour/property essays."]
          }
        ],
        check: [
          "Draw base/superstructure without claiming every judgment is a conspiracy.",
          "One paragraph distinguishing Marx from Pound.",
          "One Indian constitutional illustration."
        ]
      },
      {
        id: "j-hist-vs-legalhist",
        seq: 3.2,
        readAs: "Paranjape — Historical School (stock distinction)",
        unit: 4,
        yield: "high",
        tags: ["historical jurisprudence", "legal history", "savigny", "maine", "distinction"],
        title: "Distinction — Historical Jurisprudence vs Legal History",
        summary: "Legal history = what happened in a particular system. Historical jurisprudence = what history teaches about the nature of law.",
        explainer: `<p><strong>One-liner (write this in the first 90 seconds):</strong> Legal history is the <em>descriptive chronology</em> of a particular legal system; historical jurisprudence is a <em>theory of law</em> that uses history to explain what law <em>is</em> and how it grows. CCS loves this as a 10-marker and as a trap inside a Savigny/Maine 20-marker. Mixing them is how you lose the distinction marks even when you remember Volksgeist.</p>
        <p><strong>Legal history</strong> answers: what did this polity actually do? It is a log of statutes, courts, conquests, receptions, repeals. Examples: how the East India Company courts sat; when the Contract Act 1872 was passed; how the IPC travelled into the BNS. Output = a timeline of <em>one repo</em>. Method = archive, gazette, case-report chronology. It does not, by itself, tell you whether law is command, spirit, or solidarity.</p>
        <p><strong>Historical jurisprudence</strong> answers: what does the historical process teach about the <em>nature</em> of law? Savigny’s <em>Volksgeist</em> is not a date; it is a hypothesis that law is the organic product of a people’s consciousness and that hasty codes fail. Maine’s <strong>status → contract</strong> is not a King-list; it is a developmental law of progressive societies. Output = a theory you can contrast with Austin (command) and Pound (engineering). Method = comparative history in the service of legal theory.</p>
        <table class="compare">
          <thead><tr><th></th><th>Legal history</th><th>Historical jurisprudence</th></tr></thead>
          <tbody>
            <tr><td><strong>What it is</strong></td><td>Descriptive chronology of a particular system</td><td>A school of legal theory that reads history for the nature of law</td></tr>
            <tr><td><strong>Question</strong></td><td>What happened here, and in what order?</td><td>What is law, if we take growth seriously?</td></tr>
            <tr><td><strong>Scope</strong></td><td>One jurisdiction / one epoch (Mughal, Company, Republic)</td><td>General claims (Volksgeist; status→contract) tested across systems</td></tr>
            <tr><td><strong>Method</strong></td><td>Archive, statute book, case chronology</td><td>Comparative-historical method aimed at theory</td></tr>
            <tr><td><strong>Output</strong></td><td>A logbook: dates, receptions, repeals</td><td>A hypothesis about law (Savigny / Maine)</td></tr>
            <tr><td><strong>Engineer analogy</strong></td><td><code>git log</code> of one repo</td><td>A theory of how ecosystems of repos evolve</td></tr>
          </tbody>
        </table>
        <p><strong>Exam trap:</strong> “Discuss the Historical School” is <em>not</em> an invitation to narrate English legal history from Magna Carta. Two Savigny paragraphs + Maine’s formula + this distinction table beats five pages of dates. Conversely, a paper that asks the distinction by name must not collapse into a Volksgeist essay with no contrast row.</p>
        <p><strong>CCS 10/20-marker tip:</strong> Open with the one-liner. Draw the six-row table. Give one Indian illustration of each (history: 1860 IPC enactment; jurisprudence: Maine on village communities as a theory of status). Close: a good lawyer needs the logbook <em>and</em> the hypothesis — but they are not the same subject. Paranjape’s Historical School chapter is the theory side; your Constitution/Crimes papers supply the logbook.</p>`,
        analogy: {
          title: "git log vs evolutionary theory",
          body: "Legal history is git log of linux.git — commits, authors, merges, one tree. Historical jurisprudence is a theory of how open-source ecosystems evolve: why forks happen, why hasty rewrites die, why some APIs ossify into status and others become contract. Savigny is the engineer forbidding a greenfield rewrite; Maine is the anthropologist of version jumps. Neither is a changelog."
        },
        diagram: {
          type: "compare",
          headers: ["Lens", "Legal history", "Historical jurisprudence"],
          rows: [
            ["Object", "One system’s past", "Nature of law via the past"],
            ["Typical output", "Timeline / reception story", "Volksgeist; status→contract"],
            ["Failure mode", "Antiquarianism with no theory", "Theory with no dates at all"]
          ]
        },
        mnemonic: {
          name: "LOGBOOK vs HYPOTHESIS",
          hook: "Legal history = Logbook. Historical jurisprudence = Hypothesis about law.",
          recite: "History of law = what happened in this repo. Historical jurisprudence = what history teaches about the nature of law — Savigny spirit, Maine status-to-contract."
        },
        cases: [
          { name: "Savigny, Vom Beruf (1814)", citation: "anti-codification pamphlet", point: "Theory, not a German statute list — the Volksgeist claim is jurisprudence." },
          { name: "Maine, Ancient Law (1861)", citation: "status → contract", point: "Comparative hypothesis about progressive societies, not a casebook of English kings." },
          { name: "IPC 1860 / Contract Act 1872", citation: "Indian logbook", point: "Legal-history facts. Use them to test (and criticise) Savigny: India did get midnight codes." }
        ],
        pyqs: [
          {
            year: "stock CCS",
            section: "B",
            marks: "10",
            q: "What is the distinction between historical jurisprudence and legal history?",
            outline: [
              "One-liner: chronology of a system vs theory of law drawn from history.",
              "Six-row table (what / question / scope / method / output / analogy).",
              "Legal history = descriptive logbook; give one Indian date-fact.",
              "Historical jurisprudence = Savigny Volksgeist + Maine status→contract as THEORY.",
              "Exam close: a 20-marker on the Historical School still needs this distinction in one paragraph so you are not writing a history dissertation."
            ]
          },
          {
            year: "theme",
            section: "C",
            marks: "20",
            q: "Discuss the Historical School. Is it the same as legal history?",
            outline: ["Savigny + Maine payload; then an explicit ‘no’ with the table; Analytical contrast if the question also asks it."]
          }
        ],
        check: [
          "Recite the one-liner without hedging.",
          "Draw the six-row table from memory (including the git-log analogy).",
          "Give one Indian illustration of legal history and one of historical jurisprudence."
        ]
      },
      {
        id: "j-austin-cmd",
        seq: 2.2,
        readAs: "Paranjape — Analytical School (Austin unpacked)",
        unit: 3,
        yield: "high",
        tags: ["austin", "command", "sovereign", "sanction", "habit of obedience"],
        title: "Austin’s command theory — sovereign, sanction, habit of obedience",
        summary: "Austin’s kernel: law is the command of a sovereign backed by a sanction, in an independent political society marked by habitual obedience. CCS still sets 20-markers on this sentence.",
        explainer: `<p>Unpack the machine; do not just chant “command theory.” A <strong>command</strong> is a wish of a rational being, signified to another, with an evil to be incurred if it is not complied with. That evil is the <strong>sanction</strong>. Not every request is law (a friend’s advice has no sovereign evil). Not every evil is a legal sanction (social boycott is not Austin’s State sanction).</p>
        <p><strong>Sovereign:</strong> a person or determinate body, not in a habit of obedience to a like superior, who receives habitual obedience from the bulk of a given society. Marks: determinate; legally illimitable (no legal limitation — political/moral limits do not count for Austin); habit of obedience from the bulk. Independent political society = that relationship. “Bulk” lets him ignore rebels and infants.</p>
        <p><strong>Province of jurisprudence:</strong> positive law (law set by political superiors to inferiors). Positive morality (international law, club rules, fashion) is analogue, not law properly so called. Divine law is another department. This is why Austin called jurisprudence “the philosophy of positive law.”</p>
        <p><strong>Stock critiques (write four, not twelve):</strong> (1) custom and judge-made law are not easy “commands”; (2) international law exists without a global sovereign; (3) constitutional law limits sovereigns — Austin has to call it positive morality; (4) habit of obedience is sociological smuggling; (5) criminal-law bias — private law looks odd as a threat. Hart’s “gunman” enlarged: obligation ≠ being obliged.</p>
        <p><strong>Indian landing:</strong> Parliament looks Austinian until you hit basic structure, judicial review, and federal lists. Use that as a critique paragraph, not as “Austin is useless.” Sanction-picture still maps Crimes (BNS punishments) better than it maps Art. 21.</p>`,
        analogy: {
          title: "Root user + kill -9",
          body: "Sovereign = unique root, no sudoers file above it. Command = a signed syscall. Sanction = kill -9 if you ignore it. Habit of obedience = the cluster actually routes to that root. Constitutional basic-structure is a hypervisor Austin refused to admit."
        },
        diagram: {
          type: "vflow",
          steps: ["Determinate superior", "Wish + signification", "Sanctioned evil", "Habitual obedience of the bulk", "Independent political society → positive law"]
        },
        mnemonic: {
          name: "C-S-S-H",
          hook: "Command · Sanction · Sovereign · Habit of obedience.",
          recite: "Law properly so called is the command of a legally unlimited sovereign, backed by a sanction, in a society that actually obeys."
        },
        cases: [
          { name: "Austin, The Province of Jurisprudence Determined", citation: "1832 lectures", point: "Primary text — not a case. Quote command/sanction/sovereign." },
          { name: "Kesavananda Bharati", citation: "(1973) 4 SCC 225", point: "Indian counter-example: constituent power is legally limited. Use as critique, not as Austin’s illustration." }
        ],
        pyqs: [
          {
            year: "Dec 2023",
            section: "C",
            marks: "20",
            q: "‘Jurisprudence is the philosophy of Positive Law’ (Austin) — Discuss.",
            outline: ["Quote; command/sovereign/sanction/habit; province vs positive morality; four critiques; Indian constitutional limit; residual use in criminal law."]
          }
        ],
        check: [
          "Define command without saying ‘order’ and stopping.",
          "List four marks of the Austinian sovereign.",
          "Explain why Austin demotes international law."
        ]
      },
      {
        id: "j-hart-rules",
        seq: 2.4,
        readAs: "Paranjape — Analytical School (Hart)",
        unit: 3,
        yield: "high",
        tags: ["hart", "primary rules", "secondary rules", "rule of recognition"],
        title: "Hart — primary/secondary rules and the rule of recognition",
        summary: "Hart upgrades Austin: a legal system is the union of primary duty-rules and secondary power-rules, closed by a rule of recognition officials actually use.",
        explainer: `<p><strong>Primary rules</strong> impose duties (do not kill; pay tax). A society with only primary rules suffers: uncertainty (what is the rule?), staticity (how do we change it?), inefficiency (who decides disputes?). <strong>Secondary rules</strong> are rules about rules:</p>
        <ul>
          <li><strong>Recognition</strong> — the master test of validity (in the UK: what the Queen-in-Parliament enacts…; in India: a more complex pedigree including the Constitution and the Court’s basic-structure overlay).</li>
          <li><strong>Change</strong> — confer power to legislate / repeal / amend.</li>
          <li><strong>Adjudication</strong> — confer power to decide disputes and to make that decision authoritative.</li>
        </ul>
        <p>The <strong>rule of recognition</strong> is a social rule practised by officials, not a command and not a Grundnorm in Kelsen’s transcendental sense. Internal point of view: officials <em>use</em> it as a standard, not merely predict sanctions. Hart’s gunman situation: being obliged (gun) ≠ having an obligation (rule).</p>
        <p><strong>Vs Austin:</strong> habit is not a rule; sanctions are not the essence of obligation; the sovereign is not legally illimitable (power-conferring rules include limits). <strong>Vs Kelsen:</strong> validity still chains, but the top is a practised social rule, not a presupposed ought. <strong>Vs Realists:</strong> rules have a core of settled meaning; scepticism is for the penumbra.</p>
        <p><strong>Exam close:</strong> Indian students should not write “the Constitution is the rule of recognition” as if that ended the debate — officials (including the Court) also practise amendment limits. That is the interesting Hartian sentence.</p>`,
        analogy: {
          title: "Repo + CODEOWNERS + CI",
          body: "Primary rules = application code (do X). Recognition = CODEOWNERS + protected-branch policy officials actually enforce. Change = who may merge. Adjudication = the tribunal that closes the issue. Austin only modelled kill -9. Hart modelled git permissions."
        },
        diagram: {
          type: "tree",
          root: "Legal system (Hart)",
          branches: ["Primary: duties", "Secondary: recognition", "Secondary: change", "Secondary: adjudication"]
        },
        mnemonic: {
          name: "R-C-A on duties",
          hook: "Primary duties; secondary Recognition, Change, Adjudication.",
          recite: "Hart: union of primary and secondary rules. Rule of recognition is what officials practise as the validity test."
        },
        cases: [
          { name: "Hart, The Concept of Law", citation: "1961", point: "Ch. V–VI — primary/secondary; ch. VI rule of recognition." },
          { name: "Indian basic structure as practised recognition", citation: "Kesavananda line", point: "Officials treat some amendment outputs as invalid — a Hartian social rule, not an Austinian habit." }
        ],
        pyqs: [
          {
            year: "theme",
            section: "B",
            marks: "10",
            q: "Explain Hart’s distinction between primary and secondary rules. What is the rule of recognition?",
            outline: ["Defects of a primary-only world; three secondary rules; recognition as social practice; contrast Austin and Kelsen in four lines."]
          }
        ],
        check: [
          "Name the three secondary rules without looking.",
          "Why ‘habit of obedience’ is not enough.",
          "One Indian sentence on the rule of recognition."
        ]
      },
      {
        id: "j-analytical-vs-natural",
        seq: 2.6,
        readAs: "Paranjape — Analytical vs Natural (stock contrast)",
        unit: 2,
        yield: "high",
        tags: ["analytical", "natural law", "is ought", "positivism"],
        title: "Analytical School vs Natural Law",
        summary: "Analytical positivism separates validity from merit (is). Natural law measures human law by reason or justice (ought). CCS sets this as a distinguish question beside Austin/Kelsen.",
        explainer: `<p><strong>Analytical:</strong> law is a social fact of a particular kind (command, norm, rule). Validity is pedigree, not goodness. Austin, Kelsen, (soft) Hart. You can say “this is law but it is wicked.”</p>
        <p><strong>Natural law:</strong> law participates in reason/justice. An unjust edict is defective as law (Aquinas, Fuller, Radbruch in the extreme). Stammler: just-law method with variable content. Validity and merit leak into each other.</p>
        <table class="compare">
          <thead><tr><th></th><th>Analytical</th><th>Natural</th></tr></thead>
          <tbody>
            <tr><td>Core question</td><td>What is valid law in this system?</td><td>What is law worthy of the name?</td></tr>
            <tr><td>Is/ought</td><td>Separated (positivist)</td><td>Connected (moral test)</td></tr>
            <tr><td>Typical names</td><td>Austin, Kelsen, Hart</td><td>Aquinas, Locke, Stammler, Fuller</td></tr>
            <tr><td>Nazi-law problem</td><td>May still be ‘law’, then resist politically</td><td>Extreme injustice fails as law</td></tr>
            <tr><td>Indian echo</td><td>Art. 13 pedigree + parliamentary form</td><td>Preamble justice; basic-structure morality</td></tr>
          </tbody>
        </table>
        <p><strong>Do not</strong> write that positivists love injustice. Write that they refuse to let disagreement about justice decide the <em>existence</em> question. Hart vs Fuller (1958) is extra credit: inner morality of law (Fuller’s eight failures) vs separation (Hart).</p>`,
        analogy: {
          title: "Compile-time vs lint",
          body: "Analytical: did this commit pass the merge-gate (pedigree)? Natural law: even a merged commit can be ‘not software’ if it violates the language’s moral type system. Fuller is a linter so strict it claims un-linted code is not a program."
        },
        diagram: {
          type: "compare",
          headers: ["Axis", "Analytical", "Natural"],
          rows: [
            ["Validity", "Source / pedigree", "Reason / justice"],
            ["Wicked statute", "Law, but criticise", "May fail as law"],
            ["CCS names", "Austin Kelsen Hart", "Stammler Kohler + classics"]
          ]
        },
        mnemonic: {
          name: "IS vs OUGHT",
          hook: "Analytical = is (valid). Natural = ought (just).",
          recite: "Positivists separate existence from merit. Natural lawyers measure human law by reason. Indian public law uses both sentences."
        },
        cases: [
          { name: "Hart, Positivism and the Separation of Law and Morals", citation: "71 Harv. L. Rev. 593 (1958)", point: "Separation thesis — exam extra." },
          { name: "Fuller, The Morality of Law", citation: "inner morality", point: "Eight ways a ‘system’ fails to be law." }
        ],
        pyqs: [
          {
            year: "theme",
            section: "B",
            marks: "10",
            q: "Distinguish the Analytical and Natural Law schools.",
            outline: ["Is/ought table; names; Nazi-law / Radbruch as one paragraph; Indian Preamble vs Art. 13."]
          }
        ],
        check: [
          "One sentence each on is and ought.",
          "Why Hart is still a positivist after talking about morality of duty.",
          "Stammler’s ‘variable content’ in one line."
        ]
      },
      {
        id: "j-socio-vs-hist",
        seq: 3.4,
        readAs: "Paranjape — Sociological vs Historical",
        unit: 5,
        yield: "high",
        tags: ["pound", "savigny", "sociological", "historical"],
        title: "Sociological School vs Historical School",
        summary: "Both reject Austin’s midnight command. Historical school watches growth from the people’s past; sociological school watches law’s present social task and engineers interests.",
        explainer: `<p>Stock CCS contrast (often tucked inside Pound or Savigny essays). <strong>Shared enemy:</strong> law as the whim of a legally unlimited sovereign. <strong>Fork:</strong> Savigny looks backward (custom, Volksgeist, organic growth; legislation is late and dangerous). Pound looks sideways and forward (interests now; jural postulates of this civilisation; legislation and judging as engineering tools).</p>
        <p>Maine’s status→contract is a historical law of motion. Pound’s social interests (general security, conservation of resources, individual life) are a <em>present inventory</em> that can justify labour codes Maine would have called a return to status. Duguit’s solidarity is closer to sociology than to Volksgeist romance: interdependence now, not folk-spirit then.</p>
        <p><strong>Method:</strong> Historical = comparative legal history in aid of theory. Sociological = empirical/functional — effects, institutions, pressure groups. <strong>Attitude to reform:</strong> Historical is conservative-leaning (do not cut the organic tissue). Sociological is reformist-leaning (re-balance the scheduler). <strong>Indian Constitution</strong> is a sociological document with historical materials: it did not wait for a single Volksgeist.</p>`,
        analogy: {
          title: "Archaeology vs SRE",
          body: "Historical school = archaeologists of the monolith (how it grew, do not rewrite). Sociological school = SREs looking at latency and fairness of running processes, then shipping patches. Same production system; different dashboards."
        },
        diagram: {
          type: "compare",
          headers: ["", "Historical", "Sociological"],
          rows: [
            ["Time arrow", "Past → present (growth)", "Present interests → reform"],
            ["Hero", "Savigny / Maine", "Pound / Duguit"],
            ["Law is", "People’s spirit / evolution", "Social task / solidarity"],
            ["Legislation", "Suspect if premature", "A tool of engineering"]
          ]
        },
        mnemonic: {
          name: "GROW vs SCHEDULE",
          hook: "Historical grows. Sociological schedules.",
          recite: "Both anti-Austin. Savigny: organic past. Pound: engineer present claims with minimum friction."
        },
        cases: [
          { name: "Labour statutes vs freedom of contract", citation: "legislative trend", point: "Pound-engineering against Maine’s high-water contract." },
          { name: "Personal law persistence", citation: "constitutional pluralism", point: "Historical leftover that sociological reform still fights over." }
        ],
        pyqs: [
          {
            year: "theme",
            section: "B",
            marks: "10",
            q: "Distinguish the Historical and Sociological schools.",
            outline: ["Shared anti-command thesis; time-arrow table; Savigny vs Pound; one Indian illustration each; Maine/Duguit as flavour."]
          }
        ],
        check: [
          "Name the shared enemy in one line.",
          "Four-row table from memory.",
          "Why the Constitution is closer to Pound than Savigny."
        ]
      },
      {
        id: "j-law-morals",
        seq: 4.5,
        readAs: "Paranjape — law and morals (Hart–Fuller / Devlin pocket)",
        unit: 1,
        yield: "high",
        tags: ["law and morals", "hart", "fuller", "devlin", "wolfenden"],
        title: "Law and morals — overlap, separation, Hart–Fuller, Hart–Devlin",
        summary: "Murder is illegal and immoral; parking is often only legal. Positivists separate validity from merit; Fuller and Devlin pull morals back in at different joints. CCS 2023 set a 10-marker here.",
        explainer: `<p><strong>Three maps:</strong> (1) overlap (homicide, theft, fraud); (2) law without moral heat (tax rates, limitation periods); (3) morals without legal enforcement (many private lies, some religious duties). Do not write “law = morals.”</p>
        <p><strong>Austin/Kelsen/Hart (separation):</strong> a norm can be valid and iniquitous. Hart’s 1958 essay: keep the existence question clean so criticism stays possible. Nazi ‘laws’ can be called law, then condemned — or, if you prefer Radbruch, extreme injustice drops out of law. CCS usually wants the separation plus a sociological critique, not a full Radbruch seminar.</p>
        <p><strong>Hart vs Fuller:</strong> Fuller — law has an inner morality (generality, publicity, prospectivity, clarity, non-contradiction, possibility of compliance, constancy, congruence of official action). A system that fails these is not a legal system. Hart — those are principles of efficacy, not a moral test of validity; a wicked but formally complete code is still law.</p>
        <p><strong>Hart vs Devlin (Wolfenden):</strong> should the criminal law enforce society’s moral majority (Devlin: disintegration thesis — shared morals bind society)? Hart (Mill flavour): harm principle; private immorality is not the law’s business. Indian landing: constitutional morality vs popular morality (<em>Navtej Johar</em> is extra, not Sem-1 core, but one line is gold). Do not drag Art. 377 into a jurisprudence 10-marker unless you have time.</p>
        <p><strong>10-marker spine:</strong> define; three-circle overlap; separation thesis; one sentence Fuller; one sentence Devlin; Indian example (sati legally banned against ‘customary morals’).</p>`,
        analogy: {
          title: "Type checker vs community guidelines",
          body: "Separation: the compiler can accept a cruel program if it types. Fuller: a compiler that randomly changes keywords is not a compiler. Devlin: the platform should ban what the village finds disgusting. Hart: ban harm, not disgust."
        },
        diagram: {
          type: "tree",
          root: "Law × morals",
          branches: ["Overlap (core crimes)", "Law only (technical rules)", "Morals only (private vice)", "Debates: Fuller / Devlin"]
        },
        mnemonic: {
          name: "O-S-F-D",
          hook: "Overlap · Separation · Fuller inner morality · Devlin enforcement.",
          recite: "Law and morals intersect but are not identical. Hart separates validity from merit; Fuller loads procedure with morality; Devlin wants the criminal law to police the moral majority."
        },
        cases: [
          { name: "Wolfenden Report (1957)", citation: "UK", point: "Backdrop of Hart–Devlin — private homosexual acts and the harm principle." },
          { name: "Fuller–Hart exchange", citation: "Harvard Law Review 1958", point: "Inner morality vs separation." }
        ],
        pyqs: [
          {
            year: "Dec 2023",
            section: "B",
            marks: "10",
            q: "Law and Morals.",
            outline: ["Overlap/divergence; positivist separation; Fuller one para; Devlin one para; Indian custom-vs-statute illustration."]
          }
        ],
        check: [
          "Three-circle map in 30 seconds.",
          "Fuller vs Hart in four lines.",
          "Devlin’s disintegration claim in one sentence."
        ]
      },
      {
        id: "j-pound-interests",
        seq: 5.2,
        readAs: "Paranjape — Pound (interests taxonomy)",
        unit: 5,
        yield: "high",
        tags: ["pound", "interests", "jural postulates", "social engineering"],
        title: "Pound’s classification of interests (and jural postulates)",
        summary: "The 20-marker on social engineering is lost if you cannot inventory Individual / Public / Social interests and say what a jural postulate is.",
        explainer: `<p>Pound’s engineering metaphor is empty without the inventory. Law maximises satisfied claims with minimum friction. Claims are classified so the scheduler has labels:</p>
        <ul>
          <li><strong>Individual interests:</strong> personality (body, honour, privacy); domestic relations; substance (property, succession, contract, employment).</li>
          <li><strong>Public interests:</strong> interests of the State as a juristic person — efficient administration, territorial integrity, fiscus.</li>
          <li><strong>Social interests:</strong> general security (peace, health, transactions); security of social institutions (family, religion, political); general morals; conservation of social resources; general progress (economic, political, cultural); individual life (claim to a human existence — the bridge to Art. 21 essays).</li>
        </ul>
        <p><strong>Jural postulates</strong> of a civilisation: the background assumptions a given society treats as reasonable (others will not aggress; they will not deceive in bargains; they will control things they have created). Postulates are historical — they change — which is how Pound stays compatible with a mild historical school without becoming Savigny.</p>
        <p><strong>How to use in an answer:</strong> pick one Indian conflict (environment vs industry; reservation vs open competition; labour vs contract freedom) and show two interests colliding, then the statute/court as the engineering act. <strong>Critique:</strong> who weighs? measuring friction is political; American progressive bias.</p>`,
        analogy: {
          title: "QoS classes + sysctl",
          body: "Individual / Public / Social = traffic classes. Jural postulates = default sysctl of this civilisation. Social engineering = retune QoS so the cluster meets the SLA with minimum packet drop (friction)."
        },
        diagram: {
          type: "tree",
          root: "Pound interests",
          branches: ["Individual (personality / domestic / substance)", "Public (State as person)", "Social (security, morals, resources, progress, individual life)"]
        },
        mnemonic: {
          name: "IPS + POSTULATES",
          hook: "Individual · Public · Social. Postulates = default assumptions of the civilisation.",
          recite: "Name three social interests (security, morals, resources) and one Indian collision before you praise ‘engineering.’"
        },
        cases: [
          { name: "M.C. Mehta line", citation: "Art. 21 environment", point: "Social interest in resources vs individual enterprise." },
          { name: "Indra Sawhney", citation: "(1992) Supp (3) SCC 217", point: "Engineering between open competition (individual) and representation (social). Do not over-import — one line." }
        ],
        pyqs: [
          {
            year: "Dec 2024 & 2023",
            section: "C",
            marks: "20",
            q: "Social Engineering — classify the interests. What are jural postulates?",
            outline: ["Define engineering; IPS inventory with examples; postulates; Indian collision; critiques."]
          }
        ],
        check: [
          "Recite IPS with two examples each.",
          "Define jural postulates without saying ‘justice’.",
          "One collision, two interests, one statute."
        ]
      },
      {
        id: "j-shorts",
        seq: 1.2,
        readAs: "Paranjape — definitions & thinkers (Sec A pack)",
        unit: 1,
        yield: "high",
        tags: ["bentham", "manu", "salmond", "stone", "holland", "eye of law"],
        title: "Sec A shorts — Bentham, Manu, Salmond, Stone, ‘eye of law’",
        summary: "Four- and five-markers that CCS farms almost every year. Do not bury them inside the Analytical essay. Recite, tag the school, sit down.",
        explainer: `<p><strong>Jeremy Bentham (Dec 2023 &amp; Dec 2024 Sec A):</strong> utilitarian reformer of the analytical family. Greatest happiness of the greatest number; law is a command, but Bentham is the <em>censor</em> who asks what law <em>ought</em> to be as well as the expositor of what it is. He attacks natural-law ‘fictions,’ wants codification, and invents much of the modern legislative-reform toolkit (pain/pleasure calculus, official secrets of judicial delay). <strong>Austin vs Bentham:</strong> Austin is drier — philosophy of <em>positive</em> law as it is, sovereign + sanction, less the reformer. Do not swap them. One-line close: Bentham supplies the reform engine; Austin supplies the command definition CCS quotes.</p>
        <p><strong>Manu:</strong> the Indian opening that Sec A loves. <em>Manusmriti</em> as a Dharmaśāstra source — law mixed with dharma, varṇa-duty, king as enforcer not Austinian illimitable sovereign. Use him as a <em>pre-analytical</em> picture: law is not only a political superior’s command; it is a duty-order of a civilisation. Do not write a caste pamphlet; write: Indian jurisprudence has a textual root older than Austin, and Paranjape’s ‘Indian trends’ chapter starts here. Pair with the warning that colonial codes later overwrote much of this as municipal law.</p>
        <p><strong>Salmond:</strong> “the science of the first principles of the civil law.” Also: law as the body of principles recognised and applied by the State in the administration of justice. Pigeon-hole theory of torts is Salmond’s (nominate torts). Useful because he is courtroom-facing: jurisprudence as the grammar of what courts actually enforce, not a theology of the Good.</p>
        <p><strong>Julius Stone — “lawyers’ extroversion”:</strong> jurisprudence is the lawyer looking <em>outward</em> from doctrine toward philosophy, sociology, economics, history. It is not introverted case-cramming. Dec papers ask the phrase almost as a fill-in. Write: Stone’s point is utility — K-1001 exists so you can criticise a statute, not only recite it.</p>
        <p><strong>“Eye of law” / Holland:</strong> Holland’s “formal science of positive law” treats jurisprudence as watching the <em>form</em> of legal relations (right, duty, person) with a scientific eye, not the contents of one code. If the short note is “eye of law,” answer: the legal eye sees jural relations, not moral deserts — then one sentence on why that is too thin (Realists / Pound).</p>
        <p><strong>Exam method:</strong> 4 marks = 8–10 lines, one definition, one contrast, one Indian landing. Do not start a 20-marker on Austin when the question is Bentham.</p>`,
        analogy: {
          title: "Four named packages in the toolchain",
          body: "Bentham is the reform linter. Austin is the type-checker that only accepts Command. Manu is a pre-colonial spec still cited as ancestry. Salmond is the stdlib of first principles. Stone is the reminder that the lawyer’s IDE has an ‘external libraries’ pane."
        },
        diagram: {
          type: "compare",
          headers: ["Name", "One-liner to dump", "Do not confuse with"],
          rows: [
            ["Bentham", "Utilitarian censor + command; reform/codify", "Austin (expositor, drier)"],
            ["Manu", "Dharmaśāstra duty-order, not Austin’s sovereign", "A modern Hindu Code essay"],
            ["Salmond", "First principles of civil law; pigeon-holes", "Winfield (general liability)"],
            ["Stone", "Lawyers’ extroversion — law looking out", "Realism’s ‘law is what courts do’ (Gray/Holmes)"]
          ]
        },
        mnemonic: {
          name: "B-M-S-S",
          hook: "Bentham happiness · Manu dharma · Salmond first principles · Stone extroversion.",
          recite: "Austin ≠ Bentham. Eye of law = Holland’s formal science. 4 marks: one contrast, sit down."
        },
        cases: [
          { name: "Thinkers are the authorities", citation: "Paranjape ch. 1–2", point: "Sec A is a name-and-punch paper. Cite the phrase, not a Supreme Court case, unless the question is utility (then Kesavananda one line)." }
        ],
        pyqs: [
          { year: "Dec 2024", section: "A", marks: "4", q: "Bentham’s contribution / Manu / Stone.", outline: ["Named one-liner; one contrast; one use in an Indian answer."] },
          { year: "Dec 2023", section: "A", marks: "4", q: "Bentham; ‘lawyers’ extroversion’.", outline: ["Utilitarian reform vs Austin expositor; Stone = looking outward."] }
        ],
        check: ["Bentham vs Austin in two sentences.", "Stone’s phrase verbatim.", "Salmond’s definition + pigeon-hole tag."]
      },
      {
        id: "j-akh",
        seq: 2.5,
        readAs: "Paranjape — Analytical School (Austin / Kelsen / Hart drill)",
        unit: 3,
        yield: "high",
        tags: ["austin", "kelsen", "hart", "comparison", "grundnorm", "command"],
        title: "Drill — Austin vs Kelsen vs Hart",
        summary: "The distinguish 10-marker. Three positivists, three kernels: command, pyramid, ruleset. Do not mash them into ‘all haters of natural law.’",
        explainer: `<p><strong>One-liner:</strong> Austin explains law as the sovereign’s command backed by sanction; Kelsen explains it as a pure hierarchy of norms ending in a presupposed Grundnorm; Hart explains it as the union of duty-imposing primary rules and power-conferring secondary rules (recognition, change, adjudication). All three separate law’s validity from its moral merit. That is the only safe generalisation. Everything else is a table.</p>
        <table class="compare">
          <thead><tr><th></th><th>Austin</th><th>Kelsen</th><th>Hart</th></tr></thead>
          <tbody>
            <tr><td><strong>Kernel</strong></td><td>Sovereign + command + sanction</td><td>Norm + validity chain + Grundnorm</td><td>Primary duties + secondary power-rules</td></tr>
            <tr><td><strong>What makes a rule ‘law’?</strong></td><td>It is a general command of a habitually obeyed, independent political superior</td><td>It is authorised by a higher norm, ultimately by the Grundnorm</td><td>It passes the officials’ rule of recognition (pedigree)</td></tr>
            <tr><td><strong>Sovereign / State</strong></td><td>A person or determinate body, legally illimitable</td><td>The State <em>is</em> the legal order personified — no dualism</td><td>No gunman-sovereign; officials’ practice can bind the centre</td></tr>
            <tr><td><strong>Sanction</strong></td><td>Evil visited on disobedience (the bark)</td><td>A directed coercive act stipulated by a norm</td><td>Not essential to every rule (power-conferring rules have no ‘bark’)</td></tr>
            <tr><td><strong>Morals</strong></td><td>Positive morality is outside jurisprudence</td><td>Purity programme: expel sociology and ethics</td><td>Separation thesis; being obliged ≠ having an obligation</td></tr>
            <tr><td><strong>Custom / judges / IL</strong></td><td>Awkward — become law only via tacit sovereign command; IL is positive morality</td><td>Custom is law if the higher norm so provides; IL can be a system with its own Grundnorm</td><td>Custom and precedent fit if the rule of recognition says so; IL is a borderline case he discusses</td></tr>
            <tr><td><strong>Weak spot</strong></td><td>Constitutions that bind the legislature; successor problem; habits ≠ rules</td><td>Grundnorm is a fiction; revolutions are a new presupposition; empty of justice</td><td>Officials’ practice can look circular; open texture dumps hard cases into discretion</td></tr>
            <tr><td><strong>Indian landing</strong></td><td>Art. 13 + basic structure kill the illimitable sovereign</td><td>26 Jan 1950 as a Grundnorm shift; basic structure as a fight over even the ‘highest’ norm</td><td>Constitution + legislation + precedent as India’s recognition practice</td></tr>
          </tbody>
        </table>
        <p><strong>Austin vs Kelsen (the 10-marker pair):</strong> command of a <em>person</em> vs impersonal ought-pyramid; sanction as a threatened evil vs a legal consequence; habitual obedience vs presupposed base; both separate morals, Kelsen more radically (even the ‘science’ must be pure). <strong>Hart vs Austin:</strong> gunman vs obligation; power-conferring rules (wills, contracts, legislation) are not commands; the sovereign can be legally limited. <strong>Hart vs Kelsen:</strong> social practice of officials vs a transcendental ought; English ordinary language vs continental norm-logic.</p>
        <p><strong>How to write:</strong> dump the table (even a six-row sketch scores). One Indian sentence each. Close: they are allies against natural law and enemies on the picture of a legal system. The parent Analytical card holds the essays; this card is the distinguish drill.</p>`,
        analogy: {
          title: "Root shout / git ancestry / CONTRIBUTING.md",
          body: "Austin = a root user who yells and kills processes. Kelsen = every commit is valid only if a parent commit authorised it; the orphan root commit is the Grundnorm you cloned. Hart = duty-code in src/ plus CONTRIBUTING.md (recognition), RFC process (change), CODEOWNERS (adjudication). Three operating systems, one ‘not morals’ kernel flag."
        },
        diagram: {
          type: "compare",
          headers: ["", "Austin", "Kelsen", "Hart"],
          rows: [
            ["OS metaphor", "Command", "Pyramid", "Ruleset"],
            ["Base", "Sovereign habitually obeyed", "Grundnorm presupposed", "Rule of recognition practised"],
            ["Fails at", "Limited constitutions", "Fictional base", "Circular official practice"]
          ]
        },
        mnemonic: {
          name: "C-P-R TABLE",
          hook: "Command · Pyramid · Ruleset. Then RCA for Hart: Recognition, Change, Adjudication.",
          recite: "Austin vs Kelsen is person-command vs pure-norm. Hart kills the gunman and the illimitable sovereign."
        },
        cases: [
          { name: "Kesavananda Bharati v State of Kerala", citation: "(1973) 4 SCC 225", point: "Anti-Austin laboratory: even constituent power has a legal limit." },
          { name: "Golaknath v State of Punjab", citation: "(1967) 2 SCR 762", point: "The ‘is amendment law under 13?’ fight is a pedigree/Grundnorm story." }
        ],
        pyqs: [
          {
            year: "Dec 2023",
            section: "B",
            marks: "10",
            q: "Difference between Austin and Kelsen.",
            outline: ["Command vs norm; person-sovereign vs impersonal order; sanction as evil vs coercive ought; morals; Grundnorm vs habitual obedience; one Indian line."]
          },
          {
            year: "theme",
            section: "C",
            marks: "20",
            q: "Salient features of the analytical school. Distinguish Austin, Kelsen and Hart.",
            outline: ["Positivism features; then the full table; Hart’s three secondary rules; weak spots."]
          }
        ],
        check: ["Draw the table without notes.", "Hart’s three secondary rules.", "One Indian landing that wounds Austin."]
      },
    ]
  };
})(window);

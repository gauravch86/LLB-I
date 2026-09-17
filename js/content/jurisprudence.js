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
        tags: ["definition", "salmond", "austin", "holland", "gray", "pound", "utility"],
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
        <p><strong>Law and morals:</strong> keep a 10-mark pocket. Overlap (murder is illegal and immoral), divergence (parking tickets; some religious duties not legally enforced), and the positivist claim that validity ≠ merit. Hart vs Fuller is extra credit; CCS usually wants Austin/Kelsen “separation” plus a sociological critique.</p>`,
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
          "Can list three utilities with an Indian illustration."
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
      }
    ]
  };
})(window);

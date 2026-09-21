(function (g) {
  g.LLB = g.LLB || {};
  g.LLB.papers = g.LLB.papers || {};
  g.LLB.papers.k1002 = {
    id: "k1002",
    code: "K-1002",
    title: "Constitutional Law of India-I",
    short: "Constitution",
    blurb: "Tracks Narender Kumar: salient features → Preamble → FRs chapter-wise. Keep the Jain Book Agency bare act open.",
    shelf: {
      primary: "Dr. Narender Kumar — <em>Introduction To The Constitution Law Of India</em> (Allahabad Law Agency, latest edition)"
    },
    youtube: [
      { title: "FR complete playlist", search: "Fundamental Rights complete Unacademy Judiciary Article 12 to 32" },
      { title: "Article 21 Maneka", search: "Article 21 Maneka Gandhi StudyIQ" },
      { title: "Art 14 15 16 reservation", search: "Art 14 15 16 reservation lecture Indra Sawhney" }
    ],
    topics: [
      {
        id: "c-nature",
        seq: 1,
        readAs: "Unit 1 — Union / quasi-federal + parliamentary form (nature home)",
        unit: 1,
        yield: "high",
        tags: ["federal", "quasi-federal", "parliamentary", "k.c. wheare"],
        title: "Nature of the Indian Constitution — federal structure and form of government",
        summary: "India is a Union of States with federal hardware and a unitary turbo. Government is parliamentary, Westminster-derived, with a republican President.",
        explainer: `<p>Narender Kumar’s early chapters are history, then <strong>salient features</strong>, then the Union. CCS K-1002 asks two of those features with extra weight: federal structure and form of government. Art. 1: “India, that is Bharat, shall be a Union of States.” The drafting choice of <em>Union</em> (not ‘federation’) is itself an exam sentence: the States are not a bargain that can secede; the Union is indestructible (compare US compact myths).</p>
        <p><strong>Federal hardware (list 6):</strong> dual polity (Union + States); written Constitution; supremacy of the Constitution; rigid amendment (Art. 368 with basic structure overlay); division of powers (Sch. VII — Union/State/Concurrent); independent judiciary with power of judicial review; bicameralism at Centre (Rajya Sabha as House of States, imperfectly).</p>
        <p><strong>Unitary turbo (list 6):</strong> strong Centre; single Constitution; single citizenship; unified judiciary; All-India Services; residuary with Union (Art. 248 / List I-97); emergency provisions (Arts. 352, 356, 360) that can turn the system into a de facto unitary State; Parliament can legislate on State list in listed situations (Arts. 249, 250, 252, 253); Art. 3 — Parliament can reorganise States without their consent as a veto; appointment of Governors.</p>
        <p><strong>Labels:</strong> K.C. Wheare — “quasi-federal.” Granville Austin — “cooperative federalism.” Jennings — more unitary than federal. Indian SC in <em>State of W.B. v Union of India</em> and later <em>S.R. Bommai</em> (federalism as basic feature) — you must show the doctrine moved from “Centre is the boss” toward “federalism is a basic feature,” without denying the turbo.</p>
        <p><strong>Form of government:</strong> parliamentary / cabinet. Features: nominal head (President, Art. 53 read with 74); real executive is Council of Ministers collectively responsible to the Lok Sabha (Art. 75(3)); rule of majority; political homogeneity; ministerial responsibility (collective + individual); possibility of dissolution. Contrast presidential (US): fixed tenure, separation, President as real executive. India also has republicanism, secularism (42nd Amendment express; SC as basic feature in <em>S.R. Bommai</em> / <em>Kesavananda</em> line), and a socialist aspiration in the Preamble word — do not dump these into federalism unless the question is “salient features.”</p>
        <p><strong>Exam trap:</strong> “neither federal nor unitary but quasi-federal” is the Dec 2024 10-marker shape. The full model answer — two columns, Wheare, Bommai, emergency turbo — is in <strong>Worked answers</strong> below. Do not pick a team and rant.</p>`,
        analogy: {
          title: "Federal hardware + unitary overclock",
          body: "Dual government is the motherboard. Emergency Arts. 352/356 are a BIOS turbo that clocks the Centre to 100% and throttles the States. Parliamentary form is a process manager: the PM is not a separately elected kernel; the kernel lives only while it holds a majority in the lower house."
        },
        diagram: {
          type: "compare",
          headers: ["Federal base", "Unitary boost"],
          rows: [
            ["Dual polity, Sch. VII", "Strong Centre, residuary Union"],
            ["Written + supreme Constitution", "Single citizenship, unified judiciary"],
            ["Independent SC / HCs", "All-India Services, Governors"],
            ["Rajya Sabha, Art. 368 rigidity", "Arts. 249–253, 352–360, Art. 3"]
          ]
        },
        mnemonic: {
          name: "FED + TURBO",
          hook: "India = federal hardware + unitary overclock (especially Emergency).",
          recite: "Union of States, not a compact. Quasi-federal (Wheare). Parliamentary executive responsible to Lok Sabha."
        },
        cases: [
          { name: "S.R. Bommai v Union of India", citation: "(1994) 3 SCC 1", point: "Federalism and secularism as basic features; Art. 356 justiciable in principle." },
          { name: "State of W.B. v Union of India", citation: "AIR 1963 SC 1241", point: "Early tilt: Indian Union is not a league of States; Centre’s strength emphasised." },
          { name: "Kesavananda Bharati", citation: "(1973) 4 SCC 225", point: "Federal character among basic features (as later lists develop)." },
          { name: "Kuldip Nayar / later Rajya Sabha cases", citation: "use sparingly", point: "Rajya Sabha is not a classic US Senate — weakens ‘pure federal’ claims." }
        ],
        pyqs: [
          {
            year: "Dec 2024",
            section: "B",
            marks: "10",
            q: "Indian Constitution neither federal nor unitary but quasi-federal — Discuss.",
            outline: ["Art. 1 Union; federal list; unitary list; Wheare; Bommai; emergency as the turbo; conclusion: federal with strong Centre."]
          },
          {
            year: "2022",
            section: "A",
            marks: "4",
            q: "Parliamentary form of government.",
            outline: ["Arts. 74–75; collective responsibility; contrast presidential."]
          }
        ],
        check: [
          "Six federal + six unitary features without notes.",
          "Wheare’s label + one SC case.",
          "Parliamentary vs presidential in a six-line table."
        ]
      },
      {
        id: "c-preamble",
        seq: 2,
        readAs: "Kumar ch. 4 — Preamble",
        unit: 2,
        yield: "high",
        tags: ["preamble", "kesavananda", "berubari", "basic structure"],
        title: "Preamble",
        summary: "The Preamble is the identity document of the Republic: source of authority, objectives, and — after Kesavananda — a key to basic features. It is not a justiciable clause in itself.",
        explainer: `<p>Text structure (memorise the architecture, not a calligraphy contest): <strong>We, the People of India</strong> (popular sovereignty) having solemnly resolved to constitute India into a <strong>Sovereign Socialist Secular Democratic Republic</strong> and to secure <strong>Justice</strong> (social, economic, political), <strong>Liberty</strong> (thought, expression, belief, faith, worship), <strong>Equality</strong> (status and opportunity), and to promote <strong>Fraternity</strong> (dignity of the individual and unity and integrity of the Nation). Date: 26 November 1949.</p>
        <p><strong>42nd Amendment (1976)</strong> inserted Socialist, Secular, and integrity. Those words are politically noisy in student debates; in the exam, state the amendment, then say the SC had already read secularism and socialism-as-aim into the document.</p>
        <p><strong>Status in law:</strong></p>
        <ul>
          <li><em>In re Berubari Union</em> (1960): Preamble is not a source of power, not a limitation; not part of the Constitution in the strict sense then held.</li>
          <li><em>Kesavananda</em> (1973): Preamble <em>is</em> part of the Constitution; it indicates the basic features / objectives; cannot be amended to destroy them.</li>
          <li><em>LIC of India v Consumer Education</em> and later cases: Preamble aids interpretation when language is open.</li>
        </ul>
        <p>It is not independently enforceable like Art. 32. It is a torch, not a sword. But when a question says “Preamble gives direction and purpose,” you write Kesavananda + the four justice-liberty-equality-fraternity pillars + how FRs and DPSPs operationalise them.</p>
        <p><strong>Source of authority:</strong> the People — not the Crown, not the States. That sentence kills compact-federal theories and underpins why Art. 3 can re-cut States.</p>`,
        analogy: {
          title: "README.md of the Republic",
          body: "The Preamble is the project README: who authored it (We the People), licence (Republic), design goals (JLEF). You cannot sue on a README, but courts use it when the API (articles) is ambiguous. Kesavananda made deleting the README a forbidden breaking change."
        },
        diagram: {
          type: "tree",
          root: "We the People",
          branches: ["Sovereign Socialist Secular Democratic Republic", "Justice", "Liberty", "Equality", "Fraternity / unity-integrity"]
        },
        mnemonic: {
          name: "JLEF + SSSD-R",
          hook: "Justice, Liberty, Equality, Fraternity. Sovereign Socialist Secular Democratic Republic.",
          recite: "Preamble: identity + objectives. Berubari (not source of power) → Kesavananda (part of Constitution / basic features). Not independently justiciable."
        },
        cases: [
          { name: "In re Berubari Union", citation: "AIR 1960 SC 845", point: "Preamble not a source of power." },
          { name: "Kesavananda Bharati v State of Kerala", citation: "(1973) 4 SCC 225", point: "Preamble is part of the Constitution; window onto basic structure." },
          { name: "S.R. Bommai", citation: "(1994) 3 SCC 1", point: "Secularism as basic feature — Preamble word made operational." }
        ],
        pyqs: [
          {
            year: "Dec 2024",
            section: "A",
            marks: "4",
            q: "Salient features of the Preamble.",
            outline: ["People as source; SSSD-R; JLEF; 42nd Amendment words; non-justiciable but interpretive."]
          },
          {
            year: "2022",
            section: "B/C",
            marks: "10–20",
            q: "Preamble gives direction and purpose to the Constitution.",
            outline: ["Kesavananda; how FRs/DPSPs implement JLEF; one case per pillar if time."]
          }
        ],
        check: [
          "Recite SSSD-R and JLEF.",
          "Berubari vs Kesavananda in two lines each.",
          "42nd Amendment insertions."
        ]
      },
      {
        id: "c-fr-general",
        seq: 3,
        readAs: "Unit 3 — FR map (Art. 12 / 13 / 358 live on drill cards)",
        unit: 3,
        yield: "high",
        tags: ["article 12", "article 13", "state", "eclipse", "severability", "waiver", "suspension"],
        title: "Fundamental Rights — scheme, who can claim, against whom, suspension",
        summary: "Part III is the justiciable core. Know Art. 12 ‘State’, Art. 13 (voiding inconsistent law, doctrines), rightholders, and Emergency suspension.",
        explainer: `<aside class="note"><h3>One-home — this is the FR map, not three essays</h3>
        <p>Art. 12 tests: <button type="button" class="text-link" data-nav="k1002" data-topic="c-art12-state">State under Article 12</button>. Eclipse / severability / waiver: <button type="button" class="text-link" data-nav="k1002" data-topic="c-art13-doctrines">Article 13 doctrines</button>. 358 vs 359: <button type="button" class="text-link" data-nav="k1002" data-topic="c-emergency-fr">Emergency suspension</button>. Five writs: <button type="button" class="text-link" data-nav="k1002" data-topic="c-32-writs">HMPCQ</button>. This card is scheme, rightholders, vertical/horizontal, and a short pointer to those drills.</p></aside>
        <p><strong>Scheme:</strong> Arts. 12–35. Equality (14–18), freedoms (19–22), exploitation (23–24), religion (25–28), minorities (29–30), remedies (32). Art. 31 property was stripped; 300A is a legal right, not an FR — 2022 short notes still poke “right to property.”</p>
        <p><strong>Against whom:</strong> primarily the <strong>State (Art. 12)</strong> — Government and Parliament of India, Government and Legislature of each State, local authorities, “other authorities” (instrumentalities / agencies of the State). Tests from <em>Ajay Hasia</em> / <em>Pradeep Kumar Biswas</em>: deep and pervasive State control, public function, etc. Horizontal application is exceptional (e.g. Art. 15(2), 17, 23, 24 bind private actors in text or doctrine). <em>Puttaswamy</em> privacy is primarily vertical but radiates.</p>
        <p><strong>Who can claim:</strong> citizens for some (Art. 19, 15, 16, 29–30 in specified ways); persons for others (Art. 14, 20, 21 — foreigners included, with caveats). Corporations: Art. 19 traditionally citizens-only, so companies cannot claim 19 as such (<em>State Trading Corp</em> line) but may claim 14/21. NGOs/PIL: standing liberalised under 32.</p>
        <p><strong>Art. 13:</strong> pre-constitutional laws inconsistent with Part III are void to the extent of inconsistency; post-constitutional laws too. State shall not make laws taking away FRs. “Law” includes ordinances, bye-laws, custom; constitutional amendments were held “law” in <em>Golaknath</em> then reversed as to Art. 13 in <em>Kesavananda</em> / 24th Amendment — know the story in 8 lines.</p>
        <p><strong>Doctrines:</strong> <em>eclipse</em> (pre-constitutional law sleeps, revives if FR shadow moves); <em>severability</em> (bad part cuts, rest lives); <em>waiver</em> generally not of FRs (<em>Basheshar Nath</em>); <em>pith and substance / colourable legislation</em> more Lists, but 13 questions sometimes invite them.</p>
        <p><strong>Suspension:</strong> Art. 358 (Art. 19 automatically suspends during Proclamation of Emergency on war/external aggression — 44th Amendment took internal armed rebellion off this automatic hook). Art. 359: President may suspend right to move courts for listed FRs, but <strong>Arts. 20 and 21 cannot be suspended</strong> (44th Amendment) — this is a must-quote after the Emergency hangover. Art. 33–34: Parliament may restrict FRs of armed forces / martial-law situations.</p>
        <p><strong>Saving of certain laws (Kumar’s neighbouring chapter):</strong> Arts. 31A–31C and the Ninth Schedule story sit next to Part III in student texts. Know 31C’s original 39(b)(c) shield, the 42nd’s attempt to extend it to all DPSPs, and <em>Minerva Mills</em> striking that expansion — it is the same FR–DPSP fight you will write in the Directive Principles topic.</p>`,
        analogy: {
          title: "API gateway + authz",
          body: "Art. 12 is the identity provider: only ‘State’ is generally bound. Art. 13 is the policy engine that 404s inconsistent statutes. Art. 32 is the privileged admin port. Emergency 358/359 is a maintenance window — but 44th Amendment nailed 20 and 21 so they stay up even in incident response."
        },
        diagram: {
          type: "vflow",
          steps: ["Is the duty-bearer ‘State’ (Art. 12)?", "Is the claimant a ‘person’ or ‘citizen’ as required?", "Is the law inconsistent with Part III (Art. 13)?", "Apply eclipse / severability", "Remedy: Art. 32 / 226 — unless validly suspended"]
        },
        mnemonic: {
          name: "12-13-32 + 20/21 LOCK",
          hook: "State (12) · voiding (13) · remedy (32). Emergency cannot kill 20 and 21.",
          recite: "FRs mainly vertical. 19 is citizen-centric; 14/20/21 are person-centric. 44th Amendment: 20 & 21 unsuspendable."
        },
        cases: [
          { name: "Ajay Hasia v Khalid Mujib", citation: "(1981) 1 SCC 722", point: "Instrumentality tests for ‘other authorities’." },
          { name: "Pradeep Kumar Biswas", citation: "(2002) 5 SCC 111", point: "Control test refined for Art. 12." },
          { name: "Basheshar Nath v CIT", citation: "AIR 1959 SC 149", point: "No waiver of FRs." },
          { name: "ADM Jabalpur v Shivkant Shukla", citation: "(1976) 2 SCC 521", point: "Emergency habeas disaster — later buried by 44th Amendment and overruled in Puttaswamy / explicit remorse." }
        ],
        pyqs: [
          {
            year: "Dec 2024",
            section: "A",
            marks: "4",
            q: "Conditions for suspension of FRs.",
            outline: ["358 vs 359; 44th Amendment; 20 & 21 locked; war/external aggression vs internal."]
          },
          {
            year: "2022",
            section: "C",
            marks: "20",
            q: "Against whom FRs are enforceable and remedies. Doctrine of eclipse & severability.",
            outline: ["Art. 12; private exceptions; 32 writs; eclipse vs severability with one illustration each."]
          }
        ],
        check: [
          "Art. 12 tests in four bullets.",
          "Eclipse vs severability.",
          "358 vs 359 and the 20/21 lock."
        ]
      },
      {
        id: "c-14-18",
        seq: 4,
        readAs: "Unit 3 — equality home (14–18 survey; classification &amp; reservation are drills)",
        unit: 3,
        yield: "high",
        tags: ["article 14", "15", "16", "17", "18", "reservation", "royappa"],
        title: "Right to Equality — Articles 14–18",
        summary: "14 is the equality API plus anti-arbitrariness middleware. 15–16 host the reservation battlefield. 17–18 abolish untouchability and titles.",
        explainer: `<p><strong>Art. 14:</strong> two limbs — equality before the law (English Dicey — no special privileges) and equal protection of the laws (US — equal treatment of equals). Classification doctrine: intelligible differentia + rational nexus to the object (<em>Anwar Ali Sarkar</em> / <em>Hanif Quareshi</em> style). New doctrine: equality is the antithesis of arbitrariness (<em>E.P. Royappa</em>, <em>Maneka</em>, <em>Ajay Hasia</em>). Both live; 20-markers should show the evolution, not pick one like a sports team.</p>
        <p><strong>Art. 15:</strong> no discrimination on religion, race, caste, sex, place of birth. Clauses (3)–(6) are the exception engines: special provision for women/children; SEBCs/SCs/STs; 15(6) EWS (103rd Amendment, upheld in <em>Janhit Abhiyan</em> 2022 with dissent — know that it exists). 15(2) is horizontal (shops, wells, restaurants).</p>
        <p><strong>Art. 16:</strong> equality of opportunity in public employment. 16(4) enabling provision for backward classes not adequately represented — not an exception that destroys equality but a facet of it (<em>Indra Sawhney</em> — 50% ceiling as general rule, creamy layer for OBCs, no reservation in promotions as original holding, later 77th/85th Amendments and <em>M. Nagaraj</em> / <em>Jarnail Singh</em> for SC/ST promotions). Carry-forward, roster, quantifiable data — only if the question is a full reservation essay.</p>
        <p><strong>Art. 17:</strong> untouchability abolished; offence (Protection of Civil Rights Act / SC-ST Atrocities Act as statutory backup). Horizontal.</p>
        <p><strong>Art. 18:</strong> no titles (except military/academic); no foreign titles without consent; Bharat Ratna etc. are decorations, not titles — stock short note.</p>
        <p>Reservation essay structure: equality of opportunity vs equality of result; 15(4)/16(4) as group justice; case ladder <em>Champakam</em> → 1st Amendment → <em>Balaji</em> → <em>Devadasan</em> → <em>Thomas</em> → <em>Indra Sawhney</em> → Mandal II / Nagaraj / EWS. Conclude with 14’s reasonableness as the continuing judicial brake.</p>`,
        analogy: {
          title: "Equality API + anti-arbitrary middleware",
          body: "14 = every request gets the same auth unless a documented classifier (intelligible differentia) with a bona fide business objective (nexus). Royappa added a WAF: even a ‘classified’ rule dies if it is arbitrary. Reservation is an affirmative-action feature flag authorised by 15(4)/16(4), not a rogue fork of 14."
        },
        diagram: {
          type: "flow",
          steps: ["Is there a classification?", "Intelligible differentia?", "Rational nexus?", "Non-arbitrary (Royappa)?", "If employment/education: 15–16 enabling clauses + ceilings"]
        },
        mnemonic: {
          name: "14 CLASSIFY / DON’T BE ARBITRARY",
          hook: "15 discriminate-not + special clauses. 16 jobs. 17 untouchability. 18 titles.",
          recite: "14: Dicey + US protection + Royappa. Reservation: Indra Sawhney 50% + creamy layer. 17 and 18 are short-note gold."
        },
        cases: [
          { name: "E.P. Royappa v State of T.N.", citation: "(1974) 4 SCC 3", point: "Arbitrariness = inequality." },
          { name: "Indra Sawhney v Union of India", citation: "(1992) Supp (3) SCC 217", point: "OBC reservation framework; 50%; creamy layer; no promotions (as then held)." },
          { name: "Janhit Abhiyan v Union of India", citation: "(2023) 5 SCC 1", point: "EWS / 103rd Amendment upheld (majority)." },
          { name: "State of W.B. v Anwar Ali Sarkar", citation: "AIR 1952 SC 75", point: "Classic classification failure." }
        ],
        pyqs: [
          {
            year: "Dec 2024",
            section: "C",
            marks: "20",
            q: "Critically examine reservation policy with cases.",
            outline: ["14 as parent; 15(4)/16(4); Champakam & 1st Amendment; Indra Sawhney; promotions/Nagaraj; EWS; critiques (creamy layer, 50%, political capture); conclusion as equality-promoting."]
          },
          {
            year: "2022",
            section: "C",
            marks: "20",
            q: "Equality before law.",
            outline: ["Two limbs; classification; new doctrine; two cases; reasonable vs arbitrary."]
          }
        ],
        check: [
          "Two doctrines of Art. 14.",
          "Indra Sawhney holdings in five bullets.",
          "What 17 and 18 actually prohibit."
        ]
      },
      {
        id: "c-19a",
        seq: 5,
        readAs: "Unit 3 — 19(1)(a) speech home (other freedoms = trap sheet)",
        unit: 3,
        yield: "high",
        tags: ["19(1)(a)", "press", "19(2)", "speech"],
        title: "Freedom of speech and expression — Art. 19(1)(a)",
        summary: "Speech is the default; 19(2) is a closed firewall list. Press is inside 19(1)(a) — there is no separate press article.",
        explainer: `<p>Narender Kumar treats Arts. <strong>19–22 as one “Right to Freedom” chapter</strong>. CCS K-1002 singles out <strong>19(1)(a)</strong> (and press) as a named long-question; 20 and 21 get their own topics next. Speech is the default; 19(2) is a closed firewall list. Press is inside 19(1)(a) — there is no separate press article.</p>
        <p>Art. 19(1)(a) is a <strong>citizen</strong> right. It includes: speech, publication, press, circulation (<em>Sakal Papers</em>, <em>Indian Express</em>), right to information as a listener/reader (later RTI culture / <em>S.P. Gupta</em> seeds), commercial speech in part (<em>Tata Press</em>), artistic expression, criticism of government. It does not include a right to be carried on someone else’s private platform as a constitutional given — keep social-media hypotheticals short unless asked.</p>
        <p><strong>19(2) grounds (closed list):</strong> sovereignty &amp; integrity of India; security of the State; friendly relations with foreign States; public order; decency or morality; contempt of court; defamation; incitement to an offence. Reasonable restrictions, not a blank cheque. Test: proximity to the ground, reasonableness (substantive + procedural), least the old ‘tendency’ dragnet after <em>Ram Manohar Lohia</em> (public order ≠ law and order ≠ security — three concentric circles).</p>
        <p><strong>Press cases to name:</strong> <em>Romesh Thappar</em> (circulation, public order vs security); <em>Sakal Papers</em> (price-page order hits circulation); <em>Bennett Coleman</em> (newsprint control); <em>Indian Express v Union of India</em> (taxation that cripples press); <em>Shreya Singhal</em> (s.66A IT Act struck — vagueness, overbreadth; chilling effect). Pre-censorship of cinema lives under 19(2) morality/public order with a specialised statute — mention only if asked.</p>
        <p>Hate-speech / 19(2) vs 19(1)(a) is a live 10-marker: distinguish advocacy from incitement (<em>Shreya Singhal</em> three-step: discussion, advocacy, incitement).</p>`,
        analogy: {
          title: "Freedom is default; 19(2) is the firewall rule-list",
          body: "You cannot invent a new firewall port called ‘government embarrassment.’ If the packet is not one of the eight 19(2) services, it must pass. Press is not a separate NIC — it is speech on a publishing interface."
        },
        diagram: {
          type: "tree",
          root: "19(1)(a) speech/press",
          branches: ["19(2) eight grounds only", "Reasonableness review", "Public order ≠ security", "No prior restraint as default"]
        },
        mnemonic: {
          name: "SPEECH ⊃ PRESS",
          hook: "Eight 19(2) doors only. Lohia circles: law and order ⊂ public order ⊂ security.",
          recite: "Citizens; includes press and circulation. Restrictions reasonable and specified. Shreya Singhal for overbreadth."
        },
        cases: [
          { name: "Romesh Thappar v State of Madras", citation: "AIR 1950 SC 124", point: "Freedom of circulation; 19(2) then needed the 1st Amendment expansion." },
          { name: "Sakal Papers v Union of India", citation: "AIR 1962 SC 305", point: "Price-page order unconstitutional." },
          { name: "Bennett Coleman v Union of India", citation: "(1972) 2 SCC 788", point: "Newsprint policy and press freedom." },
          { name: "Shreya Singhal v Union of India", citation: "(2015) 5 SCC 1", point: "s.66A struck down; chilling effect." }
        ],
        pyqs: [
          {
            year: "Dec 2024",
            section: "C",
            marks: "20",
            q: "Freedom of press as part of freedom of speech and expression — Comment with cases.",
            outline: ["No separate article; circulation cases; 19(2); reasonableness; Shreya Singhal; conclusion: press is 19(1)(a) plus statutory architecture (RNI, etc.)."]
          }
        ],
        check: [
          "List 19(2) grounds.",
          "Four press cases in one line each.",
          "Why companies struggle to claim 19."
        ]
      },
      {
        id: "c-20",
        seq: 6,
        readAs: "Kumar ch. 9 — Right to Freedom (Art. 20)",
        unit: 3,
        yield: "high",
        tags: ["article 20", "ex post facto", "double jeopardy", "self incrimination"],
        title: "Article 20 — protection in respect of conviction for offences",
        summary: "Three criminal-process shields: no ex post facto crime/penalty, no double jeopardy, no compelled self-incrimination. Mnemonic EDS. Unsuspendable in Emergency.",
        explainer: `<p><strong>20(1) ex post facto:</strong> no conviction for an act that was not an offence at the time it was done; no greater penalty than then applicable. Civil disabilities are not “penalties” in the same way; tax with retrospective operation is a different animal — don’t over-extend. <em>Rao Shiv Bahadur Singh</em>; <em>Kedar Nath v State of W.B.</em> on procedure vs punishment. Beneficial retrospective reduction of sentence can operate (the shield is against harsher criminal law).</p>
        <p><strong>20(2) double jeopardy:</strong> no prosecution and punishment for the same offence more than once. Need: (i) previous prosecution, (ii) punishment, (iii) same offence (not merely same facts — <em>Maqbool Hussain</em> customs confiscation ≠ prosecution; <em>Venkataraman</em>). Compare CrPC 300 / now BNSS equivalent conceptually. Departmental proceeding + criminal trial can coexist.</p>
        <p><strong>20(3) self-incrimination:</strong> accused person; no compulsion to be a witness against himself. <em>State of Bombay v Kathi Kalu Oghad</em>: fingerprints, specimen signatures, blood — physical evidence vs testimonial compulsion. <em>Nandini Satpathy</em>: questioning zone. <em>Selvi v State of Karnataka</em>: narco, polygraph, BEAP cannot be compelled. Modern electronic devices: still developing — don’t fake a 2026 holding.</p>
        <p>Person, not only citizen. Applies to criminal accusations, not every civil interrogatory.</p>`,
        analogy: {
          title: "EDS — three kernel locks",
          body: "Ex post facto = you cannot hot-patch a crime onto yesterday’s logs. Double jeopardy = a process cannot be SIGKILL’d and restarted for the same offence after punishment. Self-incrimination = the accused is not a writable API the State may force to dump memory."
        },
        diagram: {
          type: "compare",
          headers: ["Clause", "Shield", "Watch-out"],
          rows: [
            ["20(1)", "No new offence / higher penalty after the act", "Not a bar on all retrospectivity"],
            ["20(2)", "No second prosecution+punishment for same offence", "Same offence ≠ same facts always"],
            ["20(3)", "No testimonial compulsion of accused", "Physical evidence / Kathi Kalu; Selvi"]
          ]
        },
        mnemonic: {
          name: "EDS",
          hook: "Ex post facto · Double jeopardy · Self-incrimination.",
          recite: "Art. 20 is person-centric and Emergency-proof (with 21). Three clauses, three case-hooks."
        },
        cases: [
          { name: "Maqbool Hussain v State of Bombay", citation: "AIR 1953 SC 325", point: "Customs authority not a ‘court’ for 20(2) in that setting." },
          { name: "State of Bombay v Kathi Kalu Oghad", citation: "AIR 1961 SC 1808", point: "Handwriting/fingerprints not 20(3) testimony." },
          { name: "Selvi v State of Karnataka", citation: "(2010) 7 SCC 263", point: "Involuntary narco/polygraph unconstitutional." },
          { name: "Nandini Satpathy v P.L. Dani", citation: "(1978) 2 SCC 424", point: "Compelled testimony and interrogation." }
        ],
        pyqs: [
          {
            year: "2022",
            section: "B",
            marks: "10",
            q: "Double jeopardy.",
            outline: ["20(2) ingredients; Maqbool Hussain; same offence; CrPC cousin; departmental vs criminal."]
          }
        ],
        check: [
          "EDS in order with one case each.",
          "Why 20 cannot be suspended.",
          "Kathi Kalu vs Selvi distinction."
        ]
      },
      {
        id: "c-21",
        seq: 7,
        readAs: "Unit 3 — Art. 21 home (privacy drill is a sibling)",
        unit: 3,
        yield: "high",
        tags: ["article 21", "maneka", "privacy", "environment", "gopalan"],
        title: "Article 21 — life and personal liberty",
        summary: "The growing package manager of Indian public law. Post-Maneka, procedure must be just, fair and reasonable, and ‘life’ is more than animal existence.",
        explainer: `<p><strong>Text:</strong> No person shall be deprived of his life or personal liberty except according to procedure established by law.</p>
        <p><strong>Gopalan (1950):</strong> silos — 21 is not due process; 19 and 21 don’t overlap; any legally enacted procedure enough. <strong>Maneka Gandhi (1978):</strong> procedure must be fair, just, reasonable; Arts. 14, 19, 21 are a golden triangle; passport impoundment without hearing failed. This is the single most important constitutional holding in K-1002.</p>
        <p><strong>Francis Coralie Mullin:</strong> life includes dignity, bare necessaries, not animal existence. Then the package installs:</p>
        <ul>
          <li>Livelihood — <em>Olga Tellis</em> (pavement dwellers; procedure still mattered).</li>
          <li>Health — <em>Paschim Banga</em>, <em>Consumer Education</em> lines.</li>
          <li>Environment — <em>Subhash Kumar</em>, <em>M.C. Mehta</em>, <em>Vellore</em> (precautionary / polluter pays as public-law cousins).</li>
          <li>Education as 21 before 21A — <em>Unni Krishnan</em> (later recalibrated by 21A / 86th Amendment).</li>
          <li>Speedy trial — <em>Hussainara Khatoon</em>.</li>
          <li>Privacy — <em>K.S. Puttaswamy</em> (2017) 9-judge: privacy is an FR; overrules stray M.P. Sharma / Kharak Singh notes; tests of legality, necessity, proportionality.</li>
          <li>Death penalty restricted — <em>Bachan Singh</em> rarest of rare (also 14/21).</li>
          <li>LGBTQ dignity — <em>Navtej Johar</em>; transgender rights — <em>NALSA</em>.</li>
        </ul>
        <p>Do not write a catalogue without a thesis: 21 is the site where natural-law energy re-entered a positivist clause. Counter: democratic deficit / judicial legislation. For 20-markers, pick 4–5 expansions that match the question (environment if asked, privacy if asked, don’t dump all 40).</p>`,
        analogy: {
          title: "21 is a growing package manager",
          body: "Gopalan pinned version 0.1: ‘procedure established by law’ as a mere import statement. Maneka ran npm audit and required just-fair-reasonable. Each landmark case npm-installs a sub-package: privacy, environment, livelihood. Puttaswamy is a major version bump with a proportionality lockfile."
        },
        diagram: {
          type: "flow",
          steps: ["Gopalan silo", "Maneka golden triangle", "Dignity (Francis Coralie)", "Livelihood / health / environment", "Privacy (Puttaswamy)"]
        },
        mnemonic: {
          name: "LIFE ≠ ANIMAL EXISTENCE",
          hook: "Maneka = due-process-in-substance. Golden triangle 14-19-21.",
          recite: "Person (not only citizen). Procedure just, fair, reasonable. Name four expansion cases + Puttaswamy if privacy/dignity asked."
        },
        cases: [
          { name: "A.K. Gopalan v State of Madras", citation: "AIR 1950 SC 27", point: "Old silo reading." },
          { name: "Maneka Gandhi v Union of India", citation: "(1978) 1 SCC 248", point: "Fair, just, reasonable procedure; 14-19-21." },
          { name: "Francis Coralie Mullin", citation: "(1981) 1 SCC 608", point: "Dignity / not animal existence." },
          { name: "K.S. Puttaswamy v Union of India", citation: "(2017) 10 SCC 1", point: "Privacy as FR." },
          { name: "Olga Tellis v Bombay Municipal Corpn", citation: "(1985) 3 SCC 545", point: "Livelihood." }
        ],
        pyqs: [
          {
            year: "Dec 2024",
            section: "C",
            marks: "20",
            q: "Expanding horizons of Right to Life and Personal Liberty with cases.",
            outline: ["Text; Gopalan→Maneka; dignity; 4 expansions matching likely sub-themes; critique of judicial overreach; 20/21 unsuspendable."]
          },
          {
            year: "2022",
            section: "B",
            marks: "10",
            q: "Environment protection via Art. 21.",
            outline: ["Subhash Kumar; Mehta; Vellore; 48A/51A(g) as interpretive allies not substitutes."]
          }
        ],
        check: [
          "Gopalan vs Maneka in six lines.",
          "Five named expansions.",
          "Puttaswamy three-step (legality, necessity, proportionality)."
        ]
      },
      {
        id: "c-21a",
        seq: 8,
        readAs: "Kumar ch. 10 — Right to Education",
        unit: 3,
        yield: "high",
        tags: ["21a", "rte", "86th amendment", "unnikrishnan"],
        title: "Article 21A — Right to Education",
        summary: "86th Amendment (2002) pins free and compulsory education of children aged 6–14 as an FR. Unni Krishnan built the ramp via 21; RTE Act 2009 is the implementing statute. Dec 2024 Sec A.",
        explainer: `<p><strong>Timeline (write this first):</strong> (1) original DPSP <strong>Art. 45</strong> — State shall endeavour to provide free and compulsory education for all children until they complete 14 years; (2) <em>Mohini Jain</em> (1992) treated capitation as offending the right to education read into 21; (3) <em>Unni Krishnan v State of A.P.</em> (1993) — education up to 14 is part of life under 21, but higher education is not an FR in the same way and can be regulated; (4) <strong>86th Constitutional Amendment, 2002</strong> — inserts <strong>Art. 21A</strong>, recasts 45 toward early childhood care and education for children below 6, and adds Fundamental Duty <strong>51A(k)</strong> (parent/guardian to provide opportunities for education to the child between 6 and 14); (5) <strong>RTE Act 2009</strong> (in force 1 Apr 2010) is the “as the State may, by law, determine” payload.</p>
        <p><strong>Text of 21A:</strong> the State shall provide free and compulsory education to all children of the age of six to fourteen years in such manner as the State may, by law, determine. It is a justiciable FR, not a leftover Directive — but the clause hands the <em>content</em> (neighbourhood school, pupil–teacher ratio, 25% intake) to statute. Quality vs mere enrolment is the policy critique; do not write that 21A itself lists the 25% quota.</p>
        <p><strong>RTE Act 2009 working kit:</strong> neighbourhood schools; no capitation / screening at entry for the 6–14 band; 25% seats in private unaided schools for children from weaker and disadvantaged groups (s.12(1)(c)), with reimbursement; norms for teachers and infrastructure. <em>Society for Unaided Private Schools of Rajasthan v Union of India</em> (2012) largely upheld 12(1)(c) for non-minority unaided schools. <em>Pramati Educational &amp; Cultural Trust</em> (2014) held that RTE’s 12(1)(c) does not apply to minority schools (aided or unaided) because of Art. 30 — flag the inclusion tension; do not pick a political fight, pick the holding.</p>
        <p><strong>Exam close:</strong> 21A converted a Directive into an FR; 45 still covers 0–6; 51A(k) is the parent hook. Higher education remains 21/19(1)(g) regulatory terrain, not 21A.</p>`,
        analogy: {
          title: "21A is a pinned dependency of 21",
          body: "Education was a transitive dependency of life. 21A pins it as a first-party FR for ages 6–14, with RTE Act as the implementing package. 51A(k) is the parent-side hook."
        },
        diagram: { type: "flow", steps: ["DPSP 45 (old)", "Mohini Jain / Unni Krishnan via 21", "86th Amendment → 21A + recast 45 + 51A(k)", "RTE Act 2009", "Unaided 12(1)(c) vs Pramati minority carve-out"] },
        mnemonic: {
          name: "6–14 / 86th / RTE 2009",
          hook: "Free + compulsory; State-by-law; parent duty 51A(k).",
          recite: "21A is an FR, not a DPSP. Minority-institution tension is the advanced paragraph."
        },
        cases: [
          { name: "Unni Krishnan v State of A.P.", citation: "(1993) 1 SCC 645", point: "Education via 21 before 21A." },
          { name: "Society for Unaided Private Schools v Union of India", citation: "(2012) 6 SCC 1", point: "RTE 12(1)(c) largely upheld; minority caveat path." },
          { name: "Pramati Educational & Cultural Trust", citation: "(2014) 8 SCC 1", point: "Minority institutions and RTE." }
        ],
        pyqs: [
          {
            year: "Dec 2024",
            section: "A",
            marks: "4",
            q: "Right to Education.",
            outline: ["21A; 86th Amendment; 6–14; RTE 2009; link 45 and 51A(k)."]
          }
        ],
        check: ["Age band and amendment number.", "RTE as implementing law.", "One minority-institution case."]
      },
      {
        id: "c-23-24",
        seq: 9,
        readAs: "Kumar ch. 11 — Right against Exploitation",
        unit: 3,
        yield: "high",
        tags: ["23", "24", "begar", "child labour", "trafficking"],
        title: "Right against exploitation — Articles 23–24",
        summary: "23 kills traffic in persons, begar and forced labour (public-service exception). 24 bars hazardous child labour under 14. Horizontal social FRs — PUDR, Bandhua, child-labour statutes.",
        explainer: `<p><strong>Art. 23(1):</strong> traffic in human beings, <em>begar</em>, and other similar forms of forced labour are prohibited; any contravention is an offence punishable by law. <em>Begar</em> is work without payment — the old corvée — but the Court did not freeze it as a museum word. <strong>Art. 23(2):</strong> the State may impose compulsory service for public purposes, without discrimination on religion, race, caste or class (conscription / social service flavour). That exception is the State’s, not a private employer’s.</p>
        <p><strong>Forced labour is wider than chains:</strong> <em>People’s Union for Democratic Rights v Union of India</em> (Asiad workers, 1982) — paying less than the minimum wage is forced labour; economic compulsion plus a legal duty to pay the floor wage. The right is <strong>horizontal</strong>: it binds private contractors, not only ‘State’ under 12. <em>Bandhua Mukti Morcha v Union of India</em> (1984) — bonded labour; the Court treated PIL letters as petitions and kept supervising identification and rehabilitation under the Bonded Labour System (Abolition) Act, 1976. Trafficking is the human-commodity sibling — Immoral Traffic statutes / BNS trafficking offences are the criminal teeth; 23 is the constitutional hook.</p>
        <p><strong>Art. 24:</strong> no child below the age of fourteen years shall be employed to work in any factory or mine or engaged in any other hazardous employment. It does not, by itself, ban every after-school errand; the constitutional floor is <em>hazardous</em> employment. The Child Labour (Prohibition and Regulation) Act, 1986 (amended 2016) and the RTE Act together: a child who should be in school under 21A should not be in a hazardous process. <em>M.C. Mehta v State of T.N.</em> (child labour in match-works) is the classic enforcement story — off hazardous work, into education, with a contribution corpus. Family/non-hazardous statutory greys exist; in the hall stay with 24’s text + the Act + Mehta, and do not invent a complete ban on all child work.</p>
        <p>These are social FRs (Duguit/Pound flavour) and they bind private persons more clearly than Art. 19. Pair 24 with 21A/51A(k) in a 10-marker.</p>`,
        analogy: {
          title: "Forced labour is a stuck thread",
          body: "23 forbids conscripting private CPU without lawful public-purpose statute. Paying below minimum wage is still forced labour (PUDR) — like an infinite loop with no consideration. 24 is an age-gate on hazardous production."
        },
        diagram: { type: "compare", headers: ["Article", "Core ban", "Key case / statute"], rows: [["23", "Trafficking, begar, forced labour", "PUDR; Bonded Labour Act"], ["24", "Hazardous child work <14", "Child labour statutes + RTE"]] },
        mnemonic: { name: "23 FORCE / 24 CHILD", hook: "Begar ≠ only historical corvée; underpayment counts.", recite: "Horizontal social rights. Public compulsory service is the 23 exception." },
        cases: [
          { name: "PUDR v Union of India", citation: "(1982) 3 SCC 235", point: "Below-minimum-wage labour as forced labour; horizontal." },
          { name: "Bandhua Mukti Morcha v Union of India", citation: "(1984) 3 SCC 161", point: "Bonded labour; PIL enforcement." },
          { name: "M.C. Mehta v State of Tamil Nadu", citation: "(1996) 6 SCC 756", point: "Child labour in hazardous match-works; education + corpus." }
        ],
        pyqs: [
          { year: "theme", section: "B", marks: "10", q: "Right against exploitation.", outline: ["23 text + 23(2) exception; PUDR begar; Bandhua; 24 + CLPRA + Mehta; horizontality and 21A overlap."] }
        ],
        check: ["PUDR holding in one line.", "24 age, hazard, and a statute.", "23 public-service exception."]
      },
      {
        id: "c-25-28",
        seq: 10,
        readAs: "Kumar ch. 12 — Freedom of Religion",
        unit: 3,
        yield: "high",
        tags: ["religion", "25", "26", "27", "28", "essential practices", "secularism"],
        title: "Freedom of religion — Articles 25–28",
        summary: "Secularism Indian-style: equal respect, not a wall of hostility. 25 is individual; 26 is denominational; 27–28 police money and classrooms.",
        explainer: `<p><strong>Art. 25:</strong> freedom of conscience and the right freely to profess, practise and propagate religion, subject to public order, morality, health, and other Part III provisions. State may regulate economic/political/secular activity associated with religion and may provide for social welfare and reform (including throwing open Hindu institutions of a public character to all classes and sections — 25(2)(b)).</p>
        <p><strong>Essential religious practices:</strong> courts decide what is essential to the religion (<em>Shirur Mutt</em> origin; later <em>Ananda Marg</em>, <em>Sabarimala</em> 2018, review pending as of older notes — write the doctrine and the controversy without pretending the 2026 Gyanvapi/whatever headline is a holding). Critique: judges as theologians.</p>
        <p><strong>Art. 26:</strong> every religious denomination (or section) — establish institutions, manage its own affairs in matters of religion, own property, administer property per law. <em>Shirur Mutt</em> on ‘denomination.’</p>
        <p><strong>Art. 27:</strong> no tax the proceeds of which are specifically appropriated for promotion of a particular religion.</p>
        <p><strong>Art. 28:</strong> no religious instruction in wholly State-funded schools; rules for other institutions; no compulsory attendance at worship for those attending State-recognised/funded institutions without consent.</p>
        <p>Secularism as basic feature (<em>Bommai</em>): the State has no religion; equal treatment. Not French laïcité. Propagation ≠ forced conversion; anti-conversion statutes must still clear 25 + 14 reasonableness if asked.</p>`,
        analogy: {
          title: "25 is user freedom; 26 is org settings",
          body: "Conscience is per-user. Denomination is the tenant organisation with its own admin console (26), still subject to the platform’s acceptable-use policy (public order, morality, health, reform). 28 is the school district’s no-required-plugin rule."
        },
        diagram: {
          type: "compare",
          headers: ["Article", "Whose right", "Limit / hook"],
          rows: [
            ["25", "Individual (all persons)", "POMH + Part III; reform clause"],
            ["26", "Denomination", "Law on property administration"],
            ["27", "Taxpayer", "No earmarked religious tax"],
            ["28", "Student / institution type", "State-funded instruction ban"]
          ]
        },
        mnemonic: {
          name: "P-P-P + DENOMINATION",
          hook: "Profess, practise, propagate. 26 manages the sect. Essential-practices is the judicial filter.",
          recite: "Indian secularism = principled distance, not anti-religion. Shirur Mutt + Bommai."
        },
        cases: [
          { name: "Commissioner, Hindu Religious Endowments v Shirur Mutt", citation: "AIR 1954 SC 282", point: "Religion and denomination; essential practices seed." },
          { name: "S.R. Bommai", citation: "(1994) 3 SCC 1", point: "Secularism basic feature." },
          { name: "Indian Young Lawyers Assn v State of Kerala (Sabarimala)", citation: "(2019) 11 SCC 1", point: "Equality vs essential practice — show you know the clash." },
          { name: "Bijoe Emmanuel v State of Kerala", citation: "(1986) 3 SCC 615", point: "Jehovah’s Witnesses and national anthem — conscience." }
        ],
        pyqs: [
          {
            year: "Dec 2024",
            section: "C",
            marks: "20",
            q: "Religious freedom under Art. 25 with cases.",
            outline: ["Text + limits; profess/practise/propagate; 25(2) reform; essential practices; two cases; secularism landing."]
          }
        ],
        check: ["25 vs 26.", "25(2)(b) reform.", "Four articles in one line each."]
      },
      {
        id: "c-29-30",
        seq: 11,
        readAs: "Kumar ch. 13 — Cultural &amp; educational rights",
        unit: 3,
        yield: "high",
        tags: ["minorities", "29", "30", "tma pai"],
        title: "Cultural and educational rights of minorities — Articles 29–30",
        summary: "29 protects language/script/culture and bars admission discrimination in State-funded institutions. 30 is the minority institution right — a CCS long-question regular.",
        explainer: `<p><strong>Art. 29(1):</strong> any section of citizens with a distinct language, script or culture — right to conserve it. Not only religious minorities; linguistic sections too. <strong>29(2):</strong> no citizen denied admission into State-maintained or State-aided institutions on religion, race, caste, language.</p>
        <p><strong>Art. 30(1):</strong> all minorities, religious or linguistic, may establish and administer educational institutions of their choice. 30(1A) (44th) compensation when property of minority institutions is acquired. 30(2): no discrimination in aid on the ground that it is minority-managed.</p>
        <p><strong>Who is a minority:</strong> State-wise numerical test is the usual exam answer (<em>T.M.A. Pai</em> — minority status vis-à-vis State). National vs State controversies exist; don’t overclaim.</p>
        <p><strong>Administer ≠ maladminister:</strong> reasonable regulations on hygiene, qualifications, standards, excellence (<em>St. Xavier’s</em>, <em>T.M.A. Pai</em>, <em>P.A. Inamdar</em>, <em>Islamic Academy</em>). Unaided minority institutions have greater autonomy on admissions (no State quota) but cannot ignore merit/transparency. RTE tension: <em>Pramati</em> exemption.</p>
        <p>29(2) vs 30: aid may bring 29(2) non-discrimination; the exact mix is case-sensitive — show the tension.</p>`,
        analogy: {
          title: "Tenant orgs with a cultural SLA",
          body: "Minority institutions are tenants with a constitutional charter to run their own schools. The State can enforce uptime, safety, and teacher qualifications; it cannot hijack the admin password. Aid is optional funding that comes with some platform policies (29(2))."
        },
        diagram: { type: "flow", steps: ["Is there a religious/linguistic minority in the State?", "Establish + administer (30)", "Reasonable regulation for excellence", "Aid? then 30(2) + 29(2) tension"] },
        mnemonic: { name: "CONSERVE / ESTABLISH-ADMINISTER", hook: "29 culture + admission. 30 minority schools.", recite: "T.M.A. Pai is the 21st-century hub case. Regulation ≠ annihilation." },
        cases: [
          { name: "T.M.A. Pai Foundation v State of Karnataka", citation: "(2002) 8 SCC 481", point: "Minority vis-à-vis State; autonomy vs regulation." },
          { name: "P.A. Inamdar v State of Maharashtra", citation: "(2005) 6 SCC 537", point: "Unaided professional institutions; no State quota by fiat." },
          { name: "St. Xavier’s College v State of Gujarat", citation: "(1974) 1 SCC 717", point: "Classic administer-not-maladminister." }
        ],
        pyqs: [
          {
            year: "Dec 2024",
            section: "B",
            marks: "10",
            q: "Cultural and Educational Rights of minorities (Arts. 29–30) with cases.",
            outline: ["29(1)(2); 30; minority definition; Pai/Inamdar; reasonable restrictions; RTE caveat."]
          }
        ],
        check: ["State-wise minority.", "30 vs reasonable regulation.", "29(2) admission rule."]
      },
      {
        id: "c-32",
        seq: 12,
        readAs: "Unit 3 — Art. 32 / PIL home (five writs are a drill)",
        unit: 3,
        yield: "high",
        tags: ["article 32", "writs", "pil", "hmpc q"],
        title: "Article 32 — right to constitutional remedies",
        summary: "The SC is the guarantor port. Five writs (HMPCQ) plus PIL’s liberal standing — and the ‘floodgates’ critique CCS loves.",
        explainer: `<p>Art. 32 is itself an FR: the right to move the Supreme Court for enforcement of Part III. Ambedkar: “heart and soul.” The Court <em>shall</em> have power to issue directions, orders, writs including habeas corpus, mandamus, prohibition, certiorari, quo warranto. Art. 226 is the High Court cousin (wider — even for non-FR legal rights). 32 is not for every grievance; it is for FRs. Alternative remedy is a weaker bar here than in 226.</p>
        <p><strong>Writs:</strong></p>
        <ul>
          <li><strong>Habeas corpus</strong> — produce the body; illegal detention.</li>
          <li><strong>Mandamus</strong> — command a public authority to do a public duty.</li>
          <li><strong>Prohibition</strong> — stop an inferior court/tribunal from exceeding jurisdiction (preventive).</li>
          <li><strong>Certiorari</strong> — quash a decision already made (curative); jurisdictional error, error of law apparent, violation of NJ.</li>
          <li><strong>Quo warranto</strong> — by what authority do you hold this public office?</li>
        </ul>
        <p><strong>PIL:</strong> <em>S.P. Gupta</em>, <em>Judges’ Transfer</em>, <em>Bandhua</em>, letter petitions. Standing: any public-spirited person for the voiceless. Directions as continuing mandamus. <strong>Floodgates / critique:</strong> Dec 2024 20-marker — PIL as populism, evidential slack, judicial governance, delayed adversarial rights of respondents, later SC efforts to regulate (<em>State of Uttaranchal v Balwant Singh Chaufal</em> guidelines). Write both the romance and the audit.</p>
        <p>Art. 32 cannot be suspended as to 20/21 (see 359 after 44th). <em>L. Chandra Kumar</em>: judicial review is basic feature — tribunals cannot oust HC/SC.</p>`,
        analogy: {
          title: "SC = guarantor port",
          body: "32 is a privileged localhost on the constitutional host. Writs are verbs: GET body (habeas), PUT duty (mandamus), BLOCK (prohibition), DELETE order (certiorari), WHOIS office (quo warranto). PIL opened anonymous bug-bounty reports — floodgates are the spam problem."
        },
        diagram: { type: "tree", root: "Art. 32", branches: ["Habeas", "Mandamus", "Prohibition", "Certiorari", "Quo warranto"] },
        mnemonic: { name: "HMPCQ (“Hump-CQ”)", hook: "Heart and soul. PIL = liberalised standing with a floodgates footnote.", recite: "32 is an FR to enforce FRs. 226 is wider. Five writs + critique of PIL." },
        cases: [
          { name: "S.P. Gupta v Union of India", citation: "AIR 1982 SC 149", point: "PIL standing." },
          { name: "Bandhua Mukti Morcha", citation: "(1984) 3 SCC 161", point: "Letter petition / bonded labour." },
          { name: "L. Chandra Kumar v Union of India", citation: "(1997) 3 SCC 261", point: "Judicial review basic feature." },
          { name: "State of Uttaranchal v Balwant Singh Chaufal", citation: "(2010) 3 SCC 402", point: "PIL regulation guidelines." }
        ],
        pyqs: [
          {
            year: "Dec 2024",
            section: "C",
            marks: "20",
            q: "PIL has opened a floodgate as constitutional remedy — Explain with cases.",
            outline: ["32 text; traditional standing; Gupta/Bandhua; successes (environment, bonded labour); floodgates critique; Chaufal guidelines; balanced close."]
          }
        ],
        check: ["Five writs with one use each.", "32 vs 226.", "One PIL success + one critique."]
      },
      {
        id: "c-dpsp",
        seq: 13,
        readAs: "Kumar ch. 16 — Directive Principles",
        unit: 4,
        yield: "high",
        tags: ["dpsp", "minerva mills", "champakam", "harmony"],
        title: "Directive Principles — importance and relationship with FRs",
        summary: "Part IV is the policy compiler: non-justiciable but fundamental in governance (Art. 37). After decades of duel, Minerva Mills requires merge-commits with Part III.",
        explainer: `<p>Arts. 36–51. Social-economic programme: adequate means of livelihood, equal pay, health, environment (48A), monument protection, international law (51), uniform civil code (44), village panchayats (40), alcohol (47), cow (48) — name clusters, don’t recite all.</p>
        <p><strong>Art. 37:</strong> not enforceable in court, but fundamental in the governance of the country; a duty to apply in making laws. Importance: they constitutionalise social revolution (Austin); they license welfare statutes; they interpret FRs (21’s environment reads 48A; 39(a)(b)(c) and 31C story).</p>
        <p><strong>Relationship with FRs — the saga:</strong></p>
        <ol>
          <li><em>Champakam Dorairajan</em> (1951): FR wins; DPSP cannot override. → 1st Amendment (15(4)).</li>
          <li>Art. 31C (25th) immunising laws giving effect to 39(b)(c); <em>Kesavananda</em> upheld 31C in original narrower form; 42nd tried to expand 31C to all DPSPs; <em>Minerva Mills</em> (1980) struck the expansion — harmony, not DPSP supremacy. “The Indian Constitution is founded on the bedrock of the balance between Part III and Part IV.”</li>
          <li>Later: DPSPs as interpretive allies (<em>Unni Krishnan</em>, environment cases); 31C still exists for 39(b)(c) (post-<em>Waman Rao</em> / property fights — keep light).</li>
        </ol>
        <p>Write the exam thesis: FRs = enforceable methods / trumps against the State; DPSPs = goals; courts prefer harmonious construction; Parliament may adjust via amendment subject to basic structure.</p>`,
        analogy: {
          title: "FR = methods; DPSP = goals; merge commits",
          body: "Part III is the test suite the State must pass. Part IV is the product roadmap. Champakam treated roadmap vs tests as a duel. Minerva Mills requires CI: you cannot delete the tests to ship the roadmap faster, nor freeze v1 tests so the roadmap can never land."
        },
        diagram: {
          type: "flow",
          steps: ["Champakam: FR wins", "1st Amendment", "31C / Kesavananda", "42nd expansion", "Minerva Mills: harmony"]
        },
        mnemonic: {
          name: "37 DUTY / 32 SWORD",
          hook: "Not justiciable ≠ ornamental. Minerva Mills = balance is basic.",
          recite: "Art. 37 duty to apply. Relationship: conflict → amendment → harmony. Cite Champakam and Minerva Mills."
        },
        cases: [
          { name: "State of Madras v Champakam Dorairajan", citation: "AIR 1951 SC 226", point: "FR over DPSP." },
          { name: "Minerva Mills v Union of India", citation: "(1980) 3 SCC 625", point: "Harmony; striking wide 31C." },
          { name: "Kesavananda Bharati", citation: "(1973) 4 SCC 225", point: "31C original; basic structure." }
        ],
        pyqs: [
          {
            year: "Dec 2024",
            section: "B",
            marks: "10",
            q: "Relationship between FRs and DPSPs with cases.",
            outline: ["37; Champakam; amendments; Minerva Mills quote; interpretive use today."]
          }
        ],
        check: ["Art. 37 in one sentence.", "Three-stage relationship saga.", "Minerva Mills holding."]
      },
      {
        id: "c-duties",
        seq: 14,
        readAs: "Kumar ch. 17 — Fundamental Duties",
        unit: 5,
        yield: "high",
        tags: ["51a", "fundamental duties", "42nd"],
        title: "Fundamental Duties — Article 51A",
        summary: "42nd Amendment added (a)–(j); 86th added (k). Not a self-executing sword, but courts read them with FRs and DPSPs. Dec 2024: any four Duties — list them cleanly.",
        explainer: `<p><strong>Origin:</strong> Swaran Singh Committee; inserted by the <strong>42nd Amendment, 1976</strong> as Art. 51A (a)–(j). The <strong>86th Amendment, 2002</strong> added <strong>(k)</strong>. They sit in Part IVA. They are <em>not</em> FRs in reverse and not directly justiciable — no writ that says “I sue you solely because 51A exists” — but they are not decoration. Statutes give teeth (Prevention of Insults to National Honour; environment law; BNS mischief to public property). Courts use 51A as an <strong>interpretive aid</strong> when reading 21, 48A, education, and excellence in public institutions.</p>
        <p><strong>The list (Dec 2024 “any four” — pick four you can quote, know all eleven):</strong></p>
        <ol type="a">
          <li>abide by the Constitution and respect its ideals and institutions, the National Flag and the National Anthem;</li>
          <li>cherish and follow the noble ideals which inspired our national struggle for freedom;</li>
          <li>uphold and protect the sovereignty, unity and integrity of India;</li>
          <li>defend the country and render national service when called upon to do so;</li>
          <li>promote harmony and the spirit of common brotherhood amongst all the people of India, and renounce practices derogatory to the dignity of women;</li>
          <li>value and preserve the rich heritage of our composite culture;</li>
          <li>protect and improve the natural environment (forests, lakes, rivers, wildlife) and have compassion for living creatures;</li>
          <li>develop the scientific temper, humanism and the spirit of inquiry and reform;</li>
          <li>safeguard public property and to abjure violence;</li>
          <li>strive towards excellence in all spheres of individual and collective activity so that the nation constantly rises to higher levels of endeavour and achievement;</li>
          <li>(86th) a parent or guardian to provide opportunities for education to his child or, as the case may be, ward between the age of six and fourteen years.</li>
        </ol>
        <p><strong>How they bite:</strong> <em>Rural Litigation</em> / <em>M.C. Mehta</em> environment line pairs <strong>51A(g) + 48A + 21</strong>. <em>AIIMS Students’ Union v AIIMS</em> used the excellence duty in reasoning. <em>Honourable mention:</em> a duty cannot, by itself, authorise a criminal conviction without a statute that defines the offence. <em>Ranganath Mishra</em> / later reports: civic education over prosecution. Relation to FRs: civic republicanism — rights last longer when the culture of duties is not empty.</p>`,
        analogy: {
          title: "Code of conduct, not a syscall",
          body: "Duties are CONTRIBUTING.md. You rarely get a kernel panic solely from 51A, but linters (courts) and extra packages (statutes) reference it. 51A(k) is the parent hook that matches 21A."
        },
        diagram: { type: "tree", root: "51A duties", branches: ["Constitution/flag", "Unity/defence", "Harmony/women", "Environment/science", "Public property", "Parents (k)"] },
        mnemonic: { name: "TEN + K", hook: "(a)–(j) from 42nd; (k) from 86th.", recite: "Non-justiciable directly; interpretive + statutory teeth. Always pair (g) with 21/48A." },
        cases: [
          { name: "Rural Litigation & Entitlement Kendra / Mehta environment line", citation: "Art. 21 + 48A + 51A(g)", point: "Duties as interpretive allies." },
          { name: "AIIMS Students’ Union v AIIMS", citation: "(2002) 1 SCC 428", point: "Excellence / 51A used in reasoning." }
        ],
        pyqs: [
          { year: "Dec 2024", section: "A", marks: "4", q: "Any four Fundamental Duties.", outline: ["Quote four accurately; mention 42nd/86th."] },
          { year: "2022", section: "B", marks: "10", q: "Fundamental Duties.", outline: ["Origin; list clusters; justiciability; 51A(g)+(k); relation to FRs."] }
        ],
        check: ["Four duties quoted, not paraphrased vaguely.", "42nd vs 86th.", "Not independently enforceable; 51A(g)+21+48A."]
      },
      {
        id: "c-art12-state",
        seq: 3.2,
        readAs: "Drill — Art. 12 ‘State’ unpack (from FR map)",
        unit: 3,
        yield: "high",
        tags: ["article 12", "state", "other authorities", "instrumentality"],
        title: "State under Article 12",
        summary: "FRs generally bind the ‘State’. If the duty-bearer is not State, most of Part III does not fire. CCS essays die when you skip the tests.",
        explainer: `<p><strong>Text:</strong> State includes (i) Government and Parliament of India, (ii) Government and Legislature of each State, (iii) all local or other authorities within the territory of India or under the control of the Government of India. The fight is always “other authorities.”</p>
        <p><strong>Case ladder:</strong> <em>Rajasthan Electricity Board</em> — statutory corporations with power to make binding rules can be State. <em>Sukhdev Singh</em> — LIC/ONGC/IFC. <em>Ramana Dayaram Shetty</em> — instrumentality / agency; functional tests. <em>Ajay Hasia</em> — six-factor checklist (share capital, financial assistance, monopoly, deep and pervasive control, public function, department-transfer). <em>Pradeep Kumar Biswas</em> (seven-judge) — the decisive question is whether the body is functionally, financially and administratively dominated by government so that it is an instrumentality. Societies and companies can be in or out on facts.</p>
        <p><strong>Not automatically State:</strong> every aided private college; BCCI was held not State in <em>Zee Telefilms</em> (but still amenable to 226 on other theories — mention, don’t confuse 12 with 226). Judiciary acting judicially is not ‘State’ for the purpose of being sued for a ‘law’ under 13 in the ordinary sense; administrative side can be.</p>
        <p><strong>Horizontal pockets:</strong> Arts. 15(2), 17, 23, 24 bind private persons in terms. <em>Puttaswamy</em> privacy is primarily vertical. Do not write that every private WhatsApp group is Art. 12.</p>
        <p><strong>Why it matters:</strong> writs, Art. 14 non-arbitrariness, 16 employment, campus admissions. A 10-marker should be tests + two cases + one exclusion.</p>`,
        analogy: {
          title: "Identity provider for Part III",
          body: "Art. 12 is the IdP. If the actor is not in the IdP directory (instrumentality tests), most FR middleware will not authenticate the claim. 226 is a wider SSH path; 12 is the FR SSO."
        },
        diagram: {
          type: "vflow",
          steps: ["Text: govt / legislature / local / other authorities", "Statutory corporation? binding power?", "Instrumentality: finance + control + public function", "If yes → FR duties; if no → maybe 226 only"]
        },
        mnemonic: {
          name: "GOV-LEG-LOCAL-OTHER",
          hook: "Ajay Hasia factors; Biswas control. BCCI ≠ 12.",
          recite: "Other authorities = instrumentalities of the State. Tests: deep control, finance, public function. Horizontal FRs are listed exceptions."
        },
        cases: [
          { name: "Ajay Hasia v Khalid Mujib", citation: "(1981) 1 SCC 722", point: "Instrumentality checklist." },
          { name: "Pradeep Kumar Biswas v Indian Institute of Chemical Biology", citation: "(2002) 5 SCC 111", point: "Control test restated by a larger bench." },
          { name: "Zee Telefilms v Union of India", citation: "(2005) 4 SCC 649", point: "BCCI not State under 12." }
        ],
        pyqs: [
          {
            year: "theme",
            section: "B",
            marks: "10",
            q: "What is ‘State’ under Article 12? Discuss with cases.",
            outline: ["Quote 12; local vs other authorities; Ajay Hasia / Biswas; one exclusion; why it gates FRs."]
          }
        ],
        check: ["Recite the text’s four buckets.", "Three instrumentality tests.", "One body held not State."]
      },
      {
        id: "c-art13-doctrines",
        seq: 3.4,
        readAs: "Drill — eclipse / severability / waiver (from FR map)",
        unit: 3,
        yield: "high",
        tags: ["article 13", "eclipse", "severability", "waiver", "golaknath"],
        title: "Article 13 — eclipse, severability, waiver",
        summary: "Art. 13 is the voiding engine of Part III. Eclipse sleeps a pre-constitutional law; severability cuts the bad clause; waiver of FRs is generally refused.",
        explainer: `<p><strong>Art. 13(1):</strong> pre-constitutional laws inconsistent with Part III are void to the extent of inconsistency. <strong>13(2):</strong> State shall not make a law taking away/abridging FRs; any such post-constitutional law is void to the extent of contravention. <strong>13(3):</strong> ‘law’ includes ordinance, order, bye-law, rule, regulation, notification, custom or usage. <strong>13(4):</strong> nothing in 13 applies to constitutional amendments (inserted after the Golaknath scare; 24th Amendment). Know the story: <em>Golaknath</em> treated amendments as ‘law’ under 13; 24th Amendment + <em>Kesavananda</em> restored amendment power subject to basic structure, not 13.</p>
        <p><strong>Doctrine of eclipse:</strong> a pre-constitutional law inconsistent with an FR is not obliterated; it is <em>eclipsed</em> and unenforceable against persons who have the FR. If the shadow moves (amendment of the FR, or a claimant who is not a citizen for a citizen-only right), the law can revive. Classic: <em>Bhikaji Narain Dhakras</em> (pre-constitutional motor nationalisation vs Art. 19; 4th Amendment lifted the eclipse). Post-constitutional laws that violate FRs are stillborn — eclipse language is mainly for pre-1950 laws (exam nuance).</p>
        <p><strong>Severability:</strong> if the offending part can be cut without rewriting the statute’s scheme, the rest lives (<em>R.M.D. Chamarbaugwala</em> — prize competitions). Tests: can the good stand alone? did the legislature intend a single inseverable scheme? Court will not redraft.</p>
        <p><strong>Waiver:</strong> FRs are a matter of public policy, not a private bargain. <em>Basheshar Nath v CIT</em> — no waiver of Art. 14 even by a citizen who agreed. Distinguish contractual variation of ordinary rights.</p>
        <p>2022 CCS asked eclipse &amp; severability in a long question — table them; do not fuse.</p>`,
        analogy: {
          title: "Deprecated API vs delete vs user opt-out",
          body: "Eclipse = feature-flag the old API to sleep while the FR is in force; flip the flag and it can wake. Severability = delete one rotten function, keep the package. Waiver = users cannot opt out of the security policy (FRs)."
        },
        diagram: {
          type: "compare",
          headers: ["Doctrine", "What it does", "Typical raw material"],
          rows: [
            ["Eclipse", "Sleeps pre-1950 law under an FR shadow", "Bhikaji Narain"],
            ["Severability", "Cuts bad clause; rest lives", "Chamarbaugwala"],
            ["Waiver", "Citizen cannot bargain away FR", "Basheshar Nath"]
          ]
        },
        mnemonic: {
          name: "SLEEP / CUT / NO OPT-OUT",
          hook: "Eclipse sleeps. Severability cuts. Waiver refused.",
          recite: "13(1) pre; 13(2) post. 13(4) amendments out of 13. Golaknath was the scare; Kesavananda/24th the reset."
        },
        cases: [
          { name: "Bhikaji Narain Dhakras v State of M.P.", citation: "AIR 1955 SC 781", point: "Eclipse." },
          { name: "R.M.D. Chamarbaugwala v Union of India", citation: "AIR 1957 SC 628", point: "Severability." },
          { name: "Basheshar Nath v CIT", citation: "AIR 1959 SC 149", point: "No waiver of FRs." },
          { name: "I.C. Golaknath v State of Punjab", citation: "AIR 1967 SC 1643", point: "Amendments as ‘law’ — later undone as to Art. 13." }
        ],
        pyqs: [
          {
            year: "2022",
            section: "C",
            marks: "20",
            q: "Doctrine of eclipse and severability.",
            outline: ["13(1)/(2); eclipse with Bhikaji; severability with tests + Chamarbaugwala; contrast post-constitutional stillborn laws; waiver if time."]
          }
        ],
        check: ["Eclipse vs void ab initio.", "Two severability tests.", "Why 13(4) exists."]
      },
      {
        id: "c-emergency-fr",
        seq: 3.6,
        readAs: "Drill — Arts. 358–359 suspension (from FR map)",
        unit: 3,
        yield: "high",
        tags: ["emergency", "358", "359", "44th amendment", "adm jabalpur"],
        title: "Emergency suspension of Fundamental Rights",
        summary: "Art. 358 automatically suspends Art. 19 in a war/external-aggression Emergency. Art. 359 can suspend the right to move court — but 20 and 21 stay up after the 44th Amendment.",
        explainer: `<p><strong>Art. 358:</strong> while a Proclamation of Emergency (Art. 352) on war or external aggression is in operation, Art. 19 does not restrict the State. The 44th Amendment took <em>armed rebellion</em> (internal) off this automatic 19-suspension. Laws and executive actions that would otherwise offend 19 are protected during that window, with savings on when they must end.</p>
        <p><strong>Art. 359:</strong> the President may declare that the right to move any court for enforcement of specified FRs remains suspended. This is about the <em>remedy</em>, not a magical deletion of the right’s existence. <strong>44th Amendment:</strong> Arts. <strong>20 and 21 cannot be suspended</strong> under 359. That is the post-Emergency lock. Name it every time.</p>
        <p><strong>ADM Jabalpur v Shivkant Shukla</strong> (1976) — habeas corpus during Emergency: majority held even 21 could not be moved. Khanna J. dissented. The 44th Amendment is the political answer; <em>Puttaswamy</em> later recorded that ADM Jabalpur was wrongly decided. Write remorse + lock, not a defence of the majority.</p>
        <p><strong>Arts. 33–34:</strong> Parliament may restrict FRs of armed forces / forces charged with public order, and provide indemnity in martial-law areas. Different machine from 358/359.</p>
        <p>Dec 2024 short note: “Conditions for suspension of FRs.” Spine: 352 types; 358 vs 359; 44th; 20/21; ADM Jabalpur one line.</p>`,
        analogy: {
          title: "Maintenance window with two services pinned up",
          body: "358 is an automatic feature-flag that turns off the Art. 19 firewall during an external-war incident. 359 is a ticket that closes the helpdesk (court access) for listed FRs. 44th Amendment pinned Arts. 20 and 21 so they cannot be taken down even in incident response. ADM Jabalpur was the outage post-mortem."
        },
        diagram: {
          type: "compare",
          headers: ["", "Art. 358", "Art. 359"],
          rows: [
            ["What suspends", "Art. 19 itself (auto)", "Right to move court for listed FRs"],
            ["Trigger", "352 war / external aggression (post-44th)", "Presidential order"],
            ["20 & 21", "Not this article’s subject", "Cannot be suspended (44th)"]
          ]
        },
        mnemonic: {
          name: "358=19 AUTO · 359=COURT · 20/21 LOCK",
          hook: "Khanna J. + 44th Amendment.",
          recite: "Internal armed rebellion does not auto-kill 19 after 44th. Never write ADM Jabalpur as good law."
        },
        cases: [
          { name: "ADM Jabalpur v Shivkant Shukla", citation: "(1976) 2 SCC 521", point: "Overruled in substance; 44th locked 20/21." },
          { name: "K.S. Puttaswamy v Union of India", citation: "(2017) 10 SCC 1", point: "Expressly records ADM Jabalpur as wrong." }
        ],
        pyqs: [
          {
            year: "Dec 2024",
            section: "A",
            marks: "4",
            q: "Conditions for suspension of FRs.",
            outline: ["358 vs 359; 44th; 20 & 21 unsuspendable; war/external vs internal."]
          }
        ],
        check: ["358 vs 359 in a table.", "Which FRs cannot be suspended.", "ADM Jabalpur status in 2026."]
      },
      {
        id: "c-14-classification",
        seq: 4.2,
        readAs: "Drill — Art. 14 classification + Royappa (from equality home)",
        unit: 3,
        yield: "high",
        tags: ["article 14", "intelligible differentia", "nexus", "royappa"],
        title: "Article 14 — reasonable classification (intelligible differentia)",
        summary: "Equals must be treated equally. Classification is allowed if there is an intelligible differentia and a rational nexus to the object. Royappa adds: no arbitrariness.",
        explainer: `<p><strong>Two limbs:</strong> equality before the law (Dicey — no special privileges) and equal protection of the laws (US — equal treatment of equals). The State may classify. The old test (<em>State of W.B. v Anwar Ali Sarkar</em>; <em>Hanif Quareshi</em>):</p>
        <ol>
          <li><strong>Intelligible differentia</strong> — the class is marked by a real, understandable distinction (not a lottery of names).</li>
          <li><strong>Rational nexus</strong> — that distinction must have a reasonable relation to the object of the statute.</li>
        </ol>
        <p>Under-inclusive / over-inclusive statutes can still fail. Special courts, taxing entries, and service rules are the usual fact-patterns. <strong>New doctrine:</strong> equality is antithetic to arbitrariness (<em>E.P. Royappa</em>, <em>Maneka</em>, <em>Ajay Hasia</em>). Even a ‘classified’ rule dies if it is a naked whim. Write both tests in a 20-marker; they stack.</p>
        <p><strong>What 14 is not:</strong> a promise of identical treatment of unequals. Reservation fights live mainly in 15–16, but 14’s reasonableness remains the brake. Foreigners can claim 14 (and 21); 19 is citizen-centric.</p>
        <p>Exam: define; two limbs; two-step classification; Royappa; one pass and one fail illustration; close with non-arbitrariness as the Indian upgrade.</p>`,
        analogy: {
          title: "Classifier with a documented objective",
          body: "A feature flag is legal only if (1) the cohort is defined by a real field (intelligible differentia) and (2) that field is there for a bona fide product objective (nexus). Royappa is the WAF that kills flags created because a PM was in a mood."
        },
        diagram: {
          type: "flow",
          steps: ["Is there a class?", "Intelligible differentia?", "Nexus to object?", "Non-arbitrary (Royappa)?", "Survive 14"]
        },
        mnemonic: {
          name: "DIFF + NEXUS + NOT WHIM",
          hook: "Anwar Ali / Hanif classification; Royappa anti-arbitrary.",
          recite: "14 allows reasonable classification, not unreasonable class legislation. Foreigners get 14."
        },
        cases: [
          { name: "State of W.B. v Anwar Ali Sarkar", citation: "AIR 1952 SC 75", point: "Special courts — classification must not be arbitrary." },
          { name: "E.P. Royappa v State of T.N.", citation: "(1974) 4 SCC 3", point: "Equality = antithesis of arbitrariness." },
          { name: "Maneka Gandhi v Union of India", citation: "(1978) 1 SCC 248", point: "14–19–21 gold triangle; fairness." }
        ],
        pyqs: [
          {
            year: "2022",
            section: "C",
            marks: "20",
            q: "Equality before law.",
            outline: ["Two limbs; classification test; Royappa; cases; reservation pointer to 15–16."]
          }
        ],
        check: ["Two limbs of 14.", "Two steps of classification.", "Royappa in one sentence."]
      },
      {
        id: "c-15-16-reservation",
        seq: 4.4,
        readAs: "Drill — reservation spine (from equality home)",
        unit: 3,
        yield: "high",
        tags: ["reservation", "indra sawhney", "janhit", "ews", "creamy layer"],
        title: "Articles 15–16 — reservation, Indra Sawhney, EWS / Janhit",
        summary: "15–16 are the enabling engines of group justice. Indra Sawhney is the OS. 103rd Amendment EWS was upheld in Janhit Abhiyan 2022. Dec 2024 set a 20-marker on reservation policy.",
        explainer: `<p><strong>15(1):</strong> no discrimination on religion, race, caste, sex, place of birth. <strong>15(3)–(6):</strong> special provisions for women/children; SEBCs/SCs/STs; 15(6) EWS. <strong>16(1):</strong> equality of opportunity in public employment. <strong>16(4):</strong> enabling provision for backward classes not adequately represented — a facet of equality, not its enemy (<em>Indra Sawhney</em>).</p>
        <p><strong>Indra Sawhney (1992) payload (write as a list):</strong> 16(4) is enabling; caste can be a start for identifying backwardness among other indicators; 50% ceiling as a general rule (extraordinary situations apart); creamy layer exclusion for OBCs; no reservation in promotions (as original holding); no reservation in purely merit-super-speciality pockets as stated; carry-forward must still respect the ceiling in spirit. Later: 77th/85th Amendments + <em>M. Nagaraj</em> / <em>Jarnail Singh</em> for SC/ST promotions (creamy layer for SC/ST in promotions; no need to collect ‘backwardness’ data again in the Nagaraj sense as refined).</p>
        <p><strong>EWS — 103rd Amendment, Art. 15(6)/16(6):</strong> up to 10% for economically weaker sections other than classes in 15(4)/16(4). <em>Janhit Abhiyan v Union of India</em> (2022) upheld it (majority); dissents worried about exclusion of SCs/STs/OBCs from the EWS pool and the 50% ceiling. For CCS: name the amendment, the 10% cap, that it is economic, and that the Court split.</p>
        <p><strong>Ladder if the question is a full essay:</strong> <em>Champakam</em> → 1st Amendment (15(4)) → <em>Balaji</em> (50% idea) → <em>Devadasan</em> carry-forward → <em>N.M. Thomas</em> → <em>Indra Sawhney</em> → Nagaraj/Jarnail → EWS/Janhit. Conclude with 14’s reasonableness as the continuing brake.</p>`,
        analogy: {
          title: "Affirmative-action feature flags",
          body: "15(4)/16(4) are documented feature flags for representation, not rogue forks of 14. Creamy layer is an exclusion filter so the flag hits the intended cohort. EWS is a separate economic flag with a 10% budget. 50% is the default quota budget; courts treat overruns as incidents."
        },
        diagram: {
          type: "flow",
          steps: ["Champakam / 1st Amd", "Balaji ceiling idea", "Indra Sawhney OS", "Nagaraj / Jarnail promotions", "103rd EWS / Janhit"]
        },
        mnemonic: {
          name: "50% + CREAMY + EWS 10%",
          hook: "Sawhney is the kernel. Janhit = 103rd upheld.",
          recite: "16(4) enables. Creamy layer for OBCs. Promotions are a later statutory/judicial saga. EWS is economic and exclusive of 15(4) classes."
        },
        cases: [
          { name: "Indra Sawhney v Union of India", citation: "(1992) Supp (3) SCC 217", point: "Mandal OS — ceiling, creamy layer, 16(4) nature." },
          { name: "M. Nagaraj v Union of India", citation: "(2006) 8 SCC 212", point: "Promotion reservations — constitutional amendments upheld with conditions." },
          { name: "Janhit Abhiyan v Union of India", citation: "(2023) 5 SCC 1", point: "EWS 103rd Amendment upheld." }
        ],
        pyqs: [
          {
            year: "Dec 2024",
            section: "C",
            marks: "20",
            q: "Critically examine reservation policy with cases.",
            outline: ["15–16 text; Sawhney list; promotions footnote; EWS/Janhit; 14 as brake; one critique (efficiency / exclusion debates) without a rant."]
          }
        ],
        check: ["Four Indra Sawhney holdings.", "What 103rd added.", "Creamy layer: OBC vs SC/ST promotions nuance."]
      },
      {
        id: "c-19-suite",
        seq: 5.2,
        readAs: "Trap sheet — 19(1)(b)–(g) (CCS lists only speech)",
        unit: 3,
        yield: "high",
        tags: ["article 19", "freedoms", "reasonable restrictions"],
        title: "Article 19 other freedoms — exam traps beside 19(1)(a)",
        summary: "CCS Sem-1 names only 19(1)(a). Still know 19(1)(b)–(g) in one page so a restriction question or a ‘freedoms’ short note does not ambush you.",
        explainer: `<p><strong>Official syllabus lists 19(1)(a) only.</strong> A 20-marker on speech/press should stay there. This card is the trap-sheet.</p>
        <p><strong>19(1) suite:</strong> (a) speech and expression; (b) assembly; (c) association; (d) movement; (e) residence; (g) profession/occupation/trade/business. (f) property was deleted (44th). All are <strong>citizen</strong> rights. Each has its own restriction clause 19(2)–(6) — you cannot import 19(2) grounds into 19(6) or vice versa. That is the classic trap.</p>
        <p><strong>Assembly (b)/(3):</strong> peaceful, without arms; restrictions for sovereignty/integrity and public order. <strong>Association (c)/(4):</strong> plus morality. <strong>Movement/residence (d)(e)/(5):</strong> interests of general public or protection of any scheduled tribe. <strong>Profession (g)/(6):</strong> reasonable restrictions in the interests of the general public, plus professional qualifications, plus State monopoly (nationalisation) — <em>19(6)</em> is how banks/coal/schools get special treatment.</p>
        <p><strong>Reasonable restrictions:</strong> not just ‘named ground’ but proportional, not arbitrary (<em>Chintaman Rao</em>; post-Maneka reasonableness). Prior restraint on speech is especially suspect; profession licences must not be a monopoly of a private guild without 19(6) cover.</p>
        <p><strong>What to do in the hall:</strong> if the question is press/speech, do not dump (b)–(g). If it says “freedoms under Art. 19,” list all, then develop (a) and one other. If it is a problem on a trade ban, you are in (g)/(6), not (a)/(2).</p>`,
        analogy: {
          title: "Six ports, six firewall rule-sets",
          body: "Each 19(1) freedom is a port. Each 19(2)–(6) is a dedicated firewall ACL. Copy-pasting the speech ACL onto a trade port is a misconfiguration — and examiners hunt it."
        },
        diagram: {
          type: "compare",
          headers: ["Freedom", "Clause", "Restriction article"],
          rows: [
            ["Speech/expression (press)", "(a)", "19(2)"],
            ["Assembly", "(b)", "19(3)"],
            ["Association", "(c)", "19(4)"],
            ["Move / reside", "(d)(e)", "19(5)"],
            ["Profession / trade", "(g)", "19(6) + State monopoly"]
          ]
        },
        mnemonic: {
          name: "S-A-A-M-R-P",
          hook: "Speech Assembly Association Move Reside Profession. Property gone. Restrictions are clause-specific.",
          recite: "Citizens only. Do not apply 19(2) to a shop-ban problem."
        },
        cases: [
          { name: "Chintaman Rao v State of M.P.", citation: "AIR 1951 SC 118", point: "Reasonable restrictions — not arbitrary." },
          { name: "Excel Wear v Union of India", citation: "(1978) 4 SCC 224", point: "19(1)(g) / restriction on closing business — flavour of profession freedom." }
        ],
        pyqs: [
          {
            year: "2022",
            section: "C",
            marks: "20",
            q: "Freedoms under speech + restrictions.",
            outline: ["Stay on 19(1)(a)/19(2) if that is the paper; one line that other freedoms exist with their own clauses."]
          }
        ],
        check: ["List 19(1)(a)–(g) skipping (f).", "Match each to 19(2)–(6).", "State monopoly lives in 19(6)."]
      },
      {
        id: "c-21-privacy",
        seq: 7.2,
        readAs: "Drill — Puttaswamy privacy / dignity / livelihood",
        unit: 3,
        yield: "high",
        tags: ["article 21", "puttaswamy", "privacy", "dignity", "livelihood"],
        title: "Article 21 — privacy (Puttaswamy), dignity, livelihood",
        summary: "After Maneka, 21 is a package manager. Three installs every CCS 20-marker should name: dignity, livelihood, privacy (Puttaswamy 2017).",
        explainer: `<p><strong>Dignity:</strong> <em>Francis Coralie Mullin</em> — life is not mere animal existence; it includes dignity and the bare necessaries (and, in that case, a detenu’s right to meet family/lawyer). Dignity is the moral kernel that lets 21 absorb later rights without looking random.</p>
        <p><strong>Livelihood:</strong> <em>Olga Tellis v Bombay Municipal Corporation</em> — pavement dwellers; the right to life includes the right to livelihood, because no person can live without the means of living. It is not an absolute right to a particular pavement; procedure to evict must still be just and fair. Pair with <em>Board of Trustees, Port of Bombay v Dilipkumar</em> / employment cases only if the question is service-flavoured.</p>
        <p><strong>Privacy — K.S. Puttaswamy (2017) nine-judge:</strong> privacy is a fundamental right, intrinsic to 21 (and 14/19). Overrules the <em>M.P. Sharma</em> / <em>Kharak Singh</em> majority lines that denied a constitutional privacy right. Informational privacy, bodily autonomy, and the privacy of choice are in the holding’s gravitational field. Tests later used for the Aadhaar follow-on: legality, legitimate aim, proportionality. For Sem-1: name the bench size, the overruled cases, and that ADM Jabalpur was branded wrongly decided. Do not write a full Aadhaar dissertation unless asked.</p>
        <p><strong>Preventive detention interface:</strong> Art. 22 is the special code (grounds, advisory board, 3-month rule). 21 still demands that the procedure be fair — post-Maneka you do not treat 22 as a complete code that ousts 21 (<em>Francis Coralie</em> was a detention case). 44th Amendment: 21 cannot be suspended in Emergency. If a PYQ is detention-heavy, open 22, then 21 dignity, then 44th lock.</p>
        <p>Dec 2024 20-marker: expanding horizons of life and personal liberty — this card is the second half after Maneka.</p>`,
        analogy: {
          title: "Three packages on the 21 registry",
          body: "Dignity is the core runtime. Livelihood is the I/O driver (no process lives without resources). Privacy is the memory-isolation guarantee — Puttaswamy made it a first-class syscall, not a courtesy flag."
        },
        diagram: {
          type: "tree",
          root: "Art. 21 post-Maneka",
          branches: ["Dignity (Francis Coralie)", "Livelihood (Olga Tellis)", "Privacy (Puttaswamy)", "Environment / health / shelter (as asked)"]
        },
        mnemonic: {
          name: "D-L-P",
          hook: "Dignity · Livelihood · Privacy. Nine judges in 2017.",
          recite: "Puttaswamy overrules Sharma/Kharak on ‘no privacy FR.’ 21 unsuspendable. 22 is detention procedure, not a 21 killer."
        },
        cases: [
          { name: "Francis Coralie Mullin v UT of Delhi", citation: "(1981) 1 SCC 608", point: "Dignity; life ≠ animal existence." },
          { name: "Olga Tellis v BMC", citation: "(1985) 3 SCC 545", point: "Livelihood." },
          { name: "K.S. Puttaswamy v Union of India", citation: "(2017) 10 SCC 1", point: "Privacy FR; nine-judge." }
        ],
        pyqs: [
          {
            year: "Dec 2024",
            section: "C",
            marks: "20",
            q: "Expanding horizons of Right to Life and Personal Liberty with cases.",
            outline: ["Gopalan→Maneka; dignity; livelihood; privacy; one more (environment or health); 20/21 lock."]
          }
        ],
        check: ["Francis Coralie one-liner.", "Olga Tellis holding with the eviction caveat.", "Puttaswamy: bench size + what it overruled."]
      },
      {
        id: "c-32-writs",
        seq: 12.2,
        readAs: "Drill — five writs HMPCQ (from Art. 32 home)",
        unit: 3,
        yield: "high",
        tags: ["article 32", "writs", "habeas", "mandamus", "certiorari", "pil"],
        title: "Writs under Article 32 — HMPCQ",
        summary: "32 is itself an FR: the right to move the Supreme Court. Five writs: habeas, mandamus, prohibition, certiorari, quo warranto. PIL is standing-liberalisation, not a sixth writ.",
        explainer: `<p><strong>Habeas corpus</strong> — produce the body; illegal detention. Emergency memory: ADM Jabalpur. <strong>Mandamus</strong> — command a public authority to perform a public duty (not to a private body as such; not to the President/Governor in some classic holdings; not to enforce a merely contractual duty). <strong>Prohibition</strong> — stop an inferior court/tribunal from exceeding jurisdiction (preventive). <strong>Certiorari</strong> — quash an already-made order of an inferior court/tribunal for want/excess of jurisdiction or error of law apparent (curative). <strong>Quo warranto</strong> — by what authority do you hold this public office? (usurper of an office created by law).</p>
        <p><strong>Prohibition vs certiorari</strong> is the stock table: before vs after the order; both need a judicial/quasi-judicial body. Mandamus can go to administrative authorities for public duties. Habeas is liberty. Quo warranto is title to office.</p>
        <p><strong>32 vs 226:</strong> 32 is an FR, only SC, only Part III (plus the Court’s later public-law expansion via PIL). 226 is wider (legal rights, not only FRs), High Courts, discretionary. You cannot abdicate 32 because 226 exists (<em>Romesh Thappar</em> flavour: 32 is a guaranteed remedy). <em>A.K. Gopalan</em> era compactness is gone; PIL letters, epistolary jurisdiction (<em>S.P. Gupta</em>, <em>Bandhua</em>) — Dec 2024 “floodgate” critique: write access for the voiceless <em>and</em> docket/separation-of-powers costs.</p>`,
        analogy: {
          title: "Five admin tools on the guarantor port",
          body: "Habeas = rescue a killed process from an illegal jail. Mandamus = force a service to run its documented public job. Prohibition = SIGSTOP a tribunal acting out of scope. Certiorari = revert a bad commit. Quo warranto = who has root on this public box?"
        },
        diagram: {
          type: "compare",
          headers: ["Writ", "Job", "Typical target"],
          rows: [
            ["Habeas corpus", "Release illegal detention", "Police / exec detaining"],
            ["Mandamus", "Do your public duty", "Public authority"],
            ["Prohibition", "Stop excess jurisdiction", "Inferior court (pending)"],
            ["Certiorari", "Quash excess / error of law", "Inferior court (done)"],
            ["Quo warranto", "Title to public office", "Usurper"]
          ]
        },
        mnemonic: {
          name: "HMPCQ",
          hook: "Habeas Mandamus Prohibition Certiorari Quo warranto.",
          recite: "32 is an FR. 226 is wider. PIL liberalises standing, it is not a sixth writ."
        },
        cases: [
          { name: "Romesh Thappar v State of Madras", citation: "AIR 1950 SC 124", point: "32 as guaranteed remedy." },
          { name: "S.P. Gupta v Union of India", citation: "AIR 1982 SC 149", point: "PIL standing." },
          { name: "Bandhua Mukti Morcha v Union of India", citation: "(1984) 3 SCC 161", point: "Epistolary / bonded labour." }
        ],
        pyqs: [
          {
            year: "Dec 2024",
            section: "C",
            marks: "20",
            q: "PIL has opened a floodgate as constitutional remedy — Explain with cases.",
            outline: ["32 text; five writs in a box; PIL standing cases; floodgate critique; 226 contrast."]
          }
        ],
        check: ["HMPCQ with one line each.", "Prohibition vs certiorari.", "32 vs 226."]
      },
      {
        id: "c-fr-dpsp-cases",
        seq: 13.2,
        readAs: "Drill — FR vs DPSP case ladder (Champakam → Minerva)",
        unit: 4,
        yield: "high",
        tags: ["dpsp", "champakam", "golaknath", "kesavananda", "minerva mills"],
        title: "FR vs DPSP — Champakam, Golaknath, Kesavananda, Minerva Mills",
        summary: "The relationship essay is a case-ladder, not a sermon. Four names carry most of the marks: Champakam, Golaknath, Kesavananda, Minerva Mills.",
        explainer: `<p><strong>Champakam Dorairajan (1951):</strong> communal communal GO vs Art. 29/15. DPSPs cannot override FRs; 37 says DPSPs are not enforceable. Political answer: <strong>1st Amendment</strong> (Art. 15(4)). Lesson: early Court treated Part III as trumps.</p>
        <p><strong>Golaknath (1967):</strong> Parliament cannot abridge FRs by amendment — amendments are ‘law’ under 13. This is the FR-entrenchment high-water. Political answer: 24th Amendment. Not primarily a DPSP case, but it is the next rung whenever you narrate “can Parliament recast rights to implement Directives?”</p>
        <p><strong>Kesavananda Bharati (1973):</strong> Parliament can amend any part, including FRs, but cannot damage the <strong>basic structure</strong>. 13(4)/24th survive; Golaknath’s absolute freeze dies. DPSPs can be pursued through amendment, but not by destroying the Constitution’s identity (judicial review, democracy, secularism, limited amendment power…).</p>
        <p><strong>Minerva Mills (1980):</strong> 42nd Amendment’s attempt to give DPSPs (all of them, via an expanded 31C) immunity and to exclude judicial review of amendments (368 clauses) struck. Harmony: FRs and DPSPs are two wheels; to destroy FRs in the name of Directives is to destroy the basic structure. 31C limited to 39(b)(c) as originally conceived survives in the Kesavananda frame.</p>
        <p><strong>After:</strong> courts interpret FRs in the light of Directives (environment, education, equal pay). 21A is the rare Directive that became an FR. Write this as implementation-by-interpretation, not Champakam revenge.</p>
        <p>Dec 2024 10-marker: relationship with cases — this ladder is the whole answer.</p>`,
        analogy: {
          title: "Two branches, one merge policy",
          body: "Champakam: FR branch always wins the merge. Golaknath: freeze the FR branch. Kesavananda: you may merge, but not delete the repo’s architecture. Minerva Mills: you may not force-merge all DPSP commits with review disabled."
        },
        diagram: {
          type: "flow",
          steps: ["Champakam: FR > DPSP", "1st Amd 15(4)", "Golaknath: freeze FRs", "Kesavananda: amend but basic structure", "Minerva Mills: harmony, not DPSP autocracy"]
        },
        mnemonic: {
          name: "C-G-K-M",
          hook: "Champakam · Golaknath · Kesavananda · Minerva.",
          recite: "Trump → freeze → limited amend → two wheels. 31C is a 39(b)(c) shield, not a DPSP dictatorship."
        },
        cases: [
          { name: "State of Madras v Champakam Dorairajan", citation: "AIR 1951 SC 226", point: "FR over DPSP; 1st Amendment follows." },
          { name: "I.C. Golaknath v State of Punjab", citation: "AIR 1967 SC 1643", point: "Amendments cannot take FRs — later recast." },
          { name: "Kesavananda Bharati v State of Kerala", citation: "(1973) 4 SCC 225", point: "Basic structure." },
          { name: "Minerva Mills v Union of India", citation: "(1980) 3 SCC 625", point: "Harmony; 42nd overreach struck." }
        ],
        pyqs: [
          {
            year: "Dec 2024",
            section: "B",
            marks: "10",
            q: "Relationship between FRs and DPSPs with cases.",
            outline: ["37; C-G-K-M ladder; interpretive use today; 21A as the converted Directive."]
          }
        ],
        check: ["Champakam holding + political sequel.", "Kesavananda in one sentence.", "Minerva Mills: what was struck."]
      },
      {
        id: "c-300a",
        seq: 14.2,
        readAs: "Kumar — right to property after 44th (exam-adjacent bridge)",
        unit: 5,
        yield: "high",
        tags: ["300a", "property", "44th amendment", "19(1)(f)", "31"],
        title: "Article 300A — right to property (bridge card)",
        summary: "44th Amendment deleted 19(1)(f) and 31; inserted 300A. Property is a constitutional legal right, not a Fundamental Right. 2022 shorts still poke it.",
        explainer: `<p><strong>Old law (must narrate in four lines):</strong> Art. <strong>19(1)(f)</strong> was the FR to acquire, hold and dispose of property, with 19(5) restrictions. Art. <strong>31</strong> was the compensation/acquisition chapter — the political battlefield of zamindari, bank nationalisation, and <em>Kesavananda</em>. Property as an FR let people move the Supreme Court under 32 against acquisition statutes.</p>
        <p><strong>44th Amendment, 1978:</strong> 19(1)(f) and 31 were omitted. <strong>Art. 300A</strong> was inserted in Part XII: “No person shall be deprived of his property save by authority of law.” That is a <em>constitutional</em> right (you can still go to a High Court under 226, and the provision binds the State), but it is <strong>not a Fundamental Right</strong>. Consequences: (1) no Art. 32 as of right for a pure 300A claim; (2) Parliament’s amendment story is different from Part III; (3) “authority of law” still kills executive confiscation without a statute (<em>Bishambhar Dayal Chandra Mohan</em> flavour — executive instructions are not enough); (4) the law must not be a fraud on power / manifestly arbitrary (later 14/21 overlay in acquisition cases — <em>K.T. Plantation</em>, <em>Vidya Devi</em>: even after 300A, the State cannot grab without legal authority and, in many settings, without compensation that is not a farce).</p>
        <p><strong>What 300A is not:</strong> it is not a revival of 31(2)’s old compensation formula. It is not an FR. It is not a licence for the District Magistrate to tweet your land away. For Sem-1: this card exists because 2022-style shorts asked property after the 44th, and because a 19(1)(a) student sometimes invents 19(1)(f) as if it still lived. Official CCS FR list for K-1002 does <em>not</em> include 300A — treat it as insurance, not as a 20-marker home.</p>`,
        analogy: {
          title: "Demoted from SSO to ordinary ACL",
          body: "19(1)(f)/31 were on the Part III SSO — Art. 32 as the password-reset. 300A is still a constitutional ACL (no deprivation without a statute) but it is no longer in the SSO directory. 226 still SSHes in; 32 does not open for this claim alone."
        },
        diagram: {
          type: "flow",
          steps: ["19(1)(f) + 31 as FRs", "44th Amendment deletes them", "300A: deprivation only by authority of law", "226 yes; 32 no; compensation is statute-shaped"]
        },
        mnemonic: {
          name: "44th DEMOTED PROPERTY",
          hook: "300A = law first, not an FR. 19(1)(f) is dead.",
          recite: "Authority of law; no executive taking. Do not write 19(1)(f) as current FR."
        },
        cases: [
          { name: "K.T. Plantation Pvt. Ltd. v State of Karnataka", citation: "(2011) 9 SCC 1", point: "300A is a constitutional right; acquisition still needs a valid law; compensation context." },
          { name: "Vidya Devi v State of Himachal Pradesh", citation: "(2020) 2 SCC 569", point: "State cannot take without authority of law; 300A has real teeth against grabbing." }
        ],
        pyqs: [
          { year: "2022", section: "A", marks: "4", q: "Right to property / Art. 300A.", outline: ["44th; 19(1)(f) & 31 gone; 300A text; FR vs constitutional right; 32 vs 226."] }
        ],
        check: ["What the 44th deleted.", "300A one-liner.", "Why it is not an FR."]
      },
    ]
  };
})(window);

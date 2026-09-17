(function (g) {
  g.LLB = g.LLB || {};
  g.LLB.papers = g.LLB.papers || {};
  g.LLB.papers.k1002 = {
    id: "k1002",
    code: "K-1002",
    title: "Constitutional Law of India-I",
    short: "Constitution",
    blurb: "Nature of the Constitution + Fundamental Rights. Keep the Jain Book Agency bare act open beside every article.",
    youtube: [
      { title: "FR complete playlist", search: "Fundamental Rights complete Unacademy Judiciary Article 12 to 32" },
      { title: "Article 21 Maneka", search: "Article 21 Maneka Gandhi StudyIQ" },
      { title: "Art 14 15 16 reservation", search: "Art 14 15 16 reservation lecture Indra Sawhney" }
    ],
    topics: [
      {
        id: "c-nature",
        unit: 1,
        yield: "high",
        tags: ["federal", "quasi-federal", "parliamentary", "k.c. wheare"],
        title: "Nature of the Indian Constitution — federal structure and form of government",
        summary: "India is a Union of States with federal hardware and a unitary turbo. Government is parliamentary, Westminster-derived, with a republican President.",
        explainer: `<p>Art. 1: “India, that is Bharat, shall be a Union of States.” The drafting choice of <em>Union</em> (not ‘federation’) is itself an exam sentence: the States are not a bargain that can secede; the Union is indestructible (compare US compact myths).</p>
        <p><strong>Federal hardware (list 6):</strong> dual polity (Union + States); written Constitution; supremacy of the Constitution; rigid amendment (Art. 368 with basic structure overlay); division of powers (Sch. VII — Union/State/Concurrent); independent judiciary with power of judicial review; bicameralism at Centre (Rajya Sabha as House of States, imperfectly).</p>
        <p><strong>Unitary turbo (list 6):</strong> strong Centre; single Constitution; single citizenship; unified judiciary; All-India Services; residuary with Union (Art. 248 / List I-97); emergency provisions (Arts. 352, 356, 360) that can turn the system into a de facto unitary State; Parliament can legislate on State list in listed situations (Arts. 249, 250, 252, 253); Art. 3 — Parliament can reorganise States without their consent as a veto; appointment of Governors.</p>
        <p><strong>Labels:</strong> K.C. Wheare — “quasi-federal.” Granville Austin — “cooperative federalism.” Jennings — more unitary than federal. Indian SC in <em>State of W.B. v Union of India</em> and later <em>S.R. Bommai</em> (federalism as basic feature) — you must show the doctrine moved from “Centre is the boss” toward “federalism is a basic feature,” without denying the turbo.</p>
        <p><strong>Form of government:</strong> parliamentary / cabinet. Features: nominal head (President, Art. 53 read with 74); real executive is Council of Ministers collectively responsible to the Lok Sabha (Art. 75(3)); rule of majority; political homogeneity; ministerial responsibility (collective + individual); possibility of dissolution. Contrast presidential (US): fixed tenure, separation, President as real executive. India also has republicanism, secularism (42nd Amendment express; SC as basic feature in <em>S.R. Bommai</em> / <em>Kesavananda</em> line), and a socialist aspiration in the Preamble word — do not dump these into federalism unless the question is “salient features.”</p>
        <p><strong>Exam trap:</strong> “neither federal nor unitary but quasi-federal” is the Dec 2024 10-marker shape. Do not pick a team and rant. Draw the two columns, then land on Wheare + Bommai.</p>`,
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
        unit: 3,
        yield: "high",
        tags: ["article 12", "article 13", "state", "eclipse", "severability", "waiver", "suspension"],
        title: "Fundamental Rights — scheme, who can claim, against whom, suspension",
        summary: "Part III is the justiciable core. Know Art. 12 ‘State’, Art. 13 (voiding inconsistent law, doctrines), rightholders, and Emergency suspension.",
        explainer: `<p><strong>Scheme:</strong> Arts. 12–35. Equality (14–18), freedoms (19–22), exploitation (23–24), religion (25–28), minorities (29–30), remedies (32). Art. 31 property was stripped; 300A is a legal right, not an FR — 2022 short notes still poke “right to property.”</p>
        <p><strong>Against whom:</strong> primarily the <strong>State (Art. 12)</strong> — Government and Parliament of India, Government and Legislature of each State, local authorities, “other authorities” (instrumentalities / agencies of the State). Tests from <em>Ajay Hasia</em> / <em>Pradeep Kumar Biswas</em>: deep and pervasive State control, public function, etc. Horizontal application is exceptional (e.g. Art. 15(2), 17, 23, 24 bind private actors in text or doctrine). <em>Puttaswamy</em> privacy is primarily vertical but radiates.</p>
        <p><strong>Who can claim:</strong> citizens for some (Art. 19, 15, 16, 29–30 in specified ways); persons for others (Art. 14, 20, 21 — foreigners included, with caveats). Corporations: Art. 19 traditionally citizens-only, so companies cannot claim 19 as such (<em>State Trading Corp</em> line) but may claim 14/21. NGOs/PIL: standing liberalised under 32.</p>
        <p><strong>Art. 13:</strong> pre-constitutional laws inconsistent with Part III are void to the extent of inconsistency; post-constitutional laws too. State shall not make laws taking away FRs. “Law” includes ordinances, bye-laws, custom; constitutional amendments were held “law” in <em>Golaknath</em> then reversed as to Art. 13 in <em>Kesavananda</em> / 24th Amendment — know the story in 8 lines.</p>
        <p><strong>Doctrines:</strong> <em>eclipse</em> (pre-constitutional law sleeps, revives if FR shadow moves); <em>severability</em> (bad part cuts, rest lives); <em>waiver</em> generally not of FRs (<em>Basheshar Nath</em>); <em>pith and substance / colourable legislation</em> more Lists, but 13 questions sometimes invite them.</p>
        <p><strong>Suspension:</strong> Art. 358 (Art. 19 automatically suspends during Proclamation of Emergency on war/external aggression — 44th Amendment took internal armed rebellion off this automatic hook). Art. 359: President may suspend right to move courts for listed FRs, but <strong>Arts. 20 and 21 cannot be suspended</strong> (44th Amendment) — this is a must-quote after the Emergency hangover. Art. 33–34: Parliament may restrict FRs of armed forces / martial-law situations.</p>`,
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
        unit: 3,
        yield: "high",
        tags: ["19(1)(a)", "press", "19(2)", "speech"],
        title: "Freedom of speech and expression — Art. 19(1)(a)",
        summary: "Speech is the default; 19(2) is a closed firewall list. Press is inside 19(1)(a) — there is no separate press article.",
        explainer: `<p>Art. 19(1)(a) is a <strong>citizen</strong> right. It includes: speech, publication, press, circulation (<em>Sakal Papers</em>, <em>Indian Express</em>), right to information as a listener/reader (later RTI culture / <em>S.P. Gupta</em> seeds), commercial speech in part (<em>Tata Press</em>), artistic expression, criticism of government. It does not include a right to be carried on someone else’s private platform as a constitutional given — keep social-media hypotheticals short unless asked.</p>
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
        unit: 3,
        yield: "standard",
        tags: ["21a", "rte", "86th amendment"],
        title: "Article 21A — Right to Education",
        summary: "86th Amendment (2002): free and compulsory education of children aged 6–14, as the State may determine by law. RTE Act 2009 is the payload.",
        explainer: `<p>Until 21A, education rode on 21 (<em>Unni Krishnan</em> — up to 14 as part of life; higher education not an FR in the same way) and DPSP 45 (original: free compulsory education up to 14). The 86th Amendment: inserted 21A; recast 45 toward early childhood care 0–6; added duty 51A(k) for parents/guardians.</p>
        <p>RTE Act 2009: neighbourhood schools, 25% uneconomic weaker-section intake in private unaided (upheld with adjustments in <em>Society for Unaided Private Schools</em> — aided vs unaided, minority institutions carve-out under 30). <em>Pramati</em> exempted minority schools from RTE’s 12(1)(c) — a tension with inclusion that a good answer flags.</p>
        <p>Justiciable FR, but the clause “as the State may, by law, determine” lets the statute shape content. Quality vs mere enrolment is the policy critique.</p>`,
        analogy: {
          title: "21A is a pinned dependency of 21",
          body: "Education was a transitive dependency of life. 21A pins it as a first-party FR for ages 6–14, with RTE Act as the implementing package. 51A(k) is the parent-side hook."
        },
        diagram: { type: "flow", steps: ["DPSP 45 (old)", "Unni Krishnan via 21", "86th Amendment → 21A", "RTE Act 2009"] },
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
        unit: 3,
        yield: "standard",
        tags: ["23", "24", "begar", "child labour", "trafficking"],
        title: "Right against exploitation — Articles 23–24",
        summary: "23 kills traffic in persons and begar/forced labour (with a State-service exception). 24 bars hazardous child labour under 14.",
        explainer: `<p><strong>Art. 23:</strong> prohibition of traffic in human beings, begar, and similar forms of forced labour. Exception: compulsory service for public purposes without discrimination on religion/race/caste/class. <em>People’s Union for Democratic Rights v Union of India</em> (Asiad workers): non-payment of minimum wage as forced labour. Horizontal: binds private contractors. Bonded labour statutes and the SC’s <em>Bandhua Mukti Morcha</em> supervision are the enforcement story.</p>
        <p><strong>Art. 24:</strong> no child below 14 in factories, mines, or other hazardous employment. Child Labour (Prohibition and Regulation) Act / 2016 amendments; CLPRA vs RTE overlap — a child in school cannot be in a hazardous process. Non-hazardous family work is a statutory grey students over-simplify; stay with the constitutional prohibition and name the Act.</p>
        <p>These articles are social FRs — closer to Duguit/Pound than to Austin. They also bind non-State actors more clearly than 19.</p>`,
        analogy: {
          title: "Forced labour is a stuck thread",
          body: "23 forbids conscripting private CPU without lawful public-purpose statute. Paying below minimum wage is still forced labour (PUDR) — like an infinite loop with no consideration. 24 is an age-gate on hazardous production."
        },
        diagram: { type: "compare", headers: ["Article", "Core ban", "Key case / statute"], rows: [["23", "Trafficking, begar, forced labour", "PUDR; Bonded Labour Act"], ["24", "Hazardous child work <14", "Child labour statutes + RTE"]] },
        mnemonic: { name: "23 FORCE / 24 CHILD", hook: "Begar ≠ only historical corvée; underpayment counts.", recite: "Horizontal social rights. Public compulsory service is the 23 exception." },
        cases: [
          { name: "PUDR v Union of India", citation: "(1982) 3 SCC 235", point: "Below-minimum-wage labour as forced labour." },
          { name: "Bandhua Mukti Morcha v Union of India", citation: "(1984) 3 SCC 161", point: "Bonded labour; PIL enforcement." }
        ],
        pyqs: [
          { year: "theme", section: "B", marks: "10", q: "Right against exploitation.", outline: ["23+24 text; PUDR; child labour statute; horizontality."] }
        ],
        check: ["PUDR holding.", "24 age and hazard.", "23 public-service exception."]
      },
      {
        id: "c-25-28",
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
        unit: 5,
        yield: "standard",
        tags: ["51a", "fundamental duties", "42nd"],
        title: "Fundamental Duties — Article 51A",
        summary: "42nd Amendment borrowed a duty list (Sverdlovsk inspiration debates aside). Not directly justiciable, but they interpret rights and support statutes.",
        explainer: `<p>Art. 51A (a)–(k): abide by the Constitution and respect its ideals, institutions, National Flag and Anthem; cherish noble ideals of the freedom struggle; uphold sovereignty, unity, integrity; defend the country; promote harmony and brotherhood, renounce practices derogatory to women; value composite culture; protect environment; scientific temper; safeguard public property, abjure violence; strive toward excellence; 86th Amendment (k) — parent/guardian to provide education to 6–14.</p>
        <p>Swaran Singh Committee recommended duties. They are not FRs in reverse that the State can casually criminalise without a statute, but statutes (prevention of insults to National Honour, environmental law, IPC/BNS public-property) give teeth. Courts use 51A as an interpretive aid (<em>AIIMS Students’ Union</em>, environment cases pairing 51A(g) with 48A and 21). <em>Ranganath Mishra</em> / later reports: enforcement through education more than prosecution.</p>
        <p>Exam: list any four if Section A; if long, discuss justiciability, relation to FRs (duties as civic republicanism), and one case using 51A(g).</p>`,
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
        check: ["Four duties verbatim-ish.", "42nd vs 86th.", "Not independently enforceable."]
      }
    ]
  };
})(window);

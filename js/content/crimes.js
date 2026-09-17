(function (g) {
  g.LLB = g.LLB || {};
  g.LLB.papers = g.LLB.papers || {};
  g.LLB.papers.k1004 = {
    id: "k1004",
    code: "K-1004",
    title: "Law of Crimes-I (BNS 2023 + IPC map)",
    short: "Crimes · BNS",
    blurb: "Official PDF still says IPC. Dec 2024/25 papers title BNS. Write BNS numbers; put IPC in parentheses. Student Unique book is BNS-labelled.",
    youtube: [
      { title: "Complete BNS one-shot", search: "Complete BNS in Hindi StudyIQ After LLB" },
      { title: "CH vs Murder BNS", search: "BNS vs IPC murder culpable homicide" },
      { title: "34 vs 149", search: "Section 34 vs 149 IPC BNS common intention common object" }
    ],
    topics: [
      {
        id: "cr-general",
        unit: 1,
        yield: "high",
        tags: ["mens rea", "actus reus", "stages", "strict liability", "34", "149", "3(5)", "190"],
        title: "General principles — crime, elements, stages, strict & constructive liability, common intention & common object",
        summary: "Crime = public wrong with a statutory label. Default stack: actus reus + mens rea. Stages: intention → preparation → attempt → completion. Constructive liability: BNS 3(5) vs 190.",
        explainer: `<p><strong>Concept of crime:</strong> a public wrong, prohibited by the Sanhita (or special statute), prosecuted in the name of the State, punishable with the BNS punishments (s.4: death, life, imprisonment, forfeiture, fine, community service — community service is a BNS novelty worth a short note). Blackstone/Kenny/Austin one-liners still decorate Section A. Moral turpitude is neither necessary nor sufficient (strict liability regulatory offences; adultery’s moral story vs its legal death).</p>
        <p><strong>Elements:</strong> (1) human being (in general); (2) <em>actus reus</em> — a willed act or legally relevant omission where duty exists; (3) <em>mens rea</em> — intention, knowledge, rashness, negligence as the section requires (<em>actus non facit reum nisi mens sit rea</em> — Dec 2024 BNS short note); (4) injury / forbidden result where result-crimes need it; (5) causation; (6) absence of a general exception (ss.14–44 BNS).</p>
        <p><strong>Stages (Dec 2023/24 20-markers):</strong> <em>intention</em> is not punishable; <em>preparation</em> generally not (exceptions: preparation to wage war, dacoity prep BNS 310(4), etc.); <em>attempt</em> is punishable (specific: BNS 109 attempt to murder; general: BNS 62 ≈ IPC 511) — proximity / last-act / equivocality tests from case law (<em>Abhayanand Mishra</em>, <em>State of Maharashtra v Mohd. Yakub</em>); <em>completion</em> is the offence itself. Impossible attempts: still often attempt if the actor’s plan would be a crime.</p>
        <p><strong>Strict liability:</strong> no mens rea required — typically public welfare (food adulteration, some NDPS readings, traffic). <em>Sherras v De Rutzen</em> presumption that mens rea is required unless statute clearly excludes it; Indian <em>State of Maharashtra v M.H. George</em> / <em>Kartar Singh</em> as context. Distinguish absolute liability in <em>torts</em> (Mehta) — don’t mix papers.</p>
        <p><strong>Constructive / joint liability — the annual pair:</strong></p>
        <ul>
          <li><strong>Common intention — IPC 34 → BNS 3(5):</strong> when a criminal act is done by several persons in furtherance of the common intention of all, each is liable as if he did it alone. Need: two or more; pre-arranged plan <em>or</em> meeting of minds which may form on the spot (<em>Barendra Kumar Ghosh</em>; <em>Mehboob Shah</em> — common intention ≠ similar intention); participation (overt act, even if not the fatal blow).</li>
          <li><strong>Common object — IPC 149 → BNS 190:</strong> every member of an <em>unlawful assembly</em> (BNS 189 ≈ IPC 141: five or more, one of five objects) is guilty of an offence committed in prosecution of the common object or such as members knew to be likely. Pre-concert is <em>not</em> essential; membership + object is. Five persons vs two.</li>
        </ul>
        <p>Table this every time. Examiners live on 34 vs 149 even after the numbers moved.</p>`,
        analogy: {
          title: "34 = pair programming; 149 = riot channel",
          body: "3(5) is two developers pushing one criminal commit with a shared intention (the plan can form in the hallway). 190 is a Slack channel of ≥5 with a common object in the topic line — you are liable for what the channel was always going to do, even if you didn’t type the fatal message, so long as you stayed in the channel."
        },
        diagram: {
          type: "compare",
          headers: ["", "BNS 3(5) ≈ IPC 34", "BNS 190 ≈ IPC 149"],
          rows: [
            ["Persons", "≥ 2", "≥ 5 (unlawful assembly, s.189)"],
            ["Mental link", "Common intention (meeting of minds)", "Common object + membership"],
            ["Pre-concert", "Often, but can form on spot", "Object may form on spot; not a conspiracy charge"],
            ["Participation", "Some act in furtherance", "Membership of the assembly"]
          ]
        },
        mnemonic: {
          name: "AM+MR / IPAC",
          hook: "Actus + Mens. Stages: Intention, Preparation, Attempt, Commission. 3(5) pair; 190 mob.",
          recite: "Write both numbers. Similar intention is not common intention (Mehboob Shah)."
        },
        cases: [
          { name: "Barendra Kumar Ghosh v King Emperor", citation: "AIR 1925 PC 1", point: "‘They also serve who only stand and wait’ — 34 participation." },
          { name: "Mehboob Shah v Emperor", citation: "AIR 1945 PC 148", point: "Common ≠ similar intention." },
          { name: "Abhayanand Mishra v State of Bihar", citation: "AIR 1961 SC 1698", point: "Attempt vs preparation (forgery/university)." },
          { name: "State of Maharashtra v M.H. George", citation: "AIR 1965 SC 722", point: "Mens rea / statutory offences discussion." }
        ],
        pyqs: [
          {
            year: "Dec 2023 IPC / Dec 2024 BNS",
            section: "C",
            marks: "20",
            q: "Constructive liability — Ss. 34 & 149 IPC (now BNS 3(5) & 190). / Comment on constructive liability.",
            outline: ["Define constructive; 3(5) ingredients + cases; 189–190 ingredients; table; a fact pattern if time."]
          },
          {
            year: "Dec 2024 BNS",
            section: "C",
            marks: "20",
            q: "Stages of crime — liability & punishment.",
            outline: ["Four stages; why intention/preparation generally not; attempt tests + s.62/109; complete offence."]
          }
        ],
        check: ["Four stages with liability.", "3(5) vs 190 table from memory.", "Mehboob Shah one-liner."]
      },
      {
        id: "cr-inchoate",
        unit: 2,
        yield: "high",
        tags: ["abetment", "conspiracy", "attempt", "45", "61", "62"],
        title: "Inchoate offences — abetment, conspiracy, attempt",
        summary: "Crimes that are not the completed target offence: instigate/aid, agree, or get dangerously close.",
        explainer: `<p><strong>Abetment — BNS 45–60 (IPC 107–120):</strong> abetment of a thing by (i) instigating, (ii) engaging in conspiracy to do it <em>and</em> an act/illegal omission in pursuance, (iii) intentionally aiding. Abettor (s.46). Presence at the scene can make the abettor a principal in some settings (s.54). Punishment generally tracks the offence abetted if committed in consequence (s.49). Dec 2024 short note: Abettor.</p>
        <p>Distinguish abetment-by-conspiracy from the autonomous offence of criminal conspiracy.</p>
        <p><strong>Criminal conspiracy — BNS 61 (IPC 120A/120B):</strong> agreement between two or more to do an illegal act, or a legal act by illegal means. The agreement <em>is</em> the offence; overt act is required only in some lesser-object settings historically — under 120A the illegal-act conspiracy needed no overt act. Punishment scales with the object (s.61). <em>Kehar Singh</em>; <em>State of T.N. v Nalini</em> (Rajiv Gandhi) for scale. Need two conspirators; husband-wife can conspire (English unity is gone).</p>
        <p><strong>Attempt — BNS 62 + specific sections (109, 110, 312…):</strong> last-proximate-act / unequivocal act toward commission. Preparation to wage war / dacoity are special. Impossible attempt: picking an empty pocket still attempt if the story is theft-shaped. Abandonment: generally no defence once attempt begins, unless the statute so provides.</p>
        <p>Exam problem (2023): house entry + box moved — classify preparation/attempt/theft using asportation (BNS 303 moving property).</p>`,
        analogy: {
          title: "PR, RFC, and half-compiled crime",
          body: "Conspiracy is merging a plan in Git with two committers — the merge is the offence. Abetment is reviewing, cheering, or handing the exploit script. Attempt is running the payload against prod even if the database was empty."
        },
        diagram: { type: "flow", steps: ["Instigate / agree / aid", "Attempt (proximity)", "Complete offence"] },
        mnemonic: { name: "INSTIGATE · AGREE · APPROACH", hook: "45 abet; 61 conspire; 62/109 attempt.", recite: "Agreement is conspiracy. Aid/instigation is abetment. Proximity is attempt." },
        cases: [
          { name: "Kehar Singh v State (Delhi Admn.)", citation: "(1988) 3 SCC 609", point: "Conspiracy — Indira Gandhi assassination context." },
          { name: "Abhayanand Mishra", citation: "AIR 1961 SC 1698", point: "Attempt vs preparation." },
          { name: "Faguna Kanta Nath", citation: "AIR 1959 SC 673", point: "Abetment ingredients often taught." }
        ],
        pyqs: [
          { year: "Dec 2023", section: "C", marks: "20", q: "Intention, preparation and attempt.", outline: ["Four stages actually; focus on the three named; cases; BNS 62 vs 109."] },
          { year: "Dec 2024 BNS", section: "A", marks: "4", q: "Abettor.", outline: ["s.46; three modes in s.45."] }
        ],
        check: ["Three modes of abetment.", "Conspiracy = agreement.", "One attempt test + one case."]
      },
      {
        id: "cr-exceptions",
        unit: 3,
        yield: "high",
        tags: ["private defence", "insanity", "mistake", "intoxication", "14-44"],
        title: "General exceptions — mistake, accident, necessity, age, unsoundness, drunkenness, private defence",
        summary: "BNS ss.14–44 are the exception kernel. Private defence (34–44) is the 20-marker. Legal vs medical insanity is a BNS-paper short note.",
        explainer: `<p>These are not ‘defences you invent’; they are statutory negatives of offence. Burden: prosecution proves the offence; accused may raise exception (evidential burden; see Evidence Act / BSA on general exceptions — mention without a treatise).</p>
        <p><strong>Mistake:</strong> s.14 (bound by law / mistake of fact) and s.17 (justified / mistake of fact). <em>Mistake of law is no excuse</em> — 2024 Contract paper even teased a cousin phrase. Fact vs law is the axe (<em>R v Prince</em> vs <em>R v Tolson</em> English pair; Indian <em>State of Orissa v Ram Bahadur Thapa</em> ghost-hunting sometimes taught).</p>
        <p><strong>Accident:</strong> s.18 — lawful act, lawful manner, lawful means, proper care and caution. <strong>Necessity:</strong> s.19 — without criminal intent, to prevent other harm; proportionate. Not a defence to murder in the Dudley &amp; Stephens English extreme (exam garnish).</p>
        <p><strong>Age:</strong> s.20 child &lt;7 doli incapax; s.21 child ≥7 &lt;12 and immature understanding. Juvenile Justice statute overlays procedure — don’t mix punishment with JJ Board process unless asked.</p>
        <p><strong>Unsoundness of mind — s.22 (IPC 84):</strong> McNaughten logic — incapacity to know the nature of the act, or that it is wrong/contrary to law, at the time of the act, by reason of unsoundness. <strong>Legal vs medical insanity</strong> (Dec 2024 BNS Sec A): medical diagnosis ≠ automatic s.22; the law asks cognitive capacity vis-à-vis the act. <em>Dahyabhai</em>; <em>Hari Singh Gond</em>.</p>
        <p><strong>Intoxication:</strong> s.23 involuntary (against will / without knowledge) can excuse; s.24 voluntary — knowledge/intent presumed as if sober where the offence needs that mens rea. Drunkenness is not a holiday.</p>
        <p><strong>Private defence — ss.34–44 (IPC 96–106):</strong> shield not sword. s.35: defend body of self/others against human-body offences; property against theft, robbery, mischief, criminal trespass (and attempts). s.37: no PD against an act of a public servant in good faith unless it reasonably causes apprehension of death/grievous hurt; no more harm than necessary; no PD if there is time to seek public authorities. <strong>s.38 body → death</strong> (≈ IPC 100): assault causing reasonable apprehension of death, grievous hurt, rape, acid, kidnapping, wrongful confinement, etc. (learn the enumerated list from the bare act — BNS re-clauses it). <strong>s.41 property → death:</strong> robbery; house-breaking after sunset and before sunrise; mischief by fire to dwelling; theft/mischief/house-trespass with apprehension of death/GH. Commencement/continuance: ss.40, 43 — right starts with reasonable apprehension, not with the first wound.</p>`,
        analogy: {
          title: "Firewall allows drop; not proactive DDoS",
          body: "Private defence drops incoming hostile packets. It does not license you to scan-and-burn the neighbour’s ASN after the attack ended. Insanity is a kernel panic at t=offence, not a medical PDF in the file. Voluntary intoxication still compiles intent under s.24."
        },
        diagram: {
          type: "vflow",
          steps: [
            "Is there time to call the State? If yes, PD shrinks",
            "Is the attack one of the s.38 / s.41 lists?",
            "If yes, harm up to death may be proportionate",
            "Else s.39/42 — harm other than death only"
          ]
        },
        mnemonic: {
          name: "SHIELD NOT SWORD",
          hook: "McNaughten for s.22. EDS is Consti Art. 20 — don’t mix. PD lists: copy from bare act the night before.",
          recite: "Mistake of fact ≠ law. Child 7 / 12. Legal insanity. 34–44 PD with death gates at 38 and 41."
        },
        cases: [
          { name: "R v McNaughten", citation: "(1843) 10 Cl & Fin 200", point: "Cognitive test imported into s.22." },
          { name: "Dahyabhai v State of Gujarat", citation: "AIR 1964 SC 1563", point: "Burden on insanity plea." },
          { name: "Darshan Singh v State of Punjab", citation: "(2010) 2 SCC 333", point: "Private defence principles restated." },
          { name: "Amjad Khan", citation: "AIR 1952 SC 165", point: "PD — apprehension, not actual wound first." }
        ],
        pyqs: [
          {
            year: "Dec 2022",
            section: "C",
            marks: "20",
            q: "Private defence of person (when it extends to death).",
            outline: ["ss.34–37 limits; s.38 list; commencement; cases; ‘shield not sword’ close. Map IPC 96–100 if practising old papers."]
          },
          { year: "Dec 2024 BNS", section: "A", marks: "4", q: "Legal insanity vs medical insanity.", outline: ["s.22 cognitive test vs diagnosis."] }
        ],
        check: ["s.38 list in outline.", "Legal vs medical insanity.", "s.23 vs s.24 intoxication."]
      },
      {
        id: "cr-homicide",
        unit: 4,
        yield: "high",
        tags: ["100", "101", "103", "105", "106", "murder", "culpable homicide"],
        title: "Offences against the human body — culpable homicide, murder, rash/negligent death",
        summary: "All murder ⊂ culpable homicide. CH is the circle; murder is the bullseye. Highest-weight essay on the paper. BNS 100/101/103/105/106.",
        explainer: `<p><strong>Culpable homicide — BNS 100 (IPC 299):</strong> causing death by doing an act with (a) intention of causing death, or (b) intention of causing such bodily injury as is likely to cause death, or (c) knowledge that the act is likely to cause death. This is the genus.</p>
        <p><strong>Murder — BNS 101 (IPC 300):</strong> culpable homicide is murder if: (1) intention to cause death; (2) intention to cause bodily injury that the offender knows is likely to cause death of that person; (3) intention to cause bodily injury sufficient in the ordinary course of nature to cause death; (4) knowledge that the act is so imminently dangerous that it must in all probability cause death, and committed without excuse. Then the <strong>exceptions</strong> (grave and sudden provocation; private defence exceeded in good faith; public servant exceeded; sudden fight without premeditation; consent of the deceased above 18 in limited settings) pull the case down to CH not amounting to murder — punished under BNS 105 (IPC 304).</p>
        <p><strong>Punishment for murder — BNS 103 (IPC 302):</strong> death or life + fine. <strong>s.103(2)</strong> addresses murder by a group of five or more on specified identity grounds (the ‘lynching’ clause in public commentary) — verify the exact text; it is a BNS-era hook older Unique IPC books lack.</p>
        <p><strong>The Govinda / Inder Singh style distinction:</strong> probability vs sufficiency; knowledge vs intention; ‘likely’ (CH) vs ‘sufficient in ordinary course’ (murder clause 3). <em>Reg. v Govinda</em> (1876 Bom) is the teaching case; SC restatements in <em>Virsa Singh</em> (clause 3: intended injury, objectively sufficient), <em>State of A.P. v R. Punnayya</em>, <em>Anda v State of Rajasthan</em>.</p>
        <p><strong>Causing death by negligence — BNS 106 (IPC 304A):</strong> rash or negligent act not amounting to CH. Hit-and-run / escape clauses in 106(2) (enhanced, and a later political/legal controversy about notification — for exams, know that 106 is not 101, and that escaping after rash driving is an aggravator in the BNS text). <em>Jacob Mathew</em> (criminal medical negligence — gross, not mere error).</p>
        <p>Structure every 20-marker as: definitions → four murder clauses → five exceptions → table → two cases → 106 as a leftover bucket.</p>`,
        analogy: {
          title: "Circle vs bullseye",
          body: "Culpable homicide is the homicide circle. Murder is the centre bullseye with aggravated mens rea. Exceptions are gravity assists that throw you back to the ring (s.105). 106 is a different product: no CH mens rea, only rashness/negligence."
        },
        diagram: {
          type: "compare",
          headers: ["", "CH (BNS 100)", "Murder (BNS 101)", "s.106"],
          rows: [
            ["Mens rea", "Intention/knowledge likely death", "The four special mental states", "Rashness / negligence"],
            ["IPC", "299", "300 / 302", "304A"],
            ["If exception applies", "—", "Drops to s.105", "Not CH at all"]
          ]
        },
        mnemonic: {
          name: "GENUS / SPECIES / NEGLIGENCE",
          hook: "100 circle, 101 bullseye, 105 demotion, 106 other product.",
          recite: "Virsa Singh for clause 3. Always list exceptions. Write BNS numbers first."
        },
        cases: [
          { name: "Virsa Singh v State of Punjab", citation: "AIR 1958 SC 465", point: "s.300 clause 3 / BNS 101 analogue — intended injury sufficient in ordinary course." },
          { name: "State of A.P. v Rayavarapu Punnayya", citation: "(1976) 4 SCC 382", point: "CH vs murder restated." },
          { name: "Reg v Govinda", citation: "(1876) 1 Bom 342", point: "Teaching distinction." },
          { name: "Jacob Mathew v State of Punjab", citation: "(2005) 6 SCC 1", point: "Criminal rashness vs civil negligence." }
        ],
        pyqs: [
          {
            year: "Dec 2024 BNS / Dec 2023 IPC",
            section: "C",
            marks: "20",
            q: "Culpable homicide vs murder under BNS with case laws.",
            outline: ["Genus/species; 100 vs 101 clauses; exceptions; Virsa Singh; 103/105; 106 contrast."]
          }
        ],
        check: ["Four murder clauses.", "Five exceptions.", "Virsa Singh in three lines."]
      },
      {
        id: "cr-body-other",
        unit: 4,
        yield: "high",
        tags: ["hurt", "grievous", "kidnapping", "abduction", "wrongful restraint", "assault"],
        title: "Hurt & grievous hurt, kidnapping & abduction, wrongful restraint & confinement, assault & criminal force",
        summary: "Four distinction-pairs that CCS repeats as ‘comment on any two.’ Learn ingredients, not essays.",
        explainer: `<p><strong>Hurt — BNS 114 (IPC 319):</strong> causing bodily pain, disease or infirmity. <strong>Grievous hurt — BNS 116 (IPC 320):</strong> eight clauses — emasculation; permanent privation of eye/ear; privation of any member or joint; destruction/permanent impairing of powers of member/joint; permanent disfiguration of head or face; fracture or dislocation of bone or tooth; any hurt endangering life or causing the sufferer severe bodily pain / unable to follow ordinary pursuits for 20 days. Voluntarily causing: ss.115, 117. Weapons/poison/acid nearby (118, 123, 124).</p>
        <p><strong>Wrongful restraint — BNS 126 (IPC 339):</strong> voluntarily obstructing a person so as to prevent him from proceeding in any direction in which he has a right to proceed. <strong>Wrongful confinement — BNS 127 (IPC 340):</strong> wrongful restraint that prevents proceeding beyond certain circumscribing limits. Circle vs locked room. 2023 Sec C distinguish pair.</p>
        <p><strong>Force / criminal force / assault — BNS 128–130 (IPC 349–351):</strong> force is the physical idea; criminal force is force without consent with intent to commit an offence / cause injury, fear, annoyance; assault is a gesture or preparation causing apprehension of imminent criminal force — no contact needed. 2022 short notes: grievous hurt; criminal force.</p>
        <p><strong>Kidnapping — BNS 137 (IPC 359–363):</strong> (i) kidnapping from India; (ii) kidnapping from lawful guardianship — taking or enticing a child (age in BNS: check current text — IPC was 16 male/18 female; BNS uses ‘child’ defined in s.2 — typically 18) out of the keeping of the lawful guardian without consent. Age, guardian, taking/enticing. <strong>Abduction — BNS 138 (IPC 362):</strong> by force or deceitful means inducing a person to go from any place. Abduction is not always an offence by itself — it is the stem for aggravated forms (s.140 ransom/murder etc.). Kidnapping from guardianship is a completed offence when the taking is done; abduction is often continuing. Consent of the child is immaterial for kidnapping from guardianship; age of the abducted person matters differently.</p>
        <p>Dec 2024 BNS Q8 is this pair. Always table it.</p>`,
        analogy: {
          title: "Ports, cages, and session hijack",
          body: "Wrongful restraint closes one port you had a right to use. Confinement closes the security group entirely. Kidnapping from guardianship is pulling a minor off a parent process without the parent’s consent. Abduction is session hijack of anyone by force or phishing (deceit)."
        },
        diagram: {
          type: "compare",
          headers: ["Pair", "A", "B"],
          rows: [
            ["Hurt / GH", "Pain/disease/infirmity", "Eight clauses including 20-day disablement"],
            ["Restraint / confinement", "Block a direction", "Block all beyond limits"],
            ["Assault / criminal force", "Apprehension", "Actual force without consent"],
            ["Kidnapping / abduction", "From India or guardian; child", "Force or deceit; any person; often inchoate stem"]
          ]
        },
        mnemonic: { name: "EIGHT CLAUSES / AGE GATE", hook: "GH list is rote. Kidnap vs abduct is a table, not a paragraph.", recite: "126 vs 127 every year. 137 vs 138 every other year." },
        cases: [
          { name: "S. Varadarajan v State of Madras", citation: "AIR 1965 SC 942", point: "Taking vs going willingly — kidnapping from guardianship." },
          { name: "Vishwanath v State of U.P. (hurt illustrations)", citation: "textbook SC line", point: "Use your commentary’s GH illustrations; don’t invent facts." }
        ],
        pyqs: [
          { year: "Dec 2023", section: "C", marks: "20", q: "Distinguish (a) rioting & affray (b) wrongful restraint & confinement.", outline: ["Two mini-tables; ingredients; one example each."] },
          { year: "Dec 2024 BNS", section: "B", marks: "10", q: "Kidnapping under BNS; difference from abduction.", outline: ["137 ingredients; 138; age; consent; continuing offence."] }
        ],
        check: ["Eight GH clauses.", "126 vs 127.", "137 vs 138 table."]
      },
      {
        id: "cr-property",
        unit: 4,
        yield: "high",
        tags: ["theft", "extortion", "robbery", "dacoity", "cheating", "303", "308", "309", "310", "318"],
        title: "Property offences — theft, extortion, robbery, dacoity, cheating",
        summary: "A ladder: dishonest moving (theft) → fear-delivery (extortion) → theft/extortion+violence (robbery) → robbery×5 (dacoity). Cheating is a deception track.",
        explainer: `<p><strong>Theft — BNS 303 (IPC 378/379):</strong> dishonest intention to take movable property out of a person’s possession without consent, moving it to such taking. Ingredients: movable; possession (not ownership!); dishonest (s.2 definitions — wrongful gain/loss); without consent; moving. Claim of right can punch a hole in dishonesty. 2023 problem: moving a box inside a house — asportation starts the taking. BNS <strong>304 snatching</strong> is a new named offence — a 2026 delta short note.</p>
        <p><strong>Extortion — BNS 308 (IPC 383):</strong> intentionally putting in fear of injury and thereby dishonestly inducing delivery of property/valuable security. Delivery (even of one’s own cheque) vs theft’s taking. Fear, not necessarily of physical violence (fear of accusation can do).</p>
        <p><strong>Robbery — BNS 309 (IPC 390):</strong> theft is robbery if, in order to commit theft / carrying away, the offender voluntarily causes or attempts to cause death, hurt, or wrongful restraint, or fear of instant death/hurt/restraint. Extortion is robbery if in the presence of the person, fear of instant death/hurt/restraint induces delivery. Violence or instant fear is the upgrade chip.</p>
        <p><strong>Dacoity — BNS 310 (IPC 391/395):</strong> robbery by five or more conjointly. Attempt, prep, assembly, gang membership have sub-clauses. 310(3) dacoity with murder is the terror end of the ladder.</p>
        <p><strong>Cheating — BNS 318 (IPC 415/420):</strong> deceiving a person, fraudulently or dishonestly inducing delivery of property or the making/altering of a valuable security, or intentionally inducing an act/omission the person would not do if not deceived, causing or likely to cause damage/harm to body, mind, reputation, property. Dishonest concealment can be deception. Mere breach of contract is not cheating — mens rea at inception is the SC’s usual axe (<em>Hridaya Ranjan Prasad Verma</em>). 318(4) style aggravated cheating (old 420) — verify subsection numbering in your bare act.</p>
        <p>Dec 2024 BNS Q9: theft vs extortion. 2022: theft→robbery ladder.</p>`,
        analogy: {
          title: "Take, scare, escalate, gang, phish",
          body: "Theft is a silent cp of a volume you don’t own. Extortion is ransomware: fear then you hand over the keys. Robbery is either copy with a weapon in the room or ransomware with a knife at the throat. Dacoity is that raid with five operators. Cheating is a phishing site you typed your credentials into."
        },
        diagram: {
          type: "flow",
          steps: ["Theft (take+move)", "+ violence/instant fear → Robbery", "+ ≥5 persons → Dacoity"],
          title: "Property ladder (extortion joins at the robbery gate)"
        },
        mnemonic: {
          name: "MOVE · FEAR · VIOLENCE · FIVE · DECEIT",
          hook: "303 / 308 / 309 / 310 / 318. Possession not title for theft.",
          recite: "Without consent + dishonest + movable + possession + moving. Cheating needs deception at the start, not a later breach."
        },
        cases: [
          { name: "Pyare Lal Bhargava v State of Rajasthan", citation: "AIR 1963 SC 1094", point: "Temporary taking can be theft." },
          { name: "Hridaya Ranjan Prasad Verma v State of Bihar", citation: "(2000) 4 SCC 168", point: "Cheating vs civil breach." },
          { name: "State of Maharashtra v Vishwanath", citation: "robbery illustrations", point: "Use commentary facts; violence upgrades theft." }
        ],
        pyqs: [
          { year: "Dec 2024 BNS", section: "C", marks: "20", q: "Theft under BNS; difference from extortion.", outline: ["303 ingredients; 308 ingredients; taking vs delivery; fear vs stealth; illustrations."] },
          { year: "Dec 2022", section: "C", marks: "20", q: "When theft becomes robbery.", outline: ["390/309 gates; instant fear; examples."] }
        ],
        check: ["Five theft ingredients.", "When extortion is robbery.", "Cheating ≠ breach of contract."]
      },
      {
        id: "cr-state",
        unit: 4,
        yield: "high",
        tags: ["152", "sedition", "unlawful assembly", "rioting", "affray", "189", "191", "194"],
        title: "State & public tranquility — BNS 152 (ex-sedition), unlawful assembly, rioting, affray",
        summary: "Do not paste an IPC 124A essay into a BNS paper. 152 is sovereignty/unity/integrity. 189–194 is the street-fight cluster.",
        explainer: `<p><strong>From sedition to s.152:</strong> IPC 124A punished exciting disaffection toward the Government established by law. It was politically radioactive (<em>Kedarnath Singh</em> saved it with a violence/public-order gloss; later pending challenges). <strong>BNS 152</strong> — act endangering sovereignty, unity and integrity of India — is a differently worded offence (secession, armed rebellion, subversive activities, feelings of separatist activities… — quote from your bare act). Exam instruction: explain the <em>shift</em>, Kedarnath’s old gloss, and why copy-pasting ‘disaffection’ is a 2026 fail. Also: BNS 149 is <em>not</em> IPC 149 — BNS 149 is collecting arms to wage war. Common object is BNS 190. Mixing those numbers is a classic trap.</p>
        <p><strong>Unlawful assembly — BNS 189 (IPC 141):</strong> five or more; common object of the five types (intimidate by criminal force, resist law, commit mischief/criminal trespass, force/show of force to any person, compel by force any illegal act / omission of legal act — verify clause wording). Lawful gathering becomes unlawful when the object turns. Dec 2024 BNS Q6.</p>
        <p><strong>Rioting — BNS 191 (IPC 146):</strong> an unlawful assembly using force or violence in prosecution of its common object. Every member is guilty of rioting. Aggravators: deadly weapons.</p>
        <p><strong>Affray — BNS 194 (IPC 159/160):</strong> two or more fighting in a public place, disturbing public peace. Private fight in a locked house is not affray. Minimum two, not five. No ‘common object’ architecture.</p>
        <p>2023 distinguish: rioting vs affray — table persons, place, assembly, object.</p>`,
        analogy: {
          title: "152 is a different CVE than 124A",
          body: "Sedition was a vague ‘disaffection’ detector on the government process. 152 is scoped to sovereignty/unity/integrity — still a serious kernel module, but the function signature changed. Unlawful assembly is a five-node cluster with a bad objective; rioting is that cluster sending force packets; affray is a two-node public brawl with no cluster protocol."
        },
        diagram: {
          type: "compare",
          headers: ["", "Unlawful assembly 189", "Rioting 191", "Affray 194"],
          rows: [
            ["Persons", "≥5", "≥5 (it’s an UA using force)", "≥2"],
            ["Place", "Anywhere", "Anywhere", "Public place"],
            ["Extra", "Common object of listed kinds", "Force/violence in prosecution of object", "Fight + disturb peace"]
          ]
        },
        mnemonic: {
          name: "DON’T WRITE 124A BLIND",
          hook: "BNS 152 ≠ IPC 124A. BNS 149 ≠ IPC 149. 190 is the 149-IPC child.",
          recite: "189 assembly, 191 riot, 194 affray. Kedarnath is history for 124A; 152 needs fresh text."
        },
        cases: [
          { name: "Kedarnath Singh v State of Bihar", citation: "AIR 1962 SC 955", point: "124A saved with violence/tendency gloss — discuss as pre-BNS." },
          { name: "Mizra v Emperor / UA classics", citation: "commentary", point: "Five persons + object; sudden assembly possible." }
        ],
        pyqs: [
          { year: "Dec 2023", section: "C", marks: "20", q: "Sedition with cases.", outline: ["For 2026: history of 124A + Kedarnath, then BNS 152 text and differences."] },
          { year: "Dec 2024 BNS", section: "B", marks: "10", q: "Essentials of unlawful assembly under BNS 2023.", outline: ["189; five objects; when lawful meeting turns; 190 overlay."] }
        ],
        check: ["152 vs 124A in four lines.", "189 ingredients.", "Rioting vs affray table."]
      },
      {
        id: "cr-marriage",
        unit: 4,
        yield: "standard",
        tags: ["bigamy", "adultery", "82", "joseph shine"],
        title: "Marriage offences — bigamy; adultery’s legal death",
        summary: "Bigamy (BNS 82) lives. Adultery (IPC 497) was struck in Joseph Shine and is omitted in BNS. Teach both because old PYQs still say ‘adultery.’",
        explainer: `<p><strong>Bigamy — BNS 82 (IPC 494):</strong> marrying again during the lifetime of a spouse, the later marriage being void by reason of it. Exceptions: first marriage declared void; spouse absent for seven years not heard of (with disclosure). Personal law: Muslim polygamy authorised by personal law is the classic exam complication — 494 applies to those whose personal law makes the second marriage void (Hindus post-HMA s.17; Christians; etc.). Conversion to Islam to defeat monogamy has been judicially frowned on (<em>Sarla Mudgal</em>, <em>Lily Thomas</em>).</p>
        <p><strong>Adultery:</strong> IPC 497 was a gendered, husband-centric offence (woman not punished; husband of the woman as the ‘victim’). <em>Joseph Shine v Union of India</em> (2018) struck 497 as unconstitutional (Arts. 14, 15, 21 — privacy, dignity, equality). BNS does <strong>not</strong> revive it. 2022 short note ‘Bigamy’ still appears; older papers ask adultery. 2026 answers: history + unconstitutionality + omission. Civil/matrimonial remedies (divorce grounds) are not the same as a crime.</p>
        <p>Related BNS: s.81 deceitful cohabitation; s.84 enticing a married woman (a residual, controversial cousin — mention only if asked). Dowry death s.80 appeared in Dec 2024 BNS Q11 — off the old K-1004 marriage bullet but live in BNS papers; ingredients: death by burns/bodily injury / otherwise than under normal circumstances within 7 years of marriage + cruelty/harassment for dowry soon before death (presumption architecture in Evidence/BSA).</p>`,
        analogy: {
          title: "Monogamy as a unique-key constraint",
          body: "Bigamy is inserting a second primary spouse key while the first row still lives, when your personal-law schema forbids it. Adultery was a badly designed trigger that only fired against the paramour and treated the wife as property — dropped from the schema after Joseph Shine and not re-created in BNS."
        },
        diagram: {
          type: "compare",
          headers: ["", "Bigamy BNS 82", "Adultery IPC 497"],
          rows: [
            ["Status 2026", "In force", "Struck + omitted in BNS"],
            ["Wrong", "Second marriage while first subsists (when void)", "Sex with another’s wife without husband’s ‘connivance’ (old)"],
            ["Must cite", "Sarla Mudgal / Lily Thomas if conversion facts", "Joseph Shine (2018)"]
          ]
        },
        mnemonic: { name: "82 LIVES / 497 DEAD", hook: "Joseph Shine + BNS omission. Personal law exception is the bigamy trap.", recite: "If the question still says adultery, write constitutional history, do not ‘apply 497.’" },
        cases: [
          { name: "Joseph Shine v Union of India", citation: "(2019) 3 SCC 39", point: "497 unconstitutional." },
          { name: "Sarla Mudgal v Union of India", citation: "(1995) 3 SCC 635", point: "Conversion and second marriage." },
          { name: "Lily Thomas v Union of India", citation: "(2000) 6 SCC 224", point: "Follow-on to Sarla Mudgal." }
        ],
        pyqs: [
          { year: "Dec 2022", section: "A", marks: "4", q: "Bigamy.", outline: ["Ingredients; exceptions; personal law; one case."] },
          { year: "theme", section: "B", marks: "10", q: "Adultery.", outline: ["Old 497; constitutional defects; Joseph Shine; BNS omission; civil residual."] }
        ],
        check: ["82 ingredients + exception.", "Joseph Shine holdings.", "Do not cite 497 as live criminal law."]
      }
    ]
  };
})(window);

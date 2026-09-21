(function (g) {
  g.LLB = g.LLB || {};
  g.LLB.papers = g.LLB.papers || {};
  g.LLB.papers.k1004 = {
    id: "k1004",
    code: "K-1004",
    title: "Law of Crimes-I (BNS 2023 + IPC map)",
    short: "Crimes · BNS",
    blurb: "Tracks Paranjape’s BNS commentary. Official PDF still says IPC; Dec 2024/25 papers title BNS. IPC numbers stay in mapping tables.",
    shelf: {
      primary: "Dr. N.V. Paranjape — <em>The Bharatiya Nyaya Sanhita, 2023</em>"
    },
    youtube: [
      { title: "Complete BNS one-shot", search: "Complete BNS in Hindi StudyIQ After LLB" },
      { title: "CH vs Murder BNS", search: "BNS vs IPC murder culpable homicide" },
      { title: "34 vs 149", search: "Section 34 vs 149 IPC BNS common intention common object" }
    ],
    topics: [
      {
        id: "cr-general",
        seq: 1,
        readAs: "Survey — general principles (mens rea, stages, 3(5)/190 live on drills)",
        unit: 1,
        yield: "high",
        tags: ["mens rea", "actus reus", "stages", "strict liability", "34", "149", "3(5)", "190"],
        title: "General principles — crime, elements, stages, strict & constructive liability, common intention & common object",
        summary: "Crime = public wrong with a statutory label. Default stack: actus reus + mens rea. Stages: intention → preparation → attempt → completion. Constructive liability: BNS 3(5) vs 190.",
        explainer: `<aside class="note"><h3>One-home — survey; drills unpack the 20-markers</h3>
        <p>Mens rea: <button type="button" class="text-link" data-nav="k1004" data-topic="cr-mens-rea">actus reus / mens rea</button>. Stages essay: <button type="button" class="text-link" data-nav="k1004" data-topic="cr-stages">I-P-A-C</button>. Unlawful assembly / common object: <button type="button" class="text-link" data-nav="k1004" data-topic="cr-unlawful-assembly">189/190</button>. This card is the stack; do not rewrite those essays here.</p></aside>
        <p>Paranjape’s BNS book follows the Sanhita: preliminary (ss.1–3, including common intention in <strong>s.3(5)</strong>), then punishments, then general exceptions. CCS still asks “crime, elements, stages, constructive liability” as one unit — write BNS numbers first, IPC in parentheses for 2022–23 papers and older SC citations.</p>
        <p><strong>Concept of crime:</strong> a public wrong, prohibited by the Sanhita (or special statute), prosecuted in the name of the State, punishable with the BNS punishments (s.4: death, life, imprisonment, forfeiture, fine, community service — community service is a BNS novelty worth a short note). Blackstone/Kenny/Austin one-liners still decorate Section A. Moral turpitude is neither necessary nor sufficient (strict liability regulatory offences; adultery’s moral story vs its legal death).</p>
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
        seq: 3,
        readAs: "Inchoate home (attempt vs preparation is a drill)",
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
        seq: 2,
        readAs: "Paranjape BNS — general exceptions &amp; private defence (ss.14–44)",
        unit: 3,
        yield: "high",
        tags: ["private defence", "insanity", "mistake", "intoxication", "14-44"],
        title: "General exceptions — mistake, accident, necessity, age, unsoundness, drunkenness, private defence",
        summary: "BNS ss.14–44 are the exception kernel. Private defence (34–44) is the 20-marker. Legal vs medical insanity is a BNS-paper short note.",
        explainer: `<p>In the Sanhita — and therefore in Paranjape — general exceptions (including private defence) come <strong>before</strong> abetment. CCS older IPC papers often asked inchoate offences first. Follow the book: lock ss.14–44, then do ch. 4 inchoate.</p>
        <p>These are not ‘defences you invent’; they are statutory negatives of offence. Burden: prosecution proves the offence; accused may raise exception (evidential burden; see Evidence Act / BSA on general exceptions — mention without a treatise).</p>
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
        seq: 4,
        readAs: "Unit 4 — CH / murder home (exceptions are a drill card)",
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
        <p>Structure every 20-marker as: definitions → four murder clauses → five exceptions → table → two cases → 106 as a leftover bucket. The full model answer is in <strong>Worked answers</strong> below. Murder exceptions unpacked: <button type="button" class="text-link" data-nav="k1004" data-topic="cr-murder-exceptions">the five exceptions card</button>.</p>`,
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
        seq: 5,
        readAs: "Paranjape BNS — hurt, restraint, assault, kidnapping (ss.114–138)",
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
        seq: 7,
        readAs: "Property survey (theft ladder / cheating / snatching are drills)",
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
        seq: 6,
        readAs: "State/tranquility survey (152 and 189/190 are drills)",
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
        seq: 8,
        readAs: "Paranjape BNS — marriage offences (ss.80–87); BNS commentary places this chapter before the human-body chapter",
        unit: 4,
        yield: "standard",
        tags: ["bigamy", "adultery", "82", "joseph shine"],
        title: "Marriage offences — bigamy; adultery’s legal death",
        summary: "Bigamy (BNS 82) lives. Adultery (IPC 497) was struck in Joseph Shine and is omitted in BNS. Teach both because old PYQs still say ‘adultery.’",
        explainer: `<p>Paranjape’s BNS commentary follows the Sanhita: offences relating to marriage (ss.80–87) sit in the women-and-children chapter, <strong>before</strong> culpable homicide. CCS still lists bigamy/adultery as a tail unit — we keep the topic last so PYQ drills feel familiar, but you should physically read it where Paranjape prints it.</p>
        <p><strong>Bigamy — BNS 82 (IPC 494):</strong> marrying again during the lifetime of a spouse, the later marriage being void by reason of it. Exceptions: first marriage declared void; spouse absent for seven years not heard of (with disclosure). Personal law: Muslim polygamy authorised by personal law is the classic exam complication — 494 applies to those whose personal law makes the second marriage void (Hindus post-HMA s.17; Christians; etc.). Conversion to Islam to defeat monogamy has been judicially frowned on (<em>Sarla Mudgal</em>, <em>Lily Thomas</em>).</p>
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
      },
      {
        id: "cr-mens-rea",
        seq: 1.2,
        readAs: "Drill — mens rea / actus reus (from general principles)",
        unit: 1,
        yield: "high",
        tags: ["mens rea", "actus reus", "actus non facit", "strict liability"],
        title: "Mens rea and actus reus",
        summary: "Actus non facit reum nisi mens sit rea: a forbidden act plus a guilty mind, unless the statute is a strict-liability offence. Dec 2024 quoted the maxim; 2022 asked mens rea as a mid-marker.",
        explainer: `<p><strong>Actus reus:</strong> a willed bodily movement (or a legally relevant omission where duty exists), plus the prescribed circumstances and consequences. Sleepwalking / reflex is not a willed act. Possession can be an actus if knowledge is built in.</p>
        <p><strong>Mens rea:</strong> the mental element the definition requires — intention, knowledge, rashness, negligence, dishonesty, fraudulently (BNS/IPC definition clauses). Not a single mood called ‘guilt.’ Transfer of malice / transferred intent still works when A aims at B and hits C.</p>
        <p><strong>Maxim:</strong> <em>actus non facit reum nisi mens sit rea</em> — the act does not make a person guilty unless the mind is also guilty. Dec 2024 Section A. Exceptions: public-welfare / strict-liability offences (food adulteration, some traffic, some economic statutes) where the statute is silent and the penalty/regulatory purpose shows Parliament did not want a mens rea fight. Common-law presumption of mens rea (<em>Sherras v De Rutzen</em>; Indian <em>State of Maharashtra v M.H. George</em> flavour) still opens the essay.</p>
        <p><strong>BNS:</strong> definitions of dishonestly, fraudulently, reason to believe, voluntarily live in the general part (learn the numbers from the bare act). Strict / constructive liability also sit in this paper’s general-principles unit — 3(5) common intention is constructive, not ‘no mens rea.’</p>`,
        analogy: {
          title: "Forbidden syscall + intent flag",
          body: "Actus reus is the syscall that is not on the allow-list. Mens rea is the intent flag in the process (knowing, intending, dishonest). Strict liability is a watchdog that kills the process on the syscall alone — rare, and you must justify why the statute dropped the flag."
        },
        diagram: {
          type: "tree",
          root: "Crime",
          branches: ["Actus reus (willed act/omission + circumstances)", "Mens rea (as defined)", "Unless statute is strict-liability"]
        },
        mnemonic: {
          name: "ACT + MIND (unless statute strips the mind)",
          hook: "Dec 2024 maxim. Constructive liability ≠ no mens rea.",
          recite: "Intention / knowledge / rashness / negligence / dishonesty are different flags. Name the one in the section."
        },
        cases: [
          { name: "Sherras v De Rutzen", citation: "[1895] 1 QB 918", point: "Presumption of mens rea." },
          { name: "State of Maharashtra v Mayer Hans George", citation: "AIR 1965 SC 722", point: "Statutory offence / mens rea — Indian discussion piece." }
        ],
        pyqs: [
          {
            year: "Dec 2024 BNS",
            section: "A",
            marks: "4",
            q: "Actus non facit reum nisi mens sit rea.",
            outline: ["Translate; act + mind; exception for strict liability; one illustration."]
          },
          { year: "2022", section: "B", marks: "10", q: "Mens rea.", outline: ["Define; forms; maxim; statutory silence; constructive liability contrast."] }
        ],
        check: ["Translate the maxim.", "Four species of mens rea.", "When strict liability is argued."]
      },
      {
        id: "cr-mistake",
        seq: 2.2,
        readAs: "Paranjape BNS — mistake of fact vs law (ss.14, 17)",
        unit: 3,
        yield: "high",
        tags: ["mistake of fact", "mistake of law", "bns 14", "bns 17"],
        title: "Mistake of fact vs mistake of law",
        summary: "Mistake of fact can excuse (BNS 14 / 17). Mistake of law almost never does. 2022 short-noted mistake of fact; the distinction is a standard 10-marker.",
        explainer: `<p><strong>BNS 14 (IPC 76):</strong> nothing is an offence if done by a person who is, or who by reason of a mistake of fact and not by reason of a mistake of law in good faith believes himself to be, bound by law to do it. Classic: soldier firing under a lawful-looking order that is, in fact, a mistake of identity/facts.</p>
        <p><strong>BNS 17 (IPC 79):</strong> nothing is an offence if done by a person justified by law, or who by reason of a mistake of fact and not a mistake of law in good faith believes himself justified. Classic: arresting the wrong man in good faith believing a warrant/facts that would justify arrest.</p>
        <p><strong>Mistake of law:</strong> ignorantia juris non excusat. You cannot defend a theft by saying you thought the BNS did not apply in this district. Tax and regulatory statutes sometimes create specific reliefs; that is not the general criminal exception.</p>
        <p><strong>Good faith</strong> (BNS definition): due care and attention — not mere honesty of a fool. A wild rumour is not a 14/17 fact.</p>
        <p>Pair with private defence: a mistake of fact about the threat can still feed BNS 34–44 if reasonable. Pair with bigamy: mistake of law about personal law is usually fatal; mistake of fact about the spouse’s death (seven-year exception) is a different clause.</p>`,
        analogy: {
          title: "Wrong config vs ‘I didn’t read the RFC’",
          body: "Mistake of fact: you SSH’d into the wrong box because the inventory DB pointed there in good faith. Mistake of law: you deleted production and say you thought the security policy was optional. 14/17 only cover the inventory error, with due care."
        },
        diagram: {
          type: "compare",
          headers: ["", "Mistake of fact (14/17)", "Mistake of law"],
          rows: [
            ["Excuse?", "Yes, if good faith + due care", "Generally no"],
            ["Illustration", "Wrong person under a justified-looking arrest", "‘I didn’t know this was an offence’"],
            ["IPC cousins", "76 / 79", "ignorantia juris"]
          ]
        },
        mnemonic: {
          name: "FACT YES / LAW NO",
          hook: "14 bound-by-law; 17 justified-by-law. Both need good faith.",
          recite: "Good faith = due care, not a shrug."
        },
        cases: [
          { name: "R v Prince (contrast)", citation: "(1875) LR 2 CCR 154", point: "English cautionary tale on fact/law — use lightly; Indian 14/17 text controls." },
          { name: "State of Orissa v Khora Ghasi / Indian 79 illustrations", citation: "commentary illustrations", point: "Hunt with good-faith belief in a dangerous animal — fact, not law." }
        ],
        pyqs: [
          { year: "2022", section: "A", marks: "4", q: "Mistake of fact.", outline: ["14/17; good faith; contrast law."] }
        ],
        check: ["14 vs 17 in one line each.", "Why good faith ≠ honesty alone.", "Law mistake default rule."]
      },
      {
        id: "cr-intoxication",
        seq: 2.4,
        readAs: "Paranjape BNS — drunkenness (ss.23–24)",
        unit: 3,
        yield: "high",
        tags: ["intoxication", "bns 23", "bns 24", "voluntary", "involuntary"],
        title: "Intoxication — involuntary vs voluntary (BNS 23–24)",
        summary: "Involuntary intoxication can wipe mens rea (BNS 23). Voluntary intoxication is almost never a defence; BNS 24 still treats you as knowing what a sober person would know when the offence needs intent/knowledge.",
        explainer: `<p><strong>BNS 23 (IPC 85):</strong> nothing is an offence if the person, at the time, is incapable of knowing the nature of the act or that it is wrong/contrary to law, by reason of intoxication <em>caused without his knowledge or against his will</em>. Spiked drink; forced intoxication. This is a true incapacity defence, cousin to unsoundness of mind (BNS 22 / IPC 84), but the cause is the drink you did not choose.</p>
        <p><strong>BNS 24 (IPC 86):</strong> where an act is not an offence unless done with a particular intent or knowledge, a person who does it in a state of intoxication shall be dealt with as if he had the same knowledge as he would have had if not intoxicated, unless the thing that intoxicated him was administered without his knowledge or against his will. Translation: voluntary drunks keep <em>knowledge</em> imputed; specific <em>intent</em> debates are narrower and dangerous to over-claim in CCS answers. Do not write “I was drunk so no murder.”</p>
        <p><strong>Exam:</strong> table involuntary vs voluntary; link 23 to 22’s McNaughten-style knowledge test; warn that Dutch courage is aggravation in sentencing talk, not a defence. 2022 short notes included good faith / injury — intoxication still rotates as a general-exception 10-marker.</p>`,
        analogy: {
          title: "Poisoned input vs you pip-installed vodka",
          body: "BNS 23: someone injected malware into your runtime — you are not treated as the author. BNS 24: you apt-get installed the vodka yourself. The OS still charges you with the knowledge a sober process would have had. You do not get to drop the intent flag because you pulled the flask."
        },
        diagram: {
          type: "compare",
          headers: ["", "Involuntary (23)", "Voluntary (24)"],
          rows: [
            ["How the drink arrived", "Without knowledge / against will", "Self-administered"],
            ["Defence?", "Yes, if capacity to know is gone", "Knowledge imputed; not a general defence"],
            ["Cousin", "Unsoundness (22)", "Dutch courage (aggravation talk)"]
          ]
        },
        mnemonic: {
          name: "SPIKED = 23 · SELF = 24",
          hook: "24 imputes knowledge of the sober person.",
          recite: "Never use vodka to downgrade murder to accident."
        },
        cases: [
          { name: "Director of Public Prosecutions v Beard (contrast)", citation: "[1920] AC 479", point: "English specific-intent discussion — do not let it overwrite BNS 24’s text." },
          { name: "Indian 85/86 commentary illustrations", citation: "Paranjape BNS", point: "Stick to the statute’s without-knowledge / against-will clause." }
        ],
        pyqs: [
          {
            year: "theme",
            section: "B",
            marks: "10",
            q: "How far is drunkenness a defence under the BNS?",
            outline: ["23 vs 24 table; knowledge imputation; unsoundness cousin; one problem fact-pattern."]
          }
        ],
        check: ["23’s two gates (without knowledge / against will).", "What 24 imputes.", "Why murder is not ‘reduced’ by a flask."]
      },
      {
        id: "cr-pd-limits",
        seq: 2.6,
        readAs: "Paranjape BNS — private defence body vs property (ss.34–44)",
        unit: 3,
        yield: "high",
        tags: ["private defence", "bns 38", "bns 41", "body", "property"],
        title: "Private defence — body vs property limits (when death is allowed)",
        summary: "Shield, not sword. Body and property have different death-justifying lists (BNS 38 vs 41). 2022 asked when private defence of person extends to death.",
        explainer: `<p><strong>Shared limits (BNS 34–37 / IPC 96–99 flavour):</strong> no private defence against an act that does not reasonably cause apprehension of harm; no more harm than necessary; no defence if there is time to fetch public authorities (with the usual caveats about suddenness); no defence against an act of a public servant acting in good faith under colour of office unless it reasonably causes the apprehension of death/grievous hurt.</p>
        <p><strong>Body — death allowed (BNS 38 / IPC 100 list):</strong> assault reasonably causing apprehension of death; of grievous hurt; of rape / grievous sexual assault; of kidnapping/abducting; of wrongfully confining in circumstances that may reasonably cause apprehension that the victim will be unable to have recourse to public authorities. Recite the list; do not invent ‘insult’ as a death case.</p>
        <p><strong>Property — death allowed (BNS 41 / IPC 103 list):</strong> robbery; house-breaking by night; mischief by fire on a human dwelling; theft/mischief/house-trespass in circumstances of reasonable apprehension of death/grievous hurt if private defence is not used. Property-alone daytime theft is not a shooting licence.</p>
        <p>2022 20-marker: private defence of person when it extends to death — open with shield principle, dump BNS 38 list, one illustration, then the public-servant and excess caveats. Map IPC 100 in parentheses for old PYQs.</p>`,
        analogy: {
          title: "Firewall drop rules, not a proactive DDoS",
          body: "Body-list = drop packets that look like kill/rape/kidnap. Property-list = drop the night-raid / robbery / fire-on-dwelling packets. You do not SYN-flood the neighbour because they pinged your garden gnome (daytime theft)."
        },
        diagram: {
          type: "compare",
          headers: ["", "Body (BNS 38)", "Property (BNS 41)"],
          rows: [
            ["Death OK if", "Death / GH / rape / kidnap / sealed confinement apprehension", "Robbery / night house-breaking / fire on dwelling / theft-with-death-apprehension"],
            ["Not death", "Mere insult or simple hurt", "Ordinary daytime theft"]
          ]
        },
        mnemonic: {
          name: "SHIELD · 38 BODY · 41 PROPERTY",
          hook: "Time to call police? Then usually no PD. Excess harm kills the defence.",
          recite: "IPC 100/103 live in parentheses. Public-servant good-faith acts are a special fence."
        },
        cases: [
          { name: "Darshan Singh v State of Punjab", citation: "(2010) 2 SCC 333", point: "Accused need not prove PD beyond reasonable doubt; burden nuances." },
          { name: "Jai Dev / English 100-list illustrations", citation: "SC line", point: "Apprehension must be reasonable." }
        ],
        pyqs: [
          {
            year: "2022",
            section: "C",
            marks: "20",
            q: "Private defence of person (when extends to death).",
            outline: ["Shield principle; limits; BNS 38 list with IPC 100 in brackets; excess; public servant; one case."]
          }
        ],
        check: ["Four body-death situations.", "Three property-death situations.", "The ‘time to fetch police’ limit."]
      },
      {
        id: "cr-murder-exceptions",
        seq: 4.2,
        readAs: "Drill — five murder exceptions (from CH/murder home)",
        unit: 4,
        yield: "high",
        tags: ["murder", "exceptions", "provocation", "bns 101", "ipc 300"],
        title: "Murder exceptions under BNS (grave provocation and the rest)",
        summary: "If the case is culpable homicide, the five (classic) exceptions pull it out of murder into punishable CH. Grave and sudden provocation is the celebrity; learn all five.",
        explainer: `<p>Structure: BNS 100 CH definition → BNS 101 murder when the CH matches the special clauses → <strong>exceptions</strong> to 101 (IPC 300 exceptions mapped). If an exception applies, it is still homicide, still punishable, but not murder (BNS 105 / IPC 304 flavour — write the current number from the bare act).</p>
        <p><strong>Exception 1 — grave and sudden provocation:</strong> the offender loses self-control; provocation is grave and sudden; not sought as an excuse; not given by a thing done in obedience to law / by a public servant in lawful exercise / in private defence. Words may or may not suffice — facts. Cooling-off kills the exception.</p>
        <p><strong>Exception 2 — private defence exceeded in good faith</strong> without an intention to do more harm than necessary. <strong>Exception 3 — public servant</strong> exceeding powers in good faith, believing himself bound/justified. <strong>Exception 4 — sudden fight</strong> in the heat of passion upon a sudden quarrel, without premeditation, not taking undue advantage or acting cruelly. <strong>Exception 5 — consent</strong> of a person above 18 (euthanasia/duel flavour — narrow and dangerous).</p>
        <p>Govinda / Inder Singh Deo style facts still teach the CH/murder line; exceptions are the second engine. Dec 2023/24 20-markers on CH vs murder should spend a dedicated paragraph here, not only on ‘intention vs knowledge.’</p>`,
        analogy: {
          title: "Murder is the bullseye; exceptions are documented downgrade paths",
          body: "101 is the kill-bit. Exceptions are RFCs that downgrade the ticket from murder to CH-not-murder if provocation/sudden-fight/PD-excess/public-servant/consent actually match. Cooling-off is a timeout that closes the provocation RFC."
        },
        diagram: {
          type: "tree",
          root: "CH that looks like murder",
          branches: ["E1 provocation", "E2 PD exceeded", "E3 public servant", "E4 sudden fight", "E5 consent"]
        },
        mnemonic: {
          name: "P-PD-PS-SF-C",
          hook: "Provocation · Private defence excess · Public servant · Sudden fight · Consent.",
          recite: "Exception ≠ acquittal. It is still culpable homicide."
        },
        cases: [
          { name: "Reg. v Govinda", citation: "(1876) 1 Bom 342", point: "CH vs murder teaching case." },
          { name: "K.M. Nanavati v State of Maharashtra", citation: "AIR 1962 SC 605", point: "Grave and sudden provocation — cooling time / words." }
        ],
        pyqs: [
          {
            year: "Dec 2023 / 2024",
            section: "C",
            marks: "20",
            q: "Differentiate murder and culpable homicide (BNS).",
            outline: ["100 vs 101; then the five exceptions as the downgrade engine; Govinda; Nanavati on provocation."]
          }
        ],
        check: ["Five exceptions by name.", "Provocation: grave + sudden + no cooling.", "Exception is not an acquittal."]
      },
      {
        id: "cr-hurt-gh",
        seq: 5.2,
        readAs: "Paranjape BNS — hurt vs grievous hurt",
        unit: 4,
        yield: "high",
        tags: ["hurt", "grievous hurt", "bns 114", "bns 116", "ipc 320"],
        title: "Hurt vs grievous hurt (the eight-clause list)",
        summary: "Hurt is bodily pain, disease or infirmity. Grievous hurt is a closed list (BNS 116 / IPC 320). 2022 short-noted grievous hurt — recite the eight.",
        explainer: `<p><strong>Hurt (BNS 114 / IPC 319):</strong> whoever causes bodily pain, disease or infirmity to any person. No skin-break requirement. A slap that hurts is hurt.</p>
        <p><strong>Grievous hurt (BNS 116 / IPC 320) — list (memorise):</strong> (1) emasculation; (2) permanent privation of the sight of either eye; (3) permanent privation of the hearing of either ear; (4) privation of any member or joint; (5) destruction or permanent impairing of the powers of any member or joint; (6) permanent disfiguration of the head or face; (7) fracture or dislocation of a bone or tooth; (8) any hurt which endangers life or which causes the sufferer to be during the space of twenty days in severe bodily pain or unable to follow ordinary pursuits.</p>
        <p>The 20-day clause is not ‘hospital for 20 days automatically = grievous’ — it is severe pain or inability to follow ordinary pursuits. Fracture is enough even if the person is back at work. Weapons / poison / grievous hurt endangering life have aggravated sections — only open them if the question is a problem.</p>
        <p>Pair with criminal force (BNS 129) and assault (BNS 130): force vs gesture. Wrongful restraint/confinement is a different hole.</p>`,
        analogy: {
          title: "Minor incident vs P0 bodily outage",
          body: "Hurt is a P2 — pain/disease/infirmity. Grievous is a closed P0 catalogue: lost eye, fracture, 20-day outage of ordinary life, disfigured face. Do not invent a ninth clause because the facts were messy."
        },
        diagram: {
          type: "compare",
          headers: ["", "Hurt 114", "Grievous 116"],
          rows: [
            ["Definition", "Pain / disease / infirmity", "Eight enumerated harms"],
            ["Example", "Punch, bruise", "Fracture, lost eye, 20-day disablement"],
            ["Exam job", "Define", "Recite the list"]
          ]
        },
        mnemonic: {
          name: "E-E-E-M-M-D-F-20",
          hook: "Emasculation, Eye, Ear, Member, Member’s power, Disfigure, Fracture, 20-days.",
          recite: "320 IPC = 116 BNS. Fracture alone is grievous."
        },
        cases: [
          { name: "Statutory list is the authority", citation: "BNS 116", point: "Cases illustrate ‘disfigure’ or ‘20 days’ — the list is the syllabus." }
        ],
        pyqs: [
          { year: "2022", section: "A", marks: "4", q: "Grievous hurt.", outline: ["114 vs 116; recite eight; 20-day nuance."] }
        ],
        check: ["Hurt in one line.", "Eight GH clauses.", "20-day is not mere hospitalisation."]
      },
      {
        id: "cr-theft-ladder",
        seq: 7.2,
        readAs: "Drill — theft ladder (from property survey)",
        unit: 4,
        yield: "high",
        tags: ["theft", "extortion", "robbery", "dacoity", "bns 303"],
        title: "Theft vs extortion vs robbery vs dacoity (the ladder)",
        summary: "Theft takes; extortion obtains by fear; robbery is theft-or-extortion plus violence/fear immediately; dacoity is robbery by five. 2022 and 2024 both climb this ladder.",
        explainer: `<p><strong>Theft (BNS 303 / IPC 378):</strong> dishonest intention to take movable property out of the possession of any person without that person’s consent, and moving it to such taking. Five ingredients: movable; possession of another; dishonest; without consent; moving. 2023 asked a problem on house entry + box moved (attempt vs theft — movement is the completion of theft).</p>
        <p><strong>Extortion (BNS 308 / IPC 383):</strong> intentionally putting a person in fear of injury and thereby dishonestly inducing delivery of property/valuable security. The victim <em>hands over</em>. Fear, not stealth.</p>
        <p><strong>Robbery (BNS 309 / IPC 390):</strong> theft becomes robbery if, in order to the committing of the theft, or in committing, or in carrying away, the offender causes/attempts death, hurt, or wrongful restraint, or puts in fear of instant death/hurt/wrongful restraint. Extortion becomes robbery if the fear is of instant death/hurt/restraint and the offender is in the presence of the victim. Instant + presence is the extortion-robbery gate.</p>
        <p><strong>Dacoity (BNS 310 / IPC 391):</strong> robbery by five or more. Attempt and assembly for dacoity have their own teeth. Snatching (BNS 304) is a BNS extra — short note only.</p>
        <p>Dec 2024 BNS: theft vs extortion. 2022: theft→robbery. Table, then one problem sentence.</p>`,
        analogy: {
          title: "Stealth take → scare-mail → gun in the room → gang",
          body: "Theft = silent git clone of someone else’s repo. Extortion = you email a bomb threat and they push the keys. Robbery = the threat or hurt is instant and you are in the room (or the theft is accompanied by hurt/fear). Dacoity = five clones with the same raid."
        },
        diagram: {
          type: "flow",
          steps: ["Theft (move + dishonest + no consent)", "Extortion (fear → delivery)", "Robbery (instant violence/fear overlay)", "Dacoity (≥5)"]
        },
        mnemonic: {
          name: "MOVE / FEAR / INSTANT / FIVE",
          hook: "303 · 308 · 309 · 310. Presence+instant is the extortion-robbery key.",
          recite: "If the box was only moved, theft may already be complete. If five, think 310."
        },
        cases: [
          { name: "Pyare Lal Bhargava v State of Rajasthan", citation: "AIR 1963 SC 1094", point: "Temporary taking can still be theft if dishonest." },
          { name: "State illustrations in BNS 303/309", citation: "bare-act illustrations", point: "Recite two; they are written for this exam." }
        ],
        pyqs: [
          { year: "Dec 2024 BNS", section: "C", marks: "20", q: "Theft under BNS; difference from extortion.", outline: ["303 ingredients; 308; table; robbery teaser."] },
          { year: "2022", section: "C", marks: "20", q: "When theft becomes robbery.", outline: ["390/309 overlays; illustrations; dacoity one para."] }
        ],
        check: ["Five theft ingredients.", "Extortion: delivery by fear.", "When extortion becomes robbery."]
      },
      {
        id: "cr-cheating",
        seq: 7.4,
        readAs: "Paranjape BNS — cheating essentials (s.318)",
        unit: 4,
        yield: "high",
        tags: ["cheating", "bns 318", "ipc 415", "deception"],
        title: "Cheating — essentials (BNS 318)",
        summary: "Deception + dishonest inducement to deliver property or to do/omit an act the victim would not otherwise do, causing or likely to cause harm. Dec 2024 short-noted cheating.",
        explainer: `<p><strong>BNS 318 (IPC 415):</strong> whoever, by deceiving any person, fraudulently or dishonestly induces that person to deliver any property, or to consent that any person shall retain property, or intentionally induces the person to do or omit anything which they would not do/omit if not so deceived, and which act/omission causes or is likely to cause damage/harm to body, mind, reputation or property, cheats.</p>
        <p><strong>Ingredients:</strong> (1) deception (false representation, or conduct; mere non-disclosure is not always enough); (2) fraudulent or dishonest inducement; (3) delivery of property / retention consent / induced act-omission; (4) harm or likelihood of harm of the listed kinds. Mens rea at the <em>time of the promise</em> matters: a later failure to perform a genuine promise is contract, not cheating. <em>Hridaya Ranjan Prasad Verma</em> flavour: dishonest intention from the beginning.</p>
        <p><strong>Aggravations:</strong> cheating by personation; 318/420-style ‘dishonestly inducing delivery’ with heavier punishment — confirm the BNS number in the bare act before the hall. Vs theft: cheating uses the victim as the delivery agent; theft takes without consent. Vs extortion: fear of injury vs deceit.</p>`,
        analogy: {
          title: "Phish vs grab vs threaten",
          body: "Cheating is a phishing form: the user types the password because the page lied. Theft is stealing the laptop. Extortion is ‘pay or we leak.’ If the startup honestly hoped to deliver and later failed, you are in Contract-I, not BNS 318."
        },
        diagram: {
          type: "vflow",
          steps: ["Deception", "Dishonest/fraudulent inducement at t0", "Delivery / act-omission", "Harm or likely harm"]
        },
        mnemonic: {
          name: "LIE → HAND OVER → HARM",
          hook: "Intention must exist at the promise, not only at the default.",
          recite: "415 IPC = 318 BNS. Contrast theft and extortion in three lines."
        },
        cases: [
          { name: "Hridaya Ranjan Prasad Verma v State of Bihar", citation: "(2000) 4 SCC 168", point: "Breach of contract vs cheating — intention at inception." },
          { name: "Ram Jas v State of U.P.", citation: "(1970) 2 SCC 740", point: "Ingredients of 415/420 flavour." }
        ],
        pyqs: [
          { year: "Dec 2024 BNS", section: "A", marks: "4", q: "Cheating.", outline: ["318 essentials; inception-intent; vs theft."] }
        ],
        check: ["Four ingredients.", "Why a failed loan is not automatically 318.", "Cheating vs theft vs extortion."]
      },
      {
        id: "cr-unlawful-assembly",
        seq: 6.2,
        readAs: "Drill — 189/190 vs 3(5) (from state survey)",
        unit: 4,
        yield: "high",
        tags: ["unlawful assembly", "common object", "bns 189", "bns 190"],
        title: "Unlawful assembly — essentials and common object",
        summary: "Five or more; common object of the five listed kinds (BNS 189). Member liability for offences committed in prosecution of that object (BNS 190 / IPC 149). Dec 2024 Section B.",
        explainer: `<p><strong>BNS 189 (IPC 141):</strong> an assembly of <strong>five or more</strong> persons is unlawful if the common object is: (1) to overawe government/legislature by criminal force or show of criminal force; (2) to resist the execution of any law or legal process; (3) to commit mischief, criminal trespass or any other offence; (4) by criminal force / show of it to take or obtain possession of any property, or to deprive a right, or to enforce a right/supposed right; (5) by criminal force / show of it to compel a person to do what they are not legally bound to do, or omit what they are legally entitled to do. Lawful meetings can <em>become</em> unlawful when the object forms — Dec 2024 asked this.</p>
        <p><strong>BNS 190 (IPC 149):</strong> if an offence is committed by any member in prosecution of the common object, or such as the members knew to be likely, every person who is a member at that time is guilty. No need for a pre-concerted 3(5) plan. Membership + object + knowledge of likelihood.</p>
        <p><strong>vs 3(5) / IPC 34:</strong> 34 needs shared intention and some participation (≥2). 149/190 needs five, object (which may form on the spot), and membership. Rioting (BNS 191) is force/violence by an unlawful assembly. Affray is two+ fighting in public to the disturbance of peace — no five, no object list.</p>`,
        analogy: {
          title: "Five in a raid channel with a pinned objective",
          body: "189 is the channel: ≥5 users, pinned common object from the five-item menu. 190 is: if anyone in-channel commits an offence in prosecution of that object (or a likely one), every current member is billed. 3(5) is pair-programming the same commit — different product."
        },
        diagram: {
          type: "compare",
          headers: ["", "BNS 3(5) / IPC 34", "BNS 189–190 / IPC 141–149"],
          rows: [
            ["Headcount", "≥2", "≥5"],
            ["Mental link", "Common intention (concert)", "Common object (can form on spot)"],
            ["Liability hook", "Participation in furtherance", "Membership at the time"]
          ]
        },
        mnemonic: {
          name: "FIVE OBJECTS · FIVE BODIES",
          hook: "Overawe · resist law · offence · property/right by force · compel. Then 190 membership.",
          recite: "Dec 2024: essentials of unlawful assembly. Lawful crowd can flip."
        },
        cases: [
          { name: "Mizaji v State of U.P.", citation: "AIR 1959 SC 572", point: "Common object can form on the spot; 149 vs 34." },
          { name: "Lalji v State of U.P.", citation: "(1989) 1 SCC 437", point: "Prosecution of common object." }
        ],
        pyqs: [
          {
            year: "Dec 2024 BNS",
            section: "B",
            marks: "10",
            q: "Essentials of unlawful assembly under BNS 2023; lawful vs unlawful gatherings.",
            outline: ["189 five objects; five persons; when a lawful meeting turns; 190 overlay; 34 contrast."]
          }
        ],
        check: ["Five objects.", "190 vs 3(5).", "Rioting vs affray in one line each."]
      },
      {
        id: "cr-bns152",
        seq: 6.4,
        readAs: "Drill — BNS 152 (do not paste a 124A essay)",
        unit: 4,
        yield: "high",
        tags: ["sedition", "bns 152", "ipc 124a", "kedarnath"],
        title: "Sedition → BNS 152 (do not paste a 124A essay)",
        summary: "IPC 124A is gone. BNS 152 punishes acts endangering sovereignty, unity and integrity. Kedarnath’s ‘incitement to violence’ reading is history you must translate, not copy-paste.",
        explainer: `<p><strong>IPC 124A</strong> (sedition): bringing or attempting to bring into hatred or contempt, or exciting disaffection towards, the Government established by law. <em>Kedarnath v State of Bihar</em> (1962) saved it by reading in a tendency to disorder / incitement to violence; mere strong criticism of government was not sedition. That case still explains old PYQs (Dec 2023 20-marker).</p>
        <p><strong>BNS 152:</strong> the heading and text move to <strong>sovereignty, unity and integrity of India</strong> — exciting secession, armed rebellion, subversive activities, or encouraging feelings of separatist activities, by words/signs/electronic communication, etc. It is not a synonym stamp of 124A. Confirm the exact verbs on India Code before the hall; do not invent ‘disaffection towards the Government’ as the 2026 ratio.</p>
        <p><strong>How to write 2026:</strong> (1) old 124A + Kedarnath in one paragraph (history); (2) quote 152’s protected interests; (3) table differences (object: Government vs sovereignty/unity/integrity; ‘disaffection’ vs secession/rebellion/subversion); (4) Art. 19(1)(a)/19(2) still frames the constitutional fight; (5) do not treat every protest as 152.</p>
        <p>Dec 2023 asked sedition with cases — translate. A 2026 paper titled BNS wants 152 in the heading.</p>`,
        analogy: {
          title: "CVE renamed, payload changed",
          body: "124A was a ‘hate the government’ CVE, patched by Kedarnath to require a violence/disorder tendency. 152 is a different CVE: sovereignty/unity/integrity and secessionist payloads. Copy-pasting the old patch notes onto the new CVE is a fail."
        },
        diagram: {
          type: "compare",
          headers: ["", "IPC 124A", "BNS 152"],
          rows: [
            ["Interest protected", "Government established by law", "Sovereignty, unity, integrity"],
            ["Famous limiter", "Kedarnath: violence/disorder", "Read the new verbs — do not assume Kedarnath maps 1:1"],
            ["2026 heading", "History only", "Live offence"]
          ]
        },
        mnemonic: {
          name: "124A DEAD · 152 LIVE",
          hook: "Kedarnath is the history paragraph. Secession/rebellion/subversion is the new payload.",
          recite: "Never write ‘sedition s.124A’ as current BNS law."
        },
        cases: [
          { name: "Kedar Nath Singh v State of Bihar", citation: "AIR 1962 SC 955", point: "Constitutional saving of 124A — historical for 2026." },
          { name: "Balwant Singh v State of Punjab", citation: "(1995) 3 SCC 214", point: "Casual slogans ≠ sedition without more — still useful as 19(1)(a) hygiene." }
        ],
        pyqs: [
          {
            year: "Dec 2023",
            section: "C",
            marks: "20",
            q: "Sedition with cases.",
            outline: ["For 2026: 124A+Kedarnath history; then BNS 152 text-differences; 19(1)(a); Balwant Singh hygiene."]
          }
        ],
        check: ["Kedarnath limiter in one line.", "What 152 protects (three words).", "One difference from 124A."]
      },
      {
        id: "cr-attempt-prep",
        seq: 3.2,
        readAs: "Drill — attempt vs preparation (from inchoate home)",
        unit: 2,
        yield: "high",
        tags: ["attempt", "preparation", "bns 62", "ipc 511"],
        title: "Attempt vs preparation (and when the line is crossed)",
        summary: "Intention → preparation (usually not punishable) → attempt (punishable) → completion. The line is: acts done towards commission that are not merely remote. Dec 2023 20-marker; 2024 stages.",
        explainer: `<p><strong>Four stages:</strong> (1) intention (not punishable alone); (2) preparation (gathering tools — generally not, except named offences: war, dacoity, coinage, etc.); (3) attempt (BNS 62 / IPC 511 general + specific attempt sections such as attempt to murder); (4) completed offence.</p>
        <p><strong>Tests (write two, pick facts):</strong> proximity (how close to the last act); equivocality (would a reasonable observer see the crime in the acts?); last-act (too strict — English history). Indian illustrations: buying a match is preparation; lighting it against the haystack the victim is sleeping in is attempt. <em>Abhayanand Mishra</em> (false documents dispatched to the university) — attempt to cheat. <em>State of Maharashtra v Mohd. Yakub</em> — moving goods toward the border as attempt to smuggle, not mere preparation.</p>
        <p><strong>Impossibility:</strong> legal vs factual. Trying to steal from an empty pocket can still be attempt (factual impossibility). Trying to ‘kill’ a corpse you know is a corpse is a different problem. Do not over-theorise; one sentence is enough.</p>
        <p>BNS 62 is the general attempt net where no specific provision exists. Always check a specific attempt section first (attempt to murder is not a 62 orphan).</p>`,
        analogy: {
          title: "Half-compiled crime",
          body: "Intention is an RFC. Preparation is cloning the repo and buying AWS credits. Attempt is pushing a deploy that would complete the offence if not interrupted. Completion is production-down. Empty-pocket theft is a deploy against a box that happened to be empty — still an attempt."
        },
        diagram: {
          type: "flow",
          steps: ["Intention", "Preparation (usually safe)", "Attempt (proximate / unequivocal)", "Completion"]
        },
        mnemonic: {
          name: "I-P-A-C",
          hook: "Intention Preparation Attempt Completion. 62 is residual.",
          recite: "Named preparations (dacoity/war) are the exceptions. Abhayanand / Yakub for the line."
        },
        cases: [
          { name: "Abhayanand Mishra v State of Bihar", citation: "AIR 1961 SC 1698", point: "Attempt to cheat — documents sent." },
          { name: "State of Maharashtra v Mohd. Yakub", citation: "(1980) 3 SCC 57", point: "Attempt vs preparation — smuggling." }
        ],
        pyqs: [
          { year: "Dec 2023", section: "C", marks: "20", q: "Intention, preparation and attempt.", outline: ["Four stages; tests; two cases; BNS 62 vs specific attempts."] },
          { year: "Dec 2024 BNS", section: "C", marks: "20", q: "Stages of crime — liability & punishment.", outline: ["Same spine; add which stages attract punishment."] }
        ],
        check: ["Which stages are punishable.", "Two tests for attempt.", "One named preparation exception."]
      },
      {
        id: "cr-stages",
        seq: 1.4,
        readAs: "Drill — I-P-A-C stages essay (from general principles)",
        unit: 2,
        yield: "high",
        tags: ["stages of crime", "intention", "preparation", "attempt", "commission"],
        title: "Stages of crime — intention, preparation, attempt, commission",
        summary: "Dec 2024 Sec C wants a full I-P-A-C essay, not only the attempt/preparation line. Which stages attract punishment is the marks.",
        explainer: `<p><strong>Four stages (always in this order):</strong> (1) <strong>intention</strong> — the mental resolve to commit the offence; (2) <strong>preparation</strong> — arranging means; (3) <strong>attempt</strong> — acts done toward commission that cross from remote to proximate; (4) <strong>commission / completion</strong> — the offence as defined is fulfilled. The criminal law does not punish a naked wish. It generally does not punish preparation. It does punish attempt. It punishes completion. That distribution of liability <em>is</em> the essay.</p>
        <p><strong>Intention:</strong> not punishable standing alone (you may intend to steal for years). Mens rea becomes relevant once an actus reus exists. Do not confuse ‘intention as a stage’ with ‘intention as mens rea of the completed crime.’</p>
        <p><strong>Preparation:</strong> buying the knife, booking the ticket, assembling the gang at home. Rule: not punishable. <strong>Named exceptions</strong> (the paragraph that distinguishes a 20 from a 12): preparation to wage war; collecting arms; preparation for dacoity; some coinage/counterfeit and false-document preparations — confirm the live BNS numbers on India Code the night before. The policy: preparation is equivocal (a knife is also a kitchen tool); the named exceptions are too dangerous to wait.</p>
        <p><strong>Attempt:</strong> the accused has moved from arranging means to doing acts that would complete the crime if not interrupted. Tests: proximity (how close to the last act); equivocality (would an observer read the crime in the acts?); last-act is too English-strict. <em>Abhayanand Mishra</em> (false papers dispatched to the university) — attempt to cheat. <em>Mohd. Yakub</em> (goods moved toward the smuggling frontier) — attempt, not mere preparation. Factual impossibility (empty pocket) can still be attempt; legal impossibility is a different, thinner point. BNS 62 is the residual attempt net; specific attempt sections (attempt to murder) eat first.</p>
        <p><strong>Commission:</strong> every ingredient of the definition is present — theft’s ‘moving,’ murder’s death, etc. Punishment is the section’s own. Inchoate cousins (abetment, conspiracy) are parallel tracks, not a fifth stage — mention them in a close so the examiner sees you know the map. The sibling card (<code>cr-attempt-prep</code>) zooms the line; this card is the full spine Dec 2024 asked.</p>`,
        analogy: {
          title: "RFC → clone repo → push deploy → production down",
          body: "Intention is an RFC nobody compiles. Preparation is cloning the repo and buying AWS credits. Attempt is pushing a deploy that would take production down if the pager had not killed it. Commission is the outage. Named preparation offences are the few RFCs the law treats as already on fire (war, dacoity)."
        },
        diagram: {
          type: "flow",
          steps: ["Intention (not punished)", "Preparation (usually not; named exceptions)", "Attempt (punished — proximity)", "Completion (full section)"]
        },
        mnemonic: {
          name: "I-P-A-C",
          hook: "Intention Preparation Attempt Commission. Only A and C (plus named P) attract punishment.",
          recite: "Abhayanand / Yakub for the line. BNS 62 is residual. Conspiracy/abetment are side doors."
        },
        cases: [
          { name: "Abhayanand Mishra v State of Bihar", citation: "AIR 1961 SC 1698", point: "Attempt to cheat — documents sent." },
          { name: "State of Maharashtra v Mohd. Yakub", citation: "(1980) 3 SCC 57", point: "Attempt vs preparation — smuggling." }
        ],
        pyqs: [
          { year: "Dec 2024 BNS", section: "C", marks: "20", q: "Stages of crime — liability and punishment.", outline: ["Four stages; which are punished; named preparation exceptions; tests + two cases; 62 vs specific attempt; abetment/conspiracy one para."] },
          { year: "Dec 2023", section: "C", marks: "20", q: "Intention, preparation and attempt.", outline: ["Same spine; spend extra lines on the attempt tests."] }
        ],
        check: ["Which stages are punishable.", "Two named preparation exceptions.", "Two tests + two cases for attempt."]
      },
      {
        id: "cr-defs-shorts",
        seq: 1.6,
        readAs: "Paranjape BNS — s.2 definitional shorts",
        unit: 1,
        yield: "high",
        tags: ["definitions", "dishonestly", "fraudulently", "good faith", "injury", "movable"],
        title: "Definition shorts — dishonestly, injury, wrongful loss, good faith, movable property",
        summary: "Dec 2023 Sec A farmed the General Explanations. These are 4-markers: quote the idea, give one illustration, sit down. Confirm live BNS s.2 numbering on India Code.",
        explainer: `<p><strong>Dishonestly:</strong> a person does a thing dishonestly who does it with the intention of causing <em>wrongful gain</em> to one person or <em>wrongful loss</em> to another. Theft’s mental element lives here. Wrongful gain/loss are gain/loss by unlawful means of property to which the person gaining is not legally entitled / the person losing is legally entitled. A temporary taking can still be dishonest (<em>Pyare Lal</em> flavour).</p>
        <p><strong>Fraudulently:</strong> an act done with intent to defraud. Dishonestly is about property gain/loss; fraudulently is about deception (often in cheating / false documents). They overlap but are not synonyms — cheating needs fraudulent <em>or</em> dishonest inducement depending on the limb.</p>
        <p><strong>Injury:</strong> any harm illegally caused to a person, in body, mind, reputation or property. Wider than ‘hurt’. Extortion’s ‘fear of injury’ uses this wide sense — reputation counts.</p>
        <p><strong>Good faith:</strong> nothing is said to be done or believed in good faith which is done or believed <em>without due care and attention</em>. This is the opposite of the civil ‘honesty even if negligent’ flavour. For BNS exceptions (public servant, mistake), good faith is a due-care test. Write that contrast; it scores.</p>
        <p><strong>Movable property:</strong> includes corporeal property of every description except land and things attached to the earth or permanently fastened to anything attached to the earth. Standing crops, once severed, become movable (theft illustrations). Electricity has a statutory theft path — don’t over-theorise; mention if the problem is a meter.</p>
        <p><strong>Wrongful restraint’s cousin words</strong> sometimes appear: ‘voluntarily’, ‘reason to believe’. Voluntarily = knowing the consequences, not wanting them as a wish. One line if asked. Always check the BNS s.2 clause numbers in the hall; the ideas travelled from IPC 23–52 with rearrangements.</p>`,
        analogy: {
          title: "Typed enums in s.2",
          body: "Dishonestly is a property-ledger flag (unlawful gain/loss). Fraudulently is a deception flag. Injury is any illegal harm packet (body/mind/reputation/property). Good faith in BNS is a due-care compiler, not a ‘I meant well’ comment. Movable is everything that is not still bolted to the earth."
        },
        diagram: {
          type: "tree",
          root: "s.2 shorts",
          branches: ["Dishonestly (wrongful gain/loss)", "Fraudulently (intent to defraud)", "Injury (body/mind/reputation/property)", "Good faith (due care)", "Movable (not land)"]
        },
        mnemonic: {
          name: "D-F-I-G-M",
          hook: "Dishonestly Fraudulently Injury Good-faith Movable. Good faith ≠ civil honesty.",
          recite: "Wrongful gain/loss define dishonestly. Injury is wider than hurt."
        },
        cases: [
          { name: "Pyare Lal Bhargava v State of Rajasthan", citation: "AIR 1963 SC 1094", point: "Temporary dishonest taking can still be theft." }
        ],
        pyqs: [
          { year: "Dec 2023", section: "A", marks: "4", q: "Movable property / injury / wrongful loss / good faith / dishonestly.", outline: ["Quote the idea; one illustration; one contrast (good faith vs civil; injury vs hurt)."] }
        ],
        check: ["Dishonestly in terms of wrongful gain/loss.", "BNS good faith = due care.", "Injury’s four objects."]
      },
      {
        id: "cr-insanity",
        seq: 2.8,
        readAs: "Paranjape BNS — unsoundness of mind (s.22) as a distinguish",
        unit: 3,
        yield: "high",
        tags: ["insanity", "legal insanity", "medical insanity", "mcnaughten", "bns 22"],
        title: "Legal insanity vs medical insanity",
        summary: "Dec 2024 Sec A. A psychiatrist’s diagnosis does not open s.22. The law asks a cognitive question at the time of the act: nature, or wrong/contrary to law.",
        explainer: `<p><strong>Medical insanity:</strong> a clinical diagnosis — schizophrenia, psychosis, intellectual disability, mood disorder — made by a psychiatrist using medical criteria. It is evidence. It is not a verdict. Plenty of diagnosed persons know exactly what they are doing when they sign a cheque or strike a blow.</p>
        <p><strong>Legal insanity (BNS 22 / IPC 84):</strong> nothing is an offence which is done by a person who, at the time of doing it, by reason of unsoundness of mind, is incapable of knowing (i) the nature of the act, or (ii) that he is doing what is either wrong or contrary to law. This is the <strong>McNaughten</strong> cognitive test (1843), not a volitional ‘irresistible impulse’ test (which India has not adopted as a substitute). The material time is <em>the moment of the act</em>, not the trial, not a lucid interval yesterday, not a hospital note next month.</p>
        <p><strong>Why they diverge:</strong> medicine asks ‘what is the illness?’; law asks ‘did this illness destroy this cognitive capacity for this act?’ A person may be medically ill and legally responsible. A person may have no tidy ICD label and still satisfy 22 on the facts (rare, but the statute is cognitive, not diagnostic). Epilepsy, intoxication, and ‘psychopathic’ personality are exam traps — they do not auto-apply 22; run them through the test (and remember separate intoxication sections).</p>
        <p><strong>Proof:</strong> prosecution proves the offence; the accused who pleads 22 bears an evidential burden. <em>Dahyabhai v State of Gujarat</em> — the accused may rely on prosecution evidence plus defence evidence; the standard is not ‘beyond reasonable doubt of insanity’ in the same way as the prosecution’s burden on the offence. <em>Hari Singh Gond</em> / later restatements: conduct before, during, after (fleeing, concealment, motive) is relevant to whether the cognitive limb is genuine. A medical certificate obtained after arrest is not a golden ticket.</p>
        <p>Dec 2024: four to five marks. Table + McNaughten + Dahyabhai + ‘time of the act.’ Do not write a psychiatry essay.</p>`,
        analogy: {
          title: "Kernel panic at t=offence, not a PDF in the HR file",
          body: "Medical insanity is a diagnostic ticket in the file. Legal insanity is a kernel panic at the exact moment of the syscall: the process could not know what it was doing, or that it was forbidden. A server can have a known chronic illness and still have been healthy at deploy time. Fleeing and hiding are logs that the kernel was up."
        },
        diagram: {
          type: "compare",
          headers: ["", "Medical insanity", "Legal insanity (s.22)"],
          rows: [
            ["Question", "What is the diagnosis?", "Did unsoundness destroy cognitive capacity for this act?"],
            ["Time", "Clinical course", "The moment of the act"],
            ["Authority", "Psychiatrist / ICD", "McNaughten / BNS 22"],
            ["Result", "Evidence", "No offence if the test is met"]
          ]
        },
        mnemonic: {
          name: "NATURE OR WRONG AT T0",
          hook: "McNaughten cognitive. Diagnosis ≠ s.22. Dahyabhai on burden.",
          recite: "No irresistible-impulse shortcut. Conduct after the act can sink a fake plea."
        },
        cases: [
          { name: "R v McNaughten", citation: "(1843) 10 Cl & Fin 200", point: "Cognitive test imported into s.22." },
          { name: "Dahyabhai v State of Gujarat", citation: "AIR 1964 SC 1563", point: "Burden when insanity is pleaded." },
          { name: "Hari Singh Gond v State of M.P.", citation: "(2008) 16 SCC 109", point: "Legal vs medical; conduct as evidence." }
        ],
        pyqs: [
          { year: "Dec 2024 BNS", section: "A", marks: "4", q: "Legal insanity vs medical insanity.", outline: ["s.22 cognitive test; diagnosis is only evidence; time of act; Dahyabhai; one trap (impulse/intoxication)."] }
        ],
        check: ["s.22 two limbs.", "Why a diagnosis is not enough.", "Burden one-liner."]
      },
      {
        id: "cr-wr-riot",
        seq: 5.4,
        readAs: "Paranjape BNS — WR/WC and riot/affray (distinguish pack)",
        unit: 4,
        yield: "high",
        tags: ["wrongful restraint", "wrongful confinement", "rioting", "affray"],
        title: "Distinguish — wrongful restraint vs confinement; rioting vs affray",
        summary: "2023 Sec C asked both pairs. Two mini-tables. Do not merge them into the parent body/tranquility essays.",
        explainer: `<p><strong>Wrongful restraint (BNS 126 / IPC 339):</strong> voluntarily obstructing any person so as to prevent that person from proceeding in any direction in which they have a right to proceed. A blocked corridor, a parked truck across a private path, a person standing in a gateway. There is still somewhere else in the world they can go — you have closed <em>a</em> direction, not the universe. Exception flavour: obstruction in good faith to prevent accident / by a person in possession of property (check the live proviso). <strong>Wrongful confinement (BNS 127 / IPC 340):</strong> wrongful restraint that prevents the person from proceeding beyond certain circumscribing limits — a room, a house, a locked compound, a circled group. Circle vs closed room is the classroom picture. Time can be short; the limits can be large (a village, a train compartment) so long as they are limits. Aggravations: confinement for three or more days, ten or more, secret confinement — only open if the problem supplies days.</p>
        <p><strong>Table 1:</strong> WR = one direction blocked, residual liberty exists. WC = all exits of a defined space blocked. Every WC is WR; not every WR is WC. <em>Bird v Jones</em> (torts false-imprisonment cousin) is the same geometric idea.</p>
        <p><strong>Rioting (BNS 191 / IPC 146):</strong> whenever force or violence is used by an unlawful assembly, or by any member of it, in prosecution of its common object, every member is guilty of rioting. Preconditions: an <strong>unlawful assembly</strong> (BNS 189: five or more + one of the five objects). Place need not be public. Weapons aggravate. <strong>Affray (BNS 194 / IPC 159–160):</strong> two or more persons fighting in a <strong>public place</strong>, disturbing the public peace. No five-person minimum, no common-object architecture, not an ‘assembly’ offence. A private brawl in a locked house is not affray (it may be hurt). A street fight of two is affray and not a riot.</p>
        <p><strong>Table 2:</strong> headcount (5 vs 2); place (anywhere vs public); mental link (common object vs mere fight); membership liability vs personal fighting. 2023 wanted both tables in one answer — 10+10 inside a 20. Draw them.</p>`,
        analogy: {
          title: "Closed port vs locked security-group; raid channel vs street brawl",
          body: "Wrongful restraint closes one port you had a right to use. Confinement shuts the security group: no egress. Rioting is a five-node channel with a pinned unlawful object that starts sending force packets — every member is billed. Affray is two processes punching in a public square and waking the neighbours; no channel protocol required."
        },
        diagram: {
          type: "compare",
          headers: ["Pair", "A", "B"],
          rows: [
            ["WR / WC", "Block a direction (residual liberty)", "Block all beyond circumscribing limits"],
            ["Riot / affray", "UA (≥5) + force in prosecution of object", "≥2 fighting in public, disturb peace"]
          ]
        },
        mnemonic: {
          name: "DIRECTION vs CIRCLE · FIVE vs TWO",
          hook: "WC is a species of WR. Affray needs a public place; riot needs an UA.",
          recite: "Every confinement is restraint. A two-person street fight is affray, not riot."
        },
        cases: [
          { name: "Bird v Jones", citation: "(1845) 7 QB 742", point: "Partial obstruction ≠ total confinement (civil cousin — use the geometry)." },
          { name: "Statutory text is the authority", citation: "BNS 126–127, 189–194", point: "Ingredients beat a case dump on these distinguish pairs." }
        ],
        pyqs: [
          { year: "Dec 2023", section: "C", marks: "20", q: "Distinguish (a) rioting & affray (b) wrongful restraint & confinement.", outline: ["Two mini-tables; ingredients; one example each; every WC is WR; affray needs public place."] }
        ],
        check: ["WR vs WC in one geometric sentence.", "Riot’s two preconditions.", "Affray: two + public + peace."]
      },
      {
        id: "cr-dowry-death",
        seq: 8.2,
        readAs: "Paranjape BNS — dowry death (s.80) vs IPC 304B",
        unit: 4,
        yield: "high",
        tags: ["dowry death", "bns 80", "ipc 304b", "cruelty", "498a"],
        title: "Dowry death — BNS vs IPC (Dec 2024 20-marker)",
        summary: "Not on the classic printed K-1004 list; Dec 2024 still set it as a 20-marker. BNS 80 carries IPC 304B’s structure: 7 years, otherwise than normal circumstances, cruelty/harassment for dowry soon before death, presumption.",
        explainer: `<p><strong>Why this card exists:</strong> the official CCS PDF still says IPC chapter-headings; public Dec 2024 BNS papers asked dowry death as a Section C 20-marker. <code>meta.js</code> already maps the row. A map is not an answer. Write BNS first, IPC in brackets, and do not invent a new offence.</p>
        <p><strong>IPC 304B (the structure you already know):</strong> where the death of a woman is caused by burns or bodily injury, or occurs otherwise than under normal circumstances, within <strong>seven years of marriage</strong>, and it is shown that <strong>soon before her death</strong> she was subjected to cruelty or harassment by her husband or any relative of her husband <strong>for, or in connection with, a demand for dowry</strong>, such death is ‘dowry death’ and the husband/relative is deemed to have caused it. Punishment was imprisonment of not less than seven years, which may extend to life. ‘Dowry’ rode on the Dowry Prohibition Act definition. <strong>Cruelty</strong> for this purpose is the 498A-sense (wilful conduct likely to drive to suicide / grave injury, or harassment to coerce dowry) — <em>Shanti v State of Haryana</em> / <em>Kans Raj</em> flavour: ‘soon before’ is a relative term, not ‘minutes before,’ but a live link, not a stale quarrel from year one.</p>
        <p><strong>BNS 80:</strong> the Sanhita restates this offence (confirm the exact verbs and the punishment band on India Code before the hall — do not freeze a number you have not checked). Exam method: (1) quote the four factual limbs — unnatural death / burns-injury, within seven years, cruelty or harassment soon before, dowry demand; (2) the deemed causation / presumption that puts a burden on the accused once the prosecution proves the limbs; (3) BNS cruelty section (the 498A child — BNS 85/86 cluster; confirm numbering) as the sibling charge often tried together; (4) what changed from IPC is <em>numbering and chapter placement</em>, not a philosophical rewrite — unlike BNS 152 vs 124A. Do not write ‘304B is repealed so the facts are no longer an offence.’</p>
        <p><strong>How to write 20 marks:</strong> ingredients table; presumption; ‘soon before’ cases; distinction from 306/abetment of suicide and from 302; one paragraph on why the 7-year window exists (policy); close with BNS 80 as the live section and 304B as the citation of old PYQs. Evidence Act / BSA 113B-style presumption is the procedure cousin — name it, don’t lecture Evidence.</p>`,
        analogy: {
          title: "Same CVE, new identifier",
          body: "304B was a specific CVE: unnatural death inside a 7-year marriage window plus a live dowry-cruelty link, with a presumption that shifts the explaining burden. BNS 80 is a re-ID of that CVE, not a new vulnerability class. 152 vs 124A is a different CVE. Do not treat every re-numbered section as a rewrite."
        },
        diagram: {
          type: "vflow",
          steps: ["Woman’s death (burns/injury/not normal)", "Within 7 years of marriage", "Soon before: cruelty/harassment for dowry", "Deemed causation / presumption", "BNS 80 (IPC 304B) + cruelty sibling"]
        },
        mnemonic: {
          name: "7 YEARS · SOON BEFORE · DOWRY LINK",
          hook: "Four limbs then a presumption. BNS 80 = 304B structure. Not 152-style rewrite.",
          recite: "Soon before ≠ minutes, but a live nexus. Distinguish 302 and 306."
        },
        cases: [
          { name: "Kans Raj v State of Punjab", citation: "(2000) 5 SCC 207", point: "Soon before; relative of husband; live link." },
          { name: "Shanti v State of Haryana", citation: "(1991) 1 SCC 371", point: "304B ingredients early restatement." },
          { name: "Satbir Singh v State of Haryana", citation: "(2021) 6 SCC 1", point: "Recent restatement of 304B / presumption hygiene." }
        ],
        pyqs: [
          { year: "Dec 2024 BNS", section: "C", marks: "20", q: "Dowry death under BNS — compare with IPC.", outline: ["Why it is in the paper; four limbs; presumption; soon before; 498A/BNS cruelty sibling; 302/306 distinguish; ‘same CVE, new id’ close."] }
        ],
        check: ["Four limbs.", "What ‘soon before’ means.", "BNS 80 vs 152-style rewrite."]
      },
      {
        id: "cr-stalking",
        seq: 8.4,
        readAs: "Paranjape BNS — stalking (s.78)",
        unit: 4,
        yield: "high",
        tags: ["stalking", "bns 78", "ipc 354d"],
        title: "Stalking (BNS 78)",
        summary: "Dec 2024 Sec A short. IPC 354D travelled into BNS 78: repeated following/contact despite disinterest, or monitoring electronic communication. Not every unanswered text is 78.",
        explainer: `<p><strong>IPC 354D</strong> (inserted 2013) punished a man who followed a woman and contacted, or attempted to contact, her to foster personal interaction repeatedly despite a clear indication of disinterest, or who monitored her use of the internet, email, or any other form of electronic communication. Exceptions: prevention or detection of crime by a person entrusted with that duty; compliance with a law / condition of any law; reasonable and justified conduct in the particular circumstances. Repeat offence attracted a heavier band.</p>
        <p><strong>BNS 78:</strong> the Sanhita restates stalking (confirm gender-language and the exact exception clauses on India Code — do not freeze 2013 wording if the BNS text widened it). Exam payload: (1) the conduct is <em>repeated</em> personal following/contact after disinterest, or electronic monitoring; (2) it is not a one-off awkward message; (3) statutory exceptions for law-enforcement and reasonable conduct; (4) it sits with the sexual-harassment / voyeurism cluster, not with theft. Dec 2024 asked it as a short — ingredients + one exception + ‘354D → 78.’</p>
        <p><strong>Do not:</strong> turn it into a 19(1)(a) essay; confuse it with BNS 152; write that any CCTV on a shop is stalking (the monitoring limb is of <em>her</em> electronic use / the following pattern, not ordinary security cameras). Pair with the meta.js map: this is a BNS-era extra that already appeared in a CCS-style paper.</p>`,
        analogy: {
          title: "Repeated unsolicited pings after RST, or scraping her inbox",
          body: "Stalking is not one failed handshake. It is a retry loop after the other side sent RST (clear disinterest), or a packet-capture on her electronic channel. A law-enforcement tap with a legal basis is the exception. Shop CCTV on a till is not 78."
        },
        diagram: {
          type: "decision",
          q: "Repeated follow/contact after disinterest, or e-monitoring?",
          yes: "BNS 78 unless a statutory exception (crime-detection / law / reasonable conduct)",
          no: "Not stalking — maybe harassment, maybe nothing"
        },
        mnemonic: {
          name: "REPEAT AFTER NO · OR E-MONITOR",
          hook: "354D → 78. Exceptions for police/law/reasonableness.",
          recite: "One awkward text is not 78. Confirm BNS gender/text in the bare act."
        },
        cases: [
          { name: "Statutory offence — text first", citation: "BNS 78 / IPC 354D", point: "Short notes are won on ingredients, not on a famous party name." }
        ],
        pyqs: [
          { year: "Dec 2024 BNS", section: "A", marks: "4", q: "Stalking.", outline: ["Repeated follow/contact after disinterest; e-monitoring; exceptions; 354D→78."] }
        ],
        check: ["Two modes of stalking.", "One statutory exception.", "IPC ancestor number."]
      },
      {
        id: "cr-child",
        seq: 8.6,
        readAs: "Paranjape BNS — offences against child (Dec 2024 optional)",
        unit: 4,
        yield: "high",
        tags: ["child", "bns 93", "bns 95", "pocso"],
        title: "Offences against child under BNS",
        summary: "Dec 2024 Sec C optional flavour. BNS gathered several child-specific offences that IPC scattered. POCSO still sits beside them — do not pretend BNS swallowed it.",
        explainer: `<p><strong>Why a card:</strong> public Dec 2024 indexes offered an optional 20 on offences against children under BNS. The official Sem-1 list does not print a ‘child chapter’ as its own unit, but the Sanhita does cluster child offences, and a student who can name five of them looks prepared.</p>
        <p><strong>Working kit (confirm numbers on India Code — BNS shuffled IPC 315–317, 366A, 372–373, 363A cousins):</strong> exposing or abandoning a child; concealing a birth; hiring, employing or engaging a child to commit an offence; procuration of a child; selling / buying a child for prostitution or illicit intercourse; kidnapping/abduction overlays when the victim is a child (BNS kidnapping from guardianship now uses the Sanhita’s ‘child’ definition — typically 18; check s.2). Sexual offences against children are primarily <strong>POCSO 2012</strong> (special Act, special court) — BNS rape/sexual-assault sections may also fire; write ‘POCSO is the dedicated statute; BNS is the general code’ so you do not dump a POCSO treatise into K-1004.</p>
        <p><strong>How to write 10/20:</strong> (1) child as a protected class (age definition); (2) five named BNS offences with one-line actus reus each; (3) kidnapping from guardianship vs abduction when the victim is a child; (4) POCSO as the sexual-offence overlay; (5) one policy sentence (trafficking / child-labour / 23–24 Constitution). Do not invent section numbers you have not checked that morning.</p>`,
        analogy: {
          title: "A protected user class with extra syscalls",
          body: "BNS adds child-only syscalls (abandonment, hiring a child as an offence-tool, buying/selling for prostitution) on top of the general offence APIs. POCSO is a specialised sexual-offence service that did not get merged into the monolith. Age is a type-check in s.2."
        },
        diagram: {
          type: "tree",
          root: "Child-protection stack",
          branches: ["BNS child cluster (abandon / hire / procuration / sale)", "Kidnap from guardianship (age gate)", "POCSO (sexual offences)", "Consti 24 / child-labour statutes"]
        },
        mnemonic: {
          name: "ABANDON · HIRE · PROCURE · SELL · POCSO",
          hook: "Five names beat a fake section list. POCSO is not BNS.",
          recite: "Confirm s.2 ‘child’ and the live numbers. Kidnapping age-gate is the Sem-1 overlap."
        },
        cases: [
          { name: "Independent Thought v Union of India", citation: "(2017) 10 SCC 800", point: "Child-protection constitutional overlay (exception-2 / age) — one line if the question turns sexual." }
        ],
        pyqs: [
          { year: "Dec 2024 BNS", section: "C", marks: "20", q: "Offences against child under BNS (optional flavour).", outline: ["Age; five BNS names; kidnap overlay; POCSO not swallowed; Consti 24 one line."] }
        ],
        check: ["Five named child offences without fake numbers.", "POCSO’s relation to BNS.", "Child definition lives in s.2."]
      },
      {
        id: "cr-snatching",
        seq: 7.6,
        readAs: "Paranjape BNS — snatching (s.304)",
        unit: 4,
        yield: "high",
        tags: ["snatching", "bns 304", "theft", "robbery"],
        title: "Snatching (BNS 304)",
        summary: "BNS novelty. Theft from any person by suddenly or quickly seizing or grabbing or taking away. Map-only until this card. Good short-note insurance between theft and robbery.",
        explainer: `<p><strong>BNS 304</strong> (no tidy IPC ancestor): snatching is theft of movable property from a person by suddenly, quickly, forcibly, or unexpectedly seizing, grabbing, or taking away. Confirm the live wording — the idea is the street-chain / phone-yank that older papers had to squeeze into theft or robbery. Punishment is its own band (heavier than simple theft, typically lighter than robbery — check the section).</p>
        <p><strong>Why it was invented:</strong> phone-snatching from a moving two-wheeler often failed a clean robbery (was there hurt, wrongful restraint, or fear of instant hurt?) and looked ‘more than’ quiet theft. 304 names the sudden-grab from the person.</p>
        <p><strong>Sort it on the ladder:</strong> <em>theft</em> (303) — dishonest moving out of possession, may be secret, need not be from the person. <em>Snatching</em> (304) — theft <em>from the person</em> by a sudden grab. <em>Robbery</em> (309) — theft or extortion plus instant hurt/fear/restraint overlays. If the snatch is accompanied by hurt or fear of instant hurt, you may be in robbery; do not double-count blindly — specific vs general is a charging problem. Dec papers have not yet made this a 20-marker; a 4-marker is ‘define + place on the ladder + no IPC twin.’</p>`,
        analogy: {
          title: "A sudden grab syscall between clone and armed raid",
          body: "Theft is a silent clone of someone else’s object. Snatching is yanking the device out of their hand as you ride past. Robbery is the same raid with a hurt/fear overlay. 304 exists because the yank was an ugly fit in both 303 and 309."
        },
        diagram: {
          type: "flow",
          steps: ["Theft 303 (move + dishonest)", "Snatching 304 (from the person, sudden grab)", "Robbery 309 (instant hurt/fear/restraint)"]
        },
        mnemonic: {
          name: "SUDDEN GRAB FROM THE PERSON",
          hook: "No IPC twin. Between 303 and 309.",
          recite: "If hurt/fear of instant hurt is added, look at robbery. Don’t invent 304 as ‘new theft.’"
        },
        cases: [
          { name: "Bare-act offence", citation: "BNS 304", point: "Novelty — ingredients and the ladder beat case-hunting." }
        ],
        pyqs: [
          { year: "theme", section: "A", marks: "4", q: "Snatching under BNS.", outline: ["304 definition; vs theft; vs robbery; no IPC equivalent."] }
        ],
        check: ["304 in one sentence.", "Why it sits between theft and robbery.", "No IPC twin."]
      },
    ]
  };
})(window);

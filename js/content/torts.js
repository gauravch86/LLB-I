(function (g) {
  g.LLB = g.LLB || {};
  g.LLB.papers = g.LLB.papers || {};
  g.LLB.papers.k1003 = {
    id: "k1003",
    code: "K-1003",
    title: "Law of Torts and Consumer Protection",
    short: "Torts + CPA",
    blurb: "Tracks Bangia: nature → defences → vicarious/State → strict/absolute → nominate torts → CPA 2019.",
    shelf: {
      primary: "Dr. R.K. Bangia — <em>Law of Torts</em> (Allahabad Law Agency; CPA 2019 edition)"
    },
    youtube: [
      { title: "Rylands vs M.C. Mehta", search: "Rylands vs MC Mehta absolute liability" },
      { title: "CPA 2019 commissions", search: "CPA 2019 consumer commissions Hindi" },
      { title: "Torts intro Law Wallah", search: "Law of Torts damnum sine injuria Law Wallah" }
    ],
    topics: [
      {
        id: "t-intro",
        seq: 1,
        readAs: "Unit 1 — damnum / injuria home (pigeon-hole &amp; capacity are drill cards)",
        unit: 1,
        yield: "high",
        tags: ["damnum", "injuria", "pigeon hole", "constituents"],
        title: "Tortious liability — definition, constituents, damnum / injuria, mental element, parties",
        summary: "A tort is a civil wrong, other than a breach of contract, for which the remedy is unliquidated damages. Loss without legal injury is not a tort; legal injury without loss still is.",
        explainer: `<p><strong>Definition cluster:</strong> Winfield — tortious liability arises from the breach of a duty primarily fixed by law; this duty is toward persons generally; its breach is redressable by an action for unliquidated damages. Salmond — a civil wrong for which the remedy is a common-law action for unliquidated damages, and which is not exclusively the breach of a contract or trust. Fraser / Ratanlal exam lines: violation of a right <em>in rem</em> (against the world) rather than <em>in personam</em>.</p>
        <p><strong>Pigeon-hole theory (Salmond) vs Winfield:</strong> Salmond — you must fit a named tort (negligence, defamation…). Winfield — a general principle of liability for unjust harm, with defences. CCS Section A loves the label. Indian courts are pragmatic: they use nominate torts but stretch negligence and constitutional torts.</p>
        <p><strong>Constituents:</strong> (1) a wrongful act or omission; (2) legal damage (injuria); (3) legal remedy (usually damages; sometimes injunction/specific restitution). Mental element varies: some torts need intention (deceit, some trespass readings), negligence is fault without intent, strict/absolute skip fault.</p>
        <p><strong>Damnum sine injuria:</strong> damage without violation of a legal right → no action. <em>Gloucester Grammar School</em> (competition); <em>Mogul Steamship</em>; <em>Mayor of Bradford v Pickles</em> (malicious extraction of water on one’s land). <strong>Injuria sine damno:</strong> violation of a right without proved actual loss → actionable. <em>Ashby v White</em> (vote refused); <em>Marzetti v Williams</em> (banker’s refusal). The Dec 2024 20-marker on this pair is written in full in <strong>Worked answers</strong> below. Pigeon-hole as a 4-marker lives on <button type="button" class="text-link" data-nav="k1003" data-topic="t-pigeonhole">Pigeon-hole theory</button>; capacity on <button type="button" class="text-link" data-nav="k1003" data-topic="t-who-may-sue">who may sue</button>.</p>
        <p><strong>Malice, motive, negligence:</strong> motive is generally irrelevant if the act is lawful (<em>Bradford v Pickles</em>; <em>Allen v Flood</em>) — except where malice is an ingredient (malicious prosecution) or qualified privilege is defeated. Negligence is both a specific tort and a mode of liability. Malice-in-law (wrongful act done intentionally without just cause) vs malice-in-fact (spite).</p>
        <p><strong>Who may sue / be sued:</strong> Bangia’s capacity chapter sits next: generally any person with a right. Convicts can sue. Aliens (friendly) can. Husband-wife unity is historical debris (mostly gone). Independent contractor vs servant (see vicarious). The State (Bangia ch. 5). Minors can sue by next friend; can be sued; parent not automatically liable. Corporations: ultra vires issues. Deceased: survival statutes / fatal accidents — mention <em>fatal accidents</em> without dumping English 1846 Act history unless asked. Who may <em>not</em>: no right, no locus; judicial officers’ immunity for acts in jurisdiction; foreign sovereigns (classic — now nuanced).</p>
        <p>Bangia treats <strong>strict and absolute liability as a later dedicated chapter</strong> (after negligence/premises). CCS still plants the maxims in the intro unit — open that topic next; do not dump <em>Rylands</em> / <em>Mehta</em> here except as a one-line trailer.</p>`,
        analogy: {
          title: "Loss ≠ bug; right-breach = bug",
          body: "Damnum sine injuria is a competitor taking your market share with a legal product — painful metrics, no SLA breach. Injuria sine damno is an authz violation that caused zero rupee loss — still a P0."
        },
        diagram: {
          type: "compare",
          headers: ["Maxim", "Meaning", "Action?"],
          rows: [
            ["Damnum sine injuria", "Damage without legal injury", "No tort"],
            ["Injuria sine damno", "Legal injury without proved loss", "Tort (actionable per se flavour)"]
          ]
        },
        mnemonic: {
          name: "LOSS WITHOUT RIGHT ≠ TORT",
          hook: "Injuria is the legal hit. Strict/absolute wait for Bangia’s later chapter.",
          recite: "Unliquidated damages; right in rem. Damnum sine injuria no; injuria sine damno yes."
        },
        cases: [
          { name: "Ashby v White", citation: "(1703) 2 Ld Raym 938", point: "Injuria sine damno — vote." },
          { name: "Gloucester Grammar School", citation: "(1410) YB 11 Hen IV", point: "Competition loss without right-violation." },
          { name: "Mayor of Bradford v Pickles", citation: "[1895] AC 587", point: "Motive generally irrelevant." }
        ],
        pyqs: [
          {
            year: "Dec 2024",
            section: "C",
            marks: "20",
            q: "Mere causing of actual loss is not necessarily a tort but mere wrong without actual loss is a tort — Explain with cases.",
            outline: ["Define injuria vs damnum; two maxims with two cases each; mental element aside; close with constituents of tort."]
          },
          {
            year: "Dec 2024",
            section: "A",
            marks: "4",
            q: "Pigeon Hole Theory / Damnum Sine Injuria / Strict Liability.",
            outline: ["Salmond vs Winfield; Gloucester; point to Bangia ch. 16 for Rylands if the short note is Strict Liability."]
          }
        ],
        check: [
          "Winfield + Salmond one-liners.",
          "Two cases per maxim.",
          "Who may sue / not be sued in four bullets."
        ]
      },
      {
        id: "t-justifications",
        seq: 2,
        readAs: "Bangia ch. 2 — general defences",
        unit: 2,
        yield: "high",
        tags: ["volenti", "necessity", "act of god", "statutory authority", "inevitable accident"],
        title: "Justifications in tort",
        summary: "Even a facially wrongful act may be privileged: consent, necessity, accident, vis major, statute. CCS loves inevitable accident vs Act of God.",
        explainer: `<p><strong>Volenti non fit injuria:</strong> no injury to one who consents. Requirements: knowledge of the risk <em>and</em> agreement, free and informed. Not a defence to an illegal bargain in the same way as contract; statutory safety duties often non-waivable. Rescue cases: the rescuer is not volens (<em>Haynes v Harwood</em>). Mere knowledge ≠ consent (<em>Smith v Baker</em> — employee who knows of a risk has not necessarily agreed). Sports: consented contact within the rules, not off-the-ball assault. Consent to medical treatment — battery analysis.</p>
        <p><strong>Necessity:</strong> inflict a lesser harm to prevent a greater (public: throwing cargo overboard; private: entering land to save life). Distinguish from private defence (torts cousin of Crimes PD). <em>Cope v Sharpe</em>; Indian fire-break examples. Necessity is not a loot licence.</p>
        <p><strong>Inevitable accident:</strong> an accident unavoidable by the taking of ordinary care — not a supernatural event, just no fault. <em>Stanley v Powell</em> (pellet glancing); <em>Brown v Kendall</em>. If there is negligence, the label dies.</p>
        <p><strong>Act of God (vis major):</strong> operation of natural forces so unexpected that no human foresight/prudence could reasonably anticipate — extraordinary rainfall, earthquake. Must be the <em>sole</em> cause; human negligence in maintaining a reservoir kills the defence (<em>Greenock</em> / <em>Nichols v Marsland</em> exam pair). This is a <em>Rylands</em> defence, not an absolute-liability defence in India.</p>
        <p><strong>Statutory authority:</strong> if the statute authorises the act and the nuisance/harm is the inevitable result of doing what the statute commands, no action (<em>Vaughan v Taff Vale</em>). Negligent exercise of the power is still actionable. Mandatory vs permissive statutes. Constitutional torts / Art. 21 can still discipline the State when the ‘authority’ is a fig leaf.</p>
        <p>Other justifications sometimes listed: private defence, plaintiff a wrongdoer (limited), mistake (rarely), parental/quasi-parental authority, judicial acts.</p>`,
        analogy: {
          title: "Allow-lists on a WAF",
          body: "Volenti is the user clicking I Agree with actual knowledge. Necessity is breaking glass to pull someone from a fire. Inevitable accident is a well-tested system failing without negligence. Act of God is a black-swan natural event. Statute is a signed exception — but sloppy implementation still pages on-call (negligence)."
        },
        diagram: {
          type: "compare",
          headers: ["Defence", "Core idea", "Fails when"],
          rows: [
            ["Volenti", "Free, informed consent to the risk", "Mere knowledge; rescue; illegal statutory duty"],
            ["Necessity", "Lesser harm to prevent greater", "Disproportion; private vengeance"],
            ["Inevitable accident", "Ordinary care could not avoid", "Any negligence"],
            ["Act of God", "Extraordinary natural force, sole cause", "Human fault mixed in"],
            ["Statutory authority", "Inevitable result of authorised work", "Negligent execution; ultra vires"]
          ]
        },
        mnemonic: {
          name: "VANIS",
          hook: "Volenti · Accident · Necessity · Inevitable? wait: Volenti, Accident, Necessity, vis major (God), Statute.",
          recite: "Accident ≠ Act of God. Knowledge ≠ volenti. Statute ≠ careless statutory bodies."
        },
        cases: [
          { name: "Smith v Baker", citation: "[1891] AC 325", point: "Knowledge of risk ≠ consent." },
          { name: "Haynes v Harwood", citation: "[1935] 1 KB 146", point: "Rescuer not volens." },
          { name: "Stanley v Powell", citation: "[1891] 1 QB 86", point: "Inevitable accident." },
          { name: "Nichols v Marsland", citation: "(1876) 2 Ex D 1", point: "Act of God floods." }
        ],
        pyqs: [
          {
            year: "Dec 2024",
            section: "B",
            marks: "10",
            q: "Inevitable accident vs Act of God.",
            outline: ["Define each; human vs natural; ordinary care vs unforeseeable vis major; two cases; why it matters for Rylands."]
          }
        ],
        check: ["Volenti ingredients.", "Accident vs Act of God table.", "Statutory authority + negligence rider."]
      },
      {
        id: "t-vicarious",
        seq: 3,
        readAs: "Survey — vicarious / State (Kasturilal line is a drill)",
        unit: 3,
        yield: "high",
        tags: ["vicarious", "sovereign immunity", "kasturilal", "joint tortfeasors"],
        title: "Vicarious liability, State / sovereign immunity, joint tortfeasors",
        summary: "Masters answer for servants in the course of employment. The State no longer hides behind a 19th-century crown. Joint tortfeasors are jointly and severally liable.",
        explainer: `<p><strong>Vicarious liability:</strong> liability for another’s tort because of a relationship. Master–servant: (1) servant, not independent contractor (control / organisation / integration tests — <em>Ready Mixed Concrete</em> / Indian analogues); (2) tort in the <em>course of employment</em> (authorised act, or unauthorised mode of an authorised act — <em>Century Insurance</em>; frolic vs detour). Owner–borrowed servant; hospital consultants (non-delegable duties in medical cases). Independent contractor: general rule no VL, exceptions — extra-hazardous acts, non-delegable duties, improper instructions, estoppel.</p>
        <p><strong>State liability / sovereign immunity:</strong> English Crown historically could do no wrong; India inherited a distinction between <em>sovereign</em> and <em>non-sovereign</em> functions from <em>P. &amp; O. Steam Navigation</em> (1861) — maintenance of a dockyard vs something ‘governmental.’ <em>Kasturilal v State of U.P.</em> (1965): police seizure of gold, theft by constable — sovereign function, no damages (infamous). Later High Courts and SC eroded this: <em>State of Rajasthan v Vidyawati</em> (jeep, touring collector — liable); <em>N. Nagendra Rao</em> (1994) — distinction no longer valid in a welfare State, especially when statutory duties are breached; <em>Common Cause</em> / constitutional torts under 21 (<em>Nilabati Behera</em> — custodial death compensation, public-law remedy distinct from private tort). Dec 2024 20-marker: “Old distinction between sovereign and non-sovereign functions no longer invoked.” Agree with <em>Nagendra Rao</em>, distinguish Kasturilal as bad history, mention Art. 300 (suability of Union/States).</p>
        <p><strong>Joint tortfeasors:</strong> persons who concert in a wrong, or whose combined acts cause the same damage (several concurrent tortfeasors). Liability is <strong>joint and several</strong> — plaintiff may sue all or one for the whole. Release of one at common law could release all — equity / statutes mitigated; Indian practice: avoid careless full releases. Contribution among tortfeasors (equitable / statutory ideas). Independent successive torts: not joint. Exam: nature &amp; extent of liability (Dec 2024 Q12).</p>`,
        analogy: {
          title: "Employer inherits the crash; State lost the crown plugin",
          body: "Vicarious liability is a parent process inheriting a child worker’s nonzero exit during business hours — not during a midnight frolic. Joint tortfeasors are a shared on-call rotation: paging one pages the liability of all. Sovereign immunity was a root-user exception; Nagendra Rao deleted that sudoers file for ordinary torts."
        },
        diagram: {
          type: "decision",
          q: "Was the actor a servant in the course of employment?",
          yes: "Master vicariously liable",
          no: "Check contractor exceptions / frolic"
        },
        mnemonic: {
          name: "COURSE OF EMPLOYMENT",
          hook: "Control + authorised job. Kasturilal → Nagendra Rao → Art. 21 compensation.",
          recite: "VL: relationship + course. Joint: joint and several. State: suable, distinction dying."
        },
        cases: [
          { name: "State of Rajasthan v Vidyawati", citation: "AIR 1962 SC 933", point: "State liable for driver’s negligence." },
          { name: "Kasturilal Ralia Ram Jain v State of U.P.", citation: "AIR 1965 SC 1039", point: "Sovereign function shield — later isolated." },
          { name: "N. Nagendra Rao & Co v State of A.P.", citation: "(1994) 6 SCC 205", point: "Sovereign/non-sovereign distinction obsolete in welfare State." },
          { name: "Nilabati Behera v State of Orissa", citation: "(1993) 2 SCC 746", point: "Public-law compensation for custodial death." }
        ],
        pyqs: [
          {
            year: "Dec 2024",
            section: "C",
            marks: "20",
            q: "Old distinction between sovereign and non-sovereign functions no longer invoked to determine State liability — Comment with cases.",
            outline: ["P&O; Vidyawati; Kasturilal; Nagendra Rao; Art. 300; constitutional torts; conclude with welfare State."]
          },
          {
            year: "Dec 2024",
            section: "C",
            marks: "20",
            q: "Joint tortfeasors — nature & extent of liability.",
            outline: ["Who is joint; joint and several; contribution; release problem; illustration."]
          }
        ],
        check: ["Course of employment vs frolic.", "Kasturilal vs Nagendra Rao.", "Joint and several in one sentence."]
      },
      {
        id: "t-strict",
        seq: 4,
        readAs: "Survey — strict vs absolute (Rylands &amp; Mehta are drills)",
        unit: 1,
        yield: "high",
        tags: ["rylands", "mehta", "strict", "absolute"],
        title: "Strict liability and absolute liability",
        summary: "Bangia isolates this as its own chapter: Rylands is the leaky tank with excuses; M.C. Mehta is the hazardous enterprise with none. CCS still plants both in the intro unit — write them here at Bangia depth.",
        explainer: `<aside class="note"><h3>One-home — survey here; ingredients on the drills</h3>
        <p>Rylands elements and exceptions: <button type="button" class="text-link" data-nav="k1003" data-topic="t-rylands-elements">Rylands drill</button>. Oleum gas / no excuses: <button type="button" class="text-link" data-nav="k1003" data-topic="t-mehta-absolute">absolute liability drill</button>. This card is the contrast engine for the 20-marker.</p></aside>
        <p>CCS bunches this with “nature of tort.” Bangia does not: after vicarious liability and (in his order) several nominate torts, he gives <strong>Rules of Strict and Absolute Liability</strong> a full chapter. For Dec 2026, treat it as a standalone 20-marker engine.</p>
        <p><strong>Strict liability — <em>Rylands v Fletcher</em>:</strong> a person who for his own purposes brings on his land and collects and keeps there anything likely to do mischief if it escapes, must keep it in at his peril. Ingredients Indian answers must list: (1) dangerous thing; (2) brought/collected on land; (3) escape; (4) non-natural use of land. Damage is to the plaintiff from the escape.</p>
        <p><strong>Defences (the whole point of calling it ‘strict’ not ‘absolute’):</strong> plaintiff’s default; act of God / vis major; consent / <em>volenti</em>; act of a stranger / third party; statutory authority. Inevitable accident is argued; it is weaker than Act of God. If the defendant was negligent in keeping the thing, you may also have ordinary negligence — but Rylands does not need proof of negligence.</p>
        <p><strong>Absolute liability — <em>M.C. Mehta v Union of India</em> (Oleum gas, 1987):</strong> an enterprise engaged in a hazardous or inherently dangerous industry owes an <em>absolute and non-delegable</em> duty to the community; if harm results, liability is absolute. No Rylands defences. Compensation correlated to the magnitude and capacity of the enterprise (so a large chemical house cannot plead poverty). Follow-ons: <em>Indian Council for Enviro-Legal Action</em> (polluter pays in public law); Bhopal as the political shadow of why the Court refused English excuses.</p>
        <p><strong>Exam trap:</strong> do not say “India abolished Rylands.” Rylands still explains water, electricity, and some escape cases. Hazardous industry / mass disaster framing → Mehta. Constitutional tort / Art. 21 overlay can sit in the last paragraph without stealing the Torts paper.</p>`,
        analogy: {
          title: "Leaky tank vs nuclear plant",
          body: "Strict = a tank farm with a documented exception list (Act of God, third-party valve). Absolute = a nuclear plant whose SLA has the exceptions stripped and whose damages scale with the operator’s balance sheet."
        },
        diagram: {
          type: "compare",
          headers: ["", "Strict (Rylands)", "Absolute (M.C. Mehta)"],
          rows: [
            ["Trigger", "Escape of dangerous thing; non-natural use", "Hazardous/inherently dangerous enterprise"],
            ["Fault", "Not required", "Not required"],
            ["Defences", "Act of God, third party, vis major, consent, statute", "None of the Rylands defences"],
            ["Indian industrial disasters", "Classic English import still cited", "Preferred framing for Oleum/Bhopal-class harm"]
          ]
        },
        mnemonic: {
          name: "STRICT HAS EXCUSES; ABSOLUTE DOES NOT",
          hook: "Four Rylands ingredients. Five defences. Mehta: non-delegable + deep-pocket measure.",
          recite: "Bangia ch. 16. Never write ‘strict = absolute.’"
        },
        cases: [
          { name: "Rylands v Fletcher", citation: "(1868) LR 3 HL 330", point: "Strict liability for escape." },
          { name: "M.C. Mehta v Union of India", citation: "(1987) 1 SCC 395", point: "Absolute liability; Oleum gas." },
          { name: "Indian Council for Enviro-Legal Action v Union of India", citation: "(1996) 3 SCC 212", point: "Polluter pays; chemical waste." },
          { name: "Cambridge Water v Eastern Counties Leather", citation: "[1994] 2 AC 264", point: "English foreseeability overlay — mention as contrast, not Indian holding." }
        ],
        pyqs: [
          {
            year: "Dec 2024",
            section: "A",
            marks: "4",
            q: "Strict Liability.",
            outline: ["Rylands ingredients; two defences; one-line Mehta contrast."]
          },
          {
            year: "theme",
            section: "C",
            marks: "20",
            q: "Distinguish strict liability and absolute liability with cases.",
            outline: ["Rylands ingredients + defences; Mehta facts/ratio; table; when each applies in India."]
          }
        ],
        check: [
          "Four Rylands ingredients.",
          "Five defences.",
          "Mehta: non-delegable + no excuses + enterprise measure."
        ]
      },
      {
        id: "t-negligence",
        seq: 7,
        readAs: "Negligence home (res ipsa / medical / contributory / shock are drills)",
        unit: 4,
        yield: "high",
        tags: ["negligence", "donoghue", "res ipsa", "nervous shock"],
        title: "Specific tort — Negligence",
        summary: "Duty → breach → causation → damage. Add-ons: res ipsa loquitur and nervous shock. Same four-stage pipeline as a fault tree.",
        explainer: `<p><strong>Duty of care:</strong> <em>Donoghue v Stevenson</em> neighbour principle — persons so closely and directly affected that I ought reasonably to have them in contemplation. Indian reception: manufacturers, drivers, occupiers, professionals (Bolam / <em>Jacob Mathew</em> for doctors — error of judgment ≠ negligence; need a responsible body of opinion, with <em>Bolitho</em> reasonableness overlay in later common-law). <em>Caparo</em> three-stage (foreseeability, proximity, fairness) is English extra; use if you like neat lists.</p>
        <p><strong>Breach:</strong> reasonable person standard; higher for experts; lower (sometimes) for children. Calculus of risk: magnitude, probability, cost of precautions (<em>Bolton v Stone</em> cricket six).</p>
        <p><strong>Causation:</strong> but-for; legal cause; novus actus. <strong>Remoteness:</strong> <em>Wagon Mound</em> (foreseeable type of damage) vs old <em>Re Polemis</em> (directness). Eggshell skull still sits with foreseeable type.</p>
        <p><strong>Damage:</strong> actual, not purely speculative; pure economic loss is restricted (mention, don’t drown).</p>
        <p><strong>Res ipsa loquitur:</strong> the thing speaks for itself. Conditions: accident of a kind that does not ordinarily happen without negligence; thing in defendant’s control; plaintiff not contributorily negligent. It is a rule of evidence, not a third type of tort — shifts the explaining burden. Classic: barrels of flour, swabs left in the body, buses on pavements.</p>
        <p><strong>Nervous shock:</strong> recognised psychiatric illness, not mere grief. Primary victims vs secondary (proximity of relationship, perception, aftermath — <em>Alcock</em> English; Indian courts more flexible in accident cases). Dec 2024 Section B asked this expressly. Contributory negligence reduces damages (Law Reform idea; Indian apportionment).</p>`,
        analogy: {
          title: "QA fault tree",
          body: "Duty is the spec of who you must not crash. Breach is missing the SLO of the reasonable person. Causation is the blameless-vs-root-cause postmortem. Res ipsa is when the production incident is of a class that never happens on a healthy box — the on-call must explain."
        },
        diagram: { type: "flow", steps: ["Duty", "Breach", "Causation", "Damage"] },
        mnemonic: {
          name: "DBCD + RES IPSA",
          hook: "Duty, Breach, Causation, Damage. Nervous shock needs a recognised psychiatric hit.",
          recite: "Donoghue neighbour. Jacob Mathew for doctors. Res ipsa = evidence, not a new tort."
        },
        cases: [
          { name: "Donoghue v Stevenson", citation: "[1932] AC 562", point: "Neighbour / manufacturer." },
          { name: "Jacob Mathew v State of Punjab", citation: "(2005) 6 SCC 1", point: "Medical negligence standard (also criminal overlay)." },
          { name: "Municipal Corpn of Delhi v Subhagwanti", citation: "AIR 1966 SC 1750", point: "Clock tower collapse — res ipsa flavour." }
        ],
        pyqs: [
          {
            year: "Dec 2024",
            section: "B",
            marks: "10",
            q: "Nervous shock under negligence.",
            outline: ["Recognised illness; foreseeability; primary/secondary; Indian accident illustrations."]
          },
          { year: "Dec 2024", section: "A", marks: "4", q: "Res Ipsa Loquitur.", outline: ["Three conditions; evidential nature."] }
        ],
        check: ["Four ingredients.", "Res ipsa conditions.", "Medical standard case."]
      },
      {
        id: "t-nuisance",
        seq: 6,
        readAs: "Bangia ch. 9 — nuisance",
        unit: 4,
        yield: "high",
        tags: ["nuisance", "public", "private"],
        title: "Specific tort — Nuisance",
        summary: "Unlawful interference with use or enjoyment of land (private) or with a public right (public). Locality, duration, hypersensitivity, and particular damage decide the 4-marker. Dec 2024 Sec A.",
        explainer: `<p><strong>Private nuisance:</strong> a continuous or recurrent unlawful interference with a person’s use or enjoyment of land, or of some right over or in connection with it. Typical payloads: smell, noise, vibration, smoke, seeping water, encroaching roots, sensible diminution of amenity. Ingredients to recite: (1) the claimant has a proprietary or possessory interest (a mere licensee classically failed — <em>Malone v Laskey</em>; later English/human-rights softening exists, but CCS still wants possession); (2) interference that is <em>substantial</em> and <em>unreasonable</em> judged by the locality (“what would be a nuisance in Belgrave Square would not necessarily be so in Bermondsey” — <em>Sturges v Bridgman</em>); (3) damage — physical injury to land is straightforward; amenity damage is enough if a normal user would feel it. Hypersensitive use fails (<em>Robinson v Kilvert</em> — extra-delicate paper). Who is liable: creator of the nuisance, occupier who continues/adopts it (<em>Sedleigh-Denfield</em>), sometimes a landlord who authorised it.</p>
        <p><strong>Public nuisance:</strong> an act or omission that materially affects the reasonable comfort and convenience of a class of the public — blocked highway, polluted river, dangerous structure over a street. It is also a crime (BNS public-nuisance chapter). Civil suit: Attorney-General / relator action, <em>or</em> a private plaintiff who proves <strong>particular damage</strong> over and above the common injury (otherwise every passer-by would sue). <em>Soltau v De Held</em> is the textbook bell; Indian highway/pollution PILs often travel as public nuisance + Art. 21.</p>
        <p><strong>Defences:</strong> statutory authority (strictly construed — if the statute authorises the <em>work</em>, reasonable residual nuisance may be paid for, not a licence to be reckless); prescription (20 years’ as-of-right enjoyment as if an easement — tricky, and does not cure a public nuisance); consent. <strong>Not defences:</strong> “I was here first” / coming to the nuisance as a complete answer (the doctor who arrives next to the confectioner in <em>Sturges</em> still won when the noise newly interfered with his consulting room); “the activity is useful”; “many others do it.”</p>
        <p><strong>Trespass vs nuisance:</strong> trespass is <em>direct</em> (usually a one-off entry), actionable per se; nuisance is typically <em>indirect</em> and ongoing, and amenity claims need damage. A parked lorry on your land is trespass; smoke drifting over it is nuisance.</p>`,
        analogy: {
          title: "Noisy neighbour process",
          body: "Private nuisance is a process that doesn’t crash your VM but saturates shared I/O so your occupancy is miserable. Public nuisance saturates the public network. Coming-to-the-nuisance is moving house next to an existing batch job — weak defence if the job later intensifies."
        },
        diagram: {
          type: "compare",
          headers: ["", "Private nuisance", "Public nuisance", "Trespass to land"],
          rows: [
            ["Interest", "Use/enjoyment of land", "Public right", "Possession of land"],
            ["How", "Indirect / continuing", "Class of public", "Direct interference"],
            ["Damage", "Usually needed", "Particular damage for private suit", "Actionable per se"]
          ]
        },
        mnemonic: { name: "UNREASONABLE USER", hook: "Locality + duration − hypersensitivity. Particular damage to sue for public nuisance.", recite: "Private vs public. Coming-to-the-nuisance is weak. Trespass is the direct cousin." },
        cases: [
          { name: "Sturges v Bridgman", citation: "(1879) 11 Ch D 852", point: "Locality; confectioner vs doctor." },
          { name: "Soltau v De Held", citation: "classic public nuisance", point: "Bell ringing / public inconvenience illustrations in textbooks." }
        ],
        pyqs: [
          { year: "Dec 2024", section: "A", marks: "4", q: "Nuisance.", outline: ["Private vs public; ingredients; one distinction from trespass."] }
        ],
        check: ["Who can sue in private nuisance.", "Particular damage.", "Three defences."]
      },
      {
        id: "t-trespass",
        seq: 8,
        readAs: "Bangia ch. 7, 18–19 — trespass to person, land, goods",
        unit: 4,
        yield: "high",
        tags: ["trespass", "person", "land", "goods"],
        title: "Specific tort — Trespass",
        summary: "Direct interference with person, land, or goods — often actionable per se. Syllabus “Trespass” is the trio: assault/battery/false imprisonment; land; goods/conversion.",
        explainer: `<p><strong>Trespass to the person</strong> is three nominate torts. <em>Assault:</em> an act that causes reasonable apprehension of immediate unlawful force (a raised fist, a loaded-looking gun pointed — words alone are historically weak unless they complete a gesture). <em>Battery:</em> the actual infliction of unlawful physical contact; any touching outside ordinary social contact can suffice — intention to contact, not necessarily to injure. <em>False imprisonment:</em> total restraint of liberty, without lawful justification, for any time however short. Partial obstruction of one path is not enough if another reasonable exit exists (<em>Bird v Jones</em> — blocked highway section). Knowledge of the detention is not essential in some readings (you can be locked in a room while asleep). Defences: volenti, lawful arrest, self-defence, parental/teacher leftover (now tightly statutory), medical consent.</p>
        <p><strong>Trespass to land:</strong> unjustifiable <em>direct</em> interference with possession — entering, remaining after licence is revoked, or placing objects. Title is not the point; <strong>possession</strong> founds the action (even a squatter in possession can sue a later intruder). Continuing trespass: the dumped rubble stays a fresh wrong each day until removed. Aerial/subsoil: <em>cujus est solum</em> is qualified (overflight at ordinary height is not a farmer’s lawsuit; mining/cables still matter). Defences: licence, necessity, recaption of goods carefully, legal authority. Remedy: damages, injunction, sometimes ejection.</p>
        <p><strong>Trespass to goods / conversion:</strong> trespass de bonis asportatis is direct interference (snatching the bag). <strong>Conversion</strong> is a dealing with goods in a manner seriously inconsistent with the owner’s right — sale, refusal to return after demand, using them as yours — even an honest buyer of stolen goods at common law (nemo dat echoes). Detinue (old withholding writ) has largely folded into conversion / statute. Actionable per se for land and person: injuria sine damno in action — you need not prove a rupee of loss.</p>
        <p>Keep the exam axe: <strong>direct vs indirect</strong> (trespass vs nuisance); <strong>total vs partial restraint</strong> (false imprisonment vs mere obstruction); possession vs ownership for land.</p>`,
        analogy: {
          title: "Unauthorised packet on a private VLAN",
          body: "Trespass is a packet that was never allowed onto the interface — not a noisy-neighbour QoS problem (that’s nuisance). False imprisonment is locking every egress port. Conversion is treating someone else’s volume as yours."
        },
        diagram: { type: "tree", root: "Trespass", branches: ["Person (assault/battery/FI)", "Land", "Goods / conversion"] },
        mnemonic: { name: "DIRECT + PER SE", hook: "If it’s indirect and smelly, it’s probably nuisance.", recite: "Possession founds land trespass. Total restraint for false imprisonment." },
        cases: [
          { name: "Bird v Jones", citation: "(1845) 7 QB 742", point: "Partial obstruction ≠ false imprisonment." },
          { name: "Trespass vs nuisance textbook pair", citation: "doctrine", point: "Direct/indirect is the exam axe." }
        ],
        pyqs: [
          { year: "theme", section: "B", marks: "10", q: "Trespass to person or land.", outline: ["Define; ingredients; defences; distinguish nuisance/false imprisonment."] }
        ],
        check: ["Three trespasses to person.", "Possession not title.", "Actionable per se meaning."]
      },
      {
        id: "t-defamation",
        seq: 5,
        readAs: "Defamation home (full defences are a drill)",
        unit: 4,
        yield: "high",
        tags: ["defamation", "libel", "slander", "privilege"],
        title: "Specific tort — Defamation",
        summary: "FAME: False (in substance defamatory) statement About the plaintiff, Made to a third party, Exposing to hatred/ridicule. Defences are half the 20-marker.",
        explainer: `<p>Defamation is the publication of a false statement lowering a person in the estimation of right-thinking members of society. <strong>Libel</strong> (permanent form — writing, film, now electronic archives) is actionable per se. <strong>Slander</strong> (transient speech) generally needs special damage except four exceptions: imputing a crime, contagious disease, unchastity (historical gendered exception — write carefully), unfitness for office/profession.</p>
        <p><strong>Ingredients:</strong> (1) defamatory meaning (natural &amp; ordinary, or innuendo); (2) reference to plaintiff (can be unnamed if identifiable — class libel only if the class is small); (3) publication to at least one third person (repeater is a fresh publisher at common law; internet intermediaries are a statutory overlay — don’t fake Indian IT Act holdings unless sure). Intention to defame is not required; intention to publish is.</p>
        <p><strong>Defences:</strong> truth / justification (civil: truth enough; criminal BNS 356 still pairs truth with public good — mention the split); fair comment on a matter of public interest (comment, not disguised fact; honest); absolute privilege (Parliamentary proceedings, court); qualified privilege (duty-interest occasions; defeated by malice); consent; apology/mitigation (statutory in some regimes). <em>Reynolds</em> / public-interest responsible journalism is English; Indian <em>R. Rajagopal v State of T.N.</em> (privacy vs public officials, prior restraint).</p>
        <p>Innuendo must be pleaded. Triviality is a weak Indian plea. Company can sue for business reputation; government as such generally cannot (chilling democracy).</p>`,
        analogy: {
          title: "FAME",
          body: "False-enough-to-defame payload, Addressed to the identifiable user, Multi-cast to a third party, Esteem dropped. Privilege is a signed channel: absolute is an encrypted court/Parliament bus; qualified is a duty-interest VPN that malice tears down."
        },
        diagram: {
          type: "compare",
          headers: ["Defence", "Must show", "Killed by"],
          rows: [
            ["Justification", "Truth of the sting", "Failure on facts"],
            ["Fair comment", "Comment + public interest + honesty", "Facts false; malice"],
            ["Absolute privilege", "Occasion (Parliament, court)", "Usually nothing"],
            ["Qualified privilege", "Duty/interest occasion", "Malice"]
          ]
        },
        mnemonic: { name: "FAME", hook: "False · About plaintiff · Made to third party · Esteem lowered.", recite: "Libel per se; slander often needs special damage. Always write defences." },
        cases: [
          { name: "R. Rajagopal v State of T.N.", citation: "(1994) 6 SCC 632", point: "Prior restraint, privacy, public officials." },
          { name: "D.P. Choudhary v Manjulata", citation: "AIR 1997 Raj 170", point: "Indian defamation illustration often taught." }
        ],
        pyqs: [
          {
            year: "Dec 2024",
            section: "C",
            marks: "20",
            q: "Ingredients of defamation + defences.",
            outline: ["Define; libel/slander; FAME; innuendo; four defences with one case/example each."]
          }
        ],
        check: ["FAME.", "Libel vs slander.", "Four defences."]
      },
      {
        id: "t-cpa",
        seq: 9,
        readAs: "CPA 2019 home (hierarchy &amp; service/for-service are drills)",
        unit: 5,
        yield: "high",
        tags: ["cpa 2019", "consumer", "commission", "shantha"],
        title: "Consumer Protection Act 2019 — consumer, service vs for service, enforcement",
        summary: "Write 2019 Commissions, not 1986 Forums. Know who is a consumer, the contract-of-service trap, and how a complaint moves.",
        explainer: `<p>CPA 2019 replaced the 1986 Act. Vocabulary: <strong>District / State / National Consumer Disputes Redressal Commission</strong>. Unique books that still say “District Forum” are revision-toxic for 2026.</p>
        <p><strong>Consumer (s.2(7)):</strong> a person who buys goods or hires/avails services for a consideration (paid or promised or partly paid, or under any system of deferred payment) — includes user of goods/beneficiary of services with buyer’s approval. <strong>Excludes</strong> a person who obtains goods for resale or for any commercial purpose (with a livelihood-by-self-employment carve-out). Online buyers, overseas sellers targeting India — 2019 widened territorial/e-comm hooks.</p>
        <p><strong>Unfair contract, product liability, misleading ads</strong> are 2019 upgrades. Deficiency of service / defect in goods remain the workhorses.</p>
        <p><strong>Contract of service vs contract for service:</strong> of service = employment (master–servant; CPA generally not for employees vs employer as such). For service = professional/independent services (doctor, banker, carrier, builder). <em>Indian Medical Association v V.P. Shantha</em> (1995): medical services are ‘services’ under CPA except when rendered free of charge to all, or under a contract of personal service. Government hospitals that charge some patients: mixed; courts have wrestled with free wards. This distinction is the conceptual heart of the syllabus bullet.</p>
        <p><strong>Enforcement / procedure:</strong> complaint by consumer, recognised consumer association, Central/State Government, legal heir. Pecuniary jurisdiction was reset in 2021: District up to ₹50 lakh; State ₹50 lakh–₹2 crore; National above ₹2 crore (original 2019 figures were higher — write the revised figures and say “as amended/notified”). Territorial: where opposite party resides/carries on business or where cause of action arises; e-comm: where complainant resides (2019 convenience). Limitation generally 2 years, condonable. Mediation cells. Appeals: District → State → National → Supreme Court (on substantial questions as provided). Reliefs: removal of defect, replacement, refund, compensation, discontinuation of unfair practice, product-liability damages.</p>
        <p>Dec 2024 still asked “District consumer redressal forum” and “how is a complaint written / procedure before State Commission” — translate Forum→Commission in your answer and you look up to date.</p>`,
        analogy: {
          title: "Consumer is an end-user licence, not a reseller account",
          body: "If you bought the API for resale or as raw material for a factory, you are not a ‘consumer.’ Contract of service is an employment SSH key; contract for service is hiring an external consultant. Shantha put doctors on the consultant side unless the whole hospital is a free public good."
        },
        diagram: {
          type: "vflow",
          steps: [
            "Complaint to District / State / National Commission (pecuniary + territorial)",
            "Notice, mediation option, hearing",
            "Order: refund / replace / compensate / stop practice",
            "Appeal up the commission ladder"
          ]
        },
        mnemonic: {
          name: "COMMISSIONS not FORUMS",
          hook: "2019 Act; 2021 pecuniary reset. Shantha: medicine is a service unless purely free.",
          recite: "Consumer ≠ commercial reseller. Of service = employment. For service = professional. 2-year limitation."
        },
        cases: [
          { name: "Indian Medical Association v V.P. Shantha", citation: "(1995) 6 SCC 651", point: "Medical services under CPA." },
          { name: "Lucknow Development Authority v M.K. Gupta", citation: "(1994) 1 SCC 243", point: "Housing as service; punitive damages culture." },
          { name: "Spring Meadows Hospital v Harjol Ahluwalia", citation: "(1998) 4 SCC 39", point: "Child as consumer/beneficiary; parents." }
        ],
        pyqs: [
          {
            year: "Dec 2024",
            section: "C",
            marks: "20",
            q: "How is a complaint written? Procedure before State Consumer Dispute Redressal Forum.",
            outline: ["Correct the name to Commission; who may file; contents of complaint; limitation; pecuniary/territorial; mediation; hearing; reliefs; appeal."]
          },
          { year: "Dec 2024", section: "B", marks: "10", q: "District consumer redressal forum.", outline: ["Now District Commission; jurisdiction figures; composition in outline."] }
        ],
        check: ["s.2(7) inclusion/exclusion.", "Shantha rule.", "2019 names + 2021 pecuniary bands."]
      },
      {
        id: "t-pigeonhole",
        seq: 1.2,
        readAs: "Drill — pigeon-hole (from nature home)",
        unit: 1,
        yield: "high",
        tags: ["pigeon-hole", "winfield", "salmond", "nominate torts"],
        title: "Pigeon-hole theory of torts",
        summary: "Salmond: tort is a law of nominate wrongs — if it does not fit a pigeon-hole, it is not a tort. Winfield: it is a general principle of liability with named torts as illustrations. Dec 2024 short-noted this.",
        explainer: `<p><strong>Salmond’s pigeon-holes:</strong> there is no general liability for all unjust harm. The plaintiff must fit the facts into a recognised tort (negligence, trespass, defamation, nuisance, conversion…). New holes can be added by statute or slow common-law growth, but the court does not invent a residual ‘unjust harm’ action. This is conservative and predictable.</p>
        <p><strong>Winfield:</strong> tort is a breach of a duty primarily fixed by law; the duty is toward persons generally; it is redressible by an action for unliquidated damages. Named torts are the working catalogue, but the principle is general. Courts can recognise new duties (privacy, new negligence situations) without waiting for Parliament to drill a hole.</p>
        <p><strong>India:</strong> closer to a mixed practice. We still plead nominate torts. <em>M.C. Mehta</em> absolute liability is a new hole drilled by the Court. Constitutional torts (Nilabati Behera) sit beside, not inside, Winfield. Exam: define both; one illustration of a new hole; conclude that CCS answers should still name a tort, not dump ‘unjustness.’</p>
        <p><strong>Not the same as:</strong> damnum sine injuria (that is about legal injury). Pigeon-hole is about whether the <em>cause of action</em> exists as a type.</p>`,
        analogy: {
          title: "Enum vs open exception class",
          body: "Salmond: errors must match an enum (Trespass, Negligence, …) or the compiler rejects the brief. Winfield: a base Exception class exists; named torts are subclasses. Mehta added a new subclass at runtime."
        },
        diagram: {
          type: "compare",
          headers: ["", "Salmond", "Winfield"],
          rows: [
            ["Picture", "Closed pigeon-holes", "General liability principle"],
            ["New wrongs", "Wait for a new hole", "Duty can be recognised"],
            ["Exam use", "Plead a named tort", "Explain growth (Mehta, privacy)"]
          ]
        },
        mnemonic: {
          name: "HOLES vs PRINCIPLE",
          hook: "Salmond = nominate holes. Winfield = general duty.",
          recite: "Dec 2024 Section A: pigeon-hole. Write both names and one Indian new-hole."
        },
        cases: [
          { name: "M.C. Mehta v Union of India", citation: "(1987) 1 SCC 395", point: "New hole: absolute liability — Winfield-friendly growth." },
          { name: "Ashby v White", citation: "(1703) 2 Ld Raym 938", point: "Injuria sine damno — a recognised hole (right to vote), not ‘any unfairness.’" }
        ],
        pyqs: [
          {
            year: "Dec 2024",
            section: "A",
            marks: "4",
            q: "Pigeon Hole Theory.",
            outline: ["Salmond; Winfield contrast; one Indian illustration."]
          }
        ],
        check: ["Salmond in one sentence.", "Winfield in one sentence.", "Why damnum/injuria is a different card."]
      },
      {
        id: "t-rylands-elements",
        seq: 4.2,
        readAs: "Drill — Rylands elements + exceptions",
        unit: 1,
        yield: "high",
        tags: ["rylands", "strict liability", "non-natural", "escape"],
        title: "Rylands v Fletcher — elements and exceptions",
        summary: "Strict liability: who brings a dangerous thing onto land and lets it escape is liable, even without negligence — unless an exception fires. Absolute liability (Mehta) later pulls those exceptions out.",
        explainer: `<p><strong>Ingredients (write as a checklist):</strong> (1) a <strong>dangerous thing</strong> likely to do mischief if it escapes; (2) <strong>brought on</strong> the land by the defendant (not a natural accumulation); (3) <strong>non-natural user</strong> of land (<em>Rickards v Lothian</em> — ordinary water in a basin is natural; a reservoir in Blackburn J.’s industrial England was not); (4) <strong>escape</strong> from the defendant’s premises; (5) <strong>damage</strong> of a foreseeable type (Wagon Mound later colours remoteness even here in some treatments).</p>
        <p><strong>Exceptions (the ‘leaky tank has excuses’ list):</strong> Act of God; act of a stranger (third-party unforeseeable); plaintiff’s own default / consent (<em>volenti</em>); statutory authority; (sometimes) common benefit. These are why Indian industrial disaster law moved to Mehta.</p>
        <p><strong>India:</strong> Rylands was received, then found too English-land-based for a chemical plant in a crowded city. Still write the elements — Dec 2024 Section A ‘Strict Liability’ wants this checklist, then one line pointing to absolute liability as the Indian upgrade.</p>`,
        analogy: {
          title: "Hazardous payload + escape event",
          body: "You imported a dangerous dependency into your VPC (brought on), it was not a default OS daemon (non-natural), it leaked across the subnet (escape), and it toasted a neighbour. Strict liability does not ask whether your SRE was negligent — unless an exception (act of God, a stranger’s exploit you could not foresee, the plaintiff opened the port) applies."
        },
        diagram: {
          type: "vflow",
          steps: ["Dangerous thing", "Brought onto land", "Non-natural user", "Escape", "Damage — then scan exceptions"]
        },
        mnemonic: {
          name: "D-B-N-E-D",
          hook: "Dangerous · Brought · Non-natural · Escape · Damage. Then God / stranger / plaintiff / statute.",
          recite: "Blackburn J. + Cairns non-natural. Mehta subtracts the exception list for hazardous industry."
        },
        cases: [
          { name: "Rylands v Fletcher", citation: "(1868) LR 3 HL 330", point: "Parent strict-liability rule." },
          { name: "Rickards v Lothian", citation: "[1913] AC 263", point: "Non-natural user." },
          { name: "Read v Lyons", citation: "[1947] AC 156", point: "No escape, no Rylands (explosion inside the factory)." }
        ],
        pyqs: [
          {
            year: "Dec 2024",
            section: "A",
            marks: "4",
            q: "Strict Liability.",
            outline: ["Rylands ingredients; two exceptions; one line Mehta."]
          }
        ],
        check: ["Five ingredients.", "Four exceptions.", "Why ‘escape’ failed in Read v Lyons."]
      },
      {
        id: "t-mehta-absolute",
        seq: 4.4,
        readAs: "Drill — Oleum gas / no Rylands excuses",
        unit: 1,
        yield: "high",
        tags: ["absolute liability", "mehta", "oleum", "hazardous"],
        title: "Absolute liability — M.C. Mehta (no Rylands excuses)",
        summary: "An enterprise engaged in a hazardous or inherently dangerous activity in India owes an absolute, non-delegable duty. No Act-of-God / stranger defences. Measure of damages can be correlated to capacity.",
        explainer: `<p><em>M.C. Mehta v Union of India</em> (Oleum gas leak, 1986/87) refused to keep Indian victims inside Rylands. The Court declared a distinct Indian rule: if an enterprise is engaged in hazardous or inherently dangerous activity and harm results, it is <strong>absolutely liable</strong> to compensate. The duty is <strong>non-delegable</strong>. Defences that save a Rylands defendant do not save this enterprise. Quantum: the larger and more prosperous the enterprise, the greater the amount of compensation — a deterrence/capacity idea (write carefully; it is not a licence to invent punitive jackpots in every district-court tort).</p>
        <p><strong>Why:</strong> Bhopal’s shadow; crowded Indian land use; Rylands’ 19th-century land-escape picture does not fit a chemical plant in Delhi. <strong>vs Rylands:</strong> no need to prove non-natural user in the English sense; no escape-from-land technicality as the soul of the tort; no exception catalogue. <strong>vs negligence:</strong> no duty/breach fight.</p>
        <p>Later environment / Art. 21 cases ride this policy. Public-liability insurance statutes are the legislative cousin. Exam: facts of oleum; rule; contrast table with Rylands; one critique (indeterminate ‘hazardous’; quantification).</p>`,
        analogy: {
          title: "Nuclear plant with zero excuses",
          body: "Rylands is a leaky tank with a documented exception list. Mehta is a reactor: if you chose to run that process in this city, the incident response bill is yours — you cannot blame a lightning strike, a contractor, or ‘we followed English land law.’"
        },
        diagram: {
          type: "compare",
          headers: ["", "Rylands strict", "Mehta absolute"],
          rows: [
            ["Activity", "Dangerous thing + non-natural land", "Hazardous / inherently dangerous enterprise"],
            ["Escape", "Needed", "Harm from the activity"],
            ["Defences", "God / stranger / statute / plaintiff", "Not available"],
            ["Damages flavour", "Make good the leak", "Also deterrence / capacity"]
          ]
        },
        mnemonic: {
          name: "HAZARD → ABSOLUTE → NO EXCUSE",
          hook: "Oleum leak. Non-delegable. Capacity-sensitive quantum.",
          recite: "Do not write Mehta as ‘Rylands without the word escape.’ It is a different Indian rule."
        },
        cases: [
          { name: "M.C. Mehta v Union of India", citation: "(1987) 1 SCC 395", point: "Absolute liability declared." },
          { name: "Union Carbide (Bhopal) litigation", citation: "settlement / later orders", point: "Policy backdrop — do not fake a neat ratio." }
        ],
        pyqs: [
          {
            year: "theme",
            section: "C",
            marks: "20",
            q: "Distinguish strict and absolute liability.",
            outline: ["Rylands ingredients + exceptions; Mehta facts + rule; table; Indian policy; critique."]
          }
        ],
        check: ["Oleum facts in three lines.", "Non-delegable + no defences.", "How quantum talk differs from Rylands."]
      },
      {
        id: "t-kasturilal",
        seq: 3.2,
        readAs: "Drill — Kasturilal → Nagendra Rao (from vicarious survey)",
        unit: 3,
        yield: "high",
        tags: ["kasturilal", "sovereign immunity", "peninsular", "nilabati"],
        title: "Sovereign immunity evolution — Kasturilal to modern State liability",
        summary: "Old English crown immunity + Kasturilal’s sovereign/non-sovereign split no longer decides Indian State torts. Dec 2024 asked this almost in those words.",
        explainer: `<p><strong>P. &amp; O. Steam Navigation</strong> (1861): East India Company liable for non-sovereign functions (repair of a ship like a private person) but not for sovereign ones. That colonial fork haunted Article 300 (‘old Government of India’ liabilities).</p>
        <p><strong>Kasturilal Ralia Ram Jain v State of U.P.</strong> (1965): gold seized by police from a merchant; kept in police custody; misappropriated by a constable. Court: police power is sovereign; no damages. This is the high-water of immunity — and the case every later bench is embarrassed by.</p>
        <p><strong>Erosion:</strong> <em>State of Rajasthan v Vidyawati</em> (jeep, driver, non-sovereign). <em>Nagendra Rao</em> (1994) — the distinction is outdated; in a welfare/republic the State should answer like any employer, especially where fundamental rights and statutory duties are in play. <em>Nilabati Behera</em> — constitutional tort compensation under 32/226 for custodial death, regardless of Kasturilal. <em>N. Nagendra Rao</em> / later motor and medical lines treat employment-course negligence as vicarious liability of the State.</p>
        <p>Dec 2024 20-marker: “Old distinction between sovereign and non-sovereign functions no longer invoked…” — agree, with the ladder, then one line that some military/diplomatic cores may still be argued, but police custody of a citizen’s gold is not that core.</p>`,
        analogy: {
          title: "Crown plugin removed from the kernel",
          body: "Kasturilal left a rootkit: if the process was labelled ‘sovereign,’ the crash report was dropped. Nagendra Rao / Nilabati uninstalled the plugin. Vicarious liability of the State is now the default driver; constitutional tort is a privileged interrupt for FR breaches."
        },
        diagram: {
          type: "flow",
          steps: ["P&O sovereign split", "Vidyawati: jeep = non-sovereign", "Kasturilal: police gold = sovereign (high-water)", "Nagendra Rao: split outdated", "Nilabati: constitutional tort"]
        },
        mnemonic: {
          name: "KASTURI STUCK → NAGENDRA OPEN",
          hook: "1965 immunity; 1994 welfare-state liability; 32 compensation.",
          recite: "Do not defend Kasturilal. Tell the story and land on Nagendra Rao + Nilabati."
        },
        cases: [
          { name: "Kasturilal Ralia Ram Jain v State of U.P.", citation: "AIR 1965 SC 1039", point: "Sovereign police function — immunity (now criticised)." },
          { name: "N. Nagendra Rao & Co. v State of A.P.", citation: "(1994) 6 SCC 205", point: "Distinction no longer decisive." },
          { name: "Nilabati Behera v State of Orissa", citation: "(1993) 2 SCC 746", point: "Public-law compensation." }
        ],
        pyqs: [
          {
            year: "Dec 2024",
            section: "C",
            marks: "20",
            q: "Old distinction between sovereign and non-sovereign functions no longer invoked to determine State liability — Comment with cases.",
            outline: ["P&O; Kasturilal facts; Vidyawati; Nagendra Rao; Nilabati; conclude the quote is correct."]
          }
        ],
        check: ["Kasturilal facts.", "Nagendra Rao holding.", "Constitutional tort vs private law damages."]
      },
      {
        id: "t-remoteness",
        seq: 7.2,
        readAs: "Bangia — remoteness of damage (Wagon Mound)",
        unit: 4,
        yield: "high",
        tags: ["remoteness", "wagon mound", "polemis", "foreseeability"],
        title: "Remoteness of damage — Wagon Mound",
        summary: "Even after duty, breach, and cause-in-fact, the loss may be too remote. Re Polemis (directness) lost. Wagon Mound (foreseeable type of damage) is the working test.",
        explainer: `<p><strong>Cause-in-fact</strong> (but-for / material contribution) is not enough. <strong>Remoteness</strong> asks: is this the kind of harm the law will charge to the defendant?</p>
        <p><strong>Re Polemis (1921):</strong> if the negligent act was the direct cause, even unforeseeable damage (spark → ship burnt) was recoverable. Harsh on defendants; a directness test.</p>
        <p><strong>Wagon Mound (No. 1) [1961]:</strong> furnace oil in Sydney harbour; welding; fire. Privy Council: the defendant is liable only for damage of a <strong>kind that was reasonably foreseeable</strong>. Pollution of the wharf might have been on the radar; the fire, on those facts, was held not foreseeable. <strong>Wagon Mound (No. 2)</strong> later found fire foreseeable on slightly different findings — teach that foreseeability is fact-sensitive.</p>
        <p><strong>Thin skull:</strong> you take the victim as you find them as to <em>extent</em> once the <em>type</em> of injury is foreseeable. Eggshell-skull is not a licence to recover a wholly different kind of harm.</p>
        <p>India follows foreseeability of kind. Pair with contributory negligence (apportionment) — different issue. Contract remoteness is Hadley/s.73; do not mix papers.</p>`,
        analogy: {
          title: "Alert type vs blast radius",
          body: "Duty/breach is ‘you shipped a bad build.’ Remoteness is ‘which incident types were in the risk model?’ Polemis billed you for every cascade. Wagon Mound bills you for the alert classes a reasonable SRE would have on the dashboard. Thin skull: once ‘burn’ is a known class, the victim’s extra-sensitive skin is your problem."
        },
        diagram: {
          type: "flow",
          steps: ["Duty", "Breach", "But-for cause", "Foreseeable KIND of damage? (Wagon Mound)", "Extent including thin skull"]
        },
        mnemonic: {
          name: "KIND not DIRECTNESS",
          hook: "Polemis = direct. Wagon Mound = foreseeable type.",
          recite: "Thin skull goes to extent, not to a new kind. Contract Hadley is a different statute."
        },
        cases: [
          { name: "Overseas Tankship (UK) Ltd v Morts Dock (Wagon Mound No. 1)", citation: "[1961] AC 388", point: "Foreseeable kind." },
          { name: "Re Polemis", citation: "[1921] 3 KB 560", point: "Directness — no longer the preferred test." }
        ],
        pyqs: [
          {
            year: "theme",
            section: "B",
            marks: "10",
            q: "Remoteness of damage in tort.",
            outline: ["Polemis vs Wagon Mound; kind vs extent; thin skull; one Indian sentence."]
          }
        ],
        check: ["Polemis rule.", "Wagon Mound rule.", "Thin skull vs kind."]
      },
      {
        id: "t-contributory",
        seq: 7.4,
        readAs: "Bangia — contributory vs composite negligence",
        unit: 4,
        yield: "high",
        tags: ["contributory negligence", "composite", "apportionment"],
        title: "Contributory vs composite negligence",
        summary: "Contributory: plaintiff’s own want of care reduces (does not automatically kill) the claim. Composite: two defendants’ negligence combines against an innocent plaintiff — joint and several liability.",
        explainer: `<p><strong>Contributory negligence:</strong> the plaintiff failed to take reasonable care for their own safety, and that failure was a cause of the damage. Common-law history: it was once a complete defence (harsh). Statutes / Indian practice: <strong>apportionment</strong> — damages reduced in proportion to the plaintiff’s share of responsibility (see also motor-accident practice). Last-opportunity doctrine is a historical patch; do not build the whole answer on it.</p>
        <p><strong>Composite negligence:</strong> two or more defendants are negligent; the plaintiff is not at fault (or their fault is not the issue). Example: two drivers collide and injure a pedestrian. Each defendant is liable for the whole vis-à-vis the plaintiff (<strong>joint and several</strong>); contribution among defendants is their problem. This is why the pedestrian does not have to sue in percentages.</p>
        <p><strong>Table it:</strong> whose fault; effect on the plaintiff; contribution. Do not call a two-car crash ‘contributory’ if the injured person is a bystander — that is composite.</p>`,
        analogy: {
          title: "Blame percentages vs two bad servers, one user",
          body: "Contributory: the user also pasted their password — reduce the payout. Composite: two microservices both dropped the request and fried an innocent client — the client can recover 100% from either team; they can fight the invoice internally."
        },
        diagram: {
          type: "compare",
          headers: ["", "Contributory", "Composite"],
          rows: [
            ["Who slipped", "Plaintiff + defendant", "Two (or more) defendants"],
            ["Plaintiff’s position", "Partly author of own loss", "Innocent (typically)"],
            ["Result", "Apportion / reduce damages", "Each D liable in full to P"]
          ]
        },
        mnemonic: {
          name: "P’s SHARE vs TWO Ds",
          hook: "Contributory = cut P’s cheque. Composite = P can pick either D for 100%.",
          recite: "Bystander hit by two cars is composite, not contributory."
        },
        cases: [
          { name: "Municipal Corporation of Greater Bombay v Laxman Iyer", citation: "(2003) 8 SCC 731", point: "Flavour of composite / apportionment in accident settings — pair with Bangia illustrations." },
          { name: "English Law Reform (Contributory Negligence) Act 1945 idea", citation: "comparative", point: "Apportionment replaced the all-or-nothing bar — Indian courts follow the justice of that idea." }
        ],
        pyqs: [
          {
            year: "theme",
            section: "B",
            marks: "10",
            q: "Distinguish contributory and composite negligence.",
            outline: ["Definitions; table; one illustration each; joint and several vs reduction."]
          }
        ],
        check: ["Contributory ≠ complete bar today.", "Composite: plaintiff innocent.", "Joint and several meaning."]
      },
      {
        id: "t-nervous-shock",
        seq: 7.6,
        readAs: "Bangia — nervous shock",
        unit: 4,
        yield: "high",
        tags: ["nervous shock", "psychiatric", "foreseeability"],
        title: "Nervous shock (psychiatric injury)",
        summary: "Negligence can found a claim for psychiatric injury, but not for every sob. Reasonable foreseeability of shock to a person of ordinary phlegm, plus proximity. Dec 2024 Section B.",
        explainer: `<p>Ordinary grief is not a tort. <strong>Nervous shock</strong> (modern: recognisable psychiatric illness — not mere tears) can be: (1) to a person in the zone of physical danger (primary victim); (2) to a bystander with close ties who sees the accident or its immediate aftermath (secondary victim — tighter controls).</p>
        <p><strong>English markers</strong> (Indian papers still cite them): <em>Dulieu v White</em> (shock from reasonable fear for oneself); <em>Hambrook v Stokes</em> (mother, children, runaway lorry); <em>McLoughlin v O’Brian</em> (aftermath at hospital, close family); <em>Alcock</em> (Hillsborough — limits on secondary victims: relationship, proximity in time and space, means of perception — television of a disaster is usually not enough).</p>
        <p><strong>Working Indian exam test:</strong> was psychiatric injury to this class of person reasonably foreseeable? Was there proximity? Was the claimant of ordinary fortitude (no eggshell psyche as to <em>whether</em> shock is foreseeable; thin skull may still go to extent once the type is in)? Dec 2024 asked this under negligence — nest it inside duty/breach/damage, do not invent a free-standing tort unless the facts are pure shock.</p>`,
        analogy: {
          title: "Alert fatigue vs a genuine PagerDuty trauma",
          body: "The law will not compensate every sad dashboard. It will compensate a recognisable psychiatric injury to someone who was in the blast radius or a close relative who walked into the immediate wreckage — if a reasonable observer would have seen that risk. Watching the outage on TV from another city is Alcock-out."
        },
        diagram: {
          type: "decision",
          q: "Recognisable psychiatric injury?",
          yes: "Primary (in danger) or secondary (close + proximate)?",
          no: "Ordinary grief — no tort"
        },
        mnemonic: {
          name: "ILLNESS + FORESEE + PROXIMITY",
          hook: "Not mere tears. Alcock limits secondary victims.",
          recite: "Dec 2024: nervous shock under negligence. Name Dulieu / McLoughlin / Alcock."
        },
        cases: [
          { name: "Dulieu v White & Sons", citation: "[1901] 2 KB 669", point: "Shock from fear for oneself." },
          { name: "McLoughlin v O’Brian", citation: "[1983] 1 AC 410", point: "Aftermath; close family." },
          { name: "Alcock v Chief Constable of South Yorkshire", citation: "[1992] 1 AC 310", point: "Secondary-victim limits." }
        ],
        pyqs: [
          {
            year: "Dec 2024",
            section: "B",
            marks: "10",
            q: "Nervous shock under negligence.",
            outline: ["Place inside negligence; psychiatric illness; primary vs secondary; foreseeability; Alcock limits."]
          }
        ],
        check: ["Why grief is not enough.", "Primary vs secondary.", "Three English names."]
      },
      {
        id: "t-defamation-defences",
        seq: 5.2,
        readAs: "Drill — defamation defences in full",
        unit: 4,
        yield: "high",
        tags: ["defamation", "justification", "fair comment", "privilege", "apology"],
        title: "Defamation — defences in full",
        summary: "FAME is the tort. The 20-marker is won on defences: truth, fair comment, privilege (absolute/qualified), and the apology/statute pocket. Dec 2024 Q11.",
        explainer: `<p><strong>Justification / truth:</strong> substantial truth of the defamatory sting. In civil tort (unlike some old criminal flavours) truth is a defence; public-good add-on is the criminal-law cousin (IPC 499 exception / BNS). Still plead truth carefully — a failed justification can aggravate damages.</p>
        <p><strong>Fair comment / honest opinion:</strong> comment, not a disguised allegation of fact; on a matter of public interest; based on true facts; honest (even if biased). Reviews, editorials, cricket umpires in the letters page.</p>
        <p><strong>Absolute privilege:</strong> Parliament (Arts. 105/194 flavour), judicial proceedings and fair reports of them, communication between high officers of State in official duty. No malice enquiry.</p>
        <p><strong>Qualified privilege:</strong> duty/interest to communicate to a person with a corresponding duty/interest (references, police complaints, board minutes). Defeated by <strong>malice</strong> (improper motive / knowledge of falsity).</p>
        <p><strong>Consent</strong> to publication. <strong>Apology</strong> / offer of amends under statutes (Press / CrPC cousins) may mitigate. <strong>Innocent dissemination</strong> (bookseller, host — evolving with intermediaries). Do not dump Art. 19(1)(a) as a complete defence; it is the constitutional backdrop, and 19(2) lists defamation as a restriction ground.</p>`,
        analogy: {
          title: "Publish pipeline with allow-lists",
          body: "Truth = the payload hashes match reality. Fair comment = opinion layer on disclosed facts. Absolute privilege = kernel log that cannot be sued. Qualified privilege = internal memo on a need-to-know channel, revoked if you mailed it with malice."
        },
        diagram: {
          type: "tree",
          root: "Defamation defences",
          branches: ["Truth", "Fair comment", "Absolute privilege", "Qualified privilege (− malice)", "Consent / apology / innocent spread"]
        },
        mnemonic: {
          name: "T-FC-AP-QP",
          hook: "Truth · Fair comment · Absolute privilege · Qualified privilege (malice kills QP).",
          recite: "19(1)(a) is not a magic wand. Dec 2024 wanted ingredients + defences."
        },
        cases: [
          { name: "Rustom K. Karanjia v K.M.D. Thackersey", citation: "AIR 1970 Bom 424", point: "Indian press / damages flavour." },
          { name: "T.S. Bhatia / English privilege classics", citation: "Bangia list", point: "Use one parliamentary and one judicial illustration." }
        ],
        pyqs: [
          {
            year: "Dec 2024",
            section: "C",
            marks: "20",
            q: "Ingredients of defamation + defences.",
            outline: ["FAME; libel/slander; four defences with one illustration each; malice and QP; 19(2)."]
          }
        ],
        check: ["Truth vs fair comment.", "Absolute vs qualified privilege.", "How malice operates."]
      },
      {
        id: "t-cpa-hierarchy",
        seq: 9.2,
        readAs: "Drill — commissions / UTP / product liability",
        unit: 5,
        yield: "high",
        tags: ["cpa 2019", "commissions", "unfair trade", "product liability"],
        title: "CPA 2019 — commission hierarchy, unfair trade, product liability",
        summary: "District → State → National Commissions (2021 pecuniary reset). 2019 added unfair contracts, product liability, misleading ads. Translate every old ‘Forum’ PYQ.",
        explainer: `<p><strong>Hierarchy:</strong> District Commission → State Commission → National Commission → Supreme Court (as provided). <strong>2021 pecuniary (write these):</strong> District up to ₹50 lakh; State ₹50 lakh–₹2 crore; National above ₹2 crore. Original 2019 figures were higher — examiners still mix them; name the revision.</p>
        <p><strong>Unfair trade practice / misleading advertisement:</strong> 2019 Central Authority (CCPA) can crack down on false ads, including endorser duties. Commissions still give consumer-wise refund/compensation. Do not confuse the regulator with the three-tier commission ladder.</p>
        <p><strong>Product liability (Ch. VI CPA 2019):</strong> product manufacturer, seller, service provider can be liable for a defective product that causes harm — a statutory cousin of strict ideas, with documented defences (misuse, substantial alteration, common-knowledge danger, etc.). This is the Bangia/CPA upgrade Unique 1986 books miss.</p>
        <p><strong>Unfair contract:</strong> one-sided terms (excessive deposits, unilateral termination) can be nullified in consumer disputes. E-comm: complainant’s residence as a jurisdictional convenience.</p>
        <p>Dec 2024: how to write a complaint / State Commission procedure — contents, limitation 2 years, mediation, reliefs, appeal.</p>`,
        analogy: {
          title: "Support tiers + a product-recall statute",
          body: "District/State/National are L1–L3 support with money caps. CCPA is the platform-trust and safety team for ads. Product liability is a statutory warranty that the SKU will not maim, even if the sales contract tried to shrink-wrap it away."
        },
        diagram: {
          type: "vflow",
          steps: ["Complaint (2 years)", "District / State / National (pecuniary + territory)", "Mediation option → order", "Appeal up", "CCPA track for ads (parallel)"]
        },
        mnemonic: {
          name: "50L / 2CR / ABOVE",
          hook: "2021 bands. Product liability is new. Forums are dead vocabulary.",
          recite: "Always correct Forum→Commission in a 2024 PYQ."
        },
        cases: [
          { name: "Indian Medical Association v V.P. Shantha", citation: "(1995) 6 SCC 651", point: "Still the service case — 2019 did not abolish it." },
          { name: "Lucknow Development Authority v M.K. Gupta", citation: "(1994) 1 SCC 243", point: "Housing as service." }
        ],
        pyqs: [
          {
            year: "Dec 2024",
            section: "C",
            marks: "20",
            q: "Procedure before State Consumer Dispute Redressal Forum.",
            outline: ["Rename Commission; who files; pecuniary; contents; limitation; mediation; reliefs; appeal; one line product liability if time."]
          }
        ],
        check: ["2021 pecuniary bands.", "CCPA vs commissions.", "Product-liability defendants."]
      },
      {
        id: "t-who-may-sue",
        seq: 1.4,
        readAs: "Drill — capacity (from nature home)",
        unit: 1,
        yield: "high",
        tags: ["capacity", "parties", "who may sue", "actio personalis"],
        title: "Who may sue and who may be sued in tort",
        summary: "Syllabus bullet + Bangia’s capacity chapter. A 10-marker of named exceptions: State, minor, corporation, husband-wife history, dead persons, foreign sovereigns, judicial officers.",
        explainer: `<p><strong>Default:</strong> anyone whose legal right is violated may sue; anyone who committed or is vicariously liable for the tort may be sued. Capacity is the list of historic and statutory wrinkles. Write them as a checklist, not a novel.</p>
        <p><strong>Who may sue:</strong> (1) <em>an adult of sound mind</em> — ordinary. (2) <em>Minor</em> — can sue by next friend; limitation often runs from majority for some claims. (3) <em>Person of unsound mind</em> — by next friend / guardian. (4) <em>Corporation</em> — for torts to property and reputation in its trading character; not for purely personal torts (assault on a company is a category error). (5) <em>Convict</em> — can sue; old civil death is gone. (6) <em>Alien friend</em> — yes; <em>alien enemy</em> — generally cannot sue in the municipal court unless licensed. (7) <em>Unborn child</em> — a child later born alive may, in limited settings, claim for prenatal injury (keep one line; do not invent a general tort personality). (8) <em>Husband and wife</em> — common-law unity is historical debris; spouses can sue each other in tort in modern Indian practice (flag, don’t lecture family law).</p>
        <p><strong>Who may be sued:</strong> the same cast, plus (a) <strong>the State</strong> — suable under Art. 300, sovereign/non-sovereign distinction dying (<em>Nagendra Rao</em> — see vicarious card); (b) <strong>minors</strong> can be sued; parents are not automatically vicariously liable merely for parenthood (they may be for their own negligence in control); (c) <strong>corporations</strong> for ultra vires / servants’ torts in the course of employment; (d) <strong>independent contractors</strong> generally themselves, not the employer, with extra-hazardous / non-delegable leaks.</p>
        <p><strong>Who classically may <em>not</em> (or only with a shield):</strong> (1) <em>actio personalis moritur cum persona</em> — a purely personal tort died with the person; Fatal Accidents statutes / survival provisions punch holes for dependants and estates — mention the idea, don’t dump English 1846 history; (2) <em>judicial officers</em> acting in jurisdiction, even if mistakenly — immunity for the judicial act; (3) <em>foreign sovereigns / ambassadors</em> — classic immunity, now statute-nuanced; (4) <em>no injuria, no locus</em> — a stranger to the right cannot sue (the damnum sine injuria cousin).</p>
        <p>CCS plants this next to damnum/injuria. A 10-marker is six bullets + State + dead-person + minor.</p>`,
        analogy: {
          title: "ACL on the plaintiff and defendant objects",
          body: "Capacity is the ACL: most users can open a ticket; some accounts are service accounts (corporations), some need a guardian token (minors), some processes die with the person (actio personalis) unless a survival statute forks the claim to the estate. The State lost its crown-plugin; foreign sovereigns still have a diplomatic skip-list."
        },
        diagram: {
          type: "compare",
          headers: ["Person", "Sue?", "Be sued?"],
          rows: [
            ["Minor", "Yes, by next friend", "Yes; parent not auto-liable"],
            ["Corporation", "Property/reputation in trade", "Yes, for servants’ torts"],
            ["State", "N/A as plaintiff usually", "Yes — Art. 300; distinction dying"],
            ["Deceased", "Estate / fatal-accident leaks", "Personal torts often die"]
          ]
        },
        mnemonic: {
          name: "MINOR-CORP-STATE-DEAD",
          hook: "Next friend; Art. 300; actio personalis; judicial immunity.",
          recite: "Alien enemy and foreign sovereign are the exotic shields. Parenthood ≠ vicarious liability."
        },
        cases: [
          { name: "N. Nagendra Rao & Co v State of A.P.", citation: "(1994) 6 SCC 205", point: "State suability — point to the vicarious card." },
          { name: "Actio personalis (doctrine)", citation: "common law + fatal-accident statutes", point: "Personal torts and the dead — name the maxim, then the statutory leak." }
        ],
        pyqs: [
          { year: "theme", section: "B", marks: "10", q: "Who may sue and who may not be sued in tort?", outline: ["Default; minor; corporation; State; dead persons; judicial officers; alien enemy."] }
        ],
        check: ["Minor as plaintiff and defendant.", "State suability one-liner.", "Actio personalis + one leak."]
      },
      {
        id: "t-res-ipsa",
        seq: 7.3,
        readAs: "Bangia — res ipsa loquitur (negligence add-on)",
        unit: 4,
        yield: "high",
        tags: ["res ipsa loquitur", "evidence", "negligence"],
        title: "Res ipsa loquitur",
        summary: "The thing speaks for itself. A rule of evidence inside negligence, not a new tort. Dec 2024 Sec A. Three conditions, then it shifts the explaining burden.",
        explainer: `<p><strong>Phrase:</strong> <em>res ipsa loquitur</em> — the thing speaks for itself. Some accidents tell their own story of negligence so loudly that the plaintiff need not particularise the exact careless act. It is <strong>not</strong> a third species of tort and not a presumption of law that always wins. It is an evidential device inside the tort of negligence.</p>
        <p><strong>Three conditions (recite):</strong> (1) the accident is of a <em>kind that does not ordinarily happen</em> without negligence (barrels do not fly out of warehouse windows onto pedestrians in the ordinary course — <em>Byrne v Boadle</em>); (2) the thing / situation was under the defendant’s <em>exclusive control</em> (or the control of someone for whom the defendant is responsible); (3) the plaintiff did not contribute to the accident (the old ‘no contributory negligence’ limb — today contributory is more about apportionment, but the exam still lists it). If those fire, the defendant must come forward with an explanation consistent with due care. If the explanation is credible, the inference may drop; if not, the plaintiff has a free run to the fact-finder.</p>
        <p><strong>Indian classroom set:</strong> clock-tower collapse (<em>Municipal Corporation of Delhi v Subhagwanti</em>); swab / instrument left in the body (medical — overlaps the medical-negligence card); bus on the pavement; bursting of a boiler in the defendant’s plant. <em>Scott v London &amp; St Katherine Docks</em> is the English sugar-bag cousin of Byrne.</p>
        <p><strong>Limits:</strong> if the facts are as consistent with no-negligence (a latent defect no reasonable inspection would catch, a stranger’s intervention), res ipsa will not carry the plaintiff. Specific evidence of what actually happened may make the maxim unnecessary — you then prove duty/breach the long way. Dec 2024 wanted the label + three conditions + ‘evidence not tort.’</p>`,
        analogy: {
          title: "The incident is of a class that never happens on a healthy box",
          body: "Res ipsa is when production pages you because a warehouse barrel hit a pedestrian — you do not need a stack trace of which intern unscrewed the latch. Exclusive control means it was your cluster. If you can show a third-party exploit or a physically impossible-to-detect hardware ghost, the inference dies."
        },
        diagram: {
          type: "vflow",
          steps: ["Accident of a kind that usually means negligence?", "Defendant’s control?", "Plaintiff not the author?", "If yes → D must explain due care"]
        },
        mnemonic: {
          name: "KIND · CONTROL · NOT-P",
          hook: "Byrne’s barrel. Subhagwanti’s tower. Evidence, not a new tort.",
          recite: "Three conditions; then the explaining burden moves. A good explanation kills the inference."
        },
        cases: [
          { name: "Byrne v Boadle", citation: "(1863) 2 H & C 722", point: "Barrel from a warehouse — the thing spoke." },
          { name: "Municipal Corpn of Delhi v Subhagwanti", citation: "AIR 1966 SC 1750", point: "Clock tower collapse — res ipsa flavour." },
          { name: "Scott v London & St Katherine Docks", citation: "(1865) 3 H & C 596", point: "Goods falling; classic English formula." }
        ],
        pyqs: [
          { year: "Dec 2024", section: "A", marks: "4", q: "Res Ipsa Loquitur.", outline: ["Define; three conditions; evidential nature; one case."] }
        ],
        check: ["Three conditions.", "Why it is not a separate tort.", "One Indian + one English case."]
      },
      {
        id: "t-medical-neg",
        seq: 7.5,
        readAs: "Bangia ch. 12 — professional / medical negligence",
        unit: 4,
        yield: "high",
        tags: ["medical negligence", "bolam", "jacob mathew", "shantha"],
        title: "Medical and professional negligence",
        summary: "Bolam / Jacob Mathew: error of judgment ≠ negligence. A responsible body of professional opinion, not the angry patient, sets the civil standard. Criminal rashness is a higher bar.",
        explainer: `<p><strong>Same four-stage pipeline</strong> (duty, breach, causation, damage) with a professional overlay. A doctor (or other professional) owes a duty to the patient who is in the professional relationship — not to the world at large in the Donoghue manufacturer sense, though hospitals owe duties to persons in their care. Consent that is not informed can travel as battery <em>and</em> as negligence; keep the labels clean.</p>
        <p><strong>Breach — Bolam (1957):</strong> a professional is not negligent if they acted in accordance with a practice accepted as proper by a responsible body of professionals skilled in that art, even if another body disagrees. <em>Bolitho</em> later added: the court may discard an opinion that is not capable of logical analysis. India: <strong><em>Jacob Mathew v State of Punjab</em> (2005)</strong> — for criminal medical negligence, grossness is required; a mere error of judgment, or a course accepted by a professional body, is not an offence. Civilly, the Bolam flavour still dominates: you judge the doctor against competent peers at the time, not against hindsight or the best textbook in the library. <em>Kusum Sharma</em> restated the civil precautions (res ipsa sometimes helps when a swab is left in).</p>
        <p><strong>What is not enough:</strong> an unsuccessful operation; a known complication that was disclosed; a choice between two recognised schools. <strong>What is enough:</strong> leaving the instrument in; operating on the wrong limb; ignoring a protocol every responsible peer would have followed; practising without skill you held out.</p>
        <p><strong>CPA overlay:</strong> <em>IMA v V.P. Shantha</em> — medical services are ‘services’ unless rendered free of charge to all, or under a contract of personal service. So the same facts may be a tort suit, a consumer complaint, and (rarely) a criminal case. Do not mix the standards: consumer deficiency is statutory; criminal needs rashness/grossness; civil needs Bolam-breach + damage.</p>
        <p>Other professionals (advocates, architects, carriers) use the same idea: the standard is the competent practitioner of that calling, not the reasonable bus passenger.</p>`,
        analogy: {
          title: "SRE on-call vs a criminal indictment",
          body: "Bolam asks: did a responsible on-call rotation accept this runbook? Jacob Mathew says a criminal charge needs a dumpster-fire, not a failed deploy that still followed the runbook. Shantha opened a consumer ticket counter beside the tort court. Wrong-limb surgery is res ipsa; a known complication is not."
        },
        diagram: {
          type: "compare",
          headers: ["Forum", "Standard", "Typical case"],
          rows: [
            ["Civil tort", "Bolam / competent peer", "Kusum Sharma line"],
            ["Criminal", "Gross rashness (Jacob Mathew)", "Not a mere error of judgment"],
            ["CPA", "Deficiency of service (Shantha)", "Paid hospital; not free-to-all"]
          ]
        },
        mnemonic: {
          name: "BOLAM + JACOB + SHANTHA",
          hook: "Peer opinion; grossness for crime; CPA if paid service.",
          recite: "Error of judgment ≠ negligence. Swab left in is the res ipsa gift."
        },
        cases: [
          { name: "Bolam v Friern Hospital Management Committee", citation: "[1957] 1 WLR 582", point: "Responsible body of professional opinion." },
          { name: "Jacob Mathew v State of Punjab", citation: "(2005) 6 SCC 1", point: "Criminal medical negligence — grossness; guidelines." },
          { name: "Indian Medical Association v V.P. Shantha", citation: "(1995) 6 SCC 651", point: "Medical service under CPA." }
        ],
        pyqs: [
          { year: "theme", section: "B", marks: "10", q: "Medical negligence.", outline: ["Duty; Bolam/Jacob Mathew; error of judgment; res ipsa pocket; Shantha; one illustration."] }
        ],
        check: ["Bolam in one sentence.", "Why Jacob Mathew is the criminal overlay.", "When CPA applies to a hospital."]
      },
      {
        id: "t-service-vs-for",
        seq: 9.4,
        readAs: "Drill — of service vs for service (from CPA home)",
        unit: 5,
        yield: "high",
        tags: ["contract of service", "contract for service", "shantha", "vicarious"],
        title: "Contract of service vs contract for service",
        summary: "Syllabus prints this as its own CPA bullet. Of service = employment (master–servant). For service = independent professional. It gates both vicarious liability and who is a ‘consumer.’",
        explainer: `<p><strong>Contract <em>of</em> service:</strong> the master–servant relationship. The employer controls not only <em>what</em> is done but typically <em>how</em> it is done (control test), the work is integrated into the organisation (integration / organisation test), and the person is on the payroll with holidays and discipline. Result: (1) <strong>vicarious liability</strong> for torts in the course of employment; (2) generally <strong>not a consumer dispute</strong> against the employer — labour law, not CPA, is the channel for a servant’s wage/service quarrel.</p>
        <p><strong>Contract <em>for</em> service:</strong> you hire an independent contractor / professional to produce a result. Control over method is limited; they bring their own tools, hire their own helpers, take business risk. Result: (1) generally <strong>no vicarious liability</strong> (exceptions: extra-hazardous work, non-delegable duties, negligent selection); (2) the hirer who pays for the professional service <strong>is a consumer</strong> of that service under CPA 2019 (subject to the commercial-purpose exclusion).</p>
        <p><strong>Tests (write two):</strong> control; integration / whose business; whose tools; power to hire/fire; mutuality of obligation. <em>Dharangadhara Chemical Works</em> (labour-law classic) and <em>Ready Mixed Concrete</em> (English) are the control/organisation illustrations. No single test is mechanical — hospitals are the exam laboratory.</p>
        <p><strong>IMA v V.P. Shantha (1995):</strong> medical services are CPA ‘services’ except (a) where they are rendered free of charge to everybody, or (b) under a contract of <em>personal</em> service (employment). A paying patient vs a doctor/hospital is almost always <em>for</em> service. A government hospital that is free to all may fall out; mixed hospitals (some paying, some free) have been treated as still in for the paying class — flag the issue. Consultants who are not servants can still attract hospital non-delegable duties in tort.</p>
        <p>Dec papers bury this inside CPA. Elevate it: one table, Shantha, one vicarious sentence, sit down.</p>`,
        analogy: {
          title: "Payroll SSH key vs hired consultant",
          body: "Of service = the engineer on your payroll with a company laptop and a manager who dictates the how. For service = you hired an external firm to ship a result; you do not vicariously inherit their intern’s tort, but you are their consumer if you paid. Shantha put the paying patient on the consultant side of the hospital, not on the employee roster."
        },
        diagram: {
          type: "compare",
          headers: ["", "Of service", "For service"],
          rows: [
            ["Relationship", "Master–servant / employment", "Independent contractor / professional"],
            ["Vicarious liability", "Yes, course of employment", "Generally no (hazard / non-delegable leaks)"],
            ["CPA", "Employee vs employer usually out", "Paying client is a consumer (Shantha)"]
          ]
        },
        mnemonic: {
          name: "OF = EMPLOYEE · FOR = CONSULTANT",
          hook: "Control + integration. Shantha: medicine is for service unless free-to-all or personal service.",
          recite: "Vicarious and consumer status flip on this distinction. Name two tests."
        },
        cases: [
          { name: "Indian Medical Association v V.P. Shantha", citation: "(1995) 6 SCC 651", point: "Medical services and the personal-service exception." },
          { name: "Dharangadhara Chemical Works v State of Saurashtra", citation: "AIR 1957 SC 264", point: "Control test in the employment/contractor border." }
        ],
        pyqs: [
          { year: "theme", section: "B", marks: "10", q: "Contract of service and contract for service.", outline: ["Define both; tests; VL consequence; Shantha CPA consequence; one illustration."] }
        ],
        check: ["Two tests.", "Vicarious consequence.", "Shantha’s two exceptions."]
      },
    ]
  };
})(window);

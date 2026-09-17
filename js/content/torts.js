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
        readAs: "Bangia ch. 1 — nature of a tort (plus capacity notes from ch. 3)",
        unit: 1,
        yield: "high",
        tags: ["damnum", "injuria", "pigeon hole", "constituents"],
        title: "Tortious liability — definition, constituents, damnum / injuria, mental element, parties",
        summary: "A tort is a civil wrong, other than a breach of contract, for which the remedy is unliquidated damages. Loss without legal injury is not a tort; legal injury without loss still is.",
        explainer: `<p><strong>Definition cluster:</strong> Winfield — tortious liability arises from the breach of a duty primarily fixed by law; this duty is toward persons generally; its breach is redressable by an action for unliquidated damages. Salmond — a civil wrong for which the remedy is a common-law action for unliquidated damages, and which is not exclusively the breach of a contract or trust. Fraser / Ratanlal exam lines: violation of a right <em>in rem</em> (against the world) rather than <em>in personam</em>.</p>
        <p><strong>Pigeon-hole theory (Salmond) vs Winfield:</strong> Salmond — you must fit a named tort (negligence, defamation…). Winfield — a general principle of liability for unjust harm, with defences. CCS Section A loves the label. Indian courts are pragmatic: they use nominate torts but stretch negligence and constitutional torts.</p>
        <p><strong>Constituents:</strong> (1) a wrongful act or omission; (2) legal damage (injuria); (3) legal remedy (usually damages; sometimes injunction/specific restitution). Mental element varies: some torts need intention (deceit, some trespass readings), negligence is fault without intent, strict/absolute skip fault.</p>
        <p><strong>Damnum sine injuria:</strong> damage without violation of a legal right → no action. <em>Gloucester Grammar School</em> (competition); <em>Mogul Steamship</em>; <em>Mayor of Bradford v Pickles</em> (malicious extraction of water on one’s land); Indian: <em>Ushaben v Bhagyalaxmi Chitra Mandir</em> style facts sometimes cited. <strong>Injuria sine damno:</strong> violation of a right without proved actual loss → actionable. <em>Ashby v White</em> (vote refused); <em>Marzetti v Williams</em> (banker’s refusal). This pair is the Dec 2024 20-marker spine: “mere causing of actual loss is not necessarily a tort but mere wrong without actual loss is a tort.”</p>
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
        readAs: "Bangia ch. 4–5 — vicarious liability and the State",
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
        readAs: "Bangia ch. 16 — strict and absolute liability",
        unit: 1,
        yield: "high",
        tags: ["rylands", "mehta", "strict", "absolute"],
        title: "Strict liability and absolute liability",
        summary: "Bangia isolates this as its own chapter: Rylands is the leaky tank with excuses; M.C. Mehta is the hazardous enterprise with none. CCS still plants both in the intro unit — write them here at Bangia depth.",
        explainer: `<p>CCS bunches this with “nature of tort.” Bangia does not: after vicarious liability and (in his order) several nominate torts, he gives <strong>Rules of Strict and Absolute Liability</strong> a full chapter. For Dec 2026, treat it as a standalone 20-marker engine.</p>
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
        readAs: "Bangia ch. 11–13 — negligence, medical, contributory",
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
        yield: "standard",
        tags: ["nuisance", "public", "private"],
        title: "Specific tort — Nuisance",
        summary: "Unlawful interference with use or enjoyment of land (private) or with a public right (public). Duration, locality, and hypersensitivity matter.",
        explainer: `<p><strong>Private nuisance:</strong> continuous or recurrent interference with use/enjoyment of land — smell, noise, vibration, encroaching roots, seepage. Who can sue: person with a proprietary or possessory interest (not a mere licensee — classic <em>Malone</em> limit, somewhat eased). Who is liable: creator, occupier, sometimes landlord. Ingredients: unreasonable user, damage (physical or amenity). Locality: a boiler in an industrial belt ≠ a boiler in a residential colony (<em>Sturges v Bridgman</em> “coming to the nuisance” is a weak defence). Hypersensitive plaintiff fails (<em>Robinson v Kilvert</em>).</p>
        <p><strong>Public nuisance:</strong> act/omission affecting the public or a class — obstruction of highway, pollution. Criminal cousin exists (BNS public-nuisance chapter). Civil action by Attorney-General / relator, or by a private person who suffers <em>particular damage</em> beyond the common injury.</p>
        <p>Defences: statutory authority, prescription (20 years), consent. Not: ‘I was here first’ as a complete answer; not that the activity is useful.</p>
        <p>Distinguish trespass (direct, often one-off, actionable per se) from nuisance (indirect, typically ongoing, damage usually needed for amenity claims).</p>`,
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
        mnemonic: { name: "UNREASONABLE USER", hook: "Locality + duration − hypersensitivity.", recite: "Private vs public. Particular damage to sue for public nuisance. Trespass is the direct cousin." },
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
        yield: "standard",
        tags: ["trespass", "person", "land", "goods"],
        title: "Specific tort — Trespass",
        summary: "Direct, intentional (or negligent in some readings) interference with person, land, or goods — often actionable per se.",
        explainer: `<p><strong>Trespass to person:</strong> assault (apprehension of immediate force), battery (unlawful contact), false imprisonment (total restraint of liberty — not mere obstruction of one exit if others exist). Distinguish from Crimes: same facts may be both. Volenti, lawful arrest, self-defence.</p>
        <p><strong>Trespass to land:</strong> unjustifiable direct entry, remaining, or placing objects. Possession, not ownership, founds the action. Continuing trespass (object left). Aerial/subsoil: cujus est solum is qualified by modern aviation. Defences: licence, necessity, justification of law.</p>
        <p><strong>Trespass to goods (trespass de bonis asportatis) / conversion:</strong> conversion is dealing with goods in a manner inconsistent with the owner’s right (even honest buyers of stolen goods at common law — nemo dat echoes). Detinue (historical withholding) largely folded into conversion/statute.</p>
        <p>Actionable per se: you need not prove rupee loss for land/person trespass. That is injuria sine damno in action.</p>`,
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
        readAs: "Bangia ch. 8 — defamation",
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
        readAs: "Bangia Part III / ch. 26 — Consumer Protection Act 2019",
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
      }
    ]
  };
})(window);

(function (g) {
  g.LLB = g.LLB || {};
  g.LLB.papers = g.LLB.papers || {};
  g.LLB.papers.k1005 = {
    id: "k1005",
    code: "K-1005",
    title: "Contract-I (General Principles)",
    short: "Contract-I",
    blurb: "Indian Contract Act 1872, Ss. 2–75. Formation state machine, then void/voidable, quasi, frustration, damages.",
    youtube: [
      { title: "ICA complete Law Wallah", search: "Indian Contract Act complete Law Wallah" },
      { title: "Frustration s.56", search: "Doctrine of frustration Section 56" },
      { title: "Minor Mohori Bibee", search: "Minor agreement Mohori Bibee" }
    ],
    topics: [
      {
        id: "k-scope",
        unit: 1,
        yield: "standard",
        tags: ["s.2", "s.10", "evolution"],
        title: "Purpose, evolution and scope of the law of contracts",
        summary: "Contract law is the private API of a market society: which promises the State will enforce. India codified English principles in 1872 and then overwrote them with consumer, labour, and constitutional equality.",
        explainer: `<p><strong>Purpose:</strong> to give legally binding force to agreements that the community thinks deserve it — facilitating exchange, allocating risk, protecting reliance and expectation. Not every promise is a contract (social engagements, incomplete bargains, illegal bargains).</p>
        <p><strong>Evolution:</strong> from status to contract (Maine — see Jurisprudence) in commercial England; writs of assumpsit; consideration as the English badge of enforceability; 19th-century will theory (meeting of minds). India: <strong>Indian Contract Act, 1872</strong> — a code that both copies and departs from English law (e.g. s.25 consideration exceptions; s.2(d) past consideration; s.63, s.74 liquidated damages uniqueness). Later: Sale of Goods 1930, Partnership 1932 split out; Specific Relief 1963; CPA; labour codes. Constitutional Art. 14/21 sometimes police unconscionable State contracts.</p>
        <p><strong>Scope of K-1005:</strong> general principles, not indemnity/guarantee/bailment/agency (often Sem-2). Core: ss.1–75. s.1 saves usages and special statutes. s.2 dictionary: proposal, promise, agreement, contract, consideration, void/voidable. s.10: agreements are contracts if made by free consent of competent parties for lawful consideration and lawful object, not hereby expressly declared void.</p>
        <p>Engineer hook: s.10 is the constructor signature of a valid Contract object.</p>`,
        analogy: {
          title: "OAC-CL handshake",
          body: "Offer + Acceptance + Consideration + Capacity + Lawful object/consent = enforceable contract. The Act is a 1872 SDK; consumer and labour statutes are later frameworks that monkey-patch ‘freedom of contract.’"
        },
        diagram: { type: "flow", steps: ["Proposal", "Acceptance → Promise", "Consideration + capacity + free consent + lawful object", "Contract (s.10)", "Not expressly void"] },
        mnemonic: { name: "OAC-CL", hook: "Offer, Acceptance, Consideration, Capacity, Lawful/free consent.", recite: "s.2 defines; s.10 constructs. Agreement ⊂ contract." },
        cases: [
          { name: "Printania / will theory vs objective test", citation: "doctrine", point: "Courts ask what a reasonable promisee would understand, not secret intent." },
          { name: "Maine’s status→contract", citation: "jurisprudence bridge", point: "Use in a 10-marker on evolution; then say labour/consumer re-statusised." }
        ],
        pyqs: [
          { year: "2022", section: "A/B", marks: "4–10", q: "Definition of contract.", outline: ["s.2(h); s.10 essentials; agreement vs contract; one example of void agreement."] }
        ],
        check: ["s.2(h) and s.10.", "What K-1005 excludes.", "One Indian departure from English law."]
      },
      {
        id: "k-offer",
        unit: 2,
        yield: "high",
        tags: ["proposal", "acceptance", "revocation", "s.3-9", "invitation to treat"],
        title: "Proposal, acceptance, communication and revocation (Ss. 2–9)",
        summary: "A proposal is a definite offer to be bound. Acceptance must be absolute and communicated. Revocation is a race against the completion of communication.",
        explainer: `<p><strong>Proposal (s.2(a)):</strong> when one signifies to another willingness to do or abstain, with a view to obtaining the other’s assent. Must be definite, communicated (s.3–4), and intended to create legal relations (social/family presumptions — <em>Balfour v Balfour</em> English; Indian courts similar). Distinguish <strong>invitation to treat</strong>: catalogue, shop display, advertisement of auction, tender notice — <em>Harvey v Facey</em> (lowest price is not offer); <em>Pharmaceutical Society v Boots</em>; Indian railway/timetable cases. Cross-offers do not lock.</p>
        <p><strong>Acceptance (s.2(b), s.7):</strong> absolute and unqualified; usual and reasonable manner unless prescribed. Mirror-image rule; counter-offer kills (<em>Hyde v Wrench</em>). Mental acceptance is no acceptance (2022 theme) — <em>Felthouse v Bindley</em>. Silence is not acceptance unless duties/prior course. Performance of conditions in a general offer is acceptance (<em>Carlill v Carbolic Smoke Ball</em>; <em>Lalman Shukla v Gauri Dutt</em> — must know the offer).</p>
        <p><strong>Communication (s.4):</strong> proposal complete when it comes to the knowledge of the offeree. Acceptance vs proposer: complete against proposer when put in a course of transmission so as to be out of acceptor’s power; against acceptor when it comes to proposer’s knowledge. Indian post rule is statutory, not merely <em>Adams v Lindsell</em>.</p>
        <p><strong>Revocation (s.5–6):</strong> proposal revocable until acceptance is complete as against the proposer. Acceptance revocable until complete as against the acceptor. Revocation by notice, lapse of time, failure of condition, death/insanity of proposer if known to acceptor before acceptance (s.6). General offer: revocation needs same publicity as the offer.</p>
        <p>Dec 2024 Q11: proposal — elements &amp; legal rules. Write s.2(a), communication, legal relations, vs invitation, revocation race.</p>`,
        analogy: {
          title: "TCP handshake with a cancel window",
          body: "SYN = proposal. SYN-ACK = acceptance. The Act tells you exactly when each packet is deemed delivered (s.4). Revocation is a RST that must arrive before the acceptance leaves the acceptor’s NIC. Invitation to treat is a banner ad, not a SYN."
        },
        diagram: { type: "vflow", steps: ["Invitation to treat?", "Definite proposal communicated", "Absolute acceptance", "When s.4 completes vs each party", "Revocation only before that instant"] },
        mnemonic: { name: "NO MENTAL ACCEPTANCE", hook: "Carlill = general offer. Lalman = you must know the offer. Hyde = counter-offer kills.", recite: "s.4 timings win 10-markers. Invitation ≠ proposal." },
        cases: [
          { name: "Carlill v Carbolic Smoke Ball Co", citation: "[1893] 1 QB 256", point: "Unilateral/general offer; performance as acceptance." },
          { name: "Lalman Shukla v Gauri Dutt", citation: "(1913) 11 ALJ 489", point: "Knowledge of offer required." },
          { name: "Hyde v Wrench", citation: "(1840) 3 Beav 334", point: "Counter-offer." },
          { name: "Harvey v Facey", citation: "[1893] AC 552", point: "Supply of information ≠ offer." },
          { name: "Felthouse v Bindley", citation: "(1862) 11 CB (NS) 869", point: "Silence/mental acceptance." }
        ],
        pyqs: [
          { year: "Dec 2024", section: "C", marks: "20", q: "Proposal — elements & legal rules.", outline: ["s.2(a); intention; communication; vs invitation; general offers; revocation ss.5–6; cases."] },
          { year: "2022", section: "A", marks: "4", q: "Invitation to offer / mental acceptance is no acceptance.", outline: ["One case each."] }
        ],
        check: ["s.4 two-way timings.", "Invitation vs offer examples.", "Revocation deadline."]
      },
      {
        id: "k-consideration",
        unit: 3,
        yield: "high",
        tags: ["consideration", "privity", "s.2d", "s.25", "chinnaya"],
        title: "Consideration and privity of contract",
        summary: "Consideration is the price of the promise (s.2(d)). English vs Indian law is a CCS 20-marker. Privity: strangers cannot sue — with Indian exceptions.",
        explainer: `<p><strong>s.2(d):</strong> when, at the desire of the promisor, the promisee or any other person has done/abstained or does/abstains or promises to do/abstain, such act/abstinence/promise is the consideration. Indian twists: (1) <em>past</em> consideration at the desire of the promisor counts; (2) consideration may move from “any other person” — so <em>Chinnaya v Ramayya</em> lets the donee-stranger sometimes sue. English: consideration must move from the promisee; past consideration generally no (<em>Eastwood v Kenyon</em>).</p>
        <p><strong>Kinds:</strong> past, executed, executory; adequate vs inadequate (s.25 explanation — inadequacy is not fatal unless it evidents fraud/coercion/unconscionability). Must be real, not illusory; not a public duty already owed (<em>Collins v Godefroy</em>); not illegal (s.23). Forbearance to sue can be good consideration.</p>
        <p><strong>s.25 — agreements without consideration void, except:</strong> (1) in writing and registered, out of natural love and affection between parties standing in a near relation; (2) compensation for past voluntary services; (3) promise to pay a time-barred debt, in writing and signed. Agency/gifts completed are outside the ‘agreement’ problem. This list is rote.</p>
        <p><strong>Privity:</strong> only parties can sue and be sued (<em>Dunlop v Selfridge</em>; <em>Tweddle v Atkinson</em>). Indian <em>exceptions / work-arounds:</em> trust (beneficiary); family arrangements / marriage settlements; assignment; acknowledgement / estoppel; covenant running with land; statutory; <em>Chinnaya</em> (consideration from third person + beneficiary of family arrangement). Dec 2024 Q6: stranger cannot sue — exceptions. Do not claim India abolished privity; claim it is qualified.</p>`,
        analogy: {
          title: "Payment logic + ACL",
          body: "Consideration is the price field — it can even be a past PATCH done at the promisor’s request (India). Privity is an ACL: only parties have invoke rights, unless a trust/beneficiary exception grants a service account. s.25 is a whitelist of no-consideration contracts."
        },
        diagram: {
          type: "compare",
          headers: ["Rule", "English", "Indian"],
          rows: [
            ["Past consideration", "Generally no", "Yes if at promisor’s desire (s.2(d))"],
            ["Must move from promisee", "Yes", "May move from any other person"],
            ["Love & affection / time-barred debt", "Narrower", "s.25 statutory exceptions"],
            ["Privity", "Strict (classic)", "Qualified (Chinnaya + trust etc.)"]
          ]
        },
        mnemonic: { name: "DESIRE + ANY OTHER PERSON", hook: "s.25: Love, past voluntary, time-barred debt (writing).", recite: "Chinnaya for third-party consideration. Privity still the default." },
        cases: [
          { name: "Chinnaya v Ramayya", citation: "(1882) 4 Mad 137", point: "Consideration from another person; sister-beneficiary." },
          { name: "Kedarnath Bhattacharji v Gorie Mahomed", citation: "(1886) 14 Cal 64", point: "Subscription promises / consideration of detriment." },
          { name: "Dunlop Pneumatic Tyre v Selfridge", citation: "[1915] AC 847", point: "English privity." },
          { name: "Tweddle v Atkinson", citation: "(1861) 1 B & S 393", point: "Stranger to consideration cannot sue (English)." }
        ],
        pyqs: [
          { year: "Dec 2024", section: "C", marks: "20", q: "Consideration — kinds; English vs Indian law.", outline: ["s.2(d); kinds; past/third-person; adequacy; s.25; English contrast; cases."] },
          { year: "Dec 2024", section: "B", marks: "10", q: "Stranger to contract cannot sue — exceptions.", outline: ["Privity rule; 5–6 exceptions; Chinnaya."] }
        ],
        check: ["s.2(d) verbatim-ish.", "Three s.25 exceptions.", "Four privity exceptions."]
      },
      {
        id: "k-object",
        unit: 4,
        yield: "high",
        tags: ["s.23", "s.24", "public policy", "unlawful"],
        title: "Lawful object and consideration (Ss. 23–24)",
        summary: "Even a perfect handshake fails if the payload is illegal or against public policy. s.23 is the policy firewall.",
        explainer: `<p><strong>s.23:</strong> consideration or object is unlawful if it is forbidden by law; or of such a nature that, if permitted, it would defeat the provisions of any law; or fraudulent; or involves injury to person or property of another; or the court regards it as immoral or opposed to public policy. Then the agreement is void.</p>
        <p><strong>Public policy heads (classic, not infinite):</strong> trading with enemy; trafficking in public offices; interference with justice (stifling prosecution — careful: compounding allowed offences is different); restraint of marriage (s.26); restraint of trade (s.27, with exceptions); champerty/maintenance (Indian courts more liberal — <em>Ram Coomar Coondoo</em>); immoral (sexual immorality contracts); breaking parental duties. <em>Gherulal Parekh v Mahadeodas</em> — wager not ‘immoral’ though void under s.30. Don’t invent new public-policy heads lightly (<em>Gherulal</em> caution).</p>
        <p><strong>s.24:</strong> if any part of a single consideration for one or more objects, or any one of several considerations for a single object, is unlawful, the agreement is void. Severability where there are distinct promises (s.57–58 cousins).</p>
        <p>Unlawful vs void vs illegal: exam precision — illegal often implies taint (no restitution); void under s.30 wager is void but not always ‘illegal’ in the same sense. Collateral transactions follow the taint if the object is criminal.</p>`,
        analogy: {
          title: "Policy engine on the payload",
          body: "s.23 is an admission controller: forbidden-by-law, defeat-the-law, fraud, injury, immoral, public policy. s.24 says a tainted field poisons the whole object if they are not severable microservices."
        },
        diagram: { type: "tree", root: "s.23 unlawful if…", branches: ["Forbidden by law", "Defeats a law", "Fraudulent", "Injury to person/property", "Immoral", "Public policy"] },
        mnemonic: { name: "F-D-F-I-I-P", hook: "Forbidden, Defeats, Fraud, Injury, Immoral, Policy.", recite: "Gherulal: wager ≠ immoral. Don’t mint new public-policy categories." },
        cases: [
          { name: "Gherulal Parekh v Mahadeodas", citation: "AIR 1959 SC 781", point: "Wager void not immoral; public policy caution." },
          { name: "Nash v Inman / immoral contracts", citation: "English illustrations", point: "Use Indian public-policy cases from Avtar Singh where possible." }
        ],
        pyqs: [
          { year: "2022", section: "C", marks: "20", q: "Public policy.", outline: ["s.23 last clause; recognised heads; Gherulal restraint on expansion; illustrations."] }
        ],
        check: ["Six s.23 heads.", "s.24 taint.", "Wager vs immoral."]
      },
      {
        id: "k-capacity",
        unit: 5,
        yield: "high",
        tags: ["minor", "mohori bibee", "s.11", "restitution"],
        title: "Capacity — minors, unsound mind, disqualified persons; restitution",
        summary: "s.11: majority, sound mind, not disqualified. Mohori Bibee: minor’s agreement is void, not voidable. No estoppel to validate it.",
        explainer: `<p><strong>s.11:</strong> competent if majority (18, or 21 under a guardian appointed — Majority Act), of sound mind (s.12: capable of understanding and of forming a rational judgment as to effects; a person usually unsound may contract in a lucid interval; usually sound cannot contract while of unsound mind), and not disqualified (alien enemy, statutory corporations ultra vires, insolvents in some dealings, etc.).</p>
        <p><strong>Minor’s agreement — <em>Mohori Bibee v Dharmodas Ghose</em> (1903):</strong> Privy Council — void ab initio. Consequences: cannot be specifically enforced against the minor; minor cannot ratify on majority (needs a fresh contract with consideration); no estoppel by representing majority (<em>Ajudhia Prasad</em> line — some nuance on restitution); minor can be a promisee/beneficiary (can sue, cannot be bound). Mortgage by minor void; lender’s security fails.</p>
        <p><strong>Restitution:</strong> s.65 (obligation of person who has received advantage under a void agreement or contract that becomes void) — applied cautiously to minors so as not to enforce the bargain by the back door. s.68 necessaries: person supplying necessaries suited to the minor’s condition can be reimbursed from the minor’s <em>property</em> (not personal liability). Equity: if minor still has the property obtained by misrepresentation, court may compel restitution (<em>Leslie v Sheill</em> English — no restitution if it amounts to enforcing a debt; Indian equity is a bit kinder when property is traceable).</p>
        <p>Dec 2024 Q12: who is competent / sound mind. 20-markers want Mohori Bibee facts in four lines.</p>`,
        analogy: {
          title: "AuthN age-gate",
          body: "Minors fail the age check: the contract object is never instantiated (void), not instantiated-and-revocable (voidable). You cannot estop the age-gate by a fake JWT. s.68 is a necessaries API billed to the estate, not a personal loan account."
        },
        diagram: { type: "decision", q: "Is the party a minor?", yes: "Agreement void (Mohori Bibee); check s.68 necessaries / restitution of traceable property", no: "Check s.12 sound mind and statutory disqualification" },
        mnemonic: { name: "MOHORI = VOID", hook: "No ratification. No estoppel. Necessaries from property.", recite: "s.11 three tests. Lucid interval works. Sound-mind definition is s.12." },
        cases: [
          { name: "Mohori Bibee v Dharmodas Ghose", citation: "(1903) 30 IA 114", point: "Minor’s agreement void." },
          { name: "Ajudhia Prasad v Chandan Lal", citation: "AIR 1937 All 557", point: "Estoppel / minor often discussed." },
          { name: "Nash v Inman", citation: "[1908] 2 KB 1", point: "Necessaries — already adequately supplied." }
        ],
        pyqs: [
          { year: "Dec 2024", section: "C", marks: "20", q: "Who is competent to contract? Sound mind.", outline: ["s.11; majority; s.12; disqualified; minor consequences; Mohori Bibee."] }
        ],
        check: ["Mohori holding.", "s.68 vs personal liability.", "s.12 lucid interval."]
      },
      {
        id: "k-consent",
        unit: 6,
        yield: "high",
        tags: ["coercion", "undue influence", "fraud", "misrepresentation", "mistake", "s.13-22"],
        title: "Consent and free consent (Ss. 13–22)",
        summary: "Consent is agreeing on the same thing in the same sense (s.13). Free consent (s.14) is consent not caused by coercion, undue influence, fraud, misrepresentation, or mistake.",
        explainer: `<p>If consent is caused by coercion, undue influence, fraud, or misrepresentation → contract <strong>voidable</strong> at the option of the victim (ss.19, 19A). Mistake of fact going to identity of subject-matter etc. → <strong>void</strong> (s.20). Mistake of law of the land — no excuse (s.21); foreign law treated as fact. Unilateral mistake as to identity can void; mere error of judgment does not (s.22).</p>
        <p><strong>Coercion (s.15):</strong> committing or threatening to commit any act forbidden by the BNS/IPC, or unlawful detaining/threatening to detain property, to the prejudice of any person, with intent to cause the other to enter. Includes threats to third persons. <em>Chikham Amiraju</em> (suicide threat as coercion in Indian law — examiners love it).</p>
        <p><strong>Undue influence (s.16):</strong> dominating position + using it to obtain an unfair advantage. Presumptions: real/apparent authority, fiduciary, parda-nashin, mental distress. Burden shifts. Unconscionable bargains.</p>
        <p><strong>Fraud (s.17):</strong> suggestion of untrue fact, active concealment, promise without intent to perform, other deception, or any act/omission declared fraudulent — with intent to deceive. <strong>Mere silence is not fraud</strong> unless duty to speak or silence is equivalent to speech (s.17 expl.). Dec 2024 Q9 is this sentence. Contracts uberrimae fidei (insurance) are the duty-to-speak island.</p>
        <p><strong>Misrepresentation (s.18):</strong> unwarranted positive assertion, breach of duty gaining advantage (without intent to deceive), causing a party to make a mistake about the substance. Voidable; indemnity vs damages distinction vs fraud.</p>
        <p>Always end with: voidable contracts may be rescinded (s.19) subject to restitution; delay/affirmation loses the option.</p>`,
        analogy: {
          title: "Consent is matching JSON; free consent is unpoisoned input",
          body: "s.13 is schema equality — same thing, same sense. Coercion is a gun to SIGTERM. Undue influence is admin credentials over a dependent user. Fraud is a crafted payload with intent. Misrepresentation is a buggy assertion without the mens rea of deceit. Silence is not a packet unless you had a duty to emit one."
        },
        diagram: {
          type: "compare",
          headers: ["Vitiating factor", "Result", "Signature hook"],
          rows: [
            ["Coercion s.15", "Voidable", "Forbidden act / detain property"],
            ["Undue influence s.16", "Voidable", "Dominate + unfair advantage"],
            ["Fraud s.17", "Voidable + damages path", "Intent to deceive; silence ≠ fraud"],
            ["Misrepresentation s.18", "Voidable", "No deceit intent"],
            ["Bilateral mistake s.20", "Void", "Fact essential to agreement"],
            ["Mistake of Indian law s.21", "No relief", "Ignorantia juris"]
          ]
        },
        mnemonic: { name: "CUFMM", hook: "Coercion, Undue influence, Fraud, Misrep, Mistake. Silence ≠ fraud.", recite: "14 defines free. 19/19A voidable. 20 void. 21 law of the land." },
        cases: [
          { name: "Chikham Amiraju v Chikham Seshamma", citation: "(1917) 41 Mad 33", point: "Suicide threat as coercion." },
          { name: "Derry v Peek", citation: "(1889) 14 App Cas 337", point: "Fraud needs dishonest intent (English; still taught)." },
          { name: "Ranganayakamma v Alwar Setti", citation: "(1889) 13 Mad 214", point: "Widow / coercion illustrations in Indian books." }
        ],
        pyqs: [
          { year: "Dec 2024", section: "C", marks: "20", q: "Fraud; effect on contract; mere silence ≠ fraud.", outline: ["s.17 clauses; exception duty to speak; voidable; damages vs rescission; cases."] },
          { year: "2022", section: "A", marks: "4", q: "Coercion.", outline: ["s.15; Chikham Amiraju."] }
        ],
        check: ["s.13 vs s.14.", "Silence rule.", "Which mistakes void vs no-relief."]
      },
      {
        id: "k-standard",
        unit: 7,
        yield: "standard",
        tags: ["standard form", "exclusion clauses", "uber"],
        title: "Standard form contracts",
        summary: "Take-it-or-leave-it printed terms. Freedom of contract meets inequality of bargaining power. The law polices notice, reasonableness, and fundamental breach.",
        explainer: `<p>Mass markets cannot negotiate every ticket, clickwrap, parking stub, insurance policy. Standard forms reduce transaction costs and hide exclusion clauses.</p>
        <p><strong>Common-law controls:</strong> (1) reasonable notice before or at formation (<em>Olley v Marlborough Court</em> — notice after contracting fails; <em>Thornton v Shoe Lane Parking</em> ticket machines); (2) unsigned documents: sufficient notice of onerous clauses (‘red hand’ — <em>Interfoto</em>); (3) incorporation by course of dealing; (4) contra proferentem; (5) fundamental breach / deviation (English history messy; Indian courts often talk reasonableness); (6) exemption cannot exclude fraud.</p>
        <p><strong>Indian overlay:</strong> s.23 unconscionability as public policy in some cases; s.16 undue influence; Consumer Protection 2019 ‘unfair contract’ (one-sided terms) — bring CPA into this answer for 2026; Standard Form of Contract in public utilities; Railways/air carriers limit liability by statute. Clickwrap: notice + opportunity to read still the honest test.</p>
        <p>Critique (Pound/Marx cameo): standard form is Maine’s contract in form and status in substance.</p>`,
        analogy: {
          title: "Clickwrap as a EULA",
          body: "Standard form is a default config shipped to a million users. The law asks: was the killer exclusion clause above the fold before they hit I Agree, or was it stuffed in a footer after payment? CPA 2019 now treats some one-sided terms as unfair contracts."
        },
        diagram: { type: "vflow", steps: ["Was the clause incorporated (notice/signature/course)?", "Is it unconscionable / unfair (CPA / s.23 / s.16)?", "Contra proferentem if ambiguous", "Fraud/fundamental duty cannot be excluded"] },
        mnemonic: { name: "NOTICE BEFORE BINDING", hook: "Olley / Thornton. Contra proferentem. CPA unfair contract.", recite: "Standard form is valid in principle; control is notice + fairness, not a ban." },
        cases: [
          { name: "Olley v Marlborough Court", citation: "[1949] 1 KB 532", point: "Notice after contract ineffective." },
          { name: "Thornton v Shoe Lane Parking", citation: "[1971] 2 QB 163", point: "Ticket machine / onerous clauses." },
          { name: "Lily White v Munuswami", citation: "AIR 1966 Mad 13", point: "Indian dry-cleaner exclusion often taught." }
        ],
        pyqs: [
          { year: "theme", section: "B", marks: "10", q: "Standard form of contracts.", outline: ["Why they exist; risks; notice; Indian + CPA 2019; cases."] }
        ],
        check: ["Incorporation rules.", "One Indian + one English case.", "CPA unfair-contract hook."]
      },
      {
        id: "k-void",
        unit: 8,
        yield: "high",
        tags: ["void", "voidable", "s.26-30", "wager", "restraint"],
        title: "Agreements declared void and voidable",
        summary: "Voidable: valid until rescinded (consent defects). Void: no legal effect as contract (s.20, 23–30 cluster, unlawful, impossible). CCS rotates restraint of marriage, wager, void vs voidable.",
        explainer: `<p><strong>Voidable contract (s.2(i)):</strong> enforceable at the option of one party. Coercion, undue influence, fraud, misrep; sometimes undue delay to avoid.</p>
        <p><strong>Void agreement (s.2(g)):</strong> not enforceable by either. Minor; unlawful object; bilateral mistake; expressly declared void:</p>
        <ul>
          <li>s.26 restraint of marriage (absolute) — 2022/24 short notes.</li>
          <li>s.27 restraint of trade — void, except sale of goodwill (and statutory: partnership, IP). <em>Gujarat Bottling</em>; <em>Niranjan Shankar Golikari</em> (during employment reasonable restraints often saved as ‘while employed’).</li>
          <li>s.28 restraint of legal proceedings — void, with arbitration exceptions (now Arbitration Act overlay).</li>
          <li>s.29 uncertain agreements.</li>
          <li>s.30 wagers — void; no suit on the bet. Collateral: lottery (state-authorised vs others), crossword, insurance (insurable interest makes it not a wager), speculative share deals vs genuine delivery. Dec 2024 Q8 is this cluster. <em>Gherulal Parekh</em>.</li>
          <li>s.36 illusory contingent on impossible events, etc.</li>
        </ul>
        <p>s.19: voidable for consent defects. s.2(j) void contract: a contract that ceases to be enforceable (frustration aftermath).</p>
        <p>Never write “void and voidable are the same.” Table: existence, ratification, third-party rights, restitution.</p>`,
        analogy: {
          title: "Null vs optional-delete",
          body: "Void is a null object — there was no contract instance. Voidable is a live instance with a delete button on the victim’s dashboard. Wagers instantiate nothing. Restraint of trade is a firewall rule the Act drops unless an exception re-enables it."
        },
        diagram: {
          type: "compare",
          headers: ["", "Void agreement", "Voidable contract"],
          rows: [
            ["Birth", "Never a contract", "Valid until avoided"],
            ["Ratify?", "No (need new contract)", "Yes"],
            ["Third-party bona fide", "Usually no rights to transfer", "May take rights before avoidance"],
            ["Examples", "s.23, 26–30, minor, s.20", "ss.15–18 consent defects"]
          ]
        },
        mnemonic: { name: "26 MARRY / 27 TRADE / 30 WAGER", hook: "Insurance ≠ wager if insurable interest. Lottery: authorised vs not.", recite: "Void vs voidable table is a 4-mark gift. Always add Gherulal on wagers." },
        cases: [
          { name: "Gherulal Parekh v Mahadeodas", citation: "AIR 1959 SC 781", point: "Wagering; public policy." },
          { name: "Madhub Chunder v Rajcoomar", citation: "(1874) 14 BLR 76", point: "s.27 restraint of trade — even partial, historically." },
          { name: "Niranjan Shankar Golikari v Century Spg", citation: "AIR 1967 SC 1098", point: "Service-period restraints." }
        ],
        pyqs: [
          { year: "Dec 2024", section: "A", marks: "4", q: "Void agreement vs voidable contract.", outline: ["s.2(g)(i); examples; effects."] },
          { year: "Dec 2024", section: "B", marks: "10", q: "Wagering contract — insurance / lottery / crossword / speculative deals?", outline: ["s.30; insurable interest; state lotteries; Gherulal; speculative vs wager."] }
        ],
        check: ["s.26, 27, 30 one-liners.", "Void vs voidable table.", "When a share deal is not a wager."]
      },
      {
        id: "k-contingent",
        unit: 9,
        yield: "standard",
        tags: ["s.31-36", "contingent"],
        title: "Contingent contracts (Ss. 31–36)",
        summary: "A contract to do or not to do something if some event, collateral to the contract, does or does not happen.",
        explainer: `<p><strong>s.31 definition.</strong> The event must be <em>collateral</em> — not the very performance (that is conditional performance, not contingent in the technical sense). Insurance is the textbook contingent contract: pay if the ship sinks.</p>
        <p>ss.32–36 rules: cannot be enforced until the event happens; if the event becomes impossible, the contract becomes void (s.32); contracts contingent on an event not happening are enforceable when happening becomes impossible (s.33); if time is fixed and the event does not happen within time, void (s.35); contingent on an impossible event — void (s.36), whether the parties know impossibility or not.</p>
        <p>Distinguish wager: wager is two-way, parties have no other interest, mutual chances of gain/loss. Insurance: one party has insurable interest, premium not a stake in that sense. 2022 asked contingent contracts as a topic.</p>`,
        analogy: {
          title: "Promise gated on an external webhook",
          body: "A contingent contract is a function that fires when an outside event webhook hits — ship sinks, third party approves, licence issues. If the webhook can never fire (impossible event), the function is dead (void). Wager is two speculators betting on the webhook with no other interest in the system."
        },
        diagram: { type: "flow", steps: ["Collateral event specified", "Wait", "Event happens → enforce", "Event impossible → void (s.32/36)"] },
        mnemonic: { name: "COLLATERAL EVENT", hook: "Insurance yes; wager no. s.36 impossible → void.", recite: "Not every ‘if’ is s.31 — the if must be collateral." },
        cases: [
          { name: "Insurance illustrations", citation: "s.31 textbooks", point: "Insurable interest keeps it off s.30." },
          { name: "Frost v Knight", citation: "(1872) LR 7 Ex 111", point: "Anticipatory breach cousin; don’t confuse with contingent event." }
        ],
        pyqs: [
          { year: "2022", section: "C", marks: "10–20", q: "Contingent contract.", outline: ["s.31; collateral; ss.32–36 map; vs wager; insurance."] }
        ],
        check: ["s.31 definition.", "vs wager.", "Impossible event effect."]
      },
      {
        id: "k-quasi",
        unit: 10,
        yield: "high",
        tags: ["s.68-72", "quasi", "unjust enrichment"],
        title: "Quasi-contracts — relations resembling contracts (Ss. 68–72)",
        summary: "No offer-acceptance object. The Act imposes duties to prevent unjust enrichment. Restitution API without a contract instance.",
        explainer: `<p>Quasi-contract is a misnomer: it is an obligation <em>as if</em> from contract, born of law. ss.68–72:</p>
        <ul>
          <li><strong>s.68</strong> necessaries supplied to a person incapable of contracting (minor, unsound) — reimbursement from property.</li>
          <li><strong>s.69</strong> person paying money which another is bound by law to pay, and who is interested in the payment — reimbursement (payer of another’s tax to save his own goods).</li>
          <li><strong>s.70</strong> person who lawfully does anything for another, or delivers anything, not intending it gratuitously, and the other enjoys the benefit — compensation / restoration. The workhorse (builders, goods delivered). Requirements: lawful, not gratuitous, benefit enjoyed. <em>State of W.B. v B.K. Mondal</em> (government housing work without strict Art. 299 compliance still paid under s.70 in some readings — know the case name).</li>
          <li><strong>s.71</strong> finder of goods — duties like a bailee.</li>
          <li><strong>s.72</strong> money paid or goods delivered by mistake or under coercion — repayment. Taxes paid under mistake of law: later jurisprudence (sales tax) is advanced extra credit.</li>
        </ul>
        <p>2022 listed quasi-contract as a asked topic. Structure: why the law invents the obligation; five sections; one case; contrast with s.10 contract.</p>`,
        analogy: {
          title: "Restitution API without a contract object",
          body: "Someone’s service produced a benefit on your side of the ledger without a signed SDK. ss.68–72 open a billing endpoint so you don’t keep the enrichment. s.70 is the most-called method; s.72 is the mistaken-transfer reverse-payment."
        },
        diagram: { type: "tree", root: "ss.68–72", branches: ["68 necessaries", "69 interested payer", "70 non-gratuitous benefit", "71 finder", "72 mistake/coercion"] },
        mnemonic: { name: "N-I-B-F-M", hook: "Necessaries, Interested payment, Benefit enjoyed, Finder, Mistake.", recite: "No proposal/acceptance. Unjust enrichment is the policy." },
        cases: [
          { name: "State of W.B. v B.K. Mondal & Sons", citation: "AIR 1962 SC 779", point: "s.70 even against Government in fitting facts." },
          { name: "Mohori Bibee (link)", citation: "1903", point: "s.68 as the minor’s necessaries path, not enforcement of the void bargain." }
        ],
        pyqs: [
          { year: "2022", section: "C", marks: "10–20", q: "Quasi-contract.", outline: ["Theory; five sections; s.70 emphasis; Mondal; vs true contract."] }
        ],
        check: ["Five sections in order.", "s.70 ingredients.", "Not a s.10 contract."]
      },
      {
        id: "k-discharge",
        unit: 11,
        yield: "high",
        tags: ["discharge", "frustration", "s.56", "novation", "s.62"],
        title: "Discharge of contracts, with special reference to frustration",
        summary: "Contracts die by performance, agreement (novation/alteration/rescission/waiver), breach, or impossibility/frustration (s.56). Frustration is the force-majeure kill signal — not mere hardship.",
        explainer: `<p><strong>Modes of discharge:</strong> (1) performance (ss.37–55) — time, place, reciprocal promises, appropriation of payments; (2) agreement — s.62 novation, rescission, alteration; s.63 promisee may remit, extend, accept satisfaction; (3) impossibility / frustration s.56; (4) breach (actual or anticipatory s.39); (5) operation of law — death in personal contracts, insolvency, merger. Dec 2024 Q13 modes; Q7 frustration; Section A novation / discharge.</p>
        <p><strong>Novation:</strong> new contract substitutes the old (new parties or new terms); old discharges. Need consensus and a valid new contract.</p>
        <p><strong>s.56:</strong> an agreement to do an act impossible in itself is void. A contract to do an act which, after formation, becomes impossible or, by reason of some event which the promisor could not prevent, unlawful, becomes void when it becomes impossible or unlawful. Compensation if the promisor knew (or should have known) of the impossibility and the promisee did not.</p>
        <p><strong>English <em>Taylor v Caldwell</em></strong> (music hall burns) plus <em>Krell v Henry</em> (coronation procession — frustration of object) plus Indian <em>Satyabrata Ghose v Mugneeram</em> (1954): ‘impossible’ in s.56 is not physical-only; it includes impracticability and frustration of the adventure, but <em>not</em> mere commercial hardship or rise in prices. <em>Energy Watchdog v CERC</em> (2017) restated: force majeure clauses are construed strictly; s.56 is a default when the contract is silent; change in law / price is usually not frustration if risk was allocable.</p>
        <p>Self-induced frustration is no frustration. Supervening illegality (export ban) is classic. COVID/lockdown hypotheticals: look at the clause first, then s.56; don’t auto-void every lease.</p>`,
        analogy: {
          title: "Kill signal, not high CPU",
          body: "Frustration is SIGKILL when the environment makes the specified job impossible or radically different (hall burnt, adventure gone). A 3× rise in cloud prices is hardship — still your process. Novation is replacing the running container with a new image by agreement. s.63 is the promisee sending a SIGTERM pardon."
        },
        diagram: { type: "tree", root: "Discharge", branches: ["Performance", "Agreement (62/63)", "s.56 frustration", "Breach / s.39", "Operation of law"] },
        mnemonic: { name: "P-A-I-B-L", hook: "Performance, Agreement, Impossibility, Breach, Law. Satyabrata: hardship ≠ frustration.", recite: "s.56 two limbs: initial impossibility (void) and subsequent (becomes void)." },
        cases: [
          { name: "Satyabrata Ghose v Mugneeram Bangur", citation: "AIR 1954 SC 44", point: "s.56 interpretation; not mere hardship." },
          { name: "Taylor v Caldwell", citation: "(1863) 3 B & S 826", point: "Destruction of subject-matter." },
          { name: "Krell v Henry", citation: "[1903] 2 KB 740", point: "Frustration of object." },
          { name: "Energy Watchdog v CERC", citation: "(2017) 14 SCC 80", point: "Force majeure clauses; s.56 residual." }
        ],
        pyqs: [
          { year: "Dec 2024", section: "B", marks: "10", q: "Doctrine of frustration.", outline: ["s.56; Taylor/Krell; Satyabrata; what is not frustration; self-induced."] },
          { year: "Dec 2024", section: "C", marks: "20", q: "Modes of discharge of contract.", outline: ["Five modes; one paragraph each; novation example; frustration; breach remedies teaser."] }
        ],
        check: ["Five discharge modes.", "Satyabrata one-liner.", "Novation vs accord."]
      },
      {
        id: "k-remedies",
        unit: 12,
        yield: "high",
        tags: ["s.73", "s.74", "damages", "hadley", "remoteness"],
        title: "Remedies — compensation (Ss. 73–75)",
        summary: "s.73: compensation for loss naturally arising or in contemplation. Not a jackpot. Hadley v Baxendale is the remoteness OS. s.74 liquidated damages / penalty is an Indian speciality.",
        explainer: `<p>Primary judicial remedy in K-1005 is <strong>damages</strong>. Specific performance / injunction live mainly in the Specific Relief Act (mention, don’t wander). Quantum meruit sits near quasi-contract / s.70 / failed contracts.</p>
        <p><strong>s.73:</strong> when a contract is broken, the party who suffers is entitled to compensation for any loss or damage caused which naturally arose in the usual course of things from the breach, or which the parties knew when they made the contract to be likely to result from the breach. Explanation: no compensation for remote and indirect loss. Means of mitigating must be considered.</p>
        <p><strong>Hadley v Baxendale (1854):</strong> two limbs — ordinary (imputed) knowledge; special (actual) knowledge of unusual loss (the mill shaft / idle mill). Indian s.73 is this idea in statute. 2022 remoteness of damage.</p>
        <p>Kinds: ordinary, special, nominal, exemplary (rare in contract — <em>Addis</em>), liquidated. Expectation interest (place the plaintiff as if performed) is the default; reliance sometimes; restitution of benefit.</p>
        <p><strong>s.74:</strong> if a sum is named in the contract as payable on breach, or any other stipulation by way of penalty, plaintiff is entitled to reasonable compensation not exceeding the amount so named, whether or not actual damage is proved. Indian courts do not blindly apply the English penalty-vs-liquidated distinction; <em>Fateh Chand v Balkishan Dass</em>; <em>ONGC v Saw Pipes</em> (public contracts, stipulated sum often respected if a genuine pre-estimate). No proving actual loss is the statutory gift, but reasonableness still gates a penalty windfall.</p>
        <p><strong>s.75:</strong> person rightfully rescinding is entitled to compensation for damage through non-fulfilment.</p>
        <p>Duty to mitigate: don’t let losses balloon. Consequential loss needs contemplation.</p>`,
        analogy: {
          title: "s.73 = expected loss, not jackpot",
          body: "Damages restore the SLA, not a lottery win. Limb 1 is default observability (what every vendor knows). Limb 2 is extra metrics you disclosed at contract time (Hadley special knowledge). s.74 is a pre-agreed cap/liquidated field — Indian law will not always treat it as an English ‘penalty’ to be torn up, but it will not allow a gouging number either."
        },
        diagram: {
          type: "flow",
          steps: ["Breach", "Loss in usual course? (Hadley 1)", "Or special knowledge? (Hadley 2)", "Minus failure to mitigate", "Cap at s.74 named sum if any"]
        },
        mnemonic: { name: "HADLEY TWO LIMBS", hook: "Natural / in contemplation. Remote out. s.74 reasonable compensation ≤ named sum.", recite: "Fateh Chand + Saw Pipes for liquidated damages. Mitigation is mandatory hygiene." },
        cases: [
          { name: "Hadley v Baxendale", citation: "(1854) 9 Exch 341", point: "Remoteness two limbs." },
          { name: "Fateh Chand v Balkishan Dass", citation: "AIR 1963 SC 1405", point: "s.74 reasonable compensation." },
          { name: "ONGC v Saw Pipes", citation: "(2003) 5 SCC 705", point: "Stipulated damages in commercial/public contracts." },
          { name: "Murlidhar Chiranjilal v Harishchandra", citation: "AIR 1962 SC 366", point: "Mitigation / market-price measure." }
        ],
        pyqs: [
          { year: "2022", section: "B", marks: "10", q: "Remoteness of damage.", outline: ["s.73; Hadley; illustration; mitigation."] },
          { year: "theme", section: "C", marks: "20", q: "Compensation for breach of contract.", outline: ["s.73; kinds; Hadley; s.74; s.75; cases."] }
        ],
        check: ["s.73 two limbs.", "s.74 vs English penalty.", "Mitigation."]
      }
    ]
  };
})(window);

(function (g) {
  g.LLB = g.LLB || {};
  g.LLB.papers = g.LLB.papers || {};
  g.LLB.papers.k1005 = {
    id: "k1005",
    code: "K-1005",
    title: "Contract-I (General Principles)",
    short: "Contract-I",
    blurb: "Tracks Bangia Contract-I: formation → consideration → capacity → consent → object → void → contingent → discharge → quasi → damages.",
    shelf: {
      primary: "Dr. R.K. Bangia — <em>Law of Contract</em> (Contract-I; Indian Contract Act Ss. 1–75)"
    },
    youtube: [
      { title: "ICA complete Law Wallah", search: "Indian Contract Act complete Law Wallah" },
      { title: "Frustration s.56", search: "Doctrine of frustration Section 56" },
      { title: "Minor Mohori Bibee", search: "Minor agreement Mohori Bibee" }
    ],
    topics: [
      {
        id: "k-scope",
        seq: 1,
        readAs: "Bangia ch. 1 — formation of contract (purpose / s.10)",
        unit: 1,
        yield: "standard",
        tags: ["s.2", "s.10", "evolution"],
        title: "Purpose, evolution and scope of the law of contracts",
        summary: "Contract law is the private API of a market society: which promises the State will enforce. India codified English principles in 1872 and then overwrote them with consumer, labour, and constitutional equality.",
        explainer: `<p>Bangia’s Contract-I is built for the usual LL.B. split: Ss. 1–75 plus Specific Relief as a second part (CCS K-1005 does not require SRA essays — mention specific performance only as a remedies trailer).</p>
        <p><strong>Purpose:</strong> to give legally binding force to agreements that the community thinks deserve it — facilitating exchange, allocating risk, protecting reliance and expectation. Not every promise is a contract (social engagements, incomplete bargains, illegal bargains).</p>
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
        seq: 2,
        readAs: "Formation home (ITT and ss.4–6 are drills)",
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
        seq: 3,
        readAs: "Consideration survey (English/Indian, past, privity are drills)",
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
        seq: 7,
        readAs: "Bangia ch. 5 — legality of object and consideration",
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
          { name: "Nash v Inman / immoral contracts", citation: "English illustrations", point: "Use Indian public-policy cases from Bangia / the bare act heads; do not paste textbook paragraphs." }
        ],
        pyqs: [
          { year: "2022", section: "C", marks: "20", q: "Public policy.", outline: ["s.23 last clause; recognised heads; Gherulal restraint on expansion; illustrations."] }
        ],
        check: ["Six s.23 heads.", "s.24 taint.", "Wager vs immoral."]
      },
      {
        id: "k-capacity",
        seq: 4,
        readAs: "Bangia ch. 3 — capacity to contract",
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
        seq: 5,
        readAs: "Bangia ch. 4 — free consent",
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
        seq: 6,
        readAs: "Bangia — exemption / standard-form clauses (treated with formation &amp; consent)",
        unit: 7,
        yield: "high",
        tags: ["standard form", "exclusion clauses", "uber", "unfair contract"],
        title: "Standard form contracts",
        summary: "Take-it-or-leave-it printed terms. Valid in principle; the fight is incorporation (notice) and fairness (s.23 / s.16 / CPA 2019 unfair contract). Syllabus item #7.",
        explainer: `<p>Mass markets cannot negotiate every railway ticket, parking stub, insurance policy, or clickwrap. Standard forms cut transaction costs and hide exclusion clauses. Maine’s “status → contract” looks, here, like contract in form and status in substance: one party sets the code, the other hits I Agree. The law does <em>not</em> ban the device; it polices <strong>whether the killer term entered the contract</strong> and <strong>whether it is allowed to stay</strong>.</p>
        <p><strong>Incorporation (common-law controls):</strong> (1) a signed document is ordinarily binding even if unread — unless there was fraud/misrepresentation as to its nature (<em>non est factum</em> is a narrow escape); (2) unsigned documents need <strong>reasonable notice before or at formation</strong> — <em>Olley v Marlborough Court</em> (hotel notice inside the room, after check-in, failed); <em>Thornton v Shoe Lane Parking</em> (ticket machine; onerous clauses need extra notice); (3) the more unusual/onerous the clause, the more explicit the notice (‘red hand’ — <em>Interfoto</em>); (4) incorporation by a consistent course of dealing; (5) <em>contra proferentem</em> — ambiguity is read against the drafter; (6) exemption clauses are construed strictly and will not cover fraud or a complete failure of the contract’s core in many Indian readings (fundamental breach talk is English-messy; Indian courts often say reasonableness / public policy instead).</p>
        <p><strong>Indian overlay:</strong> s.23 (unconscionable / public policy in some bargains); s.16 undue influence when there is dominance; Consumer Protection Act 2019 treats specified <strong>unfair contracts</strong> (one-sided deposits, unilateral termination, excessive penalties) as voidable in consumer disputes; public-carrier statutes cap railways/airlines. Clickwrap/browsewrap: the honest test is still notice + a real opportunity to read <em>before</em> the bargain. <em>Lily White v Munuswami</em> (dry-cleaner “loss at owner’s risk” / liability limited to a pittance) is the Indian classroom staple — a clause that shrinks liability to a token may fail if it guts the duty.</p>
        <p><strong>How to write 10 marks:</strong> why they exist; risk (exclusion of negligence, jurisdiction, one-sided renewal); notice ladder; contra proferentem; CPA 2019 unfair-contract; one English + one Indian case; close that freedom of contract is not freedom to hide the landmine.</p>`,
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
        seq: 8,
        readAs: "Bangia ch. 6 — void agreements",
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
        seq: 9,
        readAs: "Bangia ch. 7 — contingent contracts",
        unit: 9,
        yield: "high",
        tags: ["s.31-36", "contingent"],
        title: "Contingent contracts (Ss. 31–36)",
        summary: "s.31: a contract to do or not do something if a collateral event does or does not happen. ss.32–36 are the enforcement tree. 2022 PYQ; pair with wager, do not merge them.",
        explainer: `<p><strong>s.31 definition.</strong> A contingent contract is a contract to do or not to do something, if some event, collateral to such contract, does or does not happen. <em>Collateral</em> is the exam word: the event is not the performance itself (that would be ordinary conditional performance) but an external gate. Insurance is the textbook: insurer pays <em>if</em> the ship is lost — the loss is collateral to the promise to pay. A wager is not saved by calling it contingent: the only ‘performance’ in a wager is the stake on the event, and neither party has any other interest (see the wager card).</p>
        <p><strong>ss.32–36 tree (draw this):</strong></p>
        <ul>
          <li><strong>s.32</strong> — contingent on the happening of an uncertain future event: cannot be enforced unless and until that event happens; if the event becomes impossible, the contract becomes void. Illustration: A promises to pay B if a particular ship returns; the ship sinks → void.</li>
          <li><strong>s.33</strong> — contingent on the event <em>not</em> happening: enforceable when the happening becomes impossible; not before. The ship sinks → the “if she does not return” promise can fire.</li>
          <li><strong>s.34</strong> — if the event is how a living person will act, the event is considered to become impossible when that person does anything that makes it impossible for him so to act within a definite time, or (if no time) within a reasonable time. Example: marriage with a named person who then marries someone else.</li>
          <li><strong>s.35</strong> — time fixed: if the event does not happen within the time, the contract becomes void; if time is not fixed, it becomes void when the event cannot happen. Conversely, “if the event does not happen within time” contracts become enforceable when the time has expired without the event, or when the event becomes impossible before time.</li>
          <li><strong>s.36</strong> — contingent on an impossible event are void, whether the impossibility was known to the parties or not. “If the sun rises in the west” is not a cute condition; it is dead on arrival.</li>
        </ul>
        <p><strong>Do not confuse:</strong> frustration (s.56) kills a contract that was <em>not</em> designed around the event; a contingent contract is designed around it. Absolute promises that merely mention a date are not contingent. 2022 asked this as a topic — definition + tree + insurance vs wager is a full 10/20.</p>`,
        analogy: {
          title: "Promise gated on an external webhook",
          body: "A contingent contract is a function that fires when an outside event webhook hits — ship sinks, third party approves, licence issues. If the webhook can never fire (impossible event), the function is dead (void). Wager is two speculators betting on the webhook with no other interest in the system."
        },
        diagram: { type: "vflow", steps: ["s.31 collateral event?", "s.32 wait for happening / void if impossible", "s.33 not-happening when impossibility is clear", "s.35 time-gated", "s.36 impossible event → void from birth"] },
        mnemonic: { name: "COLLATERAL EVENT · 32–36", hook: "Insurance yes; wager no. s.36 impossible → void whether known or not.", recite: "Not every ‘if’ is s.31 — the if must be collateral. Draw the 32–36 tree." },
        cases: [
          { name: "Insurance illustrations", citation: "s.31 textbooks", point: "Insurable interest keeps it off s.30." },
          { name: "Frost v Knight", citation: "(1872) LR 7 Ex 111", point: "Anticipatory breach cousin; don’t confuse with contingent event." }
        ],
        pyqs: [
          { year: "2022", section: "C", marks: "10–20", q: "Contingent contract.", outline: ["s.31; collateral; ss.32–36 map; vs wager; insurance."] }
        ],
        check: ["s.31 definition with ‘collateral’.", "s.32 vs s.33 in one illustration (the ship).", "vs wager and vs s.56."]
      },
      {
        id: "k-quasi",
        seq: 11,
        readAs: "Bangia ch. 11 — quasi-contracts (ss.68–72)",
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
        seq: 10,
        readAs: "Discharge home (s.56 limits, checklist, novation are drills)",
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
        seq: 12,
        readAs: "Bangia ch. 12 — remedies for breach (ss.73–75)",
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
      },
      {
        id: "k-offer-vs-itt",
        seq: 2.2,
        readAs: "Drill — proposal vs ITT (from formation home)",
        unit: 2,
        yield: "high",
        tags: ["offer", "invitation to treat", "s.2(a)", "harvey", "pharmaceutical"],
        title: "Offer vs invitation to treat (with stock examples)",
        summary: "A proposal (s.2(a)) waits for acceptance. An invitation to treat is a pre-offer display: catalogues, shop windows, tenders, most ads. 2022 asked invitation to offer.",
        explainer: `<p><strong>Proposal / offer (s.2(a)):</strong> when one person signifies to another his willingness to do or to abstain from doing anything, with a view to obtaining the assent of that other. It must be definite, communicated, and made with intent to be bound on acceptance — not a mere puff.</p>
        <p><strong>Invitation to treat (invitation to offer):</strong> you are asking the other side to make an offer. Classic English: <em>Pharmaceutical Society v Boots</em> (goods on a supermarket shelf are ITT; offer happens at the till). <em>Fisher v Bell</em> (shop-window knife). Auctions: bid is the offer, hammer is acceptance (<em>Payne v Cave</em>). Tenders: usually ITT, unless ‘highest bidder will get it’ is a true offer to accept. Circulars / price lists: <em>Harvey v Facey</em> (lowest price telegram was information, not an offer). Advertisements: generally ITT, but a unilateral reward ad can be a true offer (<em>Carlill v Carbolic Smoke Ball</em> — the deposit of £1000 showed intent to be bound).</p>
        <p><strong>Indian landing:</strong> same grammar. Railway timetable / menu card problems in Bangia: usually ITT. Cross-offers (identical offers crossing in the post) do not make a contract — no acceptance.</p>
        <p>2024 20-marker on proposal elements should open with s.2(a) then spend eight lines killing ITT lookalikes so you do not treat a catalogue as a binding stock promise.</p>`,
        analogy: {
          title: "RFC vs signed API contract",
          body: "ITT is a public RFC: ‘we might sell.’ Offer is a signed proposal: ‘I will sell you this SHA at this price if you ACK.’ Carlill is a rare public RFC that was actually a signed bounty because money was escrowed. Boots’ shelf is a product catalogue, not a bind."
        },
        diagram: {
          type: "compare",
          headers: ["Situation", "Usually", "Why"],
          rows: [
            ["Shop display / shelf", "ITT", "Boots — offer at till"],
            ["Price list / ‘lowest price?’", "ITT", "Harvey v Facey"],
            ["Auction bid", "Offer", "Hammer accepts"],
            ["Reward ad with earnest money", "Offer", "Carlill"]
          ]
        },
        mnemonic: {
          name: "DISPLAY = ITT · CARLILL = OFFER",
          hook: "s.2(a) needs intent to be bound. Catalogues don’t.",
          recite: "2022 invitation to offer: Boots, Harvey, Carlill as the exception."
        },
        cases: [
          { name: "Harvey v Facey", citation: "[1893] AC 552", point: "Statement of lowest price ≠ offer." },
          { name: "Carlill v Carbolic Smoke Ball Co", citation: "[1893] 1 QB 256", point: "Unilateral offer; intent to be bound." },
          { name: "Pharmaceutical Society of Great Britain v Boots", citation: "[1953] 1 QB 401", point: "Shelf = ITT." }
        ],
        pyqs: [
          { year: "2022", section: "B", marks: "10", q: "Invitation to offer.", outline: ["Define vs s.2(a); Boots/Harvey; Carlill exception; one Indian illustration."] },
          { year: "Dec 2024", section: "C", marks: "20", q: "Proposal — elements & legal rules.", outline: ["2(a); communication; ITT contrast; revocation teaser."] }
        ],
        check: ["s.2(a) in one breath.", "Three ITT examples.", "Why Carlill is not a catalogue."]
      },
      {
        id: "k-comm-revocation",
        seq: 2.4,
        readAs: "Drill — communication &amp; revocation ss.4–6",
        unit: 2,
        yield: "high",
        tags: ["s.4", "s.5", "s.6", "postal rule", "revocation"],
        title: "Communication and revocation rules (Ss. 4–6 table)",
        summary: "s.4 timings; s.5 when you may revoke; s.6 how revocation happens. Postal acceptance vs instantaneous modes. ‘Mental acceptance is no acceptance’ (2022).",
        explainer: `<p><strong>s.4 communication complete:</strong> as against the proposer, when it is put into a course of transmission to him so as to be out of the acceptor’s power (postal acceptance — <em>Adams v Lindsell</em> idea, Indianised). As against the acceptor, when it comes to the proposer’s knowledge. Reverse timings for communication of a revocation: as against the person who makes it, when put in transmission; as against the person to whom it is made, when it comes to his knowledge.</p>
        <p><strong>Instantaneous (phone, likely email/telex):</strong> <em>Entores</em> / <em>Bhagwandas Goverdhandas Kedia</em> — contract completes where the acceptance is heard/received, not where it is spoken into a void. Do not blindly apply the postal rule to WhatsApp.</p>
        <p><strong>s.5:</strong> proposal may be revoked any time before the communication of its acceptance is complete as against the proposer, not after. Acceptance may be revoked any time before its communication is complete as against the acceptor, not after.</p>
        <p><strong>s.6 revocation of proposal by:</strong> (1) notice; (2) lapse of prescribed / reasonable time; (3) failure of a condition precedent; (4) death/insanity of proposer, if the fact comes to the acceptor’s knowledge before acceptance. Death of acceptor before acceptance — no contract.</p>
        <p>Silence is not acceptance (<em>Felthouse v Bindley</em>). Mental acceptance is no acceptance (2022) — it must be signified as required.</p>`,
        analogy: {
          title: "TCP handshake with a cancel window",
          body: "Offer = SYN. Acceptance posted = ACK leaving the NIC (complete against proposer). ACK arriving = complete against acceptor. Revocation is a RST that must arrive before the other side’s ACK is out of their power. WhatsApp is a live socket (Entores), not a postage queue."
        },
        diagram: {
          type: "compare",
          headers: ["Event", "Complete against sender when", "Complete against other when"],
          rows: [
            ["Acceptance (post)", "Posted / out of power (s.4)", "Comes to proposer’s knowledge"],
            ["Revocation", "Put in transmission", "Comes to knowledge"],
            ["Phone/telex", "Received, not merely spoken", "Same — instantaneous"]
          ]
        },
        mnemonic: {
          name: "4-5-6 CLOCK",
          hook: "Postal vs instantaneous. s.6 four modes. Silence ≠ yes.",
          recite: "You cannot revoke after acceptance is out of the acceptor’s power as against you."
        },
        cases: [
          { name: "Adams v Lindsell", citation: "(1818) 1 B & Ald 681", point: "Postal acceptance." },
          { name: "Bhagwandas Goverdhandas Kedia v Girdharilal", citation: "AIR 1966 SC 543", point: "Phone — instantaneous; place of contract." },
          { name: "Felthouse v Bindley", citation: "(1862) 11 CB (NS) 869", point: "Silence / mental acceptance not enough." }
        ],
        pyqs: [
          { year: "2022", section: "A", marks: "4", q: "Mental acceptance is no acceptance.", outline: ["Signification; Felthouse; s.2(b)."] }
        ],
        check: ["s.4 two-sided timings.", "s.5 last moment to revoke.", "Four s.6 modes."]
      },
      {
        id: "k-past-consideration",
        seq: 3.2,
        readAs: "Drill — past / executory / s.25 (from consideration survey)",
        unit: 3,
        yield: "high",
        tags: ["consideration", "past", "executory", "s.25", "s.2(d)"],
        title: "Past consideration, executory consideration, and s.25",
        summary: "India (s.2(d)) treats past consideration as good. English law is harsher. Executory is a promise for a promise. s.25 lists when a contract without consideration still lives. Dec 2024 20-marker on kinds; English vs Indian.",
        explainer: `<p><strong>s.2(d):</strong> when, at the desire of the promisor, the promisee or any other person has done or abstained, or does or abstains, or promises to do or to abstain, such act/abstinence/promise is called consideration. Three tenses: past (‘has done’), present, future. That is why <strong>past consideration is valid in India</strong> if it was at the promisor’s desire (<em>Sindha Shri Ganpatsingji</em> flavour / Bangia illustrations). English <em>Roscorla v Thomas</em> / <em>Eastwood v Kenyon</em> generally reject past consideration unless the requested-act exception applies.</p>
        <p><strong>Executory:</strong> promise ↔ promise (bilateral executory). <strong>Executed:</strong> act already done in return for a promise. Do not confuse executed consideration with past: executed is the act that <em>is</em> the bargain; past is an act before the promise, saved in India by 2(d)’s ‘has done.’</p>
        <p><strong>s.25 — agreement without consideration is void, except:</strong> (1) written and registered gift out of natural love and affection between parties standing in a near relation; (2) compensation for a past voluntary act the promisor was legally compellable to do? — actually: compensation for something the promisee has already voluntarily done for the promisor, or for something the promisor was legally compellable to do; (3) a written promise to pay a time-barred debt. Also: completed gifts (Explanation 2). Agency exceptions live nearby.</p>
        <p>Dec 2024: consideration — kinds; English vs Indian. This card is that table.</p>`,
        analogy: {
          title: "Payment logic versions",
          body: "Executory = two invoices scheduled. Executed = I already shipped, you still owe the ACK-promise. Past = I shipped last month at your request and you now promise to pay — English git rejects the commit; s.2(d) cherry-picks it if it was at the promisor’s desire. s.25 is the three documented no-consideration merge rules."
        },
        diagram: {
          type: "compare",
          headers: ["", "English", "India"],
          rows: [
            ["Past consideration", "Generally bad", "Good if at promisor’s desire (2(d))"],
            ["Love & affection", "Not consideration", "s.25(1) written+registered+near relation"],
            ["Time-barred debt", "Need new consideration", "s.25(3) signed writing"]
          ]
        },
        mnemonic: {
          name: "2(d) TENSES · 25 THREE DOORS",
          hook: "Has done / does / promises. Love-register, past voluntary, time-barred.",
          recite: "Dec 2024 wants English vs Indian in a box, not a speech."
        },
        cases: [
          { name: "Kedarnath Bhattacharji v Gorie Mahomed", citation: "(1886) 14 Cal 64", point: "Subscription promises / consideration flavour." },
          { name: "Rajlucky Dabee v Bhootnath", citation: "Indian 25(1) illustrations", point: "Near relation + registered writing." }
        ],
        pyqs: [
          {
            year: "Dec 2024",
            section: "C",
            marks: "20",
            q: "Consideration — kinds; English vs Indian law.",
            outline: ["2(d) three tenses; executory/executed/past; English contrast; s.25 exceptions; privity teaser."]
          }
        ],
        check: ["Why 2(d) saves past consideration.", "Three s.25 doors.", "Executory vs executed vs past."]
      },
      {
        id: "k-privity-exceptions",
        seq: 3.4,
        readAs: "Drill — privity exceptions (from consideration survey)",
        unit: 3,
        yield: "high",
        tags: ["privity", "dunlop", "trust", "family", "beneficiary"],
        title: "Privity of contract — Indian exceptions",
        summary: "Stranger to a contract cannot sue. India follows the English spine with documented leaks: trust, family/marriage settlements, acknowledgement, covenants running with land, statutory beneficiaries. Dec 2024 Section B.",
        explainer: `<p><strong>Rule:</strong> only parties to the contract can sue and be sued (<em>Dunlop Pneumatic v Selfridge</em>; <em>Tweddle v Atkinson</em>). Consideration from ‘any other person’ (s.2(d)) does <em>not</em> by itself abolish privity of <em>parties</em> — that is the exam trap. <em>Jamna Das v Ram Autar</em> / <em>M.C. Chacko</em> flavour: a person who is not a party cannot enforce, even if the contract was for his benefit, unless an exception applies.</p>
        <p><strong>Exceptions to recite:</strong></p>
        <ul>
          <li><strong>Trust / charge:</strong> if the contract creates a trust in favour of a third party, the beneficiary can sue (<em>Khwaja Muhammad Khan v Husaini Begum</em> — kharch-i-pandan).</li>
          <li><strong>Family / marriage settlement</strong> where the third party is a beneficiary of the arrangement.</li>
          <li><strong>Acknowledgement / estoppel:</strong> the promisor tells the third party he is bound and the third party relies.</li>
          <li><strong>Covenants running with land</strong> (property law leak).</li>
          <li><strong>Statutory:</strong> e.g. certain insurance / consumer / labour beneficiaries (name the idea; don’t fake a section).</li>
        </ul>
        <p>Agency and assignment are not true ‘stranger’ exceptions — they are how you <em>become</em> a party or a transferee. Dec 2024 Q6: stranger cannot sue — exceptions.</p>`,
        analogy: {
          title: "ACL on the contract object",
          body: "Privity is an ACL: only signatories have invoke rights. s.2(d) lets a third person’s act count as consideration; it does not add them to the ACL. Trust is a sudoers file created for a beneficiary. Acknowledgement is an invite they accepted."
        },
        diagram: {
          type: "tree",
          root: "Stranger cannot sue",
          branches: ["Trust/charge", "Family settlement", "Acknowledgement", "Land covenants", "Statute"]
        },
        mnemonic: {
          name: "T-F-A-L-S",
          hook: "Trust · Family · Ack · Land · Statute. 2(d) ≠ privity death.",
          recite: "Dunlop / Tweddle for the rule. Husaini Begum for trust."
        },
        cases: [
          { name: "Dunlop Pneumatic Tyre Co v Selfridge", citation: "[1915] AC 847", point: "Privity classic." },
          { name: "Khwaja Muhammad Khan v Husaini Begum", citation: "(1910) 37 IA 152", point: "Trust / beneficiary." },
          { name: "M.C. Chacko v State Bank of Travancore", citation: "(1969) 2 SCC 343", point: "Indian restatement — stranger cannot sue." }
        ],
        pyqs: [
          {
            year: "Dec 2024",
            section: "B",
            marks: "10",
            q: "Stranger to contract cannot sue — exceptions (privity).",
            outline: ["Rule + 2(d) trap; five exceptions; Husaini Begum; Chacko."]
          }
        ],
        check: ["State the rule without killing 2(d).", "Five exceptions.", "One Indian trust case."]
      },
      {
        id: "k-minor-restitution",
        seq: 4.2,
        readAs: "Bangia — minor’s agreement + restitution",
        unit: 5,
        yield: "high",
        tags: ["minor", "mohori bibee", "s.11", "restitution", "s.64", "s.65"],
        title: "Minor’s agreement — consequences and restitution",
        summary: "Mohori Bibee: minor’s agreement is void, not voidable. No estoppel to make him liable. Restitution is narrow and fact-sensitive. Dec 2024 asked who is competent / sound mind — this is the sibling card.",
        explainer: `<p><strong>s.11:</strong> majority (18, or 21 with a guardian of property appointed — know the Majority Act hook), sound mind, not disqualified. <strong>Mohori Bibee v Dharmodas Ghose</strong> (1903): a minor’s mortgage is void; the lender cannot enforce. It is <em>void ab initio</em>, not voidable at the minor’s option (that would have been English-flavoured). The minor may sometimes enforce a beneficial contract (service, necessaries via s.68 against property) — write the benefit as a shield, not as a general power to bind.</p>
        <p><strong>No estoppel:</strong> a minor who lied about age is still a minor (<em>Leslie v Sheill</em> English; Indian courts refuse to let estoppel repeal s.11). <strong>No specific performance</strong> against the minor as a rule. Guardian can bind the estate in limited statutory situations (Hindu law / Guardians and Wards) — flag, don’t lecture family law.</p>
        <p><strong>Restitution:</strong> s.64/65 talk of voidable/void contracts and restoration of benefit. After Mohori Bibee, courts are cautious about using 65 to reconstruct a contract against the minor. Equity may require a minor who still has the property to restore it if he repudiates — not to pay a disguised contractual debt. s.68 necessaries supplied to a person incapable of contracting: reimbursement from their <em>property</em>, not a personal judgment on the infant as if they were adult.</p>
        <p>Exam: Mohori Bibee facts; void not voidable; estoppel; s.68; restitution caution.</p>`,
        analogy: {
          title: "AuthN age-gate",
          body: "s.11 is an age-gate that returns 403. You cannot estoppel it with a fake ID. s.68 is a necessaries API billed to the minor’s estate, not a full adult checkout. Restitution is ‘give back the laptop still in the bag,’ not ‘pay the EMI as if the contract lived.’"
        },
        diagram: {
          type: "vflow",
          steps: ["Is the party a minor? (s.11)", "Agreement void (Mohori Bibee)", "No estoppel from lying about age", "s.68 necessaries from property", "Restitution of existing benefit only"]
        },
        mnemonic: {
          name: "VOID not VOIDABLE",
          hook: "Mohori Bibee 1903. s.68 property, not personal adult liability.",
          recite: "A beneficial contract may be a shield for the minor. It is not a general sword against him."
        },
        cases: [
          { name: "Mohori Bibee v Dharmodas Ghose", citation: "(1903) 30 IA 114", point: "Void, not voidable." },
          { name: "Leslie v Sheill", citation: "[1914] 3 KB 607", point: "No estoppel / no tort cloak to enforce a loan." }
        ],
        pyqs: [
          { year: "Dec 2024", section: "C", marks: "20", q: "Who is competent to contract? Sound mind.", outline: ["s.11; majority; unsoundness s.12; minor consequences as the long limb."] }
        ],
        check: ["Mohori Bibee holding in one line.", "Why estoppel fails.", "s.68 vs enforcing the bargain."]
      },
      {
        id: "k-consent-matrix",
        seq: 5.2,
        readAs: "Bangia — coercion / undue influence / fraud / misrepresentation",
        unit: 6,
        yield: "high",
        tags: ["coercion", "undue influence", "fraud", "misrepresentation", "s.15", "s.17"],
        title: "Coercion vs undue influence vs fraud vs misrepresentation",
        summary: "Four ways free consent (s.14) fails. Matrix them. Dec 2024 20-marker on fraud and mere silence; 2022 on coercion.",
        explainer: `<table class="compare">
          <thead><tr><th></th><th>Coercion s.15</th><th>Undue influence s.16</th><th>Fraud s.17</th><th>Misrepresentation s.18</th></tr></thead>
          <tbody>
            <tr><td>Core</td><td>Forbidden force / threats (including threatening an offence; detaining property)</td><td>Dominating position + unfair use</td><td>Intentional deception (suggestio falsi, active concealment, promise without intent, other deception, false by duty)</td><td>Innocent/negligent false assertion, breach of duty gaining advantage, causing mistake as to substance</td></tr>
            <tr><td>Mens rea</td><td>Threat of an IPC/BNS offence etc.</td><td>Relationship + unconscionable bargain</td><td>Knowledge / without belief in truth / recklessly</td><td>No intent to deceive</td></tr>
            <tr><td>Effect</td><td>Voidable s.19</td><td>Voidable; court may set aside on terms</td><td>Voidable; damages in deceit if you affirm? — usually rescind; silence exceptions</td><td>Voidable; no deceit damages</td></tr>
            <tr><td>Silence</td><td>—</td><td>—</td><td>Mere silence ≠ fraud unless duty to speak or silence is equivalent to speech (Expl. to s.17). Dec 2024.</td><td>Half-truths can still bite</td></tr>
          </tbody>
        </table>
        <p><strong>Coercion</strong> can be committed by a stranger; need not be the other party. Unlawful detaining of property counts. <strong>Undue influence:</strong> real or apparent authority, fiduciary, mental distress; burden may shift when the transaction is unconscionable (<em>Mannu Singh</em> / <em>Raghunath Prasad</em> flavour). <strong>Fraud vs misrep:</strong> the knowledge flag. Both make the contract voidable under s.19; fraud has the extra tort of deceit if you want damages beyond rescission. Exceptions to voidability: delay, restitution impossible, third-party rights, affirmation.</p>
        <p>Mistake (ss.20–22) is a fifth free-consent cousin — mutual fact vs unilateral vs law. Keep it one paragraph unless the question is mistake.</p>`,
        analogy: {
          title: "Poisoned inputs",
          body: "Coercion = a gun on the handshake. Undue influence = admin credentials abused inside a fiduciary VPC. Fraud = you shipped a known-false payload. Misrepresentation = you shipped a false payload you believed. Silence is not fraud unless you were the documentation owner who omitted a breaking change."
        },
        diagram: {
          type: "tree",
          root: "s.14 free consent fails",
          branches: ["s.15 coercion", "s.16 undue influence", "s.17 fraud", "s.18 misrepresentation", "ss.20–22 mistake"]
        },
        mnemonic: {
          name: "CUFM (+ mistake)",
          hook: "Coercion Undue-influence Fraud Misrep. Silence ≠ 17 unless duty.",
          recite: "Dec 2024 fraud: five clauses of s.17 + explanation on silence."
        },
        cases: [
          { name: "Chikkam Ammiraju v Chikkam Seshamma", citation: "AIR 1918 Mad 414", point: "Coercion — threat of suicide as forbidden act flavour (Indian debate piece)." },
          { name: "Derry v Peek", citation: "(1889) 14 App Cas 337", point: "Fraud vs honest misrepresentation." },
          { name: "Raghunath Prasad v Sarju Prasad", citation: "AIR 1924 PC 60", point: "Undue influence — unconscionable + dominance." }
        ],
        pyqs: [
          {
            year: "Dec 2024",
            section: "C",
            marks: "20",
            q: "Fraud; effect on contract; mere silence ≠ fraud.",
            outline: ["s.17 clauses; explanation; s.19; deceit damages vs rescission; contrast s.18."]
          },
          { year: "2022", section: "B", marks: "10", q: "Coercion.", outline: ["s.15; stranger; unlawful detention; vs undue influence."] }
        ],
        check: ["s.15 vs s.16 in four lines.", "Five s.17 clauses.", "When silence becomes fraud."]
      },
      {
        id: "k-restraints",
        seq: 8.2,
        readAs: "Bangia — void agreements: trade, marriage, legal proceedings",
        unit: 8,
        yield: "high",
        tags: ["s.26", "s.27", "s.28", "restraint of trade", "marriage"],
        title: "Agreements in restraint of marriage, trade, and legal proceedings",
        summary: "s.26 marriage: void. s.27 trade: void, with a sale-of-goodwill exception. s.28 legal proceedings: void, with arbitration carve-outs. 2024/2022 both poked restraint of marriage.",
        explainer: `<p><strong>s.26:</strong> every agreement in restraint of the marriage of any person other than a minor is void. Partial or total — Indian text is harsher than some English ‘reasonable restraint’ talk. A promise not to marry anyone except X can still die here. Dowry/child-marriage policy is a different statute; do not mix.</p>
        <p><strong>s.27:</strong> every agreement by which anyone is restrained from exercising a lawful profession, trade or business of any kind is to that extent void. Exception: sale of goodwill — the seller may agree to refrain from carrying on a similar business within specified local limits, so long as the buyer carries on a like business there, and the limits are reasonable. Employment non-competes during employment (confidentiality, exclusive service) often survive; post-employment non-competes are routinely struck (<em>Niranjan Shankar Golikari</em> during; <em>Superintendence Co. v Krishan Murgai</em> after). English <em>Nordenfelt</em> reasonableness is not a free Indian rewrite of 27 — the statute is the gate, the exception is goodwill.</p>
        <p><strong>s.28:</strong> agreements that absolutely restrict enforcing rights by usual legal proceedings, or limit the time to a period shorter than limitation (old text; 2013 amendment flavour on extinguishing rights) are void. <strong>Exception:</strong> arbitration. Forum-selection that does not oust Indian courts entirely is a more careful commercial story — do not over-claim.</p>`,
        analogy: {
          title: "HR, non-compete, and ‘you may not sue’ clauses",
          body: "s.26 kills a contract that pads the marriage lock. s.27 kills a post-exit non-compete that fences the whole trade, unless you sold the goodwill and the fence is a reasonable local geo-fence. s.28 kills a clause that closes the courthouse; arbitration is the documented alternative dispute port."
        },
        diagram: {
          type: "compare",
          headers: ["Section", "Rule", "Famous leak"],
          rows: [
            ["26", "Restraint of marriage void", "Minor’s marriage arrangements (text)"],
            ["27", "Restraint of trade void", "Sale of goodwill + reasonable local limit"],
            ["28", "Ouster of courts / shrinking limitation void", "Arbitration"]
          ]
        },
        mnemonic: {
          name: "26 LOVE · 27 SHOP · 28 COURT",
          hook: "Goodwill is the 27 exception. After-job non-competes usually die.",
          recite: "2022/24 restraint of marriage: quote 26. Do not English-reasonableness it."
        },
        cases: [
          { name: "Niranjan Shankar Golikari v Century Spg. & Mfg.", citation: "AIR 1967 SC 1098", point: "Restraint during employment." },
          { name: "Superintendence Company of India v Krishan Murgai", citation: "(1981) 2 SCC 246", point: "Post-employment restraint and s.27." }
        ],
        pyqs: [
          { year: "Dec 2024", section: "A", marks: "4", q: "Agreement in restraint of marriage.", outline: ["s.26; void; not a reasonable-restraint essay."] },
          { year: "theme", section: "B", marks: "10", q: "Restraint of trade.", outline: ["s.27; goodwill exception; during vs after employment cases."] }
        ],
        check: ["s.26 without English softening.", "s.27 exception ingredients.", "s.28 vs arbitration."]
      },
      {
        id: "k-wager-contingent",
        seq: 9.2,
        readAs: "Bangia — wager vs contingent (s.30 / ss.31–36)",
        unit: 9,
        yield: "high",
        tags: ["wager", "s.30", "contingent", "gherulal", "insurance"],
        title: "Wager vs contingent contract",
        summary: "s.30: wagers are void (not illegal as such, except where a statute says). Contingent contracts (s.31) are valid if the uncertain event is collateral. Dec 2024 asked wagers vs insurance/lottery; 2022 Gherulal.",
        explainer: `<p><strong>Wager (s.30):</strong> a promise to pay money or money’s worth on the determination of an uncertain event, in which neither party has any interest other than the sum won or lost — mutual chances of gain and loss, no other genuine interest (<em>Carlill</em> contrast is insurance). Neither party must have a real stake beyond the bet. <em>Gherulal Parekh v Mahadeodas</em> (1959): wager is void, but not <em>unlawful</em> under s.23 merely as wager — collateral agreements may survive unless a state statute makes gambling illegal. Always check state gambling Acts in a problem.</p>
        <p><strong>Not wagers (Dec 2024 list):</strong> insurance (insurable interest — you don’t ‘win’ if your house burns); commercial hedges / some futures with genuine delivery intent; crossword prizes that are skill; lotteries are a special statutory offence/void hybrid — treat as prohibited games, not as s.31. Speculative share deals: facts (intention to deliver vs difference-only betting).</p>
        <p><strong>Contingent (s.31):</strong> a contract to do or not do something if some event, collateral to the contract, does or does not happen. Collateral = not the performance itself. ss.32–36: event happens → enforce; event becomes impossible → void; ‘happens before time’ / ‘does not happen’ rules. A wager is a mutual bet with no collateral performance; a contingent sale ‘if the ship arrives’ is a real sale gated on an event.</p>`,
        analogy: {
          title: "Bet vs gated delivery",
          body: "Wager = two processes swapping coins on a coin-flip, neither owning the coin-flip. Contingent = I will ship the container if the webhook ‘vessel_arrived=true’ fires — there is a real payload. Insurance is a hedge with an insurable interest, not a stadium bet."
        },
        diagram: {
          type: "compare",
          headers: ["", "Wager s.30", "Contingent s.31"],
          rows: [
            ["Interest besides the stake", "None", "Real performance gated on a collateral event"],
            ["Validity", "Void (maybe also illegal by state law)", "Valid, then 32–36 timing rules"],
            ["Illustration", "Match-odds bet", "Goods sold if the ship arrives"]
          ]
        },
        mnemonic: {
          name: "NO INTEREST = WAGER",
          hook: "Gherulal: void ≠ s.23 illegal. Insurance needs insurable interest.",
          recite: "Dec 2024: insurance / lottery / crossword / speculative — sort them, don’t dump."
        },
        cases: [
          { name: "Gherulal Parekh v Mahadeodas Maiya", citation: "AIR 1959 SC 781", point: "Wager void but not necessarily unlawful." },
          { name: "Carlill v Carbolic Smoke Ball Co", citation: "[1893] 1 QB 256", point: "Not a wager — genuine offer, not a mutual bet." }
        ],
        pyqs: [
          {
            year: "Dec 2024",
            section: "B",
            marks: "10",
            q: "Wagering contract — are insurance / lottery / crossword / speculative contracts wagers?",
            outline: ["s.30 definition; Gherulal; sort the four; contingent contrast."]
          }
        ],
        check: ["Wager ingredients.", "Gherulal holding.", "Why insurance is not s.30."]
      },
      {
        id: "k-frustration-limits",
        seq: 10.2,
        readAs: "Drill — what s.56 will not kill (from discharge home)",
        unit: 11,
        yield: "high",
        tags: ["frustration", "s.56", "satyabrata", "force majeure"],
        title: "Frustration — limits (what s.56 will not kill)",
        summary: "s.56 dissolves a contract when performance becomes impossible or unlawful, or the foundation radically changes. Hardship, bad bargains, and self-induced events do not frustrate. Dec 2024 Q7.",
        explainer: `<p><strong>s.56:</strong> an agreement to do an impossible act is void. A contract to do an act which, after the contract is made, becomes impossible or unlawful, becomes void when the act becomes impossible or unlawful. Compensation if the promisor could have prevented the impossibility with reasonable diligence (second paragraph) — self-induced is out.</p>
        <p><strong>Satyabrata Ghose v Mugneeram Bangur:</strong> ‘impossible’ is not physical-only; the foundation / specified purpose can be struck. Indian law is statutory; English ‘frustration’ vocabulary is a gloss.</p>
        <p><strong>Limits (the marks):</strong> (1) mere hardship, rise of prices, unprofitability — no; (2) event reasonably foreseeable and allocated by the contract (force-majeure clause occupies the field); (3) self-induced impossibility; (4) performance still possible in substance though more expensive; (5) temporary delay that does not kill the foundation; (6) one party’s choice to make it harder. COVID/lockdown problems: fact-specific — many commercial leases did <em>not</em> auto-frustrate.</p>
        <p><strong>vs contingent:</strong> contingent waits for a collateral event as designed. Frustration is an unexpected kill of a contract that was not built as a bet on that event. <strong>vs mistake s.20:</strong> mistake is at formation; frustration is subsequent.</p>`,
        analogy: {
          title: "Kill signal, not high CPU",
          body: "s.56 is SIGKILL when the production environment disappears or becomes illegal. It is not SIGTERM because AWS got more expensive. A force-majeure clause is a documented runbook that pre-empts the default kill. If you burned your own datacentre, that is self-induced — no frustration."
        },
        diagram: {
          type: "decision",
          title: "Did the foundation die / become unlawful without your fault?",
          yes: "s.56 void + restitution/65 flavour",
          no: "Hardship / dearer / self-induced — contract lives"
        },
        mnemonic: {
          name: "IMPOSSIBLE or UNLAWFUL — not DEARER",
          hook: "Satyabrata: foundation. Self-induced out. Force-majeure clause first.",
          recite: "Dec 2024 doctrine of frustration: define, limits, one case, contrast contingent."
        },
        cases: [
          { name: "Satyabrata Ghose v Mugneeram Bangur", citation: "AIR 1954 SC 44", point: "Impossibility includes destruction of the foundation." },
          { name: "Taylor v Caldwell", citation: "(1863) 3 B & S 826", point: "Music hall burns — English parent." },
          { name: "Energy Watchdog v CERC", citation: "(2017) 14 SCC 80", point: "Price rise / alternate performance — frustration refused (modern limit)." }
        ],
        pyqs: [
          { year: "Dec 2024", section: "B", marks: "10", q: "Doctrine of frustration.", outline: ["s.56; Satyabrata; limits list; self-induced; vs contingent."] }
        ],
        check: ["s.56 two sentences.", "Four limits.", "Satyabrata one-liner."]
      },
      {
        id: "k-hadley",
        seq: 12.2,
        readAs: "Bangia — remoteness (Hadley) and s.73",
        unit: 12,
        yield: "high",
        tags: ["hadley", "s.73", "remoteness", "mitigation"],
        title: "Remoteness of damage — Hadley v Baxendale and s.73",
        summary: "s.73 is Hadley’s two limbs in Indian statute. Ordinary loss in the usual course, or special loss the parties actually contemplated. Remote and indirect loss is out. 2022 asked remoteness of damage.",
        explainer: `<p><strong>Hadley v Baxendale (1854):</strong> a mill shaft sent for repair; the carrier’s delay; the mill stayed idle. Held: the idle-mill profits were not recoverable because the special importance of the shaft was not communicated. Two limbs — (1) damage arising naturally, i.e. according to the usual course of things; (2) damage reasonably supposed to have been in the contemplation of both parties, at the time of the contract, as the probable result of the breach (because of special facts disclosed).</p>
        <p><strong>s.73</strong> copies this: loss which naturally arose in the usual course, or which the parties knew when they contracted to be likely. Explanation: no remote/indirect loss. Mitigation: the plaintiff must take reasonable steps (market purchase, substitute performance) — <em>Murlidhar Chiranjilal</em>.</p>
        <p><strong>vs tort Wagon Mound:</strong> contract contemplates the bargainers’ knowledge at t0; tort asks foreseeable kind of harm to a neighbour. Do not mix. <strong>s.74</strong> named sums are a different card (reasonable compensation ≤ named amount).</p>
        <p>2022 remoteness: Hadley facts, two limbs, s.73 quote, one Indian mitigation sentence.</p>`,
        analogy: {
          title: "Default metrics vs extra dashboards you disclosed",
          body: "Limb 1 is the vendor’s default observability (late delivery costs every buyer some ordinary loss). Limb 2 is the extra dashboard you showed at contract time (‘if this shaft is late the whole mill burns money’). Hadley did not show that dashboard, so the idle-mill metric was out of SLA."
        },
        diagram: {
          type: "flow",
          steps: ["Breach", "Usual-course loss? (limb 1)", "Or special knowledge at t0? (limb 2)", "Minus mitigation", "Remote out"]
        },
        mnemonic: {
          name: "HADLEY TWO LIMBS = s.73",
          hook: "Natural / in contemplation. Communicate special loss at contract time.",
          recite: "Shaft + idle mill. Mitigation is mandatory. Tort remoteness is a different paper."
        },
        cases: [
          { name: "Hadley v Baxendale", citation: "(1854) 9 Exch 341", point: "Two limbs; special facts must be known." },
          { name: "Murlidhar Chiranjilal v Harishchandra Dwarkadas", citation: "AIR 1962 SC 366", point: "Market-price / mitigation." },
          { name: "Pannalal Jankidas v Mohanlal", citation: "AIR 1951 SC 144", point: "s.73 Indian application flavour." }
        ],
        pyqs: [
          { year: "2022", section: "B", marks: "10", q: "Remoteness of damage.", outline: ["Hadley facts; two limbs; s.73; mitigation; not Wagon Mound."] }
        ],
        check: ["Hadley facts in three lines.", "Two limbs mapped to s.73.", "One mitigation sentence."]
      },
      {
        id: "k-eng-vs-indian",
        seq: 3.3,
        readAs: "Drill — English vs Indian consideration (Dec 2024 20-marker home)",
        unit: 3,
        yield: "high",
        tags: ["consideration", "english", "indian", "s.2(d)", "privity", "past"],
        title: "English vs Indian law of consideration",
        summary: "Dec 2024 Sec C asked the comparison explicitly. s.2(d) is wider on who can move consideration and on past consideration. Privity of parties still lives. This is the table; the past-consideration card is the s.25 sibling.",
        explainer: `<p><strong>English spine (recite first):</strong> (1) consideration must move <em>from the promisee</em> — a stranger who paid cannot sue (<em>Tweddle v Atkinson</em>); (2) past consideration is generally <em>not</em> good (<em>Eastwood v Kenyon</em>, <em>Roscorla v Thomas</em>) unless the act was done at the promisor’s request and a promise was understood to follow; (3) consideration need not be adequate but must be sufficient in law (a peppercorn will do; natural love and affection will not; performance of an existing public duty classically will not); (4) consideration must be real, not illusory; (5) privity: only parties can sue (<em>Dunlop v Selfridge</em>).</p>
        <p><strong>Indian s.2(d):</strong> when, at the desire of the promisor, the promisee <em>or any other person</em> has done or abstained, or does or abstains, or promises to do or to abstain, such act/abstinence/promise is called consideration. Two widenings jump off the page: (a) <strong>‘any other person’</strong> — consideration need not move from the promisee (the Chinnaya v Ramayya flavour: a stranger to the consideration can still be the promisee who sues, if they are a party); (b) the three tenses — <strong>has done</strong> (past), does (present), promises (future) — so <strong>past consideration is good</strong> if it was at the promisor’s desire.</p>
        <p><strong>What India did <em>not</em> abolish:</strong> <em>privity of contract</em> (who is a party) is still English-flavoured — <em>M.C. Chacko</em> / <em>Jamna Das</em>: a beneficiary who is not a party still cannot sue unless a trust/family/acknowledgement exception applies. Students mash ‘any other person’ into ‘strangers can always sue.’ That is the 20-marker trap. s.25 then lists three no-consideration doors (love &amp; affection written+registered+near relation; compensation for a past voluntary act; written promise to pay a time-barred debt) which English law would usually refuse.</p>
        <p><strong>Table to dump:</strong> who may furnish consideration; past; love &amp; affection; time-barred debt; privity of parties. Close: India widened the <em>consideration</em> pipe and kept the <em>parties</em> pipe narrow, then cut three statutory windows in s.25. The Dec 2024 20-marker is written in full in <strong>Worked answers</strong> below. Past-tense and s.25 doors unpacked: <button type="button" class="text-link" data-nav="k1005" data-topic="k-past-consideration">past consideration</button>; who may sue: <button type="button" class="text-link" data-nav="k1005" data-topic="k-privity-exceptions">privity exceptions</button>.</p>`,
        analogy: {
          title: "Who can push the payment commit, vs who is on the ACL",
          body: "English law: only the promisee can push the consideration commit, and last month’s unpaid work is a rejected commit. s.2(d) lets any other person push the commit at the promisor’s desire, including a past tense. Privity is still the ACL on who may invoke the contract object — a third-party payer does not get sudo unless an exception adds them."
        },
        diagram: {
          type: "compare",
          headers: ["", "English", "India"],
          rows: [
            ["Who may furnish consideration", "Must move from the promisee", "Promisee or any other person (s.2(d))"],
            ["Past consideration", "Generally bad", "Good if at promisor’s desire"],
            ["Love & affection", "Not consideration", "s.25(1) if written, registered, near relation"],
            ["Time-barred debt", "Need fresh consideration", "s.25(3) signed writing"],
            ["Privity of parties", "Stranger cannot sue", "Same rule + Indian exceptions (trust etc.)"]
          ]
        },
        mnemonic: {
          name: "2(d) WIDE · PRIVITY NARROW · 25 DOORS",
          hook: "Any other person ≠ stranger may sue. Past is good. Tweddle still lurks as privity.",
          recite: "Dec 2024 wanted this table, not a speech on Kedarnath Bhattacharji."
        },
        cases: [
          { name: "Chinnaya v Ramayya", citation: "(1882) ILR 4 Mad 137", point: "Consideration from a third person; sister could sue as promisee." },
          { name: "Tweddle v Atkinson", citation: "(1861) 1 B & S 393", point: "English: consideration must move from the promisee." },
          { name: "M.C. Chacko v State Bank of Travancore", citation: "(1969) 2 SCC 343", point: "Privity survives — stranger cannot sue." }
        ],
        pyqs: [
          { year: "Dec 2024", section: "C", marks: "20", q: "Consideration — kinds; English vs Indian law.", outline: ["2(d) three tenses; any other person; past; English contrast; s.25; privity trap; Chinnaya + Tweddle + Chacko."] }
        ],
        check: ["‘Any other person’ vs privity.", "Why past consideration lives in India.", "Three s.25 doors."]
      },
      {
        id: "k-novation",
        seq: 10.4,
        readAs: "Drill — s.62 novation (from discharge home)",
        unit: 11,
        yield: "high",
        tags: ["novation", "s.62", "rescission", "alteration"],
        title: "Novation, rescission, alteration (S. 62)",
        summary: "Dec 2024 Sec A asked novation. s.62: if the parties agree to substitute a new contract, or to rescind or alter it, the original need not be performed. Need a valid new contract and consensus.",
        explainer: `<p><strong>s.62:</strong> if the parties to a contract agree to substitute a new contract for it, or to rescind or alter it, the original contract need not be performed. Three verbs, three pictures:</p>
        <ul>
          <li><strong>Novation:</strong> a new contract is substituted for the old. Two flavours: (a) change of <em>parties</em> (A owes B; all three agree that C will pay B and A is released); (b) change of <em>obligations</em> between the same parties (a running account is replaced by a fresh promissory note). The old debt dies; you sue only on the new instrument. If the new contract is void (e.g. with a minor, or without writing where a statute demands it), the old one is generally <em>not</em> discharged — there was no valid substitute.</li>
          <li><strong>Rescission:</strong> the parties agree to call the deal off without putting a substitute in its place. Future performance is released. Restoration of benefits may follow (ss.64–65 neighbourhood).</li>
          <li><strong>Alteration:</strong> the same contract is varied in terms (rate, time, quantity) by consensus. Material alteration of a written instrument without consent is a different, harsher doctrine (it can kill the instrument) — do not mix that with agreed s.62 alteration.</li>
        </ul>
        <p><strong>vs s.63:</strong> the <em>promisee</em> may remit, extend time, or accept satisfaction (accord and satisfaction) <em>without</em> a fresh contract from the promisor’s side in the same way. s.63 is a one-sided gift of waiver; s.62 is a two-sided substitution. <strong>vs assignment:</strong> assignment transfers rights; novation replaces the contract (and can release a party). <strong>vs frustration:</strong> s.56 kills by operation of law; s.62 kills by agreement.</p>
        <p>Dec 2024 short: definition + change-of-parties illustration + ‘new contract must be valid.’ A 10-marker adds s.63 and the void-substitute trap.</p>`,
        analogy: {
          title: "Replace the running container by agreement",
          body: "Novation is docker compose down + up with a new image (and maybe a new service name). If the new image fails to start (void contract), the old container was never legally killed. Rescission is compose down with no replacement. s.63 is the promisee sending a pardon without a new compose file. Frustration is the kernel OOM-killing the process without anyone’s agreement."
        },
        diagram: {
          type: "compare",
          headers: ["", "Novation", "Rescission", "s.63 remission"],
          rows: [
            ["What happens", "New contract replaces old", "Old ends, no substitute", "Promisee lets go / takes less"],
            ["Parties", "May change", "Same, walking away", "Same"],
            ["Need valid new contract?", "Yes", "No", "No (waiver)"]
          ]
        },
        mnemonic: {
          name: "SUBSTITUTE · CANCEL · TWEAK",
          hook: "s.62 three verbs. Void new contract ≠ discharge of old. s.63 is the promisee’s pardon.",
          recite: "Change of parties is the classic novation illustration. Don’t mix material alteration of a deed."
        },
        cases: [
          { name: "Scarf v Jardine", citation: "(1882) 7 App Cas 345", point: "Novation / choice of debtors flavour — you pick the new, you lose the old." },
          { name: "Indian s.62 illustrations", citation: "Contract Act", point: "The bare-act illustrations are written for this short note." }
        ],
        pyqs: [
          { year: "Dec 2024", section: "A", marks: "4", q: "Novation.", outline: ["s.62; substitute contract; change of parties or terms; valid-new-contract trap."] }
        ],
        check: ["s.62 three verbs.", "Novation vs s.63.", "What if the new contract is void."]
      },
      {
        id: "k-discharge-checklist",
        seq: 10.6,
        readAs: "Drill — P-A-I-B-L discharge checklist",
        unit: 11,
        yield: "high",
        tags: ["discharge", "modes", "checklist", "s.56", "s.62"],
        title: "Modes of discharge — printable checklist",
        summary: "Dec 2024 Sec C. Five (sometimes six) kill-switches. This is the one-page inventory; frustration and novation have their own zoom cards.",
        explainer: `<p><strong>Dump this list, then one paragraph each:</strong></p>
        <ol>
          <li><strong>Performance (ss.37–55)</strong> — both sides do what they promised: time, place, reciprocal promises, appropriation of payments (FIFO / debtor’s instruction / creditor’s choice). Tender of performance, if rejected, is as good as performance for the tendering party. Personal contracts die with the person (operation of law leak).</li>
          <li><strong>Agreement (ss.62–63)</strong> — novation, rescission, alteration; remission / extension / satisfaction by the promisee. See the novation card.</li>
          <li><strong>Impossibility / frustration (s.56)</strong> — subsequent impossibility or unlawfulness, or the foundation struck (<em>Satyabrata</em>). Not mere hardship. Self-induced out. See the frustration-limits card.</li>
          <li><strong>Breach</strong> — actual (when performance is due) or anticipatory (s.39: refusal before time; the other party may end and sue, or keep the contract alive at their peril). Remedies travel to ss.73–75.</li>
          <li><strong>Operation of law</strong> — death in purely personal contracts; insolvency / discharge under insolvency law; merger of rights; unauthorised material alteration of a written instrument; sometimes lapse of time as a limitation bar on the <em>remedy</em> (the obligation may linger as an imperfect obligation — don’t over-claim).</li>
        </ol>
        <p><strong>Optional sixth</strong> some answers add: <em>condition subsequent / contingent event that fails</em> (ss.31–36) — a designed death, not a surprise. Better to keep contingent on its own card and mention it as a cousin so you do not steal frustration’s thunder.</p>
        <p><strong>20-marker method:</strong> numbered list in the first 8 minutes; one illustration per mode; two sentences of contrast (62 vs 56 vs 39); close. Do not write five pages on s.56 alone unless the question is frustration.</p>`,
        analogy: {
          title: "Five kill signals",
          body: "Performance is a clean exit 0. Agreement is both operators typing docker compose down. Frustration is SIGKILL from the kernel. Breach is one side yanking the power cable. Operation of law is the account being deleted by the platform (death, insolvency, merger)."
        },
        diagram: {
          type: "tree",
          root: "Discharge",
          branches: ["Performance ss.37–55", "Agreement 62/63", "s.56 frustration", "Breach / s.39", "Operation of law"]
        },
        mnemonic: {
          name: "P-A-I-B-L",
          hook: "Performance Agreement Impossibility Breach Law.",
          recite: "Dec 2024 Q13 is this list. Novation and frustration are zoom lenses, not the whole camera."
        },
        cases: [
          { name: "Satyabrata Ghose v Mugneeram Bangur", citation: "AIR 1954 SC 44", point: "The impossibility limb — one paragraph only on a modes paper." },
          { name: "s.39 anticipatory breach illustrations", citation: "Contract Act", point: "Refusal before time — keep the contract alive at your peril." }
        ],
        pyqs: [
          { year: "Dec 2024", section: "C", marks: "20", q: "Modes of discharge of contract.", outline: ["P-A-I-B-L; one para each; novation example; frustration limits; s.39; close."] }
        ],
        check: ["Five modes in order.", "s.39 in one line.", "Why contingent is a cousin, not a sixth you must invent."]
      },
      {
        id: "k-quantum-meruit",
        seq: 12.4,
        readAs: "Bangia — quantum meruit (remedies / quasi neighbourhood)",
        unit: 12,
        yield: "high",
        tags: ["quantum meruit", "s.70", "s.65", "quasi"],
        title: "Quantum meruit",
        summary: "‘As much as he has earned.’ A restitutionary claim when a contract dies or was never fully enforceable, but work or goods conferred a benefit. Sits between quasi-contract and damages.",
        explainer: `<p><strong>Meaning:</strong> quantum meruit = as much as is merited / earned. It is not expectation damages (the bargain you would have made). It is a reasonable price for the benefit actually conferred. Use it when the contract does not furnish a completed price, or when the contract has been discharged so that you can no longer sue on the original promise as such.</p>
        <p><strong>Typical triggers:</strong> (1) a contract is <em>void</em> or becomes void and s.65 requires restoration of advantage — quantum meruit is how courts often <em>measure</em> that advantage; (2) s.70 (non-gratuitous act / lawful goods enjoyed) — the quasi-contract cousin; (3) the other party <em>prevents</em> completion / repudiates after part performance — the innocent party may elect to sue on quantum meruit rather than only for damages; (4) an implied-in-fact promise to pay a reasonable sum where the parties never fixed a price; (5) extra work outside the contract ordered and accepted.</p>
        <p><strong>Limits:</strong> if you are the party in breach, you generally cannot demand quantum meruit for a half-built house the owner did not accept (English <em>Sumpter v Hedges</em> flavour — no claim if the defendant had no real choice to reject). A completed lump-sum contract that you merely under-performed is a damages problem, not a rewrite of the price. Quasi-contract ss.68–72 are statutory; quantum meruit is the measuring idea that leaks across them and across remedies. Do not write it as a secret s.73A.</p>
        <p>Exam: define; four triggers; contrast damages; one caution (party in breach); point to s.65/s.70. A 4–10 marker, not a 20 unless bundled with quasi-contracts.</p>`,
        analogy: {
          title: "Bill the hours actually consumed, not the SaaS contract value",
          body: "Damages are the SLA payout as if the year had been delivered. Quantum meruit is an invoice for the compute you actually burned before the contract was SIGKILL’d, at a reasonable on-demand rate. If you were the one who yanked the cable, you do not get to bill the half-written feature the other side never could refuse."
        },
        diagram: {
          type: "compare",
          headers: ["", "Damages s.73", "Quantum meruit"],
          rows: [
            ["Measure", "Expectation / contemplated loss", "Reasonable value of benefit conferred"],
            ["When", "Breach of a living obligation", "Contract void/discharged / price never fixed / extra work"],
            ["Statutory hooks", "ss.73–75", "ss.65, 70 + common-law election"]
          ]
        },
        mnemonic: {
          name: "AS MUCH AS EARNED",
          hook: "s.65 / s.70 / prevented completion / no-price. Not a bonus for the breaker.",
          recite: "Contrast expectation damages in two lines and you have the 10-marker."
        },
        cases: [
          { name: "Sumpter v Hedges", citation: "[1898] 1 QB 673", point: "Builder in breach; materials the owner had no option to refuse — no QM." },
          { name: "State of Madras v Gannon Dunkerley (flavour)", citation: "AIR 1958 SC 560", point: "Works contracts / building — use carefully; the QM idea is the measurement, not the tax case." }
        ],
        pyqs: [
          { year: "theme", section: "B", marks: "10", q: "Quantum meruit.", outline: ["Define; four triggers; vs s.73; s.65/s.70; Sumpter caution."] }
        ],
        check: ["One-line definition.", "Four triggers.", "Why the party in breach usually fails."]
      },
    ]
  };
})(window);

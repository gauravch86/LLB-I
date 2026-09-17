/* Evolution timelines. Years from standard public sources; “c.” where the taught date is a range. */
(function (g) {
  g.LLB = g.LLB || {};

  const timelines = {
    "juris-defs": {
      id: "juris-defs",
      featured: true,
      title: "Evolution — Sem-1 cast (K-1001, chronological)",
      lede: "One left-rail, the whole CCS roll-call in year order. School chips colour the nodes; Where is the country so the map sits next to the doctrine. Gold B-A-H-G-S-P is a compact definitions inset (and a filter), not the only timeline. Toggle Matrix for the same beats as a study sheet.",
      hook: "Primary rail is chronological. Matrix is the same cast in columns. Filter by school if you want a family. Dual-tradition names wear one chip; the other tradition is a word in Said / Challenged.",
      matrix: {
        tagline: "Clear · Compact · Connected",
        tagKicker: "Study-aid"
      },
      note: "Salmond 1902 slightly predates Gray 1909 — badges are publication years. Realists sit after Pound as a school even though Holmes’s 1897 seed is earlier. Marx is dated to the 1859 base/superstructure text. Kohler’s one home is Natural (CCS revival with Stammler). C.K. Allen wears Definitions / sources.",
      spine: {
        lead: "Definition jobs — from ",
        parts: [
          { label: "ought", note: "philosophy" },
          { label: "is/command", note: "Austin" },
          { label: "form", note: "Holland" },
          { label: "courts", note: "Gray" },
          { label: "first principles", note: "Salmond" },
          { label: "social ends", note: "Pound" }
        ]
      },
      defInset: {
        kicker: "Compact definitions inset — not the full rail",
        name: "B-A-H-G-S-P",
        boxKicker: "Definitions",
        line: "Bentham — Austin — Holland — Gray — Salmond — Pound",
        hook: "Bentham · Austin · Holland · Gray · Salmond · Pound — what the word ‘jurisprudence’ is for. Use the filter chip to show only these six."
      },
      filters: [
        { id: "defs", label: "B-A-H-G-S-P" },
        { id: "nl", label: "Natural", school: "nl" },
        { id: "analytical", label: "Analytical", school: "analytical" },
        { id: "historical", label: "Historical", school: "historical" },
        { id: "socio", label: "Sociological", school: "socio" },
        { id: "realist", label: "Realist", school: "realist" },
        { id: "marx", label: "Marxist", school: "marx" },
        { id: "sources", label: "Definitions / sources", school: "sources" }
      ],
      kernels: [
        { school: "analytical", scope: "Analytical", name: "A → K → H", line: "Austin — Kelsen — Hart", hook: "Austin command → Kelsen Grundnorm → Hart primary/secondary rules. Blue Analytical chips only — not a floating legend." },
        { school: "socio", scope: "Sociological", name: "I → D → P", line: "Ihering — Duguit — Pound", hook: "Ihering purpose/struggle → Duguit solidarity → Pound social engineering. Sociological chips only." }
      ],
      beats: [
        {
          year: "c. 4th c. BCE",
          name: "Aristotle",
          school: "nl",
          schoolLabel: "Natural",
          country: "Greece",
          work: "Nicomachean Ethics · Politics (widely taught date)",
          landmark: "Nicomachean Ethics · Politics",
          doctrine: "Jurisprudence starts as philosophy of law and justice. Natural vs merely conventional rules; the just constitution measures human enactments.",
          said: "Jurisprudence starts as philosophy of law and justice; natural vs merely conventional rules.",
          shift: "Opens the file: ‘law’ is not only what a ruler barks. Validity has a moral checksum — the ought.",
          challenged: "‘Law’ is not only what a ruler barks. Validity has a moral checksum — the ought."
        },
        {
          year: "c. 200 CE",
          name: "Ulpian",
          school: "nl",
          schoolLabel: "Natural",
          country: "Roman Empire",
          work: "Digest 1.1.10 — jurisprudentia as justice-science (iustitia / suum cuique; taught from Justinian’s compilation)",
          landmark: "Digest 1.1.10 — jurisprudentia",
          doctrine: "Roman jurisprudentia: justice is the constant will to give each person their due (suum cuique tribuere). Precepts: live honourably, harm no one, render each their own. Ius as a definitional science, not a command list.",
          said: "Justice is the constant will to give each person their due (suum cuique). Ius as a definitional science, not a command list.",
          shift: "Plants the Roman definitional root: jurisprudence talks justice and ius, not only the prince’s will. Aquinas will baptise this later.",
          challenged: "Jurisprudence talks justice and ius, not only the prince’s will."
        },
        {
          year: "c. 1265–74",
          name: "Thomas Aquinas",
          school: "nl",
          schoolLabel: "Natural",
          country: "Italy",
          work: "Summa Theologiae — eternal / natural / human law",
          landmark: "Summa Theologiae — eternal / natural / human law",
          doctrine: "Human law participates in eternal law via natural law. An unjust enactment is a corruption of law (exam phrase: lex injusta non est lex — handle it as a measure, not a riot permit).",
          said: "Human law participates in eternal law via natural law; an unjust enactment is a corruption of law.",
          shift: "Gives classical NL its medieval OS. Aristotle’s ought gets a theology and a hierarchy of laws.",
          challenged: "Gives classical NL its medieval OS. Aristotle’s ought gets a theology."
        },
        {
          year: "1789 / c. 1791",
          name: "Jeremy Bentham",
          school: "analytical",
          schoolLabel: "Analytical",
          country: "England",
          defJob: true,
          work: "IPML 1789; Anarchical Fallacies (written c. 1791)",
          landmark: "IPML 1789; Anarchical Fallacies",
          doctrine: "Utility is the test. Natural-rights talk is mysticism — ‘nonsense upon stilts.’ Codify; censor bad law; count pain and pleasure.",
          said: "Utility is the test. Natural-rights talk is mysticism — ‘nonsense upon stilts.’",
          shift: "Torches the classical ought-as-rights fog. Keeps an ought (greatest happiness) but makes it a reform calculator — groundwork Austin will dry into positivism.",
          challenged: "Torches the classical ought-as-rights fog. Keeps an ought as a reform calculator."
        },
        {
          year: "1814",
          name: "Friedrich Carl von Savigny",
          school: "historical",
          schoolLabel: "Historical",
          country: "Germany",
          work: "Vom Beruf unserer Zeit (against a rushed German civil code)",
          landmark: "Vom Beruf unserer Zeit",
          doctrine: "Law grows like language. Volksgeist lives first in custom, then in juristic working-out. You cannot committee-ship a people’s spirit on a statute timetable.",
          said: "Law grows like language. Volksgeist lives first in custom, then in juristic working-out.",
          shift: "Replaces both eternal NL codes and midnight legislation-worship with organic growth. The Historical school’s opening shot.",
          challenged: "Replaces eternal NL codes and midnight legislation-worship with organic growth."
        },
        {
          year: "1832",
          name: "John Austin",
          school: "analytical",
          schoolLabel: "Analytical",
          country: "England",
          defJob: true,
          work: "The Province of Jurisprudence Determined",
          landmark: "The Province of Jurisprudence Determined",
          doctrine: "Jurisprudence = philosophy of positive law. Law properly so called = command of a political superior + sanction. Splits is from ought.",
          said: "Law properly so called = command of a political superior + sanction. Splits is from ought.",
          shift: "Kicks morals out of the validity test. Bentham’s expositor-mode wins; NL and Volksgeist are not what makes a rule ‘law.’ Opens A→K→H (Austin → Kelsen Grundnorm → Hart).",
          challenged: "Kicks morals out of the validity test. Opens A→K→H."
        },
        {
          year: "1859",
          name: "Karl Marx",
          school: "marx",
          schoolLabel: "Marxist",
          country: "Germany / England",
          work: "Preface to A Contribution to the Critique of Political Economy (1859); Capital 1867 — with Engels on ideology",
          landmark: "Preface to the Critique of Political Economy (1859)",
          doctrine: "Law is superstructure. Base (forces/relations of production) shapes legal form. It presents class interest as universal right. The State is not Austin’s neutral sovereign; it is organised class power with a legal face.",
          said: "Law is superstructure. Base (production) shapes legal form; class interest wears a universal-right face.",
          shift: "Short beat, high contrast: Austin’s command and (later) Pound’s engineering both look naive if the machine itself is class. Pound reforms inside the market-State; Marx wants a different machine.",
          challenged: "Austin’s command and Pound’s engineering look naive if the machine itself is class."
        },
        {
          year: "1861",
          name: "Sir Henry Maine",
          school: "historical",
          schoolLabel: "Historical",
          country: "England",
          work: "Ancient Law",
          landmark: "Ancient Law",
          doctrine: "Progressive societies move from status to contract: birth-caste position → individual agreement. Comparative-historical method; village communities.",
          said: "Progressive societies move from status to contract: birth-caste position → individual agreement.",
          shift: "Gives Savigny’s spirit a vector. (Write the critique: labour/consumer statutes are status returning as protection.)",
          challenged: "Gives Savigny’s spirit a vector. (Labour/consumer statutes are status returning as protection.)"
        },
        {
          year: "1877",
          name: "Rudolf von Ihering",
          school: "socio",
          schoolLabel: "Sociological",
          country: "Germany",
          work: "Der Zweck im Recht (1877–83); Der Kampf ums Recht (1872) — Interessenjurisprudenz",
          landmark: "Der Zweck im Recht (1877–83)",
          doctrine: "Law is purpose plus struggle, not a quiet garden of rights. Interests fight (Interessenjurisprudenz); the legal order is an instrument for ends. Bridge from historical/analytical crystal to sociology.",
          said: "Law is purpose plus struggle. Interests fight; the legal order is an instrument for ends.",
          shift: "Breaks law-as-logical-crystal. Opens I→D→P: purpose (Zweck) enters what law is doing.",
          challenged: "Breaks law-as-logical-crystal. Opens I→D→P."
        },
        {
          year: "1880",
          name: "Thomas Erskine Holland",
          school: "analytical",
          schoolLabel: "Analytical",
          country: "England",
          defJob: true,
          work: "The Elements of Jurisprudence (1st ed.)",
          landmark: "The Elements of Jurisprudence",
          doctrine: "Jurisprudence is the formal science of positive law — the structure of legal relations (right, duty, person), not the contents of one code. ‘Eye of law.’",
          said: "Jurisprudence is the formal science of positive law — structure of relations, not one code’s contents.",
          shift: "Austin’s province was still a bit of political theory. Holland says: stop narrating England; diagram the forms.",
          challenged: "Stop narrating England; diagram the forms."
        },
        {
          year: "1902",
          name: "John Salmond",
          school: "analytical",
          schoolLabel: "Analytical",
          country: "New Zealand",
          defJob: true,
          work: "Jurisprudence (1st ed.)",
          landmark: "Jurisprudence (1st ed.)",
          doctrine: "Jurisprudence is the science of the first principles of the civil law. Also: principles the State recognises in administering justice.",
          said: "Jurisprudence is the science of the first principles of the civil law.",
          shift: "Sharper definitional-school framing than Austin’s ‘philosophy.’ Classroom-ready first principles, not a sovereign’s biography.",
          challenged: "Sharper definitional-school framing than Austin’s ‘philosophy.’"
        },
        {
          year: "1902",
          name: "Rudolf Stammler",
          school: "nl",
          schoolLabel: "Natural",
          country: "Germany",
          work: "Die Lehre von dem richtigen Recht (1902); ‘natural law with a variable content’ — just law",
          landmark: "Die Lehre von dem richtigen Recht — just law",
          doctrine: "There is no eternal code of detailed rules. There is a method of just law — stable form, changing payload as society changes.",
          said: "Natural law with a variable content — stable form, changing payload as society changes.",
          shift: "Reboots the ought Austin killed, without pretending 13th-century property rules are natural forever. CCS named revival payload.",
          challenged: "Reboots the ought Austin killed, without a frozen 13th-century code."
        },
        {
          year: "1909",
          name: "John Chipman Gray",
          school: "analytical",
          schoolLabel: "Analytical",
          country: "United States",
          defJob: true,
          work: "The Nature and Sources of the Law",
          landmark: "The Nature and Sources of the Law",
          doctrine: "Law is the rules courts lay down for rights and duties. Statutes are sources of law; they are not the law until a court speaks.",
          said: "Law is the rules courts lay down. Statutes are sources until a court speaks.",
          shift: "Moves the camera from sovereign/form to the bench. Realist as a word, not a second chip: paper rules are hypotheses until judicial organs run them.",
          challenged: "Moves the camera from sovereign/form to the bench."
        },
        {
          year: "1909",
          name: "Josef Kohler",
          school: "nl",
          schoolLabel: "Natural",
          country: "Germany",
          work: "Lehrbuch der Rechtsphilosophie (1909) — neo-Hegelian cultural revival",
          landmark: "Lehrbuch der Rechtsphilosophie (1909)",
          doctrine: "Law is cultural evolution. Jural postulates of a civilisation grow as culture grows — neo-Hegelian, not Volksgeist-romantic freeze.",
          said: "Law is cultural evolution. Jural postulates of a civilisation grow as culture grows.",
          shift: "One Natural home (CCS revival with Stammler). Culture, not sociological: historicises like Savigny, but the vector is civilisation-forward, not folk-past.",
          challenged: "One Natural home (CCS revival with Stammler). Civilisation-forward, not folk-past."
        },
        {
          year: "c. 1908–19",
          name: "Léon Duguit",
          school: "socio",
          schoolLabel: "Sociological",
          country: "France",
          work: "Le droit social (1908); Law in the Modern State (1919)",
          landmark: "Le droit social; Law in the Modern State",
          doctrine: "No metaphysical sovereign, no mystical subjective right. Law = obligatory rules of social solidarity (interdependence) — objective law. Property is a social function.",
          said: "Law = obligatory rules of social solidarity. Property is a social function.",
          shift: "Middle of I→D→P. Deletes Austin’s legally unlimited root user. Even the State is under the SLA of solidarity.",
          challenged: "Deletes Austin’s legally unlimited root user. Even the State is under solidarity."
        },
        {
          year: "c. 1922",
          name: "Roscoe Pound",
          school: "socio",
          schoolLabel: "Sociological",
          country: "United States",
          defJob: true,
          work: "Introduction to the Philosophy of Law (1922); social-engineering lectures c. 1921–23",
          landmark: "Introduction to the Philosophy of Law (1922)",
          doctrine: "Law is social engineering — maximum wants, minimum friction. Inventory individual / public / social interests; jural postulates of the civilisation. Sociology enters what law does.",
          said: "Law is social engineering — maximum wants, minimum friction.",
          shift: "Closes I→D→P. Definition becomes a verb (a task). Contrast Marx: Pound patches the ToS; Marx asks who owns the racks.",
          challenged: "Closes I→D→P. Definition becomes a verb. Pound patches the ToS; Marx asks who owns the racks."
        },
        {
          year: "1927",
          name: "C.K. Allen",
          school: "sources",
          schoolLabel: "Definitions / sources",
          country: "Australia / England",
          work: "Law in the Making (1st ed. 1927)",
          landmark: "Law in the Making",
          doctrine: "Classroom map of how law is made: custom, precedent, legislation, equity — sources as a living system, not Austin’s single command-pipe. Exam-adjacent with historical (custom) and analytical (form) classrooms.",
          said: "How law is made: custom, precedent, legislation, equity — sources as a living system.",
          shift: "When the question is sources, Allen is the named toolkit; Austin’s sovereign is too thin for custom and case-law. One Definitions / sources chip — not a second Historical or Analytical badge.",
          challenged: "When the question is sources, Austin’s sovereign is too thin for custom and case-law."
        },
        {
          year: "c. 1897–1940",
          name: "American Realists (Holmes / Llewellyn / Frank)",
          school: "realist",
          schoolLabel: "Realist",
          country: "United States",
          work: "Holmes, Path of the Law (1897); Llewellyn rule-scepticism; Frank fact-scepticism (1930s)",
          landmark: "Path of the Law; rule- and fact-scepticism",
          doctrine: "Law is prediction of what courts will do (Holmes). Paper rules under-determine outcomes (Llewellyn). The wild card is often fact-finding, not doctrine (Frank). Law-in-action, not law-in-books.",
          said: "Law is prediction of what courts will do. Law-in-action, not law-in-books.",
          shift: "After Gray’s court-camera and Pound’s tidy engineering: Realists distrust both the paper rule and the interest-balance spreadsheet. Analytical spine (no NL) + sociological method (watch officials), minus Pound’s pretty scheduler.",
          challenged: "Distrust both the paper rule and Pound’s interest-balance spreadsheet."
        },
        {
          year: "1934",
          name: "Hans Kelsen",
          school: "analytical",
          schoolLabel: "Analytical",
          country: "Austria",
          work: "Reine Rechtslehre (1934; 2nd ed. 1960). English: General Theory of Law and State (1945)",
          landmark: "Reine Rechtslehre — Grundnorm",
          doctrine: "Pure theory: strip sociology and morals. Each norm is authorised by a higher norm, terminating in a presupposed Grundnorm — the base ‘ought’ you clone the system with, not a moral proof. Validity ≠ justice.",
          said: "Each norm is authorised by a higher norm, terminating in a presupposed Grundnorm. Validity ≠ justice.",
          shift: "Middle of A→K→H. Replaces Austin’s person-sovereign with a validity pyramid. The State is the legal order personified. Say Grundnorm in the exam sentence.",
          challenged: "Replaces Austin’s person-sovereign with a validity pyramid. Say Grundnorm."
        },
        {
          year: "1961",
          name: "H.L.A. Hart",
          school: "analytical",
          schoolLabel: "Analytical",
          country: "England",
          work: "The Concept of Law",
          landmark: "The Concept of Law",
          doctrine: "Law is the union of primary (duty) and secondary rules — recognition, change, adjudication. Obligation ≠ being obliged. Officials’ practice (rule of recognition), not a gunman and not a floating Grundnorm.",
          said: "Law is the union of primary (duty) and secondary rules — recognition, change, adjudication.",
          shift: "Closes A→K→H. Kills the gunman theory; explains power-conferring rules Austin could only squint at. Soft landing for Indian constitutional pedigree.",
          challenged: "Closes A→K→H. Kills the gunman theory; explains power-conferring rules."
        }
      ]
    },

    "nl-revival": {
      id: "nl-revival",
      title: "Evolution — natural law, eclipse, revival",
      hook: "Reason → rights → Austin kills the ought → Stammler (variable content) / Kohler (culture) reboot the checksum.",
      beats: [
        {
          year: "c. 4th c. BCE–1274",
          name: "Classical natural law",
          work: "Aristotle · Cicero · Aquinas (Summa, c. 1265–74)",
          doctrine: "Higher reason measures human law. Unjust enactment is a corruption of law — handle the slogan carefully; it is not a riot permit.",
          shift: "Law has a moral spec. Positive law is a build that can fail CI."
        },
        {
          year: "1625 / 1689",
          name: "Early-modern rights strand",
          work: "Grotius De Jure Belli (1625); Locke Two Treatises (1689)",
          doctrine: "Grotius secularises NL (‘even if God did not exist’). Locke ties it to rights the State does not create.",
          shift: "From cosmic order to portable rights the sovereign cannot mint."
        },
        {
          year: "1832",
          name: "Nineteenth-century eclipse",
          work: "Austin’s Province as the demolition job",
          doctrine: "If law is the sovereign’s command, ‘higher law’ is smuggled morals. Science-envy + sovereignty theory sideline NL.",
          shift: "Ought is kicked upstairs to ethics. Validity becomes pedigree."
        },
        {
          year: "1902 / 1909",
          name: "German revival — Stammler & Kohler",
          work: "Stammler Lehre von dem richtigen Recht (1902); Kohler Rechtsphilosophie (1909)",
          doctrine: "Stammler: natural law with a variable content — stable just-law form, changing payload. Kohler: law as cultural evolution, not a frozen Roman past.",
          shift: "Brings the ought back without pretending 13th-century property rules are eternal. CCS named payload."
        }
      ]
    },

    "analytical-akh": {
      id: "analytical-akh",
      title: "Evolution — analytical positivism (Austin → Kelsen → Hart)",
      hook: "Command → pyramid → ruleset. Three kernels, not ‘all Englishmen who hate natural law.’",
      beats: [
        {
          year: "1832",
          name: "Austin — command OS",
          work: "Province of Jurisprudence Determined",
          doctrine: "Sovereign + habit of obedience + sanction. International law and conventions demoted to ‘positive morality.’",
          shift: "Replaces NL validity with a gunman-shaped compiler. Beautiful if your only type is Command."
        },
        {
          year: "1934",
          name: "Kelsen — pure pyramid",
          work: "Reine Rechtslehre (1934; 2nd ed. 1960). English: General Theory of Law and State (1945)",
          doctrine: "Strip sociology and morals. Norms authorised by higher norms, terminating in a presupposed Grundnorm. Validity ≠ justice.",
          shift: "Replaces Austin’s person-sovereign with a validity chain. The State is the legal order personified — no dualism."
        },
        {
          year: "1961",
          name: "Hart — primary + secondary rules",
          work: "The Concept of Law",
          doctrine: "Duty-rules plus recognition, change, adjudication. Obligation ≠ being obliged. Officials’ practice, not a barking sovereign.",
          shift: "Kills the gunman theory. Explains power-conferring rules (wills, contracts, legislation) Austin could only squint at."
        }
      ]
    },

    "hist-savigny-maine": {
      id: "hist-savigny-maine",
      title: "Evolution — historical school",
      hook: "Savigny = Volksgeist (don’t ship a hasty code). Maine = status → contract (progressive societies).",
      beats: [
        {
          year: "1814",
          name: "Savigny — vocation pamphlet",
          work: "Vom Beruf unserer Zeit (against a rushed German civil code)",
          doctrine: "Law grows like language. Volksgeist first lives in custom, then in juristic working-out. Legislation is late and dangerous if it cuts the spirit.",
          shift: "Replaces both eternal NL codes and midnight command-legislation with organic growth."
        },
        {
          year: "1861",
          name: "Maine — comparative arrow",
          work: "Ancient Law",
          doctrine: "Progressive societies move from status to contract: birth-caste position → individual agreement. Village communities; patriarchal theory.",
          shift: "Gives historical jurisprudence a one-line law of motion. Savigny’s spirit gets a vector. (Modern labour/consumer statutes are the counter-arrow — write that critique.)"
        }
      ]
    },

    "socio-pound": {
      id: "socio-pound",
      title: "Evolution — sociological jurisprudence",
      hook: "Ihering purpose → Ehrlich living law → Pound engineers interests / Duguit solidarity kills the Austinian root user.",
      beats: [
        {
          year: "1877",
          name: "Ihering — purpose in law",
          work: "Der Zweck im Recht (1877–83); Kampf ums Recht (1872)",
          doctrine: "Law is not a quiet garden of rights; it is purpose plus struggle. Interests fight; the legal order is an instrument.",
          shift: "Breaks the picture of law as a logical crystal. Purpose (Zweck) enters the definition of what law is doing."
        },
        {
          year: "1913",
          name: "Ehrlich — living law",
          work: "Grundlegung der Soziologie des Rechts",
          doctrine: "Paper rules in the code are not the law that actually orders associations. Watch factories, families, trade — the living law.",
          shift: "Splits law-in-books from law-in-action. The statute is a hypothesis about society."
        },
        {
          year: "c. 1908–19",
          name: "Duguit — social solidarity",
          work: "Le droit social (1908); Law in the Modern State (1919)",
          doctrine: "No metaphysical sovereign, no mystical subjective right. Law = obligatory rules of interdependence. Property is a social function.",
          shift: "Deletes Austin’s legally unlimited root user. Even the State is under the SLA of solidarity."
        },
        {
          year: "c. 1922",
          name: "Pound — social engineering",
          work: "Philosophy of Law (1922); interest-inventory lectures",
          doctrine: "Maximise satisfied claims with minimum friction. Inventory individual / public / social interests; jural postulates change with civilisation.",
          shift: "Turns the sociological revolt into an exam-ready method. CCS 20-marker engine."
        }
      ]
    },

    "art21": {
      id: "art21",
      title: "Evolution — Article 21 (Gopalan → Maneka → Puttaswamy)",
      hook: "From a positivist silo to a golden triangle, then a privacy major-version.",
      beats: [
        {
          year: "1950",
          name: "A.K. Gopalan",
          work: "AIR 1950 SC 27",
          doctrine: "‘Procedure established by law’ means any legally enacted procedure. Arts. 19 and 21 live in silos. No US due-process import.",
          shift: "Locks 21 as a thin positivist clause. Detention law that is ‘law’ is enough."
        },
        {
          year: "1978",
          name: "Maneka Gandhi",
          work: "(1978) 1 SCC 248",
          doctrine: "Procedure must be fair, just and reasonable. 14–19–21 are a golden triangle. Passport impoundment without hearing fails.",
          shift: "Overwrites Gopalan’s silo. Natural-law energy re-enters a positivist text. The single most important K-1002 holding."
        },
        {
          year: "2017",
          name: "K.S. Puttaswamy (privacy)",
          work: "(2017) 10 SCC 1 (9-judge)",
          doctrine: "Privacy is a Fundamental Right in 21 (and the 14/19 cluster). Tests: legality, necessity, proportionality. Overrules stray M.P. Sharma / Kharak Singh notes.",
          shift: "Major version bump on Maneka’s dignity/liberty stack. Not a new article — a named package inside 21."
        }
      ]
    },

    "basic-structure": {
      id: "basic-structure",
      title: "Evolution — basic structure (Golaknath → Kesavananda → Minerva)",
      hook: "Freeze FRs → amend-but-don’t-delete-the-architecture → DPSPs cannot autocracy the rights wheel.",
      beats: [
        {
          year: "1967",
          name: "I.C. Golaknath",
          work: "AIR 1967 SC 1643",
          doctrine: "Constitutional amendments are ‘law’ under Art. 13. Parliament cannot abridge FRs by amendment.",
          shift: "FR-entrenchment high-water. Political sequel: 24th Amendment. (Champakam 1951 sits earlier as FR-trumps-DPSP, not this doctrine yet.)"
        },
        {
          year: "1973",
          name: "Kesavananda Bharati",
          work: "(1973) 4 SCC 225",
          doctrine: "Parliament can amend any part, including FRs, but cannot damage the basic structure. Golaknath’s absolute freeze dies; 24th survives in this frame.",
          shift: "Replaces ‘FRs are untouchable’ with ‘identity of the Constitution is untouchable.’ The live OS of Indian public law."
        },
        {
          year: "1980",
          name: "Minerva Mills",
          work: "(1980) 3 SCC 625",
          doctrine: "42nd Amendment’s attempt to immunise all DPSPs via expanded 31C, and to exclude judicial review of amendments, struck. FRs and DPSPs are two wheels.",
          shift: "Stops ‘social revolution’ from deleting the rights wheel. Harmony, not DPSP autocracy. 31C as a 39(b)(c) shield, not a dictatorship."
        }
      ]
    },

    "equality-ews": {
      id: "equality-ews",
      title: "Evolution — equality & reservation (Indra Sawhney → EWS)",
      hook: "Mandal OS (1992) → promotion saga → 103rd EWS / Janhit (2022).",
      beats: [
        {
          year: "1992",
          name: "Indra Sawhney",
          work: "(1992) Supp (3) SCC 217",
          doctrine: "16(4) is a facet of equality. 50% ceiling as a general rule. Creamy layer for OBCs. No reservation in promotions (as then held).",
          shift: "Turns reservation from a political slogan into a justiciable operating system. Still the 20-marker kernel."
        },
        {
          year: "2006 / 2018",
          name: "Nagaraj → Jarnail (promotions)",
          work: "M. Nagaraj (2006) 8 SCC 212; Jarnail Singh (2018) 10 SCC 396",
          doctrine: "SC/ST promotion reservations survive via later amendments, with conditions. Creamy layer for SC/ST in promotions as refined.",
          shift: "Patches Sawhney’s ‘no promotions’ holding. Don’t write 1992 as if promotions never came back."
        },
        {
          year: "2019 / 2022",
          name: "EWS — 103rd Amendment & Janhit",
          work: "Arts. 15(6)/16(6); Janhit Abhiyan (judgment 7 Nov 2022; (2023) 5 SCC 1)",
          doctrine: "Up to 10% for economically weaker sections other than 15(4)/16(4) classes. Majority upholds; dissents worry about exclusion and the 50% ceiling.",
          shift: "Adds an economic flag beside caste-backwardness flags. Ceiling debate is the live critique paragraph."
        }
      ]
    },

    "press-speech": {
      id: "press-speech",
      title: "Evolution — speech & press (Indian milestones)",
      hook: "Circulation → 1st Amendment firewall expansion → newsprint/price fights → Shreya Singhal overbreadth.",
      beats: [
        {
          year: "1950",
          name: "Romesh Thappar",
          work: "AIR 1950 SC 124",
          doctrine: "Freedom of circulation is inside 19(1)(a). Public order ≠ security of the State. A ban on entry of a journal failed the then-thin 19(2).",
          shift: "Press is speech on a publishing interface — no separate press article. Political sequel: 1st Amendment (1951) widens 19(2)."
        },
        {
          year: "1962 / 1972",
          name: "Sakal Papers → Bennett Coleman",
          work: "AIR 1962 SC 305; (1972) 2 SCC 788",
          doctrine: "Price-page orders and newsprint controls can choke circulation and so choke 19(1)(a). Indirect strangulation still counts.",
          shift: "Moves the fight from crude bans to economic/regulatory throttles. Indian Express (1985) later adds tax-that-cripples."
        },
        {
          year: "2015",
          name: "Shreya Singhal",
          work: "(2015) 5 SCC 1",
          doctrine: "IT Act s.66A struck: vagueness, overbreadth, chilling effect. Discussion / advocacy / incitement — only the last is the crime gate.",
          shift: "Internet-era 19(2) hygiene. You cannot invent a new firewall port called ‘annoyance.’"
        }
      ]
    },

    "rylands-mehta": {
      id: "rylands-mehta",
      title: "Evolution — strict → absolute liability",
      hook: "Rylands has an exception list. Oleum gas stripped the exceptions and scaled damages to the enterprise.",
      beats: [
        {
          year: "1868",
          name: "Rylands v Fletcher",
          work: "(1868) LR 3 HL 330",
          doctrine: "Bring a dangerous thing onto land, non-natural use, it escapes → strict liability. Defences: Act of God, stranger, consent, plaintiff’s default, statute.",
          shift: "Fault drops out of the leaky-tank case. Still not ‘absolute’ — the exception list is the whole point of the name."
        },
        {
          year: "1987",
          name: "M.C. Mehta (Oleum gas)",
          work: "(1987) 1 SCC 395",
          doctrine: "Hazardous/inherently dangerous enterprise: absolute, non-delegable duty. No Rylands excuses. Compensation tracks the enterprise’s magnitude.",
          shift: "India refuses to run Bhopal-class harm through English Act-of-God loopholes. Rylands is not abolished; it is the wrong frame for mass industrial disaster."
        }
      ]
    },

    "state-torts": {
      id: "state-torts",
      title: "Evolution — State liability (Kasturilal → constitutional torts)",
      hook: "Crown plugin → Kasturilal shield → Nagendra Rao deletes it → Art. 21 compensation as a second track.",
      beats: [
        {
          year: "1861 / 1962",
          name: "P&O distinction → Vidyawati",
          work: "P&O Steam Navigation (1861); State of Rajasthan v Vidyawati, AIR 1962 SC 933",
          doctrine: "Colonial sovereign vs non-sovereign functions. Vidyawati: jeep negligence on tour — State pays. Art. 300: Union/States are suable.",
          shift: "Cracks the ‘king can do no wrong’ import for ordinary driving. The old distinction is already leaking."
        },
        {
          year: "1965",
          name: "Kasturilal",
          work: "AIR 1965 SC 1039",
          doctrine: "Police seize gold; constable steals it. Court calls it a sovereign function — no damages. Infamous.",
          shift: "Re-hardens the crown plugin for police custody of property. Later courts isolate this as bad history."
        },
        {
          year: "1993 / 1994",
          name: "Nilabati Behera → Nagendra Rao",
          work: "(1993) 2 SCC 746; (1994) 6 SCC 205",
          doctrine: "Custodial death: public-law compensation under 21, distinct from private tort. Nagendra Rao: sovereign/non-sovereign split is obsolete in a welfare State.",
          shift: "Two tracks now: tort damages (distinction dying) and constitutional torts (dignity/custody). Write both in a 20-marker."
        }
      ]
    },

    "donoghue-india": {
      id: "donoghue-india",
      title: "Evolution — negligence (Donoghue → Indian reception)",
      hook: "Neighbour principle lands; India keeps the four-stage pipeline and writes its own professional/medical overlay.",
      beats: [
        {
          year: "1932",
          name: "Donoghue v Stevenson",
          work: "[1932] AC 562",
          doctrine: "Duty to persons so closely and directly affected that I ought reasonably to have them in contemplation. Manufacturer → consumer; the snail in the bottle.",
          shift: "Kills privity as a negligence shield. Duty becomes a relationship test, not a contract ticket."
        },
        {
          year: "1966 / 2005",
          name: "Indian reception",
          work: "MCD v Subhagwanti, AIR 1966 SC 1750; Jacob Mathew (2005) 6 SCC 1",
          doctrine: "Same pipeline: duty → breach → causation → damage. Clock-tower collapse / res ipsa flavour. Doctors: Bolam-style responsible body; criminal negligence is gross, not mere error.",
          shift: "Does not rewrite Donoghue; it localises it. Wagon Mound remoteness and Indian medical overlay are add-on modules, not a new tort."
        }
      ]
    },

    "ipc-bns": {
      id: "ipc-bns",
      title: "Evolution — from IPC 1860 to BNS 2023 (code, not philosophy)",
      hook: "Same criminal OS, new function signatures. Do not paste 124A or 497 essays into a BNS paper.",
      note: "BNS in force 1 July 2024. This is evolution of a code’s labels and a few payloads — not a new theory of crime.",
      beats: [
        {
          year: "1860",
          name: "IPC — Macaulay’s code ships",
          work: "Enacted 1860; in force 1862",
          doctrine: "General part + special part. Mens rea default, constructive liability (34/149), CH/murder genus-species, property ladder. Colonial transplant, not a Volksgeist product.",
          shift: "Replaces scattered Presidency regulations with one statute India still thinks in."
        },
        {
          year: "1870 / 1962",
          name: "Sedition module — 124A + Kedarnath gloss",
          work: "s.124A inserted 1870; Kedarnath Singh, AIR 1962 SC 955",
          doctrine: "Exciting disaffection toward the Government. Kedarnath saves the section with a violence/public-order reading.",
          shift: "A speech crime bolted onto the code. Politically radioactive for a century-plus."
        },
        {
          year: "2018",
          name: "Adultery — Joseph Shine",
          work: "(2019) 3 SCC 39 (judgment 27 Sep 2018)",
          doctrine: "IPC 497 struck as unconstitutional. Husband-as-proprietor architecture dies. BNS later omits the offence entirely.",
          shift: "Moral turpitude ≠ a surviving crime. Old PYQs still say ‘adultery’ — answer the death, don’t revive the section."
        },
        {
          year: "2023 / 2024",
          name: "BNS 2023 ships",
          work: "Act 45 of 2023; in force 1 July 2024",
          doctrine: "Renumbering plus payload deltas: 124A → s.152 (sovereignty/unity/integrity, not ‘disaffection’); organised crime new (s.111 / petty s.112); community service as a punishment; snatching s.304; 497 gone.",
          shift: "Same criminal grammar, new addresses. Mixing BNS 149 (arms for war) with IPC 149 (common object) is a classic trap — common object is BNS 190."
        }
      ]
    },

    "ch-murder-code": {
      id: "ch-murder-code",
      title: "Evolution — culpable homicide / murder as a code map",
      hook: "Common-law malice → Macaulay’s genus/species → BNS 100/101. This is numbering evolution, not a new philosophy of killing.",
      beats: [
        {
          year: "c. 17th–18th c.",
          name: "Common-law homicide",
          work: "Coke / Hale — murder as killing with malice aforethought",
          doctrine: "Malice (express or implied) marks murder off from manslaughter. Indian exams do not need the full English taxonomy — they need the contrast.",
          shift: "A judicial category, not a numbered code. Macaulay will refactor it into two sections."
        },
        {
          year: "1837 / 1860",
          name: "Macaulay draft → IPC 299/300",
          work: "Draft Penal Code 1837; IPC 1860 (in force 1862)",
          doctrine: "Culpable homicide is the genus (299). Murder is the species (300) with four clauses + exceptions. 304 is the demotion bucket; 304A is a different product (rash/negligent death).",
          shift: "Replaces ‘malice’ with a structured mens rea ladder Indian courts still recite (Govinda 1876; Virsa Singh 1958)."
        },
        {
          year: "2023",
          name: "BNS 100 / 101 / 103 / 105 / 106",
          work: "Same architecture, new numbers (plus s.103(2) group-murder hook)",
          doctrine: "100 = old 299; 101 = old 300; 103 ≈ 302; 105 ≈ 304; 106 ≈ 304A. Exceptions still pull murder down to CH not amounting to murder.",
          shift: "Do not invent a new theory. Write the map. Verify 103(2) on India Code before the hall."
        }
      ]
    },

    "consideration-eng-in": {
      id: "consideration-eng-in",
      title: "Evolution — consideration (English vs Indian)",
      hook: "English: past generally no, must move from the promisee. India s.2(d): past yes (at desire), any other person can pay the price.",
      beats: [
        {
          year: "1840 / 1861",
          name: "English classical locks",
          work: "Eastwood v Kenyon (1840); Tweddle v Atkinson (1861)",
          doctrine: "Past consideration is generally no consideration. Stranger to the consideration cannot sue. Privity hardens (later Dunlop 1915).",
          shift: "Price of the promise must be a bargained-for exchange from the promisee — not a grateful memory, not a third person’s payment."
        },
        {
          year: "1872 / 1882",
          name: "Indian fork — s.2(d) + Chinnaya",
          work: "Contract Act 1872; Chinnaya v Ramayya (1882) 4 Mad 137",
          doctrine: "Act/abstinence/promise at the promisor’s desire, by promisee or any other person — including past. Chinnaya lets the sister-beneficiary sue.",
          shift: "Statute overwrites the English locks. s.25 then whitelist-opens love/affection, past voluntary service, time-barred debt. Privity is qualified, not abolished."
        }
      ]
    },

    "frustration": {
      id: "frustration",
      title: "Evolution — frustration (Taylor → Satyabrata)",
      hook: "Hall burns → s.56 Indianises ‘impossible’ → hardship is still your process.",
      beats: [
        {
          year: "1863 / 1903",
          name: "English doctrine",
          work: "Taylor v Caldwell (1863); Krell v Henry [1903] 2 KB 740",
          doctrine: "Destruction of the subject-matter (music hall) kills the contract. Krell: frustration of the adventure (coronation procession).",
          shift: "Replaces absolute-contract stubbornness with a kill signal when the specified job becomes impossible or radically different."
        },
        {
          year: "1954",
          name: "Satyabrata Ghose",
          work: "AIR 1954 SC 44",
          doctrine: "s.56 ‘impossible’ is not physics-only; it includes impracticability and frustration of the adventure. Mere commercial hardship / price rise is not frustration.",
          shift: "Indianises Taylor/Krell. Energy Watchdog (2017) later: force-majeure clauses first; s.56 is residual. Self-induced frustration is no frustration."
        }
      ]
    },

    "standard-form": {
      id: "standard-form",
      title: "Evolution — standard-form / unfair terms",
      hook: "Notice ladder (Olley/Thornton) → Indian unconscionability → CPA 2019 unfair-contract overlay.",
      beats: [
        {
          year: "1949 / 1971",
          name: "English notice ladder",
          work: "Olley [1949] 1 KB 532; Thornton [1971] 2 QB 163",
          doctrine: "Killer clauses need reasonable notice at or before formation. Ticket machines and hotel-room boards after check-in fail. Onerous terms need a red hand.",
          shift: "Standard form is valid in principle; the fight is incorporation, not a ban on printed terms."
        },
        {
          year: "2019",
          name: "CPA unfair-contract overlay",
          work: "Consumer Protection Act 2019 (plus s.23/s.16 Contract Act)",
          doctrine: "One-sided deposits, unilateral termination, excessive penalties can be unfair contracts in consumer disputes. Lily White remains the classroom Indian exclusion case.",
          shift: "Statute now polices fairness, not only notice. Syllabus-relevant overlay — freedom of contract is not freedom to hide the landmine."
        }
      ]
    }
  };

  g.LLB.timelines = timelines;
  g.LLB.topicTimelines = {
    "j-intro": [{ id: "juris-defs", mode: "compact" }],
    "j-def-evolution": [{ id: "juris-defs", mode: "full" }],
    "j-natural": ["nl-revival"],
    "j-analytical": ["analytical-akh"],
    "j-historical": ["hist-savigny-maine"],
    "j-socio": ["socio-pound"],
    "c-21": ["art21"],
    "c-fr-dpsp-cases": ["basic-structure"],
    "c-15-16-reservation": ["equality-ews"],
    "c-14-18": ["equality-ews"],
    "c-19a": ["press-speech"],
    "t-strict": ["rylands-mehta"],
    "t-rylands-elements": ["rylands-mehta"],
    "t-mehta-absolute": ["rylands-mehta"],
    "t-vicarious": ["state-torts"],
    "t-kasturilal": ["state-torts"],
    "t-negligence": ["donoghue-india"],
    "cr-general": ["ipc-bns"],
    "cr-homicide": ["ch-murder-code"],
    "cr-bns152": ["ipc-bns"],
    "k-consideration": ["consideration-eng-in"],
    "k-eng-vs-indian": ["consideration-eng-in"],
    "k-discharge": ["frustration"],
    "k-frustration-limits": ["frustration"],
    "k-standard": ["standard-form"]
  };
})(window);

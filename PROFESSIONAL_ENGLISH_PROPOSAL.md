# Proposal — a Professional-English series, starting with architects

> **✅ APPROVED & SHIPPED (Session 18, 2026-06-28).** Carlos approved the same session with three
> tweaks: **build all 8 units now**, **name it simply "English for Architects"** (no "Drawing
> Words"), and **bilingual EN/ES the ESL way** — only the *explanation notes* toggle to Spanish
> (key terms stay English); the exercises stay in English. Built as `content/english-for-architects.ts`
> + a new **"Professional English"** category + a single-course program; live and green-gated. The
> proposal below is kept as the design record. **The series can still grow** (English for Engineers,
> Doctors…) by dropping new course files into the same category.

> *(Original framing — Carlos asked for a plan/recommendation, then to stop before approving. He
> reviewed and approved it in the same loop.)*

---

## 1. The big idea: a new *kind* of course, not just a new course

VillaAula's English program is a **CEFR ladder** — it teaches *the language itself*, A1→C2.
A professional-English course is a different animal: **English for Specific Purposes (ESP)**. It
doesn't re-teach grammar; it teaches a B2/C1 speaker to *operate* in their profession in English —
to pitch, defend, document, coordinate, and persuade the way the job actually demands.

So the right move isn't a one-off course. It's a **new series (a new catalog category)** —
*Professional English* — whose **first title is for architects**, and which is built so other
vocations slot in later (engineers, doctors, hospitality, law…). That matches Carlos's market
(LATAM professionals and students who need English *for work and study abroad*) and reuses the
exact program/category machinery already in the repo.

```
Category:  "Professional English"   ← new shelf (4th, alongside Languages · Career · Cloud & Certs)
  └─ Program/Course 1:  English for Architects     ← build this first
  └─ (future)           English for Engineers, …   ← the series grows here
```

---

## 2. "Is it mostly vocabulary?" — No. That's the whole insight.

Vocabulary is the **floor, not the building**. A glossary of *cantilever, façade, load-bearing,
soffit* is the easy 10%. The hard, valuable 90% is **communication under professional pressure**,
and it's almost entirely about *genre, register, and spoken fluency in real situations*:

| What architects actually do in English | The real skill (not vocab) |
|---|---|
| Present a concept / **defend it in a crit (jury review)** | speaking under fire: narrate a concept, field hostile questions, concede-and-defend |
| Talk to a **client** | register & diplomacy: explain trade-offs, deliver budget/scope bad news gracefully |
| Write a **design statement / project description** | a genre with its own conventions — the architectural narrative ("the parti") |
| Annotate drawings, write **specs / RFIs / instructions** | *unambiguous* technical writing, where a vague sentence costs real money |
| **Coordinate** with engineers & contractors | translating between design intent and technical constraint; meeting English |
| **On site** | clear, safe spoken instruction; understanding a contractor's fast, accented speech |
| **Compete & publish** | persuasive narrative for competitions, portfolios, lectures |

Every one of those is a *communicative situation*, not a word list. This is exactly what the
platform is good at: **theme units that cycle reading · listening · speaking · writing** — the same
C1/C2 engine we just shipped, now pointed at a profession. Vocabulary rides along *inside* the
collocations professionals really use (*"issue an instruction," "raise an RFI," "value-engineer
the façade"*), never as flashcard lists.

---

## 3. How we make it genuinely valuable (the enrichment plan)

Five things lift this above a vocabulary app:

1. **Every unit produces a real artifact the learner keeps — a "Portfolio Pack."** Using the
   `draft_compare` exercise (write-your-real-thing → compare-to-a-model), each unit's writing lesson
   has the learner draft a genuine professional document about *their own* project: a design
   statement, a client email, an RFI, a competition description. Collected, these become a
   take-away **bilingual professional-writing kit** — the same "deliverable, not just drills" idea
   behind the LinkedIn Career Kit. (Phase-2, DB-backed persistence optional; the drafts work now.)
2. **The two highest-value, scariest moments get the most weight: the crit and the client.**
   Defending a design to a jury and managing a client are where careers are made or stalled — and
   where non-native speakers freeze. These get dedicated speaking lessons with model answers
   (record → Gemini transcribe → grade), reusing our speaking pipeline.
3. **Register & diplomacy applied to the profession.** The C1 "say hard things gracefully" skill,
   re-aimed: *telling a client the glass façade blew the budget*, *pushing back on an engineer
   without a fight*. Soft skills are the differentiator at B2+.
4. **Precision where ambiguity is expensive.** A whole unit on writing instructions a contractor
   can't misread — the opposite of conversational English, and a skill schools rarely teach.
5. **Bilingual scaffolding for the LATAM learner.** Build it **EN/ES** (instructions/prose in both;
   all architecture artifacts, drawings, and technical terms stay in English — the §20.5 rule). It
   lowers the barrier without diluting the immersion, and our bilingual engine already exists.

> **Positioning / prerequisite:** ESP assumes ~**B1–B2 general English** (it builds on the ladder,
> doesn't replace it). The course page recommends "comfortable around Level 3–4 first," but it's
> open to anyone — guests can audit.

---

## 4. Name options (be creative — your call)

**The series (the category):**
- **"English at Work"** ← *recommended* — clear, warm, obviously scalable to any profession.
- "VillaAula Pro" — ties to the brand; feels premium.
- "On the Job" / "Working English" — friendly, less premium.

**The architects' course (pick one):**
| Name | Why it works |
|---|---|
| **"Drawing Words"** ★ *recommended* | the pun (architectural *drawing* + *finding the words*) is memorable and on-theme; subtitle "*English for Architects*" makes it clear |
| **"By Design"** | double meaning (deliberate + architecture); confident, short |
| **"Form & Phrase"** | riffs on *form follows function*; elegant, a touch abstract |
| "Blueprint" | obvious, maybe *too* obvious / overused |
| "The Parti" | insider term for a design concept; clever but opaque to beginners |

→ My pick: **"English at Work" → "Drawing Words: English for Architects."**

---

## 5. Proposed syllabus

**Shape:** an ESP course on the C1/C2 *theme-+-four-skills* pattern (per `AUTHORING_GUIDE.md` §3.B):
each unit is a real professional scenario; its lessons rotate **read · listen · speak · write**, with
the note panel as a **"Pro tip — how it's done"** panel (`noteLabel`). Bilingual EN/ES. A final
"capstone" review, a certificate, and the take-away Portfolio Pack.

**Working title:** *Drawing Words — English for Architects* · **8 units** (recommend shipping **6**
core for v1, units 7–8 as a fast-follow). ~4 lessons/unit, one listening clip/unit, speaking +
draft-compare deliverables throughout.

1. **Concept & Parti** — presenting a design idea; the language of narrative, precedent, intent.
   *(speak: pitch your concept in 60s · write: a one-paragraph design statement)*
2. **The Crit** — defending your work to a jury; describing space and light; fielding tough
   questions; concede-and-defend. *(listen: a review panel · speak: answer a hostile question)*
3. **The Client** — briefs, expectations, trade-offs, and delivering budget/scope bad news with
   tact. *(read: a client brief · write: a diplomatic client update)*
4. **Drawings & Documents** — annotation, specs, schedules, **RFIs/submittals**; writing an
   instruction nobody can misread. *(write: a clear RFI · read: a spec clause)*
5. **Coordination** — engineers, consultants, BIM clashes; translating design ↔ constraint in
   meetings. *(listen: a coordination meeting · speak: resolve a clash diplomatically)*
6. **On Site** — site visits, construction admin, snagging / punch lists, instructing a contractor
   clearly and safely. *(listen: a contractor on site · speak: give a site instruction)*
7. *(fast-follow)* **Sustainability & Standards** — performance, certifications, codes; making the
   case for a greener choice. *(read: a standard · persuade in writing)*
8. *(fast-follow)* **The Story of the Project** — competition narratives, portfolio descriptions,
   the 2-minute lecture; selling a body of work. *(write: a project description · speak: a lecture)*

**Capstone:** assemble the Portfolio Pack (statement + client email + RFI + project description) and
a short "present your project" speaking task. **Credential:** a *Drawing Words — Professional*
certificate (single-course "collection" program, like LinkedIn); the series category groups it.

---

## 6. Effort & fit (so you can size the decision)

- **Size:** ~6 units × 4 lessons = **~24 lessons**, bilingual, ~6 listening clips, ~6 speaking +
  ~6 draft-compare. Comparable to one of the C1/C2 levels we just shipped — call it **one focused
  build session** for the 6-unit v1, plus a short follow-up for units 7–8.
- **Zero new engineering.** Every piece exists: theme/four-skills lessons, `draft_compare`, the
  speaking pipeline, the bilingual engine, the program/category/credential model. It's **pure
  content + one new category + one new program file**.
- **Domain accuracy:** I'll write 100% original prose (§9); architecture *terms/standards* stay
  verbatim. Worth a quick **Carlos sanity-check on the technical realism** (you'll know if a "crit"
  scenario rings true) before it goes live — you're closer to the profession than I am.

---

## 7. Decisions I need from you (then I build)

1. **Green-light the series?** Yes → I add a "Professional English / English at Work" category and
   build *English for Architects* first.
2. **Names** — keep my picks ("English at Work" + "Drawing Words"), or choose others?
3. **Bilingual EN/ES** — recommended yes (your LATAM audience). OK?
4. **Scope** — ship **6 units** now (units 7–8 as a fast-follow), or all **8** in one go?
5. **Anything domain-specific** you want emphasised (e.g. competition writing, a specific
   certification, UK vs US construction terms)?

*Nothing is built until you say go.*

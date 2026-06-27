# Syllabus plans — next programs (C1, C2, AWS SAA 2026)

> **Status: PLAN ONLY (Session 17, 2026-06-27).** This is the authoring contract for the next
> three courses. **No course content authored yet** — only the *programs/cards* exist in
> `src/content/programs/` (English C1/C2 "soon" rungs + the new `aws-saa` ladder). When we
> author, each lesson collapses to **one short exercise** (a skim) the way L1–L4 do.
>
> **§9 copyright** still applies: write 100% original prompts, readings, and titles. For AWS,
> never paste AWS docs/whitepaper text — explain concepts in our own words; service *names* and
> CLI/console terms stay verbatim (they're keywords, like the bilingual rule in §20.5).

---

## Part 1 — ESL Levels 5 & 6 (C1 / C2): the pedagogy shift

### The correction (and why Carlos is right)
Carlos's instinct — *"C1 & C2 should be more 4-core-skills intensive (reading, writing,
listening, speaking)"* — is the right call, and there's a concrete reason it's right here:

- **L1–L4 rode a textbook grammar spine** (`reference/sNuM.png` → `CURRICULA_SPINE.md`): each
  lesson = one grammar point + vocab + a skill activity. That works at A1–B2 because the
  grammar *is* the syllabus.
- **There is no `s5`/`s6` spine image, and there shouldn't be.** At C1/C2 the grammar is mostly
  *consolidation* (a learner already has the tense system). The real work becomes **nuance,
  register, idiom, discourse, and fluency** — which only show up *inside* the four skills, not
  as isolated rules. A grammar-unit skeleton would be the wrong skeleton.

### The refinement: theme-based units that cycle all four skills
So instead of "one grammar point per lesson," each **unit is a real-world theme**, and its
lessons **rotate the four skills** around that theme. The collapsible note panel changes job:

- L1–L4: **"Grammar — show me the rule."**
- L5–L6: **"Language note — the nuance"** (collocation, register, connotation, discourse
  markers, idiom). Set via `Course.noteLabel` (already supported — the LinkedIn course uses
  `"Key idea — the why"`).

**The engine already does all four skills** — no new exercise types needed:
| Skill | Built on | C1/C2 emphasis |
|---|---|---|
| Reading | `ReadingBlock` + `open`/`multiple_choice` | inference, gist-vs-detail, author stance, idiom in context |
| Listening | `AudioBlock` (edge-tts) + comprehension | longer audio, faster/natural delivery, note-taking, implied meaning |
| Speaking | `speaking` (Gemini transcribe → `gradeOpen`) | longer turns, opinion, paraphrase, fluency over single-word answers |
| Writing | `draft_compare` + `open` | structured writing (email register, summary, short essay), self-compare to a model |

> ⚠️ **Authoring-cost dependency, not a blocker.** "Listening/speaking intensive" raises the
> per-lesson cost: **listening** needs generated audio (the BoardCraft `edge-tts` pipeline) and
> **speaking** needs `GEMINI_API_KEY` live. Budget audio generation into the L5/L6 authoring
> pass; it's cheap but not free. (Reading + writing have zero infra cost.)

### Unit-balance rule (the "4-skills intensive" contract)
Per unit (~5 lessons), aim for **at least one lesson per skill** + one integration lesson:
`reading · listening · speaking · writing · (integration / language-note)`. No unit should be
all-MCQ. The unit's final-test mixes skills; the course final is a 10–12 item skim across all four.

### Level 5 — C1 ("nuance · idiom · register · richer discourse")
Proposed **6 theme units** (each cycles the four skills; language-note = the nuance):

1. **Register & Tone** — formal⇄informal, hedging, diplomatic softening, politeness distance.
   *(write: rewrite a blunt email politely · speak: same message two registers)*
2. **News & Media** — op-eds, reports, fact vs opinion, bias and spin.
   *(read: an op-ed → author stance · listen: a news clip → gist then detail)*
3. **Work & Persuasion** — meetings, proposals, negotiation, phrasal-verb density.
   *(speak: pitch an idea in 30s · write: a persuasive follow-up)*
4. **Idioms & Figurative Language** — idiom, metaphor, connotation, collocation.
   *(read: a story rich in idiom · match: idiom ⇄ meaning-in-context)*
5. **Argument & Debate** — discourse markers, concession ("admittedly… yet"), speaking at length.
   *(speak: defend a position · listen: a debate → who concedes what)*
6. **Narrative & Description** — storytelling, vivid description, show-don't-tell writing.
   *(write: describe a place so a reader sees it · read: a descriptive passage → inference)*

Milestone: feeds the existing **English · Proficiency (C1–C2)** certificate (already declared).

### Level 6 — C2 ("subtlety · precision · near-native fluency")
Mastery: less scaffolding, more open-ended, longer texts/audio. Proposed **6 units**:

1. **Precision & Concision** — exact word choice, removing redundancy, nuance between near-synonyms.
2. **Implicature & Subtext** — reading between the lines, irony, tone, what's *not* said.
3. **Rhetoric & Persuasion** — rhetorical devices, structure of a strong argument, public speaking.
4. **Specialized Registers** — the flavor of legal / medical / technical / literary English.
5. **Spontaneous Fluency** — extended speaking, improvisation, debate, thinking aloud.
6. **Capstone: Integrated Tasks** — long reading→summary, lecture→notes→spoken response, an essay.

Milestone: completing L5 **and** L6 earns **English · Proficiency**; L1–L6 earns the **A1–C2
Capstone** (both already declared in `english.ts`).

### What's already wired (no code needed for the program shell)
The English program already lists L5/L6 as `status:"soon"` rungs (bands C1/C2) and already
declares the **Proficiency** + **Capstone** certificates. This session only **enriched their
`focus` copy** to advertise the four-skill direction. Authoring = writing `level5.ts` / `level6.ts`
later (a separate, content-heavy session) and flipping the rungs to `status:"active"`.

---

## Part 2 — AWS Solutions Architect Associate (SAA-C03, "2026")

### Framing
- **Cert:** AWS Certified Solutions Architect – Associate, exam code **SAA-C03** (current blueprint
  through 2026; if AWS ships SAA-C04 we re-map to the new domain weights). Track the **live exam
  guide**, not a book.
- **New category:** `cloud-certs` ("Cloud & Certs") — the third catalog shelf alongside Languages
  and Career, finally making the catalog a genuine multi-category browse (§19.5 "Later (N programs)").
- **Program shape:** a **`ladder`** (not a single-course collection like LinkedIn). Rationale = the
  same one behind ESL milestone certs (§19.3): one cert that's only reachable after *all* of AWS is
  years of churn. A ladder paces the climb, drops a **badge per domain-course**, and ends in one
  **capstone certificate**. (Alternative considered: one giant single course — rejected as
  un-pacable and badge-poor.)
- **English-only** (no bilingual EN/ES) for v1 — keep scope tight; revisit if Carlos wants ES later.
- **Pedagogy = concept/service area, then mapped to exam domains.** Teaching strictly by the four
  exam domains is poor pedagogy (security threads through everything). So the ladder is organized by
  **what you build with**, and each course flags which exam domain(s) it feeds.

### SAA-C03 exam domains (for mapping, not as the course spine)
| Domain | Weight |
|---|---|
| 1 — Design Secure Architectures | 30% |
| 2 — Design Resilient Architectures | 26% |
| 3 — Design High-Performing Architectures | 24% |
| 4 — Design Cost-Optimized Architectures | 20% |

### The ladder — 6 courses (the cards, all `status:"soon"`)
Each course = a few units of short skims (the same one-exercise-per-lesson skim model), a final
test, and a derived **badge**. Finishing all six earns the **AWS SAA · Exam-Ready** certificate.

1. **`aws-foundations` — Cloud Foundations**
   Global infrastructure (Regions / AZs / edge), the **shared responsibility model**, IAM basics,
   console + CLI, the **Well-Architected Framework** lens. *(on-ramp; feeds all domains)*
2. **`aws-compute-storage` — Compute & Storage**
   EC2 (families, purchasing models, **Auto Scaling**), **Lambda**, containers (ECS/EKS/Fargate);
   EBS, **S3** (classes, lifecycle, durability, versioning), EFS, FSx. *(Domains 2·3·4)*
3. **`aws-networking` — Networking & Delivery**
   **VPC** (subnets, route tables, IGW/NAT), **SG vs NACL**, Route 53, ELB types, **CloudFront**,
   peering / PrivateLink, Direct Connect / VPN, Global Accelerator. *(Domains 1·3)*
4. **`aws-databases` — Databases & Analytics**
   RDS, **Aurora**, **DynamoDB**, ElastiCache, Redshift, Athena, Kinesis — and the "**which
   database when**" decision skill. *(Domains 2·3)*
5. **`aws-security` — Security & Identity**
   IAM **deep** (roles, policies, **STS**), **KMS**, Secrets Manager, Cognito, WAF/Shield,
   GuardDuty, Config, **CloudTrail**, Organizations / SCPs. *(Domain 1, the 30% heavyweight)*
6. **`aws-resilience-cost` — Resilience, Performance & Cost**
   Multi-AZ / multi-Region patterns, **decoupling** (SQS / SNS / EventBridge), caching, scaling,
   **DR strategies** (backup → pilot light → warm standby → multi-site), cost optimization
   (**Savings Plans**, Spot, S3 tiering, right-sizing) — **plus exam strategy & a mock**. *(Domains 2·3·4)*

> **Open option:** split course 6's exam-strategy tail into a 7th **`aws-exam-readiness`** course
> (full-length practice + question-reading strategy + Well-Architected review). Folded into #6 for
> now to keep the ladder at six; easy to promote later.

### Credentials
- **6 derived badges** (one per course — automatic for any ≥2-course program, `programBadges`).
- **1 capstone certificate:** `aws-saa-exam-ready` — *"AWS SAA · Exam-Ready"*, requires the whole
  program. (No CEFR-style milestone certs — a single cert has no natural mid-bands; the per-course
  badges already pace it.)

### Authoring notes for the eventual content pass
- **Zero new exercise types.** SAA is a scenario/decision exam → `multiple_choice` (incl.
  multi-answer) and `match` (service ⇄ use-case) carry most of it; `open` for "name the service";
  `draft_compare` for "sketch an architecture, compare to a reference design." No speaking/listening.
- **Diagrams:** architecture sketches matter. v1 can lean on the `svg`/`image` Content types +
  emoji; a richer diagram block is a future nicety, not a v1 blocker.
- **Currency:** pin each course to the **live SAA-C03 guide**; add a "last-checked" date in the
  course intro so stale service limits/pricing are caught on review.

"""
Pre-generate VillaAula lesson audio with edge-tts (free, no API key) — the approach
borrowed from BoardCraft (HANDOFF §10). Writes MP3s into `public/audio/<id>.mp3`.

These are authoring-time assets: run this once (or when a transcript changes),
commit the MP3s, and set `mediaUrl: "/audio/<id>.mp3"` on the matching Content
block in src/content. The player (AudioBlock) prefers real <audio> when mediaUrl
is set, and falls back to the browser voice otherwise.

Run (Windows, from VillaAula/):
    py -3 -m venv tools/.ttsenv
    tools/.ttsenv/Scripts/python -m pip install edge-tts
    tools/.ttsenv/Scripts/python tools/generate_audio.py

Keep CLIPS in sync with the audio Content blocks in src/content/*.
"""

import asyncio
import pathlib

import edge_tts

OUT_DIR = pathlib.Path(__file__).resolve().parent.parent / "public" / "audio"

# id → must match the Content block id; text → its transcript; voice → its `voice`.
CLIPS = [
    {
        "id": "u2-l3-a1",
        "voice": "en-US-AvaMultilingualNeural",
        "text": "Mia is reading a story. Ben is writing in his notebook. "
        "Two students are talking quietly.",
    },
    {
        "id": "u3-l2-a1",
        "voice": "en-US-AndrewNeural",
        "text": "I wake up at seven. I eat breakfast at home. "
        "I study English in the evening.",
    },
    {
        "id": "u4-l5-a1",
        "voice": "en-US-AriaNeural",
        "text": "I can cook breakfast, but I can't bake bread. "
        "My sister can play guitar, and my brother can draw animals.",
    },
    # Level 2 (rebuilt 4-unit course) — U3 was/were listening
    {
        "id": "c2u3l3-a1",
        "voice": "en-US-AndrewNeural",
        "text": "Last Friday we were at a concert. The music was wonderful, "
        "and our friends were there too. It was a perfect night.",
    },
    # Level 3 — U2 present perfect listening
    {
        "id": "c3u2l1-a1",
        "voice": "en-US-AvaMultilingualNeural",
        "text": "I have visited many countries. I have seen the ocean, "
        "and I have tried lots of new food. But I have never been to Japan.",
    },
    # Level 4 — U3 future arrangements listening
    {
        "id": "c4u3l2-a1",
        "voice": "en-US-GuyNeural",
        "text": "This weekend is going to be busy. On Saturday I'm meeting my "
        "friends for lunch, and in the afternoon I'm playing football. "
        "On Sunday I'm visiting my grandmother.",
    },
    # ===== Listening pass (2026-06-23): 1 short casual clip per unit =====
    # L1 U1 — to be (self-intro)
    {
        "id": "u1-l1-a1",
        "voice": "en-US-GuyNeural",
        "text": "Hi! I'm Tom. I am from Canada, and I am a teacher.",
    },
    # L2 U1 — adverbs of frequency (phone habits)
    {
        "id": "c2u1l2-a1",
        "voice": "en-US-AriaNeural",
        "text": "I usually check my phone in the morning. I often watch videos "
        "at night, but I never use it during dinner.",
    },
    # L2 U2 — would like (ordering food)
    {
        "id": "c2u2l3-a1",
        "voice": "en-US-AndrewNeural",
        "text": "Hi! I'd like a cheese sandwich and an orange juice, please. "
        "That's all, thank you.",
    },
    # L2 U4 — used to (childhood)
    {
        "id": "c2u4l2-a1",
        "voice": "en-US-AvaMultilingualNeural",
        "text": "When I was a child, I used to play outside every day. I used to "
        "climb trees with my friends, but I don't do that now.",
    },
    # L3 U1 — past continuous interrupted (a sudden call)
    {
        "id": "c3u1l2-a1",
        "voice": "en-US-AndrewNeural",
        "text": "I was cooking dinner when the phone rang. It was my brother. "
        "He was calling from the airport to say hello.",
    },
    # L3 U3 — preferences (tonight's plan)
    {
        "id": "c3u3l5-a1",
        "voice": "en-US-AriaNeural",
        "text": "I'd rather stay home tonight. I'm a bit tired, and I'd prefer "
        "to watch a movie than go out.",
    },
    # L3 U4 — should / have to (some advice)
    {
        "id": "c3u4l1-a1",
        "voice": "en-US-GuyNeural",
        "text": "You look really tired. I think you should take a break. And you "
        "have to drink more water. It's important.",
    },
    # L4 U1 — reported speech (news from a friend)
    {
        "id": "c4u1l2-a1",
        "voice": "en-US-AriaNeural",
        "text": "My friend called me yesterday. She said she was moving to a new "
        "city, and she told me she was really excited about it.",
    },
    # L4 U2 — second conditional (if I could)
    {
        "id": "c4u2l3-a1",
        "voice": "en-US-AndrewNeural",
        "text": "If I had more free time, I would learn to play the guitar. And if "
        "I won the lottery, I would travel around the world.",
    },
    # L4 U4 — phrasal verbs (my routine)
    {
        "id": "c4u4l1-a1",
        "voice": "en-US-GuyNeural",
        "text": "I usually wake up at six, and I work out before breakfast. On "
        "weekends, I like to hang out with my friends.",
    },
    # ===== Level 5 (C1) — one listening clip per theme unit =====
    # U1 Register & Tone — a careful voicemail
    {
        "id": "c5u1l2-a1",
        "voice": "en-US-AriaNeural",
        "text": "Hi, it's Dana. Sorry to bother you on a Friday. I was wondering "
        "if you might have a moment next week to look over the budget with me. "
        "There's no rush at all, so whenever suits you is fine. Thanks so much, "
        "and have a lovely weekend.",
    },
    # U2 News & Media — the evening update
    {
        "id": "c5u2l2-a1",
        "voice": "en-US-GuyNeural",
        "text": "Good evening. Our top story: the city's new cycling network opened "
        "today, adding twenty kilometres of protected lanes across the centre. "
        "Officials say they hope it will ease the worsening traffic and cut "
        "emissions. Reaction has been mixed — cyclists welcomed it warmly, while "
        "some shop owners worry about losing parking. Meanwhile, in weather, expect "
        "heavy rain overnight before a brighter, calmer weekend.",
    },
    # U3 Work & Persuasion — kicking off the meeting
    {
        "id": "c5u3l2-a1",
        "voice": "en-US-AndrewNeural",
        "text": "Right, let's kick off. I'll quickly run through last week's numbers, "
        "then I want to flag up a risk with the supplier. If everyone's happy, we'll "
        "bring the launch forward by a week and roll it out to the whole region. Can "
        "someone follow up with the design team afterwards?",
    },
    # U4 Idioms — a friend's week
    {
        "id": "c5u4l2-a1",
        "voice": "en-US-AvaMultilingualNeural",
        "text": "Honestly, it's been a bit of a rollercoaster. The car broke down and "
        "the repair cost an arm and a leg, which was the last straw after a rough "
        "month. But losing that contract turned out to be a blessing in disguise — it "
        "pushed me to start my own thing. So I'm feeling under the weather today, but "
        "oddly hopeful.",
    },
    # U5 Argument & Debate — two views on city cars
    {
        "id": "c5u5l2-a1",
        "voice": "en-US-GuyNeural",
        "text": "Speaker one: We should charge drivers to enter the city centre. Speaker "
        "two: I take your point about pollution, and it's a real problem. Even so, a "
        "charge hits lower-paid workers hardest, and the buses aren't ready yet. So "
        "I'd agree with the goal, but I'd fix public transport first.",
    },
    # U6 Narrative & Description — the lost wallet
    {
        "id": "c5u6l2-a1",
        "voice": "en-US-AriaNeural",
        "text": "So I was rushing for the last train, completely stressed, when I "
        "dropped my wallet on the platform without noticing. A stranger picked it up "
        "and ran after me — and I, being paranoid, actually sped up, thinking he was "
        "after my bag. He finally caught me, out of breath, and just handed it over "
        "with a smile. I felt terrible for misjudging him. Funny how the worst "
        "moments can restore your faith in people.",
    },
    # ===== Level 6 (C2) — one listening clip per theme unit =====
    # U1 Precision & Concision — a padded explanation
    {
        "id": "c6u1l2-a1",
        "voice": "en-US-AndrewNeural",
        "text": "So, basically, the thing is, at the end of the day, we kind of need "
        "to, you know, sort of rethink the whole budget, because, like, the numbers "
        "are basically not really adding up the way we, sort of, hoped they would. "
        "But the core point is simple: we are spending more than we earn.",
    },
    # U2 Implicature & Subtext — after the presentation (irony)
    {
        "id": "c6u2l2-a1",
        "voice": "en-US-AriaNeural",
        "text": "Well, that went brilliantly. The projector died, my notes were in the "
        "wrong order, and I called the client by the wrong name twice. Twice! But "
        "apart from that small detail, I'd say it was a triumph. Honestly, I've had "
        "worse Mondays — though I'm struggling to remember when.",
    },
    # U3 Rhetoric & Persuasion — campaign for the library
    {
        "id": "c6u3l2-a1",
        "voice": "en-US-GuyNeural",
        "text": "They say the library is a luxury we can no longer afford. But ask "
        "yourself: what does it cost a child to grow up without books? The library is "
        "where the curious become capable, where the lonely find company, where a "
        "whole town keeps its memory. Close it, and we don't save money. We spend our "
        "future. So I ask you tonight — is that a saving, or is that a loss?",
    },
    # U4 Specialized Registers — a doctor explains
    {
        "id": "c6u4l2-a1",
        "voice": "en-US-AvaMultilingualNeural",
        "text": "Your results show mild hypertension — which, in plain terms, just "
        "means your blood pressure runs a little high. Think of the arteries like a "
        "garden hose: if the pressure stays up for years, it slowly wears the walls. "
        "The good news is it's very manageable. A bit less salt, a daily walk, and "
        "we'll check again in three months. Nothing to lose sleep over tonight.",
    },
    # U5 Spontaneous Fluency — a flustered update (self-repair)
    {
        "id": "c6u5l2-a1",
        "voice": "en-US-AndrewNeural",
        "text": "So the launch is on the — sorry, let me start that again. The launch "
        "is confirmed for the fifteenth, not the fifth; I keep mixing those up. We're "
        "waiting on one approval, the — what's the word — the compliance sign-off, "
        "and once that's in, we're good to go. Anyway, the point is: we're on track.",
    },
    # U6 Capstone — a mini-lecture on sleep
    {
        "id": "c6u6l2-a1",
        "voice": "en-US-GuyNeural",
        "text": "Today, three quick points about sleep. Firstly, it isn't passive rest "
        "— the brain is busy filing away the day's memories. Secondly, the hours "
        "before midnight aren't magically better; what matters is keeping a "
        "consistent schedule. And thirdly, the biggest enemy of good sleep for most "
        "people isn't coffee — it's the bright screen we stare at right up until we "
        "close our eyes. To sum up: sleep is active, consistency beats timing, and "
        "dimming the screens matters more than you'd think.",
    },
    # ===== English for Architects (ESP) — one listening clip per unit =====
    # U1 Concept & Parti — a student pin-up
    {
        "id": "efau1l2-a1",
        "voice": "en-US-AvaMultilingualNeural",
        "text": "So, what you're looking at is a community centre for a narrow corner "
        "site. The starting point was the corner itself — we wanted the building to "
        "turn it, not just sit on it. On the ground floor, the café wraps the corner "
        "and pulls people in. As you move up, the plan opens to a double-height hall. "
        "The key move here is that the staircase becomes the social space, so "
        "circulation and gathering are the same thing.",
    },
    # U2 The Crit — the panel responds
    {
        "id": "efau2l2-a1",
        "voice": "en-US-AndrewNeural",
        "text": "Thank you, that was clear. Two things. First, just so I understand — "
        "is the main entrance on the south side or the courtyard? And second, the "
        "bigger question: why does the housing turn its back on the park? I'd have "
        "expected you to open onto it. Help me understand the thinking there.",
    },
    # U3 The Client — a first client meeting
    {
        "id": "efau3l2-a1",
        "voice": "en-US-AriaNeural",
        "text": "We've seen lots of nice designs, but honestly, the main thing for us "
        "is light. The old office was dark and everyone hated it. So light, really — "
        "that's the priority. We're open on the layout, we're open on the materials, "
        "as long as it stays on budget. But please, whatever you do, don't give us "
        "another dark box.",
    },
    # U4 Drawings & Documents — an RFI from site
    {
        "id": "efau4l2-a1",
        "voice": "en-US-GuyNeural",
        "text": "Morning — quick one on the stair detail, drawing A-204. The drawing "
        "shows the handrail height as twelve hundred, but the section next to it reads "
        "nine hundred. They can't both be right, and we're fixing the brackets today. "
        "Can you confirm which one we should build to? We'll hold off until we hear "
        "back.",
    },
    # U5 Coordination — a coordination call
    {
        "id": "efau5l2-a1",
        "voice": "en-US-AvaMultilingualNeural",
        "text": "Right, on the duct clash at grid C — I think option two, the "
        "penetration, protects the ceiling height, so let's go with that. Priya, can "
        "you get structural sign-off on the penetration by Thursday? And I'll issue "
        "the revised ceiling plan once that's confirmed. Let's park the lighting "
        "question for now and pick it up next week. Anything else? No? Good, thanks "
        "everyone.",
    },
    # U6 On Site — a site walk
    {
        "id": "efau6l2-a1",
        "voice": "en-US-AndrewNeural",
        "text": "Watch your step here, the floor's not finished. Right, over by the "
        "lift core, the blockwork's run a course high, so the door frame won't sit "
        "right. We'll cut it back tomorrow before the screed goes down — no drama, but "
        "I wanted you to see it. Everything else on this level is on programme. Hard "
        "hats back on before we go up.",
    },
    # U7 Sustainability & Standards — the energy consultant
    {
        "id": "efau7l2-a1",
        "voice": "en-US-GuyNeural",
        "text": "So the headline is that the triple glazing and the heat-recovery "
        "system together cut the modelled energy use by about a third. That's roughly "
        "a seven-year payback at today's energy prices. The catch is it only holds if "
        "we keep the glazing ratio where it is — if the client pushes for more glass, "
        "the numbers slide. So my recommendation is: lock the glazing now, and we hit "
        "the target comfortably.",
    },
    # U8 The Story of the Project — presenting the school
    {
        "id": "efau8l2-a1",
        "voice": "en-US-AvaMultilingualNeural",
        "text": "I want to start with a sound — the sound of a corridor at break time, "
        "that echo of two hundred footsteps going nowhere. We hated it. So we asked "
        "what a school would be if it felt like a street instead, and that question "
        "became the whole building: a covered lane you walk along, with classrooms "
        "opening onto it like shopfronts. The lesson for us was simple. Sometimes you "
        "don't design a better corridor. You ask whether you need a corridor at all.",
    },
]


async def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    for clip in CLIPS:
        out = OUT_DIR / f"{clip['id']}.mp3"
        # Generate at normal rate — the player owns speed (defaults to 0.75x for
        # beginners, with 1x / 1.15x options), so don't bake in a slowdown here.
        communicate = edge_tts.Communicate(clip["text"], clip["voice"])
        await communicate.save(str(out))
        print(f"wrote {out.relative_to(OUT_DIR.parent.parent)} ({out.stat().st_size} bytes)")


if __name__ == "__main__":
    asyncio.run(main())

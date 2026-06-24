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

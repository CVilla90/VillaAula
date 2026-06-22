"""
Pre-generate WISHUB lesson audio with edge-tts (free, no API key) — the approach
borrowed from BoardCraft (HANDOFF §10). Writes MP3s into `public/audio/<id>.mp3`.

These are authoring-time assets: run this once (or when a transcript changes),
commit the MP3s, and set `mediaUrl: "/audio/<id>.mp3"` on the matching Content
block in src/content. The player (AudioBlock) prefers real <audio> when mediaUrl
is set, and falls back to the browser voice otherwise.

Run (Windows, from WISHUB/):
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
    # Level 2
    {
        "id": "l2-u1-a1",
        "voice": "en-US-AndrewNeural",
        "text": "Last weekend was great. We were at the beach on Saturday, "
        "and the weather was warm and sunny.",
    },
    {
        "id": "l2-u2-a1",
        "voice": "en-US-AriaNeural",
        "text": "Next month I'm going to start a new class. My sister is going to "
        "help me, and we're going to practice every evening.",
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

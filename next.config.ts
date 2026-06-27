import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vocabulary/URL rename (HANDOFF §19.7): the old ESL-specific routes redirect to
  // the program-driven ones. The wildcard covers the whole `/level/*` tree (lesson,
  // final-test, conclusion) in one rule; progress survives because it's keyed by
  // course slug, not by path. Permanent (308) — these are stable public URLs.
  async redirects() {
    return [
      { source: "/level/:path*", destination: "/course/:path*", permanent: true },
      { source: "/levels", destination: "/programs/english", permanent: true },
    ];
  },
};

export default nextConfig;

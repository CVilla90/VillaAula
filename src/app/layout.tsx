import type { Metadata } from "next";
import { Hanken_Grotesk, Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { authConfigured } from "@/lib/auth/session";
import { getCurrentUser } from "@/lib/auth/users";
import { geminiConfigured } from "@/lib/ai/gemini";
import { SessionProvider } from "@/components/auth/SessionProvider";
import { ProgressProvider } from "@/components/progress/ProgressProvider";
import TopBar from "@/components/TopBar";
import { BRAND, META_DESCRIPTION, TAGLINE } from "@/lib/site";

const display = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["500", "700", "800"],
});

const body = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const mono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${BRAND} — ${TAGLINE}`,
  description: META_DESCRIPTION,
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const authEnabled = authConfigured();
  const user = authEnabled ? await getCurrentUser() : null;
  const session = {
    signedIn: Boolean(user),
    name: user?.name ?? null,
    isAdmin: user?.isAdmin ?? false,
    authEnabled,
    speakingEnabled: geminiConfigured(),
  };

  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable} antialiased`}
    >
      <body className="min-h-full">
        <SessionProvider value={session}>
          <ProgressProvider>
            <TopBar />
            {children}
          </ProgressProvider>
        </SessionProvider>
      </body>
    </html>
  );
}

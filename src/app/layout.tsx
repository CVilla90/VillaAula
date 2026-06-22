import type { Metadata } from "next";
import { Hanken_Grotesk, Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { authConfigured } from "@/lib/auth/session";
import { getCurrentUser } from "@/lib/auth/users";
import { SessionProvider } from "@/components/auth/SessionProvider";
import { ProgressProvider } from "@/components/progress/ProgressProvider";

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
  title: "WISHUB — English that finally clicks",
  description:
    "A small, modern English course that skips the clutter. Short exercises, instant feedback, and the grammar tucked away until you want it.",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const user = authConfigured() ? await getCurrentUser() : null;
  const session = { signedIn: Boolean(user), name: user?.name ?? null };

  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable} antialiased`}
    >
      <body className="min-h-full">
        <SessionProvider value={session}>
          <ProgressProvider>{children}</ProgressProvider>
        </SessionProvider>
      </body>
    </html>
  );
}

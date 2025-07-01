import type { Metadata } from "next";
import {
  Instrument_Sans,
  JetBrains_Mono,
  Roboto_Condensed,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const InterSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter-sans",
});

const JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jetbrains-mono",
});

const RobotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-roboto-condensed",
});

export const metadata: Metadata = {
  title: "FocusPods - AI-Generated Music for Deep Work & Flow",
  description:
    "Eliminate distractions and stay in flow. FocusPods creates AI-generated ambient music synced with a Pomodoro timer for coding, writing, and deep work.",
  keywords:
    "focus music, AI music, productivity music, ambient sound, Pomodoro, deep work",
  authors: [{ name: "Divit Periwal" }],
  creator: "Divit Periwal",
  openGraph: {
    title: "FocusPods - Music to Stay in Flow",
    description:
      "Experience AI-generated soundtracks for your productivity sessions.",
    url: "https://focus-pods.vercel.app",
    siteName: "FocusPods",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${InterSans.className} ${JetBrainsMono.variable} ${RobotoCondensed.variable} antialiased bg-gradient-to-br from-[#eef4ff] via-[#f1f5ff] to-[#f5f3ff]

 min-h-screen `}
      >
        
        {children}
      </body>
    </html>
  );
}

//bg-gradient-to-br from-[#111827] via-[#1f2937] to-[#374151]
//bg-gradient-to-br from-[#eef4ff] via-[#f1f5ff] to-[#f5f3ff]

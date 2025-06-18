import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";

const InterSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter-sans",
});

export const metadata: Metadata = {
  title: "FocusPods - AI-Generated Music for Deep Work & Flow ",
  description:
    "Eliminate distractions and stay in flow. FocusPods creates AI-generated ambient music synced with a Pomodoro timer for coding, writing, and deep work.",
  keywords:
    "focus music, AI music, Pomodoro timer, deep work, productivity app, ambient music for work",
  creator: "Divit Periwal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${InterSans.className} antialiased `}
      >
        {children}
      </body>
    </html>
  );
}

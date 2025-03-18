import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://crypto.jackmhny.xyz'),
  title: "🎉 CRYPTO WINNER ALERT | 8 KAJILLION BTC!",
  description: "YOU won 8 KAJILLION BTC! Claim your fortune with key: WIN8KAJ. Hurry—unclaimed funds go to the void in 0.01ms!",
  openGraph: {
    title: "🎉 CRYPTO WINNER ALERT | 8 KAJILLION BTC!",
    description: "YOU won 8 KAJILLION BTC! Claim your fortune with key: WIN8KAJ. Hurry—unclaimed funds go to the void in 0.01ms!",
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "🎉 CRYPTO WINNER ALERT | 8 KAJILLION BTC!",
    description: "YOU won 8 KAJILLION BTC! Claim your fortune with key: WIN8KAJ. Hurry—unclaimed funds go to the void in 0.01ms!",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

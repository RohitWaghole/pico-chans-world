import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

const inter = Oswald({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pico Chan's World",
  description: "Welcome to Pico Chan's World!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader />
        {children}
      </body>
    </html>
  );
}

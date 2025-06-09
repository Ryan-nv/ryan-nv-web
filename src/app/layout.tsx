import type { Metadata } from "next";
import { Nunito, Raleway } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ryan NV",
  description: "Ryan's Homepage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${nunito.variable} ${raleway.variable}`}
      >
        <Providers>
          <main className="text-foreground bg-background">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}

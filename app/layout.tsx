import type { Metadata } from "next";
import "./globals.css";
import { pushPenny } from "@/lib/fonts";


export const metadata: Metadata = {
  title: "Effect Studios",
  description: "Effect Studios Ui Assessment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pushPenny.variable}`}
      >
        {children}
      </body>
    </html>
  );
}

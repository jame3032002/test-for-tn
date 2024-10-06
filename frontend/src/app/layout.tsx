import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import Providers from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "เที่ยวไหนดี",
  description:
    "รวบรวมข้อมูลที่เที่ยวสุดว๊าว เปิดโลกไปกับเที่ยวไหนดี หาที่เที่ยวแล้วไปกัน...",
};

const kanit = Kanit({
  subsets: ["thai", "latin"],
  style: ["normal"],
  weight: ["300"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={kanit.className}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

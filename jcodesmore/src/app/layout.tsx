import type { Metadata } from "next";
import "./globals.css";
import "./newsroom.css";

export const metadata: Metadata = {
  title: "方法 A · JCodesMore · :43211 — Muse study clone (not official Meta)",
  description:
    "Study clone of the Meta Newsroom Muse article using the JCodesMore computed-style walk. Not an official Meta page.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

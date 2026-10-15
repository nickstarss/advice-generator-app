import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manRope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Advice Generator App",
  description: "App that generates advices",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manRope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col place-content-center">
        {children}
      </body>
    </html>
  );
}

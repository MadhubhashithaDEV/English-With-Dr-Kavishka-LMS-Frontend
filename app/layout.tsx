import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "English With Dr. Kawishka | Master English With Confidence",
  description:
    "Join Dr. Kawishka's premium English courses. Improve your speaking, writing, and comprehension skills with expert-guided lessons. Enroll today!",
  keywords: [
    "English course",
    "Learn English",
    "Dr. Kawishka",
    "English tutor",
    "IELTS preparation",
    "Spoken English",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

import "./globals.css";
import { Metadata } from "next";
import Link from "next/link";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: { default: "The Daily — A fresh perspective", template: "%s | The Daily" },
  description: "A little curiosity goes a long way.",
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <body className="bg-paper font-sans text-ink antialiased bg-[#FAF9F6]">
        {children}

        <footer className="border-y border-stone-200 py-4">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
            <div>
              <Link href="/" className="text-3xl font-black tracking-tighter">
                the daily<span className="text-red-700">▧</span>
              </Link>
              <p className="text-xs text-stone-500">A fresh perspective. Every day.</p>
            </div>
            <a href="#main" className="text-xs">
              Back to top ↑
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;

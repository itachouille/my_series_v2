import type { Metadata } from "next";
import { Recursive } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const recursive = Recursive({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Series",
  description:
    "My Series is a web application designed for TV series enthusiasts. Create an account, search for your favorite series, and keep track of the season and episode where you left off.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={recursive.className}>
          <main className="flex flex-col min-h-[calc(100vh-3.5rem-1px)] grainy-light">
            <div className="flex-1 flex flex-col h-full">{children}</div>
          </main>
          {/*  <Toaster /> */}
        </body>
      </html>
    </ClerkProvider>
  );
}

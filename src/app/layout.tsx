import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import StoreProvider from "./providers/StoreProvider";

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Multistep Form",
  description: "A multistep form built with Next.js and React useAction Hook and server actions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ubuntu.className} antialiased`}
      >
        <StoreProvider>
          {/* main tag styled in global css file */}
          <main>
            <div className="flex flex-col lg:flex-row">
              <Navbar />
              {children}
            </div>
          </main>
        </StoreProvider>
      </body>
    </html>
  );
}

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
  openGraph: {
    title: "Multistep Form",
    url: "https://multistep-form-tau.vercel.app",
    siteName: "Multistep Form",
    images: {
      url: "https://multistep-form-tau.vercel.app/images/multistep-form-preview.jpg",
      width: 1200,
      height: 627
    }
  }
}

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

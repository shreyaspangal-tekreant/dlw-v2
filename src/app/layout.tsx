import type { Metadata } from "next";
import { Inter, Anek_Kannada } from "next/font/google";
import "./globals.css";
import MainHeader from "@/components/main-header";
import MainFooter from "@/components/main-footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DLW",
  description: "Devansh Lab Werks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainHeader />
        {children}
        <MainFooter />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
// Components
import Navbar from "@/components/navbar/";
// Context
import { CartProvider } from "@/context/cart";
// Css
import '@fortawesome/fontawesome-svg-core/styles.css'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Somnio Challenge",
  description: "Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Navbar />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}

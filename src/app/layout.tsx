import "./globals.css";
import { Poppins } from "next/font/google";
import { NextAuthProvider } from "@/providers/auth";
import Header from "../components/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
});

export const metadata = {
  title: "FWS Tips",
  description: "Sistema de Reverva de Viagens",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NextAuthProvider>
          <Header />

          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}

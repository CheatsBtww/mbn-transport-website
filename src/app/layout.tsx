import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "MBN TRANSPORT - Société de transport routier sur mesure",
  description: "MBN TRANSPORT, spécialisé dans le transport routier de marchandises, déménagement et convoyage de véhicules dans toute l'Europe. Solutions personnalisées et fiables.",
  keywords: "transport, logistique, déménagement, convoyage, véhicules, Europe, MBN TRANSPORT, Ivry-sur-Seine",
  authors: [{ name: "MBN TRANSPORT" }],
  robots: "index, follow",
  openGraph: {
    title: "MBN TRANSPORT - Transport Routier",
    description: "Le spécialiste du transport routier sur mesure",
    type: "website",
    locale: "fr_FR",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} font-sans antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Automatiza tus Citas por WhatsApp | Sistema de Agendamiento 24/7",
  description: "Tu asistente virtual que trabaja 24/7. Ideal para barberías, spas, consultorios y emprendedores. Recordatorios automáticos, sin apps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${outfit.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

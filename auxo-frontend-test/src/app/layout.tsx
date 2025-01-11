import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['100','200','300','400','500','600','700']
});

export const metadata: Metadata = {
  title: "AUXO Flights",
  description: "Bienvenido a la plataforma de AUXO Flights",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col min-h-screen ${poppins.className}`}
      >
        {children}
      </body>
    </html>
  );
}

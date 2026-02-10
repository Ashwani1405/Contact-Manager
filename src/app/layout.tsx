import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";



export const metadata: Metadata = {
  title: "Contact Manager",
  description: "One stop solution for all your contact management needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <div className="min-h-screen bg-gray-50">{children}</div>
        </main>
      </body>
    </html>
  );
}

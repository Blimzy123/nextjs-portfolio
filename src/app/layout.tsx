import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "MyPortfolio | Web Developer",
  description:
    "Explore my web development skills, projects, and contact information.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div
          style={{
            background: "#0b0b14",
            color: "#f5f5ff",
            minHeight: "100vh",
            padding: "0 8%",
          }}
        >
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}

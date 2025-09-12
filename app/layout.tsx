import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import ResponsiveNavbar from "@/components/Home/Navbar/ResponsiveNavbar";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";

const font = Roboto({
  weight: [
    "100","200","300","400","500","600","700","800","900",
  ],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NextCareer",
  description:
    "NextCareer helps students and professionals discover jobs, internships, and resources to grow their careers with a modern, responsive platform.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        <ResponsiveNavbar />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}

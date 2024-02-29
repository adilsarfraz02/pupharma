import { Inter,Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./Providers/NextUiProvider";
import TopNavbar from "./components/TopNavbar";
import Head from "next/head";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import Banner from "./components/Banner";

const inter = Poppins({ subsets: ["latin"],
weight:[ '100', '200', '300', '400','500','600','700','800','900'] });

export const metadata = {
  title: "PuPharma - Pharmacy Education 👻",
  author:"ADil Sarfraz",
  description: `Learn about the latest trends in Pharmacy Educational with our educational resources!`,
  keywords: [
    "pharmacology",
    "phaarmacy education",
    "education for pharmacists",
    "Pu pharmacology",
    "punjab university",
    "pu pharma",
    "pucp",
    "pupc"
    ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark transition min-h-screen selection:bg-pink-500/70 selection:text-black">
      <body className={`min-h-screen scroll-smooth ${inter.className}`}>
        <Providers>
          <TopNavbar />
          <Toaster />
            <div className='absolute h-64 w-1/3 -z-10 blur-3xl left-0 bg-gradient-to-r from-pink-500/30 via-purple-500/30 '></div>
            <div classNAme="min-h-screen">
            {children}
            </div>
        </Providers>
        <Banner />
        <Footer/>
      </body>
    </html>
  );
}

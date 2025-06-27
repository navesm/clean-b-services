import { Baskervville, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from './components/Navbar';

const baskerville = Baskervville({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ['400']
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ['400', '500']
});

export const metadata = {
  title: "Clean B Cleaning Service LLC",
  description: "A local Catawba County and surrounding area cleaning service from the Clean B, Briana, herself",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${baskerville.variable} ${plexMono.variable} antialiased min-h-screen bg-gradient-to-b from-black via-teal-900 to-teal-200 text-white`}
      >
        <Navbar />
        <main className="pt-20 px-8 pb-20 sm:px-20">{children}</main>
      </body>
    </html>
  );
}

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { ForumContextProvider } from "@/context/ForumContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Windiecity",
  description: "La ciudad para todo lo indie.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ForumContextProvider>
          <NavBar />
            <div className="min-h-125">
              {children}
            </div>
          <Footer />
        </ForumContextProvider>
      </body>
    </html>
  );
}


"use client"
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Navbar from "@/components/common_components/Navbars/Navbar";
import SideNav from "@/components/common_components/Navbars/SIdeNavbar";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const inter = Inter({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})



export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en" className={inter.className}>

      <body>
        <AnimatePresence mode="wait">
          <div className="gtranslate_wrapper"></div>
          <motion.div key={pathname}>
            <SideNav />

            <main className="main-content">
              <Navbar />

              <div className="content">
                {children}
              </div>
            </main>
            <motion.div
              className="slide-In"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 0 }}
              exit={{ scaleY: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            ></motion.div>
            <motion.div
              className="slide-Out"
              initial={{ scaleY: 1 }}
              animate={{ scaleY: 0 }}
              exit={{ scaleY: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            ></motion.div>

          </motion.div>
        </AnimatePresence>


      </body>
    </html>
  );
}

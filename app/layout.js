import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
   variable: "--font-geist-sans",
   subsets: ["latin"],
});

const geistMono = Geist_Mono({
   variable: "--font-geist-mono",
   subsets: ["latin"],
});

export const metadata = {
   title: "LandCalc Next - Smart Indian Land Area Converter & Live News",
   description:
      "Convert regional land units like UP Pucca Bigha, Uttarakhand Bigha, Kanal, Gaj, and Acre instantly. Track live real estate and infrastructure news updates.",
   // 🌐 FIXED: Corrected domain pointer to align exactly with your production Vercel deployment URL
   metadataBase: new URL("https://landcalc-next.vercel.app"),
   verification: {
      google: "WA9fxD0RBGa09jcn8sIhmjR83J3375loo5A5bqTTfC4",
   },
};
export default function RootLayout({ children }) {
   return (
      <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
         <head>
            {/* 🔥 ABSOLUTE GLOBAL FIX: Forcing browser engine to bypass globals.css and apply the secure backdrop everywhere */}
            <style dangerouslySetInnerHTML={{ __html: `
               body, html {
                  margin: 0 !important;
                  padding: 0 !important;
                  min-height: 100vh !important;
                  background-image: linear-gradient(180deg, rgba(26, 32, 44, 0.85) 0%, rgba(45, 55, 72, 0.5) 100%), url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1600&auto=format&fit=crop') !important;
                  background-size: cover !important;
                  background-position: center !important;
                  background-attachment: fixed !important;
                  background-color: #1a202c !important;
               }
            `}} />
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6510564496638335" crossOrigin="anonymous"></script>
         </head>
         <body>
            {children}
         </body>
      </html>
   );
}

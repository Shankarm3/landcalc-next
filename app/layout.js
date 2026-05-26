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
   metadataBase: new URL("https://landcalc-next-4yjv.vercel.app"),
   verification: {
      google: "WA9fxD0RBGa09jcn8sIhmjR83J3375loo5A5bqTTfC4",
   },
};

export default function RootLayout({ children }) {
   return (
      <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
         {/* 🔥 Global Secure Background Fix: Moved image here so it reflects on all sub-routes */}
         <body
            style={{
               margin: 0,
               padding: 0,
               minHeight: "100vh",
               boxSizing: "border-box",
               backgroundImage: `linear-gradient(180deg, rgba(26, 32, 44, 0.82) 0%, rgba(45, 55, 72, 0.5) 100%), url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1600&auto=format&fit=crop')`,
               backgroundSize: "cover",
               backgroundPosition: "center",
               backgroundAttachment: "fixed",
               backgroundColor: "#1a202c", // Fallback dark color
            }}
         >
            {children}
         </body>
      </html>
   );
}

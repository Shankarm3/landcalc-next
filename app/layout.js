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
   // 🔥 Optimized Title for high ranking search capture
   title: "LandCalc Next - Smart Indian Land Area Converter & Live News",
   description:
      "Convert regional land units like UP Pucca Bigha, Uttarakhand Bigha, Kanal, Gaj, and Acre instantly. Track live real estate and infrastructure news updates.",
   metadataBase: new URL("https://landcalc-next-4yjv.vercel.app"),

   // Verification remains perfectly verified here:
   verification: {
      google: "WA9fxD0RBGa09jcn8sIhmjR83J3375loo5A5bqTTfC4",
   },
};

export default function RootLayout({ children }) {
   return (
      <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
         {/* Using dynamic background color variables directly */}
         <body style={{ margin: 0, padding: 0, backgroundColor: "#f8fafc" }}>
            {children}
         </body>
      </html>
   );
}

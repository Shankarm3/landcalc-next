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
   title: "LandCalc - Smart Land Area Converter",
   description:
      "Convert regional land units like Kanal, Acre, Gaj, and Bigha instantly.",
   metadataBase: new URL("https://landcalc-next-4yjv.vercel.app"),
   // Add this verification section right here:
   verification: {
      google: "WA9fxD0RBGa09jcn8sIhmjR83J3375loo5A5bqTTfC4",
   },
};

export default function RootLayout({ children }) {
   return (
      <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
         <body>{children}</body>
      </html>
   );
}

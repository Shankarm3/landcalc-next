"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
   const pathname = usePathname();

   // Helper function jo har ek button ko dynamic background aur text styling dega
   const getButtonStyle = (path) => {
      const isActive = pathname === path;

      return {
         color: "#ffffff",
         // 🔥 Active tab bright blue hoga, baaki saare clean slate gray buttons dikhenge
         backgroundColor: isActive ? "#2b6cb0" : "#2d3748",
         padding: "0.4rem 0.75rem",
         borderRadius: "6px",
         textDecoration: "none",
         fontSize: "0.85rem",
         fontWeight: isActive ? "700" : "600",
         whiteSpace: "nowrap",
         border: isActive ? "1px solid #63b3ed" : "1px solid #4a5568",
         boxShadow: isActive ? "0 2px 4px rgba(49, 130, 206, 0.2)" : "none",
         transition: "all 0.2s ease",
         display: "inline-block",
      };
   };

   return (
      <nav
         style={{
            backgroundColor: "#1a202c",
            padding: "1rem",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            boxSizing: "border-box",
            width: "100%",
         }}
      >
         <div
            style={{
               maxWidth: "1000px",
               margin: "0 auto",
               display: "flex",
               flexDirection: "row",
               flexWrap: "wrap",
               alignItems: "center",
               justifyContent: "space-between",
               gap: "1.25rem",
            }}
         >
            {/* Logo / Brand Name */}
            <Link
               href="/"
               style={{
                  color: "#ffffff",
                  textDecoration: "none",
                  fontSize: "1.4rem",
                  fontWeight: "800",
                  letterSpacing: "-0.05em",
               }}
            >
               Land<span style={{ color: "#3182ce" }}>Calc</span>
            </Link>

            {/* 🔥 Buttons Container Layout */}
            <div
               style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: "0.6rem", // Buttons ke beech ka spacing tight aur clean rakha hai
               }}
            >
               <Link href="/" style={getButtonStyle("/")}>
                  🏠 Home
               </Link>

               <Link href="/news" style={getButtonStyle("/news")}>
                  📰 Top 5 News
               </Link>

               {/* FIXED: Added Global Money Converter navigation tab route link */}
               <Link href="/money" style={getButtonStyle("/money")}>
                  💱 Currency Converter
               </Link>

               <Link
                  href="/bigha-to-kanal"
                  style={getButtonStyle("/bigha-to-kanal")}
               >
                  Bigha to Kanal
               </Link>

               <Link href="/sqft-to-gaj" style={getButtonStyle("/sqft-to-gaj")}>
                  Sqft to Gaj
               </Link>

               <Link
                  href="/kanal-to-acre"
                  style={getButtonStyle("/kanal-to-acre")}
               >
                  Kanal to Acre
               </Link>
            </div>
         </div>
      </nav>
   );
}

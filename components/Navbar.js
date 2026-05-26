"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"; // 🔥 Active path track karne ke liye hook

export default function Navbar() {
   const pathname = usePathname(); // Yeh aapko batayega current page ka link kya hai

   // Helper function jo check karega ki kaunsa tab active hai aur uske hisab se dynamic styling dega
   const getLinkStyle = (path, isButton = false) => {
      const isActive = pathname === path;

      if (isButton) {
         return {
            color: "#f7fafc",
            backgroundColor: isActive ? "#2b6cb0" : "#4a5568", // Active hai toh bright blue, nahi toh neutral gray
            padding: "0.35rem 0.65rem",
            borderRadius: "6px",
            textDecoration: "none",
            fontSize: "0.85rem",
            fontWeight: "700",
            transition: "background-color 0.2s",
         };
      }

      return {
         color: isActive ? "#63b3ed" : "#e2e8f0", // Active tab text soft blue dikhega, baaki links silver-white
         textDecoration: "none",
         fontSize: "0.85rem",
         fontWeight: isActive ? "700" : "600",
         whiteSpace: "nowrap",
         transition: "color 0.2s",
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
               gap: "1rem",
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

            {/* Links Container */}
            <div
               style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: "clamp(0.5rem, 3vw, 1.25rem)",
               }}
            >
               {/* 🔥 Pura links design ab dynamic active path check karega */}
               <Link href="/news" style={getLinkStyle("/news", true)}>
                  📰 Top 5 News
               </Link>

               <Link href="/" style={getLinkStyle("/")}>
                  Home
               </Link>

               <Link
                  href="/bigha-to-kanal"
                  style={getLinkStyle("/bigha-to-kanal")}
               >
                  Bigha to Kanal
               </Link>

               <Link href="/sqft-to-gaj" style={getLinkStyle("/sqft-to-gaj")}>
                  Sqft to Gaj
               </Link>

               <Link
                  href="/kanal-to-acre"
                  style={getLinkStyle("/kanal-to-acre")}
               >
                  Kanal to Acre
               </Link>
            </div>
         </div>
      </nav>
   );
}

"use client";

import Link from "next/link";

export default function Navbar() {
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
               // 🔥 Mobile Fix: Jab screen chhoti ho, brand upar aur links automatically niche flexible rows me adjust honge
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
                  // 🔥 Mobile Navigation Layout Fix:
                  // Links wrap honge aur mobile par clean space maintain karenge bina screen todte hue
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: "clamp(0.5rem, 3vw, 1.25rem)", // Responsive text gaps
               }}
            >
               <Link
                  href="/news"
                  style={{
                     color: "#f7fafc",
                     backgroundColor: "#2b6cb0", // Highlights the news tab beautifully
                     padding: "0.35rem 0.65rem",
                     borderRadius: "6px",
                     textDecoration: "none",
                     fontSize: "0.85rem",
                     fontWeight: "700",
                  }}
               >
                  📰 Top 5 News
               </Link>

               <Link
                  href="/"
                  style={{
                     color: "#e2e8f0",
                     textDecoration: "none",
                     fontSize: "0.85rem",
                     fontWeight: "600",
                  }}
               >
                  Home
               </Link>

               <Link
                  href="/bigha-to-kanal" // Adjust if your paths are different
                  style={{
                     color: "#e2e8f0",
                     textDecoration: "none",
                     fontSize: "0.85rem",
                     fontWeight: "600",
                     whiteSpace: "nowrap", // Prevents text splitting into 2 messy lines
                  }}
               >
                  Bigha to Kanal
               </Link>

               <Link
                  href="/sqft-to-gaj"
                  style={{
                     color: "#e2e8f0",
                     textDecoration: "none",
                     fontSize: "0.85rem",
                     fontWeight: "600",
                     whiteSpace: "nowrap",
                  }}
               >
                  Sqft to Gaj
               </Link>

               <Link
                  href="/kanal-to-acre"
                  style={{
                     color: "#e2e8f0",
                     textDecoration: "none",
                     fontSize: "0.85rem",
                     fontWeight: "600",
                     whiteSpace: "nowrap",
                  }}
               >
                  Kanal to Acre
               </Link>
            </div>
         </div>
      </nav>
   );
}

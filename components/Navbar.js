"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
   const pathname = usePathname();

   const navigationLinks = [
      { label: "Home", icon: "🔥", path: "/" },
      { label: "Top 5 News", icon: "📰", path: "/news" },
      { label: "Currency Converter", icon: "💸", path: "/currency-converter" }
   ];

   return (
      <nav style={{
         display: "flex",
         flexDirection: "column",
         gap: "0.75rem",
         padding: "0.75rem 1rem",
         backgroundColor: "#0d1527",
         borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
         fontFamily: "system-ui, -apple-system, sans-serif"
      }}>
         {/* Top branding section */}
         <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Link href="/" style={{ textDecoration: "none", fontWeight: "900", color: "#ffffff", fontSize: "1.25rem", letterSpacing: "-0.02em" }}>
               Land<span style={{ color: "#3182ce" }}>Calc</span>
            </Link>
            
            {/* Version Badge to balance the top row space */}
            <span style={{ fontSize: "0.65rem", color: "#63b3ed", backgroundColor: "rgba(49, 130, 206, 0.15)", padding: "0.2rem 0.5rem", borderRadius: "10px", fontWeight: "700" }}>
               v2.0 Live
            </span>
         </div>

         {/* 🔥 Dynamic Flex Grid for Tab Targets */}
         <div style={{
            display: "flex",
            gap: "0.35rem",
            width: "100%",
            boxSizing: "border-box"
         }}>
            {navigationLinks.map((link) => {
               const isActive = pathname === link.path;
               return (
                  <Link
                     key={link.label}
                     href={link.path}
                     style={{
                        flex: 1, // Forces all 3 buttons to stay proportional on one line
                        display: "flex",
                        flexDirection: "column", // Stack icon above text for high-end mobile app feel
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.2rem",
                        padding: "0.4rem 0.2rem",
                        borderRadius: "8px",
                        fontSize: "0.7rem", // Clean micro-typography
                        fontWeight: "700",
                        textDecoration: "none",
                        textAlign: "center",
                        whiteSpace: "nowrap",
                        transition: "all 0.2s ease",
                        color: isActive ? "#ffffff" : "#94a3b8",
                        backgroundColor: isActive ? "#3182ce" : "rgba(255,255,255,0.03)",
                        border: isActive ? "1px solid #4299e1" : "1px solid rgba(255,255,255,0.05)",
                        boxShadow: isActive ? "0 4px 12px rgba(49, 130, 206, 0.3)" : "none"
                     }}
                  >
                     <span style={{ fontSize: "0.9rem" }}>{link.icon}</span>
                     <span>{link.label}</span>
                  </Link>
               );
            })}
         </div>
      </nav>
   );
}

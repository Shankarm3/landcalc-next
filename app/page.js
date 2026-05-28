"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";
import Converter from "../components/Converter";

export default function Home() {
   const units = ["sqft", "gaj", "kanal", "bigha", "acre", "hectare"];
   const formatLabel = (unit) =>
      unit === "sqft" ? "Sqft" : unit.charAt(0).toUpperCase() + unit.slice(1);


   return (
      // Modern glowing neon grid pattern simulation layer background
      <div style={{ 
         fontFamily: "system-ui, sans-serif", 
         backgroundColor: "#0a0f1d", // Rich cyber slate black background
         backgroundImage: "radial-gradient(circle at top right, rgba(49, 130, 206, 0.12), transparent 40%), radial-gradient(circle at central left, rgba(99, 179, 237, 0.05), transparent 30%)",
         minHeight: "100vh"
      }}>
         <Navbar />

         <div style={{ padding: "1.5rem 0.75rem max(3vh, 1.5rem)", maxWidth: "1200px", margin: "0 auto" }}>
            
            {/* Main Premium Typography Header */}
            <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
               <h1 style={{
                  fontSize: "clamp(1.75rem, 4.5vw, 2.35rem)",
                  fontWeight: "900",
                  letterSpacing: "-0.03em",
                  marginBottom: "0.35rem",
                  color: "#ffffff"
               }}>
                  Land<span style={{ background: "linear-gradient(to right, #63b3ed, #3182ce)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Calc</span> Area Hub
               </h1>
               <p style={{ fontSize: "0.9rem", color: "#94a3b8", maxWidth: "520px", margin: "0 auto", lineHeight: "1.4" }}>
                  Compute localized conversions metrics smoothly across specialized regional sub-continental grids.
               </p>
            </div>

            {/* 🔥 ULTRALEAN CYBER GLASS CALCULATOR CONTAINER CARD */}
            <div style={{
               maxWidth: "460px", // Snug spatial container fit
               margin: "0 auto 2rem",
               backgroundColor: "rgba(255, 255, 255, 0.98)",
               padding: "1rem 1.25rem", 
               borderRadius: "16px",
               // Outer drop shadow combined with light geometric stroke line borders
               boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255,255,255,0.05)",
               boxSizing: "border-box"
            }}>
               <Converter />
            </div>

            {/* Upgraded CSS Injector Hook with modern hover cards matrix style floating metrics */}
            <style dangerouslySetInnerHTML={{ __html: `
               .seo-link {
                  color: #4a5568 !important; 
                  text-decoration: none;
                  font-size: 0.85rem;
                  font-weight: 600;
                  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                  padding: 0.4rem 0.6rem;
                  border-radius: 8px;
                  background-color: #f8fafc;
                  border: 1px solid #edf2f7;
                  display: flex;
                  align-items: center;
                  gap: 0.25rem;
               }
               .seo-link:hover {
                  color: #3182ce !important;
                  background-color: #ffffff;
                  border-color: #bee3f8;
                  transform: translateY(-2px);
                  box-shadow: 0 4px 6px -1px rgba(49, 130, 206, 0.08);
               }
            `}} />

            {/* Modern SEO Interactive Data Card Panel */}
            <footer style={{
               maxWidth: "100%",
               backgroundColor: "rgba(255, 255, 255, 0.99)",
               padding: "1.25rem",
               borderRadius: "14px",
               boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.2)",
               border: "1px solid #e2e8f0",
               boxSizing: "border-box"
            }}>
               <h3 style={{ fontSize: "0.95rem", fontWeight: "800", color: "#1a202c", marginBottom: "1rem", letterSpacing: "-0.01em", borderLeft: "3px solid #3182ce", paddingLeft: "0.5rem" }}>
                  Regional System Matrix Pipelines
               </h3>

               <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))", gap: "0.4rem" }}>
                  {units.flatMap((from) =>
                     units.map((to) => from !== to ? (
                        <Link key={`${from}-to-${to}`} href={`/${from}-to-${to}`} className="seo-link">
                           <span style={{ color: "#3182ce", fontSize: "0.75rem" }}>⚡</span> {formatLabel(from)} → {formatLabel(to)}
                        </Link>
                     ) : null)
                  )}
               </div>
            </footer>

         </div>
      </div>
   );

}

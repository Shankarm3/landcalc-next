"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";
import Converter from "../components/Converter";
import AppContent from "@/components/AppContent";

export default function Home() {
   const units = ["sqft", "gaj", "kanal", "bigha", "acre", "hectare"];
   const formatLabel = (unit) =>
      unit === "sqft" ? "Sqft" : unit.charAt(0).toUpperCase() + unit.slice(1);

   return (
      <div style={{ 
         fontFamily: "system-ui, sans-serif", 
         backgroundColor: "#0a0f1d", 
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
               maxWidth: "460px",
               margin: "0 auto 2rem",
               backgroundColor: "rgba(255, 255, 255, 0.98)",
               padding: "1rem 1.25rem", 
               borderRadius: "16px",
               boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255,255,255,0.05)",
               boxSizing: "border-box"
            }}>
               <Converter />
            </div>
            {/* Upgraded CSS Injector Hook with matching neon hover styles */}
            <style dangerouslySetInnerHTML={{ __html: `
               .seo-link {
                  color: #94a3b8 !important; 
                  text-decoration: none;
                  font-size: 0.8rem;
                  font-weight: 600;
                  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                  padding: 0.5rem 0.75rem;
                  border-radius: 8px;
                  background-color: rgba(255, 255, 255, 0.02);
                  border: 1px solid rgba(255, 255, 255, 0.05);
                  display: flex;
                  align-items: center;
                  gap: 0.35rem;
                  box-sizing: border-box;
               }
               .seo-link:hover {
                  color: #63b3ed !important;
                  background-color: rgba(49, 130, 206, 0.1);
                  border-color: #3182ce;
                  transform: translateY(-2px);
                  box-shadow: 0 4px 12px rgba(49, 130, 206, 0.15);
               }
            `}} />

            {/* Modern Frosted Dark SEO Interactive Data Card Panel */}
            <footer style={{
               maxWidth: "100%",
               backgroundColor: "rgba(15, 23, 42, 0.6)",
               padding: "1.5rem max(1rem, 3vw)",
               borderRadius: "14px",
               boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.3)",
               border: "1px solid rgba(255, 255, 255, 0.05)",
               backdropFilter: "blur(8px)",
               boxSizing: "border-box"
            }}>
               <h3 style={{ fontSize: "0.9rem", fontWeight: "800", color: "#ffffff", marginBottom: "1rem", letterSpacing: "0.025em", textTransform: "uppercase", borderLeft: "3px solid #3182ce", paddingLeft: "0.5rem" }}>
                  Popular Land Conversion Networks
               </h3>

               {/* Responsive clean layout columns matching mobile breakpoints */}
               <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(145px, 1fr))", gap: "0.5rem" }}>
                  {units.flatMap((from) =>
                     units.map((to) => from !== to ? (
                        <Link key={`${from}-to-${to}`} href={`/${from}-to-${to}`} className="seo-link">
                           <span style={{ color: "#3182ce", fontSize: "0.7rem" }}>⚡</span> {formatLabel(from)} to {formatLabel(to)}
                        </Link>
                     ) : null)
                  )}
               </div>
            </footer>
            <AppContent />
         </div>
      </div>
   );
}

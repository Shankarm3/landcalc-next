"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";
import Converter from "../components/Converter";

export default function Home() {
   const units = ["sqft", "gaj", "kanal", "bigha", "acre", "hectare"];
   const formatLabel = (unit) =>
      unit === "sqft" ? "Sqft" : unit.charAt(0).toUpperCase() + unit.slice(1);

   return (
      <div style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
         <Navbar />

         <div
            style={{
               // ✅ FIXED: Drastically reduced top padding from 4rem down to 1rem
               padding: "1rem 0.75rem max(3vh, 1.5rem)",
               maxWidth: "1200px",
               margin: "0 auto",
            }}
         >
            {/* Main Header / Intro */}
            {/* ✅ FIXED: Squeezed bottom margin from 3rem down to 1rem to remove big gap above card */}
            <div style={{ textAlign: "center", marginBottom: "1rem" }}>
               <h1
                  style={{
                     // ✅ FIXED: Scaled text down slightly for immediate viewport entry
                     fontSize: "clamp(1.6rem, 4vw, 2.25rem)",
                     fontWeight: "800",
                     letterSpacing: "-0.025em",
                     marginBottom: "0.25rem",
                     color: "#ffffff",
                     textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                  }}
               >
                  Land<span style={{ color: "#63b3ed" }}>Calc</span> Area Converter
               </h1>
               <p
                  style={{
                     // ✅ FIXED: Compressed size and spacing
                     fontSize: "0.95rem",
                     color: "#e2e8f0",
                     maxWidth: "500px",
                     margin: "0 auto",
                     textShadow: "0 1px 2px rgba(0,0,0,0.4)",
                  }}
               >
                  Convert between regional Indian land units like Bigha, Kanal, Gaj, Acre, and Square Feet instantly.
               </p>
            </div>

            {/* Main Interactive Calculator Area */}
            <div
               style={{
                  maxWidth: "520px",
                  // ✅ FIXED: Reduced vertical padding from 2.5rem/2rem down to 1rem
                  // ✅ FIXED: Shrank bottom margin to keep footer close
                  margin: "0 auto 1.5rem",
                  backgroundColor: "rgba(255, 255, 255, 0.98)",
                  padding: "1rem", 
                  borderRadius: "12px",
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)",
                  backdropFilter: "blur(12px)",
                  boxSizing: "border-box",
               }}
            >
               <Converter />
            </div>

            {/* Dynamic CSS Styling Injector */}
            <style
               dangerouslySetInnerHTML={{
                  __html: `
                  .seo-link {
                     color: #2d3748 !important; 
                     text-decoration: none;
                     font-size: 0.85rem;
                     transition: all 0.2s ease;
                     padding: 0.35rem 0.5rem;
                     border-radius: 6px;
                  }
                  .seo-link:hover {
                     color: #3182ce !important;
                     background-color: #edf2f7;
                     padding-left: 0.6rem;
                  }
               `,
               }}
            />

            {/* SEO Internal Linking Footer Section */}
            <footer
               style={{
                  maxWidth: "100%",
                  backgroundColor: "rgba(255, 255, 255, 0.96)",
                  // ✅ FIXED: Shrank footer padding down to keep page light
                  padding: "1.25rem",
                  borderRadius: "12px",
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.15)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(226, 232, 240, 0.8)",
                  boxSizing: "border-box",
               }}
            >
               <h3
                  style={{
                     fontSize: "1rem",
                     fontWeight: "700",
                     marginBottom: "1rem",
                     color: "#1a202c",
                     borderBottom: "2px solid #edf2f7",
                     paddingBottom: "0.5rem",
                  }}
               >
                  Popular Land Measurements & Conversions
               </h3>

               <div
                  style={{
                     display: "grid",
                     gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
                     gap: "0.5rem",
                  }}
               >
                  {units.flatMap((from) =>
                     units.map((to) => {
                        if (from !== to) {
                           return (
                              <Link
                                 key={`${from}-to-${to}`}
                                 href={`/${from}-to-${to}`}
                                 className="seo-link"
                              >
                                 → {formatLabel(from)} to {formatLabel(to)}
                              </Link>
                           );
                        }
                        return null;
                      }),
                  )}
               </div>
            </footer>
         </div>
      </div>
   );
}

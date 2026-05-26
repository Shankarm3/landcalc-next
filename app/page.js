"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";
import Converter from "../components/Converter";

export default function Home() {
   const units = ["sqft", "gaj", "kanal", "bigha", "acre", "hectare"];
   const formatLabel = (unit) =>
      unit === "sqft" ? "Sqft" : unit.charAt(0).toUpperCase() + unit.slice(1);

   return (
      <main
         style={{
            minHeight: "100vh",
            boxSizing: "border-box",
            fontFamily: "system-ui, -apple-system, sans-serif",
            // 🔥 SECURE HTTPS FIX: Standard hyper-responsive landscape image used instead of insecure http
            backgroundImage: `linear-gradient(180deg, rgba(26, 32, 44, 0.82) 0%, rgba(45, 55, 72, 0.5) 100%), url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1600&auto=format&fit=crop')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
         }}
      >
         <Navbar />

         <div
            style={{
               padding: "4rem 1rem max(5vh, 2rem)",
               maxWidth: "1200px",
               margin: "0 auto",
            }}
         >
            {/* Main Header / Intro */}
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
               <h1
                  style={{
                     fontSize: "clamp(2rem, 5vw, 2.75rem)",
                     fontWeight: "800",
                     letterSpacing: "-0.025em",
                     marginBottom: "0.75rem",
                     color: "#ffffff",
                     textShadow: "0 2px 5px rgba(0,0,0,0.5)",
                  }}
               >
                  Land<span style={{ color: "#63b3ed" }}>Calc</span> Area
                  Converter
               </h1>
               <p
                  style={{
                     fontSize: "1.1rem",
                     color: "#e2e8f0",
                     maxWidth: "600px",
                     margin: "0 auto",
                     textShadow: "0 1px 3px rgba(0,0,0,0.4)",
                  }}
               >
                  Convert between regional Indian land units like Bigha, Kanal,
                  Gaj, Acre, and Square Feet instantly.
               </p>
            </div>

            {/* Main Interactive Calculator Area */}
            <div
               style={{
                  maxWidth: "520px",
                  margin: "0 auto 4rem",
                  backgroundColor: "rgba(255, 255, 255, 0.98)",
                  padding: "2.5rem 2rem",
                  borderRadius: "16px",
                  boxShadow:
                     "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)",
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
                     font-size: 0.95rem;
                     transition: all 0.2s ease;
                     padding: 0.5rem;
                     border-radius: 6px;
                  }
                  .seo-link:hover {
                     color: #3182ce !important;
                     background-color: #edf2f7;
                     padding-left: 0.75rem;
                  }
               `,
               }}
            />

            {/* SEO Internal Linking Footer Section */}
            <footer
               style={{
                  maxWidth: "100%",
                  backgroundColor: "rgba(255, 255, 255, 0.96)",
                  padding: "2.5rem",
                  borderRadius: "16px",
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.15)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(226, 232, 240, 0.8)",
                  boxSizing: "border-box",
               }}
            >
               <h3
                  style={{
                     fontSize: "1.25rem",
                     fontWeight: "700",
                     marginBottom: "1.5rem",
                     color: "#1a202c",
                     borderBottom: "2px solid #edf2f7",
                     paddingBottom: "0.75rem",
                  }}
               >
                  Popular Land Measurements & Conversions
               </h3>

               <div
                  style={{
                     display: "grid",
                     gridTemplateColumns:
                        "repeat(auto-fill, minmax(240px, 1fr))",
                     gap: "0.75rem",
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
      </main>
   );
}

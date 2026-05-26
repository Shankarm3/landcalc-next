import Link from "next/link";
import Navbar from "../components/Navbar";
import Converter from "../components/Converter";

export default function Home() {
   const units = ["sqft", "gaj", "kanal", "bigha", "acre"];

   const formatLabel = (unit) =>
      unit === "sqft" ? "Sqft" : unit.charAt(0).toUpperCase() + unit.slice(1);

   return (
      <main
         style={{
            minHeight: "100vh",
            backgroundColor: "#f8fafc",
            backgroundImage:
               "linear-gradient(180deg, #edf2f7 0%, #f8fafc 400px)",
            fontFamily: "system-ui, -apple-system, sans-serif",
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
                     color: "#1a202c",
                  }}
               >
                  Land<span style={{ color: "#3182ce" }}>Calc</span> Area
                  Converter
               </h1>
               <p
                  style={{
                     fontSize: "1.1rem",
                     color: "#4a5568",
                     maxWidth: "600px",
                     margin: "0 auto",
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
                  backgroundColor: "#ffffff",
                  padding: "2.5rem 2rem",
                  borderRadius: "16px",
                  boxShadow:
                     "0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05)",
                  border: "1px solid #e2e8f0",
               }}
            >
               <Converter />
            </div>

            {/* Dynamic CSS Styling Injector */}
            <style
               dangerouslySetInnerHTML={{
                  __html: `
                  .seo-link {
                     color: #4a5568;
                     text-decoration: none;
                     font-size: 0.95rem;
                     transition: all 0.2s ease;
                     padding: 0.5rem;
                     borderRadius: 6px;
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
                  backgroundColor: "#ffffff",
                  padding: "2.5rem",
                  borderRadius: "16px",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.03)",
                  border: "1px solid #e2e8f0",
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

import Link from "next/link";
import Navbar from "../components/Navbar";
import Converter from "../components/Converter";

export default function Home() {
   const units = ["sqft", "gaj", "kanal", "bigha", "acre"];

   // Helper function to make link texts look clean (e.g., "Kanal to Sqft")
   const formatLabel = (unit) =>
      unit === "sqft" ? "Sqft" : unit.charAt(0).toUpperCase() + unit.slice(1);

   return (
      <main style={{ minHeight: "100vh", backgroundColor: "#f7fafc" }}>
         <Navbar />

         <div style={{ padding: "2rem 1rem" }}>
            <Converter />
         </div>

         {/* SEO Internal Linking Section */}
         <footer
            style={{
               maxWidth: "1200px",
               margin: "4rem auto 2rem",
               padding: "2rem 1rem",
               borderTop: "1px solid #e2e8f0",
            }}
         >
            <h3
               style={{
                  fontSize: "1.25rem",
                  fontWeight: "600",
                  marginBottom: "1.5rem",
                  color: "#2d3748",
               }}
            >
               Popular Land Measurements & Conversions
            </h3>

            <div
               style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
                  gap: "1rem",
               }}
            >
               {units.flatMap((from) =>
                  units.map((to) => {
                     if (from !== to) {
                        return (
                           <Link
                              key={`${from}-to-${to}`}
                              href={`/${from}-to-${to}`}
                              style={{
                                 color: "#4a5568",
                                 textDecoration: "none",
                                 fontSize: "0.95rem",
                                 transition: "color 0.2s",
                              }}
                              onMouseOver={(e) =>
                                 (e.target.style.color = "#3182ce")
                              }
                              onMouseOut={(e) =>
                                 (e.target.style.color = "#4a5568")
                              }
                           >
                              {formatLabel(from)} to {formatLabel(to)} Converter
                           </Link>
                        );
                     }
                     return null;
                  }),
               )}
            </div>
         </footer>
      </main>
   );
}

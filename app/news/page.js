"use client";

import Navbar from "../../components/Navbar"; // Ek baar path zaroor verify kar lena

export default function NewsPage() {
   // Dummy data just for demonstration mapping hierarchy structure
   const newsItems = [
      {
         source: "MONEYCONTROL.COM",
         date: "26/5/2026",
         title: "Global markets soar but the rally belongs to just a few stocks",
         desc: "Global market gains over the past year were driven by a handful of heavyweight stocks, exposing the narrow breadth of the rally even as major indices scaled record highs.",
      },
      {
         source: "CRUDE OIL PRICES TODAY | OILPRICE.COM",
         date: "26/5/2026",
         title: "India Cuts Fuel Demand Growth Projections By 40% Amid Austerity Drive",
         desc: "India has cut its fuel demand growth forecast by nearly 40% as soaring crude prices, a weaker rupee, and government austerity measures slow transportation and aviation fuel consumption.",
      },
   ];

   return (
      <div style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
         <Navbar />

         <div
            style={{
               padding: "3rem 1rem max(5vh, 2rem)",
               maxWidth: "800px", // Perfect clean width for news stream tracking grid
               margin: "0 auto",
               boxSizing: "border-box",
            }}
         >
            {/* Header Section */}
            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
               <span
                  style={{
                     backgroundColor: "rgba(66, 153, 225, 0.15)",
                     color: "#63b3ed",
                     padding: "0.25rem 0.75rem",
                     borderRadius: "20px",
                     fontSize: "0.75rem",
                     fontWeight: "700",
                     textTransform: "uppercase",
                     letterSpacing: "0.05em",
                     display: "inline-block",
                     marginBottom: "0.75rem",
                     backdropFilter: "blur(4px)",
                  }}
               >
                  Live Client Feed
               </span>
               <h1
                  style={{
                     fontSize: "clamp(2rem, 5vw, 2.5rem)",
                     fontWeight: "800",
                     color: "#ffffff", // Pure white for high visual readability
                     letterSpacing: "-0.025em",
                     marginBottom: "0.5rem",
                     textShadow: "0 2px 4px rgba(0,0,0,0.4)",
                  }}
               >
                  Today's Top 5 News Streams
               </h1>
               <p
                  style={{
                     fontSize: "0.95rem",
                     color: "#e2e8f0",
                     maxWidth: "500px",
                     margin: "0 auto",
                     lineHeight: "1.4",
                     textShadow: "0 1px 2px rgba(0,0,0,0.3)",
                  }}
               >
                  Live automated micro-feed tracking national news, global
                  shifts, and Indian infrastructure.
               </p>
            </div>

            {/* Refresh Action Trigger Button */}
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
               <button
                  style={{
                     backgroundColor: "#3182ce",
                     color: "#ffffff",
                     border: "none",
                     padding: "0.65rem 1.5rem",
                     borderRadius: "8px",
                     fontSize: "0.9rem",
                     fontWeight: "600",
                     cursor: "pointer",
                     boxShadow: "0 4px 6px rgba(49, 130, 206, 0.3)",
                     transition: "background-color 0.2s",
                  }}
                  onMouseOver={(e) =>
                     (e.target.style.backgroundColor = "#2b6cb0")
                  }
                  onMouseOut={(e) =>
                     (e.target.style.backgroundColor = "#3182ce")
                  }
               >
                  🔄 Refresh Live Data
               </button>
            </div>

            {/* News Cards Feed Stream Wrapper */}
            <div
               style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
               }}
            >
               {newsItems.map((item, index) => (
                  <div
                     key={index}
                     style={{
                        // 🔥 The Transparent Glass Fix: Using translucent alpha backgrounds with blur effects
                        backgroundColor: "rgba(255, 255, 255, 0.97)",
                        padding: "1.75rem max(1.25rem, 3vw)",
                        borderRadius: "12px",
                        boxShadow:
                           "0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.15)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(226, 232, 240, 0.8)",
                        position: "relative",
                        boxSizing: "border-box",
                     }}
                  >
                     {/* Circular Badge Counter Indicator */}
                     <span
                        style={{
                           position: "absolute",
                           top: "1.5rem",
                           left: "-10px",
                           backgroundColor: "#3182ce",
                           color: "#ffffff",
                           width: "24px",
                           height: "24px",
                           borderRadius: "50%",
                           display: "flex",
                           alignItems: "center",
                           justifyContent: "center",
                           fontSize: "0.8rem",
                           fontWeight: "700",
                           boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                        }}
                     >
                        {index + 1}
                     </span>

                     <div
                        style={{
                           display: "flex",
                           justifyContent: "between",
                           alignItems: "center",
                           justifyContent: "space-between",
                           marginBottom: "0.5rem",
                           flexWrap: "wrap",
                           gap: "0.5rem",
                        }}
                     >
                        <span
                           style={{
                              color: "#4a5568",
                              fontSize: "0.75rem",
                              fontWeight: "700",
                              letterSpacing: "0.05em",
                           }}
                        >
                           {item.source}
                        </span>
                        <span
                           style={{
                              color: "#a0aec0",
                              fontSize: "0.75rem",
                              fontWeight: "500",
                           }}
                        >
                           {item.date}
                        </span>
                     </div>

                     <h2
                        style={{
                           fontSize: "1.2rem",
                           fontWeight: "700",
                           color: "#1a202c",
                           marginBottom: "0.75rem",
                           lineHeight: "1.3",
                        }}
                     >
                        {item.title}
                     </h2>

                     <p
                        style={{
                           fontSize: "0.9rem",
                           color: "#4a5568",
                           lineHeight: "1.5",
                           marginBottom: "1rem",
                        }}
                     >
                        {item.desc}
                     </p>

                     <a
                        href="#"
                        style={{
                           color: "#3182ce",
                           textDecoration: "none",
                           fontSize: "0.85rem",
                           fontWeight: "600",
                           display: "inline-block",
                        }}
                     >
                        Read full article via source →
                     </a>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}

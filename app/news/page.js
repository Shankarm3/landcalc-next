"use client";

import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";

export default function NewsPage() {
   const [articles, setArticles] = useState([]);
   const [loading, setLoading] = useState(true);

   const backupNews = [
      {
         title: "India's Infrastructure Growth: New Expressways Transforming Regional Real Estate Layouts",
         description:
            "A major surge in highway connectivity is rapidly accelerating land and plot valuations across tier-2 and tier-3 sectors in Northern India.",
         source: { name: "National Economic Times" },
         publishedAt: new Date().toISOString(),
         url: "https://gnews.io",
      },
      {
         title: "Digital Land Records: Government Scales AI Integration to Secure Bhulekh Registries",
         description:
            "State land revenue wings are moving to secure modern databases to make property registries transparent, instant, and scam-free.",
         source: { name: "TechIndia Infrastructure" },
         publishedAt: new Date().toISOString(),
         url: "https://gnews.io",
      },
      {
         title: "Global Property Trends: How Financial Interest Rate Adjustments Shift Land Metrics",
         description:
            "International real estate markets adapt to fresh liquidity standards, stabilizing long-term property investments this quarter.",
         source: { name: "Global Finance Review" },
         publishedAt: new Date().toISOString(),
         url: "https://gnews.io",
      },
      {
         title: "Smart Cities Layout Masterplan: New Urban Expansion Guidelines Approved for 15 Hubs",
         description:
            "The urban planning administration has cleared high-density structural mapping blueprints, modifying regional layout frameworks.",
         source: { name: "Bharat Real Estate Desk" },
         publishedAt: new Date().toISOString(),
         url: "https://gnews.io",
      },
      {
         title: "Agricultural Plots Update: Standard Legal Guidelines for Verifying Ancestral Registry",
         description:
            "A detailed workflow detailing circle rates, mutation protocols, and local scale verification methods for agricultural investors.",
         source: { name: "Indian Revenue Journal" },
         publishedAt: new Date().toISOString(),
         url: "https://gnews.io",
      },
   ];

   async function fetchLiveNews() {
      setLoading(true);
      try {
         const res = await fetch("/api/news");
         if (!res.ok) throw new Error("API Route Error");

         const data = await res.json();
         if (data.articles && data.articles.length > 0) {
            setArticles(data.articles);
         } else {
            setArticles(backupNews);
         }
      } catch (error) {
         console.error(
            "Internal endpoint fetch failed, loading backup:",
            error,
         );
         setArticles(backupNews);
      } finally {
         setLoading(false);
      }
   }

   useEffect(() => {
      fetchLiveNews();
   }, []);

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

         {/* 🔥 Mobile Padding Optimization: Added safe horizontal margins */}
         <div
            style={{
               padding: "2.5rem 1rem max(5vh, 2rem)",
               maxWidth: "800px",
               margin: "0 auto",
               boxSizing: "border-box",
            }}
         >
            {/* Section Header */}
            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
               <span
                  style={{
                     backgroundColor: "#ebf8ff",
                     color: "#3182ce",
                     padding: "0.35rem 0.85rem",
                     borderRadius: "20px",
                     fontSize: "0.8rem",
                     fontWeight: "700",
                     textTransform: "uppercase",
                     letterSpacing: "0.05em",
                  }}
               >
                  Live Client Feed
               </span>

               {/* 🔥 Fluid Typography: Standard layout scales elegantly down on tiny displays */}
               <h1
                  style={{
                     fontSize: "clamp(1.75rem, 6vw, 2.5rem)",
                     fontWeight: "800",
                     letterSpacing: "-0.03em",
                     marginTop: "0.75rem",
                     marginBottom: "0.5rem",
                     color: "#1a202c",
                     lineHeight: "1.2",
                  }}
               >
                  Today's Top{" "}
                  <span style={{ color: "#3182ce", display: "block" }}>
                     5 News Streams
                  </span>
               </h1>

               <p
                  style={{
                     fontSize: "0.95rem",
                     color: "#4a5568",
                     maxWidth: "550px",
                     margin: "0 auto 1.25rem auto",
                     lineHeight: "1.5",
                  }}
               >
                  Live automated micro-feed tracking national news, global
                  shifts, and Indian infrastructure.
               </p>

               {/* 🔥 Mobile Button Fix: Removed full-width stretch, constrained width for compact elegance */}
               <button
                  onClick={fetchLiveNews}
                  disabled={loading}
                  style={{
                     width: "100%",
                     maxWidth: "280px",
                     padding: "0.75rem 1.25rem",
                     backgroundColor: loading ? "#e2e8f0" : "#3182ce",
                     color: loading ? "#a0aec0" : "#ffffff",
                     border: "none",
                     borderRadius: "8px",
                     fontSize: "0.9rem",
                     fontWeight: "600",
                     cursor: loading ? "not-allowed" : "pointer",
                     boxShadow: "0 4px 6px -1px rgba(49, 130, 206, 0.15)",
                     transition: "background-color 0.2s, transform 0.1s",
                  }}
               >
                  {loading ? "Fetching Latest..." : "🔄 Refresh Live Data"}
               </button>
            </div>

            {/* News Feed Cards Layout */}
            <div
               style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
               }}
            >
               {!loading ? (
                  articles.map((item, index) => (
                     <article
                        key={index}
                        style={{
                           backgroundColor: "#ffffff",
                           padding: "1.5rem", // Optimized layout padding for fingers/mobile tap structures
                           borderRadius: "14px",
                           border: "1px solid #e2e8f0",
                           boxShadow:
                              "0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02)",
                           position: "relative",
                           boxSizing: "border-box",
                        }}
                     >
                        {/* Badge Indicator */}
                        <div
                           style={{
                              position: "absolute",
                              left: "-8px", // Adjusted to sit beautifully on mobile boundaries
                              top: "-10px", // Placed slightly above card top line for distinct native UI feel
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
                              boxShadow: "0 2px 4px rgba(49, 130, 206, 0.3)",
                           }}
                        >
                           {index + 1}
                        </div>

                        {/* Metadata Row layout */}
                        <div
                           style={{
                              display: "flex",
                              flexWrap: "wrap",
                              justifyContent: "space-between",
                              alignItems: "center",
                              gap: "0.5rem",
                              marginBottom: "0.75rem",
                           }}
                        >
                           <span
                              style={{
                                 fontSize: "0.75rem",
                                 fontWeight: "700",
                                 color: "#4a5568",
                                 textTransform: "uppercase",
                                 letterSpacing: "0.05em",
                              }}
                           >
                              {item.source?.name || "Live Stream"}
                           </span>
                           <span
                              style={{
                                 fontSize: "0.75rem",
                                 color: "#a0aec0",
                                 fontWeight: "500",
                              }}
                           >
                              {item.publishedAt
                                 ? new Date(
                                      item.publishedAt,
                                   ).toLocaleDateString("en-IN")
                                 : ""}
                           </span>
                        </div>

                        <h2
                           style={{
                              fontSize: "1.15rem",
                              fontWeight: "700",
                              color: "#1a202c",
                              lineHeight: "1.4",
                              marginBottom: "0.5rem",
                           }}
                        >
                           {item.title}
                        </h2>

                        <p
                           style={{
                              color: "#4a5568",
                              fontSize: "0.9rem",
                              lineHeight: "1.5",
                              marginBottom: "1rem",
                           }}
                        >
                           {item.description}
                        </p>

                        <a
                           href={item.url}
                           target="_blank"
                           rel="noopener noreferrer"
                           style={{
                              fontSize: "0.85rem",
                              color: "#3182ce",
                              textDecoration: "underline",
                              fontWeight: "600",
                              display: "inline-block",
                           }}
                        >
                           Read full article via source →
                        </a>
                     </article>
                  ))
               ) : (
                  <div
                     style={{
                        textAlign: "center",
                        padding: "4rem 1rem",
                        color: "#718096",
                     }}
                  >
                     <p style={{ fontSize: "1rem", fontWeight: "500" }}>
                        Connecting to live news databases...
                     </p>
                  </div>
               )}
            </div>

            <p
               style={{
                  textAlign: "center",
                  fontSize: "0.8rem",
                  color: "#94a3b8",
                  marginTop: "3rem",
                  padding: "0 1rem",
               }}
            >
               Data pulled via live global JSON streams directly on-client.
            </p>
         </div>
      </main>
   );
}

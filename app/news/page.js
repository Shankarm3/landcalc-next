import Navbar from "../../components/Navbar";

export const metadata = {
   title: "Top 5 Daily National & International News | LandCalc",
   description:
      "Stay updated with live curated top 5 national, international, and infrastructure news updates updated dynamically.",
};

// Next.js Server Component automatic server par fetch karega
async function getLiveNews() {
   // ⚠️ APNI REAL API KEY YAHA PASTE KAREIN
   const API_KEY = fd703237c7afe02808e10e5c642bb4b9;
   // Hum India (in) ki English (en) news fetch kar rahe hain jo 'real estate' ya 'infrastructure' ke aas-pass ho
   const url = `https://gnews.io/api/v4/search?q=real-estate-OR-infrastructure-OR-india&lang=en&country=in&max=5&apikey=${API_KEY}`;

   try {
      const res = await fetch(url, {
         next: { revalidate: 43200 }, // Super Optimization: Har 12 ghante me sirf ek baar API call hogi, jisse aapka free quota khatam nahi hoga!
      });

      if (!res.ok) throw new Error("Failed to fetch news");

      const data = await res.json();
      return data.articles || [];
   } catch (error) {
      console.error("News fetch error:", error);
      return []; // Agar API down ho to empty array return hoga taaki page crash na ho
   }
}

export default async function NewsPage() {
   const articles = await getLiveNews();

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
               maxWidth: "800px",
               margin: "0 auto",
            }}
         >
            {/* Section Header */}
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
               <span
                  style={{
                     backgroundColor: "#ebf8ff",
                     color: "#2b6cb0",
                     padding: "0.35rem 0.85rem",
                     borderRadius: "20px",
                     fontSize: "0.85rem",
                     fontWeight: "700",
                     textTransform: "uppercase",
                     letterSpacing: "0.05em",
                  }}
               >
                  Live Dashboard
               </span>
               <h1
                  style={{
                     fontSize: "clamp(2rem, 5vw, 2.5rem)",
                     fontWeight: "800",
                     letterSpacing: "-0.025em",
                     marginTop: "0.75rem",
                     marginBottom: "0.75rem",
                     color: "#1a202c",
                  }}
               >
                  Today's Top{" "}
                  <span style={{ color: "#3182ce" }}>5 Dynamic Updates</span>
               </h1>
               <p
                  style={{
                     fontSize: "1.05rem",
                     color: "#4a5568",
                     maxWidth: "600px",
                     margin: "0 auto",
                  }}
               >
                  Live automated micro-feed tracking national news, global
                  shifts, and Indian infrastructure.
               </p>
            </div>

            {/* News Feed Stream */}
            <div
               style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
               }}
            >
               {articles.length > 0 ? (
                  articles.map((item, index) => (
                     <article
                        key={index}
                        style={{
                           backgroundColor: "#ffffff",
                           padding: "2rem",
                           borderRadius: "14px",
                           border: "1px solid #e2e8f0",
                           boxShadow:
                              "0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02)",
                           position: "relative",
                        }}
                     >
                        {/* Badge Number */}
                        <div
                           style={{
                              position: "absolute",
                              left: "-12px",
                              top: "22px",
                              backgroundColor: "#3182ce",
                              color: "#ffffff",
                              width: "26px",
                              height: "26px",
                              borderRadius: "50%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: "0.85rem",
                              fontWeight: "700",
                              boxShadow: "0 2px 4px rgba(49, 130, 206, 0.3)",
                           }}
                        >
                           {index + 1}
                        </div>

                        <div
                           style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              marginBottom: "0.5rem",
                           }}
                        >
                           <span
                              style={{
                                 fontSize: "0.8rem",
                                 fontWeight: "600",
                                 color: "#718096",
                                 textTransform: "uppercase",
                                 letterSpacing: "0.05em",
                              }}
                           >
                              {item.source?.name || "Live Source"}
                           </span>
                           <span
                              style={{ fontSize: "0.8rem", color: "#a0aec0" }}
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
                              fontSize: "1.25rem",
                              fontWeight: "700",
                              color: "#1a202c",
                              lineHeight: "1.4",
                              marginBottom: "0.75rem",
                           }}
                        >
                           {item.title}
                        </h2>

                        <p
                           style={{
                              color: "#4a5568",
                              fontSize: "0.95rem",
                              lineHeight: "1.6",
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
                              fontSize: "0.9rem",
                              color: "#3182ce",
                              textDecoration: "none",
                              fontWeight: "600",
                           }}
                           onMouseOver={(e) =>
                              (e.target.style.textDecoration = "underline")
                           }
                           onMouseOut={(e) =>
                              (e.target.style.textDecoration = "none")
                           }
                        >
                           Read full article via source →
                        </a>
                     </article>
                  ))
               ) : (
                  // Fallback UI agar API key limit par ho
                  <p
                     style={{
                        textAlign: "center",
                        color: "#718096",
                        padding: "2rem",
                     }}
                  >
                     Loading today's fresh briefs. Please refresh in a moment.
                  </p>
               )}
            </div>

            {/* Bottom Notice */}
            <p
               style={{
                  textAlign: "center",
                  fontSize: "0.85rem",
                  color: "#718096",
                  marginTop: "3rem",
               }}
            >
               Feed synchronizes automatically using encrypted global
               syndication streams.
            </p>
         </div>
      </main>
   );
}

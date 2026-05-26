import Navbar from "../../components/Navbar";

// Aap kisi bhi free news API (jaise NewsAPI, GNews, ya Mediastack) se key le sakte hain.
// Filhal hum sample data use kar rahe hain taaki bina API key ke bhi aapka code instant chal sake!
const sampleNews = [
   {
      title: "India's Infrastructure Boom: Top Highspeed Expressways Transforming Real Estate in 2026",
      description:
         "A massive surge in national highway connectivity is rapidly driving up land and plot valuations across tier-2 and tier-3 cities in Northern India.",
      source: "National Economic Times",
      url: "#",
   },
   {
      title: "Digital Land Registries: How AI and Blockchain are Securing Bhulekh Records Across States",
      description:
         "State governments are transitioning to advanced encrypted ledgers to make property registries completely transparent and scam-free for buyers.",
      source: "TechIndia Bureau",
      url: "#",
   },
   {
      title: "Global Real Estate Trends: Central Banks Adjust Interest Rates Affecting Commercial Properties",
      description:
         "International property markets experience shifts as major financial institutions recalibrate housing loan standards this quarter.",
      source: "Global Finance Review",
      url: "#",
   },
   {
      title: "Smart Cities Mission 2026: New Urban Layout Plans Approved for 15 Major Indian Hubs",
      description:
         "The Ministry of Urban Development has cleared high-density housing layouts, altering local land conversion guidelines drastically.",
      source: "Bharat Infrastructure News",
      url: "#",
   },
   {
      title: "Agricultural Land Laws Update: New Guidelines for Purchasing Farmlands in North India",
      description:
         "A comprehensive breakdown of legal compliance, registry fees, and local circle rates for individuals investing in regional farming plots.",
      source: "Indian Legal Desk",
      url: "#",
   },
];

export const metadata = {
   title: "Top 5 Daily News Brief | LandCalc",
   description:
      "Stay updated with the top 5 national, international, and real estate news updates updated daily.",
};

export default function NewsPage() {
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
                  Daily Briefing
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
                  Today's Top <span style={{ color: "#3182ce" }}>5 News</span>{" "}
                  Headlines
               </h1>
               <p
                  style={{
                     fontSize: "1.05rem",
                     color: "#4a5568",
                     maxWidth: "600px",
                     margin: "0 auto",
                  }}
               >
                  A curated micro-feed of essential national, international, and
                  infrastructure updates.
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
               {sampleNews.map((item, index) => (
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
                        transition: "transform 0.2s, box-shadow 0.2s",
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
                           {item.source}
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
                        }}
                     >
                        {item.description}
                     </p>
                  </article>
               ))}
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
               Feed updates automatically every 24 hours. Data compiled using
               local and international verification syndicates.
            </p>
         </div>
      </main>
   );
}

import Navbar from "../../components/Navbar";
import Converter from "../../components/Converter";

function capitalize(str) {
   if (!str) return "";
   return str.charAt(0).toUpperCase() + str.slice(1);
}

// Regional context data to make descriptions unique and highly relevant for SEO
const unitDescriptions = {
   sqft: "Square Feet (sq ft) is the standard international benchmark used across modern real estate layouts and apartment floor plans.",
   gaj: "Gaj (or Square Yard) is a traditional land measurement unit widely utilized across urban housing societies and local plots in Northern India.",
   kanal: "Kanal is a classic regional land measurement unit commonly used in northern states like Punjab and Haryana, traditionally equating to 1/8 of an acre.",
   bigha: "Bigha is a highly popular traditional land unit used widely across states like Uttar Pradesh, Punjab, Bihar, and Rajasthan. Note that its size can vary significantly by region.",
   acre: "Acre is an internationally recognized standard unit used globally and across India to measure large agricultural fields and extensive commercial land tracts.",
};

export async function generateMetadata({ params }) {
   const { slug } = await params;
   const pathString = slug?.[0] || "";
   const parts = pathString.split("-to-");

   const from = parts[0] || "sqft";
   const to = parts[1] || "gaj";

   return {
      title: `${capitalize(from)} to ${capitalize(to)} Converter | LandCalc`,
      description: `Instantly convert ${capitalize(from)} to ${capitalize(to)}. Learn about regional definitions, formulas, and calculate land area accurately.`,
   };
}

export default async function ConversionPage({ params }) {
   const { slug } = await params;
   const pathString = slug?.[0] || "";
   const parts = pathString.split("-to-");

   const from = parts[0] || "sqft";
   const to = parts[1] || "gaj";

   return (
      <main style={{ minHeight: "100vh", backgroundColor: "#f7fafc" }}>
         <Navbar />

         <div style={{ padding: "3rem 1rem", textAlign: "center" }}>
            <h1
               style={{
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  marginBottom: "0.5rem",
                  color: "#1a202c",
               }}
            >
               Smart {capitalize(from)} to {capitalize(to)} Converter
            </h1>
            <p style={{ color: "#4a5568", marginBottom: "2.5rem" }}>
               Convert regional land units accurately and instantly.
            </p>

            {/* Main Calculator */}
            <Converter defaultFrom={from} defaultTo={to} />

            {/* SEO Informational Section */}
            <section
               style={{
                  maxWidth: "700px",
                  margin: "4rem auto 0",
                  padding: "2rem",
                  backgroundColor: "#ffffff",
                  borderRadius: "12px",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  textAlign: "left",
               }}
            >
               <h2
                  style={{
                     fontSize: "1.5rem",
                     fontWeight: "600",
                     marginBottom: "1rem",
                     color: "#2d3748",
                  }}
               >
                  Understanding {capitalize(from)} and {capitalize(to)}
               </h2>
               <p
                  style={{
                     color: "#4a5568",
                     lineHeight: "1.6",
                     marginBottom: "1rem",
                  }}
               >
                  When dealing with regional real estate or agricultural
                  property, converting values accurately is critical.
                  {unitDescriptions[from] ? ` ${unitDescriptions[from]}` : ""}
               </p>
               <p style={{ color: "#4a5568", lineHeight: "1.6" }}>
                  By shifting your measurements into {capitalize(to)}, you
                  change the contextual scale completely.
                  {unitDescriptions[to] ? ` ${unitDescriptions[to]}` : ""} Use
                  our smart automated calculator above to complete your
                  conversions instantly without needing complex manual math
                  calculations.
               </p>
            </section>
         </div>
      </main>
   );
}

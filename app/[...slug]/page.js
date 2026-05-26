import Navbar from "../../components/Navbar";
import Converter from "../../components/Converter";

function capitalize(str) {
   if (!str) return "";
   return str.charAt(0).toUpperCase() + str.slice(1);
}

// Regional context data to make descriptions unique and highly relevant for SEO changes committed
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

               {/* --- RENDERED STATE BREAKDOWN TABLE ADDED HERE --- */}
               <div style={{ marginTop: "2.5rem", overflowX: "auto" }}>
                  <h3
                     style={{
                        fontSize: "1.2rem",
                        fontWeight: "600",
                        color: "#2d3748",
                        marginBottom: "0.75rem",
                     }}
                  >
                     Regional Values & Indian State Variations
                  </h3>
                  <table
                     style={{
                        width: "100%",
                        borderCollapse: "collapse",
                        textAlign: "left",
                        fontSize: "0.9rem",
                     }}
                  >
                     <thead>
                        <tr style={{ backgroundColor: "#edf2f7" }}>
                           <th
                              style={{
                                 padding: "0.75rem 0.5rem",
                                 borderBottom: "2px solid #e2e8f0",
                                 color: "#4a5568",
                              }}
                           >
                              State / Region
                           </th>
                           <th
                              style={{
                                 padding: "0.75rem 0.5rem",
                                 borderBottom: "2px solid #e2e8f0",
                                 color: "#4a5568",
                              }}
                           >
                              Standard Local Definition
                           </th>
                        </tr>
                     </thead>
                     <tbody style={{ color: "#4a5568" }}>
                        <tr>
                           <td
                              style={{
                                 padding: "0.75rem 0.5rem",
                                 borderBottom: "1px solid #e2e8f0",
                              }}
                           >
                              <b>Uttar Pradesh (UP)</b>
                           </td>
                           <td
                              style={{
                                 padding: "0.75rem 0.5rem",
                                 borderBottom: "1px solid #e2e8f0",
                              }}
                           >
                              1 Pucca Bigha is commonly stabilized at 27,000 Sq.
                              Ft.
                           </td>
                        </tr>
                        <tr>
                           <td
                              style={{
                                 padding: "0.75rem 0.5rem",
                                 borderBottom: "1px solid #e2e8f0",
                              }}
                           >
                              <b>Punjab & Haryana</b>
                           </td>
                           <td
                              style={{
                                 padding: "0.75rem 0.5rem",
                                 borderBottom: "1px solid #e2e8f0",
                              }}
                           >
                              Land systems scale 1 Kanal exactly to 5,445 Sq.
                              Ft. (equal to 20 Marlas).
                           </td>
                        </tr>
                        <tr>
                           <td
                              style={{
                                 padding: "0.75rem 0.5rem",
                                 borderBottom: "1px solid #e2e8f0",
                              }}
                           >
                              <b>Rajasthan</b>
                           </td>
                           <td
                              style={{
                                 padding: "0.75rem 0.5rem",
                                 borderBottom: "1px solid #e2e8f0",
                              }}
                           >
                              1 Pucca Bigha equates to 27,225 Sq. Ft., whereas 1
                              Kutcha Bigha is 9,075 Sq. Ft.
                           </td>
                        </tr>
                        <tr>
                           <td
                              style={{
                                 padding: "0.75rem 0.5rem",
                                 borderBottom: "1px solid #e2e8f0",
                              }}
                           >
                              <b>Delhi NCR</b>
                           </td>
                           <td
                              style={{
                                 padding: "0.75rem 0.5rem",
                                 borderBottom: "1px solid #e2e8f0",
                              }}
                           >
                              1 Gaj is widely transacted as exactly 9 Square
                              Feet.
                           </td>
                        </tr>
                     </tbody>
                  </table>
               </div>
               {/* ------------------------------------------------- */}
            </section>
         </div>
      </main>
   );
}

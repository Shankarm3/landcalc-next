import Navbar from "../../components/Navbar";
import Converter from "../../components/Converter";

function capitalize(str) {
   if (!str) return "";
   return str.charAt(0).toUpperCase() + str.slice(1);
}

const unitDescriptions = {
   sqft: "Square Feet (sq ft) is the standard international benchmark used across modern real estate layouts and apartment floor plans.",
   gaj: "Gaj (or Square Yard) is a traditional land measurement unit widely utilized across urban housing societies and local plots in Northern India.",
   kanal: "Kanal is a classic regional land measurement unit commonly used in northern states like Punjab and Haryana, traditionally equating to 1/8 of an acre.",
   bigha: "Bigha is a highly popular traditional land unit used widely across states like Uttar Pradesh, Punjab, Bihar, and Rajasthan. Note that its size can vary significantly by region.",
   acre: "Acre is an internationally recognized standard unit used globally and across India to measure large agricultural fields and extensive commercial land tracts.",
   hectare:
      "Hectare (ha) is the official metric system unit used by Indian state governments and land registry departments (Bhulekh) to document agricultural property deeds.",
};

export async function generateMetadata({ params }) {
   const { slug } = await params;
   const pathString = slug?.[0] || "";
   const parts = pathString.split("-to-");

   const from = parts[0] || "sqft";
   const to = parts[1] || "gaj";

   return {
      title: `${capitalize(from)} to ${capitalize(to)} Converter | LandCalc`,
      description: `Instantly convert ${capitalize(from)} to ${capitalize(to)}. Learn about regional definitions, official government formulas, and calculate land area accurately.`,
   };
}

export default async function ConversionPage({ params }) {
   const { slug } = await params;
   const pathString = slug?.[0] || "";
   const parts = pathString.split("-to-");

   const from = parts[0] || "sqft";
   const to = parts[1] || "gaj";

   return (
      // 🔥 Cleaned core wrapper wrapper to let root layout's image breathe
      <div style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>
         <Navbar />

         <div
            style={{
               padding: "4rem 1rem max(5vh, 2rem)",
               maxWidth: "1200px",
               margin: "0 auto",
            }}
         >
            {/* Header Section */}
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
               <h1
                  style={{
                     fontSize: "clamp(2rem, 5vw, 2.75rem)",
                     fontWeight: "800",
                     letterSpacing: "-0.025em",
                     marginBottom: "0.75rem",
                     color: "#ffffff", // 🔥 Pure white contrast adjustment
                     textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                  }}
               >
                  Smart{" "}
                  <span style={{ color: "#63b3ed" }}>{capitalize(from)}</span>{" "}
                  to <span style={{ color: "#63b3ed" }}>{capitalize(to)}</span>{" "}
                  Converter
               </h1>
               <p
                  style={{
                     fontSize: "1.1rem",
                     color: "#e2e8f0", // 🔥 Light slate gray for clean legibility over background
                     maxWidth: "600px",
                     margin: "0 auto",
                     textShadow: "0 1px 2px rgba(0,0,0,0.4)",
                  }}
               >
                  Convert regional Indian land units accurately, instantly, and
                  completely ad-free.
               </p>
            </div>

            {/* Main Interactive Calculator Area */}
            <div
               style={{
                  maxWidth: "520px",
                  margin: "0 auto",
                  backgroundColor: "rgba(255, 255, 255, 0.98)", // 🔥 Frosted glass alpha sync
                  padding: "2.5rem 2rem",
                  borderRadius: "16px",
                  boxShadow:
                     "0 20px 25px -5px rgba(0, 0, 0, 0.25), 0 10px 10px -5px rgba(0, 0, 0, 0.2)",
                  border: "1px solid rgba(226, 232, 240, 0.8)",
                  backdropFilter: "blur(10px)",
               }}
            >
               <Converter defaultFrom={from} defaultTo={to} />
            </div>

            {/* Informational SEO Container */}
            <div style={{ maxWidth: "768px", margin: "4rem auto 0" }}>
               <section
                  style={{
                     backgroundColor: "rgba(255, 255, 255, 0.96)", // 🔥 Translucent informational pane
                     padding: "2.5rem",
                     borderRadius: "16px",
                     boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.15)",
                     border: "1px solid rgba(226, 232, 240, 0.8)",
                     backdropFilter: "blur(8px)",
                  }}
               >
                  <h2
                     style={{
                        fontSize: "1.5rem",
                        fontWeight: "700",
                        marginBottom: "1.25rem",
                        color: "#1a202c",
                        borderBottom: "2px solid #edf2f7",
                        paddingBottom: "0.75rem",
                     }}
                  >
                     Understanding {capitalize(from)} and {capitalize(to)}
                  </h2>

                  <p
                     style={{
                        color: "#2d3748",
                        lineHeight: "1.7",
                        marginBottom: "1.25rem",
                        fontSize: "1rem",
                     }}
                  >
                     When dealing with regional real estate transactions or
                     managing agricultural land paperwork in India, converting
                     value metrics accurately is critical to prevent errors.
                     {unitDescriptions[from]
                        ? ` ${unitDescriptions[from]}`
                        : ""}
                  </p>

                  <p
                     style={{
                        color: "#2d3748",
                        lineHeight: "1.7",
                        marginBottom: "2rem",
                        fontSize: "1rem",
                     }}
                  >
                     By shifting your measurements into local {capitalize(to)},
                     you transition across regional scale standards smoothly.
                     {unitDescriptions[to]
                        ? ` ${unitDescriptions[to]}`
                        : ""}{" "}
                     Use our custom-built computational layout above to execute
                     calculations instantly without manual error risks.
                  </p>

                  {/* Enhanced State Breakdown Data Table */}
                  <div style={{ marginTop: "2.5rem" }}>
                     <h3
                        style={{
                           fontSize: "1.2rem",
                           fontWeight: "600",
                           color: "#1a202c",
                           marginBottom: "1rem",
                        }}
                     >
                        Official Government Registry Definitions (1 Hectare)
                     </h3>
                     <div
                        style={{
                           overflowX: "auto",
                           borderRadius: "8px",
                           border: "1px solid #e2e8f0",
                           backgroundColor: "#ffffff", // Keeps the content matrix table solid and sharp
                        }}
                     >
                        <table
                           style={{
                              width: "100%",
                              borderCollapse: "collapse",
                              textAlign: "left",
                              fontSize: "0.95rem",
                           }}
                        >
                           <thead>
                              <tr style={{ backgroundColor: "#f7fafc" }}>
                                 <th
                                    style={{
                                       padding: "1rem",
                                       borderBottom: "2px solid #e2e8f0",
                                       color: "#4a5568",
                                       fontWeight: "600",
                                    }}
                                 >
                                    State / Region
                                 </th>
                                 <th
                                    style={{
                                       padding: "1rem",
                                       borderBottom: "2px solid #e2e8f0",
                                       color: "#4a5568",
                                       fontWeight: "600",
                                    }}
                                 >
                                    Official Conversion Value
                                 </th>
                              </tr>
                           </thead>
                           <tbody style={{ color: "#4a5568" }}>
                              <tr
                                 style={{ transition: "background-color 0.2s" }}
                              >
                                 <td
                                    style={{
                                       padding: "1rem",
                                       borderBottom: "1px solid #e2e8f0",
                                    }}
                                 >
                                    <b>Uttar Pradesh (UP)</b>
                                 </td>
                                 <td
                                    style={{
                                       padding: "1rem",
                                       borderBottom: "1px solid #e2e8f0",
                                    }}
                                 >
                                    1 Hectare is officially documented as
                                    exactly <b>3.9537 Pucca Bighas</b>.
                                 </td>
                              </tr>
                              <tr
                                 style={{ transition: "background-color 0.2s" }}
                              >
                                 <td
                                    style={{
                                       padding: "1rem",
                                       borderBottom: "1px solid #e2e8f0",
                                    }}
                                 >
                                    <b>Punjab & Haryana</b>
                                 </td>
                                 <td
                                    style={{
                                       padding: "1rem",
                                       borderBottom: "1px solid #e2e8f0",
                                    }}
                                 >
                                    1 Hectare equals exactly{" "}
                                    <b>19.7684 Kanals</b>.
                                 </td>
                              </tr>
                              <tr
                                 style={{ transition: "background-color 0.2s" }}
                              >
                                 <td
                                    style={{
                                       padding: "1rem",
                                       borderBottom: "1px solid #e2e8f0",
                                    }}
                                 >
                                    <b>Global Standard</b>
                                 </td>
                                 <td
                                    style={{
                                       padding: "1rem",
                                       borderBottom: "1px solid #e2e8f0",
                                    }}
                                 >
                                    1 Hectare equals <b>2.471 Acres</b> or{" "}
                                    <b>107,639 Square Feet</b>.
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                     </div>
                  </div>
               </section>
            </div>
         </div>
      </div>
   );
}

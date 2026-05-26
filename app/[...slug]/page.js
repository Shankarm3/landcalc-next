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
            {/* Header Section */}
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
                  Smart{" "}
                  <span style={{ color: "#3182ce" }}>{capitalize(from)}</span>{" "}
                  to <span style={{ color: "#3182ce" }}>{capitalize(to)}</span>{" "}
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
                  Convert regional Indian land units accurately, instantly, and
                  completely ad-free.
               </p>
            </div>

            {/* Main Interactive Calculator Area */}
            <div
               style={{
                  maxWidth: "520px",
                  margin: "0 auto",
                  backgroundColor: "#ffffff",
                  padding: "2.5rem 2rem",
                  borderRadius: "16px",
                  boxShadow:
                     "0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05)",
                  border: "1px solid #e2e8f0",
               }}
            >
               <Converter defaultFrom={from} defaultTo={to} />
            </div>

            {/* Informational SEO Container */}
            <div style={{ maxWidth: "768px", margin: "4rem auto 0" }}>
               <section
                  style={{
                     backgroundColor: "#ffffff",
                     padding: "2.5rem",
                     borderRadius: "16px",
                     boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.03)",
                     border: "1px solid #e2e8f0",
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
                        color: "#4a5568",
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
                        color: "#4a5568",
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
                           color: "#2d3748",
                           marginBottom: "1rem",
                        }}
                     >
                        Regional Definitions & State Benchmarks
                     </h3>
                     <div
                        style={{
                           overflowX: "auto",
                           borderRadius: "8px",
                           border: "1px solid #e2e8f0",
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
                                    Standard Local Definition
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
                                    1 Pucca Bigha is commonly stabilized at
                                    27,000 Sq. Ft.
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
                                    Land systems scale 1 Kanal exactly to 5,445
                                    Sq. Ft. (equal to 20 Marlas).
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
                                    <b>Rajasthan</b>
                                 </td>
                                 <td
                                    style={{
                                       padding: "1rem",
                                       borderBottom: "1px solid #e2e8f0",
                                    }}
                                 >
                                    1 Pucca Bigha equates to 27,225 Sq. Ft.,
                                    whereas 1 Kutcha Bigha is 9,075 Sq. Ft.
                                 </td>
                              </tr>
                              <tr
                                 style={{ transition: "background-color 0.2s" }}
                              >
                                 <td style={{ padding: "1rem" }}>
                                    <b>Delhi NCR</b>
                                 </td>
                                 <td style={{ padding: "1rem" }}>
                                    1 Gaj is widely transacted as exactly 9
                                    Square Feet.
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                     </div>
                  </div>
               </section>
            </div>
         </div>
      </main>
   );
}

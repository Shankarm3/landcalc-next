import Navbar from "../../components/Navbar";
import Converter from "../../components/Converter";

function capitalize(str) {
   if (!str) return "";
   return str.charAt(0).toUpperCase() + str.slice(1);
}

export async function generateMetadata({ params }) {
   const { slug } = await params;

   // If a user goes to /kanal-to-sqft, slug[0] will be "kanal-to-sqft"
   const pathString = slug?.[0] || "";
   const parts = pathString.split("-to-");

   const from = parts[0] || "sqft";
   const to = parts[1] || "gaj";

   return {
      title: `${capitalize(from)} to ${capitalize(to)} Converter | LandCalc`,
      description: `Instantly convert ${capitalize(from)} to ${capitalize(to)}. Accurate regional land measurements.`,
   };
}

export default async function ConversionPage({ params }) {
   const { slug } = await params;

   // Parse the string "kanal-to-sqft" into separate units safely
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
            <p style={{ color: "#4a5568", marginBottom: "2rem" }}>
               Convert regional land units accurately and instantly.
            </p>

            <Converter defaultFrom={from} defaultTo={to} />
         </div>
      </main>
   );
}

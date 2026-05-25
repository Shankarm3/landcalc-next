import Navbar from "../../components/Navbar";
import Converter from "../../components/Converter";

function capitalize(str) {
   if (!str) return "";
   return str.charAt(0).toUpperCase() + str.slice(1);
}

// 1. Safe Metadata Generation
export async function generateMetadata({ params }) {
   // Await params safely in case Next.js treats it as a Promise
   const resolvedParams = await params;
   const from = resolvedParams?.from || "sqft";
   const to = resolvedParams?.to || "gaj";

   return {
      title: `${capitalize(from)} to ${capitalize(to)} Converter | LandCalc`,
      description: `Instantly convert ${capitalize(from)} to ${capitalize(to)}. Accurate regional land measurements and calculators.`,
   };
}

// 2. Main Page Component
export default async function ConversionPage({ params }) {
   // Resolve params safely for the component
   const resolvedParams = await params;
   const from = resolvedParams?.from || "sqft";
   const to = resolvedParams?.to || "gaj";

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

            {/* Pass the dynamic values cleanly into your client component */}
            <Converter defaultFrom={from} defaultTo={to} />
         </div>
      </main>
   );
}

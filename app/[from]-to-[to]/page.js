import Navbar from "../../components/Navbar";
import Converter from "../../components/Converter";

function capitalize(str) {
   if (!str) return "";
   return str.charAt(0).toUpperCase() + str.slice(1);
}

// 1. Dynamic SEO Metadata Generation (Next.js 15 style)
export async function generateMetadata({ params }) {
   // Next.js 15 requires awaiting params before accessing properties
   const { from, to } = await params;

   return {
      title: `${capitalize(from)} to ${capitalize(to)} Converter | LandCalc`,
      description: `Instantly convert ${capitalize(from)} to ${capitalize(to)}. Accurate regional land measurements and calculators.`,
   };
}

// 2. Main Page Component (Next.js 15 style)
export default async function ConversionPage({ params }) {
   // Explicitly await the params promise before reading values
   const { from, to } = await params;

   // Simple fallback check to make sure values exist before rendering components
   if (!from || !to) {
      return (
         <main style={{ minHeight: "100vh", backgroundColor: "#f7fafc" }}>
            <Navbar />
            <div style={{ padding: "3rem 1rem", textAlign: "center" }}>
               <h1>Loading Converter...</h1>
            </div>
         </main>
      );
   }

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

            {/* Pass the verified dynamic values cleanly into your client component */}
            <Converter defaultFrom={from} defaultTo={to} />
         </div>
      </main>
   );
}

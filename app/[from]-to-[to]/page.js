import Navbar from "../../components/Navbar";
import Converter from "../../components/Converter";

// Function to capitalize first letters for clean SEO titles
function capitalize(str) {
   if (!str) return "";
   return str.charAt(0).toUpperCase() + str.slice(1);
}

// 1. Dynamic SEO Metadata Generation
export async function generateMetadata({ params }) {
   const { from, to } = await params;

   const fromUnit = capitalize(from);
   const toUnit = capitalize(to);

   return {
      title: `${fromUnit} to ${toUnit} Converter | Accurate Land Calculator`,
      description: `Instantly convert ${fromUnit} to ${toUnit}. Use our free smart land area calculator for precise regional conversions, formulas, and real estate calculations.`,
      alternates: {
         canonical: `https://yourdomain.com/${from}-to-${to}`,
      },
   };
}

// 2. The Page Layout
export default async function ConversionPage({ params }) {
   const { from, to } = await params;

   return (
      <main>
         <Navbar />
         <div style={{ padding: "2rem 1rem", textAlign: "center" }}>
            <h1
               style={{
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  marginBottom: "0.5rem",
               }}
            >
               Smart {capitalize(from)} to {capitalize(to)} Converter
            </h1>
            <p style={{ color: "#4a5568", marginBottom: "2rem" }}>
               Convert regional land units accurately and instantly.
            </p>

            {/* Pass props to Converter to automatically set dropdown defaults */}
            <Converter defaultFrom={from} defaultTo={to} />
         </div>
      </main>
   );
}

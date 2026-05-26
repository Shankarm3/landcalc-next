import Link from "next/link";

export default function Navbar() {
   return (
      <nav
         style={{
            backgroundColor: "#1a202c", // Deep premium slate/dark background
            padding: "1rem 2rem",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "system-ui, -apple-system, sans-serif",
         }}
      >
         {/* Left side: Brand Logo / Name */}
         <Link
            href="/"
            style={{
               color: "#ffffff",
               textDecoration: "none",
               fontSize: "1.3rem",
               fontWeight: "800",
               letterSpacing: "-0.025em",
            }}
         >
            Land<span style={{ color: "#4299e1" }}>Calc</span>
         </Link>

         {/* Right side: Clean, Spacious Navigation Links */}
         <div
            style={{
               display: "flex",
               gap: "1.5rem",
               alignItems: "center",
            }}
         >
            <Link
               href="/news"
               style={{
                  color: "#e2e8f0",
                  textDecoration: "none",
                  fontSize: "0.95rem",
                  fontWeight: "500",
               }}
            >
               Top 5 News
            </Link>
            <Link
               href="/"
               style={{
                  color: "#e2e8f0",
                  textDecoration: "none",
                  fontSize: "0.95rem",
                  fontWeight: "500",
               }}
            >
               Home
            </Link>
            <Link
               href="/bigha-to-kanal"
               style={{
                  color: "#e2e8f0",
                  textDecoration: "none",
                  fontSize: "0.95rem",
                  fontWeight: "500",
               }}
            >
               Bigha to Kanal
            </Link>
            <Link
               href="/sqft-to-gaj"
               style={{
                  color: "#e2e8f0",
                  textDecoration: "none",
                  fontSize: "0.95rem",
                  fontWeight: "500",
               }}
            >
               Sqft to Gaj
            </Link>
            <Link
               href="/kanal-to-acre"
               style={{
                  color: "#e2e8f0",
                  textDecoration: "none",
                  fontSize: "0.95rem",
                  fontWeight: "500",
               }}
            >
               Kanal to Acre
            </Link>
         </div>
      </nav>
   );
}

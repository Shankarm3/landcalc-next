import Link from "next/link";

export default function NotFound() {
   return (
      <div style={{
         display: "flex",
         flexDirection: "column",
         alignItems: "center",
         justifyContent: "center",
         minHeight: "100vh",
         backgroundColor: "#1a202c",
         color: "#ffffff",
         fontFamily: "system-ui, sans-serif",
         textAlign: "center",
         padding: "1rem"
      }}>
         <h1 style={{ fontSize: "6rem", fontWeight: "900", margin: "0", color: "#63b3ed" }}>404</h1>
         <h2 style={{ fontSize: "1.75rem", fontWeight: "700", marginBottom: "1rem" }}>Invalid Conversion Unit</h2>
         <p style={{ color: "#a0aec0", maxWidth: "450px", marginBottom: "2rem", lineHeight: "1.6" }}>
            The land area measurement combination you are looking for does not exist or uses unsupported regional metrics.
         </p>
         <Link href="/" style={{
            backgroundColor: "#3182ce",
            color: "#ffffff",
            padding: "0.75rem 1.5rem",
            borderRadius: "8px",
            fontWeight: "600",
            textDecoration: "none",
            transition: "background 0.2s"
         }}>
            Return to Calculator Home
         </Link>
      </div>
   );
}

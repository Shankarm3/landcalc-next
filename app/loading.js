export default function GlobalLoading() {
   return (
      <div style={{
         display: "flex",
         alignItems: "center",
         justifyContent: "center",
         minHeight: "80vh",
         fontFamily: "system-ui, sans-serif",
         color: "#ffffff"
      }}>
         <div style={{ textAlign: "center" }}>
            <div style={{
               width: "40px",
               height: "40px",
               border: "4px solid rgba(255, 255, 255, 0.1)",
               borderTopColor: "#3182ce",
               borderRadius: "50%",
               animation: "spin 1s linear infinite",
               margin: "0 auto 1rem"
            }} />
            <p style={{ color: "#94a3b8", fontSize: "0.9rem", fontWeight: "600" }}>Syncing Engine Feeds...</p>
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
         </div>
      </div>
   );
}

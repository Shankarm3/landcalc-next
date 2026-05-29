"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";

export default function PlotCalcPage() {
   // Track only the 4 physical outer sides of the plot
   const [dimensions, setDimensions] = useState({
      sideA: "",
      sideB: "",
      sideC: "",
      sideD: "",
   });

   // Handle interactive wireframe highlight state values
   const [activeSide, setActiveSide] = useState(null);
   const [result, setResult] = useState(null);
   const [unit, setUnit] = useState("feet");

   const handleInputChange = (e) => {
      const { name, value } = e.target;
      setDimensions((prev) => ({ ...prev, [name]: value }));
   };

   const calculateArea = (e) => {
      e.preventDefault();
      
      const a = parseFloat(dimensions.sideA);
      const b = parseFloat(dimensions.sideB);
      const c = parseFloat(dimensions.sideC);
      const d = parseFloat(dimensions.sideD);

      if (!a || !b || !c || !d) {
         alert("Please fill in all four side dimensions.");
         return;
      }

      // Traditional Sub-continental Agra Method (Average of opposite sides)
      const averageLength = (a + c) / 2;
      const averageWidth = (b + d) / 2;
      const totalSqFt = averageLength * averageWidth;

      setResult({
         base: totalSqFt.toFixed(1),
         meters: (totalSqFt * 0.092903).toFixed(1),
         gaj: (totalSqFt * 0.111111).toFixed(1),
         marla: (totalSqFt * 0.003673).toFixed(2),
         bigha: (totalSqFt * 0.000037).toFixed(3),
      });
   };
   return (
      <div style={{ 
         fontFamily: "system-ui, sans-serif", 
         backgroundColor: "#0a0f1d", 
         minHeight: "100vh",
         display: "flex",
         flexDirection: "column"
      }}>
         <Navbar />
         <style dangerouslySetInnerHTML={{ __html: `
            .p-in { 
               width: 100%; 
               background: #f8fafc; 
               border: 1px solid #cbd5e1; 
               border-radius: 6px; 
               padding: 0.45rem; 
               font-size: 0.85rem; 
               color: #0f172a; 
               font-family: monospace; 
               outline: none; 
               box-sizing: border-box; 
            }
            .p-in:focus { 
               border-color: #3182ce; 
               background: #ffffff;
            }
            .p-btn { 
               width: 100%; 
               background: linear-gradient(to right, #4299e1, #3182ce); 
               color: white; 
               border: none; 
               border-radius: 8px; 
               padding: 0.65rem; 
               font-size: 0.9rem; 
               font-weight: 700; 
               cursor: pointer; 
            }
         `}} />

         {/* FLOATING PAGE CONTENT WRAPPER */}
         <div style={{ 
            width: "100%", 
            maxWidth: "460px", 
            margin: "0 auto",
            padding: "0.75rem 0.75rem 1.5rem", // Gives space at the bottom just like currency page
            boxSizing: "border-box"
         }}>
            
            {/* Page Header */}
            <div style={{ textAlign: "center", marginBottom: "0.75rem" }}>
               <h1 style={{ fontSize: "1.5rem", fontWeight: "900", color: "#fff", margin: "0 0 0.15rem", letterSpacing: "-0.02em" }}>
                  Irregular <span style={{ background: "linear-gradient(to right, #63b3ed, #3182ce)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Plot</span> Scaler
               </h1>
               <p style={{ fontSize: "0.75rem", color: "#94a3b8", margin: 0 }}>Enter 4 sides for an instant area computation.</p>
            </div>

            {/* 🚀 FLOATING WHITE CARD CONTAINER MATCHING CURRENCY CARD */}
            <div style={{ 
               backgroundColor: "#ffffff", 
               padding: "1rem 0.85rem", 
               borderRadius: "16px", // Rounded on all 4 sides to float beautifully
               color: "#0f172a", 
               boxSizing: "border-box",
               boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)"
            }}>
               
               {/* ROW LABEL SELECT DROPDOWN */}
               <div style={{ 
                  display: "flex", 
                  justifyContent: "space-between", 
                  alignItems: "center", 
                  gap: "0.5rem", 
                  marginBottom: "0.5rem", 
                  borderBottom: "2px solid #e2e8f0", 
                  paddingBottom: "0.3rem", 
                  width: "100%",
                  boxSizing: "border-box"
               }}>
                  <span style={{ color: "#0f172a", whiteSpace: "nowrap", fontSize: "0.85rem", fontWeight: "900" }}>
                     Plot Dimensions
                  </span>
                  <select 
                     value={unit} 
                     onChange={(e) => setUnit(e.target.value)} 
                     style={{ 
                        border: "1px solid #cbd5e1", 
                        borderRadius: "6px", 
                        fontSize: "0.75rem", 
                        padding: "0.2rem 0.4rem", 
                        color: "#3182ce", 
                        fontWeight: "800", 
                        outline: "none",
                        backgroundColor: "#ffffff",
                        maxWidth: "120px", 
                        cursor: "pointer"
                     }}
                  >
                     <option value="feet">Feet (ft)</option>
                     <option value="meters">Meters (m)</option>
                     <option value="yards">Yards (yd)</option>
                  </select>
               </div>

               {/* 📐 HIGH CONTRAST SVG DIAGRAM */}
               <div style={{ backgroundColor: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "8px", padding: "0.5rem 0.4rem", display: "flex", justifyContent: "center", marginBottom: "0.6rem" }}>
                  <svg viewBox="0 0 200 120" style={{ width: "100%", maxWidth: "230px", height: "auto" }}>
                     <polygon points="42,18 158,12 168,102 32,107" fill="#ffffff" stroke="#94a3b8" strokeWidth="1.5" />
                     
                     <line x1="42" y1="18" x2="158" y2="12" stroke={activeSide === "sideA" ? "#3182ce" : "#475569"} strokeWidth={activeSide === "sideA" ? "3.5" : "2"} />
                     <line x1="158" y1="12" x2="168" y2="102" stroke={activeSide === "sideB" ? "#3182ce" : "#475569"} strokeWidth={activeSide === "sideB" ? "3.5" : "2"} />
                     <line x1="168" y1="102" x2="32" y2="107" stroke={activeSide === "sideC" ? "#3182ce" : "#475569"} strokeWidth={activeSide === "sideC" ? "3.5" : "2"} />
                     <line x1="32" y1="107" x2="42" y2="18" stroke={activeSide === "sideD" ? "#3182ce" : "#475569"} strokeWidth={activeSide === "sideD" ? "3.5" : "2"} />
                     
                     <text x="100" y="8" fill={activeSide === "sideA" ? "#3182ce" : "#0f172a"} fontSize="9" fontWeight="900" textAnchor="middle">SIDE A</text>
                     <text x="182" y="60" fill={activeSide === "sideB" ? "#3182ce" : "#0f172a"} fontSize="9" fontWeight="900" textAnchor="middle">SIDE B</text>
                     <text x="100" y="117" fill={activeSide === "sideC" ? "#3182ce" : "#0f172a"} fontSize="9" fontWeight="900" textAnchor="middle">SIDE C</text>
                     <text x="17" y="60" fill={activeSide === "sideD" ? "#3182ce" : "#0f172a"} fontSize="9" fontWeight="900" textAnchor="middle">SIDE D</text>
                  </svg>
               </div>
                  {/* FORM INPUTS */}
                  <form onSubmit={calculateArea} style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "0.75rem" }}>
                     <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
                        {["sideA", "sideB", "sideC", "sideD"].map((side, i) => (
                           <div key={side}>
                              <label style={{ display: "block", fontSize: "0.7rem", fontWeight: "700", color: "#475569", marginBottom: "0.15rem" }}>
                                 Side {["A (Top)", "B (Right)", "C (Bottom)", "D (Left)"][i]}
                              </label>
                              <input type="number" step="any" name={side} value={dimensions[side]} onChange={handleInputChange} onFocus={() => setActiveSide(side)} onBlur={() => setActiveSide(null)} placeholder="0.0" className="p-in" required />
                           </div>
                        ))}
                     </div>
                     <div style={{ marginTop: "0.35rem" }}>
                        <button type="submit" className="p-btn">Calculate Area</button>
                     </div>
                  </form>

                  {/* 🚀 ALWAYS-VISIBLE RESULTS BLOCK MATRICES */}
                  <div style={{ backgroundColor: "#0f172a", borderRadius: "10px", padding: "0.5rem 0.6rem", color: "#ffffff" }}>
                     <div style={{ borderBottom: "1px solid #1e293b", paddingBottom: "0.3rem", marginBottom: "0.4rem" }}>
                        <span style={{ fontSize: "0.7rem", color: "#94a3b8", display: "block", fontWeight: "600" }}>Calculated Net Area:</span>
                        <div style={{ display: "flex", alignItems: "baseline", gap: "0.25rem" }}>
                           <span style={{ fontSize: "1.6rem", fontWeight: "900", color: "#63b3ed", fontFamily: "monospace" }}>
                              {result ? result.base : "0.0"}
                           </span>
                           <span style={{ fontSize: "0.8rem", color: "#63b3ed", fontWeight: "700" }}>Sq. {unit}</span>
                        </div>
                     </div>
                     
                     <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.4rem", fontSize: "0.8rem" }}>
                        <div style={{ background: "rgba(255,255,255,0.03)", padding: "0.35rem 0.5rem", borderRadius: "5px", border: "1px solid rgba(255,255,255,0.05)" }}>
                           <span style={{ color: "#94a3b8", fontSize: "0.65rem", display: "block" }}>Sq. Meters</span>
                           <b style={{ color: "#f8fafc", fontFamily: "monospace" }}>{result ? result.meters : "0.0"} m²</b>
                        </div>
                        <div style={{ background: "rgba(255,255,255,0.03)", padding: "0.35rem 0.5rem", borderRadius: "5px", border: "1px solid rgba(255,255,255,0.05)" }}>
                           <span style={{ color: "#94a3b8", fontSize: "0.65rem", display: "block" }}>Gaj (Yards)</span>
                           <b style={{ color: "#f8fafc", fontFamily: "monospace" }}>{result ? result.gaj : "0.0"}</b>
                        </div>
                        <div style={{ background: "rgba(255,255,255,0.03)", padding: "0.35rem 0.5rem", borderRadius: "5px", border: "1px solid rgba(255,255,255,0.05)" }}>
                           <span style={{ color: "#94a3b8", fontSize: "0.65rem", display: "block" }}>Marla</span>
                           <b style={{ color: "#34d399", fontFamily: "monospace" }}>{result ? result.marla : "0.00"}</b>
                        </div>
                        <div style={{ background: "rgba(255,255,255,0.03)", padding: "0.35rem 0.5rem", borderRadius: "5px", border: "1px solid rgba(255,255,255,0.05)" }}>
                           <span style={{ color: "#94a3b8", fontSize: "0.65rem", display: "block" }}>Bigha</span>
                           <b style={{ color: "#34d399", fontFamily: "monospace" }}>{result ? result.bigha : "0.000"}</b>
                        </div>
                     </div>

                     <p style={{ fontSize: "0.62rem", color: "#94a3b8", marginTop: "0.4rem", paddingTop: "0.4rem", borderTop: "1px dashed rgba(255, 255, 255, 0.1)", textAlign: "center", fontStyle: "italic", lineHeight: "1.2" }}>
                        *Calculated using the traditional Surveyor's Average (Agra Method). Ideal for standard residential plots.
                     </p>
                  </div>

            </div>
         </div>
      </div>
   );
}

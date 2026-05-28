"use client";

import { useState, useEffect } from "react";

export default function Converter({ defaultFrom = "sqft", defaultTo = "gaj" }) {
   const [value, setValue] = useState("");
   const [fromUnit, setFromUnit] = useState(defaultFrom);
   const [toUnit, setToUnit] = useState(defaultTo);
   const [result, setResult] = useState(0);
   const [isAnimating, setIsAnimating] = useState(false);
   const [isOpen, setIsOpen] = useState(true); // Default open configuration

   const sqftMap = {
      sqft: { label: "Square Feet (Sqft)", baseValue: 1 },
      gaj: { label: "Gaj (Sq Yard)", baseValue: 9 },
      kanal: { label: "Kanal", baseValue: 5445 },
      bigha_up: { label: "UP Pucca Bigha", baseValue: 27225 },
      bigha_uk: { label: "Uttarakhand Bigha", baseValue: 6804 },
      bigha_standard: { label: "Standard Bigha", baseValue: 27000 },
      bigha_bengal: { label: "Bengal/Kacha Bigha", baseValue: 14400 },
      acre: { label: "Acre", baseValue: 43560 },
      hectare: { label: "Hectare", baseValue: 107639 },
   };

   useEffect(() => {
      setFromUnit(defaultFrom);
      setToUnit(defaultTo);
   }, [defaultFrom, defaultTo]);

   const performConversion = (inputValue, from, to) => {
      if (!inputValue || isNaN(inputValue)) {
         setResult(0);
         return;
      }
      const valueInSqft = parseFloat(inputValue) * (sqftMap[from]?.baseValue || 1);
      const finalValue = valueInSqft / (sqftMap[to]?.baseValue || 1);
      setIsAnimating(true);
      setResult(finalValue.toFixed(2));
   };

   useEffect(() => {
      performConversion(value, fromUnit, toUnit);
   }, [value, fromUnit, toUnit]);

   useEffect(() => {
      if (isAnimating) {
         const timer = setTimeout(() => setIsAnimating(false), 150);
         return () => clearTimeout(timer);
      }
   }, [isAnimating]);

   const handleSwap = () => {
      const temp = fromUnit;
      setFromUnit(toUnit);
      setToUnit(temp);
   };

   const inputStyle = {
      width: "100%",
      padding: "0.6rem 0.75rem",
      fontSize: "0.9rem",
      border: "1px solid #e2e8f0",
      borderRadius: "8px",
      outline: "none",
      boxSizing: "border-box",
      color: "#1a202c",
      backgroundColor: "#ffffff",
      fontWeight: "600",
      boxShadow: "inset 0 1px 2px rgba(0,0,0,0.05)",
      transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
   };

   const labelStyle = {
      display: "block",
      fontSize: "0.75rem",
      fontWeight: "600",
      color: "#4a5568",
      marginBottom: "0.2rem",
   };
   return (
      <div style={{ textAlign: "left", fontFamily: "system-ui, sans-serif", padding: "0.15rem" }}>
         
         {/* Title Accent */}
         <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
            <span style={{ width: "4px", height: "16px", backgroundColor: "#3182ce", borderRadius: "2px" }} />
            <h2 style={{ fontSize: "1.05rem", fontWeight: "800", color: "#1a202c", letterSpacing: "-0.01em", margin: "0" }}>
               Live Engine Configurator
            </h2>
         </div>

         {/* Value Input Box */}
         <div style={{ marginBottom: "0.5rem" }}>
            <label style={labelStyle}>Enter Measurement Value</label>
            <input
               type="number"
               placeholder="e.g. 5"
               value={value}
               onChange={(e) => setValue(e.target.value)}
               style={inputStyle}
               onFocus={(e) => e.currentTarget.style.borderColor = "#3182ce"}
               onBlur={(e) => e.currentTarget.style.borderColor = "#e2e8f0"}
            />
         </div>

         {/* Grid Menu Selectors */}
         <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", gap: "0.4rem", marginBottom: "0.75rem" }}>
            <div>
               <label style={labelStyle}>From</label>
               <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)} style={inputStyle}>
                  {Object.keys(sqftMap).map((key) => (
                     <option key={key} value={key}>{sqftMap[key].label}</option>
                  ))}
               </select>
            </div>

            {/* Futuristic Glowing Swap Button */}
            <div style={{ paddingTop: "1.1rem" }}>
               <button
                  onClick={handleSwap}
                  type="button"
                  style={{
                     backgroundColor: "#edf2f7", border: "1px solid #cbd5e0", width: "32px", height: "32px", borderRadius: "50%",
                     cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.8rem",
                     boxShadow: "0 2px 4px rgba(0,0,0,0.05)", transition: "all 0.2s ease"
                  }}
                  onMouseEnter={(e) => {
                     e.currentTarget.style.transform = "rotate(180deg) scale(1.05)";
                     e.currentTarget.style.backgroundColor = "#3182ce";
                     e.currentTarget.style.color = "#ffffff";
                  }}
                  onMouseLeave={(e) => {
                     e.currentTarget.style.transform = "rotate(0deg) scale(1)";
                     e.currentTarget.style.backgroundColor = "#edf2f7";
                     e.currentTarget.style.color = "initial";
                  }}
               >
                  🔄
               </button>
            </div>

            <div>
               <label style={labelStyle}>To</label>
               <select value={toUnit} onChange={(e) => setToUnit(e.target.value)} style={inputStyle}>
                  {Object.keys(sqftMap).map((key) => (
                     <option key={key} value={key}>{sqftMap[key].label}</option>
                  ))}
               </select>
            </div>
         </div>

         {/* Results Panel */}
         <div style={{ 
            background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)", 
            padding: "0.6rem 0.75rem", 
            borderRadius: "10px", 
            textAlign: "center", 
            border: "1px solid #e2e8f0", 
            marginTop: "0.5rem",
            boxShadow: "0 4px 6px -1px rgba(0,0,0,0.02)",
            marginBottom: "0.75rem"
         }}>
            <h3 style={{ fontSize: "0.65rem", color: "#4a5568", fontWeight: "700", textTransform: "uppercase", margin: "0 0 0.05rem 0", letterSpacing: "0.075em" }}>
               Computed Valuation Result
            </h3>
            <div style={{ 
               fontSize: "1.85rem", 
               fontWeight: "900", 
               background: parseFloat(result) > 0 ? "linear-gradient(to right, #3182ce, #4299e1)" : "#2d3748",
               WebkitBackgroundClip: parseFloat(result) > 0 ? "text" : "transparent",
               WebkitTextFillColor: parseFloat(result) > 0 ? "transparent" : "#2d3748",
               transform: isAnimating ? "scale(1.04)" : "scale(1)", 
               transition: "all 0.1s cubic-bezier(0.175, 0.885, 0.32, 1.15)", 
               display: "inline-block" 
            }}>
               {result}
            </div>
         </div>

         {/* Collapsible Table Block Element */}
         {value && !isNaN(value) && parseFloat(value) > 0 && (
            <div style={{ border: "1px solid #e2e8f0", borderRadius: "8px", overflow: "hidden", marginTop: "1rem" }}>
               <button 
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  style={{
                     width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center",
                     padding: "0.5rem 0.75rem", backgroundColor: "#f8fafc", border: "none", borderBottom: isOpen ? "1px solid #e2e8f0" : "none",
                     cursor: "pointer", outline: "none"
                  }}
               >
                  <span style={{ fontSize: "0.75rem", fontWeight: "800", color: "#2d3748", textTransform: "uppercase", letterSpacing: "0.025em" }}>
                     All-Unit Conversion Matrix ({isOpen ? "Hide" : "Show"})
                  </span>
                  <span style={{ fontSize: "0.7rem", color: "#718096", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}>
                     ▼
                  </span>
               </button>

               {isOpen && (
                  <div style={{ overflowX: "auto" }}>
                     <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.8rem", textAlign: "left" }}>
                        <thead>
                           <tr style={{ backgroundColor: "#f8fafc", borderBottom: "1px solid #e2e8f0" }}>
                              <th style={{ padding: "0.5rem 0.75rem", fontWeight: "600", color: "#4a5568" }}>Unit</th>
                              <th style={{ padding: "0.5rem 0.75rem", fontWeight: "600", color: "#4a5568", textAlign: "right" }}>Value</th>
                           </tr>
                        </thead>
                        <tbody>
                           {Object.keys(sqftMap).map((key, index) => {
                              const inputInSqft = parseFloat(value) * sqftMap[fromUnit].baseValue;
                              const rowValue = inputInSqft / sqftMap[key].baseValue;
                              return (
                                 <tr key={key} style={{ borderBottom: "1px solid #edf2f7", backgroundColor: index % 2 === 0 ? "#ffffff" : "#fdfdfd" }}>
                                    <td style={{ padding: "0.4rem 0.75rem", color: "#4a5568", fontWeight: "500" }}>{sqftMap[key].label}</td>
                                    <td style={{ padding: "0.4rem 0.75rem", color: "#1a202c", fontWeight: "700", textAlign: "right" }}>
                                       {rowValue < 0.01 ? rowValue.toFixed(4) : rowValue.toFixed(2)}
                                    </td>
                                 </tr>
                              );
                           })}
                        </tbody>
                     </table>
                  </div>
               )}
            </div>
         )}

      </div>
   );
}

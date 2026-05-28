"use client";

import { useState, useEffect } from "react";

export default function Converter({ defaultFrom = "sqft", defaultTo = "gaj" }) {
   const [value, setValue] = useState("");
   const [fromUnit, setFromUnit] = useState(defaultFrom);
   const [toUnit, setToUnit] = useState(defaultTo);
   const [result, setResult] = useState(0);
   const [isAnimating, setIsAnimating] = useState(false);
   const [isOpen, setIsOpen] = useState(false);

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
      padding: "0.5rem 0.75rem",
      fontSize: "0.9rem",
      border: "1px solid #cbd5e0",
      borderRadius: "6px",
      outline: "none",
      boxSizing: "border-box",
      color: "#2d3748",
      backgroundColor: "#f8fafc",
   };

   const labelStyle = {
      display: "block",
      fontSize: "0.75rem",
      fontWeight: "600",
      color: "#4a5568",
      marginBottom: "0.2rem",
   };
   return (
      <div style={{ textAlign: "left", fontFamily: "system-ui, sans-serif", padding: "0.25rem" }}>
         <h2 style={{ fontSize: "1.1rem", fontWeight: "700", color: "#1a202c", marginBottom: "0.5rem" }}>
            Area Converter
         </h2>

         {/* Value Input Section */}
         <div style={{ marginBottom: "0.5rem" }}>
            <label style={labelStyle}>Enter Measurement Value</label>
            <input
               type="number"
               placeholder="e.g. 5"
               value={value}
               onChange={(e) => setValue(e.target.value)}
               style={inputStyle}
            />
         </div>

         {/* Single Row Units Selectors Grid with Inline Balanced Labels */}
         <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", gap: "0.4rem", marginBottom: "0.75rem" }}>
            <div>
               <label style={labelStyle}>From</label>
               <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)} style={inputStyle}>
                  {Object.keys(sqftMap).map((key) => (
                     <option key={key} value={key}>{sqftMap[key].label}</option>
                  ))}
               </select>
            </div>

            {/* Vertical Alignment Fix for Swap Button */}
            <div style={{ paddingTop: "1.1rem" }}>
               <button
                  onClick={handleSwap}
                  type="button"
                  style={{
                     backgroundColor: "#e2e8f0", border: "none", width: "30px", height: "30px", borderRadius: "50%",
                     cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.8rem"
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

         {/* Micro Result Display Container */}
         <div style={{ backgroundColor: "#f7fafc", padding: "0.5rem", borderRadius: "8px", textAlign: "center", border: "1px dashed #e2e8f0", marginBottom: "0.5rem" }}>
            <h3 style={{ fontSize: "0.65rem", color: "#718096", textTransform: "uppercase", marginBottom: "0.05rem", letterSpacing: "0.05em" }}>
               Converted Value
            </h3>
            <div style={{ fontSize: "1.6rem", fontWeight: "800", color: isAnimating ? "#3182ce" : "#2d3748", transform: isAnimating ? "scale(1.03)" : "scale(1)", transition: "all 0.1s ease", display: "inline-block" }}>
               {result}
            </div>
         </div>

         {/* Collapsible Overview Section */}
         {value && !isNaN(value) && parseFloat(value) > 0 && (
            <div style={{ border: "1px solid #e2e8f0", borderRadius: "6px", overflow: "hidden" }}>
               <button 
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  style={{
                     width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center",
                     padding: "0.4rem 0.6rem", backgroundColor: "#f8fafc", border: "none", borderBottom: isOpen ? "1px solid #e2e8f0" : "none",
                     cursor: "pointer", outline: "none"
                  }}
               >
                  <span style={{ fontSize: "0.7rem", fontWeight: "700", color: "#2d3748", textTransform: "uppercase" }}>
                     All-Unit Overview ({isOpen ? "Hide" : "Show"})
                  </span>
                  <span style={{ fontSize: "0.65rem", color: "#718096", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}>
                     ▼
                  </span>
               </button>

               {isOpen && (
                  <div style={{ overflowX: "auto" }}>
                     <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.75rem" }}>
                        <tbody>
                           {Object.keys(sqftMap).map((key, index) => {
                              const inputInSqft = parseFloat(value) * sqftMap[fromUnit].baseValue;
                              const rowValue = inputInSqft / sqftMap[key].baseValue;
                              return (
                                 <tr key={key} style={{ borderBottom: "1px solid #edf2f7", backgroundColor: index % 2 === 0 ? "#ffffff" : "#fdfdfd" }}>
                                    <td style={{ padding: "0.35rem 0.6rem", color: "#4a5568" }}>{sqftMap[key].label}</td>
                                    <td style={{ padding: "0.35rem 0.6rem", color: "#1a202c", fontWeight: "700", textAlign: "right" }}>
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

"use client";

import { useState, useEffect } from "react";

export default function Converter({ defaultFrom = "sqft", defaultTo = "gaj" }) {
   const [value, setValue] = useState("");
   const [fromUnit, setFromUnit] = useState(defaultFrom);
   const [toUnit, setToUnit] = useState(defaultTo);
   const [result, setResult] = useState(0);
   const [isAnimating, setIsAnimating] = useState(false);
   // 🔥 NEW STATE: Controls whether the matrix view table remains hidden or expanded
   const [isOpen, setIsOpen] = useState(true);

   // Official core multiplier mapping config base (Sqft)
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
         const timer = setTimeout(() => setIsAnimating(false), 200);
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
      padding: "0.75rem 1rem",
      fontSize: "1rem",
      border: "1px solid #cbd5e0",
      borderRadius: "8px",
      outline: "none",
      boxSizing: "border-box",
      color: "#2d3748",
      backgroundColor: "#f8fafc",
   };
   return (
      <div style={{ textAlign: "left", fontFamily: "system-ui, sans-serif" }}>
         <h2 style={{ fontSize: "1.25rem", fontWeight: "700", color: "#1a202c", marginBottom: "1.25rem" }}>
            Area Converter
         </h2>

         <div style={{ marginBottom: "1.25rem" }}>
            <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "600", color: "#4a5568", marginBottom: "0.4rem" }}>
               Enter Measurement Value
            </label>
            <input
               type="number"
               placeholder="e.g. 5"
               value={value}
               onChange={(e) => setValue(e.target.value)}
               style={inputStyle}
            />
         </div>

         <div style={{ marginBottom: "0.75rem" }}>
            <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "600", color: "#4a5568", marginBottom: "0.4rem" }}>
               From Unit
            </label>
            <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)} style={inputStyle}>
               {Object.keys(sqftMap).map((key) => (
                  <option key={key} value={key}>{sqftMap[key].label}</option>
               ))}
            </select>
         </div>

         <div style={{ display: "flex", justifyContent: "center", margin: "0.25rem 0" }}>
            <button
               onClick={handleSwap}
               type="button"
               style={{
                  backgroundColor: "#e2e8f0", border: "none", width: "36px", height: "36px", borderRadius: "50%",
                  cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem"
               }}
            >
               🔄
            </button>
         </div>

         <div style={{ marginBottom: "1.5rem" }}>
            <label style={{ display: "block", fontSize: "0.85rem", fontWeight: "600", color: "#4a5568", marginBottom: "0.4rem" }}>
               To Unit
            </label>
            <select value={toUnit} onChange={(e) => setToUnit(e.target.value)} style={inputStyle}>
               {Object.keys(sqftMap).map((key) => (
                  <option key={key} value={key}>{sqftMap[key].label}</option>
               ))}
            </select>
         </div>

         <div style={{ backgroundColor: "#f7fafc", padding: "1.25rem", borderRadius: "8px", textAlign: "center", border: "1px dashed #e2e8f0", marginBottom: "2rem" }}>
            <h3 style={{ fontSize: "0.85rem", color: "#718096", textTransform: "uppercase", marginBottom: "0.25rem" }}>Converted Value</h3>
            <div style={{ fontSize: "2.5rem", fontWeight: "800", color: isAnimating ? "#3182ce" : "#2d3748", transform: isAnimating ? "scale(1.15)" : "scale(1)", transition: "all 0.15s ease", display: "inline-block" }}>
               {result}
            </div>
         </div>

         {/* 🔥 COLLAPSIBLE BLOCK MODULE */}
         {value && !isNaN(value) && parseFloat(value) > 0 && (
            <div style={{ marginTop: "2rem", border: "1px solid #e2e8f0", borderRadius: "8px", overflow: "hidden" }}>
               
               {/* Clickable Header Button Box */}
               <button 
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  style={{
                     width: "100%", display: "flex", justifyContent: "between", alignItems: "center", justifyContent: "space-between",
                     padding: "0.75rem 1rem", backgroundColor: "#f8fafc", border: "none", borderBottom: isOpen ? "1px solid #e2e8f0" : "none",
                     cursor: "pointer", outline: "none", textAlign: "left"
                  }}
               >
                  <span style={{ fontSize: "0.9rem", fontWeight: "700", color: "#2d3748", textTransform: "uppercase" }}>
                     All-Unit Conversion Overview
                  </span>
                  <span style={{ fontSize: "0.8rem", color: "#718096", transition: "transform 0.2s ease", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}>
                     ▼
                  </span>
               </button>

               {/* Table Content Segment: Dynamic display layout visibility hooks */}
               {isOpen && (
                  <div style={{ overflowX: "auto" }}>
                     <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
                        <thead>
                           <tr style={{ backgroundColor: "#fcfdfd", borderBottom: "1px solid #e2e8f0" }}>
                              <th style={{ padding: "0.6rem 1rem", textAlign: "left", color: "#4a5568", fontSize: "0.8rem" }}>Unit Type</th>
                              <th style={{ padding: "0.6rem 1rem", textAlign: "right", color: "#4a5568", fontSize: "0.8rem" }}>Calculated Output</th>
                           </tr>
                        </thead>
                        <tbody>
                           {Object.keys(sqftMap).map((key, index) => {
                              const inputInSqft = parseFloat(value) * sqftMap[fromUnit].baseValue;
                              const rowValue = inputInSqft / sqftMap[key].baseValue;
                              return (
                                 <tr key={key} style={{ borderBottom: "1px solid #edf2f7", backgroundColor: index % 2 === 0 ? "#ffffff" : "#fdfdfd" }}>
                                    <td style={{ padding: "0.75rem 1rem", color: "#4a5568" }}>{sqftMap[key].label}</td>
                                    <td style={{ padding: "0.75rem 1rem", color: "#1a202c", fontWeight: "700", textAlign: "right" }}>
                                       {rowValue < 0.01 ? rowValue.toFixed(5) : rowValue.toFixed(2)}
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

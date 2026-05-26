"use client";

import { useState, useEffect } from "react";

export default function Converter({ defaultFrom = "sqft", defaultTo = "gaj" }) {
   const [value, setValue] = useState("");
   const [fromUnit, setFromUnit] = useState(defaultFrom);
   const [toUnit, setToUnit] = useState(defaultTo);
   const [result, setResult] = useState(0);

   // Automatically update dropdown selections if the user changes pages via SEO URLs
   useEffect(() => {
      setFromUnit(defaultFrom);
      setToUnit(defaultTo);
   }, [defaultFrom, defaultTo]);

   function convertArea() {
      if (!value || isNaN(value)) {
         setResult(0);
         return;
      }

      // Base conversion layer: How many square feet are in exactly 1 of these units?
      const sqftMap = {
         sqft: 1,
         gaj: 9,
         kanal: 5445,
         bigha: 27000, // Standard Western UP Bigha benchmark
         acre: 43560,
         hectare: 107639,
      };

      // 1. Convert input value completely to its square feet equivalent
      const valueInSqft = parseFloat(value) * sqftMap[fromUnit];

      // 2. Divide by target unit value to get final conversion
      const finalValue = valueInSqft / sqftMap[toUnit];

      // Clear out extreme decimals cleanly
      setResult(finalValue.toFixed(2));
   }

   // Shared styling configuration for clean visual hierarchy
   const inputStyle = {
      width: "100%",
      padding: "0.75rem 1rem",
      fontSize: "1rem",
      border: "1px solid #cbd5e0",
      borderRadius: "8px",
      marginBottom: "1.25rem",
      outline: "none",
      boxSizing: "border-box",
      color: "#2d3748",
      backgroundColor: "#f8fafc",
   };

   return (
      <div
         style={{
            textAlign: "left",
            fontFamily: "system-ui, -apple-system, sans-serif",
         }}
      >
         <h2
            style={{
               fontSize: "1.25rem",
               fontWeight: "700",
               color: "#1a202c",
               marginBottom: "1.25rem",
            }}
         >
            Area Converter
         </h2>

         <label
            style={{
               display: "block",
               fontSize: "0.85rem",
               fontWeight: "600",
               color: "#4a5568",
               marginBottom: "0.4rem",
            }}
         >
            Enter Measurement Value
         </label>
         <input
            type="number"
            placeholder="e.g. 5"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            style={inputStyle}
         />

         <label
            style={{
               display: "block",
               fontSize: "0.85rem",
               fontWeight: "600",
               color: "#4a5568",
               marginBottom: "0.4rem",
            }}
         >
            From Unit
         </label>
         <select
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
            style={inputStyle}
         >
            <option value="sqft">Square Feet (Sqft)</option>
            <option value="gaj">Gaj (Sq Yard)</option>
            <option value="kanal">Kanal</option>
            <option value="bigha">Bigha</option>
            <option value="acre">Acre</option>
            <option value="hectare">Hectare</option>
         </select>

         <label
            style={{
               display: "block",
               fontSize: "0.85rem",
               fontWeight: "600",
               color: "#4a5568",
               marginBottom: "0.4rem",
            }}
         >
            To Unit
         </label>
         <select
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
            style={inputStyle}
         >
            <option value="sqft">Square Feet (Sqft)</option>
            <option value="gaj">Gaj (Sq Yard)</option>
            <option value="kanal">Kanal</option>
            <option value="bigha">Bigha</option>
            <option value="acre">Acre</option>
            <option value="hectare">Hectare</option>
         </select>

         <button
            onClick={convertArea}
            style={{
               width: "100%",
               padding: "0.85rem",
               backgroundColor: "#3182ce",
               color: "#ffffff",
               fontSize: "1rem",
               fontWeight: "600",
               border: "none",
               borderRadius: "8px",
               cursor: "pointer",
               transition: "background-color 0.2s",
               boxShadow: "0 4px 6px -1px rgba(49, 130, 206, 0.2)",
               marginBottom: "2rem",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#2b6cb0")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#3182ce")}
         >
            Convert Area
         </button>

         <div
            style={{
               backgroundColor: "#f7fafc",
               padding: "1.25rem",
               borderRadius: "8px",
               textAlign: "center",
               border: "1px dashed #e2e8f0",
            }}
         >
            <h3
               style={{
                  fontSize: "0.85rem",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  color: "#718096",
                  marginBottom: "0.25rem",
               }}
            >
               Converted Value
            </h3>
            <div
               style={{
                  fontSize: "2.25rem",
                  fontWeight: "800",
                  color: "#2d3748",
               }}
            >
               {result}
            </div>
         </div>
      </div>
   );
}

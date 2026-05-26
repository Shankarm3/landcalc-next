"use client";

import { useState, useEffect } from "react";

export default function Converter({ defaultFrom = "sqft", defaultTo = "gaj" }) {
   const [value, setValue] = useState("");
   const [fromUnit, setFromUnit] = useState(defaultFrom);
   const [toUnit, setToUnit] = useState(defaultTo);
   const [result, setResult] = useState(0);

   useEffect(() => {
      setFromUnit(defaultFrom);
      setToUnit(defaultTo);
   }, [defaultFrom, defaultTo]);

   function convertArea() {
      if (!value || isNaN(value)) {
         setResult(0);
         return;
      }

      // 🔥 Updated Base Matrix: Added Uttarakhand Bigha Standard
      const sqftMap = {
         sqft: 1,
         gaj: 9,
         kanal: 5445,
         bigha_up: 27225, // UP/Punjab precise Pucca Bigha
         bigha_standard: 27000, // Standard common baseline
         bigha_uk: 6804, // 🔥 Uttarakhand State Bigha (1 Acre = 6.40 UK Bigha)
         bigha_bengal: 14400, // West Bengal / Kacha Bigha
         acre: 43560,
         hectare: 107639,
      };

      const valueInSqft = parseFloat(value) * (sqftMap[fromUnit] || 1);
      const finalValue = valueInSqft / (sqftMap[toUnit] || 1);

      setResult(finalValue.toFixed(2));
   }

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

         {/* From Unit Select */}
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
            <option value="bigha_up">UP Pucca Bigha</option>
            <option value="bigha_uk">Uttarakhand Bigha</option>{" "}
            {/* Added option */}
            <option value="bigha_standard">Standard Bigha</option>
            <option value="bigha_bengal">Bengal/Kacha Bigha</option>
            <option value="acre">Acre</option>
            <option value="hectare">Hectare</option>
         </select>

         {/* To Unit Select */}
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
            <option value="bigha_up">UP Pucca Bigha</option>
            <option value="bigha_uk">Uttarakhand Bigha</option>{" "}
            {/* Added option */}
            <option value="bigha_standard">Standard Bigha</option>
            <option value="bigha_bengal">Bengal/Kacha Biri</option>
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
               boxShadow: "0 4px 6px -1px rgba(49, 130, 206, 0.2)",
               marginBottom: "2rem",
            }}
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

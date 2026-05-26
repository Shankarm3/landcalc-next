"use client";

import { useState, useEffect } from "react";

export default function Converter({ defaultFrom = "sqft", defaultTo = "gaj" }) {
   const [value, setValue] = useState("");
   const [fromUnit, setFromUnit] = useState(defaultFrom);
   const [toUnit, setToUnit] = useState(defaultTo);
   const [result, setResult] = useState(0);
   const [isAnimating, setIsAnimating] = useState(false); // 🔥 Animation trigger state

   useEffect(() => {
      setFromUnit(defaultFrom);
      setToUnit(defaultTo);
   }, [defaultFrom, defaultTo]);

   function convertArea() {
      if (!value || isNaN(value)) {
         setResult(0);
         return;
      }

      const sqftMap = {
         sqft: 1,
         gaj: 9,
         kanal: 5445,
         bigha_up: 27225,
         bigha_standard: 27000,
         bigha_uk: 6804,
         bigha_bengal: 14400,
         acre: 43560,
         hectare: 107639,
      };

      const valueInSqft = parseFloat(value) * (sqftMap[fromUnit] || 1);
      const finalValue = valueInSqft / (sqftMap[toUnit] || 1);

      // 🔥 Trigger Animation: Pehle state ko true karenge fir value set karenge
      setIsAnimating(true);
      setResult(finalValue.toFixed(2));
   }

   // Reset animation switch after it finishes running (300ms)
   useEffect(() => {
      if (isAnimating) {
         const timer = setTimeout(() => setIsAnimating(false), 300);
         return () => clearTimeout(timer);
      }
   }, [isAnimating]);

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
      transition: "border-color 0.2s ease",
   };

   return (
      <div
         style={{
            textAlign: "left",
            fontFamily: "system-ui, -apple-system, sans-serif",
         }}
      >
         {/* 🔥 Injecting CSS Keyframes directly so you don't need external CSS files */}
         <style>{`
            @keyframes popScale {
               0% { transform: scale(1); }
               50% { transform: scale(1.08); color: #3182ce; }
               100% { transform: scale(1); }
            }
            @keyframes slideReveal {
               0% { opacity: 0; transform: translateY(8px); }
               100% { opacity: 1; transform: translateY(0); }
            }
         `}</style>

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

         {/* From Unit */}
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
            <option value="bigha_uk">Uttarakhand Bigha</option>
            <option value="bigha_standard">Standard Bigha</option>
            <option value="bigha_bengal">Bengal/Kacha Bigha</option>
            <option value="acre">Acre</option>
            <option value="hectare">Hectare</option>
         </select>

         {/* To Unit */}
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
            <option value="bigha_uk">Uttarakhand Bigha</option>
            <option value="bigha_standard">Standard Bigha</option>
            <option value="bigha_bengal">Bengal/Kacha Bigha</option>
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
               transition: "all 0.2s ease",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#2b6cb0")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#3182ce")}
         >
            Convert Area
         </button>

         {/* 🔥 Animated Converted Value Box */}
         <div
            style={{
               backgroundColor: "#f7fafc",
               padding: "1.25rem",
               borderRadius: "8px",
               textAlign: "center",
               border: "1px dashed #e2e8f0",
               animation:
                  result > 0 ? "slideReveal 0.4s ease-out forwards" : "none", // Card slide up on calculate
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
                  fontSize: "2.5rem",
                  fontWeight: "800",
                  color: "#2d3748",
                  display: "inline-block",
                  // 🔥 Pop-pulse animation links immediately upon state change
                  animation: isAnimating
                     ? "popScale 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
                     : "none",
               }}
            >
               {result}
            </div>
         </div>
      </div>
   );
}

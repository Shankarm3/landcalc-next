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

   return (
      <div className="container">
         <div className="card">
            <h2>Area Converter</h2>

            <input
               type="number"
               placeholder="Enter value"
               value={value}
               onChange={(e) => setValue(e.target.value)}
            />

            <select
               value={fromUnit}
               onChange={(e) => setFromUnit(e.target.value)}
            >
               <option value="sqft">Square Feet</option>
               <option value="gaj">Gaj</option>
               <option value="kanal">Kanal</option>
               <option value="bigha">Bigha</option>
               <option value="acre">Acre</option>
            </select>

            <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
               <option value="sqft">Square Feet</option>
               <option value="gaj">Gaj</option>
               <option value="kanal">Kanal</option>
               <option value="bigha">Bigha</option>
               <option value="acre">Acre</option>
            </select>

            <button onClick={convertArea}>Convert Area</button>

            <div className="result-box">
               <h3>Converted Value</h3>
               <div id="result">{result}</div>
            </div>
         </div>
      </div>
   );
}

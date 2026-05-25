"use client";

import { useState } from "react";

export default function Converter() {
   const [value, setValue] = useState("");

   const [fromUnit, setFromUnit] = useState("sqft");

   const [toUnit, setToUnit] = useState("gaj");

   const [result, setResult] = useState(0);

   function convertArea() {
      const sqftMap = {
         sqft: 1,

         gaj: 9,

         kanal: 5445,

         bigha: 27225,

         acre: 43560,
      };

      const valueInSqft = value * sqftMap[fromUnit];

      const finalValue = valueInSqft / sqftMap[toUnit];

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

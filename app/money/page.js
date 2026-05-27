"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";

export default function MoneyConverter() {
  const [amount, setAmount] = useState("1");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [rates, setRates] = useState({});
  const [result, setResult] = useState("0.00");
  const [loading, setLoading] = useState(true);

  // Core supported currency reference array
  const currencies = ["USD", "INR", "EUR", "GBP", "AED"];

  // 1. Fetch data ONLY when the base source currency changes
    useEffect(() => {
        const fetchExchangeRates = async () => {
            setLoading(true);
            try {
                const response = await fetch(`/api/convert?from=${fromCurrency}`);
                const data = await response.json();
                if (data.rates) {
                    setRates(data.rates);
                }
                } catch (err) {
                console.error("Failed to connect to currency endpoint pipeline:", err);
                } finally {
                setLoading(false);
            }
        };
        fetchExchangeRates();
    }, [fromCurrency]);

    // 2. Compute conversion calculation values cleanly on render calculations
    useEffect(() => {
    const currentRate = rates[toCurrency] || 1;
    setResult((parseFloat(amount || 0) * currentRate).toFixed(2));
    }, [rates, toCurrency, amount]);


  // Swaps selected currencies instantly
  const swapCurrencies = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
  };

  return (
    <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", minHeight: "100vh" }}>
      <Navbar />
      <div style={{ padding: "4rem 1rem", maxWidth: "600px", margin: "0 auto", boxSizing: "border-box" }}>
        
        {/* Module Header Container */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span style={{ backgroundColor: "rgba(72, 187, 120, 0.15)", color: "#48bb78", padding: "0.25rem 0.75rem", borderRadius: "20px", fontSize: "0.75rem", fontWeight: "700", textTransform: "uppercase", display: "inline-block", marginBottom: "0.75rem" }}>
            Financial Toolkit
          </span>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#ffffff", marginBottom: "0.5rem", letterSpacing: "-0.025em" }}>
            Global Money Converter
          </h1>
          <p style={{ fontSize: "0.95rem", color: "#e2e8f0", lineHeight: "1.4" }}>
            Convert conversion metrics for international land asset acquisitions and transactions.
          </p>
        </div>

        {/* Glassmorphism Conversion Wrapper Container Card */}
        <div style={{ backgroundColor: "rgba(255, 255, 255, 0.97)", padding: "2rem", borderRadius: "16px", boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)", border: "1px solid rgba(226, 232, 240, 0.8)" }}>
          
          {/* Base Cash Input Section */}
          <div style={{ marginBottom: "1.5rem" }}>
            <label style={{ display: "block", color: "#4a5568", fontSize: "0.85rem", fontWeight: "700", marginBottom: "0.5rem", textTransform: "uppercase" }}>
              Transaction Volumetric Amount
            </label>
            <input 
              type="number" 
              value={amount} 
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount value..."
              style={{ width: "100%", padding: "0.75rem 1rem", fontSize: "1.1rem", border: "2px solid #e2e8f0", borderRadius: "8px", boxSizing: "border-box", color: "#1a202c", fontWeight: "600" }}
            />
          </div>

          {/* Currency Configuration Dynamic Selector Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
            <div>
              <label style={{ display: "block", color: "#4a5568", fontSize: "0.75rem", fontWeight: "700", marginBottom: "0.25rem" }}>FROM</label>
              <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)} style={{ width: "100%", padding: "0.75rem", borderRadius: "8px", border: "2px solid #e2e8f0", color: "#1a202c", fontWeight: "700", backgroundColor: "#fff" }}>
                {currencies.map(cur => <option key={cur} value={cur}>{cur}</option>)}
              </select>
            </div>

            <button onClick={swapCurrencies} style={{ marginTop: "1.2rem", backgroundColor: "#e2e8f0", border: "none", width: "40px", height: "40px", borderRadius: "50%", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem" }} title="Swap currencies">
              🔄
            </button>

            <div>
              <label style={{ display: "block", color: "#4a5568", fontSize: "0.75rem", fontWeight: "700", marginBottom: "0.25rem" }}>TO</label>
              <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)} style={{ width: "100%", padding: "0.75rem", borderRadius: "8px", border: "2px solid #e2e8f0", color: "#1a202c", fontWeight: "700", backgroundColor: "#fff" }}>
                {currencies.map(cur => <option key={cur} value={cur}>{cur}</option>)}
              </select>
            </div>
          </div>

          {/* Metrics Output Dashboard Segment */}
          <div style={{ backgroundColor: "#f7fafc", padding: "1.5rem", borderRadius: "12px", border: "1px solid #edf2f7", textAlign: "center" }}>
            <span style={{ fontSize: "0.85rem", color: "#718096", fontWeight: "600", block: "inline" }}>
              {loading ? "Re-calculating market rates..." : `${amount} ${fromCurrency} =`}
            </span>
            <div style={{ fontSize: "2.2rem", fontWeight: "800", color: "#2d3748", marginTop: "0.25rem" }}>
              {loading ? "---" : `${result} ${toCurrency}`}
            </div>
            <span style={{ fontSize: "0.75rem", color: "#a0aec0", display: "block", marginTop: "0.5rem" }}>
              Market rate metric multipliers sync cleanly downstream.
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}

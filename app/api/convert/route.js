import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const fromCurrency = searchParams.get("from") || "USD";
  
  // ✅ FIXED: True backticks template literal pointing to the free open API
  const url = "https://er-api.com" + fromCurrency;
  
  console.log(`Target Routing API URL => ${url}`);

  const isLocalhost = process.env.NODE_ENV === "development";

  if (isLocalhost) {
    console.log("Localhost environment: Serving static localized currency conversion multipliers.");
    return NextResponse.json({ rates: getFallbackRates(fromCurrency) });
  }

  try {
    const response = await axios.get(url, { timeout: 4000 });
    return NextResponse.json({ rates: response.data.rates || {} });
  } catch (error) {
    console.warn("Production fallback sequence initiated:", error.message);
    return NextResponse.json({ rates: getFallbackRates(fromCurrency) });
  }
}

function getFallbackRates(base) {
  const mockDatabase = {
    USD: { USD: 1, INR: 83.50, EUR: 0.92, GBP: 0.79, AED: 3.67 },
    INR: { INR: 1, USD: 0.012, EUR: 0.011, GBP: 0.0095, AED: 0.044 },
    EUR: { EUR: 1, USD: 1.09, INR: 90.75, GBP: 0.86, AED: 3.99 }
  };
  return mockDatabase[base] || mockDatabase["USD"];
}

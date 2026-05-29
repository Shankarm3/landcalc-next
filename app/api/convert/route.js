import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const fromCurrency = searchParams.get("from") || "USD";
  
  // 1. PLACE YOUR REAL API KEY HERE Comments
  const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY_CURRENCY}/latest/${fromCurrency}`;
  
  console.log(`Target Routing API URL CURRENCY => ${url}`);

  const isLocalhost = process.env.NODE_ENV === "development";

  if (isLocalhost) {
    console.log("Localhost environment: Serving static localized currency conversion multipliers.");
    return NextResponse.json({ rates: getFallbackRates(fromCurrency) });
  }

  try {
    const response = await axios.get(url, { timeout: 4000 });
    
    // The API wraps exchange data inside the "conversion_rates" field
    const rates = response.data.conversion_rates || response.data.rates || {};
    
    return NextResponse.json({ rates });
  } catch (error) {
    console.warn("Production fallback sequence initiated:", error.message);
    return NextResponse.json({ rates: getFallbackRates(fromCurrency) });
  }
}

function getFallbackRates(base) {
  const mockDatabase = {
    USD: { USD: 1, INR: 89.50, EUR: 0.92, GBP: 0.79, AED: 3.67 },
    INR: { INR: 1, USD: 0.012, EUR: 0.011, GBP: 0.0095, AED: 0.044 },
    EUR: { EUR: 1, USD: 1.09, INR: 90.75, GBP: 0.86, AED: 3.99 }
  };
  return mockDatabase[base] || mockDatabase["USD"];
}

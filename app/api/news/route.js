import { NextResponse } from "next/server";

export async function GET() {
   const API_KEY = "fd703237c7afe02808e10e5c642bb4b9";
   const url = `https://gnews.io/api/v4/top-headlines?category=business&lang=en&country=in&max=5&apikey=${API_KEY}`;

   try {
      // Server-to-server fetch me CORS block nahi hota
      const res = await fetch(url, {
         next: { revalidate: 43200 }, // Server par 12 hours ke liye data cache rahega
      });

      if (!res.ok)
         return NextResponse.json({ articles: [] }, { status: res.status });

      const data = await res.json();
      return NextResponse.json({ articles: data.articles || [] });
   } catch (error) {
      console.error("Backend news proxy error:", error);
      return NextResponse.json({ articles: [] }, { status: 500 });
   }
}

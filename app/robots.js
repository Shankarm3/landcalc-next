export default function robots() {
   const baseUrl = "https://landcalc-next-4yjv.vercel.app";

   return {
      rules: {
         userAgent: "*",
         allow: "/",
         disallow: [
            "/api/",          // Protect interior serverless api route processing paths
            "/_next/",         // Restrict crawl budget overhead on system assets
         ],
      },
      sitemap: `${baseUrl}/sitemap.xml`,
   };
}

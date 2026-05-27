export default async function sitemap() {
   const baseUrl = "https://landcalc-next-4yjv.vercel.app";
   const currentDate = new Date();

   // 1. Define your explicit static core application pages
   const routes = [
      {
         url: baseUrl,
         lastModified: currentDate,
         changeFrequency: "daily",
         priority: 1.0,
      },
      {
         url: `${baseUrl}/news`,
         lastModified: currentDate,
         changeFrequency: "daily", // News updates often, search bots should crawl daily
         priority: 0.8,
      },
      {
         url: `${baseUrl}/money`,
         lastModified: currentDate,
         changeFrequency: "weekly",
         priority: 0.8,
      },
   ];

   // 2. Define standard slugs used in your layout matrix
   const units = ["sqft", "gaj", "kanal", "bigha", "acre", "hectare"];

   // 3. Generate all cross-conversion landing page variants dynamically
   units.forEach((from) => {
      units.forEach((to) => {
         if (from !== to) {
            routes.push({
               url: `${baseUrl}/${from}-to-${to}`,
               lastModified: currentDate,
               changeFrequency: "monthly",
               priority: 0.7,
            });
         }
      });
   });

   return routes;
}

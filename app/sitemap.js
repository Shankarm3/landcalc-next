export default async function sitemap() {
   // Use your real production URL here so Googlebot knows where to look!
   const baseUrl = "https://landcalc-next-4yjv.vercel.app";
   const units = ["sqft", "gaj", "kanal", "bigha", "acre"];

   const routes = [
      {
         url: baseUrl,
         lastModified: new Date(),
         changeFrequency: "monthly",
         priority: 1.0,
      },
   ];

   units.forEach((from) => {
      units.forEach((to) => {
         if (from !== to) {
            routes.push({
               url: `${baseUrl}/${from}-to-${to}`,
               lastModified: new Date(),
               changeFrequency: "monthly",
               priority: 0.8,
            });
         }
      });
   });

   return routes;
}

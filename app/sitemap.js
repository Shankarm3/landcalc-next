export default async function sitemap() {
   const baseUrl = "https://yourdomain.com"; // Replace with your actual domain later
   const units = ["sqft", "gaj", "kanal", "bigha", "acre"];

   // Create homepage link entry
   const routes = [
      {
         url: baseUrl,
         lastModified: new Date(),
         changeFrequency: "monthly",
         priority: 1.0,
      },
   ];

   // Loop through and automatically generate links for every variation pairs
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

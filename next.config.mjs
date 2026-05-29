/** @type {import('next').NextConfig} */
const nextConfig = {
   /* Remove output: 'export' from here */
   images: {
      unoptimized: true,
   },
};

export default nextConfig;

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());


import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  //output: 'export', // enables static export to 'out/'

  images: {
    unoptimized: true, // 🚀 disables optimization for static export
  },

};

module.exports = nextConfig;
export default nextConfig;
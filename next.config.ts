import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/portfolio", destination: "/proyek", permanent: true },
      { source: "/solo-projects", destination: "/proyek", permanent: true },
      { source: "/business", destination: "/bisnis", permanent: true },
      { source: "/certificates", destination: "/sertifikat", permanent: true },
      { source: "/education", destination: "/pendidikan", permanent: true },
      { source: "/work-experience", destination: "/pengalaman-kerja", permanent: true },
      { source: "/contact", destination: "/kontak", permanent: true },
    ];
  },
};

export default nextConfig;

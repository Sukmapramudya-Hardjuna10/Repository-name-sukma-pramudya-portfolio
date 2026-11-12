import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/proyek", destination: "/", permanent: false },
      { source: "/bisnis", destination: "/", permanent: false },
      { source: "/portfolio", destination: "/", permanent: false },
      { source: "/solo-projects", destination: "/", permanent: false },
      { source: "/business", destination: "/", permanent: false },
      { source: "/certificates", destination: "/sertifikat", permanent: true },
      { source: "/education", destination: "/pendidikan", permanent: true },
      { source: "/work-experience", destination: "/pengalaman-kerja", permanent: true },
      { source: "/contact", destination: "/kontak", permanent: true },
    ];
  },
};

export default nextConfig;

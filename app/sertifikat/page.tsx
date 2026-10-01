import Link from "next/link";
import CertificateGrid from "@/components/CertificateGrid";

export const metadata = {
  title: "Sertifikat | Sukma Pramudya, S.Sos.",
  description: "Daftar sertifikasi profesional dan pencapaian kompetensi resmi Sukma Pramudya, S.Sos.",
};

export default function SertifikatPage() {
  return (
    <div className="relative min-h-[calc(100vh-120px)] overflow-hidden px-6 py-16 text-zinc-100 sm:py-24">
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-amber-500/15 via-orange-500/15 to-purple-500/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-1/4 -z-10 h-[400px] w-[500px] rounded-full bg-gradient-to-tl from-amber-500/10 via-yellow-500/10 to-transparent blur-3xl"
      />

      <div className="mx-auto max-w-6xl">
        {/* Header Halaman */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1.5 text-xs font-medium text-amber-300 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
            Kredensial &amp; Sertifikasi
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-white">
            Sertifikat
          </h1>

          <p className="mt-4 max-w-2xl text-base text-zinc-400 sm:text-lg leading-relaxed">
            Daftar sertifikasi profesional dan lisensi kompetensi resmi yang telah diperoleh untuk memvalidasi keahlian teknis.
          </p>
        </div>

        {/* Grid Komponen Sertifikat */}
        <CertificateGrid />

        {/* Navigasi Kembali */}
        <div className="mt-14 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-400 hover:text-white transition-colors"
          >
            <span>← Kembali ke Beranda</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

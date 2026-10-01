import Link from "next/link";
import OrganisasiKegiatanList from "@/components/OrganisasiKegiatanList";

export const metadata = {
  title: "Organisasi & Kegiatan | Sukma Pramudya, S.Sos.",
  description:
    "Rekam jejak kepemimpinan, penjaminan mutu organisasi, evaluasi kinerja, dan kontribusi kelembagaan.",
};

export default function OrganisasiKegiatanPage() {
  return (
    <div className="relative min-h-[calc(100vh-120px)] overflow-hidden px-6 py-16 text-zinc-100 sm:py-24">
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-emerald-500/15 via-teal-500/15 to-cyan-500/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-1/4 -z-10 h-[400px] w-[500px] rounded-full bg-gradient-to-bl from-teal-500/10 via-emerald-500/10 to-transparent blur-3xl"
      />

      <div className="mx-auto max-w-4xl">
        {/* Header Halaman */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-medium text-emerald-300 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
            Aktivitas &amp; Kepemimpinan
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-white">
            Organisasi &amp; Kegiatan
          </h1>

          <p className="mt-4 max-w-2xl text-base text-zinc-400 sm:text-lg leading-relaxed">
            Rekam jejak kontribusi dalam organisasi, monitoring kinerja, evaluasi berbasis standar mutu, serta penegakan kepatuhan prosedur internal.
          </p>
        </div>

        {/* Daftar Pengalaman Organisasi & Kegiatan */}
        <OrganisasiKegiatanList />

        {/* Banner Kerja Sama / Kolaborasi */}
        <div className="mt-14 rounded-2xl border border-zinc-800/80 bg-zinc-900/30 p-8 text-center backdrop-blur-sm sm:p-10">
          <h2 className="text-xl font-bold text-white">Terbuka untuk Kolaborasi &amp; Kepanitiaan</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-zinc-400">
            Memiliki komitmen tinggi terhadap tata kelola organisasi, ketepatan prosedur, dan komunikasi tim yang konstruktif.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/kontak"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 px-6 py-2.5 text-xs font-semibold shadow-sm transition-all hover:-translate-y-0.5"
            >
              <span>Hubungi Saya</span>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Navigasi Kembali */}
        <div className="mt-10 text-center">
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

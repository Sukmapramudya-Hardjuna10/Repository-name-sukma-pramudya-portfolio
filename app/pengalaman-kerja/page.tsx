import Link from "next/link";
import PengalamanKerjaList from "@/components/PengalamanKerjaList";

export const metadata = {
  title: "Pengalaman Kerja | Profil Profesional",
  description: "Rekam jejak pengalaman kerja profesional, posisi kerja, dan kontribusi proyek nyata.",
};
export default function PengalamanKerjaPage() {
  return (
    <div className="relative min-h-[calc(100vh-120px)] overflow-hidden px-6 py-16 text-zinc-100 sm:py-24">
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-violet-500/15 via-purple-500/15 to-indigo-500/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-1/4 -z-10 h-[400px] w-[500px] rounded-full bg-gradient-to-bl from-purple-500/10 via-pink-500/10 to-transparent blur-3xl"
      />

      <div className="mx-auto max-w-4xl">
        {/* Header Halaman */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1.5 text-xs font-medium text-purple-300 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400"></span>
            Rekam Jejak Karier &amp; Pengalaman
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-white">
            Pengalaman Kerja
          </h1>

          <p className="mt-4 max-w-2xl text-base text-zinc-400 sm:text-lg leading-relaxed">
            Rekam jejak pengalaman kerja profesional, kepemimpinan teknis, serta kontribusi dalam membangun produk dan solusi digital bernilai tinggi.
          </p>
        </div>

        {/* Timeline Pengalaman Kerja Otentik */}
        <PengalamanKerjaList />

        {/* Unduh CV Banner */}
        <div className="mt-14 rounded-2xl border border-zinc-800/80 bg-zinc-900/30 p-8 text-center backdrop-blur-sm sm:p-10">
          <h2 className="text-xl font-bold text-white">Butuh Dokumen Resume / CV Lengkap?</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-zinc-400">
            Dokumen Curriculum Vitae resmi siap diunduh dalam format PDF untuk evaluasi rekrutmen dan kerja sama profesional.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-xs font-semibold text-zinc-950 shadow-sm transition-all hover:bg-zinc-200 hover:-translate-y-0.5"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Unduh CV</span>
            </button>
            <Link
              href="/kontak"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-6 py-2.5 text-xs font-medium text-zinc-200 hover:border-zinc-500 hover:text-white transition-all"
            >
              <span>Hubungi Langsung</span>
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

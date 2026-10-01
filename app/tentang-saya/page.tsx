import Link from "next/link";

export const metadata = {
  title: "Tentang Saya | Profil Profesional",
  description: "Mengenal lebih dekat latar belakang, filosofi kerja, dan keahlian lintas disiplin.",
};

export default function TentangSayaPage() {
  return (
    <div className="relative min-h-[calc(100vh-120px)] overflow-hidden px-6 py-16 text-zinc-100 sm:py-24">
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-blue-500/15 via-indigo-500/15 to-purple-500/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-1/4 -z-10 h-[400px] w-[500px] rounded-full bg-gradient-to-bl from-indigo-500/10 via-sky-500/10 to-transparent blur-3xl"
      />

      <div className="mx-auto max-w-4xl">
        {/* Header Halaman */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1.5 text-xs font-medium text-blue-300 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
            Profil &amp; Filosofi Kerja
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-white">
            Tentang Saya
          </h1>

          <p className="mt-4 max-w-2xl text-base text-zinc-400 sm:text-lg leading-relaxed">
            Mengenal profil profesional, latar belakang multidisiplin, dan dedikasi dalam membangun karya yang terstruktur, fungsional, dan bernilai tinggi.
          </p>
        </div>

        {/* Kartu Profil Utama */}
        <div className="mt-14 space-y-8">
          <div className="rounded-3xl border border-zinc-800/80 bg-zinc-900/40 p-8 sm:p-10 backdrop-blur-sm shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex h-3 w-3 rounded-full bg-blue-500"></span>
              <h2 className="text-2xl font-bold tracking-tight text-white">
                Dedikasi &amp; Komitmen Profesional
              </h2>
            </div>

            <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
              Saya adalah seorang profesional yang berdedikasi untuk menciptakan aplikasi dan sistem berkualitas tinggi, terstruktur rapi, dan mudah diakses. Berfokus pada perpaduan performa teknis, logika analisis, dan estetika antarmuka modern, saya memiliki komitmen kuat dalam menghadirkan pengalaman pengguna yang mulus serta kode yang mudah dipelihara dan dikembangkan.
            </p>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-400">
              Dengan latar belakang studi yang kaya dan lintas disiplin mencakup ilmu sosial (Antropologi Sosial), ilmu kuantitatif (Statistika), hingga rekayasa teknologi (Teknik Elektro), saya mampu melihat tantangan dari berbagai sudut pandang: memahami kebutuhan manusia, memanfaatkan ketelitian data, dan menerapkan ketepatan teknis rekayasa.
            </p>

            {/* Metrik / Nilai Inti */}
            <div className="mt-8 grid grid-cols-1 gap-4 border-t border-zinc-800/70 pt-6 sm:grid-cols-3">
              <div className="rounded-xl border border-zinc-800 bg-zinc-950/50 p-4">
                <span className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  Keahlian Utama
                </span>
                <p className="mt-1 text-sm font-semibold text-zinc-200">
                  Frontend &amp; Fullstack Web
                </p>
              </div>

              <div className="rounded-xl border border-zinc-800 bg-zinc-950/50 p-4">
                <span className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  Prinsip Kerja
                </span>
                <p className="mt-1 text-sm font-semibold text-zinc-200">
                  Clean Code &amp; Performa Tinggi
                </p>
              </div>

              <div className="rounded-xl border border-zinc-800 bg-zinc-950/50 p-4">
                <span className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                  Ketersediaan
                </span>
                <p className="mt-1 text-sm font-semibold text-zinc-200">
                  Full-time / Freelance / Proyek
                </p>
              </div>
            </div>
          </div>

          {/* Sinergi Multidisiplin */}
          <div className="rounded-3xl border border-zinc-800/80 bg-zinc-900/40 p-8 sm:p-10 backdrop-blur-sm">
            <h2 className="text-xl font-bold tracking-tight text-white mb-4">
              Fondasi Keilmuan Multidisiplin
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm text-zinc-400">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-5">
                <span className="font-semibold text-white block mb-1">Antropologi Sosial</span>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Memberikan kepekaan mendalam terhadap interaksi manusia, empati pengguna (user-centric), dan analisis kontekstual sosial.
                </p>
              </div>
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-5">
                <span className="font-semibold text-white block mb-1">Statistika</span>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Mengasah cara berpikir analitis, inferensi berbasis data, pemodelan kuantitatif, dan validitas hasil keputusan.
                </p>
              </div>
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-5">
                <span className="font-semibold text-white block mb-1">Teknik Elektro</span>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Menanamkan logika komputasi mendalam, pemahaman arsitektur sistem perangkat keras-lunak, dan pemecahan masalah teknis.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tombol Aksi */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/proyek"
            className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-6 py-3 text-xs font-semibold text-zinc-950 shadow-sm transition-all hover:bg-white hover:-translate-y-0.5"
          >
            <span>Eksplorasi Proyek Saya</span>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
          <Link
            href="/kontak"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-6 py-3 text-xs font-medium text-zinc-200 hover:border-zinc-500 hover:text-white transition-all"
          >
            <span>Hubungi Saya</span>
          </Link>
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

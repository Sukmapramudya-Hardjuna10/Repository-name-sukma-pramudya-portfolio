import Link from "next/link";

export const metadata = {
  title: "Bisnis | Sukma Pramudya, S.Sos.",
  description: "Inisiatif bisnis dan usaha profesional Sukma Pramudya, S.Sos.",
};

export default function BisnisPage() {
  return (
    <div className="relative min-h-[calc(100vh-120px)] overflow-hidden px-6 py-16 text-zinc-100 sm:py-24">
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-amber-500/10 via-emerald-500/10 to-transparent blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-1/3 -z-10 h-[400px] w-[500px] rounded-full bg-gradient-to-tl from-amber-500/5 via-zinc-800/20 to-transparent blur-3xl"
      />

      <div className="mx-auto max-w-4xl">
        {/* Header Halaman */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1.5 text-xs font-medium text-amber-300 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
            Inisiatif Bisnis &amp; Usaha
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-white">
            Bisnis
          </h1>

          <p className="mt-4 max-w-2xl text-base text-zinc-400 sm:text-lg leading-relaxed">
            Inisiatif komersial dan pengembangan usaha profesional yang sedang dirintis.
          </p>
        </div>

        {/* Daftar Kartu Bisnis */}
        <div className="mt-14 max-w-2xl mx-auto space-y-6">
          {/* Kartu: Hardjuna Project (Coming Soon) */}
          <div className="group relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/50 p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 hover:border-amber-500/30 hover:bg-zinc-900/70 hover:shadow-xl hover:shadow-amber-500/5">
            {/* Left accent border */}
            <div
              aria-hidden="true"
              className="absolute inset-y-0 left-0 w-1.5 bg-amber-500/80"
            />

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pl-2">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                    Coming Soon
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-amber-200 transition-colors">
                  Hardjuna Project
                </h2>
              </div>

              <div className="flex items-center">
                <span className="rounded-lg border border-zinc-800 bg-zinc-950/60 px-3 py-1.5 text-xs font-mono text-zinc-400">
                  Dalam Persiapan
                </span>
              </div>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-zinc-400 leading-relaxed pl-2 border-t border-zinc-800/60 pt-4">
              Inisiatif bisnis sedang dalam tahap persiapan dan penyusunan portofolio komersial. Informasi lengkap akan dipublikasikan setelah peluncuran resmi.
            </p>
          </div>

          <div className="text-center pt-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-800/80 px-6 py-2.5 text-xs font-medium text-zinc-300 transition-all hover:border-zinc-500 hover:bg-zinc-700 hover:text-white"
            >
              <span>← Kembali ke Beranda</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

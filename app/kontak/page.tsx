import Link from "next/link";

export const metadata = {
  title: "Kontak | Sukma Pramudya",
  description: "Tertarik untuk berkolaborasi, mendiskusikan peluang kerja, proyek pengembangan aplikasi, atau bertukar ide? Silakan hubungi saya melalui saluran kontak langsung.",
};

export default function KontakPage() {
  return (
    <div className="relative min-h-[calc(100vh-120px)] overflow-hidden px-6 py-16 text-zinc-100 sm:py-24">
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-500/15 via-purple-500/15 to-pink-500/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-1/4 -z-10 h-[400px] w-[500px] rounded-full bg-gradient-to-bl from-indigo-500/10 via-sky-500/10 to-transparent blur-3xl"
      />

      <div className="mx-auto max-w-2xl">
        {/* Header Halaman */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1.5 text-xs font-medium text-indigo-300 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            Koneksi &amp; Komunikasi
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-white">
            Kontak
          </h1>

          <p className="mt-4 max-w-xl text-base text-zinc-400 sm:text-lg leading-relaxed">
            Tertarik untuk berkolaborasi, mendiskusikan peluang kerja, proyek pengembangan aplikasi, atau bertukar ide? Silakan hubungi saya melalui saluran di bawah ini.
          </p>
        </div>

        {/* Saluran Kontak Resmi */}
        <div className="mt-12 space-y-6">
          <div className="space-y-4">
            <h2 className="text-xl font-bold tracking-tight text-white">
              Saluran Kontak Langsung
            </h2>
            <p className="text-sm leading-relaxed text-zinc-400">
              Silakan hubungi saya secara langsung melalui alamat email atau profil LinkedIn resmi berikut.
            </p>

            {/* Kartu Saluran Resmi */}
            <div className="space-y-3 pt-2">
              {/* Saluran Email */}
              <a
                href="mailto:sukmapramudya100903@gmail.com"
                className="group flex items-center gap-4 rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-4 backdrop-blur-sm transition-all duration-200 hover:border-indigo-500/50 hover:bg-zinc-900/70"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 group-hover:scale-105 transition-transform">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 block">Email</span>
                  <p className="text-sm font-semibold text-zinc-200 group-hover:text-indigo-300 transition-colors truncate">
                    sukmapramudya100903@gmail.com
                  </p>
                </div>
              </a>

              {/* Saluran LinkedIn */}
              <a
                href="https://www.linkedin.com/in/sukma-pramudya-584b1b22a"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-4 backdrop-blur-sm transition-all duration-200 hover:border-sky-500/50 hover:bg-zinc-900/70"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 group-hover:scale-105 transition-transform">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 block">LinkedIn</span>
                  <p className="text-sm font-semibold text-zinc-200 group-hover:text-sky-300 transition-colors truncate">
                    LinkedIn / Sukma Pramudya
                  </p>
                </div>
              </a>

              {/* Saluran WhatsApp */}
              <a
                href="https://wa.me/6282325906811"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-4 backdrop-blur-sm transition-all duration-200 hover:border-emerald-500/50 hover:bg-zinc-900/70"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:scale-105 transition-transform">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.159.57 4.184 1.564 5.938l-1.564 5.89 6.074-1.593c1.706.924 3.659 1.455 5.736 1.455 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 block">WhatsApp</span>
                  <p className="text-sm font-semibold text-zinc-200 group-hover:text-emerald-300 transition-colors truncate">
                    0823 2590 6811
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Kartu Status Ketersediaan */}
          <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/30 p-5 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-sm font-semibold text-white">Status Ketersediaan</span>
            </div>
            <p className="mt-2 text-xs text-zinc-400 leading-relaxed">
              Terbuka untuk diskusi proyek, kerja sama profesional, maupun peluang karier baru.
            </p>
          </div>
        </div>

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

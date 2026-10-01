export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center overflow-x-hidden bg-transparent px-6 font-sans text-zinc-100 selection:bg-amber-500/20 selection:text-amber-200">
      {/* Ambient background glow dengan sentuhan hangat warisan Nusantara */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-amber-600/15 via-indigo-600/15 to-purple-600/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 right-1/4 -z-10 h-[400px] w-[500px] rounded-full bg-gradient-to-bl from-amber-700/10 via-purple-500/10 to-transparent blur-3xl"
      />

      <main className="flex w-full flex-col items-center">
        {/* Hero Section */}
        <section className="flex min-h-[90vh] max-w-2xl flex-col items-center justify-center text-center">
          {/* Status indicator badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200/80 bg-zinc-50/80 px-3.5 py-1.5 text-xs font-medium text-zinc-600 shadow-sm backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            Tersedia untuk proyek baru
          </div>

          {/* Heading Utama: Nama */}
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
            <span className="bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 bg-clip-text text-transparent dark:from-white dark:via-zinc-200 dark:to-zinc-400">
              Sukma Pramudya
            </span>
          </h1>

          {/* Deskripsi Singkat */}
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-600 sm:text-xl dark:text-zinc-400">
            Web Developer &amp;  Antarmuka yang berfokus membangun aplikasi web modern, responsif, dan memberikan pengalaman digiDesainertal terbaik.
          </p>

          {/* Tombol Aksi */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              id="view-projects-btn"
              href="/portfolio"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-zinc-900 px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-zinc-800 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              <span>View Projects</span>
              <svg
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>

            <a
              id="contact-me-btn"
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white/70 px-7 py-3.5 text-sm font-semibold text-zinc-800 shadow-sm backdrop-blur-sm transition-all duration-200 hover:border-zinc-400 hover:bg-zinc-100 hover:-translate-y-0.5 active:translate-y-0 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-200 dark:hover:border-zinc-700 dark:hover:bg-zinc-800/80"
            >
              Contact Me
            </a>
          </div>
        </section>

        {/* Section About Me */}
        <section
          id="about"
          className="w-full max-w-3xl pb-28 pt-8"
        >
          <div className="rounded-3xl border border-zinc-200/80 bg-zinc-50/50 p-8 shadow-sm backdrop-blur-sm sm:p-10 dark:border-zinc-800/80 dark:bg-zinc-900/40">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="flex h-2.5 w-2.5 rounded-full bg-blue-600 dark:bg-blue-400"></span>
                <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-100">
                  About Me
                </h2>
              </div>

              <p className="text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-400">
                Saya adalah seorang developer yang berdedikasi untuk menciptakan aplikasi web berkualitas tinggi, terstruktur rapi, dan mudah diakses. Berfokus pada perpaduan performa teknis dan estetika antarmuka modern, saya memiliki komitmen kuat dalam menghadirkan pengalaman pengguna yang mulus serta kode yang mudah dipelihara dan dikembangkan.
              </p>

              <div className="mt-2 grid grid-cols-1 gap-4 border-t border-zinc-200/70 pt-6 sm:grid-cols-3 dark:border-zinc-800/70">
                <div className="flex flex-col">
                  <span className="text-xs font-medium uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                    Keahlian
                  </span>
                  <span className="mt-1 text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                    Frontend &amp; Fullstack
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-medium uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                    Prinsip Kerja
                  </span>
                  <span className="mt-1 text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                    Clean Code &amp; Performa
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-medium uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                    Ketersediaan
                  </span>
                  <span className="mt-1 text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                    Full-time / Freelance
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}


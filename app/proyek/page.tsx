import ProjectList from "@/components/ProjectList";

export const metadata = {
  title: "Proyek | Sukma Pramudya, S.Sos.",
  description: "Daftar proyek dan portofolio profesional Sukma Pramudya, S.Sos.",
};

export default function ProyekPage() {
  return (
    <div className="relative min-h-[calc(100vh-120px)] overflow-hidden px-6 py-16 text-zinc-100 sm:py-24">
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-purple-500/10 via-pink-500/10 to-transparent blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-1/4 -z-10 h-[400px] w-[500px] rounded-full bg-gradient-to-bl from-purple-500/10 via-amber-500/5 to-transparent blur-3xl"
      />

      <div className="mx-auto max-w-4xl">
        {/* Header Halaman */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1.5 text-xs font-medium text-purple-300 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400"></span>
            Koleksi &amp; Portofolio Proyek
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-white">
            Proyek
          </h1>

          <p className="mt-4 max-w-2xl text-base text-zinc-400 sm:text-lg leading-relaxed">
            Kumpulan proyek kreatif, produksi konten digital, dan inisiatif pengembangan yang dikelola secara profesional.
          </p>
        </div>

        {/* Daftar Komponen Proyek */}
        <ProjectList />
      </div>
    </div>
  );
}

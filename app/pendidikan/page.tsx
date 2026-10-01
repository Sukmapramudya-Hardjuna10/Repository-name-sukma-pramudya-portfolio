import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Pendidikan | Sukma Pramudya, S.Sos.",
  description: "Riwayat pendidikan formal dan latar belakang akademis Sukma Pramudya, S.Sos.",
};

interface EducationItem {
  degree: string;
  institution: string;
  logo: string;
  status: "Lulus" | "Sedang ditempuh";
  degreeTitle?: string;
  gpa?: string;
}

const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "S1 Antropologi Sosial",
    institution: "Universitas Diponegoro",
    logo: "/images/undip.png",
    degreeTitle: "S.Sos.",
    status: "Lulus",
    gpa: "3,79",
  },
  {
    degree: "S1 Statistika",
    institution: "Universitas Terbuka",
    logo: "/images/ut.png",
    status: "Sedang ditempuh",
  },
  {
    degree: "S1 Teknik Elektro",
    institution: "Universitas Muhammadiyah Purwokerto",
    logo: "/images/ump.png",
    status: "Sedang ditempuh",
  },
];

export default function PendidikanPage() {
  return (
    <div className="relative min-h-[calc(100vh-120px)] overflow-hidden px-6 py-16 text-zinc-100 sm:py-24">
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-sky-500/15 via-blue-500/15 to-indigo-500/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/3 -z-10 h-[400px] w-[500px] rounded-full bg-gradient-to-tr from-sky-500/10 via-indigo-500/10 to-transparent blur-3xl"
      />

      <div className="mx-auto max-w-4xl">
        {/* Header Halaman */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3.5 py-1.5 text-xs font-medium text-sky-300 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400"></span>
            Latar Belakang Akademis
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-white">
            Pendidikan
          </h1>

          <p className="mt-4 max-w-2xl text-base text-zinc-400 sm:text-lg leading-relaxed">
            Riwayat pendidikan tinggi formal dan program akademik yang menjadi fondasi keilmuan serta analisis profesional.
          </p>
        </div>

        {/* Daftar Kartu Pendidikan */}
        <div className="mt-14 space-y-6">
          {EDUCATION_DATA.map((item, index) => {
            const isCompleted = item.status === "Lulus";

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6 sm:p-7 backdrop-blur-sm transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/70 hover:shadow-xl hover:shadow-sky-500/5"
              >
                {/* Border aksen status di sisi kiri */}
                <div
                  aria-hidden="true"
                  className={`absolute inset-y-0 left-0 w-1.5 transition-colors ${
                    isCompleted ? "bg-emerald-500" : "bg-sky-500"
                  }`}
                />

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 pl-2">
                  {/* Kolom Logo & Info Universitas */}
                  <div className="flex items-center gap-4 sm:gap-5">
                    {/* Wadah Logo Proporsional & Konsisten */}
                    <div className="relative flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-2xl bg-white p-2.5 shadow-md shadow-black/20 ring-1 ring-zinc-700/50 transition-transform duration-300 group-hover:scale-105">
                      <Image
                        src={item.logo}
                        alt={`Logo ${item.institution}`}
                        width={64}
                        height={64}
                        className="h-full w-full object-contain"
                        priority={index === 0}
                      />
                    </div>

                    {/* Nama Universitas & Program Studi */}
                    <div>
                      <h2 className="text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-sky-300 transition-colors">
                        {item.institution}
                      </h2>
                      <p className="mt-1 text-sm sm:text-base font-semibold text-zinc-300">
                        {item.degree}
                      </p>
                    </div>
                  </div>

                  {/* Kolom Status & Metadata */}
                  <div className="flex flex-wrap items-center gap-2 sm:justify-end shrink-0">
                    {/* Badge Status */}
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium border ${
                        isCompleted
                          ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
                          : "border-sky-500/30 bg-sky-500/10 text-sky-300"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          isCompleted
                            ? "bg-emerald-400"
                            : "bg-sky-400 animate-pulse"
                        }`}
                      />
                      {item.status}
                    </span>

                    {/* Gelar (Jika Ada) */}
                    {item.degreeTitle && (
                      <span className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-800/80 px-3 py-1.5 text-xs font-semibold text-zinc-200">
                        Gelar: {item.degreeTitle}
                      </span>
                    )}

                    {/* IPK (Jika Ada) */}
                    {item.gpa && (
                      <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-300">
                        <span className="font-mono text-[10px] uppercase text-emerald-400/80">
                          IPK
                        </span>
                        <span>{item.gpa}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
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

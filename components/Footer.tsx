import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-zinc-800/80 bg-zinc-950/70 text-zinc-400">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-xs font-bold text-white">
                SP
              </span>
              <span className="font-semibold text-zinc-100 text-base">
                Sukma Pramudya, S.Sos.
              </span>
            </div>
            <p className="text-sm text-zinc-400 max-w-md leading-relaxed">
              Platform profil profesional dan CV terpadu mencakup rekam jejak karier, sertifikasi, inisiatif proyek, serta latar belakang akademis.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-3">
              Karya &amp; Inisiatif
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/proyek" className="hover:text-zinc-100 transition-colors">
                  Proyek
                </Link>
              </li>
              <li>
                <Link href="/bisnis" className="hover:text-zinc-100 transition-colors">
                  Bisnis
                </Link>
              </li>
              <li>
                <Link href="/sertifikat" className="hover:text-zinc-100 transition-colors">
                  Sertifikat
                </Link>
              </li>
              <li>
                <Link href="/tentang-saya" className="hover:text-zinc-100 transition-colors">
                  Tentang Saya
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-3">
              Karier &amp; Kontak
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/pendidikan" className="hover:text-zinc-100 transition-colors">
                  Pendidikan
                </Link>
              </li>
              <li>
                <Link href="/pengalaman-kerja" className="hover:text-zinc-100 transition-colors">
                  Pengalaman Kerja
                </Link>
              </li>
              <li>
                <Link href="/organisasi-kegiatan" className="hover:text-zinc-100 transition-colors">
                  Organisasi &amp; Kegiatan
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="hover:text-zinc-100 transition-colors">
                  Kontak
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-zinc-100 transition-colors">
                  Beranda
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>© {new Date().getFullYear()} Sukma Pramudya, S.Sos. Hak cipta dilindungi.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Sistem Aktif &amp; Terbuka untuk Kolaborasi
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

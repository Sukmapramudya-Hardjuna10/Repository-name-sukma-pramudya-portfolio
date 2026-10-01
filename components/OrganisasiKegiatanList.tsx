"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ExperienceItem, ExperienceImage } from "@/types/experience";

export const ORGANISASI_DATA: ExperienceItem[] = [
  {
    id: "ops-undip-pmo",
    title: "Organisasi Peduli Sosial Universitas Diponegoro",
    category: "Organisasi",
    organization: "Organisasi Peduli Sosial Universitas Diponegoro",
    role: "Staf Divisi Penjamin Mutu Organisasi (PMO)",
    period: "Januari 2023 – Januari 2024",
    location: "Universitas Diponegoro, Semarang",
    shortDescription:
      "Staf Divisi Penjamin Mutu Organisasi (PMO) yang bertanggung jawab dalam monitoring, evaluasi, dan pengawasan kinerja divisi serta anggota Organisasi Peduli Sosial. Berperan dalam mengidentifikasi kendala, membantu penyelesaian masalah, memantau pencapaian kerja, serta melakukan evaluasi capaian kerja individu dan divisi.",
    description:
      "Berperan sebagai Staf Divisi Penjamin Mutu Organisasi (PMO) dengan fokus pada pemantauan, evaluasi, dan pengawasan keberjalanan divisi-divisi dalam Organisasi Peduli Sosial Universitas Diponegoro.",
    responsibilities: [
      "Melakukan monitoring terhadap keberjalanan rapat divisi.",
      "Mengidentifikasi kendala yang dihadapi setiap divisi dan membantu merumuskan penyelesaiannya.",
      "Membantu merumuskan penyelesaian masalah dengan pendekatan persuasif.",
      "Melakukan pengawasan terhadap kepatuhan anggota dan divisi terhadap aturan organisasi, termasuk pemberian peringatan atau sanksi apabila diperlukan.",
      "Merumuskan capaian kerja individu dan divisi.",
      "Melakukan penilaian kinerja individu dan divisi dalam bentuk rapor.",
      "Memberikan teguran secara terbuka apabila hasil evaluasi menunjukkan capaian yang tidak memenuhi standar.",
    ],
    skills: [
      "Monitoring",
      "Evaluasi",
      "Analisis Kendala",
      "Penyelesaian Masalah",
      "Pengelolaan Informasi",
      "Koordinasi",
      "Pengawasan",
      "Evaluasi Kinerja",
      "Komunikasi",
      "Ketelitian",
    ],
    logo: "/images/organizations/peduli-sosial.png",
    images: [
      {
        src: "/images/peduli-sosial/peduli-sosial-01.jpg",
        alt: "Dokumentasi kegiatan Organisasi Peduli Sosial Universitas Diponegoro 01",
        caption:
          "Dokumentasi kegiatan Organisasi Peduli Sosial Universitas Diponegoro.",
      },
      {
        src: "/images/peduli-sosial/peduli-sosial-02.jpg",
        alt: "Dokumentasi kegiatan Organisasi Peduli Sosial Universitas Diponegoro 02",
        caption:
          "Dokumentasi kegiatan Organisasi Peduli Sosial Universitas Diponegoro.",
      },
      {
        src: "/images/peduli-sosial/peduli-sosial-03.jpg",
        alt: "Dokumentasi kegiatan Organisasi Peduli Sosial Universitas Diponegoro 03",
        caption:
          "Dokumentasi kegiatan Organisasi Peduli Sosial Universitas Diponegoro.",
      },
      {
        src: "/images/peduli-sosial/peduli-sosial-04.jpg",
        alt: "Dokumentasi kegiatan Organisasi Peduli Sosial Universitas Diponegoro 04",
        caption:
          "Dokumentasi kegiatan Organisasi Peduli Sosial Universitas Diponegoro.",
      },
    ],
  },
  {
    id: "kharisma-syiar",
    title: "Keluarga Humaniora Islam Madani (KHARISMA)",
    category: "Organisasi",
    organization: "Keluarga Humaniora Islam Madani (KHARISMA)",
    role: "Wakil Ketua Departemen Syiar",
    period: "Januari 2022 – Januari 2024",
    location: "Fakultas Ilmu Budaya, Universitas Diponegoro, Semarang",
    shortDescription:
      "Berperan sebagai Wakil Ketua Departemen Syiar dalam mengelola penyampaian informasi dan konten edukatif melalui media sosial organisasi. Kegiatan berfokus pada penyusunan dan publikasi konten yang membantu memahami isu keagamaan, isu yang relevan dengan kehidupan mahasiswa, serta mendorong penyikapan informasi secara bijak dan bertanggung jawab.",
    description:
      "Berperan sebagai Wakil Ketua Departemen Syiar dalam mengelola penyampaian informasi dan konten edukatif melalui media sosial organisasi. Kegiatan berfokus pada penyusunan dan publikasi konten yang membantu memahami isu keagamaan, isu yang relevan dengan kehidupan mahasiswa, serta mendorong penyikapan informasi secara bijak dan bertanggung jawab.",
    responsibilities: [
      "Mengelola media sosial departemen sebagai sarana penyampaian informasi dan konten edukatif kepada mahasiswa.",
      "Menyusun dan mempublikasikan konten edukasi mengenai isu keagamaan serta isu yang relevan dengan kehidupan mahasiswa.",
      "Melakukan pengolahan dan penyusunan informasi agar materi yang disampaikan dapat dipahami secara sistematis dan mudah diterima oleh audiens.",
      "Memperhatikan relevansi informasi dan konteks isu sebelum menyusun materi publikasi agar konten yang disampaikan tetap informatif dan bertanggung jawab.",
      "Membantu mengembangkan penyampaian informasi yang mendorong mahasiswa untuk memahami suatu isu secara lebih kritis serta menyikapinya secara bijak.",
      "Berkoordinasi dalam pelaksanaan kegiatan Departemen Syiar sebagai Wakil Ketua Departemen.",
    ],
    skills: [
      "Pengelolaan Informasi",
      "Komunikasi",
      "Pengelolaan Media Digital",
      "Penyusunan Konten",
      "Penyampaian Informasi Secara Sistematis",
      "Analisis dan Pemahaman Isu",
      "Koordinasi Tim",
      "Ketelitian dalam Pengolahan Informasi",
    ],
    logo: "/images/organizations/kharisma.png",
    images: [
      {
        src: "/images/kharisma/dokumentasi-01.jpg",
        alt: "Dokumentasi kegiatan Keluarga Humaniora Islam Madani (KHARISMA)",
        caption:
          "Dokumentasi kegiatan Keluarga Humaniora Islam Madani (KHARISMA).",
      },
    ],
  },
  {
    id: "al-fatih-undip",
    title: "Al Fatih Masjid Kampus Universitas Diponegoro",
    category: "Organisasi",
    organization: "Al Fatih Masjid Kampus Universitas Diponegoro",
    role: "Wakil Ketua Departemen Seni dan Kebudayaan",
    period: "Januari 2024 – Januari 2025",
    location: "Semarang, Jawa Tengah",
    shortDescription:
      "Berperan sebagai Wakil Ketua Departemen Seni dan Kebudayaan dengan fokus pada perencanaan program kerja tahunan, koordinasi kegiatan departemen, serta evaluasi pelaksanaan kegiatan untuk mendukung efektivitas kerja tim.",
    description:
      "Berperan sebagai Wakil Ketua Departemen Seni dan Kebudayaan dengan fokus pada perencanaan program kerja tahunan, koordinasi kegiatan departemen, serta evaluasi pelaksanaan kegiatan untuk mendukung efektivitas kerja tim.",
    responsibilities: [
      "Menyusun roadmap atau rencana kerja tahunan Departemen Seni dan Kebudayaan sebagai acuan pelaksanaan program kerja.",
      "Melaksanakan rapat secara berkala untuk melakukan koordinasi dan memantau keberjalanan program kerja departemen.",
      "Melakukan evaluasi setelah pelaksanaan kegiatan untuk mengidentifikasi hal-hal yang perlu diperbaiki pada kegiatan berikutnya.",
      "Menggunakan hasil evaluasi sebagai bahan perbaikan untuk mendukung efektivitas dan koordinasi kerja tim.",
    ],
    skills: [
      "Perencanaan Program Kerja",
      "Koordinasi Tim",
      "Evaluasi Kegiatan",
      "Penyusunan Roadmap",
      "Manajemen Waktu",
      "Komunikasi",
      "Pemantauan Pelaksanaan Program",
      "Perbaikan Berkelanjutan",
    ],
    logo: "/images/organizations/al-fatih.png",
    images: [
      {
        src: "/images/al-fatih/dokumentasi-01.jpg",
        alt: "Dokumentasi kegiatan Al Fatih Masjid Kampus Universitas Diponegoro",
        caption:
          "Dokumentasi kegiatan Al Fatih Masjid Kampus Universitas Diponegoro.",
      },
    ],
  },
  {
    id: "purbalingga-campus-fair",
    title: "Purbalingga Campus Fair",
    category: "Kepanitiaan",
    organization: "Purbalingga Campus Fair",
    role: "Staf Koordinator",
    period: "Oktober 2021 – Maret 2022",
    location: "Purbalingga, Jawa Tengah",
    shortDescription:
      "Staf Koordinator Purbalingga Campus Fair yang terlibat dalam pengelolaan operasional kegiatan, koordinasi persiapan, perizinan, pelaksanaan acara, serta sosialisasi kepada SMA dan SMK.",
    description:
      "Berperan sebagai Staf Koordinator dalam pelaksanaan Purbalingga Campus Fair dengan terlibat dalam pengelolaan operasional kegiatan secara menyeluruh, mulai dari pengurusan perizinan, koordinasi rapat, pelaksanaan acara, hingga kegiatan sosialisasi ke sekolah menengah atas dan sekolah menengah kejuruan.",
    responsibilities: [
      "Membantu mengelola operasional kegiatan Purbalingga Campus Fair dari tahap persiapan hingga pelaksanaan.",
      "Mengurus dan membantu proses perizinan yang diperlukan untuk pelaksanaan kegiatan.",
      "Mengoordinasikan dan mengikuti rapat persiapan untuk memastikan kesiapan kegiatan.",
      "Terlibat dalam pelaksanaan acara sesuai dengan kebutuhan operasional di lapangan.",
      "Melakukan sosialisasi kegiatan kepada SMA dan SMK di wilayah Purbalingga.",
      "Berkoordinasi dengan pihak terkait untuk mendukung kelancaran pelaksanaan kegiatan.",
    ],
    skills: [
      "Koordinasi Kegiatan",
      "Pengelolaan Operasional",
      "Administrasi dan Perizinan",
      "Koordinasi Rapat",
      "Pelaksanaan Acara",
      "Komunikasi",
      "Sosialisasi",
      "Koordinasi dengan Pihak Eksternal",
    ],
    // Purbalingga Campus Fair does not have a logo in public/images/organizations/
    images: [
      {
        src: "/images/purbalingga-campus-fair/purbalingga-campus-fair-01.jpg",
        alt: "Dokumentasi kegiatan Purbalingga Campus Fair 01",
        caption: "Dokumentasi kegiatan Purbalingga Campus Fair.",
      },
      {
        src: "/images/purbalingga-campus-fair/purbalingga-campus-fair-02.jpg",
        alt: "Dokumentasi kegiatan Purbalingga Campus Fair 02",
        caption: "Dokumentasi kegiatan Purbalingga Campus Fair.",
      },
      {
        src: "/images/purbalingga-campus-fair/purbalingga-campus-fair-03.jpg",
        alt: "Dokumentasi kegiatan Purbalingga Campus Fair 03",
        caption: "Dokumentasi kegiatan Purbalingga Campus Fair.",
      },
      {
        src: "/images/purbalingga-campus-fair/purbalingga-campus-fair-04.jpg",
        alt: "Dokumentasi kegiatan Purbalingga Campus Fair 04",
        caption: "Dokumentasi kegiatan Purbalingga Campus Fair.",
      },
      {
        src: "/images/purbalingga-campus-fair/purbalingga-campus-fair-05.jpg",
        alt: "Dokumentasi kegiatan Purbalingga Campus Fair 05",
        caption: "Dokumentasi kegiatan Purbalingga Campus Fair.",
      },
    ],
  },
];

export default function OrganisasiKegiatanList() {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({});
  const [activePhoto, setActivePhoto] = useState<ExperienceImage | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");

  const categories = ["Semua", "Organisasi", "Kepanitiaan"];

  const filteredData =
    selectedCategory === "Semua"
      ? ORGANISASI_DATA
      : ORGANISASI_DATA.filter((item) => item.category === selectedCategory);

  const toggleDetail = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Keyboard Escape listener & scroll lock for photo lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActivePhoto(null);
      }
    };

    if (activePhoto) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [activePhoto]);

  return (
    <>
      {/* Filter Kategori */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedCategory(cat)}
            className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
              selectedCategory === cat
                ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm shadow-emerald-500/10"
                : "bg-zinc-900/60 text-zinc-400 border border-zinc-800 hover:text-zinc-200 hover:border-zinc-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-12 relative pl-6 sm:pl-8 border-l border-zinc-800 space-y-10">
        {filteredData.map((item) => {
          const isOpen = !!openIds[item.id];

          return (
            <div key={item.id} className="relative group">
              {/* Penanda Timeline */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-emerald-400 bg-emerald-500/20 shadow-sm shadow-emerald-500/30">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
              </div>

              {/* Kartu Ringkas Organisasi */}
              <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/60 shadow-lg shadow-black/20">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    {/* Logo Organisasi (Jika Tersedia, Ukuran Proporsional ~44-48px) */}
                    {item.logo ? (
                      <div className="relative flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-white p-1.5 shadow-md shadow-black/20 ring-1 ring-zinc-700/50 overflow-hidden">
                        <Image
                          src={item.logo}
                          alt={`Logo ${item.organization}`}
                          width={48}
                          height={48}
                          className="h-full w-full object-contain"
                        />
                      </div>
                    ) : null}

                    <div>
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <span className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-300">
                          {item.category}
                        </span>
                        <span className="rounded-md border border-zinc-800 bg-zinc-900/80 px-2.5 py-0.5 text-xs font-medium text-zinc-400">
                          {item.location}
                        </span>
                      </div>

                      <h2 className="mt-1 text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                        {item.role}
                      </h2>

                      <p className="mt-1 text-sm sm:text-base font-semibold text-zinc-300">
                        {item.organization}
                      </p>
                    </div>
                  </div>

                  <span className="text-xs font-mono text-zinc-400 sm:text-right shrink-0 self-start sm:self-auto">
                    {item.period}
                  </span>
                </div>

                {/* Deskripsi Singkat */}
                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-zinc-300/90 border-t border-zinc-800/70 pt-4">
                  {item.shortDescription || item.description}
                </p>

                {/* Tombol Aksi "Lihat Detail" */}
                <div className="mt-6 flex items-center justify-between border-t border-zinc-800/60 pt-4">
                  <button
                    type="button"
                    id={`toggle-detail-btn-${item.id}`}
                    onClick={() => toggleDetail(item.id)}
                    aria-expanded={isOpen}
                    className="inline-flex items-center gap-2 rounded-xl bg-emerald-600/20 border border-emerald-500/40 px-4 py-2 text-xs font-semibold text-emerald-200 transition-all duration-200 hover:bg-emerald-600/30 hover:border-emerald-500/60 active:scale-[0.98]"
                  >
                    <span>{isOpen ? "Tutup Detail" : "Lihat Detail"}</span>
                    <svg
                      className={`h-4 w-4 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  <span className="text-[11px] text-zinc-500 font-mono">
                    {isOpen ? "Detail terbuka" : "Klik untuk rincian & galeri"}
                  </span>
                </div>

                {/* ========================================================= */}
                {/* TAMPILAN DETAIL LENGKAP (Posisi, Tanggung Jawab, Galeri)   */}
                {/* ========================================================= */}
                {isOpen && (
                  <div className="mt-6 border-t border-zinc-800/80 pt-6 space-y-8 animate-in fade-in duration-300">
                    {/* Header Detail & Informasi Penugasan */}
                    <div className="rounded-xl border border-zinc-800/70 bg-zinc-950/50 p-4 sm:p-5">
                      <div className="flex items-center gap-3 mb-4">
                        {item.logo && (
                          <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white p-1 shadow-sm ring-1 ring-zinc-700/50 overflow-hidden">
                            <Image
                              src={item.logo}
                              alt={`Logo ${item.organization}`}
                              width={40}
                              height={40}
                              className="h-full w-full object-contain"
                            />
                          </div>
                        )}
                        <div>
                          <h3 className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
                            Informasi Organisasi / Penugasan
                          </h3>
                          <span className="text-sm font-bold text-white block">
                            {item.organization}
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                        <div>
                          <span className="text-zinc-500 block">Posisi / Jabatan</span>
                          <span className="text-zinc-200 font-medium">
                            {item.role}
                          </span>
                        </div>
                        <div>
                          <span className="text-zinc-500 block">Kategori</span>
                          <span className="text-zinc-200 font-medium">
                            {item.category}
                          </span>
                        </div>
                        <div>
                          <span className="text-zinc-500 block">Lokasi</span>
                          <span className="text-zinc-200 font-medium">
                            {item.location}
                          </span>
                        </div>
                        <div>
                          <span className="text-zinc-500 block">Periode</span>
                          <span className="text-zinc-200 font-medium">
                            {item.period}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Deskripsi Lengkap */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="flex h-2 w-2 rounded-full bg-emerald-400"></span>
                        <h4 className="text-sm sm:text-base font-bold text-white tracking-tight">
                          Deskripsi Pengalaman
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed rounded-xl border border-zinc-800/50 bg-zinc-950/40 p-4">
                        {item.description}
                      </p>
                    </div>

                    {/* Bagian Tugas dan Tanggung Jawab */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="flex h-2 w-2 rounded-full bg-emerald-400"></span>
                        <h4 className="text-sm sm:text-base font-bold text-white tracking-tight">
                          Tugas dan Tanggung Jawab
                        </h4>
                      </div>

                      <ol className="space-y-2.5 text-xs sm:text-sm text-zinc-300">
                        {item.responsibilities.map((resp, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 rounded-lg border border-zinc-800/50 bg-zinc-950/40 p-3 transition-colors hover:border-zinc-700/70"
                          >
                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-[11px] font-bold text-emerald-300 border border-emerald-500/30">
                              {idx + 1}
                            </span>
                            <span className="leading-relaxed">{resp}</span>
                          </li>
                        ))}
                      </ol>
                    </div>

                    {/* Transferable Skills */}
                    {item.skills && item.skills.length > 0 && (
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <span className="flex h-2 w-2 rounded-full bg-emerald-400"></span>
                          <h4 className="text-sm sm:text-base font-bold text-white tracking-tight">
                            Keterampilan Relevan (Transferable Skills)
                          </h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {item.skills.map((skill, idx) => (
                            <span
                              key={idx}
                              className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Bagian Dokumentasi Kegiatan */}
                    {item.images && item.images.length > 0 && (
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <span className="flex h-2 w-2 rounded-full bg-emerald-400"></span>
                            <h4 className="text-sm sm:text-base font-bold text-white tracking-tight">
                              Dokumentasi Kegiatan
                            </h4>
                          </div>
                          <span className="text-[11px] text-zinc-400 font-medium">
                            {item.images.length} Arsip Foto
                          </span>
                        </div>

                        {/* Grid Galeri Responsif */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                          {item.images.map((photo, index) => (
                            <div
                              key={index}
                              className="group/card flex flex-col rounded-xl border border-zinc-800/80 bg-zinc-950/60 overflow-hidden transition-all duration-300 hover:border-emerald-500/40 hover:bg-zinc-950/90 shadow-md cursor-pointer"
                              onClick={() => setActivePhoto(photo)}
                              title="Klik untuk memperbesar foto"
                            >
                              {/* Container Foto (Aspect Ratio Preserved, Object Contain) */}
                              <div className="relative h-48 sm:h-52 w-full bg-zinc-950/90 p-2.5 flex items-center justify-center overflow-hidden">
                                <div className="relative h-full w-full">
                                  <Image
                                    src={photo.src}
                                    alt={photo.alt}
                                    fill
                                    className="object-contain transition-transform duration-300 group-hover/card:scale-[1.02]"
                                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                                  />
                                </div>

                                {/* Hover Hint */}
                                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover/card:opacity-100 transition-opacity">
                                  <span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-900/90 px-3 py-1.5 text-xs font-medium text-white shadow-md border border-zinc-700">
                                    <svg
                                      className="h-3.5 w-3.5 text-emerald-400"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                      />
                                    </svg>
                                    <span>Perbesar</span>
                                  </span>
                                </div>

                                <div className="absolute top-2 left-2">
                                  <span className="rounded-md border border-zinc-700/80 bg-zinc-900/90 px-2 py-0.5 text-[10px] font-mono text-zinc-300">
                                    Foto {index + 1}
                                  </span>
                                </div>
                              </div>

                              {/* Caption Foto */}
                              <div className="border-t border-zinc-800/80 p-2.5 bg-zinc-900/40">
                                <p className="text-xs text-zinc-300 leading-relaxed">
                                  {photo.caption}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Tombol Tutup Detail di Bagian Bawah */}
                    <div className="pt-2 flex justify-center">
                      <button
                        type="button"
                        onClick={() => {
                          toggleDetail(item.id);
                          const el = document.getElementById(
                            `toggle-detail-btn-${item.id}`
                          );
                          if (el)
                            el.scrollIntoView({
                              behavior: "smooth",
                              block: "center",
                            });
                        }}
                        className="inline-flex items-center gap-1.5 rounded-full border border-zinc-700 bg-zinc-900/80 px-4 py-2 text-xs font-medium text-zinc-300 hover:border-zinc-500 hover:text-white transition-all"
                      >
                        <svg
                          className="h-3.5 w-3.5 rotate-180"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                        <span>Tutup Detail Pengalaman</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* ========================================================= */}
      {/* MODAL / LIGHTBOX PRATINJAU FOTO DOKUMENTASI               */}
      {/* ========================================================= */}
      {activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setActivePhoto(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-6 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex flex-col items-center max-w-4xl max-h-[92vh] w-full"
          >
            {/* Tombol Tutup */}
            <button
              type="button"
              onClick={() => setActivePhoto(null)}
              aria-label="Tutup pratinjau foto"
              className="absolute -top-12 right-0 sm:right-2 flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-700 transition-colors shadow-lg"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Gambar Utuh (Aspect Ratio Preserved, Object Contain, Tanpa Crop) */}
            <div className="relative w-full max-h-[76vh] flex items-center justify-center overflow-hidden rounded-2xl bg-zinc-950 p-2 border border-zinc-800 shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activePhoto.src}
                alt={activePhoto.alt}
                className="max-h-[72vh] max-w-full w-auto h-auto object-contain rounded-xl"
              />
            </div>

            {/* Caption / Keterangan di Bawah Foto */}
            <div className="mt-3.5 w-full rounded-xl border border-zinc-800/80 bg-zinc-900/80 px-4 py-3 text-center sm:text-left backdrop-blur-sm">
              <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-medium">
                {activePhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface MagangPhoto {
  id: string;
  src: string;
  alt: string;
  caption: string;
}

interface MagangExperience {
  id: string;
  title: string;
  role: string;
  institution: string;
  period: string;
  location: string;
  status: string;
  description: string;
  responsibilities: string[];
  photos: MagangPhoto[];
  hasVerificationDocModal?: boolean;
}

const EXPERIENCES_DATA: MagangExperience[] = [
  {
    id: "rsud-goeteng",
    title: "Magang — Bagian Informasi dan APPM",
    role: "Magang — Bagian Informasi dan APPM",
    institution: "RSUD dr. R. Goeteng Taroenadibrata Purbalingga",
    period: "16 Januari – 23 Maret 2026",
    location: "Purbalingga, Jawa Tengah",
    status: "Magang",
    description:
      "Melaksanakan kegiatan magang pada bagian Informasi dan APPM dengan fokus pada pelayanan informasi, administrasi pendaftaran pasien, verifikasi status penjamin kesehatan, koordinasi informasi rujukan, serta penyelesaian berbagai kebutuhan informasi di lingkungan rumah sakit.",
    responsibilities: [
      "Memberikan edukasi dan membantu pasien dalam proses pendaftaran melalui sistem APPM.",
      "Melakukan pengecekan status penjamin kesehatan pasien untuk mendukung kelancaran proses administrasi.",
      "Memberikan informasi kepada pasien dan pengunjung mengenai layanan serta prosedur rumah sakit.",
      "Membantu menyampaikan informasi dan pengumuman terkait orang hilang, keluarga yang terpisah, serta barang hilang atau ditemukan di lingkungan rumah sakit.",
      "Melakukan koordinasi melalui komunikasi telepon dengan rumah sakit lain untuk memastikan kesesuaian informasi pasien dalam proses rujukan maupun rujuk balik.",
    ],
    photos: [
      {
        id: "rsud-1",
        src: "/images/magang/magang-01-edukasi.jpg",
        alt: "Edukasi dan pendampingan pasien sistem APPM",
        caption:
          "Edukasi dan pendampingan pasien dalam proses pendaftaran melalui sistem APPM.",
      },
      {
        id: "rsud-2",
        src: "/images/magang/magang-02-rujukan.jpg",
        alt: "Komunikasi telepon koordinasi rujukan pasien",
        caption:
          "Melakukan komunikasi melalui telepon dengan rumah sakit rujukan untuk mengonfirmasi informasi terkait pasien yang menjalani proses rujukan.",
      },
      {
        id: "rsud-3",
        src: "/images/magang/magang-03-informasi.jpg",
        alt: "Penyampaian pengumuman informasi penemuan STNK",
        caption:
          "Menyampaikan pengumuman terkait penemuan STNK di lingkungan rumah sakit kepada pasien dan pengunjung.",
      },
      {
        id: "rsud-4",
        src: "/images/magang/magang-04-penyelesaian.jpg",
        alt: "Penyelesaian magang dan penyerahan surat resmi",
        caption:
          "Penyelesaian magang dan penyerahan surat resmi penyelesaian magang.",
      },
    ],
    hasVerificationDocModal: true,
  },
  {
    id: "dinsos-purbalingga",
    title: "Staf Kesekretariatan",
    role: "Staf Kesekretariatan",
    institution: "Dinas Sosial Kabupaten Purbalingga",
    period: "Juni 2024 – Agustus 2024",
    location: "Purbalingga, Jawa Tengah",
    status: "Magang",
    description:
      "Melaksanakan kegiatan magang pada bagian Kesekretariatan di Dinas Sosial Kabupaten Purbalingga dengan fokus pada penginputan data capaian kegiatan serta laporan keuangan dan penganggaran ke dalam sistem informasi pemerintahan.",
    responsibilities: [
      "Membantu melakukan penginputan data laporan hasil kerja atau capaian kegiatan pada Sistem Informasi Kinerja Penyedia (SIKaP).",
      "Membantu melakukan penginputan laporan keuangan dan penganggaran ke dalam Sistem Informasi Pemerintahan Daerah (SIPD).",
    ],
    photos: [
      {
        id: "dinsos-surat",
        src: "/images/magang-dinsos/foto-surat.jpg",
        alt: "Foto surat keterangan penyelesaian magang Dinas Sosial Kabupaten Purbalingga",
        caption:
          "Foto surat keterangan/penyelesaian magang di Dinas Sosial Kabupaten Purbalingga.",
      },
      {
        id: "dinsos-amplop",
        src: "/images/magang-dinsos/foto-amplop.png",
        alt: "Foto amplop surat resmi Dinas Sosial Kabupaten Purbalingga",
        caption:
          "Foto amplop surat resmi Dinas Sosial Kabupaten Purbalingga.",
      },
    ],
    hasVerificationDocModal: false,
  },
];

export default function PengalamanKerjaList() {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({});
  const [activePhoto, setActivePhoto] = useState<MagangPhoto | null>(null);
  const [isDocModalOpen, setIsDocModalOpen] = useState(false);

  const toggleDetail = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Keyboard Escape listener & scroll lock for lightboxes
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActivePhoto(null);
        setIsDocModalOpen(false);
      }
    };

    if (activePhoto || isDocModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [activePhoto, isDocModalOpen]);

  return (
    <>
      {/* Timeline Karier / Magang */}
      <div className="mt-14 relative pl-6 sm:pl-8 border-l border-zinc-800 space-y-10">
        {EXPERIENCES_DATA.map((item) => {
          const isOpen = !!openIds[item.id];

          return (
            <div key={item.id} className="relative group">
              {/* Penanda Timeline */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-purple-400 bg-purple-500/20 shadow-sm shadow-purple-500/30">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-400"></span>
              </div>

              {/* Kartu Ringkas Pengalaman Kerja / Magang */}
              <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/60 shadow-lg shadow-black/20">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="rounded-md border border-purple-500/30 bg-purple-500/10 px-2.5 py-0.5 text-xs font-semibold text-purple-300">
                        Status: {item.status}
                      </span>
                      <span className="rounded-md border border-zinc-800 bg-zinc-900/80 px-2.5 py-0.5 text-xs font-medium text-zinc-400">
                        {item.location}
                      </span>
                    </div>

                    <h2 className="mt-2.5 text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-purple-300 transition-colors">
                      {item.role}
                    </h2>
                  </div>

                  <span className="text-xs font-mono text-zinc-400 sm:text-right shrink-0">
                    {item.period}
                  </span>
                </div>

                <p className="mt-1.5 text-sm sm:text-base font-semibold text-zinc-300">
                  {item.institution}
                </p>

                {/* Deskripsi Singkat */}
                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-zinc-300/90 border-t border-zinc-800/70 pt-4">
                  {item.description}
                </p>

                {/* Tombol Aksi "Lihat Detail" */}
                <div className="mt-6 flex items-center justify-between border-t border-zinc-800/60 pt-4">
                  <button
                    type="button"
                    id={`toggle-detail-btn-${item.id}`}
                    onClick={() => toggleDetail(item.id)}
                    aria-expanded={isOpen}
                    className="inline-flex items-center gap-2 rounded-xl bg-purple-600/20 border border-purple-500/40 px-4 py-2 text-xs font-semibold text-purple-200 transition-all duration-200 hover:bg-purple-600/30 hover:border-purple-500/60 active:scale-[0.98]"
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
                {/* TAMPILAN DETAIL LENGKAP (Tugas, Tanggung Jawab, Galeri)   */}
                {/* ========================================================= */}
                {isOpen && (
                  <div className="mt-6 border-t border-zinc-800/80 pt-6 space-y-8 animate-in fade-in duration-300">
                    {/* Rincian Posisi, Periode, Lokasi */}
                    <div className="rounded-xl border border-zinc-800/70 bg-zinc-950/50 p-4 sm:p-5">
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-purple-300 mb-3">
                        Informasi Penempatan
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                        <div>
                          <span className="text-zinc-500 block">Posisi</span>
                          <span className="text-zinc-200 font-medium">
                            {item.role}
                          </span>
                        </div>
                        <div>
                          <span className="text-zinc-500 block">Instansi</span>
                          <span className="text-zinc-200 font-medium">
                            {item.institution}
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

                    {/* Bagian Tugas dan Tanggung Jawab */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="flex h-2 w-2 rounded-full bg-purple-400"></span>
                        <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                          Tugas dan Tanggung Jawab
                        </h3>
                      </div>

                      <ol className="space-y-2.5 text-xs sm:text-sm text-zinc-300">
                        {item.responsibilities.map((task, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 rounded-lg border border-zinc-800/50 bg-zinc-950/40 p-3 transition-colors hover:border-zinc-700/70"
                          >
                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple-500/20 text-[11px] font-bold text-purple-300 border border-purple-500/30">
                              {idx + 1}
                            </span>
                            <span className="leading-relaxed">{task}</span>
                          </li>
                        ))}
                      </ol>
                    </div>

                    {/* Bagian Dokumentasi Kegiatan */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <span className="flex h-2 w-2 rounded-full bg-purple-400"></span>
                          <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                            Dokumentasi {item.id === "rsud-goeteng" ? "Kegiatan" : "Magang"}
                          </h3>
                        </div>
                        <span className="text-[11px] text-zinc-400 font-medium">
                          {item.photos.length + (item.hasVerificationDocModal ? 1 : 0)} Arsip Dokumentasi
                        </span>
                      </div>

                      {/* Grid Galeri Responsif */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                        {item.photos.map((photo, index) => (
                          <div
                            key={photo.id}
                            className="group/card flex flex-col rounded-xl border border-zinc-800/80 bg-zinc-950/60 overflow-hidden transition-all duration-300 hover:border-purple-500/40 hover:bg-zinc-950/90 shadow-md"
                          >
                            {/* Container Foto (Aspect Ratio Preserved, Object Contain, No Crop) */}
                            <div
                              onClick={() => setActivePhoto(photo)}
                              className="relative h-56 sm:h-64 w-full bg-zinc-950/90 p-3 flex items-center justify-center cursor-pointer overflow-hidden"
                              title="Klik untuk memperbesar foto"
                            >
                              <div className="relative h-full w-full">
                                <Image
                                  src={photo.src}
                                  alt={photo.alt}
                                  fill
                                  className="object-contain transition-transform duration-300 group-hover/card:scale-[1.02]"
                                  sizes="(max-width: 768px) 100vw, 50vw"
                                />
                              </div>

                              {/* Overlay Hint Perbesar */}
                              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover/card:opacity-100 transition-opacity">
                                <span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-900/90 px-3 py-1.5 text-xs font-medium text-white shadow-md border border-zinc-700">
                                  <svg
                                    className="h-3.5 w-3.5 text-purple-400"
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
                                  <span>Klik untuk perbesar</span>
                                </span>
                              </div>

                              {/* Badge Nomor Foto */}
                              <div className="absolute top-3 left-3">
                                <span className="rounded-md border border-zinc-700/80 bg-zinc-900/90 px-2 py-0.5 text-[10px] font-mono text-zinc-300">
                                  Foto {index + 1}
                                </span>
                              </div>
                            </div>

                            {/* Caption Foto */}
                            <div className="border-t border-zinc-800/80 p-3.5 bg-zinc-900/40">
                              <p className="text-xs text-zinc-300 leading-relaxed">
                                {photo.caption}
                              </p>
                            </div>
                          </div>
                        ))}

                        {/* Jika RSUD: Tampilan Aman Dokumen Resmi Surat Keterangan */}
                        {item.hasVerificationDocModal && (
                          <div className="group/card flex flex-col rounded-xl border border-zinc-800/80 bg-zinc-950/60 overflow-hidden transition-all duration-300 hover:border-purple-500/40 hover:bg-zinc-950/90 shadow-md">
                            <div
                              onClick={() => setIsDocModalOpen(true)}
                              className="relative h-56 sm:h-64 w-full bg-gradient-to-b from-zinc-900/90 to-zinc-950 p-5 flex flex-col items-center justify-center text-center cursor-pointer"
                              title="Klik untuk melihat informasi verifikasi dokumen resmi"
                            >
                              {/* Icon Dokumen Resmi */}
                              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-purple-500/30 bg-purple-500/10 text-purple-400 mb-3 shadow-inner">
                                <svg
                                  className="h-7 w-7"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                  />
                                </svg>
                              </div>

                              <span className="rounded-md border border-purple-500/30 bg-purple-500/10 px-2 py-0.5 text-[10px] font-semibold text-purple-300 uppercase tracking-wider mb-2">
                                Dokumen Terverifikasi
                              </span>

                              <h4 className="text-sm font-bold text-white max-w-xs">
                                Surat Keterangan Telah Melaksanakan Magang
                              </h4>

                              <p className="mt-1.5 text-xs text-zinc-400 max-w-xs leading-relaxed">
                                Dokumen resmi penyelesaian magang dari RSUD dr. R. Goeteng Taroenadibrata.
                              </p>

                              {/* Hint Privasi */}
                              <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] text-zinc-400 bg-zinc-900/80 px-2.5 py-1 rounded-full border border-zinc-800">
                                <svg
                                  className="h-3 w-3 text-emerald-400"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                  />
                                </svg>
                                <span>Arsip Fisik Sah • Data Sensitif Disamarkan</span>
                              </div>

                              {/* Badge Nomor Dokumen */}
                              <div className="absolute top-3 left-3">
                                <span className="rounded-md border border-zinc-700/80 bg-zinc-900/90 px-2 py-0.5 text-[10px] font-mono text-zinc-300">
                                  Dokumen 5
                                </span>
                              </div>
                            </div>

                            {/* Caption Dokumen */}
                            <div className="border-t border-zinc-800/80 p-3.5 bg-zinc-900/40">
                              <p className="text-xs text-zinc-300 leading-relaxed">
                                Surat keterangan resmi dari RSUD dr. R. Goeteng Taroenadibrata sebagai bukti telah melaksanakan kegiatan magang.
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

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

      {/* ========================================================= */}
      {/* MODAL VERIFIKASI DOKUMEN RESMI (Perlindungan Privasi)     */}
      {/* ========================================================= */}
      {isDocModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setIsDocModalOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-6 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex flex-col max-w-xl w-full rounded-2xl border border-zinc-800 bg-zinc-900 p-6 sm:p-8 shadow-2xl"
          >
            {/* Tombol Tutup */}
            <button
              type="button"
              onClick={() => setIsDocModalOpen(false)}
              aria-label="Tutup informasi dokumen"
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-700 transition-colors"
            >
              <svg
                className="h-4 w-4"
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

            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-purple-400 block">
                  Verifikasi Berkas Resmi
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  Surat Keterangan Telah Melaksanakan Magang
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-5">
              Dokumen resmi penyelesaian magang dari RSUD dr. R. Goeteng Taroenadibrata.
            </p>

            {/* Rincian Verifikasi */}
            <div className="space-y-2.5 rounded-xl border border-zinc-800 bg-zinc-950/70 p-4 text-xs">
              <div className="flex justify-between border-b border-zinc-800/60 pb-2">
                <span className="text-zinc-500">Instansi Penerbit:</span>
                <span className="text-zinc-200 font-semibold text-right">
                  RSUD dr. R. Goeteng Taroenadibrata Purbalingga
                </span>
              </div>
              <div className="flex justify-between border-b border-zinc-800/60 pb-2">
                <span className="text-zinc-500">Nomor Registrasi Surat:</span>
                <span className="text-zinc-200 font-mono text-right">
                  800 / 91 / Diklat / III / 2026
                </span>
              </div>
              <div className="flex justify-between border-b border-zinc-800/60 pb-2">
                <span className="text-zinc-500">Periode Magang:</span>
                <span className="text-zinc-200 font-medium text-right">
                  16 Januari – 23 Maret 2026
                </span>
              </div>
              <div className="flex justify-between border-b border-zinc-800/60 pb-2">
                <span className="text-zinc-500">Penempatan Unit:</span>
                <span className="text-zinc-200 font-medium text-right">
                  Instalasi APPM &amp; Bagian Informasi
                </span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-zinc-500">Status Validitas:</span>
                <span className="text-emerald-400 font-medium inline-flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                  Sah &amp; Tercatat Resmi
                </span>
              </div>
            </div>

            {/* Pemberitahuan Keamanan Privasi */}
            <div className="mt-4 rounded-xl border border-zinc-800 bg-zinc-950/40 p-3 text-[11px] text-zinc-400 leading-relaxed flex items-start gap-2">
              <svg
                className="h-4 w-4 text-amber-400 shrink-0 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <span>
                Sesuai kebijakan privasi data dan perlindungan informasi identitas publik, dokumen fisik asli yang memuat data administratif dan nomor identitas pegawai disimpan secara terproteksi dan tidak dipublikasikan dalam bentuk scan terbuka.
              </span>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setIsDocModalOpen(false)}
                className="rounded-xl bg-zinc-800 px-4 py-2 text-xs font-semibold text-zinc-200 hover:bg-zinc-700 transition-colors"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

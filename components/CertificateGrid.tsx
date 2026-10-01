"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface Certificate {
  id: string;
  name: string;
  issuer: string;
  issuerLabel: string;
  place: string;
  date: string;
  idNumber: string;
  idNumberLabel: string;
  image: string;
  buttonText: "Lihat Sertifikat" | "Lihat Kredensial";
  buttonUrl: string;
}

const CERTIFICATES: Certificate[] = [
  {
    id: "bnsp",
    name: "Digital Media Planner",
    issuer: "BNSP (Badan Nasional Sertifikasi Profesi)",
    issuerLabel: "Penerbit",
    place: "Surabaya",
    date: "15 Maret 2025",
    idNumber: "M.2082.00061.2025",
    idNumberLabel: "Nomor Registrasi",
    image: "/images/certificates/sertifikat-bnsp.jpg",
    buttonText: "Lihat Sertifikat",
    buttonUrl: "https://drive.google.com/file/d/1fIBo2PNf3nXbwSUyu3uIhB4F4cCzID7x/view?usp=sharing",
  },
  {
    id: "dta",
    name: "Associate Data Scientist + Python — Nasional",
    issuer: "Digital Talent Academy",
    issuerLabel: "Penerbit",
    place: "Jakarta",
    date: "23 Februari 2026",
    idNumber: "21211993840-1814/DTA/BLSDM.Komdigi/2026",
    idNumberLabel: "Nomor Kredensial",
    image: "/images/certificates/sertifikat-dta.jpg",
    buttonText: "Lihat Kredensial",
    buttonUrl: "https://digirtifikattalent.kominfo.go.id/cek-se",
  },
  {
    id: "pmm",
    name: "Pertukaran Mahasiswa Merdeka",
    issuer: "Konsorsium Dekan FIB se-Indonesia",
    issuerLabel: "Penerbit/Penyelenggara",
    place: "Yogyakarta",
    date: "13 Februari 2023",
    idNumber: "5026.12/UN1.FIB/AK/2023",
    idNumberLabel: "Nomor Sertifikat",
    image: "/images/certificates/sertifikat-pmm.jpg",
    buttonText: "Lihat Sertifikat",
    buttonUrl: "https://drive.google.com/file/d/1rZ5t7ZcRxKCfdD40cKm9vW-4bH8qmLjV/view?usp=sharing",
  },
];

export default function CertificateGrid() {
  const [activeModal, setActiveModal] = useState<Certificate | null>(null);

  // Keyboard Escape listener & scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModal(null);
      }
    };

    if (activeModal) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [activeModal]);

  return (
    <>
      {/* Grid 3 Kartu Sertifikat */}
      <div className="mt-14 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {CERTIFICATES.map((cert) => (
          <div
            key={cert.id}
            className="group relative flex flex-col justify-between rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-5 sm:p-6 backdrop-blur-sm transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/70 hover:shadow-xl hover:shadow-amber-500/5"
          >
            <div>
              {/* Wadah Pratinjau Gambar Sertifikat */}
              <div
                onClick={() => setActiveModal(cert)}
                className="group/img relative h-52 sm:h-56 w-full overflow-hidden rounded-xl bg-zinc-950/80 border border-zinc-800/80 p-2.5 flex items-center justify-center cursor-pointer transition-all duration-300 hover:border-amber-500/40"
                title="Klik untuk memperbesar sertifikat"
              >
                <div className="relative h-full w-full">
                  <Image
                    src={cert.image}
                    alt={`Sertifikat ${cert.name}`}
                    fill
                    className="object-contain transition-transform duration-300 group-hover/img:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Overlay teks / hint klik perbesar */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity rounded-xl">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-900/90 px-3 py-1.5 text-xs font-medium text-white shadow-md border border-zinc-700">
                    <svg className="h-3.5 w-3.5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                    <span>Klik untuk perbesar</span>
                  </span>
                </div>
              </div>

              {/* Judul Sertifikat */}
              <h2 className="mt-4 text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors">
                {cert.name}
              </h2>

              {/* Rincian Informasi Sertifikat */}
              <div className="mt-3 space-y-2 border-t border-zinc-800/70 pt-3 text-xs">
                <div>
                  <span className="text-zinc-500 font-medium block">{cert.issuerLabel}</span>
                  <span className="text-zinc-200 font-semibold">{cert.issuer}</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="text-zinc-500 font-medium block">Tempat</span>
                    <span className="text-zinc-300">{cert.place}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 font-medium block">Tanggal</span>
                    <span className="text-zinc-300">{cert.date}</span>
                  </div>
                </div>

                <div>
                  <span className="text-zinc-500 font-medium block">{cert.idNumberLabel}</span>
                  <span className="text-zinc-200 font-mono text-[11px] break-all">{cert.idNumber}</span>
                </div>
              </div>
            </div>

            {/* Tombol Aksi Tautan Sertifikat / Kredensial */}
            <div className="mt-6 border-t border-zinc-800/70 pt-4">
              <a
                href={cert.buttonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-2.5 text-xs font-semibold text-zinc-950 shadow-sm transition-all duration-200 hover:from-amber-400 hover:to-amber-500 hover:shadow-md hover:shadow-amber-500/10 active:scale-[0.98]"
              >
                <span>{cert.buttonText}</span>
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Tombol Lihat Semua Sertifikat */}
      <div className="mt-12 text-center">
        <a
          href="https://linktr.ee/sukmapramudya"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/80 px-7 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:border-amber-500/50 hover:bg-zinc-800 hover:text-amber-300 hover:-translate-y-0.5"
        >
          <span>Lihat Semua Sertifikat</span>
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>

      {/* Modal / Lightbox Pratinjau Sertifikat */}
      {activeModal && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveModal(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 sm:p-6 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex flex-col items-center max-w-4xl max-h-[92vh] w-full"
          >
            {/* Tombol Tutup (Close Button) */}
            <button
              type="button"
              onClick={() => setActiveModal(null)}
              aria-label="Tutup pratinjau sertifikat"
              className="absolute -top-12 right-0 sm:right-2 flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-700 transition-colors shadow-lg"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Gambar Sertifikat Utuh (Tanpa Crop, Proporsional) */}
            <div className="relative w-full max-h-[76vh] flex items-center justify-center overflow-hidden rounded-2xl bg-zinc-950 p-2 border border-zinc-800 shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activeModal.image}
                alt={`Pratinjau ${activeModal.name}`}
                className="max-h-[72vh] max-w-full w-auto h-auto object-contain rounded-xl"
              />
            </div>

            {/* Keterangan Modal & Tombol Buka Tautan */}
            <div className="mt-3 flex flex-col sm:flex-row items-center justify-between w-full px-2 gap-2">
              <div>
                <h3 className="text-sm font-semibold text-white">{activeModal.name}</h3>
                <p className="text-xs text-zinc-400">{activeModal.issuer}</p>
              </div>

              <a
                href={activeModal.buttonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-medium text-amber-300 hover:bg-amber-500/20 transition-colors"
              >
                <span>{activeModal.buttonText}</span>
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

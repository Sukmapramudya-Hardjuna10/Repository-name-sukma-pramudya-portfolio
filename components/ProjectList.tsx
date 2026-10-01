"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export interface ProjectDoc {
  id: string;
  src: string;
  alt: string;
  title: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  isComingSoon?: boolean;
  platform?: string;
  year?: string;
  account?: string;
  url?: string;
  followers?: string;
  contentType?: string;
  shortDescription?: string;
  fullDescription?: string;
  role?: string;
  tools?: string[];
  processes?: string[];
  logo?: string;
  statisticsNote?: string;
  statistics?: {
    followers: string;
    views: string;
    viewers: string;
    viewsByAudience: { label: string; value: string }[];
    viewsByContentType: { label: string; value: string }[];
    interactions: string;
    interactionsByAudience: { label: string; value: string }[];
    interactionsByContentType: { label: string; value: string }[];
  };
  contentPerformance?: { label: string; views: string }[];
  documentation?: ProjectDoc[];
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "maya4cat",
    title: "Konten Animasi & Motion Graphic — @maya4cat",
    category: "Kreatif & Animasi",
    platform: "Instagram",
    year: "2026",
    account: "@maya4cat",
    url: "https://www.instagram.com/maya4cat/",
    followers: "528",
    contentType: "Animasi dan Motion Graphic",
    shortDescription:
      "Mengelola proyek konten animasi dan motion graphic secara mandiri melalui Instagram @maya4cat.",
    fullDescription:
      "Mengelola proyek konten animasi dan motion graphic secara mandiri melalui Instagram @maya4cat. Seluruh proses produksi dikerjakan sendiri, mulai dari pengembangan konsep, pembuatan animasi dan motion graphic, editing, pembuatan thumbnail, hingga manajemen akun.",
    role: "Mengelola dan mengerjakan seluruh proses produksi secara mandiri.",
    tools: ["Clip Studio Paint", "CapCut PC", "Adobe After Effects"],
    processes: [
      "Pengembangan konsep",
      "Editing",
      "Animasi",
      "Motion Graphic",
      "Pembuatan thumbnail",
      "Manajemen akun",
    ],
    logo: "/images/projects/maya4cat/maya4cat-logo.png",
    statisticsNote: "Data berdasarkan Instagram Insights per 30 September 2026.",
    statistics: {
      followers: "528",
      views: "58.629",
      viewers: "33.174",
      viewsByAudience: [
        { label: "Followers", value: "3,7%" },
        { label: "Non-followers", value: "96,3%" },
      ],
      viewsByContentType: [
        { label: "Reels", value: "99,5%" },
        { label: "Posts", value: "0,4%" },
        { label: "Stories", value: "0,1%" },
      ],
      interactions: "10.000",
      interactionsByAudience: [
        { label: "Followers", value: "21,2%" },
        { label: "Non-followers", value: "78,8%" },
      ],
      interactionsByContentType: [{ label: "Reels", value: "98,7%" }],
    },
    contentPerformance: [
      { label: "Konten 1", views: "22,1K views" },
      { label: "Konten 2", views: "17,6K views" },
      { label: "Konten 3", views: "12,6K views" },
      { label: "Konten 4", views: "399 views" },
      { label: "Konten 5", views: "24 views" },
    ],
    documentation: [
      {
        id: "ss-1",
        src: "/images/maya4cat/maya4cat-profile.jpg",
        alt: "Screenshot profil dan dashboard akun Instagram @maya4cat",
        title: "Screenshot Profil & Dashboard Akun",
      },
      {
        id: "ss-2",
        src: "/images/maya4cat/maya4cat-insights.png",
        alt: "Screenshot Instagram Insights performa akun @maya4cat",
        title: "Screenshot Instagram Insights",
      },
      {
        id: "ss-3",
        src: "/images/maya4cat/maya4cat-dashboard.png",
        alt: "Screenshot metrik followers dan kunjungan profil @maya4cat",
        title: "Screenshot Followers & Kunjungan Profil",
      },
    ],
  },
  {
    id: "myumkm-hardjuna",
    title: "MYUMKM by Hardjuna Project",
    category: "Komersial & UMKM",
    isComingSoon: true,
  },
];

export default function ProjectList() {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    maya4cat: false,
  });
  const [activeDoc, setActiveDoc] = useState<ProjectDoc | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");

  const categories = ["Semua", "Kreatif & Animasi", "Komersial & UMKM"];

  const filteredProjects =
    selectedCategory === "Semua"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((item) => item.category === selectedCategory);

  const toggleDetail = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Keyboard Escape listener & scroll lock for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDoc(null);
      }
    };

    if (activeDoc) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [activeDoc]);

  return (
    <>
      {/* Kategori Filter */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedCategory(cat)}
            className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
              selectedCategory === cat
                ? "bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm shadow-amber-500/10"
                : "bg-zinc-900/60 text-zinc-400 border border-zinc-800 hover:text-zinc-200 hover:border-zinc-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid / List Proyek */}
      <div className="mt-12 space-y-8">
        {filteredProjects.map((project) => {
          const isOpen = !!openIds[project.id];

          // Coming Soon Card
          if (project.isComingSoon) {
            return (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/50 p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 hover:border-amber-500/30 hover:bg-zinc-900/70 shadow-lg shadow-black/20"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-y-0 left-0 w-1.5 bg-amber-500/80"
                />

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pl-2">
                  <div>
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                        Coming Soon
                      </span>
                      <span className="rounded-md border border-zinc-800 bg-zinc-950/70 px-2.5 py-0.5 text-xs font-medium text-zinc-400">
                        {project.category}
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-amber-200 transition-colors">
                      {project.title}
                    </h2>
                  </div>

                  <div>
                    <span className="rounded-lg border border-zinc-800 bg-zinc-950/60 px-3 py-1.5 text-xs font-mono text-zinc-400">
                      Dalam Pengembangan
                    </span>
                  </div>
                </div>

                <p className="mt-4 text-xs sm:text-sm text-zinc-400 leading-relaxed pl-2 border-t border-zinc-800/60 pt-4">
                  Proyek ini sedang dalam tahap perancangan dan persiapan. Informasi detail dan dokumentasi akan dipublikasikan secara lengkap saat peluncuran resmi.
                </p>
              </div>
            );
          }

          // Full Active Project Card (@maya4cat)
          return (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/50 p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/40 hover:bg-zinc-900/70 shadow-lg shadow-black/20"
            >
              {/* Left Accent Bar */}
              <div
                aria-hidden="true"
                className="absolute inset-y-0 left-0 w-1.5 bg-purple-500"
              />

              {/* Card Header & Content */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5 pl-2">
                <div className="flex items-start gap-4 sm:gap-5">
                  {/* Logo / Foto Profil Identitas Proyek */}
                  {project.logo && (
                    <div className="relative flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-2xl bg-zinc-950 p-2 shadow-md shadow-black/30 ring-1 ring-zinc-700/60 transition-transform duration-300 group-hover:scale-105 overflow-hidden">
                      <Image
                        src={project.logo}
                        alt={`Logo ${project.title}`}
                        width={64}
                        height={64}
                        className="h-full w-full object-contain rounded-xl"
                      />
                    </div>
                  )}

                  <div>
                    <div className="flex items-center gap-2 flex-wrap mb-1.5">
                      <span className="rounded-md border border-purple-500/30 bg-purple-500/10 px-2.5 py-0.5 text-xs font-semibold text-purple-300">
                        {project.category}
                      </span>
                      {project.platform && (
                        <span className="rounded-md border border-zinc-800 bg-zinc-950/70 px-2.5 py-0.5 text-xs font-medium text-zinc-300">
                          {project.platform}
                        </span>
                      )}
                      {project.year && (
                        <span className="text-xs font-mono text-zinc-400">
                          {project.year}
                        </span>
                      )}
                    </div>

                    <h2 className="text-lg sm:text-2xl font-bold tracking-tight text-white group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h2>

                    <p className="mt-1 text-xs sm:text-sm text-zinc-400 font-mono">
                      {project.account} • {project.followers} Followers
                    </p>
                  </div>
                </div>

                <div className="shrink-0 self-start sm:self-center">
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1.5 text-xs font-medium text-purple-300 transition-colors hover:border-purple-400 hover:bg-purple-500/20"
                    >
                      <span>Kunjungi Akun</span>
                      <svg
                        className="h-3.5 w-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              {/* Deskripsi Singkat */}
              <p className="mt-4 text-xs sm:text-sm text-zinc-300/90 leading-relaxed pl-2 border-t border-zinc-800/70 pt-4">
                {project.shortDescription}
              </p>

              {/* Tombol Aksi "Lihat Detail" */}
              <div className="mt-6 flex items-center justify-between border-t border-zinc-800/60 pt-4 pl-2">
                <button
                  type="button"
                  id={`toggle-detail-${project.id}`}
                  onClick={() => toggleDetail(project.id)}
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
                  {isOpen ? "Detail terbuka" : "Klik untuk rincian, statistik & galeri"}
                </span>
              </div>

              {/* ========================================================= */}
              {/* DETAIL LENGKAP PROYEK                                     */}
              {/* ========================================================= */}
              {isOpen && (
                <div className="mt-6 border-t border-zinc-800/80 pt-6 space-y-8 pl-2 animate-in fade-in duration-300">
                  {/* 1. Header & Informasi Utama */}
                  <div className="rounded-xl border border-zinc-800/70 bg-zinc-950/60 p-4 sm:p-5">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-purple-300 mb-3">
                      Informasi Utama Proyek
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
                      <div>
                        <span className="text-zinc-500 block">Platform</span>
                        <span className="text-zinc-200 font-medium">
                          {project.platform}
                        </span>
                      </div>
                      <div>
                        <span className="text-zinc-500 block">Akun</span>
                        <span className="text-zinc-200 font-medium font-mono">
                          {project.account}
                        </span>
                      </div>
                      <div>
                        <span className="text-zinc-500 block">Tahun Aktif</span>
                        <span className="text-zinc-200 font-medium">
                          {project.year}
                        </span>
                      </div>
                      <div>
                        <span className="text-zinc-500 block">Followers Saat Ini</span>
                        <span className="text-zinc-200 font-medium">
                          {project.followers}
                        </span>
                      </div>
                      <div>
                        <span className="text-zinc-500 block">Jenis Konten</span>
                        <span className="text-zinc-200 font-medium">
                          {project.contentType}
                        </span>
                      </div>
                      <div>
                        <span className="text-zinc-500 block">Kategori</span>
                        <span className="text-zinc-200 font-medium">
                          {project.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* 2. Deskripsi Proyek */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="flex h-2 w-2 rounded-full bg-purple-400"></span>
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                        Deskripsi Proyek
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed rounded-xl border border-zinc-800/50 bg-zinc-950/40 p-4">
                      {project.fullDescription}
                    </p>
                  </div>

                  {/* 3. Peran & Software yang Digunakan */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Peran */}
                    <div className="rounded-xl border border-zinc-800/70 bg-zinc-950/50 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="flex h-2 w-2 rounded-full bg-purple-400"></span>
                        <h4 className="text-sm font-bold text-white">Peran</h4>
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                        {project.role}
                      </p>
                    </div>

                    {/* Software yang Digunakan */}
                    <div className="rounded-xl border border-zinc-800/70 bg-zinc-950/50 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="flex h-2 w-2 rounded-full bg-purple-400"></span>
                        <h4 className="text-sm font-bold text-white">
                          Software yang Digunakan
                        </h4>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.tools?.map((tool, idx) => (
                          <span
                            key={idx}
                            className="rounded-lg border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-300"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* 4. Proses yang Dikerjakan */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="flex h-2 w-2 rounded-full bg-purple-400"></span>
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                        Proses yang Dikerjakan
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                      {project.processes?.map((proc, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2.5 rounded-lg border border-zinc-800/60 bg-zinc-950/40 p-3 text-xs sm:text-sm text-zinc-300"
                        >
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple-500/20 text-[10px] font-bold text-purple-300 border border-purple-500/30">
                            {idx + 1}
                          </span>
                          <span>{proc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 5. Statistik Akun (Faktual per 30 September 2026) */}
                  {project.statistics && (
                    <div className="rounded-xl border border-zinc-800/80 bg-zinc-950/60 p-4 sm:p-5">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-4">
                        <div className="flex items-center gap-2">
                          <span className="flex h-2 w-2 rounded-full bg-emerald-400"></span>
                          <h3 className="text-base font-bold text-white">
                            Statistik Akun
                          </h3>
                        </div>
                        <span className="text-[11px] font-mono text-zinc-400">
                          {project.statisticsNote}
                        </span>
                      </div>

                      {/* Angka Utama */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
                        <div className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-3 text-center">
                          <span className="text-[11px] text-zinc-400 block">
                            Followers
                          </span>
                          <span className="text-lg font-bold text-white font-mono">
                            {project.statistics.followers}
                          </span>
                        </div>
                        <div className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-3 text-center">
                          <span className="text-[11px] text-zinc-400 block">
                            Views
                          </span>
                          <span className="text-lg font-bold text-purple-300 font-mono">
                            {project.statistics.views}
                          </span>
                        </div>
                        <div className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-3 text-center">
                          <span className="text-[11px] text-zinc-400 block">
                            Viewers
                          </span>
                          <span className="text-lg font-bold text-purple-300 font-mono">
                            {project.statistics.viewers}
                          </span>
                        </div>
                        <div className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-3 text-center">
                          <span className="text-[11px] text-zinc-400 block">
                            Interactions
                          </span>
                          <span className="text-lg font-bold text-white font-mono">
                            {project.statistics.interactions}
                          </span>
                        </div>
                      </div>

                      {/* Rincian Audiens & Konten */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                        {/* Views berdasarkan audiens */}
                        <div className="rounded-lg border border-zinc-800/70 bg-zinc-900/40 p-3">
                          <span className="text-[11px] font-semibold text-zinc-400 block mb-2">
                            Views Berdasarkan Audiens
                          </span>
                          <div className="space-y-1">
                            {project.statistics.viewsByAudience.map(
                              (row, idx) => (
                                <div
                                  key={idx}
                                  className="flex justify-between text-zinc-300"
                                >
                                  <span>{row.label}:</span>
                                  <span className="font-mono font-medium text-white">
                                    {row.value}
                                  </span>
                                </div>
                              )
                            )}
                          </div>
                        </div>

                        {/* Views berdasarkan jenis konten */}
                        <div className="rounded-lg border border-zinc-800/70 bg-zinc-900/40 p-3">
                          <span className="text-[11px] font-semibold text-zinc-400 block mb-2">
                            Views Berdasarkan Jenis Konten
                          </span>
                          <div className="space-y-1">
                            {project.statistics.viewsByContentType.map(
                              (row, idx) => (
                                <div
                                  key={idx}
                                  className="flex justify-between text-zinc-300"
                                >
                                  <span>{row.label}:</span>
                                  <span className="font-mono font-medium text-white">
                                    {row.value}
                                  </span>
                                </div>
                              )
                            )}
                          </div>
                        </div>

                        {/* Interactions breakdown */}
                        <div className="rounded-lg border border-zinc-800/70 bg-zinc-900/40 p-3">
                          <span className="text-[11px] font-semibold text-zinc-400 block mb-2">
                            Interactions Berdasarkan Audiens &amp; Konten
                          </span>
                          <div className="space-y-1">
                            {project.statistics.interactionsByAudience.map(
                              (row, idx) => (
                                <div
                                  key={idx}
                                  className="flex justify-between text-zinc-300"
                                >
                                  <span>{row.label}:</span>
                                  <span className="font-mono font-medium text-white">
                                    {row.value}
                                  </span>
                                </div>
                              )
                            )}
                            <div className="pt-1 border-t border-zinc-800 flex justify-between text-zinc-300">
                              <span>Reels:</span>
                              <span className="font-mono font-medium text-purple-300">
                                {
                                  project.statistics
                                    .interactionsByContentType[0]?.value
                                }
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 6. Performa Konten */}
                  {project.contentPerformance && (
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="flex h-2 w-2 rounded-full bg-purple-400"></span>
                        <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                          Performa Konten
                        </h3>
                      </div>
                      <p className="text-xs text-zinc-400 mb-3">
                        Jumlah views pada beberapa konten yang tercatat pada dokumentasi Instagram Insights:
                      </p>
                      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                        {project.contentPerformance.map((item, idx) => (
                          <div
                            key={idx}
                            className="rounded-lg border border-zinc-800 bg-zinc-950/60 p-3 text-center"
                          >
                            <span className="text-[10px] text-zinc-500 block uppercase font-mono">
                              {item.label}
                            </span>
                            <span className="text-sm font-bold text-purple-300 font-mono mt-0.5 block">
                              {item.views}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 7. Gallery Dokumentasi */}
                  {project.documentation && project.documentation.length > 0 && (
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <span className="flex h-2 w-2 rounded-full bg-purple-400"></span>
                          <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                            Dokumentasi Proyek
                          </h3>
                        </div>
                        <span className="text-[11px] text-zinc-400 font-medium">
                          {project.documentation.length} Screenshot
                        </span>
                      </div>

                      {/* Grid Thumbnail Responsif */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {project.documentation.map((doc, idx) => (
                          <div
                            key={doc.id}
                            className="group/card flex flex-col rounded-xl border border-zinc-800/80 bg-zinc-950/60 overflow-hidden transition-all duration-300 hover:border-purple-500/40 hover:bg-zinc-950/90 shadow-md cursor-pointer"
                            onClick={() => setActiveDoc(doc)}
                            title="Klik untuk memperbesar screenshot"
                          >
                            {/* Container Foto: Object Contain, Tanpa Crop */}
                            <div className="relative h-64 sm:h-72 w-full bg-zinc-950 p-2.5 flex items-center justify-center overflow-hidden">
                              <div className="relative h-full w-full">
                                <Image
                                  src={doc.src}
                                  alt={doc.alt}
                                  fill
                                  className="object-contain transition-transform duration-300 group-hover/card:scale-[1.02]"
                                  sizes="(max-width: 640px) 100vw, 33vw"
                                />
                              </div>

                              {/* Hover Hint */}
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
                                  <span>Perbesar</span>
                                </span>
                              </div>

                              <div className="absolute top-2 left-2">
                                <span className="rounded-md border border-zinc-700/80 bg-zinc-900/90 px-2 py-0.5 text-[10px] font-mono text-zinc-300">
                                  Screenshot {idx + 1}
                                </span>
                              </div>
                            </div>

                            <div className="border-t border-zinc-800/80 p-2.5 bg-zinc-900/40 text-center">
                              <p className="text-xs text-zinc-300 font-medium">
                                {doc.title}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 8. Tombol Eksternal Menuju Instagram */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-zinc-800/70 pt-4">
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600/30 to-pink-600/30 border border-purple-500/50 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white transition-all hover:border-purple-400 hover:from-purple-600/40 hover:to-pink-600/40 active:scale-[0.98] shadow-md shadow-purple-900/20"
                      >
                        <svg
                          className="h-4 w-4 text-pink-400"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                        <span>Lihat Instagram @maya4cat</span>
                      </a>
                    )}

                    <button
                      type="button"
                      onClick={() => {
                        toggleDetail(project.id);
                        const el = document.getElementById(
                          `toggle-detail-${project.id}`
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
                      <span>Tutup Detail Proyek</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ========================================================= */}
      {/* LIGHTBOX MODAL UNTUK SCREENSHOT DOKUMENTASI               */}
      {/* ========================================================= */}
      {activeDoc && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveDoc(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-6 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex flex-col items-center max-w-4xl max-h-[92vh] w-full"
          >
            {/* Tombol Tutup */}
            <button
              type="button"
              onClick={() => setActiveDoc(null)}
              aria-label="Tutup pratinjau screenshot"
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

            {/* Gambar Utuh: Object Contain, Tanpa Crop */}
            <div className="relative w-full max-h-[76vh] flex items-center justify-center overflow-hidden rounded-2xl bg-zinc-950 p-2 border border-zinc-800 shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activeDoc.src}
                alt={activeDoc.alt}
                className="max-h-[72vh] max-w-full w-auto h-auto object-contain rounded-xl"
              />
            </div>

            {/* Title / Caption */}
            <div className="mt-3.5 w-full rounded-xl border border-zinc-800/80 bg-zinc-900/80 px-4 py-3 text-center sm:text-left backdrop-blur-sm">
              <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-medium">
                {activeDoc.alt}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

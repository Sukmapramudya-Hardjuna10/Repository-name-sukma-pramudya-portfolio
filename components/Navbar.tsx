"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { name: "Beranda", href: "/" },
  { name: "Proyek", href: "/proyek" },
  { name: "Bisnis", href: "/bisnis" },
  { name: "Sertifikat", href: "/sertifikat" },
  { name: "Pendidikan", href: "/pendidikan" },
  { name: "Pengalaman Kerja", href: "/pengalaman-kerja" },
  { name: "Organisasi & Kegiatan", href: "/organisasi-kegiatan" },
  { name: "Kontak", href: "/kontak" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-zinc-800/80 bg-zinc-950/85 backdrop-blur-md shadow-lg shadow-black/20"
          : "border-b border-zinc-800/40 bg-zinc-950/60 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Logo / Merek */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-sm font-semibold tracking-tight text-white transition-opacity hover:opacity-90"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-xs font-bold text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-200">
            SP
          </span>
          <div className="flex flex-col">
            <span className="font-bold text-zinc-100 text-sm tracking-tight leading-tight">
              Sukma Pramudya, S.Sos.
            </span>
            <span className="text-[10px] text-zinc-400 font-mono tracking-wider uppercase">
              Portofolio &amp; CV
            </span>
          </div>
        </Link>

        {/* Menu Navigasi Desktop (Layar Lebar) */}
        <nav className="hidden xl:flex items-center gap-1 rounded-full border border-zinc-800/80 bg-zinc-900/60 p-1.5 backdrop-blur-md">
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(item.href + "/");

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-zinc-100 text-zinc-950 font-semibold shadow-sm"
                    : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Menu Navigasi Layar Menengah (Tablet / Desktop Kecil) */}
        <nav className="hidden md:flex xl:hidden items-center gap-1 overflow-x-auto max-w-xl py-1 no-scrollbar text-xs">
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(item.href + "/");

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap rounded-md px-2.5 py-1.5 font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-zinc-800 text-white font-semibold"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/70"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Tombol Aksi Cepat & Tombol Menu Mobile */}
        <div className="flex items-center gap-3">
          <Link
            href="/kontak"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-zinc-700 bg-zinc-900/80 px-3.5 py-1.5 text-xs font-medium text-zinc-200 shadow-sm transition-all duration-200 hover:border-zinc-500 hover:bg-zinc-800 hover:text-white"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
            <span>Hubungi Saya</span>
          </Link>

          {/* Tombol Menu Mobile (Hamburger) */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex md:hidden items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-700"
            aria-expanded={isOpen}
            aria-label="Buka/tutup menu navigasi"
          >
            {isOpen ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Menu Drawer Mobile */}
      {isOpen && (
        <div className="md:hidden border-b border-zinc-800 bg-zinc-950/95 px-4 pt-2 pb-6 backdrop-blur-xl">
          <nav className="flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(item.href + "/");

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium transition-all ${
                    isActive
                      ? "bg-zinc-800/90 text-white font-semibold border border-zinc-700/60"
                      : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100"
                  }`}
                >
                  <span>{item.name}</span>
                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 shadow-sm shadow-indigo-400"></span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}

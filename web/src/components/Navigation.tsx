"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Úvod", href: "/" },
  { name: "Služby", href: "/sluzby" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "O mně", href: "/o-mne" },
  { name: "Kontakt", href: "/kontakt" },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="relative bg-background/80  shadow-sm border-b z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a
              href="/"
              className="text-lg font-bold text-primary-text hover:text-accent uppercase"
            >
              Lukas Pscheidt
            </a>

            <nav className="hidden lg:flex space-x-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-secondary-text hover:text-accent px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            <a href="/spoluprace">
              <button className="hidden lg:flex py-2 rounded-md bg-accent hover:bg-accent-hover text-white text-sm px-5">
                Spolupráce
              </button>
            </a>

            <button
              type="button"
              className="lg:hidden inline-flex items-center justify-center p-2 rounded-md transition-colors duration-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Otevřít hlavní menu"
            >
              <Menu className="h-6 w-6 text-primary-text" />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-500 lg:hidden ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 z-40 h-full w-full flex flex-col justify-between sm:w-80 md:w-5/12 bg-background transition-transform duration-500 ease-out lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Mobile menu header */}
        <div className="self-end w-6 h-6 p-6">
          <X
            className="w-6 h-6 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          />
        </div>

        {/* Menu items with staggered animation */}
        <div className="flex flex-col flex-2 justify-center p-6">
          {navigation.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className={`group py-4 transition-all duration-500 ${
                mobileMenuOpen
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
              style={{
                transitionDelay: mobileMenuOpen
                  ? `${index * 100 + 100}ms`
                  : "0ms",
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="text-2xl text-primary-text">{item.name}</span>
            </a>
          ))}
        </div>

        {/* CTA button */}
        <div
          className={`p-6 border-t border-white/5 bg-background transition-all duration-500 ${
            mobileMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: mobileMenuOpen ? "550ms" : "0ms" }}
        >
          <div>
            <p>info@lukaspscheidt.com</p>
            <p>+420 775 940 323</p>
          </div>
          {/*<a href="/spoluprace" onClick={() => setMobileMenuOpen(false)}>
            <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-primary-text py-6 text-base rounded-md shadow-lg shadow-emerald-500/20">
              Spolupráce
            </button>
          </a>
          <p className="text-center text-zinc-500 text-sm mt-4">
            Odpovím do 24 hodin
          </p>
          */}
        </div>
      </div>
    </>
  );
}

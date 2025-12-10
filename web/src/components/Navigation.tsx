"use client";

import { useEffect, useState } from "react";
import { Briefcase, Folders, Home, Mail, Menu, User, X } from "lucide-react";
import { Button } from "./ui/Button";

const navigation = [
  { name: "Úvod", href: "/", icon: Home },
  { name: "Služby", href: "/sluzby", icon: Briefcase },
  { name: "Portfolio", href: "/portfolio", icon: Folders },
  { name: "O mně", href: "/o-mne", icon: User },
  { name: "Kontakt", href: "/kontakt", icon: Mail },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const linkTabIndex = mobileMenuOpen ? 0 : -1;

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="bg-background/80 relative z-30 border-b shadow-sm" data-slide-up>
        <div className="container">
          <div className="flex h-16 items-center justify-between">
            <a href="/" className="text-primary-text text-lg font-bold uppercase hover:text-emerald-500">
              Lukas Pscheidt
            </a>

            <nav className="hidden space-x-4 xl:flex">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-secondary-text px-3 py-2 text-sm font-medium transition-colors hover:text-emerald-500"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            <div className="flex gap-4">
              <a
                href="/spoluprace"
                className="hidden cursor-pointer rounded-md bg-emerald-600 px-5 py-2 text-sm text-white transition-colors hover:bg-emerald-500 focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:outline-none md:flex"
              >
                Spolupráce
              </a>

              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 transition-colors duration-200 xl:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-label="Otevřít mobilní menu"
                aria-controls="mobile-nav"
              >
                <Menu className="text-primary-text h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-500 xl:hidden ${
          mobileMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      <div
        aria-hidden={!mobileMenuOpen}
        inert={!mobileMenuOpen ? "" : undefined}
        id="mobile-nav"
        role="navigation"
        aria-label="Mobilní menu"
        className={`bg-background fixed top-0 right-0 z-40 flex h-full w-full flex-col justify-between transition-transform duration-500 ease-out sm:w-80 md:w-5/12 xl:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <a href="/" className="text-primary-text text-lg font-bold uppercase hover:text-emerald-500">
            Lukas Pscheidt
          </a>
          {/* Mobile menu header */}
          <button
            className="h-6 w-6 text-white focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:outline-none"
            type="button"
            aria-label="Zavřít mobilní menu"
            tabIndex={linkTabIndex}
            onClick={() => setMobileMenuOpen(false)}
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Menu items with staggered animation */}
        <div className="flex flex-2 flex-col justify-center p-6">
          {navigation.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              tabIndex={linkTabIndex}
              className={`group py-4 transition-all duration-500 ${
                mobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
              }`}
              style={{
                transitionDelay: mobileMenuOpen ? `${index * 100 + 100}ms` : "0ms",
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="text-primary-text flex items-center gap-x-4 text-2xl font-medium">
                <item.icon className="h-6 w-6 text-emerald-600" strokeWidth={2} />
                {item.name}
              </span>
            </a>
          ))}
        </div>
        <div className="p-6">
          <Button
            href="/"
            className={`flex transition-all duration-500 ${
              mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            variant={"primary"}
            size={"md"}
            onClick={() => setMobileMenuOpen(false)}
            tabIndex={linkTabIndex}
            style={{ transitionDelay: mobileMenuOpen ? "500ms" : "0ms" }}
          >
            Spolupráce
          </Button>
        </div>

        <div
          className={`bg-background border-t border-white/5 p-6 transition-all duration-500 ${
            mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: mobileMenuOpen ? "550ms" : "0ms" }}
        >
          <div className="flex flex-col gap-2">
            <a href="mailto:info@lukaspscheidt.com" className="text-zinc-400" tabIndex={linkTabIndex}>
              info@lukaspscheidt.com
            </a>
            <a href="tel:+420775940323" className="text-zinc-400" tabIndex={linkTabIndex}>
              +420 775 940 323
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

"use client";

import { Globe, Search, Settings, ArrowRight } from "lucide-react";

const services = [
  {
    name: "Tvorba webu na míru",
    description:
      "Moderní webové stránky postavené na nejnovějších technologiích. Rychlé, bezpečné a optimalizované pro vyhledavače.",
    href: "/tvorba-webu-na-miru",
    icon: Globe,
  },
  {
    name: "SEO optimalizace",
    description:
      "Kompletní SEO analýza a optimalizace pro lepší pozice ve vyhledávačích a více organických návštěvníků.",
    href: "/seo-optimalizace",
    icon: Search,
  },
  {
    name: "CMS a správa obsahu",
    description: "Intuitivní redakční systém pro snadnou správu obsahu webu bez technických znalostí.",
    href: "/cms",
    icon: Settings,
  },
];

export default function ServicesList() {
  return (
    <div className="mx-auto w-full">
      <div className="grid grid-cols-1 place-items-center gap-6 md:gap-8 xl:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.href}
            className="group relative flex h-full w-full flex-col rounded-2xl border border-white/5 bg-zinc-900/40 p-8 transition hover:border-emerald-500 hover:bg-emerald-500/10 focus-visible:ring-2 focus-visible:ring-emerald-500 active:border-emerald-500 active:bg-emerald-500/10 md:p-12"
            data-slide-up
            tabIndex={0}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
              <service.icon className="h-6 w-6" />
            </div>

            <div className="flex flex-2 flex-col gap-4 py-6">
              <h3 className="m-0 text-2xl leading-7 font-semibold text-white">{service.name}</h3>
              <p className="m-0 leading-6 text-zinc-400">{service.description}</p>
            </div>

            <a
              href={service.href}
              className="text-emerald-500 group-hover:text-emerald-400 group-active:text-emerald-400"
            >
              <span aria-hidden className="inline-flex items-center gap-2">
                Více informací <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
              </span>
              <span className="absolute inset-0" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

// export default function ServicesList() {
//   return (
//     <div
//       className="service-list [grid-cols(repeat(auto-fit,minmax(280px,1fr))] grid justify-center gap-6"
//       data-stagger
//     >
//       {services.map((service) => (
//         <div
//           key={service.href}
//           className="relative flex flex-col gap-8 rounded-2xl border border-white/5 bg-zinc-900/40 p-8 transition hover:border-emerald-500 hover:bg-emerald-500/10 focus-visible:ring-2 focus-visible:ring-emerald-500 md:gap-10 lg:gap-12 xl:gap-14"
//           data-stagger-child
//         >
//           <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
//             <service.icon className="h-6 w-6" />
//           </div>
//           <div className="flex flex-2 flex-col gap-4 md:gap-6 lg:gap-8 xl:gap-10">
//             <h3 className="m-0 text-2xl leading-6 font-medium tracking-wide text-white md:text-3xl lg:text-4xl xl:max-w-60 xl:leading-10">
//               {service.name}
//             </h3>
//             <p className="m-0 leading-6 font-normal text-zinc-500 md:text-base lg:text-lg xl:leading-8">
//               {service.description}
//             </p>
//           </div>
//           <a href={service.href} className="text-emerald-500">
//             <span aria-hidden="true" className="flex items-center gap-2 lg:text-lg">
//               Více informací <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
//             </span>
//             <span className="absolute inset-0"></span>
//           </a>
//         </div>
//       ))}
//     </div>
//   );
// }

"use client";

import { Tag } from "./ui/Tag";
import { ArrowRight } from "lucide-react";
import Project from "../images/project.png";

const services = [
  {
    name: "Revimont",
    description: "Moderní webová stránka pro firmu zabývající se elektroinstalacemi, opravami či montážemi.",
    href: "/revimont",
  },
  {
    name: "Revimont",
    description: "Moderní webová stránka pro firmu zabývající se elektroinstalacemi, opravami či montážemi.",
    href: "/revimont",
  },
  {
    name: "Revimont",
    description: "Moderní webová stránka pro firmu zabývající se elektroinstalacemi, opravami či montážemi.",
    href: "/revimont",
  },
];

export default function ProjectsList() {
  return (
    <div className="grid grid-cols-1 gap-8 md:gap-12 lg:gap-16">
      {services.map((service) => (
        <div
          key={service.href}
          className="group flex h-full w-full flex-col rounded-2xl border border-white/5 bg-zinc-900/40 transition hover:border-emerald-500 focus-visible:ring-2 focus-visible:ring-emerald-500 active:border-emerald-500"
          data-slide-up
          tabIndex={0}
        >
          <div className="relative flex flex-col items-center lg:flex-row">
            <div className="relative aspect-video w-full basis-1/2">
              <img
                src={Project.src}
                className="h-full w-full rounded-md object-cover"
                alt={service.name}
                loading="lazy"
              />
              <div className="bg-background/30 group-hover:bg-background/60 pointer-events-none absolute inset-0 rounded-md transition" />
            </div>
            <div className="flex h-full flex-col justify-between gap-4 px-8 py-10 lg:py-12">
              <div className="relative flex basis-1/2 flex-col items-start gap-4">
                <h3 className="m-0 text-2xl leading-7 font-semibold text-white">{service.name}</h3>
                <p className="m-0 leading-6 text-zinc-400">{service.description}</p>
              </div>
              <div className="flex flex-wrap gap-4 py-4">
                <Tag label="Webová stránka" />
                <Tag label="SEO" />
                <Tag label="CMS" />
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
          </div>
        </div>
      ))}
    </div>
  );
}

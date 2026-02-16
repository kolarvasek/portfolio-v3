"use client"
import { Pointer } from '@/components/ui/pointer'
import { GridPattern } from '@/components/ui/grid-pattern'
import React from 'react'
import { cn } from "@/lib/utils";
import { FaEnvelope, FaEnvelopeOpen, FaEnvelopeSquare, FaGithub, FaLinkedin, FaLinkedinIn, FaMailBulk, FaMapPin } from 'react-icons/fa'
import { Linkedin, LocateIcon, Mail, MapIcon, MapPin } from 'lucide-react';

const page = () => {
  return (
    <div className="font-jetbrains text-xl relative bg-white w-full">
      <GridPattern
        strokeDasharray={"4 2"}
        y={-1}
        x={-20}
        className={cn(
          "[mask-image:radial-gradient(5000px_circle_at_center,white,transparent)] opacity-40",
        )}
      />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 ">
        <div className="max-w-7xl mx-auto px-6 ">
          <div className="h-20 bg-gray-300/60 rounded-2xl flex items-center justify-between p-3 text-gray-700 mt-4 backdrop-blur">
            <div className="logo font-medium hidden md:flex">VK</div>
            <ul className="flex flex-around gap-3 mx-auto text-sm md:gap-8 md:text-base">
              <li>
                <a href="#domu">Domů</a>
              </li>
              <li>
                <a href="#dovednosti">Dovednosti</a>
              </li>
              <li>
                <a href="#projekty">Projekty</a>
              </li>
              <li>
                <a href="#about">O mně</a>
              </li>
              <li>
                <a href="#kontakt">Kontakt</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="relative flex flex-col">
        {/* Home */}
        <section
          id="domu"
          className="w-full min-h-screen flex justify-center items-center px-6"
        >
          <div className="max-w-5xl w-full hero flex flex-col justify-evenly">
            <div className="flex items-center gap-4 mb-2">
              <div className="h-px w-12 bg-neutral-700"></div>
              <span className="text-sm text-neutral-500 tracking-widest uppercase">
                Programátor / Student
              </span>
            </div>
            <span className="text-black text-3xl font-medium mb-2">
              Václav Kolář
            </span>
            <span className="text-neutral-500 tracking-widest text-lg">
              Webový vývojář
            </span>
            <span className="text-black tracking-widest text-lg mt-5 mb-5 max-w-xl ">
              React & Next.js | Tailwind | Frontend
            </span>
            <span className="flex gap-5 ">
              <a
                href="https://github.com/kolarvasek"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className=" hover:scale-110 transition-transform duration-200"
              >
                <FaGithub size={25} />
              </a>
              <a
                href="https://www.linkedin.com/in/vasek-kolar"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className=" hover:scale-110 transition-transform duration-200"
              >
                <FaLinkedin size={25} />
              </a>
              <a
                href="mailto:vasek.kolar435@icloud.com"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className=" hover:scale-110 transition-transform duration-200"
              >
                <FaEnvelope size={25} />
              </a>
            </span>
          </div>
        </section>

        {/* Dovednosti */}

        <section
          id="dovednosti"
          className="w-full min-h-screen flex flex-wrap justify-center items-center px-6"
        >
          <div className="max-w-5xl w-full">
            <div className="dovednosti-header">
              <div className="flex flex-wrap items-center gap-4 mb-2">
                <div className="h-px w-12 bg-neutral-700"></div>
                <span className="text-sm text-neutral-500 tracking-widest uppercase">
                  Programátor / Student
                </span>
              </div>
              <span className="text-black text-3xl font-medium">
                Dovednosti & Technologie
              </span>
            </div>
            <div className="grid grid-cols-1 grid-rows-1 gap-10 md:grid-cols-2 md:grid-rows-2">
              <div className="dovednosti-list grid outline-1 border  p-5  mt-13 md:mt-13 hover:scale-102 transition-transform duration-200">
                <div className="frontend">
                  <span className="font-medium">Frontend</span>
                  <div className="list-dovednost flex gap-4 max-w-xl mt-4 items-center">
                    <span className="text-black border  p-2 text-base bg-gray-200/70 border-neutral-300">
                      React
                    </span>
                    <span className="text-black border  p-2 text-base bg-gray-200/70 border-neutral-300">
                      Next.js
                    </span>
                    <span className="text-black border  p-2 text-base bg-gray-200/70 border-neutral-300">
                      Tailwind
                    </span>
                    <span className="text-black border  p-2 text-base bg-gray-200/70 border-neutral-300">
                      HTML
                    </span>
                  </div>
                </div>
              </div>

              <div className="dovednosti-list grid outline-1 border  p-5 md:mt-13 hover:scale-102 transition-transform duration-200">
                <div className="frontend">
                  <span className="font-medium">Backend</span>
                  <div className="list-dovednost flex gap-4 max-w-xl mt-4">
                    <span className="text-black border  p-2 text-base bg-gray-200/70 border-neutral-300">
                      PHP
                    </span>
                    <span className="text-black border  p-2 text-base bg-gray-200/70 border-neutral-300">
                      MySQL
                    </span>
                    <span className="text-black border  p-2 text-base bg-gray-200/70 border-neutral-300">
                      Supabase
                    </span>
                  </div>
                </div>
              </div>

              <div className="dovednosti-list grid outline-1 border  p-5 mb-13 hover:scale-102 transition-transform duration-200">
                <div className="frontend">
                  <span className="font-medium">Nástroje / Služby</span>
                  <div className="list-dovednost flex gap-4 max-w-xl mt-4">
                    <span className="text-black border  p-2 text-base bg-gray-200/70 border-neutral-300">
                      Git
                    </span>
                    <span className="text-black border  p-2 text-base bg-gray-200/70 border-neutral-300">
                      GitHub
                    </span>
                    <span className="text-black border  p-2 text-base bg-gray-200/70 border-neutral-300">
                      Vercel
                    </span>
                    <span className="text-black border  p-2 text-base bg-gray-200/70 border-neutral-300">
                      Figma
                    </span>
                  </div>
                </div>
              </div>

              {/* <div className="dovednosti-list grid outline-1 border  p-5 mb-13">
                <div className="frontend">
                  <span className="font-medium">Další</span>
                  <div className="list-dovednost flex gap-4 max-w-xl mt-4">
                    <span className="text-black border  p-2 text-base bg-gray-200/70 border-neutral-300">
                      Neoc
                    </span>
                    <span className="text-black border  p-2 text-base bg-gray-200/70 border-neutral-300">
                      Neco
                    </span>
                    <span className="text-black border  p-2 text-base bg-gray-200/70 border-neutral-300">
                      neco
                    </span>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>

        {/* Projekty */}
        <section
          id="projekty"
          className="w-full min-h-screen flex justify-center items-center px-6"
        >
          <div className="max-w-5xl w-full">
            <div className="dovednosti-header">
              <div className="flex items-center gap-4 mb-2">
                <div className="h-px w-12 bg-neutral-700"></div>
                <span className="text-sm text-neutral-500 tracking-widest uppercase">
                  Projekty
                </span>
              </div>
              <span className="text-black text-3xl font-medium">
                Zvolené projekty
              </span>
            </div>
            <div className="grid md:grid-cols-1 md:grid-rows-1 gap-10  ">
              <div className="dovednosti-list flex flex-wrap max-w-lg outline-1 border  p-5  mt-13 hover:scale-102 transition-transform duration-200">
                <div className="frontend">
                  <div className="flex flex-col gap-4 ">
                    <span className="text-2xl ">Portfolio</span>
                    <span className="text-neutral-600">
                      Minimalistické osobní portfolio vytvořené v Next.js a
                      Reactu se zaměřením na čistý design a dobré responsivní
                      zobrazení.
                    </span>
                  </div>
                  <div className="list-dovednost flex gap-4 max-w-xl mt-6">
                    <span className="text-black border  p-2 text-base bg-gray-200/70 border-neutral-300">
                      Next.js
                    </span>
                    <span className="text-black border  p-2 text-base bg-gray-200/70 border-neutral-300">
                      React
                    </span>
                    <span className="text-black border  p-2 text-base bg-gray-200/70 border-neutral-300">
                      Tailwind
                    </span>
                    <span className="text-black border  p-2 text-base bg-gray-200/70 border-neutral-300">
                      Figma
                    </span>
                  </div>
                  <div className="flex gap-4 mt-6">
                    <div className="flex gap-3 items-center">
                      <a
                        href="https://github.com/kolarvasek/portfolio-v3 "
                        target="_blank"
                        className="flex gap-2 items-center"
                      >
                        <span className="flex">
                          <FaGithub />
                        </span>
                        <span className="text-neutral-500 text-base">
                          Github
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="about"
          className="w-full min-h-screen flex justify-center items-center px-6"
        >
          <div className="max-w-5xl w-full hero flex flex-col justify-evenly">
            <div className="flex items-center gap-4 mb-2">
              <div className="h-px w-12 bg-neutral-700"></div>
              <span className="text-sm text-neutral-500 tracking-widest uppercase">
                Informace
              </span>
            </div>
            <span className="text-black text-3xl font-medium mb-2">O mně</span>
            <span className="text-black tracking-widest text-lg mt-5 mb-5 max-w-xl">
              Jsem student na SPŠ na Proseku, kde studuji obor IT. Zaměřuji se
              na webový vývoj, zatím především na frontend s Reactem a Next.js.
            </span>
            {/* <span className="flex flex-col gap-5 ">
              <div className="h-px w-full bg-neutral-400"></div>

              <span className="text-black text-2xl">Vzdělaní</span>
            </span> */}
          </div>
        </section>

        <section
          id="kontakt"
          className="w-full min-h-screen flex justify-center items-center px-6"
        >
          <div className="max-w-5xl w-full hero flex flex-col justify-evenly">
            <div className="flex items-center gap-4 mb-2">
              <div className="h-px w-12 bg-neutral-700"></div>
              <span className="text-sm text-neutral-500 tracking-widest uppercase">
                Kontaktujte mě
              </span>
            </div>
            <div className="flex flex-col gap-4 ">
              <span className="text-black text-3xl font-medium mb-2">
                Kontakt
              </span>
              <span className="text-black tracking-widest text-lg mt-5 mb-5 max-w-xl">
                Otevřený praxi a pracovním příležitostem.{" "}
              </span>
              <div className=" flex gap-4 items-center ">
                <a
                  href="mailto:vasek.kolar435@icloud.com"
                  className="flex gap-4 items-center hover:scale-102 transition-transform duration-200"
                >
                  <span className="border p-4">
                    <Mail />
                  </span>
                  <div className="flex flex-col ">
                    <span className="text-neutral-500 text-base">Email</span>
                    <span>vasek.kolar435@icloud.com</span>
                  </div>
                </a>
              </div>
              <div className=" flex gap-4 items-center">
                <a
                  href="https://www.linkedin.com/in/vasek-kolar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-4 items-center hover:scale-102 transition-transform duration-200"
                >
                  <span className="border p-4">
                    <Linkedin />
                  </span>
                  <div className="flex flex-col ">
                    <span className="text-neutral-500 text-base">LinkedIn</span>
                    <span>linkedin.com/in/vasek-kolar</span>
                  </div>
                </a>
              </div>
              <div className=" flex gap-4 items-center ">
                <span className="flex gap-4 w-80 items-center hover:scale-102 transition-transform duration-200">
                  <span className="border p-4 ">
                    <MapPin />
                  </span>
                  <div className="flex flex-col ">
                    <span className="text-neutral-500 text-base">Lokace</span>
                    <span>Praha 4</span>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t border-neutral-300 py-8 flex justify-center">
        <div className="flex justify-center items-center">
          <span className="text-sm text-neutral-500">© 2026 Václav Kolář</span>
        </div>
      </footer>
    </div>
  );
}

export default page
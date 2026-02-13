"use client"
import { Pointer } from '@/components/ui/pointer'
import { GridPattern } from '@/components/ui/grid-pattern'
import React from 'react'
import { cn } from "@/lib/utils";
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

const page = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 overflow-hidden p-10 justify-center items-center font-jetbrains text-xl">
      <GridPattern
        strokeDasharray={"4 2"}
        y={-11}
        className={cn(
          "[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]",
        )}
      />

      {/* Navbar */}
      <nav>
        <div className="navbar max-w-full h-20 bg-gray-300/50 rounded-2xl flex items-center justify-between pl-20 text-gray-600">
          <div className="logo">Logo</div>
          <ul className="menu flex p-20 gap-10 ">
            <li>
              <a href="/#domu">Domů</a>
            </li>
            <li>
              <a href="/#dovednosti">Dovednosti</a>
            </li>
            <li>
              <a href="/#projekty">Projekty</a>
            </li>
            <li>
              <a href="/#about">O mně</a>
            </li>
            <li>
              <a href="/#kontakt">Kontakt</a>
            </li>
          </ul>
        </div>
      </nav>

      <main className="grid grid-rows-5 grid-cols-1 relative">
        {/* Home */}
        <section
          id="domu"
          className="min-w-6xl bg-gray-300/75 min-h-[80vh] flex justify-start items-center m-auto pl-30"
        >
          <div className="hero flex flex-col justify-evenly">
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
            <span className="text-black tracking-widest text-lg mt-5 mb-5 max-w-xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Distinctio ut saepe explicabo perferendis veritatis facere
              voluptatem ducimus quam accusantium hic ipsum recusandae nobis,
              sunt fugiat excepturi esse? Libero, eum tenetur.
            </span>
            <span className="flex gap-5 ">
              <a
                href="https://www.linkedin.com/in/vasek-kolar"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <FaGithub size={25} />
              </a>
              <a
                href="https://www.linkedin.com/in/vasek-kolar"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <FaLinkedin size={25} />
              </a>
              <a
                href="https://www.linkedin.com/in/vasek-kolar"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <FaEnvelope size={25} />
              </a>
            </span>
          </div>
        </section>

        {/* Dovednosti */}

        <section
          id="dovednosti"
          className="min-w-6xl  min-h-[80vh] flex justify-start items-center m-auto pl-30 "
        >
          <div>
            <div className="dovednosti-header">
              <div className="flex items-center gap-4 mb-2">
                <div className="h-px w-12 bg-neutral-700"></div>
                <span className="text-sm text-neutral-500 tracking-widest uppercase">
                  Programátor / Student
                </span>
              </div>
              <span className="text-black text-3xl font-medium">
                Dovednosti & Technologie
              </span>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-10">
              <div className="dovednosti-list grid outline-1 border  p-5  mt-13">
                <div className="frontend">
                  <span className="font-medium">Frontend</span>
                  <div className="list-dovednost flex gap-4 max-w-xl mt-4">
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
                      HTML / CSS
                    </span>
                    
                  </div>
                </div>
              </div>

              <div className="dovednosti-list grid outline-1 border  p-5  mt-13">
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

              <div className="dovednosti-list grid outline-1 border  p-5 mb-13">
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
      </main>
    </div>
  );
}

export default page
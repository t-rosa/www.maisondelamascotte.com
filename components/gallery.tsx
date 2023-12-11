"use client"

import { gallery } from "@/lib/gallery"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { Button } from "./ui/button"

export function Gallery() {
  const [index, setIndex] = useState(0)

  function next() {
    setIndex(index + 1)
  }

  function previous() {
    setIndex(index - 1)
  }

  return (
    <section id="gallery" className="grid place-items-center h-[calc(100vh-4rem)]">
      <div>
        <header>
          <h2 className="shrink-0 font-allura text-4xl tracking-tight sm:text-6xl md:text-7xl lg:text-8xl text-center">Galerie</h2>
        </header>
        <ul className="mt-10 flex overflow-hidden relative aspect-square w-[300px] sm:w-[550px] md:aspect-video md:w-[600px] lg:w-[900px]">
          {
            gallery.map((image) => (
              <motion.li
                key={image.id}
                animate={{ x: `-${index * 100}%` }}
                transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
                className="shrink-0"
              >
                <picture>
                  <source srcSet={image.webpSrc.src} type="image/webp" />
                  <Image src={image.jpgSrc} alt={image.alt} className="select-none pointer-events-none aspect-square w-[300px] sm:w-[550px] md:aspect-video md:w-[600px] lg:w-[900px]" placeholder="blur" />
                </picture>
              </motion.li>
            ))
          }
          <div className="absolute inset-0 flex justify-between items-center">
            <Button onClick={previous} className="h-full rounded-none opacity-95" disabled={index === 0}><ChevronLeft /></Button>
            <Button onClick={next} className="h-full rounded-none opacity-95" disabled={index === gallery.length - 1}><ChevronRight /></Button>
          </div>
        </ul>
      </div>
    </section >
  )
}

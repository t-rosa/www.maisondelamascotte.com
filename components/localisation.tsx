"use client"
import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import('./map').then((module) => module.Map), { ssr: false })

export function Localisation() {
  return (
    <section id="localisation" className='mt-10'>
      <header>
        <h2 className='shrink-0 font-allura text-4xl tracking-tight sm:text-6xl md:text-7xl lg:text-8xl text-center'>Localisation</h2>
        <h3 className='mb-4 scroll-m-20 text-2xl text-zinc-400 tracking-tight text-center'>162 Chemin De La Mascotte, 13160 Chateaurenard</h3>
      </header>
      <div className="border border-indigo-400 mt-10 w-2/3 mx-auto h-3/4">
        <DynamicMap />
      </div>
    </section>
  )
}


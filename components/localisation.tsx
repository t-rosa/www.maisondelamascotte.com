"use client"

import icon from "@/images/locate-fixed.svg";
import { Point } from "ol/geom";
import "ol/ol.css";
import { fromLonLat } from "ol/proj";
import { RFeature, RLayerVector, RMap, ROSM, RStyle } from "rlayers";

const center = fromLonLat([4.796360, 43.856660]);
const pos = new Point(center)
export function Localisation() {
  return (
    <section id="localisation" className='mt-10'>
      <header>
        <h2 className='shrink-0 font-allura text-4xl tracking-tight sm:text-6xl md:text-7xl lg:text-8xl text-center'>Localisation</h2>
        <h3 className='mb-4 scroll-m-20 text-2xl text-zinc-400 tracking-tight text-center'>162 Chemin De La Mascotte, 13160 Chateaurenard</h3>
      </header>
      <div className="border-2 border-indigo-400 mt-10 w-2/3 mx-auto h-3/4">
        <RMap width={"100%"} height={"60vh"} initial={{ center: center, zoom: 15 }}>
          <ROSM />
          <RLayerVector zIndex={10}>
            <RStyle.RStyle>
              <RStyle.RIcon src={icon.src} anchor={[0.5, 0.8]} />
            </RStyle.RStyle>
            <RFeature geometry={pos}></RFeature>
          </RLayerVector>
        </RMap>
      </div>
    </section>
  )
}

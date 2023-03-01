import image_jpg from "@/images/hero.jpg";
import image_webp from "@/images/hero.webp";
import Image from "next/image";
import { Anchor } from "./ui/anchor";

export function Hero() {
  return (
    <section id="hero" className="grid h-[calc(100vh-4rem)] items-center py-14 px-3 sm:px-10 md:px-14 lg:px-20">
      <picture className="relative h-full border-2 border-indigo-300 dark:border-indigo-400">
        <source srcSet={image_webp.src} type="image/webp" />
        <Image
          src={image_jpg}
          alt="Photo de champ d'un lavande"
          fill
          className="object-cover"
          placeholder="blur"
        />
        <div className="relative font-allura grid h-full place-items-center">
          <div>
            <h1 className="shrink-0 font-allura text-4xl tracking-tight sm:text-6xl md:text-7xl lg:text-8xl text-black">Bienvenue en Provence</h1>
            <div className="flex flex-col gap-3 mt-10 justify-items-center items-center">
              <Anchor variant="transparent" href="#contact" size="xl" className="font-bold w-2/3 text-4xl rounded-none">
                Contact
              </Anchor>
              <Anchor variant="transparent" href="#gallery" size="xl" className="font-bold w-2/3 text-4xl rounded-none" >
                Découvrir
              </Anchor>
            </div>
          </div>
        </div>
      </picture>
    </section>
  )
}

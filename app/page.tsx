import { Gallery } from "@/components/gallery";
import { Hero } from "@/components/hero";
import { Places } from "@/components/places";

export default function Home() {
  return (
    <main className="pt-16">
      <Hero />
      <Gallery />
      <Places />
    </main>
  )
}

import { Contact } from '@/components/contact'
import { Faq } from '@/components/faq'
import { Footer } from '@/components/footer'
import { Gallery } from '@/components/gallery'
import { Hero } from '@/components/hero'
import { Places } from '@/components/places'
import { Testimonials } from '@/components/testimonials'

export default function Home() {
  return (
    <main className='pt-16'>
      <Hero />
      <Gallery />
      <Places />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </main>
  )
}

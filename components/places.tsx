import { places } from '@/lib/places'
import Image from 'next/image'
import { AspectRatio } from './ui/aspect-ratio'

export function Places() {
  return (
    <section id='places' className='grid place-items-center min-h-[calc(100vh-4rem)]'>
      <div>
        <header>
          <h2 className='shrink-0 font-allura text-4xl tracking-tight sm:text-6xl md:text-7xl lg:text-8xl text-center'>
            Visitez les alentours
          </h2>
        </header>
        <ul className='mt-10 grid gap-9 lg:grid-cols-2 xl:grid-cols-3'>
          {places.map((place) => (
            <li
              key={place.id}
              className='w-[300px] sm:w-[400px] border-2 border-indigo-400 hover:scale-105 duration-300'
            >
              <a href={place.href} target='_blank' rel='noreferrer'>
                <picture>
                  <source srcSet={place.webpSrc.src} type='image/webp' />
                  <figure>
                    <AspectRatio ratio={16 / 14}>
                      <Image
                        src={place.jpgSrc}
                        alt={place.alt}
                        className='object-cover'
                        fill
                        placeholder='blur'
                      />
                      <figcaption className='font-allura absolute bottom-0 w-full bg-gray-300 bg-opacity-40 py-3 text-center text-3xl font-bold  text-black'>
                        {place.caption}
                      </figcaption>
                    </AspectRatio>
                  </figure>
                </picture>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

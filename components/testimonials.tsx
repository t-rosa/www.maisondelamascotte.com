import { testimonials } from "@/lib/testimonials"

export function Testimonials() {
  return (
    <section className="mt-10 container mx-auto">
      <header>
        <h2 className="shrink-0 font-allura text-4xl tracking-tight sm:text-6xl md:text-7xl lg:text-8xl text-center">Laissez vous guider par vos hôtes</h2>
      </header>
      <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
        <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="pt-8 sm:inline-block sm:w-full sm:px-4">
              <figure className="rounded-md dark:bg-zinc-800 border-2 border-indigo-300 p-8 text-sm leading-6">
                <blockquote className="mt-6 border-l-2 border-slate-300 pl-6 italic text-slate-800 dark:border-slate-600 dark:text-slate-200 ">
                  <p>{`“${testimonial.text}”`}</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-x-4">
                  <div>
                    <div className="font-semibold ">{testimonial.author}</div>
                    <div className="">{testimonial.country}</div>
                  </div>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

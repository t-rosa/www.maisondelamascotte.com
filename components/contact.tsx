export function Contact() {
  return (
    <section id='contact' className='border-b border-indigo-300 pb-20'>
      <h2 className='shrink-0 font-allura pb-6 text-4xl tracking-tight sm:text-6xl md:text-7xl lg:text-8xl text-center'>
        Contact
      </h2>
      <div className='flex flex-col max-w-xl mx-auto gap-6 justify-center'>
        <div className='rounded-2xl bg-secondary p-10'>
          <h3 className='text-base font-semibold leading-7'>Adresse</h3>
          <address className='mt-3 space-y-1 text-sm not-italic leading-6 '>
            <p>162 Chemin de la mascotte</p>
            <p>13160 Chateaurenard</p>
          </address>
        </div>
        <div className='rounded-2xl bg-secondary p-10'>
          <h3 className='text-base font-semibold leading-7'>Email</h3>
          <a
            href='mailto:nathaliebardelli13@gmail.com'
            className='mt-3 space-y-1 text-sm not-italic leading-6 '
          >
            nathaliebardelli13@gmail.com
          </a>
        </div>
      </div>
    </section>
  )
}

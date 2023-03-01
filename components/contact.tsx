import ContactForm from '@/components/contact-form'
import DotPattern from '@/components/dot-pattern'

export function Contact() {
  return (
    <section id="contact" className='mt-10'>
      <div className='overflow-hidden py-16 px-4 sm:px-6 lg:px-8 lg:py-24'>
        <div className='relative mx-auto max-w-xl'>
          <header className='text-center'>
            <DotPattern />
            <h2 className='shrink-0 font-allura text-4xl tracking-tight sm:text-6xl md:text-7xl lg:text-8xl text-center'>Contact</h2>
          </header>
          <div className='mt-12'>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

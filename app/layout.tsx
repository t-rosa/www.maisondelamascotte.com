import { Allura } from "next/font/google"
import { Toaster } from '@/components/ui/toaster'
import '@/styles/globals.css'
import { type PropsWithChildren } from 'react'

export const metadata = {
  title: 'Maison de la mascotte',
}

const allura = Allura({
  weight: ['400'],
  variable: '--font-allura',
  display: 'swap',
  subsets: ['latin']
})

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='fr' className={`${allura.variable}`}>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  )
}

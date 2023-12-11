import { Allura } from "next/font/google"
import { type PropsWithChildren } from 'react'
import './globals.css'

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
    <html lang='fr' className={`${allura.variable} scroll-smooth`}>
      <body>
          {children}
      </body>
    </html>
  )
}

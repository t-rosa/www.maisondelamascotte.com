import { Header } from "@/components/header"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from '@/components/ui/toaster'
import '@/styles/globals.css'
import { Allura } from "next/font/google"
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
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="pt-16">
            {children}
          </main>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  )
}

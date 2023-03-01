import { ModeToggle } from "@/components/mode-toggle"
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
          <header className="border-b h-16 fixed inset-x-0">
            <div className="container h-full items-center mx-auto flex justify-between">
              <h1 className="shrink-0 font-allura text-4xl tracking-tight lg:text-5xl">
                Maison de la mascotte
              </h1>
              <ModeToggle />
            </div>
          </header>
          <main className="pt-16">
            {children}
          </main>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  )
}

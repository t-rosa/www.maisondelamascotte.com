import '@/styles/globals.css'
import { type PropsWithChildren } from 'react'

export const metadata = {
  title: 'Maison de la mascotte',
}

export default function RootLayout({
  children,
}: PropsWithChildren) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}

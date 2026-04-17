import type { Metadata, Viewport } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Soma Wellness | Pilates Reformer en Santa Fe, Argentina',
    template: '%s | Soma Wellness',
  },
  description:
    'Estudio boutique de Pilates Reformer en Santa Fe. Tres sedes: Amarras, Faro y Centro. Clases de lunes a sábado con enfoque en movimiento consciente, bienestar integral y cuidado corporal. Reservá tu clase.',
  keywords: [
    'Pilates Reformer',
    'Pilates Santa Fe',
    'estudio Pilates',
    'Pilates boutique',
    'Soma Wellness',
    'Pilates Reformer Santa Fe',
    'clases de Pilates',
    'bienestar corporal',
    'movimiento consciente',
    'Yoga Santa Fe',
    'Pilates Amarras',
    'Pilates Faro',
    'Pilates Centro Santa Fe',
    'actividad física controlada',
    'entrenamiento consciente',
  ],
  authors: [{ name: 'Soma Wellness' }],
  creator: 'Soma Wellness',
  metadataBase: new URL('https://somawellness.com.ar'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    siteName: 'Soma Wellness',
    title: 'Soma Wellness | Pilates Reformer en Santa Fe, Argentina',
    description:
      'Estudio boutique de Pilates Reformer en Santa Fe. Movimiento inteligente y bienestar que se siente. Tres sedes, clases de lunes a sábado.',
    images: [
      {
        url: '/images/hero-studio.jpg',
        width: 1200,
        height: 630,
        alt: 'Estudio Soma Wellness - Pilates Reformer en Santa Fe',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Soma Wellness | Pilates Reformer en Santa Fe',
    description:
      'Estudio boutique de Pilates Reformer en Santa Fe. Movimiento inteligente y bienestar que se siente.',
    images: ['/images/hero-studio.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#EAE3D8',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${dmSans.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}

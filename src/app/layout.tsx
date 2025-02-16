import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'VizzyDB',
  description: 'A simple but effective database visualizer for your systems.',
  icons:{
    icon:[
      {
        media:"(prefers-color-scheme: light)",
        url:"/images/icon.svg",
        href:"/images/icon.svg",
      },
      {
        media:"(prefers-color-scheme: dark)",
        url:"/images/icon.svg",
        href:"/images/icon.svg",
      },
    ]
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

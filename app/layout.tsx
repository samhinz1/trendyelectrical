import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { config } from "@/lib/config"

const inter = Inter({ subsets: ["latin"] })

// Use basePath from config
const { basePath } = config

export const metadata: Metadata = {
  title: `${config.companyName}`,
  description: config.seo.description,
  icons: {
    icon: `${basePath}${config.branding.icon.path}`,
    apple: `${basePath}${config.branding.icon.path}`,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={`${basePath}${config.branding.icon.path}`} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

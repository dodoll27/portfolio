import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, DM_Serif_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })
const dmSerifDisplay = DM_Serif_Display({ weight: "400", subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TEO. | Software Engineer & Architect",
  description: "Crafting Digital Ecosystems - Based in the intersection of robust code and Swiss design principles.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

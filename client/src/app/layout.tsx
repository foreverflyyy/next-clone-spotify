import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Music platform',
  description: 'Music platform on next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <div className={"h-[100vh] pt-[50px] md:container mx-auto"}>
            {children}
        </div>
      </body>
    </html>
  )
}

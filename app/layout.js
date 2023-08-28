import './globals.css'
import { Inter } from 'next/font/google'

import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Connor Kormos Web Portfolio',
  description: 'Full Stack Web Developer',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <div className='flex min-h-screen flex-col items-center justify-between p-24'> */}
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  )
}

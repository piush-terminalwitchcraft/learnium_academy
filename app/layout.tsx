import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import './globals.css'
import Main from '@/Components/Layout/Main'
import Header from '@/Components/Elements/Header'
import Footer from '@/Components/Elements/Footer'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Main>
          <div>
            {children}
        </div>
        </Main>
        <Footer />
      </body>
    </html>
  )
}

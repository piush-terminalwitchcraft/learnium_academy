import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import './globals.css'
import Main from '@/Components/Layout/Main'
import { AppProvider } from './Redux/AppProvider'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import { Footer, Header } from '@/Components/Elements';

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
        <AppProvider> 
          <Main>
            <Header />
            <div>
              <ToastContainer/>
              {children}
            </div>
            <Footer />
          </Main>
        </AppProvider>
      </body>
    </html>
  )
}

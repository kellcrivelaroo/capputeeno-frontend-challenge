import { ReactNode } from 'react'
import { Saira, Saira_Stencil_One as SairaStencilOne } from 'next/font/google'

import './globals.css'
import Header from '@/components/Header'
import { FilterContextProvider } from '@/context/filter-context'
import Footer from '@/components/Footer'

const saira = Saira({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans',
})

const sairaStencil = SairaStencilOne({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-logo',
})

export const metadata = {
  title: 'Capputeeno',
  description: 'Frontend Challenge',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${saira.variable} ${sairaStencil.variable} flex flex-col items-center justify-center bg-gray-bg font-sans`}
      >
        <FilterContextProvider>
          <Header />
          <main className="flex w-fit flex-col items-center justify-center px-8 pb-20 lg:w-container lg:px-0">
            {children}
          </main>
          <Footer />
        </FilterContextProvider>
      </body>
    </html>
  )
}

import { ReactNode } from 'react'
import {
  Bai_Jamjuree as bj,
  Saira,
  Saira_Stencil_One as SairaStencilOne,
} from 'next/font/google'

import './globals.css'
import Header from '@/components/Header'
import { FilterContextProvider } from '@/context/filter-context'

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
          <main className="flex w-container flex-col items-center justify-center pb-20">
            {children}
          </main>
        </FilterContextProvider>
      </body>
    </html>
  )
}

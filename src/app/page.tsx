'use client'
import CategoryBar from '@/components/CategoryBar'
import FilterDropDown from '@/components/FilterDropDown'
import Pagination from '@/components/Pagination'
import ProductsList from '@/components/ProductsList'
import { client } from '@/lib/apollo'
import { ApolloProvider } from '@apollo/client'

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <div
        className="flex h-24 w-screen flex-col items-center justify-center gap-4 px-6 lg:h-20 lg:w-full 
      lg:flex-row lg:justify-between lg:px-0"
      >
        <CategoryBar />
        <FilterDropDown />
      </div>
      <Pagination />
      <ProductsList />
    </ApolloProvider>
  )
}

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
      <div className="flex h-20 w-full items-center justify-between">
        <CategoryBar />
        <FilterDropDown />
      </div>
      <Pagination />
      <ProductsList />
    </ApolloProvider>
  )
}

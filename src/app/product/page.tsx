'use client'
import BackButton from '@/components/BackButton'
import ProductInfo from '@/components/product/ProductInfo'
import { client } from '@/lib/apollo'
import { ApolloProvider } from '@apollo/client'

interface productParams {
  searchParams: {
    id: string
  }
}

export default function Product({ searchParams }: productParams) {
  return (
    <ApolloProvider client={client}>
      <div className="flex w-full py-6">
        <BackButton navigate="/" />
      </div>
      <ProductInfo id={searchParams.id} />
    </ApolloProvider>
  )
}

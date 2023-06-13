import { useQuery } from '@apollo/client'
import { getProducts, getProductsByPage } from '@/utils/querys'
import ProductCard from './ProductCard'
import { ProductProps } from '@/utils/interfaces'
import { useContext } from 'react'
import { FilterContext } from '@/context/filter-context'
import LoadSpiner from './LoadSpiner'

export default function ProductsList() {
  const { category, priority, page, search, setNumberOfProducts } =
    useContext(FilterContext)

  const allProducts = useQuery(getProducts(category, priority)).data
  const { data, loading } = useQuery(
    getProductsByPage(category, priority, page),
  )

  setNumberOfProducts(allProducts?.allProducts.length)

  const filteredProducts: Array<ProductProps> = data?.allProducts.filter(
    (product: { name: string }) =>
      product.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
  )

  return (
    <>
      {loading ? (
        <LoadSpiner />
      ) : (
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 px-8 lg:grid-cols-4 lg:px-0">
          {filteredProducts?.map((product: ProductProps) => {
            return (
              <ProductCard
                key={product.id}
                id={product.id}
                price={product.price_in_cents}
                image={product.image_url}
                title={product.name}
              />
            )
          })}
        </div>
      )}
    </>
  )
}

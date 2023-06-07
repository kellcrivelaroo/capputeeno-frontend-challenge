import { useQuery } from '@apollo/client'
import { getProducts, getProductsByPage } from '@/utils/querys'
import ProductCard from './ProductCard'
import { ProductProps } from '@/utils/interfaces'
import { useContext } from 'react'
import { FilterContext } from '@/context/filter-context'
import { ImSpinner8 } from 'react-icons/im'

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
        <div className="relative h-screen bg-brand-orange">
          <ImSpinner8 className="absolute top-20 h-12 w-12 animate-spin text-cart-orange" />
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-x-8 gap-y-6">
          {filteredProducts?.map((product: ProductProps) => {
            return (
              <ProductCard
                key={product.id}
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

'use client'
import { ProductProps } from '@/utils/interfaces'
import BackButton from '@/components/BackButton'
import OrderSummary from '@/components/cart/OrderSummary'
import ProductCard from '@/components/cart/ProductCard'
import formatPrice from '@/utils/format-price'
import { useEffect, useState } from 'react'

export default function Cart() {
  const storedValue = localStorage.getItem('cart-products')
  const [cartProductsArray, setCartProductsArray] = useState<ProductProps[]>([])
  const [productsTotalQuantity, setProductsTotalQuantity] = useState(0)
  const [productsTotalPrice, setProductsTotalPrice] = useState(0)

  useEffect(() => {
    if (storedValue !== null) {
      const parsedValue = JSON.parse(storedValue)
      setCartProductsArray(parsedValue)

      let productsPartialQuantity = 0
      let productsPartialPrice = 0

      parsedValue.forEach(
        (product: { quantity: number; price_in_cents: number }) => {
          productsPartialQuantity += product.quantity
          productsPartialPrice += product.quantity * product.price_in_cents
        },
      )

      setProductsTotalQuantity(productsPartialQuantity)
      setProductsTotalPrice(productsPartialPrice)
    } else setCartProductsArray([])
  }, [storedValue])

  return (
    <div className="grid w-full grid-cols-1 gap-8 pt-4 text-gray-dark lg:grid-cols-[1fr_352px] lg:pt-10">
      <div className="flex flex-col">
        <BackButton navigate="/" />
        <h1 className="mb-2 mt-6 text-2xl font-medium uppercase">
          Seu carrinho
        </h1>
        <p className="mb-2 font-light">
          {`Total (${productsTotalQuantity} produtos) `}
          <span className="font-semibold">
            {formatPrice(productsTotalPrice)}
          </span>
        </p>
        {cartProductsArray.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              cartProducts={cartProductsArray}
              setCartProducts={setCartProductsArray}
              totalQuantity={productsTotalQuantity}
              setTotalQuantity={setProductsTotalQuantity}
            />
          )
        })}
      </div>
      <OrderSummary total={productsTotalPrice} />
    </div>
  )
}

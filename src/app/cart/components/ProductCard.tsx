import Image from 'next/image'
import trashIcon from '@/assets/trash-icon.svg'
import { ProductProps } from '@/utils/interfaces'
import formatPrice from '@/utils/format-price'
import { ChangeEvent, useState } from 'react'

interface ProductCardProps {
  product: ProductProps
  cartProducts: ProductProps[]
  setCartProducts: (array: ProductProps[]) => void
  totalQuantity: number
  setTotalQuantity: (quantity: number) => void
}

export default function ProductCard({
  product,
  cartProducts,
  setCartProducts,
  totalQuantity,
  setTotalQuantity,
}: ProductCardProps) {
  const [selectedQuantity, setSelectedQuantity] = useState(product.quantity)
  const oldValue = selectedQuantity

  const handleQuantityChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newValue = Number(e.target.value)
    const difValue = newValue - oldValue
    setSelectedQuantity(newValue)
    const updatedCartProducts = cartProducts.map((item) => {
      if (item.id !== product.id) return item
      return { ...item, quantity: newValue }
    })
    localStorage.setItem('cart-products', JSON.stringify(updatedCartProducts))
    setTotalQuantity(totalQuantity + difValue)
  }

  const handleRemoveProduct = () => {
    const updatedCartProducts = cartProducts.filter((item) => {
      if (item.id !== product.id) return item
      return null
    })
    localStorage.setItem('cart-products', JSON.stringify(updatedCartProducts))
    setCartProducts(updatedCartProducts)
  }

  return (
    <div className="mt-4 grid min-h-[212px] grid-cols-[256px_1fr] overflow-hidden rounded-lg bg-white">
      <Image
        src={product.image_url}
        alt=""
        width={640}
        height={580}
        className="h-full object-cover"
      />
      <div className="flex flex-col justify-between p-4 pl-8">
        <div>
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-xl font-light">{product.name}</h2>
            <button
              className="hover:brightness-150"
              onClick={handleRemoveProduct}
            >
              <Image
                src={trashIcon}
                width={24}
                height={24}
                alt="Lata de lixo"
              />
            </button>
          </div>
          <p className="text-sm">{product.description}</p>
        </div>
        <div className="mb-2 flex items-center justify-between">
          <select
            className="rounded-lg border border-gray-divBorder bg-gray-input px-3 py-1 
          text-gray-light"
            value={selectedQuantity}
            onChange={handleQuantityChange}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <span className="font-semibold text-gray-darkest">
            {formatPrice(product.price_in_cents * selectedQuantity)}
          </span>
        </div>
      </div>
    </div>
  )
}

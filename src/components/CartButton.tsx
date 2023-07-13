'use client'
import { useEffect, useContext } from 'react'
import Image from 'next/image'
import shoppingBag from '../assets/shopping-bag.svg'
import Link from 'next/link'
import { FilterContext } from '@/context/filter-context'

export default function CartButton() {
  const { cartItems, setCartItems } = useContext(FilterContext)

  useEffect(() => {
    const cartProducts =
      typeof window !== 'undefined'
        ? localStorage.getItem('cart-products')
        : null

    if (cartProducts !== null) {
      let num = 0
      JSON.parse(cartProducts).forEach(
        (product: { quantity: number }) => (num = num + product.quantity),
      )
      setCartItems(num)
    }
  }, [setCartItems])

  return (
    <Link className="relative" href="/cart">
      <Image
        src={shoppingBag}
        width={24}
        height={24}
        alt="Sacola de compras"
        className="icon"
      />
      <div
        className="absolute -bottom-2 -right-2 flex min-h-[16px] min-w-[16px] items-center justify-center 
        rounded-full bg-cart-red text-[10px] text-white"
      >
        {cartItems}
      </div>
    </Link>
  )
}

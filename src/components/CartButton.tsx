'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import shoppingBag from '../assets/shopping-bag.svg'
import Link from 'next/link'

export default function CartButton() {
  const [cartItems, setCartItems] = useState('0')

  useEffect(() => {
    setCartItems(localStorage.getItem('carrinho') as string)
  }, [])

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

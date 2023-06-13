'use client'
import Image from 'next/image'
import searchIcon from '../assets/search-loupe.svg'
import { useContext } from 'react'
import { FilterContext } from '@/context/filter-context'

export default function SeachInput() {
  const { setSearch, setPage } = useContext(FilterContext)

  return (
    <div className="relative w-full">
      <input
        type="text"
        className="h-[42px] w-full rounded-lg bg-gray-input pl-4 pr-12 outline-none transition-colors duration-300 
        focus:bg-gray-light/20 lg:w-[352px]"
        placeholder="Procurando algo específico?"
        onChange={(e) => {
          setSearch(e.target.value)
          setPage(0)
        }}
      />
      <Image
        src={searchIcon}
        alt="Lupa"
        width={24}
        height={24}
        className="absolute right-4 top-[9px]"
      />
    </div>
  )
}

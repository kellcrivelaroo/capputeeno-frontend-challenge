import { useContext, useState, useRef, useEffect } from 'react'
import Image from 'next/image'

import { FilterPriorities } from '@/utils/types'
import { FilterContext } from '@/context/filter-context'

import chevIcon from '../assets/chev-down.svg'

export default function FilterDropDown() {
  const [isOpen, setIsOpen] = useState(false)
  const { setPriority } = useContext(FilterContext)

  function handleUpdatePriority(value: FilterPriorities) {
    setPriority(value)
    setIsOpen(false)
  }

  const divRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const handleClickOutside = (event: { target: any }) => {
    if (
      isOpen &&
      divRef.current &&
      !divRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  const handleOpen = () => setIsOpen((prev) => !prev)

  return (
    <div className="relative z-10 -mr-1 place-self-end lg:mr-0 lg:place-self-auto">
      <button
        className="flex gap-2 text-gray-light"
        ref={buttonRef}
        onClick={handleOpen}
      >
        <span>Organizar por</span>
        <Image
          src={chevIcon}
          alt="seta"
          width={24}
          height={24}
          className={`transition-transform duration-300 ${
            isOpen && 'rotate-180'
          }`}
        />
      </button>

      <div
        ref={divRef}
        className={`absolute right-0 mt-1 max-h-32 w-[176px] origin-top-right overflow-hidden rounded 
        bg-white text-sm text-gray-light shadow-lg shadow-black/10 transition-all duration-500
          ${isOpen && 'max-w-[176px] scale-100 opacity-100'} ${
          !isOpen && 'max-w-0 scale-0 opacity-0'
        }`}
      >
        <ul
          className={`first-letter flex flex-col gap-2 overflow-hidden px-4 py-3 
          opacity-0 transition-all delay-300 duration-300 [&>li:hover]:text-brand-orange [&>li]:cursor-pointer 
          ${isOpen && 'opacity-100'}`}
        >
          <li onClick={() => handleUpdatePriority(FilterPriorities.NEWS)}>
            Novidades
          </li>
          <li
            onClick={() => handleUpdatePriority(FilterPriorities.BIGGEST_PRICE)}
          >
            Preço: Maior - menor
          </li>
          <li
            onClick={() => handleUpdatePriority(FilterPriorities.MINOR_PRICE)}
          >
            Preço: Menor - maior
          </li>
          <li onClick={() => handleUpdatePriority(FilterPriorities.POPULARITY)}>
            Mais vendidos
          </li>
        </ul>
      </div>
    </div>
  )
}

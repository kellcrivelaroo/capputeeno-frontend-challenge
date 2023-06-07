import { FilterContext } from '@/context/filter-context'
import React, { useContext, useEffect, useState } from 'react'

import chevLeft from '../assets/chev-left.svg'
import chevRight from '../assets/chev-right.svg'
import Image from 'next/image'

export default function Pagination() {
  const { page, setPage, numberOfProducts } = useContext(FilterContext)
  const [pagination, setPagination] = useState([])

  function handleButtonClick(e: React.MouseEvent<HTMLButtonElement>) {
    const buttonIndex = e.currentTarget.id
    setPage(Number(buttonIndex))
  }

  const totalPages = Math.ceil(numberOfProducts / 12)
  useEffect(() => {
    const buttons: any = []

    for (let i = 0; i < totalPages; i++) {
      const buttonIndex = i.toString()
      buttons.push(
        <button
          key={i}
          id={buttonIndex}
          onClick={handleButtonClick}
          className={`transition-color flex h-8 w-8 items-center justify-center rounded-lg 
          border bg-gray-pagination duration-300
          ${
            page.toString() === buttonIndex
              ? 'border-brand-orange text-brand-orange hover:border-brand-orange'
              : 'border-transparent text-gray-light hover:border-gray-light/50'
          }`}
        >
          {i + 1}
        </button>,
      )
    }

    setPagination(buttons)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numberOfProducts, totalPages, page])

  return (
    <div className="mb-8 flex w-full items-center justify-end gap-1">
      {pagination}
      <button
        className="transition-color flex h-8 w-8 items-center justify-center rounded-lg border
        border-transparent bg-gray-pagination text-gray-light duration-300 hover:border-gray-light/50"
        onClick={() => {
          if (page > 0) setPage(page - 1)
        }}
      >
        <Image src={chevLeft} alt="seta" width={24} height={24} />
      </button>
      <button
        className="transition-color flex h-8 w-8 items-center justify-center rounded-lg border
        border-transparent bg-gray-pagination text-gray-light duration-300 hover:border-gray-light/50"
        onClick={() => {
          if (page < totalPages - 1) setPage(page + 1)
        }}
      >
        <Image src={chevRight} alt="seta" width={24} height={24} />
      </button>
    </div>
  )
}

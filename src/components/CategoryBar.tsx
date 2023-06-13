'use client'
import { FilterContext } from '@/context/filter-context'
import { FilterCategories } from '@/utils/types'
import React, { useContext, useEffect, useState } from 'react'

interface selectedOptionInfoProps {
  width: number
  x: number
}

export default function CategoryBar() {
  const { setPage } = useContext(FilterContext)
  const [selectedOptionInfo, setSelectedOptionInfo] =
    useState<selectedOptionInfoProps | null>(null)

  const { category, setCategory } = useContext(FilterContext)

  useEffect(() => {
    setCategory(FilterCategories.ALL)
  }, [setCategory])

  function handleOptionClick(
    event: React.MouseEvent<HTMLLIElement>,
    selectedCategory: FilterCategories,
  ) {
    setSelectedOptionInfo({
      width: event.currentTarget.offsetWidth,
      x: event.currentTarget.offsetLeft - 1,
    })
    setCategory(selectedCategory)
    setPage(0)
  }

  return (
    <ul
      className="relative flex w-full justify-between gap-0 text-sm text-gray-light lg:w-auto lg:justify-normal 
      lg:gap-10 lg:text-base [&>li.selected]:font-bold [&>li]:cursor-pointer [&>li]:uppercase"
    >
      <li
        className={`${category === FilterCategories.ALL && 'selected'}`}
        onClick={(e) => handleOptionClick(e, FilterCategories.ALL)}
      >
        Todos os produtos
      </li>
      <li
        className={`${category === FilterCategories.SHIRT && 'selected'}`}
        onClick={(e) => handleOptionClick(e, FilterCategories.SHIRT)}
      >
        Camisetas
      </li>
      <li
        className={`${category === FilterCategories.MUG && 'selected'}`}
        onClick={(e) => handleOptionClick(e, FilterCategories.MUG)}
      >
        Canecas
      </li>
      <div
        className={`absolute -bottom-1 h-1 scale-x-[1.04] bg-cart-orange transition-all duration-500`}
        style={{
          minWidth: `${
            selectedOptionInfo?.width.toString().concat('px') || '10.4375em'
          }`,
          transform: `translateX(${selectedOptionInfo?.x.toString()}px) scaleX(1.04)`,
        }}
      ></div>
    </ul>
  )
}

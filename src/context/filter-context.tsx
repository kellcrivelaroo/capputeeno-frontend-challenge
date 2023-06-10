'use client'
import { FilterCategories, FilterPriorities } from '@/utils/types'
import { ReactNode, createContext, useState } from 'react'

interface ProviderProps {
  children: ReactNode
}

export const FilterContext = createContext({
  category: FilterCategories.ALL,
  setCategory: (value: FilterCategories) => {},
  priority: FilterPriorities.NEWS,
  setPriority: (value: FilterPriorities) => {},
  page: 0,
  setPage: (value: number) => {},
  search: '',
  setSearch: (value: string) => {},
  numberOfProducts: 0,
  setNumberOfProducts: (value: number) => {},
})

export function FilterContextProvider({ children }: ProviderProps) {
  const [category, setCategory] = useState(FilterCategories.ALL)
  const [priority, setPriority] = useState(FilterPriorities.NEWS)
  const [page, setPage] = useState(0)
  const [search, setSearch] = useState('')
  const [numberOfProducts, setNumberOfProducts] = useState(0)

  return (
    <FilterContext.Provider
      value={{
        category,
        setCategory,
        priority,
        setPriority,
        page,
        setPage,
        search,
        setSearch,
        numberOfProducts,
        setNumberOfProducts,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}

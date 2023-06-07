import { gql } from '@apollo/client'
import { FilterCategories, FilterPriorities } from './types'

function getCategoryByType(category: FilterCategories) {
  if (category === FilterCategories.MUG) return `filter: {category: "mugs"}`
  if (category === FilterCategories.SHIRT)
    return `filter: {category: "t-shirts"}`
  return ''
}

function getFieldByPriority(priority: FilterPriorities) {
  if (priority === FilterPriorities.POPULARITY)
    return { field: 'sales', order: 'DSC' }
  if (priority === FilterPriorities.BIGGEST_PRICE)
    return { field: 'price_in_cents', order: 'DSC' }
  if (priority === FilterPriorities.MINOR_PRICE)
    return { field: 'price_in_cents', order: 'ASC' }
  return { field: 'created_at', order: 'DSC' }
}

export function getProducts(
  category: FilterCategories,
  priority: FilterPriorities,
) {
  const sortSettings = getFieldByPriority(priority)
  const categoryFilter = getCategoryByType(category)

  return gql`
  query {
    allProducts(sortField: "${sortSettings.field}", sortOrder: "${sortSettings.order}", ${categoryFilter}) {
      id
      name
      price_in_cents
      image_url
      category
    }
  }
  `
}

export function getProductsByPage(
  category: FilterCategories,
  priority: FilterPriorities,
  page: number,
) {
  const sortSettings = getFieldByPriority(priority)
  const categoryFilter = getCategoryByType(category)

  return gql`
  query {
    allProducts(sortField: "${sortSettings.field}", sortOrder: "${sortSettings.order}", ${categoryFilter}, 
    page: ${page}, perPage: 12) {
      id
      name
      price_in_cents
      image_url
      category
    }
  }
  `
}

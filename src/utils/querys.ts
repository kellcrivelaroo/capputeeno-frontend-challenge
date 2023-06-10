import { gql } from '@apollo/client'
import { FilterCategories, FilterPriorities } from './types'

// function getCategoryByType(category: FilterCategories) {
//   if (category === FilterCategories.MUG)
//     return `where: {category: {_eq: "mugs"}}`
//   if (category === FilterCategories.SHIRT)
//     return `where: {category: {_eq: "t-shirts"}}`
//   return ''
// }

// function getFieldByPriority(priority: FilterPriorities) {
//   if (priority === FilterPriorities.POPULARITY)
//     return ', order_by: {sales: desc}'
//   if (priority === FilterPriorities.BIGGEST_PRICE)
//     return ', order_by: {price_in_cents: desc}'
//   if (priority === FilterPriorities.MINOR_PRICE)
//     return ', order_by: {price_in_cents: asc}'
//   return ', order_by: {created_at: desc}'
// }

// export function getProducts(
//   category: FilterCategories,
//   priority: FilterPriorities,
// ) {
//   const categoryFilter = getCategoryByType(category)
//   const sortSettings = getFieldByPriority(priority)

//   return gql`
//     query {
//       allProducts (${categoryFilter} ${sortSettings}){
//         id
//         name
//         description
//         category
//         image_url
//         price_in_cents
//         sales
//         created_at
//       }
//     }
//   `
// }

// export function getProductsByPage(
//   category: FilterCategories,
//   priority: FilterPriorities,
//   page: number,
// ) {
//   const categoryFilter = getCategoryByType(category)
//   const sortSettings = getFieldByPriority(priority)
//   const numberPerPage = 12
//   const offset = numberPerPage * page

//   return gql`
//     query {
//       allProducts (${categoryFilter} ${sortSettings}, limit: ${numberPerPage}, offset: ${offset}){
//         id
//         name
//         description
//         category
//         image_url
//         price_in_cents
//         sales
//         created_at
//       }
//     }
//   `
// }

// export function getQueryById(id: string) {
//   return gql`
//     query {
//       allProducts(
//         where: { id: { _eq: "${id}" } }
//       ) {
//         id
//         name
//         description
//         category
//         image_url
//         price_in_cents
//       }
//     }
//   `
// }

// LocalHost

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

export function getQueryById(id: string) {
  return gql`
  query {
    allProducts(filter: {id: "${id}"}) {
      id
      name
      price_in_cents
      image_url
      category
    }
  }
  `
}

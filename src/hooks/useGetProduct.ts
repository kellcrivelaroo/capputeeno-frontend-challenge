import { getQueryById } from '@/utils/querys'
import { useQuery } from '@apollo/client'

export function useGetProduct(id: string) {
  return useQuery(getQueryById(id)).data?.allProducts[0]
}

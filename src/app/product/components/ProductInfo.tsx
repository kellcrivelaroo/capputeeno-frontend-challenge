import Image from 'next/image'
import shoppingBag from '@/assets/shopping-bag.svg'
import { useGetProduct } from '@/hooks/useGetProduct'
import { ProductProps } from '@/utils/interfaces'
import formatPrice from '@/utils/format-price'
import LoadSpiner from '@/components/LoadSpiner'

interface ProductInfoProps {
  id: string
}

const categoryTranslate = (category: string) => {
  if (category === 'mugs') return `Canecas`
  return `Camisetas`
}

export default function ProductInfo({ id }: ProductInfoProps) {
  const product: ProductProps = useGetProduct(id)

  return (
    <>
      {!product ? (
        <LoadSpiner />
      ) : (
        <div className="grid w-full grid-cols-2 gap-8">
          <Image
            src={product?.image_url}
            alt=""
            width={640}
            height={580}
            className="h-full rounded object-cover"
          />
          <div className="flex h-full flex-col justify-between text-gray-dark">
            <div className="flex flex-col">
              <span className="pb-3">
                {categoryTranslate(product?.category)}
              </span>
              <h1 className="pb-1 text-4xl font-light">{product?.name}</h1>
              <span className="pb-6 text-xl font-semibold text-gray-darkest">
                {formatPrice(product?.price_in_cents)}
              </span>
              <p className="pb-14 text-xs">
                *Frete de R$40,00 para todo o Brasil. Grátis para compras acima
                de R$900,00
              </p>
              <span className="pb-2 font-semibold uppercase text-gray-light">
                Descrição
              </span>
              <p className="text-sm">{product?.description}</p>
            </div>
            <button
              className="flex items-center justify-center gap-2 rounded bg-brand-blue py-2 uppercase 
      text-white transition-all duration-300 hover:brightness-110"
            >
              <Image
                src={shoppingBag}
                width={24}
                height={24}
                alt="Sacola de compras"
                className="add-to-cart"
              />
              <span>Adicionar ao carrinho</span>
            </button>
          </div>
        </div>
      )}
    </>
  )
}

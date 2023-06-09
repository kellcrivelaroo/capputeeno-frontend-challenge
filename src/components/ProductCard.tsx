import formatPrice from '@/utils/format-price'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface ProductCardProps {
  id: string
  image: string
  title: string
  price: number
}

export default function ProductCard(product: ProductCardProps) {
  const router = useRouter()

  const handleCardClick = () => {
    router.push(`/product?id=${product.id}`)
  }

  return (
    <div
      className="group flex h-[378px] w-full cursor-pointer flex-col overflow-hidden rounded-lg bg-white 
    transition-all duration-300 hover:scale-[1.03] hover:shadow-black hover:drop-shadow-lg"
      onClick={handleCardClick}
    >
      <Image
        src={product.image}
        alt=""
        width={640}
        height={580}
        className="h-full object-cover"
      />
      <div className="flex flex-col gap-2 px-3 py-2">
        <h3 className="font-light text-gray-dark transition-colors group-hover:font-medium group-hover:text-brand-orange">
          {product.title}
        </h3>
        <div className="h-[0.5px] w-full bg-gray-div"></div>
        <span className="font-semibold text-gray-darkest">
          {formatPrice(product.price)}
        </span>
      </div>
    </div>
  )
}

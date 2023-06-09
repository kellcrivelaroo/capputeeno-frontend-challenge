import BackButton from '@/components/BackButton'
import OrderSummary from './components/OrderSummary'
import ProductCard from './components/ProductCard'

export default function Cart() {
  return (
    <div className="grid w-full grid-cols-[1fr_352px] gap-8 py-10 text-gray-dark">
      <div className="flex flex-col">
        <BackButton navigate="/" />
        <h1 className="mb-2 mt-6 text-2xl font-medium uppercase">
          Seu carrinho
        </h1>
        <p className="mb-2 font-light">
          {`Total (3 produtos) `}
          <span className="font-semibold">R$ 161,00</span>
        </p>
        <ProductCard />
        <ProductCard />
      </div>
      <OrderSummary />
    </div>
  )
}

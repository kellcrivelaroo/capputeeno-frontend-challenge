import formatPrice from '@/utils/format-price'

export default function OrderSummary({ total }: { total: number }) {
  const deliveryFee = total >= 90000 || total === 0 ? 0 : 4000
  const deliveryTotal = total + deliveryFee

  return (
    <div
      className="flex min-h-full w-full flex-col justify-between gap-10 rounded bg-white p-6 pt-4 
    text-gray-dark lg:gap-20"
    >
      {/* Bloco superior */}
      <div className="flex flex-col">
        <span className="mb-7 text-xl font-semibold uppercase">
          Resumo do pedido
        </span>
        <div className="mb-3 flex w-full justify-between">
          <span className="">Subtotal de produtos</span>
          <span className="">{formatPrice(total)}</span>
        </div>
        <div className="mb-6 flex w-full justify-between">
          <span className="">Entrega</span>
          <span className="">{formatPrice(deliveryFee)}</span>
        </div>
        <div className="mb-2 h-0.5 w-full bg-gray-div"></div>
        <div className="mb-10 flex w-full justify-between font-semibold">
          <span className="">Total</span>
          <span className="">{formatPrice(deliveryTotal)}</span>
        </div>
        <button
          className="w-full rounded bg-cart-green py-1.5 text-lg font-medium uppercase 
          text-white hover:bg-cart-green/90"
        >
          Finalizar a compra
        </button>
      </div>
      {/* Bloco inferior */}
      <div className="flex flex-col gap-3 font-medium uppercase text-gray-light underline">
        <a href="#">Ajuda</a>
        <a href="#">Reembolsos</a>
        <a href="#">Entregas e fretes</a>
        <a href="#">Trocas e devoluções</a>
      </div>
    </div>
  )
}

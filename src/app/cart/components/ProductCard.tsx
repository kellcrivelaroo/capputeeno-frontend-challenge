import Image from 'next/image'
import trashIcon from '@/assets/trash-icon.svg'

export default function ProductCard() {
  return (
    <div className="mt-4 grid min-h-[212px] grid-cols-[256px_1fr] overflow-hidden rounded-lg bg-white">
      <div className="border border-black">Imagem</div>
      <div className="flex flex-col justify-between p-4 pl-8">
        <div>
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xl font-light">
              Caneca de cerâmica rústica
            </span>
            <button className="hover:brightness-150">
              <Image
                src={trashIcon}
                width={24}
                height={24}
                alt="Lata de lixo"
              />
            </button>
          </div>
          <p className="text-sm">
            Aqui vem um texto descritivo do produto, esta caixa de texto servirá
            apenas de exemplo para que simule algum texto que venha a ser
            inserido nesse campo, descrevendo tal produto.
          </p>
        </div>
        <div className="mb-2 flex items-center justify-between">
          <select
            className="rounded-lg border border-gray-divBorder bg-gray-input px-3 py-1 
          text-gray-light"
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <span className="font-semibold text-gray-darkest">R$ 40,00</span>
        </div>
      </div>
    </div>
  )
}

'use client'
import Image from 'next/image'
import backArrow from '../assets/back-arrow.svg'
import { useRouter } from 'next/navigation'

interface btnProps {
  navigate: string
}

export default function BackButton({ navigate }: btnProps) {
  const router = useRouter()
  return (
    <button
      className="group flex max-w-fit gap-2"
      onClick={() => {
        router.push(navigate)
      }}
    >
      <Image
        src={backArrow}
        width={24}
        height={24}
        alt="Sacola de compras"
        className="icon"
      />
      <span className="font-medium text-gray-light group-hover:text-brand-orange">
        Voltar
      </span>
    </button>
  )
}

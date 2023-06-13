import Link from 'next/link'
import CartButton from './CartButton'
import SeachInput from './SeachInput'

export default function Header() {
  return (
    <header className="flex h-32 w-full justify-center bg-white py-2 lg:h-20">
      <div className="flex w-full flex-col items-center justify-between lg:w-container lg:flex-row">
        <Link
          className="font-logo text-[2.5em] text-brand-logo transition-colors duration-300 hover:text-brand-logo/80"
          href="/"
        >
          capputeeno
        </Link>
        <div className="flex w-full items-center justify-between gap-6 px-4 lg:w-auto lg:px-0">
          <SeachInput />
          <CartButton />
        </div>
      </div>
    </header>
  )
}

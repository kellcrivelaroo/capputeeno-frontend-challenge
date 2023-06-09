import Link from 'next/link'
import CartButton from './CartButton'
import SeachInput from './SeachInput'

export default function Header() {
  return (
    <header className="flex w-full items-center justify-center bg-white">
      <div className="flex h-20 w-container items-center justify-between">
        <Link
          className="font-logo text-[2.5em] text-brand-logo transition-colors duration-300 hover:text-brand-logo/80"
          href="/"
        >
          capputeeno
        </Link>
        <div className="flex items-center gap-6">
          <SeachInput />
          <CartButton />
        </div>
      </div>
    </header>
  )
}

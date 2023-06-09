import { ImSpinner8 } from 'react-icons/im'

export default function LoadSpiner() {
  return (
    <div className="relative h-screen bg-brand-orange">
      <ImSpinner8 className="absolute top-20 h-12 w-12 animate-spin text-cart-orange" />
    </div>
  )
}

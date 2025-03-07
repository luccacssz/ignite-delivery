'use client'
import { X } from '@phosphor-icons/react'
import ItemCart from './ItemCart'
import { useCart } from '@/app/context/CartContext'

import { useRouter } from 'next/navigation'

interface SideBarCartProps {
  visible: boolean
  onClose: () => void
}

const SideBarCart = ({ visible, onClose }: SideBarCartProps) => {
  const { cart } = useCart()
  const navigate = useRouter()

  const handleRedirectToCheckout = () => {
    navigate.push('/checkout')
  }

  return (
    <div
      className={`flex items-start flex-col bg-white h-screen fixed right-0 top-0 transition-all duration-300 ease-in-out text-lg text-red-800 rounded-lg  xl:w-1/4 2xl:w-1/5 z-[9999] shadow-xl
        transform ${
          visible
            ? 'translate-x-0 opacity-100'
            : 'translate-x-full opacity-0 pointer-events-none'
        }`}
    >
      <X
        size={24}
        weight="bold"
        className="cursor-pointer absolute top-4 right-4"
        onClick={onClose}
      />
      <div className="mt-16 w-full">
        {cart.map((item) => (
          <ItemCart product={item} key={item.id} />
        ))}
      </div>

      <div className="w-full flex justify-center">
        <button
          className="mt-4 bg-product-purple-dark text-white rounded-xl px-2 py-2 mx-1 w-full"
          onClick={handleRedirectToCheckout}
        >
          Finalizar compra
        </button>
      </div>
    </div>
  )
}

export default SideBarCart

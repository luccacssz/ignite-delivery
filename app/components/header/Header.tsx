'use client'

import { useState } from 'react'
import SideBarCart from '../cart/SideBarCart'
import CartIcon from '../icons/CartIcon'
import { useCart } from '@/app/context/CartContext'

const Header = () => {
  const { getTotalCart } = useCart()
  const totalItems = getTotalCart()
  const [viewSideBar, setViewSideBar] = useState(false)
  const handleOpenSideBar = () => {
    setViewSideBar(!viewSideBar)
  }

  return (
    <>
      <div className="w-full  mb-2 p-4 xl:w-[80%] m-auto flex justify-between">
        <img src="/images/logo.svg" />
        <button className="relative" onClick={handleOpenSideBar}>
          <div className="w-4 h-4 rounded-full bg-product-yellow-dark  absolute -top-1 left-6 ">
            <p className="text-[10px] font-baloo mt-[1px] font-medium text-white">
              {totalItems}
            </p>
          </div>
          <CartIcon background="#F1E9C9" fill="#C47F17" />
        </button>
      </div>
      <SideBarCart
        visible={viewSideBar}
        onClose={() => setViewSideBar(false)}
      />
    </>
  )
}

export default Header

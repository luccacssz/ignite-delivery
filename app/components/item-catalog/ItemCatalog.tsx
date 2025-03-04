'use client'

import InputNumber from '../input-number/InputNumber'
import { InputCatalogProps } from './types/ItemCatalog'
import CartIcon from '../icons/CartIcon'
import { useCart } from '@/app/context/CartContext'
import { useState } from 'react'

const ItemCatalog = ({ product }: InputCatalogProps) => {
  const { addToCart,  getQuantity } = useCart()
  const { image, tags, name, description, price, id } = product
  const [counter, setCounter] = useState<number>(getQuantity(id) || 1)
  const handleAddItemCart = () => {
    addToCart(product, counter)
  }

 console.log('counter', counter, getQuantity(id))
  return (
    <div
      className="flex flex-col gap-4 bg-base-card p-6 relative w-[15.75rem]"
      style={{ borderRadius: '6px 36px 6px 36px' }}
    >
      <div className="absolute left-1/2 -top-3 -translate-x-1/2 ">
        <img src={image} alt="" />
      </div>
      <div className="flex mt-16 justify-center gap-1">
        {tags?.map((item, index) => (
          <span
            key={index}
            className="block mt-2 rounded-full bg-product-yellow-light text-product-yellow-dark px-2 py-1 text-xs font-semibold font-roboto"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="font-baloo font-bold text-xl">{name}</p>
        <p className="font-roboto text-base-label text-xs text-center w-52">
          {description}
        </p>
      </div>
      <div className="flex items-center gap-4 w-full">
        <div className="flex gap-1 items-center">
          <span className="text-base-text text-xs">R$</span>
          <span className="font-baloo text-2xl font-bold text-base-text">
            {price}
          </span>
        </div>
        <InputNumber counter={counter} setCounter={setCounter} />
        <button onClick={handleAddItemCart}>
          <CartIcon background="#4b2995 " fill="#F3F2F2" />
        </button>
      </div>
    </div>
  )
}

export default ItemCatalog

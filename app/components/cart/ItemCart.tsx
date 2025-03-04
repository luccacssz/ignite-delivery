'use client'

import { useCart } from '@/app/context/CartContext'
import InputNumber from '../input-number/InputNumber'
import { Trash } from '@phosphor-icons/react'
import { useState } from 'react'
import { InputCatalogProps } from '../item-catalog/types/ItemCatalog'

const ItemCart = ({ product }: InputCatalogProps) => {
  const { getQuantity, removeFromCart } = useCart()
  const { name, price, image, id } = product
  const [counter, setCounter] = useState<number>(getQuantity(id) || 1)

  const handleRemoveItemCart = () => {
    removeFromCart(id)
  }
  return (
    <div className="mb-2 flex gap-2 bg-base-card  py-4 px-4 sm:px-6 items-center border-b border-b-base-hover font-roboto ">
      <div>
        <img src={image} className="" alt="" />
      </div>
      <div className="w-full bg-red">
        <div className="flex justify-around  w-full">
          <span className="text-base-text text-sm 2xl:text-lg">{name}</span>
          <span className="text-base-text font-semibold text-sm 2xl:text-lg">
            {price}
          </span>
        </div>
        <div className="flex ml-6 gap-4 ">
          <InputNumber counter={counter} setCounter={setCounter} productId={id} />
          <button
            className="flex items-center gap-1"
            onClick={handleRemoveItemCart}
          >
            <Trash size="18" className="fill-product-purple" />
            <span className="text-base-text font-roboto  font-medium text-sm 2xl:text-lg">
              REMOVER
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ItemCart

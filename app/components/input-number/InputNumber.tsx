'use client'

import { Plus, Minus } from '@phosphor-icons/react'
import { InputNumberProps } from './types/InputNumber'
import { useCart } from '@/app/context/CartContext'

const InputNumber = ({
  min = 0,
  max = 10,
  counter = 0,
  setCounter,
  productId = 0
}: InputNumberProps) => {
  const { updateQuantity } = useCart()
  const decrement = () => {
    setCounter((prevState) => Math.max(min, prevState - 1))
    const newQuantity = Math.max(min, counter - 1)
    updateQuantity(productId, newQuantity)
  }
  const increment = () => {
    setCounter((prevState) => Math.min(max, prevState + 1))
    const newQuantity = Math.max(min, counter + 1)
    updateQuantity(productId, newQuantity)
  }

  return (
    <div className="bg-base-input w-20 h-9 rounded-md flex justify-center items-center gap-2">
      <button onClick={decrement} disabled={counter === min}>
        <Minus className="fill-product-purple-dark" />
      </button>
      <span>{counter}</span>
      <button onClick={increment} disabled={counter === max}>
        <Plus className="fill-product-purple-dark" />
      </button>
    </div>
  )
}

export default InputNumber

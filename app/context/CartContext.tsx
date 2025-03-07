'use client'
import { createContext, useContext, useState } from 'react'
import { ItemCartProps } from '../components/cart/types/ItemCart'

const initialCartState: ItemCartProps[] = []

export const CartContext = createContext({
  cart: initialCartState,
  addToCart: (coffee: ItemCartProps, quantity: number) => {},
  removeFromCart: (id: number) => {},
  updateQuantity: (id: number, quantity: number) => {},
  clearCart: () => {},
  getTotalCart: (): number => 0,
  getQuantity: (id: number): number => 0,
})

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<ItemCartProps[]>(initialCartState)

  const addToCart = (coffee: ItemCartProps, quantity: number) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === coffee.id)

      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === coffee.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }

      return [...prevCart, { ...coffee, quantity }]
    })
  }

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id))
  }

  const updateQuantity = (id: number, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === id ? { ...item, quantity } : item))
    )
  }

  const getTotalCart = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  const getQuantity = (productId: number) => {
    const item = cart.find((item) => item.id === productId)
    return item ? item.quantity : 0
  }

  const clearCart = () => {
    setCart(initialCartState)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalCart,
        getQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  return useContext(CartContext)
}

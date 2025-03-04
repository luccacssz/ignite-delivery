'use client'

import Cart from '../components/cart/Cart'
import ItemCart from '../components/cart/ItemCart'
import Delivery from '../components/delivery/Delivery'
import Invoice from '../components/invoice/Invoice'
import Payment from '../components/payment/Payment'
import OrderSummary from '../components/summary/OrderSummary'
import { useCart } from '../context/CartContext'

const Checkout = () => {
  const { cart } = useCart()
  return (
    <div className="flex w-[78%] m-auto bg-red-950">
      <div className="w-1/2">
        <Delivery />
        <Payment />
      </div>
      <div className="flex flex-col justify-between w-full">
        {cart.map((itemCart) => (
          <ItemCart product={itemCart} />
        ))}
        <OrderSummary />
      </div>
    </div>
  )
}

export default Checkout

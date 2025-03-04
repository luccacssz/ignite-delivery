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
    <div className="flex w-[78%] m-auto gap-12">
      <div className="w-full">
        <Delivery />
        <Payment />
      </div>
      <div>
        <Cart />
      </div>
    </div>
  )
}

export default Checkout

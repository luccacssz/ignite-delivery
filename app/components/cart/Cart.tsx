import OrderSummary from '../summary/OrderSummary'
import ItemCart from './ItemCart'

const Cart = () => {
  return (
    <div
      className="bg-base-card p-8 h-auto sm:w-[28rem] w-full flex flex-col gap-2 justify-center items-center"
      style={{ borderRadius: '6px 36px 6px 36px' }}
    >
      <ItemCart />
      <ItemCart />
      <ItemCart />
      <OrderSummary />
    </div>
  )
}

export default Cart

import { useCart } from '@/app/context/CartContext'
import OrderSummary from '../summary/OrderSummary'
import ItemCart from './ItemCart'

const Cart = () => {
  const { cart } = useCart()

  const hasItemsCart = cart.length > 0

  return (
    <div
      className="bg-base-card p-8  xl:w-[28rem] w-full flex flex-col gap-4 justify-between items-center h-full"
      style={{ borderRadius: '6px 36px 6px 36px' }}
    >
      <div>
        {hasItemsCart
          ? cart.map((itemCart) => (
              <ItemCart product={itemCart} key={itemCart.id} />
            ))
          : 'Não há itens no carrinho'}
      </div>

      <div className="w-full">
        <OrderSummary />
      </div>
    </div>
  )
}

export default Cart

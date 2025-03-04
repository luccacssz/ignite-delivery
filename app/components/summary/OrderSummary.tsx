const OrderSummary = () => {
  return (
    <div className="gap-2 flex flex-col w-full h-full font-roboto ">
      <div className="flex justify-between items-center text-base-text text-md">
        <span>Total de itens</span>
        <span>R$ 29,70</span>
      </div>
      <div className="flex justify-between items-center text-base-text text-md">
        <span>Entrega</span>
        <span>R$ 3,50</span>
      </div>
      <div className="flex justify-between items-center font-roboto font-bold text-2xl text-base-subtitle">
        <span>Total</span>
        <span>R$ 33,20</span>
      </div>
      <button className="bg-product-yellow rounded-md p-2 text-white w-full mt-3 font-bold text-sm">
        CONFIRMAR PEDIDO
      </button>
    </div>
  )
}

export default OrderSummary

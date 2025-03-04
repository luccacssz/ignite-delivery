const Invoice = () => {
  return (
    <div className="flex gap-24">
      <div className="px-4">
        <p className="font-baloo text-product-yellow-dark text-3xl font-extrabold">
          Uhu! Pedido confirmado
        </p>
        <p className="text-xl text-base-subtitle">
          Agora é só aguardar que logo o café chegará até você
        </p>
        <div
          id="container"
          className="gradient-border  sm:w-[32.7rem] sm:h-[16.87rem] py-4 px-4 xl:pl-12 font-roboto mt-12"
          style={{ borderRadius: '6px 36px 6px 36px' }}
        >
          <div className="h-full gap-6 flex flex-col pt-6 text-xs xl:text-[1rem]  w-full">
            <div className="flex items-center">
              <div className="w-12">
                <img src="/images/checkout/localization.svg" alt="" />
              </div>
              <div className=" w-[80%]">
                <p className="leading-6  w-full">
                  Entrega em Rua João Daniel Martinelli, 102 Farrapos - Porto
                  Alegre, RS
                </p>
              </div>
            </div>
            <div className="flex items-center ">
              <div className="w-12">
                <img src="/images/checkout/estimate_delivery.svg" alt="" />
              </div>
              <div>
                <p>
                  Previsão de entrega
                  <p className="font-semibold mt-2"> 20 min - 30 min</p>
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-12">
                <img src="/images/checkout/dollar.svg" alt="" />
              </div>
              <div>
                <p>
                  Pagamento na entrega
                  <p className="font-semibold mt-2"> Cartão de crédito</p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full relative hidden xl:block">
        <img
          src="/images/checkout/delivery_car.svg"
          className="absolute -bottom-3"
        />
      </div>
    </div>
  )
}

export default Invoice

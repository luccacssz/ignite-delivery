const Payment = () => {
  return (
    <div className="bg-base-card w-full  h-[10rem] rounded-md font-roboto px-4 py-2 mt-2">
      <div>
        <div className="flex gap-2">
          <img src="/images/checkout/money.svg" alt="" />
          <span className="text-base-subtitle text-lg">Pagamento</span>
        </div>
        <p className="ml-5 text-base-text">
          O pagamento é feito na entrega. Escolha a forma que deseja pagar
        </p>
      </div>
      <div className="flex gap-2 mt-6">
        <div className="bg-base-button w-[11rem] h-[3.19rem] rounded-md flex items-center gap-1">
          <img
            src="/images/checkout/card_credit.svg"
            className="w-4 ml-1"
            alt=""
          />
          <span className="text-xs text-base-text cursor-pointer">CARTÃO DE CRÉDITO</span>
        </div>
        <div className="bg-base-button w-[11rem] h-[3.19rem] rounded-md flex items-center gap-1">
          <img
            src="/images/checkout/card_debit.svg"
            className="w-4 ml-1"
            alt=""
          />
          <span className="text-xs text-base-text cursor-pointer">CARTÃO DE DÉBITO</span>
        </div>
        <div className="bg-base-button w-[11rem] h-[3.19rem] rounded-md flex items-center gap-1">
          <img
            src="/images/checkout/card_money.svg"
            className="w-4 ml-1"
            alt=""
          />
          <span className="text-xs text-base-text cursor-pointer">DINHEIRO</span>
        </div>
      </div>
    </div>
  )
}

export default Payment

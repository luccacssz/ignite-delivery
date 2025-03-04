const Delivery = () => {
  return (
    <div className="flex flex-col gap-4 w-full bg-base-card h-auto rounded-md p-10">
      <div className="flex gap-4">
        <img src="/images/checkout/icon_delivery.svg" alt="Ícone de entrega" />
        <div>
          <p className="font-roboto text-xl text-base-title">
            Endereço de Entrega
          </p>
          <p className="text-base-text text-sm">
            Informe o endereço onde deseja receber seu pedido
          </p>
        </div>
      </div>

      <form className="grid grid-cols-3 gap-4">
        <input
          className="col-span-3 p-3 bg-base-input text-base-text rounded-md border border-transparent focus-within:border-product-yellow-dark outline-none"
          type="text"
          placeholder="CEP"
        />
        <input
          className="col-span-3 p-3 bg-base-input text-base-text rounded-md border border-transparent focus-within:border-product-yellow-dark outline-none"
          type="text"
          placeholder="Rua"
        />
        <input
          className="col-span-1 p-3 bg-base-input text-base-text rounded-md border border-transparent focus-within:border-product-yellow-dark outline-none"
          type="text"
          placeholder="Número"
        />
        <input
          className="col-span-2 p-3 bg-base-input text-base-text rounded-md border border-transparent focus-within:border-product-yellow-dark outline-none"
          type="text"
          placeholder="Complemento"
        />
        <input
          className="col-span-1 p-3 bg-base-input text-base-text rounded-md border border-transparent focus-within:border-product-yellow-dark outline-none"
          type="text"
          placeholder="Bairro"
        />
        <input
          className="col-span-1 p-3 bg-base-input text-base-text rounded-md border border-transparent focus-within:border-product-yellow-dark outline-none"
          type="text"
          placeholder="Cidade"
        />
        <input
          className="col-span-1 p-3 bg-base-input text-base-text rounded-md border border-transparent focus-within:border-product-yellow-dark outline-none"
          type="text"
          placeholder="UF"
        />
      </form>
    </div>
  )
}

export default Delivery

const Main = () => {
  return (
    <div className="flex w-[80%] justify-between m-auto items-center mb-16 z-0">
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-2xl xl:text-3xl font-bold font-baloo">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <p className="mt-2">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </div>
        <div className="flex flex-col  gap-2 xl:gap-12 xl:flex-row">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 align-items">
              <img src="images/main/cart.svg" alt="cart" />
              <span>Compra simples e segura</span>
            </div>
            <div className="flex gap-2 align-items">
              <img src="images/main/package.svg" alt="" />
              <span>Embalagem mantém o café intacto</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 align-items">
              <img src="images/main/clock.svg" alt="" />
              <span>Entrega rápida e rastreada</span>
            </div>
            <div className="flex gap-2 align-items">
              <img src="images/main/coffee.svg" alt="" />
              <span>O café chega fresquinho até você</span>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <img src="/images/main/coffe-main.svg" alt="" />
      </div>
    </div>
  )
}

export default Main

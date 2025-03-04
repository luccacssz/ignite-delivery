import ItemCatalog from '../item-catalog/ItemCatalog'
import { dataCatalog } from '../../mock/catalog'

const Catalog = () => {
  return (
    <div className="grid sm:grid-cols-2 xl:grid-cols-4 place-items-center gap-12  lg:w-[80%] 2xl:w-[88%] w-full m-auto z-0">
      {dataCatalog.map((item) => (
        <ItemCatalog
          product={item}
          tags={item.tags}
          image={item.image}
          title={item.name}
          description={item.description}
          price={item.price}
        />
      ))}
    </div>
  )
}

export default Catalog

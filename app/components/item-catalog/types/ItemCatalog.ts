import { ItemCartProps } from '../../cart/types/ItemCart'

export interface InputCatalogProps {
  image?: string
  tags?: string[]
  title?: string
  description?: string
  price?: string
  product: ItemCartProps
  
}

export interface InputNumberProps {
  min?: number
  max?: number
  initialValue?: number
  counter?: number
  setCounter: React.Dispatch<React.SetStateAction<number>>
  productId?: number
}

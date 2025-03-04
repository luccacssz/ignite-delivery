'use client'
import Catalog from './components/item-catalog/Catalog'
import Main from './components/main/Main'
import { useCart } from './context/CartContext'

const Home = () => {
  return (
    <>
      <Main />
      <Catalog />
    </>
  )
}

export default Home

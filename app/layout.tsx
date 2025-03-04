import type { Metadata } from 'next'
import './globals.css'
import Header from './components/header/Header'
import { CartProvider } from './context/CartContext'
export const metadata: Metadata = {
  title: 'Coffee Delivery',
  description: 'Ecommerce',
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="en">
      <body className={`antialiased text-base-title bg-base-background`}>
        <CartProvider>
          <Header />
          {children}
        </CartProvider>
      </body>
    </html>
  )
}

export default RootLayout

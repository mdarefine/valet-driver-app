import React, { createContext, useState, useContext, ReactNode } from 'react'
export interface CartItem {
  id: string
  name: string
  description: string
  image: any
  price: number
  quantity: number
  color?: string
}

interface CartContextType {
  cartItems: CartItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (id: string) => void
  increaseQuantity: (id: string) => void
  decreaseQuantity: (id: string) => void
  getCartTotal: () => number
  getCartCount: () => number
  clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const addToCart = (item: CartItem) => {
    const existingItem = cartItems.find(
      (cartItem) => cartItem.id === item.id && cartItem.color === item.color
    )

    if (existingItem) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id && cartItem.color === item.color
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        )
      )
    } else {
      setCartItems([...cartItems, item])
    }
  }
  const removeFromCart = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }
  const increaseQuantity = (id: string) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    )
  }
  const decreaseQuantity = (id: string) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    )
  }
  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    )
  }
  const getCartCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0)
  }
  const clearCart = () => {
    setCartItems([])
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        getCartTotal,
        getCartCount,
        clearCart,
      }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

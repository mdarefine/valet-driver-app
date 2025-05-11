import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from 'react'
import Frame1 from '@/assets/images/shop/Most-popular/Frame-1.png'
import Frame2 from '@/assets/images/shop/Most-popular/Frame-2.png'
import Frame3 from '@/assets/images/shop/Most-popular/Frame-3.png'
import Frame4 from '@/assets/images/shop/Most-popular/Frame-4.png'
import Frame5 from '@/assets/images/shop/Most-popular/Frame-1.png'
import Frame6 from '@/assets/images/shop/Most-popular/Frame-2.png'
import Frame7 from '@/assets/images/shop/Most-popular/Frame-3.png'
import Frame8 from '@/assets/images/shop/Most-popular/Frame-4.png'

export interface Product {
  id: string
  name: string
  image: any
  price: number
  rating: number
  isFavorite: boolean
  reviews?: number
  description?: string
}

const PRODUCT_DATA: Product[] = [
  {
    id: '1',
    name: 'Seat Covers and Cushions',
    image: Frame1,
    price: 100.0,
    rating: 4.5,
    isFavorite: false,
    reviews: 302,
    description:
      "Upgrade your car's interior with premium Seat Covers and Cushions. Designed for maximum comfort and durability, these covers protect your seats while adding a stylish look. Perfect for long drives and daily commutes!",
  },
  {
    id: '2',
    name: 'Seat Covers and Cushions',
    image: Frame2,
    price: 100.0,
    rating: 4.5,
    isFavorite: false,
    reviews: 245,
    description:
      "Upgrade your car's interior with premium Seat Covers and Cushions. Designed for maximum comfort and durability, these covers protect your seats while adding a stylish look. Perfect for long drives and daily commutes!",
  },
  {
    id: '3',
    name: 'Seat Covers and Cushions',
    image: Frame3,
    price: 100.0,
    rating: 4.5,
    isFavorite: false,
    reviews: 189,
    description:
      "Upgrade your car's interior with premium Seat Covers and Cushions. Designed for maximum comfort and durability, these covers protect your seats while adding a stylish look. Perfect for long drives and daily commutes!",
  },
  {
    id: '4',
    name: 'Seat Covers and Cushions',
    image: Frame4,
    price: 100.0,
    rating: 4.5,
    isFavorite: false,
    reviews: 175,
    description:
      "Upgrade your car's interior with premium Seat Covers and Cushions. Designed for maximum comfort and durability, these covers protect your seats while adding a stylish look. Perfect for long drives and daily commutes!",
  },
  {
    id: '5',
    name: 'Floor Mats & Liners',
    image: Frame5,
    price: 120.0,
    rating: 4.8,
    isFavorite: false,
    reviews: 312,
    description:
      'All-weather floor mats and liners custom-fitted to your car model. These waterproof, stain-resistant mats have raised edges to contain spills and feature non-slip backing for safety.',
  },
  {
    id: '6',
    name: 'Steering Wheel Covers',
    image: Frame6,
    price: 30.0,
    rating: 4.2,
    isFavorite: false,
    reviews: 167,
    description:
      'Premium leather steering wheel covers that provide a comfortable grip and protect your steering wheel from wear and tear. Available in multiple colors to match your car interior.',
  },
  {
    id: '7',
    name: 'Car Organizers',
    image: Frame7,
    price: 45.0,
    rating: 4.6,
    isFavorite: false,
    reviews: 209,
    description:
      "Versatile car organizers for trunk, backseat, or center console. Keep your car tidy with these expandable, easy-to-clean storage solutions for groceries, tools, kids' toys, and more.",
  },
  {
    id: '8',
    name: 'Phone Mounts',
    image: Frame8,
    price: 25.0,
    rating: 4.4,
    isFavorite: false,
    reviews: 156,
    description:
      "Secure and adjustable car phone mount for hands-free navigation and calls. Compatible with most smartphones and attaches easily to your car's dashboard or windshield.",
  },
]

type ProductContextType = {
  products: Product[]
  isLoading: boolean
  error: string | null
  fetchProducts: () => Promise<void>
  getProductById: (id: string) => Product | undefined
  toggleFavorite: (id: string) => void
  getLimitedProducts: (limit?: number) => Product[]
}

const ProductContext = createContext<ProductContextType | undefined>(undefined)

export const ProductProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<Product[]>(PRODUCT_DATA)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchProducts = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    try {
      setTimeout(() => {
        setProducts(PRODUCT_DATA)
        setIsLoading(false)
      }, 300)
    } catch (err) {
      setError('Failed to fetch products')
      setIsLoading(false)
    }
  }, [])

  const getProductById = useCallback(
    (id: string): Product | undefined => {
      return products.find((product) => product.id === id)
    },
    [products]
  )

  const toggleFavorite = useCallback((id: string) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id
          ? { ...product, isFavorite: !product.isFavorite }
          : product
      )
    )
  }, [])

  const getLimitedProducts = useCallback(
    (limit?: number) => {
      if (!limit) return products
      return products.slice(0, limit)
    },
    [products]
  )

  const value = {
    products,
    isLoading,
    error,
    fetchProducts,
    getProductById,
    toggleFavorite,
    getLimitedProducts,
  }

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  )
}

export function useProducts() {
  const context = useContext(ProductContext)
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductProvider')
  }
  return context
}

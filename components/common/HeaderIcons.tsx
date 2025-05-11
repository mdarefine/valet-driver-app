import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Text } from '@/components/ui/text'
import { Feather, FontAwesome } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import colors from '@/lib/colors'
import { useProducts } from '@/store/ProductContext'
import { useCart } from '@/store/CartContext'

interface HeaderIconsProps {
  showCart?: boolean
  showFavorite?: boolean
}

const HeaderIcons = ({
  showCart = true,
  showFavorite = true,
}: HeaderIconsProps) => {
  const router = useRouter()
  const { products } = useProducts()
  const { cartItems } = useCart()

  const hasFavorites = products.some((product) => product.isFavorite)

  return (
    <View className="flex-row gap-5">
      {showFavorite && (
        <TouchableOpacity
          onPress={() =>
            router.push('/(app)/(a-root)/shops/my-favourite/MyFavourite')
          }>
          {hasFavorites ? (
            <FontAwesome name="heart" size={20} color={colors.textwhite} />
          ) : (
            <Feather name="heart" size={20} color={colors.textwhite} />
          )}
        </TouchableOpacity>
      )}

      {showCart && (
        <TouchableOpacity
          onPress={() => router.push('/(app)/(a-root)/shops/my-cart/MyCart')}>
          <View className="relative">
            <Feather name="shopping-cart" size={20} color={colors.textwhite} />
            {cartItems.length > 0 && (
              <View
                className="absolute -top-2 -right-2 w-4 h-4 rounded-full items-center justify-center"
                style={{ backgroundColor: colors.danger }}>
                <Text style={{ color: colors.textwhite, fontSize: 10 }}>
                  {cartItems.length}
                </Text>
              </View>
            )}
          </View>
        </TouchableOpacity>
      )}
    </View>
  )
}

export default HeaderIcons

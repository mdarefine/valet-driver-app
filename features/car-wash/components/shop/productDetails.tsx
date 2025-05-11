import React, { useState } from 'react'
import { View, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import { Feather, MaterialIcons } from '@expo/vector-icons'
import { Text } from '@/components/ui/text'
import colors from '@/lib/colors'
import SuccessIcon from '@/assets/svgs/SuccessIcon'
import { useRouter } from 'expo-router'
import { useCart } from '@/store/CartContext'
import { useProducts } from '@/store/ProductContext'
import Toast from 'react-native-toast-message'
import ImageSlider from './image-slider'
import Header from '@/components/common/Header'
import HeaderWithBack from '@/components/common/HeaderWithBack'

const { width } = Dimensions.get('window')

const COLOR_OPTIONS = [
  { id: '1', color: colors.product.orange, name: 'Orange' },
  { id: '2', color: colors.product.silver, name: 'Silver' },
  { id: '3', color: colors.product.teal, name: 'Teal' },
  { id: '4', color: colors.product.pink, name: 'Pink' },
  { id: '5', color: colors.product.gray, name: 'Gray' },
]

const KEY_FEATURES = [
  'Universal Fit: Compatible with most car models.',
  'High-Quality Material: Made from breathable leather/fabric with soft padding.',
  'Ergonomic Design: Provides extra lumbar support for comfort.',
  'Easy Installation: Quick and tool-free setup.',
  'Water & Stain Resistant: Protects against spills and dirt.',
]
interface ProductDetailsProps {
  productId?: string
  onBack?: () => void
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  productId,
  onBack,
}) => {
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState('1')
  const router = useRouter()
  const { addToCart, getCartCount } = useCart()
  const { getProductById, toggleFavorite } = useProducts()

  const product = productId ? getProductById(productId) : getProductById('1')

  const incrementQuantity = () => {
    setQuantity(quantity + 1)
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const handleToggleFavorite = () => {
    if (product) {
      const currentlyFavorite = product.isFavorite
      toggleFavorite(product.id)
      if (!currentlyFavorite) {
        Toast.show({
          type: 'success',
          text1: 'Added to Favorites',
          text2: `${product.name} has been added to your favorites list`,
          position: 'bottom',
          visibilityTime: 2000,
        })
      } else {
        Toast.show({
          type: 'info',
          text1: 'Removed from Favorites',
          text2: `${product.name} has been removed from your favorites list`,
          position: 'bottom',
          visibilityTime: 2000,
        })
      }
    }
  }

  const handleAddToCart = () => {
    if (!product) return

    const colorOption = COLOR_OPTIONS.find(
      (option) => option.id === selectedColor
    )

    addToCart({
      id: product.id,
      name: product.name,
      description:
        product.description ||
        'Classic checkerboard slip-ons with all-white under tone and reinforced waffle cup soles',
      image: product.image,
      price: product.price,
      quantity: quantity,
      color: colorOption?.name,
    })
  }

  if (!product) {
    return null
  }

  return (
    <View className="flex-1">
      <Header
        title="Market Place"
        showBackButton={true}
        onLeftPress={() => router.back()}
        rightComponent={
          <View className="flex-row gap-5">
            <TouchableOpacity
              onPress={() =>
                router.push('/(app)/(a-root)/shops/my-favourite/MyFavourite')
              }>
              <Feather name="heart" size={20} color={colors.textwhite} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                router.push('/(app)/(a-root)/shops/my-cart/MyCart')
              }>
              <View className="relative">
                <Feather
                  name="shopping-cart"
                  size={20}
                  color={colors.textwhite}
                />
                {getCartCount() > 0 && (
                  <View
                    className="absolute -top-2 -right-2 w-4 h-4 rounded-full items-center justify-center"
                    style={{ backgroundColor: colors.danger }}>
                    <Text style={{ color: colors.textwhite, fontSize: 10 }}>
                      {getCartCount()}
                    </Text>
                  </View>
                )}
              </View>
            </TouchableOpacity>
          </View>
        }
      />
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <HeaderWithBack title="Product Details" />
        <View className="px-4">
          <View className="relative">
            <ImageSlider
              images={
                product
                  ? [
                      { id: '1', image: product.image },
                      { id: '2', image: product.image },
                    ]
                  : []
              }
              height={width * 0.7}
              width={width - 32}
            />
            <TouchableOpacity
              className="absolute top-3 right-3 bg-white/80 rounded-full p-1.5 z-10"
              onPress={handleToggleFavorite}>
              <Feather
                name="heart"
                size={22}
                color={product?.isFavorite ? colors.primary : colors.gray03}
                style={{ opacity: product?.isFavorite ? 1 : 0.6 }}
              />
            </TouchableOpacity>
          </View>
          <View className="mt-4">
            <Text
              className="text-xl font-Urbanist600"
              style={{ color: colors.textdark }}>
              {product.name}
            </Text>
            <Text
              className="text-xl font-Urbanist600 mt-2"
              style={{ color: colors.primary }}>
              ${product.price.toFixed(2)}
            </Text>
          </View>
          <View className="flex-row items-center mb-4">
            <View className="flex-row">
              {[1, 2, 3, 4, 5].map((star) => (
                <Feather
                  key={star}
                  name="star"
                  size={16}
                  color={colors.rating}
                  style={{ marginRight: 2 }}
                />
              ))}
            </View>
            <Text
              className="ml-2 text-sm font-Urbanist500"
              style={{ color: colors.text.secondary }}>
              ({product.reviews} reviews)
            </Text>
          </View>
          <View className="flex-row items-center mb-4">
            <TouchableOpacity
              className="border rounded-full items-center justify-center"
              style={{
                width: 32,
                height: 32,
                borderColor: colors.border.gray,
              }}
              onPress={decrementQuantity}>
              <Text
                className="text-xl font-Urbanist600"
                style={{ color: colors.textdark, lineHeight: 28 }}>
                -
              </Text>
            </TouchableOpacity>
            <Text
              className="mx-6 text-base font-Urbanist500"
              style={{ color: colors.textdark }}>
              {quantity}
            </Text>
            <TouchableOpacity
              className="border rounded-full items-center justify-center"
              style={{
                width: 32,
                height: 32,
                borderColor: colors.border.gray,
              }}
              onPress={incrementQuantity}>
              <Text
                className="text-xl font-Urbanist600"
                style={{ color: colors.textdark, lineHeight: 26 }}>
                +
              </Text>
            </TouchableOpacity>
          </View>
          <View className="mb-5">
            <Text
              className="text-sm font-Urbanist400"
              style={{ color: colors.text.secondary }}>
              Upgrade your car's interior with premium Seat Covers and Cushions.
              Designed for maximum comfort and durability, these covers protect
              your seats while adding a stylish look. Perfect for long drives
              and daily commutes!
            </Text>
          </View>
          <View className="mb-5">
            <Text
              className="text-base font-Urbanist600 mb-3"
              style={{ color: colors.textdark }}>
              Color Select
            </Text>
            <View className="flex-row">
              {COLOR_OPTIONS.map((option) => (
                <TouchableOpacity
                  key={option.id}
                  onPress={() => setSelectedColor(option.id)}
                  className="mr-3">
                  <View className="relative">
                    <View
                      className="w-[30px] h-[30px] rounded-full"
                      style={{ backgroundColor: option.color }}
                    />
                    {selectedColor === option.id && (
                      <View className="absolute top-0 left-0 right-0 bottom-0 rounded-full bg-black/30 justify-center items-center">
                        <MaterialIcons name="check" size={18} color={'#fff'} />
                      </View>
                    )}
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View className="mb-6">
            <Text
              className="text-base font-Urbanist600 mb-3"
              style={{ color: colors.textdark }}>
              Key Feature
            </Text>
            {KEY_FEATURES.map((feature, index) => (
              <View key={index} className="flex-row items-center mb-3">
                <View className="w-6 h-6 rounded-full items-center justify-center mr-3">
                  <SuccessIcon />
                </View>
                <Text
                  className="text-sm font-Urbanist400 flex-1"
                  style={{ color: colors.text.secondary }}>
                  {feature}
                </Text>
              </View>
            ))}
          </View>
          <TouchableOpacity
            className="py-3 rounded-lg items-center justify-center mb-6"
            style={{ backgroundColor: colors.primary }}
            onPress={handleAddToCart}>
            <Text
              className="text-base font-Urbanist600"
              style={{ color: colors.textwhite }}>
              Add to Cart
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

export default ProductDetails

import React from 'react'
import {
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native'
import { Feather, FontAwesome } from '@expo/vector-icons'
import { Text } from '@/components/ui/text'
import colors from '@/lib/colors'
import { useRouter } from 'expo-router'
import { useProducts, Product } from '@/store/ProductContext'
import Toast from 'react-native-toast-message'

const { width: screenWidth } = Dimensions.get('window')
const CARD_GAP = 16
const CARD_WIDTH = (screenWidth - CARD_GAP * 3) / 2
interface ProductCardProps {
  item: Product
  index: number
  cardWidth: number
  onToggleFavorite: (id: string) => void
  onPress?: (id: string) => void
}

export const ProductCard = ({
  item,
  index,
  cardWidth,
  onToggleFavorite,
  onPress,
}: ProductCardProps) => (
  <View
    className={`bg-white mb-4 ${index % 2 === 0 ? 'mr-4' : ''}`}
    style={{ width: cardWidth }}>
    <TouchableOpacity
      activeOpacity={0.9}
      className="rounded-2xl overflow-hidden relative"
      onPress={() => onPress?.(item.id)}>
      <Image source={item.image} className="w-full h-32" resizeMode="cover" />
      <TouchableOpacity
        className="absolute top-3 right-3 bg-white/80 rounded-full p-1.5"
        onPress={() => onToggleFavorite(item.id)}>
        <Feather
          name="heart"
          size={22}
          color={item.isFavorite ? colors.primary : colors.gray03}
          style={{ opacity: item.isFavorite ? 1 : 0.6 }}
        />
      </TouchableOpacity>
    </TouchableOpacity>
    <View className="py-2">
      <Text
        className="text-sm font-Urbanist500"
        style={{ color: colors.text.gray[40] }}>
        {item.name}
      </Text>
      <View className="flex-row items-center justify-between w-full mb-1">
        <Text
          className="text-lg font-Urbanist700"
          style={{ color: colors.text.gray[40] }}>
          $ {item.price.toFixed(2)}
        </Text>
        <View className="flex-row items-center">
          <FontAwesome
            name="star"
            size={16}
            color={colors.rating}
            style={{ marginRight: 2 }}
          />
          <Text className="text-base font-Urbanist600 text-rating">
            {item.rating}
          </Text>
        </View>
      </View>
    </View>
  </View>
)

interface MostPopularProps {
  limitItems?: number
  showHeader?: boolean
}

const MostPopular = ({ limitItems, showHeader = true }: MostPopularProps) => {
  const { getLimitedProducts, toggleFavorite, products: allProducts } = useProducts()
  const router = useRouter()
  
  const products = getLimitedProducts(limitItems)
  
  const handleToggleFavorite = (id: string) => {
    toggleFavorite(id)
    
    const product = products.find(p => p.id === id)
    if (product) {
      const wasAdded = !product.isFavorite
      
      if (wasAdded) {
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

  const handleProductPress = (id: string) => {
    router.push({ pathname: '/(app)/(a-root)/shops/[id]/page', params: { id } })
  }

  const renderItem = ({ item, index }: { item: Product; index: number }) => (
    <ProductCard
      item={item}
      index={index}
      cardWidth={CARD_WIDTH}
      onToggleFavorite={handleToggleFavorite}
      onPress={handleProductPress}
    />
  )

  return (
    <View className="mt-4">
      {showHeader && (
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-2xl font-Urbanist500 text-textdark">
            Most Popular
          </Text>
          <TouchableOpacity
            onPress={() =>
              router.push('/(app)/(a-root)/shops/most-popular/MostPopular')
            }>
            <Text className="text-lg font-Urbanist500 text-primary">
              View All
            </Text>
          </TouchableOpacity>
        </View>
      )}
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default MostPopular

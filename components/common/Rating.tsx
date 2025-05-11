import colors from '@/lib/colors'
import { FontAwesome } from '@expo/vector-icons'
import React from 'react'
import { View } from 'react-native'

const Rating = ({ rating, size = 18 }: { rating: number; size?: number }) => {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 >= 0.5
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

  const fullStarsArray = Array(fullStars).fill('star')
  const halfStarArray = hasHalfStar ? ['star-half-empty'] : []
  const emptyStarsArray = Array(emptyStars).fill('star-o')

  const stars = [...fullStarsArray, ...halfStarArray, ...emptyStarsArray]

  return (
    <View className="flex-row gap-1">
      {stars.map((starType, index) => (
        <FontAwesome
          key={index}
          name={starType}
          size={size}
          color={colors.rating}
        />
      ))}
    </View>
  )
}

export default Rating

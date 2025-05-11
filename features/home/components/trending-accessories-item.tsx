import { View, Text, Image } from 'react-native'
import React from 'react'
import Seat from '@/assets/images/home/seat-cover.png'
const TrendingAccessoriesItem = () => {
  return (
    <View
      className="bg-white rounded-lg min-w-36"
      style={{
        shadowColor: '#0956C0',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.12,
        shadowRadius: 6,
      }}>
      <Image
        className="w-full h-28 object-cover rounded-t-lg"
        source={Seat}
        resizeMode="cover"
      />
      <View className="p-3">
        <Text className="text-sm font-Urbanist500 text-gray02 line-clamp-1">
          Seat Covers and C..
        </Text>
        <Text className="text-sm font-Urbanist700 text-dark">$ 480.00</Text>
      </View>
    </View>
  )
}

export default TrendingAccessoriesItem

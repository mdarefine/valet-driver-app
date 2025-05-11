import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Seat from '@/assets/images/home/car-wash-sample.png'
import { router } from 'expo-router'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import colors from '@/lib/colors'
const CarRepairShopItem = () => {
    const [favorite, setFavorite] = useState(false);
  
    const handleFavoriteToggle = () => {
      const newState = !favorite;
      setFavorite(newState);
    };
  return (
    <TouchableOpacity
      onPress={() =>
        router.push({
          pathname: '/(app)/car-repair/[detail]',
          params: { detail: 'Seat Cover' },
        })
      }
      className="flex-1 mx-2">
      <View
        className=" rounded-lg"
        style={{
          shadowColor: '#0956C0',
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.12,
          shadowRadius: 6,
        }}>
        <Image
          className="w-full h-28 object-cover rounded-t-lg relative"
          source={Seat}
          resizeMode="cover"
        />
        <TouchableOpacity
                    className="absolute top-2 right-2 p-1 rounded-full bg-white/60"
                    onPress={(e) => {
                      e.stopPropagation();
                      handleFavoriteToggle();
                    }}
                  >
                    <Ionicons
                      name={favorite ? "heart" : "heart-outline"}
                      size={20}
                      color={favorite ? "#FF4B4B" : "#666666"}
                    />
                  </TouchableOpacity>
        <View className="py-3">
          <Text className="text-sm font-Urbanist500 text-text-gray-40 line-clamp-1">
            Mika Car Workshop
          </Text>
          <View className="flex-row justify-between items-start w-full">
            <View className="flex-row gap-1 flex-1">
              <Ionicons name="location-outline" size={18} color="#7A7A7A" />
              <Text className="text-sm font-Urbanist400 text-subtle flex-1">
                123 Main St, City
              </Text>
            </View>
            <View className="flex-row items-center gap-1">
              <FontAwesome name={'star'} size={10} color={colors.rating} />
              <Text className="text-sm font-Urbanist700 text-rating">1.2</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default CarRepairShopItem

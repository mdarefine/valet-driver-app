import { Text } from '@/components/ui/text'
import { FontAwesome6, MaterialIcons } from '@expo/vector-icons'
import React, { useCallback } from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import Seat from '@/assets/images/home/car-wash-sample.png'
import colors from '@/lib/colors'
import Button from '@/components/ui/button'
import { router } from 'expo-router'
interface PackageItemProps {
  item: {
    id: number
    name: string
    address: string
    rating: string
    price?: string
  }
  isSelected: boolean
  onSelect: (id: number) => void
  singleItem:boolean
}

const PackageItem = ({ item, isSelected, onSelect,singleItem = false }: PackageItemProps) => {
  const handlePress = useCallback(() => {
    onSelect(item.id)
  }, [item.id, onSelect])

  return (
    <TouchableOpacity
      className="bg-white p-3 rounded-xl flex-row gap-2 my-2"
      style={{
        shadowColor: '#121416',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.12,
        shadowRadius: 8,
        elevation: 4,
      }}
      onPress={handlePress}>
        {singleItem ? <></>:<View className="mr-1">
        <MaterialIcons
          name={isSelected ? 'check-box' : 'check-box-outline-blank'}
          size={24}
          color={isSelected ? colors.primary : colors.text.gray[40]}
        />
      </View>}
      
      <Image
        className="w-20 h-20 object-cover rounded-md"
        source={Seat}
        resizeMode="cover"
      />
      <View className="flex-row justify-between flex-1">
        <View className="justify-between">
          <Text className="text-base font-Urbanist600">Basic Wash</Text>
          <Text className="text-sm font-Urbanist400 text-text-secondary">
            Exterior wash with hand dry
          </Text>
          <View className="flex-row items-center gap-2">
            <FontAwesome6 name="clock" size={12} color="#7A7A7A" />
            <Text className="text-sm font-Urbanist500 text-subtle">30 min</Text>
          </View>
        </View>
      </View>
      <View className="flex-col justify-between items-end">
        <Text className="text-base font-Urbanist700 text-subtitle">
          $ 19.99
        </Text>
        {singleItem ? <></>: <Button
          variant="text"
          className="p-0"
          onPress={() => router.push({
            pathname: "/car-wash/package-detail",
            params: { 
              id: item.id,
            }
          })}>
          View Details
        </Button>}
       
      </View>
    </TouchableOpacity>
  )
}

export default PackageItem

import { View, Image, TouchableOpacity } from 'react-native'
import Seat from '@/assets/images/home/car-wash-sample.png'
import React from 'react'
import { Text } from '@/components/ui/text'
import { router } from 'expo-router'

const ServiceItem = () => {
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
      onPress={() => router.push('/car-repair/service-detail')}>
      <Image
        className="w-20 h-20 object-cover rounded-md"
        source={Seat}
        resizeMode="cover"
      />
      <View className="flex-col justify-between flex-1">
        <Text className="text-base font-Urbanist500 text-subtitle">
          Amsoil OE Series 0W20 / 5W30 / 5W40 4L Vehicle Servicing Package
        </Text>
        <Text className="text-base font-Urbanist700 text-subtitle">
          $ 9.99 - $ 19.99
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default ServiceItem

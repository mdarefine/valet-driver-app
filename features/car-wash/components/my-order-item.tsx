import { View } from 'react-native'
import React from 'react'
import DottedLine from '@/components/ui/dotted-line'
import { Text } from '@/components/ui/text'
import ShopIcon from '@/assets/svgs/ShopIcon'
import Button from '@/components/ui/button'
import { router } from 'expo-router'

const MyOrderItem = () => {
  return (
    <View
      className="bg-white border border-border-gray2 rounded-lg my-2"
      style={{
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
      }}>
      <View className="p-4 gap-2">
        <Text className="text-lg font-Urbanist700 text-primary">Wash Only</Text>
        <Text className="text-sm font-Urbanist400 text-gray02">
          Booking ID: #S56789
        </Text>
      </View>
      <DottedLine className="mt-2" />
      <View className="p-4 gap-4">
        <View className="flex-row items-center gap-2">
          <ShopIcon />
          <Text className="text-base font-Urbanist600 text-primary">
            Mika Car Wash
          </Text>
        </View>
        <View className="flex-row ">
          <View className="flex-1">
            <Text className="text-sm font-Urbanist600 text-subtle">
              Submitted on
            </Text>
            <Text className="text-base font-Urbanist400 text-gray02">
              2 Dec 2024
            </Text>
          </View>
          <View className="flex-1">
            <Text className="text-sm font-Urbanist600 text-subtle">
              Estimated Pick-up
            </Text>
            <Text className="text-base font-Urbanist400 text-gray02">
              8 Dec 2024
            </Text>
          </View>
        </View>
        <View className="bg-light flex-row gap-2 px-4 py-2 rounded-[4px]">
          <Text className="text-base font-Urbanist600 text-primary">
            Total Estimated Cost :
          </Text>
          <Text className="text-base font-Urbanist600 text-primary">
            $ 50.00
          </Text>
        </View>
      </View>
      <View className="flex-row border-t border-[#EEEEEE]">
        <View className="flex-1 justify-center items-center border-r border-[#EEEEEE] py-2">
          <Button variant="text">Contact Service</Button>
        </View>
        <View className="flex-1 justify-center items-center py-2">
          <Button
            variant="text"
            onPress={() => router.push('/car-wash/order-detail')}>
            View Details
          </Button>
        </View>
      </View>
    </View>
  )
}

export default MyOrderItem

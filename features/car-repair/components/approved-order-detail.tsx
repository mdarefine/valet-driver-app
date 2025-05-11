import { View, ScrollView, Image } from 'react-native'
import React from 'react'
import Rating from '@/components/common/Rating'
import { Text } from '@/components/ui/text'
import OrderTimeline, { OrderStep } from '@/components/common/OrderTimeline'
import Seat from '@/assets/images/home/car-wash-sample.png'
const orderSteps: OrderStep[] = [
  {
    title: 'Invoice Received',
    timestamp: '28 Nov, 2024 | 15:02',
    isCompleted: true,
  },
  {
    title: 'Make Payment',
    timestamp: '28 Nov, 2024 | 15:02',
    isCompleted: false,
  },
  {
    title: 'In Progress',
    timestamp: '28 Nov, 2024 | 17:02',
    isCompleted: false,
  },
  {
    title: 'Ready to Drop',
    timestamp: '1st Dec, 2024 | 07:02',
    isCompleted: false,
  },
  {
    title: 'Dropped',
    timestamp: '1st Dec, 2024 | 09:02',
    isCompleted: false,
  },
]
const ApprovedOrderDetail = () => {
  return (
    <ScrollView contentContainerClassName="flex-1 mt-4 gap-5 px-4">
      <View className="border border-primary rounded-lg p-4 flex-row justify-between ">
        <View>
          <Text className="text-base font-Inter700 text-primary">
            Wash Only
          </Text>
          <Text className="text-sm font-Urbanist400 text-gray04">
            Booking ID: 123456789
          </Text>
          <Text className="text-base font-Inter700 text-primary mt-2">
            Mika Car Wash
          </Text>
          <Rating rating={4} size={8} />
          <View>
            <Text className="text-xs font-Urbanist700 text-primary mt-3">
              DATE
            </Text>
            <Text className="text-xs font-Urbanist400 text-gray04">
              1st Dec 2024, Monday
            </Text>
          </View>
        </View>
        <View className="flex-col items-end justify-between">
          <Image
            className="w-32 h-20 object-cover rounded-lg"
            source={Seat}
            resizeMode="cover"
          />
          <View>
            <Text className="text-xs font-Urbanist700 text-primary mt-3">
              PICK-UP TIME
            </Text>
            <Text className="text-xs font-Urbanist400 text-gray04">
              9:00-9:30am
            </Text>
          </View>
        </View>
      </View>
      <View className="border border-primary rounded-lg p-4">
        <OrderTimeline steps={orderSteps} />
      </View>
    </ScrollView>
  )
}

export default ApprovedOrderDetail

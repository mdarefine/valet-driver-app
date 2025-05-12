import React from 'react'
import { View, Image } from 'react-native'
import { Text } from '@/components/ui/text'
import { Ionicons } from '@expo/vector-icons'
import colors from '@/lib/colors'
import { HistoryItem } from './types'

interface TaskHistoryCardProps {
  item: HistoryItem;
}

const TaskHistoryCard: React.FC<TaskHistoryCardProps> = ({ item }) => {
  return (
    <View className="bg-white rounded-lg p-4 shadow-sm">
      {/* Date and Time */}
      <View className="flex-row items-center mb-4">
        <Ionicons name="calendar-outline" size={20} color={colors.default} />
        <Text className="ml-2 text-sm font-medium text-default">{item.dateTime}</Text>
      </View>

      {/* Pickup and Dropoff Info */}
      <View className="mb-4">
        {/* Pickup */}
        <View className="flex-row mb-1.5">
          <View className="w-6 items-center mr-2">
            <View className="w-5 h-5 rounded-full bg-[#57C965] border-3 border-white items-center justify-center" />
            <View className="flex-1 w-[1px] bg-[#D0D0D0] my-0.5 ml-2.5" />
          </View>
          <View className="flex-1">
            <Text className="text-xs text-[#9DA5B1] mb-0.5">PICKUP</Text>
            <Text className="text-sm text-default mb-0.5">{item.pickupLocation}</Text>
            <Text className="text-xs text-[#6C7A8D] mt-0.5 bg-[#EEF2F7] self-start px-2 py-0.5 rounded-lg">{item.tripDetails}</Text>
          </View>
        </View>

        {/* Dropoff */}
        <View className="flex-row mb-1.5">
          <View className="w-6 items-center mr-2">
            <View className="w-5 h-5 rounded-full bg-[#E94A47] border-3 border-white items-center justify-center" />
          </View>
          <View className="flex-1">
            <Text className="text-xs text-[#9DA5B1] mb-0.5">DROP-OFF</Text>
            <Text className="text-sm text-default mb-0.5">{item.dropOffLocation}</Text>
          </View>
        </View>
      </View>

      {/* Trip Details */}
      <View className="flex-row items-center justify-between pt-2 border-t border-gray-100">

        <View className="w-9 h-9 justify-center items-center">
          <Image
            source={require('@/assets/images/home/car-black-side-silhouette (1).png')}
            className="w-9 h-6 resize-contain"
          />
        </View>
        <View className="flex-col items-center">
          {/* <Ionicons name="car-outline" size={20} color={colors.subtle} /> */}
          <Text className="text-[13px] text-gray-700 font-medium ml-2">DISTANCE</Text>
          <Text className="text-[13px] font-bold ml-1">{item.distance}</Text>
        </View>

        <View className="flex-col items-center">
          {/* <Ionicons name="time-outline" size={18} color={colors.subtle} /> */}
          <Text className="text-[13px] text-gray-700 font-medium ml-1">TIME</Text>
          <Text className="text-[13px] font-bold ml-1">{item.time}</Text>
        </View>

        <View className="flex-col items-center">
          {/* <Ionicons name="pricetag-outline" size={18} color={colors.subtle} /> */}
          <Text className="text-[13px] text-gray-700 font-medium ml-1">PRICE</Text>
          <Text className="text-[13px] font-bold ml-1">{item.price}</Text>
        </View>
      </View>
    </View>
  )
}

export default TaskHistoryCard

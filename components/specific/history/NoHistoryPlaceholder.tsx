import React from 'react'
import { View } from 'react-native'
import { Text } from '@/components/ui/text'
import { Ionicons } from '@expo/vector-icons'
import colors from '@/lib/colors'

const NoHistoryPlaceholder: React.FC = () => {
  return (
    <View className="flex-1 p-6 bg-[#EEF2F7] rounded-xl items-center justify-center shadow-sm">
      <View className="w-[180px] h-[120px] justify-center items-center mb-6">
        <Ionicons name="time-outline" size={80} color="#A0A0A0" />
      </View>
      
      <Text className="text-base font-semibold text-default mb-2">
        No History Found
      </Text>
      
      <Text className="text-sm text-subtle text-center leading-5 max-w-[90%]">
        Your task history will appear here as you complete assignments.
      </Text>
    </View>
  )
}

export default NoHistoryPlaceholder

import React from 'react'
import { View } from 'react-native'
import { Text } from '@/components/ui/text'
import { Entypo, Feather, FontAwesome } from '@expo/vector-icons'
import colors from '@/lib/colors'

interface TripDetailsSectionProps {
  pickupAddress: string
  pickupInfo?: string
  dropoffAddress: string
  className?: string
}

const TripDetailsSection: React.FC<TripDetailsSectionProps> = ({
  pickupAddress,
  pickupInfo,
  dropoffAddress,
  className = '',
}) => {
  return (
    <View className={`mb-4 ${className}`}>
      <View className="flex-row gap-4 items-start">
        {/* Route icon column */}
        <View className="flex-col justify-between items-center">
          <FontAwesome name="circle-o" size={24} color={'#4CE5B1'} />
          <View className="grow w-[0] border-r border-gray-300 border-dashed" />
          <Feather name="circle" size={7} color={colors.gray02} />
          <View className="grow w-[0] border-r border-gray-300 border-dashed" />
          <Entypo name="location-pin" size={24} color={colors.danger} />
        </View>

        {/* Route details column */}
        <View className="flex-col gap-2 items-start flex-1">
          {/* PickUp location */}
          <View className="flex-1">
            <Text className="text-xs text-gray-400 mb-1">PICKUP</Text>
            <Text className="text-sm text-gray-800">{pickupAddress}</Text>
          </View>

          {/* Distance indicator */}
          {pickupInfo && (
            <View className="flex-row items-center rounded-full bg-background-green px-4 py-1">
              <Text className="text-xs text-text-green-10">{pickupInfo}</Text>
            </View>
          )}

          {/* Dropoff location */}
          <View className="flex-1">
            <Text className="text-xs text-gray-400 mb-1">DROP-OFF</Text>
            <Text className="text-sm text-gray-800">{dropoffAddress}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default TripDetailsSection

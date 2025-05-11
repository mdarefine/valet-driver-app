import React from 'react'
import { View } from 'react-native'
import { Text } from '@/components/ui/text'
import cn from '@/lib/utils'
import CarHatchBack from '@/assets/svgs/valet/CarHatchback'

interface TripMetricsProps {
  distance: string
  duration: string
  price: string
  status?: string
  className?: string
}

/**
 * TripMetrics component displays the key metrics of a trip:
 * distance, duration, and price in a standardized format.
 */
const TripMetrics: React.FC<TripMetricsProps> = ({
  distance,
  duration,
  price,
  status,
  className,
}) => {
  return (
    <View
      className={cn(
        'flex-row gap-5 items-center border-t border-gray-100 pt-4',
        status === 'Confirm' && 'pb-4',
        className
      )}>
      <CarHatchBack />

      <View className="flex-row grow justify-between">
        <View className="items-center">
          <Text className="text-[10px] text-gray-400 mb-1">DISTANCE</Text>
          <Text className="text-sm text-gray-800">{distance}</Text>
        </View>

        <View className="items-center">
          <Text className="text-[10px] text-gray-400 mb-1">TIME</Text>
          <Text className="text-sm text-gray-800">{duration}</Text>
        </View>

        <View className="items-center">
          <Text className="text-[10px] text-gray-400 mb-1">PRICE</Text>
          <Text className="text-sm text-gray-800">{price}</Text>
        </View>
      </View>
    </View>
  )
}

export default TripMetrics

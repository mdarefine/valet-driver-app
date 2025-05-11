import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Text } from '@/components/ui/text'
import Feather from '@expo/vector-icons/Feather'
import colors from '@/lib/colors'
import { useRouter } from 'expo-router'
import cn from '@/lib/utils'
import Button from '@/components/ui/button'
import TripDetailsSection from './TripDetailsSection'
import TripMetrics from './TripMetrics'

export type TripData = {
  id?: string
  date: string
  time: string
  status: 'In Progress' | 'Completed' | 'Confirm'
  pickup: { location: string; address: string }
  dropoff: { location: string; address: string }
  distance: string
  duration: string
  price: string
  onPress?: () => void
}

type ValetTripCardProps = {
  data: TripData
}

const ValetTripCard: React.FC<ValetTripCardProps> = ({ data }) => {
  const router = useRouter()

  const handlePress = () => {
    router.push({
      pathname: '/car-valet/[details]',
      params: { details: data.id as string },
    })
  }
  return (
    <TouchableOpacity
      className="bg-white rounded-2xl p-4 mx-4 mb-4 shadow-md"
      onPress={handlePress}>
      {/* Header with Date, Time and Status */}
      <View className="flex-row justify-between items-center mb-4">
        <View className="flex-row items-center gap-4">
          <Feather name="calendar" size={24} color={colors.primary} />
          <Text className="text-sm text-gray-800">
            {data.time}, {data.date}
          </Text>
        </View>
        <View
          className={`px-3 py-1 rounded-full ${
            data.status === 'In Progress'
              ? 'bg-background-warn'
              : 'bg-background-green'
          }`}>
          <Text
            className={cn(
              'text-xs font-medium',
              data.status === 'In Progress' ? 'text-warn' : 'text-success'
            )}>
            {data.status}
          </Text>
        </View>
      </View>

      {/* Trip details */}
      <View className="mb-4 border-t border-gray-100 pt-4">
        <TripDetailsSection
          pickupAddress={data.pickup.location}
          pickupInfo={`${data.distance} - ${data.duration} EST`}
          dropoffAddress={data.dropoff.location}
        />
      </View>

      {/* Trip metrics */}
      <TripMetrics
        distance={data.distance}
        duration={data.duration}
        price={data.price}
        status={data.status}
      />

      {data.status === 'Confirm' && (
        <View className="flex-row gap-5 justify-between items-center border-t border-gray-100 pt-4 w-full">
          <Button variant='cancel' className='grow'>Cancel</Button>
          <Button variant='contained' className='grow'>Edit</Button>
        </View>
      )}
    </TouchableOpacity>
  )
}

export default ValetTripCard

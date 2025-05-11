import React from 'react'
import { View, TouchableOpacity, Linking } from 'react-native'
import Feather from '@expo/vector-icons/Feather'
import colors from '@/lib/colors'
import { Octicons } from '@expo/vector-icons'
import TripDetailsSection from './TripDetailsSection'
import { Text } from '@/components/ui/text'

export type TripConfirmationCardProps = {
  pickup: { location: string; address: string }
  dropoff: { location: string; address: string }
  distance: string
  duration: string
  contactNumber: string
  isCompleted?: boolean
  onPress?: () => void
}

const TripCompleteNoticeCard: React.FC<TripConfirmationCardProps> = ({
  pickup,
  dropoff,
  distance,
  duration,
  contactNumber,
  isCompleted = true,
  onPress,
}) => {
  const handleCallPress = () => {
    Linking.openURL(`tel:${contactNumber}`)
  }

  return (
    <View className="relative bg-white rounded-2xl p-4 mb-4 shadow-md">
      {/* Checkmark circle at the top */}
      <Octicons
        name="check-circle-fill"
        size={40}
        className="bg-transparent absolute top-[-20] left-0 w-full text-center"
        color={colors.primary}
      />

      {/* Trip details */}
      <TripDetailsSection
        pickupAddress={pickup.location}
        pickupInfo={`${distance} - ${duration} EST`}
        dropoffAddress={dropoff.location}
      />

      {/* Confirmation message */}
      <View className="items-center mb-4 pt-3 border-t border-gray-300">
        <Text className="text-primary text-base font-medium text-center">
          Your vehicle has been reached{'\n'}to your final destination.
        </Text>
      </View>

      {/* Contact number */}
      <TouchableOpacity
        className="flex-row items-center justify-center py-2"
        onPress={handleCallPress}>
        <Feather name="phone" size={20} color={colors.primary} />
        <Text className="text-primary text-base font-medium ml-2">
          {contactNumber}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default TripCompleteNoticeCard

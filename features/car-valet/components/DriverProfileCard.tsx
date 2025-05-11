import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import colors from '@/lib/colors'
import TripMetrics from './TripMetrics'
import { Text } from '@/components/ui/text'

export type DriverProfileProps = {
  name: string
  rating: number
  avatar: string
  recommendations: number
  distance: string
  time: string
  price: string
  onMessagePress?: () => void
  onCallPress?: () => void
}

const DriverProfileCard: React.FC<DriverProfileProps> = ({
  name,
  rating,
  avatar,
  recommendations,
  distance,
  time,
  price,
  onMessagePress,
  onCallPress,
}) => {
  // Generate small avatar images for recommendations
  const renderRecommendationAvatars = () => {
    // This would typically come from a real data source
    // For demo purposes, we'll use placeholder images
    return (
      <View className="flex-row items-center">
        <View className="flex-row -space-x-2 mr-2">
          <Image
            source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }}
            className="w-6 h-6 rounded-full border border-white"
          />
          <Image
            source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
            className="w-6 h-6 rounded-full border border-white"
          />
          <Image
            source={{ uri: 'https://randomuser.me/api/portraits/women/68.jpg' }}
            className="w-6 h-6 rounded-full border border-white"
          />
        </View>
        <Text className="text-xs text-gray-600">
          {recommendations} Recommended
        </Text>
      </View>
    )
  }

  return (
    <View className="bg-white rounded-2xl p-5 shadow-md">
      {/* Driver Profile Header */}
      <View className="flex-row justify-between items-center mb-4">
        <View className="flex-row items-center">
          {/* Driver Avatar */}
          <Image
            source={{ uri: avatar }}
            className="w-12 h-12 rounded-full mr-3"
          />

          {/* Driver Info */}
          <View>
            <Text className="font-semibold text-base">{name}</Text>
            <View className="flex-row items-center">
              <Ionicons name="star" size={14} color="#FFD700" />
              <Text className="text-sm text-gray-600 ml-1">{rating}</Text>
            </View>
          </View>
        </View>

        {/* Action Buttons */}
        <View className="flex-row">
          <TouchableOpacity
            onPress={onMessagePress}
            className="w-10 h-10 rounded-full bg-blue-500 items-center justify-center mr-2">
            <Ionicons name="chatbubble-ellipses" size={20} color="white" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={onCallPress}
            className="w-10 h-10 rounded-full bg-green-500 items-center justify-center">
            <Ionicons name="call" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Recommendations */}
      {renderRecommendationAvatars()}

      {/* Trip Metrics */}
      <TripMetrics distance={distance} duration={time} price={price} />
    </View>
  )
}

export default DriverProfileCard

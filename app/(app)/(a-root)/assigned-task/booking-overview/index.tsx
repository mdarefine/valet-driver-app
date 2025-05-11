import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { router, useLocalSearchParams } from 'expo-router'
import colors from '@/lib/colors'

const BookingOverview = () => {
  // Get the booking ID from the route params if needed
  const params = useLocalSearchParams()
  
  return (
    <SafeAreaView className="flex-1 bg-primary" edges={['top']}>
      {/* Custom Header with Back Button */}
      <View className="flex-row items-center px-4 py-3 bg-primary">
        <Ionicons 
          name="chevron-back" 
          size={24} 
          color={colors.textwhite} 
          onPress={() => router.back()} 
        />
        <Text className="flex-1 text-base font-semibold text-textwhite ml-2">
          Booking Overview
        </Text>
      </View>

      <ScrollView className="flex-1 bg-[#F5F7FA] p-4">
        <View className="bg-white rounded-lg p-4 shadow-sm">
          <Text className="text-base font-medium text-default mb-4">
            Booking Details
          </Text>
          
          <View className="mb-3">
            <Text className="text-sm text-subtle mb-1">Booking ID</Text>
            <Text className="text-sm text-default">{params.id || 'Not available'}</Text>
          </View>
          
          <View className="mb-3">
            <Text className="text-sm text-subtle mb-1">Status</Text>
            <View className="flex-row items-center">
              <View className="w-2 h-2 rounded-full bg-success mr-2" />
              <Text className="text-sm text-default">Active</Text>
            </View>
          </View>
          
          {/* Add more booking details as needed */}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default BookingOverview

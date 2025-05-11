import React from 'react'
import { View, Text, TextInput, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import colors from '@/lib/colors'

const PersonalInfo = () => {
  // Mock user data
  const userData = {
    name: 'David Russel',
    email: 'davidrussel@gmail.com',
    phone: '+65 1234 5678',
    address: 'Okopowa 11/72, 01-042 Warszawa',
    joinedDate: 'Jan 15, 2023'
  }

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
          Personal Info
        </Text>
      </View>

      <ScrollView className="flex-1 bg-white px-4 py-6">
        {/* Form Fields */}
        <View className="mb-4">
          <Text className="text-sm text-subtle mb-1">Name</Text>
          <TextInput
            className="border border-[#E0E0E0] rounded-md px-3 py-2.5"
            value={userData.name}
            editable={false}
          />
        </View>

        <View className="mb-4">
          <Text className="text-sm text-subtle mb-1">Email</Text>
          <TextInput
            className="border border-[#E0E0E0] rounded-md px-3 py-2.5"
            value={userData.email}
            editable={false}
          />
        </View>

        <View className="mb-4">
          <Text className="text-sm text-subtle mb-1">Phone</Text>
          <TextInput
            className="border border-[#E0E0E0] rounded-md px-3 py-2.5"
            value={userData.phone}
            editable={false}
          />
        </View>

        <View className="mb-4">
          <Text className="text-sm text-subtle mb-1">Address</Text>
          <TextInput
            className="border border-[#E0E0E0] rounded-md px-3 py-2.5"
            value={userData.address}
            editable={false}
          />
        </View>

        <View className="mb-4">
          <Text className="text-sm text-subtle mb-1">Joined Date</Text>
          <TextInput
            className="border border-[#E0E0E0] rounded-md px-3 py-2.5"
            value={userData.joinedDate}
            editable={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default PersonalInfo

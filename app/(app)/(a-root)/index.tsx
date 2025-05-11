import React, { useState } from 'react'
import { View, Image, TouchableOpacity, StatusBar, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Text } from '@/components/ui/text'
import { Ionicons } from '@expo/vector-icons'
import colors from '@/lib/colors'
import { router } from 'expo-router'
import useSession from '@/store/useSession'

const DriverHome = () => {
  const driverData = {
    name: 'David Russel',
    id: 'PO 123FF',
    status: 'ONLINE',
    loggedTime: 'Jan 4, 4:21 AM',
    sessionDuration: '04:21:32',
    date: 'Monday Dec 27, 2025'
  }
  
  return (
    <SafeAreaView className="flex-1 bg-[#F5F7FA]" edges={['top']}>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F7FA" />
      <View className="flex-1 bg-[#F5F7FA]">
        {/* Header */}
        <View className="px-5 py-3">
          <Text className="text-lg font-semibold text-default">
            Driver Home
          </Text>
        </View>

        {/* Content Area */}
        <ScrollView className="flex-1 px-5">
          {/* Welcome Card */}
          <View className="mb-6">
            <View className="flex-row justify-between items-center mb-1.5">
              <View>
                <Text className="text-base font-semibold text-default">
                  Welcome . {driverData.name}
                </Text>
                <Text className="text-sm text-subtle">
                  {driverData.date}
                </Text>
              </View>
              <TouchableOpacity>
                <Ionicons name="notifications-outline" size={24} color={colors.default} />
              </TouchableOpacity>
            </View>

            {/* Driver Info Card */}
            <View className="bg-white rounded-xl p-4 shadow-sm mt-2">
              <View className="flex-row justify-between mb-4">
                <View className="flex-row">
                  <Image 
                    source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }} 
                    className="w-12 h-12 rounded-full bg-[#C7B1FF] mr-3" 
                  />
                  <View className="justify-center">
                    <Text className="text-default font-semibold">{driverData.name}</Text>
                    <Text className="text-subtle text-xs">{driverData.id}</Text>
                  </View>
                </View>
                <View className="bg-[#EBF9EC] h-6 px-3 rounded-full justify-center">
                  <Text className="text-[#4CAF50] text-xs font-medium">ONLINE</Text>
                </View>
              </View>
              
              <View className="flex-row justify-between border-t border-[#F0F0F0] pt-3">
                <Text className="text-subtle text-sm">Logged from {driverData.loggedTime}</Text>
                <Text className="text-default text-sm font-medium">{driverData.sessionDuration}</Text>
              </View>
            </View>
          </View>

          {/* Current Task Section */}
          <View>
            <Text className="text-base font-semibold text-default mb-4">
              Current Task
            </Text>
            
            {/* Only showing the No Tasks view as per the Figma design */}
            <View className="bg-[#EEF2F7] rounded-xl p-6 items-center shadow-sm">
              {/* Using SVG components to match the illustration in Figma */}
              <View className="w-[180px] h-[120px] mb-4 justify-center items-center">
                <Ionicons name="person-outline" size={60} color="#A0A0A0" style={{ position: 'absolute', left: 20 }} />
                <Ionicons name="desktop-outline" size={65} color="#A0A0A0" style={{ position: 'absolute', right: 20 }} />
                <Ionicons name="document-outline" size={30} color="#A0A0A0" style={{ position: 'absolute', top: 15, right: 45 }} />
              </View>
              
              <Text className="text-base font-semibold text-default mb-2">
                No Assigned Tasks
              </Text>
              
              <Text className="text-sm text-subtle text-center leading-5 max-w-[90%]">
                You have no tasks assigned at the moment. Sit back and relax or check back later for updates.
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default DriverHome

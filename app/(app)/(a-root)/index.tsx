import React, { useState } from 'react'
import { View, Image, TouchableOpacity, StatusBar, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Text } from '@/components/ui/text'
import { Ionicons } from '@expo/vector-icons'
import colors from '@/lib/colors'
import { router } from 'expo-router'
import useSession from '@/store/useSession'
import CurrentTaskCard from '@/components/specific/home/CurrentTaskCard'
import Header from '@/components/common/Header'

const DriverHome = () => {
  // Sample driver data
  const driverData = {
    name: 'John Doe',
    id: 'ID-12345',
    status: 'Available',
    loggedTime: '10:30 AM',
    sessionDuration: '4h 30m',
    date: 'Today, 24 Jan 2023',
  }

  // Sample current task data
  const currentTasks = [
    {
      id: '1',
      customerName: 'John Doe',
      vehicleInfo: 'Nisan CTR - B457XD',
      dateTime: '10:30 PM, Jan 29 2025',
      pickupLocation: 'Okopowa 11/72, 01-042 Warszawa',
      distanceTime: '12 km - 30 min EST',
      dropoffLocation: '105 William St, Chicago, US',
      status: 'assigned',
      profileImage: 'https://randomuser.me/api/portraits/men/32.jpg'
    }
  ]

  return (
    <SafeAreaView className="flex-1 bg-[#F5F7FA]" >
      <Header title="Driver Home" />
      <View className="flex-1 bg-[#F5F7FA]">
        <ScrollView className="flex-1 ">
          <View className="mb-6 px-4">
            <View className="flex-row justify-between items-center my-2">
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
            <View className="bg-white rounded-xl  shadow-sm mt-2">
              <View className="flex-row justify-between mb-4 p-4 pb-0">
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
              <View
                className="flex-row justify-between border-t border-[#F0F0F0] pt-3 p-4 rounded-b-xl"
                style={{ backgroundColor: colors.light }}
              >
                <Text
                  className="text-sm text-primary"

                >
                  Logged in at {driverData.loggedTime}
                </Text>

                <Text
                  className="text-sm font-medium text-primary"
                >
                  {driverData.sessionDuration}
                </Text>
              </View>
            </View>
          </View>

          <View className=' p-4 rounded-t-3xl ' style={{ backgroundColor: colors.light, }}>
            <Text className="text-xl font-semibold text-default my-4">
              Current Task
            </Text>
            {currentTasks.length > 0 ? (
              currentTasks.map((task) => (
                <CurrentTaskCard
                  key={task.id}
                  data={task}
                  onAccept={() => router.push(`/assigned-task/${task.id}`)}
                  onReject={() => alert('Task rejected')}
                />
              ))
            ) : (
              <View className="bg-[#EEF2F7] rounded-xl p-6 items-center shadow-sm">
                <Image source={require('@/assets/images/no-data-bro.png')} className="w-[180px] h-[120px] mb-4 justify-center items-center" />
                <Text className="text-base font-semibold text-default mb-2">
                  No Assigned Tasks
                </Text>

                <Text className="text-sm text-subtle text-center leading-5 max-w-[90%]">
                  You have no tasks assigned at the moment. Sit back and relax or check back later for updates.
                </Text>
              </View>
            )}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default DriverHome

import React from 'react'
import { View, FlatList, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Text } from '@/components/ui/text'
import { Ionicons } from '@expo/vector-icons'
import colors from '@/lib/colors'

// Define the type for history items
interface HistoryItem {
  id: string;
  dateTime: string;
  pickupLocation: string;
  dropOffLocation: string;
  distance: string;
  time: string;
  price: string;
  tripDetails?: string;
}

// Task History Card Component
const TaskHistoryCard = ({ item }: { item: HistoryItem }) => {
  return (
    <View className="bg-white rounded-lg p-4 shadow-sm">
      {/* Date and Time */}
      <View className="flex-row items-center mb-4">
        <Ionicons name="calendar-outline" size={20} color={colors.default} />
        <Text className="ml-2 text-sm font-medium text-default">{item.dateTime}</Text>
      </View>

      {/* Pickup and Dropoff Info */}
      <View className="mb-4">
        {/* Pickup */}
        <View className="flex-row mb-1.5">
          <View className="w-6 items-center mr-2">
            <View className="w-5 h-5 rounded-full bg-[#57C965] border-3 border-white items-center justify-center" />
            <View className="flex-1 w-[1px] bg-[#D0D0D0] my-0.5 ml-2.5" />
          </View>
          <View className="flex-1">
            <Text className="text-xs text-[#9DA5B1] mb-0.5">PICKUP</Text>
            <Text className="text-sm text-default mb-0.5">{item.pickupLocation}</Text>
            <Text className="text-xs text-[#6C7A8D] mt-0.5 bg-[#EEF2F7] self-start px-2 py-0.5 rounded-lg">{item.tripDetails}</Text>
          </View>
        </View>
        
        {/* Dropoff */}
        <View className="flex-row mb-1.5">
          <View className="w-6 items-center mr-2">
            <View className="w-5 h-5 rounded-full bg-[#E94A47] border-3 border-white items-center justify-center" />
          </View>
          <View className="flex-1">
            <Text className="text-xs text-[#9DA5B1] mb-0.5">DROP-OFF</Text>
            <Text className="text-sm text-default mb-0.5">{item.dropOffLocation}</Text>
          </View>
        </View>
      </View>

      {/* Trip Details */}
      <View className="flex-row justify-between border-t border-[#EEF2F7] pt-3">
        <View className="flex-1">
          <Text className="text-xs text-[#9DA5B1] mb-1">DISTANCE</Text>
          <Text className="text-sm font-medium text-default">{item.distance}</Text>
        </View>

        <View className="flex-1">
          <Text className="text-xs text-[#9DA5B1] mb-1">TIME</Text>
          <Text className="text-sm font-medium text-default">{item.time}</Text>
        </View>

        <View className="flex-1">
          <Text className="text-xs text-[#9DA5B1] mb-1">PRICE</Text>
          <Text className="text-sm font-medium text-default">{item.price}</Text>
        </View>

        <View className="w-9 h-9 justify-center items-center">
          <Image 
            source={require('@/assets/images/home/car-black-side-silhouette (1).png')} 
            className="w-9 h-6 resize-contain"
          />
        </View>
      </View>
    </View>
  )
}

const HistoryPage = () => {

  // Sample data for history items based on the provided screenshot
  const historyItems: HistoryItem[] = [
    {
      id: '1',
      dateTime: '10:30 PM, Jan 29 2025',
      pickupLocation: 'Okopowa 11/72, 01-042 Warszawa',
      dropOffLocation: '105 William St, Chicago, US',
      distance: '12 km',
      time: '30 min',
      price: '$25.00',
      tripDetails: '12 km - 30 min EST'
    },
    {
      id: '2',
      dateTime: '10:30 PM, Jan 29 2025',
      pickupLocation: 'Okopowa 11/72, 01-042 Warszawa',
      dropOffLocation: '105 William St, Chicago, US',
      distance: '12 km',
      time: '30 min',
      price: '$25.00',
      tripDetails: '12 km - 30 min EST'
    }
  ]

  return (
    <SafeAreaView className="flex-1 bg-primary" edges={['top']}>
      <View className="px-4 py-3 bg-primary">
        <Text className="text-lg font-semibold text-textwhite">
          History
        </Text>
      </View>

      <View className="flex-1 bg-[#F5F7FA] p-4">
        {historyItems.length === 0 ? (
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
        ) : (
          <FlatList
            data={historyItems}
            renderItem={({ item }) => <TaskHistoryCard item={item} />}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingBottom: 20 }}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <View className="h-4" />}
          />
        )}
      </View>
    </SafeAreaView>
  )
}



export default HistoryPage

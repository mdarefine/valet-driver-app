import React from 'react'
import { View, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Text } from '@/components/ui/text'
import colors from '@/lib/colors'

// Import components
import TaskHistoryCard from '@/components/specific/history/TaskHistoryCard'
import NoHistoryPlaceholder from '@/components/specific/history/NoHistoryPlaceholder'
import { HistoryItem } from '@/components/specific/history/types'

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
          <NoHistoryPlaceholder />
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

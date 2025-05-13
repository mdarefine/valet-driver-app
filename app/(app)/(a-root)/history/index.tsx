import React from 'react'
import { View, FlatList, TextInput, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from '@/lib/colors'
import TaskHistoryCard from '@/components/specific/history/TaskHistoryCard'
import NoHistoryPlaceholder from '@/components/specific/history/NoHistoryPlaceholder'
import { HistoryItem } from '@/components/specific/history/types'
import Header from '@/components/common/Header'
import { Ionicons } from '@expo/vector-icons'

const HistoryPage = () => {

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
    <SafeAreaView className="flex-1 bg-white" >
      <Header title="" />
      <View className="px-4 py-4">
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center bg-gray-100 rounded-md px-3 flex-1 mr-1">
            <Ionicons name="search" size={24} color={colors.subtle} />
            <TextInput
              className="flex-1 ml-2 text-base"
              placeholder="Search"
              // value={searchText}
              // onChangeText={setSearchText}
            />
          </View>
          <TouchableOpacity>
            <Ionicons name="filter-outline" size={24} color={colors.default} />
          </TouchableOpacity>
        </View>
      </View>
      <View className="flex-1 p-4">
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

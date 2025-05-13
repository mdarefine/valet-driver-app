import React, { useState } from 'react'
import { View, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import TaskHistoryCard from '@/components/specific/history/TaskHistoryCard'
import NoHistoryPlaceholder from '@/components/specific/history/NoHistoryPlaceholder'
import { HistoryItem } from '@/components/specific/history/types'
import Header from '@/components/common/Header'
import SearchFilterBar from '@/components/common/SearchFilterBar'

export default function HistoryPage() {
  const [searchText, setSearchText] = useState('');
  const [filters, setFilters] = useState<any>(null);
  const [filteredItems, setFilteredItems] = useState<HistoryItem[]>([]);

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

  React.useEffect(() => {
    // Apply search and filters
    let filtered = [...historyItems];
    
    // Apply text search
    if (searchText.trim() !== '') {
      const searchLower = searchText.toLowerCase();
      filtered = filtered.filter(item => 
        item.pickupLocation.toLowerCase().includes(searchLower) ||
        item.dropOffLocation.toLowerCase().includes(searchLower) ||
        item.dateTime.toLowerCase().includes(searchLower)
      );
    }
    
    // Apply date filter if selected
    if (filters?.date) {
      const filterDate = filters.date.toDateString();
      filtered = filtered.filter(item => {
        // Convert the dateTime string to a date object for comparison
        // This is a simplified implementation; you might need to adjust based on your date format
        const itemDate = new Date(item.dateTime.split(',')[1].trim()).toDateString();
        return itemDate === filterDate;
      });
    }
    
    setFilteredItems(filtered);
  }, [searchText, filters]);

  const handleSearch = (text: string) => {
    setSearchText(text);
  };

  const handleFilter = (appliedFilters: any) => {
    console.log('Filters applied:', appliedFilters);
    setFilters(appliedFilters);
  };

  return (
    <SafeAreaView className="flex-1 bg-white" >
      <Header title="" />
      <View className="px-4 py-4">
        <SearchFilterBar 
          onSearch={handleSearch}
          onFilter={handleFilter}
          initialSearchValue={searchText}
        />
      </View>
      <View className="flex-1 p-4">
        {historyItems.length === 0 ? (
          <NoHistoryPlaceholder />
        ) : (
          <FlatList
            data={filteredItems}
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

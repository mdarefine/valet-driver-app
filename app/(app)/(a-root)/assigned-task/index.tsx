import React, { useState, useEffect } from 'react'
import { View, TouchableOpacity, ScrollView, TextInput, StyleSheet, Image, ActivityIndicator, Alert, RefreshControl } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Text } from '@/components/ui/text'
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons'
import colors from '@/lib/colors'
import { useRouter } from 'expo-router'

interface TaskItem {
  id: string;
  pickupLocation: string;
  dropOffLocation: string;
  time: string;
  date: string;
  distance: string;
  duration: string;
  price: string;
  status: 'upcoming' | 'assigned';
}

const AssignedTaskPage = () => {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<'upcoming' | 'assigned'>('upcoming')
  const [searchText, setSearchText] = useState('')
  const [loading, setLoading] = useState(false)
  const [refreshing, setRefreshing] = useState(false)

  // Sample data for tasks
  const tasks: TaskItem[] = [
    {
      id: '1',
      pickupLocation: 'Okopowa 11/72, 01-042 Warszawa',
      dropOffLocation: '105 William St, Chicago, US',
      time: '10:30 PM',
      date: 'Jan 29 2025',
      distance: '12 km',
      duration: '30 min',
      price: '$25.00',
      status: 'upcoming'
    },
    {
      id: '2',
      pickupLocation: 'Okopowa 11/72, 01-042 Warszawa',
      dropOffLocation: '105 William St, Chicago, US',
      time: '10:30 PM',
      date: 'Jan 29 2025',
      distance: '12 km',
      duration: '30 min',
      price: '$25.00',
      status: 'upcoming'
    }
  ]

  const filteredTasks = tasks.filter(task => task.status === activeTab)

  // Handle navigation to booking details
  const navigateToBookingDetails = (taskId: string) => {
    // You could show a loading indicator here
    setLoading(true)
    
    // Simulate API call delay
    setTimeout(() => {
      setLoading(false)
      // Navigate with the correct format for Expo Router dynamic routes
      router.push({
        pathname: '/(app)/(a-root)/assigned-task/[id]',
        params: { id: taskId }
      } as any)
    }, 300)
  }
  
  // Handle the start button click
  const handleStartTask = (taskId: string, event: any) => {
    // Stop event propagation so it doesn't trigger the card click
    event.stopPropagation()
    
    // Navigate to booking details
    navigateToBookingDetails(taskId)
  }
  
  // Refresh the task list
  const refreshTasks = () => {
    setRefreshing(true)
    
    // Simulate API call delay
    setTimeout(() => {
      setRefreshing(false)
      // In a real app, you would fetch updated tasks here
    }, 1500)
  }

  // Function to filter tasks based on search text
  const searchTasks = (task: TaskItem) => {
    if (searchText.trim() === '') return true
    
    const searchLower = searchText.toLowerCase()
    return (
      task.pickupLocation.toLowerCase().includes(searchLower) ||
      task.dropOffLocation.toLowerCase().includes(searchLower) ||
      task.time.toLowerCase().includes(searchLower) ||
      task.date.toLowerCase().includes(searchLower) ||
      task.price.toLowerCase().includes(searchLower)
    )
  }

  const renderTaskItem = (task: TaskItem) => (
    <TouchableOpacity 
      key={task.id} 
      className="mb-4 bg-white rounded-lg overflow-hidden shadow-sm"
      onPress={() => navigateToBookingDetails(task.id)}
      activeOpacity={0.7}
    >
      <View className="p-4 pb-2">
        <View className="flex-row justify-between items-center">
          <View className="flex-row items-center">
            <Ionicons name="calendar-outline" size={20} color={colors.subtle} />
            <Text className="ml-2 text-[15px] text-gray-700">{task.time}, {task.date}</Text>
          </View>
          <TouchableOpacity 
            className="bg-gray-100 rounded-full px-4 py-1 flex-row items-center"
            style={{ backgroundColor: colors.background.primary }}
            onPress={(e) => handleStartTask(task.id, e)}
          >
            <Ionicons name="play" size={14} color={colors.light_blue} />
            <Text className="ml-1 text-[13px]" style={{ color: colors.light_blue }}>Start</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="px-4 pt-2 pb-4">
        <View className="flex-row items-start mb-4">
          <View className="mr-3 items-center">
            <View className="w-8 h-8 rounded-full bg-green-100 items-center justify-center" 
                  style={{ backgroundColor: '#E8F5E9' }}>
              <View className="w-3 h-3 rounded-full" style={{ backgroundColor: colors.light_green }} />
            </View>
            <View className="h-14 w-[1px] bg-gray-300 my-1" />
            <View className="w-8 h-8 rounded-full bg-red-100 items-center justify-center"
                  style={{ backgroundColor: '#FFEBEE' }}>
              <View className="w-3 h-3 rounded-full" style={{ backgroundColor: colors.light_red }} />
            </View>
          </View>
          
          <View className="flex-1">
            <View className="mb-4">
              <Text className="text-[12px] text-gray-500 mb-1">PICKUP</Text>
              <Text className="text-[14px] font-medium">{task.pickupLocation}</Text>
              <View className="bg-green-50 self-start rounded px-2 py-1 mt-1">
                <Text className="text-[12px] text-green-700">
                  12 km • 30 min EST
                </Text>
              </View>
            </View>
            
            <View>
              <Text className="text-[12px] text-gray-500 mb-1">DROP-OFF</Text>
              <Text className="text-[14px] font-medium">{task.dropOffLocation}</Text>
            </View>
          </View>
        </View>
        
        <View className="flex-row items-center justify-between pt-2 border-t border-gray-100">
          <View className="flex-row items-center">
            <Ionicons name="car-outline" size={20} color={colors.subtle} />
            <Text className="text-[13px] text-gray-700 font-medium ml-2">DISTANCE</Text>
            <Text className="text-[13px] font-bold ml-1">{task.distance}</Text>
          </View>
          
          <View className="flex-row items-center">
            <Ionicons name="time-outline" size={18} color={colors.subtle} />
            <Text className="text-[13px] text-gray-700 font-medium ml-1">TIME</Text>
            <Text className="text-[13px] font-bold ml-1">{task.duration}</Text>
          </View>
          
          <View className="flex-row items-center">
            <Ionicons name="pricetag-outline" size={18} color={colors.subtle} />
            <Text className="text-[13px] text-gray-700 font-medium ml-1">PRICE</Text>
            <Text className="text-[13px] font-bold ml-1">{task.price}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: 'white' }} edges={['top']}>
      {/* Tab Navigation */}
      <View className="flex-row mb-4">
        <TouchableOpacity 
          className="flex-1 py-4 items-center"
          style={{
            backgroundColor: activeTab === 'upcoming' ? colors.primary : '#EBF2F7',
            borderBottomWidth: activeTab === 'upcoming' ? 0 : 0
          }}
          onPress={() => setActiveTab('upcoming')}
        >
          <Text 
            className="font-medium text-base" 
            style={{ color: activeTab === 'upcoming' ? colors.textwhite : colors.default }}
          >
            Up Coming
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          className="flex-1 py-4 items-center"
          style={{
            backgroundColor: activeTab === 'assigned' ? colors.primary : '#EBF2F7',
            borderBottomWidth: activeTab === 'assigned' ? 0 : 0
          }}
          onPress={() => setActiveTab('assigned')}
        >
          <Text 
            className="font-medium text-base"
            style={{ color: activeTab === 'assigned' ? colors.textwhite : colors.default }}
          >
            Assigned
          </Text>
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View className="px-4 mb-4">
        <View className="flex-row items-center bg-gray-100 rounded-md px-3 py-2">
          <Ionicons name="search" size={20} color={colors.subtle} />
          <TextInput
            className="flex-1 ml-2 text-base"
            placeholder="Search"
            value={searchText}
            onChangeText={setSearchText}
          />
          <TouchableOpacity>
            <Ionicons name="options-outline" size={22} color={colors.primary} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Tasks List */}
      {/* Loading overlay */}
      {loading && (
        <View style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0,0,0,0.3)',
          zIndex: 1000
        }}>
          <View style={{
            padding: 20,
            borderRadius: 10,
            backgroundColor: 'white',
            alignItems: 'center'
          }}>
            <ActivityIndicator size="large" color={colors.primary} />
            <Text style={{ marginTop: 10, color: colors.default }}>Loading...</Text>
          </View>
        </View>
      )}
      
      <ScrollView 
        className="flex-1 px-4"
        showsVerticalScrollIndicator={false}
        onScrollBeginDrag={() => console.log('Scrolling started')}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={refreshTasks}
            colors={[colors.primary]}
            tintColor={colors.primary}
          />
        }
      >
        {filteredTasks.filter(searchTasks).length > 0 ? (
          filteredTasks.filter(searchTasks).map(task => renderTaskItem(task))
        ) : (
          <View className="flex-1 items-center justify-center py-8">
            <Ionicons name="car-outline" size={60} color={colors.gray03} />
            <Text className="mt-4 text-lg font-medium text-gray-700">
              {searchText.trim() !== '' ? 'No matching tasks found' : `No ${activeTab} tasks`}
            </Text>
            <Text className="mt-2 text-center text-gray-500 px-8">
              {searchText.trim() !== '' 
                ? `No tasks match "${searchText}". Try a different search.` 
                : `There are no ${activeTab} tasks at the moment. Check back later.`}
            </Text>
          </View>
        )}
        <View className="h-20" />
      </ScrollView>
    </SafeAreaView>
  )
}

export default AssignedTaskPage

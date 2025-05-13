import React, { useState, useEffect } from 'react'
import { View, TouchableOpacity, ScrollView, TextInput, ActivityIndicator, Alert, RefreshControl, StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Text } from '@/components/ui/text'
import { Ionicons } from '@expo/vector-icons'
import colors from '@/lib/colors'
import { useRouter } from 'expo-router'
import UpcomingTaskCard from '@/components/specific/assigntask/UpcomingTaskCard'
import AssignedTaskCard from '@/components/specific/assigntask/AssignedTaskCard'
import { TaskItem } from '@/components/specific/assigntask/types'
import Header from '@/components/common/Header'
import SearchFilterBar from '@/components/common/SearchFilterBar'

export default function AssignedTaskPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<'upcoming' | 'assigned'>('upcoming')
  const [searchText, setSearchText] = useState('')
  const [filters, setFilters] = useState<any>(null)
  const [filteredTasks, setFilteredTasks] = useState<TaskItem[]>([])
  const [loading, setLoading] = useState(false)
  const [refreshing, setRefreshing] = useState(false)

  const tasks: TaskItem[] = [
    {
      id: '1',
      userName: 'John Doe',
      userImage: 'https://randomuser.me/api/portraits/men/32.jpg',
      vehicleModel: 'Nisan CTR',
      vehiclePlate: 'B457XD',
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
      userName: 'Carrie',
      userImage: 'https://randomuser.me/api/portraits/women/32.jpg',
      vehicleModel: 'Nisan CTR',
      vehiclePlate: 'B457XD',
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
      id: '3',
      userName: 'John Doe',
      userImage: 'https://randomuser.me/api/portraits/men/32.jpg',
      vehicleModel: 'Nisan CTR',
      vehiclePlate: 'B457XD',
      pickupLocation: 'Okopowa 11/72, 01-042 Warszawa',
      dropOffLocation: '105 William St, Chicago, US',
      time: '1:30 PM',
      date: 'Jan 24 2025',
      distance: '55.9 km',
      duration: '1hour 1 min',
      price: '$45.00',
      status: 'assigned'
    },
    {
      id: '4',
      userName: 'Sarah Miller',
      userImage: 'https://randomuser.me/api/portraits/women/44.jpg',
      vehicleModel: 'Toyota Camry',
      vehiclePlate: 'T789AB',
      pickupLocation: '221B Baker Street, London',
      dropOffLocation: '10 Downing Street, London',
      time: '3:45 PM',
      date: 'Jan 25 2025',
      distance: '8.2 km',
      duration: '22 min',
      price: '$18.50',
      status: 'assigned'
    }
  ]

  useEffect(() => {
    const filtered = tasks.filter(task => {
      if (searchText.trim() !== '') {
        const searchLower = searchText.toLowerCase()
        const matchesSearch = (
          task.pickupLocation.toLowerCase().includes(searchLower) ||
          task.dropOffLocation.toLowerCase().includes(searchLower) ||
          task.time.toLowerCase().includes(searchLower) ||
          task.date.toLowerCase().includes(searchLower)
        )
        if (!matchesSearch) return false
      }

      if (filters?.date) {
        const filterDate = filters.date.toDateString()
        const taskDate = new Date(task.date).toDateString()
        if (taskDate !== filterDate) return false
      }

      return true
    })

    setFilteredTasks(filtered)
  }, [searchText, filters, tasks])

  const handleSearch = (text: string) => {
    setSearchText(text)
  }

  const handleFilter = (appliedFilters: any) => {
    console.log('Filters applied:', appliedFilters)
    setFilters(appliedFilters)
  }

  const navigateToBookingDetails = (taskId: string) => {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      router.push({
        pathname: '/(app)/(a-root)/assigned-task/[id]',
        params: { id: taskId }
      } as any)
    }, 300)
  }

  const handleStartTask = (taskId: string, event: any) => {
    event.stopPropagation()
    navigateToBookingDetails(taskId)
  }

  const refreshTasks = () => {
    setRefreshing(true)

    setTimeout(() => {
      setRefreshing(false)
    }, 1500)
  }

  const renderTaskItem = (task: TaskItem) => {
    if (activeTab === 'assigned') {
      return (
        <AssignedTaskCard
          key={task.id}
          task={task}
          onAcceptPress={navigateToBookingDetails}
          onRejectPress={(taskId) => Alert.alert('Reject', 'Task rejected')}
        />
      )
    } else {
      return (
        <UpcomingTaskCard
          key={task.id}
          task={task}
          onTaskPress={navigateToBookingDetails}
          onStartPress={handleStartTask}
        />
      )
    }
  }

  return (
    <SafeAreaView className="flex-1 bg-white" >
      <Header title=''/>
      <View className="bg-white px-2 pt-4">
        <View className="flex-row bg-[#EBF2F7] rounded-full overflow-hidden border border-[#EBF2F7]">
          <TouchableOpacity 
            className="flex-1 py-3 items-center"
            style={{
              backgroundColor: activeTab === 'upcoming' ? '#00296B' : 'transparent',
              borderRadius: 9999,
            }}
            onPress={() => setActiveTab('upcoming')}
          >
            <Text 
              className="font-medium text-base" 
              style={{ color: activeTab === 'upcoming' ? 'white' : '#00296B' }}
            >
              Up Coming
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            className="flex-1 py-3 items-center"
            style={{
              backgroundColor: activeTab === 'assigned' ? '#00296B' : 'transparent',
              borderRadius: 9999,
            }}
            onPress={() => setActiveTab('assigned')}
          >
            <Text 
              className="font-medium text-base"
              style={{ color: activeTab === 'assigned' ? 'white' : '#00296B' }}
            >
              Assigned
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="px-2 py-4">
        <SearchFilterBar
          onSearch={handleSearch}
          onFilter={handleFilter}
          initialSearchValue={searchText}
        />
      </View>      
      <ScrollView 
        className="flex-1 px-2"
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
        {filteredTasks.filter(task => task.status === activeTab).length > 0 ? (
          filteredTasks.filter(task => task.status === activeTab).map(task => renderTaskItem(task))
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

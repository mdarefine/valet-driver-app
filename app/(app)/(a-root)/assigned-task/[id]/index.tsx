import React, { useState, useEffect } from 'react'
import { View, TouchableOpacity, ScrollView, TextInput, StyleSheet, Image, Modal, ActivityIndicator } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Text } from '@/components/ui/text'
import { Ionicons } from '@expo/vector-icons'
import colors from '@/lib/colors'
import { useRouter, useLocalSearchParams } from 'expo-router'

interface BookingDetailsProps {
  id: string;
  customerName: string;
  contactInfo: string;
  vehicle: string;
  vin: string;
  color: string;
  estimateMileage: string;
  pickupLocation: string;
  dropOffLocation: string;
  distance: string;
  estimatedTime: string;
  date: string;
  startTime: string;
  endTime: string;
}

const BookingOverview = () => {
  const router = useRouter()
  const params = useLocalSearchParams()
  const [isCompleteModalVisible, setIsCompleteModalVisible] = useState(false)
  const [description, setDescription] = useState('')
  const [isComplete, setIsComplete] = useState(false)
  const [loading, setLoading] = useState(true)
  
  // Get the task ID from the URL parameters
  const taskId = params.id as string
  
  // Sample booking data - in a real app, you would fetch this based on taskId
  const bookingDetails: BookingDetailsProps = {
    id: taskId === '2' ? '#B0002' : '#B0001',
    customerName: 'John Doe',
    contactInfo: '+65 123 4567',
    vehicle: 'Nisan CTR - B457XD',
    vin: 'Vehicle',
    color: 'Brown',
    estimateMileage: '5110',
    pickupLocation: 'Okopowa 11/72, 01-042 Warszawa',
    dropOffLocation: '105 William St, Chicago, US',
    distance: '55.9 km',
    estimatedTime: '1hour 1 min EST',
    date: 'Jan 24 2025',
    startTime: '1:30 PM',
    endTime: '01:30 PM',
  }
  
  // Simulate loading data
  useEffect(() => {
    // Simulate API call delay
    const timer = setTimeout(() => {
      setLoading(false)
    }, 800)
    
    return () => clearTimeout(timer)
  }, [])

  const handleComplete = () => {
    // Show loading
    setLoading(true)
    
    // Simulate API call to mark task as complete
    setTimeout(() => {
      setIsComplete(true)
      setIsCompleteModalVisible(false)
      setLoading(false)
    }, 500)
  }

  const renderConfirmModal = () => (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isCompleteModalVisible}
      onRequestClose={() => setIsCompleteModalVisible(false)}
    >
      <View className="flex-1 bg-black/50 justify-center items-center">
        <View className="bg-white rounded-lg w-[90%] p-6">
          <View className="items-center mb-4">
            <View className="w-12 h-12 rounded-full bg-primary items-center justify-center mb-3">
              <Ionicons name="location" size={24} color="white" />
            </View>
            <Text className="text-xl font-bold text-primary mb-2">Confirm Completion</Text>
            <Text className="text-center text-gray-600 mb-4">
              You have reached the final destination. Please ensure all items have been delivered successfully before marking this task as complete.
            </Text>
          </View>
          
          <Text className="text-gray-600 mb-2">Description(optional)</Text>
          <TextInput
            className="border border-gray-300 rounded-md p-3 mb-5 w-full"
            placeholder="Enter additional note"
            multiline
            numberOfLines={2}
            value={description}
            onChangeText={setDescription}
          />
          
          <TouchableOpacity 
            className="bg-primary py-3 rounded-md items-center"
            onPress={handleComplete}
          >
            <Text className="text-white font-medium">Mark as complete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
  
  // If loading, show loading indicator
  if (loading) {
    return (
      <SafeAreaView className="flex-1 bg-white justify-center items-center" edges={['top']}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text className="mt-4 text-gray-600">Loading booking details...</Text>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView className="flex-1 bg-white" edges={['top']}>
      {/* Header */}
      <View className="bg-primary p-4">
        <View className="flex-row items-center">
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={24} color="white" />
          </TouchableOpacity>
          <Text className="text-white text-lg font-medium ml-2">Booking Overview</Text>
        </View>
      </View>
      
      <ScrollView className="flex-1">
        {/* Customer Info */}
        <View className="px-4 py-4 flex-row justify-between items-center">
          <View className="flex-row items-center">
            <Image 
              source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
              className="w-12 h-12 rounded-full mr-3"
            />
            <View>
              <Text className="font-bold text-lg">{bookingDetails.customerName}</Text>
              <Text className="text-gray-500">{bookingDetails.vehicle}</Text>
            </View>
          </View>
          
          <TouchableOpacity 
            className={`rounded-full px-4 py-1 ${isComplete ? 'bg-green-100' : 'bg-blue-100'}`}
            onPress={() => !isComplete && setIsCompleteModalVisible(true)}
          >
            <View className="flex-row items-center">
              {isComplete && <Ionicons name="checkmark-circle" size={16} color={colors.success} style={{ marginRight: 4 }} />}
              <Text 
                className={`${isComplete ? 'text-green-600' : 'text-blue-600'} font-medium`}
              >
                {isComplete ? 'Complete' : 'Start'}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        
        {/* Pickup/Dropoff Info */}
        <View className="px-4 pt-2 pb-4">
          <View className="flex-row">
            <View className="items-center mr-3">
              <View className="w-8 h-8 rounded-full bg-green-100 items-center justify-center">
                <View className="w-3 h-3 rounded-full bg-green-500" />
              </View>
              <View className="h-14 w-[1px] bg-gray-300 my-1" />
              <View className="w-8 h-8 rounded-full bg-red-100 items-center justify-center">
                <View className="w-3 h-3 rounded-full bg-red-500" />
              </View>
            </View>
            
            <View className="flex-1">
              <View className="mb-4">
                <Text className="text-gray-400 text-xs">PICKUP</Text>
                <Text className="text-gray-800 font-medium mb-1">
                  {bookingDetails.pickupLocation}
                </Text>
                <View className="bg-green-50 self-start rounded px-2 py-1">
                  <Text className="text-green-700 text-xs">
                    {bookingDetails.distance} - {bookingDetails.estimatedTime}
                  </Text>
                </View>
              </View>
              
              <View>
                <Text className="text-gray-400 text-xs">DROP-OFF</Text>
                <Text className="text-gray-800 font-medium">
                  {bookingDetails.dropOffLocation}
                </Text>
              </View>
            </View>
          </View>
        </View>
        
        {/* Date & Time */}
        <View className="px-4 py-3 flex-row items-center border-t border-gray-100">
          <Ionicons name="calendar-outline" size={22} color={colors.subtle} />
          <Text className="ml-3 text-gray-800">
            {bookingDetails.startTime}, {bookingDetails.date}
          </Text>
          <Text className="ml-auto text-gray-600">
            {bookingDetails.endTime}
          </Text>
        </View>
        
        {/* Booking Details Section */}
        <View className="mt-5 px-4">
          <Text className="text-gray-400 text-xs mb-3">BOOKING DETAILS</Text>
          
          <View className="flex-row justify-between py-2">
            <Text className="text-gray-700">Booking ID</Text>
            <Text className="font-medium">{bookingDetails.id}</Text>
          </View>
          
          <View className="flex-row justify-between py-2">
            <Text className="text-gray-700">Customer Name</Text>
            <Text className="font-medium">{bookingDetails.customerName}</Text>
          </View>
          
          <View className="flex-row justify-between py-2">
            <Text className="text-gray-700">Contact Info</Text>
            <Text className="font-medium">{bookingDetails.contactInfo}</Text>
          </View>
        </View>
        
        {/* Vehicle Section */}
        <View className="mt-5 px-4">
          <Text className="text-gray-400 text-xs mb-3">VEHICLE</Text>
          
          <View className="flex-row justify-between py-2">
            <Text className="text-gray-700">Vehicle</Text>
            <Text className="font-medium">{bookingDetails.vehicle}</Text>
          </View>
          
          <View className="flex-row justify-between py-2">
            <Text className="text-gray-700">VIN</Text>
            <Text className="font-medium">{bookingDetails.vin}</Text>
          </View>
          
          <View className="flex-row justify-between py-2">
            <Text className="text-gray-700">Color</Text>
            <Text className="font-medium">{bookingDetails.color}</Text>
          </View>
          
          <View className="flex-row justify-between py-2">
            <Text className="text-gray-700">Estimate Mileage</Text>
            <Text className="font-medium">{bookingDetails.estimateMileage}</Text>
          </View>
        </View>
        
        <View className="h-32" />
      </ScrollView>
      
      {/* Bottom button */}
      <View className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100">
        <TouchableOpacity 
          className="bg-primary py-4 rounded-md items-center"
          onPress={() => !isComplete ? setIsCompleteModalVisible(true) : {}}
          disabled={isComplete}
        >
          <Text className="text-white font-bold text-lg">
            {isComplete ? 'Complete' : 'Start'}
          </Text>
        </TouchableOpacity>
      </View>
      
   <Text>hello</Text>
      {renderConfirmModal()}
    </SafeAreaView>
  )
}

export default BookingOverview


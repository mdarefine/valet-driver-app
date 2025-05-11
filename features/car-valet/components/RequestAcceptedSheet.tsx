import React, { forwardRef, useCallback, useMemo } from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import { Text } from '@/components/ui/text'
import Button from '@/components/ui/button'
import { FontAwesome6, Ionicons } from '@expo/vector-icons'
import TripMetrics from './TripMetrics'
import {
  BottomSheetModal,
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetView,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet'
import TripDetailsSection from './TripDetailsSection'

interface RequestAcceptedSheetProps {
  onMessage: () => void
  onCall: () => void
  onPayment: () => void
  driverInfo?: {
    name: string
    vehicle: string
    plateNumber: string
    avatar: string
  }
  tripDetails?: {
    pickup: {
      address: string
      time: string
    }
    dropoff: {
      address: string
    }
    distance: string
    duration: string
    price: string
  }
}

// Using BottomSheetModal's built-in ref type
const RequestAcceptedSheet = forwardRef<
  BottomSheetModal,
  RequestAcceptedSheetProps
>(({ onMessage, onCall, onPayment, driverInfo, tripDetails }, ref) => {
  // Set up the snap points for the bottom sheet
  const snapPoints = useMemo(() => ['75%'], [])

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index)
  }, [])

  // Default values if props are not provided
  const driver = driverInfo || {
    name: 'Gregory Smith',
    vehicle: 'Yellow Ford F550',
    plateNumber: 'K 110670',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  }

  const trip = tripDetails || {
    pickup: {
      address: 'Okopowa 11/72, 01-042 Warszawa',
      time: 'EST',
    },
    dropoff: {
      address: '105 William St, Chicago, US',
    },
    distance: '12 km',
    duration: '30 min',
    price: '$25.00',
  }

  // Render backdrop component
  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        opacity={0.5}
      />
    ),
    []
  )

  return (
    <BottomSheetModal
      ref={ref}
      index={0}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      backdropComponent={renderBackdrop}
      handleIndicatorStyle={{ backgroundColor: '#CCCCCC', width: 50 }}>
      <BottomSheetScrollView>
        <View className="px-4 pt-2 pb-8">
          {/* Combined Card with Driver Info and Trip Details */}
          <View className="bg-white rounded-lg p-4 border border-primary">
            {/* Driver Info Section */}
            <View className="flex-row items-center mb-4">
              <Image
                source={{ uri: driver.avatar }}
                className="w-16 h-16 rounded-full mr-3"
              />
              <View className="flex-1">
                <Text className="text-lg font-semibold">{driver.name}</Text>
                <Text className="text-gray-500 text-base font-normal">
                  {driver.vehicle}
                </Text>
                <View className="bg-gray-100 self-start px-2 py-0.5 rounded mt-1">
                  <Text className="text-xs text-gray-600">
                    {driver.plateNumber}
                  </Text>
                </View>
              </View>
              <View className="flex-row">
                <TouchableOpacity
                  onPress={onMessage}
                  className="w-10 h-10 rounded-full bg-blue-500 items-center justify-center mr-2">
                  <Ionicons
                    name="chatbubble-ellipses-outline"
                    size={20}
                    color="white"
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={onCall}
                  className="w-10 h-10 rounded-full bg-green-500 items-center justify-center">
                  <Ionicons name="call" size={20} color="white" />
                </TouchableOpacity>
              </View>
            </View>

            {/* Horizontal Separator Line */}
            <View className="border-t border-gray-200 my-3" />

            {/* Trip Details Section */}
            <TripDetailsSection
              pickupAddress={trip.pickup.address}
              pickupInfo={`${trip.distance} • ${trip.duration}`}
              dropoffAddress={trip.dropoff.address}
            />

            {/* Trip Metrics */}
            <TripMetrics
              distance={trip.distance}
              duration={trip.duration}
              price={trip.price}
              className="mt-4"
            />
          </View>

          {/* Payment Button */}
          <View className="mt-6">
            <Button
              variant="contained"
              className="py-3 bg-[#002B5B]"
              onPress={onPayment}
              leftIcon={
                <FontAwesome6 name="stripe-s" size={20} color="white" />
              }>
              Pay with Stripe
            </Button>
          </View>
        </View>
      </BottomSheetScrollView>
    </BottomSheetModal>
  )
})

export default RequestAcceptedSheet

// Method to present the modal
export const presentRequestAcceptedSheet = (
  bottomSheetModalRef: React.RefObject<BottomSheetModal>
) => {
  bottomSheetModalRef.current?.present()
}

// Method to dismiss the modal
export const dismissRequestAcceptedSheet = (
  bottomSheetModalRef: React.RefObject<BottomSheetModal>
) => {
  bottomSheetModalRef.current?.dismiss()
}

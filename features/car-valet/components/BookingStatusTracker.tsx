import React from 'react'
import { View } from 'react-native'
import colors from '@/lib/colors'
import Entypo from '@expo/vector-icons/Entypo'
import Octicons from '@expo/vector-icons/Octicons'
import { Text } from '@/components/ui/text'

export type BookingStatus = 'received' | 'assistant' | 'en-route' | 'complete'
const steps = [
  { status: 'received', title: 'Request Received' },
  { status: 'assistant', title: 'Assistant on the way' },
  { status: 'en-route', title: 'En route to destination' },
  { status: 'complete', title: 'Complete' },
]

export type StatusStep = {
  id: number
  date: string
  receivedTime: string | null
  assistantTime: string | null
  enRouteTime: string | null
  completeTime: string | null
  status: BookingStatus
}

type BookingStatusTrackerProps = {
  data: StatusStep
}

const isFinished = (status: BookingStatus, step: string) => {
  switch (step) {
    case 'received':
      return !!status
    case 'assistant':
      return !!status && status !== 'received'
    case 'en-route':
      return status === 'en-route' || status === 'complete'
    case 'complete':
      return status === 'complete'
    default:
      return false
  }
}

const BookingStatusTracker: React.FC<BookingStatusTrackerProps> = ({
  data,
}) => {
  return (
    <View className="bg-white rounded-2xl p-6 shadow-md">
      {steps.map((step, index) => (
        <View key={index} className="flex-row">
          {/* Left column with circle and line */}
          <View className="items-center mr-4">
            {/* Circle indicator */}
            {isFinished(data.status, step.status) ? (
              <Octicons
                name="check-circle-fill"
                size={24}
                className="bg-white"
                color={colors.primary}
              />
            ) : (
              <Entypo name="circle" size={24} color={colors.primary} />
            )}

            {/* Connecting line (not for the last item) */}
            {index < steps.length - 1 && (
              <View className={`w-0.5 h-16 bg-primary`} />
            )}
          </View>

          {/* Right column with text */}
          <View className="flex-1 mb-4">
            <Text className={`font-bold text-base text-primary`}>
              {step.title}
            </Text>
            <Text className="text-gray-500 text-sm">
              {data.date} {step.status === 'received' && data.receivedTime}
              {step.status === 'assistant' && data.assistantTime}
              {step.status === 'en-route' && data.enRouteTime}
              {step.status === 'complete' && data.completeTime}
            </Text>
          </View>
        </View>
      ))}
    </View>
  )
}

export default BookingStatusTracker

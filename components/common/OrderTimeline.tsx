import React from 'react'
import { View } from 'react-native'
import { Text } from '@/components/ui/text'
import colors from '@/lib/colors'
import { Feather } from '@expo/vector-icons'

export type OrderStep = {
  title: string
  timestamp: string
  isCompleted: boolean
}

type OrderTimelineProps = {
  steps: OrderStep[]
}

const OrderTimeline: React.FC<OrderTimelineProps> = ({ steps }) => {
  return (
    <View>
      {steps.map((step, index) => (
        <View key={index} className="flex-row">
          <View className="items-center">
            <View
              className={`w-8 h-8 rounded-full items-center justify-center ${
                step.isCompleted ? 'bg-primary' : 'bg-white border-primary border'
              }`}>
              {step.isCompleted && (
                <Feather name="check" size={20} color="white" />
              )}
            </View>

            {index < steps.length - 1 && (
              <View
                className={`w-[2px] ${step.isCompleted ? 'h-16' : 'h-12'} bg-primary`}
              />
            )}
          </View>

          <View className="ml-4 flex-1">
            {step.isCompleted && (
              <>
                <Text className="text-base font-Urbanist600 text-primary">
                  {step.title}
                </Text>
                {step.timestamp && (
                  <Text className="text-gray04 text-sm font-Urbanist400 mt-1">
                    {step.timestamp}
                  </Text>
                )}
              </>
            )}
            {!step.isCompleted && (
              <Text className="text-base font-Urbanist600 text-primary">
              {step.title}
            </Text>
             
            )}
          </View>
        </View>
      ))}
    </View>
  )
}

export default OrderTimeline

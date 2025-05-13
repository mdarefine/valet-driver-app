import React from 'react'
import { View, TouchableOpacity, Image, Alert } from 'react-native'
import { Text } from '@/components/ui/text'
import { Ionicons } from '@expo/vector-icons'
import colors from '@/lib/colors'
import { TaskItem } from './types'

interface AssignedTaskCardProps {
  task: TaskItem;
  onAcceptPress: (taskId: string) => void;
  onRejectPress: (taskId: string) => void;
}

const AssignedTaskCard: React.FC<AssignedTaskCardProps> = ({
  task,
  onAcceptPress,
  onRejectPress
}) => {
  return (
    <View className="mb-4 bg-white rounded-xl overflow-hidden shadow-sm p-4 border border-gray-200">
      <View className="flex-row justify-between items-center mb-3 pb-2 ">
        <View className="flex-row items-center">
          <Image
            source={{ uri: task.userImage }}
            className="w-12 h-12 rounded-full mr-3"
          />
          <View>
            <Text className="font-semibold text-default">{task.userName}</Text>
            <Text className="text-[13px] font-semibold text-subtle mb-1 tracking-wide">{task.vehicleModel} - {task.vehiclePlate}</Text>
          </View>
        </View>

        <View className="bg-[#FFF7E9] px-5 py-1 rounded-full">
          <Text className="text-sm  text-[#FFA04A] font-medium">Assigned</Text>
        </View>
      </View>
      <View className="flex-row items-center mb-4 border-y border-gray-200 py-5">
        <Ionicons name="calendar-outline" size={24} color={colors.primary} />
        <Text className="ml-3 text-lg text-default">{task.time}, {task.date}</Text>
      </View>
      <View className="flex-row items-start pb-6 border-b border-gray-200">
        <View className="mr-4 items-center pt-1">
          <View className="w-8 h-8 rounded-full bg-[#E6F7F1] items-center justify-center">
            <View className="w-4 h-4 rounded-full bg-[#4ADE80] items-center justify-center">
              <View className="w-2 h-2 rounded-full bg-white" />
            </View>
          </View>
          <View className="h-20 justify-between flex-col items-center my-1">
            {Array.from({ length: 4 }).map((_, idx) => (
              <View key={`top-dot-${idx}`} className="w-[1.5px] h-[4px] bg-gray-300 my-[1px] rounded-full" />
            ))}
            <View className="w-2 h-2 rounded-full bg-gray-300 my-[2px]" />
            {Array.from({ length: 4 }).map((_, idx) => (
              <View key={`bottom-dot-${idx}`} className="w-[1.5px] h-[4px] bg-gray-300 my-[1px] rounded-full" />
            ))}
          </View>
          <View className="w-8 h-8 rounded-full bg-[#FEECEF] items-center justify-center mt-1">
            <Ionicons name="location" size={24} color="#F43F5E" />
          </View>
        </View>
        <View className="flex-1">
          <View className="mb-6">
            <Text className="text-[13px] font-semibold text-gray-400 uppercase mb-1 tracking-wide">
              PICKUP
            </Text>
            <Text className="text-base text-[#111827] font-semibold">{task.pickupLocation}</Text>
            <View className="bg-[#E6F7F1] px-3 py-[4px] rounded-full self-start mt-2">
              <Text className="text-xs font-semibold text-[#10B981]">{task.distance}</Text>
            </View>
          </View>
          <View>
            <Text className="text-[13px] font-semibold text-gray-400 uppercase mt-4 mb-1 tracking-wide">
              DROP-OFF
            </Text>
            <Text className="text-base text-[#111827] font-semibold">{task.dropOffLocation}</Text>
          </View>
        </View>
      </View>
      <View className="flex-row pt-6 pb-2">
        <TouchableOpacity
          className="flex-1 py-1.5 border border-[#E94A47] rounded-lg items-center justify-center mr-2"
          onPress={() => onRejectPress(task.id)}
        >
          <Text className="text-[#E94A47] font-medium">Reject</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="flex-1 py-1.5 bg-[#00296B] rounded-lg items-center justify-center ml-2"
          onPress={() => onAcceptPress(task.id)}
        >
          <Text className="text-white font-medium">Accept</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default AssignedTaskCard

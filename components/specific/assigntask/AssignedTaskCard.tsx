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
    <View className="mb-4 bg-white rounded-xl overflow-hidden shadow-sm p-4">
      {/* User and Vehicle Info */}
      <View className="flex-row justify-between items-center mb-3">
        <View className="flex-row items-center">
          <Image 
            source={{ uri: task.userImage }} 
            className="w-12 h-12 rounded-full mr-3"
          />
          <View>
            <Text className="font-semibold text-default">{task.userName}</Text>
            <Text className="text-xs text-subtle">{task.vehicleModel} - {task.vehiclePlate}</Text>
          </View>
        </View>
        
        <View className="bg-[#FFF7E9] px-3 py-1 rounded-full">
          <Text className="text-xs text-[#FFA04A] font-medium">Assigned</Text>
        </View>
      </View>

      {/* Date Time */}
      <View className="flex-row items-center mb-4">
        <Ionicons name="calendar-outline" size={20} color={colors.subtle} />
        <Text className="ml-2 text-sm text-default">{task.time}, {task.date}</Text>
      </View>

      {/* Pickup and Dropoff */}
      <View className="mb-4">
        {/* Pickup */}
        <View className="flex-row mb-4">
          <View className="items-center mr-3">
            <View className="w-5 h-5 rounded-full bg-[#4CBB17] items-center justify-center" />
            <View className="h-14 w-[1px] bg-slate-200 my-1" />
          </View>
          
          <View>
            <Text className="text-xs text-subtle mb-1">PICKUP</Text>
            <Text className="text-sm text-default mb-1">{task.pickupLocation}</Text>
            <View className="bg-[#F2F6F5] self-start rounded-md px-2 py-1">
              <Text className="text-xs text-green-700">
                {task.distance} - {task.duration} EST
              </Text>
            </View>
          </View>
        </View>
        
        {/* Dropoff */}
        <View className="flex-row">
          <View className="items-center mr-3">
            <View className="w-5 h-5 rounded-full bg-[#E94A47] items-center justify-center" />
          </View>
          
          <View>
            <Text className="text-xs text-subtle mb-1">DROP-OFF</Text>
            <Text className="text-sm text-default">{task.dropOffLocation}</Text>
          </View>
        </View>
      </View>

      {/* Action Buttons */}
      <View className="flex-row mt-2">
        <TouchableOpacity 
          className="flex-1 py-3 border border-[#E94A47] rounded-lg items-center justify-center mr-2"
          onPress={() => onRejectPress(task.id)}
        >
          <Text className="text-[#E94A47] font-medium">Reject</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          className="flex-1 py-3 bg-[#00296B] rounded-lg items-center justify-center ml-2"
          onPress={() => onAcceptPress(task.id)}
        >
          <Text className="text-white font-medium">Accept</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default AssignedTaskCard

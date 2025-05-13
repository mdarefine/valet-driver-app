import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import { Text } from '@/components/ui/text'
import { Ionicons } from '@expo/vector-icons'
import colors from '@/lib/colors'
import { TaskItem } from './types'

interface UpcomingTaskCardProps {
  task: TaskItem;
  onTaskPress: (taskId: string) => void;
  onStartPress: (taskId: string, event: any) => void;
}

const UpcomingTaskCard: React.FC<UpcomingTaskCardProps> = ({
  task,
  onTaskPress,
  onStartPress
}) => {
  return (
    <TouchableOpacity
      key={task.id}
      className="mb-4 bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm"
      onPress={() => onTaskPress(task.id)}
      activeOpacity={0.9}
    >
      <View className="mx-4 py-5 flex-row justify-between items-center  border-b border-gray-100 ">
        <View className="flex-row items-center">
          <Ionicons name="calendar-outline" size={24} color={colors.primary} />
          <Text className="ml-4 text-lg text-gray-700 font-medium">
            {task.time}, {task.date}
          </Text>
        </View>
        <TouchableOpacity
          className="flex-row items-center border  px-5 py-[5px] rounded-full bg-white"
          style={{
            borderColor: colors.primary,
          }}
          onPress={(e) => onStartPress(task.id, e)}

        >
          <Ionicons name="play" size={14} color={colors.primary} />
          <Text className="ml-1 text-sm font-semibold text-primary">Start</Text>
        </TouchableOpacity>
      </View>
      <View className="px-4 py-6">
        <View className="flex-row items-start pb-6">
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
        <View className="flex-row items-center justify-between pt-4 border-t border-gray-100">
          <View>
            <Image
              source={require('@/assets/images/home/car-black-side-silhouette (1).png')}
              className=" resize-contain"
            />
          </View>
          <View className="flex-col gap-1 items-center">
            <Text className="text-md text-placeholder font-bold">DISTANCE</Text>
            <Text className="text-lg font-semibold text-subtitle">{task.distance}</Text>
          </View>
          <View className="flex-col gap-1 items-center">
            <Text className="text-md text-placeholder font-bold">TIME</Text>
            <Text className="text-lg font-semibold text-subtitle">{task.duration}</Text>
          </View>
          <View className="flex-col gap-1 items-center">
            <Text className="text-md text-placeholder font-bold">PRICE</Text>
            <Text className="text-lg font-semibold text-subtitle">{task.price}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>

  )
}

export default UpcomingTaskCard

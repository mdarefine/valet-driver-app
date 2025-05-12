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
      className="mb-4 bg-white rounded-lg overflow-hidden shadow-sm"
      onPress={() => onTaskPress(task.id)}
      activeOpacity={0.7}
    >
      <View className="p-2 pb-2">
        <View className="flex-row justify-between items-center">
          <View className="flex-row items-center">
            <Ionicons name="calendar-outline" size={20} color={colors.subtle} />
            <Text className="ml-2 text-[15px] text-gray-700">{task.time}, {task.date}</Text>
          </View>
          <TouchableOpacity
            className="bg-gray-100 rounded-full px-4 py-1 flex-row items-center"
            style={{ backgroundColor: colors.background.primary }}
            onPress={(e) => onStartPress(task.id, e)}
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
                  {task.distance} • {task.duration} EST
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

          <View className="w-9 h-9 justify-center items-center">
            <Image
              source={require('@/assets/images/home/car-black-side-silhouette (1).png')}
              className="w-9 h-6 resize-contain"
            />
          </View>
          <View className="flex-col items-center">
            {/* <Ionicons name="car-outline" size={20} color={colors.subtle} /> */}
            <Text className="text-[13px] text-gray-700 font-medium ml-2">DISTANCE</Text>
            <Text className="text-[13px] font-bold ml-1">{task.distance}</Text>
          </View>

          <View className="flex-col items-center">
            {/* <Ionicons name="time-outline" size={18} color={colors.subtle} /> */}
            <Text className="text-[13px] text-gray-700 font-medium ml-1">TIME</Text>
            <Text className="text-[13px] font-bold ml-1">{task.duration}</Text>
          </View>

          <View className="flex-col items-center">
            {/* <Ionicons name="pricetag-outline" size={18} color={colors.subtle} /> */}
            <Text className="text-[13px] text-gray-700 font-medium ml-1">PRICE</Text>
            <Text className="text-[13px] font-bold ml-1">{task.price}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default UpcomingTaskCard

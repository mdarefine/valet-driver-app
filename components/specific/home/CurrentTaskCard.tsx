import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Text } from '@/components/ui/text';
import { Ionicons } from '@expo/vector-icons';
import colors from '@/lib/colors';

interface TaskData {
  id: string;
  customerName: string;
  vehicleInfo: string;
  dateTime: string;
  pickupLocation: string;
  distanceTime: string;
  dropoffLocation: string;
  status: string;
  profileImage?: string;
}

interface CurrentTaskProps {
  data: TaskData;
  onAccept: () => void;
  onReject: () => void;
}

const CurrentTaskCard: React.FC<CurrentTaskProps> = ({
  data,
  onAccept,
  onReject
}) => {
  return (
    <View className="bg-white rounded-xl overflow-hidden ">
      <View className="p-4 pb-3 flex-row items-center justify-between">
        <View className="flex-row items-center">
          <Image
            source={{ uri: data?.profileImage }}
            className="w-10 h-10 rounded-full mr-3"
          />
          <View>
            <Text className="text-gray-800 font-medium">{data.customerName}</Text>
            <Text className="text-gray-500 text-sm">{data.vehicleInfo}</Text>
          </View>
        </View>

        <View className="bg-orange-50 rounded-full px-3 py-1 border border-orange-50">
          <Text className="text-orange-500 text-xs font-medium">{data.status === 'assigned' ? 'Assigned' : data.status}</Text>
        </View>
      </View>

      <View className="mx-4 py-4 flex-row items-center border-y text-lg border-gray-100">
        <Ionicons name="calendar-outline" size={24} color="#00296B" />
        <Text className="ml-3 text-gray-700 ">{data.dateTime}</Text>
      </View>

      <View className="px-4 py-4">
        <View className="flex-row items-start mb-4">
          {/* Left Column: Icons & Connector */}
          <View className="mr-4 items-center pt-1">
            {/* Pickup Icon */}
            <View className="w-8 h-8 rounded-full bg-[#E6F7F1] items-center justify-center">
              <View className="w-4 h-4 rounded-full bg-[#4ADE80] items-center justify-center">
                <View className="w-2 h-2 rounded-full bg-white" />
              </View>
            </View>

            {/* Dotted line with center dot */}
            <View className="h-20 justify-between flex-col items-center my-1">
              {Array.from({ length: 4 }).map((_, idx) => (
                <View key={`top-dot-${idx}`} className="w-[1.5px] h-[4px] bg-gray-300 my-[1px] rounded-full" />
              ))}

              {/* Center circle (dot) */}
              <View className="w-2 h-2 rounded-full bg-gray-300 my-[2px]" />

              {Array.from({ length: 4 }).map((_, idx) => (
                <View key={`bottom-dot-${idx}`} className="w-[1.5px] h-[4px] bg-gray-300 my-[1px] rounded-full" />
              ))}
            </View>

            {/* Drop-off Icon */}
            <View className="w-8 h-8 rounded-full bg-[#FEECEF] items-center justify-center mt-1">
              <Ionicons name="location" size={24} color="#F43F5E" />
            </View>
          </View>

          {/* Right Column: Location Info */}
          <View className="flex-1">
            {/* Pickup Info */}
            <View className="mb-6">
              <Text className="text-[13px] font-semibold text-gray-400 uppercase mb-1 tracking-wide">
                PICKUP
              </Text>
              <Text className="text-base text-[#333] font-semibold">{data.pickupLocation}</Text>
              <View className="bg-[#E6F7F1] px-3 py-[4px] rounded-full self-start mt-2">
                <Text className="text-xs font-semibold text-[#10B981]">{data.distanceTime}</Text>
              </View>
            </View>

            {/* Drop-off Info */}
            <View>
              <Text className="text-[13px] font-semibold text-gray-400 uppercase mt-4 mb-1 tracking-wide">
                DROP-OFF
              </Text>
              <Text className="text-base text-[#333] font-semibold">{data.dropoffLocation}</Text>
            </View>
          </View>
        </View>

        <View className="flex-row mt-2 gap-5">
          <TouchableOpacity
            className="flex-1 py-1.5 border border-red-200 rounded-md items-center"
            onPress={onReject}
          >
            <Text className="text-red-500 font-medium">Reject</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="flex-1 py-1.5 bg-[#00296B] rounded-md items-center"
            onPress={onAccept}
          >
            <Text className="text-white font-medium">Accept</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CurrentTaskCard;

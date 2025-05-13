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
      {/* Customer Info */}
      <View className="p-4 pb-3 flex-row items-center justify-between">
        <View className="flex-row items-center">
          <Image 
            source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
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
      
      {/* Date Time */}
      <View className="px-4 py-2 flex-row items-center border-y border-gray-100">
        <Ionicons name="calendar-outline" size={18} color="#00296B" />
        <Text className="ml-2 text-gray-700 text-sm">{data.dateTime}</Text>
      </View>
      
      {/* Pickup/Dropoff */}
      <View className="px-4 py-4">
        <View className="flex-row items-start mb-4">
          <View className="mr-3 items-center">
            <View className="w-6 h-6 rounded-full bg-green-100 items-center justify-center">
              <View className="w-3 h-3 rounded-full bg-green-500" />
            </View>
            <View className="h-14 w-[1px] bg-gray-200 my-1" />
            <View className="w-6 h-6 rounded-full bg-red-100 items-center justify-center">
              <View className="w-3 h-3 rounded-full bg-red-500" />
            </View>
          </View>
          
          <View className="flex-1">
            <View className="mb-4">
              <Text className="text-xs text-gray-400 uppercase mb-0.5">Pickup</Text>
              <Text className="text-sm font-medium text-gray-800">{data.pickupLocation}</Text>
              <View className="bg-green-50 self-start rounded px-2 py-0.5 mt-1">
                <Text className="text-[11px] text-green-700">{data.distanceTime}</Text>
              </View>
            </View>
            
            <View>
              <Text className="text-xs text-gray-400 uppercase mb-0.5">Drop-off</Text>
              <Text className="text-sm font-medium text-gray-800">{data.dropoffLocation}</Text>
            </View>
          </View>
        </View>
        
        {/* Buttons */}
        <View className="flex-row mt-2 space-x-3">
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

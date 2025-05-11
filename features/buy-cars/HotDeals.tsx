import React from 'react';
import {
  View,
  Text,
  Pressable,
  Dimensions,
} from 'react-native';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import colors from '@/lib/colors';

type CarItem = {
  id: string;
  brand: string;
  model: string;
  price: number;
  image: any;
  isDeal?: boolean;
  isRecommended?: boolean;
};

type HotDealsProps = {
  cars: CarItem[];
  limit?: number;
  showViewAll?: boolean;
};

export const HotDeals = ({ cars, limit, showViewAll = true }: HotDealsProps) => {
  const router = useRouter();
  const displayedCars = limit ? cars.slice(0, limit) : cars;
  const numColumns = limit ? 2 : 2; // Same number of columns for both views
  const itemWidth = (Dimensions.get('window').width - (limit ? 48 : 48)) / numColumns;

  return (
    <View className={limit ? "mt-6" : "mt-0"}>
      {showViewAll && (
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-base font-semibold">Hot Deals</Text>
          <Pressable onPress={() => router.push(`/buy-cars/hot-deal`)}>
            <Text style={{ color: colors.primary }} className="font-medium">View All</Text>
          </Pressable>
        </View>
      )}
      
      <View className={`flex-row ${!limit ? 'flex-wrap' : ''} justify-between gap-4`}>
        {displayedCars.map((car) => (
          <Pressable
            key={car.id}
            className={`${!limit ? 'mb-4' : ''}`}
            style={{ width: itemWidth }}
            onPress={() => router.push(`/buy-cars/car-details/${car.id}` as any)}
          >
            <View className="rounded-lg overflow-hidden relative" style={{ backgroundColor: colors.input.gray }}>
              <Image 
                source={car.image} 
                style={{ height: limit ? 128 : 128, width: '100%' }} 
                contentFit="cover" 
              />
              <Pressable 
                className="absolute top-2 right-2 rounded-full p-1" 
                style={{ backgroundColor: `${colors.textwhite}CC` }}
                onPress={(e) => {
                  e.stopPropagation(); // Prevent triggering the parent pressable
                  // Handle favorite toggle logic here
                }}
              >
                <Ionicons name="heart-outline" size={20} color={colors.gray03} />
              </Pressable>
              <View className="absolute bottom-2 left-2 rounded-full px-2 py-0.5" style={{ backgroundColor: `${colors.textdark}B3` }}>
                <Text className="text-xs font-medium" style={{ color: colors.textwhite }}>360°</Text>
              </View>
            </View>
            <Text className="mt-2 font-medium">
              {car.brand} {car.model}
            </Text>
            <Text className="font-bold">${car.price.toLocaleString()}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default HotDeals;

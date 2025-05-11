import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import colors from '@/lib/colors';

type Brand = {
  id: string;
  name: string;
  logo: any;
};

type PopularBrandsProps = {
  brands: Brand[];
  limit?: number;
  showViewAll?: boolean;
};

export const PopularBrands = ({ brands, limit, showViewAll = true }: PopularBrandsProps) => {
  const router = useRouter();
  const displayedBrands = limit ? brands.slice(0, limit) : brands;

  return (
    <View className="mt-4 ">
      {showViewAll && (
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-base font-semibold">Popular Brands</Text>
          <Pressable onPress={() => router.push(`/buy-cars/popular-brands`)}>
            <Text className="text-blue-900 font-medium">View All</Text>
          </Pressable>
        </View>
      )}
      <View className={`flex-row ${!limit ? 'flex-wrap' : 'justify-between'}`}>
        {displayedBrands.map((brand) => (
          <TouchableOpacity 
            key={brand.id} 
            className={`${!limit ? 'w-1/4' : ''} items-center ${!limit ? 'mb-6' : ''}`}
          >
            <View
              className={`${!limit ? 'w-[60px] h-[60px]' : 'w-16 h-16 rounded-full'} items-center justify-center mb-2`}
              style={limit ? { backgroundColor: colors.input.gray } : {}}
            >
              <Image
                source={brand.logo}
                style={{ width: limit ? 36 : 50, height: limit ? 36 : 50 }}
                contentFit="contain"
              />
            </View>
            <Text className="text-sm text-center">{brand.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default PopularBrands;

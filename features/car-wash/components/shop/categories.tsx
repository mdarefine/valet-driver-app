import React from 'react'
import {
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native'

import InteriorImg from '@/assets/images/shop/categories/Interior.png'
import ExteriorImg from '@/assets/images/shop/categories/Exterior.png'
import TechImg from '@/assets/images/shop/categories/Tech.png'
import PerformanceImg from '@/assets/images/shop/categories/Performance.png'
import ToolsImg from '@/assets/images/shop/categories/Tools.png'
import CarCareImg from '@/assets/images/shop/categories/car-care.png'
import BabyCarSeatImg from '@/assets/images/shop/categories/baby-car-seat 1.png'
import SafetyImg from '@/assets/images/shop/categories/Tools.png'
import { Text } from '@/components/ui/text'

const categories = [
  { name: 'Interior\nAccessories', image: InteriorImg },
  { name: 'Exterior\nAccessories', image: ExteriorImg },
  { name: 'Tech &\nElectronics', image: TechImg },
  { name: 'Performance &\nMaintenance', image: PerformanceImg },
  { name: 'Safety &\nSecurity', image: SafetyImg },
  { name: 'Car Care &\nCleaning', image: CarCareImg },
  { name: 'Kids & Pets\nAccessories', image: BabyCarSeatImg },
  { name: 'Tools &\nGarage', image: ToolsImg },
]

const { width: screenWidth } = Dimensions.get('window')
const NUM_COLUMNS = 4
const ITEM_WIDTH = screenWidth / NUM_COLUMNS

const Categories = () => {
  return (
    <View className="w-full mt-4">
      <Text className="text-2xl font-Urbanist500 mb-4">Categories</Text>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.name}
        numColumns={NUM_COLUMNS}
        scrollEnabled={false}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              flex: 1,
              alignItems: 'center',
              marginBottom: 24,
              maxWidth: ITEM_WIDTH,
            }}>
            <Image
              source={item.image}
              style={{ width: 70, height: 70, marginBottom: 10 }}
              resizeMode="contain"
            />
            <Text
              className="text-center text-black"
              style={{ fontSize: 14, lineHeight: 18 }}
              numberOfLines={2}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default Categories

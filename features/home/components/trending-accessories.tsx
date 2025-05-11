import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import TrendingAccessoriesItem from './trending-accessories-item'

const TrendingAccessories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerClassName="gap-5">
      <TrendingAccessoriesItem />
      <TrendingAccessoriesItem />
      <TrendingAccessoriesItem />
      <TrendingAccessoriesItem />
    </ScrollView>
  )
}

export default TrendingAccessories

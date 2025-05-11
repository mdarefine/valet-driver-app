import React, { useState } from 'react'
import { View, TouchableOpacity } from 'react-native'

type CarouselStackProps = {
  activeIndex: number
  count: number
  setActiveIndex?: (index: number) => void
}
const CarouselStack = ({
  activeIndex,
  count,
  setActiveIndex,
}: CarouselStackProps) => {
  return (
    <View className="flex-row items-center justify-center w-1/5 h-5 mx-auto mt-3">
      {Array.from({ length: count }).map((_, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => setActiveIndex && setActiveIndex(index)}
          className={`flex-1 h-1.5 ${
            index === 0 ? 'rounded-l-lg' : ''
          } ${index === count - 1 ? 'rounded-r-lg' : ''} ${
            activeIndex == index ? 'bg-blue-900' : 'bg-gray-300'
          }`}
        />
      ))}
    </View>
  )
}

export default CarouselStack

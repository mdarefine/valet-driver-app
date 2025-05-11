import React, { useRef, useState } from 'react'
import { View, Image, Dimensions } from 'react-native'
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel'
import CarSample from '@/assets/images/home/car-sample.png'
import CarouselStack from '@/components/common/carousel-stack'

const { width: screenWidth } = Dimensions.get('window')

const MyVehicle = () => {
  const carouselRef = useRef<ICarouselInstance | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const vehicles = [
    { id: '1', image: CarSample },
    { id: '2', image: CarSample },
    { id: '3', image: CarSample },
  ]

  return (
    <View className="flex-1">
      <Carousel
        ref={carouselRef}
        loop={false}
        width={screenWidth * 0.922}
        height={250}
        data={vehicles}
        onSnapToItem={(index) => setCurrentIndex(index)}
        renderItem={({ item }) => (
          <View className="flex-1 items-center py-3">
            <Image
              className="w-full h-64 object-cover rounded-lg"
              source={item.image}
              resizeMode="cover"
            />
          </View>
        )}
      />
      <CarouselStack
        activeIndex={currentIndex}
        count={vehicles?.length}
        setActiveIndex={(index) => {
          setCurrentIndex(index)
          carouselRef?.current?.scrollTo({ index, animated: true })
        }}
      />
    </View>
  )
}

export default MyVehicle

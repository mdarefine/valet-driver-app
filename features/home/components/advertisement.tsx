import { View, Image, Dimensions } from 'react-native'
import AdvertiseImage from '@/assets/images/home/advertise.png'
import React, { useRef, useState } from 'react'
import CarouselStack from '@/components/common/carousel-stack'
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel'

const { width: screenWidth } = Dimensions.get('window')
const Advertisement = () => {
  const carouselRef = useRef<ICarouselInstance | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const vehicles = [
    { id: '1', image: AdvertiseImage },
    { id: '2', image: AdvertiseImage },
  ]
  return (
    <View>
      <Carousel
        ref={carouselRef}
        loop={false}
        width={screenWidth * 0.922}
        height={160}
        data={vehicles}
        snapEnabled={true}
        onSnapToItem={(index) => setCurrentIndex(index)}
        renderItem={({ item }) => (
          <View className="flex-1 items-center py-3">
            <Image
              className="w-full h-40 object-cover rounded-lg"
              source={item.image}
              resizeMode="cover"
            />
          </View>
        )}
      />
      <CarouselStack
        activeIndex={currentIndex}
        count={vehicles.length}
        setActiveIndex={(index: number) => {
          setCurrentIndex(index)
          carouselRef?.current?.scrollTo({ index: index, animated: true })
        }}
      />
    </View>
  )
}

export default Advertisement

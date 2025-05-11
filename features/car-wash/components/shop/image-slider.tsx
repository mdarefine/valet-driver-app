import { View, Image, Dimensions } from 'react-native'
import React, { useRef, useState } from 'react'
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel'
import CarouselStack from '@/components/common/carousel-stack'

const { width: screenWidth } = Dimensions.get('window')

type ImageSliderProps = {
  images: any[]
  height?: number
  width?: number
}

const ImageSlider = ({
  images,
  height = 136,
  width = screenWidth - 32,
}: ImageSliderProps) => {
  const carouselRef = useRef<ICarouselInstance | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  if (!images || images.length === 0) return null

  return (
    <View className="w-full items-center justify-center">
      <View
        className="relative w-full overflow-hidden"
        style={{ height, borderRadius: 12 }}>
        <Carousel
          ref={carouselRef}
          loop={false}
          width={width}
          height={height}
          data={images}
          snapEnabled
          style={{ alignSelf: 'center' }}
          onSnapToItem={setCurrentIndex}
          renderItem={({ item }) => (
              <View
                className="flex-1 items-center justify-center w-full h-full"
                style={{ borderRadius: 12, overflow: 'hidden' }}>
                  <Image
                    className="w-full h-full"
                    source={item.image}
                    resizeMode="contain"
                    style={{ width: '100%', height: '100%', borderRadius: 12 }}
                  />
                  </View>
                )}
        />
        <View
          className="absolute left-0 right-0 items-center"
          style={{ bottom: 6, zIndex: 10 }}>
          <View style={{ width: width * 0.6, alignSelf: 'center' }}>
            <CarouselStack
              activeIndex={currentIndex}
              count={images.length}
              setActiveIndex={(index: number) => {
                setCurrentIndex(index)
                carouselRef?.current?.scrollTo({ index, animated: true })
              }}
            />
          </View>
        </View>
      </View>
    </View>
  )
}

export default ImageSlider

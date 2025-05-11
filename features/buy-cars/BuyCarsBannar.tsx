import React, { useRef, useState } from 'react'
import { View, Dimensions, Pressable, Text, Image } from 'react-native'
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel'
import { banners } from '@/app/(app)/buy-cars/data'
import colors from '@/lib/colors'
import CarouselStack from '@/components/common/carousel-stack'

const { width: screenWidth } = Dimensions.get('window')

type BannerItem = {
    id: string
    image: any
    title: string
    subtitle: string
    discount: string
}

export const BuyCarsBannar = () => {
    const carouselRef = useRef<ICarouselInstance | null>(null)
    const [currentIndex, setCurrentIndex] = useState(0)

    return (
        <View className="px-4 relative">
            <Carousel
                ref={carouselRef}
                loop
                width={screenWidth - 24} 
                height={200}
                data={banners}
                scrollAnimationDuration={1000}
                onSnapToItem={(index) => setCurrentIndex(index)}
                renderItem={({ item }: { item: BannerItem }) => (
                    <View className="flex-1 items-center">
                        <View className="w-full h-full rounded-lg overflow-hidden" style={{ backgroundColor: colors.primary }}>
                            <Image 
                                source={item.image} 
                                className="absolute h-full w-full" 
                                style={{ opacity: 0.6, width: screenWidth - 24, height: 200, borderRadius: 12 }}
                                resizeMode="cover"
                            />
                            <View className="p-6 flex-row justify-between items-center h-full">
                                <View className="flex-1">
                                    <View className="w-24 h-24 rounded-full flex items-center justify-center border" style={{ backgroundColor: `${colors.primary}CC`, borderColor: colors.tertiary }}>
                                        <Text className="text-xs font-bold" style={{ color: colors.textwhite }}>UP TO</Text>
                                        <Text className="text-xl font-bold" style={{ color: colors.textwhite }}>{item.discount}</Text>
                                        <Text className="text-xs font-bold" style={{ color: colors.textwhite }}>DISCOUNT</Text>
                                    </View>
                                </View>
                                <View className="flex-1">
                                    <Text className="text-xl font-bold leading-tight" style={{ color: colors.textwhite }}>{item.title}</Text>
                                    <Text className="text-sm mt-1" style={{ color: `${colors.textwhite}CC` }}>{item.subtitle}</Text>
                                    <Pressable className="rounded-md px-4 py-1.5 mt-3 self-start" style={{ backgroundColor: colors.textwhite }}>
                                        <Text className="text-sm font-bold" style={{ color: colors.textdark }}>BOOK NOW</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                    </View>
                )}
            />
            <View className="absolute bottom-1 left-0 right-0">
                <CarouselStack
                    activeIndex={currentIndex}
                    count={banners.length}
                    setActiveIndex={(index) => {
                        setCurrentIndex(index)
                        carouselRef?.current?.scrollTo({ index, animated: true })
                    }}
                />
            </View>
        </View>
    )
}

export default BuyCarsBannar

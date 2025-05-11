import { View } from 'react-native'
import React from 'react'
import { Text } from '@/components/ui/text'
import Button from '@/components/ui/button'

type HomeCardProps = {
  title: string
  count?: number
  viewAllClick: () => void
  children: React.ReactNode
}
const HomeCard = ({ title, count, viewAllClick, children }: HomeCardProps) => {
  return (
    <View className="gap-3 my-2">
      <View className="flex-row items-center justify-between">
        <Text className="font-Urbanist500 text-xl text-subtitle">
          {title} {count && ': '}
          {count && (
            <Text className="font-Urbanist600 text-secondary text-xl">
              {count}
            </Text>
          )}
        </Text>
        <Button variant="text" onPress={viewAllClick}>
          View All
        </Button>
      </View>
      <View>{children}</View>
    </View>
  )
}

export default HomeCard

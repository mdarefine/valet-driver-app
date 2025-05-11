import { Pressable, View } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign'
import { Text } from '@/components/ui/text'
import colors from '@/lib/colors'

type UpcomingItemProps = {
  title: string
  value: string
  onPress: () => void
  icon: React.ReactNode
}
const UpcomingItem = ({ title, value, onPress, icon }: UpcomingItemProps) => {
  return (
    <Pressable onPress={onPress}>
      <View
        className="flex-row items-center justify-between bg-white py-4 px-3 rounded-lg"
        style={{
          shadowColor: '#0956C0',
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.12,
          shadowRadius: 6,
        }}>
        <View className="flex-row items-center gap-3">
          {icon}
          <View className="flex-col gap-0.5">
            <Text className="text-textdark font-Urbanist500 text-base">
              {title}
            </Text>
            <Text className="text-gray01 text-sm font-Urbanist400">
              {value}
            </Text>
          </View>
        </View>

        <AntDesign
          name="right"
          size={20}
          color={colors.background.disable}
          onPress={onPress}
        />
      </View>
    </Pressable>
  )
}

export default UpcomingItem

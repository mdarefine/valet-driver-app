import { TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Text } from '@/components/ui/text'

type Props = {
  title: string
  icon: React.ReactNode
  onPress?: () => void
}
const AppFeatureDetail = ({ title, icon, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} className="py-2">
      <View className="flex justify-center items-center gap-1">
        <View className="bg-light rounded-full p-4 w-[72px] h-[72px] flex justify-center items-center ">
          {icon}
        </View>

        <Text className="text-sm text-subtitle font-Urbanist500">{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default AppFeatureDetail

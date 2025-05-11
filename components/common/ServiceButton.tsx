import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Text } from '@/components/ui/text'

const ServiceButton = ({
  icon,
  title,
  onPress,
}: {
  icon: React.ReactNode
  title: string
  onPress: () => void
}) => {
  return (
    <TouchableOpacity
      className="flex-row justify-center items-center gap-2 px-3 py-2 border border-primary rounded-lg bg-light"
      onPress={onPress}>
      {icon}
      <Text className="font-Inter600 text-xs text-primary">{title}</Text>
    </TouchableOpacity>
  )
}

export default ServiceButton

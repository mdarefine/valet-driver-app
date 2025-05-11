import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import cn from '@/lib/utils'
import { Text } from '../ui/text'

const TabBarItem = ({
  title,
  active,
  onPress,
}: {
  title: string
  active: boolean
  onPress: () => void
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={cn(
        `flex-1 items-center justify-center h-12 rounded-full ${active ? 'bg-primary' : ''}`
      )}
      style={[
        active && {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        },
      ]}>
      <Text
        className={cn(
          `text-base font-Urbanist500 ${active ? 'text-white' : 'text-primary'}`
        )}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default TabBarItem

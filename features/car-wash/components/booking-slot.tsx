import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import cn from '@/lib/utils'

type BookingSlotProps = {
  title: string
  status?: 'disable' | 'selected' | 'available'
  onPress: () => void
}
const BookingSlot = ({
  title,
  status = 'available',
  onPress,
}: BookingSlotProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        className={cn(
          'border border-primary  p-2 rounded-lg justify-center items-center ',
          status === 'disable'
            ? 'opacity-20'
            : status === 'selected'
              ? ' bg-primary'
              : ''
        )}>
        <Text
          className={cn(
            'text-sm font-Urbanist500 ',
            status === 'selected' ? 'text-white' : 'text-primary'
          )}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default BookingSlot

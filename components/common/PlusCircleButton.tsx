import colors from '@/lib/colors'
import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { TouchableHighlight, View } from 'react-native'

type PlusCircleButtonProps = {
  className?: string
  onPress?: () => void
  [key: string]: any
}

export const PlusCircleButton = ({ className = '', onPress, ...restProps }: PlusCircleButtonProps) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      className={`rounded-full h-16 w-16 bg-primary shadow-lg flex items-center justify-center ${className}`}
      {...restProps}>
      <AntDesign name="plus" size={44} color={colors.light} />
    </TouchableHighlight>
  )
}

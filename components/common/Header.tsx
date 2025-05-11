import React, { ReactNode } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Text } from '@/components/ui/text'
import colors from '@/lib/colors'
import BackButtonIcon from '@/assets/svgs/BackButtonIcon'
import { router } from 'expo-router'
import cn from '@/lib/utils'

interface HeaderProps {
  title: string
  textClassName?: string
  textColor?: string
  centered?: boolean
  leftComponent?: ReactNode
  rightComponent?: ReactNode
  showBackButton?: boolean
  leftText?: string
  rightText?: string
  onLeftPress?: () => void
  onRightPress?: () => void
}

const Header: React.FC<HeaderProps> = ({
  title,
  textClassName = 'font-Urbanist600',
  textColor = 'white',
  centered = false,
  leftComponent,
  rightComponent,
  showBackButton = false,
  leftText,
  rightText,
  onLeftPress,
  onRightPress,
}) => {
  const handleBackPress = () => {
    if (router.canGoBack()) {
      router.back()
    }
  }

  const hasRightContent = rightComponent || rightText

  const hasLeftActionContent = showBackButton || leftComponent || leftText

  return (
    <View
      className="flex-row items-center py-3 px-4 w-full"
      style={{ backgroundColor: colors.primary }}>
      {hasLeftActionContent && (
        <View className="mr-4">
          {showBackButton && (
            <TouchableOpacity onPress={handleBackPress}>
              <BackButtonIcon />
            </TouchableOpacity>
          )}
          {leftComponent && <View>{leftComponent}</View>}
          {leftText && (
            <TouchableOpacity onPress={onLeftPress}>
              <Text className="text-white font-Urbanist600 text-base">
                {leftText}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      )}

      {centered ? (
        <View className="flex-1 items-center">
          {showBackButton ? (
            <TouchableOpacity onPress={handleBackPress}>
              <Text
                className={cn(`text-xl font-Urbanist600`, textClassName)}
                style={{ color: textColor }}>
                {title}
              </Text>
            </TouchableOpacity>
          ) : (
            <Text
              className={cn(`text-xl font-Urbanist600`, textClassName)}
              style={{ color: textColor }}>
              {title}
            </Text>
          )}
        </View>
      ) : (
        <View className="flex-1">
          {showBackButton ? (
            <TouchableOpacity onPress={handleBackPress}>
              <Text
                className={cn(`text-xl font-Urbanist600`, textClassName)}
                style={{ color: textColor }}>
                {title}
              </Text>
            </TouchableOpacity>
          ) : (
            <Text
              className={cn(`text-xl font-Urbanist600`, textClassName)}
              style={{ color: textColor }}>
              {title}
            </Text>
          )}
        </View>
      )}

      {hasRightContent && (
        <View className="items-end">
          {rightComponent && <View>{rightComponent}</View>}
          {rightText && (
            <TouchableOpacity onPress={onRightPress}>
              <Text className="text-white font-Urbanist600 text-base">
                {rightText}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  )
}

export default Header

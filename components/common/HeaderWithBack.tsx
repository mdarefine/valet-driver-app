import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { router } from 'expo-router'
import { Text } from '@/components/ui/text'
import BackButtonIcon from '@/assets/svgs/BackButtonIcon'
import colors from '@/lib/colors'

interface HeaderWithBackProps {
  title: string
  textClassName?: string
}

const HeaderWithBack: React.FC<HeaderWithBackProps> = ({
  title,
  textClassName = 'font-Urbanist600',
}) => {
  const handleBackPress = () => {
    if (router.canGoBack()) {
      router.back()
    }
  }

  return (
    <TouchableOpacity onPress={handleBackPress}>
      <View className="flex-row items-center gap-5">
        <BackButtonIcon onPress={handleBackPress} />

        <Text className={textClassName} style={{ color: 'white' }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default HeaderWithBack

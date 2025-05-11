import React, { ReactNode } from 'react'
import { View } from 'react-native'
import { Text } from '@/components/ui/text'
import colors from '@/lib/colors'

interface EmptyStateProps {
  icon: ReactNode
  title: string
  message: string
  searchTerm?: string
  containerClassName?: string
}

const EmptyState = ({
  icon,
  title,
  message,
  searchTerm,
  containerClassName = "flex-1 justify-center items-center px-8"
}: EmptyStateProps) => {
  return (
    <View className={containerClassName}>
      <View className="rounded-full w-24 h-24 justify-center items-center mb-6" style={{ backgroundColor: colors.dark }}>
        {icon}
      </View>
      <Text className="text-[20px] font-medium mb-2 text-center" style={{ color: colors.default }}>
        {title}
      </Text>
      <Text className="text-[16px] text-center" style={{ color: colors.text.secondary }}>
        {searchTerm ? message.replace('{searchTerm}', searchTerm) : message}
      </Text>
    </View>
  )
}

export default EmptyState

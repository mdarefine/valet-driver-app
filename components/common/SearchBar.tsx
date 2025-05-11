import React from 'react'
import { View, TouchableOpacity, TextInput } from 'react-native'
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'
import colors from '@/lib/colors'

interface SearchBarProps {
  placeholder?: string
  value: string
  onChangeText: (text: string) => void
  startIcon?: React.ReactNode
  endComponent?: React.ReactNode
  containerClassName?: string
  height?: number
  fontSize?: number
  iconSize?: number
  iconColor?: string
  backgroundColor?: string
  elevation?: number
  borderRadius?: number
}

const SearchBar = ({
  placeholder = "Search...",
  value,
  onChangeText,
  startIcon = <Ionicons name="search" size={20} color={colors.text.gray[40]} />,
  endComponent,
  containerClassName = "mx-3 mt-2 mb-2",
  height = 44,
  fontSize = 16,
  iconSize = 20,
  iconColor = colors.text.gray[40],
  backgroundColor = colors.input.gray,
  elevation = 1,
  borderRadius = 12
}: SearchBarProps) => {
  return (
    <View className={`flex-row items-center ${containerClassName}`}>
      <View 
        className="flex-1 flex-row items-center px-3" 
        style={{
          backgroundColor: backgroundColor,
          height: height,
          borderRadius: borderRadius,
          shadowColor: '#000',
          shadowOpacity: 0.05,
          shadowRadius: 4,
          elevation: elevation
        }}
      >
        {startIcon}
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={colors.text.gray[40]}
          className={`flex-1 ml-2`}
          style={{
            height: height,
            fontSize: fontSize,
            color: colors.default,
            paddingVertical: 0
          }}
          value={value}
          onChangeText={onChangeText}
          maxLength={100}
        />
      </View>
      {endComponent}
    </View>
  )
}

export default SearchBar

import { View, Text } from 'react-native'
import React from 'react'
import colors from '@/lib/colors'

const DottedLine = ({ className = '' }: { className?: string }) => {
  return (
    <View
      className={className}
      style={{
        borderRadius: 1,
        borderStyle: 'dotted',
        borderWidth: 1,
        borderColor: colors.border.default,
      }}
    />
  )
}

export default DottedLine

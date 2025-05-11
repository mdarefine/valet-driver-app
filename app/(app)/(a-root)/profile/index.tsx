import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '@/components/common/Header'
import colors from '@/lib/colors'

const Profile = () => {
  return (
    <SafeAreaView
      className="flex-1"
      style={{ backgroundColor: colors.primary }}
      edges={['top']}>
      <Header title="Profile" />
      <View className="flex-1 p-4 bg-white">
        <Text>Profile Content</Text>
      </View>
    </SafeAreaView>
  )
}

export default Profile

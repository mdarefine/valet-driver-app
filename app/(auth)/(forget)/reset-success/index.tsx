import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ImageBackground } from 'expo-image'
import SuccessIcon from '@/assets/svgs/SuccessIcon'
import Button from '@/components/ui/button'
import { router } from 'expo-router'

const ResetSuccess = () => {
  return (
    <ImageBackground
      source={require('@/assets/images/bg-image.png')}
      style={{ flex: 1 }}>
      <SafeAreaView className="flex-1">
        <View className="flex-1 flex justify-center items-center px-5">
          <View className="items-center w-full gap-6">
            <SuccessIcon />
          </View>
          <View className="gap-2 mt-10 ">
            <Text className="font-bold text-3xl text-primary font-Urbanist700 text-center">
              Password Reset Complete
            </Text>
            <Text className="font-Urbanist400 text-base text-primary text-center">
              Password reset successful.{'\n'} Back to sign in with your updated
              password.
            </Text>
          </View>
          <Button
            className="w-full mt-10"
            onPress={() => router.replace('/(auth)/login')}>
            Back to Login Page
          </Button>
        </View>
      </SafeAreaView>
    </ImageBackground>
  )
}

export default ResetSuccess

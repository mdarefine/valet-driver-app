import { View, Text, KeyboardAvoidingView, ScrollView } from 'react-native'
import React from 'react'
import { Image } from '@/components/ui/image'
import { SafeAreaView } from 'react-native-safe-area-context'
import StepStack from '@/components/common/step-stack'
import ResetPassForm from '@/features/auth/forget/form/reset-pass-form'
import LogoIcon from '@/assets/svgs/LogoIcon'
import { ImageBackground } from 'expo-image'

const ResetPassword = () => {
  return (
    <ImageBackground
      source={require('@/assets/images/bg-image.png')}
      style={{ flex: 1 }}>
      <SafeAreaView className="flex-1">
        <KeyboardAvoidingView className="px-10">
          <ScrollView className="w-full h-full">
            <View className="w-full h-full gap-6 pt-6 mt-24">
              <View className="items-center w-full gap-6">
                <LogoIcon />
              </View>
              <View className="gap-2 mt-10">
                <Text className="font-bold text-3xl text-primary font-Urbanist700">
                  Create New Password
                </Text>
                <Text className="font-Urbanist400 text-base text-primary">
                  Enter new a new password . It must be min. 8 characters with a
                  combinations of letters & numbers.
                </Text>
              </View>
              <ResetPassForm />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  )
}

export default ResetPassword

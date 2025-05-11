import { View, Text, KeyboardAvoidingView, ScrollView } from 'react-native'
import React from 'react'
import { Image } from '@/components/ui/image'
import { SafeAreaView } from 'react-native-safe-area-context'
import ForgetPassForm from '@/features/auth/forget/form/forget-pass-form'
import StepStack from '@/components/common/step-stack'
import { ImageBackground } from 'expo-image'
import LogoIcon from '@/assets/svgs/LogoIcon'

const ForgetPassword = () => {
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
                  Forgot your Password?
                </Text>
                <Text className="font-Urbanist400 text-base text-primary">
                  Enter your email address, and we’ll send you a verification
                  code to reset your password.
                </Text>
              </View>
              <ForgetPassForm />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  )
}

export default ForgetPassword

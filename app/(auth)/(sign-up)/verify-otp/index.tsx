import { View, Text, KeyboardAvoidingView, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import EnterOTPForm from '@/features/auth/forget/form/enter-otp-form'
import LogoIcon from '@/assets/svgs/LogoIcon'
import { ImageBackground } from 'expo-image'
import VerifyOtpForm from '@/features/auth/signup/form/verify-otp-form'

const VerifyOtp = () => {
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
                  Account Authentication
                </Text>
                <Text className="font-Urbanist400 text-base text-primary">
                  Please enter the 4-digit verification code that we have sent
                  via the email.
                </Text>
              </View>
              <VerifyOtpForm />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  )
}

export default VerifyOtp

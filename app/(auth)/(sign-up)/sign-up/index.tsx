import { View, Text, KeyboardAvoidingView, ScrollView } from 'react-native'
import React from 'react'
import { Image } from '@/components/ui/image'
import { SafeAreaView } from 'react-native-safe-area-context'
import SignUpForm from '@/features/auth/signup/form/signup-form'
import { ImageBackground } from 'expo-image'
import LogoIcon from '@/assets/svgs/LogoIcon'

const SignUp = () => {
  return (
    <ImageBackground
      source={require('@/assets/images/bg-image.png')}
      style={{ flex: 1 }}>
      <SafeAreaView className="flex-1">
        <KeyboardAvoidingView className="px-10">
          <ScrollView className="w-full h-full">
            <View className="w-full h-full gap-10 pt-6">
              <View className="items-center w-full gap-6 mt-10">
                <LogoIcon />
              </View>
              <View className="gap-2 mt-10">
                <Text className="font-bold text-3xl text-primary font-Urbanist700">
                  Welcome
                </Text>
                <Text className="font-Urbanist400 text-base text-primary">
                  Sign up to explore car deals, manage your vehicles, and access
                  exclusive services effortlessly.
                </Text>
              </View>
              <SignUpForm />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  )
}

export default SignUp

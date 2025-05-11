import {
  View,
  KeyboardAvoidingView,
  ScrollView,
  ImageBackground,
} from 'react-native'
import React from 'react'
import LoginForm from '@/features/auth/login/form/login-form'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Text } from '@/components/ui/text'
import LogoIcon from '@/assets/svgs/LogoIcon'

const Login = () => {
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
                  Sign in to access all the features and services designed to
                  make managing your car effortless.
                </Text>
              </View>
              <LoginForm />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  )
}

export default Login

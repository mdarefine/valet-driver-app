import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ImageBackground } from 'expo-image'
import SuccessIcon from '@/assets/svgs/SuccessIcon'
import Button from '@/components/ui/button'
import { router } from 'expo-router'
import useSession from '@/store/useSession'

const SignUpComplete = () => {
  const { updateIsLoggedIn } = useSession()
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
              Registration successful!
            </Text>
            <Text className="font-Urbanist400 text-base text-primary text-center">
              Your account has been successfully created and is now ready to
              use.
            </Text>
          </View>
          <Button
            className="w-full mt-10"
            onPress={() => {
              router.replace('/(app)/(a-root)')
              updateIsLoggedIn(true)
            }}>
            Go to homepage
          </Button>
        </View>
      </SafeAreaView>
    </ImageBackground>
  )
}

export default SignUpComplete

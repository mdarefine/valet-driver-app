import React from 'react'
import { Stack } from 'expo-router'

const SignUpLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="sign-up/index" />
      <Stack.Screen name="verify-otp/index" />
    </Stack>
  )
}

export default SignUpLayout

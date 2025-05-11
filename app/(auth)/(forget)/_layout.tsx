import React from 'react'
import { Stack } from 'expo-router'

const ForgetLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="forget-pass/index" />
      <Stack.Screen name="enter-otp/index" />
      <Stack.Screen name="reset-pass/index" />
      <Stack.Screen name="reset-success/index" />
    </Stack>
  )
}

export default ForgetLayout

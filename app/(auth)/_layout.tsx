import React from 'react'
import { Redirect, Stack } from 'expo-router'
import useSession from '@/store/useSession'

const AuthLayout = () => {
  const { isLoggedIn } = useSession()

  if (isLoggedIn) {
    return <Redirect href="/(app)/(a-root)" />
  }
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login/index" />
      <Stack.Screen name="(sign-up)" />
      <Stack.Screen name="(forget)" />
    </Stack>
  )
}

export default AuthLayout

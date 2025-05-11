import React from 'react'
import { Redirect, Stack } from 'expo-router'
import HeaderWithBack from '@/components/common/HeaderWithBack'
import colors from '@/lib/colors'
import useSession from '@/store/useSession'

const AppLayout = () => {
  const { isLoggedIn } = useSession()

  if (!isLoggedIn) {
    return <Redirect href="/(auth)/login" />
  }
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
      }}>
      <Stack.Screen name="(a-root)" options={{ headerShown: false }} />
      <Stack.Screen name="car-wash" options={{ headerShown: false }} />
      <Stack.Screen name="car-valet" options={{ headerShown: false }} />
      <Stack.Screen name="car-repair" options={{ headerShown: false }} />
      <Stack.Screen name="car-towing" options={{ headerShown: false }} />
      <Stack.Screen name="shops" options={{ headerShown: false }} />
      <Stack.Screen name="buy-cars" options={{ headerShown: false }} />
      <Stack.Screen name="sell-cars" options={{ headerShown: false }} />
    </Stack>
  )
}

export default AppLayout

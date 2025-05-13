import React from 'react'
import { Redirect, Stack } from 'expo-router'
import HeaderWithBack from '@/components/common/HeaderWithBack'
import colors from '@/lib/colors'
import useSession from '@/store/useSession'
import { StatusBar } from 'expo-status-bar'

const AppLayout = () => {
  const { isLoggedIn } = useSession()

  if (!isLoggedIn) {
    return <Redirect href="/(auth)/login" />
  }
  return (
    <>
      <StatusBar style="dark" backgroundColor={colors.background.primary} />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: colors.background.primary
          }
        }}
      >
        {/* Define our tab routes with (a-root) group */}
        <Stack.Screen name="(a-root)" />
        
        {/* Non-tabbed screens */}
        <Stack.Screen name="car-wash" options={{ headerShown: false }} />
        <Stack.Screen name="car-valet" options={{ headerShown: false }} />
        <Stack.Screen name="car-repair" options={{ headerShown: false }} />
        <Stack.Screen name="car-towing" options={{ headerShown: false }} />
        <Stack.Screen name="shops" options={{ headerShown: false }} />
        <Stack.Screen name="buy-cars" options={{ headerShown: false }} />
        <Stack.Screen name="sell-cars" options={{ headerShown: false }} />
      </Stack>
    </>
  )
}

export default AppLayout

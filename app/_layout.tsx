import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import { Provider } from 'react-native-paper'
import '../global.css'
import 'react-native-reanimated'
import { CartProvider } from '@/store/CartContext'
import { ProductProvider } from '@/store/ProductContext'

import {
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts,
} from '@expo-google-fonts/inter'
import {
  Urbanist_300Light,
  Urbanist_400Regular,
  Urbanist_500Medium,
  Urbanist_600SemiBold,
  Urbanist_700Bold,
} from '@expo-google-fonts/urbanist'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ApolloProvider } from '@apollo/client'
import client from '@/lib/client'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Toast from 'react-native-toast-message'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Urbanist_300Light,
    Urbanist_400Regular,
    Urbanist_500Medium,
    Urbanist_600SemiBold,
    Urbanist_700Bold,
  })

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync()
    }
  }, [loaded, error])

  if (!loaded && !error) {
    return null
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <Provider>
          <ApolloProvider client={client}>
            <ProductProvider>
              <CartProvider>
                <BottomSheetModalProvider>
                  <Stack
                    screenOptions={{ headerShown: false }}
                    initialRouteName="(auth)">
                    <Stack.Screen name="(auth)" />
                    <Stack.Screen name="(app)" />
                  </Stack>
                  <Toast />
                </BottomSheetModalProvider>
              </CartProvider>
            </ProductProvider>
          </ApolloProvider>
        </Provider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  )
}

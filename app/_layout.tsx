import AsyncStorage from '@react-native-async-storage/async-storage'
import NetInfo from '@react-native-community/netinfo'
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister'
import { onlineManager, QueryClientProvider } from '@tanstack/react-query'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { useFonts } from 'expo-font'
import { Slot } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useCallback, useEffect } from 'react'
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native'

import { queryClient } from '@/services'

SplashScreen.preventAutoHideAsync()

const persister = createAsyncStoragePersister({
  storage: AsyncStorage,
  throttleTime: 3000
})

export default function Root() {
  const [fontsLoaded] = useFonts({
    'Inter-Black': require('assets/fonts/Inter-Black.ttf'),
    'Inter-Bold': require('assets/fonts/Inter-Bold.ttf'),
    'Inter-SemiBold': require('assets/fonts/Inter-SemiBold.ttf'),
    'Inter-Medium': require('assets/fonts/Inter-Medium.ttf'),
    'Inter-Regular': require('assets/fonts/Inter-Regular.ttf')
  })

  useEffect(() => {
    return NetInfo.addEventListener(state => {
      onlineManager.setOnline(!!state.isConnected)
    })
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <PersistQueryClientProvider
      onSuccess={() => queryClient.resumePausedMutations().then(() => queryClient.invalidateQueries())}
      persistOptions={{ persister }}
      client={queryClient}
    >
      <QueryClientProvider client={queryClient}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View
            className='flex-1 bg-zircon-50'
            onLayout={onLayoutRootView}
          >
            <Slot />
          </View>
        </TouchableWithoutFeedback>
      </QueryClientProvider>
    </PersistQueryClientProvider>
  )
}

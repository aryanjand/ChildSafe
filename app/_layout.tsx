import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';
import 'react-native-reanimated'
import { useColorScheme } from '@/hooks/useColorScheme';
import { CustomHeader } from '@/components';
import { SafeAreaProvider } from 'react-native-safe-area-context';


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded, error] = useFonts({
    MoreSugar: require('../assets/fonts/MoreSugar-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  const customTheme = {
    ...((colorScheme === 'dark' ? DarkTheme : DefaultTheme)),
    fonts: {
      regular: {
        fontFamily: 'MoreSugar'
      },
    },
  };

  return (
    <SafeAreaProvider>
      <ThemeProvider value={customTheme}>

        <CustomHeader />
        <Stack>
          <Stack.Screen name="index" />
        </Stack>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

import { useEffect } from "react";
import { ThemeProvider } from "styled-components/native";
import { StatusBar } from "expo-status-bar";

import * as SplashScreen from "expo-splash-screen";
import theme from "./src/theme";

import { Routes } from "./src/routes";

import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import { AuthContextProvider } from "@contexts/AuthContext";

import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return null;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <ThemeProvider theme={theme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <AuthContextProvider>
          <Routes />
          <StatusBar style="auto" />
        </AuthContextProvider>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}

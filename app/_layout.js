import { PaperProvider } from "react-native-paper";
import { Stack } from "expo-router";

import AppContextProvider from "../assets/context/AppContextProvider";
import theme from "../assets/theme/theme";

export default function RootLayout () {
  return (
    <AppContextProvider>
      <PaperProvider theme={theme}>
        <Stack screenOptions={{ headerShown: false }} />
      </PaperProvider>
    </AppContextProvider>
  )
}

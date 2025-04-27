import { Stack } from "expo-router";
import { StyleProp } from "react-native";

export default function RootLayout() {
  return (<>
  <Stack
  screenOptions={{
    headerShown: false,
    headerTitleStyle: {
      fontFamily: 'Jersey20',
    },
  }} 
  />
  </>

);
}

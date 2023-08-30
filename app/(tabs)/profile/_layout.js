import { Stack } from "expo-router";

export default function ProfileLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: 'Profile' }} />
      <Stack.Screen name="settings" options={{ headerTitle: 'Profile Settings' }} />
    </Stack>
  )
};

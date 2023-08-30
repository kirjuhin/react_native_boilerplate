import { Stack } from 'expo-router';

export default function ChatLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: "Chat" }} />
      <Stack.Screen name="private" options={{ headerTitle: "Private Chat" }} />
      <Stack.Screen name="group" options={{ headerTitle: "Group Chat" }} />
    </Stack>
  )
};

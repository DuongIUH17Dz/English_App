import { Stack } from 'expo-router';
import { NavigationContainer } from '@react-navigation/native';

export default function RootLayout() {
  return (
    <NavigationContainer>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="signin" />
        <Stack.Screen name="signup" />
        <Stack.Screen name="otp" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="details/quizGame" />
        <Stack.Screen name="details/quizDetails" />
      </Stack>
    </NavigationContainer>
  );
}

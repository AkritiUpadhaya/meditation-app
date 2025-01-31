import TimerProvider from '~/context/TimerContext';
import '../global.css';

import { Slot, Stack } from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

export default function RootLayout() {
  return (
    <TimerProvider>
    <Stack>
      <Stack.Screen name='(tabs)' options={{headerShown:false}}/>
      <Stack.Screen name='index' options={{headerShown:false}}/>
      <Stack.Screen name='meditate/[id]' options={{headerShown:false}}/>
      <Stack.Screen name='(modal)/adjust-meditation' options={{headerShown:false , presentation:'modal'}}/>

    </Stack>
    </TimerProvider>
  );
}

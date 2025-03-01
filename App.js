import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import BottomNavigation from './appNavigaton/BottomNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ScrollProvider } from './ScrollContext'; // Import the ScrollProvider

export default function App() {
  return (
    <SafeAreaProvider style={{backgroundColor: '#000'}}>
      <ScrollProvider> 
        <NavigationContainer independent={true}>
          <StatusBar style="auto" />
          <BottomNavigation />
        </NavigationContainer>
      </ScrollProvider>
    </SafeAreaProvider>
  );
}
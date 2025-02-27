import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';

import BudgetTracking from './apps/BudgetTracking/App';
import Dashboard from './apps/Dashboard/App';
import ProductivityManagement from './apps/ProductivityManagement/App';
import SmartAssistant from './apps/SmartAssistant/App';
import Settings from './apps/Settings/App';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <StatusBar style="auto" />
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen 
          name="Dashboard" 
          component={Dashboard}
          options={{ 
            headerShown: false,
            animation: 'fade',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="dashboard" color={color} size={size} />
            )
          }}
        />
        <Tab.Screen 
          name="Budget" 
          component={BudgetTracking}
          options={{ 
            headerShown: false,
            animation: 'fade',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="attach-money" color={color} size={size} />
            )
          }}
        />
        <Tab.Screen 
          name="Productivity" 
          component={ProductivityManagement}
          options={{ 
            headerShown: false,
            animation: 'fade',
            tabBarIcon: ({ color, size }) => (
              <Entypo name="aircraft-take-off" color={color} size={size} />
            )
          }}
        />
        <Tab.Screen 
          name="Assistant" 
          component={SmartAssistant}
          options={{ 
            headerShown: false,
            animation: 'fade',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="handshake" color={color} size={size} />
            )
          }}
        />
        <Tab.Screen 
          name="Settings" 
          component={Settings}
          options={{ 
            headerShown: false,
            animation: 'fade',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="settings" color={color} size={size} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';

// Ekranları içe aktar
import LoginScreen from './src/screens/LoginScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import AIScannerScreen from './src/screens/AIScannerScreen';
import AIChatScreen from './src/screens/AIChatScreen';
import ExercisesScreen from './src/screens/ExercisesScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import PackagesScreen from './src/screens/PackagesScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Alt Menü (Tab) Yapısı
function MainTabs({ route }: any) {
  const { user } = route.params || {}; 

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { backgroundColor: '#121212', borderTopColor: '#333', height: 60, paddingBottom: 10 },
        tabBarActiveTintColor: '#00D06C',
        tabBarInactiveTintColor: '#666',
        tabBarIcon: ({ focused }) => {
            let icon = '';
            if (route.name === 'Ana Sayfa') icon = '🏠';
            else if (route.name === 'AI Kamera') icon = '📷';
            else if (route.name === 'Profil') icon = '👤';
            return <Text style={{ fontSize: 24, opacity: focused ? 1 : 0.5 }}>{icon}</Text>;
        }
      })}
    >
      <Tab.Screen name="Ana Sayfa" component={DashboardScreen} initialParams={{ user }} />
      <Tab.Screen name="AI Kamera" component={AIScannerScreen} />
      <Tab.Screen name="Profil" component={ProfileScreen} initialParams={{ user }} />
    </Tab.Navigator>
  );
}

// Ana Uygulama Yapısı (Stack)
function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Giriş */}
        <Stack.Screen name="Login" component={LoginScreen} />
        {/* Ana Tab Yapısı */}
        <Stack.Screen name="MainTabs" component={MainTabs} />
        
        {/* Alt Sayfalar */}
        <Stack.Screen name="AIChat" component={AIChatScreen} />
        <Stack.Screen name="Exercises" component={ExercisesScreen} />
        <Stack.Screen name="Packages" component={PackagesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
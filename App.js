import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { useColorScheme } from 'react-native';

// Importando as telas
import LoginScreen from './screens/login/LoginScreen';
import HomeScreen from './screens/home/HomeScreen';
import ProfileScreen from './screens/profile/ProfileScreen';
import OrderScreen from './screens/order/OrderScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function AppTabs() {
  const colorScheme = useColorScheme();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colorScheme === 'dark' ? '#1c1c1c' : '#f8f8f8', 
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: colorScheme === 'dark' ? '#f44336' : '#0066cc',
        tabBarInactiveTintColor: colorScheme === 'dark' ? '#ccc' : '#888',
      }}
    >
      <Tab.Screen 
        name="Home"
        component={HomeScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
          headerShown: false,
        }} 
      />
      <Tab.Screen 
        name="Pedidos"  // Nome da nova tab
        component={OrderScreen}  // Tela de pedidos
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="cart" color={color} size={size} />  // Ícone de carrinho
          ),
          headerShown: false,
        }} 
      />
      <Tab.Screen 
        name="Perfil"
        component={ProfileScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="person" color={color} size={size} />
          ),
          headerShown: false,
        }} 
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const colorScheme = useColorScheme();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="HomeStack"
          component={AppTabs}
          options={{
            headerShown: false, 
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

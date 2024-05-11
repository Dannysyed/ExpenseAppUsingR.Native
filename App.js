import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Light_color, Secondary_color } from './components/Colors';
import { Ionicons } from '@expo/vector-icons'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ManageExpenses from './screens/ManageExpenses';
import AllExpenses from './screens/AllExpenses';
import RecentExpense from './screens/RecentExpense';

const BottomTabs = createBottomTabNavigator();

const Stack = createStackNavigator();

function DrawerScreen() {
  return (
    <BottomTabs.Navigator initialRouteName="Games"

      tabBarOptions={{
        activeTintColor: Secondary_color,
        inactiveTintColor: 'gray',
      }}
      screenOptions={{ headerStyle: { backgroundColor: 'red' } }}
    >

      <BottomTabs.Screen name="Recent" component={RecentExpense} options={{
        tabBarIcon: ({ color, size, focused }) => (
          <Ionicons name="settings" color={focused ? Secondary_color : 'gray'} size={size} />
        ),
      }} />
      <BottomTabs.Screen name="AllExpense" component={AllExpenses}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
    </BottomTabs.Navigator >
  );
}

function App() {
  return (

    <>
      <StatusBar style='auto'>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="StartScreen" component={DrawerScreen} options={{ headerShown: false }} />
            <Stack.Screen name="ManageExpense" component={ManageExpenses} />
          </Stack.Navigator>
        </NavigationContainer>
      </StatusBar>
    </>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;

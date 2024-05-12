import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ManageExpenses from './screens/ManageExpenses'
import AllExpenses from './screens/AllExpenses'
import RecentExpense from './screens/RecentExpense'
import { GlobalStyles } from './constants/styles'

const BottomTabs = createBottomTabNavigator()

const Stack = createStackNavigator()

function DrawerScreen() {
  return (
    <BottomTabs.Navigator
      initialRouteName='Games'
      screenOptions={{
        headerStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        headerTintColor: 'white',
        tabBarStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
      }}
    >
      <BottomTabs.Screen
        name='Recent'
        component={RecentExpense}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name='hourglass' color={color} size={size} />
          ),
        }}
      />
      <BottomTabs.Screen
        name='AllExpense'
        component={AllExpenses}
        options={{
          title: 'All Expense',
          tabBarLabel: 'All Expense',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='calendar' color={color} size={size} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  )
}

function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='StartScreen'
            component={DrawerScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name='ManageExpense' component={ManageExpenses} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default App

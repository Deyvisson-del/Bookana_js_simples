import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen.js';
import RegisterScreen from './screens/RegisterScreen.js';
import DashboardScreen from './screens/DashboardScreen.js';

const Stack = createNativeStackNavigator();


export default function App() {
  return (


    <NavigationContainer>
      <View style={styles.container}>
        <Text style={styles.title}>Bookana</Text>
        <Text style={styles.subtitle}>Teste de mesa 1!!!</Text>
      </View>
      <View style={styles.main}> 
        <Text style={styles.subtitle2}>Teste de mesa 2!!!</Text>
      </View>
{/* 
        <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} /> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#60f50a',
    fontSize: 50,
    marginBottom: 30,
  },
  subtitle: {
    fontSize: 25,
    color: '#60f50a',
    textAlign: 'center',
  },
  main: {
    flex: 1,
    backgroundColor: 'black',
  },
  subtitle2: {
    fontSize: 25,
    color: '#60f50a',
    textAlign: 'center',
  },
  
});

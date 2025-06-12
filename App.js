import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

import HomeScreen from './HomeScreen';
import SecondScreen from './SecondScreen';
import ThirdScreen from './ThirdScreen';
import FourthScreen from './FourthScreen';
import FifthScreen from './FifthScreen';     

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Inter-Regular': require('./assets/Inter-Regular.ttf'),
    'BebasNeue-Regular': require('./assets/BebasNeue-Regular.ttf'),
    'Poppins_400Regular': require('./assets/Poppins-Regular.ttf'),
    'Poppins_700Bold': require('./assets/Poppins-Bold.ttf'),
    'Inter_400Regular': require('./assets/Inter-Regular.ttf'),
    'Inter_700Bold': require('./assets/Inter-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Register" component={SecondScreen} />
        <Stack.Screen name="Login" component={ThirdScreen} />
        <Stack.Screen name="Dashboard" component={FourthScreen} />
        {/* <Stack.Screen name="Profile" component={FifthScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
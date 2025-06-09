import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './HomeScreen';
import SecondScreen from './SecondScreen';
import ThirdScreen from './ThirdScreen';
import FourthScreen from './FourthScreen';
import { useFonts } from 'expo-font';

import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
// import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
// import { Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
// import AppLoading from 'expo-app-loading';
// import { MaterialIcons, FontAwesome5, Ionicons } from '@expo/vector-icons';

// import { StatusBar } from 'expo-status-bar';

export default function App() {
 
  const [fontsLoaded] = useFonts({
    'Inter-Regular': require('./assets/Inter-Regular.ttf'),   
    'BebasNeue-Regular': require('./assets/BebasNeue-Regular.ttf'),  
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
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="Second" component={SecondScreen}/>
      <Stack.Screen name="Third" component={ThirdScreen}/>
      <Stack.Screen name="Four" component={FourthScreen}/>
    </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

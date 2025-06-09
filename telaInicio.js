import logo from './assets/logoBookana.png';
import girls from './assets/bookana-girls.png'
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';



export default function App() {

  const [fontsLoaded] = useFonts({
    'Inter-Regular': require('./assets/Inter-Regular.ttf'),  // Fonte Bebas Neue
  });

  // Exibir um indicador de carregamento enquanto as fontes são carregadas
  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>

    <View style={styles.header}>
      <Image 
      source={girls} 
      style={styles.girls} />
               

        
    </View>
      

      <View style={styles.loginBox}>
        <Image source={logo} style={styles.logo} />

        <TouchableOpacity style={styles.buttonPrimary}>
          <Text style={styles.buttonTextPrimary}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonSecondary}>
          <Text style={styles.buttonTextSecondary}>Criar conta</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.guestText}>Entre como um convidado</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3C12DE',
    
    
  },
  header: {
  height: 500, // já está funcionando assim
  position: 'relative',
  overflow: 'hidden',
  alignItems: 'center',
  justifyContent: 'center',
  borderBottomLeftRadius: 30,
  borderBottomRightRadius: 30,
  backgroundColor: '#F5F5F5',
},
 girls: {
  position: 'absolute',
  top: -90,
  left: 0,
  
  width: '100%',
  height: '100%',
  resizeMode: 'cover',
  transform: [{scale: 1.5}],
},

  loginBox: {
    flex: 1,
    backgroundColor: '##3C12DE',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 24,
    paddingTop: 32,
    alignItems: 'center',
  },
  logo: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 32,
  },
  buttonPrimary: {
    backgroundColor: '#fff',
    width: '100%',
    padding: 12,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonTextPrimary: {
    color: '#000',
    fontWeight: '600',
    fontSize: 17,
    fontFamily: 'Inter-Regular',
  },
  buttonSecondary: {
    borderWidth: 1,
    borderColor: '#fff',
    width: '100%',
    padding: 12,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 24,
  },
  buttonTextSecondary: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 17,
    fontFamily: 'Inter-Regular',
  },
  guestText: {
    color: '#fff',
    textDecorationLine: 'underline',
    fontSize: 15,
  },
});
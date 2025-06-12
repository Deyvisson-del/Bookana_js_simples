import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ActivityIndicator,} from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import logo from './assets/logoBookana.png';

export default function SecondScreen({ navigation }) {
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
    <View style={styles.container}>
      {/* Topo com logo e título */}
      <View style={styles.header}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.welcomeText}>BEM VINDO DE VOLTA</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.loginTitle}>Faça login para continuar</Text>

        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#888"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#888"
          secureTextEntry
        />

        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate('Dashboard')}
        >
          <Text style={styles.loginButtonText}>Entrar</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>Ou login com</Text>

        {/* Ícones de redes sociais */}
        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="facebook" size={24} color="#1877F2" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <AntDesign name="google" size={24} color="#DB4437" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <AntDesign name="apple1" size={24} color="#000000" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.createAccountButton}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.createAccountText}>Criar conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3C12DE',
  },
  header: {
    backgroundColor: '#3C12DE',
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 40,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  logo: {
    width: 150,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  welcomeText: {
    color: '#fff',
    marginTop: 10,
    fontSize: 48,
    fontWeight: '500',
    fontFamily: 'BebasNeue-Regular',
  },
  form: {
    padding: 20,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    height: '100%',
    backgroundColor: '#F5F5F5',
  },
  loginTitle: {
    fontSize: 25,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: '400',
    fontFamily: 'Inter-Regular',
    paddingTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 11,
    padding: 12,
    marginBottom: 12,
    fontFamily: 'Inter-Regular',
    fontSize: 18,
  },
  forgotPassword: {
    color: '#3c00ff',
    alignSelf: 'flex-end',
    marginBottom: 20,
    fontFamily: 'Inter-Regular',
    fontSize: 15,
  },
  loginButton: {
    backgroundColor: '#321896',
    padding: 12,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 15,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 17,
    fontFamily: 'Inter-Regular',
  },
  orText: {
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 15,
    color: '#666',
    fontFamily: 'Inter-Regular',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  socialButton: {
    backgroundColor: '#F1F1F1',
    borderRadius: 12,
    padding: 16,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  createAccountButton: {
    borderWidth: 1,
    borderColor: '#321896',
    padding: 12,
    borderRadius: 15,
    alignItems: 'center',
  },
  createAccountText: {
    color: '#000',
    fontWeight: '600',
    fontSize: 17,
    fontFamily: 'Inter-Regular',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
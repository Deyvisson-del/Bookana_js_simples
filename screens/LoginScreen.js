import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function LoginScreen({ navigation }) {
    return (
        <Views style={styles.container}>
            <Text style={styles.title}>BOOKANA</Text>
            <Text style={styles.subtitle}>BEM VINDO DE VOLTA</Text>

            <TextInput placeholder="E-mail" style={styles.input} />
            <TextInput placeholder="Senha" style={styles.input} secureTextEntry />

            <TouchableOpacity>
                <Text style={styles.forgot}>Esqueceu a senha?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.outlineButton}>
                <Text style={styles.outlineText}>Criar conta</Text>
            </TouchableOpacity>
        </Views>

    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#4b0082',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 18,
        marginBottom: '20',
        textAlign: 'center'
    },
    input: {
        borderWidth: 1,
        borderColor: '#999',
        padding: 10,
        borderRadius: 8,
        marginBottom: 12,
    },
    forgot: {
        alignSelf: 'flex-end',
        marginBottom: 20,
        color: '#4b0082',
    },
    button: {
        backgroundColor: '4b0082',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    outlineButton: {
        padding: 12,
        marginTop: 12,
        borderColor: '#4b0082',
        borderWidth: 1,
        borderRadius: 8,
        alignItems: 'center',
    },
    outlineText: {
        color: '#4b0082',
    }
});
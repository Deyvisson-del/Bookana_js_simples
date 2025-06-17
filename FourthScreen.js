import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity,} from 'react-native';
import { MaterialIcons, FontAwesome5, Ionicons } from '@expo/vector-icons';

export default function FourthScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.left} onPress={() => navigation.navigate('Profile')}>
          <MaterialIcons name="account-circle" size={50} color="#FFF" />
          <Text style={styles.headerText}>Olá, Leitor!</Text>
        </TouchableOpacity>

        <View style={styles.notificationIcon}>
          <Ionicons name="notifications-outline" size={30} color="#1E1E1E" />
        </View>
      </View>

      {/* Status cards */}
      <View style={styles.statusContainer}>
        <View style={styles.statusBox}>
          <Text style={styles.statusTitle}>Lendo</Text>
          <Text style={styles.statusCount}>4</Text>
        </View>
        <View style={styles.statusBox}>
          <Text style={styles.statusTitle}>Na fila</Text>
          <Text style={styles.statusCount}>5</Text>
        </View>
        <View style={styles.statusBox}>
          <Text style={styles.statusTitle}>Lido</Text>
          <Text style={styles.statusCount}>10</Text>
        </View>
      </View>

      <ScrollView style={styles.scrollContent}>
        {/* Seções de livros */}
        <Text style={styles.sectionTitle}>Lendo</Text>
        <ScrollView horizontal style={styles.bookRow}>
          {/* Imagens aqui... */}
        </ScrollView>

        <Text style={styles.sectionTitle}>Na Fila</Text>
        <ScrollView horizontal style={styles.bookRow}>
          {/* Imagens aqui... */}
        </ScrollView>

        <Text style={styles.sectionTitle}>Lido</Text>
        <ScrollView horizontal style={styles.bookRow}>
          {/* Imagens aqui... */}
        </ScrollView>

        {/* Tabela de leituras */}
        <View style={styles.tableSection}>
          <Text style={styles.tableTitle}>Tabela Geral de Leituras</Text>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <Text style={[styles.tableCell, styles.tableHeader]}>Título</Text>
              <Text style={[styles.tableCell, styles.tableHeader]}>Ação</Text>
              <Text style={[styles.tableCell, styles.tableHeader]}>Status</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Mindfighter</Text>
              <TouchableOpacity style={styles.tableCell}>
                <Text style={styles.link}>Abrir</Text>
              </TouchableOpacity>
              <Text style={styles.tableCell}>Lido</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>Eu te amo papai</Text>
              <TouchableOpacity style={styles.tableCell}>
                <Text style={styles.link}>Abrir</Text>
              </TouchableOpacity>
              <Text style={styles.tableCell}>Lendo</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableCell}>A casa 1825</Text>
              <TouchableOpacity style={styles.tableCell}>
                <Text style={styles.link}>Abrir</Text>
              </TouchableOpacity>
              <Text style={styles.tableCell}>Na Fila</Text>
            </View>
          </View>
          <Text style={styles.motivText}>
            Organize e acompanhe sua rotina de leitura de forma simples e motivadora.
          </Text>
        </View>
      </ScrollView>

      {/* Menu inferior */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <MaterialIcons name="home" size={30} color="#1E1E1E" />
          <Text style={styles.navText}>Início</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <FontAwesome5 name="book" size={28} color="#1E1E1E" />
          <Text style={styles.navText}>Livros</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MaterialIcons name="emoji-events" size={30} color="#1E1E1E" />
          <Text style={styles.navText}>Conquistas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MaterialIcons name="person" size={30} color="#1E1E1E" />
          <Text style={styles.navText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#EBF0FF' },
  header: {
    backgroundColor: '#3C12DE',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 25,
    height: 99,
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 10,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
  },
  notificationIcon: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 6,
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    backgroundColor: '#EBF0FF',
    paddingHorizontal: 10,
  },
  statusBox: {
    backgroundColor: '#FFF',
    padding: 8,
    borderRadius: 10,
    alignItems: 'center',
    width: 115,
  },
  statusTitle: { fontSize: 20, color: '#1E1E1E' },
  statusCount: { fontSize: 20, color: '#1E1E1E' },
  scrollContent: { flex: 1 },
  sectionTitle: {
    fontSize: 32,
    marginLeft: 16,
    marginTop: 16,
  },
  bookRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  bookImage: {
    width: 100,
    height: 140,
    borderRadius: 10,
    marginRight: 10,
  },
  tableSection: {
    padding: 16,
    backgroundColor: '#3C12DE',
    marginTop: 10,
  },
  tableTitle: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 15,
  },
  table: {
    borderWidth: 1,
    borderColor: '#5B5B5B',
    borderRadius: 8,
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableCell: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#5B5B5B',
    fontSize: 12,
    color: '#fff',
    textAlign: 'start',
  },
  tableHeader: {
    backgroundColor: '#4B17D6',
    fontWeight: 'bold',
  },
  link: {
    color: '#fff',
    fontWeight: '400',
  },
  motivText: {
    color: '#fff',
    marginTop: 10,
    fontSize: 16,
    textAlign: 'start',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#FFF',
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  navText: {
    color: '#1E1E1E',
    fontSize: 16,
    marginTop: 2,
  },
});
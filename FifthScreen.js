
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  FontAwesome,
  FontAwesome5,
  MaterialIcons,
  Ionicons,
} from '@expo/vector-icons';

export default function FifthScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Top Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>
        <View style={styles.headerIcons}>
          <FontAwesome name="fire" size={22} color="#fff" />
          <Text style={styles.headerText}>4</Text>
          <FontAwesome
            name="star"
            size={22}
            color="#FFD700"
            style={{ marginLeft: 16 }}
          />
          <Text style={styles.headerText}>20</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Perfil */}
        <Image
          source={{ uri: 'https://i.imgur.com/ZQVt5pP.jpeg' }}
          style={styles.profileImage}
        />
        <Text style={styles.name}>José Guilherme</Text>
        <Text style={styles.subText}>Leitor desde dezembro de 2020</Text>

        {/* Estatísticas */}
        <Text style={styles.sectionTitle}>Estatísticas</Text>
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <FontAwesome name="fire" size={24} color="#FF7300" />
            <Text style={styles.statText}>4</Text>
            <Text style={styles.statLabel}>Dias seguidos</Text>
          </View>
          <View style={styles.statBox}>
            <FontAwesome name="star" size={24} color="#FFD700" />
            <Text style={styles.statText}>20/100</Text>
            <Text style={styles.statLabel}>Total de XP</Text>
          </View>
        </View>

        {/* Conquistas */}
        <Text style={styles.sectionTitle}>Conquistas</Text>

        <View style={styles.achievementBox}>
          <View style={styles.achievementHeader}>
            <FontAwesome name="fire" size={20} color="#FF7300" />
            <Text style={styles.achievementLevel}>Nível 2</Text>
          </View>
          <Text style={styles.achievementTitle}>Lenha na Fogueira</Text>
          <View style={styles.progressBarBackground}>
            <View style={[styles.progressBar, { width: '70%' }]} />
          </View>
          <Text style={styles.achievementDesc}>
            Complete 1 semana de leitura
          </Text>
        </View>

        <View style={styles.achievementBox}>
          <View style={styles.achievementHeader}>
            <FontAwesome name="book" size={20} color="#00C851" />
            <Text style={[styles.achievementLevel, { color: '#00C851' }]}>
              Nível 3
            </Text>
          </View>
          <Text style={styles.achievementTitle}>Devorador de livros</Text>
          <View style={styles.progressBarBackground}>
            <View
              style={[
                styles.progressBar,
                { backgroundColor: '#00C851', width: '100%' },
              ]}
            />
          </View>
          <Text style={styles.achievementDesc}>
            Termine um livro com mais de 300 páginas
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
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    backgroundColor: '#4D2CEC',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 48,
    paddingBottom: 16,
  },
  headerIcons: { flexDirection: 'row', alignItems: 'center' },
  headerText: { color: '#fff', fontWeight: 'bold', marginLeft: 4 },
  scrollContainer: { alignItems: 'center', padding: 20 },
  profileImage: { width: 100, height: 100, borderRadius: 50, marginBottom: 8 },
  name: { fontSize: 20, fontWeight: 'bold' },
  subText: { color: '#555', marginBottom: 24 },
  sectionTitle: {
    alignSelf: 'flex-start',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 12,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  statBox: {
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 12,
    borderRadius: 12,
    width: '45%',
  },
  statText: { fontSize: 18, fontWeight: 'bold', marginTop: 4 },
  statLabel: { fontSize: 12, color: '#555', marginTop: 4 },
  achievementBox: {
    width: '100%',
    backgroundColor: '#f9f9f9',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  achievementHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  achievementLevel: { marginLeft: 8, fontWeight: 'bold', color: '#FF7300' },
  achievementTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 6 },
  achievementDesc: { fontSize: 12, color: '#555', marginTop: 4 },
  progressBarBackground: {
    width: '100%',
    height: 8,
    backgroundColor: '#ddd',
    borderRadius: 4,
  },
  progressBar: {
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF7300',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 12,
    borderTopWidth: 1,
    borderColor: '#ccc',
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
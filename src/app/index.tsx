import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const categories = [
    { id: '1', title: '🔥 Костёр и природа', color: '#FF5722' },
    { id: '2', title: '🎲 Настольные игры', color: '#4CAF50' },
    { id: '3', title: '🍹 Бары и террасы', color: '#E91E63' },
    { id: '4', title: '⚽ Спорт и актив', color: '#2196F3' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.headerTitle}>Куда пойдём сегодня?</Text>
        <Text style={styles.subtitle}>Выберите категорию, чтобы найти компанию</Text>

        <View style={styles.grid}>
          {categories.map((item) => (
            <TouchableOpacity 
              key={item.id} 
              style={[styles.card, { backgroundColor: item.color }]}
              onPress={() => alert(`Вы открыли: ${item.title}`)}
            >
              <Text style={styles.cardText}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  scrollContainer: {
    padding: 20,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#888888',
    marginTop: 8,
    marginBottom: 30,
    textAlign: 'center',
  },
  grid: {
    width: '100%',
    gap: 15,
  },
  card: {
    width: '100%',
    padding: 24,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  cardText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

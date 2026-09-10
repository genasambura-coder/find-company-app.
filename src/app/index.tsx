import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const router = useRouter(); // Інструмент для переходу між екранами

  // Категорії відпочинку українською мовою
  const categories = [
    { id: '1', title: '🔥 Багаття та природа', color: '#FF5722' },
    { id: '2', title: '🎲 Настільні ігри', color: '#4CAF50' },
    { id: '3', title: '🍹 Бари та тераси', color: '#E91E63' },
    { id: '4', title: '⚽ Спорт та актив', color: '#2196F3' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.headerTitle}>Куди підемо сьогодні?</Text>
        <Text style={styles.subtitle}>Оберіть категорію, щоб знайти компанію</Text>

        <View style={styles.grid}>
          {categories.map((item) => (
            <TouchableOpacity 
              key={item.id} 
              style={[styles.card, { backgroundColor: item.color }]}
              onPress={() => router.push('/explore')} // Перехід на екран зі списком оголошень
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
  },
  cardText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

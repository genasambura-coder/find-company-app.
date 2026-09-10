import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ExploreScreen() {
  const router = useRouter();

  // Список тестових оголошень від користувачів
  const announcements = [
    {
      id: '1',
      title: '🔥 Шашлики та гітара біля озера',
      organizer: 'Олександр',
      time: 'Субота, 16:00',
      location: 'Міське озеро, альтанка №3',
      spots: 'Шукаємо ще 3-4 людини',
    },
    {
      id: '2',
      title: '🎲 Вечір настілок (Мафія, Колонізатори)',
      organizer: 'Марія',
      time: 'Неділя, 18:00',
      location: 'Кафе "Гік Хаус", центр',
      spots: 'Є 2 вільних місця',
    },
    {
      id: '3',
      title: '🍹 Посиденьки на літній терасі',
      organizer: 'Дмитро',
      time: 'П’ятниця, 20:00',
      location: 'Бар "Грінвіч"',
      spots: 'Збираємо велику компанію',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Кнопка Повернення Назад */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backButtonText}>← Назад на головну</Text>
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.headerTitle}>Актуальні зустрічі</Text>
        <Text style={styles.subtitle}>Знайдіть оголошення або створіть власне</Text>

        <View style={styles.list}>
          {announcements.map((item) => (
            <View key={item.id} style={styles.card}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Організатор:</Text>
                <Text style={styles.infoValue}>{item.organizer}</Text>
              </View>

              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Коли:</Text>
                <Text style={styles.infoValue}>{item.time}</Text>
              </View>

              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Де:</Text>
                <Text style={styles.infoValue}>{item.location}</Text>
              </View>

              <Text style={styles.spotsText}>{item.spots}</Text>

              <TouchableOpacity 
                style={styles.joinButton}
                onPress={() => alert(`Ви подали заявку на зустріч: ${item.title}`)}
              >
                <Text style={styles.joinButtonText}>Приєднатися до компанії</Text>
              </TouchableOpacity>
            </View>
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
  backButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  backButtonText: {
    color: '#2196F3',
    fontSize: 16,
    fontWeight: '600',
  },
  scrollContainer: {
    padding: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'left',
  },
  subtitle: {
    fontSize: 14,
    color: '#888888',
    marginTop: 6,
    marginBottom: 25,
  },
  list: {
    gap: 20,
  },
  card: {
    backgroundColor: '#1E1E1E',
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#333333',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 12,
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  infoLabel: {
    color: '#888888',
    width: 100,
    fontSize: 14,
  },
  infoValue: {
    color: '#DDDDDD',
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
  },
  spotsText: {
    color: '#4CAF50',
    fontSize: 14,
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 15,
  },
  joinButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  joinButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

"use client";

import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

export default function FlashCard() {
  const router = useRouter();

  const handleFlashCardDetailsPress = () => {
    router.push("/details/flashcardDetails");
  };

  const flashcards = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    title: `Flash card ${i + 1}`,
  }));

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Flashcard</Text>
      </View>

      {/* Flashcard List */}
      <ScrollView style={styles.scrollView}>
        {flashcards.map((card) => (
          <TouchableOpacity key={card.id} style={styles.cardContainer} onPress={handleFlashCardDetailsPress}>
            <LinearGradient
              colors={["#4773B4", "#767676"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.card}
            >
              <Text style={styles.cardText}>{card.title}</Text>
            </LinearGradient>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 48,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    flex: 1,
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  cardContainer: {
    marginBottom: 16,
    borderRadius: 12,
    overflow: "hidden",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  card: {
    paddingVertical: 30,
    borderRadius: 12,
  },
  cardText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
  },
});

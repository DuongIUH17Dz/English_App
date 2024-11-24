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
import { ChevronLeft } from "lucide-react-native";
import { useNavigation } from "expo-router";

export default function FlashCard() {
  const navigation = useNavigation();
  const router = useRouter();

  // Handle navigation to detailed flashcard view for each deck
  const handleFlashCardDetailsPress = (deckId: number) => {
    router.push(`/details/flashcardDetails?id=${deckId}`);
  };

  const flashcards = [
    {
      id: 1,
      title: "Flashcard Set 1",
    },
    {
      id: 2,
      title: "Flashcard Set 2",
    },
    {
      id: 3,
      title: "Flashcard Set 3",
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ChevronLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Flashcards</Text>
      </View>

      {/* Flashcard List */}
      <ScrollView style={styles.scrollView}>
        {flashcards.map((card) => (
          <TouchableOpacity
            key={card.id}
            style={styles.cardContainer}
            onPress={() => handleFlashCardDetailsPress(card.id)}
          >
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

import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { useRouter } from "expo-router";

interface QuizCategory {
  id: string;
  title: string;
  wordCount: number;
  progress: number;
  icon: string;
}

const categories: QuizCategory[] = [
  { id: "1", title: "The Zoo", wordCount: 25, progress: 100, icon: "🦒" },
  {
    id: "2",
    title: "Food and Cooking",
    wordCount: 58,
    progress: 75,
    icon: "👩‍🍳",
  },
  {
    id: "3",
    title: "Art and Culture",
    wordCount: 15,
    progress: 45,
    icon: "🎨",
  },
  { id: "4", title: "Education", wordCount: 32, progress: 0, icon: "📚" },
  {
    id: "5",
    title: "Farming and Garden",
    wordCount: 25,
    progress: 0,
    icon: "🌱",
  },
  { id: "6", title: "Holidays", wordCount: 34, progress: 0, icon: "🎉" },
  {
    id: "7",
    title: "Sports and Hobbies",
    wordCount: 28,
    progress: 0,
    icon: "⚽",
  },
  { id: "8", title: "Technology", wordCount: 45, progress: 0, icon: "💻" },
];

export default function QuizGame() {
  const router = useRouter();

  const handleQuizDetailsPress = () => {
    router.push("/details/quizDetails");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Quiz Game</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        {categories.map((category, index) => (
          <TouchableOpacity key={category.id} style={styles.categoryContainer} onPress={handleQuizDetailsPress}>
            <View style={styles.categoryContent}>
              <Text style={styles.categoryIcon}>{category.icon}</Text>
              <View style={styles.categoryInfo}>
                <Text style={styles.categoryTitle}>{category.title}</Text>
                <Text style={styles.wordCount}>
                  {category.wordCount} vocabulary words
                </Text>
              </View>
              <View style={styles.progressContainer}>
                <Text style={styles.progressText}>{category.progress}%</Text>
                <View style={styles.progressBar}>
                  <View
                    style={[
                      styles.progressFill,
                      { width: `${category.progress}%` },
                    ]}
                  />
                </View>
              </View>
            </View>
            {index < categories.length - 1 && <View style={styles.separator} />}
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
    borderBottomColor: "#E5E5E5",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  categoryContainer: {
    paddingHorizontal: 16,
  },
  categoryContent: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
  },
  categoryIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  categoryInfo: {
    flex: 1,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 4,
  },
  wordCount: {
    fontSize: 14,
    color: "#666",
  },
  progressContainer: {
    alignItems: "flex-end",
    width: 80,
  },
  progressText: {
    fontSize: 12,
    color: "#666",
    marginBottom: 4,
  },
  progressBar: {
    width: 50,
    height: 4,
    backgroundColor: "#E5E5E5",
    borderRadius: 2,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#4CAF50",
    borderRadius: 2,
  },
  separator: {
    height: 1,
    backgroundColor: "#E5E5E5",
    marginLeft: 52,
  },
});

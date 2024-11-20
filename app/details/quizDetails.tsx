import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Volume2 } from "lucide-react-native";

const vocabulary = [
  {
    word: "monkey",
    pronoun: "/ˈmʌŋ.ki/",
    images: [
      { uri: "https://example.com/monkey.png", correct: true },
      { uri: "https://example.com/elephant.png", correct: false },
    ],
  },
  {
    word: "dog",
    pronoun: "/dɒɡ/",
    images: [
      { uri: "https://example.com/dog.png", correct: true },
      { uri: "https://example.com/cat.png", correct: false },
    ],
  },
  {
    word: "giraffe",
    pronoun: "/dʒəˈræf/",
    images: [
      { uri: "https://example.com/giraffe.png", correct: true },
      { uri: "https://example.com/lion.png", correct: false },
    ],
  },
];

export default function QuizDetails() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const currentWord = vocabulary[currentIndex];

  const handleImagePress = (index: number, correct: boolean) => {
    setSelectedImage(index);
    if (correct) {
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % vocabulary.length);
        setSelectedImage(null);
      }, 1000);
    } else {
      setTimeout(() => setSelectedImage(null), 1000);
    }
  };

  const handleDontKnow = () => {
    setCurrentIndex((prev) => (prev + 1) % vocabulary.length);
    setSelectedImage(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>The Zoo</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.word}>{currentWord.word}</Text>
        <View style={styles.wordContainer}>
          <Text style={styles.pronoun}>{currentWord.pronoun}</Text>
          <TouchableOpacity onPress={() => console.log("Playing sound")}>
            <Volume2 size={24} color="#2ABAFF" />
          </TouchableOpacity>
        </View>

        <Text style={styles.instruction}>
          Choose the image that matches the word
        </Text>

        <View style={styles.imageContainer}>
          {currentWord.images.map((image, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.imageWrapper,
                selectedImage === index &&
                  (image.correct ? styles.correctImage : styles.incorrectImage),
              ]}
              onPress={() => handleImagePress(index, image.correct)}
            >
              <Image source={{ uri: image.uri }} style={styles.image} />
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity
          style={styles.dontKnowButton}
          onPress={handleDontKnow}
        >
          <Text style={styles.dontKnowText}>Don't know</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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
  content: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    marginTop: 50,
  },
  wordContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 20,
    marginTop: 10,
  },
  pronoun: {
    color: "#666666",
    fontSize: 18,
  },
  word: {
    fontSize: 32,
    fontWeight: "700",
  },
  instruction: {
    color: "#999999",
    marginBottom: 28,
    fontSize: 18,
  },
  imageContainer: {
    flexDirection: "row",
    gap: 16,
    marginBottom: 24,
  },
  imageWrapper: {
    borderRadius: 12,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#eee",
  },
  image: {
    width: 180,
    height: 180,
  },
  correctImage: {
    borderColor: "#4CAF50",
    borderWidth: 3,
  },
  incorrectImage: {
    borderColor: "#FF5252",
    borderWidth: 3,
  },
  dontKnowButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderColor: "#E5E5E5",
    width: "100%",
  },
  dontKnowText: {
    color: "black",
    textAlign: "center",
    fontSize: 18,
  },
});

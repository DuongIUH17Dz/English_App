import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { ChevronLeft, Bookmark, Volume2 } from "lucide-react-native";
import { useNavigation } from "expo-router";
import { useRouter } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import * as Speech from "expo-speech";

export default function vocabularyDetail() {
  const navigation = useNavigation();
  const { word: wordParam } = useLocalSearchParams();
  const word = JSON.parse(typeof wordParam === "string" ? wordParam : "{}");

  const playPronunciation = () => {
    let pronunciation = word.word;

    try {
      Speech.speak(pronunciation);
    } catch (error) {
      console.error("Error playing pronunciation:", error);
      alert("Error playing pronunciation. Please check your device settings.");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ChevronLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>{word.word}</Text>
        <TouchableOpacity>
          <Bookmark size={24} color="#5FABCC" />
        </TouchableOpacity>
      </View>

      <Image source={{ uri: word.image }} style={styles.image} />

      <View style={styles.pronunciationContainer}>
        <View style={styles.pronunciationRow}>
          <Text style={styles.region}>UK</Text>
          <Text style={styles.pronunciation}>{word.pronunciation.UK}</Text>
          <TouchableOpacity onPress={() => playPronunciation()}>
            <Volume2 size={20} color="#5FABCC" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Define</Text>
        <Text style={styles.definition}>{word.definition}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Related words</Text>
        <View style={styles.relatedWordsContainer}>
          {word.relatedWords.map(
            (
              relatedWord:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | Iterable<React.ReactNode>
                | React.ReactPortal
                | null
                | undefined,
              index: React.Key | null | undefined
            ) => (
              <TouchableOpacity key={index} style={styles.relatedWordButton}>
                <Text style={styles.relatedWordText}>{relatedWord}</Text>
              </TouchableOpacity>
            )
          )}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    marginTop: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    marginVertical: 16,
  },
  pronunciationContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  pronunciationRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  region: {
    width: 30,
    fontSize: 17,
    fontWeight: "500",
  },
  pronunciation: {
    flex: 1,
    fontSize: 18,
    marginLeft: 16,
  },
  section: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "500",
    color: "#408FB1",
    marginBottom: 8,
  },
  definition: {
    fontSize: 18,
    lineHeight: 24,
  },
  relatedWordsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 8,
  },
  relatedWordButton: {
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8,
  },
  relatedWordText: {
    fontSize: 16,
    color: "#666",
  },
});

import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import * as Speech from "expo-speech";
import Svg, { Path } from "react-native-svg";
import { ChevronLeft } from "lucide-react-native";
import { useNavigation } from "expo-router";
import { NavigationProp } from "@react-navigation/native";
import { useLocalSearchParams } from "expo-router";

export default function ListeningDetails() {
  const navigation = useNavigation<NavigationProp<any>>();
  const { word: wordParam } = useLocalSearchParams();
  const word = wordParam ? JSON.parse(wordParam as string) : {};

  const [readingIndex, setReadingIndex] = useState<number | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [lastReadPositions, setLastReadPositions] = useState<{
    [key: number]: number;
  }>({});

  const handleSpeech = (index: number, text: string) => {
    if (isSpeaking && readingIndex === index) {
      // Stop reading and save current position
      Speech.stop();
      setIsSpeaking(false);
    } else {
      // Start reading from last position or beginning
      const startPosition = lastReadPositions[index] || 0;

      Speech.stop(); // Stop any ongoing speech
      setReadingIndex(index);
      setIsSpeaking(true);

      Speech.speak(text.slice(startPosition), {
        onBoundary: ({ charIndex }) => {
          // Save the last read position
          setLastReadPositions((prev) => ({
            ...prev,
            [index]: startPosition + charIndex,
          }));
        },
        onDone: () => {
          setIsSpeaking(false);
          setReadingIndex(null);
        },
        onStart: () => {
          setReadingIndex(index);
        },
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ChevronLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Listening</Text>
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.title}>{word.title}</Text>
        <Image
          source={{ uri: word.image }}
          style={styles.image}
          resizeMode="cover"
        />

        {word.content?.map((text: string, index: number) => (
          <View key={index} style={styles.paragraphContainer}>
            <Text
              style={[
                styles.paragraph,
                readingIndex === index && isSpeaking ? styles.activeText : {},
              ]}
            >
              {text}
            </Text>
            <TouchableOpacity
              style={styles.speakerIcon}
              onPress={() => handleSpeech(index, text)}
            >
              <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <Path
                  d="M18.3281 12C18.3281 10.3359 17.311 8.91094 15.8672 8.31094L15.0985 10.1578C15.8203 10.4578 16.3266 11.1703 16.3266 12.0047C16.3266 12.8344 15.8203 13.5469 15.0985 13.8516L15.8672 15.6984C17.311 15.0891 18.3281 13.6641 18.3281 12ZM17.4047 4.61719L16.636 6.46406C18.8063 7.36875 20.3297 9.50625 20.3297 12C20.3297 14.4984 18.8063 16.6313 16.636 17.5359L17.4047 19.3828C20.2969 18.1781 22.3266 15.3281 22.3266 12C22.3266 8.67188 20.2969 5.82188 17.4047 4.61719ZM2.32971 6.99844V16.9969H6.32815L13.3266 24V0L6.32815 6.99844H2.32971Z"
                  fill="black"
                />
              </Svg>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
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
    elevation: 2,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 16,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  paragraphContainer: {
    marginBottom: 16,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
  },
  activeText: {
    color: "blue",
    fontWeight: "bold",
  },
  speakerIcon: {
    alignSelf: "center",
    padding: 8,
    marginTop: 8,
  },
});

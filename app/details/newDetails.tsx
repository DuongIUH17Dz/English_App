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
import { Audio } from "expo-av";
import Slider from "@react-native-community/slider";
import { ChevronLeft } from "lucide-react-native";
import { useNavigation } from "expo-router";
import { NavigationProp } from "@react-navigation/native";
import Svg, { Path, Rect } from "react-native-svg";
import { useLocalSearchParams } from "expo-router";

export default function newDetails() {
  const navigation = useNavigation<NavigationProp<any>>();
  const { word: wordParam } = useLocalSearchParams();
  const word = wordParam ? JSON.parse(wordParam as string) : {};

  console.log("Word:11111", word);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ChevronLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>News</Text>
      </View>

      <ScrollView style={styles.content}>
        {/* Article Title from the passed data */}
        <Text style={styles.title}>{word.title}</Text>

        {/* Article Image */}
        <Image
          source={{ uri: word.image }} // Use passed image URL
          style={styles.image}
          resizeMode="cover"
        />

        {/* Article Content */}

        <Text style={styles.paragraph}>{word.content}</Text>
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
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
    marginBottom: 16,
  },
  speakerIcon: {
    alignSelf: "center",
    padding: 8,
    marginBottom: 16,
  },
  player: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#DEDEDE",
  },
  timeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  timeText: {
    fontSize: 12,
    color: "#666",
  },
  slider: {
    width: "100%",
    height: 40,
  },
  playButton: {
    alignSelf: "center",
    marginTop: 8,
  },
});

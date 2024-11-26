import React from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { ChevronLeft, Bookmark, Volume2 } from "lucide-react-native";
import Svg, { Path } from "react-native-svg";
import { useNavigation } from "expo-router";

export default function vocabularySaved() {
  const words = [
    "Aardvark",
    "Abandon",
    "Abate",
    "Abbey",
    "Abdomen",
    "Abduct",
    "Abide",
    "Ability",
    "Abject",
    "Abnormal",
  ];

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ChevronLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Saved</Text>
      </View>
      <ScrollView style={styles.wordList}>
        {words.map((word, index) => (
          <View key={index} style={styles.wordItem}>
            <Text style={styles.wordText}>{word}</Text>
            <TouchableOpacity>
              <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">

                <Path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.5 9.24829V13.4091C17.5 15.9891 17.5 17.28 16.8883 17.8433C16.5967 18.1125 16.2283 18.2816 15.8358 18.3266C15.0133 18.4208 14.0525 17.5708 12.1317 15.8716C11.2817 15.1208 10.8575 14.745 10.3667 14.6466C10.1247 14.5978 9.87534 14.5978 9.63333 14.6466C9.14167 14.745 8.7175 15.1208 7.86833 15.8716C5.9475 17.5708 4.98667 18.4208 4.16417 18.3258C3.77103 18.2807 3.40243 18.1117 3.11167 17.8433C2.5 17.28 2.5 15.99 2.5 13.4091V9.24746C2.5 5.67496 2.5 3.88746 3.59833 2.77746C4.69667 1.66663 6.465 1.66663 10 1.66663C13.5358 1.66663 15.3033 1.66663 16.4017 2.77663C17.5 3.88746 17.5 5.67496 17.5 9.24829Z"
                  fill="#7BB6D0"
                />
              </Svg>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    backgroundColor: "#ffffff",
  },
  wordList: {
    flex: 1,
    marginTop: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    flex: 1,
  },

  wordItem: {
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  wordText: {
    fontSize: 18,
    color: "#333",
  },
});

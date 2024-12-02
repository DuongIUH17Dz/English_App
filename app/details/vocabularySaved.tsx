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
import { useRouter } from "expo-router";

export default function vocabularySaved() {
  interface Word {
    word: string;
    definition: string;
    relatedWords: string[];
    category: string;
    pronunciation: {
      UK: string;
    };
    image: string;
  }

  const words: Word[] = [
    {
      word: "Aardvark",
      definition:
        "A nocturnal mammal native to Africa, known for digging with its large claws.",
      relatedWords: ["Ant", "Burrow", "Insectivore"],
      category: "Animal",
      pronunciation: {
        UK: "/ˈɑːd.vɑːk/",
      },
      image: "https://b-cdn.springnest.com/media/img/9u/aardvarke131f0a.jpg",
    },
    {
      word: "Abandon",
      definition: "To leave behind or forsake someone or something.",
      relatedWords: ["Desert", "Forsake", "Leave"],
      category: "Action",
      pronunciation: {
        UK: "/əˈbæn.dən/",
      },
      image: "https://example.com/abandon-image.png",
    },
    {
      word: "Abate",
      definition: "To reduce or lessen in degree, intensity, or severity.",
      relatedWords: ["Diminish", "Decrease", "Reduce"],
      category: "Action",
      pronunciation: {
        UK: "/əˈbeɪt/",
      },
      image: "https://example.com/abate-image.png",
    },
    {
      word: "Abbey",
      definition:
        "A building or complex of buildings used by a religious community, especially monks.",
      relatedWords: ["Monastery", "Church", "Convent"],
      category: "Place",
      pronunciation: {
        UK: "/ˈæb.i/",
      },
      image:
        "https://cdn.britannica.com/12/144312-050-B06DACFC/Dominican-abbey-Santa-Maria-da-Vitoria-Portugal.jpg",
    },
    {
      word: "Cacophony",
      definition: "A harsh, discordant mixture of sounds.",
      relatedWords: ["Noise", "Discord", "Clamor"],
      category: "Sound",
      pronunciation: { UK: "/kəˈkɒf.ə.ni/"},
      image: "https://example.com/cacophony-image.png",
    },
    {
      word: "Ephemeral",
      definition: "Lasting for a very short time.",
      relatedWords: ["Fleeting", "Transient", "Short-lived"],
      category: "Time",
      pronunciation: { UK: "/ɪˈfem.ər.əl/"},
      image: "https://example.com/ephemeral-image.png",
    },
    {
      word: "Gregarious",
      definition: "Fond of company; sociable.",
      relatedWords: ["Sociable", "Friendly", "Outspoken"],
      category: "Personality",
      pronunciation: { UK: "/ɡrɪˈɡeəriəs/"},
      image: "https://example.com/gregarious-image.png",
    },
    {
      word: "Harbinger",
      definition:
        "A person or thing that announces or signals the approach of another.",
      relatedWords: ["Messenger", "Forerunner", "Precursor"],
      category: "Person/Thing",
      pronunciation: { UK: "/ˈhɑːbɪndʒə(r)/"},
      image: "https://example.com/harbinger-image.png",
    },
    {
      word: "Kinetic",
      definition: "Relating to or resulting from motion.",
      relatedWords: ["Moving", "Dynamic", "Active"],
      category: "Physics",
      pronunciation: { UK: "/kɪˈnɛtɪk/"},
      image: "https://example.com/kinetic-image.png",
    },
    {
      word: "Laconic",
      definition: "Using very few words.",
      relatedWords: ["Succinct", "Brief", "Concise"],
      category: "Communication",
      pronunciation: { UK: "/ləˈkɒnɪk/"},
      image: "https://example.com/laconic-image.png",
    },
    {
      word: "Mellifluous",
      definition: "Sweet or musical; pleasant to hear.",
      relatedWords: ["Euphonious", "Harmonious", "Musical"],
      category: "Sound",
      pronunciation: { UK: "/mɛˈlɪfluəs/"},
      image: "https://example.com/mellifluous-image.png",
    },
  ];

  const router = useRouter();

  const handleWordPress = (word: Object) => {
    router.push(`/details/vocabularyDetail?word=${JSON.stringify(word)}`);
  };

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
          <TouchableOpacity key={index} style={styles.wordItem} onPress={() => handleWordPress(word)}>
            <Text style={styles.wordText}>{word.word}</Text>
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
          </TouchableOpacity>
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

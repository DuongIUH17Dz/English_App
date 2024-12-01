import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Bookmark } from "lucide-react-native";
import Svg, { Path } from "react-native-svg";
import { useRouter } from "expo-router";

export default function dictionary() {
  const router = useRouter();
  const [selectedWord, setSelectedWord] = useState(null);

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
      word: "Iridescent",
      definition:
        "Showing luminous colors that seem to change when seen from different angles.",
      relatedWords: ["Shimmering", "Gleaming", "Rainbow-like"],
      category: "Visual",
      pronunciation: { UK: "/ˌɪrɪˈdɛsənt/"},
      image: "https://example.com/iridescent-image.png",
    },
    {
      word: "Juxtapose",
      definition:
        "To place or deal with close together for contrasting effect.",
      relatedWords: ["Contrast", "Compare", "Oppose"],
      category: "Action",
      pronunciation: { UK: "/ˈdʒʌkstəpəʊz/"},
      image: "https://example.com/juxtapose-image.png",
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
    {
      word: "Nuance",
      definition:
        "A subtle difference in or shade of meaning, expression, or sound.",
      relatedWords: ["Subtlety", "Refinement", "Distinction"],
      category: "Language",
      pronunciation: { UK: "/ˈnjuːɑːns/"},
      image: "https://example.com/nuance-image.png",
    },
    {
      word: "Obdurate",
      definition:
        "Stubbornly refusing to change one's opinion or course of action.",
      relatedWords: ["Stubborn", "Resistant", "Intransigent"],
      category: "Personality",
      pronunciation: { UK: "/ˈɒbdʒʊreɪt/"},
      image: "https://example.com/obdurate-image.png",
    },
    {
      word: "Quixotic",
      definition: "Exceedingly idealistic; unrealistic and impractical.",
      relatedWords: ["Idealistic", "Romantic", "Unrealistic"],
      category: "Personality",
      pronunciation: { UK: "/kwɪkˈsɒtɪk/"},
      image: "https://example.com/quixotic-image.png",
    },
  ];

  const categories = [
    { id: 1, name: "Popular", selected: true },
    { id: 2, name: "Daily routine", selected: false },
    { id: 3, name: "Family", selected: false },
  ];

  const [searchText, setSearchText] = useState("");
  const [filteredWords, setFilteredWords] = useState([]);

  const handleWordPress = (word: Object) => {
    router.push(`/details/vocabularyDetail?word=${JSON.stringify(word)}`);
  };

  const handleWordSaved = () => {
    router.push("/details/vocabularySaved");
  };

  const handleSearch = (text) => {
    setSearchText(text);
    const filtered = words.filter((wordObj) =>
      wordObj.word.toLowerCase().startsWith(text.toLowerCase())
    );
    setFilteredWords(filtered);
  };

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            style={styles.searchIcon}
          >
            <Path
              d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
              stroke="#868686"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              d="M22 22L20 20"
              stroke="#868686"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
          <TextInput
            placeholder="Search for Words"
            style={styles.searchInput}
            value={searchText}
            onChangeText={handleSearch}
          />
        </View>
        <TouchableOpacity onPress={handleWordSaved}>
          <Svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            style={styles.searchIcon}
          >
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24.5 12.9477V18.7729C24.5 22.3849 24.5 24.192 23.6437 24.9807C23.2353 25.3575 22.7197 25.5944 22.1702 25.6574C21.0187 25.7892 19.6735 24.5992 16.9843 22.2204C15.7943 21.1692 15.2005 20.643 14.5133 20.5054C14.1745 20.437 13.8255 20.437 13.4867 20.5054C12.7983 20.643 12.2045 21.1692 11.0157 22.2204C8.3265 24.5992 6.98133 25.7892 5.82983 25.6562C5.27944 25.5931 4.7634 25.3565 4.35633 24.9807C3.5 24.192 3.5 22.386 3.5 18.7729V12.9465C3.5 7.94504 3.5 5.44254 5.03767 3.88854C6.57533 2.33337 9.051 2.33337 14 2.33337C18.9502 2.33337 21.4247 2.33337 22.9623 3.88737C24.5 5.44254 24.5 7.94504 24.5 12.9477Z"
              fill="#5FABCC"
            />
          </Svg>
        </TouchableOpacity>
      </View>

      {/* Categories */}
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoriesContainer}
        >
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={[
                styles.categoryChip,
                category.selected && styles.selectedCategoryChip,
              ]}
            >
              <Text
                style={[
                  styles.categoryText,
                  category.selected && styles.selectedCategoryText,
                ]}
              >
                {category.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Word List */}
      <ScrollView style={styles.wordList}>
        {(searchText.length > 0 ? filteredWords : words).map(
          (wordObj, index) => (
            <TouchableOpacity
              key={index}
              activeOpacity={1}
              onPress={() => handleWordPress(wordObj)}
            >
              <View style={styles.wordItem}>
                <Text style={styles.wordText}>{wordObj.word}</Text>
                <TouchableOpacity>
                  <Bookmark size={20} color="#64B5F6" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )
        )}
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
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    gap: 12,
    backgroundColor: "#ffffff",
    elevation: 4,
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    paddingHorizontal: 12,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  searchInput: {
    flex: 1,
    height: 48,
    fontSize: 16,
    marginLeft: 8,
    color: "#868686",
  },
  searchIcon: {
    marginRight: 8,
  },
  categoriesContainer: {
    paddingHorizontal: 16,
    marginBottom: 15,
    marginTop: 15,
  },
  categoryChip: {
    height: 36,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: "#fffff",
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E3E3E3",
  },
  selectedCategoryChip: {
    backgroundColor: "#91CDE7",
    borderWidth: 0,
  },
  categoryText: {
    color: "black",
    fontSize: 18,
    textAlign: "center",
  },
  selectedCategoryText: {
    color: "black",
  },
  wordList: {
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
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  wordText: {
    fontSize: 18,
    color: "#333",
  },
});

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
import { useNavigation } from "expo-router";
import { NavigationProp } from "@react-navigation/native";
import { useLocalSearchParams } from "expo-router";
import * as Speech from 'expo-speech';

const vocabulary = {
  "1": [
    {
      word: "lion",
      pronoun: "/ˈlaɪən/",
      images: [
        { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLbC0Jg6bkbOamUL4_YEgnqx7yOI6Erpno_w&s", correct: true },
        { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBL1k_Ex-4nD3XSg7doLGkBb-Xa4YA9lul_w&s", correct: false },
      ],
    },
    {
      word: "elephant",
      pronoun: "/ˈelɪfənt/",
      images: [
        { uri: "https://d1jyxxz9imt9yb.cloudfront.net/medialib/5065/image/s1300x1300/LC202306_AmboseliWildlife_030_429131_reduced.jpg", correct: true },
        { uri: "https://thainguyen.gov.vn/documents/130312/5151250/ha_ma_3-1638754224491.jpg/7c9db7bb-2877-40a5-9201-56b51fba98c6?t=1638785625151", correct: false },
      ],
    },
    {
      word: "zebra",
      pronoun: "/ˈziːbrə/",
      images: [
        { uri: "https://www.365vet.co.uk/media/magefan_blog/Horse_close_up.jpg", correct: false },
        { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOe-5qwnhbnT456M2-NDvHz4fJTUM5QXwogA&s", correct: true },
      ],
    },
    {
      word: "giraffe",
      pronoun: "/dʒɪˈræf/",
      images: [
        { uri: "https://animals.sandiegozoo.org/sites/default/files/2016-11/animals_hero_giraffe_1_0.jpg", correct: true },
        { uri: "https://cdn.britannica.com/55/174255-050-526314B6/brown-Guernsey-cow.jpg", correct: false },
      ],
    },
  ],
  "2": [
    {
      word: "pizza",
      pronoun: "/ˈpɪt.sə/",
      images: [
        { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRd9warJ9CJ2yXcKHBQTtLL5AQt2dqJ1Zz9A&s", correct: true },
        { uri: "https://images.themodernproper.com/billowy-turkey/production/posts/PastaPrimavera_10.jpg?w=1200&h=1200&q=60&fm=jpg&fit=crop&dm=1719193287&s=0104e0b241aea73e5709db128503d749", correct: false },
      ],
    },
    {
      word: "burger",
      pronoun: "/ˈbɜːɡər/",
      images: [
        { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgVuo_sYN__UzUkBoVI4C_21Fy8IOqEcPldA&s", correct: false },
        { uri: "https://www.chicken.ca/wp-content/uploads/2013/05/Moist-Chicken-Burgers-1180x580.jpg", correct: true },
      ],
    },
    {
      word: "pasta",
      pronoun: "/ˈpɑːstə/",
      images: [
        { uri: "https://www.allrecipes.com/thmb/mvO1mRRH1zTz1SvbwBCTz78CRJI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/67700_RichPastaforthePoorKitchen_ddmfs_4x3_2284-220302ec8328442096df370dede357d7.jpg", correct: true },
        { uri: "https://hcasp.com/wp-content/uploads/2021/09/152420-xao-sot-bo-bam-660x376-1.jpg", correct: false },
      ],
    },
    {
      word: "salad",
      pronoun: "/ˈsæləd/",
      images: [
        { uri: "https://i-giadinh.vnecdn.net/2021/10/26/saladrauqua-1635240739-5476-1635240778.jpg", correct: true },
        { uri: "https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature_thumb.jpg?sfvrsn=7abe71fe_4", correct: false },
      ],
    },
  ],
  "3": [
    {
      word: "painting",
      pronoun: "/ˈpeɪntɪŋ/",
      images: [
        { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe6Xv1_WQVxuazfNymT7McRlA9qpLbxHfbpQ&s", correct: true },
        { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHBz4568C_VwuX2YB6LJSVa5jzadPvprRQFg&s", correct: false },
      ],
    },
    {
      word: "sculpture",
      pronoun: "/ˈskʌlp.tʃər/",
      images: [
        { uri: "https://www.lmtmusicacademy.co.uk/wp-content/uploads/2024/04/woman-singing-on-stage-with-background-lights.jpg", correct: false },
        { uri: "https://i0.wp.com/blog.artsper.com/wp-content/uploads/2022/05/Michelangelo-Featured-image-1200-x-675-px.jpg?fit=1200%2C675&ssl=1", correct: true },
      ],
    },
    {
      word: "music",
      pronoun: "/ˈmjuːzɪk/",
      images: [
        { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTef_b84s52sJo3fBibb7-VGenkRTabstp7Mg&s", correct: true },
        { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUTF6MWEHtw4Mq_xNW7_LD0RA86j-WqXa44g&s", correct: false },
      ],
    }
  ],
};

export default function QuizDetails() {
  const { id, title } = useLocalSearchParams();
  const navigation = useNavigation<NavigationProp<any>>();
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<null | number>(null);
  const [score, setScore] = useState(0);
  
  const currentVocabulary = vocabulary[id as keyof typeof vocabulary] || [];
  const currentWord = currentVocabulary[currentIndex] || {};

  const playPronunciation = () => {
    let pronunciation = currentWord.word;

    try {
      Speech.speak(pronunciation);
    } catch (error) {
      console.error("Error playing pronunciation:", error);
      alert("Error playing pronunciation. Please check your device settings.");
    }
  };
  
  const handleImagePress = (index: number, correct: boolean) => {
    setSelectedImage(index);
    if (correct) {
      setScore(prev => prev + 1);
    }
    
    setTimeout(() => {
      if (currentIndex + 1 < currentVocabulary.length) {
        setCurrentIndex(prev => prev + 1);
      } else {
        alert(`Quiz completed! You scored ${score + (correct ? 1 : 0)} out of ${currentVocabulary.length}`);
        navigation.goBack(); 
      }
      setSelectedImage(null);
    }, 1000);
  };

  const handleDontKnow = () => {
    setCurrentIndex(prev => (prev + 1) % currentVocabulary.length);
    setSelectedImage(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.word}>{currentWord.word}</Text>
        <View style={styles.wordContainer}>
          <Text style={styles.pronoun}>{currentWord.pronoun}</Text>
          <TouchableOpacity onPress={() => playPronunciation()}>
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

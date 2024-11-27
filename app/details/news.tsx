import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import { useNavigation } from "expo-router";
import { NavigationProp } from "@react-navigation/native";

const sportData: Data[] = [
  {
    id: "1",
    title: "Airlines ground Asia ground Bali flights after volcano erupts",
    image: "https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg",
    content: "Airlines ground Asia ground Bali flights after volcano erupts",
  },
  {
    id: "2",
    title: "New Sport Innovations Changing The Game",
    image: "https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg",
    content: "Airlines ground Asia ground Bali flights after volcano erupts",
  },
  {
    id: "3",
    title: "Sports Events You Shouldn't Miss This Year",
    image: "https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg",
    content: "Airlines ground Asia ground Bali flights after volcano erupts",
  },
  {
    id: "4",
    title: "How Technology is Shaping the Future of Sports",
    image: "https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg",
    content: "Airlines ground Asia ground Bali flights after volcano erupts",
  },
];

const travelData: Data[] = [
  {
    id: "1",
    title: "Explore Bali: The Ultimate Travel Guide",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvB5HdszlBqgSe3rDL6o-ArxDL2XWkqd3qTg&s",
    content: "Airlines ground Asia ground Bali flights after volcano erupts",
  },

  {
    id: "2",
    title: "Top 10 Destinations for 2024",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvB5HdszlBqgSe3rDL6o-ArxDL2XWkqd3qTg&s",
    content: "Airlines ground Asia ground Bali flights after volcano erupts",
  },
  {
    id: "3",
    title: "How to Travel Smart on a Budget",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvB5HdszlBqgSe3rDL6o-ArxDL2XWkqd3qTg&s",
    content: "Airlines ground Asia ground Bali flights after volcano erupts",
  },
  {
    id: "4",
    title: "The Rise of Eco-Tourism: A Green Revolution",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvB5HdszlBqgSe3rDL6o-ArxDL2XWkqd3qTg&s",
    content: "Airlines ground Asia ground Bali flights after volcano erupts",
  },
];

const entertainmentData: Data[] = [
  {
    id: "1",
    title: "Upcoming Movies You Need to Watch",
    image:
      "https://lumolog.com/wp-content/uploads/2024/04/Entertainment-Trends-1024x683.jpg",
    content: "Airlines ground Asia ground Bali flights after volcano erupts",
  },
  {
    id: "2",
    title: "Celebrity News: What's Happening Right Now",
    image:
      "https://lumolog.com/wp-content/uploads/2024/04/Entertainment-Trends-1024x683.jpg",
    content: "Airlines ground Asia ground Bali flights after volcano erupts",
  },
  {
    id: "3",
    title: "Best TV Shows to Binge-Watch This Month",
    image:
      "https://lumolog.com/wp-content/uploads/2024/04/Entertainment-Trends-1024x683.jpg",
    content: "Airlines ground Asia ground Bali flights after volcano erupts",
  },
  {
    id: "4",
    title: "Music Trends to Follow in 2024",
    image:
      "https://lumolog.com/wp-content/uploads/2024/04/Entertainment-Trends-1024x683.jpg",
    content: "Airlines ground Asia ground Bali flights after volcano erupts",
  },
];

interface Data {
  id: string;
  title: string;
  image: string;
  content: string;
}

export default function News() {
  const router = useRouter();
  const navigation = useNavigation<NavigationProp<any>>();

  const handleNewsPress = (word: Object) => {
    router.push(`/details/newDetails?word=${JSON.stringify(word)}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ChevronLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>News</Text>
      </View>
      <ScrollView>
        {/* Sport Section */}

        <Text style={styles.sectionTitle}>Sport</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalScroll}
        >
          {sportData.map((item) => (
            <Pressable
              key={item.id}
              style={styles.recentlyCard}
              onPress={() => handleNewsPress(item)}
            >
              <Image
                source={{ uri: item.image }}
                style={styles.recentlyImage}
              />
              <Text style={styles.recentlyText} numberOfLines={2}>
                {item.title}
              </Text>
            </Pressable>
          ))}
        </ScrollView>

        {/* Travel Section */}

        <Text style={styles.sectionTitle}>Travel</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalScroll}
        >
          {travelData.map((item) => (
            <Pressable
              key={item.id}
              style={styles.recentlyCard}
              onPress={() => handleNewsPress(item)}
            >
              <Image
                source={{ uri: item.image }}
                style={styles.recentlyImage}
              />
              <Text style={styles.recentlyText} numberOfLines={2}>
                {item.title}
              </Text>
            </Pressable>
          ))}
        </ScrollView>

        {/* Entertainment Section */}

        <Text style={styles.sectionTitle}>Entertainment</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalScroll}
        >
          {entertainmentData.map((item) => (
            <Pressable
              key={item.id}
              style={styles.recentlyCard}
              onPress={() => handleNewsPress(item)}
            >
              <Image
                source={{ uri: item.image }}
                style={styles.recentlyImage}
              />
              <Text style={styles.recentlyText} numberOfLines={2}>
                {item.title}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
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
  sectionTitle: {
    fontSize: 22,
    fontWeight: "600",
    marginLeft: 15,
    marginTop: 10,
  },
  horizontalScroll: {
    marginBottom: 15,
    marginTop: 15,
    marginLeft: 16,
  },
  recentlyCard: {
    marginRight: 16,
    width: 200,
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  recentlyImage: {
    width: "100%",
    height: 100,
  },
  recentlyText: {
    fontSize: 16,
    padding: 8,
  },
});

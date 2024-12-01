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
    content:
      "Mount Agung, a volcano in Bali, Indonesia, erupted on [Date], sending a plume of ash and smoke high into the atmosphere.  This eruption prompted several major airlines to ground flights to and from Denpasar Airport (DPS), Bali's main international airport.  Airlines such as [Airline 1], [Airline 2], and [Airline 3] announced cancellations and delays, affecting thousands of passengers.  The ash cloud posed a significant threat to aircraft engines, and airlines prioritized safety by halting operations.  Travelers were advised to check with their airlines for updates and potential flight disruptions. The eruption also caused concerns about air quality in nearby areas.  Authorities advised residents to wear masks and stay indoors when possible to avoid respiratory problems from the volcanic ash.  Airport officials were working diligently to assess the situation and resume normal operations as quickly as possible, but a timeline for reopening the airport remained uncertain.  The eruption served as a reminder of the potent forces of nature and the potential impact on global travel.",
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
    content:
      "Bali, the 'Island of Gods,' offers a captivating blend of natural beauty, vibrant culture, and spiritual serenity.  From the lush rice terraces of Ubud to the pristine beaches of Seminyak, Bali caters to every traveler's desire.  Explore ancient temples like Tanah Lot, perched dramatically on a rock formation in the sea, and Uluwatu, known for its breathtaking cliffside location and Kecak dance performances at sunset. Immerse yourself in Balinese culture by visiting local villages, witnessing traditional ceremonies, and learning about the island's rich artistic heritage. Indulge in delicious Indonesian cuisine, from savory satays to flavorful curries, and experience the warm hospitality of the Balinese people.",
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
    content:
      "The summer blockbuster season is upon us, and this year's lineup promises a thrilling array of films for every moviegoer.  From superhero epics to heartwarming comedies, there's something for everyone.  Don't miss [Movie Title 1], a spectacular action-adventure that will leave you on the edge of your seat.  [Movie Title 2] is a critically acclaimed drama that explores themes of love, loss, and redemption.  For comedy fans, [Movie Title 3] is a hilarious ensemble cast that delivers non-stop laughs.  For those seeking something different, [Movie Title 4] is an imaginative fantasy adventure that takes viewers to another world entirely.  And for animation lovers, [Movie Title 5] is a stunning visual masterpiece that will capture the hearts of viewers of all ages.",
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

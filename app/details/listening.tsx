import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  SafeAreaView,
} from "react-native";
import { useRouter } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import { useNavigation } from "expo-router";
import { NavigationProp } from "@react-navigation/native";

const recentlyData: Data[] = [
  {
    id: "1",
    title: "New smartphone model launched in Europe market",
    image:
      "https://img.freepik.com/free-vector/realistic-display-smartphone-with-different-apps_52683-30241.jpg",
    content: [
      "New smartphone model launched with innovative features like 5G compatibility.",
      "The device will revolutionize the way users interact with technology.",
    ],
  },
  {
    id: "2",
    title: "Tech giant releases new AI-powered software update",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJE36_lj6-kFmaw2HTL15e80B5_zPgYKFbgQ&s",
    content: [
      "AI-powered updates can help devices learn from user behavior.",
      "The new update is expected to boost productivity across various industries.",
    ],
  },
  {
    id: "3",
    title: "Countries collaborate on new space exploration mission",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWSK1q17cICchVA2ABHzRG9RkHBYNR6p6Jfw&s",
    content: [
      "International collaboration is key to the success of space missions.",
      "The new mission aims to explore the outer limits of our solar system.",
    ],
  },
  {
    id: "4",
    title: "Wildfires devastate regions across North America",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf5bcJEoq-f7SCZSvoOwB0FC9x2VTHir43sQ&s",
    content: [
      "The wildfires have displaced thousands of families across the region.",
      "Emergency relief efforts are underway to assist those affected.",
    ],
  },
];

const topicsData: Data[] = [
  {
    id: "5",
    title: "Technology",
    image:
      "https://www.shutterstock.com/shutterstock/photos/1932042689/display_1500/stock-photo-businessman-using-mobile-smart-phone-business-global-internet-connection-application-technology-1932042689.jpg",
    content: [
      "The wildfires have displaced thousands of families across the region.",
      "Emergency relief efforts are underway to assist those affected.",
    ],
  },
  {
    id: "6",
    title: "Health",
    image:
      "https://shanhealth.vn/wp-content/uploads/2023/11/mental-health-la-gi-1.webp",
    content: [
      "The wildfires have displaced thousands of families across the region.",
      "Emergency relief efforts are underway to assist those affected.",
    ],
  },
  {
    id: "7",
    title: "Environment",
    image:
      "https://t3.ftcdn.net/jpg/05/78/65/98/360_F_578659816_v2ZJMwlpFisEE66gWt6h3POodHeLYseI.jpg",
    content: [
      "The wildfires have displaced thousands of families across the region.",
      "Emergency relief efforts are underway to assist those affected.",
    ],
  },
  {
    id: "8",
    title: "Finance",
    image:
      "https://img.freepik.com/free-vector/finance-financial-performance-concept-illustration_53876-43398.jpg",
    content: [
      "The wildfires have displaced thousands of families across the region.",
      "Emergency relief efforts are underway to assist those affected.",
    ],
  },
  {
    id: "9",
    title: "Sports",
    image:
      "https://t4.ftcdn.net/jpg/00/04/43/79/360_F_4437974_DbE4NRiaoRtUeivMyfPoXZFNdCnYmjPq.jpg",
    content: [
      "The wildfires have displaced thousands of families across the region.",
      "Emergency relief efforts are underway to assist those affected.",
    ],
  },
  {
    id: "10",
    title: "Entertainment",
    image:
      "https://lumolog.com/wp-content/uploads/2024/04/Entertainment-Trends-1024x683.jpg",
    content: [
      "The wildfires have displaced thousands of families across the region.",
      "Emergency relief efforts are underway to assist those affected.",
    ],
  },
];

interface Data {
  id: string;
  title: string;
  image: string;
  content: string[];
}

export default function listening() {
  const router = useRouter();
  const navigation = useNavigation<NavigationProp<any>>();

  const handleListeningPress = (word: Object) => {
    console.log("Listening Pressed:", word);
    router.push(`/details/listeningDetails?word=${JSON.stringify(word)}`);
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ChevronLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Listening</Text>
      </View>

      <ScrollView>
        {/* Recently Section */}
        <Text style={styles.sectionTitle}>Recently</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalScroll}
        >
          {recentlyData.map((item) => (
            <TouchableOpacity key={item.id} onPress={() => handleListeningPress(item)}>
              <View style={styles.recentlyCard}>
                <Image
                  source={{ uri: item.image }}
                  style={styles.recentlyImage}
                />
                <Text style={styles.recentlyText} numberOfLines={2}>
                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Topics Section */}
        <Text style={styles.sectionTitle}>Topics</Text>
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ScrollView
            horizontal={true}
            contentContainerStyle={{ width: "95%", height: "100%" }}
          >
            <FlatList
              data={topicsData}
              keyExtractor={(item) => item.id}
              numColumns={2}
              columnWrapperStyle={styles.topicRow}
              contentContainerStyle={styles.topicList}
              renderItem={({ item }) => (
                <Pressable
                  onPress={() => handleListeningPress(item)}
                  style={styles.topicCard}
                >
                  <Image
                    source={{ uri: item.image }}
                    style={styles.topicImage}
                  />
                  <Text style={styles.topicText}>{item.title}</Text>
                </Pressable>
              )}
            />
          </ScrollView>
        </View>
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
  },
  recentlyImage: {
    width: "100%",
    height: 100,
  },
  recentlyText: {
    fontSize: 16,
    padding: 8,
  },
  topicList: {
    paddingVertical: 8,
  },
  topicRow: {
    marginTop: 8,
    justifyContent: "space-around",
    marginBottom: 16,
  },
  topicCard: {
    flex: 1,
    marginHorizontal: 8,
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  topicImage: {
    width: "100%",
    height: 120,
    resizeMode: "cover",
  },
  topicText: {
    fontSize: 17,
    textAlign: "center",
    padding: 8,
  },
});

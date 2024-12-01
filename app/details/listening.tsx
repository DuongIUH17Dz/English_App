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
      "New smartphone model launched with innovative features like 5G compatibility, boasting download speeds several times faster than previous generations.  This cutting-edge technology promises a seamless user experience for streaming high-definition videos, downloading large files, and playing graphically demanding games without lag.",
      "The device's sleek design incorporates a high-resolution AMOLED display, offering vibrant colors and exceptional clarity.  It also features an advanced processor, ensuring smooth and responsive performance even under heavy multitasking.  Furthermore, the enhanced camera system includes a high-megapixel main sensor with improved low-light capabilities, allowing users to capture stunning photos and videos in various lighting conditions.",
      "Beyond its technological advancements, the new smartphone model emphasizes sustainability.  The device is packaged in eco-friendly materials, reducing its environmental footprint.  The company has also committed to using recycled components in future models.  This commitment to sustainable practices is expected to appeal to environmentally conscious consumers.",
      "The device will revolutionize the way users interact with technology, offering an unparalleled level of integration with other smart devices and services.  Pre-orders have already exceeded expectations, signaling strong market interest in this groundbreaking new smartphone.",
    ],
  },
  {
    id: "2",
    title: "Tech giant releases new AI-powered software update",
    image:
      "https://elcom.com.vn/storage/uploads/images/Myu7kvXj7XEfCY7NzDD495duNCzTeQR4HAR5UGbe.jpg",
    content: [
      "AI-powered updates can help devices learn from user behavior, adapting to individual preferences and optimizing performance over time.  This personalized experience tailors the device's functionality to each user's specific needs, resulting in a more intuitive and efficient workflow. The learning algorithms analyze user interactions to predict future needs and proactively suggest relevant actions, minimizing manual intervention.",
      "The new update introduces a suite of advanced AI-powered features, including intelligent task management, predictive text capabilities, and enhanced security protocols.  The intelligent task management system automatically prioritizes tasks based on user habits and deadlines, ensuring that crucial tasks are addressed promptly.  The predictive text function learns user vocabulary and writing style to offer more accurate and personalized suggestions.",
      "The enhanced security protocols utilize advanced machine learning algorithms to identify and thwart malicious threats in real time. This robust security system protects user data and privacy, ensuring a secure digital experience.  The update also incorporates features designed to improve accessibility for users with disabilities, making the technology more inclusive and user-friendly.",
      "The new update is expected to boost productivity across various industries, streamlining workflows and enhancing efficiency in diverse sectors.  From healthcare and finance to education and manufacturing, the AI-powered capabilities are poised to revolutionize operations and drive innovation across the board.",
    ],
  },
  {
    id: "3",
    title: "Countries collaborate on new space exploration mission",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWSK1q17cICchVA2ABHzRG9RkHBYNR6p6Jfw&s",
    content: [
      "International collaboration is key to the success of space missions, pooling resources, expertise, and technological advancements from various nations. This collaborative approach allows for the development of more sophisticated and robust spacecraft, enabling ambitious missions that would be unfeasible for a single nation to undertake. The shared knowledge and experience foster innovation and accelerate progress in space exploration.",
      "The new mission aims to explore the outer limits of our solar system, focusing on the study of distant planets, moons, and asteroids.  The mission's primary objectives include the search for extraterrestrial life, the analysis of planetary formations, and the investigation of potential resources in space.  Scientists hope to gain a deeper understanding of the origins of our solar system and the potential for life beyond Earth.",
      "The mission will utilize cutting-edge technologies, including advanced propulsion systems, sophisticated robotic explorers, and high-resolution imaging equipment.  The mission's duration is expected to span several years, requiring meticulous planning and execution. The extensive data gathered will be analyzed by scientists worldwide, contributing to a significant advancement in our knowledge of the cosmos.",
    ],
  },
  {
    id: "4",
    title: "Wildfires devastate regions across North America",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf5bcJEoq-f7SCZSvoOwB0FC9x2VTHir43sQ&s",
    content: [
      "The wildfires have displaced thousands of families across the region, forcing them to evacuate their homes and seek refuge in temporary shelters.  Many have lost their homes, possessions, and livelihoods, facing immense challenges in the aftermath of the devastating fires.  The scale of destruction is unprecedented, leaving entire communities in ruins.",
      "Emergency relief efforts are underway to assist those affected, providing food, water, shelter, and medical care.  Volunteers and aid organizations are working tirelessly to provide support to those in need, distributing essential supplies and offering emotional support to those who have suffered significant loss.  The recovery process will be long and arduous, requiring significant resources and community support.",
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
      "The rapid advancement of technology continues to reshape our world, from artificial intelligence and machine learning to breakthroughs in renewable energy and space exploration.  The integration of technology into daily life is transforming industries and creating new opportunities, while also presenting challenges related to data privacy, cybersecurity, and ethical considerations.",
      "The development of innovative technologies presents both exciting possibilities and potential risks.  For example, artificial intelligence offers transformative capabilities across various sectors, including healthcare, finance, and transportation, but raises concerns about job displacement and algorithmic bias.  Similarly, the use of renewable energy sources is crucial for mitigating climate change, yet faces hurdles in terms of scalability and infrastructure development.",
      "The digital revolution is fundamentally altering the way we communicate, access information, and interact with our environment.  While technological advancements have led to increased connectivity and efficiency, they also raise issues concerning information security, digital inequality, and the potential for misuse.  Navigating these challenges requires a multi-faceted approach involving collaboration among governments, industries, and individuals.",
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
            <TouchableOpacity
              key={item.id}
              onPress={() => handleListeningPress(item)}
            >
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

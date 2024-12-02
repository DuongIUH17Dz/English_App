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


interface Data {
  id: string;
  title: string;
  image: string;
  content: string[];
}

export default function listening() {
  const data = require("../../data/data.json");

  const recentlyData: Data[] = data.recentlyData;
const topicsData: Data[] = data.topicsData;

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

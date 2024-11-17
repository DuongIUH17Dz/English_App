import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

// Định nghĩa kiểu dữ liệu cho mỗi video
interface Video {
  id: string;
  title: string;
  image: any; // Hoặc bạn có thể thay "any" bằng kiểu dữ liệu cụ thể nếu muốn (ví dụ: ImageSourcePropType từ react-native)
  category: string;
  time: string;
}

const videos: Video[] = [
  {
    id: "1",
    title: "Exploring the World",
    image: require("../../assets/images/video1.png"),
    category: "News",
    time: "10 hrs ago",
  },
  {
    id: "2",
    title: "Cooking Masterclass",
    image: require("../../assets/images/video1.png"),
    category: "News",
    time: "12 hrs ago",
  },
  {
    id: "3",
    title: "Tech Innovations 2024",
    image: require("../../assets/images/video1.png"),
    category: "News",
    time: "8 hrs ago",
  },
  {
    id: "4",
    title: "Workout Motivation",
    image: require("../../assets/images/video1.png"),
    category: "News",
    time: "5 hrs ago",
  },
];

export default function home() {
  // Sửa lại renderItem với kiểu dữ liệu rõ ràng
  const renderVideoItem = ({ item }: { item: Video }) => (
    <View style={styles.videoItem}>
      
      <View style={styles.videoInfo}>
        <Text style={styles.videoTitle}>{item.title}</Text>
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <Text style={styles.videoCategory}> {item.category}</Text>
        <Text style={styles.videoTime}>{item.time}</Text>
        </View>
        
      </View>
      <Image source={item.image} style={styles.videoImage} />
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          {/* Logo */}
          <Image
            source={require("../../assets/images/cat.png")}
            style={styles.logo}
          />
          {/* Greeting */}
          <View style={styles.greetingContainer}>
            <Text style={styles.greeting}>Hi Nguyen Dinh Duong</Text>
            <Text style={styles.subGreeting}>Have a nice day!</Text>
          </View>
          {/* Notification Icon */}
          <TouchableOpacity>
            <FontAwesome name="bell" size={24} color="#000" />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            width: 88,
            height: 23,
            fontSize: 18,
            marginTop: 17,
            marginLeft: 2,
            marginBottom: -8,
            fontWeight: "bold",
          }}
        >
          Dictionary
        </Text>

        {/* Search */}
        <View style={styles.searchContainer}>
          <TextInput placeholder="Search" style={styles.searchInput} />
          <TouchableOpacity style={styles.searchButton}>
            <FontAwesome name="search" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Banner */}
      <View style={styles.banner}>
        <Image
          source={require("../../assets/images/banner.png")}
          style={styles.bannerImage}
        />
      </View>

      {/* Updated Section */}
      <View style={styles.categoryContainer}>
        <TouchableOpacity style={styles.categoryItem}>
          <Image
            source={require("../../assets/images/Listening.png")}
            style={styles.categoryImage}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryItem}>
          <Image
            source={require("../../assets/images/news.png")}
            style={styles.categoryImage}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryItem}>
          <Image
            source={require("../../assets/images/Blog.png")}
            style={styles.categoryImage}
          />
        </TouchableOpacity>
      </View>

      {/* Viral Videos */}
      <View style={styles.videoSection}>
        <Text style={styles.sectionTitle}>Viral Videos</Text>
        <FlatList
          data={videos}
          renderItem={renderVideoItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 40,
  },
  headerTop: {
    marginLeft: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    width: 39,
    height: 50.05,
    borderRadius: 5,
  },
  greetingContainer: {
    flex: 1,
    marginLeft: 10,
  },
  greeting: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subGreeting: {
    fontSize: 14,
    color: "#777",
  },
  searchContainer: {
    marginLeft: 8,
    flexDirection: "row",
    marginTop: 20,
  },
  searchInput: {
    flex: 1,
    width: 350,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 14.45,
    padding: 10,
  },
  searchButton: {
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 8,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  banner: {
    marginTop: 20,
    borderRadius: 22,
    overflow: "hidden",
  },
  bannerImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  categoryContainer: {
    width: 380,
    flexDirection: "row",
    marginTop: 20,
  },
  categoryItem: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: 5,
  },
  categoryImage: {
    width: 40,
    height: 50,
    resizeMode: "contain",
  },
  videoSection: {
    marginTop: 30,
  },
  videoItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    backgroundColor: "#f9f9f9",
    padding: 10,
    borderRadius: 10,
  },
  videoImage: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },
  videoInfo: {
    flex: 1,
    marginLeft: 5,
  },
  videoTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  videoCategory: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
  videoTime: {
    fontSize: 12,
    color: "#aaa",
    marginLeft:10,
    marginTop: 8,
  },
});

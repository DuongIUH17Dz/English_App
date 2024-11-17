import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Homepage() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          {/* Logo */}
          <Image
            source={require("../assets/images/cat.png")}
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
        <Text style={{ width:88,height:23,fontSize:18,marginTop:17,marginLeft:2,marginBottom:-8,fontWeight: 'bold'}}>Dictionary</Text>

        {/* Search */}
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Search"
            style={styles.searchInput}
          />
          <TouchableOpacity style={styles.searchButton}>
            <FontAwesome name="search" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Banner */}
      <View style={styles.banner}>
        <Image
          source={require("../assets/images/banner.png")}
          style={styles.bannerImage}
        />
      </View>

      {/* Updated Section */}
      <View style={styles.categoryContainer}>
        <TouchableOpacity style={styles.categoryItem}>
          <Image
            source={require("../assets/images/Listening.png")}
            style={styles.categoryImage}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryItem}>
          <Image
            source={require("../assets/images/news.png")}
            style={styles.categoryImage}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryItem}>
          <Image
            source={require("../assets/images/Blog.png")}
            style={styles.categoryImage}
          />
        </TouchableOpacity>
      </View>

      {/* Viral Video */}
      <View style={styles.video}>
        <Text style={styles.sectionTitle}>Viral Video</Text>
        <TouchableOpacity style={styles.videoThumbnail}>
          <Image
            source={require("../assets/images/banner.png")}
            style={styles.videoImage}
          />
        </TouchableOpacity>
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
    marginLeft:10,
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
    marginLeft:8,
    flexDirection: "row",
    marginTop: 20,
  },
  searchInput: {
    flex: 1,
    width:350,
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
    borderRadius: 10,
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
    width:380,
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
  video: {
    marginTop: 30,
  },
  videoThumbnail: {
    borderRadius: 10,
    overflow: "hidden",
  },
  videoImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
});

import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Audio } from "expo-av";
import Slider from "@react-native-community/slider";
import { ChevronLeft } from "lucide-react-native";
import { useNavigation } from "expo-router";
import { NavigationProp } from "@react-navigation/native";
import Svg, { Path, Rect } from "react-native-svg";

export default function listeningDetails() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);
  const navigation = useNavigation<NavigationProp<any>>();

  const formatTime = (milliseconds: number) => {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ChevronLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Listening</Text>
      </View>

      <ScrollView style={styles.content}>
        {/* Article Title */}
        <Text style={styles.title}>
          Airlines around Asia ground Bali flights after volcano erupts
        </Text>

        {/* Article Image */}
        <Image
          source={require("../../assets/images/listen1.png")}
          style={styles.image}
          resizeMode="cover"
        />

        {/* Article Content */}
        <Text style={styles.paragraph}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Text>

        {/* Audio Icons */}
        <TouchableOpacity style={styles.speakerIcon}>
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path
              d="M18.3281 12C18.3281 10.3359 17.311 8.91094 15.8672 8.31094L15.0985 10.1578C15.8203 10.4578 16.3266 11.1703 16.3266 12.0047C16.3266 12.8344 15.8203 13.5469 15.0985 13.8516L15.8672 15.6984C17.311 15.0891 18.3281 13.6641 18.3281 12ZM17.4047 4.61719L16.636 6.46406C18.8063 7.36875 20.3297 9.50625 20.3297 12C20.3297 14.4984 18.8063 16.6313 16.636 17.5359L17.4047 19.3828C20.2969 18.1781 22.3266 15.3281 22.3266 12C22.3266 8.67188 20.2969 5.82188 17.4047 4.61719ZM2.32971 6.99844V16.9969H6.32815L13.3266 24V0L6.32815 6.99844H2.32971Z"
              fill="black"
            />
          </Svg>
        </TouchableOpacity>

        <Text style={styles.paragraph}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters.
        </Text>

        <TouchableOpacity style={styles.speakerIcon}>
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path
              d="M18.3281 12C18.3281 10.3359 17.311 8.91094 15.8672 8.31094L15.0985 10.1578C15.8203 10.4578 16.3266 11.1703 16.3266 12.0047C16.3266 12.8344 15.8203 13.5469 15.0985 13.8516L15.8672 15.6984C17.311 15.0891 18.3281 13.6641 18.3281 12ZM17.4047 4.61719L16.636 6.46406C18.8063 7.36875 20.3297 9.50625 20.3297 12C20.3297 14.4984 18.8063 16.6313 16.636 17.5359L17.4047 19.3828C20.2969 18.1781 22.3266 15.3281 22.3266 12C22.3266 8.67188 20.2969 5.82188 17.4047 4.61719ZM2.32971 6.99844V16.9969H6.32815L13.3266 24V0L6.32815 6.99844H2.32971Z"
              fill="black"
            />
          </Svg>
        </TouchableOpacity>
      </ScrollView>

      {/* Audio Player */}
      <View style={styles.player}>
        <View style={styles.timeContainer}>
          <Text style={styles.timeText}>{formatTime(position)}</Text>
          <Text style={styles.timeText}>{formatTime(duration)}</Text>
        </View>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={duration}
          value={position}
          minimumTrackTintColor="#60A2BF"
          maximumTrackTintColor="#DEDEDE"
          thumbTintColor="#60A2BF"
          onValueChange={setPosition}
        />
        <TouchableOpacity
          style={styles.playButton}
          onPress={() => setIsPlaying(!isPlaying)}
        >
          <Svg
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
          >
            <Rect width="38" height="38" rx="19" fill="#4089A9" />
            <Path
              d="M15.2462 9.91893C13.4718 8.93636 12.0333 9.7413 12.0333 11.7154V26.2832C12.0333 28.2592 13.4718 29.0631 15.2462 28.0815L28.4355 20.7792C30.2104 19.7963 30.2104 18.2038 28.4355 17.2211L15.2462 9.91893Z"
              fill="white"
            />
          </Svg>
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
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 16,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
    marginBottom: 16,
  },
  speakerIcon: {
    alignSelf: "center",
    padding: 8,
    marginBottom: 16,
  },
  player: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#DEDEDE",
  },
  timeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  timeText: {
    fontSize: 12,
    color: "#666",
  },
  slider: {
    width: "100%",
    height: 40,
  },
  playButton: {
    alignSelf: "center",
    marginTop: 8,
  },
});

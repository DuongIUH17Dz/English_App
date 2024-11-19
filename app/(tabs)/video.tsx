import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Play } from 'lucide-react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;
const THUMBNAIL_SIZE = (WINDOW_WIDTH - 48) / 3;

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <View style={styles.starContainer}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Text key={star} style={styles.star}>
          {star <= rating ? '★' : '☆'}
        </Text>
      ))}
    </View>
  );
};

const PlayButton = () => (
  <View style={styles.playButton}>
    <Play size={24} color="#fff" />
  </View>
);

export default function video() {
  const nextSeries = Array(6).fill({
    thumbnail: 'harrypoter.png',
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.mainCard}>
        <View style={styles.imageContainer}>
          <Text style={styles.title}>Harry Potter movie-part(1)</Text>
          <Image
            source={require("../../assets/images/harry.png")}
            style={styles.mainImage}
            resizeMode="cover"
          />
          <PlayButton />
        </View>
        <View style={styles.contentInfo}>
          <StarRating rating={5} />
          <Text style={styles.description}>
            Producted from china customise collection, our white organic cotton kids t-shirt
          </Text>
          <Text style={styles.author}>J.K. Rowling</Text>
        </View>
      </View>

      <View style={styles.nextSeriesContainer}>
        <Text style={styles.sectionTitle}>Next series</Text>
        <View style={styles.thumbnailGrid}>
          {nextSeries.map((item, index) => (
            <TouchableOpacity key={index} style={styles.thumbnailContainer}>
              <Image
                source={require("../../assets/images/harry.png")}
                style={styles.thumbnail}
                resizeMode="cover"
              />
              <PlayButton />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainCard: {
    marginRight:15,
    marginTop:40,
    margin: 16,
    backgroundColor: '#fff',
    borderRadius: 16,
    shadowColor: '#000',
    height:450,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  imageContainer: {
    position: 'relative',
    borderTopLeftRadius: 27,
    borderTopRightRadius: 27,
    
    height:277,
    
  },
  mainImage: {
    width: '100%',
    height: 277,
    borderRadius:27,
  },
  contentInfo: {
    marginTop:30,
    padding: 16,
  },
  title: {
    marginLeft:60,
    fontSize: 20,
    fontWeight: '600',
    color: '#FF24BD',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  starContainer: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  star: {
    color: '#FFD700',
    fontSize: 18,
    marginRight: 2,
  },
  author: {
    marginLeft:200,
    fontSize: 23.5,
    fontWeight: '500',
    color: '#FF24BD',
  },
  nextSeriesContainer: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FF24BD',
    marginBottom: 16,
  },
  thumbnailGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  thumbnailContainer: {
    position: 'relative',
    width: THUMBNAIL_SIZE,
    height: THUMBNAIL_SIZE,
    borderRadius: 8,
    overflow: 'hidden',
  },
  thumbnail: {
    width: '100%',
    height: '100%',
  },
  playButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -20 }, { translateY: -20 }],
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
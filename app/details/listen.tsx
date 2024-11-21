import React from 'react';
import { View, Text, Image, ScrollView, FlatList, StyleSheet } from 'react-native';

const recentlyData = [
  {
    id: '1',
    title: 'Airlines ground Asia ground Bali flights after volcano erupts',
    image: require('../../assets/images/listen.png'),
  },
  {
    id: '2',
    title: 'Airlines ground Asia ground Bali flights after volcano erupts',
    image: require('../../assets/images/listen1.png'),
  },
  {
    id: '3',
    title: 'Airlines ground Asia ground Bali flights after volcano erupts',
    image: require('../../assets/images/listen1.png'),
  },
  {
    id: '4',
    title: 'More data example',
    image: require('../../assets/images/listen.png'),
  },
];

const topicsData = [
  { id: '1', title: 'Politic', image: require('../../assets/images/listen.png') },
  { id: '2', title: 'Politic', image: require('../../assets/images/listen1.png') },
  { id: '3', title: 'Politic', image: require('../../assets/images/listen.png') },
  { id: '4', title: 'Politic', image: require('../../assets/images/listen1.png') },
  { id: '5', title: 'Politic', image: require('../../assets/images/listen.png') },
  { id: '6', title: 'Politic', image: require('../../assets/images/listen1.png') },
  { id: '7', title: 'Extra Topic', image: require('../../assets/images/listen.png') },
  { id: '8', title: 'Extra Topic', image: require('../../assets/images/listen1.png') },
];

export default function Listen() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Listening</Text>
      </View>

      {/* Recently Section */}
      <Text style={styles.sectionTitle}>Recently</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
        {recentlyData.map((item) => (
          <View key={item.id} style={styles.recentlyCard}>
            <Image source={item.image} style={styles.recentlyImage} />
            <Text style={styles.recentlyText} numberOfLines={2}>
              {item.title}
            </Text>
          </View>
        ))}
      </ScrollView>
      {/* Topics Section */}
      <Text style={styles.sectionTitle}>Topics</Text>
      <View style={styles.topicsContainer}>
        <FlatList
          data={topicsData}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={styles.topicRow}
          contentContainerStyle={styles.topicList}
          showsVerticalScrollIndicator={true}
          renderItem={({ item }) => (
            <View style={styles.topicCard}>
              <Image source={item.image} style={styles.topicImage} />
              <Text style={styles.topicText}>{item.title}</Text>
            </View>
          )}
        />
      </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 48,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 12,
  },
  horizontalScroll: {
    marginBottom: 16,
  },
  verticalScroll: {
    maxHeight: 300, // Adjust height to control the vertical scroll area
  },
  recentlyCard: {
    marginRight: 16,
    width: 160,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  recentlyImage: {
    width: '100%',
    height: 100,
  },
  recentlyText: {
    fontSize: 14,
    padding: 8,
  },
  topicsContainer: {
    maxHeight: 600, // Restrict visible height of the section
  },
  topicList: {
    paddingVertical: 8,
  },
  topicRow: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  topicCard: {
    flex: 1,
    marginHorizontal: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  topicImage: {
    width: '100%',
    height: 120, // Adjust height for better visuals
  },
  topicText: {
    fontSize: 14,
    textAlign: 'center',
    padding: 8,
  },
});

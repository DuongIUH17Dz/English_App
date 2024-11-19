import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { ChevronLeft, Bookmark, Volume2 } from 'lucide-react-native';

export default function vocabularyDetail() {
  const relatedWords = [
    'Anteater',
    'Armadillo',
    'Bandicoot',
    'Grizzly bear',
    'Javelina',
    'Peccary',
    'Tamandua',
    'Hippopotamus',
  ];

  const playPronunciation = (type: 'UK' | 'US') => {
    console.log(`Playing ${type} pronunciation`);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <ChevronLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Aardvark</Text>
        <TouchableOpacity>
          <Bookmark size={24} color="#5FABCC" />
        </TouchableOpacity>
      </View>

      <Image
        source={{ uri: '/placeholder.svg?height=200&width=300' }}
        style={styles.image}
      />

      <View style={styles.pronunciationContainer}>
        <View style={styles.pronunciationRow}>
          <Text style={styles.region}>UK</Text>
          <Text style={styles.pronunciation}>/ɑːdvɑːk/</Text>
          <TouchableOpacity onPress={() => playPronunciation('UK')}>
            <Volume2 size={20} color="#5FABCC" />
          </TouchableOpacity>
        </View>

        <View style={styles.pronunciationRow}>
          <Text style={styles.region}>US</Text>
          <Text style={styles.pronunciation}>/ɑrd.vɑrk/</Text>
          <TouchableOpacity onPress={() => playPronunciation('US')}>
            <Volume2 size={20} color="#5FABCC" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Define</Text>
        <Text style={styles.definition}>
          An African mammal with a long nose and large ears that lives
          underground and eats insects
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Related words</Text>
        <View style={styles.relatedWordsContainer}>
          {relatedWords.map((word, index) => (
            <TouchableOpacity key={index} style={styles.relatedWordButton}>
              <Text style={styles.relatedWordText}>{word}</Text>
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
  header: {
    marginTop: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginVertical: 16,
  },
  pronunciationContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  pronunciationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  region: {
    width: 30,
    fontSize: 17,
    fontWeight: '500',
  },
  pronunciation: {
    flex: 1,
    fontSize: 18,
    marginLeft: 16,
  },
  section: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '500',
    color: '#408FB1',
    marginBottom: 8,
  },
  definition: {
    fontSize: 18,
    lineHeight: 24,
  },
  relatedWordsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
  },
  relatedWordButton: {
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8,
  },
  relatedWordText: {
    fontSize: 16,
    color: '#666',
  },
});

import React from 'react'
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import { Bookmark } from 'lucide-react-native'
import Svg, { Path } from "react-native-svg";

export default function Dictionary() {
  const words = [
    'Aardvark', 'Abandon', 'Abate', 'Abbey', 'Abdomen',
    'Abduct', 'Abide', 'Ability', 'Abject', 'Abnormal'
  ];

  const categories = [
    { id: 1, name: 'Popular', selected: true },
    { id: 2, name: 'Daily routine', selected: false },
    { id: 3, name: 'Family', selected: false }
  ];

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={styles.searchIcon}>
            <Path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="#868686" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M22 22L20 20" stroke="#868686" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </Svg>
          <TextInput placeholder="Search for Words" style={styles.searchInput} />
          <TouchableOpacity>
            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={styles.searchIcon}>
              <Path d="M12 15.5C14.21 15.5 16 13.71 16 11.5V6C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6V11.5C8 13.71 9.79 15.5 12 15.5Z" stroke="#868686" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <Path d="M4.35001 9.65002V11.35C4.35001 15.57 7.78001 19 12 19C16.22 19 19.65 15.57 19.65 11.35V9.65002" stroke="#868686" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <Path d="M10.61 6.43C11.51 6.1 12.49 6.1 13.39 6.43" stroke="#868686" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <Path d="M11.2 8.54995C11.73 8.40995 12.28 8.40995 12.81 8.54995" stroke="#868686" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <Path d="M12 19V22" stroke="#868686" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </Svg>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Svg width="28" height="28" viewBox="0 0 28 28" fill="none" style={styles.searchIcon}>
            <Path fillRule="evenodd" clipRule="evenodd" d="M24.5 12.9477V18.7729C24.5 22.3849 24.5 24.192 23.6437 24.9807C23.2353 25.3575 22.7197 25.5944 22.1702 25.6574C21.0187 25.7892 19.6735 24.5992 16.9843 22.2204C15.7943 21.1692 15.2005 20.643 14.5133 20.5054C14.1745 20.437 13.8255 20.437 13.4867 20.5054C12.7983 20.643 12.2045 21.1692 11.0157 22.2204C8.3265 24.5992 6.98133 25.7892 5.82983 25.6562C5.27944 25.5931 4.7634 25.3565 4.35633 24.9807C3.5 24.192 3.5 22.386 3.5 18.7729V12.9465C3.5 7.94504 3.5 5.44254 5.03767 3.88854C6.57533 2.33337 9.051 2.33337 14 2.33337C18.9502 2.33337 21.4247 2.33337 22.9623 3.88737C24.5 5.44254 24.5 7.94504 24.5 12.9477Z" fill="#5FABCC" />
          </Svg>
        </TouchableOpacity>
      </View>

      {/* Categories */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={[styles.categoryChip, category.selected && styles.selectedCategoryChip]}
          >
            <Text style={[styles.categoryText, category.selected && styles.selectedCategoryText]}>
              {category.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Word List */}
      <ScrollView style={styles.wordList}>
        {words.map((word, index) => (
          <View key={index} style={styles.wordItem}>
            <Text style={styles.wordText}>{word}</Text>
            <TouchableOpacity>
              <Bookmark size={20} color="#64B5F6" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop :30,
    flex: 1,
    backgroundColor: '#ffffff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    gap: 12,
    backgroundColor: '#ffffff',
    elevation: 4,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    paddingHorizontal: 12,
  },
  searchInput: {
    flex: 1,
    height: 48,
    fontSize: 16,
    marginLeft: 12,
    color: '#333',
    fontFamily: 'Roboto', 
  },
  searchIcon: {
    marginRight: 8,
  },
  categoriesContainer: {
    flex: 1,
    paddingHorizontal: 16,
    marginVertical: 10,
  },
  categoryChip: {
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: '#e0e0e0',
    height: 40
  },
  selectedCategoryChip: {
    backgroundColor: '#64B5F6',
  },
  categoryText: {
    color: '#333',
    fontSize: 16,
  },
  selectedCategoryText: {
    color: '#ffffff',
  },
  wordList: {
    flex: 1,
  },
  wordItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#ffffff',
  },
  wordText: {
    fontSize: 16,
    color: '#333',
  },
});


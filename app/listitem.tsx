import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface ListItemProps {
  item: any;
  onPress: () => void;
  selectedTab: string;
}

const ListItem: React.FC<ListItemProps> = ({ item, onPress, selectedTab }) => {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      {selectedTab !== 'categories' && item.image && (
        <Image source={{ uri: item.image }} style={styles.image} />
      )}
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        {selectedTab !== 'categories' && (
          <Text style={styles.subtitle} numberOfLines={2}>
            {item.content}
          </Text>
        )}
        {selectedTab === 'news' && (
          <Text style={styles.category}>Category: {item.category}</Text>
        )}
      </View>
      <Feather name="chevron-right" size={24} color="#bbb" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fff',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
  category: {
    fontSize: 12,
    color: '#2196F3',
    marginTop: 5,
  },
});

export default ListItem;


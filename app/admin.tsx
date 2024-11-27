import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
  Button,
  Alert,
} from 'react-native';

const App = () => {
  const dataJson = require('../data/data.json');

  const [menuVisible, setMenuVisible] = useState(false);
  const [selectedTab, setSelectedTab] = useState('listening');
  const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  console.log('dataJson', dataJson);

  useEffect(() => {
    // Load data based on selected tab
    if (selectedTab === 'listening') setData(dataJson.listening);
    else if (selectedTab === 'news') setData(dataJson.news);
    else if (selectedTab === 'categories') setData(dataJson.categories);
  }, [selectedTab]);

  const handleAddNew = () => {
    setCurrentItem(null); // Clear form for adding new
    setModalVisible(true);
  };

  const handleSave = () => {
    if (!currentItem?.title) {
      Alert.alert('Error', 'Title is required!');
      return;
    }

    if (currentItem.id) {
      // Update
      setData((prevData) =>
        prevData.map((item) =>
          item.id === currentItem.id ? currentItem : item
        )
      );
    } else {
      // Add new
      setData((prevData) => [
        ...prevData,
        { ...currentItem, id: Date.now() },
      ]);
    }

    setModalVisible(false);
  };

  const handleEdit = (item) => {
    setCurrentItem(item); // Load item data into form
    setModalVisible(true);
  };

  const handleDelete = (id) => {
    Alert.alert('Confirm Delete', 'Are you sure you want to delete this item?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: () => setData((prevData) => prevData.filter((item) => item.id !== id)),
      },
    ]);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => handleEdit(item)}
    >
      <Text style={styles.title}>{item.title}</Text>
      {selectedTab !== 'categories' && (
        <>
          <Text>{item.image}</Text>
          <Text>{item.content}</Text>
        </>
      )}
      {selectedTab === 'news' && <Text>Category: {item.category}</Text>}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Dropdown Menu */}
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => setMenuVisible(!menuVisible)}
      >
        <Text style={styles.menuText}>☰ Menu</Text>
      </TouchableOpacity>

      {menuVisible && (
        <View style={styles.menu}>
          <Button title="Listening" onPress={() => setSelectedTab('listening')} />
          <Button title="News" onPress={() => setSelectedTab('news')} />
          <Button title="Categories" onPress={() => setSelectedTab('categories')} />
        </View>
      )}

      {/* Data List */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        style={styles.list}
      />

      {/* Add Button */}
      <TouchableOpacity style={styles.addButton} onPress={handleAddNew}>
        <Text style={styles.addButtonText}>+ Add New</Text>
      </TouchableOpacity>

      {/* Modal */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modal}>
          <TextInput
            style={styles.input}
            placeholder="Title"
            value={currentItem?.title || ''}
            onChangeText={(text) =>
              setCurrentItem({ ...currentItem, title: text })
            }
          />
          {selectedTab !== 'categories' && (
            <>
              <TextInput
                style={styles.input}
                placeholder="Image"
                value={currentItem?.image || ''}
                onChangeText={(text) =>
                  setCurrentItem({ ...currentItem, image: text })
                }
              />
              <TextInput
                style={styles.input}
                placeholder="Content"
                value={currentItem?.content || ''}
                onChangeText={(text) =>
                  setCurrentItem({ ...currentItem, content: text })
                }
              />
            </>
          )}
          {selectedTab === 'news' && (
            <TextInput
              style={styles.input}
              placeholder="Category"
              value={currentItem?.category || ''}
              onChangeText={(text) =>
                setCurrentItem({ ...currentItem, category: text })
              }
            />
          )}
          <Button title={currentItem?.id ? 'Update' : 'Create'} onPress={handleSave} />
          {currentItem?.id && (
            <Button
              title="Delete"
              color="red"
              onPress={() => {
                handleDelete(currentItem.id);
                setModalVisible(false);
              }}
            />
          )}
          <Button title="Cancel" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  menuButton: { marginBottom: 10 },
  menuText: { fontSize: 18, fontWeight: 'bold' },
  menu: { marginBottom: 20 },
  list: { flex: 1 },
  item: { padding: 15, borderBottomWidth: 1, borderColor: '#ddd' },
  title: { fontSize: 16, fontWeight: 'bold' },
  addButton: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 50,
  },
  addButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 18 },
  modal: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: 'rgba(0,0,0,0.5)' },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default App;

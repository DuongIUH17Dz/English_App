import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
  Button,
  Alert,
  SafeAreaView,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import dataJson from '../data/data.json';
import Header from './header';
import ListItem from './listitem';

const App = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [selectedTab, setSelectedTab] = useState('listening');
  const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  useEffect(() => {
    if (selectedTab === 'listening') setData(dataJson.listening);
    else if (selectedTab === 'news') setData(dataJson.news);
    else if (selectedTab === 'categories') setData(dataJson.categories);
  }, [selectedTab]);

  const handleAddNew = () => {
    setCurrentItem(null);
    setModalVisible(true);
  };

  const handleSave = () => {
    if (!currentItem?.title) {
      Alert.alert('Error', 'Title is required!');
      return;
    }

    if (currentItem.id) {
      setData((prevData) =>
        prevData.map((item) =>
          item.id === currentItem.id ? currentItem : item
        )
      );
    } else {
      setData((prevData) => [
        ...prevData,
        { ...currentItem, id: Date.now() },
      ]);
    }

    setModalVisible(false);
  };

  const handleEdit = (item) => {
    setCurrentItem(item);
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

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={selectedTab.charAt(0).toUpperCase() + selectedTab.slice(1)}
        onMenuPress={() => setMenuVisible(!menuVisible)}
      />

      {menuVisible && (
        <View style={styles.menu}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              setSelectedTab('listening');
              setMenuVisible(false);
            }}
          >
            <Feather name="headphones" size={24} color="#2196F3" />
            <Text style={styles.menuText}>Listening</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              setSelectedTab('news');
              setMenuVisible(false);
            }}
          >
            <Feather name="globe" size={24} color="#2196F3" />
            <Text style={styles.menuText}>News</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              setSelectedTab('categories');/-strong/-heart:>:o:-((:-h setMenuVisible(false);
            }}
          >
            <Feather name="list" size={24} color="#2196F3" />
            <Text style={styles.menuText}>Categories</Text>
          </TouchableOpacity>
        </View>
      )}

      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ListItem item={item} onPress={() => handleEdit(item)} selectedTab={selectedTab} />
        )}
        style={styles.list}
      />

      <TouchableOpacity style={styles.addButton} onPress={handleAddNew}>
        <Feather name="plus" size={24} color="#fff" />
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
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
                  placeholder="Image URL"
                  value={currentItem?.image || ''}
                  onChangeText={(text) =>
                    setCurrentItem({ ...currentItem, image: text })
                  }
                />
                <TextInput
                  style={[styles.input, styles.contentInput]}
                  placeholder="Content"
                  multiline
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
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.buttonText}>
                  {currentItem?.id ? 'Update' : 'Create'}
                </Text>
              </TouchableOpacity>
              {currentItem?.id && (
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => {
                    handleDelete(currentItem.id);
                    setModalVisible(false);
                  }}
                >
                  <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>
              )}/-strong/-heart:>:o:-((:-h <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  menu: {
    position: 'absolute',
    top: 60,
    right: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    zIndex: 1000,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuText: {
    marginLeft: 10,
    fontSize: 16,
  },
  list: {
    flex: 1,
  },
  addButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#2196F3',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    margin: 20,
    borderRadius: 10,
    padding: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  input: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  contentInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  saveButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
  },
  deleteButton: {
    backgroundColor: '#FF5252',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
  },
  cancelButton: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 5,
    flex: 1,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  cancelButtonText: {
    color: '#333',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default App;
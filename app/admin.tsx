import React, { useState, useEffect } from "react";
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
} from "react-native";
import { useRouter } from "expo-router";

const App = () => {
  const dataJson = require("../data/data.json");
  const router = useRouter();
  const [menuVisible, setMenuVisible] = useState(false);
  const [selectedTab, setSelectedTab] = useState("listening");
  const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [hoveredMenu, setHoveredMenu] = useState(null); // To track hovered menu item

  useEffect(() => {
    if (selectedTab === "listening") setData(dataJson.listening);
    else if (selectedTab === "news") setData(dataJson.news);
    else if (selectedTab === "categories") setData(dataJson.categories);
  }, [selectedTab]);

  const handleAddNew = () => {
    setCurrentItem(null); // Clear form for adding new
    setModalVisible(true);
  };

  const handleSave = () => {
    if (!currentItem?.title) {
      Alert.alert("Error", "Title is required!");
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
      setData((prevData) => [...prevData, { ...currentItem, id: Date.now() }]);
    }

    setModalVisible(false);
  };

  const handleEdit = (item) => {
    setCurrentItem(item); // Load item data into form
    setModalVisible(true);
  };

  const handleLogout = () => {
    router.push('/signin'); 
  };

  const handleDelete = (id) => {
    Alert.alert(
      "Confirm Delete",
      "Are you sure you want to delete this item?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: () =>
            setData((prevData) => prevData.filter((item) => item.id !== id)),
        },
      ]
    );
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => handleEdit(item)}>
      <Text style={styles.title}>{item.title}</Text>
      {selectedTab !== "categories" && (
        <>
          <Text style={styles.text}>{item.image}</Text>
          <Text style={styles.text}>{item.content}</Text>
        </>
      )}
      {selectedTab === "news" && (
        <Text style={styles.text}>Category: {item.category}</Text>
      )}
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
      {/* Current Tab Title */}
      <Text style={styles.currentTabTitle}>
        {" "}
        {selectedTab.charAt(0).toUpperCase() + selectedTab.slice(1)}
      </Text>

      {menuVisible && (
        <View style={styles.menu}>
          {/* Render buttons for each menu item */}
          {["listening", "news", "categories"].map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[
                styles.menuItem,
                hoveredMenu === tab && styles.menuItemHovered, // Apply hover effect
                selectedTab === tab && styles.menuItemSelected, // Apply selected style
              ]}
              onPress={() => {
                setSelectedTab(tab);
                setMenuVisible(false); // Close menu on selection
              }}
              onMouseEnter={() => setHoveredMenu(tab)} // Hover effect (works on web or emulator)
              onMouseLeave={() => setHoveredMenu(null)} // Reset hover effect (works on web or emulator)
            >
              <Text style={styles.menuItemText}>
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </Text>
            </TouchableOpacity>
          ))}
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

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>

      {/* Modal */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.input}
              placeholder="Title"
              value={currentItem?.title || ""}
              onChangeText={(text) =>
                setCurrentItem({ ...currentItem, title: text })
              }
            />
            {selectedTab !== "categories" && (
              <>
                <TextInput
                  style={styles.input}
                  placeholder="Image"
                  value={currentItem?.image || ""}
                  onChangeText={(text) =>
                    setCurrentItem({ ...currentItem, image: text })
                  }
                />
                <TextInput
                  style={styles.input}
                  placeholder="Content"
                  value={currentItem?.content || ""}
                  onChangeText={(text) =>
                    setCurrentItem({ ...currentItem, content: text })
                  }
                />
              </>
            )}
            {selectedTab === "news" && (
              <TextInput
                style={styles.input}
                placeholder="Category"
                value={currentItem?.category || ""}
                onChangeText={(text) =>
                  setCurrentItem({ ...currentItem, category: text })
                }
              />
            )}
            <Button
              title={currentItem?.id ? "Update" : "Create"}
              onPress={handleSave}
            />
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
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f7f7f7" },
  menuButton: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#2196F3",
    borderRadius: 5,
    marginTop: 20,
  },
  menuText: { fontSize: 18, fontWeight: "bold", color: "#fff" },
  currentTabTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginTop: 10,
    marginBottom: 20,
    textAlign: "center",
  },
  menu: {
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 5,
    padding: 10,
  },
  menuItem: {
    padding: 15,
    borderRadius: 8,
    marginBottom: 5,
    backgroundColor: "#fff",
    elevation: 2,
  },
  menuItemHovered: {
    backgroundColor: "#ddd", 
  },
  menuItemSelected: {
    backgroundColor: "#2196F3", 
  },
  logoutButton: {
    marginTop: 20,
    padding: 11,
    backgroundColor: "#FF4081",
    borderRadius: 5,
    marginBottom: 10,
    width: 100,
  },
  logoutButtonText: { fontSize: 18, fontWeight: "bold", color: "#fff" },
  menuItemText: { fontSize: 16, fontWeight: "bold", color: "#333" },
  list: { flex: 1 },
  item: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  title: { fontSize: 18, fontWeight: "bold", color: "#333" },
  text: { fontSize: 14, color: "#777", marginTop: 5 },
  addButton: {
    position: "absolute",
    right: 20,
    bottom: 30,
    backgroundColor: "#FF4081",
    padding: 15,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
  },
  addButtonText: { color: "#fff", fontWeight: "bold", fontSize: 20 },
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    maxWidth: 400,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  input: {
    backgroundColor: "#f1f1f1",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    fontSize: 16,
    color: "#333",
  },
});

export default App;

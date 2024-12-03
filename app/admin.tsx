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
  Image,
} from "react-native";
import { useRouter } from "expo-router";

interface Word {
  word: string;
  definition: string;
  relatedWords: string[];
  category: string;
  pronunciation: {
    UK: string;
  };
  image: string;
}

const admin = () => {
  const dataJson = require("../data/data.json");
  const router = useRouter();
  const [menuVisible, setMenuVisible] = useState(false);
  const [selectedTab, setSelectedTab] = useState("listening");
  const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [hoveredMenu, setHoveredMenu] = useState(null);

  const [words, setWords] = useState<Word[]>([]);

  useEffect(() => {
    fetch("https://64544639a74f994b333d117e.mockapi.io/dictionary")
      .then((response) => response.json())
      .then((data) => {
        setWords(data);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });

    let newData = [];
    if (selectedTab === "listening") {
      newData = [...dataJson.recentlyData, ...dataJson.topicsData];
    } else if (selectedTab === "news") {
      newData = [
        ...dataJson.sportData,
        ...dataJson.travelData,
        ...dataJson.entertainmentData,
      ];
    } else if (selectedTab === "video") {
      newData = [...dataJson.nextSeries];
    } else if (selectedTab === "vocabulary") {
      newData = words;
    }
    setData(newData);
  }, [selectedTab, words]);

  const fetchVocabularyData = () => {
    fetch("https://64544639a74f994b333d117e.mockapi.io/dictionary")
      .then((response) => response.json())
      .then((data) => {
        setWords(data);
      })
      .catch((error) => {
        console.error("Error fetching vocabulary data", error);
      });
  };

  const handleAddNew = () => {
    setCurrentItem(null);
    setModalVisible(true);
  };

  const handleSave = () => {
    if (selectedTab === "vocabulary") {
      const apiUrl = currentItem.id
        ? `https://64544639a74f994b333d117e.mockapi.io/dictionary/${currentItem.id}`
        : "https://64544639a74f994b333d117e.mockapi.io/dictionary";

      const method = currentItem.id ? "PUT" : "POST";

      fetch(apiUrl, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(currentItem),
      })
        .then((response) => response.json())
        .then((updatedItem) => {
          setWords((prevWords) =>
            currentItem.id
              ? prevWords.map((word) =>
                  word.id === currentItem.id ? updatedItem : word
                )
              : [...prevWords, updatedItem]
          );
          fetchVocabularyData();
          setModalVisible(false);
        })
        .catch((error) => {
          console.error("Error saving vocabulary", error);
          Alert.alert("Error", "Unable to save the item!");
        });
    } else {
      if (currentItem.id) {
        setData((prevData) =>
          prevData.map((item) =>
            item.id === currentItem.id ? currentItem : item
          )
        );
      } else {
        const newId = Date.now();
        setData((prevData) => [...prevData, { ...currentItem, id: newId }]);
      }
      setModalVisible(false);
    }
  };

  const handleEdit = (item) => {
    setCurrentItem(item);
    setModalVisible(true);
  };

  const handleLogout = () => {
    router.push("/signin");
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
          onPress: () => {
            if (selectedTab === "vocabulary") {
              fetch(
                `https://64544639a74f994b333d117e.mockapi.io/dictionary/${id}`,
                {
                  method: "DELETE",
                }
              )
                .then(() => {
                  setWords((prevWords) =>
                    prevWords.filter((word) => word.id !== id)
                  );
                  fetchVocabularyData();
                  setModalVisible(false);
                })
                .catch((error) => {
                  console.error("Error deleting vocabulary", error);
                  Alert.alert("Error", "Unable to delete the item!");
                });
            } else {
              setData((prevData) => prevData.filter((item) => item.id !== id));
            }
          },
        },
      ]
    );
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => handleEdit(item)}>
      <Text style={styles.title}>{item.title}</Text>
      {selectedTab !== "video" && (
        <>
          <Text style={styles.text}>{item.image}</Text>
          {Array.isArray(item.content) ? (
            item.content.map((contentItem, index) => (
              <Text key={index} style={styles.text}>
                {contentItem}
              </Text>
            ))
          ) : (
            <Text style={styles.text}>{item.content}</Text>
          )}
        </>
      )}
      {selectedTab === "video" && (
        <Text style={styles.text}>{item.thumbnail}</Text>
      )}
      {selectedTab === "vocabulary" && item.word && (
        <View style={styles.vocabularyContainer}>
          <Text style={styles.text}>{item.word}</Text>
          <Text style={styles.text}>{item.definition}</Text>
          <Text style={styles.text}>Category: {item.category}</Text>
          <Text style={styles.text}>
            Pronunciation (UK): {item.pronunciation?.UK || "N/A"}
          </Text>
          <Text>Related Words:</Text>
          {item.relatedWords?.length > 0 ? (
            <FlatList
              data={item.relatedWords}
              keyExtractor={(relatedWord, index) =>
                relatedWord.word || index.toString()
              }
              renderItem={({ item }) => <Text style={styles.text}>{item}</Text>}
              horizontal
            />
          ) : (
            <Text style={styles.text}>No related words available.</Text>
          )}
          {item.image && (
            <Image source={{ uri: item.image }} style={styles.image} />
          )}
        </View>
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
        {selectedTab.charAt(0).toUpperCase() + selectedTab.slice(1)}
      </Text>

      {menuVisible && (
        <View style={styles.menu}>
          {["listening", "news", "video", "vocabulary"].map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[
                styles.menuItem,
                hoveredMenu === tab && styles.menuItemHovered,
                selectedTab === tab && styles.menuItemSelected,
              ]}
              onPress={() => {
                setSelectedTab(tab);
                setMenuVisible(false);
              }}
              onMouseEnter={() => setHoveredMenu(tab)}
              onMouseLeave={() => setHoveredMenu(null)}
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
        keyExtractor={(item) => item.id?.toString() || item.title} // Handle IDs and titles
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
            {selectedTab !== "video" && selectedTab !== "vocabulary" && (
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
                  value={
                    Array.isArray(currentItem?.content)
                      ? currentItem.content.join("\n")
                      : currentItem?.content || ""
                  }
                  onChangeText={(text) =>
                    setCurrentItem({
                      ...currentItem,
                      content: text.includes("\n") ? text.split("\n") : text,
                    })
                  }
                  multiline
                />
              </>
            )}
            {selectedTab === "video" && (
              <TextInput
                style={styles.input}
                placeholder="Thumbnail"
                value={currentItem?.thumbnail || ""}
                onChangeText={(text) =>
                  setCurrentItem({ ...currentItem, thumbnail: text })
                }
              />
            )}
            {selectedTab === "vocabulary" && (
              <>
                <TextInput
                  style={styles.input}
                  placeholder="Word"
                  value={currentItem?.word || ""}
                  onChangeText={(text) =>
                    setCurrentItem({ ...currentItem, word: text })
                  }
                />
                <TextInput
                  style={styles.input}
                  placeholder="Definition"
                  value={currentItem?.definition || ""}
                  onChangeText={(text) =>
                    setCurrentItem({ ...currentItem, definition: text })
                  }
                  multiline
                />
                <TextInput
                  style={styles.input}
                  placeholder="Category"
                  value={currentItem?.category || ""}
                  onChangeText={(text) =>
                    setCurrentItem({ ...currentItem, category: text })
                  }
                />
                <TextInput
                  style={styles.input}
                  placeholder="Pronunciation (UK)"
                  value={currentItem?.pronunciation?.UK || ""}
                  onChangeText={(text) =>
                    setCurrentItem({
                      ...currentItem,
                      pronunciation: {
                        ...currentItem.pronunciation,
                        UK: text,
                      },
                    })
                  }
                />
                <TextInput
                  style={styles.input}
                  placeholder="Related Words (comma separated)"
                  value={currentItem?.relatedWords?.join(", ") || ""}
                  onChangeText={(text) =>
                    setCurrentItem({
                      ...currentItem,
                      relatedWords: text.split(",").map((word) => word.trim()),
                    })
                  }
                  multiline
                />
                <TextInput
                  style={styles.input}
                  placeholder="Image URL"
                  value={currentItem?.image || ""}
                  onChangeText={(text) =>
                    setCurrentItem({ ...currentItem, image: text })
                  }
                />
              </>
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
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  vocabularyContainer: {
    marginVertical: 10,
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

export default admin;

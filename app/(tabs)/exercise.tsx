import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
} from 'react-native';

export default function Exercise() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Exercise</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => console.log('Quiz pressed')}>
          <ImageBackground
            source={require('../../assets/images/quiz.png')} // Đường dẫn tới file quiz.png
            style={[styles.button, styles.imageButton]}
            imageStyle={styles.imageBackground}
          >
            <Text style={styles.buttonText}>Quiz</Text>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => console.log('Flashcard pressed')}>
          <ImageBackground
            source={require('../../assets/images/FlashCard.png')} // Đường dẫn tới file flashcard.png
            style={[styles.button, styles.imageButton]}
            imageStyle={styles.imageBackground}
          >
            <Text style={styles.buttonText}>Flashcard</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginLeft:20,
    
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop:30,
    marginBottom: 20,
    color: '#000',
  },
  buttonContainer: {
    gap: 16,
  },
  button: {
    width:343,
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  imageButton: {
    width: '100%',
    height: 100, // Đặt chiều cao cố định cho button
    overflow: 'hidden',
  },
  imageBackground: {
    borderRadius: 16, // Đảm bảo hình ảnh bo tròn giống button
  },
  buttonText: {
    marginLeft:-30,
    color: '#fff',
    fontSize: 24,
    fontWeight: '500',
  },
});

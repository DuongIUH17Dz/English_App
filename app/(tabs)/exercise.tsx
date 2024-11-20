import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from "expo-router";

export default function exercise() {
  const router = useRouter();

  const handleQuizPress = () => {
    router.push("/details/quizGame");
  };

  const handleFlashCardPress = () => {
    router.push("/details/flashcard");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exercise</Text>
      
      <TouchableOpacity 
        style={styles.buttonContainer}
        onPress={handleQuizPress}
      >
        <LinearGradient
          colors={['#8B7EF8', '#6F60F7']}
          style={styles.button}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <View style={styles.dotOverlay} />
          <Text style={styles.buttonText}>Quiz</Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.buttonContainer}
        onPress={handleFlashCardPress}
      >
        <LinearGradient
          colors={['#B85E50', '#A04B3E']}
          style={styles.button}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <View style={styles.dotOverlay} />
          <Text style={styles.buttonText}>Flashcard</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 40,
  },
  buttonContainer: {
    width: '100%',
    height: 100,
    marginBottom: 16,
    borderRadius: 16,
    overflow: 'hidden',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    zIndex: 2,
  },
  dotOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent',
    opacity: 0.1,
    zIndex: 1,
  },
});
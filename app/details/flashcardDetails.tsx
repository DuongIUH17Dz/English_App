import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Animated,
  PanResponder,
} from 'react-native';
import { useLocalSearchParams } from "expo-router";

const SCREEN_WIDTH = Dimensions.get('window').width;

interface Card {
  id: number;
  text: string;
}

const decks: { [key: number]: Card[] } = {
  1: [
    { id: 1, text: 'Lion' },
    { id: 2, text: 'Elephant' },
    { id: 3, text: 'Zebra' },
    { id: 4, text: 'Giraffe' },
    { id: 5, text: 'Tiger' },
  ],
  2: [
    { id: 1, text: 'Pizza' },
    { id: 2, text: 'Burger' },
    { id: 3, text: 'Pasta' },
    { id: 4, text: 'Salad' },
    { id: 5, text: 'Sushi' },
  ],
  3: [
    { id: 1, text: 'Painting' },
    { id: 2, text: 'Sculpture' },
    { id: 3, text: 'Music' },
    { id: 4, text: 'Dance' },
    { id: 5, text: 'Poetry' },
  ],
};

export default function FlashcardDetails() {
  const { id } = useLocalSearchParams();
  const [currentIndex, setCurrentIndex] = useState(0);
  const position = useRef(new Animated.ValueXY()).current;

  const currentDeck = decks[parseInt(id as string)] || [];
  const currentCard = currentDeck[currentIndex];

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gesture) => {
        position.setValue({ x: gesture.dx, y: 0 });
      },
      onPanResponderRelease: (_, gesture) => {
        if (gesture.dx > 120) {
          swipeCard('left');
        } else if (gesture.dx < -120) {
          swipeCard('right');
        } else {
          resetPosition();
        }
      },
    })
  ).current;

  const swipeCard = (direction: 'left' | 'right') => {
    const x = direction === 'right' ? -SCREEN_WIDTH : SCREEN_WIDTH;
    Animated.timing(position, {
      toValue: { x, y: 0 },
      duration: 250,
      useNativeDriver: false,
    }).start(() => {
      setCurrentIndex((prevIndex) => {
        if (direction === 'right') {
          return prevIndex === currentDeck.length - 1 ? 0 : prevIndex + 1;
        } else {
          return prevIndex === 0 ? currentDeck.length - 1 : prevIndex - 1;
        }
      });
      position.setValue({ x: 0, y: 0 });
    });
  };

  const resetPosition = () => {
    Animated.spring(position, {
      toValue: { x: 0, y: 0 },
      useNativeDriver: false,
    }).start();
  };

  const getCardStyle = () => {
    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
      outputRange: ['30deg', '0deg', '-30deg'],
    });

    return {
      ...position.getLayout(),
      transform: [{ rotate }],
    };
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Flashcard Set {id}</Text>
      <View style={styles.cardContainer}>
        <Animated.View
          {...panResponder.panHandlers}
          style={[styles.card, getCardStyle()]}
        >
          <Text style={styles.cardText}>{currentCard.text}</Text>
        </Animated.View>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => swipeCard('right')}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

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
    marginTop: 20,
  },
  cardContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: SCREEN_WIDTH - 40,
    height: 400,
    backgroundColor: '#BBD6FF',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardText: {
    fontSize: 32,
    color: '#fff',
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#98D8C6',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

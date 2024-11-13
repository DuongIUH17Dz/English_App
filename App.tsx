import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';

export default function App() {
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      {/* Logo Image */}
      <Image source={require('./Image/Logo.png')} style={styles.logo} />

      {/* Sign Up title */}
      <Text style={styles.title}>SIGN UP</Text>

      {/* Input fields */}
      <TextInput
        placeholder="Enter Email & Phone Number"
        style={[styles.input, focusedInput === 'email' && styles.inputFocused]}
        onFocus={() => setFocusedInput('email')}
        onBlur={() => setFocusedInput(null)}
      />
      <TextInput
        placeholder="Full Name"
        style={[styles.input, focusedInput === 'fullname' && styles.inputFocused]}
        onFocus={() => setFocusedInput('fullname')}
        onBlur={() => setFocusedInput(null)}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={[styles.input, focusedInput === 'password' && styles.inputFocused]}
        onFocus={() => setFocusedInput('password')}
        onBlur={() => setFocusedInput(null)}
      />
      <TextInput
        placeholder="Confirm Password"
        secureTextEntry
        style={[styles.input, focusedInput === 'confirmPassword' && styles.inputFocused]}
        onFocus={() => setFocusedInput('confirmPassword')}
        onBlur={() => setFocusedInput(null)}
      />

      {/* Sign Up button */}
      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Or sign up with */}
      <Text style={styles.orText}>or sign up with</Text>

      {/* Social media icons */}
      <View style={styles.socialIcons}>
        <FontAwesome name="google" size={24} color="#DB4437" style={styles.icon} />
        <FontAwesome name="facebook" size={24} color="#4267B2" style={styles.icon} />
        <FontAwesome name="cloud" size={24} color="#007AFF" style={styles.icon} />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textTransform: 'uppercase',
  },
  input: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 15,
  },
  inputFocused: {
    borderColor: '#00BFFF', // Light blue border on focus
  },
  signUpButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 20,
  },
  signUpButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  orText: {
    fontSize: 16,
    color: '#888',
    marginBottom: 10,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
  icon: {
    marginHorizontal: 10,
  },
});

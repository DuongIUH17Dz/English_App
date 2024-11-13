import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';

export default function SignIn() {
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [emailPhone, setEmailPhone] = useState('');
  const [password, setPassword] = useState('');

  // Check if both fields are filled
  const isFormFilled = emailPhone && password;

  return (
    <View style={styles.container}>
      {/* Logo Image */}
      <Image source={require('./Image/Logo.png')} style={styles.logo} />

      {/* Sign In title */}
      <Text style={styles.title}>SIGN IN</Text>

      {/* Input fields */}
      <TextInput
        placeholder="Enter Email & Phone Number"
        style={[styles.input, focusedInput === 'emailPhone' && styles.inputFocused]}
        onFocus={() => setFocusedInput('emailPhone')}
        onBlur={() => setFocusedInput(null)}
        value={emailPhone}
        onChangeText={setEmailPhone}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={[styles.input, focusedInput === 'password' && styles.inputFocused]}
        onFocus={() => setFocusedInput('password')}
        onBlur={() => setFocusedInput(null)}
        value={password}
        onChangeText={setPassword}
      />

      {/* Sign In button */}
      <TouchableOpacity 
        style={[styles.signInButton, isFormFilled ? styles.signInButtonFilled : null]}
      >
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>

      {/* Forget Password */}
      <TouchableOpacity>
        <Text style={styles.forgetPassword}>Forget Password?</Text>
      </TouchableOpacity>

      {/* Or sign in with */}
      <Text style={styles.orText}>or sign in with</Text>

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
    borderRadius: 20,
    marginBottom: 15,
  },
  inputFocused: {
    borderColor: '#00BFFF', // Light blue border on focus
  },
  signInButton: {
    backgroundColor: '#91CDE7',
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 20,
  },
  signInButtonFilled: {
    backgroundColor: '#2196F3', // Darker blue when both fields are filled
  },
  signInButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  forgetPassword: {
    fontSize: 16,
    color: '#007AFF',
    marginBottom: 20,
  },
  orText: {
    marginTop: 20,
    fontSize: 16,
    color: 'red',
    marginBottom: 10,
  },
  socialIcons: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
  icon: {
    marginHorizontal: 10,
  },
});

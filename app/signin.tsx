import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';
import { useRouter } from 'expo-router';

export default function Signin() {
  const router = useRouter();
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [emailPhone, setEmailPhone] = useState('');
  const [password, setPassword] = useState('');

  // Check if both fields are filled
  const isFormFilled = emailPhone && password;

  const handleSignIn = () => {
    if (isFormFilled) {
      router.push('/signup');
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo Image */}
      <Image source={require('../assets/images/cat.png')} style={styles.logo} />

      {/* Sign In title */}
      <Text style={styles.title}>Sign In</Text>

      {/* Input fields */}
      <TextInput
        placeholder="Email & Phone Number"
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
        onPress={handleSignIn}
      >
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>

      {/* Forget Password */}
      <TouchableOpacity>
        <Text style={styles.forgetPassword}>Forget Password?</Text>
      </TouchableOpacity>

      {/* Or sign in with */}
      <Text style={styles.orText}>Or Sign in With</Text>

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
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 14,
    marginBottom: 15,
    backgroundColor: '#F3F3F3'
  },
  inputFocused: {
    borderColor: '#00BFFF',
  },
  signInButton: {
    backgroundColor: '#91CDE7',
    paddingVertical: 15,
    width: '100%',
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 20,
  },
  signInButtonFilled: {
    backgroundColor: '#2196F3', 
  },
  signInButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  forgetPassword: {
    fontSize: 16,
    color: '#007AFF',
    marginBottom: 20,
  },
  orText: {
    marginTop: 20,
    fontSize: 16,
    color: '#555252',
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

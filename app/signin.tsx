import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Animated } from 'react-native';

import { useState } from 'react';
import { useRouter } from 'expo-router';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Signin() {
  const router = useRouter();
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [emailPhone, setEmailPhone] = useState('');
  const [password, setPassword] = useState('');
  const [scale] = useState(new Animated.Value(1));  // Initial scale for icons

  // Check if both fields are filled
  const isFormFilled = emailPhone && password;

  const handleSignIn = () => {
    if (isFormFilled) {
      router.push('/signup');
    } else {
      alert("Please fill in all fields");
    }
  };

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 1.2,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
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
      {/* Forget Password */}
      <TouchableOpacity>
        <Text style={styles.forgetPassword}>Forget Password?</Text>
      </TouchableOpacity>

      {/* Sign In button */}
      <TouchableOpacity 
        style={[styles.signInButton, isFormFilled ? styles.signInButtonFilled : null]}
        onPress={handleSignIn}
      >
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>

      {/* Or sign in with */}
      <Text style={styles.orText}>Or Sign in With</Text>

      {/* Social media icons with animation */}
      <View style={styles.socialIcons}>
  <TouchableOpacity style={styles.iconWrapper}  activeOpacity={1} onPressIn={handlePressIn} onPressOut={handlePressOut}>
    <Animated.View style={{ transform: [{ scale }] }}>
      <FontAwesome name="google" size={24} color="#DB4437" style={styles.icon} />
    </Animated.View>
  </TouchableOpacity>
  <TouchableOpacity style={styles.iconWrapper} activeOpacity={1} onPressIn={handlePressIn} onPressOut={handlePressOut}>
    <Animated.View style={{ transform: [{ scale }] }}>
      <FontAwesome name="facebook" size={24} color="#4267B2" style={styles.icon} />
    </Animated.View>
  </TouchableOpacity>
  <TouchableOpacity style={styles.iconWrapper}  activeOpacity={1} onPressIn={handlePressIn} onPressOut={handlePressOut}>
    <Animated.View style={{ transform: [{ scale }] }}>
      <MaterialCommunityIcons name="apple" size={24} color="#000" style={styles.icon} />
    </Animated.View>
  </TouchableOpacity>
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
    padding: 30,
  },
  logo: {
    width: 60,
    height: 77,
    resizeMode: 'contain',
    marginBottom: 20,
    marginTop:30
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    width: '100%',
    height:55.96,
    padding: 15,
    borderWidth: 1.5,
    borderColor: '#ccc',
    borderRadius: 14.23,
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
    marginTop:7,
    marginLeft:200,
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
    width: '80%',
  },
  iconWrapper: {
    backgroundColor: '#D3D3D3', // Màu nền xám
    width:65,
    height:65,
    borderRadius: 40, // Đảm bảo là hình tròn
    padding: 10, // Khoảng cách giữa biểu tượng và viền hình tròn
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 10,
  },
});

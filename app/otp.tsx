import { useRouter } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  
} from "react-native";
import React, { useState } from "react";

export default function Otp() {
  const router = useRouter();

  const handleVerify = () => {
    // Điều hướng tới trang homepage
    router.push("/homepage");
  };

  return (
    <View style={styles.container}>
      {/* Logo Image */}
      <Image
        source={require(".././assets/images/cat.png")}
        style={styles.logo}
      />
      {/* Phone Number */}
      <Text style={styles.phoneText}>Phone Number: 0828012868</Text>
      {/* OTP message */}
      <Text style={styles.otpText}>OTP has been sent to your phone number</Text>
      {/* OTP Input */}
      <TextInput placeholder="Enter OTP" style={styles.input} />
      {/* Verify Button */}
      <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
        <Text style={styles.verifyButtonText}>Verify</Text>
      </TouchableOpacity>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginBottom: 20,
  },
  phoneText: {
    fontSize: 18,
    marginBottom: 10,
  },
  otpText: {
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    marginBottom: 20,
  },
  verifyButton: {
    backgroundColor: "#2196F3",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 10,
  },
  verifyButtonText: {
    color: "#fff",
    fontSize: 18,
  },
});

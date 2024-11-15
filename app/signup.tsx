import { useRouter } from "expo-router";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

export default function signup() {
  const router = useRouter();
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isFormFilled = email && fullname && password && confirmPassword;

  const handleSignUp = () => {
    if (isFormFilled) {
      router.push("/otp");
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require(".././assets/images/cat.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>Sign Up</Text>

      <TextInput
        placeholder="Email & Phone Number"
        style={[styles.input, focusedInput === "email" && styles.inputFocused]}
        onFocus={() => setFocusedInput("email")}
        onBlur={() => setFocusedInput(null)}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Full Name"
        style={[
          styles.input,
          focusedInput === "fullname" && styles.inputFocused,
        ]}
        onFocus={() => setFocusedInput("fullname")}
        onBlur={() => setFocusedInput(null)}
        value={fullname}
        onChangeText={setFullname}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={[
          styles.input,
          focusedInput === "password" && styles.inputFocused,
        ]}
        onFocus={() => setFocusedInput("password")}
        onBlur={() => setFocusedInput(null)}
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        placeholder="Confirm Password"
        secureTextEntry
        style={[
          styles.input,
          focusedInput === "confirmPassword" && styles.inputFocused,
        ]}
        onFocus={() => setFocusedInput("confirmPassword")}
        onBlur={() => setFocusedInput(null)}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <TouchableOpacity
        style={[
          styles.signUpButton,
          isFormFilled ? styles.signUpButtonFilled : null,
        ]}
        onPress={handleSignUp}
      >
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or Sign up With</Text>

      <View style={styles.socialIcons}>
        <FontAwesome
          name="google"
          size={24}
          color="#DB4437"
          style={styles.icon}
        />
        <FontAwesome
          name="facebook"
          size={24}
          color="#4267B2"
          style={styles.icon}
        />
        <FontAwesome
          name="cloud"
          size={24}
          color="#007AFF"
          style={styles.icon}
        />
      </View>

      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginBottom: 20,
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    marginBottom: 15,
    backgroundColor: "#F3F3F3",
  },
  inputFocused: {
    borderColor: "#00BFFF", // Light blue border on focus
  },
  signUpButton: {
    width: "100%",
    backgroundColor: "#91CDE7",
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 20,
  },
  signUpButtonFilled: {
    backgroundColor: "#2196F3",
  },
  signUpButtonText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  orText: {
    marginTop: 20,
    fontSize: 16,
    color: "#555252",
    marginBottom: 10,
  },
  socialIcons: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
  },
  icon: {
    marginHorizontal: 10,
  },
});

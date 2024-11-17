import { useRouter } from "expo-router";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  StatusBar,
  Animated,
} from "react-native";
import React, { useState } from "react";

import { Svg, Path } from "react-native-svg";

export default function signup() {
  const router = useRouter();
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [scale] = useState(new Animated.Value(1)); // Initial scale for icons

  const isFormFilled = email && fullname && password && confirmPassword;

  const handleSignUp = () => {
    if (isFormFilled) {
      router.push("/otp");
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

      {/* Social media icons with animation */}
      <View style={styles.socialIcons}>
        <TouchableOpacity
          style={styles.iconWrapper}
          activeOpacity={1}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
        >
          <Animated.View style={{ transform: [{ scale }] }}>
            <Svg width="30" height="29" viewBox="0 0 30 29" fill="none">
              <Path
                d="M29.2912 14.7079C29.2912 13.5422 29.1944 12.6914 28.9849 11.8092H15.362V17.071H23.3583C23.1972 18.3787 22.3266 20.348 20.392 21.6712L20.3648 21.8474L24.6721 25.1081L24.9706 25.1372C27.7112 22.6638 29.2912 19.0246 29.2912 14.7079Z"
                fill="#4285F4"
              />
              <Path
                d="M15.362 28.5717C19.2795 28.5717 22.5683 27.3113 24.9706 25.1373L20.392 21.6713C19.1667 22.5062 17.5223 23.0891 15.362 23.0891C11.5251 23.0891 8.26849 20.6158 7.10761 17.1971L6.93746 17.2113L2.45866 20.5984L2.40009 20.7575C4.78608 25.3892 9.68711 28.5717 15.362 28.5717Z"
                fill="#34A853"
              />
              <Path
                d="M7.1076 17.1971C6.80129 16.3149 6.62402 15.3695 6.62402 14.3928C6.62402 13.416 6.80129 12.4708 7.09148 11.5886L7.08337 11.4007L2.54844 7.95911L2.40007 8.02807C1.41668 9.95011 0.852417 12.1085 0.852417 14.3928C0.852417 16.6772 1.41668 18.8354 2.40007 20.7575L7.1076 17.1971Z"
                fill="#FBBC05"
              />
              <Path
                d="M15.362 5.69653C18.0866 5.69653 19.9244 6.84658 20.9724 7.80765L25.0673 3.90059C22.5524 1.61624 19.2796 0.214111 15.362 0.214111C9.68712 0.214111 4.78608 3.39643 2.40009 8.02812L7.0915 11.5886C8.2685 8.16997 11.5251 5.69653 15.362 5.69653Z"
                fill="#EB4335"
              />
            </Svg>
          </Animated.View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconWrapper}
          activeOpacity={1}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
        >
          <Animated.View style={{ transform: [{ scale }] }}>
            <Svg width="29" height="29" viewBox="0 0 29 29" fill="none">
              <Path
                d="M14.5772 28.6694C22.4349 28.6694 28.8049 22.2994 28.8049 14.4417C28.8049 6.58404 22.4349 0.214111 14.5772 0.214111C6.71953 0.214111 0.349609 6.58404 0.349609 14.4417C0.349609 22.2994 6.71953 28.6694 14.5772 28.6694Z"
                fill="#1977F3"
              />
              <Path
                d="M20.1155 18.5553L20.7457 14.4417H16.8001V11.7726C16.8001 10.6482 17.3504 9.54976 19.1191 9.54976H20.9138V6.04837C20.9138 6.04837 19.2851 5.77026 17.7285 5.77026C14.4792 5.77026 12.3544 7.73904 12.3544 11.3065V14.4417H8.74097V18.5553H12.3544V28.4973C13.0787 28.6113 13.821 28.6693 14.5773 28.6693C15.3336 28.6693 16.0759 28.6093 16.8001 28.4973V18.5553H20.1155Z"
                fill="white"
              />
            </Svg>
          </Animated.View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconWrapper}
          activeOpacity={1}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
        >
          <Animated.View style={{ transform: [{ scale }] }}>
            <Svg width="25" height="29" viewBox="0 0 25 29" fill="none">
              <Path
                d="M24.2112 22.3894C23.781 23.3835 23.2717 24.2985 22.6813 25.14C21.877 26.2869 21.2183 27.0808 20.7107 27.5218C19.9238 28.2454 19.0807 28.6159 18.1779 28.637C17.5298 28.637 16.7482 28.4527 15.8383 28.0786C14.9255 27.7061 14.0866 27.5218 13.3196 27.5218C12.5152 27.5218 11.6524 27.7061 10.7296 28.0786C9.80531 28.4527 9.06076 28.6476 8.49149 28.667C7.62575 28.7037 6.76281 28.3226 5.90144 27.5218C5.35168 27.0422 4.66405 26.2201 3.84025 25.0557C2.95642 23.8121 2.22979 22.37 1.66052 20.726C1.05086 18.9502 0.745239 17.2307 0.745239 15.5659C0.745239 13.659 1.1573 12.0142 1.98265 10.6359C2.63131 9.52887 3.49425 8.65556 4.57428 8.01448C5.65432 7.37337 6.8213 7.04666 8.07803 7.02576C8.76568 7.02576 9.66742 7.23848 10.788 7.65651C11.9055 8.07593 12.623 8.28865 12.9376 8.28865C13.1728 8.28865 13.9698 8.03993 15.3211 7.5441C16.5989 7.08427 17.6773 6.89386 18.5608 6.96886C20.9549 7.16207 22.7535 8.1058 23.9495 9.80604C21.8085 11.1034 20.7493 12.9204 20.7704 15.2513C20.7897 17.067 21.4484 18.5779 22.7429 19.7775C23.3294 20.3343 23.9847 20.7647 24.7136 21.0703C24.5557 21.5287 24.3886 21.9678 24.2112 22.3894ZM18.7207 0.783377C18.7207 2.20646 18.2007 3.53519 17.1644 4.76506C15.9139 6.22711 14.4012 7.07197 12.7609 6.93866C12.74 6.76793 12.7278 6.58824 12.7278 6.39942C12.7278 5.03327 13.3226 3.5712 14.3787 2.37577C14.906 1.7705 15.5766 1.26722 16.3899 0.865754C17.2013 0.470273 17.9689 0.251564 18.6908 0.214111C18.7119 0.404356 18.7207 0.594612 18.7207 0.783358V0.783377Z"
                fill="black"
              />
            </Svg>
          </Animated.View>
        </TouchableOpacity>
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
    padding: 30,
  },
  logo: {
    width: 60,
    height: 77,
    resizeMode: "contain",
    marginBottom: 20,
    marginTop: 30,
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 55.96,
    padding: 15,
    borderWidth: 1.5,
    borderColor: "#ccc",
    borderRadius: 14.23,
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
    marginBottom: 5,
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
    width: "80%",
  },
  iconWrapper: {
    backgroundColor: "#D3D3D3", // Màu nền xám
    width: 65,
    height: 65,
    borderRadius: 40, // Đảm bảo là hình tròn
    padding: 10, // Khoảng cách giữa biểu tượng và viền hình tròn
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    marginHorizontal: 10,
  },
});

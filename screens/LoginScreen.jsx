import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export const LoginScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleGoToRegisterScreen = () => navigation.navigate("Register");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="username"
        value={email}
        onChangeText={(text) => setEmail(text)}
      ></TextInput>
      <TextInput
        style={styles.textInput}
        placeholder="password"
        value={password}
        onChangeText={(text) => setPassword(text)}
      ></TextInput>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textInButton}>sign in</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={handleGoToRegisterScreen}
      >
        <Text style={styles.textInButton}>register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: 20,
  },
  textInput: {
    width: "80%",
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 15,
    borderRadius: 6,
  },
  button: {
    width: "40%",
    backgroundColor: "royalblue",
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  textInButton: {
    textAlign: "center",
    color: "white",
  },
});

import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../components/Navigation";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;
type Props = {
  navigation: HomeScreenNavigationProp;
};

export default function HomeScreen({ navigation }: Props) {
  const [email, setEmail] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.heading}>Get started with Wrapbook</Text>
        <Text style={styles.paragraph}>
          Tackle timecards, payroll, and insurance with Wrapbook, a powerful and
          easy to use platform for managing productions.
        </Text>
        <TextInput
          style={styles.email}
          placeholder="Enter your email address"
          value={email}
          keyboardType="email-address"
          onChangeText={setEmail}
        />
        <TouchableOpacity
          onPress={() => {
            if (email.length > 3) {
              navigation.navigate("Dashboard");
            } else {
              Alert.alert("Error", "Please enter a valid email address");
            }
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Continue to Wrapbook</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F6FB",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  inner: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 12,
    margin: 12,
    borderRadius: 5,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 20,
    paddingVertical: 6,
  },
  paragraph: {
    paddingVertical: 6,
    fontSize: 16,
    lineHeight: 24,
  },
  email: {
    padding: 12,
    borderWidth: 0.5,
    borderRadius: 5,
    marginVertical: 6,
  },
  button: {
    alignItems: "center",
    padding: 12,
    borderRadius: 5,
    backgroundColor: "#A2A8B6",
    marginVertical: 6,
  },
  buttonText: {
    color: "#fff",
  },
});

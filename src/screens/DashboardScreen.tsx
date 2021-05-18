import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { People } from "../components/People";

export default function DashboardScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your company dashboard</Text>
      <Text style={styles.intro}>
        Manage people, view history & see how your projects are doing.
      </Text>
      <People />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F6FB",
    padding: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  intro: {
    marginVertical: 10,
    fontSize: 16,
    lineHeight: 24,
  },
});

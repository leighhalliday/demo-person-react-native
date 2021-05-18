import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export interface PersonData {
  id: number;
  name: string;
  email: string;
}

interface PersonProps {
  personData: PersonData;
}

export function Person({ personData }: PersonProps) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("PersonDetails", { userId: personData.id });
      }}
    >
      <View style={styles.container}>
        <View style={styles.top}>
          <Image
            style={styles.avatar}
            source={{ uri: "https://i.pravatar.cc/300" }}
          />
          <View style={styles.info}>
            <Text style={styles.name}>{personData.name}</Text>
            <Text style={styles.role}>Employee - Human Resources</Text>
          </View>
          <Text style={styles.arrow}>&gt;</Text>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.status}>✅ Account Created</Text>
          <Text style={styles.status}>✅ Onboarded</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  top: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  bottom: {
    flex: 1,
    flexDirection: "row",
    marginTop: 15,
  },
  info: {
    padding: 5,
    paddingLeft: 15,
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
  },
  role: {
    color: "#777",
  },
  arrow: {
    paddingLeft: 15,
    color: "#777",
  },
  avatar: {
    height: 45,
    width: 45,
    borderRadius: 50,
  },
  status: {
    paddingRight: 10,
  },
});

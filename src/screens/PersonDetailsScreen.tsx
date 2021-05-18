import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../components/Navigation";

type PersonDetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "PersonDetails"
>;
type Props = {
  navigation: PersonDetailsScreenNavigationProp;
  route: {
    params: {
      userId: number;
    };
  };
};

export default function PersonDetailsScreen({ route, navigation }: Props) {
  const { userId } = route.params;
  return (
    <View style={styles.container}>
      <Text>ID: {userId}</Text>
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
});

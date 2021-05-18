import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import useSWR from "swr";
import { Person, PersonData } from "./Person";

async function fetcher() {
  const url = "https://castandcrew.herokuapp.com/people";
  const response = await fetch(url);
  return response.json();
}

export function People() {
  const { data, error } = useSWR("people", fetcher);

  if (error) {
    return (
      <View>
        <Text>Error...</Text>
      </View>
    );
  }
  if (!data) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View>
      <FlatList<PersonData>
        style={styles.flatList}
        data={data.collection}
        keyExtractor={(person) => person.id.toString()}
        renderItem={(person) => <Person personData={person.item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  flatList: {},
});

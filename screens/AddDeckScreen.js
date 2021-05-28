import React from "react";
import { StyleSheet, StatusBar, Text, View } from "react-native";

import Deck from "../components/Deck";
import Colors from "../constants/Colors";

const AddDeckScreen = (props) => {
  const name = "hello";
  return (
    <View>
      <StatusBar barStyle="light-content" backgroundColor={Colors.dark} />
      <Text style={styles.title}>Edit Deck</Text>
      <Deck
        onPress={() => {
          props.navigation.navigate("EditDeck", { name });
        }}
      />
    </View>
  );
};

export default AddDeckScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    margin: 20,
    color: Colors.text,
  },
});

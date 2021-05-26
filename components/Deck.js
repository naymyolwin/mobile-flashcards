import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";

const Deck = () => {
  return (
    <View style={styles.container}>
      <View style={styles.deck}>
        <Text>Deck</Text>
      </View>
    </View>
  );
};

export default Deck;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,

    shadowColor: Colors.dark,
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.58,
    shadowRadius: 11.95,
  },

  deck: {
    width: "80%",
    height: 200,
    borderWidth: 1,
    borderColor: Colors.dark,
    backgroundColor: Colors.light,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    elevation: 20,
  },
});

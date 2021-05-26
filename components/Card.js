import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";

const Card = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text>Card</Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,

    shadowColor: Colors.light,
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.58,
    shadowRadius: 11.95,
  },
  card: {
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

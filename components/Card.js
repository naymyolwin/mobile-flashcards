import React from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";

const Card = (props) => {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text>{props.text}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,

    shadowColor: "#ccc",
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
    borderColor: "#ccc",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    elevation: 20,
  },
});

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";
import MyButton from "./MyButton";

const Score = ({ route, navigation }) => {
  const { score } = route.params;
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>YOUR SCORE</Text>

        <Text style={[styles.score, { color: score > 80 ? "green" : "red" }]}>
          {score} %
        </Text>
      </View>
      <MyButton
        title="Go Home"
        onPress={() => {
          navigation.navigate("HomeScreen");
        }}
        style={{ backgroundColor: "green", width: "60%" }}
      />
    </View>
  );
};

export default Score;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    margin: 20,
    color: Colors.text,
  },
  score: {
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
    margin: 20,
  },
});

import React from "react";
import { StyleSheet, StatusBar, Text, View } from "react-native";
import Deck from "../components/Deck";
import Colors from "../constants/Colors";

const HomeScreen = (props) => {
  const name = "hello";
  return (
    <View>
      <StatusBar barStyle="light-content" backgroundColor={Colors.dark} />
      <Text style={styles.title}>Start Quiz</Text>
      <Deck
        onPress={() => {
          props.navigation.navigate("Quiz", { name });
        }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    margin: 20,
    color: Colors.text,
  },
});

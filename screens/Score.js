import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";
import MyButton from "../components/MyButton";
import {
  clearLocalNotification,
  setLocalNotification,
} from "../utils/notifications";

const Score = ({ route, navigation }) => {
  const { score, deckId } = route.params;

  useEffect(() => {
    clearLocalNotification();
    setLocalNotification();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>YOUR SCORE</Text>

        <Text style={[styles.score, { color: score > 80 ? "green" : "red" }]}>
          {score} %
        </Text>
      </View>
      <View style={styles.buttons}>
        <MyButton
          title="Go Home"
          onPress={() => {
            navigation.navigate("HomeScreen");
          }}
          style={{ backgroundColor: "green", width: "60%" }}
        />
        <MyButton
          title="Start Again"
          style={{ backgroundColor: "purple", width: "60%" }}
          onPress={() => {
            navigation.navigate("Quiz", {
              deckId: deckId,
            });
          }}
        />
      </View>
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
  buttons: {
    width: "100%",
  },
});

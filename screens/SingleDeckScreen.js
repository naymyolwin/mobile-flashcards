import React from "react";
import { useSelector } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import MyButton from "../components/MyButton";
import Colors from "../constants/Colors";
import Card from "../components/Card";

const SingleDeckScreen = ({ route, navigation }) => {
  const { deckId } = route.params;

  const decks = useSelector((state) => state.decks.decks);
  const deck = decks[deckId];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Deck Name : {deck.name}</Text>
        <Text style={styles.subtitle}>{deck.card.length} Cards</Text>
      </View>
      <View style={styles.buttons}>
        <MyButton
          title="Start Quiz"
          disabled={deck.card.length === 0 ? true : false}
          style={{ backgroundColor: "green", width: "60%" }}
          onPress={() => {
            navigation.navigate("Quiz", {
              deckId: deckId,
            });
          }}
        />
        <MyButton
          title="Add Card"
          style={{ backgroundColor: "grey", width: "60%" }}
          onPress={() => {
            navigation.navigate("AddCard", {
              deckId: route.params,
            });
          }}
        />
      </View>
    </View>
  );
};

export default SingleDeckScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  header: {
    padding: 20,
    width: "80%",
    //height: 100,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#ccc",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.58,
    shadowRadius: 11.95,
    elevation: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    margin: 20,
    color: Colors.text,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    margin: 20,
    color: Colors.text,
  },
  buttons: {
    width: "100%",
  },
});

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import MyButton from "../components/MyButton";
import MyTextInput from "../components/MyTextInput";
import { updateDeck } from "../store/updateDeck";
import { deckActions } from "../store/deckSlice";
import { deleteDeck } from "../store/deleteDeck";
import Colors from "../constants/Colors";

const EditDeck = ({ route, navigation }) => {
  const { deckId } = route.params;

  const decks = useSelector((state) => state.decks.decks);
  const dispatch = useDispatch();

  const [deck, setDeck] = useState(decks[deckId]?.name);
  const empty = decks[deckId]?.card.length === 0 ? true : false;

  const saveHandler = () => {
    updateDeck(deckId, deck);
    dispatch(deckActions.updateDeck({ id: deckId, name: deck }));
    navigation.navigate("AddDeck");
  };

  const deleteHandler = (event) => {
    event.preventDefault();
    deleteDeck(deckId);
    dispatch(deckActions.deleteDeck({ id: deckId }));
    navigation.navigate("AddDeck");
  };

  return (
    <View>
      <Text style={styles.title}>Update or Delete Deck</Text>
      <MyTextInput placeholder="Deck Name" input={deck} setInput={setDeck} />
      <View style={styles.buttons}>
        <MyButton
          style={{ backgroundColor: "green", width: "60%" }}
          title="Save"
          onPress={saveHandler}
        />

        <MyButton
          disabled={empty ? false : true}
          style={{ backgroundColor: empty ? "red" : "grey", width: "60%" }}
          title="Delete"
          onPress={deleteHandler}
        />
      </View>
    </View>
  );
};

export default EditDeck;

const styles = StyleSheet.create({
  buttons: {
    padding: 10,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    margin: 20,
    color: Colors.text,
  },
});

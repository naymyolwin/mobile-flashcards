import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import MyButton from "../components/MyButton";
import MyTextInput from "../components/MyTextInput";
import { useDispatch } from "react-redux";

import { setDecks } from "../store/setDecks";
import Colors from "../constants/Colors";
import { deckActions } from "../store/deckSlice";
import { createNewDeck } from "../store/createNewDeck";

const AddDeckFormScreen = ({ navigation }) => {
  const [deck, setDeck] = useState("");

  const dispatch = useDispatch();

  const addDeckHandler = () => {
    const newDeck = createNewDeck(deck);
    dispatch(deckActions.addDeck(newDeck));
    setDecks(newDeck);
    setDeck("");
    navigation.goBack();
  };
  return (
    <ScrollView>
      <View>
        <Text style={styles.text}>Please Enter the new Deck Name</Text>
        <MyTextInput placeholder="Deck Name" input={deck} setInput={setDeck} />
        <MyButton
          disabled={deck === "" ? true : false}
          title="Add"
          style={{ backgroundColor: deck === "" ? "grey" : Colors.light }}
          onPress={addDeckHandler}
        />
      </View>
    </ScrollView>
  );
};

export default AddDeckFormScreen;

const styles = StyleSheet.create({
  text: {
    padding: 20,
    textAlign: "center",
    fontSize: 18,
    color: Colors.text,
  },
});

import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import MyButton from "../components/MyButton";
import MyTextInput from "../components/MyTextInput";
import { useDispatch } from "react-redux";

import { setDecks } from "../store/setItems";
import Colors from "../constants/Colors";
import { deckActions } from "../store/deckSlice";
import { createNewDeck } from "../store/createNewDeck";

const AddDeckFormScreen = (props) => {
  const [deckInput, setDeckInput] = useState("");

  const dispatch = useDispatch();

  const addDeckHandler = () => {
    const newDeck = createNewDeck(deckInput);
    dispatch(deckActions.addDeck(newDeck));
    setDecks(newDeck);
    setDeckInput("");
    props.navigation.navigate("AddDeck");
  };
  return (
    <ScrollView>
      <View>
        <Text style={styles.text}>Please Enter the new Deck Name</Text>
        <MyTextInput
          placeholder="Deck Name"
          input={deckInput}
          setDeckInput={setDeckInput}
        />
        <MyButton
          title="Add"
          style={{ backgroundColor: Colors.light }}
          //deckInput={deckInput}
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

import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";

import MyButton from "../components/MyButton";
import MyTextInput from "../components/MyTextInput";
import Colors from "../constants/Colors";
import { cardActions } from "../store/cardSlice";
import { createNewCard } from "../store/createNewCard";
import { deckActions } from "../store/deckSlice";
import { setCard } from "../store/setCard";

const AddCardScreen = ({ route, navigation }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const { deckId } = route.params;
  const dispatch = useDispatch();

  const onSaveHandler = () => {
    const newCard = createNewCard(question, answer, deckId.deckId);
    const cardId = Object.keys(newCard)[0];
    // dispatch(deckActions.addDeck(newDeck));
    // setDecks(newDeck);
    dispatch(cardActions.addCard(newCard));
    dispatch(deckActions.addNewCard({ cardId: cardId, deckId: deckId.deckId }));
    setCard(newCard);
    setAnswer("");
    setQuestion("");
    navigation.navigate("EditDeck");
  };

  return (
    <View>
      <Text style={styles.title}>Add Card</Text>
      {/* <Text>{deckId.deckId}</Text> */}
      <ScrollView>
        <View>
          <MyTextInput
            placeholder="Question"
            input={question}
            setInput={setQuestion}
          />
          <MyTextInput
            placeholder="Answer"
            input={answer}
            setInput={setAnswer}
          />
        </View>
        <View style={styles.container}>
          <MyButton
            title="Save"
            style={{ backgroundColor: "green", width: "60%" }}
            onPress={onSaveHandler}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default AddCardScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    margin: 20,
    color: Colors.text,
  },
});

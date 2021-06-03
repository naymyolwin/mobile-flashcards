import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import MyButton from "../components/MyButton";
import MyTextInput from "../components/MyTextInput";
import Colors from "../constants/Colors";
import { updateCard } from "../store/updateCard";
import { cardActions } from "../store/cardSlice";
import { deleteCard } from "../store/deleteCard";
import { deckActions } from "../store/deckSlice";

const EditCardScreen = ({ route, navigation }) => {
  const { cardId } = route.params;
  const dispatch = useDispatch();

  const card = useSelector((state) => state.cards.cards);

  const [question, setQuestion] = useState(card[cardId]?.question);
  const [answer, setAnswer] = useState(card[cardId]?.answer);
  const deck = card[cardId]?.deck;

  const saveHandler = () => {
    updateCard(deck, cardId, question, answer);
    dispatch(
      cardActions.updateCard({
        deck: deck,
        cardId: cardId,
        question: question,
        answer: answer,
      })
    );

    navigation.navigate("EditDeck");
  };

  const deleteHandler = () => {
    deleteCard(deck, cardId);
    dispatch(cardActions.deleteCard({ cardId: cardId }));
    dispatch(
      deckActions.deleteCard({
        deck: deck,
        cardId: cardId,
      })
    );
    navigation.navigate("EditDeck");
  };

  return (
    <View>
      <Text style={styles.title}>Edit Card Form</Text>
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
            title="Delete"
            style={{ backgroundColor: Colors.light, width: "60%" }}
            onPress={deleteHandler}
          />
          <MyButton
            title="Save"
            style={{ backgroundColor: "green", width: "60%" }}
            onPress={saveHandler}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default EditCardScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    margin: 20,
    color: Colors.text,
  },
});

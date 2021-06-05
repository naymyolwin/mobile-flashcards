import React from "react";
import { useSelector } from "react-redux";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Card from "../components/Card";
import Colors from "../constants/Colors";

const EditDeckScreen = ({ route, navigation }) => {
  const { deckId } = route.params;

  const decks = useSelector((state) => state.decks.decks);
  const cards = useSelector((state) => state.cards.cards);

  const cardList = decks[deckId].card;

  const cardsArray = cardList.map((c) => {
    return cards[c];
  });

  const renderItem = ({ item }) => (
    <Card
      text={item.question}
      onPress={() => {
        navigation.navigate("EditCard", {
          cardId: item.id,
          deckId: deckId,
        });
      }}
    />
  );

  return (
    <View>
      <Text style={styles.title}>Add or Edit Card</Text>
      <FlatList
        data={cardsArray}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 150 }}
      />
    </View>
  );
};

export default EditDeckScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    margin: 20,
    color: Colors.text,
  },
});

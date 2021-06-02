import React from "react";
import { StyleSheet, Text, View } from "react-native";

const EditDeck = ({ route, navigation }) => {
  const { deckId } = route.params;
  return (
    <View>
      <Text>Update or Delete Deck</Text>
      <Text>{deckId}</Text>
    </View>
  );
};

export default EditDeck;

const styles = StyleSheet.create({});

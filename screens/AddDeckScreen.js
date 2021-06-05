import React from "react";
import { useSelector } from "react-redux";
import {
  FlatList,
  StyleSheet,
  StatusBar,
  Text,
  View,
  SafeAreaView,
} from "react-native";

import Deck from "../components/Deck";
import Colors from "../constants/Colors";

const AddDeckScreen = ({ navigation }) => {
  const decks = useSelector((state) => state.decks.decks);

  const decksArray = Object.values(decks).map((deck) => deck);

  const renderItem = ({ item }) => (
    <Deck
      title={item.name}
      numberOfCard={item.card.length}
      onPress={() => {
        navigation.navigate("EditDeck", {
          deckId: item.id,
        });
      }}
      edit={true}
      onEdit={() => {
        navigation.navigate("UpdateDeck", {
          deckId: item.id,
        });
      }}
      // onPress={() => {
      //   props.navigation.navigate("EditDeck");
      // }}
    />
  );

  return (
    <View>
      <StatusBar barStyle="light-content" backgroundColor={Colors.dark} />
      <Text style={styles.title}>Edit Deck</Text>
      <SafeAreaView>
        <FlatList
          data={decksArray}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 150 }}
        />
      </SafeAreaView>
    </View>
  );
};

export default AddDeckScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    margin: 20,
    color: Colors.text,
  },
});

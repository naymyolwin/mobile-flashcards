import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  FlatList,
  StyleSheet,
  StatusBar,
  Text,
  View,
  SafeAreaView,
} from "react-native";

import { fetchData } from "../store/fetchAction";
import Deck from "../components/Deck";
import Colors from "../constants/Colors";

const HomeScreen = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const decks = useSelector((state) => state.decks.decks);

  const decksArray = Object.values(decks).map((deck) => deck);

  const renderItem = ({ item }) => (
    <Deck
      title={item.name}
      numberOfCard={item.card.length}
      onPress={() => {
        props.navigation.navigate("Quiz");
      }}
    />
  );
  return (
    <View>
      <StatusBar barStyle="light-content" backgroundColor={Colors.dark} />
      <Text style={styles.title}>Start Quiz</Text>
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

export default HomeScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    margin: 20,
    color: Colors.text,
  },
});
